/**
 * FilesController
 * @description :: Server-side logic for files
 */

import fs from 'fs';
import _ from 'lodash';
import skipperS3 from 'skipper-s3';

export function upload(req, res, next) {
  var originalFileName = req.file('file')._files[0].stream.filename,
    contentType = FileService.getContentTypeFromFileExtention(originalFileName);

  sails.log.verbose("attempting to upload file [%s] as file type [%s]", originalFileName, contentType);

  req.file('file').upload({
    adapter: skipperS3,
    key: sails.config.aws.s3.accessKeyId,
    secret: sails.config.aws.s3.secretAccessKey,
    dirname: contentType,
    bucket: 'music-tribe'
  }, function (error, updoadedFiles) {
    if (error) {
      return res.serverError(error);
    }

    let assets = updoadedFiles.map(function (file) {
      // TODO: determine what are values here that should be stored
      // TODO: move this to a service that transforms s3 storage response
      //       into local database format
      return {
        userId: req.user.id,
        fileName: file.filename,
        type: file.type,
        url: file.extra.Location,
        uuid: file.extra.Key,
        size: file.size
      };
    });

    ArtistAsset.create(assets)
      .then(function () {
        sails.log.info("successfully added asset [%s] to artist [%s]", originalFileName, req.user.id);
        // TODO: send notification to user that upload was successful
        return res.redirect("/dashboard");
      })
      .catch((e) => {
        sails.log.error(e);
        return res.serverError();
      });
  });
}
