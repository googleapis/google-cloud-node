/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var env = process.env;
var commonDiag = require('@google/cloud-diagnostics-common');
var utils = commonDiag.utils;
var has = require('lodash.has');
var is = require('is');
var isObject = is.object;
var isBoolean = is.boolean;
var isString = is.string;
var isNumber = is.number;
var isEmpty = is.empty;
var isNull = is.null;
var version = require('../package.json').version;

/**
 * The Configuration constructor function initializes several internal
 * properties on the Configuration instance and accepts a runtime-given
 * configuration object which may be used by the Configuration instance
 * depending on the initialization transaction that occurs with the meta-data
 * service.
 * @class Configuration
 * @classdesc The Configuration class represents the runtime configuration of
 *  the Stackdriver error handling library. This Configuration class accepts the
 *  configuration options potentially given through the application interface
 *  but it also preferences values received from the metadata service over
 *  values given through the application interface. Becuase the Configuration
 *  class must handle async network I/O it exposes some methods as async
 *  functions which may cache their interactions results to speed access to
 *  properties.
 * @param {ConfigurationOptions} givenConfig - The config given by the
 *  hosting application at runtime. Configuration values will only be observed
 *  if they are given as a plain JS object; all other values will be ignored.
 * @param {Object} logger - The logger instance created when the library API has
 *  been initialized.
 */
var Configuration = function(givenConfig, logger) {
  /**
   * The _logger property caches the logger instance created at the top-level
   * for configuration logging purposes.
   * @memberof Configuration
   * @private
   * @type {Object}
   * @defaultvalue Object
   */
  this._logger = logger;
  /**
   * The _reportUncaughtExceptions property is meant to contain the optional
   * runtime configuration property reportUncaughtExceptions. This property will
   * default to true if not given false through the runtime configuration
   * meaning that the default behavior is to catch uncaught exceptions, report
   * them to the Stackdriver Errors API and then exit. If given false uncaught
   * exceptions will not be listened for and not be caught or reported.
   * @memberof Configuration
   * @private
   * @type {Boolean}
   * @defaultvalue true
   */
  this._reportUncaughtExceptions = true;
  /**
   * The _shouldReportErrorsToAPI property is meant to denote whether or not
   * the Stackdriver error reporting library will actually try to report Errors
   * to the Stackdriver Error API. The value of this property is derived from
   * the `NODE_ENV` environmental variable or the value of the ignoreEnvironmentCheck
   * property if present in the runtime configuration. If either the `NODE_ENV` 
   * variable is set to 'production' or the ignoreEnvironmentCheck propery on 
   * the runtime configuration is set to true then the error reporting library will 
   * attempt to send errors to the Error API. Otherwise the value will remain 
   * false and errors will not be reported to the API.
   * @memberof Configuration
   * @private
   * @type {Boolean}
   * @defaultvalue false
   */
  this._shouldReportErrorsToAPI = false;
  /**
   * The _projectId property is meant to contain the string project id that the
   * hosting application is running under. The project id is a unique string
   * identifier for the project. If the Configuration instance is not able to
   * retrieve a project id from the metadata service or the runtime-given
   * configuration then the property will remain null. If given both a project
   * id through the metadata service and the runtime configuration then the
   * instance will assign the value given by the metadata service over the
   * runtime configuration. If the instance is unable to retrieve a valid
   * project id or number from runtime configuration and the metadata service
   * then this will trigger the `error` event in which listening components must
   * operate in 'offline' mode.
   * {@link https://cloud.google.com/compute/docs/storing-retrieving-metadata}
   * @memberof Configuration
   * @private
   * @type {String|Null}
   * @defaultvalue null
   */
  this._projectId = null;
  /**
   * The _key property is meant to contain the optional Stackdriver API key that
   * may be used in place of default application credentials to authenticate
   * with the Stackdriver Error API. This property will remain null if a key
   * is not given in the runtime configuration or an invalid type is given as
   * the runtime configuration.
   * {@link https://support.google.com/cloud/answer/6158862?hl=en}
   * @memberof Configuration
   * @private
   * @type {String|Null}
   * @defaultvalue null
   */
  this._key = null;
  /**
   * The _keyFilename property is meant to contain a path to a file containing
   * user or service account credentials, which will be used in place of
   * application default credentials. This property will remain null if no
   * value for keyFilename is given in the runtime configuration.
   * @memberof Configuration
   * @private
   * @type {String|Null}
   * @defaultvalue null
   */
  this._keyFilename = null;
  /**
   * The _credentials property is meant to contain an object representation of
   * user or service account credentials, which will be used in place of
   * application default credentials. This property will remain null if no
   * value for credentials is given in the runtime configuration.
   * @memberof Configuration
   * @private
   * @type {Credentials|Null}
   * @defaultvalue null
   */
  this._credentials = null;
  /**
   * The _serviceContext property is meant to contain the optional service
   * context information which may be given in the runtime configuration. If
   * not given in the runtime configuration then the property value will remain
   * null.
   * @memberof Configuration
   * @private
   * @type {Object}
   */
  this._serviceContext = {service: 'nodejs', version: ''};
  /**
   * The _version of the Error reporting library that is currently being run.
   * This information will be logged in errors communicated to the Stackdriver
   * Error API.
   * @memberof Configuration
   * @private
   * @type {String}
   */
  this._version = version;
  /**
    * Boolean flag indicating whether or not the configuration instance was able
    * to find a set of usable credentials to attempt authorization against the
    * Stackdriver API.
    * @memberof Configuration
    * @private
    * @type {Boolean}
    */
  this._lacksValidCredentials = true;
  /**
   * The _givenConfiguration property holds a ConfigurationOptions object
   * which, if valid, will be merged against by the values taken from the meta-
   * data service. If the _givenConfiguration property is not valid then only
   * metadata values will be used in the Configuration instance.
   * @memberof Configuration
   * @private
   * @type {Object|Null}
   * @defaultvalue null
   */
  this._givenConfiguration = isObject(givenConfig) ? givenConfig : {};
  this._checkLocalServiceContext();
  this._gatherLocalConfiguration();
};
/**
 * The _checkLocalServiceContext function is responsible for attempting to
 * source the _serviceContext objects values from runtime configuration and the
 * environment. First the function will check the env for known service context
 * names, if these are not set then it will defer to the _givenConfiguration
 * property if it is set on the instance. The function will check env variables
 * `GAE_MODULE_NAME` and `GAE_MODULE_VERSION` for `_serviceContext.service` and
 * `_serviceContext.version` respectively. If these are not set the 
 * `_serviceContext` properties will be left at default unless the given runtime
 * configuration supplies any values as substitutes.
 * @memberof Configuration
 * @private
 * @function _checkLocalServiceContext
 * @returns {Undefined} - does not return anything
 */
Configuration.prototype._checkLocalServiceContext = function() {
  // Note: The GAE_MODULE_NAME environment variable is set on GAE.
  //       If the code is, in particular, running on GCF, then the 
  //       FUNCTION_NAME environment variable is set.
  //
  // To determine the service name to use:
  //   If the user specified a service name it should be used, otherwise 
  //   if the FUNCTION_NAME environment variable is set (indicating that the 
  //   code is running on GCF) then the FUNCTION_NAME value should be used as 
  //   the service name.  If neither of these conditions are true, the 
  //   value of the GAE_MODULE_NAME environment variable should be used as the 
  //   service name.
  //
  // To determine the service version to use:
  //   If the user species a version, then that version will be used.
  //   Otherwise, the value of the environment variable GAE_MODULE_VERSION
  //   will be used if and only if the FUNCTION_NAME environment variable is
  //   not set.
  var service;
  var version;

  if (env.FUNCTION_NAME){
    service = env.FUNCTION_NAME;
  }
  else if (env.GAE_SERVICE){
    service = env.GAE_SERVICE;
    version = env.GAE_VERSION;
  }
  else if (env.GAE_MODULE_NAME){
    service = env.GAE_MODULE_NAME;
    version = env.GAE_MODULE_VERSION;
  }

  this._serviceContext.service = isString(service) ? service : 'node';
  this._serviceContext.version = isString(version) ? version : undefined;

  if (isObject(this._givenConfiguration.serviceContext)) {
    if (isString(this._givenConfiguration.serviceContext.service)) {
      this._serviceContext.service = 
        this._givenConfiguration.serviceContext.service;
    } else if (has(this._givenConfiguration.serviceContext, 'service')) {
      throw new Error('config.serviceContext.service must be a string');
    }

    if (isString(this._givenConfiguration.serviceContext.version)) {
      this._serviceContext.version =
        this._givenConfiguration.serviceContext.version;
    } else if (has(this._givenConfiguration.serviceContext, 'version')) {
      throw new Error('config.serviceContext.version must be a string');
    }
  }
};
/**
 * The _gatherLocalConfiguration function is responsible for determining
 * directly determing whether the properties `reportUncaughtExceptions` and
 * `key`, which can be optionally supplied in the runtime configuration, should
 * be merged into the instance. This function also calls several specialized
 * environmental variable checkers which not only check for the optional runtime
 * configuration supplied values but also the processes environmental values.
 * @memberof Configuration
 * @private
 * @function _gatherLocalConfiguration
 * @returns {Undefined} - does not return anything
 */
Configuration.prototype._gatherLocalConfiguration = function() {
  if (this._givenConfiguration.ignoreEnvironmentCheck === true) {
    this._shouldReportErrorsToAPI = true;
  } else if (has(this._givenConfiguration, 'ignoreEnvironmentCheck') &&
    !isBoolean(this._givenConfiguration.ignoreEnvironmentCheck)) {
      throw new Error('config.ignoreEnvironmentCheck must be a boolean');
  } else {
    this._shouldReportErrorsToAPI = env.NODE_ENV === 'production';
  }
  if (!this._shouldReportErrorsToAPI) {
    this._logger.warn([
      'Stackdriver error reporting client has not been configured to send',
      'errors, please check the NODE_ENV environment variable and make sure it',
      'is set to "production" or the ignoreEnvironmentCheck property is set to',
      'true in the runtime configuration object'
    ].join(' '));
  }
  if (isBoolean(this._givenConfiguration.reportUncaughtExceptions)) {
    this._reportUncaughtExceptions = this._givenConfiguration
      .reportUncaughtExceptions;
  } else if (has(this._givenConfiguration, 'reportUncaughtExceptions'))  {
    throw new Error('config.reportUncaughtExceptions must be a boolean');
  }
  if (isString(this._givenConfiguration.key)) {
    this._key = this._givenConfiguration.key;
  } else if (has(this._givenConfiguration, 'key')) {
    throw new Error('config.key must be a string');
  }
  if (isString(this._givenConfiguration.keyFilename)) {
    this._keyFilename = this._givenConfiguration.keyFilename;
  } else if (has(this._givenConfiguration, 'keyFilename')) {
    throw new Error('config.keyFilename must be a string');
  }
  if (isObject(this._givenConfiguration.credentials)) {
    this._credentials = this._givenConfiguration.credentials;
  } else if (has(this._givenConfiguration, 'credentials')) {
    throw new Error('config.credentials must be a valid credentials object');
  }
  this._checkAuthConfiguration();
};
/**
  * The _checkAuthConfiguration function is responsible for determining whether
  * or not a configuration instance, after having gathered configuration from
  * environment and runtime, has credentials information enough to attempt
  * authorization with the Stackdriver Errors API.
  * @memberof Configuration
  * @private
  * @function _checkAuthConfiguration
  * @returns {Undefined} - does not return anything
  */
Configuration.prototype._checkAuthConfiguration = function () {
  if (!isNull(this._key) || !isNull(this._keyFilename) ||
    !isNull(this._credentials) || 
    !isEmpty(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
      this._lacksValidCredentials = false;
  } else {
    this._logger.warn([
      'Unable to find credential information on instance. This library will',
      'be unable to communicate with the Stackdriver API to save errors.'
    ].join(' '));
  }
};
/**
 * The _checkLocalProjectId function is responsible for determing whether the
 * _projectId property was set by the metadata service and whether or not the
 * _projectId property should/can be set with a environmental or runtime
 * configuration variable. If, upon execution of the _checkLocalProjectId
 * function, the _projectId property has already been set to a string then it is
 * assumed that this property has been set with the metadata services response.
 * The metadata value for the project id always take precedence over any other
 * locally configured project id value. Given that the metadata service did not
 * set the project id this function will defer next to the value set in the
 * environment named `GCLOUD_PROJECT` if it is set and of type string. If this
 * environmental variable is not set the function will defer to the
 * _givenConfiguration property if it is of type object and has a string
 * property named projectId. If none of these conditions are met then the
 * _projectId property will be left at its default value.
 * @memberof Configuration
 * @private
 * @function _checkLocalProjectId
 * @param {Function} cb - The original user callback to invoke with the project
 *  id or error encountered during id capture
 * @returns {Undefined} - does not return anything
 */
Configuration.prototype._checkLocalProjectId = function(cb) {
  if (isString(this._projectId)) {
    // already has been set by the metadata service
    cb(null, this._projectId);
  } else if (has(this._givenConfiguration, 'projectId')) {
    if (isString(this._givenConfiguration.projectId)) {
      this._projectId = this._givenConfiguration.projectId;
      cb(null, this._projectId);
    } else if (isNumber(this._givenConfiguration.projectId)) {
      this._projectId = this._givenConfiguration.projectId.toString();
      cb(null, this._projectId);
    } else {
      cb(new Error('config.projectId must be a string or number'), null);
    }
  } else if (isString(env.GCLOUD_PROJECT) && !isEmpty(env.GCLOUD_PROJECT)) {
    // GCLOUD_PROJECT is set, set on instance
    this._projectId = env.GCLOUD_PROJECT;
    cb(null, this._projectId);
  } else {
    cb(new Error([
      'Unable to find the project Id for communication with the Stackdriver',
      'Error Reporting service. This app will be unable to send errors to the',
      'reporting service unless a valid project Id is supplied via runtime',
      'configuration or the GCLOUD_PROJECT environmental variable.'
    ].join(' ')), null);
  }
};
/**
 * Returns the _reportUncaughtExceptions property on the instance.
 * @memberof Configuration
 * @public
 * @function getReportUncaughtExceptions
 * @returns {Boolean} - returns the _reportUncaughtExceptions property
 */
Configuration.prototype.getReportUncaughtExceptions = function() {
  return this._reportUncaughtExceptions;
};
/**
 * Returns the _shouldReportErrorsToAPI property on the instance.
 * @memberof Configuration
 * @public
 * @function getShouldReportErrorsToAPI
 * @returns {Boolean} - returns the _shouldReportErrorsToAPI property
 */
Configuration.prototype.getShouldReportErrorsToAPI = function() {
  return this._shouldReportErrorsToAPI;
};
/**
 * Returns the _projectId property on the instance.
 * @memberof Configuration
 * @public
 * @function getProjectId
 * @returns {String|Null} - returns the _projectId property
 */
Configuration.prototype.getProjectId = function(cb) {
  var self = this;
  if (!isNull(this._projectId)) {
    setImmediate(function () {
      cb(null, self._projectId);
    });
  } else {
    utils.getProjectId(function (err, projectId) {
       if (err) {
        self._checkLocalProjectId(cb);
      } else {
        self._projectId = projectId;
        cb(null, self._projectId);
      }
    });
  }
};
/**
 * Returns the _key property on the instance.
 * @memberof Configuration
 * @public
 * @function getKey
 * @returns {String|Null} - returns the _key property
 */
Configuration.prototype.getKey = function() {
  return this._key;
};
/**
 * Returns the _keyFilename property on the instance.
 * @memberof Configuration
 * @public
 * @function getKeyFilename
 * @returns {String|Null} - returns the _keyFilename property
 */
Configuration.prototype.getKeyFilename = function() {
  return this._keyFilename;
};
/**
 * Returns the _credentials property on the instance.
 * @memberof Configuration
 * @public
 * @function getCredentials
 * @returns {Credentials\Null} - returns the _credentials property
 */
Configuration.prototype.getCredentials = function() {
  return this._credentials;
};
/**
 * Returns the _serviceContext property on the instance.
 * @memberof Configuration
 * @public
 * @function getKey
 * @returns {Object|Null} - returns the _serviceContext property
 */
Configuration.prototype.getServiceContext = function() {
  return this._serviceContext;
};
/**
 * Returns the _version property on the instance.
 * @memberof Configuration
 * @public
 * @function getVersion
 * @returns {String} - returns the _version property
 */
Configuration.prototype.getVersion = function() {
  return this._version;
};
/**
 * Returns the _lacksValidCredentials property on the instance.
 * @memberof Configuration
 * @public
 * @function getVersion
 * @returns {Boolean} - returns the _lacksValidCredentials property
 */
Configuration.prototype.lacksCredentials = function() {
  return this._lacksValidCredentials;
};
module.exports = Configuration;
