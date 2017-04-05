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
var extend = require('extend');
var format = require('string-format-obj');
var googleAuth = require('google-auto-auth');
var is = require('is');
var pumpify = require('pumpify');
var streamEvents = require('stream-events');
var through = require('through2');

var v2 = require('./v2');

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

  var options_ = extend({
    scopes: v2.ALL_SCOPES
  }, options);

  this.api = {};
  this.auth = googleAuth(options);
  this.options = options_;
  this.projectId = options.projectId || '{{projectId}}';
}

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
 * @param {object} config.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
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

  var gaxOptions = extend({
    timeout: 1000 // "Deadline Exceeded" errors without.
  }, config.gaxOptions);

  delete config.gaxOptions;

  var reqOpts = {
    parent: 'projects/' + this.projectId,
    sink: extend({}, config, { name: name })
  };

  this.request({
    client: 'configServiceV2Client',
    method: 'createSink',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, function(err, resp) {
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
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
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

  var reqOpts = extend({
    orderBy: 'timestamp desc'
  }, options);

  reqOpts.resourceNames = arrify(reqOpts.resourceNames);
  reqOpts.resourceNames.push('projects/' + this.projectId);

  delete reqOpts.autoPaginate;

  var gaxOptions = extend({
    autoPaginate: options.autoPaginate
  }, options.gaxOptions);

  this.request({
    client: 'loggingServiceV2Client',
    method: 'listLogEntries',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, function() {
    var entries = arguments[1];

    if (entries) {
      arguments[1] = entries.map(Entry.fromApiResponse_);
    }

    callback.apply(null, arguments);
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
Logging.prototype.getEntriesStream = function(options) {
  var self = this;

  var requestStream;

  var userStream = streamEvents(pumpify.obj());

  userStream.abort = function() {
    if (requestStream) {
      requestStream.abort();
    }
  };

  var toEntryStream = through.obj(function(entry, _, next) {
    next(null, Entry.fromApiResponse_(entry));
  });

  userStream.on('reading', function() {
    var reqOpts = extend({
      orderBy: 'timestamp desc'
    }, options);
    reqOpts.resourceNames = arrify(reqOpts.resourceNames);
    reqOpts.resourceNames.push('projects/' + self.projectId);

    delete reqOpts.autoPaginate;

    var gaxOptions = extend({
      autoPaginate: options.autoPaginate
    }, options.gaxOptions);

    requestStream = self.request({
      client: 'loggingServiceV2Client',
      method: 'listLogEntriesStream',
      reqOpts: reqOpts,
      gaxOpts: gaxOptions
    });

    userStream.setPipeline(requestStream, toEntryStream);
  });

  return userStream;
};

/**
 * Get the sinks associated with this project.
 *
 * @resource [projects.sinks.list API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/list}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {object} options.gaxOptions - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
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

  var reqOpts = extend({}, options, {
    parent: 'projects/' + this.projectId
  });

  delete reqOpts.autoPaginate;

  var gaxOptions = extend({
    autoPaginate: options.autoPaginate
  }, options.gaxOptions);

  this.request({
    client: 'configServiceV2Client',
    method: 'listSinks',
    reqOpts: reqOpts,
    gaxOpts: gaxOptions
  }, function() {
    var sinks = arguments[1];

    if (sinks) {
      arguments[1] = sinks.map(function(sink) {
        var sinkInstance = self.sink(sink.name);
        sinkInstance.metadata = sink;
        return sinkInstance;
      });
    }

    callback.apply(null, arguments);
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
Logging.prototype.getSinksStream = function(options) {
  var self = this;

  var requestStream;

  var userStream = streamEvents(pumpify.obj());

  userStream.abort = function() {
    if (requestStream) {
      requestStream.abort();
    }
  };

  var toSinkStream = through.obj(function(sink, _, next) {
    var sinkInstance = self.sink(sink.name);
    sink.metadata = sink;
    next(null, sinkInstance);
  });

  userStream.once('reading', function() {
    var reqOpts = extend({}, options, {
      parent: 'projects/' + self.projectId
    });

    var gaxOptions = extend({
      autoPaginate: options.autoPaginate
    }, options.gaxOptions);

    requestStream = self.request({
      client: 'configServiceV2Client',
      method: 'listSinksStream',
      reqOpts: reqOpts,
      gaxOpts: gaxOptions
    });

    userStream.setPipeline(requestStream, toSinkStream);
  });

  return userStream;
};

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
 * Funnel all API requests through this method, to be sure we have a project ID.
 *
 * @param {object} config - Configuration object.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @param {function=} callback - The callback function.
 */
Logging.prototype.request = function(config, callback) {
  var self = this;
  var gaxStream;
  var stream;

  if (!callback) {
    stream = streamEvents(through.obj());

    stream.abort = function() {
      if (gaxStream && gaxStream.cancel) {
        gaxStream.cancel();
      }
    };

    stream.on('reading', makeRequest);
  } else {
    makeRequest();
  }

  function makeRequest() {
    self.auth.getProjectId(function(err, projectId) {
      if (err) {
        if (callback) {
          callback(err);
        } else {
          stream.destroy(err);
        }
        return;
      }

      var reqOpts = extend(true, {}, config.reqOpts);
      reqOpts = common.util.replaceProjectIdToken(reqOpts, projectId);

      if (!self.api[config.client]) {
        // Lazily instantiate client.
        self.api[config.client] = v2(self.options)[config.client](self.options);
      }

      var client = self.api[config.client];

      var gaxRequest = client[config.method](reqOpts, config.gaxOpts, callback);

      if (!callback) {
        gaxStream = gaxRequest;

        gaxStream
          .on('error', function(err) {
            stream.destroy(err);
          })
          .pipe(stream);
      }
    });
  }

  return stream;
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
  exclude: [
    'entry',
    'log',
    'request',
    'sink'
  ]
});

Logging.Entry = Entry;
Logging.Log = Log;
Logging.Logging = Logging;
Logging.Sink = Sink;

module.exports = Logging;
module.exports.v2 = v2;
