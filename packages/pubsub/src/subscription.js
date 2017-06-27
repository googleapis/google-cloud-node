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
var prop = require('propprop');
var util = require('util');

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
 * @type {module:pubsub/message}
 * @private
 */
var Message = require('./message.js');

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
  this.histogram = new Histogram();

  this.projectId = pubsub.projectId;
  this.name = Subscription.formatName_(pubsub.projectId, name);

  this.connection = null;
  this.ackDeadline = options.ackDeadline || 10000;

  this.inventory_ = {
    lease: new Set(),
    ack: [],
    nack: []
  };

  this.flowControl = extend({
    highWaterMark: 16,
    maxMessages: Infinity
  }, options.flowControl);

  this.flushTimeoutHandle_ = null;
  this.leaseTimeoutHandle_ = null;
  this.userClosed_ = false;

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
 *
 */
Subscription.prototype.ack_ = function(message) {
  this.breakLease_(message);
  this.histogram.add(Date.now() - message.received_);

  if (this.connection) {
    this.connection.write({ ackIds: [message.ackId] });
    return;
  }

  this.inventory_.ack.push(message);
  this.setFlushTimeout_();
};

/**
 *
 */
Subscription.prototype.breakLease_ = function(message) {
  this.inventory_.lease.delete(message);

  if (this.connection && this.connection.isPaused()) {
    this.connection.resume();
  }

  if (!this.inventory_.lease.size) {
    clearTimeout(this.leaseTimeoutHandle_);
    this.leaseTimeoutHandle_ = null;
  }
}

/**
 *
 */
Subscription.prototype.close = function(callback) {
  this.userClosed_ = true;

  clearTimeout(this.leaseTimeoutHandle_);
  this.leaseTimeoutHandle_ = null;

  clearTimeout(this.flushTimeoutHandle_);
  this.flushTimeoutHandle_ = null;

  this.flushQueues_();
  this.closeConnection_(callback);
};

/**
 *
 */
Subscription.prototype.closeConnection_ = function(callback) {
  if (this.connection) {
    this.connection.end(callback || common.util.noop);
    this.connection = null;
  } else if (is.fn(callback)) {
    setImmediate(callback);
  }
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
      self.close();
    }

    callback(err, resp);
  });
};

/**
 *
 */
Subscription.prototype.flushQueues_ = function() {
  var acks = this.inventory_.ack;
  var nacks = this.inventory_.nack;

  if (!acks.length && !nacks.length) {
    return;
  }

  this.inventory_.ack = [];
  this.inventory_.nack = [];

  var getAckId = prop('ackId');

  if (this.connection) {
    var reqOpts = {};

    if (acks.length) {
      reqOpts.ackIds = acks.map(getAckId);
    }

    if (nacks.length) {
      reqOpts.modifyDeadlineAckIds = nacks.map(getAckId);
      reqOpts.modifyDeadlineSeconds = Array(nacks.length).fill(0);
    }

    this.connection.write(reqOpts);
    return;
  }

  var self = this;

  if (acks.length) {
    this.request({
      client: 'subscriberClient',
      method: 'acknowledge',
      reqOpts: {
        subscription: this.name,
        ackIds: acks.map(getAckId)
      }
    }, function(err) {
      if (err) {
        self.emit('error', err);
      }
    });
  }

  if (nacks.length) {
    this.request({
      client: 'subscriberClient',
      method: 'modifyAckDeadline',
      reqOpts: {
        subscription: this.name,
        ackIds: nacks.map(getAckId),
        ackDeadlineSeconds: 0
      }
    }, function(err) {
      if (err) {
        self.emit('error', err);
      }
    });
  }
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
 *
 */
Subscription.prototype.leaseMessage_ = function(data) {
  var message = new Message(this, data);

  this.inventory_.lease.add(message);
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
 *
 */
Subscription.prototype.nack_ = function(message) {
  this.breakLease_(message);

  if (this.connection) {
    this.connection.write({
      modifyDeadlineAckIds: [message.ackId],
      modifyDeadlineSeconds: [0]
    });
    return;
  }

  this.inventory_.nack.push(message);
  this.setFlushTimeout_();
}

/**
 * @private
 */
Subscription.prototype.openConnection_ = function() {
  var self = this;

  var reqOpts = {
    subscription: this.name,
    streamAckDeadlineSeconds: this.ackDeadline / 1000
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

    var connection = requestFn();

    connection.on('error', function(err) {
      // in the event of a connection error, we will attempt to re-establish
      // a new connection if the grpc error code is something safe to retry on
      var retryCodes = [
        2, // Unknown Error
        4, // DeadlineExceeded
        14 // Unavailable
      ];

      if (retryCodes.indexOf(err.code) > -1) {
        self.closeConnection_();
        self.openConnection_();
        return;
      }

      self.emit('error', err);
    });

    connection.on('data', function(data) {
      arrify(data.receivedMessages).forEach(function(message) {
        self.emit('message', self.leaseMessage_(message));
      });

      if (self.inventory_.lease.size >= self.flowControl.maxMessages) {
        connection.pause();
      }
    });

    // this event is the closest thing that we have to an indication that a
    // connection was opened successfully. when we know it was opened we'll
    // expose it to the client. this should prevent writes from happening
    // before it was opened
    connection.on('metadata', function() {
      self.connection = connection;

      clearTimeout(self.flushTimeoutHandle_);
      self.flushTimeoutHandle_ = null;
      self.flushQueues_();
    });

    connection.on('close', function() {
      if (!self.userClosed_) {
        self.closeConnection_();
        self.openConnection_();
      }
    });

    connection.write(reqOpts);
  });
};

/**
 *
 */
Subscription.prototype.renewLeases_ = function() {
  var self = this;

  this.leaseTimeoutHandle_ = null;

  if (!this.inventory_.lease.size) {
    return;
  }

  var ackIds = Array.from(this.inventory_.lease).map(prop('ackId'));

  this.ackDeadline = this.histogram.percentile(99);
  var ackDeadlineSeconds = this.ackDeadline / 1000;

  if (this.connection) {
    this.connection.write({
      modifyDeadlineAckIds: ackIds,
      modifyDeadlineSeconds: Array(ackIds.length).fill(ackDeadlineSeconds)
    });

    this.setLeaseTimeout_();
    return;
  }

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

  this.setLeaseTimeout_();
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
    reqOpts.snapshot = Snapshot.formatName_(this.pubsub.projectId, snapshot);
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
Subscription.prototype.setFlushTimeout_ = function() {
  if (!this.flushTimeoutHandle_) {
    this.flushTimeoutHandle_ = setTimeout(this.flushQueues_.bind(this), 1000);
  }
};

/**
 *
 */
Subscription.prototype.setLeaseTimeout_ = function() {
  if (this.leaseTimeoutHandle_) {
    return;
  }

  var timeout = Math.random() * this.ackDeadline * 0.9;
  this.leaseTimeoutHandle_ = setTimeout(this.renewLeases_.bind(this), timeout);
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
