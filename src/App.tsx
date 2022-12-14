import { useEffect } from "react";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute";
import Header from "./components/Header";
import ExamplePage from "./pages/ExamplePage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import { useAuth } from "./stores/AuthContext";
function App() {
	const { autoLogin, state: authState } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		autoLogin();
	}, []);

	return (
		<div className="w-screen h-screen bg-gray-100">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/persons" element={<GuardedRoute allowedRoles={["admin"]} />}>
					<Route index element={<User />} />
				</Route>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/example-page" element={<ExamplePage />} />
				<Route path="*" element={<h1>404 Page Not Found !!!!</h1>} />
			</Routes>
		</div>
	);
}

export default App;
