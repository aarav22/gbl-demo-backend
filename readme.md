# GBL Demo
This is a demo for GBL

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Documentation

- [Features](https://github.com/dhruvsaxena1998/node-typescript-starter#features)
- [Pre-reqs](https://github.com/dhruvsaxena1998/node-typescript-starter#pre-reqs)
- [Getting stated](https://github.com/dhruvsaxena1998/node-typescript-starter#getting-started)
  - [Clone and install deps](https://github.com/dhruvsaxena1998/node-typescript-starter#clone-the-repository)
  - [Configure environment](https://github.com/dhruvsaxena1998/node-typescript-starter#configure-your-environment)
  - [Running pre-reqs scripts](https://github.com/dhruvsaxena1998/node-typescript-starter#configure-your-environment)
  - [Starting up the server](https://github.com/dhruvsaxena1998/node-typescript-starter#configure-your-environment)

## Features

- Typescript
- Follows service-controller design pattern
- Supported database - `Postgres` with knex query builder
- Role based Authentication and Authorization
- Middlewares
  - Authorization (Role based)
  - Ratelimiter
  - Joi Validator
  - Pino Logger
  - ErrorHandler
- Redis / Memory cache support
- Swagger documentation (Do /api-docs to see the docs)
- Deployed on Heroku (Note: While using Knex, heroku run knex --knexfile build/database/knexfile.js migrate:latest --app gbl-demo
Also, to fix the authentication issue: heroku config:set PGSSLMODE=no-verify --app gbl-demo       )

## Pre-reqs

To build and run this app locally you will need a few things:

- Environment - [Nodejs](https://nodejs.org/en/download/)
- Database - [Postgresql](https://www.postgresql.org/download/)

## Getting started

### Clone the repository

```bash
git clone https://github.com/aarav22/gbl-demo-backend.
git --branch <branch-name> <project-name>
```

### Install dependencies

```bash
cd <project-name>
```

```bash
# yarn is recommended
# install yarn if not installed already
npm i -g yarn@latest
```

```bash
yarn install
```

### Configure your environment

Create `.env` file by replicating `.env.example` and fill as per needs.
To properly run this project,
you will need to setup following variables to your `.env` file.

- Server

| key           | default value | description                   |
| ------------- | ------------- | ----------------------------- |
| `SERVER_HOST` | `localhost`   | host on which server will run |
| `SERVER_PORT` | `5000`        | port on which server will run |

- JWT

| key           | default value                          | description                                          |
| ------------- | -------------------------------------- | ---------------------------------------------------- |
| `JWT_EXPIRES` | `30d`                                  | expiry for jwt-tokens, eg. `1d`, `10d`               |
| `JWT_SECRET`  | `a606f398-51e9-4ba8-b8bb-02326f666bdf` | secret from which tokens will be signed and verified |

```bash
# you can use this command in cli to easily generate random base64 string
# and use it as secret string or you can use any secret-string as per your wish.
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

- Database credentials

| key                | default value |
| ------------------ | ------------- |
| `DB_XXXX_HOST`     | `localhost`   |
| `DB_XXXX_PORT`     | `5432`        |
| `DB_XXXX_DATABASE` | `template`    |
| `DB_XXXX_USER`     | `admin`       |
| `DB_XXXX_PASS`     | `root`        |

Change `XXXX` with either one of these `DEV`, `TEST`, `PROD`.

Depending on your environment or you can use all at once as-well

```bash
# Development
DB_DEV_DATABASE=template
DB_DEV_USER=postgres
DB_DEV_PASS=root

# TEST
DB_TEST_DATABASE=template_test
DB_TEST_USER=postgres
DB_TEST_USER=root

# Production
DB_PROD_DATABASE=template
DB_PROD_USER=username
DB_PROD_PASS=password
```

- Logger

| key         | default value | description           |
| ----------- | ------------- | --------------------- |
| `LOG_LEVEL` | `debug`       | set default log-level |

### Run pre-reqs scripts

```bash
# migrate base tables
yarn knex:migrate

# seed database with genesis block
yarn knex:seed
```

### Run locally and start the server

```bash
# start application with development environment
yarn start:dev

# you can use legacy if above command doesn't seems to work
# yarn start:dev-legacy
```

- Tests

```bash
# unit testing with jest and supertest
yarn test:unit
```

- Linting

```bash
# lint check
yarn lint

# lint fix
yarn lint --fix
```

## Authors

- [@aarav22](https://www.github.com/aarav22)
- For [Template](https://github.com/dhruvsaxena1998/node-typescript-starter): [@dhruvsaxena1998](https://www.github.com/dhruvsaxena1998)
