export const colors = {
  paper: "#EEF2F5",
  ink: "#16253D",
  ink2: "#3D4E63",
  signal: "#E8720C",
  dimension: "#5A6B80",
  border: "#D4DCE3",
  success: "#1E7A46",
  error: "#C0392B",
  warning: "#B5860F",
  white: "#FFFFFF",
  connector: "#C7D3DD",
  ctaMuted: "#B9C2CE",
} as const;

export const fonts = {
  heading: "var(--font-archivo-expanded)",
  subheading: "var(--font-archivo)",
  body: "var(--font-public-sans)",
  mono: "var(--font-ibm-plex-mono)",
} as const;

export const spacing = {
  sectionY: "5.5rem",
  containerMax: "1520px",
  containerPx: "2rem",
} as const;
