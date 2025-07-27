import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7B2CBF', // Deep purple
      light: '#9D4EDD',
      dark: '#5A189A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD166', // Golden yellow (perfect complement to purple)
      light: '#FFE08E',
      dark: '#FFB930',
      contrastText: '#000000',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
    },
    common: {
      black: '#212529',
      white: '#FFFFFF',
    },
    success: {
      main: '#06D6A0', // Bright teal
    },
    warning: {
      main: '#FF9E00',
    },
    error: {
      main: '#EF476F', // Vibrant pink
    },
    info: {
      main: '#118AB2', // Deep blue
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    body1: {
      fontSize: '16px',
      color: '#212529',
    },
    h5: {
      fontWeight: 700,
      color: '#212529',
    },
    body2: {
      color: '#495057',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 16px',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7B2CBF 0%, #9D4EDD 100%)',
          boxShadow: '0 2px 6px rgba(123, 44, 191, 0.4)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(123, 44, 191, 0.6)',
            transform: 'translateY(-2px)',
          }
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FFD166 0%, #FFE08E 100%)',
          boxShadow: '0 2px 6px rgba(255, 209, 102, 0.4)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 209, 102, 0.6)',
            transform: 'translateY(-2px)',
          }
        }
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #7B2CBF 0%, #5A189A 100%)',
        }
      }
    },
  },
});