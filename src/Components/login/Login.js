import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService'
import './login.css';

const Login = () => {
    const { login } = useContext( AuthContext )

    const navigate = useNavigate();
    
    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let pass = formData.get('pass');

        authService.login(email, pass)
        .then((authData) => {
            login(authData);
            navigate('/');
        })
        .catch(error => {
            console.log({message: error.message});
        })


    }

    return (
        <div>
            <form className="login" method="POST" onSubmit={onLoginHandler}>
                <ul>
                    <li class="input">
                        <label for="email"><b>Email</b></label>
                        <input type="email" name="email" id="email" placeholder='ivan@abv.bg'/>
                    </li>
                    <li class="input">
                        <label for="password"><b>Password</b></label>
                        <input type="password" name="pass" id="password" placeholder='********'/>
                    </li>
     
                    <li>
                        <button class="login__button" type='submit'>Login</button>
                    </li>
                    <li><a class="login" href="/register">Not Registered yet?<i>Register</i></a></li>
                </ul>
            </form>
        </div>
    )
}

export default Login;