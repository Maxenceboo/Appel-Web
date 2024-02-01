import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('faire_le_call_etudiant', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // foreigh key
        table.bigInteger('code_etudiant').references('code_etudiant').inTable('etudiant');
        table.bigInteger('id_call').references('id_call').inTable('un_call');
        // primary key
        table.primary(['code_etudiant','id_call']);
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('faire_le_call_etudiant');
  };

// npx knex migrate:latest
