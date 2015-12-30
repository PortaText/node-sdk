/**
 * @module null_logger
 */

/**
 * This is our null logger, used in case none is setup.
 *
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 */
function NullLogger () {

}

/**
 * Discards the log message when called. This is the only method used by us.
 *
 * @param {string} message The message to log.
 * @access public
 * @return {null} Always returns null.
 */
NullLogger.prototype.log = function () {
  return null;
};

exports.NullLogger = NullLogger;
