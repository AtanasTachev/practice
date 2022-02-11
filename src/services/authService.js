import {baseUrl} from '../constants'

export const register = async (firstName, lastName, email, gender, pass, repass) => {
    let response = await fetch(`${baseUrl}/users/register`, {
        method = "POST" ,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, gender, pass, repass})
    });
    let result = await response.json();
    return result;
}