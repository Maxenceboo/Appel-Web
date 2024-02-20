import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Home: React.FC = () => {
	if (localStorage.getItem('role') === null)  {
		return <Navigate to="/login" />;
	} else if (localStorage.getItem('role') === "Admin") {
		return <Navigate to="/responsable" />;
	}
	return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<p>This is the content of the home page.</p>
			<Link to="/login">
				<button type="button">Go to Login</button>
			</Link>
		</div>
	);
};

export default Home;