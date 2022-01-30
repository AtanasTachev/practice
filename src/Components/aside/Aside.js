import { Link } from 'react-router-dom';
import './aside.css';

const Aside = () => {
    return (
    <aside>
        <ul class="aside__ul">
            <li class="btn__aside"><Link to="/"><i class="fal fa-presentation">Practice Courses</i></Link></li>
            <li class="btn__aside"><Link to="/about"><i class="fas fa-history">About</i></Link></li>
            <li class="btn__aside"><Link to="/bestPractices"><i class="fas fa-heart">Favourite Lectures</i></Link></li>
            <li class="btn__aside"><Link to="/gallery"><i class="fas fa-images">Gallery</i></Link></li>
            <li class="btn__aside"><Link to="/chooseMentor"><i class="fas fa-user-graduate">Choose Mentor</i></Link></li>
            <li class="btn__aside"><Link to="/contacts"><i class="far fa-id-card">Contacts</i></Link></li>
        </ul>
    </aside>
    );
}

export default Aside;