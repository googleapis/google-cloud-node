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
 * @type {module:pubsub/subscription}
 * @private
 */
var Subscription = require('./subscription.js');

/**
 * @type {module:pubsub/topic}
 * @private
 */
var Topic = require('./topic.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string} Base URL for Pub/Sub API.
 * @private
 */
var PUBSUB_BASE_URL = 'https://pubsub.googleapis.com/v1beta2/';

/**
 * @const {array} Required scopes for Pub/Sub API.
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/pubsub',
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * [Google Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Google Cloud
 * Platform.
 *
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use
 * it by filling the [Limited Preview application form](http://goo.gl/sO0wTu).
 *
 * The full set of options that can be passed to this method are
 * [outlined here](#/docs/?method=gcloud).
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
 * //-
 * // Providing configuration details up-front.
 * //-
 * var myProject = gcloud({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var pubsub = gcloud.pubsub();
 *
 * //-
 * // Overriding default configuration details.
 * //-
 * var pubsub = myProject.pubsub({
 *   keyFilename: '/path/to/another/keyfile.json'
 * });
 */
function PubSub(options) {
  options = options || {};

  this.makeAuthorizedRequest_ = util.makeAuthorizedRequestFactory({
    credentials: options.credentials,
    keyFile: options.keyFilename,
    scopes: SCOPES,
    email: options.email
  });

  this.projectId = options.projectId;
  this.projectName = 'projects/' + this.projectId;
}

/**
 * Get a list of the topics registered to your project. You may optionally
 * provide a query object as the first argument to customize the response.
 *
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.pageSize - Max number of results to return.
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
 *   pageSize: 3
 * }, function(err, topics, nextQuery) {});
 */
PubSub.prototype.getTopics = function(query, callback) {
  var self = this;
  if (!callback) {
    callback = query;
    query = {};
  }
  var path = this.projectName + '/topics';
  this.makeReq_('GET', path, query, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    var topics = (result.topics || []).map(function(item) {
      return new Topic(self, {
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
  var path = this.projectName + '/topics/' + name;
  this.makeReq_('PUT', path, null, null, function(err) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, topic);
  });
};

/**
 * Create a Topic object to reference an existing topic.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the topic.
 * @param {object=} options - Configuration object.
 * @param {boolean=} options.autoCreate - Automatically create topic if it
 *     doesn't exist. Note that messages published to a topic with no
 *     subscribers will not be delivered.
 * @return {module:pubsub/topic}
 *
 * @example
 * var topic = pubsub.topic('my-existing-topic');
 * var topic = pubsub.topic('topic-that-maybe-exists', { autoCreate: true });
 * topic.publish('New message!');
 */
PubSub.prototype.topic = function(name, options) {
  if (!name) {
    throw new Error('A name must be specified for a new topic.');
  }
  options = options || {};
  return new Topic(this, {
    name: name,
    autoCreate: options.autoCreate
  });
};

/**
 * Get a list of the subscriptions registered to all of your project's topics.
 * You may optionally provide a query object as the first argument to customize
 * the response.
 *
 * @param {object=} query - Query object.
 * @param {string=} query.pageToken - Page token.
 * @param {number=} query.pageSize - Maximum number of results to return.
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
 *   pageSize: 10
 * }, function(err, subscriptions, nextQuery) {});
 */
PubSub.prototype.getSubscriptions = function(query, callback) {
  var self = this;
  if (!callback) {
    callback = query;
    query = {};
  }

  var path = this.projectName + '/subscriptions';
  this.makeReq_('GET', path, query, true, function(err, result) {
    if (err) {
      callback(err);
      return;
    }

    var subscriptions = (result.subscriptions || []).map(function(item) {
      return new Subscription(self, {
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
    uri: PUBSUB_BASE_URL + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = PubSub;
