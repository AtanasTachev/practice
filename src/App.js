import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/container/Container';

import Navigation from './Components/navigation/Navigation';

function App() {
  return (
    <Router>

    <div className="App">
        <Navigation />
        <p>
         This is a practice app!
        </p>
        <Container />
        <a
          className="App-link"
          rel="noopener noreferrer"
          >
          BE HAPPY
        </a>
    </div>
    </Router>
  );
}

export default App;
