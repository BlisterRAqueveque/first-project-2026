import express from 'express';
import { config } from 'dotenv';
import { envs } from './config/envs.js';

const app = express();

app.use(express.json());

app.listen(envs.port, () => {
  console.log('Server on port 3000');
});
