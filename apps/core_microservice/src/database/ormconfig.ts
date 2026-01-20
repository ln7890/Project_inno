import { dirname } from 'path';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const config = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + 'src/database/migrations/*{.ts,.js}'],
});
