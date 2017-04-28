import * as types from '../actions/ActionTypes';


const initialState = {
    user_id: '',
    password: '',
    confirm_password: '',
    email: '',
    name: '',
    phone: '',
    token: '',
    logined: false
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
    case types.CONFIRM_PASSWORD:
	return{
	    ...state,
	    confirm_password: action.confirm_password
	};
    case types.SET_EMAIL:
	return{
	    ...state,
	    email: action.email
	};
    case types.SET_NAME:
	return{
	    ...state,
	    name: action.name
	};
    case types.SET_PHONE:
	return{
	    ...state,
	    phone: action.phone
	};
    case types.SET_TOKEN:
	return{
	    ...state,
	    token: action.token
	};
    case types.SET_MYIMG:
	return{
	    ...state,
	    image: action.image
	};
    case types.LOGINED:
	return{
	    ...state,
	    logined: !state.logined
	};
    default:
	return state;
    }
}
