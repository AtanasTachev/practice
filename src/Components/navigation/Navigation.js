import './navigation.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Navigation = () => {

const { user } = useContext(AuthContext);
const userId = user._id

const [userInfo, setUserInfo] = useState([]);
useEffect(() => {
      authService.getUser(userId)
      .then(result => {
          setUserInfo(result);
      })
}, []);

// const userAvailable = Boolean(user.email !== '');
// console.log(userAvailable);
// const isAdmin = Boolean(userInfo.role === 'admin');
// if (userAvailable || isAdmin) {
//     return
// }
    return (
        <nav className='nav'>
            <p className='appLogo'>PRACTICE TO MASTER</p>
            <ul>
                <li>
                    <Link className="navLink" to="/"><i className="fal fa-presentation">Practice Courses</i></Link>    
                </li>
                <li>
                    <Link className="navLink" to="/about"><i className="fas fa-history">About</i></Link>    
                </li>
                <li>
                    <Link className="navLink" to="/bestPractices"><i className="fas fa-heart">Favourite Lectures</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/gallery"><i className="fas fa-images">Gallery</i></Link>
                </li>
                <li>
                    <Link className="navLink" to="/contacts"><i className="far fa-id-card">Contacts</i></Link>
                </li>
                {/* { userAvailable ?
                <>
                    <li>
                        <Link className="navLink" to="/chooseMentor"><i className="fas fa-user-graduate">Choose Mentor</i></Link>
                    </li>
                    <li>
                        <p className={"navLink user"}>Welcome <b>{user.email}</b> role <b>{userInfo.role}</b></p>
                    </li>
                    <li> 
                        <Link className="navLink" to="/logout"><i className="far fa-sign-out-alt">Logout</i></Link>
                    </li>
                </>
                :
                <>
                    <li>
                        <Link className="navLink" to="/login"><i className="fas fa-sign-in-alt">Login</i></Link>
                    </li>
                    <li>
                        <Link className="navLink" to="/register"><i className="fas fa-user-plus">Register</i></Link>
                    </li>
                </>}
                {isAdmin ?
                    <li>
                        <Link className="navLink" to="/createPractice"><i className="far fa-id-card">Create Practice</i></Link>
                    </li>
                    :<></> 
                } */}
            </ul>
        </nav>
    )
}

export default Navigation;