var clientMod = require('../src/client/client_http');
var assert = require('assert');
var http = require('http');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
var fs = require('fs');
chai.use(chaiAsPromised);
chai.should();

describe('ClientHttp', function() {
  describe('execute', function () {
    it('should return errors', function () {
      var client = new clientMod.ClientHttp();
      address = '127.0.0.1';
      port = 1025;
      return client
        .execute({
          uri: 'http://' + address + ':' + port +'/some/endpoint',
          method: 'patch',
          headers: {},
          body: ''
        }).should.eventually.be.rejected;
    });

    it('should issue a request and save it to a file', function () {
      var address = '127.0.0.1';
      var port = 50433;
      var dataFile = '/tmp/data50433';

      var server = http.createServer(function (request, response) {
        var buffer = new Buffer('', 'ascii');
        request.on('data', function (chunk) {
          buffer = new Buffer.concat([buffer, new Buffer(chunk, 'ascii')]);
        });
        request.on('end', function () {
          assert.equal(buffer.toString(), 'a body');
          response.writeHead(762, {
            'X-ReturnHeader-1': 'value1',
            'X-ReturnHeader-2': 'value2'
          });
          response.write('Returned body');
          response.end();
        });
      });
      var ret = new Promise(function(resolve, reject) {
        server.listen(port, address, function() {
          resolve();
        });
      });
      return ret.then(function() {
        var client = new clientMod.ClientHttp();
        return client.execute({
          uri: 'http://' + address + ':' + port +'/some/endpoint',
          method: 'put',
          headers: {},
          body: 'a body',
          outputFile: dataFile
        }).then(function() {
          return new Promise(function(resolve, reject) {
            var data = fs.readFileSync(dataFile).toString('ascii');
            if (data == 'Returned body') {
              resolve();
            } else {
              reject(data);
            }
          });
        });
      }).should.be.fulfilled
    });

    it('should issue a request with file', function () {
      var address = '127.0.0.1';
      var port = 50432;
      var dataFile = '/tmp/data50432';
      fs.writeFileSync(dataFile, 'upload this one');

      var server = http.createServer(function (request, response) {
        var buffer = new Buffer('', 'ascii');
        request.on('data', function (chunk) {
          buffer = new Buffer.concat([buffer, new Buffer(chunk, 'ascii')]);
        });
        request.on('end', function () {
          assert.equal(request.headers['content-length'], 15);
          assert.equal(buffer.toString(), 'upload this one');
          response.writeHead(762, {
            'X-ReturnHeader-1': 'value1',
            'X-ReturnHeader-2': 'value2'
          });
          response.write('Returned body');
          response.end();
        });
      });
      var ret = new Promise(function(resolve, reject) {
        server.listen(port, address, function() {
          resolve();
        });
      });
      return ret.then(function() {
        var client = new clientMod.ClientHttp();
        return client.execute({
          uri: 'http://' + address + ':' + port +'/some/endpoint',
          method: 'put',
          headers: {},
          body: 'file:' + dataFile
        })
      }).should.be.fulfilled
    });

    it('should issue the request with the right method and body', function () {
      var address = '127.0.0.1';
      var port = 50431;
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
      var ret = new Promise(function(resolve, reject) {
        server.listen(port, address, function() {
          resolve();
        });
      });
      return ret.then(function() {
        var client = new clientMod.ClientHttp();
        return client.execute({
          uri: 'http://' + address + ':' + port +'/some/endpoint',
          method: 'patch',
          headers: {
            'X-Header-1': 'value 1',
            'X-Header-2': 'value 2'
          },
          body: 'Some body'
        })
      }).then(function(result) {
        expect(result.code).to.equal(762);
        expect(result.headers['x-returnheader-1']).to.equal('value1');
        expect(result.headers['x-returnheader-2']).to.equal('value2');
        expect(result.body).to.equal('Returned body');
      });
    });
  });
});