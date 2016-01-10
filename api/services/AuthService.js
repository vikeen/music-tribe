/**
 * AuthService
 * @description :: Server-side logic for manage users' authorization
 */

import _ from 'lodash';
import passport from 'passport';

/**
 * Sign in by email\password
 * @param req
 * @param res
 * @param next
 */
export function signin(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;

    if (error || !user) {
      sails.log.error(error);
      return next(error, undefined);
    }

    var jwt = AuthService.signToken(user);

    res.cookie('music-tribe.sid', jwt.token, sails.config.session.cookie);

    next(undefined, jwt);
  })(req, res, next);
}

/**
 * Sign up by email\password
 * @param req
 * @param res
 */
export function signup(req, res) {
}

export function signToken(user) {
  return {token: CipherService.jwt.encodeSync({id: user.id}), user: user}
}

/**
 * Authorization via social networks
 * @param req
 * @param res
 */
export function social(req, res) {
  let type = req.param('type') ? req.param('type').toLowerCase() : '-';
  let strategyName = [type, 'token'].join('-');

  if (Object.keys(passport._strategies).indexOf(strategyName) === -1) {
    return res.badRequest(null, {message: [type, ' is not supported'].join('')});
  }

  passport.authenticate('jwt', (error, user, info) => {
    req.user = user;
    passport.authenticate(strategyName, _.partial(sails.config.passport.onPassportAuth, req, res))(req, res);
  })(req, res);
}

/**
 * Accept JSON Web Token and updates with new one
 * @param req
 * @param res
 */
export function refresh_token(req, res) {
  if (!req.param('token')) return res.badRequest(null, {message: 'You must provide token parameter'});

  let oldDecoded = CipherService.jwt.decodeSync(req.param('token'));

  res.ok({
    token: CipherService.jwt.encodeSync({id: oldDecoded.id})
  });
}
