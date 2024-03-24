import React, { useState } from 'react';
import './AddEtudiant.css';
import axios from 'axios';

//
// table.date('date_creation');


const AddEtudiant: React.FC = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');


    const handleAddEtudiant = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let code_etudiant = (event.target as any).code_etudiant.value;
        let nom = (event.target as any).nom.value;
        let prenom = (event.target as any).prenom.value;
        let date_naissance = (event.target as any).date_naissance.value;
        let sexe = (event.target as any).sexe.value;
        let nationalite = (event.target as any).nationalite.value;
        let adrfixe1 = (event.target as any).adrfixe1.value;
        let adrfixe2 = (event.target as any).adrfixe2.value;
        let adrfixe3 = (event.target as any).adrfixe3.value;
        let adrfixee = (event.target as any).adrfixee.value;
        let adrfixecodepostal = (event.target as any).adrfixecodepostal.value;
        let adrfixecommune = (event.target as any).adrfixecommune.value;
        let adrfixetelephone = (event.target as any).adrfixetelephone.value;
        let adrfixetelportable = (event.target as any).adrfixetelportable.value;
        let adrfixeemail = (event.target as any).adrfixeemail.value;
        let adrann1 = (event.target as any).adrann1.value;
        let adrann2 = (event.target as any).adrann2.value;
        let adrann3 = (event.target as any).adrann3.value;
        let adranncodepostal = (event.target as any).adranncodepostal.value;
        let adranncommune = (event.target as any).adranncommune.value;
        let adranntelportable = (event.target as any).adranntelportable.value;
        let adrannemail = (event.target as any).adrannemail.value;
        let csp_chef_famille = (event.target as any).csp_chef_famille.value;
        let csp_autre_parent = (event.target as any).csp_autre_parent.value;
        let email_uppa = (event.target as any).email_uppa.value;
        let code_bac_ou_eq = (event.target as any).code_bac_ou_eq.value;
        let lib_bac_ou_eq = (event.target as any).lib_bac_ou_eq.value;
        let annee_bac_ou_eq = (event.target as any).annee_bac_ou_eq.value;
        let lib_mention = (event.target as any).lib_mention.value;
        let regime_ins = (event.target as any).regime_ins.value;
        let libelle_bourse = (event.target as any).libelle_bourse.value;
        let lib_type_dernier_diplome = (event.target as any).lib_type_dernier_diplome.value;
        let annee_dernier_diplome = (event.target as any).annee_dernier_diplome.value;
        let code_composante = (event.target as any).code_composante.value;
        let libcomposante = (event.target as any).libcomposante.value;
        let libetape = (event.target as any).libetape.value;
        let codeetape = (event.target as any).codeetape.value;
        let versionetape = (event.target as any).versionetape.value;
        let statut = (event.target as any).statut.value;
        let ine = (event.target as any).ine.value;

        try {
            let response = await axios.post('/etudiant/create', {
                code_etudiant: code_etudiant,
                nom: nom,
                prenom: prenom,
                date_naissance: date_naissance,
                sexe: sexe,
                nationalite: nationalite,
                adrfixe1: adrfixe1,
                adrfixe2: adrfixe2,
                adrfixe3: adrfixe3,
                adrfixee: adrfixee,
                adrfixecodepostal: adrfixecodepostal,
                adrfixecommune: adrfixecommune,
                adrfixetelephone: adrfixetelephone,
                adrfixetelportable: adrfixetelportable,
                adrfixeemail: adrfixeemail,
                adrann1: adrann1,
                adrann2: adrann2,
                adrann3: adrann3,
                adranncodepostal: adranncodepostal,
                adranncommune: adranncommune,
                adranntelportable: adranntelportable,
                adrannemail: adrannemail,
                csp_chef_famille: csp_chef_famille,
                csp_autre_parent: csp_autre_parent,
                email_uppa: email_uppa,
                code_bac_ou_eq: code_bac_ou_eq,
                lib_bac_ou_eq: lib_bac_ou_eq,
                annee_bac_ou_eq: annee_bac_ou_eq,
                lib_mention: lib_mention,
                regime_ins: regime_ins,
                libelle_bourse: libelle_bourse,
                lib_type_dernier_diplome: lib_type_dernier_diplome,
                annee_dernier_diplome: annee_dernier_diplome,
                code_composante: code_composante,
                libcomposante: libcomposante,
                libetape: libetape,
                codeetape: codeetape,
                versionetape: versionetape,
                statut: statut,
                ine: ine
            });
            console.log(response);
            setResponse('Etudiant ajouté');
            // reset form
            (event.target as any).reset();
        } catch (error) {
            console.log(error);
            setError('Erreur lors de l\'ajout de l\'étudiant');
        }
    }

    return (
        <div className="AddEtudiant-container">
            <div className="AddEtudiant-group">
                <h1>Ajouter un étudiant</h1>
                <form className="AddEtudiant-form" onSubmit={handleAddEtudiant}>
                    <div className="input-group">
                        <label htmlFor="code_etudiant">Code étudiant</label>
                        <input type="text" id="code_etudiant" name="code_etudiant" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="nom">Nom</label>
                        <input type="text" id="nom" name="nom" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" id="prenom" name="prenom" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="date_naissance">Date de naissance</label>
                        <input type="test" id="date_naissance" name="date_naissance" required placeholder='YYYY-MM-DD' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="sexe">Sexe</label>
                        <select id="sexe" name="sexe" required>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="nationalite">Nationalité</label>
                        <input type="text" id="nationalite" name="nationalite" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixe1">Adresse fixe</label>
                        <input type="text" id="adrfixe1" name="adrfixe1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixe2">Adresse fixe</label>
                        <input type="text" id="adrfixe2" name="adrfixe2" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixe3">Adresse fixe</label>
                        <input type="text" id="adrfixe3" name="adrfixe3" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixee">Adresse fixe</label>
                        <input type="text" id="adrfixee" name="adrfixee" required />
                    </div><div className="input-group">
                        <label htmlFor="adrfixecodepostal">Code postal</label>
                        <input type="text" id="adrfixecodepostal" name="adrfixecodepostal" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixecommune">Commune</label>
                        <input type="text" id="adrfixecommune" name="adrfixecommune" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixetelephone">Téléphone</label>
                        <input type="text" id="adrfixetelephone" name="adrfixetelephone" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixetelportable">Téléphone portable</label>
                        <input type="text" id="adrfixetelportable" name="adrfixetelportable" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrfixeemail">Email</label>
                        <input type="email" id="adrfixeemail" name="adrfixeemail" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrann1">Adresse annexe</label>
                        <input type="text" id="adrann1" name="adrann1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrann2">Adresse annexe</label>
                        <input type="text" id="adrann2" name="adrann2" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrann3">Adresse annexe</label>
                        <input type="text" id="adrann3" name="adrann3" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adranncodepostal">Code postal</label>
                        <input type="text" id="adranncodepostal" name="adranncodepostal" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adranncommune">Commune</label>
                        <input type="text" id="adranncommune" name="adranncommune" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adranntelportable">Téléphone portable</label>
                        <input type="text" id="adranntelportable" name="adranntelportable" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="adrannemail">Email</label>
                        <input type="email" id="adrannemail" name="adrannemail" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="csp_chef_famille">CSP chef de famille</label>
                        <input type="text" id="csp_chef_famille" name="csp_chef_famille" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="csp_autre_parent">CSP autre parent</label>
                        <input type="text" id="csp_autre_parent" name="csp_autre_parent" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email_uppa">Email UPPA</label>
                        <input type="email" id="email_uppa" name="email_uppa" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="code_bac_ou_eq">Code bac ou équivalent</label>
                        <input type="text" id="code_bac_ou_eq" name="code_bac_ou_eq" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lib_bac_ou_eq">Libellé bac ou équivalent</label>
                        <input type="text" id="lib_bac_ou_eq" name="lib_bac_ou_eq" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="annee_bac_ou_eq">Année bac ou équivalent</label>
                        <input type="text" id="annee_bac_ou_eq" name="annee_bac_ou_eq" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lib_mention">Libellé mention</label>
                        <input type="text" id="lib_mention" name="lib_mention" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="regime_ins">Régime inscription</label>
                        <input type="text" id="regime_ins" name="regime_ins" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="libelle_bourse">Libellé bourse</label>
                        <input type="text" id="libelle_bourse" name="libelle_bourse" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lib_type_dernier_diplome">Libellé type dernier diplôme</label>
                        <input type="text" id="lib_type_dernier_diplome" name="lib_type_dernier_diplome" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="annee_dernier_diplome">Année dernier diplôme</label>
                        <input type="text" id="annee_dernier_diplome" name="annee_dernier_diplome" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="code_composante">Code composante</label>
                        <input type="text" id="code_composante" name="code_composante" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="libcomposante">Libellé composante</label>
                        <input type="text" id="libcomposante" name="libcomposante" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="libetape">Libellé étape</label>
                        <input type="text" id="libetape" name="libetape" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="codeetape">Code étape</label>
                        <input type="text" id="codeetape" name="codeetape" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="versionetape">Version étape</label>
                        <input type="number" id="versionetape" name="versionetape" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="statut">Statut</label>
                        <input type="text" id="statut" name="statut" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ine">INE</label>
                        <input type="text" id="ine" name="ine" required />
                    </div>
                    <button type="submit" className="AddEtudiant-button">Ajouter</button>
                </form>
                {response && <p>{response}</p>}
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default AddEtudiant;