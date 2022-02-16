import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as practiceService from '../../services/practiceService'
import './createPractice.css';

const CreatePractice = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const onCreatePracticeHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let practiceTitle = formData.get('practiceTitle');
        let mentor = formData.get('mentor');
        let startDate = formData.get('startDate');
        let duration = formData.get('duration');
        let dateOfExam = formData.get('dateOfExam');
        let dueDateOfProject = formData.get('dueDateOfProject');
        const creator = user._id;

        practiceService.createPractice({
            practiceTitle, 
            mentor,
            startDate,
            duration,
            dateOfExam,
            dueDateOfProject,
            creator})
        .then(result => {
            navigate('/');
        })
        .catch(error => {
            console.log({message: error.message});
        })
    }

    return (
        <div>
            <form className="createPractice" method="POST" onSubmit={onCreatePracticeHandler}>
                <ul>
                    <li class="input">
                        <label for="practiceTitle"><b>Practice Title</b></label>
                        <input type="text" name="practiceTitle" id="practiceTitle" placeholder='practice title'/>
                    </li>
                    <li class="input">
                        <label for="mentor"><b>Mentor</b></label>
                        <input type="text" name="mentor" id="mentor" placeholder='Peter Petrov'/>
                    </li>
                    <li class="input">
                        <label for="startDate"><b>Start Date</b></label>
                        <input type="date" name="startDate" id="startDate" placeholder='12.05.2022'/>
                    </li>
                    <li class="input">
                        <label for="duration"><b>Duration</b></label>
                        <input type="number" name="duration" id="duration" placeholder='8 weeks'/>
                    </li>
                    <li class="input">
                        <label for="dateOfExam"><b>Date of Exam</b></label>
                        <input type="date" name="dateOfExam" id="dateOfExam" placeholder='04.07.2022'/>
                    </li>
                    <li class="input">
                        <label for="dueDateOfProject"><b>Due Date of Project</b></label>
                        <input type="date" name="dueDateOfProject" id="dueDateOfProject" placeholder='Peter Petrov'/>
                    </li>                  

     
                    <li>
                        <button class="createPractice__button" type='submit'>Create Practice</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default CreatePractice;