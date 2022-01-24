import './login.css';

const Login = () => {
    return (
        <div>
            <form class="login">
                <ul>
                    <li>
                        <label for="email"><b>Email</b></label>
                        <input type="email" id="email" placeholder='ivan@abv.bg'/>
                    </li>
                    <li>
                        <label for="password"><b>Password</b></label>
                        <input type="password" id="password" placeholder='********'/>
                    </li>
     
                    <li>
                        <button type='submit'>Register</button>
                    </li>
                    <li><a class="login" href="/register">Not Registered yet?<i>Register</i></a></li>
                </ul>


            </form>
        </div>
    )
}

export default Login;