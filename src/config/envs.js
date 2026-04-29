import joi from 'joi';
import { config } from 'dotenv';
config();

const envSchema = joi
  .object({
    port: joi.number().required(),
    secret: joi.string().required(),
    user_db: joi.string().required(),
    password_db: joi.string().optional().allow(''),
    database: joi.string().required(),
  })
  .unknown(true);

const { value: envsVar, error } = envSchema.validate(process.env); // { value: '', error: '' } ;

if (error) throw new Error(`Config validation error: ${error.message}`);

export const envs = {
  port: envsVar.port,
  secret: envsVar.secret,
  user_db: envsVar.user_db,
  password_db: envsVar.password_db,
  database: envsVar.database,
};
