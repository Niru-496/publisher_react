import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { AuthorloginReducer, AuthorRegisterReducer} from "./Reducers/AuthorReducer";
import { BookListReducer } from "./Reducers/BookListReducer";


// const userInfoFromLStorage = localStorage.getItem("userInfo")
// 	? JSON.parse(localStorage.getItem("userInfo"))
// 	: null ;
const intialState = {
	AuthorLogin: {Info: {} },
};

let reducers = combineReducers({
	book_list: BookListReducer,
	AuthorLogin: AuthorloginReducer,
	AuthorRegister: AuthorRegisterReducer,
	// userDetails: UserProfileReducer,
});
const middleware = [thunk];

export const Store = configureStore(
	{ reducer: reducers },
	intialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
