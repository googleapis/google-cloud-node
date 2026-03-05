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

import {ResourceStream} from '@google-cloud/paginator';
import {Readable} from 'stream';

import {ReadStream} from './read_stream';
import * as protos from '../../protos/protos';
import {TableReference, ReadClient} from './read_client';
import {DataFormat} from './data_format';
import {logger} from '../util/logger';

type ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IReadRowsResponse;
type ReadSessionInfo = protos.google.cloud.bigquery.storage.v1.IReadSession;
const ReadSessionInfo = protos.google.cloud.bigquery.storage.v1.ReadSession;
type AvroArrowSerializationOptions = {
  picosTimestampPrecision: protos.google.cloud.bigquery.storage.v1.ArrowSerializationOptions.PicosTimestampPrecision;
};

export type GetStreamOptions = {
  /**
   * Row limit of the table.
   */
  maxResults?: number;
  /**
   * Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
   */
  selectedFields?: string;
  /**
   * Option to opt into higher precision timestamps for arrow readers.
   */
  arrowSerializationOptions?: AvroArrowSerializationOptions;
  /**
   * Option to opt into higher precision timestamps for avro readers.
   */
  avroSerializationOptions?: AvroArrowSerializationOptions;
};

/**
 * A ReadSession represents a Read Session from the BigQuery
 * Storage Read API.
 *
 * Read more on:https://cloud.google.com/bigquery/docs/reference/storage/rpc/google.cloud.bigquery.storage.v1#readsession
 *
 * @class
 * @memberof reader
 */
export class ReadSession {
  private _info: ReadSessionInfo | null;
  private _tableRef: TableReference;
  private _format: DataFormat;
  private _readStreams: ReadStream[];
  private _readClient: ReadClient;

  constructor(
    readClient: ReadClient,
    tableRef: TableReference,
    format: DataFormat,
  ) {
    this._info = null;
    this._format = format;
    this._tableRef = tableRef;
    this._readClient = readClient;
    this._readStreams = [];
  }

  getSessionInfo(): ReadSessionInfo | null {
    return this._info;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private trace(msg: string, ...otherArgs: any[]) {
    logger('session', `[session: ${this._info?.name}]`, msg, ...otherArgs);
  }

  private async getOrCreateSession(
    options?: GetStreamOptions,
  ): Promise<ReadSessionInfo> {
    if (this._info) {
      return this._info;
    }
    const session = await this._readClient.createReadSession({
      parent: `projects/${this._tableRef.projectId}`,
      table: `projects/${this._tableRef.projectId}/datasets/${this._tableRef.datasetId}/tables/${this._tableRef.tableId}`,
      dataFormat: this._format,
      selectedFields: options?.selectedFields?.split(','),
      arrowSerializationOptions: options?.arrowSerializationOptions,
      avroSerializationOptions: options?.avroSerializationOptions,
    });
    this.trace(
      'session created',
      session.name,
      session.streams,
      session.estimatedRowCount,
    );
    this._info = session;

    this._readStreams = [];
    for (const readStream of session.streams || []) {
      const r = await this._readClient.createReadStream(
        {
          streamName: readStream.name!,
          session,
        },
        options,
      );
      this._readStreams.push(r);
    }
    return session;
  }

  /**
   * Get a merged stream of ReadRowsResponse from all ReadStream
   * under this ReadSession.
   *
   * @param {GetStreamOptions} options
   */
  async getStream(
    options?: GetStreamOptions,
  ): Promise<ResourceStream<ReadRowsResponse>> {
    this.trace('getStream', options);

    await this.getOrCreateSession(options);

    const mergedStream = mergeStreams(
      this._readStreams.map(r => {
        const stream = r.getRowsStream();
        return stream;
      }),
    );
    const joined = Readable.from(mergedStream);
    this.trace('joined streams', joined);
    const stream = joined as ResourceStream<ReadRowsResponse>;
    return stream;
  }

  close() {
    this._readStreams.forEach(rs => {
      rs.close();
    });
  }
}

async function* mergeStreams(readables: Readable[]) {
  for (const readable of readables) {
    for await (const chunk of readable) {
      yield chunk;
    }
  }
}
