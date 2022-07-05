import axios from "axios";
import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS } from "../Constants/ProductData";


export const BookData = () => async (dispatch) => {
	try {
		dispatch({ type: BOOK_LIST_REQUEST });
		const { data } = await axios.get(
			"https://rann-publishers.herokuapp.com/v1/book/getAllBooks"
		);

		dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: BOOK_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
