/**
 * @module client_http
 */

var nullLogger = require('../null_logger');
var clientMod = require('./client');
var urlMod = require('url');
var util = require('util');
var Promise = require('promise');

/**
 * This is our basic client
 *
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {Client}
 */
function ClientHttp () {
  ClientHttp.super_.call(this);
  this.logger = nullLogger.NullLogger;
}
util.inherits(ClientHttp, clientMod.Client);

ClientHttp.prototype.execute = function (descriptor) {
  var self = this;
  return new Promise(function (resolve, reject) {
    var options = self.formOptions(descriptor);
    var scheme = options.protocol.split(':').shift();
    var mod = require(scheme);
    var buffer = new Buffer('', 'ascii');
    var req = mod.request(options, function (res) {
      res.setEncoding('ascii');
      res.on('data', function (chunk) {
        buffer = Buffer.concat([buffer, new Buffer(chunk, 'ascii')]);
      });
      res.on('end', function () {
        resolve({
          code: res.statusCode,
          headers: res.headers,
          body: buffer.toString('ascii')
        });
      });
    });
    req.on('error', function (err) {
      reject(err);
    });
    req.write(descriptor.body);
    req.end();
  });
};

/**
 * Returns a set of options suitable to be used with the http/https node
 * modules.
 *
 * @param {integer} code The HTTP status code of the request.
 *
 * @access private
 * @return {Object}
 */
ClientHttp.prototype.formOptions = function (descriptor) {
  var url = urlMod.parse(descriptor.uri);
  return {
    protocol: url.protocol,
    host: url.hostname,
    port: url.port,
    path: url.path,
    method: descriptor.method.toUpperCase(),
    headers: descriptor.headers
  };
};
exports.ClientHttp = ClientHttp;