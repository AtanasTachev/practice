import './form.css';

const Form = () => {
    return (
        <div>
            <form>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName"/>
                <label for="male">Male</label>
                <input type="radio" name="gender" id="male" value="male"></input>


            </form>
        </div>
    )
}

export default Form;