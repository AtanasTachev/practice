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
                    <Link className="navLink" to="/">Practice</Link>    
                </li>
                <li>
                    <Link className="navLink" to="/chooseMentor">Choose Mentor</Link>
                </li>
                <li>
                    <Link className="navLink" to="/bestPractices">Best practices</Link>
                </li>
                <li>
                    <Link className="navLink" to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link className="navLink" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;