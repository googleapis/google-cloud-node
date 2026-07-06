/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {callbackifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import {CallOptions} from 'google-gax';
import {
  CreateSinkCallback,
  CreateSinkRequest,
  DeleteCallback,
  DeleteResponse,
  Logging,
  LogSink,
} from '.';

export interface SinkMetadataCallback {
  (error: Error | null, response?: LogSink): void;
}

export type SinkMetadataResponse = [LogSink];

export interface SetSinkMetadata extends LogSink {
  gaxOptions?: CallOptions;
  // A unique service account just for the sink
  // https://cloud.google.com/logging/docs/api/tasks/exporting-logs#using_a_unique_writer_identity
  uniqueWriterIdentity?: boolean | string;
}

/**
 * A sink is an object that lets you to specify a set of log entries to export
 * to a particular destination. Cloud Logging lets you export log entries
 * to destinations including Cloud Storage buckets (for long term log
 * storage), Google BigQuery datasets (for log analysis), Google Pub/Sub (for
 * streaming to other applications).
 *
 * See {@link https://cloud.google.com/logging/docs/basic-concepts#sinks|Introduction to Sinks}
 *
 * @class
 *
 * @param {Logging} logging {@link Logging} instance.
 * @param {string} name Name of the sink.
 *
 * @example
 * ```
 * const {Logging} = require('@google-cloud/logging');
 * const logging = new Logging();
 * const sink = logging.sink('my-sink');
 * ```
 */
class Sink {
  logging: Logging;
  name: string;
  formattedName_: string;
  metadata?: LogSink;
  constructor(logging: Logging, name: string) {
    this.logging = logging;
    /**
     * @name Sink#name
     * @type {string}
     */
    this.name = name;
    this.formattedName_ = 'projects/' + logging.projectId + '/sinks/' + name;
  }

  /**
   * Create a sink.
   *
   * @param {CreateSinkRequest} config Config to set for the sink.
   * @param {CreateSinkCallback} [callback] Callback function.
   * @returns {Promise<CreateSinkResponse>}
   * @throws {Error} if a config object is not provided.
   * @see Logging#createSink
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const sink = logging.sink('my-sink');
   *
   * const config = {
   *   destination: {
   *     // ...
   *   }
   * };
   *
   * sink.create(config, (err, sink, apiResponse) => {
   *   if (!err) {
   *     // The sink was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * sink.create(config).then(data => {
   *   const sink = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * ```
   * @example <caption>include:samples/sinks.js</caption>
   * region_tag:logging_create_sink
   * Another example:
   */
  create(config: CreateSinkRequest): Promise<[Sink, LogSink]>;
  create(config: CreateSinkRequest, callback: CreateSinkCallback): void;
  create(config: CreateSinkRequest): Promise<[Sink, LogSink]> {
    return this.logging.createSink(this.name, config);
  }

  /**
   * @typedef {array} DeleteSinkResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DeleteSinkCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Delete the sink.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/delete|projects.sink.delete API Documentation}
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {DeleteSinkCallback} [callback] Callback function.
   * @returns {Promise<DeleteSinkResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const sink = logging.sink('my-sink');
   *
   * sink.delete((err, apiResponse) => {
   *   if (!err) {
   *     // The log was deleted.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * sink.delete().then(data => {
   *   const apiResponse = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/sinks.js</caption>
   * region_tag:logging_delete_sink
   * Another example:
   */
  delete(gaxOptions?: CallOptions): Promise<DeleteResponse>;
  delete(callback: DeleteCallback): void;
  delete(gaxOptions: CallOptions, callback: DeleteCallback): void;
  async delete(
    gaxOptions?: CallOptions | DeleteCallback
  ): Promise<DeleteResponse> {
    const projectId = await this.logging.auth.getProjectId();
    this.formattedName_ = 'projects/' + projectId + '/sinks/' + this.name;
    const reqOpts = {
      sinkName: this.formattedName_,
    };
    return this.logging.configService.deleteSink(
      reqOpts,
      gaxOptions as CallOptions
    );
  }

  /**
   * @typedef {array} GetSinkMetadataResponse
   * @property {object} 0 The {@link Sink} metadata.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetSinkMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The {@link Sink} metadata.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get the sink's metadata.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink|Sink Resource}
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/get|projects.sink.get API Documentation}
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {SinkMetadataCallback} [callback] Callback function.
   * @returns {Promise<SinkMetadataResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const sink = logging.sink('my-sink');
   *
   * sink.getMetadata((err, metadata, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * sink.getMetadata().then(data => {
   *   const metadata = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/sinks.js</caption>
   * region_tag:logging_get_sink
   * Another example:
   */
  getMetadata(gaxOptions?: CallOptions): Promise<SinkMetadataResponse>;
  getMetadata(callback: SinkMetadataCallback): void;
  getMetadata(gaxOptions: CallOptions, callback: SinkMetadataCallback): void;
  async getMetadata(
    gaxOptions?: CallOptions | SinkMetadataCallback
  ): Promise<SinkMetadataResponse> {
    const projectId = await this.logging.auth.getProjectId();
    this.formattedName_ = 'projects/' + projectId + '/sinks/' + this.name;
    const reqOpts = {
      sinkName: this.formattedName_,
    };

    [this.metadata] = await this.logging.configService.getSink(
      reqOpts,
      gaxOptions as CallOptions
    );
    return [this.metadata!];
  }

  /**
   * @typedef {array} SetSinkFilterResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback SetSinkFilterCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Set the sink's filter.
   *
   * This will override any filter that was previously set.
   *
   * See {@link https://cloud.google.com/logging/docs/view/advanced_filters|Advanced Logs Filters}
   *
   * @param {string} filter The new filter.
   * @param {SetSinkFilterCallback} [callback] Callback function.
   * @returns {Promise<SetSinkFilterResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const sink = logging.sink('my-sink');
   *
   * const filter = 'metadata.severity = ALERT';
   *
   * sink.setFilter(filter, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * sink.setFilter(filter).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  setFilter(filter: string): Promise<SinkMetadataResponse>;
  setFilter(filter: string, callback: SinkMetadataCallback): void;
  setFilter(filter: string): Promise<SinkMetadataResponse> {
    return this.setMetadata({
      filter,
    });
  }

  /**
   * @typedef {array} SetSinkMetadataResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback SetSinkMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Set the sink's metadata.
   *
   * Note: If the sink was previously created or updated with
   * uniqueWriterIdentity = true, then you must update the sink by setting
   * uniqueWriterIdentity = true. Read more about using a unique writer identity
   * here: https://cloud.google.com/logging/docs/api/tasks/exporting-logs#using_a_unique_writer_identity
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink|Sink Resource}
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/update|projects.sink.update API Documentation}
   *
   * @param {object} metadata See a
   *     [Sink
   * resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink).
   * @param {object} [metadata.gaxOptions] Request configuration options,
   *     outlined here:
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {SetSinkMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetSinkMetadataResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const sink = logging.sink('my-sink');
   *
   * const metadata = {
   *   filter: 'metadata.severity = ALERT'
   * };
   *
   * sink.setMetadata(metadata, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * sink.setMetadata(metadata).then(data => {
   *   const apiResponse = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/sinks.js</caption>
   * region_tag:logging_update_sink
   * Another example:
   */
  setMetadata(metadata: SetSinkMetadata): Promise<SinkMetadataResponse>;
  setMetadata(metadata: SetSinkMetadata, callback: SinkMetadataCallback): void;
  async setMetadata(metadata: SetSinkMetadata): Promise<SinkMetadataResponse> {
    const [currentMetadata] = await this.getMetadata();
    const uniqueWriterIdentity = metadata.uniqueWriterIdentity;
    delete metadata.uniqueWriterIdentity;
    let reqOpts = {
      sinkName: this.formattedName_,
      sink: extend({}, currentMetadata, metadata),
    };
    delete reqOpts.sink.gaxOptions;
    // Add user specified uniqueWriterIdentity boolean, if any.
    reqOpts = {
      ...reqOpts,
      ...(uniqueWriterIdentity && {uniqueWriterIdentity}),
    };
    [this.metadata] = await this.logging.configService.updateSink(
      reqOpts,
      metadata.gaxOptions
    );
    return [this.metadata!];
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will call a callbakc in the event
 * that a callback is provided.
 */
callbackifyAll(Sink);

/**
 * Reference to the {@link Sink} class.
 * @name module:@google-cloud/logging.Sink
 * @see Sink
 */
export {Sink};
