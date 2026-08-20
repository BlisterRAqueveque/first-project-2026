import { EntitySchema } from 'typeorm';
import { BOOK } from '../../../config/const.js';

// TODO Crear relación con la entidad autor
export const bookEntity = new EntitySchema({
  name: BOOK,
  tableName: 'books',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      nullable: false,
      length: 50,
    },
    published: {
      type: 'datetime',
      nullable: true,
    },
    createDate: {
      type: 'datetime',
      createDate: 'NOW',
    },
    deleteDate: {
      deleteDate: 'NOW',
    },
    userId: {
      type: 'int',
      nullable: false,
    },
    editUserId: {
      type: 'int',
      nullable: false,
    },
  },
});
