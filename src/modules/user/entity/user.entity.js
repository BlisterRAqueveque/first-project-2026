import { EntitySchema } from 'typeorm';
import { USER } from '../../../config/const.js';

// TODO Crear relación con la entidad autor
export const userEntity = new EntitySchema({
  name: USER,
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    username: {
      type: 'varchar',
      nullable: false,
      length: 50,
      unique: true,
    },
    password: {
      type: 'varchar',
      nullable: false,
    },
  },
});
