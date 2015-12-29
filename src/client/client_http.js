var nullLogger = require('../null_logger');
var clientMod = require('./client');
var urlMod = require('url');
var util = require('util');
var Promise = require('promise');

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
