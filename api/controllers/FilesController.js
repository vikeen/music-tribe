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

    return res.json({
      message: updoadedFiles.length + ' file(s) uploaded successfully!',
      files: updoadedFiles
    });
  });
}

//Content-Type: audio/mpeg"
//Content-Disposition: filename="music.mp3"'

function getContentTypeByFile(fileName) {
  var rc = 'application/octet-stream';
  var fn = fileName.toLowerCase();

  if (fn.indexOf('.html') >= 0) rc = 'text/html';
  else if (fn.indexOf('.css') >= 0) rc = 'text/css';
  else if (fn.indexOf('.json') >= 0) rc = 'application/json';
  else if (fn.indexOf('.js') >= 0) rc = 'application/x-javascript';
  else if (fn.indexOf('.png') >= 0) rc = 'image/png';
  else if (fn.indexOf('.jpg') >= 0) rc = 'image/jpg';
  else if (fn.indexOf('.mp3') >= 0) rc = 'audio/mpeg3';

  return rc;
}

function uploadAudio(folderName) {
  var CODE_PATH = 'resources/audio/';
  var fileList = getFileList('./' + CODE_PATH + folderName + '/');

  fileList.forEach(function (entry) {
    uploadFile(CODE_PATH + folderName + '/' + entry,
      './' + CODE_PATH + folderName + '/' + entry);
  });
}

function getFileList(path) {
  var i, fileInfo, filesFound;
  var fileList = [];

  filesFound = fs.readdirSync(path);
  for (i = 0; i < filesFound.length; i++) {
    fileInfo = fs.lstatSync(path + filesFound[i]);
    if (fileInfo.isFile()) fileList.push(filesFound[i]);
  }
  return fileList;
}
