/**
 * PingController
 * @description :: Server-side logic that checks if app is alive
 */

export function index(req, res) {
  return res.ok({message: 'HTTP server is working'}, {});
}
