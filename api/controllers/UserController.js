/**
 * UserController
 * @description :: Server-side logic for manage users
 */

import fs from 'fs';
import _ from 'lodash';
import AWS from 'aws-sdk';

export function create(req, res, next) {
  let values = _.omit(req.allParams(), 'id');

  sails.log.info('UserController.signup(). Creating user');

  return User.create(values)
    .then(user => {
      AuthService.local(req, res, function (err, response) {
        if (err) {
          sails.log.error("user failed authentication after begin created. Something went terrible wrong");
          return res.serverError();
        } else {
          return res.redirect("/dashboard");
        }
      });
    })
    .catch((e) => {
      req.session.messages.error = _.flatten(_.values(e.invalidAttributes));
      return res.redirect('/register');
    });
}

export function dashboard(req, res, next) {
  sails.log.verbose("UserController.dashboard()");

  ArtistAsset.find({userId: req.user.id})
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
