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

'use strict';

var common = require('@google-cloud/common');
var is = require('is');
var util = require('util');

/**
 * A Notification object is created from your {@link Bucket} object using
 * {@link Bucket#notification}. Use it to interact with Cloud Pub/Sub
 * notifications.
 *
 * @see [Cloud Pub/Sub Notifications for Google Cloud Storage]{@link https://cloud.google.com/storage/docs/pubsub-notifications}
 *
 * @class
 * @hideconstructor
 *
 * @param {Bucket} bucket The bucket instance this notification is attached to.
 * @param {string} id The ID of the notification.
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 *
 * var notification = myBucket.notification('1');
 */
function Notification(bucket, id) {
  var methods = {
    /**
     * Creates a notification subscription for the bucket.
     *
     * @see [Notifications: insert]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/insert}
     *
     * @param {Topic|string} topic The Cloud PubSub topic to which this
     *     subscription publishes. If the project ID is omitted, the current
     *     project ID will be used.
     *
     *     Acceptable formats are:
     *     - `projects/grape-spaceship-123/topics/my-topic`
     *
     *     - `my-topic`
     * @param {CreateNotificationRequest} [options] Metadata to set for
     *     the notification.
     * @param {CreateNotificationCallback} [callback] Callback function.
     * @returns {Promise<CreateNotificationResponse>}
     * @throws {Error} If a valid topic is not provided.
     *
     * @example
     * var storage = require('@google-cloud/storage')();
     * var myBucket = storage.bucket('my-bucket');
     * var notification = myBucket.notification('1');
     *
     * notification.create(function(err, notification, apiResponse) {
     *   if (!err) {
     *     // The notification was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * notification.create().then(function(data) {
     *   var notification = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * @typedef {array} NotificationExistsResponse
     * @property {boolean} 0 Whether the notification exists or not.
     */
    /**
     * @callback NotificationExistsCallback
     * @param {?Error} err Request error, if any.
     * @param {boolean} exists Whether the notification exists or not.
     */
    /**
     * Check if the notification exists.
     *
     * @param {NotificationExistsCallback} [callback] Callback function.
     * @returns {Promise<NotificationExistsResponse>}
     *
     * @example
     * var storage = require('@google-cloud/storage')();
     * var myBucket = storage.bucket('my-bucket');
     * var notification = myBucket.notification('1');
     *
     * notification.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * notification.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,
  };

  common.ServiceObject.call(this, {
    parent: bucket,
    baseUrl: '/notificationConfigs',
    id: id.toString(),
    createMethod: bucket.createNotification.bind(bucket),
    methods: methods,
  });
}

util.inherits(Notification, common.ServiceObject);

/**
 * @typedef {array} DeleteNotificationResponse
 * @property {object} 0 The full API response.
 */
/**
 * @callback DeleteNotificationCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
/**
 * Permanently deletes a notification subscription.
 *
 * @see [Notifications: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/delete}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {DeleteNotificationCallback} [callback] Callback function.
 * @returns {Promise<DeleteNotificationResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 * var notification = myBucket.notification('1');
 *
 * notification.delete(function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * notification.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 *
 * @example <caption>include:samples/notifications.js</caption>
 * region_tag:storage_delete_notification
 * Another example:
 */
Notification.prototype.delete = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      method: 'DELETE',
      uri: '',
      qs: options,
    },
    callback || common.util.noop
  );
};

/**
 * @typedef {array} GetNotificationResponse
 * @property {Notification} 0 The {@link Notification}
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetNotificationCallback
 * @param {?Error} err Request error, if any.
 * @param {Notification} notification The {@link Notification}.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get a notification and its metadata if it exists.
 *
 * @see [Notifications: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/get}
 *
 * @param {object} [options] Configuration options.
 *     See {@link Bucket#createNotification} for create options.
 * @param {boolean} [options.autoCreate] Automatically create the object if
 *     it does not exist. Default: `false`.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {GetNotificationCallback} [callback] Callback function.
 * @return {Promise<GetNotificationCallback>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 * var notification = myBucket.notification('1');
 *
 * notification.get(function(err, notification, apiResponse) {
 *   // `notification.metadata` has been populated.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * notification.get().then(function(data) {
 *   var notification = data[0];
 *   var apiResponse = data[1];
 * });
 */
Notification.prototype.get = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var autoCreate = options.autoCreate;
  delete options.autoCreate;

  function onCreate(err, notification, apiResponse) {
    if (err) {
      if (err.code === 409) {
        self.get(options, callback);
        return;
      }

      callback(err, null, apiResponse);
      return;
    }

    callback(null, notification, apiResponse);
  }

  this.getMetadata(options, function(err, metadata) {
    if (err) {
      if (err.code === 404 && autoCreate) {
        var args = [];

        if (!is.empty(options)) {
          args.push(options);
        }

        args.push(onCreate);

        self.create.apply(self, args);
        return;
      }

      callback(err, null, metadata);
      return;
    }

    callback(null, self, metadata);
  });
};

/**
 * @typedef {array} GetNotificationMetadataResponse
 * @property {object} 0 The notification metadata.
 * @property {object} 1 The full API response.
 */
/**
 * @callback GetNotificationMetadataCallback
 * @param {?Error} err Request error, if any.
 * @param {object} files The notification metadata.
 * @param {object} apiResponse The full API response.
 */
/**
 * Get the notification's metadata.
 *
 * @see [Notifications: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/get}
 *
 * @param {object} [options] Configuration options.
 * @param {boolean} [options.userProject] If this bucket has `requesterPays`
 *     functionality enabled (see {@link Bucket#enableRequesterPays}),
 *     set this value to the project which should be billed for this operation.
 * @param {GetNotificationMetadataCallback} [callback] Callback function.
 * @returns {Promise<GetNotificationMetadataResponse>}
 *
 * @example
 * var storage = require('@google-cloud/storage')();
 * var myBucket = storage.bucket('my-bucket');
 * var notification = myBucket.notification('1');
 *
 * notification.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * notification.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 *
 * @example <caption>include:samples/notifications.js</caption>
 * region_tag:storage_get_metadata
 * Another example:
 */
Notification.prototype.getMetadata = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      uri: '',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      self.metadata = resp;

      callback(null, self.metadata, resp);
    }
  );
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Notification);

/**
 * Reference to the {@link Notification} class.
 * @name module:@google-cloud/storage.Notification
 * @see Notification
 */
module.exports = Notification;
