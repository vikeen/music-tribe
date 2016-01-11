/**
 * UserController
 * @description :: Server-side logic for manage users
 */

import fs from 'fs';
import _ from 'lodash';
import AWS from 'aws-sdk';

export function register(req, res, next) {
  return res.view('register');
}

export function create(req, res, next) {
  let values = _.omit(req.allParams(), 'id');

  sails.log.info('AuthService.signup(). Creating user');

  return Users.create(values)
    .then(() => {
      AuthService.signin((e, jwt) => {
        sails.log.info('User created successfully. Redirecting to /dashboard');
        return res.redirect('/dashboard');
      });
    })
    .catch((e) => {
      req.session.messages.error = _.flatten(_.values(e.invalidAttributes));
      return res.redirect('/register');
    });
}

export function login(req, res, next) {
  res.view('login');
}

export function logout(req, res, next) {
  AuthService.signout(req, res, (e) => {
    return res.redirect('/');
  });
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
  sails.log.verbose("UsersController.dashboard()");

  ArtistsAssets.find({userId: req.user.id})
    .then(artistsAssets => {
      return res.view("dashboard", {
        artistsAssets: artistsAssets
      });
    })
    .catch(e => {
      sails.log.error(e);
      return res.serverError();
    });
}
