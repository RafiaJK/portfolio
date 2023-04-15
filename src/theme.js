import { createTheme }  from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
        light: '#337066',
        main: '#004d40',
        dark: '#00352c',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffb851',
        main: '#ffa726',
        dark: '#b2741a',
        contrastText: '#000',
    },
    }
})
export default theme