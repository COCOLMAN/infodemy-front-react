import * as types from './ActionTypes';


export function inputId(user_id){
    return {
	type: types.INPUT_ID,
	user_id
    };
}


export function inputPassword(password){
    return {
	type: types.INPUT_PASSWORD,
	password
    };
}
