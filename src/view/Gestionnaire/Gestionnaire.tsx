import React, { useState } from 'react';
import "./Gestionnaire.css";
import axios from 'axios';


type Etudiant = {
	code_etudiant: string;
	nom: string;
	prenom: string;
}

const Gestionnaire: React.FC = () => {
	const [etudiants, setEtudiants] = useState<Etudiant>();
	const [nom, setNom] = useState<string>('');
	const [prenom, setPrenom] = useState<string>('');
	const [error, setError] = useState<string>('');


	const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			let response = await axios.get(`/etudiant/${nom}/${prenom}`);
			setEtudiants(response.data);
		} catch (error) {
			console.log(error);
			setError('Etudiant non trouvé');
		}
	}


	return (
		<div className="gestionnaire-container">
			<div className='gestionnaire-group'>
				{/* input nom, prenom */}
                <h1>Gestionnaire</h1>
                <form onSubmit={handleSearch} className="gestionnaire-form">
					<div className="input-group">
						<input
							id="nom"
							type="text"
							placeholder="Nom"
							className="gestionnaire-input"
							onChange={(e) => {setNom(e.target.value)}}
						/>
					</div>
					<div className="input-group">
						<input
							id="prenom"
							type="text"
							placeholder="Prenom"
							className="gestionnaire-input"
							onChange={(e) => {setPrenom(e.target.value)}}
						/>
					</div>
					<button type="submit" className="gestionnaire-button">Rechercher</button>
				</form>
				{
					/* print etudiant with type Etudiant*/
					etudiants && (
						<div className="gestionnaire-etudiant">
							<h2>Etudiant</h2>
							<div>
								<h3>Code etudiant: {etudiants.code_etudiant}</h3>
								<h3>Nom: {etudiants.nom}</h3>
								<h3>Prenom: {etudiants.prenom}</h3>
							</div>
							{/* add inuput text for justify  */}
							<div className="justify">
								<h3>Justification</h3>
								<input type="text" className="gestionnaire-input"/>
							</div>
						</div>
					)
				}
				{
					/* print error message */
					error && (
						<div className="gestionnaire-error">
							<h3>{error}</h3>
						</div>
					)
				}
				<div className="gestionnaire-etudiant">
							<h2>Etudiant</h2>
							<div>
								<h3>Code etudiant: 54364536453</h3>
								<h3>Nom: dfghdfghdfgh</h3>
								<h3>Prenom: dfghfdgh</h3>
							</div>
							{/* add inuput text for justify  */}
							<div className="justify">
								<h3>Justification</h3>
								<input type="text" className="gestionnaire-input"/>
							</div>
						</div>
				<div className="gestionnaire-error">
					<h3>error</h3>
				</div>
				
			</div>
		</div>
	);
};

export default Gestionnaire;