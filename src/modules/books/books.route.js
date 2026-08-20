import { Router } from 'express';
import { validate } from '../../middlewares/validator.middleware.js';
import { createBookSchema } from './schema/book.schema.js';
import { booksController } from './book.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const bookRoutes = Router();

bookRoutes.post(
  '/books',
  [authMiddleware, validate(createBookSchema)],
  booksController.createBook,
);

bookRoutes.get('/books', authMiddleware, booksController.getBooks);
bookRoutes.put;
bookRoutes.delete;

export default bookRoutes;
