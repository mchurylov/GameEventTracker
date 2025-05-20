// Theme configuration
export const theme = {
  colors: {
    background: "#1a1a1a",
    foreground: "#ffffff",
    primary: "#ffd700", // Gold
    primaryLight: "#ffec8b", // Light gold
    primaryDark: "#d4af37", // Dark gold
    secondary: "#333333",
    accent: "#c0c0c0", // Silver
  },
  fonts: {
    heading: "Montserrat, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
};

// Helper function to apply a gold gradient to text
export const goldGradientText = `
  background: linear-gradient(90deg, #ffd700 0%, #f8de7e 50%, #ffd700 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

// Helper function to apply a gold border
export const goldBorder = `
  border: 2px solid #ffd700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

// Animation durations
export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
};
