import { Router } from 'express';
const router = Router();

import { AuthRouter } from './Auth.routes';
import { UserRouter } from './User.routes';
import { DataRouter } from './Data.routes';

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/data', DataRouter);
export { router };
