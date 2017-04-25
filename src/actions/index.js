import * as types from './ActionTypes';


export function setId(user_id){
    return {
	type: types.SET_ID,
	user_id
    };
}

export function setPassword(password){
    return {
	type: types.SET_PASSWORD,
	password
    };
}

export function setToken(token){
    return {
	type: types.SET_TOKEN,
	token
    };
}

