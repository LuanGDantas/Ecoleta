import 'dotenv/config';
import path from 'path';

const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'build';

export default {
	client: 'pg',
	connection: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
  },
  migrations: {
    directory: path.resolve(__dirname, rootDir, 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, rootDir, 'database', 'seeds')
  }
}