import { createTheme } from '@mui/material/styles'
import ListItemText from '@mui/material/ListItemText';
export const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_DARK,
          color: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: process.env.NEXT_PUBLIC_THEME_DARK,
        },
      },
    }
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    body1: {
      // marginBottom: "1.5rem",
    },
    body2: {
      marginBottom: "1rem",
      fontSize: "1.2rem",
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