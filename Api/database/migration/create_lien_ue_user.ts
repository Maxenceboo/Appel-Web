import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('lien_ue_user', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // foreigh key
        table.bigInteger('id_ue').references('id_ue').inTable('ue');
        table.bigInteger('id_user').references('id_user').inTable('user');
        // primary key
        table.primary(['id_ue','id_user']);
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('lien_ue_user');
  };

// npx knex migrate:latest
