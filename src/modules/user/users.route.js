import { Router } from 'express';
import { validate } from '../../middlewares/validator.middleware.js';
import { authUserSchema, createUserSchema } from './schema/user.schema.js';
import { usersController } from './user.controller.js';

const userRoutes = Router();

userRoutes.post(
  '/register',
  validate(createUserSchema),
  usersController.register,
);

userRoutes.post('/login', validate(authUserSchema), usersController.login);

export default userRoutes;
