/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

import passport from 'passport';

export default function (req, res, next) {
  req.user = false;
  res.locals.user = false;

  /*
   * If the user has a cookie value then attach it as a authorization header
   * The JWT parser will authenticate it from this point later
   */
  if (req.cookies["music-tribe.sid"]) {
    req.headers["authorization"] = "JWT " + req.cookies["music-tribe.sid"];

    passport.authenticate('jwt', (error, user, info) => {
      error = error || info;

      if (error) {
        sails.log.error(error);
        next();
      }

      if (!user) {
        sails.log.error("Unable to authenticate user from jwt token");
        next();
      }

      sails.log.verbose("Successful jwt authentication for [user.id: " + user.id + "]");
      req.user = user;
      res.locals.user = user;

      next();
    })(req, res);
  } else {
    next();
  }
}
