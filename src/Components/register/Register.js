import './register.css';

const Register = () => {
    return (
        <div>
            <form class="register">
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
                    <li><a href="/login">Already registered - Login</a></li>
                </ul>


            </form>
        </div>
    )
}

export default Register;