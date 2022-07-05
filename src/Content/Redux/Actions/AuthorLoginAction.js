import axios from "axios";
import {
	AUTHOR_LOGIN_FAIL,
	AUTHOR_LOGIN_REQUEST,
	AUTHOR_LOGIN_SUCCESS,
	AUTHOR_REGISTER_FAIL,
	AUTHOR_REGISTER_REQUEST,
	AUTHOR_REGISTER_SUCCESS,
} from "../Constants/AuthorConstant";

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: AUTHOR_LOGIN_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { profile, tokens } = await axios.post(
			`https://rann-publishers.herokuapp.com/v1/auth/user/loginAuthor`,
			{ email, password },
			config
		);

		dispatch({ type: AUTHOR_LOGIN_SUCCESS, payload: profile, tokens });

	} catch (error) {
		dispatch({
			type: AUTHOR_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// export const logOut = () => (dispatch) => {
// 	localStorage.removeItem("userInfo");
// 	dispatch({ type: USER_LOGOUT });
// 	window.location.href = "/login";
// };

export const ReGiStEr = (firstName,lastName, email, password) => async (dispatch) => {
	try {
		dispatch({ type: AUTHOR_REGISTER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { profile, tokens } = await axios.post(
			`https://rann-publishers.herokuapp.com/v1/auth/user/registerAuthor`,
			{ firstName, lastName, email, password },
			config
		);

		dispatch({ type: AUTHOR_REGISTER_SUCCESS, payload: profile, tokens });
		dispatch({ type: AUTHOR_LOGIN_SUCCESS, payload: profile, tokens });


	} catch (error) {
		dispatch({
			type: AUTHOR_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
