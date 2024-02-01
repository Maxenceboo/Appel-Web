import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('etudiant', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.bigInteger('code_etudiant').primary;
        table.date('date_creation');
        table.string('code_composante');
        table.string('libcomposante');
        //table.string('libetape'); // foreign Promo.libetape
        table.string('codeetape');
        table.integer('versionetape');
        table.string('statut');
        table.string('ine');
        table.string('nom');
        table.string('prenom');
        table.date('date_naissance');
        table.string('sexe');
        table.string('nationalite');
        table.string('adrfixe1');
        table.string('adrfixe2');
        table.string('adrfixe3');
        table.string('adrfixee');
        table.string('adrfixecodepostal');
        table.string('adrfixecommune');
        table.string('adrfixetelephone');
        table.string('adrfixetelportable');
        table.string('adrfixeemail');
        table.string('adrann1');
        table.string('adrann2');
        table.string('adrann3');
        table.string('adranncodepostal');
        table.string('adranncommune');
        table.string('adranntelportable');
        table.string('adrannemail');
        table.string('csp_chef_famille');
        table.string('csp_autre_parent');
        table.string('email_uppa');
        table.string('code_bac_ou_eq');
        table.string('lib_bac_ou_eq');
        table.string('annee_bac_ou_eq');
        table.string('lib_mention');
        table.string('regime_ins');
        table.string('libelle_bourse');
        table.string('lib_type_dernier_diplome');
        table.string('annee_dernier_diplome');        
        // foreigh key
        table.string('libetape').references('libetape').inTable('promo');
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('etudiant');
  };

// npx knex migrate:latest
