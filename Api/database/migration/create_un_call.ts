import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('un_call', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.bigInteger('id_call').primary;
        table.dateTime('date_heure');
        table.boolean('abs?');
        // foreigh key
        table.bigInteger('id_user').references('id_user').inTable('utilisateur');
        table.bigInteger('id_ue').references('id_ue').inTable('ue');
        table.bigInteger('id_sousgrp').references('id_sousgrp').inTable('sous_grp');
        table.bigInteger('id_etudiant').references('id_etudiant').inTable('etudiant');    
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('un_call');
  };

// npx knex migrate:latest
