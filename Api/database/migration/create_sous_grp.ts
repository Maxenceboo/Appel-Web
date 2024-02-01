import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('sous_grp', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.bigInteger('id_sousgrp').primary;
        table.string('nom');
        table.integer('nb_etudiant');
        // foreigh key
        table.string('libetape').references('libetape').inTable('promo');
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('sous_grp');
  };

// npx knex migrate:latest
