import 'dotenv/config';
import '../config/logging';

import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const db = drizzle(pool);

async function main() {
    logging.log('migration started...');
    await migrate(db, { migrationsFolder: 'drizzle' });
    logging.log('migration ended...');
    process.exit(0);
}

main().catch((err) => {
    logging.error(err);
    process.exit(0);
});
