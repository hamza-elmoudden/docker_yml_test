// database.provider.ts
import { Pool } from 'pg';

export const databaseProvider = {
  provide: 'PG_POOL',
  useFactory: async () => {
    const pool = new Pool({
      host: 'postgres',
      port: 5432,
      user: 'postgres',
      password: '123456789',
      database: 'mydb',
    });

    return pool;
  },
};