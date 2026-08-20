import { request, response } from 'express';
import AppDataSource from '../../database/datasource.provider.js';
import { USER } from '../../config/const.js';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envs } from '../../config/envs.js';

const repository = AppDataSource.getRepository(USER);

const register = async (req = request, res = response) => {
  const { username, password } = req.body;

  try {
    const hashPassword = bcrypt.hashSync(password, 12);

    const { username: newUsername, password: _ } = await repository.save({
      username,
      password: hashPassword,
    });

    res.status(201).json({ ok: true, message: `User created: ${newUsername}` });
  } catch (error) {
    res.status(400).json({ ok: false, error });
  }
};

const login = async (req = request, res = response) => {
  const { username, password } = req.body;

  const user = await repository.findOne({ where: { username } });

  if (!user) res.status(401).json({ ok: false, message: 'User Not Found' });

  const isValidPassword = bcrypt.compareSync(password ?? '-', user.password);

  if (!isValidPassword)
    res.status(401).json({ ok: false, message: `Wrong Password` });

  const { password: _, ...rest } = user;

  const payload = { id: user.id, username };

  const token = jwt.sign(payload, envs.secret, { expiresIn: '1h' });

  res.status(200).json({ ok: true, user: rest, token });
};

export const usersController = { register, login };
