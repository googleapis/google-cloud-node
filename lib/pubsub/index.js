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

function Subscription(conn, name) {
  this.conn = conn;
  this.name = name;
}

Subscription.prototype.ack = function(ids, callback) {
  throw new Error('not yet implemented');
};

Subscription.prototype.pull = function(opts, callback) {
  // TODO(jbd): Make opts optional.
  var body = {
    subscription: this.name,
    returnImmediately: !!opts.returnImmediately
  }
  this.conn.makeReq('POST', 'subscriptions/pull', null, body, callback);
};

Subscription.prototype.unsubscribe = function(callback) {
  throw new Error('not yet implemented');
};

Subscription.prototype.modify = function(opts, callback) {
  throw new Error('not yet implemented');
};

function Topic(conn, name) {
  this.conn = conn;
  this.name = name;
}

Topic.prototype.publish = function(data, opt_callback) {
  cb = opt_callback || util.noop;
  var body = {
    topic: this.name,
    data: data
  };
  this.conn.makeReq('POST', 'topics/publish', null, body, cb);
};

Topic.prototype.publishRaw = function(message, opt_callback) {
  cb = opt_callback || util.noop;
  message.topic = this.name;
  this.conn.makeReq('POST', 'topics/publish', null, body, cb);
};

Topic.prototype.del = function(opt_callback) {
   cb = opt_callback || util.noop;
   var path = util.format('topics/{fullName}', {
    fullName: this.name
   });
   this.conn.makeReq('DELETE', path, null, true, cb);
};

// TODO(jbd): List subscriptions.

Topic.prototype.subscribe = function(opts, opt_callback) {
  var conn = this.conn;
  cb = opt_callback || util.noop;
  var body = {
    topic: this.name,
    name: '/subscriptions/' + conn.id + '/' + opts.name,
    ackDeadlineSeconds: opts.ackDeadlineSeconds
  };
  this.conn.makeReq('POST', 'subscriptions', null, body, function(err, item) {
    if (!err || (err && err.code == 409)) {
      cb(null, new Subscription(conn, body.name));
      return;
    }
    cb(err);
  });
};

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

// TODO(jbd): Add listTopics.

Connection.prototype.createTopic = function(name, opt_callback) {
  var that = this;
  cb = opt_callback || util.noop;
  var fullName = util.format('/topics/{projectId}/{name}', {
    projectId: this.id,
    name: name
  });
  var body = { name: fullName };
  this.makeReq('POST', 'topics', null, body, function(err) {
    // TOOD(jbd): 409 doesn't necessarily mean
    // topic already exists. Check the error cause.
    if (!err || (err && err.code == 409)) {
      cb(null, new Topic(that, fullName));
      return;
    }
    cb(err);
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
