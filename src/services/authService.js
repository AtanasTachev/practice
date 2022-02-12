import {baseUrl} from '../constants'

export const register = async (firstName, lastName, email, gender, pass, repass) => {
    let response = await fetch(`${baseUrl}/users/register`, {
        method : "POST" ,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, gender, pass, repass})
    });
    let result = await response.json();
    return result;
}

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    let jsonResult = await response.json();
    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};