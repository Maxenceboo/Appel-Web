import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    // check valid token in local storage to prevent unauthorized access to the home page 
    // if (!localStorage.getItem('token')) {
    //     return <Navigate to="/login" />;
    // }
    // if (!localStorage.getItem('user')) {
    //     return <Navigate to="/login" />;
    // }

    try {
        setUsername(JSON.parse(localStorage.getItem('user') as string).login)
    } catch (error) {
        console.log(error);
    }



    // Function to handle logout
    const handleLogout = () => {
        // Clear the local storage or any other sign-in credentials
        localStorage.clear();
        // Redirect to the login page
        window.location.href = "/login";
    };

    return (
        <div className="home-container">
            <h1>Bienvenue, {username ? username : 'Utilisateur'}</h1>
            <p>Sélectionnez une fonctionnalité</p>
            <div className="navigation-buttons">
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') as string).role === 'admin' && <Link to="/home"><button type="button">Gestion Utilisateurs</button></Link>}
                {localStorage.getItem('user') && (JSON.parse(localStorage.getItem('user') as string).role === 'professeur' || JSON.parse(localStorage.getItem('user') as string).role === 'responsable') && <Link to="/professeur"><button type="button">Appel</button></Link>}
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') as string).role === 'responsable' && <Link to="/responsable"><button type="button">Liste Étudiants</button></Link>}
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user') as string).role === 'gestionnaire' && <Link to="/addEtudiant"><button type="button">Gestion des absence</button></Link>}
                
                <Link to="/professeur"><button type="button">Appel</button></Link>   
                <Link to="/professeur"><button type="button">Liste Étudiants</button></Link>
                <Link to="/responsable"><button type="button">Gestion Listes</button></Link>
                <Link to="/gestionnaire"><button type="button">Gestion des absence</button></Link>
                <Link to="/addEtudiant"><button type="button">Absence</button></Link>
                <button type="button" onClick={handleLogout}>Déconnexion</button>
            </div>
        </div>
    );
};

export default Home;
