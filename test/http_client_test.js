var clientMod = require('../src/client_http');
var assert = require('assert');
var http = require('http');

describe('ClientHttp', function() {
  describe('execute', function () {
    it('should return errors', function (done) {
      var client = new clientMod.ClientHttp();
      address = '127.0.0.1';
      port = 1025;
      client.execute({
        uri: 'http://' + address + ':' + port +'/some/endpoint',
        method: 'patch',
        headers: {},
        body: ''
      }, function (err) {
        assert.notEqual(err, undefined);
        done();
      });
    });

    it('should issue the request with the right method and body', function (done) {
      var address = '127.0.0.1';
      var port = 50430;
      var server = http.createServer(function (request, response) {
        var buffer = new Buffer('', 'ascii');
        request.on('data', function (chunk) {
          buffer = new Buffer.concat([buffer, new Buffer(chunk, 'ascii')]);
        });
        request.on('end', function () {
          // Assert request parameters.
          assert.equal(request.method, 'PATCH');
          assert.equal(request.headers['x-header-1'], 'value 1');
          assert.equal(request.headers['x-header-2'], 'value 2');
          assert.equal(buffer.toString(), 'Some body');
          assert.equal(request.url, '/some/endpoint');
          response.writeHead(762, {
            'X-ReturnHeader-1': 'value1',
            'X-ReturnHeader-2': 'value2'
          });
          response.write('Returned body');
          response.end();
        });
      });
      server.listen(port, address, function () {
        var client = new clientMod.ClientHttp();
        client.execute({
          uri: 'http://' + address + ':' + port +'/some/endpoint',
          method: 'patch',
          headers: {
            'X-Header-1': 'value 1',
            'X-Header-2': 'value 2'
          },
          body: 'Some body'
        }, function (err, retCode, retHeaders, retBody) {
          // Assert response parameters.
          assert.equal(err, undefined);
          assert.equal(retCode, 762);
          assert.equal(retHeaders['x-returnheader-1'], 'value1');
          assert.equal(retHeaders['x-returnheader-2'], 'value2');
          assert.equal(retBody, 'Returned body');
          done();
        });
      });
    });
  });
});