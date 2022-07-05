import { Route, Routes } from "react-router";
import Dashboard from "../Content/Dashboard/AuthorDashBoard";
import BookUplaod from "../Content/Dashboard/BookUplaod";
import FileUpload from "../Content/Dashboard/FileUplaod";
import Home from "../Content/Home/Home";
import AuthorSignIn from "../Content/Login/AuthorSignIn";
import PublisherSignIn from "../Content/Login/PublisherSigIn";
import AuthorSignup from "../Content/Signup/AuthorSignUp";
import PublisherSignUp from "../Content/Signup/PublisherSignup";

export default function AllRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AuthorSignUp" element={<AuthorSignup />} />
				<Route path="/PublisherSignUp" element={<PublisherSignUp />} />
				<Route path="/PublisherSignIn" element={<PublisherSignIn />} />
				<Route path="/AuthorSignIn" element={<AuthorSignIn />} />
				<Route path="/AuthorDashBoard" element={<Dashboard />} />
				<Route path="/BookUplaod" element={<BookUplaod />} />
			</Routes>
		</>
	);
}
