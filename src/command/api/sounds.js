/**
 * @module sounds
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Sounds endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_sounds Sounds endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Sounds () {
  Sounds.super_.call(this);
}

util.inherits(Sounds, commandMod.Command);

/**
 * Sets the name.
 *
 * @param {string} name
 *
 * @access public
 * @return {module:command~Command}
 */
Sounds.prototype.name = function (name) {
  return this.setArgument('name', name);
};

/**
 * Sets the description.
 *
 * @param {string} description
 *
 * @access public
 * @return {module:command~Command}
 */
Sounds.prototype.description = function (description) {
  return this.setArgument('description', description);
};

/**
 * Sets the sound file.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Sounds.prototype.sound = function (filename) {
  return this.setArgument('sound_file', filename);
};

/**
 * Saves the sound to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Sounds.prototype.saveTo = function (file) {
  return this.setArgument('accept_sound_file', file);
};

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
Sounds.prototype.id = function (id) {
  return this.setArgument('id', id);
};

Sounds.prototype.body = function (method) {
  var file = this.getArgument('sound_file');
  if (file) {
    return 'file:' + file;
  }
  return Sounds.super_.prototype.body.apply(this);
};

Sounds.prototype.endpoint = function (method) {
  var endpoint = 'sounds';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  var queryString = {};

  var name = this.getArgument('name');
  if (name) {
    queryString.name = name;
    this.delArgument('name');
  }
  var description = this.getArgument('description');
  if (description) {
    queryString.description = description;
    this.delArgument('description');
  }
  if (Object.keys(queryString).length > 0) {
    endpoint += '?' + qs.stringify(queryString);
  }
  return endpoint;
};

exports.Sounds = Sounds;
