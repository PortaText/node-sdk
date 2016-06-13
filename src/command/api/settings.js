/**
 * @module settings
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Settings endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_settings Settings endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Settings () {
  Settings.super_.call(this);
}

util.inherits(Settings, commandMod.Command);

/**
 * Dont send an alert by email on low credit.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.dontAlertOnLowCredit = function () {
  return this.setArgument('alert_when_credit_less_than', null);
};

/**
 * Sends an alert by email when credit reaches the given threshold.
 *
 * @param {integer} value
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.alertWhenCreditLessThan = function (value) {
  return this.setArgument('alert_when_credit_less_than', value);
};

/**
 * Don't send emails on inbound messages.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.dontSendInboundByEmail = function () {
  return this.setArgument('email_on_inbound_sms', null);
};

/**
 * Set email where to send inbound messages to.
 *
 * @param {string} email
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.sendInboundByEmail = function (email) {
  return this.setArgument('email_on_inbound_sms', email);
};

/**
 * Disables auto recharges.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.disableAutoRecharges = function () {
  return this.setArgument('autorecharge_enabled', false);
};

/**
 * Enables auto recharges.
 *
 * @param {integer} whenCredit
 * @param {number} total
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.enableAutoRecharges = function (whenCredit, total) {
  this.setArgument('autorecharge_enabled', true);
  this.setArgument('autorecharge_total', total);
  return this.setArgument('autorecharge_when_credit', whenCredit);
};

/**
 * The minimum duration of Voice considered to be a word (milliseconds).
 *
 * @param {integer} maxWordLength
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdMaxWordLength = function (maxWordLength) {
  return this.setArgument('amd_max_word_length', maxWordLength);
};

/**
 * How long do we consider silence (milliseconds).
 *
 * @param {integer} silenceThreshold
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdSilenceThreshold = function (silenceThreshold) {
  return this.setArgument('amd_silence_threshold', silenceThreshold);
};

/**
 * The maximum number of words in a greeting.
 *
 * @param {integer} maxWords
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdMaxWords = function (maxWords) {
  return this.setArgument('amd_max_words', maxWords);
};

/**
 * The minimum duration of silence after a word to consider the
 * audio that follows to be a new word (milliseconds).
 *
 * @param {integer} silenceBetweenWords
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdBetweenWordsSilence = function (silenceBetweenWords) {
  return this.setArgument('amd_between_words_silence', silenceBetweenWords);
};

/**
 * The minimum duration of Voice considered to be a word (milliseconds).
 *
 * @param {integer} minWordLength
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdMinWordLength = function (minWordLength) {
  return this.setArgument('amd_min_word_length', minWordLength);
};

/**
 * The maximum time allowed for the algorithm (milliseconds).
 *
 * @param {integer} totalTime
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdTotalTime = function (totalTime) {
  return this.setArgument('amd_total_time', totalTime);
};

/**
 * Is the silence after detecting a greeting (milliseconds).
 *
 * @param {integer} greetingSilence
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdAfterGreetingSilence = function (greetingSilence) {
  return this.setArgument('amd_after_greeting_silence', greetingSilence);
};

/**
 * Is the maximum length of a greeting (milliseconds).
 *
 * @param {integer} greetingLength
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdMaxGreetingLength = function (greetingLength) {
  return this.setArgument('amd_max_greeting_length', greetingLength);
};

/**
 * Is maximum initial silence duration before greeting (milliseconds).
 *
 * @param {integer} initialSilence
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.amdInitialSilence = function (initialSilence) {
  return this.setArgument('amd_initial_silence', initialSilence);
};

/**
 * Sets default credit card.
 *
 * @param {integer} cardId
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.defaultCreditCard = function (cardId) {
  return this.setArgument('default_card_id', cardId);
};

Settings.prototype.endpoint = function (method) {
  return 'me/settings';
};

exports.Settings = Settings;