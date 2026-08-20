import { ExtractJwt, Strategy } from 'passport-jwt';
import AppDataSource from '../database/datasource.provider.js';
import { USER } from './const.js';
import { envs } from './envs.js';
import passport from 'passport';

const repo = AppDataSource.getRepository(USER);

const JWT_SECRET = envs.secret;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await repo.findOne({ where: { id: payload.id } });

      if (!user) return done(null, false);

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }),
);

export default passport;
