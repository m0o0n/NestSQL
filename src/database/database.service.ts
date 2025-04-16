import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
@Injectable()
export class DatabaseService {
    private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
  }

  async query(queryText: string, params: any[] = []) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(queryText, params);
      return res.rows;
    } finally {
      client.release();
    }
  }
}
