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
	// check valid token in local storage to prevent unauthorized access to the home page
	// if (!localStorage.getItem('token')) {
	//     return <Navigate to="/login" />;
	// }
	// if (!localStorage.getItem('user')) {
	//     return <Navigate to="/login" />;
	// }

	const [etudiants, setEtudiants] = useState<Etudiant>();
	const [nom, setNom] = useState<string>('');
	const [prenom, setPrenom] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [justification, setJustification] = useState<string>('');
	const [calls, setCalls] = useState<Call[]>();
	const [idCall, setIdCall] = useState<number>();
	const [response, setResponse] = useState<string>('');

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
			let response = await axios.post(`/un_call/updatecall/${idCall}`, {justification});
			setNom('');
			setPrenom('');
			setEtudiants(undefined);
			setCalls(undefined);
			setError('');
			setJustification('');
			setIdCall(0);
			setResponse(response.data.message);
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
							onChange={(e) => {
								setNom(e.target.value)
							}}
						/>
					</div>
					<div className="input-group">
						<input
							id="prenom"
							type="text"
							placeholder="Prenom"
							className="gestionnaire-input"
							onChange={(e) => {
								setPrenom(e.target.value)
							}}
						/>
					</div>
					<button type="submit" className="gestionnaire-button">Rechercher</button>
				</form>
				{
					/* print response message */
					response && (
						<div className="gestionnaire-response">
							<h3>{response}</h3>
						</div>
					)
				}
				{
					/* print etudiant with type Etudiant*/
					etudiants && (
						<div className="gestionnaire-etudiant">
							<h2>Etudiant</h2>
							<div>
								<p>Code etudiant:</p> <p className="etudiant-info-select"> {etudiants.code_etudiant}</p>
								<p>Nom:</p> <p className="etudiant-info-select"> {etudiants.nom}</p>
								<p>Prenom:</p> <p className="etudiant-info-select"> {etudiants.prenom}</p>
							</div>
						</div>
					)
				}
				{
					// print all call de l'etudiant with radio button 
					calls && (
						<div>
							<h2>Calls</h2>
							<div className="gestionnaire-call">

								{
									calls.map((call) => {
										return (
											<div key={call.id_call} className="gestionnaire-call-item">
												<input type="radio" name="call" value={call.id_call} onChange={(e) => {
													setIdCall(parseInt(e.target.value))
												}}/>
												<label><p>{call.date_heure}</p> <p>id_ue: {call.id_ue}</p></label>
											</div>
										)
									})
								}
							</div>
						</div>

					)

				}

				{
					etudiants && (
						<div className="justify">
							<form onSubmit={handleSend} className="gestionnaire-form">
								<h3>Justification</h3>
								<div className="input-textarea">
							<textarea className="gestionnaire-textarea" onChange={(e) => {
								setJustification(e.target.value)
							}
							}>
							</textarea>
								</div>
								<button type="submit" className="gestionnaire-button">Envoyer</button>
							</form>
						</div>
					)
				}

				{
					/* print error message */
					error && (
						<div className="gestionnaire-error">
							<p>{error}</p>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default Gestionnaire;