var Promise = require('promise');
var clientMod = require('../../src/client/client');
var expect = require('chai').expect;

exports.mockResponse = function (code, headers, body) {
  if (!code) {
    code = 200;
  }
  if (!headers) {
    headers = {};
  }
  if (typeof body !== 'string') {
    var success = code >= 200 && code < 300;
    if (!body) {
      body = {success: success};
      if (!success) {
        body.error_description = [];
      }
    }
    body = JSON.stringify(body);
  }
  return new Promise(function(resolve) {
    resolve({
      code: code,
      headers: headers,
      body: body
    })
  });
};

exports.mockClientForCommand = function (
  assertEndpoint, assertBody, assertContentType
) {
  var client = new clientMod.Client();
  client.setApiKey('anapikey');
  if (!assertBody) {
    assertBody = '';
  }
  if (!assertContentType) {
    assertContentType = 'application/json';
  }
  client.execute = function (descriptor) {
    expect(descriptor.uri).to.equal(client.endpoint + '/' + assertEndpoint);
    expect(descriptor.headers['Content-Type']).to.equal(assertContentType);
    expect(descriptor.body).to.equal(assertBody);
    return exports.mockResponse();
  }
  return client;
};

