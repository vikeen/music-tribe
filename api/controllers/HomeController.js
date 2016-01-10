/**
 * HomeController
 * @description :: Server-side logic for application homepage
 */

import _ from 'lodash';

/*
 * @param req
 * @param res
 * @param next
 */
export function index(req, res, next) {
  res.view('homepage');
}
