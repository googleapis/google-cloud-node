/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/**
 * @module pubsub
 */

'use strict';

var events = require('events');
var nodeutil = require('util');

/** @type {module:common/connection} */
var conn = require('../common/connection.js');

/** @type {module:common/util} */
var util = require('../common/util.js');

/** @private @const {string} Base URL for Pub/Sub API. */
var PUBSUB_BASE_URL = 'https://www.googleapis.com/pubsub/v1beta1';

/** @const {array} Required scopes for Pub/Sub API. */
var SCOPES = [
  'https://www.googleapis.com/auth/pubsub',
  'https://www.googleapis.com/auth/cloud-platform'
];

function Subscription(conn, name) {
  this.conn = conn;
  this.name = name;

  this.autoAck = false;
  this.pullIntervalInMs = 10;
  this.closed = false;
}

nodeutil.inherits(Subscription, events.EventEmitter);

/**
 * Acknowledges the backend that message is retrieved.
 * @param  {Array<String>}  ids      A list of message IDs.
 * @param  {Function}       callback Callback function.
 */
Subscription.prototype.ack = function(ids, callback) {
  ids = util.arrayize(ids);
  var body = {
    subscription: this.name,
    ackId: ids
  };
  this.conn.makeReq('POST', 'subscriptions/acknowledge', null, body, callback);
};

/**
 * Pulls from the subscribed topic.
 * @param  {Boolean}   opts.returnImmediately  If set, the system will respond
 *                                             immediately. Otherwise, wait
 *                                             until new messages are available.
 *                                             Returns if timeout is reached.
 * @param  {Function}  callback                Callback.
 */
Subscription.prototype.pull = function(opts, callback) {
  var that = this;
  // TODO(jbd): Should not be racing with other pull.
  // TOOD(jbd): Make opts optional.
  var body = {
    subscription: this.name,
    returnImmediately: !!opts.returnImmediately
  };
  this.conn.makeReq(
      'POST', 'subscriptions/pull', null, body, function(err, message) {
    // TODO(jbd): Fix API to return a list of messages.
    if (err) {
      callback(err);
      return;
    }
    if (!that.autoAck) {
      that.emitMessage_(message);
      callback();
      return;
    }
    that.ack(message.ackId, function(err) {
      if (err) {
        callback(err);
        return;
      }
      that.emitMessage_(message);
      callback();
    });
  });
};

/**
 * Polls the backend for new messages.
 */
Subscription.prototype.startPulling_ = function() {
  var that = this;
  var pullFn = function() {
    if (that.closed) {
      return;
    }
    that.pull({ returnImmediately: false }, function(err) {
      // TODO(jbd): Fix API to return a more explicit error code or message.
      if (err && err.message.indexOf('has no more messages') < 0) {
        that.emitError_(err);
      }
      setTimeout(function() {
        pullFn();
      }, that.pullIntervalInMs);
    });
  };
  pullFn();
};

/**
 * Deletes the current subscription. Pull requests from the current
 * subscription will be errored once unsubscription is done.
 * @param  {Function} callback Optional callback.
 */
Subscription.prototype.del = function(callback) {
  callback = callback || util.noop;
  var that = this;
  var path = util.format('subscriptions/{fullName}', {
    fullName: this.name
  });
  this.conn.makeReq('DELETE', path, null, true, function(err) {
    if (err) {
      return callback(err);
    }
    that.closed = true;
    callback(err);
  });
};

/**
 * Closes the subscription.
 */
Subscription.prototype.close = function() {
  this.closed = true;
};

/**
 * Emits a 'message' event with the provided message.
 */
Subscription.prototype.emitMessage_ = function(msg) {
  if (msg.pubsubEvent && msg.pubsubEvent.message) {
    var data = msg.pubsubEvent.message.data;
    msg.pubsubEvent.message.data = new Buffer(data, 'base64').toString('utf-8');
  }
  this.emit('message', msg);
};

/**
 * Emits an error with the provided error.
 */
Subscription.prototype.emitError_ = function(err) {
  this.emit('error', err);
};

/**
 * Represents a Google Cloud Pub/Sub API topic.
 * @param {Connection} conn  Authorized connection.
 * @param {string}     name  Full name of the topic.
 */
function Topic(conn, name) {
  this.conn = conn;
  this.name = name;
}

/**
 * Publishes the provided string message.
 * @param  {string}   data         String message to publish.
 * @param  {Function} callback     Optional callback.
 */
Topic.prototype.publish = function(data, callback) {
  callback = callback || util.noop;
  this.publishMessage({
    topic: this.name,
    message: {
      data: new Buffer(data).toString('base64')
    }
  }, callback);
};

/**
 * Publishes a raw message.
 * @param  {message}  message       Raw message to publish.
 * @param  {Function} callback      Optional callback.
 */
Topic.prototype.publishMessage = function(message, callback) {
  callback = callback || util.noop;
  message.topic = this.name;
  this.conn.makeReq('POST', 'topics/publish', null, message, callback);
};

/**
 * Deletes a topic.
 * @param  {Function} callback Optional callback.
 */
Topic.prototype.del = function(callback) {
  callback = callback || util.noop;
  var path = 'topics/' + this.name;
  this.conn.makeReq('DELETE', path, null, true, callback);
};

/**
 * Represents connection to Google Cloud Pub/Sub API.
 * @param {string} opts.projectId   Google Developers Console Project ID.
 * @param {string} opts.email       Service account email.
 * @param {string} opts.pemFilePath Path to the pem file that contains your
 *                                  private key.
 */
function Connection(opts) {
  opts = opts || {};
  var id = opts.projectId;

  this.id = id;
  this.conn = new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  });
}

/**
 * Lists subscriptions.
 * @param  {string}   query.filterByTopic Returns subscriptions that are
 *                                        subscribed to the topic provided.
 * @param  {string}   query.pageToken     Page token.
 * @param  {Number}   query.maxResults    Max number of results to return.
 * @param  {Function} callback            Callback function.
 */
Connection.prototype.listSubscriptions = function(query, callback) {
  var that = this;
  if (arguments.length < 2) {
    callback = query;
    query = {};
  }
  var q = util.extend({}, query);
  if (q.filterByTopic) {
    q.query =
        'pubsub.googleapis.com/topic in (' +
        this.fullTopicName_(q.filterByTopic) + ')';
  } else {
    q.query =
        'cloud.googleapis.com/project in (' + this.fullProjectName_() + ')';
  }
  delete q.filterByTopic;

  this.makeReq('GET', 'subscriptions', q, true, function(err, result) {
    if (err) {
      return callback(err);
    }
    var items = result.subscription || [];
    var subscriptions = items.map(function(item) {
      return new Subscription(that, item.name);
    });
    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = q;
      nextQuery.pageToken = result.nextPageToken;
    }
    callback(null, subscriptions, nextQuery);
  });
};

/**
 * Gets a subscription.
 * @param  {string}   name     Name of the subscription.
 * @param  {Function} callback Callback.
 */
Connection.prototype.getSubscription = function(name, callback) {
  var that = this;
  var fullName = '/subscriptions/' + this.id + '/' + name;
  this.makeReq('GET', 'subscriptions/' + fullName, null, true, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, new Subscription(that, fullName));
  });
};

Connection.prototype.createSubscription = function(opts, callback) {
  var that = this;
  var subscription = {
    topic:'/topics/' + this.id + '/' + opts.topic,
    name: '/subscriptions/' + this.id + '/' + opts.name,
    ackDeadlineSeconds: opts.ackDeadlineSeconds
  };
  this.makeReq('POST', 'subscriptions', null, subscription, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, new Subscription(that, subscription.name));
  });
};

/**
 * Subscribe with the provided options.
 * @param  {string}   name           Name of the subscription.
 * @param  {Boolean}  opts.autoAck   Automatically acknowledges the
 *                                   message once it's pulled.
 * @return {Subscription}
 */
Connection.prototype.subscribe = function(name, opts) {
  opts = opts || {};

  var fullName = '/subscriptions/' + this.id + '/' + name;
  var sub = new Subscription(this, fullName);
  sub.autoAck = !!opts.autoAck;
  this.getSubscription(name, function(err) {
    if (err) {
      sub.emitError_(err);
      return;
    }
    sub.emit('ready');
    sub.startPulling_();
  });
  return sub;
};

/**
 * Lists topics.
 * @param  {string}   query.pageToken     Page token.
 * @param  {Number}   query.maxResults    Max number of results to return.
 * @param  {Function} callback            Callback function.
 */
Connection.prototype.listTopics = function(query, callback) {
  var that = this;
  if (arguments.length < 2) {
    callback = query;
    query = {};
  }
  var q = util.extend({}, query);
  q.query = 'cloud.googleapis.com/project in (' + this.fullProjectName_() + ')';
  this.makeReq('GET', 'topics', q, true, function(err, result) {
    if (err) { return callback(err); }
    var items = result.topic || [];
    var topics = items.map(function(item) {
      return new Topic(that, item.name);
    });
    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = q;
      nextQuery.pageToken = result.nextPageToken;
    }
    callback(null, topics, nextQuery);
  });
};

/**
 * Gets a topic.
 * @param  {string}   name         Name of the topic to get.
 * @param  {Function} callback     Optional callback.
 */
Connection.prototype.getTopic = function(name, callback) {
  var that = this;
  var cb = callback || util.noop;
  var fullName = this.fullTopicName_(name);
  this.makeReq('GET', 'topics/' + fullName, null, true, function(err) {
    if (err) {
      return cb(err);
    }
    cb(null, new Topic(that, fullName));
  });
};

/**
 * Creates a topic with the given name.
 * @param  {string}   name         Name of the topic.
 * @param  {Function} callback     Optional callback.
 */
Connection.prototype.createTopic = function(name, callback) {
  var that = this;
  var cb = callback || util.noop;
  var fullName = this.fullTopicName_(name);
  this.makeReq('POST', 'topics', null, { name: fullName }, function(err) {
    cb(err, new Topic(that, fullName));
  });
};

/**
 * Returns the full name of a topic.
 * Full name is in /topics/<projectId>/<shortName> form.
 */
Connection.prototype.fullTopicName_ = function(name) {
  return util.format('/topics/{projectId}/{name}', {
    projectId: this.id, name: name
  });
};

/**
 * Returns the fully qualified project name.
 * Full name is in /projects/<projectId> form.
 */
Connection.prototype.fullProjectName_ = function() {
  return util.format('/projects/{projectId}', {
    projectId: this.id
  });
};

Connection.prototype.makeReq = function(method, path, q, body, callback) {
  var reqOpts = {
    method: method,
    qs: q,
    uri: util.format('{base}/{path}', {
      base: PUBSUB_BASE_URL,
      path: path
    })
  };
  if (body) {
    reqOpts.json = body;
  }
  this.conn.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

/**
 * Exports Connection.
 */
module.exports.Connection = Connection;

/**
 * Exports Topic.
 */
module.exports.Topic = Topic;

/**
 * Exports Subscription.
 */
module.exports.Subscription = Subscription;
