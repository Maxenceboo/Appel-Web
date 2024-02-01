import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import "./Welcome.css";

const Welcome: React.FC = () => {
    // https://fr.legacy.reactjs.org/docs/getting-started.html
    // https://fr.react.dev/
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