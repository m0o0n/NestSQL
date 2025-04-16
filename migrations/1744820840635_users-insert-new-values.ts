import { ColumnDefinitions, MigrationBuilder } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumns('users', {
    firstName: { type: 'text', notNull: false },
    lastName: { type: 'text', notNull: false },
    company: { type: 'text', notNull: false },
    phone: { type: 'text', notNull: false },
    country: { type: 'text', notNull: false },
    source: { type: 'text', notNull: false },
    service: { type: 'text', notNull: false },
    subscribe: { type: 'boolean', notNull: true, default: false },
    terms: { type: 'boolean', notNull: true, default: false },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropColumns('users', [
    'firstName',
    'lastName',
    'company',
    'phone',
    'country',
    'source',
    'service',
    'subscribe',
    'terms',
  ]);
}
