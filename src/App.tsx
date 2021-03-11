import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Layout from './Components/Layout'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7A2F', //Orange
    },
    secondary: {
      main: '#000000', //Black
      light: '#EDEDED', //Light Grey
      dark: '#393939' //Dark Grey
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Layout />
    </ThemeProvider>
  );
}

export default App;
