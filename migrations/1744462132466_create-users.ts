import { create } from 'domain';
import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('users', {
        id: 'id',
        name: { type: 'text', notNull: true },
        email: { type: 'text', notNull: true, unique: true },
        password: { type: 'text', notNull: true },
        created_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', default: pgm.func('current_timestamp') },
    })
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('users');
}
