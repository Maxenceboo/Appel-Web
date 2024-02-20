import { Knex } from "knex";

export function up (knex: Knex) {
    return knex.schema.createTable('lien_etudiant_sous_grp', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // foreigh key
        table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');
        table.bigInteger('id_sousgrp').references('id_sousgrp').inTable('sous_grp');
        // primary key
        table.primary(['code_etudiant','id_sousgrp']);
    })
}

export function down(knex: Knex) {
    knex.schema.dropTable('lien_etudiant_sous_grp');
  };

// npx knex migrate:latest
