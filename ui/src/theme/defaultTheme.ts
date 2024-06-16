import { createTheme } from '@mui/material/styles'
import { Colors } from '@/constants/colors'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: Colors.Blue,
      light: Colors.LightBlue,
      dark: Colors.DarkBlue
    },
    secondary: {
      main: Colors.Purple,
      light: Colors.LightPurple,
      dark: Colors.DarkPurple
    },
    text: {
      primary: Colors.Black,
      secondary: Colors.White
    },
    common: {
      white: Colors.White,
      black: Colors.Black
    },
    grey: {
      100: Colors.WhiteSmoke,
      500: Colors.Gray,
      900: Colors.DarkGray
    },
    background: {
      paper: Colors.White,
      default: Colors.BackdropLightBlue
    },
    error: {
      light: Colors.LightRed,
      main: Colors.Red,
      dark: Colors.DarkRed
    },
    warning: {
      light: Colors.LightSand,
      main: Colors.Sand
    },
    info: {
      light: Colors.LightBlue,
      main: Colors.BrightBlue,
      dark: Colors.DarkBlue
    },
    success: {
      light: Colors.LightGreen,
      main: Colors.Green
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.6rem',
          fontWeight: 500
        }
      },
      variants: [
        {
          props: { variant: 'h3' },
          style: {
            fontSize: '3rem'
          }
        },
        {
          props: { variant: 'h4' },
          style: {
            fontSize: '2.125rem'
          }
        }
      ]
    }
  }
})
