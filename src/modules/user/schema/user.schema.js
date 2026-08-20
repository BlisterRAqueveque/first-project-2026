import Joi from 'joi';

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const updateUserSchema = Joi.object({
  id: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const authUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
