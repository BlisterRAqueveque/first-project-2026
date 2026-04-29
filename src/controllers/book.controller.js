import { getConnection } from '../database/database.provider.js';
import { request, response } from 'express';

const getBook = async (req = request, res = response) => {
  console.log('Init'); //1
  const id = req.params?.id;
  try {
    const connection = await getConnection();

    const [books, fields] = await connection.query(
      'SELECT * FROM books WHERE id = ?',
      [id],
    );

    //throw new Error('Error simulado');
    console.log(books);
    console.log(fields);
    console.log(connection); //2 { RESOLVED }

    if (!books[0])
      res
        .status(204)
        .json({ ok: true, message: `No book available with id ${id}` });

    res.status(200).json({ ok: true, data: books[0] });
  } catch (error) {
    console.error(error);
    res.status(404).json({ ok: false, error });
  }
  console.log('Finish'); //3

  /*
  console.log('Init'); //1

  const connection = getConnection();
  // { Resolve, Rejected }

  console.log(connection); // { Promise: <pending> } 2

  connection //4
    .then((data) => console.log(data) /** [{ id: 1, name: 'el principito' }] )
    .catch((err) => console.error(err) /**! Fallo en resolver {err: 'No'}  )
    .finally(() => console.info('Promise Resolved'));

  console.log('Finish'); // 3
  */
};

const getBooks = () => {};

const createBook = () => {};

const updateBook = () => {};

export const booksController = { getBook };
