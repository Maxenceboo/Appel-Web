import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('promo', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.string('libetape').primary;
        table.integer('nb_etudiant');
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('promo');
  };

// npx knex migrate:latest
