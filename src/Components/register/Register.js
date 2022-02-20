import './register.css';
import * as authServise from '../../services/authService'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const onRegisterHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let email = formData.get('email');
        let gender = formData.get('gender');
        let role = formData.get('role');
        let pass = formData.get('pass');
        let repass = formData.get('repass');

        if(pass !== repass) {
            return;
        }

        authServise.register(firstName, lastName, email, gender, role, pass, repass)
        .then(authData => {
            login(authData)
            navigate('/');
        });
    }

    return (
        <div>
            <form onSubmit={onRegisterHandler} className="register" method="POST" >
                <ul>
                    <li className="input">
                        <label htmlFor="firstName"><b>First Name</b></label>
                        <input type="text" name="firstName" id="firstName" placeholder='Ivan'/>
                    </li>
                    <li className="input">
                        <label htmlFor="lastName"><b>Last Name</b></label>
                        <input type="text" name="lastName"  id="lastName" placeholder='Ivanov'/>
                    </li>
                    <li className="input">
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email"  name="email" id="email" placeholder='ivan@abv.bg'/>
                    </li>
                    <li>
                        <label htmlFor="gender"><b>Gender  </b></label>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male"></input>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"></input>
                    </li>
                    <li className="input">
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" name="pass" id="pass" placeholder='********'/>
                    </li>
                    <li className="input">
                        <label htmlFor="rePass"><b>Repeat Password</b></label>
                        <input type="password" name="repass" id="rePass" placeholder='********'/>
                    </li>
                    <li>
                        <label htmlFor="role"><b>Role</b></label>
                        <label htmlFor="student">Student</label>
                        <input type="radio" name="role" id="student" value="student"></input>
                        <label htmlFor="mentor">Mentor</label>
                        <input type="radio" name="role" id="mentor" value="mentor"></input>
                        <label htmlFor="admin">Admin</label>
                        <input type="radio" name="admin" id="admin" value="admin"></input>
                    </li>
                    <li>
                        <button className="register__button" type='submit'>Register</button>
                    </li>
                    <li><a className="register" href="/login">Already registered<i>Login</i></a></li>
                </ul>


            </form>
        </div>
    )
}

export default Register;