import * as types from '../actions/ActionTypes';


const initialState = {
    user_id: '',
    password: ''
};

export default function user(state=initialState, action){
    switch(action.type){
    case types.INPUT_ID:
	return {
	    ...state,
	    user_id: action.user_id
	};
    case types.INPUT_PASSWORD:
	return{
	    ...state,
	    password: action.password
	};
    default:
	return state;
    }
}
