import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('ue', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.bigInteger('id_ue').primary;
        table.string('nom');
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('ue');
  };

// npx knex migrate:latest
