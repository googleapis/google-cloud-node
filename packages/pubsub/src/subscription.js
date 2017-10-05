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
 * @module pubsub/subscription
 */

'use strict';

var common = require('@google-cloud/common');
var events = require('events');
var extend = require('extend');
var is = require('is');
var os = require('os');
var snakeCase = require('lodash.snakecase');
var util = require('util');

/**
 * @type {module:pubsub/connectionPool}
 * @private
 */
var ConnectionPool = require('./connection-pool.js');

/**
 * @type {module:pubsub/histogram}
 * @private
 */
var Histogram = require('./histogram.js');

/**
 * @type {module:pubsub/iam}
 * @private
 */
var IAM = require('./iam.js');

/**
 * @type {module:pubsub/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/*! Developer Documentation
 * @param {module:pubsub} pubsub - PubSub object.
 * @param {string=} name - The name of the subscription.
 */
/**
 * A Subscription object will give you access to your Cloud Pub/Sub
 * subscription.
 *
 * Subscriptions are sometimes retrieved when using various methods:
 *
 * - {module:pubsub#getSubscriptions}
 * - {module:pubsub/topic#getSubscriptions}
 * - {module:pubsub/topic#createSubscription}
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
 * @param {object=} options - See a
 *     [Subscription resource](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.subscriptions)
 * @param {object} options.flowControl - Flow control configurations for
 *     receiving messages. Note that these options do not persist across
 *     subscription instances.
 * @param {number} options.flowControl.maxBytes - The maximum number of bytes
 *     in un-acked messages to allow before the subscription pauses incoming
 *     messages. Defaults to 20% of free memory.
 * @param {number} options.flowControl.maxMessages - The maximum number of
 *     un-acked messages to allow before the subscription pauses incoming
 *     messages. Default: Infinity.
 * @param {number} options.maxConnections - Use this to limit the number of
 *     connections to be used when sending and receiving messages. Default: 5.
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
 * // From {module:pubsub/topic#createSubscription}:
 * //-
 * var topic = pubsub.topic('my-topic');
 * topic.createSubscription('new-subscription', function(err, subscription) {
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
 *   // message.ack();
 *
 *   // This doesn't ack the message, but allows more messages to be retrieved
 *   // if your limit was hit or if you don't want to ack the message.
 *   // message.nack();
 * }
 * subscription.on('message', onMessage);
 *
 * // Remove the listener from receiving `message` events.
 * subscription.removeListener('message', onMessage);
 */
function Subscription(pubsub, name, options) {
  options = options || {};

  this.pubsub = pubsub;
  this.projectId = pubsub.projectId;
  this.request = pubsub.request.bind(pubsub);
  this.histogram = new Histogram();

  this.name = Subscription.formatName_(pubsub.projectId, name);

  this.connectionPool = null;
  this.ackDeadline = 10000;
  this.maxConnections = options.maxConnections || 5;

  this.inventory_ = {
    lease: [],
    ack: [],
    nack: [],
    bytes: 0
  };

  this.flowControl = extend({
    maxBytes: os.freemem() * 0.2,
    maxMessages: Infinity
  }, options.flowControl);

  this.flushTimeoutHandle_ = null;
  this.leaseTimeoutHandle_ = null;
  this.userClosed_ = false;
  this.isOpen = false;

  events.EventEmitter.call(this);
  this.messageListeners = 0;

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

  this.listenForEvents_();
}

util.inherits(Subscription, events.EventEmitter);

/**
 * Formats Subscription metadata.
 *
 * @private
 */
Subscription.formatMetadata_ = function(metadata) {
  var formatted = extend({}, metadata);

  if (metadata.messageRetentionDuration) {
    formatted.retainAckedMessages = true;

    formatted.messageRetentionDuration = {
      seconds: metadata.messageRetentionDuration,
      nanos: 0
    };
  }

  if (metadata.pushEndpoint) {
    delete formatted.pushEndpoint;

    formatted.pushConfig = {
      pushEndpoint: metadata.pushEndpoint
    };
  }

  return formatted;
};

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
 * Acks the provided message. If the connection pool is absent, it will be
 * placed in an internal queue and sent out after 1 second or if the pool is
 * re-opened before the timeout hits.
 *
 * @private
 *
 * @param {object} message - The message object.
 */
Subscription.prototype.ack_ = function(message) {
  this.breakLease_(message);
  this.histogram.add(Date.now() - message.received);

  if (!this.connectionPool || !this.connectionPool.isConnected()) {
    this.inventory_.ack.push(message.ackId);
    this.setFlushTimeout_();
    return;
  }

  var self = this;

  this.connectionPool.acquire(message.connectionId, function(err, connection) {
    if (err) {
      self.emit('error', err);
      return;
    }

    connection.write({ ackIds: [message.ackId] });
  });
};

/**
 * Breaks the lease on a message. Essentially this means we no longer treat the
 * message as being un-acked and count it towards the flow control limits.
 *
 * If the pool was previously paused and we freed up space, we'll continue to
 * recieve messages.
 *
 * @private
 *
 * @param {object} message - The message object.
 */
Subscription.prototype.breakLease_ = function(message) {
  var messageIndex = this.inventory_.lease.indexOf(message.ackId);

  if (messageIndex === -1) {
    return;
  }

  this.inventory_.lease.splice(messageIndex, 1);
  this.inventory_.bytes -= message.length;

  var pool = this.connectionPool;

  if (pool && pool.isPaused && !this.hasMaxMessages_()) {
    pool.resume();
  }

  if (!this.inventory_.lease.length) {
    clearTimeout(this.leaseTimeoutHandle_);
    this.leaseTimeoutHandle_ = null;
  }
};

/**
 * Closes the subscription, once this is called you will no longer receive
 * message events unless you add a new message listener.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while closing the
 *     Subscription.
 *
 * @example
 * subscription.close(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.close().then(function() {});
 */
Subscription.prototype.close = function(callback) {
  this.userClosed_ = true;

  var inventory = this.inventory_;
  inventory.lease.length = inventory.bytes = 0;

  clearTimeout(this.leaseTimeoutHandle_);
  this.leaseTimeoutHandle_ = null;

  this.flushQueues_();
  this.closeConnection_(callback);
};

/**
 * Closes the connection pool.
 *
 * @private
 *
 * @param {function=} callback - The callback function.
 * @param {?error} err - An error returned from this request.
 */
Subscription.prototype.closeConnection_ = function(callback) {
  this.isOpen = false;

  if (this.connectionPool) {
    this.connectionPool.close(callback || common.util.noop);
    this.connectionPool = null;
  } else if (is.fn(callback)) {
    setImmediate(callback);
  }
};

/**
 * Create a snapshot with the given name.
 *
 * @param {string} name - Name of the snapshot.
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
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
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
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

  callback = callback || common.util.noop;

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
      self.removeAllListeners();
      self.close();
    }

    callback(err, resp);
  });
};

/**
 * Check if a subscription exists.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {boolean} callback.exists - Whether the subscription exists or not.
 *
 * @example
 * subscription.exists(function(err, exists) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.exists().then(function(data) {
 *   var exists = data[0];
 * });
 */
Subscription.prototype.exists = function(callback) {
  this.getMetadata(function(err) {
    if (!err) {
      callback(null, true);
      return;
    }

    if (err.code === 5) {
      callback(null, false);
      return;
    }

    callback(err);
  });
};

/**
 * Flushes internal queues. These can build up if a user attempts to ack/nack
 * while there is no connection pool (e.g. after they called close).
 *
 * Typically this will only be called either after a timeout or when a
 * connection is re-opened.
 *
 * Any errors that occur will be emitted via `error` events.
 *
 * @private
 */
Subscription.prototype.flushQueues_ = function() {
  var self = this;

  clearTimeout(this.flushTimeoutHandle_);
  this.flushTimeoutHandle_ = null;

  var acks = this.inventory_.ack;
  var nacks = this.inventory_.nack;

  if (!acks.length && !nacks.length) {
    return;
  }

  if (this.connectionPool) {
    this.connectionPool.acquire(function(err, connection) {
      if (err) {
        self.emit('error', err);
        return;
      }

      var reqOpts = {};

      if (acks.length) {
        reqOpts.ackIds = acks;
      }

      if (nacks.length) {
        reqOpts.modifyDeadlineAckIds = nacks;
        reqOpts.modifyDeadlineSeconds = Array(nacks.length).fill(0);
      }

      connection.write(reqOpts);

      self.inventory_.ack = [];
      self.inventory_.nack = [];
    });
    return;
  }

  if (acks.length) {
    this.request({
      client: 'subscriberClient',
      method: 'acknowledge',
      reqOpts: {
        subscription: this.name,
        ackIds: acks
      }
    }, function(err) {
      if (err) {
        self.emit('error', err);
      } else {
        self.inventory_.ack = [];
      }
    });
  }

  if (nacks.length) {
    this.request({
      client: 'subscriberClient',
      method: 'modifyAckDeadline',
      reqOpts: {
        subscription: this.name,
        ackIds: nacks,
        ackDeadlineSeconds: 0
      }
    }, function(err) {
      if (err) {
        self.emit('error', err);
      } else {
        self.inventory_.nack = [];
      }
    });
  }
};

/**
 * Get a subscription if it exists.
 *
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {boolean} gaxOpts.autoCreate - Automatically create the subscription
 *     does not already exist. Default: false.
 *
 * @example
 * subscription.get(function(err, subscription, apiResponse) {
 *   // The `subscription` data has been populated.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.get().then(function(data) {
 *   var subscription = data[0];
 *   var apiResponse = data[1];
 * });
 */
Subscription.prototype.get = function(gaxOpts, callback) {
  var self = this;

  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var autoCreate = !!gaxOpts.autoCreate && is.fn(this.create);
  delete gaxOpts.autoCreate;

  this.getMetadata(gaxOpts, function(err, apiResponse) {
    if (!err) {
      callback(null, self, apiResponse);
      return;
    }

    if (err.code !== 5 || !autoCreate) {
      callback(err, null, apiResponse);
      return;
    }

    self.create(gaxOpts, callback);
  });
};

/**
 * Fetches the subscriptions metadata.
 *
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * subscription.getMetadata(function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.getMetadata().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Subscription.prototype.getMetadata = function(gaxOpts, callback) {
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
    method: 'getSubscription',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, function(err, apiResponse) {
    if (!err) {
      self.metadata = apiResponse;
    }

    callback(err, apiResponse);
  });
};

/**
 * Checks to see if this Subscription has hit any of the flow control
 * thresholds.
 *
 * @private
 *
 * @return {boolean}
 */
Subscription.prototype.hasMaxMessages_ = function() {
  return this.inventory_.lease.length > this.flowControl.maxMessages ||
    this.inventory_.bytes >= this.flowControl.maxBytes;
};

/**
 * Leases a message. This will add the message to our inventory list and then
 * modifiy the ack deadline for the user if they exceed the specified ack
 * deadline.
 *
 * @private
 *
 * @param {object} message - The message object.
 */
Subscription.prototype.leaseMessage_ = function(message) {
  this.inventory_.lease.push(message.ackId);
  this.inventory_.bytes += message.length;
  this.setLeaseTimeout_();

  return message;
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

      if (!self.connectionPool) {
        self.userClosed_ = false;
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
 * Modify the push config for the subscription.
 *
 * @param {object} config - The push config.
 * @param {string} config.pushEndpoint - A URL locating the endpoint to which
 *     messages should be published.
 * @param {object} config.attributes - [PushConfig attributes](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#google.pubsub.v1.PushConfig).
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error from the API call.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * var pushConfig = {
 *   pushEndpoint: 'https://mydomain.com/push',
 *   attributes: {
 *     key: 'value'
 *   }
 * };
 *
 * subscription.modifyPushConfig(pushConfig, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.modifyPushConfig(pushConfig).then(function(data) {
 *   var apiResponse = data[0];
 * });
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
 * Nacks the provided message. If the connection pool is absent, it will be
 * placed in an internal queue and sent out after 1 second or if the pool is
 * re-opened before the timeout hits.
 *
 * @private
 *
 * @param {object} message - The message object.
 */
Subscription.prototype.nack_ = function(message) {
  this.breakLease_(message);

  if (!this.connectionPool || !this.connectionPool.isConnected()) {
    this.inventory_.nack.push(message.ackId);
    this.setFlushTimeout_();
    return;
  }

  var self = this;

  this.connectionPool.acquire(message.connectionId, function(err, connection) {
    if (err) {
      self.emit('error', err);
      return;
    }

    connection.write({
      modifyDeadlineAckIds: [message.ackId],
      modifyDeadlineSeconds: [0]
    });
  });
};

/**
 * Opens the ConnectionPool.
 *
 * @private
 */
Subscription.prototype.openConnection_ = function() {
  var self = this;
  var pool = this.connectionPool = new ConnectionPool(this);

  this.isOpen = true;

  pool.on('error', function(err) {
    self.emit('error', err);
  });

  pool.on('message', function(message) {
    if (!self.hasMaxMessages_()) {
      self.emit('message', self.leaseMessage_(message));
      return;
    }

    if (!pool.isPaused) {
      pool.pause();
    }

    message.nack();
  });

  pool.once('connected', function() {
    self.flushQueues_();
  });
};

/**
 * Modifies the ack deadline on messages that have yet to be acked. We update
 * the ack deadline to the 99th percentile of known ack times.
 *
 * @private
 */
Subscription.prototype.renewLeases_ = function() {
  var self = this;

  clearTimeout(this.leaseTimeoutHandle_);
  this.leaseTimeoutHandle_ = null;

  if (!this.inventory_.lease.length) {
    return;
  }

  this.ackDeadline = this.histogram.percentile(99);

  var ackIds = this.inventory_.lease.slice();
  var ackDeadlineSeconds = this.ackDeadline / 1000;

  if (this.connectionPool) {
    this.connectionPool.acquire(function(err, connection) {
      if (err) {
        self.emit('error', err);
        return;
      }

      connection.write({
        modifyDeadlineAckIds: ackIds,
        modifyDeadlineSeconds: Array(ackIds.length).fill(ackDeadlineSeconds)
      });
    });
  } else {
    this.request({
      client: 'subscriberClient',
      method: 'modifyAckDeadline',
      reqOpts: {
        subscription: self.name,
        ackIds: ackIds,
        ackDeadlineSeconds: ackDeadlineSeconds
      }
    }, function(err) {
      if (err) {
        self.emit('error', err);
      }
    });
  }

  this.setLeaseTimeout_();
};

/**
 * Seeks an existing subscription to a point in time or a given snapshot.
 *
 * @param {string|date} snapshot - The point to seek to. This will accept the
 *     name of the snapshot or a Date object.
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
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
    reqOpts.snapshot = Snapshot.formatName_(this.pubsub.projectId, snapshot);
  } else if (is.date(snapshot)) {
    reqOpts.time = snapshot;
  } else {
    throw new Error('Either a snapshot name or Date is needed to seek to.');
  }

  this.request({
    client: 'subscriberClient',
    method: 'seek',
    reqOpts: reqOpts,
    gaxOpts: gaxOpts
  }, callback);
};

/**
 * Sets a timeout to flush any acks/nacks that have been made since the pool has
 * closed.
 *
 * @private
 */
Subscription.prototype.setFlushTimeout_ = function() {
  if (this.flushTimeoutHandle_) {
    return;
  }

  this.flushTimeoutHandle_ = setTimeout(this.flushQueues_.bind(this), 1000);
};

/**
 * Sets a timeout to modify the ack deadlines for any unacked/unnacked messages,
 * renewing their lease.
 *
 * @private
 */
Subscription.prototype.setLeaseTimeout_ = function() {
  if (this.leaseTimeoutHandle_  || !this.isOpen) {
    return;
  }

  var timeout = Math.random() * this.ackDeadline * 0.9;
  this.leaseTimeoutHandle_ = setTimeout(this.renewLeases_.bind(this), timeout);
};

/**
 * Update the subscription object.
 *
 * @param {object} metadata - The subscription metadata.
 * @param {object=} gaxOpts - Request configuration options, outlined
 *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error from the API call.
 * @param {object} callback.apiResponse - The full API response from the
 *     service.
 *
 * @example
 * var metadata = {
 *   key: 'value'
 * };
 *
 * subscription.setMetadata(metadata, function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subscription.setMetadata(metadata).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Subscription.prototype.setMetadata = function(metadata, gaxOpts, callback) {
  if (is.fn(gaxOpts)) {
    callback = gaxOpts;
    gaxOpts = {};
  }

  var subscription = Subscription.formatMetadata_(metadata);
  var fields = Object.keys(subscription).map(snakeCase);

  subscription.name = this.name;

  var reqOpts = {
    subscription: subscription,
    updateMask: {
      paths: fields
    }
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
