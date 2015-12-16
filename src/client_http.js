var nullLogger = require('./null_logger');
var clientMod = require('./client');
var urlMod = require('url');
var https = require('https');
var http = require('http');
var util = require('util');

function ClientHttp () {
  ClientHttp.super_.call(this);
  this.logger = nullLogger.NullLogger;
}
util.inherits(ClientHttp, clientMod.Client);

ClientHttp.prototype.execute = function (descriptor, callback) {
  var options = this.formOptions(descriptor);
  var mod = http;
  var scheme = options.protocol.split(':').shift();
  var mod = require(scheme);
  var buffer = new Buffer('', 'ascii');
  var req = mod.request(options, function (res) {
    res.setEncoding('ascii');
    res.on('data', function (chunk) {
      buffer = Buffer.concat([buffer, new Buffer(chunk, 'ascii')]);
    });
    res.on('end', function () {
      callback(
        undefined, res.statusCode, res.headers, buffer.toString('ascii')
      );
    });
  });
  req.on('error', function (err) {
    callback(err);
  });
  req.write(descriptor.body);
  req.end();
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
