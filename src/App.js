import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/:num"/>
        <Color path="/:word/:text/:background"/>
      </Router>
    </div>
  );
}

export default App;
