/*!
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

/*!
 * @module pubsub
 */

'use strict';

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:pubsub/subscription
 * @private
 */
var Subscription = require('./subscription.js');

/**
 * @type module:pubsub/topic
 * @private
 */
var Topic = require('./topic.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string} Base URL for Pub/Sub API.
 * @private
 */
var PUBSUB_BASE_URL = 'https://www.googleapis.com/pubsub/v1beta1';

/**
 * @const {array} Required scopes for Pub/Sub API.
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/pubsub',
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * [Google Cloud Pub/Sub]{@link https://developers.google.com/pubsub/overview}
 * is a reliable, many-to-many, asynchronous messaging service from Google
 * Cloud Platform.
 *
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use
 * it by filling the
 * [Limited Preview application form]{@link http://goo.gl/sO0wTu}.
 *
 * @constructor
 * @alias module:pubsub
 *
 * @param {object=} options - Configuration object.
 * @param {string=} options.projectId - Google Developers Console Project ID.
 * @param {string=} options.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} options.credentials - Credentials object, used in place of
 *     a `keyFilename`.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * // From Google Compute Engine and Google App Engine:
 *
 * // Access `pubsub` through the `gcloud` module directly.
 * var pubsub = gcloud.pubsub();
 *
 * // Elsewhere:
 *
 * // Provide configuration details up-front.
 * var myProject = gcloud({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var pubsub = myProject.pubsub();
 *
 *
 * // Override default configuration details.
 * var anotherPubsubConnection = myProject.pubsub({
 *   keyFilename: '/path/to/another/keyfile.json',
 * });
 *
 *
 * // Specify all options at instantiation.
 * var pubsub = gcloud.pubsub({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 */
function PubSub(options) {
  options = options || {};

  this.connection = new conn.Connection({
    credentials: options.credentials,
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });
  this.projectId = options.projectId;
  this.projectName = '/projects/' + this.projectId;
}

/**
 * Get a list of the topics registered to your project. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.maxResults - Maximum number of results to return.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Get all topics.
 * pubsub.getTopics(function(err, topics, nextQuery) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `pubsub.getTopics(nextQuery, callback);`.
 * });
 *
 * // Customize the query.
 * pubsub.getTopics({
 *   maxResults: 3
 * }, function(err, topics, nextQuery) {});
 */
PubSub.prototype.getTopics = function(query, callback) {
  var that = this;
  if (!callback) {
    callback = query;
    query = {};
  }
  query.query = 'cloud.googleapis.com/project in (' + this.projectName + ')';
  this.makeReq_('GET', 'topics', query, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    var topics = (result.topic || []).map(function(item) {
      return new Topic(that, {
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
 * Create a topic with the given name.
 *
 * @param {string} name - Name of the topic.
 * @param {function=} callback - The callback function.
 *
 * @example
 * pubsub.createTopic('my-new-topic', function(err, topic) {
 *   topic.publish('New message!', function(err) {});
 * });
 */
PubSub.prototype.createTopic = function(name, callback) {
  callback = callback || util.noop;
  var topic = this.topic(name);
  var req = {
    name: topic.name
  };
  this.makeReq_('POST', 'topics', null, req, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, topic);
  }.bind(this));
};

/**
 * Create a Topic object to reference an existing topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @return {module:pubsub/topic}
 *
 * @example
 * var topic = pubsub.topic('my-existing-topic');
 * topic.publish('New message!');
 */
PubSub.prototype.topic = function(name) {
  if (!name) {
    throw new Error('A name must be specified for a new topic.');
  }
  return new Topic(this, {
    name: name
  });
};

/**
 * Get a list of the subscriptions registered to all of your project's topics.
 * You may optionally provide a query object as the first argument to customize
 * the response.
 *
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.maxResults - Maximum number of results to return.
 * @param {function} callback - The callback function.
 *
 * @example
 * // Get all subscriptions.
 * pubsub.getSubscriptions(function(err, subscriptions, nextQuery) {
 *   // If `nextQuery` is non-null, there may be more results to fetch. To do
 *   // so, run `pubsub.getSubscriptions(nextQuery, callback);`.
 * });
 *
 * // Customize the query.
 * pubsub.getSubscriptions({
 *   maxResults: 10
 * }, function(err, subscriptions, nextQuery) {});
 */
PubSub.prototype.getSubscriptions = function(query, callback) {
  var that = this;
  if (!callback) {
    callback = query;
    query = {};
  }
  if (!query.query) {
    query.query = 'cloud.googleapis.com/project in (' + this.projectName + ')';
  }
  this.makeReq_('GET', 'subscriptions', query, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    var subscriptions = (result.subscription || []).map(function(item) {
      return new Subscription(that, {
        name: item.name
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

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
PubSub.prototype.makeReq_ = function(method, path, q, body, callback) {
  var reqOpts = {
    method: method,
    qs: q,
    uri: PUBSUB_BASE_URL + '/' + path
  };
  if (body) {
    reqOpts.json = body;
  }
  this.connection.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports = PubSub;
