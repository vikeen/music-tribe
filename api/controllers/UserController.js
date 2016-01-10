/**
 * UserController
 * @description :: Server-side logic for manage users
 */

import _ from 'lodash';

export function register(req, res, next) {
  res.view('register');
}

export function create(req, res, next) {
  let values = _.omit(req.allParams(), 'id');

  sails.log.info('AuthService.signup(). Creating user');

  return User.create(values)
    .then(AuthService.signin)
    .then(function () {
      return res.redirect('/dashboard');
    })
    .catch((e) => {
      req.session.messages.error = _.flatten(_.values(e.invalidAttributes));
      return res.redirect('/register');
    });
}

export function login(req, res, next) {
  res.view('login');
}

export function signin(req, res, next) {
  AuthService.signin(req, res, function (err, response) {
    if (err) {
      req.session.messages.error = [err];
      return res.redirect('/login');
    } else {
      return res.redirect("/dashboard");
    }
  })
}

export function dashboard(req, res, next) {
  sails.log.verbose("UserController.dashboard()");
  return res.json(req.user);
}
