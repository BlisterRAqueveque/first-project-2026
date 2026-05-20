import express from 'express';
import { config } from 'dotenv';
import { envs } from './config/envs.js';
import pkg from 'signale';
import AppDataSource from './database/datasource.provider.js';
import bookRoutes from './modules/books/books.route.js';

const { Signale } = pkg;

const app = express();

app.use(express.json());

app.use(bookRoutes);

app.listen(envs.port, () => {
  const logger = new Signale({ scope: 'Index' });

  AppDataSource.initialize()
    .then(() => logger.log('Connected to database'))
    .catch((err) => logger.error(`Database Error: ${JSON.stringify(err)}`));

  logger.log(`Server on port ${envs.port}`);
});
