/**
 * FilesController
 * @description :: Server-side logic for files
 */

import fs from 'fs';
import _ from 'lodash';
import AWS from 'aws-sdk';
import skipperS3 from 'skipper-s3';

export function create(req, res, next) {
  req.file('song').upload({
    adapter: skipperS3,
    key: sails.config.aws.s3.accessKeyId,
    secret: sails.config.aws.s3.secretAccessKey,
    bucket: 'music-tribe'
  }, function (error, updoadedFiles) {
    if (error) {
      return res.serverError(error);
    }

    let assets = updoadedFiles.map(function(file) {
      return {
        userId: req.user.id,
        fileName: file.filename,
        type: file.type,
        url: file.extra.Location,
        uuid: file.extra.Key,
        size: file.size
      };
    });

    ArtistsAssets.create(assets)
    .then(function() {
      sails.log.verbose("successfully added assets");
      return res.redirect("/dashboard");
    })
    .catch((e) => {
      sails.log.error(e);
      return res.serverError();
    });
  });
}
