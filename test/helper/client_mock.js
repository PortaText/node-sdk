var Promise = require('promise');

exports.mockResponse = function(code, headers, body) {
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
