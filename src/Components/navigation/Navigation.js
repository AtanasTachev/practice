import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <Link className="navLink" to="/">Practice</Link>
            <Link className="navLink" to="/chooseMentor">Choose Mentor</Link>
            <Link className="navLink" to="/bestPractices">Best practices</Link>
            <Link className="navLink" to="/gallery">Gallery</Link>
            <Link className="navLink" to="/login">Login</Link>
        </nav>
    )
}

export default Navigation;