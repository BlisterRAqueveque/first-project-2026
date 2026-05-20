import { Router } from 'express';
import { validate } from '../../middlewares/validator.middleware.js';
import { createBookSchema } from './schema/book.schema.js';

const bookRoutes = Router();

bookRoutes.post('/books', validate(createBookSchema), (req, res) => {
  res.status(200).json({ message: 'Validate works' });
});

bookRoutes.get;
bookRoutes.put;
bookRoutes.delete;

export default bookRoutes;
