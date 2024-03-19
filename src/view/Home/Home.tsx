import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    // if (localStorage.getItem('role') === null) {
    //     return <Navigate to="/login" />;
    // } else if (localStorage.getItem('role') === "Admin") {
    //     return <Navigate to="/responsable" />;
    // }

    // // Function to handle logout
    // const handleLogout = () => {
    //     // Clear the local storage or any other sign-in credentials
    //     localStorage.clear();
    //     // Redirect to the login page
    //     window.location.href = "/login";
    // };
	
    return (
        <div className="home-container">
            <h1>Bienvenue, {username ? username : 'Utilisateur'}</h1>
            <p>Sélectionnez une fonctionnalité</p>
            <div className="navigation-buttons">
                <Link to="/compte"><button type="button">Compte</button></Link>
                <Link to="/appel"><button type="button">Appel</button></Link>
                <Link to="/professeur"><button type="button">Liste Étudiants</button></Link>
                <Link to="/responsable"><button type="button">Gestion Listes</button></Link>
                {/* <button type="button" onClick={handleLogout}>Déconnexion</button> */}
            </div>
        </div>
    );
};

export default Home;
