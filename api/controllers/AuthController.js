/**
 * AuthController
 * @description :: Server-side logic for authentication
 */

import _ from 'lodash';

export function register(req, res, next) {
  return res.view('register');
}

export function login(req, res, next) {
  res.view('login');
}

export function local(req, res, next) {
  AuthService.local(req, res, function (err, response) {
    if (err) {
      req.session.messages.error = [err];
      return res.redirect('/login');
    } else {
      return res.redirect("/dashboard");
    }
  });
}

export function logout(req, res, next) {
  AuthService.logout(req, res, (e) => {
    return res.redirect('/');
  });
}
