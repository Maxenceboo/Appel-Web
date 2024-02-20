import React from 'react';
import { Link } from 'react-router-dom';
import "./Welcome.css";

const Welcome: React.FC = () => {
    return (
        <div className="welcome-container">
            <div className='welcome-group'>
                <h1>Appel Web</h1>
                <h2>Université de Pau et des Pays de l'Adour</h2>
                <p>Veuillez vous authentifier pour vous connecter au service d'appel de l'université.</p>
                <Link to="/login">
                    <button type="button">Accéder à l'application</button>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;