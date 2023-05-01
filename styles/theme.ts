import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: process.env.NEXT_PUBLIC_THEME_DARK,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_PRIMARY,
          color: process.env.NEXT_PUBLIC_THEME_DARK,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_PRIMARY,
        },
      },
    }
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: "2rem",
      marginBottom: "1rem",
      color: process.env.NEXT_PUBLIC_THEME_LIGHT,
    },
    h6: {
      color: process.env.NEXT_PUBLIC_THEME_TERTIARY,
    },
    body1: {
      color: process.env.NEXT_PUBLIC_THEME_DARK,
    },
    body2: {
      marginBottom: "1rem",
      fontSize: "1.2rem",
      color: process.env.NEXT_PUBLIC_THEME_LIGHT,
    },
  },
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});