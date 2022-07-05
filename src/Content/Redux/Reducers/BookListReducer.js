import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS} from "../Constants/BookList";



export const BookListReducer = (state = { data_list: [] }, action) => {
	switch (action.type) {
		case BOOK_LIST_REQUEST:
			return { loading: true, books: [] };
		case BOOK_LIST_SUCCESS:
			return { loading: false, data_list: action.payload };
		case BOOK_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};