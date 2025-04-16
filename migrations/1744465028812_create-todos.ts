import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('todos', {
        id: 'id',
        title: { type: 'text', notNull: true },
        description: { type: 'text', notNull: true },
        completed: { type: 'boolean', notNull: true, default: false },
        created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
        user_id: {
            type: 'integer',
            notNull: true,
            references: 'users(id)',
            onDelete: 'CASCADE'
        }
    });
    pgm.createIndex('todos', 'user_id');
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('todos');
    pgm.dropIndex('todos', 'user_id');
}
