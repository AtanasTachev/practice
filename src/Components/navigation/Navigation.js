import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <Link className="navLink" to="/">Practice</Link>
            <Link className="navLink" to="/">Choose Mentor</Link>
            <Link className="navLink" to="/">Best practices</Link>
            <Link className="navLink" to="/">Gallery</Link>
        </nav>
    )
}

export default Navigation;