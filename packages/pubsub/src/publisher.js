/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
 * @module pubsub/publisher
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');

/**
 *
 */
var Batch = require('./batch.js');

/**
 *
 */
function Publisher(topic, options) {
  options = options || {};

  this.topic = topic;
  this.api = topic.api;

  var batchOptions = extend(options.batching, {
    send: this.publish_.bind(this)
  });

  this.batch_ = new Batch(batchOptions);
}

/**
 *
 */
Publisher.prototype.publish = function(data, attrs, callback) {
  if (!(data instanceof Buffer)) {
    throw new TypeError('Data must be in the form of a Buffer.');
  }

  if (is.fn(attrs)) {
    callback = attrs;
    attrs = {};
  }

  var message = {
    data: data,
    attrs: attrs,
    size: data.length
  };

  this.batch_.add(message, callback);
};

/**
 * This should never be called directly.
 */
Publisher.prototype.publish_ = function(messages, done) {
  var self = this;

  var reqOpts = {
    topic: this.topic.name,
    messages: messages.map(function(message) {
      return {
        data: message.data,
        attributes: message.attrs
      };
    })
  };

  this.topic.request({
    client: 'publisherClient',
    method: 'publish',
    reqOpts: reqOpts
  }, function(err, resp) {
    if (err) {
      done(err);
      return;
    }

    done(null, {
      responses: resp.messageIds
    });
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Publisher);

module.exports = Publisher;
