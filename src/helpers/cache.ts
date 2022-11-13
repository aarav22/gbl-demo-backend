import Redis from 'ioredis';
import { env } from '../helpers/env-helper';

// For connection details check-out https://github.com/luin/ioredis#connect-to-redis
var client: any;
if (env.string('NODE_ENV', 'development') === 'production') {
    client = new Redis(env.string('REDIS_URL'));
} else {
    client = new Redis();  // Connect to 127.0.0.1:6379
}

export const set = client.set;
export const get = client.get;

export { client };
