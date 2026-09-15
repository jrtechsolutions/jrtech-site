# Extração de referência HTML → Next.js

Gerado a partir dos HTMLs em `c:\Users\paulo.junior\Downloads\`, com base64 removido via Node (arquivos stripped em `_ref-stripped/`).

**Nota importante:** `desenvolvimento-v1.html` **existe** nos Downloads (~3,5 MB). Conteúdo de Desenvolvimento foi extraído dele (não foi necessário usar só o modelo/v2).

**Tokens de cor comuns (todas as páginas):**
| Token | Hex | Uso |
|-------|-----|-----|
| Navy / texto | `#16253d` | títulos, nav, textos fortes |
| Fundo página | `#eef2f5` | background geral |
| Borda / linha | `#d4dce3` | divisores, cards |
| Texto secundário | `#5a6b80` / `#3d4e63` / `#8aa0b8` | leads, meta |
| Accent laranja | `#e8720c` | CTA, kicker, hover |
| Accent claro | `#f5a25c` / `#fff1e4` / `#f6d9bb` | badges hover / soft |
| Verde status | `#4ade80` / `#1e7a46` | monitoramento / check |
| Overlay hero base | `rgba(13,21,32,*)` | photo-hero gradient |

**Hero photo padrão (soluções + sobre):**
- Altura: `520px`
- Overlay: `linear-gradient(90deg, rgba(13,21,32,0) 0%, …0.35 38%, …0.85 58%, …0.97 100%)` (sobre: stops 0/42%/62%/97%)
- `object-fit: cover`
- `object-position` varia por página (ver cada JSON)

**Nav comum:** logo | píldula `01 Soluções · 02 Projetos · 03 Sobre · 04 Contato` | CTA `Solicitar diagnóstico`

---

## 1. `/solucoes` — hub-solucoes-v3.html

```json
{
  "route": "/solucoes",
  "source": "hub-solucoes-v3.html",
  "h1": "Soluções de TI para empresas em São Paulo",
  "kicker": "Soluções",
  "intro": "A JR Technology Solutions atua em cinco pilares. Escolha o que combina com o momento da sua empresa — cada página aprofunda o diagnóstico e o que entregamos.",
  "metaSuggestions": {
    "title": "Soluções de TI para empresas em São Paulo | JR Tech",
    "description": "A JR Technology Solutions atua em cinco pilares. Escolha o que combina com o momento da sua empresa — cada página aprofunda o diagnóstico."
  },
  "hero": {
    "type": "page-hero (sem photo-hero)",
    "height": null,
    "overlay": null,
    "structure": ["kicker", "h1", "lead p"]
  },
  "sections": [
    {
      "id": "tech-marquee",
      "title": "Tecnologias que usamos nessas soluções",
      "type": "marquee",
      "items": ["Linux", "Docker", "AWS", "Azure", "GCP", "Grafana", "Prometheus", "PostgreSQL", "APIs REST", "Redes e Firewall", "CI/CD", "Backups automatizados"]
    },
    {
      "id": "cards",
      "title": null,
      "type": "cards-grid 3 colunas (sol-card)",
      "cards": [
        {
          "tag": "Solução · Infraestrutura",
          "icon": "Server (Lucide)",
          "title": "Infraestrutura e Cloud",
          "description": "Ambientes estáveis e monitorados, com cloud alinhada ao uso real.",
          "cta": "Ver solução",
          "hrefSuggested": "/solucoes/infraestrutura"
        },
        {
          "tag": "Solução · Segurança",
          "icon": "Shield (Lucide)",
          "title": "Segurança da Informação",
          "description": "Proteção em camadas desde o planejamento, não depois do incidente.",
          "cta": "Ver solução",
          "hrefSuggested": "/solucoes/seguranca"
        },
        {
          "tag": "Solução · Desenvolvimento",
          "icon": "Code (Lucide)",
          "title": "Desenvolvimento",
          "description": "Sistemas e integrações feitos para o processo real da empresa.",
          "cta": "Ver solução",
          "hrefSuggested": "/solucoes/desenvolvimento"
        },
        {
          "tag": "Solução · Governança",
          "icon": "Clipboard (Lucide)",
          "title": "Governança de Tecnologia",
          "description": "Documentação e processos que sobrevivem à troca de equipe.",
          "cta": "Ver solução",
          "hrefSuggested": "/solucoes/governanca"
        },
        {
          "tag": "Solução · Suporte",
          "icon": "Headset (Lucide)",
          "title": "Suporte e Gestão de TI",
          "description": "Acompanhamento contínuo com quem já conhece seu ambiente.",
          "cta": "Ver solução",
          "hrefSuggested": "/solucoes/suporte-gestao-ti"
        }
      ]
    },
    {
      "id": "cta-block",
      "text": "Prefere começar pelo diagnóstico geral? Volte à home e fale direto conosco.",
      "cta": { "label": "Solicitar diagnóstico", "href": "#" }
    }
  ],
  "importantClasses": ["page-hero", "kicker", "tech-marquee-section", "tech-pill", "cards-grid", "sol-card", "icon-badge", "cta-block", "nav-pill"],
  "links": [
    { "text": "Solicitar diagnóstico", "class": "cta / btn" },
    { "text": "Ver solução", "class": "go", "perCard": true }
  ],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138, "context": "nav .brand img" }
  ],
  "designNotes": "Label-bar do HTML é nota de design (não é conteúdo da página). Cards: badge de ícone muda de laranja-claro para navy no hover; seta em 'Ver solução' desliza."
}
```

---

## 2. `/solucoes/infraestrutura` — infra-v9.html

> **Conteúdo do v9 é enxuto:** só `photo-hero` + `compare-section`.  
> Abaixo, JSON do **v9 (fonte oficial pedida)** + bloco suplementar do **modelo / paginas-solucao-v2** (includes, outcomes, proof, FAQ) para implementação completa se desejado.

```json
{
  "route": "/solucoes/infraestrutura",
  "source": "infra-v9.html",
  "h1": "Infraestrutura e Cloud para empresas em São Paulo",
  "kicker": "Solução · Infraestrutura",
  "intro": "Ambientes estáveis, monitorados e preparados para crescer. Trabalhamos com Linux, Docker e provedores cloud conforme a necessidade real do negócio.",
  "metaSuggestions": {
    "title": "Infraestrutura e Cloud para empresas em São Paulo | JR Tech",
    "description": "Ambientes estáveis, monitorados e preparados para crescer. Trabalhamos com Linux, Docker e provedores cloud conforme a necessidade real do negócio."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectFit": "cover",
    "objectPosition": "20% 30%",
    "overlay": "linear-gradient(90deg, rgba(13,21,32,0) 0%, rgba(13,21,32,0.35) 38%, rgba(13,21,32,0.85) 58%, rgba(13,21,32,0.97) 100%)",
    "imgAlt": "Especialista JR acompanhando migração de servidor para nuvem, com painéis de monitoramento Grafana",
    "ctas": [
      { "label": "Solicitar diagnóstico", "class": "btn-primary" },
      { "label": "Falar no WhatsApp", "class": "btn-outline" }
    ]
  },
  "sections": [
    {
      "id": "compare",
      "title": "Sem estrutura técnica ou com a JR? Veja o que muda de verdade",
      "lead": "Não é só sobre cloud — é sobre como infraestrutura organizada muda o dia a dia da sua empresa.",
      "before": {
        "label": "Sem estrutura técnica",
        "items": [
          "Sem documentação — tudo depende de uma pessoa só conhecer o ambiente de verdade.",
          "Você descobre o problema quando o sistema já parou, não antes.",
          "Backup configurado, mas nunca testado se a restauração funciona de verdade.",
          "Expansão exige comprar hardware com meses de antecedência.",
          "Hardware dimensionado pro pico de demanda fica ocioso o resto do tempo."
        ]
      },
      "after": {
        "label": "Com a JR",
        "items": [
          "Ambiente documentado e organizado — qualquer técnico consegue dar manutenção, não só quem construiu.",
          "Alertas antes do problema virar incidente — menos tempo de operação parada, menos vendas perdidas.",
          "Restauração testada e validada periodicamente — recuperação em horas se algo der errado, não a semanas.",
          "Recursos sob demanda, em minutos — sua empresa cresce sem apostar em previsão incerta.",
          "Você paga pela capacidade que usa — sobra orçamento pra investir no negócio, não em servidor parado."
        ]
      }
    }
  ],
  "includes": null,
  "outcomes": null,
  "processSteps": null,
  "proof": null,
  "importantClasses": ["photo-hero", "overlay", "compare-section", "compare-col", "before", "after", "btn-primary", "btn-outline"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (foto especialista + Grafana)", "mime": "image/png", "sizeKB": 2442, "sizeMB": 2.38 }
  ],
  "supplementFromModelo": {
    "sources": ["pagina-solucao-modelo.html", "paginas-solucao-v2.html"],
    "introAlt": "Ambientes estáveis, monitorados e preparados para crescer — sem improvisos que viram custo e risco depois.",
    "bodyParagraphs": [
      "A JR Technology Solutions organiza a infraestrutura de TI de pequenas e médias empresas em São Paulo: servidores, redes, ambientes cloud e rotinas de backup. O ponto de partida é um diagnóstico do que já existe — na maioria dos casos o caminho é ajustar e documentar, não trocar tudo.",
      "Trabalhamos com Linux, Docker e provedores cloud (AWS, Azure ou GCP) conforme a necessidade real do negócio. Monitoramento com métricas e alertas entra no desenho para você saber o que está acontecendo antes que vire incidente."
    ],
    "includes": [
      { "title": "Servidores e ambientes de produção" },
      { "title": "Redes e segmentação" },
      { "title": "Cloud (AWS / Azure / GCP)" },
      { "title": "Monitoramento e alertas" },
      { "title": "Backups e restauração testada" }
    ],
    "outcomes": [
      "Menos indisponibilidade e surpresas",
      "Ambiente documentado e reproduzível",
      "Custo de infraestrutura alinhado ao uso real"
    ],
    "proof": {
      "title": "Ambiente real monitorado pela JR",
      "text": "Este é o painel de monitoramento que usamos internamente — o mesmo tipo de visibilidade que aplicamos nos ambientes dos clientes.",
      "caption": "Grafana + Prometheus · métricas de CPU, memória, disco e rede em tempo real",
      "image": "screenshot Grafana (~43KB jpeg no modelo)"
    },
    "faq": [
      {
        "q": "Preciso trocar meu servidor atual?",
        "a": "Na maioria dos casos, não — o diagnóstico avalia o que já existe antes de qualquer substituição."
      },
      {
        "q": "Funciona com qualquer provedor de cloud?",
        "a": "Sim — trabalhamos com AWS, Azure e GCP conforme o que já estiver em uso ou fizer mais sentido pro seu caso."
      }
    ],
    "chips": ["CLOUD", "SERVIDORES", "REDE", "BACKUP", "AWS / Azure / GCP", "monitorado · 24/7", "restauração testada"]
  }
}
```

---

## 3. `/solucoes/seguranca` — seguranca-v1.html

```json
{
  "route": "/solucoes/seguranca",
  "source": "seguranca-v1.html",
  "h1": "Segurança como critério do projeto, não como serviço extra",
  "kicker": "Solução · Segurança",
  "intro": "Boas práticas de segurança entram no planejamento desde o início — controle de acesso, proteção de dados e hardening antes que o problema apareça, não depois.",
  "metaSuggestions": {
    "title": "Segurança como critério do projeto, não como serviço extra | JR Tech",
    "description": "Boas práticas de segurança entram no planejamento desde o início — controle de acesso, proteção de dados e hardening antes que o problema apareça, não depois."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectPosition": "18% 25%",
    "overlay": "linear-gradient(90deg, rgba(13,21,32,0) 0%, rgba(13,21,32,0.35) 38%, rgba(13,21,32,0.85) 58%, rgba(13,21,32,0.97) 100%)",
    "imgAlt": "Especialista JR monitorando alertas de segurança da informação em painel SIEM",
    "ctas": [
      { "label": "Solicitar diagnóstico", "class": "btn-primary" },
      { "label": "Falar no WhatsApp", "class": "btn-outline" }
    ]
  },
  "processSteps": [
    { "n": 1, "title": "Identificação", "description": "Ameaça detectada e classificada automaticamente pelos alertas do sistema de monitoramento." },
    { "n": 2, "title": "Investigação", "description": "Análise da origem, do método e do impacto real do incidente antes de qualquer ação." },
    { "n": 3, "title": "Contenção", "description": "IP ou acesso suspeito bloqueado e regras de segurança aplicadas imediatamente." },
    { "n": 4, "title": "Erradicação", "description": "Remoção completa da ameaça e dos artefatos deixados no ambiente." },
    { "n": 5, "title": "Recuperação", "description": "Sistema normalizado, monitorado e documentado após o incidente." }
  ],
  "sections": [
    {
      "id": "process",
      "title": "Como respondemos a um incidente",
      "lead": "Um processo estruturado, não improviso — cada etapa documentada do momento da detecção até a normalização do ambiente."
    },
    {
      "id": "improve / includes-like",
      "title": "O que fazemos para melhorar a segurança da sua empresa",
      "lead": "Não é um produto único — é um conjunto de práticas aplicadas de forma contínua.",
      "items": [
        { "n": "01", "title": "Controle de acesso", "description": "Políticas e permissões por perfil — cada pessoa vê e altera só o que precisa para o próprio trabalho, reduzindo o risco de erro ou uso indevido." },
        { "n": "02", "title": "Proteção de dados", "description": "Criptografia e rotina de backup testada, não apenas configurada e esquecida — validamos periodicamente que a restauração funciona de verdade." },
        { "n": "03", "title": "Boas práticas e compliance", "description": "Frameworks reconhecidos de segurança, adaptados ao porte real da empresa — não um checklist genérico de multinacional que não se aplica ao seu contexto." },
        { "n": "04", "title": "Hardening preventivo", "description": "Redução da superfície de ataque antes do incidente acontecer, não como resposta emergencial depois que o problema já causou dano." }
      ]
    },
    {
      "id": "compare",
      "title": "Sem cuidado com segurança ou com a JR? Veja o que muda",
      "lead": "A diferença aparece antes do incidente acontecer — ou depois, quando já é tarde.",
      "before": {
        "label": "Sem cuidado com segurança",
        "items": [
          "Sem controle de quem acessa o quê — qualquer pessoa vê qualquer sistema.",
          "Você descobre o incidente quando o dano já aconteceu.",
          "Backup e plano de recuperação nunca testados de verdade.",
          "Vulnerabilidades só corrigidas depois de já terem sido exploradas."
        ]
      },
      "after": {
        "label": "Com a JR",
        "items": [
          "Controle de acesso por perfil — cada pessoa vê e altera só o que precisa para o trabalho.",
          "Detecção em tempo real com alertas — resposta em minutos, não depois do estrago feito.",
          "Plano de resposta a incidente testado, documentado e pronto pra ser executado.",
          "Hardening preventivo reduz a superfície de ataque antes que alguém tente explorá-la."
        ]
      }
    }
  ],
  "includes": "Ver items da seção improve (4 práticas)",
  "outcomes": "Implícitos na coluna 'Com a JR' do compare",
  "proof": null,
  "importantClasses": ["photo-hero", "process-section", "process-bar", "pstep-num", "process-grid", "pcard", "improve-section", "feature-list", "feature-item", "compare-section"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (SIEM / alertas)", "mime": "image/png", "sizeKB": 2436, "sizeMB": 2.38 }
  ]
}
```

---

## 4. `/solucoes/governanca` — governanca-v1.html

```json
{
  "route": "/solucoes/governanca",
  "source": "governanca-v1.html",
  "h1": "Governança de TI é a base para segurança, eficiência e crescimento",
  "kicker": "Solução · Governança",
  "intro": "Processos, pessoas e tecnologia organizados de forma que a empresa não dependa de uma pessoa só saber como tudo funciona.",
  "metaSuggestions": {
    "title": "Governança de TI é a base para segurança, eficiência e crescimento | JR Tech",
    "description": "Processos, pessoas e tecnologia organizados de forma que a empresa não dependa de uma pessoa só saber como tudo funciona."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectPosition": "22% 25%",
    "overlay": "padrão soluções (90deg navy)",
    "imgAlt": "Especialista JR analisando painel de governança de TI, riscos e conformidade",
    "ctas": [
      { "label": "Solicitar diagnóstico", "class": "btn-primary" },
      { "label": "Falar no WhatsApp", "class": "btn-outline" }
    ]
  },
  "processSteps": [
    { "n": 1, "title": "Mapear processos", "description": "Levantamento completo do que existe hoje — sistemas, acessos e responsáveis — antes de qualquer mudança." },
    { "n": 2, "title": "Revisar políticas", "description": "Atualização de políticas de segurança, controle de acesso, backup e uso de recursos." },
    { "n": 3, "title": "Avaliar riscos", "description": "Identificação e classificação de riscos por impacto e probabilidade, com prioridades claras." },
    { "n": 4, "title": "Garantir conformidade", "description": "Alinhamento com frameworks reconhecidos — ISO 27001, LGPD — não um checklist decorativo." },
    { "n": 5, "title": "Melhorar continuamente", "description": "Revisão periódica documentada — governança não é um projeto que termina e é esquecido." }
  ],
  "sections": [
    {
      "id": "process",
      "title": "Como trabalhamos",
      "lead": "Cinco etapas, nesta ordem — não pulamos o diagnóstico pra já sair implementando."
    },
    {
      "id": "frameworks",
      "title": "Frameworks que aplicamos",
      "lead": "Não inventamos processo do zero — usamos referências reconhecidas, adaptadas ao porte real da sua empresa.",
      "items": [
        { "name": "ISO 27001", "tag": "Segurança da informação", "description": "Padrão internacional de gestão de segurança da informação — controles reconhecidos globalmente." },
        { "name": "LGPD", "tag": "Proteção de dados", "description": "Conformidade com a lei brasileira de proteção de dados pessoais." },
        { "name": "ITIL", "tag": "Gestão de serviços de TI", "description": "Boas práticas para operação, suporte e melhoria contínua de serviços de TI." },
        { "name": "COBIT", "tag": "Governança de TI", "description": "Alinhamento entre decisões de tecnologia e objetivos reais do negócio." },
        { "name": "PMBOK", "tag": "Gestão de projetos", "description": "Metodologia para planejamento e execução de projetos de tecnologia." }
      ]
    },
    {
      "id": "structure",
      "title": "Estrutura de governança que implementamos",
      "lead": "Estratégia, processos e tecnologia conectados — não decisões isoladas.",
      "diagram": {
        "top": "Comitê de TI",
        "middle": [
          { "title": "Estratégia", "sub": "Alinhamento de negócio" },
          { "title": "Processos", "sub": "Gestão e controle" },
          { "title": "Tecnologia", "sub": "Infraestrutura e sistemas" }
        ],
        "result": "Resultados — Segurança · Eficiência · Conformidade"
      }
    },
    {
      "id": "compare",
      "title": "Sem governança ou com a JR? Veja o que muda",
      "lead": "A diferença aparece antes da auditoria, não durante ela.",
      "before": {
        "label": "Sem governança",
        "items": [
          "Decisões de TI dependem da memória de uma pessoa, sem registro.",
          "Conformidade descoberta que está faltando só na hora da auditoria.",
          "Riscos não mapeados — ninguém sabe a real exposição da empresa.",
          "Tecnologia decidida isoladamente, sem ligação com a estratégia do negócio."
        ]
      },
      "after": {
        "label": "Com a JR",
        "items": [
          "Processos documentados e alinhados a frameworks reconhecidos (ISO 27001, ITIL).",
          "Conformidade acompanhada continuamente — auditoria não traz surpresa.",
          "Matriz de riscos mantida atualizada, com prioridades claras de ação.",
          "Estrutura de governança conecta estratégia, processos e tecnologia."
        ]
      }
    }
  ],
  "importantClasses": ["photo-hero", "process-section", "frameworks-section", "fw-card", "structure-section", "structure-diagram", "struct-node", "compare-section"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (painel governança)", "mime": "image/png", "sizeKB": 2532, "sizeMB": 2.47 }
  ]
}
```

---

## 5. `/solucoes/suporte-gestao-ti` — suporte-v1.html

```json
{
  "route": "/solucoes/suporte-gestao-ti",
  "source": "suporte-v1.html",
  "h1": "Sua tecnologia funcionando sem improvisos",
  "kicker": "Solução · Suporte",
  "intro": "Tecnologia que mantém seu negócio sempre online — suporte com quem já conhece seu ambiente, não um protocolo genérico de central de atendimento.",
  "metaSuggestions": {
    "title": "Sua tecnologia funcionando sem improvisos | JR Tech",
    "description": "Tecnologia que mantém seu negócio sempre online — suporte com quem já conhece seu ambiente, não um protocolo genérico de central de atendimento."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectPosition": "20% 22%",
    "overlay": "padrão soluções",
    "imgAlt": "Especialista JR atendendo chamado de suporte técnico",
    "ctas": [
      { "label": "Solicitar diagnóstico", "class": "btn-primary" },
      { "label": "Falar no WhatsApp", "class": "btn-outline" }
    ]
  },
  "processSteps": [
    { "label": "Chamado aberto" },
    { "label": "Classificado por prioridade" },
    { "label": "Em atendimento" },
    { "label": "Resolvido" }
  ],
  "sections": [
    {
      "id": "flow",
      "title": "Como funciona um chamado",
      "lead": "Cada chamado segue o mesmo fluxo, com prazo definido por prioridade — não uma fila genérica onde tudo espera igual.",
      "note": "Chamados críticos têm resposta em até 2 horas. Você acompanha o status em tempo real, sem precisar ficar cobrando por atualização."
    },
    {
      "id": "chat",
      "title": "Um atendimento real, sem enrolação",
      "lead": "Direto com quem resolve — sem escalonamento por níveis de atendimento.",
      "mock": [
        { "from": "client", "time": "10:24", "text": "Olá, meu sistema não está acessando o banco de dados, pode me ajudar?" },
        { "from": "jr", "time": "10:27", "text": "Olá! Vou verificar aqui. Já identifiquei o problema e estou aplicando a correção. Em alguns minutos já estará funcionando." },
        { "from": "client", "time": "10:28", "text": "Perfeito, obrigado!" }
      ],
      "chatBar": "Suporte JR · online"
    },
    {
      "id": "cover / includes",
      "title": "O que cobrimos",
      "lead": "Suporte não é só "consertar quando quebra" — é gestão contínua de cinco frentes.",
      "items": [
        { "n": "01", "title": "Infraestrutura", "description": "Servidores, redes e ambientes cloud monitorados continuamente — não só quando algo já parou." },
        { "n": "02", "title": "Segurança", "description": "Firewall, backup e proteção contra ameaças (EDR) fazendo parte da rotina, não uma ação isolada." },
        { "n": "03", "title": "Usuários", "description": "Gestão de acessos e permissões organizada — sem depender de planilha solta ou memória de alguém." },
        { "n": "04", "title": "Sistemas", "description": "Aplicações e plataformas que a empresa usa no dia a dia, com suporte de quem já conhece o ambiente." },
        { "n": "05", "title": "Projetos", "description": "Implantação de novos sistemas com acompanhamento durante toda a transição, não só na entrega." }
      ]
    },
    {
      "id": "monitor",
      "title": "Monitoramento contínuo",
      "lead": "Serviços críticos observados em tempo real — se algo cair, a gente sabe antes do seu cliente perceber.",
      "items": ["Web Server", "API", "Banco de Dados", "Automação (n8n)", "Monitoramento (Grafana)", "Uptime Kuma"]
    },
    {
      "id": "compare",
      "title": "Suporte reativo ou com a JR? Veja o que muda",
      "lead": "A diferença aparece no dia em que algo dá errado — ou antes disso.",
      "before": {
        "label": "Suporte reativo",
        "items": [
          "Chamado aberto num grupo de WhatsApp, sem prioridade nem prazo definido.",
          "Cada atendimento parte do zero, com alguém que não conhece seu ambiente.",
          "Você descobre que o backup falhou quando precisa restaurar algo.",
          "Suporte reativo — só aparece quando o cliente reclama."
        ]
      },
      "after": {
        "label": "Com a JR",
        "items": [
          "Chamado classificado por prioridade, com tempo de resposta definido.",
          "Atendimento com quem já conhece sua infraestrutura, sistemas e histórico.",
          "Backups e serviços críticos monitorados continuamente, em tempo real.",
          "Acompanhamento contínuo — tarefas de manutenção rodando antes de virar problema."
        ]
      }
    }
  ],
  "importantClasses": ["flow-section", "flow-step", "chat-section", "chat-box", "cover-section", "monitor-section", "mon-item", "compare-section"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (atendimento suporte)", "mime": "image/png", "sizeKB": 2456, "sizeMB": 2.4 }
  ]
}
```

---

## 6. `/solucoes/desenvolvimento` — desenvolvimento-v1.html

> Arquivo **encontrado** em Downloads (`desenvolvimento-v1.html`, ~3,5 MB).

```json
{
  "route": "/solucoes/desenvolvimento",
  "source": "desenvolvimento-v1.html",
  "h1": "Sistemas e integrações sob medida",
  "kicker": "Solução · Desenvolvimento",
  "intro": "Do diagnóstico ao acompanhamento — sistemas construídos para o processo real do seu negócio, com React, Node.js e automações que eliminam trabalho manual repetitivo.",
  "metaSuggestions": {
    "title": "Sistemas e integrações sob medida | JR Tech",
    "description": "Do diagnóstico ao acompanhamento — sistemas construídos para o processo real do seu negócio, com React, Node.js e automações que eliminam trabalho manual repetitivo."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectPosition": "18% 22%",
    "overlay": "padrão soluções",
    "imgAlt": "Especialista JR desenvolvendo sistemas web, APIs e automações",
    "ctas": [
      { "label": "Solicitar diagnóstico", "class": "btn-primary" },
      { "label": "Falar no WhatsApp", "class": "btn-outline" }
    ]
  },
  "proof": {
    "sectionTitle": "O que já construímos",
    "lead": "Projetos reais, no ar, atendendo clientes de verdade.",
    "type": "marquee mini-browser",
    "projects": [
      { "url": "fatiadelei.com.br", "cat": "E-commerce", "title": "Fatia de Lei", "shot": "placeholder note no HTML" },
      { "url": "adegadokinho.com.br", "cat": "E-commerce", "title": "Adega do Kinho", "shot": "placeholder note no HTML" },
      { "url": "monitoramento interno", "cat": "Infraestrutura", "title": "Ambiente de monitoramento", "shot": "jpeg ~43KB (duplicado no marquee)" }
    ]
  },
  "includes": [
    {
      "n": "01",
      "title": "Aplicações web",
      "description": "Sistemas sob medida construídos com React/Next.js no frontend e Node.js no backend — do zero ou evoluindo o que já existe.",
      "stack": ["React", "Next.js", "Node.js"]
    },
    {
      "n": "02",
      "title": "APIs e integrações",
      "description": "Conectando sistemas que hoje não conversam entre si — pagamentos (Mercado Pago), comunicação (WhatsApp via n8n) e outros serviços externos.",
      "stack": ["REST APIs", "n8n", "WhatsApp", "Mercado Pago"]
    },
    {
      "n": "03",
      "title": "Banco de dados",
      "description": "Modelagem pensada para o volume e uso real da operação, não só para funcionar no primeiro teste.",
      "stack": ["PostgreSQL"]
    },
    {
      "n": "04",
      "title": "Automação de processos",
      "description": "Fluxos que hoje exigem alguém copiando dados de um sistema pro outro viram automáticos — pedido, estoque, financeiro e notificação em sequência.",
      "stack": ["n8n", "Workflows"]
    },
    {
      "n": "05",
      "title": "Infraestrutura para produção",
      "description": "Deploy em cloud (AWS ou servidores próprios), com o ambiente monitorado desde o primeiro dia — não só quando algo já deu errado.",
      "stack": ["AWS", "Hetzner", "Docker"]
    }
  ],
  "sections": [
    {
      "id": "includes",
      "title": "O que inclui",
      "lead": "Cada projeto usa o que faz sentido pro seu caso — não empacotamos tudo por padrão."
    },
    {
      "id": "compare",
      "title": "Processo manual ou sistema sob medida? Veja o que muda",
      "lead": "A diferença aparece no tempo que sobra pra tocar o negócio, não pra operar planilha.",
      "before": {
        "label": "Processo manual",
        "items": [
          "Processo rodando em planilha, WhatsApp pessoal e anotação manual espalhada.",
          "Alguém copiando dado de um sistema pro outro à mão, todo dia.",
          "Sistema genérico comprado pronto, que não encaixa no seu processo real.",
          "Pagamento e comunicação com cliente resolvidos manualmente, um por um."
        ]
      },
      "after": {
        "label": "Com a JR",
        "items": [
          "Sistema único, sob medida, que organiza pedido, estoque e financeiro num só lugar.",
          "Automação (n8n) faz a ponte entre sistemas — sem cópia manual de dado.",
          "Construído em cima do seu processo real, não adaptado à força a um template.",
          "Pagamento (Mercado Pago) e notificação (WhatsApp) integrados e automáticos."
        ]
      }
    }
  ],
  "outcomes": "Coluna 'Com a JR' do compare",
  "processSteps": null,
  "importantClasses": ["marquee-section", "mini-browser", "improve-section", "feature-list", "stack", "compare-section"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (dev)", "mime": "image/png", "sizeKB": 2461, "sizeMB": 2.4 },
    { "role": "screenshot monitoramento (marquee)", "mime": "image/jpeg", "sizeKB": 43 },
    { "role": "screenshot monitoramento (duplicata marquee)", "mime": "image/jpeg", "sizeKB": 43 }
  ]
}
```

---

## 7. `/projetos` — projetos-v1.html

```json
{
  "route": "/projetos",
  "source": "projetos-v1.html",
  "h1": "O que já construímos",
  "kicker": "Projetos",
  "intro": "Projetos reais, no ar, atendendo clientes de verdade — não conceito, não mockup.",
  "metaSuggestions": {
    "title": "O que já construímos | JR Tech",
    "description": "Projetos reais, no ar, atendendo clientes de verdade — não conceito, não mockup."
  },
  "hero": {
    "type": "page-hero (sem photo-hero)",
    "structure": ["kicker", "h1", "lead"]
  },
  "projects": [
    {
      "name": "Fatia de Lei",
      "category": "E-commerce",
      "subtitle": "E-commerce para confeitaria com identidade própria",
      "url": "https://www.fatiadelei.com.br",
      "urlLabel": "fatiadelei.com.br",
      "context": "A Fatia de Lei é uma confeitaria com um conceito específico — fatias de bolo e torta com nomes inspirados no universo jurídico, criada por uma advogada que uniu as duas paixões. Antes do sistema, a venda dependia de pedido manual, sem um canal profissional que desse conta do volume e passasse a identidade da marca.",
      "built": "E-commerce completo com catálogo de produtos, sistema de pedidos com prazo definido (janela semanal de encomendas), e pagamento integrado via InfinityPay — do clique em "comprar" até a confirmação, sem intervenção manual.",
      "result": "Pedido deixou de depender de mensagem trocada por WhatsApp e virou processo automatizado, com checkout e confirmação de pagamento instantâneos — menos erro de anotação, mais tempo pra confeitaria focar na produção.",
      "screenshot": { "mime": "image/png", "sizeKB": 247, "role": "project screenshot Fatia de Lei" }
    },
    {
      "name": "Adega do Kinho",
      "category": "E-commerce + PDV",
      "subtitle": "Loja de bebidas com venda online, presencial e estoque unificados",
      "url": "https://www.adegadokinho.com.br",
      "urlLabel": "adegadokinho.com.br",
      "context": "Uma adega/loja de bebidas e narguilé que vende tanto online quanto no balcão físico — o risco real aqui é estoque desincronizado: vender algo no PDV que já tinha sido vendido no site (ou vice-versa), gerando promessa que não pode ser cumprida.",
      "built": "Sistema único cobrindo três frentes — catálogo e checkout online (com combos promocionais), PDV para venda presencial, e controle de estoque compartilhado entre os dois canais. Uma venda em qualquer um dos dois atualiza a disponibilidade no outro, em tempo real.",
      "result": "Fim da divergência entre "o que o sistema diz que tem" e "o que realmente tem na loja" — o dono vende com confiança em qualquer canal, sem checar estoque em dois lugares diferentes.",
      "screenshot": { "mime": "image/png", "sizeKB": 431, "role": "project screenshot Adega do Kinho" }
    },
    {
      "name": "Pratoo",
      "category": "SaaS",
      "subtitle": "Plataforma de gestão para empresas de buffet e eventos",
      "url": "https://www.pratooapp.com.br",
      "urlLabel": "pratooapp.com.br",
      "context": "Empresas de buffet lidam com uma operação com muitas frentes ao mesmo tempo — cardápio, estoque, produção do evento, vendas, financeiro — normalmente espalhadas em planilhas separadas ou sistemas que não conversam entre si.",
      "built": "SaaS multi-tenant (atende várias empresas de buffet na mesma plataforma, cada uma com seus dados isolados) com módulos de Usuários, Estoque, Cardápios, Vendas, Clientes, Produção de Buffet (PCP), Financeiro e Compras — tudo integrado. Estrutura modular: cada cliente escolhe e paga só pelos módulos que usa.",
      "result": "Em uso real por uma operação de buffet de grande porte, com dados financeiros, agenda de eventos e informações de clientes rodando na plataforma no dia a dia — não é um projeto piloto, é ferramenta de trabalho.",
      "observation": "A captura mostra a página pública de apresentação do produto — o painel interno não é exibido aqui por conter dados reais de clientes.",
      "screenshot": { "mime": "image/png", "sizeKB": 299, "role": "project screenshot Pratoo (landing pública)" }
    }
  ],
  "structurePerProject": ["shot-wrap (browser chrome + img)", "cat", "h2 name", "h3 subtitle", "blocks: O contexto / O que foi construído / Resultado", "link externo"],
  "importantClasses": ["page-hero", "project-block", "project-inner", "shot-wrap", "shot-bar", "proj-text", "block", "divider"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "screenshot Fatia de Lei", "mime": "image/png", "sizeKB": 247 },
    { "role": "screenshot Adega do Kinho", "mime": "image/png", "sizeKB": 431 },
    { "role": "screenshot Pratoo", "mime": "image/png", "sizeKB": 299 }
  ]
}
```

---

## 8. `/sobre` — sobre-page-v2.html

```json
{
  "route": "/sobre",
  "source": "sobre-page-v2.html",
  "h1": "Tecnologia não precisa ser complicada. Precisa funcionar.",
  "kicker": "Sobre",
  "intro": "A JR Technology Solutions ajuda empresas a estruturar, proteger, desenvolver e evoluir sua tecnologia, conectando infraestrutura, segurança, sistemas, automação e gestão de TI.",
  "metaSuggestions": {
    "title": "Tecnologia não precisa ser complicada. Precisa funcionar. | JR Tech",
    "description": "A JR Technology Solutions ajuda empresas a estruturar, proteger, desenvolver e evoluir sua tecnologia, conectando infraestrutura, segurança, sistemas, automação e gestão de TI."
  },
  "hero": {
    "type": "photo-hero",
    "height": "520px",
    "objectPosition": "30% 20%",
    "overlay": "linear-gradient(90deg, rgba(13,21,32,0) 0%, rgba(13,21,32,0.4) 42%, rgba(13,21,32,0.88) 62%, rgba(13,21,32,0.97) 100%)",
    "imgAlt": "Fundador da JR Technology Solutions em ambiente de escritório",
    "ctas": []
  },
  "sections": [
    {
      "id": "journey",
      "title": "Como começou",
      "items": [
        { "n": "01", "title": "O anúncio", "text": "Uma pastelaria procurava alguém pra estruturar a rede e conectar as impressoras ao sistema de pedidos." },
        { "n": "02", "title": "A virada", "text": "Aquele serviço específico não se concretizou, mas abriu os olhos para algo maior: um mercado real, mal atendido, bem diante de mim." },
        { "n": "03", "title": "A decisão", "text": "Com a experiência que eu já tinha em infraestrutura, ficou claro que dava pra ir além de rede e impressora. Segurança, desenvolvimento, suporte contínuo. Foi daí que nasceu a JR Technology Solutions." }
      ]
    },
    {
      "id": "who",
      "title": "Quem está por trás",
      "paragraphs": [
        "Quem atende você é quem executa. Não existe vendedor te passando pra um técnico depois.",
        "Além dos clientes da consultoria, também atuo como analista de infraestrutura em outra operação. Isso significa que o que eu recomendo pros meus clientes é testado na prática, no dia a dia de quem lida com ambiente de produção real, não só em teoria."
      ]
    },
    {
      "id": "principles",
      "title": "Como pensamos",
      "items": [
        { "n": "01", "title": "Entender antes de implementar", "text": "Não começamos oferecendo tecnologia. Primeiro entendemos o problema." },
        { "n": "02", "title": "Segurança desde o início", "text": "Segurança não deve ser um remendo colocado depois." },
        { "n": "03", "title": "Tecnologia precisa gerar resultado", "text": "Uma solução tecnicamente excelente que não resolve o problema do negócio não é uma boa solução." },
        { "n": "04", "title": "Tudo precisa ser sustentável", "text": "Documentação, organização e processos são tão importantes quanto a tecnologia." },
        { "n": "05", "title": "Transparência", "text": "O cliente precisa entender o que está sendo feito, por que, e qual resultado esperar." }
      ]
    },
    {
      "id": "formacao",
      "title": "Formação",
      "items": [
        { "curso": "Técnico em Redes", "inst": "SENAI" },
        { "curso": "Ciência da Computação", "inst": "UNIP" },
        { "curso": "Pós-graduação em Segurança da Informação", "inst": "SENAC" },
        { "curso": "MBA em Gestão de Tecnologia da Informação", "inst": "FIAP" }
      ],
      "exp": "Experiência profissional em infraestrutura, redes e suporte corporativo, com atuação também em segurança, sistemas e tecnologia aplicada aos negócios."
    },
    {
      "id": "stats",
      "items": [
        { "num": "+1 ano", "desc": "de operação" },
        { "num": "100%", "desc": "atendimento direto" },
        { "num": "0", "desc": "terceirizações" },
        { "num": "3", "desc": "sistemas em produção" }
      ]
    },
    {
      "id": "audience",
      "title": "Para quem fazemos",
      "lede": "Empresas que precisam organizar sua tecnologia para crescer.",
      "items": [
        "Empresas de serviços",
        "Pequenas e médias empresas",
        "Negócios em crescimento",
        "Empresas com processos manuais",
        "Empresas sem uma estrutura interna de TI",
        "Empresas que precisam profissionalizar sua infraestrutura"
      ],
      "closing": "Se a tecnologia da sua empresa cresceu sem planejamento, nós podemos ajudar a colocar essa estrutura no lugar."
    },
    {
      "id": "projetos-link",
      "text": "Quer ver isso funcionando na prática? Temos sistemas reais em produção, atendendo clientes de verdade.",
      "cta": { "label": "Ver projetos →", "hrefSuggested": "/projetos" }
    },
    {
      "id": "cta-final",
      "title": "Sua empresa não precisa de mais tecnologia.",
      "sub": "Precisa da tecnologia certa. Vamos entender onde sua empresa está, identificar o que precisa ser melhorado e construir o próximo passo.",
      "ctas": [
        { "label": "Falar com a JR Tech", "class": "btn-primary" },
        { "label": "Falar no WhatsApp", "class": "btn-outline" }
      ]
    }
  ],
  "importantClasses": ["photo-hero", "journey-section", "journey-item", "principles", "principle-item", "formacao-section", "stats-section", "audience-section", "cta-final"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 },
    { "role": "hero background (fundador / escritório)", "mime": "image/png", "sizeKB": 1993, "sizeMB": 1.95 }
  ]
}
```

---

## 9. `/politica-de-privacidade` — politica-privacidade.html

```json
{
  "route": "/politica-de-privacidade",
  "source": "politica-privacidade.html",
  "h1": "Política de Privacidade",
  "kicker": "Legal",
  "updated": "Última atualização: [data de publicação]",
  "intro": "A JR Technology Solutions respeita a sua privacidade. Esta política explica quais dados coletamos quando você visita nosso site ou entra em contato conosco, para que servem, e quais direitos você tem sobre eles, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
  "metaSuggestions": {
    "title": "Política de Privacidade | JR Tech",
    "description": "A JR Technology Solutions respeita a sua privacidade. Esta política explica quais dados coletamos, para que servem, e quais direitos você tem (LGPD)."
  },
  "hero": { "type": "doc-wrap (sem photo-hero)" },
  "sections": [
    {
      "n": "01",
      "title": "Quem é responsável pelos seus dados",
      "paragraphs": [
        "JR Technology Solutions, com atuação em São Paulo, SP.",
        "Contato: contato@jrtechnologysolutions.com.br"
      ]
    },
    {
      "n": "02",
      "title": "Quais dados coletamos",
      "paragraphs": [
        "Dados de navegação. Quando você visita o site e aceita o uso de cookies, coletamos dados de navegação através do Google Analytics: páginas visitadas, tempo de permanência, tipo de dispositivo e navegador, e localização aproximada (cidade/estado, com base no IP). Esses dados são anônimos e agregados, não identificam você diretamente.",
        "Dados que você fornece voluntariamente. Quando você preenche o formulário de contato ou envia mensagem pelo WhatsApp, coletamos nome, e-mail, empresa (quando informada), telefone (no caso do WhatsApp) e o conteúdo da mensagem.",
        "Não coletamos dados sensíveis (como dados de saúde, origem racial, opinião política) e não solicitamos esse tipo de informação em nenhum canal."
      ]
    },
    {
      "n": "03",
      "title": "Por que coletamos esses dados",
      "list": [
        "Dados de navegação: para entender como o site é usado e melhorar o conteúdo e a experiência de quem visita.",
        "Dados de contato: para responder sua solicitação, agendar o diagnóstico técnico, e elaborar proposta quando aplicável."
      ],
      "note": "Não usamos seus dados para enviar propaganda não solicitada, nem vendemos ou alugamos seus dados para terceiros."
    },
    {
      "n": "04",
      "title": "Com quem compartilhamos seus dados",
      "paragraphs": [
        "Os dados de navegação são processados pelo Google Analytics (Google LLC), sujeito à própria política de privacidade do Google. Não compartilhamos seus dados de contato com nenhum terceiro, exceto quando exigido por lei ou ordem judicial."
      ]
    },
    {
      "n": "05",
      "title": "Cookies",
      "paragraphs": [
        "Usamos cookies para o Google Analytics funcionar. Ao visitar o site pela primeira vez, você pode aceitar ou recusar esse uso através do aviso exibido na tela. Se você recusar, nenhum dado de navegação é coletado. Você pode alterar essa escolha a qualquer momento limpando os cookies do seu navegador."
      ]
    },
    {
      "n": "06",
      "title": "Por quanto tempo guardamos seus dados",
      "paragraphs": [
        "Dados de formulário de contato são mantidos pelo tempo necessário para atender sua solicitação e, depois disso, por até 6 meses para fins de histórico comercial, salvo se você solicitar exclusão antes. Dados de navegação seguem o período padrão de retenção do Google Analytics."
      ]
    },
    {
      "n": "07",
      "title": "Seus direitos",
      "lead": "De acordo com a LGPD, você pode a qualquer momento:",
      "list": [
        "Confirmar se tratamos algum dado seu",
        "Pedir acesso aos dados que temos sobre você",
        "Pedir correção de dado incompleto ou desatualizado",
        "Pedir a exclusão dos seus dados",
        "Revogar o consentimento para uso de cookies/Analytics",
        "Pedir a portabilidade dos seus dados para outro fornecedor"
      ],
      "note": "Para exercer qualquer um desses direitos, entre em contato pelo e-mail contato@jrtechnologysolutions.com.br. Respondemos em até 15 dias úteis."
    },
    {
      "n": "08",
      "title": "Segurança",
      "paragraphs": [
        "Adotamos medidas técnicas razoáveis para proteger os dados que coletamos contra acesso não autorizado, perda ou alteração indevida."
      ]
    },
    {
      "n": "09",
      "title": "Alterações nesta política",
      "paragraphs": [
        "Esta política pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no topo desta página."
      ]
    }
  ],
  "contactBox": {
    "label": "Dúvidas sobre esta política",
    "email": "contato@jrtechnologysolutions.com.br"
  },
  "importantClasses": ["doc-wrap", "doc-section", "kicker", "updated", "intro", "contact-box"],
  "dataImages": [
    { "role": "logo JR", "mime": "image/png", "sizeKB": 138 }
  ]
}
```

---

## 10. Header — nav-pilula-rc.html

```json
{
  "component": "Header / Nav",
  "source": "nav-pilula-rc.html",
  "designNotes": "Logo sozinho à esquerda (sem texto 'Technology Solutions' ao lado — a imagem do logo já inclui o texto). Sem badge 'ambiente monitorado'. Só píldula de navegação + CTA.",
  "structure": {
    "left": { "class": "brand", "element": "img.logo", "alt": "JR Technology Solutions" },
    "center": {
      "class": "nav-pill",
      "items": [
        { "n": "01", "label": "Soluções", "hrefSuggested": "/solucoes", "activeOn": ["/solucoes", "/solucoes/*"] },
        { "n": "02", "label": "Projetos", "hrefSuggested": "/projetos" },
        { "n": "03", "label": "Sobre", "hrefSuggested": "/sobre" },
        { "n": "04", "label": "Contato", "hrefSuggested": "/#contato ou /contato" }
      ]
    },
    "right": {
      "class": "cta",
      "label": "Solicitar diagnóstico",
      "hrefSuggested": "/#contato ou /contato"
    }
  },
  "previewHeroInFile": {
    "eyebrow": "Consultoria técnica · São Paulo",
    "h1": "Organizamos, protegemos e evoluímos a tecnologia da sua empresa",
    "note": "Apenas preview no HTML de referência do nav — não é página própria"
  },
  "importantClasses": ["nav", "brand", "logo", "nav-pill", "cta", "active"],
  "colors": {
    "navBgArea": "#eef2f5",
    "navy": "#16253d",
    "cta": "#e8720c",
    "pillBorder": "#d4dce3"
  },
  "dataImages": [
    { "role": "logo JR (PNG com wordmark)", "mime": "image/png", "sizeKB": 138 }
  ]
}
```

---

## Resumo de data URLs / imagens embutidas

| Arquivo | # | Papel | Mime | ~Tamanho |
|---------|---|-------|------|----------|
| (todos com nav) | 1 | Logo JR | png | **138 KB** |
| infra-v9 | 2 | Hero foto (migração/Grafana) | png | **2442 KB (~2,4 MB)** |
| seguranca-v1 | 2 | Hero foto (SIEM) | png | **2436 KB** |
| governanca-v1 | 2 | Hero foto (governança) | png | **2532 KB** |
| suporte-v1 | 2 | Hero foto (suporte) | png | **2456 KB** |
| desenvolvimento-v1 | 2 | Hero foto (dev) | png | **2461 KB** |
| desenvolvimento-v1 | 3–4 | Screenshot monitoramento (marquee) | jpeg | **43 KB** ×2 |
| projetos-v1 | 2 | Shot Fatia de Lei | png | **247 KB** |
| projetos-v1 | 3 | Shot Adega do Kinho | png | **431 KB** |
| projetos-v1 | 4 | Shot Pratoo | png | **299 KB** |
| sobre-page-v2 | 2 | Hero foto (fundador) | png | **1993 KB (~1,95 MB)** |
| hub / politica / nav | 1 | Só logo | png | **138 KB** |
| pagina-solucao-modelo | 2 | Proof Grafana screenshot | jpeg | **43 KB** |

**Recomendação Next.js:** exportar heroes e screenshots para `public/solucoes/` e `public/projetos/` como WebP/AVIF; não embutir base64.

---

## Artefatos auxiliares gerados

- `_ref-stripped/*.stripped.html` — HTML sem base64
- `_ref-stripped/*.images.json` — metadados das data URLs
- `_ref-stripped/bodies/*.body.html` — body limpo por página (UTF-8)
