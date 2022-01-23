import './login.css';

const Form = () => {
    return (
        <div>
            <form class="login">
                <ul>
                    <li>
                        <label for="firstName"><b>First Name</b></label>
                        <input type="text" id="firstName" placeholder='Ivan'/>
                    </li>
                    <li>
                        <label for="lastName"><b>Last Name</b></label>
                        <input type="text" id="lastName" placeholder='Ivanov'/>
                    </li>
                    <li>
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
                    <li>
                        <button type='submit'>Submit</button>
                    </li>
                    <li><a href="/register">Not Registered yet? - Register</a></li>
                </ul>


            </form>
        </div>
    )
}

export default Form;