module.exports = [
  {
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL || 'postgresql://test@localhost:5432/test',
    username: process.env.DATABASE_USER || 'test',
    password: process.env.DATABASE_PASSWORD || 'test',
    database: process.env.DATABASE || 'test',
    synchronize: false,
    logging: false,
    cache: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
    },
  },
  {
    name: 'seed',
    type: 'postgres',
    url: process.env.DATABASE_URL || 'postgresql://test@localhost:5432/test',
    username: process.env.DATABASE_USER || 'test',
    password: process.env.DATABASE_PASSWORD || 'test',
    database: process.env.DATABASE || 'test',
    synchronize: false,
    logging: false,
    migrations: ['src/seed/*.ts'],
    cli: {
      migrationsDir: 'src/seed',
    },
  },
];
