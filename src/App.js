import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/container/Container';

import Navigation from './Components/navigation/Navigation';
import Form from './Components/form/Form'

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
        <div className="App">
            <Routes>
              <Route path="/login" element={<Form />}/>
              <Route path="/bestPractices" element={<Container />} />
            </Routes>
        </div>
    <footer><p>&copy;don't worry, be happy!</p></footer>
    </Router>
  );
}

export default App;
