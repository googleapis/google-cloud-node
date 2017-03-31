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
 * @module logging
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var format = require('string-format-obj');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var util = require('util');

/**
 * @type {module:logging/entry}
 * @private
 */
var Entry = require('./entry.js');

/**
 * @type {module:logging/log}
 * @private
 */
var Log = require('./log.js');

/**
 * @type {module:logging/sink}
 * @private
 */
var Sink = require('./sink.js');

/**
 * [Stackdriver Logging](https://cloud.google.com/logging/docs) allows you to
 * store, search, analyze, monitor, and alert on log data and events from Google
 * Cloud Platform and Amazon Web Services (AWS).
 *
 * @constructor
 * @alias module:logging

 * @resource [What is Stackdriver Logging?]{@link https://cloud.google.com/logging/docs}
 * @resource [Introduction to the Stackdriver Logging API]{@link https://cloud.google.com/logging/docs/api}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Logging(options) {
  if (!(this instanceof Logging)) {
    options = common.util.normalizeArguments(this, options);
    return new Logging(options);
  }

  var config = {
    baseUrl: 'logging.googleapis.com',
    service: 'logging',
    apiVersion: 'v2',
    protoServices: {
      ConfigServiceV2:
        googleProtoFiles('logging', 'v2', 'logging_config.proto'),
      LoggingServiceV2: googleProtoFiles.logging.v2
    },
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
  };

  commonGrpc.Service.call(this, config, options);
}

util.inherits(Logging, commonGrpc.Service);

// jscs:disable maximumLineLength
/**
 * Create a sink.
 *
 * @resource [Sink Overview]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks}
 * @resource [Advanced Logs Filters]{@link https://cloud.google.com/logging/docs/view/advanced_filters}
 * @resource [projects.sinks.create API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/create}
 *
 * @throws {Error} if a name is not provided.
 * @throws {Error} if a config object is not provided.
 *
 * @param {string} name - Name of the sink.
 * @param {object} config - See a
 *     [Sink resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink).
 * @param {module:storage/bucket|module:bigquery/dataset|module:pubsub/topic} config.destination -
 *     The destination. The proper ACL scopes will be granted to the provided
 *     destination.
 * @param {string=} config.filter - An advanced logs filter. Only log entries
 *     matching the filter are written.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:logging/sink} callback.sink - The created Sink object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var config = {
 *   destination: gcs.bucket('logging-bucket'),
 *   filter: 'severity = ALERT'
 * };
 *
 * function callback(err, sink, apiResponse) {
 *   // `sink` is a Sink object.
 * }
 *
 * logging.createSink('new-sink-name', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * logging.createSink('new-sink-name', config).then(function(data) {
 *   var sink = data[0];
 *   var apiResponse = data[1];
 * });
 */
Logging.prototype.createSink = function(name, config, callback) {
  // jscs:enable maximumLineLength
  var self = this;

  if (!is.string(name)) {
    throw new Error('A sink name must be provided.');
  }

  if (!is.object(config)) {
    throw new Error('A sink configuration object must be provided.');
  }

  if (common.util.isCustomType(config.destination, 'bigquery/dataset')) {
    this.setAclForDataset_(name, config, callback);
    return;
  }

  if (common.util.isCustomType(config.destination, 'pubsub/topic')) {
    this.setAclForTopic_(name, config, callback);
    return;
  }

  if (common.util.isCustomType(config.destination, 'storage/bucket')) {
    this.setAclForBucket_(name, config, callback);
    return;
  }

  var protoOpts = {
    service: 'ConfigServiceV2',
    method: 'createSink'
  };

  var reqOpts = {
    parent: 'projects/' + this.projectId,
    sink: extend({}, config, { name: name })
  };

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var sink = self.sink(resp.name);
    sink.metadata = resp;

    callback(null, sink, resp);
  });
};

/**
 * Create an entry object.
 *
 * Note that using this method will not itself make any API requests. You will
 * use the object returned in other API calls, such as
 * {module:logging/log#write}.
 *
 * @resource [LogEntry JSON representation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry}
 *
 * @param {object=|string=} resource - See a
 *     [Monitored Resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource).
 * @param {object|string} data - The data to use as the value for this log
 *     entry.
 * @return {module:logging/entry}
 *
 * @example
 * var resource = {
 *   type: 'gce_instance',
 *   labels: {
 *     zone: 'global',
 *     instance_id: '3'
 *   }
 * };
 *
 * var entry = logging.entry(resource, {
 *   delegate: 'my_username'
 * });
 *
 * entry.toJSON();
 * // {
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
Logging.prototype.entry = function(resource, data) {
  return new Entry(resource, data);
};

/**
 * List the entries in your logs.
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
 * @param {module:logging/entry[]} callback.entries - Entries from your logs.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * logging.getEntries(function(err, entries) {
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
 *     logging.getEntries(nextQuery, callback);
 *   }
 * }
 *
 * logging.getEntries({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * logging.getEntries().then(function(data) {
 *   var entries = data[0];
 * });
 */
Logging.prototype.getEntries = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'LoggingServiceV2',
    method: 'listLogEntries'
  };

  var reqOpts = extend({
    orderBy: 'timestamp desc'
  }, options);
  reqOpts.projectIds = arrify(reqOpts.projectIds);
  reqOpts.projectIds.push(this.projectId);

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, reqOpts, {
        pageToken: resp.nextPageToken
      });
    }

    var entries = arrify(resp.entries).map(Entry.fromApiResponse_);

    callback(null, entries, nextQuery, resp);
  });
};

/**
 * List the {module:logging/entry} objects in your logs as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:logging#getEntries} for a complete list of options.
 * @return {stream}
 *
 * @example
 * logging.getEntriesStream()
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
 * logging.getEntriesStream()
 *   .on('data', function(entry) {
 *     this.end();
 *   });
 */
Logging.prototype.getEntriesStream = common.paginator.streamify('getEntries');

/**
 * Get the sinks associated with this project.
 *
 * @resource [projects.sinks.list API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/list}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:logging/sink[]} callback.sinks - Sink objects.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * logging.getSinks(function(err, sinks) {
 *   // sinks is an array of Sink objects.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * logging.getSinks().then(function(data) {
 *   var sinks = data[0];
 * });
 */
Logging.prototype.getSinks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'ConfigServiceV2',
    method: 'listSinks'
  };

  var reqOpts = extend({}, options, {
    parent: 'projects/' + this.projectId
  });

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var sinks = arrify(resp.sinks).map(function(sink) {
      var sinkInstance = self.sink(sink.name);
      sinkInstance.metadata = sink;
      return sinkInstance;
    });

    callback(null, sinks, nextQuery, resp);
  });
};

/**
 * Get the {module:logging/sink} objects associated with this project as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:logging#getSinks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * logging.getSinksStream()
 *   .on('error', console.error)
 *   .on('data', function(sink) {
 *     // `sink` is a Sink object.
 *   })
 *   .on('end', function() {
 *     // All sinks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * logging.getSinksStream()
 *   .on('data', function(sink) {
 *     this.end();
 *   });
 */
Logging.prototype.getSinksStream = common.paginator.streamify('getSinks');

/**
 * Get a reference to a Stackdriver Logging log.
 *
 * @resource [Log Overview]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs}
 *
 * @param {string} name - Name of the existing log.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.removeCircular - Replace circular references in
 *     logged objects with a string value, `[Circular]`. (Default: false)
 * @return {module:logging/log}
 *
 * @example
 * var log = logging.log('my-log');
 */
Logging.prototype.log = function(name, options) {
  return new Log(this, name, options);
};

/**
 * Get a reference to a Stackdriver Logging sink.
 *
 * @resource [Sink Overview]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks}
 *
 * @param {string} name - Name of the existing sink.
 * @return {module:logging/sink}
 *
 * @example
 * var sink = logging.sink('my-sink');
 */
Logging.prototype.sink = function(name) {
  return new Sink(this, name);
};

/**
 * This method is called when creating a sink with a Bucket destination. The
 * bucket must first grant proper ACL access to the Stackdriver Logging account.
 *
 * The parameters are the same as what {module:logging#createSink} accepts.
 *
 * @private
 */
Logging.prototype.setAclForBucket_ = function(name, config, callback) {
  var self = this;
  var bucket = config.destination;

  bucket.acl.owners.addGroup('cloud-logs@google.com', function(err, apiResp) {
    if (err) {
      callback(err, null, apiResp);
      return;
    }

    config.destination = 'storage.googleapis.com/' + bucket.name;

    self.createSink(name, config, callback);
  });
};

/**
 * This method is called when creating a sink with a Dataset destination. The
 * dataset must first grant proper ACL access to the Stackdriver Logging
 * account.
 *
 * The parameters are the same as what {module:logging#createSink} accepts.
 *
 * @private
 */
Logging.prototype.setAclForDataset_ = function(name, config, callback) {
  var self = this;
  var dataset = config.destination;

  dataset.getMetadata(function(err, metadata, apiResp) {
    if (err) {
      callback(err, null, apiResp);
      return;
    }

    var access = [].slice.call(arrify(metadata.access));

    access.push({
      role: 'WRITER',
      groupByEmail: 'cloud-logs@google.com'
    });

    dataset.setMetadata({
      access: access
    }, function(err, apiResp) {
      if (err) {
        callback(err, null, apiResp);
        return;
      }

      config.destination = format('{baseUrl}/projects/{pId}/datasets/{dId}', {
        baseUrl: 'bigquery.googleapis.com',
        pId: dataset.parent.projectId,
        dId: dataset.id
      });

      self.createSink(name, config, callback);
    });
  });
};

/**
 * This method is called when creating a sink with a Topic destination. The
 * topic must first grant proper ACL access to the Stackdriver Logging account.
 *
 * The parameters are the same as what {module:logging#createSink} accepts.
 *
 * @private
 */
Logging.prototype.setAclForTopic_ = function(name, config, callback) {
  var self = this;
  var topic = config.destination;

  topic.iam.getPolicy(function(err, policy, apiResp) {
    if (err) {
      callback(err, null, apiResp);
      return;
    }

    policy.bindings = arrify(policy.bindings);

    policy.bindings.push({
      role: 'roles/pubsub.publisher',
      members: [
        'serviceAccount:cloud-logs@system.gserviceaccount.com'
      ]
    });

    topic.iam.setPolicy(policy, function(err, policy, apiResp) {
      if (err) {
        callback(err, null, apiResp);
        return;
      }

      config.destination = format('{baseUrl}/{topicName}', {
        baseUrl: 'pubsub.googleapis.com',
        topicName: topic.name
      });

      self.createSink(name, config, callback);
    });
  });
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Logging, ['getEntries', 'getSinks']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Logging, {
  exclude: ['entry', 'log', 'sink']
});

Logging.Entry = Entry;
Logging.Log = Log;
Logging.Logging = Logging;
Logging.Sink = Sink;

module.exports = Logging;
module.exports.v2 = require('./v2');
