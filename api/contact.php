<?php
/**
 * Endpoint de contato — produção (Plesk / httpdocs/api/contact.php)
 *
 * Segurança:
 * - CORS restrito a origens conhecidas
 * - Token interno opcional (.contact_token) para chamadas server-side
 * - Rate limit por IP
 * - Honeypot, sanitização, sem exposição de senha/erros SMTP
 * - .smtp_password e contatos.txt bloqueados via .htaccess
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store');

$ALLOWED_ORIGINS = [
    'https://jrtechnologysolutions.com.br',
    'https://www.jrtechnologysolutions.com.br',
    'http://localhost:3000',
    'http://localhost:3001',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, $ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-JR-Contact-Token');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

/** Resposta genérica — nunca vaza detalhes internos */
function respond(int $code, bool $success, string $message): void
{
    http_response_code($code);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

function clientIp(): string
{
    $xff = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($xff !== '') {
        $parts = explode(',', $xff);
        return trim($parts[0]) ?: 'unknown';
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

function stripInject(string $value): string
{
    return str_replace(["\r", "\n", "\0"], '', $value);
}

/** Contagem de caracteres sem depender da extensão mbstring */
function textLen(string $value): int
{
    if (function_exists('mb_strlen')) {
        return (int) mb_strlen($value, 'UTF-8');
    }
    return strlen($value);
}

/** Rate limit simples em arquivo (5 / 15 min por IP) */
function rateLimitOk(string $ip): bool
{
    $dir = __DIR__ . '/.rate';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
        @file_put_contents(
            $dir . '/.htaccess',
            "Require all denied\nOptions -Indexes\n"
        );
    }
    $file = $dir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $window = 15 * 60;
    $max = 5;

    $data = ['count' => 0, 'reset' => $now + $window];
    if (is_readable($file)) {
        $raw = json_decode((string) file_get_contents($file), true);
        if (is_array($raw) && isset($raw['count'], $raw['reset'])) {
            $data = $raw;
        }
    }

    if ($data['reset'] <= $now) {
        $data = ['count' => 1, 'reset' => $now + $window];
    } else {
        if ((int) $data['count'] >= $max) {
            return false;
        }
        $data['count'] = (int) $data['count'] + 1;
    }

    @file_put_contents($file, json_encode($data), LOCK_EX);
    return true;
}

// Token interno: obrigatório só se a Origin NÃO estiver na allowlist
$tokenFile = __DIR__ . '/.contact_token';
$originOk = $origin !== '' && in_array($origin, $ALLOWED_ORIGINS, true);
if (!$originOk && is_readable($tokenFile)) {
    $expected = trim((string) file_get_contents($tokenFile));
    $got = $_SERVER['HTTP_X_JR_CONTACT_TOKEN'] ?? '';
    if ($expected === '' || !hash_equals($expected, $got)) {
        respond(401, false, 'Não autorizado');
    }
}

if (!rateLimitOk(clientIp())) {
    respond(429, false, 'Muitas tentativas. Aguarde alguns minutos.');
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 32_768) {
    respond(413, false, 'Payload muito grande');
}

$input = file_get_contents('php://input');
if ($input === false || strlen($input) > 32_768) {
    respond(413, false, 'Payload muito grande');
}

$data = json_decode($input, true);
if (!$data || json_last_error() !== JSON_ERROR_NONE) {
    respond(400, false, 'Erro ao processar dados');
}

// Honeypot
if (!empty($data['website'])) {
    respond(200, true, 'Mensagem enviada com sucesso!');
}

if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    respond(400, false, 'Campos obrigatórios não preenchidos');
}

$name = htmlspecialchars(trim((string) $data['name']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim((string) $data['email']), FILTER_SANITIZE_EMAIL) ?: '';
$phone = isset($data['phone'])
    ? htmlspecialchars(trim((string) $data['phone']), ENT_QUOTES, 'UTF-8')
    : '';
$company = isset($data['company'])
    ? htmlspecialchars(trim((string) $data['company']), ENT_QUOTES, 'UTF-8')
    : '';
$message = htmlspecialchars(trim((string) $data['message']), ENT_QUOTES, 'UTF-8');

$name = stripInject($name);
$email = stripInject($email);
$phone = stripInject($phone);
$company = stripInject($company);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, false, 'Email inválido');
}

if (textLen($name) < 2 || textLen($name) > 100) {
    respond(400, false, 'Dados inválidos');
}
if (textLen($message) < 10 || textLen($message) > 2000) {
    respond(400, false, 'Dados inválidos');
}
if (textLen($company) > 120) {
    respond(400, false, 'Dados inválidos');
}

$to = 'contato@jrtechnologysolutions.com.br';
$fromEmail = 'contato@jrtechnologysolutions.com.br';
$fromName = 'Formulário Site';
$subject = stripInject('Novo contato do site - ' . $name);

$emailBody = "Você recebeu uma nova mensagem do formulário de contato do site.\n\n";
$emailBody .= "Nome: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Telefone: " . ($phone !== '' ? $phone : 'Não informado') . "\n";
$emailBody .= "Empresa: " . ($company !== '' ? $company : 'Não informado') . "\n\n";
$emailBody .= "Mensagem:\n$message\n";

function saveToFile(
    string $name,
    string $email,
    string $phone,
    string $company,
    string $message,
    string $logInfo = ''
): void {
    $logFile = __DIR__ . '/contatos.txt';
    $logEntry = date('Y-m-d H:i:s')
        . " | Nome: $name | Email: $email | Telefone: $phone | Empresa: $company | Mensagem: $message\n";
    if ($logInfo !== '') {
        $safe = preg_replace('/(pass(word)?|senha|token|secret)\s*[:=]\s*\S+/i', '$1=[REDACTED]', $logInfo) ?? $logInfo;
        $logEntry .= "Log: $safe\n";
    }
    $logEntry .= str_repeat('-', 80) . "\n";
    @file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    @chmod($logFile, 0600);
}

function trySMTP(
    string $host,
    int $port,
    string $username,
    string $password,
    string $to,
    string $subject,
    string $body,
    string $fromEmail,
    string $fromName,
    string $replyTo,
    bool $useSSL = false
): array {
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ]);

    $socket = @stream_socket_client(
        ($useSSL ? 'ssl://' : 'tcp://') . "$host:$port",
        $errno,
        $errstr,
        8,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!$socket) {
        return ['success' => false, 'error' => 'smtp_connect'];
    }

    stream_set_timeout($socket, 5);

    $response = @fgets($socket, 515);
    if (!$response) {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_no_response'];
    }

    $code = substr($response, 0, 3);
    if ($code !== '220' && $code !== '250') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_greeting'];
    }

    $ehloHost = 'jrtechnologysolutions.com.br';
    @fputs($socket, "EHLO $ehloHost\r\n");
    $timeout = time() + 4;
    while (time() < $timeout && ($line = @fgets($socket, 515))) {
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    if (!$useSSL && $port === 587) {
        @fputs($socket, "STARTTLS\r\n");
        $response = @fgets($socket, 515);
        if (!$response || substr($response, 0, 3) !== '220') {
            @fclose($socket);
            return ['success' => false, 'error' => 'smtp_starttls'];
        }
        $crypto = @stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if (!$crypto) {
            @fclose($socket);
            return ['success' => false, 'error' => 'smtp_tls'];
        }
        @fputs($socket, "EHLO $ehloHost\r\n");
        $timeout = time() + 4;
        while (time() < $timeout && ($line = @fgets($socket, 515))) {
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
    }

    @fputs($socket, "AUTH LOGIN\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '334') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_auth'];
    }

    @fputs($socket, base64_encode($username) . "\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '334') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_user'];
    }

    @fputs($socket, base64_encode($password) . "\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '235') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_pass'];
    }

    @fputs($socket, "MAIL FROM: <$fromEmail>\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '250') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_from'];
    }

    @fputs($socket, "RCPT TO: <$to>\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '250') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_rcpt'];
    }

    @fputs($socket, "DATA\r\n");
    $response = @fgets($socket, 515);
    if (!$response || substr($response, 0, 3) !== '354') {
        @fclose($socket);
        return ['success' => false, 'error' => 'smtp_data'];
    }

    $headers = "From: $fromName <$fromEmail>\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "Subject: $subject\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= 'Date: ' . date('r') . "\r\n";
    $headers .= "\r\n";

    @fputs($socket, $headers . $body . "\r\n.\r\n");
    $response = @fgets($socket, 515);

    @fputs($socket, "QUIT\r\n");
    @fclose($socket);

    if ($response && substr($response, 0, 3) === '250') {
        return ['success' => true];
    }

    return ['success' => false, 'error' => 'smtp_send'];
}

saveToFile($name, $email, $phone, $company, $message, 'start');

ini_set('sendmail_from', $fromEmail);
$headers = "From: $fromName <$fromEmail>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

error_clear_last();
$mailResult = @mail($to, $subject, $emailBody, $headers);

if ($mailResult) {
    saveToFile($name, $email, $phone, $company, $message, 'mail_ok');
    respond(200, true, 'Mensagem enviada com sucesso!');
}

$smtpHost = 'smtp.appuni.com.br';
$smtpUsername = 'contato@jrtechnologysolutions.com.br';
$smtpPassword = '';

$passwordFile = __DIR__ . '/.smtp_password';
if (is_readable($passwordFile)) {
    $smtpPassword = trim((string) file_get_contents($passwordFile));
    @chmod($passwordFile, 0600);
}

if ($smtpPassword === '') {
    saveToFile($name, $email, $phone, $company, $message, 'smtp_password_missing');
    respond(200, true, 'Mensagem recebida! Entraremos em contato em breve.');
}

$attempts = [
    ['port' => 465, 'ssl' => true, 'name' => '465'],
    ['port' => 587, 'ssl' => false, 'name' => '587'],
];

$lastError = '';

foreach ($attempts as $attempt) {
    $result = trySMTP(
        $smtpHost,
        $attempt['port'],
        $smtpUsername,
        $smtpPassword,
        $to,
        $subject,
        $emailBody,
        $fromEmail,
        $fromName,
        $email,
        $attempt['ssl']
    );

    if (!empty($result['success'])) {
        saveToFile($name, $email, $phone, $company, $message, 'smtp_ok_' . $attempt['name']);
        $smtpPassword = '';
        respond(200, true, 'Mensagem enviada com sucesso!');
    }

    $lastError = (string) ($result['error'] ?? 'smtp_fail');
    saveToFile($name, $email, $phone, $company, $message, 'smtp_fail_' . $attempt['name'] . '_' . $lastError);
}

$smtpPassword = '';
saveToFile($name, $email, $phone, $company, $message, 'all_failed_' . $lastError);
respond(200, true, 'Mensagem recebida! Entraremos em contato em breve.');
