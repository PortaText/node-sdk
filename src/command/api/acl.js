/**
 * @module acl
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The ACL endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_acl ACL endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Acl () {
  Acl.super_.call(this);
}

util.inherits(Acl, commandMod.Command);

/**
 * Adds an ip to the ACL.
 *
 * @param {string} ip
 * @param {integer} netmask
 * @param {string} description
 *
 * @access public
 * @return {module:command~Command}
 */
Acl.prototype.add = function (ip, netmask, description) {
  if (!netmask) {
    netmask = 32;
  }
  if (!description) {
    description = '';
  }
  return this.setArgument(ip + toString(netmask) + description, {
    ip: ip,
    netmask: netmask,
    description: description
  });
};

Acl.prototype.body = function (method) {
  if (method === 'get') {
    return Acl.super_.prototype.body.apply(this);
  }
  var acls = [];
  for(var k in this.getArguments()) {
    acls.push(this.getArgument(k));
  }
  return JSON.stringify({acl: acls});
};

Acl.prototype.endpoint = function (method) {
  return 'me/acl';
};

exports.Acl = Acl;
