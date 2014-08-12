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

'use strict';

var conn = require('../common/connection.js');
var util = require('../common/util.js');

var Subscription = require('./subscription.js');
var Topic = require('./topic.js');

/**
 * Base URL for Pub/Sub API.
 * @type {String}
 */
var PUBSUB_BASE_URL = 'https://www.googleapis.com/pubsub/v1beta1';

/**
 * Required scopes for Pub/Sub API.
 * @type {Array}
 */
var SCOPES = [
  'https://www.googleapis.com/auth/pubsub',
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * Represents connection to Google Cloud Pub/Sub API.
 * @param {string} opts.projectId   Google Developers Console Project ID.
 * @param {string} opts.email       Service account email.
 * @param {string} opts.pemFilePath Path to the pem file that contains your
 *                                  private key.
 */
function PubSub(opts) {
  opts = opts || {};

  this.id = opts.projectId;
  this.name = '/projects/' + this.id;

  this.conn = new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  });
}

/**
 * Create/retrieve a Topic object.
 * @param {object} options
 * @param {function=} callback - optional callback
 */
PubSub.prototype.topic = function(options, callback) {
  if (typeof options === 'string') {
    options = {
      name: options
    };
  }
  options = options || {};
  options.callback = callback;
  options.name = options.name.replace(/.*\//, '');
  options.pubsub = this;
  return new Topic(options);
};

/**
 * Create a topic.
 * @param {object} options
 * @param {function=} optional callback
 */
PubSub.prototype.createTopic = function(options, callback) {
  if (typeof options === 'string') {
    options = {
      name: options
    };
  }
  options = options || {};
  options.autoCreate = true;
  return this.topic(options, callback);
};

/**
 * Returns all topics registered to this project.
 * @param  {string}   query.pageToken     Page token.
 * @param  {Number}   query.maxResults    Max number of results to return.
 * @param  {Function} callback            Callback function.
 */
PubSub.prototype.getTopics = function(query, callback) {
  var that = this;
  if (arguments.length < 2) {
    callback = query;
    query = {};
  }
  query = query || {};
  query.query = 'cloud.googleapis.com/project in (' + this.name + ')';
  this.makeReq('GET', 'topics', query, true, function(err, result) {
    if (err) {
      return callback(err);
    }
    var topics = (result.topic || []).map(function(item) {
      return that.topic({
        autoCreate: false,
        name: item.name
      });
    });
    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = query;
      nextQuery.pageToken = result.nextPageToken;
    }
    callback(null, topics, nextQuery);
  });
};

/**
 * Gets subscriptions.
 * @param  {string}   query.pageToken     Page token.
 * @param  {Number}   query.maxResults    Max number of results to return.
 * @param  {Function} callback            Callback function.
 */
PubSub.prototype.getSubscriptions = function(query, callback) {
  var that = this;
  if (arguments.length < 2) {
    callback = query;
    query = {};
  }
  query = query || {};
  if (!query.query) {
    query.query = 'cloud.googleapis.com/project in (' + this.name + ')';
  }
  this.makeReq('GET', 'subscriptions', query, true, function(err, result) {
    if (err) {
      return callback(err);
    }
    var subscriptions = (result.subscription || []).map(function(item) {
      return new Subscription({
        autoCreate: false,
        autoPull: false,
        name: item.name,
        pubsub: that
      });
    });
    var nextQuery = null;
    if (result.nextPageToken) {
      nextQuery = query;
      nextQuery.pageToken = result.nextPageToken;
    }
    callback(null, subscriptions, nextQuery);
  });
};

PubSub.prototype.makeReq = function(method, path, q, body, callback) {
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
 * Exports PubSub.
 */
module.exports = PubSub;
