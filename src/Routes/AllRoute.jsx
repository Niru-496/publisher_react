import { Route, Routes } from "react-router";
import Dashboard from "../Content/Dashboard/AuthorDashBoard";
import Home from "../Content/Home/Home";
import SignIn from "../Content/Login/AuthorSignIn";
import AuthorSignup from "../Content/Signup/AuthorSignUp";

export default function AllRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/AuthorSignUp" element={<AuthorSignup />} />
				<Route path="/AuthorSignIn" element={<SignIn />} />
				<Route path="/AuthorDashBoard" element={<Dashboard/>} />
			</Routes>
		</>
	);
}
