/**
 * AuthController
 * @description :: Server-side logic for authentication
 */

import _ from 'lodash';

export function register(req, res, next) {
  return res.view('register');
}

export function login(req, res, next) {
  return res.view('login', {
    facebookOAuthUri: sails.config.facebook.oauth.url + '?client_id=' + sails.config.facebook.oauth.appId + '&redirect_uri=' + sails.config.appUrl + sails.config.facebook.oauth.redirectPath
  });
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

export function facebook(req, res, next) {
  AuthService.facebook(req, res, (e) => {
    sails.log.error(e);
  })
}

export function facebookCallback(req, res, next) {
  passport.authenticate('facebook', {failureRedirect: '/login'},
    function (req, res) {
      // Successful authentication, redirect home.
      console.log("facebook callback success");
    });
}

export function logout(req, res, next) {
  AuthService.logout(req, res, (e) => {
    return res.redirect('/');
  });
}
