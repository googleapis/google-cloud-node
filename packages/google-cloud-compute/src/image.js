/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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
var util = require('util');

/**
 * An Image object allows you to interact with a Google Compute Engine image.
 *
 * @see [Images Overview]{@link https://cloud.google.com/compute/docs/images}
 * @see [Image Resource]{@link https://cloud.google.com/compute/docs/reference/v1/images}
 *
 * @class
 * @param {Compute} compute - The parent Compute instance this Image belongs to.
 * @param {string} name - Image name.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const image = compute.image('image-name');
 */
function Image(compute, name) {
  var methods = {
    /**
     * Create an image.
     *
     * @method Image#create
     * @param {Disk} disk - See {@link Compute#createImage}.
     * @param {object} [options] - See {@link Compute#createImage}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const disk = zone.disk('disk1');
     * const image = compute.image('image-name');
     *
     * image.create(disk, function(err, image, operation, apiResponse) {
     *   // `image` is an Image object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * image.create(disk).then(function(data) {
     *   const image = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the image exists.
     *
     * @method Image#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the image exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const image = compute.image('image-name');
     *
     * image.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * image.exists().then(function(data) {
     *   const exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get an image if it exists.
     *
     * @method Image#get
     * @param {options=} options - Configuration object.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const image = compute.image('image-name');
     *
     * image.get(function(err, image, apiResponse) {
     *   // `image` is an Image object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * image.get().then(function(data) {
     *   const image = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the image's metadata.
     *
     * @see [Images: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/image/get}
     * @see [Image Resource]{@link https://cloud.google.com/compute/docs/reference/v1/images}
     *
     * @method Image#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The image's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const image = compute.image('image-name');
     *
     * image.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * image.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/images',
    /**
     * @name Image#id
     * @type {string}
     */
    id: name,
    createMethod: compute.createImage.bind(compute),
    methods: methods,
  });
}

util.inherits(Image, common.ServiceObject);

/**
 * Delete the image.
 *
 * @see [Images: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/images/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const image = compute.image('image-name');
 *
 * image.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * image.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Image.prototype.delete = function(callback) {
  var compute = this.parent;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Image);

/**
 * Reference to the {@link Image} class.
 * @name module:@google-cloud/compute.Image
 * @see Image
 */
module.exports = Image;
