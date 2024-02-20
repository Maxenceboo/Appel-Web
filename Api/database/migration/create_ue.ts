import { Knex } from "knex";

export function up (knex: Knex) {
	return knex.schema.createTable('ue', (table) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		table.bigInteger('id_ue').primary;
		table.string('nom');
	})
}

export function down (knex: Knex) {
	knex.schema.dropTable('ue');
};

// npx knex migrate:latest
