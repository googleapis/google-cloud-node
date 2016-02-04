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
var extend = require('extend');
var is = require('is');
var JSONStream = require('JSONStream');
var nodeutil = require('util');
var propAssign = require('prop-assign');
var pumpify = require('pumpify');
var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type {module:logging/entry}
 * @private
 */
var Entry = require('./entry.js');

/**
 * @type {module:common/serviceObject}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * A log is a named collection of entries, each entry representing a timestamped
 * event. Logs can be produced by Google Cloud Platform services, by third-party
 * services, or by your applications. For example, the log `apache-access` is
 * produced by the Apache Web Server, but the log
 * `compute.googleapis.com/activity_log` is produced by Google Compute Engine.
 *
 * @resource [Introduction to Logs]{@link https://cloud.google.com/logging/docs/api/#logs}
 *
 * @alias module:logging/log
 * @constructor
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var logging = gcloud.logging();
 * var log = logging.log('syslog');
 */
function Log(logging, name) {
  var methods = {
    /**
     * Delete the log.
     *
     * @resource [projects.logs.delete API Documentation]{@link https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/projects.logs/delete}
     *
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
     */
    delete: true
  };

  this.formattedName_ = Log.formatName_(logging.projectId, name);
  this.name = this.formattedName_.split('/').pop();

  ServiceObject.call(this, {
    parent: logging,
    baseUrl: '/logs',
    id: this.name,
    methods: methods
  });
}

nodeutil.inherits(Log, ServiceObject);

/**
 * Return an array of log entries with the desired severity assigned.
 *
 * @private
 *
 * @param {object|object[]} entries - Log entries.
 * @param {string} severity - The desired severity level.
 */
Log.assignSeverityToEntries_ = function(entries, severity) {
  var entriesClone = [].slice.call(entries);
  return arrify(entriesClone).map(propAssign('severity', severity));
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
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.alert(entry, function(err, apiResponse) {});
 */
Log.prototype.alert = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'ALERT'), options, callback);
};

/**
 * Write log entries from a streaming object input.
 *
 * @return {WritableStream}
 *
 * @example
 * var logStream = log.createWriteStream();
 *
 * logStream.on('finish', function(err) {
 *   // All entries have been written.
 * });
 *
 * logStream.end({
 *   // Log entry.
 * });
 */
Log.prototype.createWriteStream = function() {
  var self = this;
  var writeStream = streamEvents(pumpify.obj());

  writeStream.once('writing', function() {
    var requestStream = self.parent.request({
      method: 'POST',
      uri: '/entries:write'
    });

    requestStream.on('response', function(response) {
      writeStream.emit('response', response);
    });

    function formatEntryForApi_(entry, enc, next) {
      next(null, self.formatEntryForApi_(entry));
    }

    writeStream.setPipeline([
      through.obj(formatEntryForApi_),
      JSONStream.stringify('{"entries":[', ',', ']}'),
      requestStream
    ]);
  });

  return writeStream;
};

/**
 * Write a log entry with a severity of "CRITICAL".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.critical(entry, function(err, apiResponse) {});
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
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.debug(entry, function(err, apiResponse) {});
 */
Log.prototype.debug = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'DEBUG'), options, callback);
};

/**
 * Write a log entry with a severity of "EMERGENCY".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.emergency(entry, function(err, apiResponse) {});
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
 * @resource [LogEntry JSON representation]{@link https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/LogEntry}
 *
 * @param {object=|string=} resource - See a
 *     [Monitored Resource](https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource).
 * @param {object|string} data - The data to use as the value for this log
 *     entry.
 * @return {module:logging/entry}
 *
 * @example
 * var resource = {
 *   type: 'gce_instance',
 *   labels: {
 *     zone: 'global',
 *     instance_id: 3
 *   }
 * };
 *
 * var entry = log.entry(resource, {
 *   delegate: process.env.USER
 * });
 *
 * entry.toJSON();
 * // {
 * //   logName: 'projects/grape-spaceship-123/logs/syslog',
 * //   resource: {
 * //     type: 'gce_instance',
 * //     labels: {
 * //       zone: 'global',
 * //       instance_id: 3
 * //     }
 * //   },
 * //   jsonPayload: {
 * //     delegate: process.env.USER
 * //   }
 * // }
 */
Log.prototype.entry = function(resource, data) {
  var entryInstance = this.parent.entry(resource, data);
  entryInstance.logName = this.formattedName_;
  return entryInstance;
};

/**
 * Write a log entry with a severity of "ERROR".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.error(entry, function(err, apiResponse) {});
 */
Log.prototype.error = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'ERROR'), options, callback);
};

/**
 * This method is a wrapper around {module:logging#getEntries}, but with a
 * filter specified to only return entries from this log.
 *
 * @resource [entries.list API Documentation]{@link https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/entries/list}
 *
 * @param {object=} options - Filtering options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - An
 *     [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced_filters).
 *     An empty filter matches all log entries.
 * @param {string} options.orderBy - How the results should be sorted,
 *     `timestamp` (oldest first) and `timestamp desc` (newest first,
 *     **default**).
 * @param {number} options.pageSize - Maximum number of logs to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:logging/entry[]} callback.entries - Entries from this log.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * log.getEntries(function(err, entries) {
 *   // `entries` is an array of Cloud Logging entry objects.
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
 * // Get the entries from your project as a readable object stream.
 * //-
 * log.getEntries()
 *   .on('error', console.error)
 *   .on('data', function(entry) {
 *     // `entry` is a Cloud Logging entry object.
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
 * log.getEntries()
 *   .on('data', function(entry) {
 *     this.end();
 *   });
 */
Log.prototype.getEntries = function(options, callback) {
  if (is.function(options)) {
    callback = options;
    options = {};
  }

  options = extend({
    filter: 'logName="' + this.formattedName_ + '"'
  }, options);

  return this.parent.getEntries(options, callback);
};

/**
 * Write a log entry with a severity of "INFO".
 *
 * This is a simple wrapper around {module:logging/log#write}. All arguments are
 * the same as documented there.
 *
 * @example
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.info(entry, function(err, apiResponse) {});
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
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.notice(entry, function(err, apiResponse) {});
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
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
 * });
 *
 * log.warning(entry, function(err, apiResponse) {});
 */
Log.prototype.warning = function(entry, options, callback) {
  this.write(Log.assignSeverityToEntries_(entry, 'WARNING'), options, callback);
};

/**
 * Write log entries to Cloud Logging.
 *
 * While you may write a single entry at a time, batching multiple entries
 * together is preferred to avoid reaching the queries per second limit.
 *
 * @resource [entries.write API Documentation]{@link https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/entries/write}
 *
 * @param {module:logging/entry|module:logging/entry[]} entry - A log entry, or
 *     array of entries, to write.
 * @param {object=} options - Configuration object.
 * @param {object[]} options.labels - Labels to set on the log.
 * @param {object} options.resource - A default monitored resource for entries
 *     where one isn't specified.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var entry = log.entry('compute.googleapis.com', {
 *   user: process.env.USER
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
 *   user: process.env.USER
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
 *     user: process.env.USER
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
 */
Log.prototype.write = function(entry, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.parent.request({
    method: 'POST',
    uri: '/entries:write',
    json: extend({
      entries: arrify(entry).map(this.formatEntryForApi_.bind(this))
    }, options)
  }, function(err, resp) {
    callback(err, resp);
  });
};

/**
 * All entries are passed through here to make sure this log is attached to the
 * entry.
 *
 * @private
 *
 * @param {object} entry - An entry object.
 */
Log.prototype.formatEntryForApi_ = function(entry) {
  if (!(entry instanceof Entry)) {
    entry = this.entry(entry);
  }

  var formattedEntry = entry.toJSON();
  formattedEntry.logName = this.formattedName_;
  return formattedEntry;
};

module.exports = Log;
