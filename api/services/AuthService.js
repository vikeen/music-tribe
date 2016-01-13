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
export function local(req, res, next) {
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

export function logout(req, res, next) {
  try {
    req.user = false;
    res.locals.user = false;
    res.cookie('music-tribe.sid', null, {maxAge: 0});
  } catch (e) {
    sails.log.error("unable to sign user out");
    sails.log.error(e);
    return next(e);
  }

  return next(null);
}

export function signToken(user) {
  return {token: CipherService.jwt.encodeSync({id: user.id}), user: user}
}

export function facebook(req, res) {
  passport.authenticate('facebook-token', (accessToken, refreshToken, profile) => {
    console.log(arguments);
    return res.json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile
    })
  })(req, res);
}
