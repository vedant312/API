import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';

import userSchema from './user.schemas';
import userController from './controllers/user.controller';
const router = express.Router();

router.get('/all', userController.getAllUsers);

router.get(
  '/:id',
  expressYupMiddleware({ schemaValidator: userSchema.getUser }),
  userController.getUser
);

router.post(
  '/',
  expressYupMiddleware({ schemaValidator: userSchema.addUser }),
  userController.addUser
);

router.put(
  '/:id',
  expressYupMiddleware({ schemaValidator: userSchema.updateUser }),
  userController.updateUser
);

router.delete(
  '/:id',
  expressYupMiddleware({ schemaValidator: userSchema.removeUser }),
  userController.removeUser
);

export default router;
