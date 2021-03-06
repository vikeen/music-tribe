/**
 * isAuthenticated
 * @description :: Policy that inject user in `req` via JSON Web Token
 */

import passport from 'passport';

export default function (req, res, next) {

  /*
   * If the user has a cookie value then attach it as a authorization header
   * The JWT parser will authenticate it from this point later
   */
  if (req.cookies["music-tribe.sid"]) {
    req.headers["authorization"] = "JWT " + req.cookies["music-tribe.sid"];
  }

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

    req.user = user;
    sails.log.verbose("Successful jwt authentication for [user.id: " + req.user.id + "]");

    next();
  })(req, res);
}
