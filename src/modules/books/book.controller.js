import { getConnection } from '../../database/database.provider.js';
import { request, response, next } from 'express';
import AppDataSource from '../../database/datasource.provider.js';
import { BOOK } from '../../config/const.js';

const repository = AppDataSource.getRepository(BOOK);

const getBook = async (req = request, res = response, next = next) => {
  // TODO

  // TODO agregarlos en las funciones correspondientes
  repository.find({ where: { id: 1 } });
  repository.post();
  repository.update();
  repository.softDelete();
};

const getBooks = () => {
  // TODO
};

const createBook = () => {
  // TODO
};

const updateBook = () => {
  // TODO
};

const deleteBook = () => {
  // TODO usar softDelete()
};

export const booksController = { getBook };
