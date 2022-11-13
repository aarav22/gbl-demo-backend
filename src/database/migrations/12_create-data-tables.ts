import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> => {
    return knex.schema.createTable('data', (table: Knex.TableBuilder) => {
        table.increments('case_id');
        table.string('branch').notNullable();
        table.string('reporting_method').notNullable();
        table.string('date').notNullable();
        table.string('time').notNullable();
        table.string('category').notNullable();
        table.string('sub_category').notNullable();
        table.string('priority').notNullable();
        table.string('nature').notNullable();
        table.string('case_mgr').notNullable();
        table.string('case_reporter').notNullable();
        table.string('case_status').defaultTo('Not Prepared');
        table.boolean('unread').defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

export const down = async (knex: Knex): Promise<void> => {
    return knex.schema.dropTable('data');
};
