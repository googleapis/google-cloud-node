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

var conn = require('../common/connection.js'),
    util = require('../common/util.js');

var PUBSUB_BASE_URL = 'https://www.googleapis.com/pubsub/v1beta1',
    SCOPES = [
      'https://www.googleapis.com/auth/pubsub',
      'https://www.googleapis.com/auth/cloud-platform'
    ];

// TODO(jbd): Emit message and error events if in polled-mode.
// sub.on('meessage', console.log)
// sub.on('error')

function Subscription(conn, name) {
  this.conn = conn;
  this.name = name;
}

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
 * @param  {Boolean}  returnImmediately If set, the system will respond immediately.
 *                                      Otherwise, wait until new messages are
 *                                      available. Returns if timeout is reached.
 * @param  {Boolean}  autoAck           Automatically acknowledges the
 *                                      backend after pulling. By default, true.
 * @param  {Function} callback          Callback function.
 */
Subscription.prototype.pull = function(opts, callback) {
  // TODO(jbd): Make opts optional.
  var body = {
    subscription: this.name,
    returnImmediately: !!opts.returnImmediately
  };
  // TODO(jbd): Auto acknowledge.
  this.conn.makeReq('POST', 'subscriptions/pull', null, body, callback);
};

/**
 * Unsubscribes the current subscription. Pull requests from the current
 * subscription will be errored once unsubscription is done.
 * @param  {Function} opt_callback Optional callback.
 */
Subscription.prototype.unsubscribe = function(opt_callback) {
  cb = opt_callback || util.noop;
  var path = util.format('subscriptions/{fullName}', {
    fullName: this.name
  });
  this.conn.makeReq('DELETE', path, null, true, cb);
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
 * @param  {Function} opt_callback Optional callback.
 */
Topic.prototype.publish = function(data, opt_callback) {
  this.publishMessage({ topic: this.name, data: data }, opt_callback);
};

/**
 * Publishes a raw message.
 * @param  {message}  message       Raw message to publish.
 * @param  {Function} opt_callback  Optional callback.
 */
Topic.prototype.publishMessage = function(message, opt_callback) {
  cb = opt_callback || util.noop;
  message.topic = this.name;
  this.conn.makeReq('POST', 'topics/publish', null, message, cb);
};

/**
 * Deletes a topic.
 * @param  {Function} opt_callback Optional callback.
 */
Topic.prototype.del = function(opt_callback) {
  var path = 'topics/' + this.name;
  this.conn.makeReq('DELETE', path, null, true, cb);
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
    email: opts.email,
    privateKey: opts.pemFilePath,
    scopes: SCOPES
  });
}

// TODO(jbd): List subscriptions.

/**
 * Subscribe with the provided options.
 * @param  {string}   opts.name      Name of the subscription.
 * @param  {string}   opts.topicName Name of the topic to subscribe.
 * @param  {Function} opt_callback   Optional callback.
 */
Connection.prototype.subscribe = function(opts, opt_callback) {
  var that = this;
  var cb = opt_callback || util.noop;
  var body = {
    topic:'/topics/' + this.id + '/' + opts.topicName,
    name: '/subscriptions/' + this.id + '/' + opts.name,
    ackDeadlineSeconds: opts.ackDeadlineSeconds
  };
  this.makeReq('POST', 'subscriptions', null, body, function(err, item) {
    // TODO(jbd): maybe init a subscription instance if http 200 or 409.
    cb(err, new Subscription(that, body.name));
  });
};

// TODO(jbd): Add listTopics.

/**
 * Gets a topic.
 * @param  {string}   name         Name of the topic to get.
 * @param  {Function} opt_callback Optional callback.
 */
Connection.prototype.getTopic = function(name, opt_callback) {
  var that = this;
  var cb = opt_callback || util.noop,
      fullName = this.fullTopicName_(name);
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
 * @param  {Function} opt_callback Optional callback.
 */
Connection.prototype.createTopic = function(name, opt_callback) {
  var that = this;
  var cb = opt_callback || util.noop,
      fullName = this.fullTopicName_(name);
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

// TOOD(jbd): Don't duplicate, unify this with bucket.makeReq.
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
    if (body && body.error) {
      return callback(body.error);
    }
    if (res && (res.statusCode < 200 || res.statusCode > 299)) {
      return callback(new Error('error during request, statusCode: ' + res.statusCode));
    }
    callback(err, body);
  });
};

/**
 * Exports Connection.
 */
module.exports.Connection = Connection;
