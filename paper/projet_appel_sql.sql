-- SQLBook: Code
CREATE TABLE Utilisateur(
   id_user BIGINT,
   nom VARCHAR(50),
   prenom VARCHAR(50),
   mail VARCHAR(100),
   login VARCHAR(50),
   mdp VARCHAR(100),
   role VARCHAR(50),
   PRIMARY KEY(id_user)
);

CREATE TABLE Etudiant(
   code_etudiant BIGINT,
   date_creation DATE,
   code_composante VARCHAR(10),
   libcomposante VARCHAR(100),
   libetape VARCHAR(100),
   codeetape VARCHAR(10),
   versionetape INT,
   statut VARCHAR(50),
   ine VARCHAR(50),
   nom VARCHAR(50),
   prenom VARCHAR(50),
   datenaissance DATE,
   sexe VARCHAR(1),
   nationalite VARCHAR(100),
   adrfixe1 VARCHAR(100),
   adrefixe2 VARCHAR(100),
   adrfixe3 VARCHAR(100),
   adrfixee VARCHAR(100),
   adrfixecodepostal SMALLINT,
   adrfixecommune VARCHAR(50),
   adrfixetelephone VARCHAR(10),
   adrfixetelportable VARCHAR(10),
   adrfixeemail VARCHAR(100),
   adrann1 VARCHAR(50),
   adrann2 VARCHAR(50),
   adrann3 VARCHAR(50),
   adranncodepostal VARCHAR(5),
   adranncommune VARCHAR(50),
   adranntelportable VARCHAR(10),
   adrannemail VARCHAR(100),
   csp_chef_famille VARCHAR(50),
   csp_autre_parent VARCHAR(50),
   email_uppa VARCHAR(100),
   code_bac_ou_eq VARCHAR(50),
   lib_bac_ou_eq VARCHAR(50),
   annee_bac_ou_eq SMALLINT,
   lib_mention VARCHAR(50),
   regime_ins VARCHAR(50),
   libelle_bourse VARCHAR(50),
   lib_type_dernier_diplome VARCHAR(50),
   annee_dernier_diplome SMALLINT,
   PRIMARY KEY(code_etudiant)
   FOREIGN KEY (libetape) REFERENCES Promo (libetape)
);

CREATE TABLE Promo(
   id BIGINT,
   libetape VARCHAR(100),
   nb_etudiant INT,
   PRIMARY KEY(id)
);

CREATE TABLE Ue(
   id_ue BIGINT,
   nom VARCHAR(50),
   PRIMARY KEY(id_ue)
);

CREATE TABLE Sous_grp(
   id_sousgrp BIGINT,
   nom VARCHAR(50),
   libetape VARCHAR(100) NOT NULL,
   nbEtudiant INT,
   id_ue BIGINT NOT NULL,
   PRIMARY KEY(id_sousgrp),
   FOREIGN KEY(libetape) REFERENCES Promo(libetape),
   FOREIGN KEY(id_ue) REFERENCES Ue(id_ue)
);

CREATE TABLE Un_call(
   id_call BIGINT,
   id_user BIGINT,
   id_ue BIGINT,
   id_sousgrp BIGINT,
   date_heure DATETIME,
   PRIMARY KEY(id_call),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user),
   FOREIGN KEY(id_ue) REFERENCES Ue(id_ue),
   FOREIGN KEY(id_sousgrp) REFERENCES Sous_grp(id_sousgrp)
);

CREATE TABLE Lien_etudiant_sous_grp(
   code_etudiant BIGINT NOT NULL,
   id_sousgrp BIGINT NOT NULL,
   PRIMARY KEY(code_etudiant, id_sousgrp),
   FOREIGN KEY(code_etudiant) REFERENCES Etudiant(code_etudiant),
   FOREIGN KEY(id_sousgrp) REFERENCES Sous_grp(id_sousgrp)
);

CREATE TABLE Lien_ue_user(
   id_ue BIGINT NOT NULL,
   id_user BIGINT NOT NULL,
   PRIMARY KEY(id_user, id_ue),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user),
   FOREIGN KEY(id_ue) REFERENCES Ue(id_ue)
);

CREATE TABLE Faire_le_call_etudiant(
   code_etudiant BIGINT NOT NULL,
   id_call BIGINT NOT NULL,
   abs_ BOOLEAN,
   PRIMARY KEY(code_etudiant, id_call),
   FOREIGN KEY(code_etudiant) REFERENCES Etudiant(code_etudiant),
   FOREIGN KEY(id_call) REFERENCES Un_call(id_call)
);
