import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './aside.css';

const Aside = () => {
const { user } = useContext(AuthContext)

    return (
    <aside>
        <ul className="aside__ul">
            <li className="btn__aside"><Link to="/"><i className="fal fa-presentation">Practice Courses</i></Link></li>
            <li className="btn__aside"><Link to="/about"><i className="fas fa-history">About</i></Link></li>
            <li className="btn__aside"><Link to="/bestPractices"><i className="fas fa-heart">Favourite Lectures</i></Link></li>
            <li className="btn__aside"><Link to="/gallery"><i className="fas fa-images">Gallery</i></Link></li>
            <li className="btn__aside"><Link to="/contacts"><i className="far fa-id-card">Contacts</i></Link></li>
            { user.email ?
            <>
            <li className="btn__aside">
                <Link  to="/createPractice"><i className="far fa-id-card">Create Practice</i></Link>
            </li>
            <li className="btn__aside"><Link to="/chooseMentor"><i className="fas fa-user-graduate">Choose Mentor</i></Link></li>
            </>
            :<>
            </>
            }
            
        </ul>
    </aside>
    );
}

export default Aside;