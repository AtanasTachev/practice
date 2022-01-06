import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <Link to="/">Practice</Link>
        </nav>
    )
}

export default Navigation;