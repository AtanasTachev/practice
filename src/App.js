import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/container/Container';

import Navigation from './Components/navigation/Navigation';
import Login from './Components/form/Login';
import Register from './Components/register/Register';
import Mentors from './Components/mentors/Mentors';

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>
        <div className="App">
            <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/bestPractices" element={<Container />} />
              <Route path="/chooseMentor" element={<Mentors />} />
            </Routes>
        </div>
    <footer><p>&copy;don't worry, be happy!</p></footer>
    </Router>
  );
}

export default App;
