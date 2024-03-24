import React, { useState, useEffect } from 'react';
import axios from '../../Axios';
import './Professeur.css';

interface Promo {
	libetape: string;
}

interface Groupe {
	nom: string;
}

const Professeur: React.FC = () => {
	// check valid token in local storage to prevent unauthorized access to the home page
	// if (!localStorage.getItem('token')) {
	//     return <Navigate to="/login" />;
	// }
	// if (!localStorage.getItem('user')) {
	//     return <Navigate to="/login" />;
	// }
	const [selectPromo, setSelectPromo] = useState('');
	const [promo, setPromo] = useState<string[]>([]);
	const [selectGroupe, setSelectGroupe] = useState('');
	const [groupes, setGroupes] = useState<string[]>([]);

	async function fetchPromotions () {
		try {
			let promotions: string[] = [];
			const response = await axios.get<Promo[]>('/promo/getAllPromo');

			promotions = response.data.map((promo) => promo.libetape);
			setPromo(promotions || ['Licence 1 NEC', 'Licence 2 NEC', 'Licence 3 NEC']);
		} catch (error) {
			console.log(error)
		}
	}

	async function fetchGroups () {
		try {
			let groupes: string[] = [];
			const response = await axios.get<Groupe[]>('/sousgrp/getSousGrpsByPromo?libetape=' + selectPromo);
			groupes = response.data.map((groupe) => groupe.nom);

			setGroupes(groupes || ['Groupe 1', 'Groupe 2', 'Groupe 3']);
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => {
		fetchGroups();
		fetchPromotions()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	

	useEffect(() => {
		setSelectGroupe('');
	}, [selectPromo]);


	const handleSubmit = () => {
		alert(`Accès à la liste de : ${selectPromo} - ${selectGroupe}`);
	};

	return (
		<div className="professeur-dashboard">
			<div className="selection-container">
				<h1>Tableau de bord</h1>
				<div className="select-group">
						<label htmlFor="promotion-select">Promotion :</label>
						<select 
							id="promotion-select" 
							value={selectPromo} 
							onChange={(e) => setSelectPromo(e.target.value)}
						>
							<option value="" disabled>Selectionnez une promotion</option>
							{promo.map((promo: string, index: number) => (
								<option key={index} value={promo}>{promo}</option>
							))}
						</select>
				</div>

				<div className="select-group">
						<label htmlFor="group-select">Groupe :</label>
						<select 
							id="group-select" 
							value={selectGroupe} 
							onChange={(e) => setSelectGroupe(e.target.value)}
							disabled={!selectPromo}
						>
							<option value="" disabled>Sélectionnez un groupe</option>
							{groupes.map((groupe, index) => (
								<option key={index} value={groupe}>{groupe}</option>
							))}
						</select>
				</div>

				<button className="button-appel" onClick={handleSubmit} disabled={!selectGroupe}>
					Obtenir la liste des étudiants
				</button>
			</div>
		</div>
	);
}

export default Professeur;
