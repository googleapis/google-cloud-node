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

function Subscription(conn, opts) {
  throw new Error('not yet implemented');
}

Subscription.prototype.ack = function(ids, callback) {
  throw new Error('not yet implemented');
};

Subscription.prototype.pull = function(callback) {
  throw new Error('not yet implemented');
};

Subscription.prototype.unsubscribe = function(callback) {
  throw new Error('not yet implemented');
};

Subscription.prototype.modify = function(opts, callback) {
  throw new Error('not yet implemented');
};

function Topic(conn, name) {
  opts = opts || {};
  this.conn = conn;
  this.name = name;
}

Topic.prototype.publish = function(message, labels, callback) {
  // TODO(jbd): labels should be optional.
  throw new Error('not yet implemented');
};

Topic.prototype.del = function(callback) {
  throw new Error('not yet implemented');
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

Connection.prototype.createTopic = function(name, opt_callback) {
  throw new Error('not yet implemented');
};

Connection.prototype.subscribe = function(opts, opt_callback) {
  throw new Error('not yet implemented');
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
