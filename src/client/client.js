/**
 * @module client
 */
 /*
 * typedef {session_token|basic|api_key} AuthMethod
 * typedef {get|post|put|patch|delete} HttpMethod
 * typedef {Object} Descriptor
 * property {string} uri
 * property {string} body
 * property {Object} headers
 * property {HttpMethod} method
 */
var loggerMod = require('../null_logger');
var Promise = require('promise');

/**
 * This is our basic client
 *
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 */
function Client () {
  /**
   * @constant {string} - The default base HTTP endpoint
   * @default
   */
  this.DEFAULT_ENDPOINT = 'https://rest.portatext.com';

  /**
   * @property {string} - The api key to use
   * @default
   * @readonly
   */
  this.apiKey = null;

  /**
   * @property {string} - The endpoint to use
   * @readonly
   */
  this.endpoint = this.DEFAULT_ENDPOINT;

  /**
   * @property {Object} - The logger to use.
   * @default {NullLogger}
   * @readonly
   */
  this.logger = new loggerMod.NullLogger();

  /**
   * @property {string} - The session token to use.
   * @default
   * @readonly
   */
  this.sessionToken = null;

  /**
   * @property {Array} - The credentials to use. The first element is the username, and the second one is the password.
   * @default
   * @readonly
   */
  this.credentials = null;
}

/**
 * Overrides the endpoint to use. I.e: You can make this client point to
 * any url you want (e.g: http://127.0.0.1:1025/myMock).
 *
 * @param {string} endpoint
 *
 * @access public
 * @return {Client}
 */
Client.prototype.setEndpoint = function (endpoint) {
  this.endpoint = endpoint;
  return this;
};

/**
 * Sets an API key to use.
 *
 * @param {string} apiKey
 *
 * @access public
 * @return {Client}
 */
Client.prototype.setApiKey = function (apiKey) {
  this.apiKey = apiKey;
  return this;
};

/**
 * Sets a username and password. Use this instead of setting an api key if
 * you prefer to use a session authentication.
 *
 * @param {string} username
 * @param {string} password
 *
 * @access public
 * @return {Client}
 */
Client.prototype.setCredentials = function (username, password) {
  this.credentials = [username, password];
  return this;
};

/**
 * Sets a logger. The object to set must contain a "log" method (i.e:
 * compatible with the console object).
 *
 * @param {Object} logger
 *
 * @access public
 * @return {Client}
 */
Client.prototype.setLogger = function (logger) {
  this.logger = logger;
  return this;
};

/**
 * Sets a logger. The object to set must contain a "log" method (i.e:
 * compatible with the console object).
 *
 * @param {string} endpoint Relative to the base endpoint (e.g: "login")
 * @param {HttpMethod} method
 * @param {string} contentType E.g: "application/json"
 * @param {string} body
 * @param {AuthMethod} [authType] - If not supplied, will be automatically chosen.
 *
 * @access public
 * @return {Promise}
 */
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
      if (authType === 'basic') {
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
        if (retCode === 401 && authType === 'session_token') {
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

/**
 * When an error code is recogniced, this will return the appropriate string.
 *
 * @param {integer} code The HTTP status code of the request.
 *
 * @access private
 * @return {string|undefined}
 */
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

/**
 * Tries to login using the credentials and basic authentication.
 *
 * @access private
 * @return {Promise}
 */
Client.prototype.login = function () {
  var self = this;
  return this
    .run('login', 'post', 'application/json', '', 'basic')
    .then(function (result) {
      self.sessionToken = result.data.token;
      return result;
    });
};

/**
 * Returns an appropriate authentication method based on the credentials
 * available.
 *
 * @access private
 * @return {AuthMethod}
 */
Client.prototype.authMethod = function () {
  if (this.apiKey) return 'api_key';
  if (this.sessionToken) return 'session_token';
  return 'basic';
};

/**
 * Executes the given request through the underlying implementation.
 *
 * @param {Descriptor} descriptor The request descriptor.
 * @access public
 * @abstract
 * @return {Promise}
 */
Client.prototype.execute = function (descriptor) {
  return new Promise(function (resolve, reject) {
    reject('not_implemented');
  });
};

exports.Client = Client;
