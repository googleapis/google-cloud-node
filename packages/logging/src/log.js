/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/*!
 * @module logging/log
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');

/**
 * @type {module:logging/entry}
 * @private
 */
var Entry = require('./entry.js');

/**
 * @type {module:logging/metadata}
 * @private
 */
var Metadata = require('./metadata.js');

/*! Developer Documentation
 *
 * @param {module:logging} logging - Parent Logging instance.
 */
/**
 * A log is a named collection of entries, each entry representing a timestamped
 * event. Logs can be produced by Google Cloud Platform services, by third-party
 * services, or by your applications. For example, the log `apache-access` is
 * produced by the Apache Web Server, but the log
 * `compute.googleapis.com/activity_log` is produced by Google Compute Engine.
 *
 * @resource [Introduction to Logs]{@link https://cloud.google.com/logging/docs/basic-concepts#logs}
 *
 * @alias module:logging/log
 * @constructor
 *
 * @param {string} name - Name of the log.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.removeCircular - Replace circular references in
 *     logged objects with a string value, `[Circular]`. (Default: false)
 *
 * @example
 * var log = logging.log('syslog');
 */
function Log(logging, name, options) {
  options = options || {};

  this.formattedName_ = Log.formatName_(logging.projectId, name);
  this.removeCircular_ = options.removeCircular === true;
  this.metadata_ = new Metadata(logging);

  this.logging = logging;
  this.name = this.formattedName_.split('/').pop();
}

/**
 * Return an array of log entries with the desired severity assigned.
 *
 * @private
 *
 * @param {object|object[]} entries - Log entries.
 * @param {string} severity - The desired severity level.
 */
Log.assignSeverityToEntries_ = function(entries, severity) {
  return arrify(entries).map(function(entry) {
    var metadata = extend(true, {}, entry.metadata, {
      severity: severity
    });

    return extend(new Entry(), entry, {
      metadata: metadata
    });
  });
};

/**
 * Format the name of a log. A log's full name is in the format of
 * 'projects/{projectId}/logs/{logName}'.
 *
 * @private
 *
 * @return {string}
 */
Log.formatName_ = function(projectId, name) {
  var path = 'projects/' + projectId + '/logs/';
  name = name.replace(path, '');

  if (decodeURIComponent(name) === name) {
    // The name has not been encoded yet.
    name = encodeURIComponent(name);
  }

  return path + name;
};

/**
 * Write a log entry with a severity of "ALERT".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.alert(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.alert(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.alert = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'ALERT'), options, callback);
};

/**
 * Write a log entry with a severity of "CRITICAL".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.critical(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.critical(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.critical = function(entry, options, callback) {
  var entries = Log.assignSeverityToEntries_(entry, 'CRITICAL');
  this.write(entries, options, callback);
};

/**
 * Write a log entry with a severity of "DEBUG".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.debug(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.debug(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.debug = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'DEBUG'), options, callback);
};

/**
 * Delete the log.
 *
 * @resource [projects.logs.delete API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs/delete}
 *
 * @param {object=} gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * log.delete(function(err, apiResponse) {
 *   if (!err) {
 *     // The log was deleted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.delete = function(gaxOptions, callback) {
  if (is.fn(gaxOptions)) {
    callback = gaxOptions;
    gaxOptions = {};
  }

  var reqOpts = {
    logName: this.formattedName_
  };

  this.logging.request({
    client: 'loggingServiceV2Client',
    method: 'deleteLog',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, callback);
};

/**
 * Write a log entry with a severity of "EMERGENCY".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.emergency(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.emergency(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.emergency = function(entry, options, callback) {
  var entries = Log.assignSeverityToEntries_(entry, 'EMERGENCY');
  this.write(entries, options, callback);
};

/**
 * Create an entry object for this log.
 *
 * Note that using this method will not itself make any API requests. You will
 * use the object returned in other API calls, such as
 * {module:logging/log#write}.
 *
 * @resource [LogEntry JSON representation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry}
 *
 * @param {object=} metadata - See a
 *     [LogEntry Resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry).
 * @param {object|string} data - The data to use as the value for this log
 *     entry.
 * @return {module:logging/entry}
 *
 * @example
 * var metadata = {
 *   resource: {
 *     type: 'gce_instance',
 *     labels: {
 *       zone: 'global',
 *       instance_id: '3'
 *     }
 *   }
 * };
 *
 * var entry = log.entry(metadata, {
 *   delegate: 'my_username'
 * });
 *
 * entry.toJSON();
 * // {
 * //   logName: 'projects/grape-spaceship-123/logs/syslog',
 * //   resource: {
 * //     type: 'gce_instance',
 * //     labels: {
 * //       zone: 'global',
 * //       instance_id: '3'
 * //     }
 * //   },
 * //   jsonPayload: {
 * //     delegate: 'my_username'
 * //   }
 * // }
 */
Log.prototype.entry = function(metadata, data) {
  if (!data) {
    data = metadata;
    metadata = {};
  }

  return this.logging.entry(metadata, data);
};

/**
 * Write a log entry with a severity of "ERROR".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.error(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.error(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.error = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'ERROR'), options, callback);
};

/**
 * This method is a wrapper around {module:logging#getEntries}, but with a
 * filter specified to only return entries from this log.
 *
 * @resource [entries.list API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list}
 *
 * @param {object=} options - Filtering options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - An
 *     [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced_filters).
 *     An empty filter matches all log entries.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {string} options.orderBy - How the results should be sorted,
 *     `timestamp` (oldest first) and `timestamp desc` (newest first,
 *     **default**).
 * @param {number} options.pageSize - Maximum number of logs to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:logging/entry[]} callback.entries - Entries from this log.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * log.getEntries(function(err, entries) {
 *   // `entries` is an array of Stackdriver Logging entry objects.
 *   // See the `data` property to read the data from the entry.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, entries, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     log.getEntries(nextQuery, callback);
 *   }
 * }
 *
 * log.getEntries({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.getEntries().then(function(data) {
 *   var entries = data[0];
 * });
 */
Log.prototype.getEntries = function(options, callback) {
  if (is.function(options)) {
    callback = options;
    options = {};
  }

  options = extend({
    filter: 'logName="' + this.formattedName_ + '"'
  }, options);

  return this.logging.getEntries(options, callback);
};

/**
 * This method is a wrapper around {module:logging#getEntriesStream}, but with a
 * filter specified to only return {module:logging/entry} objects from this log.
 *
 * @param {object=} options - Configuration object. See
 *     {module:logging/log#getEntries} for a complete list of options.
 * @return {stream}
 *
 * @example
 * log.getEntriesStream()
 *   .on('error', console.error)
 *   .on('data', function(entry) {
 *     // `entry` is a Stackdriver Logging entry object.
 *     // See the `data` property to read the data from the entry.
 *   })
 *   .on('end', function() {
 *     // All entries retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * log.getEntriesStream()
 *   .on('data', function(entry) {
 *     this.end();
 *   });
 */
Log.prototype.getEntriesStream = function(options) {
  options = extend({
    filter: 'logName="' + this.formattedName_ + '"'
  }, options);

  return this.logging.getEntriesStream(options);
};

/**
 * Write a log entry with a severity of "INFO".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.info(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.info(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.info = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'INFO'), options, callback);
};

/**
 * Write a log entry with a severity of "NOTICE".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.notice(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.notice(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.notice = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'NOTICE'), options, callback);
};

/**
 * Write a log entry with a severity of "WARNING".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.warning(entry, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.warning(entry).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.warning = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'WARNING'), options, callback);
};

/**
 * Write log entries to Stackdriver Logging.
 *
 * While you may write a single entry at a time, batching multiple entries
 * together is preferred to avoid reaching the queries per second limit.
 *
 * @resource [entries.write API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write}
 *
 * @param {module:logging/entry|module:logging/entry[]} entry - A log entry, or
 *     array of entries, to write.
 * @param {object=} options - Configuration object.
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
 * @param {object[]} options.labels - Labels to set on the log.
 * @param {object} options.resource - A default monitored resource for entries
 *     where one isn't specified.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var entry = log.entry('gce_instance', {
 *   instance: 'my_instance'
 * });
 *
 * log.write(entry, function(err, apiResponse) {
 *   if (!err) {
 *     // The log entry was written.
 *   }
 * });
 *
 * //-
 * // You may also pass multiple log entries to write.
 * //-
 * var secondEntry = log.entry('compute.googleapis.com', {
 *   user: 'my_username'
 * });
 *
 * log.write([
 *   entry,
 *   secondEntry
 * ], function(err, apiResponse) {
 *   if (!err) {
 *     // The log entries were written.
 *   }
 * });
 *
 * //-
 * // To save some steps, you can also pass in plain values as your entries.
 * // Note, however, that you must provide a configuration object to specify the
 * // resource.
 * //-
 * var entries = [
 *   {
 *     user: 'my_username'
 *   },
 *   {
 *     home: process.env.HOME
 *   }
 * ];
 *
 * var options = {
 *   resource: 'compute.googleapis.com'
 * };
 *
 * log.write(entries, options, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * log.write(entries).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Log.prototype.write = function(entry, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  if (!options.resource) {
    this.metadata_.getDefaultResource(function(err, resource) {
      // Ignore errors (the API will speak up if it has an issue).
      writeWithResource(resource);
    });
  } else {
    writeWithResource(options.resource);
  }

  function writeWithResource(resource) {
    var decoratedEntries;
    try {
      decoratedEntries = self.decorateEntries_(arrify(entry));
    } catch (err) {
      // Ignore errors (the API will speak up if it has an issue).
    }

    var reqOpts = extend({
      logName: self.formattedName_,
      entries: decoratedEntries,
      resource: resource
    }, options);

    delete reqOpts.gaxOptions;

    self.logging.request({
      client: 'loggingServiceV2Client',
      method: 'writeLogEntries',
      reqOpts: reqOpts,
      gaxOpts: options.gaxOptions
    }, callback);
  }
};

/**
 * All entries are passed through here in order to get them serialized.
 *
 * @private
 *
 * @param {object[]} entries - Entry objects.
 * @return {object[]} Serialized entries.
 * @throws if there is an error during serialization.
 */
Log.prototype.decorateEntries_ = function(entries) {
  var self = this;

  return entries.map(function(entry) {
    if (!(entry instanceof Entry)) {
      entry = self.entry(entry);
    }

    return entry.toJSON({
      removeCircular: self.removeCircular_
    });
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Log, {
  exclude: ['entry']
});

module.exports = Log;
