import { Knex } from "knex";

export function up (knex: Knex) {
	return knex.schema.createTable('promo', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.string('libetape').primary;
		table.integer('nb_etudiant');
	})
}

export function down (knex: Knex) {
	knex.schema.dropTable('promo');
};

// npx knex migrate:latest
