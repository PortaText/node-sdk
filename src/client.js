var loggerMod = require('./null_logger');

function Client () {
  this.DEFAULT_ENDPOINT = 'https://rest.portatext.com';
  this.apiKey = null;
  this.endpoint = this.DEFAULT_ENDPOINT;
  this.logger = new loggerMod.NullLogger();
  this.sessionToken = null;
  this.credentials = null;
}

Client.prototype.setEndpoint = function (endpoint) {
  this.endpoint = endpoint;
  return this;
};

Client.prototype.setApiKey = function (apiKey) {
  this.apiKey = apiKey;
  return this;
};

Client.prototype.setCredentials = function (username, password) {
  this.credentials = [username, password];
  return this;
};

Client.prototype.setLogger = function (logger) {
  this.logger = logger;
  return this;
};

Client.prototype.run = function (
  endpoint, method, contentType, body, authType, callback
) {
  var uri = this.endpoint + '/' + endpoint;
  var headers = {
    'Content-Type': contentType,
    'Accept': 'application/json'
  };
  if (authType === 'api_key') {
    headers['X-Api-Key'] = this.apiKey;
  }
  this.logger.log('Calling ' + method + ' ' + uri + ' with ' + authType);
  var descriptor = {
    method: method,
    uri: uri,
    headers: headers,
    body: body
  };
  this.execute(descriptor, function (err, retCode, retHeaders, retBody) {
    if (err) {
      callback(err);
    } else {
      if (retBody.length < 2) {
        retBody = '{}';
      }
      var result = {
        code: retCode,
        headers: retHeaders,
        body: JSON.parse(retBody)
      };
      callback(undefined, result);
    }
  });
};

Client.prototype.execute = function (descriptor, callback) {
  callback('not_implemented');
};

exports.Client = Client;
