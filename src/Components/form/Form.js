import './form.css';

const Form = () => {
    return (
        <div>
            <form class="form">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName"/>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="male" value="male"></input>
                <label for="female">Female</label>
                <input type="radio" name="gender" id="female" value="female"></input>


            </form>
        </div>
    )
}

export default Form;