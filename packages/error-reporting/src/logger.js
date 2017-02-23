var has = require('lodash.has');
var is = require('is');
var isObject = is.object;
var isString = is.string;
var isNumber = is.number;
var logger = require('@google/cloud-diagnostics-common').logger;
/**
 * Creates an instance of the Google Cloud Diagnostics logger class. This
 * instance will be configured to log at the level given by the environment or
 * the runtime configuration property `logLevel`. If neither of these inputs are
 * given or valid then the logger will default to logging at log level `WARN`.
 * Order of precedence for logging level is:
 * 1) Environmental variable `GCLOUD_ERRORS_LOGLEVEL`
 * 2) Runtime configuration property `logLevel`
 * 3) Default log level of `WARN` (2)
 * @function createLogger
 * @param {ConfigurationOptions} initConfiguration - the desired project/error
 *  reporting configuration. Will look for the  `logLevel` property which, if
 *  supplied, must be a number or stringified decimal representation of a
 *  number between and including 1 through 5
 * @returns {Object} - returns an instance of the logger created with the given/
 *  default options
 */
function createLogger (initConfiguration) {
  // Default to log level: warn (2)
  var level = logger.WARN;
  if (has(process.env, 'GCLOUD_ERRORS_LOGLEVEL')) {
    // Cast env string as integer
    level = ~~process.env.GCLOUD_ERRORS_LOGLEVEL;
  } else if (isObject(initConfiguration) && has(initConfiguration, 'logLevel')) {
    if (isString(initConfiguration.logLevel)) {
      // Cast string as integer
      level = ~~initConfiguration.logLevel;
    } else if (isNumber(initConfiguration.logLevel)) {
      level = initConfiguration.logLevel;
    } else {
      throw new Error('config.logLevel must be a number or decimal ' +
        'representation of a number in string form');
    }
  }
  return logger.create(level, '@google/cloud-errors');
}

module.exports = createLogger;
