function NullLogger () {

}

NullLogger.prototype.log = function () {
  return null;
};

exports.NullLogger = NullLogger;
