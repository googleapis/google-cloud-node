/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

const arrify = require('arrify');
const common = require('@google-cloud/common');
const is = require('is');
const {promisifyAll} = require('@google-cloud/promisify');
const {teenyRequest} = require('teeny-request');

/**
 * A managed instance group uses an instance template to create a group of identical instances.
 * You control a managed instance group as a single entity.
 *
 * @see [Creating Groups of Instances]{@link https://cloud.google.com/compute/docs/instance-groups}
 * @see [Managed Instance Groups]{@link https://cloud.google.com/compute/docs/instance-groups/#managed_instance_groups}
 *
 * @class
 * @param {Zone} zone
 * @param {string} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const instanceGroupManager = zone.instanceGroupManager('web-servers');
 */
class InstanceGroupManager extends common.ServiceObject {
  constructor(zone, name) {
    const methods = {
      /**
       * Check if the instance group manager exists.
       *
       * @method InstanceGroupManager#exists
       * @param {function} callback - The callback function.
       * @param {?error} callback.err - An error returned while making this
       *     request.
       * @param {boolean} callback.exists - Whether the instance group manager exists or
       *     not.
       *
       * @example
       * const Compute = require('@google-cloud/compute');
       * const compute = new Compute();
       * const zone = compute.zone('us-central1-a');
       * const instanceGroupManager = zone.instanceGroupManager('web-servers');
       *
       * instanceGroupManager.exists(function(err, exists) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * instanceGroupManager.exists().then(function(data) {
       *   const exists = data[0];
       * });
       */
      exists: true,
      /**
       * Get an instance group manager if it exists.
       *
       * You may optionally use this to "get or create" an object by providing an
       * object with `autoCreate` set to `true`. Any extra configuration that is
       * normally required for the `create` method must be contained within this
       * object as well.
       *
       * @method InstanceGroupManager#get
       * @param {options=} options - Configuration object.
       * @param {boolean} options.autoCreate - Automatically create the object if
       *     it does not exist. Default: `false`
       *
       * @example
       * const Compute = require('@google-cloud/compute');
       * const compute = new Compute();
       * const zone = compute.zone('us-central1-a');
       * const instanceGroupManager = zone.instanceGroupManager('web-servers');
       *
       * instanceGroupManager.get(function(err, instanceGroupManager, apiResponse) {
       *   // `instanceGroupManager` is an InstanceGroupManager object.
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * instanceGroupManager.get().then(function(data) {
       *   const instanceGroupManager = data[0];
       *   const apiResponse = data[1];
       * });
       */
      get: true,
      /**
       * Get the instance group manager's metadata.
       *
       * @see [InstanceGroupManagers: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroupManagers/get}
       * @see [InstanceGroupManagers Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroupManagers}
       *
       * @method InstanceGroupManager#getMetadata
       * @param {function=} callback - The callback function.
       * @param {?error} callback.err - An error returned while making this
       *     request.
       * @param {object} callback.metadata - The instance group manager's metadata.
       * @param {object} callback.apiResponse - The full API response.
       *
       * @example
       * const Compute = require('@google-cloud/compute');
       * const compute = new Compute();
       * const zone = compute.zone('us-central1-a');
       * const instanceGroupManager = zone.instanceGroupManager('web-servers');
       *
       * instanceGroupManager.getMetadata(function(err, metadata, apiResponse) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * instanceGroupManager.getMetadata().then(function(data) {
       *   const metadata = data[0];
       *   const apiResponse = data[1];
       * });
       */
      getMetadata: true,
    };
    super({
      parent: zone,
      baseUrl: '/instanceGroupManagers',
      /**
       * @name InstanceGroupManager#id
       * @type {string}
       */
      id: name,
      // createMethod: zone.createInstanceGroupManager.bind(zone),
      methods: methods,
      requestModule: teenyRequest,
    });
    /**
     * The parent {@link Zone} instance of this {@link InstanceGroup} instance.
     * @name InstanceGroup#zone
     * @type {Zone}
     */
    this.zone = zone;
    /**
     * @name InstanceGroup#name
     * @type {string}
     */
    this.name = name;
  }
  /**
   * Flags the specified instances in the managed instance group for immediate deletion.
   * @see [InstanceGroupManagers: deleteInstances API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroupManagers/deleteInstances}
   * @param {VM|VM[]} vms - VM instances to delete from
   *     this instance group manager.
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {Operation} callback.operation - An operation object
   *     that can be used to check the status of the request.
   * @param {object} callback.apiResponse - The full API response.
   *
   * @example
   * const Compute = require('@google-cloud/compute');
   * const compute = new Compute();
   * const zone = compute.zone('us-central1-a');
   * const instanceGroupManager = zone.instanceGroupManager('web-servers');
   *
   * const vms = [
   *   gce.zone('us-central1-a').vm('http-server'),
   *   gce.zone('us-central1-a').vm('https-server')
   * ];
   *
   * instanceGroupManager.deleteInstances(vms, function(err, operation, apiResponse) {
   *   // `operation` is an Operation object that can be used to check the status
   *   // of the request.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceGroupManager.deleteInstances(vms).then(function(data) {
   *   const operation = data[0];
   *   const apiResponse = data[1];
   * });
   */
  deleteInstances(vms, callback) {
    const self = this;
    this.request(
      {
        method: 'POST',
        uri: '/deleteInstances',
        json: {
          instances: arrify(vms).map(function(vm) {
            return vm.url;
          }),
        },
      },
      function(err, resp) {
        if (err) {
          callback(err, null, resp);
          return;
        }
        const operation = self.zone.operation(resp.name);
        operation.metadata = resp;
        callback(null, operation, resp);
      }
    );
  }
  /**
   * Get a list of managed VM instances in this instance group manager.
   *
   * @see [InstanceGroupManagers: listManagedInstances API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroupManagers/listManagedInstances}
   *
   * @param {object=} options - Instance search options.
   * @param {boolean} options.autoPaginate - Have pagination handled
   *     automatically. Default: true.
   * @param {string} options.filter - Search filter in the format of
   *     `{name} {comparison} {filterString}`.
   *     - **`name`**: the name of the field to compare
   *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
   *       (not equal)
   *     - **`filterString`**: the string to filter to. For string fields, this
   *       can be a regular expression.
   * @param {number} options.maxApiCalls - Maximum number of API calls to make.
   * @param {number} options.maxResults - Maximum number of VMs to return.
   * @param {string} options.pageToken - A previously-returned page token
   *     representing part of the larger set of results to view.
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {VM[]} callback.vms - VM objects from this instance
   *     group.
   * @param {object} callback.apiResponse - The full API response.
   *
   * @example
   * const Compute = require('@google-cloud/compute');
   * const compute = new Compute();
   * const zone = compute.zone('us-central1-a');
   * const instanceGroupManager = zone.instanceGroupManager('web-servers');
   *
   * instanceGroupManager.getManagedInstances(function(err, vms) {
   *   // `vms` is an array of `VM` objects.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, vms, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     instanceGroupManager.getManagedInstances(nextQuery, callback);
   *   }
   * }
   *
   * instanceGroupManager.getManagedInstances({
   *   autoPaginate: false
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceGroupManager.getManagedInstances().then(function(data) {
   *   const vms = data[0];
   * });
   */
  getManagedInstances(options, callback) {
    const self = this;
    if (is.fn(options)) {
      callback = options;
      options = {};
    }
    options = options || {};
    this.request(
      {
        method: 'POST',
        uri: '/listManagedInstances',
        qs: options,
      },
      function(err, resp) {
        if (err) {
          callback(err, null, null, resp);
          return;
        }
        let nextQuery = null;
        if (resp.nextPageToken) {
          nextQuery = Object.assign({}, options, {
            pageToken: resp.nextPageToken,
          });
        }
        const vms = arrify(resp.managedInstances).map(function(vm) {
          const vmInstance = self.zone.vm(vm.instance);
          vmInstance.metadata = vm;
          return vmInstance;
        });
        callback(null, vms, nextQuery, resp);
      }
    );
  }
  /**
   * Resizes the managed instance group.
   *
   * @see [InstanceGroupManagers: resize API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroupManagers/resize}
   *
   * @param {number} size - The number of running instances that the managed instance group should maintain at any given time.
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {Operation} callback.operation - An operation object
   *     that can be used to check the status of the request.
   * @param {object} callback.apiResponse - The full API response.
   *
   * @example
   * const Compute = require('@google-cloud/compute');
   * const compute = new Compute();
   * const zone = compute.zone('us-central1-a');
   * const instanceGroupManager = zone.instanceGroupManager('web-servers');
   *
   * instanceGroupManager.resize(2, function(err, operation, apiResponse) {
   *   // `operation` is an Operation object that can be used to check the status
   *   // of the request.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceGroupManager.resize(2).then(function(data) {
   *   const operation = data[0];
   *   const apiResponse = data[1];
   * });
   */
  resize(size, callback) {
    const self = this;
    this.request(
      {
        method: 'POST',
        uri: '/resize',
        qs: {size: size},
      },
      function(err, resp) {
        if (err) {
          callback(err, null, resp);
          return;
        }
        const operation = self.zone.operation(resp.name);
        operation.metadata = resp;
        callback(null, operation, resp);
      }
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(InstanceGroupManager);

module.exports = InstanceGroupManager;
