import React, { useState, useEffect } from 'react';
import axios from '../../Axios';
import './Professeur.css';

interface Promo {
    libetape: string;
}


const Professeur: React.FC = () => {

    const [selectPromo, setSelectPromo] = useState<string>('');
    const [promo, setPromo] = useState<string[]>([]);
    const [selectGroupe, setSelectGroupe] = useState('');


    const groupes = ['Groupe 1', 'Groupe 2', 'Groupe 3'];

    
    useEffect(() => {
        const getPromotions = async () => {
            
            let promotions: string[] = [];
            
            try{
                const response = await axios.get('/promo/getAllPromo');
                promotions = response.data.map((promo: Promo) => promo.libetape);
                return promotions;
            } catch (error) {
                console.log(error);
            } finally {
                console.log(Error);
            }
        }
        
        const fetchPromotions = async () => {
            try {
                const response = await getPromotions();
                setPromo(response || ['Licence 1 NEC', 'Licence 2 NEC', 'Licence 3 NEC']);
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchPromotions();
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
                        <option value="" disabled>Sélectionnez une promotion</option>
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
