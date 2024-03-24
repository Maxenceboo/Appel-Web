import './App.css';
import Login from '../Login/Login';
import Welcome from '../Welcome/Welcome';
import Responsable from '../Responsable/Responsable';
import Professeur from '../Professeur/Professeur';
import Appel from '../Appel/Appel';
import Home from '../Home/Home';
import Gestionnaire from '../Gestionnaire/Gestionnaire';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="/responsable" Component={Responsable} />
      <Route path="/professeur" Component={Professeur} />
      <Route path="/appel" Component={Appel} />
      <Route path="/home" Component={Home} />
      <Route path="/gestionnaire" Component={Gestionnaire} />
    </Routes>
  </Router>
  );
}

export default App;
