import { DataSource } from 'typeorm';
import { envs } from '../config/envs.js';
import { bookEntity } from '../modules/books/entity/book.entity.js';
import { userEntity } from '../modules/user/entity/user.entity.js';

const AppDataSource = new DataSource({
  type: 'mysql',
  //# Credenciales de las base de datos ------------->
  host: envs.host_db,
  port: envs.port_db,
  username: envs.user_db,
  password: envs.password_db,
  database: envs.database,
  //# Credenciales de las base de datos ------------->
  synchronize: envs.NODE_ENV == 'development',
  logging: false,
  entities: [bookEntity, userEntity],
});

export default AppDataSource;

/**
 * books{  // id:number // => autoincrement
 *   id: string // => UUID
 *  }
 */
