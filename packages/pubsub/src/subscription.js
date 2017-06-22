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
 * @module pubsub/subscription
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var events = require('events');
var extend = require('extend');
var is = require('is');
var os = require('os');
var util = require('util');

/**
 * @type {module:pubsub/iam}
 * @private
 */
var IAM = require('./iam.js');

/**
 * @type {module:pubsub/message}
 * @private
 */
var Message = require('./message.js');

/**
 * @type {module:pubsub/queue}
 * @private
 */
var Queue = require('./queue.js');

/**
 * @type {module:pubsub/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/*! Developer Documentation
 *
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {object} options - Configuration object.
 * @param {string} options.encoding - When pulling for messages, this type is
 *     used when converting a message's data to a string. (default: 'utf-8')
 * @param {string} options.name - Name of the subscription.
 */
/**
 * A Subscription object will give you access to your Cloud Pub/Sub
 * subscription.
 *
 * Subscriptions are sometimes retrieved when using various methods:
 *
 * - {module:pubsub#getSubscriptions}
 * - {module:pubsub/topic#getSubscriptions}
 * - {module:pubsub/topic#subscribe}
 *
 * Subscription objects may be created directly with:
 *
 * - {module:pubsub/topic#subscription}
 *
 * All Subscription objects are instances of an
 * [EventEmitter](http://nodejs.org/api/events.html). The subscription will pull
 * for messages automatically as long as there is at least one listener assigned
 * for the `message` event.
 *
 * @alias module:pubsub/subscription
 * @constructor
 *
 * @example
 * //-
 * // From {module:pubsub#getSubscriptions}:
 * //-
 * pubsub.getSubscriptions(function(err, subscriptions) {
 *   // `subscriptions` is an array of Subscription objects.
 * });
 *
 * //-
 * // From {module:pubsub/topic#getSubscriptions}:
 * //-
 * var topic = pubsub.topic('my-topic');
 * topic.getSubscriptions(function(err, subscriptions) {
 *   // `subscriptions` is an array of Subscription objects.
 * });
 *
 * //-
 * // From {module:pubsub/topic#subscribe}:
 * //-
 * var topic = pubsub.topic('my-topic');
 * topic.subscribe('new-subscription', function(err, subscription) {
 *   // `subscription` is a Subscription object.
 * });
 *
 * //-
 * // From {module:pubsub/topic#subscription}:
 * //-
 * var topic = pubsub.topic('my-topic');
 * var subscription = topic.subscription('my-subscription');
 * // `subscription` is a Subscription object.
 *
 * //-
 * // Once you have obtained a subscription object, you may begin to register
 * // listeners. This will automatically trigger pulling for messages.
 * //-
 *
 * // Register an error handler.
 * subscription.on('error', function(err) {});
 *
 * // Register a listener for `message` events.
 * function onMessage(message) {
 *   // Called every time a message is received.
 *
 *   // message.id = ID of the message.
 *   // message.ackId = ID used to acknowledge the message receival.
 *   // message.data = Contents of the message.
 *   // message.attributes = Attributes of the message.
 *   // message.timestamp = Timestamp when Pub/Sub received the message.
 *
 *   // Ack the message:
 *   // message.ack(callback);
 *
 *   // Skip the message. This is useful with `maxInProgress` option when
 *   // creating your subscription. This doesn't ack the message, but allows
 *   // more messages to be retrieved if your limit was hit.
 *   // message.skip();
 * }
 * subscription.on('message', onMessage);
 *
 * // Remove the listener from receiving `message` events.
 * subscription.removeListener('message', onMessage);
 */
function Subscription(pubsub, name, options) {
  options = options || {};

  this.pubsub = pubsub;
  this.request = pubsub.request.bind(pubsub);
  this.projectId = pubsub.projectId;

  this.name = Subscription.formatName_(pubsub.projectId, name);
  this.connection = null;
  this.encoding = options.encoding || 'utf-8';
  this.ackDeadline = options.ackDeadline || 600;
  this.messages_ = new Set();

  this.flowControl = extend({
    highWaterMark: 16,
    maxMessages: Infinity
  }, options.flowControl);

  events.EventEmitter.call(this);

  if (options.topic) {
    this.create = pubsub.createSubscription.bind(pubsub, options.topic, name);
  }

  /**
   * [IAM (Identity and Access Management)](https://cloud.google.com/pubsub/access_control)
   * allows you to set permissions on individual resources and offers a wider
   * range of roles: editor, owner, publisher, subscriber, and viewer. This
   * gives you greater flexibility and allows you to set more fine-grained
   * access control.
   *
   * *The IAM access control features described in this document are Beta,
   * including the API methods to get and set IAM policies, and to test IAM
   * permissions. Cloud Pub/Sub's use of IAM features is not covered by
   * any SLA or deprecation policy, and may be subject to backward-incompatible
   * changes.*
   *
   * @mixes module:pubsub/iam
   *
   * @resource [Access Control Overview]{@link https://cloud.google.com/pubsub/access_control}
   * @resource [What is Cloud IAM?]{@link https://cloud.google.com/iam/}
   *
   * @example
   * //-
   * // Get the IAM policy for your subscription.
   * //-
   * subscription.iam.getPolicy(function(err, policy) {
   *   console.log(policy);
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * subscription.iam.getPolicy().then(function(data) {
   *   var policy = data[0];
   *   var apiResponse = data[1];
   * });
   */
  this.iam = new IAM(pubsub, this.name);

  this.ackQueue_ = new Queue(extend({
    send: this.ack_.bind(this)
  }, options.batching));

  this.modifyQueue_ = new Queue(extend({
    send: this.modifyAckDeadline_.bind(this)
  }, options.batching));


  this.listenForEvents_();
}

util.inherits(Subscription, events.EventEmitter);

/**
 * Format the name of a subscription. A subscription's full name is in the
 * format of projects/{projectId}/subscriptions/{subName}.
 *
 * @private
 */
Subscription.formatName_ = function(projectId, name) {
  // Simple check if the name is already formatted.
  if (name.indexOf('/') > -1) {
    return name;
  }

  return 'projects/' + projectId + '/subscriptions/' + name;
};

/**
 * This should never be called directly.
 */
Subscription.prototype.ack_ = function(messages, callback) {
  var self = this;
  var ackIds = messages.reduce(function(ackIds, message) {
    ackIds.push(message.ackId);
    return ackIds;
  }, []);

  if (this.connection) {
    this.connection.write({ ackIds: ackIds });
    setImmediate(onComplete);
    return;
  }

  var reqOpts = {
    ackIds: ackIds,
    subscription: this.name
  };

  this.request({
    client: 'subscriberClient',
    method: 'acknowledge',
    reqOpts: reqOpts
  }, onComplete);

  function onComplete(err, resp) {
    messages.forEach(function(message) {
      self.messages_.delete(message);
    });

    if (self.connection.isPaused()) {
      self.connection.resume();
    }

    callback(err, resp);
  }
};

/**
 * @private
 */
Subscription.prototype.closeConnection_ = function() {
  this.connection.end();
  this.connection = null;
};

/**
 * Create a snapshot with the given name.
 *
 * @param {string} name - Name of the snapshot.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {module:pubsub/snapshot} callback.snapshot - The newly created
 *     snapshot.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * var callback = function(err, snapshot, apiResponse) {
 *   if (!err) {
 *     // The snapshot was created successfully.
 *   }
 * };
 *
 * subscription.createSnapshot('my-snapshot', callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.createSnapshot('my-snapshot').then(function(data) {
 *   var snapshot = data[0];
 *   var apiResponse = data[1];
 * });
 */
Subscription.prototype.createSnapshot = function(name, gaxOpts, callback) {
  var self = this;

  if (!is.string(name)) {
    throw new Error('A name is required to create a snapshot.');
  }

  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var snapshot = self.snapshot(name);

  var reqOpts = {
    name: snapshot.name,
    subscription: this.name
  };

  this.request({
    client: 'subscriberClient',
    method: 'createSnapshot',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    snapshot.metadata = resp;
    callback(null, snapshot, resp);
  });
};

/**
 * Delete the subscription. Pull requests from the current subscription will be
 * errored once unsubscription is complete.
 *
 * @resource [Subscriptions: delete API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * subscription.delete(function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Subscription.prototype.delete = function(gaxOpts, callback) {
  var self = this;

  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var reqOpts = {
    subscription: this.name
  };

  this.request({
    client: 'subscriberClient',
    method: 'deleteSubscription',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, function(err, resp) {
    if (!err) {
      self.removeAllListeners('message');
    }

    callback(err, resp);
  });
};

/**
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - Raw API response.
 */
Subscription.prototype.getMetadata = function(gaxOpts, callback) {
  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var reqOpts = {
    subscription: this.name
  };

  this.request({
    client: 'subscriberClient',
    method: 'getSubscription',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, callback);
};

/**
 * Begin listening for events on the subscription. This method keeps track of
 * how many message listeners are assigned, and then removed, making sure
 * polling is handled automatically.
 *
 * As long as there is one active message listener, the connection is open. As
 * soon as there are no more message listeners, the connection is closed.
 *
 * @private
 *
 * @example
 * subscription.listenForEvents_();
 */
Subscription.prototype.listenForEvents_ = function() {
  var self = this;

  this.on('newListener', function(event) {
    if (event === 'message') {
      self.messageListeners++;

      if (!self.connection) {
        self.openConnection_();
      }
    }
  });

  this.on('removeListener', function(event) {
    if (event === 'message' && --self.messageListeners === 0) {
      self.closeConnection_();
    }
  });
};

/**
 *
 */
Subscription.prototype.createMessage_ = function(data) {
  var message = new Message(self, data);
  this.messages_.add(message);
  return message;
};

/**
 *
 */
Subscription.prototype.modifyAckDeadline_ = function(messages, callback) {
  var self = this;
  var reqOpts;

  if (this.connection) {
    reqOpts = messages.reduce(function(reqOpts, message) {
      message.modifyDeadlineAckIds.push(message.ackId);
      message.modifyDeadlineSeconds.push(message.deadline);
      return reqOpts;
    }, {
      modifyDeadlineAckIds: [],
      modifyDeadlineSeconds: []
    });

    this.connection.write(reqOpts);
    setImmediate(onComplete);
    return;
  }

  var requests = groupByDeadline(messages).map(function(reqOpts) {
    return self.request({
      client: 'subscriberClient',
      method: 'modifyAckDeadline',
      reqOpts: reqOpts
    }).catch(function(err) {
      self.emit('error', err);
    });
  });

  Promise.all(requests)
    .then(onComplete.bind(null, null), onComplete);

  function groupByDeadline(messages) {
    var requests = new Map();

    messages.forEach(function(message) {
      if (!requests.has(message.deadline)) {
        requests.set(message.deadline, {
          subscription: self.name,
          ackIds: [],
          ackDeadlineSeconds: message.deadline
        });
      }

      var request = requests.get(message.deadline);
      request.ackIds.push(message.ackId);
    });

    return Array.from(requests.values());
  }

  function onComplete(err, resp) {
    messages.forEach(function(message) {
      if (message.deadline === 0) {
        self.messages_.delete(message);
      }
    });

    if (self.connection.isPaused()) {
      if (self.messages_.size < self.flowControl.maxMessages) {
        self.connection.resume();
      }
    }

    callback(err, resp);
  }
};

/**
 * @param {object} config - The push config.
 * @param {string} config.pushEndpoint
 * @param {object} config.attributes
 */
Subscription.prototype.modifyPushConfig = function(config, gaxOpts, callback) {
  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var reqOpts = {
    subscription: this.name,
    pushConfig: config
  };

  this.request({
    client: 'subscriberClient',
    method: 'modifyPushConfig',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, callback);
};

/**
 * @private
 */
Subscription.prototype.openConnection_ = function() {
  var self = this;

  var reqOpts = {
    subscription: this.name,
    streamAckDeadlineSeconds: this.ackDeadline
  };

  this.request({
    client: 'subscriberClient',
    method: 'streamingPull',
    returnFn: true,
    reqOpts: {
      highWaterMark: self.flowControl.highWaterMark
    }
  }, function(err, requestFn) {
    if (err) {
      self.emit('error', err);
      return;
    }

    self.connection = requestFn();

    self.connection.on('error', function(err) {
      // in the event of a connection error, we will attempt to re-establish
      // a new connection if the grpc error code is something safe to retry on
      var retryCodes = [
        2, // Unknown Error
        4, // DeadlineExceeded
        14 // Unavailable
      ];

      if (retryCodes.indexOf(err.code) > -1) {
        self.openConnection_();
        return;
      }

      self.emit('error', err);
    });

    self.connection.on('data', function(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', self.createMessage_(message)));
      });

      if (!self.connection.isPaused()) {
        if (self.messages_.size >= self.flowControl.maxMessages) {
          self.connection.pause();
        }
      }
    });

    self.connection.write(reqOpts);
  });
};

/**
 * Pull messages from the subscribed topic. If messages were found, your
 * callback is executed with an array of message objects.
 *
 * Note that messages are pulled automatically once you register your first
 * event listener to the subscription, thus the call to `pull` is handled for
 * you. If you don't want to start pulling, simply don't register a
 * `subscription.on('message', function() {})` event handler.
 *
 * @todo Should not be racing with other pull.
 *
 * @resource [Subscriptions: pull API Documentation]{@link https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions/pull}
 *
 * @param {object=} options - Configuration object.
 * @param {number} options.maxMessages - Limit the amount of messages pulled.
 * @param {boolean} options.returnImmediately - If set, the system will respond
 *     immediately. Otherwise, wait until new messages are available. Returns if
 *     timeout is reached.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Pull all available messages.
 * //-
 * subscription.pull(function(err, messages) {
 *   // messages = [
 *   //   {
 *   //     ackId: '',     // ID used to acknowledge its receival.
 *   //     id: '',        // Unique message ID.
 *   //     data: '',      // Contents of the message.
 *   //     attributes: {} // Attributes of the message.
 *   //
 *   //     Helper functions:
 *   //     ack(callback): // Ack the message.
 *   //     skip():        // Free up 1 slot on the sub's maxInProgress value.
 *   //   },
 *   //   // ...
 *   // ]
 * });
 *
 * //-
 * // Pull a single message.
 * //-
 * var opts = {
 *   maxMessages: 1
 * };
 *
 * subscription.pull(opts, function(err, messages, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.pull(opts).then(function(data) {
 *   var messages = data[0];
 *   var apiResponse = data[1];
 * });
 */
Subscription.prototype.pull = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var reqOpts = extend({
    subscription: this.name,
  }, options);
  delete reqOpts.gaxOpts;

  this.request({
    client: 'subscriberClient',
    method: 'pull',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, function(err, resp) {
    if (err) {
      if (err.code !== 4) {
        callback(err, null, resp);
        return;
      }

      // Simulate a server timeout where no messages were received.
      resp = {
        receivedMessages: []
      };
    }

    var messages = arrify(resp.receivedMessages).map(function(message) {
      return self.createMessage_(message);
    });

    callback(null, messages, resp);
  });
};

/**
 * Seeks an existing subscription to a point in time or a given snapshot.
 *
 * @param {string|date} snapshot - The point to seek to. This will accept the
 *     name of the snapshot or a Date object.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call, may be null.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * var callback = function(err, resp) {
 *   if (!err) {
 *     // Seek was successful.
 *   }
 * };
 *
 * subscription.seek('my-snapshot', callback);
 *
 * //-
 * // Alternatively, to specify a certain point in time, you can provide a Date
 * // object.
 * //-
 * var date = new Date('October 21 2015');
 *
 * subscription.seek(date, callback);
 */
Subscription.prototype.seek = function(snapshot, gaxOpts, callback) {
  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var reqOpts = {
    subscription: this.name
  };

  if (is.string(snapshot)) {
    reqOpts.snapshot = Snapshot.formatName_(this.parent.projectId, snapshot);
  } else if (is.date(snapshot)) {
    reqOpts.time = {
      seconds: Math.floor(snapshot.getTime() / 1000),
      nanos: snapshot.getMilliseconds() * 1e6
    };
  } else {
    throw new Error('Either a snapshot name or Date is needed to seek to.');
  }

  this.request({
    client: 'subscriberClient',
    method: 'seek',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, callback)
};

/**
 *
 */
Subscription.prototype.setMetadata = function(metadata, gaxOpts, callback) {
  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var reqOpts = {
    subscription: this.name,
    updateMask: metadata
  };

  this.request({
    client: 'subscriberClient',
    method: 'updateSubscription',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, callback);
};

/**
 * Create a Snapshot object. See {module:pubsub/subscription#createSnapshot} to
 * create a snapshot.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the snapshot.
 * @return {module:pubsub/snapshot}
 *
 * @example
 * var snapshot = subscription.snapshot('my-snapshot');
 */
Subscription.prototype.snapshot = function(name) {
  return this.pubsub.snapshot.call(this, name);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Subscription, {
  exclude: ['snapshot']
});

module.exports = Subscription;
