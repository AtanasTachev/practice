import './navigation.css';
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {

// const { user } = useContext(AuthContext);
const { userId } = useParams();

const [user, setUser] = useState([]);
useEffect(() => {
      authService.getUser(userId)
      .then(result => {
          setUser(result);
      })
})

    return (
        <nav className='nav'>
            <p className='appLogo'>PRACTICE TO MASTER</p>
            <ul>
                <li>
                    <Link className="navLink" to="/"><i class="fal fa-presentation">Practice Courses</i></Link>    
                </li>
                <li>
                    <Link className="navLink" to="/about"><i class="fas fa-history">About</i></Link>    
                </li>
                <li>
                    <Link className="navLink" to="/bestPractices"><i class="fas fa-heart">Favourite Lectures</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/gallery"><i class="fas fa-images">Gallery</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/contacts"><i class="far fa-id-card">Contacts</i></Link>
                </li>
                { user.email ?
                <>
                <li>
                    <Link className="navLink" to="/chooseMentor"><i class="fas fa-user-graduate">Choose Mentor</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/createPractice"><i class="far fa-id-card">Create Practice</i></Link>
                </li>
                <li>
                    <p className={"navLink user"}>Welcome {user.email} <b>role</b> {user.role}</p>
                </li>
                <li> 
                    <Link className="navLink" to="/logout"><i class="far fa-sign-out-alt">Logout</i></Link>
                </li>
                
                </>
                :
                <>
                <li>
                    <Link className="navLink" to="/login"><i class="fas fa-sign-in-alt">Login</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/register"><i class="fas fa-user-plus">Register</i></Link>
                </li>
                </>}
            </ul>
        </nav>
    )
}

export default Navigation;