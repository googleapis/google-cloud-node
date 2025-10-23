/**
 * Copyright 2020 Google LLC
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

import {Status} from '../status';

import {SimpleCallbackFunction} from '../apitypes';
import {GoogleError} from '../googleError';
import {warn} from '../warnings';

import {BundleDescriptor} from './bundleDescriptor';
import {computeBundleId} from './bundlingUtils';
import {Task, TaskCallback} from './task';

function noop() {}

/**
 * Parameter to configure bundling behavior.
 * @typedef {Object} BundleOptions
 * @property {number} elementCountThreshold -
 *   the bundled request will be sent once the count of outstanding elements
 *   in the repeated field reaches this value.
 * @property {number} elementCountLimit -
 *   represents a hard limit on the number of elements in the repeated field
 *   of the bundle; if adding a request to a bundle would exceed this value,
 *   the bundle is sent and the new request is added to a fresh bundle. It is
 *   invalid for a single request to exceed this limit.
 * @property {number} requestByteThreshold -
 *   the bundled request will be sent once the count of bytes in the request
 *   reaches this value. Note that this value is pessimistically approximated
 *   by summing the bytesizes of the elements in the repeated field, and
 *   therefore may be an under-approximation.
 * @property {number} requestByteLimit -
 *   represents a hard limit on the size of the bundled request; if adding
 *   a request to a bundle would exceed this value, the bundle is sent and
 *   the new request is added to a fresh bundle. It is invalid for a single
 *   request to exceed this limit. Note that this value is pessimistically
 *   approximated by summing the bytesizes of the elements in the repeated
 *   field, with a buffer applied to correspond to the resulting
 *   under-approximation.
 * @property {number} delayThreshold -
 *   the bundled request will be sent this amount of time after the first
 *   element in the bundle was added to it.
 */
export interface BundleOptions {
  elementCountLimit?: number;
  requestByteLimit?: number;
  elementCountThreshold?: number;
  requestByteThreshold?: number;
  delayThreshold?: number;
}

/**
 * BundleExecutor stores several timers for each bundle (calls are bundled based
 * on the options passed, each bundle has unique ID that is calculated based on
 * field values). Each timer fires and sends a call after certain amount of
 * time, and if a new request comes to the same bundle, the timer can be
 * restarted.
 */
export class BundleExecutor {
  _options: BundleOptions;
  _descriptor: BundleDescriptor;
  _tasks: {[index: string]: Task};
  _timers: {[index: string]: ReturnType<typeof setTimeout>};
  _invocations: {[index: string]: string};
  _invocationId: number;
  /**
   * Organizes requests for an api service that requires to bundle them.
   *
   * @param {BundleOptions} bundleOptions - configures strategy this instance
   *   uses when executing bundled functions.
   * @param {BundleDescriptor} bundleDescriptor - the description of the bundling.
   * @constructor
   */
  constructor(
    bundleOptions: BundleOptions,
    bundleDescriptor: BundleDescriptor,
  ) {
    this._options = bundleOptions;
    this._descriptor = bundleDescriptor;
    this._tasks = {};
    this._timers = {};
    this._invocations = {};
    this._invocationId = 0;
  }

  /**
   * Schedule a method call.
   *
   * @param {function} apiCall - the function for an API call.
   * @param {Object} request - the request object to be bundled with others.
   * @param {APICallback} callback - the callback to be called when the method finished.
   * @return {function()} - the function to cancel the scheduled invocation.
   */
  schedule(
    apiCall: SimpleCallbackFunction,
    request: {[index: string]: Array<{}> | string},
    callback?: TaskCallback,
  ) {
    const bundleId = computeBundleId(
      request,
      this._descriptor.requestDiscriminatorFields,
    );
    callback = (callback || noop) as TaskCallback;
    if (bundleId === undefined) {
      warn(
        'bundling_schedule_bundleid_undefined',
        'The request does not have enough information for request bundling. ' +
          `Invoking immediately. Request: ${JSON.stringify(request)} ` +
          `discriminator fields: ${this._descriptor.requestDiscriminatorFields}`,
      );
      return apiCall(request, callback);
    }
    if (request[this._descriptor.bundledField] === undefined) {
      warn(
        'bundling_no_bundled_field',
        `Request does not contain field ${this._descriptor.bundledField} that must present for bundling. ` +
          `Invoking immediately. Request: ${JSON.stringify(request)}`,
      );
      return apiCall(request, callback);
    }

    if (!(bundleId in this._tasks)) {
      this._tasks[bundleId] = new Task(
        apiCall,
        request,
        this._descriptor.bundledField,
        this._descriptor.subresponseField,
      );
    }
    let task = this._tasks[bundleId];
    callback.id = String(this._invocationId++);
    this._invocations[callback.id] = bundleId;

    const bundledField = request[this._descriptor.bundledField] as Array<{}>;
    const elementCount = bundledField.length;
    let requestBytes = 0;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    bundledField.forEach(obj => {
      requestBytes += this._descriptor.byteLengthFunction(obj);
    });

    const countLimit = this._options.elementCountLimit || 0;
    const byteLimit = this._options.requestByteLimit || 0;

    if (
      (countLimit > 0 && elementCount > countLimit) ||
      (byteLimit > 0 && requestBytes >= byteLimit)
    ) {
      let message;
      if (countLimit > 0 && elementCount > countLimit) {
        message =
          'The number of elements ' +
          elementCount +
          ' exceeds the limit ' +
          this._options.elementCountLimit;
      } else {
        message =
          'The required bytes ' +
          requestBytes +
          ' exceeds the limit ' +
          this._options.requestByteLimit;
      }
      const error = new GoogleError(message);
      error.code = Status.INVALID_ARGUMENT;
      callback(error);
      return {
        cancel: noop,
      };
    }

    const existingCount = task.getElementCount();
    const existingBytes = task.getRequestByteSize();

    if (
      (countLimit > 0 && elementCount + existingCount >= countLimit) ||
      (byteLimit > 0 && requestBytes + existingBytes >= byteLimit)
    ) {
      this._runNow(bundleId);
      this._tasks[bundleId] = new Task(
        apiCall,
        request,
        this._descriptor.bundledField,
        this._descriptor.subresponseField,
      );
      task = this._tasks[bundleId];
    }

    task.extend(bundledField, requestBytes, callback);
    const ret = {
      cancel() {
        self._cancel(callback!.id!);
      },
    };

    const countThreshold = this._options.elementCountThreshold || 0;
    const sizeThreshold = this._options.requestByteThreshold || 0;
    if (
      (countThreshold > 0 && task.getElementCount() >= countThreshold) ||
      (sizeThreshold > 0 && task.getRequestByteSize() >= sizeThreshold)
    ) {
      this._runNow(bundleId);
      return ret;
    }

    if (!(bundleId in this._timers) && this._options.delayThreshold! > 0) {
      this._timers[bundleId] = setTimeout(() => {
        delete this._timers[bundleId];
        this._runNow(bundleId);
      }, this._options.delayThreshold) as unknown as NodeJS.Timeout;
    }

    return ret;
  }

  /**
   * Clears scheduled timeout if it exists.
   *
   * @param {String} bundleId - the id for the task whose timeout needs to be
   *   cleared.
   * @private
   */
  private _maybeClearTimeout(bundleId: string) {
    if (bundleId in this._timers) {
      const timerId = this._timers[bundleId];
      delete this._timers[bundleId];
      clearTimeout(timerId);
    }
  }

  /**
   * Cancels an event.
   *
   * @param {String} id - The id for the event in the task.
   * @private
   */
  private _cancel(id: string) {
    if (!(id in this._invocations)) {
      return;
    }
    const bundleId = this._invocations[id];
    if (!(bundleId in this._tasks)) {
      return;
    }

    const task = this._tasks[bundleId];
    delete this._invocations[id];
    if (task.cancel(id)) {
      this._maybeClearTimeout(bundleId);
      delete this._tasks[bundleId];
    }
  }

  /**
   * Invokes a task.
   *
   * @param {String} bundleId - The id for the task.
   * @private
   */
  _runNow(bundleId: string) {
    if (!(bundleId in this._tasks)) {
      warn('bundle_runnow_bundleid_unknown', `No such bundleid: ${bundleId}`);
      return;
    }
    this._maybeClearTimeout(bundleId);
    const task = this._tasks[bundleId];
    delete this._tasks[bundleId];

    task.run().forEach(id => {
      delete this._invocations[id];
    });
  }
}
