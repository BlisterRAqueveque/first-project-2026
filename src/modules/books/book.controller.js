import { request, response } from 'express';
import AppDataSource from '../../database/datasource.provider.js';
import { BOOK } from '../../config/const.js';

const repository = AppDataSource.getRepository(BOOK);

const getBook = async (req = request, res = response, next = next) => {};

const getBooks = async (req, res) => {
  const books = await repository.find();
  res.status(200).json({ ok: true, books, msg: 'Approved' });
};

const createBook = async (req, res) => {
  const owner = req.user;
  const book = req.body;
  const newBook = await repository.save({ ...book, userId: owner.id });

  res.status(201).json({ ok: true, newBook, msg: 'Created' });
};

const updateBook = () => {
  // TODO
  //TODO el ultimo usuario que lo modifico
  editUserId: req.user.id;
};

const deleteBook = () => {
  // TODO usar softDelete()
};

export const booksController = { getBooks, createBook };
