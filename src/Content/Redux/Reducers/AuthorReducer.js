import {

	AUTHOR_REGISTER_FAIL,
	AUTHOR_REGISTER_REQUEST,
	AUTHOR_REGISTER_SUCCESS,

	AUTHOR_LOGIN_FAIL,
	AUTHOR_LOGIN_REQUEST,
	AUTHOR_LOGIN_SUCCESS,
} from "../Constants/AuthorConstant";

export const AuthorloginReducer = (
	state = {},
	action
) => {
	switch (action.type) {
		case AUTHOR_LOGIN_REQUEST:
			return { loading: true };
		case AUTHOR_LOGIN_SUCCESS:
			return { loading: false, Info: action.payload };
		case AUTHOR_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};


export const AuthorRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case AUTHOR_REGISTER_REQUEST:
			return { loading: true };
		case AUTHOR_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case AUTHOR_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
