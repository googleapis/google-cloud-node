// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const env = process.env;

// The Logger interface defined below matches the interface
// used by console-log-level.  If the console-log-level
// module is imported here to get the Logger interface,
// TypeScript users of the error reporting library would
// need to install @types/console-log-level to compile their
// code.  As a result, the interface is explicitly specified instead.
export type LogLevel =
  | 'error'
  | 'trace'
  | 'debug'
  | 'info'
  | 'warn'
  | 'fatal'
  | undefined;
export interface Logger {
  error(...args: Array<{}>): void;
  trace(...args: Array<{}>): void;
  debug(...args: Array<{}>): void;
  info(...args: Array<{}>): void;
  warn(...args: Array<{}>): void;
  fatal(...args: Array<{}>): void;
}

export type ReportMode = 'production' | 'always' | 'never';

export interface ConfigurationOptions {
  projectId?: string;
  keyFilename?: string;
  logLevel?: string | number;
  key?: string;
  serviceContext?: {service?: string; version?: string};
  ignoreEnvironmentCheck?: boolean;
  reportMode?: ReportMode;
  credentials?: {};
  reportUnhandledRejections?: boolean;
}

export interface ServiceContext {
  service: string;
  version?: string;
}

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
export class Configuration {
  _logger: Logger;
  _reportMode: ReportMode;
  _projectId: string | null;
  _key: string | null;
  keyFilename: string | null;
  credentials: {} | null;
  _serviceContext: ServiceContext;
  _reportUnhandledRejections: boolean;
  _givenConfiguration: ConfigurationOptions;

  constructor(givenConfig: ConfigurationOptions | undefined, logger: Logger) {
    /**
     * The _logger property caches the logger instance created at the top-level
     * for configuration logging purposes.
     */
    this._logger = logger;
    this._reportMode = 'production';
    /**
     * The _projectId property is meant to contain the string project id that
     * the hosting application is running under. The project id is a unique
     * string identifier for the project. If the Configuration instance is not
     * able to retrieve a project id from the metadata service or the
     * runtime-given configuration then the property will remain null. If given
     * both a project id through the metadata service and the runtime
     * configuration then the instance will assign the value given by the
     * metadata service over the runtime configuration. If the instance is
     * unable to retrieve a valid project id or number from runtime
     * configuration and the metadata service then this will trigger the `error`
     * event in which listening components must operate in 'offline' mode.
     * {@link https://cloud.google.com/compute/docs/storing-retrieving-metadata}
     * @memberof Configuration
     * @private
     * @type {String|Null}
     * @defaultvalue null
     */
    this._projectId = null;
    /**
     * The _key property is meant to contain the optional Stackdriver API key
     * that may be used in place of default application credentials to
     * authenticate with the Stackdriver Error API. This property will remain
     * null if a key is not given in the runtime configuration or an invalid
     * type is given as the runtime configuration.
     * {@link https://support.google.com/cloud/answer/6158862?hl=en}
     * @memberof Configuration
     * @private
     * @type {String|Null}
     * @defaultvalue null
     */
    this._key = null;
    /**
     * The keyFilename property is meant to contain a path to a file containing
     * user or service account credentials, which will be used in place of
     * application default credentials. This property will remain null if no
     * value for keyFilename is given in the runtime configuration.
     * @memberof Configuration
     * @private
     * @type {String|Null}
     * @defaultvalue null
     */
    this.keyFilename = null;
    /**
     * The credentials property is meant to contain an object representation of
     * user or service account credentials, which will be used in place of
     * application default credentials. This property will remain null if no
     * value for credentials is given in the runtime configuration.
     * @memberof Configuration
     * @private
     * @type {Credentials|Null}
     * @defaultvalue null
     */
    this.credentials = null;
    /**
     * The _serviceContext property is meant to contain the optional service
     * context information which may be given in the runtime configuration. If
     * not given in the runtime configuration then the property value will
     * remain null.
     * @memberof Configuration
     * @private
     * @type {Object}
     */
    this._serviceContext = {service: 'nodejs', version: ''};
    /**
     * The _reportUnhandledRejections property is meant to specify whether or
     * not unhandled rejections should be reported to the error-reporting
     * console.
     * @memberof Configuration
     * @private
     * @type {Boolean}
     */
    this._reportUnhandledRejections = false;
    /**
     * The _givenConfiguration property holds a ConfigurationOptions object
     * which, if valid, will be merged against by the values taken from the
     * meta-data service. If the _givenConfiguration property is not valid then
     * only metadata values will be used in the Configuration instance.
     * @memberof Configuration
     * @private
     * @type {Object|Null}
     * @defaultvalue null
     */
    this._givenConfiguration =
      givenConfig?.toString() === '[object Object]' ? givenConfig! : {};
    this._checkLocalServiceContext();
    this._gatherLocalConfiguration();
  }
  /**
   * The _checkLocalServiceContext function is responsible for attempting to
   * source the _serviceContext objects values from runtime configuration and
   * the environment. First the function will check the env for known service
   * context names, if these are not set then it will defer to the
   * _givenConfiguration property if it is set on the instance. The function
   * will check env variables `GAE_MODULE_NAME` and `GAE_MODULE_VERSION` for
   * `_serviceContext.service` and
   * `_serviceContext.version` respectively. If these are not set the
   * `_serviceContext` properties will be left at default unless the given
   * runtime configuration supplies any values as substitutes.
   * @memberof Configuration
   * @private
   * @function _checkLocalServiceContext
   * @returns {Undefined} - does not return anything
   */
  _checkLocalServiceContext() {
    // Update June 18, 2019: When running on Cloud Run, Cloud Run
    //                       on GKE, or any Knative install, the
    //                       K_SERVICE env var should be used as
    //                       the service and the K_REVISION env var
    //                       should be used as the version.  See the
    //                       Knative runtime contract for more info
    // (https://github.com/knative/serving/blob/master/docs/runtime-contract.md#process)
    //
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
    let service;
    let version;

    if (env.K_SERVICE) {
      service = env.K_SERVICE;
      version = env.K_REVISION;
    } else if (env.FUNCTION_NAME) {
      service = env.FUNCTION_NAME;
    } else if (env.GAE_SERVICE) {
      service = env.GAE_SERVICE;
      version = env.GAE_VERSION;
    } else if (env.GAE_MODULE_NAME) {
      service = env.GAE_MODULE_NAME;
      version = env.GAE_MODULE_VERSION;
    }

    this._serviceContext.service = (typeof service === 'string'
      ? service
      : 'node')!;
    this._serviceContext.version =
      typeof version === 'string' ? version : undefined;

    if (
      this._givenConfiguration.serviceContext?.toString() === '[object Object]'
    ) {
      if (
        typeof this._givenConfiguration.serviceContext!.service === 'string'
      ) {
        this._serviceContext.service = this._givenConfiguration.serviceContext!.service!;
      } else if (
        this._givenConfiguration.serviceContext?.service !== undefined
      ) {
        throw new Error('config.serviceContext.service must be a string');
      }

      if (
        typeof this._givenConfiguration.serviceContext!.version === 'string'
      ) {
        this._serviceContext.version = this._givenConfiguration.serviceContext!.version;
      } else if (
        this._givenConfiguration.serviceContext?.version !== undefined
      ) {
        throw new Error('config.serviceContext.version must be a string');
      }
    }
  }
  _determineReportMode() {
    if (this._givenConfiguration.reportMode) {
      this._reportMode = this._givenConfiguration.reportMode.toLowerCase() as ReportMode;
    }
  }
  /**
   * The _gatherLocalConfiguration function is responsible for determining
   * directly determing whether the properties `reportUncaughtExceptions` and
   * `key`, which can be optionally supplied in the runtime configuration,
   * should be merged into the instance. This function also calls several
   * specialized environmental variable checkers which not only check for the
   * optional runtime configuration supplied values but also the processes
   * environmental values.
   * @memberof Configuration
   * @private
   * @function _gatherLocalConfiguration
   * @returns {Undefined} - does not return anything
   */
  _gatherLocalConfiguration() {
    let isReportModeValid = true;
    if (this._givenConfiguration?.reportMode !== undefined) {
      const reportMode = this._givenConfiguration.reportMode;
      isReportModeValid =
        typeof reportMode === 'string' &&
        (reportMode === 'production' ||
          reportMode === 'always' ||
          reportMode === 'never');
    }

    if (!isReportModeValid) {
      throw new Error(
        'config.reportMode must a string that is one ' +
          'of "production", "always", or "never".'
      );
    }

    const hasEnvCheck =
      this._givenConfiguration?.ignoreEnvironmentCheck !== undefined;
    const hasReportMode = this._givenConfiguration?.reportMode !== undefined;
    if (hasEnvCheck) {
      this._logger.warn(
        'The "ignoreEnvironmentCheck" config option is deprecated.  ' +
          'Use the "reportMode" config option instead.'
      );
    }
    if (hasEnvCheck && hasReportMode) {
      this._logger.warn(
        [
          'Both the "ignoreEnvironmentCheck" and "reportMode" configuration options',
          'have been specified.  The "reportMode" option will take precedence.',
        ].join(' ')
      );
      this._determineReportMode();
    } else if (hasEnvCheck) {
      if (this._givenConfiguration.ignoreEnvironmentCheck === true) {
        this._reportMode = 'always';
      } else if (
        this._givenConfiguration?.ignoreEnvironmentCheck !== undefined &&
        typeof this._givenConfiguration.ignoreEnvironmentCheck !== 'boolean'
      ) {
        throw new Error('config.ignoreEnvironmentCheck must be a boolean');
      } else {
        this._reportMode = 'production';
      }
    } else if (hasReportMode) {
      this._determineReportMode();
    }

    if (this.isReportingEnabled() && !this.getShouldReportErrorsToAPI()) {
      this._logger.warn(
        [
          'The stackdriver error reporting client is configured to report errors',
          'if and only if the NODE_ENV environment variable is set to "production".',
          'Errors will not be reported.  To have errors always reported, regardless of the',
          'value of NODE_ENV, set the reportMode configuration option to "always".',
        ].join(' ')
      );
    }

    if (typeof this._givenConfiguration.key === 'string') {
      this._key = this._givenConfiguration.key!;
    } else if (this._givenConfiguration?.key !== undefined) {
      throw new Error('config.key must be a string');
    }
    if (typeof this._givenConfiguration.keyFilename === 'string') {
      this.keyFilename = this._givenConfiguration.keyFilename!;
    } else if (this._givenConfiguration?.keyFilename !== undefined) {
      throw new Error('config.keyFilename must be a string');
    }
    if (
      this._givenConfiguration.credentials?.toString() === '[object Object]'
    ) {
      this.credentials = this._givenConfiguration.credentials!;
    } else if (this._givenConfiguration?.credentials !== undefined) {
      throw new Error('config.credentials must be a valid credentials object');
    }
    if (
      typeof this._givenConfiguration.reportUnhandledRejections === 'boolean'
    ) {
      this._reportUnhandledRejections = this._givenConfiguration.reportUnhandledRejections!;
    } else if (
      this._givenConfiguration?.reportUnhandledRejections !== undefined
    ) {
      throw new Error('config.reportUnhandledRejections must be a boolean');
    }
  }
  /**
   * The _checkLocalProjectId function is responsible for determing whether the
   * _projectId property was set by the metadata service and whether or not the
   * _projectId property should/can be set with a environmental or runtime
   * configuration variable. If, upon execution of the _checkLocalProjectId
   * function, the _projectId property has already been set to a string then it
   * is assumed that this property has been set with the metadata services
   * response. The metadata value for the project id always take precedence over
   * any other locally configured project id value. Given that the metadata
   * service did not set the project id this function will defer next to the
   * value set in the environment named `GCLOUD_PROJECT` if it is set and of
   * type string. If this environmental variable is not set the function will
   * defer to the _givenConfiguration property if it is of type object and has a
   * string property named projectId. If none of these conditions are met then
   * the _projectId property will be left at its default value.
   * @memberof Configuration
   * @private
   * @function _checkLocalProjectId
   * @param {Function} cb - The original user callback to invoke with the project
   *  id or error encountered during id capture
   * @returns {Undefined} - does not return anything
   */
  _checkLocalProjectId() {
    if (typeof this._projectId === 'string') {
      // already has been set by the metadata service
      return this._projectId;
    }
    if (this._givenConfiguration?.projectId !== undefined) {
      if (typeof this._givenConfiguration.projectId === 'string') {
        this._projectId = this._givenConfiguration.projectId!;
      } else if (typeof this._givenConfiguration.projectId === 'number') {
        this._projectId = this._givenConfiguration.projectId!.toString();
      }
    }
    return this._projectId;
  }
  /**
   * Returns whether this configuration specifies that errors should be
   * reported to the error reporting API.  That is, "reportMode" is
   * either set to "always" or it is set to "production" and the value
   * of the NODE_ENV environment variable is "production".
   * @memberof Configuration
   * @public
   * @function getShouldReportErrorsToAPI
   * @returns {Boolean} - whether errors should be reported to the API
   */
  getShouldReportErrorsToAPI() {
    return (
      this._reportMode === 'always' ||
      (this._reportMode === 'production' &&
        (process.env.NODE_ENV || '').toLowerCase() === 'production')
    );
  }
  isReportingEnabled() {
    return this._reportMode !== 'never';
  }
  /**
   * Returns the _projectId property on the instance.
   * @memberof Configuration
   * @public
   * @function getProjectId
   * @returns {String|Null} - returns the _projectId property
   */
  getProjectId() {
    return this._checkLocalProjectId();
  }
  /**
   * Returns the _key property on the instance.
   * @memberof Configuration
   * @public
   * @function getKey
   * @returns {String|Null} - returns the _key property
   */
  getKey() {
    return this._key;
  }
  /**
   * Returns the keyFilename property on the instance.
   * @memberof Configuration
   * @public
   * @function getKeyFilename
   * @returns {String|Null} - returns the keyFilename property
   */
  getKeyFilename() {
    return this.keyFilename;
  }
  /**
   * Returns the credentials property on the instance.
   * @memberof Configuration
   * @public
   * @function getCredentials
   * @returns {Credentials|Null} - returns the credentials property
   */
  getCredentials() {
    return this.credentials;
  }
  /**
   * Returns the _serviceContext property on the instance.
   * @memberof Configuration
   * @public
   * @function getKey
   * @returns {Object|Null} - returns the _serviceContext property
   */
  getServiceContext() {
    return this._serviceContext;
  }
  /**
   * Returns the _reportUnhandledRejections property on the instance.
   * @memberof Configuration
   * @public
   * @function getReportUnhandledRejections
   * @returns {Boolean} - returns the _reportUnhandledRejections property
   */
  getReportUnhandledRejections() {
    return this._reportUnhandledRejections;
  }
}
