// Copyright 2016 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*!
 * @module common/operation
 */

import {
  Metadata,
  MetadataCallback,
  ServiceObject,
  ServiceObjectConfig,
} from './service-object';
import {ApiError} from './util';
import {promisify} from 'util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Operation<T = any> extends ServiceObject<T> {
  completeListeners: number;
  hasActiveListeners: boolean;

  /**
   * An Operation object allows you to interact with APIs that take longer to
   * process things.
   *
   * @constructor
   * @alias module:common/operation
   *
   * @param {object} config - Configuration object.
   * @param {module:common/service|module:common/serviceObject|module:common/grpcService|module:common/grpcServiceObject} config.parent - The parent object.
   */
  constructor(config: ServiceObjectConfig) {
    const methods = {
      /**
       * Checks to see if an operation exists.
       */
      exists: true,

      /**
       * Retrieves the operation.
       */
      get: true,

      /**
       * Retrieves metadata for the operation.
       */
      getMetadata: {
        reqOpts: {
          name: config.id,
        },
      },
    };

    config = Object.assign(
      {
        baseUrl: '',
      },
      config,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config.methods = (config.methods || methods) as any;
    super(config);
    this.completeListeners = 0;
    this.hasActiveListeners = false;
    this.listenForEvents_();
  }

  /**
   * Wraps the `complete` and `error` events in a Promise.
   *
   * @return {Promise}
   */
  promise() {
    return new Promise((resolve, reject) => {
      this.on('error', reject).on('complete', (metadata: {}) => {
        resolve([metadata]);
      });
    });
  }

  /**
   * Begin listening for events on the operation. This method keeps track of how
   * many "complete" listeners are registered and removed, making sure polling
   * is handled automatically.
   *
   * As long as there is one active "complete" listener, the connection is open.
   * When there are no more listeners, the polling stops.
   *
   * @private
   */
  protected listenForEvents_() {
    this.on('newListener', (event: string) => {
      if (event === 'complete') {
        this.completeListeners++;
        if (!this.hasActiveListeners) {
          this.hasActiveListeners = true;
          void this.startPolling_();
        }
      }
    });

    this.on('removeListener', (event: string) => {
      if (event === 'complete' && --this.completeListeners === 0) {
        this.hasActiveListeners = false;
      }
    });
  }

  /**
   * Poll for a status update. Returns null for an incomplete
   * status, and metadata for a complete status.
   *
   * @private
   */
  protected poll_(callback: MetadataCallback): void {
    void this.getMetadata((err: ApiError, body: Metadata) => {
      if (err || body!.error) {
        callback(err || (body!.error as Error));
        return;
      }

      if (!body!.done) {
        callback(null);
        return;
      }

      callback(null, body);
    });
  }

  /**
   * Poll `getMetadata` to check the operation's status. This runs a loop to
   * ping the API on an interval.
   *
   * Note: This method is automatically called once a "complete" event handler
   * is registered on the operation.
   *
   * @private
   */
  protected async startPolling_() {
    if (!this.hasActiveListeners) {
      return;
    }
    try {
      const metadata = await promisify(this.poll_.bind(this))();
      if (!metadata) {
        setTimeout(this.startPolling_.bind(this), this.pollIntervalMs || 500);
        return;
      }
      this.emit('complete', metadata);
    } catch (err) {
      this.emit('error', err);
    }
  }
}
