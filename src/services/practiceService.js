import { baseUrl } from '../constants';

export const createPractice = async ({practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject,creator}) => {
    let response = await fetch(`${baseUrl}/practice/create`, {
        method : "POST",
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject, creator})
        });
    let result = await response.json();
    console.log(result);
    return result;
}