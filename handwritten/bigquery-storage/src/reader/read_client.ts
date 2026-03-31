// Copyright 2024 Google LLC
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
import {BigQueryReadClient} from '../v1';
import {ReadStream} from './read_stream';
import {TableReader} from './table_reader';
import {ArrowTableReader} from './arrow_reader';
import {DataFormat} from './data_format';

type CreateReadSessionRequest =
  protos.google.cloud.bigquery.storage.v1.ICreateReadSessionRequest;
type ReadSession = protos.google.cloud.bigquery.storage.v1.IReadSession;
type AvroArrowSerializationOptions = {
  picosTimestampPrecision: protos.google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision;
};

export type TableReference = {
  /**
   * Required. The ID of the dataset containing this table.
   */
  datasetId?: string;
  /**
   * Required. The ID of the project containing this table.
   */
  projectId?: string;
  /**
   * Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.
   */
  tableId?: string;
};

/**
 *  BigQuery Read API Client.
 *  The Read API can be used to read data to BigQuery.
 *
 *  This class provides the ability to make remote calls to the backing service through method
 *  calls that map to API methods.
 *
 *  For supplementary information about the Read API, see:
 *  https://cloud.google.com/bigquery/docs/read-api
 *
 * @class
 * @memberof reader
 */
export class ReadClient {
  private _client: BigQueryReadClient;

  constructor(opts?: ClientOptions) {
    const baseOptions = {
      'grpc.keepalive_time_ms': 30 * 1000,
      'grpc.keepalive_timeout_ms': 10 * 1000,
      'grpc.use_local_subchannel_pool': 0,
    };
    this._client = new BigQueryReadClient({
      ...baseOptions,
      ...opts,
    });
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
  };

  getClient = (): BigQueryReadClient => {
    return this._client;
  };

  setClient = (client: BigQueryReadClient): void => {
    this._client = client;
  };

  /**
   * Creates a new read session. A read session divides the contents of a
   * BigQuery table into one or more streams, which can then be used to read
   * data from the table. The read session also specifies properties of the
   * data to be read, such as a list of columns or a push-down filter describing
   * the rows to be returned.
   *
   * A particular row can be read by at most one stream. When the caller has
   * reached the end of each stream in the session, then all the data in the
   * table has been read.
   *
   * Data is assigned to each stream such that roughly the same number of
   * rows can be read from each stream. Because the server-side unit for
   * assigning data is collections of rows, the API does not guarantee that
   * each stream will return the same number or rows. Additionally, the
   * limits are enforced based on the number of pre-filtered rows, so some
   * filters can lead to lopsided assignments.
   *
   * Read sessions automatically expire 6 hours after they are created and do
   * not require manual clean-up by the caller.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Parent table that all the streams should belong to, in the form
   *   of `projects/{project}`.
   * @param {string} request.table
   *   Parent table that all the streams should belong to, in the form
   *   of `projects/{project}/datasets/{dataset}/tables/{table}`.
   * @returns {Promise<string>}} - The promise which resolves to the streamId.
   */
  async createReadSession(request: {
    parent: string;
    table: string;
    dataFormat: DataFormat;
    selectedFields?: string[];
    arrowSerializationOptions?: AvroArrowSerializationOptions;
    avroSerializationOptions?: AvroArrowSerializationOptions;
  }): Promise<ReadSession> {
    await this.initialize();
    const {table, parent, dataFormat, selectedFields} = request;
    const maxWorkerCount = 1;
    const maxStreamCount = 0;
    const createReq = {
      parent,
      readSession: {
        table,
        dataFormat,
        readOptions: {
          selectedFields: selectedFields,
        },
      },
      preferredMinStreamCount: maxWorkerCount,
      maxStreamCount: maxStreamCount,
    };
    if (request.arrowSerializationOptions) {
      Object.assign(createReq.readSession.readOptions, {
        arrowSerializationOptions: request.arrowSerializationOptions,
      });
    }
    if (request.avroSerializationOptions) {
      Object.assign(createReq.readSession.readOptions, {
        avroSerializationOptions: request.avroSerializationOptions,
      });
    }
    const [response] = await this._client.createReadSession(createReq);
    if (typeof [response] === undefined) {
      throw new gax.GoogleError(`${response}`);
    }
    return response;
  }

  /**
   * Creates a ReadStream to the given stream name and ReadSession.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.streamName
   *   Required. The id/name of read stream to read from.
   * @param {string} request.session
   *   Required. Reference to the ReadSession. See `createReadSession`.
   * @returns {Promise<string>}} - The promise which resolves to the `ReadStream`.
   */
  async createReadStream(
    request: {
      streamName: string;
      session: ReadSession;
    },
    options?: CallOptions,
  ): Promise<ReadStream> {
    await this.initialize();
    const {streamName, session} = request;
    try {
      const stream = new ReadStream(streamName, session, this, options);
      return stream;
    } catch (err) {
      throw new Error('read stream connection failed:' + err);
    }
  }

  async createTableReader(params: {
    table: TableReference;
  }): Promise<TableReader> {
    await this.initialize();
    const reader = new TableReader(this, params.table);
    return reader;
  }

  async createArrowTableReader(params: {
    table: TableReference;
  }): Promise<ArrowTableReader> {
    await this.initialize();
    const reader = new ArrowTableReader(this, params.table);
    return reader;
  }

  close() {
    this._client.close().catch(err => {
      throw err;
    });
  }
}
