import './register.css';
import * as authServise from '../../services/authService'
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

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
        let pass = formData.get('pass');
        let repass = formData.get('repass');

        if(pass !== repass) {
            return;
        }

        authServise.register(firstName, lastName, email, pass, repass)
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
                        <label for="firstName"><b>First Name</b></label>
                        <input type="text" id="firstName" placeholder='Ivan'/>
                    </li>
                    <li className="input">
                        <label for="lastName"><b>Last Name</b></label>
                        <input type="text" id="lastName" placeholder='Ivanov'/>
                    </li>
                    <li className="input">
                        <label for="email"><b>Email</b></label>
                        <input type="email" id="email" placeholder='ivan@abv.bg'/>
                    </li>
                    <li>
                        <label for="gender"><b>Gender  </b></label>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male"></input>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"></input>
                    </li>
                    <li className="input">
                        <label for="password"><b>Password</b></label>
                        <input type="password" name="pass" id="pass" placeholder='********'/>
                    </li>
                    <li className="input">
                        <label for="rePass"><b>Repeat Password</b></label>
                        <input type="password" name="repass" id="rePass" placeholder='********'/>
                    </li>
                    <li>
                        <button class="register__button" type='submit'>Register</button>
                    </li>
                    <li><a className="register" href="/login">Already registered<i>Login</i></a></li>
                </ul>


            </form>
        </div>
    )
}

export default Register;