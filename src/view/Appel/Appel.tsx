import React, { useState } from 'react';
import './Appel.css';

type Etudiant = {
	id: number;
	nom: string;
	prenom: string;
	present: boolean;
};

const Appel: React.FC = () => {
	const [etudiants, setEtudiants] = useState<Etudiant[]>([
		{ id: 1, nom: 'DURO', prenom: 'Alexandre', present: false },
		{ id: 2, nom: 'MILLON', prenom: 'Mitch', present: false },
		{ id: 3, nom: 'PABOEUF', prenom: 'Alexandre', present: false },
		{ id: 4, nom: 'NOUGUE', prenom: 'Gabin', present: false },
		{ id: 5, nom: 'BOURRAGUE', prenom: 'Maximus', present: false },{ id: 1, nom: 'DURO', prenom: 'Alexandre', present: false },
		{ id: 2, nom: 'MILLON', prenom: 'Mitch', present: false },
		{ id: 3, nom: 'PABOEUF', prenom: 'Alexandre', present: false },
		{ id: 4, nom: 'NOUGUE', prenom: 'Gabin', present: false },
		{ id: 5, nom: 'BOURRAGUE', prenom: 'Maximus', present: false },{ id: 1, nom: 'DURO', prenom: 'Alexandre', present: false },
		{ id: 2, nom: 'MILLON', prenom: 'Mitch', present: false },
		{ id: 3, nom: 'PABOEUF', prenom: 'Alexandre', present: false },
		{ id: 4, nom: 'NOUGUE', prenom: 'Gabin', present: false },
		{ id: 5, nom: 'BOURRAGUE', prenom: 'Maximus', present: false },{ id: 1, nom: 'DURO', prenom: 'Alexandre', present: false },
		{ id: 2, nom: 'MILLON', prenom: 'Mitch', present: false },
		{ id: 3, nom: 'PABOEUF', prenom: 'Alexandre', present: false },
		{ id: 4, nom: 'NOUGUE', prenom: 'Gabin', present: false },
		{ id: 5, nom: 'BOURRAGUE', prenom: 'Maximus', present: false },{ id: 1, nom: 'DURO', prenom: 'Alexandre', present: false },
		{ id: 2, nom: 'MILLON', prenom: 'Mitch', present: false },
		{ id: 3, nom: 'PABOEUF', prenom: 'Alexandre', present: false },
		{ id: 4, nom: 'NOUGUE', prenom: 'Gabin', present: false },
		{ id: 5, nom: 'BOURRAGUE', prenom: 'Maximus', present: false }
	]);

	const handlePresenceChange = (id: number) => {
		setEtudiants(etudiants.map(etudiant => 
			etudiant.id === id ? { ...etudiant, present: !etudiant.present } : etudiant
		));
	};

	const envoyerAppel = () => {
		console.log('Appel envoyé:', etudiants);
		alert('Appel envoyé avec succès !');
	};

	return (
		<div className='appel-dahboard'>
			<div className="appel-container">
				<h1>Appel des étudiants</h1>
				<h3>le cours</h3>
				<p>Cochez les étudiants présents</p>
				<ul className="liste-etudiants">
					{etudiants && etudiants.map(etudiant => (
						<li key={etudiant.id} className={`etudiant ${etudiant.present ? 'present' : 'absent'}`}>
							<label className='label'>
									<input
									className='checkbox'
										type="checkbox"
										checked={etudiant.present}
										onChange={() => handlePresenceChange(etudiant.id)}
									/>
									{etudiant.prenom} {etudiant.nom}
							</label>
								<span className="status">{etudiant.present ? 'Présent' : 'Absent'}</span>
						</li>
					))}
				</ul>
				<button className="bouton-envoyer-appel" onClick={envoyerAppel}>
					Envoyer l'appel
				</button>
			</div>
		</div>
	);
};

export default Appel;
