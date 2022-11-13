import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import { env } from './helpers/env-helper';

import { app } from './app';
import { logger } from './helpers/logger';

const HOST = env.string('HOST', 'localhost');
const PORT = env.number('PORT', 5000);

app.listen(PORT, HOST, () => {
  logger.info(`Server is up and running at http://${HOST}:${PORT}`);
});
