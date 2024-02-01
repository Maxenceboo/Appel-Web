import React, { useState } from 'react';
import './Responsable.css';

const Responsable: React.FC = () => {
    // État initial reprenant celui de Professeur avec ajout pour nouvelles promotions et groupes
    const [selectPromo, setSelectPromo] = useState('');
    const [selectGroupe, setSelectGroupe] = useState('');
    const [promotions, setPromotions] = useState(['Licence 1 NEC', 'Licence 2 NEC', 'Licence 3 NEC']);
    const [groupes, setGroupes] = useState(['Groupe 1', 'Groupe 2', 'Groupe 3']);
    const [nouvellePromo, setNouvellePromo] = useState('');
    const [nouveauGroupe, setNouveauGroupe] = useState('');

    // Fonctions pour ajouter des promotions et des groupes
    const ajouterPromotion = () => {
        if (nouvellePromo && !promotions.includes(nouvellePromo)) {
            setPromotions([...promotions, nouvellePromo]);
            setNouvellePromo('');
        }
    };

    const ajouterGroupe = () => {
        if (nouveauGroupe && !groupes.includes(nouveauGroupe)) {
            setGroupes([...groupes, nouveauGroupe]);
            setNouveauGroupe('');
        }
    };

    // Fonction pour simuler l'envoi de données
    const handleSubmit = () => {
        alert(`Accès à la liste de : ${selectPromo} - ${selectGroupe}`);
    };

    return (
        <div className="responsable-dashboard">
            
            <div className="responsable-selection-container">
                <h1>Tableau de bord - Gestionnaire</h1>
                {/* Sélection des promotions et des groupes existants */}
                <div className="select-group">
                    <label htmlFor="promotion-select">Promotion :</label>
                    <select
                        id="promotion-select"
                        value={selectPromo}
                        onChange={(e) => setSelectPromo(e.target.value)}
                    >
                        <option value="" disabled>Sélectionnez une promotion</option>
                        {promotions.map((promo, index) => (
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
                <button className="responsable-button-appel" onClick={handleSubmit}>
                    Obtenir la liste des étudiants
                </button>

                {/* Ajout de nouvelles promotions et de nouveaux groupes */}
                <div className="responsable-form-container">
                    <input
                        type="text"
                        placeholder="Nouvelle promotion"
                        value={nouvellePromo}
                        onChange={(e) => setNouvellePromo(e.target.value)}
                        className="responsable-input"
                    />
                    <button onClick={ajouterPromotion} className="responsable-button">Ajouter Promotion</button>
                </div>
                <div className="responsable-form-container">
                    <input
                        type="text"
                        placeholder="Nouveau groupe"
                        value={nouveauGroupe}
                        onChange={(e) => setNouveauGroupe(e.target.value)}
                        className="responsable-input"
                    />
                    <button onClick={ajouterGroupe} className="responsable-button">Ajouter Groupe</button>
                </div>
            </div>
        </div>
    );
};

export default Responsable;
