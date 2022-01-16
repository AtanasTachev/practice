import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/container/Container';

import Navigation from './Components/navigation/Navigation';
import Form from './Components/form/Form'

function App() {
  return (
    <Router>

    <div className="App">
        <Navigation />
        <p className='btn'>
         This is a practice app!
        </p>
        <Routes>
          <Route element={Form}/>
        </Routes>
        <Container />
        <a
          className="btn"
          rel="noopener noreferrer"
          >
          BE HAPPY
        </a>
    </div>
    </Router>
  );
}

export default App;
