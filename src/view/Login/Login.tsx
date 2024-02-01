import React, { useState } from 'react';
import './Login.css';
import axios from '../../Axios';
// import { useHistory } from 'react-router-dom';  //ca sert a faire des redirections dans le code (ex: apres une connexion, on redirige vers la page d'accueil)

interface LoginProps {
  // Vous pouvez passer ici des props supplémentaires, par exemple une fonction pour mettre à jour l'état global de l'authentification
}

const Login: React.FC<LoginProps> = () => {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ici, vous feriez la vérification des identifiants, par exemple en appelant votre API
    try {
      let response = await axios.post('/auth/signin', {username, password});
      let token = response.data.token;  //on recupere le token
      localStorage.setItem('token', token); // on stocke le token dans le local storage
      
      if (response.status === 200) {
        // Connexion réussie, redirigez l'utilisateur
        // history.push('/dashboard');
      } else {
        setError(response.data.message);
      }

    } catch (error) {
      setError('An error occurred. Please try again later.');
      return;
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Connexion</h2>
        <div className="input-group">
          <input
            id="username"
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">Connexion</button>
      </form>
    </div>
  );
};

export default Login;