import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('user', (table) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        table.bigInteger('id_user').primary;
        table.string('nom');
        table.string('prenom');
        table.string('mail');
        table.string('login');
        table.string('mdp');
        table.string('role');
    })
}

exports.down = function(knex: Knex) {
    knex.schema.dropTable('user');
  };

// npx knex migrate:latest
