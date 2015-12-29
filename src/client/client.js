var loggerMod = require('../null_logger');
var Promise = require('promise');

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
  endpoint, method, contentType, body, authType
) {
  var self = this;
  return new Promise(function (resolve, reject) {
    var uri = self.endpoint + '/' + endpoint;
    var headers = {
      'Content-Type': contentType,
      'Accept': 'application/json'
    };
    // When using basic auth, make the login, then retry with the session token.
    if (!authType) {
      authType = self.authMethod();
      if (authType == 'basic') {
        return self
          .login()
          .then(function (result) {
            resolve(self.run(endpoint, method, contentType, body));
          })
          .catch(function (err) {
            reject(err);
          });
      }
    }
    switch (authType) {
      case 'api_key':
        headers['X-Api-Key'] = self.apiKey;
        break;
      case 'session_token':
        headers['X-Session-Token'] = self.sessionToken;
        break;
      case 'basic':
        var authString = self.credentials[0] + ':' + self.credentials[1];
        authString = new Buffer(authString).toString('base64');
        headers['Authorization'] = 'Basic ' + authString;
        break;
      default:
        reject('invalid_auth_type');
        return;
    }
    self.logger.log('Calling ' + method + ' ' + uri + ' with ' + authType);
    var descriptor = {
      method: method,
      uri: uri,
      headers: headers,
      body: body
    };
    return self
      .execute(descriptor)
      .then(function (result) {
        var retBody = '{}';
        var retHeaders = result.headers;
        var retCode = result.code;
        if (result.body.length >= 2) {
          retBody = result.body;
        }
        retBody = JSON.parse(retBody);
        var error = self.errorFor(retCode);
        var errors = [];
        if (retBody.error_description) {
          errors = retBody.error_description;
        }
        if (error) {
          errors.push(error);
        }
        result = {
          code: retCode,
          success: (retCode > 199 && retCode < 300),
          errors: errors,
          headers: retHeaders,
          data: retBody
        };
        if (retCode === 401 && authType == 'session_token') {
          self.sessionToken = null;
          resolve(self.run(endpoint, method, contentType, body));
        } else {
          if (!result.success) {
            reject(result);
          } else {
            resolve(result);
          }
        }
      }).catch(function (err) {
        reject(err);
      });
  });
};

Client.prototype.errorFor = function (code) {
  var errors = {
    400: 'client_error',
    401: 'invalid_credentials',
    402: 'payment_required',
    403: 'forbidden',
    404: 'not_found',
    405: 'invalid_method',
    415: 'invalid_media',
    429: 'rate_limited',
    500: 'server_error'
  };
  return errors[code];
};

Client.prototype.login = function () {
  var self = this;
  return this
    .run('login', 'post', 'application/json', '', 'basic')
    .then(function (result) {
      self.sessionToken = result.data.token;
      return result;
    });
};

Client.prototype.authMethod = function () {
  if (this.apiKey) return 'api_key';
  if (this.sessionToken) return 'session_token';
  return 'basic';
};

Client.prototype.execute = function (descriptor) {
  return new Promise(function (resolve, reject) {
    reject('not_implemented');
  });
};

exports.Client = Client;
