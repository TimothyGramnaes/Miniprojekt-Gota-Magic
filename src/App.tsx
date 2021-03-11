import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello wörld!
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
