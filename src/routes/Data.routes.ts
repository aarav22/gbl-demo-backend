import { Router } from 'express';
const DataRouter = Router();

import { controller as DataController } from '../controllers/Data.controller';

// Middlewares
import { Authorize } from '../middlewares/auth';
import { UpdateValidator, CreateValidator } from '../middlewares/validators/Data.validator';

// Types
import { ROLE } from '../@types';

// Add RateLimiter() to the routes that you want to limit the requests.
// Make sure Redis is live and running.
/**
 * @route   /data/get-all
 * @method  GET
 * @description Returns user's object. Expects JWT token
 */
DataRouter.get('/get-all', [Authorize([ROLE.ADMINSTRATOR, ROLE.AUTHENTICATED])], DataController.getAll);

/**
 * @route   /get-one
 * @method  GET
 * @description Returns Data by id. Expects JWT token
 */
DataRouter.get('/get-one', [Authorize([ROLE.ADMINSTRATOR, ROLE.AUTHENTICATED])], DataController.getOne);


/**
 * @route   /create
 * @method  POST
 * @description Creates new Data.
**/
DataRouter.post('/create', [Authorize([ROLE.ADMINSTRATOR]), CreateValidator], DataController.create);

/**
 * @route   /update
 * @method  PUT
 * @description Updates data.
**/
DataRouter.put('/update', [Authorize([ROLE.ADMINSTRATOR]), UpdateValidator], DataController.update);


/**
 * @route   /delete
 * @method  DELETE
 * @description Deletes data.
 **/
DataRouter.delete('/delete', [Authorize([ROLE.ADMINSTRATOR])], DataController.delete);

export { DataRouter };
