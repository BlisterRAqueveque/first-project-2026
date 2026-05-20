import Joi from 'joi';

export const createBookSchema = Joi.object({
  name: Joi.string().required(),
  published: Joi.string().optional(),
});

export const updateBookSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  published: Joi.date().optional(),
  createDate: Joi.date().optional(),
  deletedDate: Joi.date().optional(),
});
