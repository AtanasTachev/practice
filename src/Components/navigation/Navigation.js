import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <p className='appLogo'>
            This is a practice app!
            </p>
            <ul>
                <li>
                    <Link className="navLink" to="/"><i class="fal fa-presentation">Practice Courses</i></Link>    
                </li>
                <li>
                    <Link className="navLink" to="/chooseMentor"><i class="fas fa-user-graduate">Choose Mentor</i></Link>
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
                <li>
                    <Link className="navLink" to="/login"><i class="fas fa-sign-in-alt">Login</i></Link>
                    <li>
                    <Link className="navLink" to="/register"><i class="fas fa-user-plus">Register</i></Link>
                </li>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;