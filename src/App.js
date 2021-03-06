import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/container/Container';

import Navigation from './Components/navigation/Navigation';
import Register from './Components/register/Register';
import Login from './Components/login/Login';
import Mentors from './Components/mentors/Mentors';
import Aside from './Components/aside/Aside';
import About from './Components/about/About';
import Contacts from './Components/contacts/Contacts';
import Gallery from './Components/gallery/Gallery';
import { AuthProvider } from './contexts/AuthContext.js';
import Logout from './Components/Logout';
import CreatePractice from './Components/createPractice/CreatePractice';
import Home from './Components/home/Home';

function App() {
  return (
  <AuthProvider>
    <Router>
      <header>
        <Navigation />
      </header>
        <div className="App">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/logout" element={<Logout />}/>
              <Route path="/bestPractices" element={<Container />} />
              <Route path="/chooseMentor" element={<Mentors />} />
              <Route path="/about" element={<About />} />
              <Route path="/createPractice" element={<CreatePractice />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/gallery" element={<Gallery />} />

            </Routes>
        </div>
      <Aside />
      
    <footer><p>&copy;don't worry, be happy!</p></footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
