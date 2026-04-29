import mysql from 'mysql2/promise';
import { envs } from '../config/envs.js';

const connection = mysql.createConnection({
  host: envs.host_db,
  port: envs.port_db,
  user: envs.user_db,
  password: envs.password_db,
  database: envs.database,
});

export const getConnection = () => {
  console.log('Connected to database');
  return connection;
};
