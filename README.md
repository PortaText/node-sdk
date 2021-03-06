[![License](http://img.shields.io/badge/license-APACHE2-blue.svg)](http://img.shields.io/badge/license-APACHE2-blue.svg)
[![npm version](https://badge.fury.io/js/portatext.svg)](https://badge.fury.io/js/portatext)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

[![Build Status](https://travis-ci.org/PortaText/node-sdk.svg)](https://travis-ci.org/PortaText/node-sdk)
[![Coverage Status](https://coveralls.io/repos/PortaText/node-sdk/badge.svg?branch=master&service=github)](https://coveralls.io/github/PortaText/node-sdk?branch=master)
[![Code Climate](https://codeclimate.com/github/PortaText/node-sdk/badges/gpa.svg)](https://codeclimate.com/github/PortaText/node-sdk)
[![Issue Count](https://codeclimate.com/github/PortaText/node-sdk/badges/issue_count.svg)](https://codeclimate.com/github/PortaText/node-sdk)

# node-sdk
Official NodeJS Client for the [PortaText](https://www.portatext.com/) API.

# Documentation

* Autogenerated documentation for this source can be found in the [doc](https://github.com/PortaText/node-sdk/tree/master/doc) directory.
* The [endpoint tests](https://github.com/PortaText/node-sdk/tree/master/test/endpoints) should also serve as good documentation on how to use the API.
* General PortaText documentation (including the REST API) can be found at the [PortaText wiki](https://github.com/PortaText/docs/wiki).

# Installing
Add this library to your [package.json](https://docs.npmjs.com/getting-started/using-a-package.json) configuration:
```json
  "dependencies": {
    "portatext": "latest"
  }
```

# Basic use

## Getting a client instance
The first thing is to get a [Client](https://github.com/PortaText/node-sdk/blob/master/src/client/client.js) instance, for example
the [Curl](https://github.com/PortaText/node-sdk/blob/master/src/client/client_http.js) implementation:

```js
var portatextMod = require('portatext');
var portatext = new portatextMod.ClientHttp();
```

## (Optional) Set your logger
You can optionally set a [Console](https://nodejs.org/api/console.html) compatible logger:
```js
portatext.setLogger(console);
```

By default, the client will use the [NullLogger](https://github.com/PortaText/node-sdk/blob/master/src/null_logger.js).

## Authenticating
You can authenticate to the endpoints by using your [API key](https://github.com/PortaText/docs/wiki/REST-API#auth_api) or your username/password. This translates to
either doing this:

```js
portatext.setApiKey(apiKey);
```

Or this:

```js
portatext.setCredentials(username, password);
```

When you specify a [username and password](https://github.com/PortaText/docs/wiki/REST-API#auth_basic) instead of an api key, the sdk will
automatically login and get a [session token](https://github.com/PortaText/docs/wiki/REST-API#auth_session) when needed.

# Using the endpoints
All the API commands can be found in the [command/api](https://github.com/PortaText/node-sdk/tree/master/src/command/api)
directory. The client offers a way to instantiate them by just calling them by their name.

## Quick example
As an example, to create a template, you would do:

```js
client
  .templates()                       // Get an instance of the Templates endpoint.
  .text("The text of my template")
  .description("My first template")
  .name("template1")
  .post()                            // Call the Templates endpoint with a POST.
  .then(function (result) {
    // Handle result...
  })
  .catch(function (err) {
    // Handle error...
  });
```

To get a template by id:

```js
client.templates().id(45).get().then(function (result) { .... });
```

Or, to get all the templates:

```js
client.templates().get().then(function (result) { .... });
```

## The result
Calling an endpoint will return a [Promise](https://github.com/then/promise). On fulfillment,
a result object is returned (see below for how to handle it). On rejection, you can get a `string` or
a result object (in case the request was made but the server returned one or more errors in its response,
for example if a field was missing or different than what was expected).

### Testing for success
```js
if (result.success) {
  ...
}
```

### Getting error strings back from the server
```js
if (result.errors) {
  result.errors.forEach(function (error) {
    ...
  });
}
```

### Getting data back from the server
```js
if (result.success) {
  var data = result.data;
}
```

# Developers
This project uses standard [npm scripts](https://docs.npmjs.com/cli/run-script). Current tasks include:
 * test: Runs [Mocha](https://mochajs.org/) tests.
 * jsdoc: Runs [JSDoc3](http://usejsdoc.org/).
 * eslint: Runs [ESLint](http://eslint.org/).
 * coverage: Runs the tests and then [Instanbul](https://gotwarlost.github.io/istanbul/) to get a coverage report.
 * build: This is the default task, and will run all the other tasks.

## Running an npm task
To run a task, just do:

```sh
npm run build
```

## Contributing
To contribute:
 * Make sure you open a **concise** and **short** pull request.
 * Throw in any needed unit tests to accomodate the new code or the
 changes involved.
 * Run `npm run build` and make sure everything is ok before submitting the pull
 request (make eslint happy).
 * Your code must comply with the [Javascript Standard Style](https://github.com/feross/standard),
 ESLint should take care of that.
 * If your code is accepted, it will belong to PortaText and will be published
 under the Apache2 License.

# License
The source code is released under Apache 2 License.

Check [LICENSE](https://github.com/PortaText/node-sdk/blob/master/LICENSE) file for more information.
