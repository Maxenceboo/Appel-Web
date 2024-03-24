import React, { useState } from 'react';
import "./Gestionnaire.css";
import axios from 'axios';


type Etudiant = {
	code_etudiant: string;
	nom: string;
	prenom: string;
}

type Call = {
    id_call: number;
    date_heure: string;
    abs$1: boolean;
    code_etudiant: number;
    id_user: number;
    id_ue: number;
    id_sousgrp: number;
}

const Gestionnaire: React.FC = () => {
	const [etudiants, setEtudiants] = useState<Etudiant>();
	const [nom, setNom] = useState<string>('');
	const [prenom, setPrenom] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [justification, setJustification] = useState<string>('');
	const [calls, setCalls] = useState<Call[]>();


	const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			let response = await axios.get(`/etudiant/${nom}/${prenom}`);
			setEtudiants(response.data);
		} catch (error) {
			console.log(error);
			setError('Etudiant non trouvé');
		}

		// get all calls
		try {
			if (etudiants) {
				let response = await axios.get(`/un_call/${etudiants.code_etudiant}`);
				setCalls(response.data);
			}
		} catch (error) {
			console.log(error);
			setError('Calls non trouvés');
		}
	}

	const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			let response = await axios.post(`/etudiant/${nom}/${prenom}`);
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
						</div>
					)
				}
				{
					// print all call de l'etudiant with checkbox 
					calls && (
						<div className="gestionnaire-etudiant">
							<h2>Appels</h2>
							{
								calls.map((call) => (
									<div key={call.id_call}>
										<h3>{call.date_heure}</h3>
										<h3>{call.abs$1}</h3>
										<input type="checkbox" />
									</div>
								))
							}
						</div>
					)

				}
				{
					etudiants && (
						<div className="justify">
							<form onSubmit={handleSend} className="gestionnaire-form">
								<h3>Justification</h3>
								<input type="text" className="gestionnaire-input" onChange={(e) => {setJustification(e.target.value)}}/>
								<button type="submit" className="gestionnaire-button">Envoyer</button>
							</form>
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
			</div>
		</div>
	);
};

export default Gestionnaire;