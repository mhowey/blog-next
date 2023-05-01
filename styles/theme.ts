import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: process.env.NEXT_PUBLIC_THEME_DARK || "#000",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_PRIMARY || "#CCC",
          color: process.env.NEXT_PUBLIC_THEME_DARK || "#000",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_PRIMARY || "#CCC",
        },
      },
    }
  },
  typography: {
    fontFamily: "Arial,sans-serif",
    h1: {
      fontSize: "2rem",
      marginBottom: "1rem",
      color: process.env.NEXT_PUBLIC_THEME_LIGHT || "#ccc",
    },
    h6: {
      color: process.env.NEXT_PUBLIC_THEME_DARK || "#000",
    },
    body1: {
      color: process.env.NEXT_PUBLIC_THEME_DARK || "#000",
    },
    body2: {
      marginBottom: "1rem",
      fontSize: "1.2rem",
      color: process.env.NEXT_PUBLIC_THEME_LIGHT || "#ccc",
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