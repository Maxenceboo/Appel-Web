-- SQLBook: Code
CREATE TABLE IF NOT EXISTS 'Promo' (
    'id'  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'libetape'  VARCHAR(255),
    'NbEtudiant'  INTEGER,
)

CREATE TABLE IF NOT EXISTS 'SousPromo' (
    'id'  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'libetape'  VARCHAR(255),
    'NbEtudiant'  INTEGER,
    'idPromo'  INTEGER,
    FOREIGN KEY('idPromo') REFERENCES 'Promo'('id')
)

CREATE TABLE IF NOT EXISTS 'Ue' (
    'id'  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'libetape'  VARCHAR(255),
    'NbEtudiant'  INTEGER,
)

CREATE TABLE IF NOT EXISTS 'Call' (
    'id'  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'idUser'  INTEGER,
    'idUe'  INTEGER,
    'idSousPromo'  INTEGER,
    'date'  DATETIME,
    'absent'  BOOLEAN,
    FOREIGN KEY('idUser') REFERENCES 'User'('id'),
    FOREIGN KEY('idUe') REFERENCES 'Ue'('id'),
    FOREIGN KEY('idSousPromo') REFERENCES 'SousPromo'('id'),
)

CREATE TABLE IF NOT EXISTS 'User' (
    'id'  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    'nom'  VARCHAR(255),
    'prenom'  VARCHAR(255),
    'mail'  VARCHAR(255),
    'login'  VARCHAR(255),
    'password'  VARCHAR(255),
    'role'  VARCHAR(255),
)

CREATE TABLE Faire_le_call_etudiant(
   code_etudiant BIGINT NOT NULL,
   id_call BIGINT NOT NULL,
   PRIMARY KEY(code_etudiant, id_call),
   FOREIGN KEY(code_etudiant_1) REFERENCES Etudiant(code_etudiant),
   FOREIGN KEY(id_call_1) REFERENCES Un_call(id_call)
);


