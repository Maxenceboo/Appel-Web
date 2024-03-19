import React, { useState } from 'react';
import './Responsable.css';

type GroupesType = {
  [key: string]: string[];
};

const Responsable: React.FC = () => {
    const [selectPromo, setSelectPromo] = useState<string>('');
    const [selectGroupe, setSelectGroupe] = useState<string>('');
    const [promotions, setPromotions] = useState<string[]>(['Licence 1 NEC', 'Licence 2 NEC', 'Licence 3 NEC']);
    const [groupes, setGroupes] = useState<GroupesType>({});
    const [nouveauGroupe, setNouveauGroupe] = useState<string>('');
    const [nouvellePromo, setNouvellePromo] = useState<string>('');

    const ajouterPromotion = () => {
        if (nouvellePromo && !promotions.includes(nouvellePromo)) {
            setPromotions([...promotions, nouvellePromo]);
            setNouvellePromo('');
        }
    };

    const ajouterGroupe = () => {
        if (nouveauGroupe && selectPromo && !groupes[selectPromo]?.includes(nouveauGroupe)) {
            const updatedGroupes = { ...groupes, [selectPromo]: [...(groupes[selectPromo] || []), nouveauGroupe] };
            setGroupes(updatedGroupes);
            setNouveauGroupe('');
        }
    };

    const handleSubmit = () => {
        alert(`Accès à la liste de : ${selectPromo} - ${selectGroupe}`);
    };

    return (
        <div className="responsable-dashboard">
            <div className="responsable-selection-container">
                <h1>Tableau de bord - Gestionnaire</h1>
                <div className="select-group">
                    <label htmlFor="promotion-select">Promotion :</label>
                    <select
                        id="promotion-select"
                        value={selectPromo}
                        onChange={(e) => { setSelectPromo(e.target.value); setSelectGroupe(''); }}
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
                        {selectPromo && groupes[selectPromo]?.map((groupe: string, index: number) => (
                            <option key={index} value={groupe}>{groupe}</option>
                        ))}
                    </select>
                </div>
                <button className="responsable-button-appel" onClick={handleSubmit}>
                    Obtenir la liste des étudiants
                </button>

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

                {selectPromo && (
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
                )}
            </div>
        </div>
    );
};

export default Responsable;
