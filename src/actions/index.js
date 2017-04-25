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

export function confirmPassword(confirm_password){
    return {
	type: types.CONFIRM_PASSWORD,
	confirm_password
    };
}

export function setEmail(email){
    return {
	type: types.SET_EMAIL,
	email
    };
}

export function setName(name){
    return{
	type: types.SET_NAME,
	name
    };
}

export function setPhone(phone){
    return{
	type: types.SET_PHONE,
	phone
    };
}

export function setToken(token){
    return {
	type: types.SET_TOKEN,
	token
    };
}

