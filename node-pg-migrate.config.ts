// node-pg-migrate.config.ts
import type { MigrationOptions } from 'node-pg-migrate/dist/types';
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  migration: 'migrations',
  direction: 'up',
  logFileName: 'migration.log',
  databaseUrl: process.env.DATABASE_URL,
  migrationsTable: 'pgmigrations',
  language: 'ts',
};

export default config;
