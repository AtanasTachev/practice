import { Link } from 'react-router-dom';
import './aside.css';

const Aside = () => {
    <aside>
        <ul>
            <li><Link to="/">Practice Courses</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bestPractices">Best Practices</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/chooseMentor">Choose Mentor</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </aside>
}

export default Aside;