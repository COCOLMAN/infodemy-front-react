import * as types from '../actions/ActionTypes';


const initialState = {
    user_id: '',
    password: ''
};

export default function user(state=initialState, action){
    switch(action.type){
    case types.SET_ID:
	return {
	    ...state,
	    user_id: action.user_id
	};
    case types.SET_PASSWORD:
	return{
	    ...state,
	    password: action.password
	};
    case types.SET_TOKEN:
	return{
	    ...state,
	    token: action.token
	};
    default:
	return state;
    }
}
