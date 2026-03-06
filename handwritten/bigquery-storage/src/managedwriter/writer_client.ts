// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as gax from 'google-gax';
import type {CallOptions, ClientOptions} from 'google-gax';
import * as protos from '../../protos/protos';

import {BigQueryWriteClient} from '../v1';
import {
  WriteStreamType,
  DefaultStream,
  streamTypeToEnum,
  WriteStream,
} from './stream_types';
import {StreamConnection} from './stream_connection';

type StreamConnections = {
  connectionList: StreamConnection[];
};
type RetrySettings = {
  enableWriteRetries: boolean;
  maxRetryAttempts: number;
};
type CreateWriteStreamRequest =
  protos.google.cloud.bigquery.storage.v1.ICreateWriteStreamRequest;
type GetWriteStreamRequest =
  protos.google.cloud.bigquery.storage.v1.IGetWriteStreamRequest;
type WriteStreamView = protos.google.cloud.bigquery.storage.v1.WriteStreamView;
type BatchCommitWriteStreamsRequest =
  protos.google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsRequest;
type BatchCommitWriteStreamsResponse =
  protos.google.cloud.bigquery.storage.v1.IBatchCommitWriteStreamsResponse;
type FlushRowsRequest =
  protos.google.cloud.bigquery.storage.v1.IFlushRowsRequest;
type FlushRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IFlushRowsResponse;
type FinalizeWriteStreamRequest =
  protos.google.cloud.bigquery.storage.v1.IFinalizeWriteStreamRequest;
type FinalizeWriteStreamResponse =
  protos.google.cloud.bigquery.storage.v1.IFinalizeWriteStreamResponse;

/**
 *  BigQuery Write API Client.
 *  The Write API can be used to write data to BigQuery.
 *
 *  This class provides the ability to make remote calls to the backing service through method
 *  calls that map to API methods.
 *
 *  For supplementary information about the Write API, see:
 *  https://cloud.google.com/bigquery/docs/write-api
 *
 * @class
 * @memberof managedwriter
 */
export class WriterClient {
  private _client: BigQueryWriteClient;
  private _connections: StreamConnections;
  private _open: boolean;
  /**
   * Retry settings, only internal for now.
   * @private
   * @internal
   */
  _retrySettings: RetrySettings;

  constructor(opts?: ClientOptions) {
    const baseOptions = {
      'grpc.keepalive_time_ms': 30 * 1000,
      'grpc.keepalive_timeout_ms': 10 * 1000,
    };
    this._client = new BigQueryWriteClient({
      ...baseOptions,
      ...opts,
    });
    this._connections = {
      connectionList: [],
    };
    this._open = false;
    this._retrySettings = {
      enableWriteRetries: false,
      maxRetryAttempts: 4,
    };
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves when auth is complete.
   */
  initialize = async (): Promise<void> => {
    await this._client.initialize();
    this._open = true;
  };

  getClient = (): BigQueryWriteClient => {
    return this._client;
  };

  setClient = (client: BigQueryWriteClient): void => {
    this._client = client;
  };

  /**
   * Check if client is open and ready to send requests.
   */
  isOpen(): boolean {
    return this._open;
  }

  /**
   * Enables StreamConnections to automatically retry failed appends.
   *
   * Enabling retries is best suited for cases where users want to achieve at-least-once
   * append semantics. Use of automatic retries may complicate patterns where the user
   * is designing for exactly-once append semantics.
   */
  enableWriteRetries(enable: boolean) {
    this._retrySettings.enableWriteRetries = enable;
  }

  /**
   * Change max retries attempts on child StreamConnections.
   *
   * The default valuen is to retry 4 times.
   *
   * Only valid right now when write retries are enabled.
   * @see enableWriteRetries.
   */
  setMaxRetryAttempts(retryAttempts: number) {
    this._retrySettings.maxRetryAttempts = retryAttempts;
  }

  /**
   * Creates a write stream to the given table and return just the
   * streamId.
   *
   * Additionally, every table has a special stream named DefaultStream
   * to which data can be written. This stream doesn't need to be created using
   * createWriteStream. It is a stream that can be used simultaneously by any
   * number of clients. Data written to this stream is considered committed as
   * soon as an acknowledgement is received.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.streamType
   *   Required. The type of stream to create.
   * @param {string} request.destinationTable
   *   Required. Reference to the table to which the stream belongs, in the format
   *   of `projects/{project}/datasets/{dataset}/tables/{table}`.
   * @returns {Promise<string>}} - The promise which resolves to the streamId.
   */
  async createWriteStream(
    request: {
      streamType: WriteStreamType;
      destinationTable: string;
    },
    options?: CallOptions,
  ): Promise<string> {
    const stream = await this.createWriteStreamFullResponse(request, options);
    if (stream.name) {
      return stream.name;
    }
    return '';
  }

  /**
   * Creates a write stream to the given table and return all
   * information about it.
   *
   * Additionally, every table has a special stream named DefaultStream
   * to which data can be written. This stream doesn't need to be created using
   * createWriteStream. It is a stream that can be used simultaneously by any
   * number of clients. Data written to this stream is considered committed as
   * soon as an acknowledgement is received.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.streamType
   *   Required. The type of stream to create.
   * @param {string} request.destinationTable
   *   Required. Reference to the table to which the stream belongs, in the format
   *   of `projects/{project}/datasets/{dataset}/tables/{table}`.
   * @returns {Promise<WriteStream>}} - The promise which resolves to the WriteStream.
   */
  async createWriteStreamFullResponse(
    request: {
      streamType: WriteStreamType;
      destinationTable: string;
    },
    options?: CallOptions,
  ): Promise<WriteStream> {
    await this.initialize();
    const {streamType, destinationTable} = request;
    const createReq: CreateWriteStreamRequest = {
      parent: destinationTable,
      writeStream: {
        type: streamTypeToEnum(streamType),
      },
    };
    const [response] = await this._client.createWriteStream(createReq, options);
    if (typeof [response] === undefined) {
      throw new gax.GoogleError(`${response}`);
    }
    return response;
  }

  /**
   * Gets information about a write stream.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.streamId
   *   Required. Name of the stream to get, in the form of
   *   `projects/{project}/datasets/{dataset}/tables/{table}/streams/{stream}`
   * @param {WriteStreamView} request.view
   *   Indicates whether to get full or partial view of the WriteStream. If
   *   not set, view returned will be basic.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise<WriteStream>}} - The promise which resolves to the WriteStream.
   */
  async getWriteStream(
    request: {
      streamId: string;
      view?: WriteStreamView;
    },
    options?: CallOptions,
  ): Promise<WriteStream> {
    await this.initialize();
    const {streamId, view} = request;
    const getReq: GetWriteStreamRequest = {
      name: streamId,
      view,
    };
    const [response] = await this._client.getWriteStream(getReq, options);
    if (typeof [response] === undefined) {
      throw new gax.GoogleError(`${response}`);
    }
    return response;
  }

  /**
   * Open StreamConnection in which data can be appended to the given stream.
   *
   * If a stream is created beforehand with `createWriteStream`, the streamId can be passed here.
   *
   * Or destinationTable + streamType can be passed so the WriteStreamStream is created under the hood.
   *
   * @param {object} [request]
   * @param {string?} request.streamId
   *   Optional. The ID of the stream to open.
   * @param {string?} request.destinationTable
   *   Optional. Parent table that all the streams should belong to, in the form
   *   of `projects/{project}/datasets/{dataset}/tables/{table}`.
   * @param {string?} request.streamType
   *   Optional. The type of stream to create. If not specified, the default is `DEFAULT`.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {StreamConnection} - stream which rows can be appended to.
   */
  async createStreamConnection(
    request: {
      streamId?: string;
      destinationTable?: string;
      streamType?: WriteStreamType;
    },
    options?: CallOptions,
  ): Promise<StreamConnection> {
    await this.initialize();
    const {streamId, streamType, destinationTable} = request;
    try {
      const fullStreamId = await this.resolveStreamId(
        streamId,
        streamType,
        destinationTable,
      );
      const streamConnection = new StreamConnection(
        fullStreamId,
        this,
        options,
      );
      this._connections.connectionList.push(streamConnection);
      return streamConnection;
    } catch (err) {
      throw new Error('managed stream connection failed:' + err);
    }
  }

  private async resolveStreamId(
    streamId?: string,
    streamType?: WriteStreamType,
    destinationTable?: string,
  ): Promise<string> {
    if (streamId && streamId !== '') {
      if (streamId === DefaultStream) {
        if (destinationTable !== '') {
          return `${destinationTable}/streams/_default`;
        } else {
          throw new Error('destinationTable needed if DefaultStream informed');
        }
      }
      return streamId;
    }
    if (destinationTable) {
      if (streamType) {
        streamId = await this.createWriteStream({
          streamType,
          destinationTable,
        });
        return streamId;
      }
      return `${destinationTable}/streams/_default`;
    }
    throw new Error(
      'streamId or destinationTable required to create write stream',
    );
  }

  close() {
    this._connections.connectionList.map(conn => {
      conn.close();
    });
    this._connections = {
      connectionList: [],
    };
    this._open = false;
  }

  /**
   * Atomically commits a group of `PENDING` streams that belong to the same
   * `parent` table.
   *
   * Streams must be finalized before commit and cannot be committed multiple
   * times. Once a stream is committed, data in the stream becomes available
   * for read operations.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Parent table that all the streams should belong to, in the form
   *   of `projects/{project}/datasets/{dataset}/tables/{table}`.
   * @param {string[]} request.writeStreams
   *   Required. The group of streams that will be committed atomically.
   * @returns {Promise} - a promise which resolves to an {@link google.cloud.bigquery.storage.v1.BatchCommitWriteStreamsResponse | BatchCommitWriteStreamsResponse}.
   */
  async batchCommitWriteStream(
    request: BatchCommitWriteStreamsRequest,
  ): Promise<BatchCommitWriteStreamsResponse> {
    await this.initialize();
    const [res] = await this._client.batchCommitWriteStreams(request);
    return res;
  }

  /**
   * Flushes rows to a BUFFERED stream.
   *
   * If users are appending rows to BUFFERED stream, flush operation is
   * required in order for the rows to become available for reading. A
   * Flush operation flushes up to any previously flushed offset in a BUFFERED
   * stream, to the offset specified in the request.
   *
   * Flush is not supported on the DEFAULT stream, since it is not BUFFERED.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.writeStream
   *   Required. The stream that is the target of the flush operation.
   * @param {google.protobuf.Int64Value} request.offset
   *   Ending offset of the flush operation. Rows before this offset(including
   *   this offset) will be flushed.
   * @returns {Promise} - The promise which resolves to a {@link google.cloud.bigquery.storage.v1.FlushRowsResponse | FlushRowsResponse}.
   */
  async flushRows(request?: FlushRowsRequest): Promise<FlushRowsResponse> {
    await this.initialize();
    const [res] = await this._client.flushRows(request);
    return res;
  }

  /**
   * Finalize a write stream so that no new data can be appended to the
   * stream. Finalize is not supported on the DefaultStream.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Name of the stream to finalize, in the form of
   *   `projects/{project}/datasets/{dataset}/tables/{table}/streams/{stream}`.
   * @returns {Promise<FinalizeWriteStreamResponse>} - A promise which resolves to a {@link google.cloud.bigquery.storage.v1.FinalizeWriteStreamResponse | FinalizeWriteStreamResponse}.
   */
  async finalizeWriteStream(
    request: FinalizeWriteStreamRequest,
  ): Promise<FinalizeWriteStreamResponse> {
    await this.initialize();
    const [res] = await this._client.finalizeWriteStream(request);
    return res;
  }
}
