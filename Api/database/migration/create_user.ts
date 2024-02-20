import { Knex } from "knex";



export function up (knex: Knex) {
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

export function down (knex: Knex) {
	knex.schema.dropTable('user');
};

// npx knex migrate:latest
