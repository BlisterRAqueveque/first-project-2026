import express from 'express';
import { config } from 'dotenv';
import { envs } from './config/envs.js';
import { booksController } from './controllers/book.controller.js';

const app = express();

app.get('/:id', booksController.getBook);

app.listen(envs.port, () => {
  console.log(`Server on port ${envs.port}`);
});
