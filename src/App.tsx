
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ProductList />
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
  );
}

export default App;
