import { baseUrl } from '../constants';

export const createPractice = async (practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject) => {
    let response = await fetch(`${baseUrl}/practice/create`, {
        method : "POST",
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify({practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject})
        });
    let result = await response.json();
    return result;
}