// database.provider.ts
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

export const databaseProvider = {
  provide: 'PG_POOL',
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const pool = new Pool({
      host: config.get('DB_HOST'),
      port: config.get<number>('DB_PORT'),
      user: config.get('DB_USER'),
      password: config.get('DB_PASS'),
      database: config.get('DB_NAME'),
    });

    return pool;
  },
};