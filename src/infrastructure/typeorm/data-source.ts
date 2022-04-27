import 'dotenv/config';
import { join } from 'path';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [join(__dirname, '**', '..', '..', '..', 'infrastructure/typeorm/migrations/*.{ts,js}')],
  subscribers: [],
  synchronize: false,
  migrationsRun: false,
  logging: false,
});
