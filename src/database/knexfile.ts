import { Knex } from 'knex';
import { env } from '../helpers/env-helper';

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: env.string('DB_DEV_HOST', 'localhost'),
      port: env.number('DB_DEV_PORT', 5432),
      database: env.string('DB_DEV_DATABASE', 'gbl'),
      user: env.string('DB_DEV_USER', 'postgres'),
      password: env.string('DB_DEV_PASS', 'admin'),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  test: {
    client: 'postgresql',
    connection: {
      host: env.string('DB_TEST_HOST', 'localhost'),
      port: env.number('DB_TEST_PORT', 5432),
      database: env.string('DB_TEST_DATABASE', 'template_test'),
      user: env.string('DB_TEST_USER', 'postgres'),
      password: env.string('DB_TEST_PASS', 'root'),
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: env.string('DB_PROD_HOST', 'postgres://grirtfqvwkmlly:4c20e35489c7372dcad68a892231ec78e8f2ebb93303f8ac6b5ffa4ef55b006e@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d92h8h1r7cbitg'),
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

/*
 * export default is required for knex to resolve
 * Knex required configuration option 'client' is missing error
 */
// eslint-disable-next-line no-eval
export default configs;
