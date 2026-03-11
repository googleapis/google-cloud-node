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
import * as protos from '../../protos/protos';

import {ReadClient} from './read_client';
import {logger} from '../util/logger';
import {Readable, Transform} from 'stream';

type ReadSession = protos.google.cloud.bigquery.storage.v1.IReadSession;
type ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IReadRowsResponse;

export type RemoveListener = {
  off: () => void;
};

/**
 * ReadStream is responsible for reading data from a GRPC read stream
 * connection against the Storage Read API readRows method.
 *
 * @class
 * @extends EventEmitter
 * @memberof reader
 */
export class ReadStream {
  private _streamName: string;
  private _offset: number;
  private _readClient: ReadClient;
  private _session: ReadSession;
  private _readStream: Readable | null;
  private _connection: gax.CancellableStream | null;
  private _callOptions?: gax.CallOptions;

  constructor(
    streamName: string,
    session: ReadSession,
    readClient: ReadClient,
    options?: gax.CallOptions,
  ) {
    this._streamName = streamName;
    this._session = session;
    this._offset = 0;
    this._readClient = readClient;
    this._connection = null;
    this._readStream = null;
    this._callOptions = options;
    this.open();
  }

  open() {
    if (this.isOpen()) {
      this.close();
    }
    const client = this._readClient.getClient();
    const connection = client.readRows(
      {
        readStream: this._streamName,
        offset: this._offset,
      },
      this._callOptions,
    );
    this._connection = connection;
    const passthrough = new Transform({
      objectMode: true,
      transform: (response: ReadRowsResponse, _, callback) => {
        this.processReadRowsResponse(response);
        callback(null, response);
      },
    });
    this._readStream = this._connection.pipe(passthrough);
    this._connection.on('error', this.handleError);
    this._connection.on('close', () => {
      this.trace('connection closed');
    });
    this._connection.on('pause', () => {
      this.trace('connection paused');
    });
    this._connection.on('resume', async () => {
      this.trace('connection resumed');
    });
    this._connection.on('end', () => {
      this.trace('connection ended');
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private trace(msg: string, ...otherArgs: any[]) {
    logger(
      'read_stream',
      `[streamName: ${this._streamName}]`,
      msg,
      ...otherArgs,
    );
  }

  private handleError = (err: gax.GoogleError) => {
    this.trace('on error', err, JSON.stringify(err));
    if (this.isRetryableError(err)) {
      this.reconnect();
      return;
    }
    this._readStream?.destroy(err);
    this._readStream = null;
  };

  private isRetryableError(err?: gax.GoogleError | null): boolean {
    if (!err) {
      return false;
    }
    const reconnectionErrorCodes = [
      gax.Status.ABORTED,
      gax.Status.CANCELLED,
      gax.Status.DEADLINE_EXCEEDED,
      gax.Status.INTERNAL,
      gax.Status.UNAVAILABLE,
    ];
    return !!err.code && reconnectionErrorCodes.includes(err.code);
  }

  private processReadRowsResponse(response: ReadRowsResponse) {
    if (!response.rowCount) {
      return;
    }
    const rowCount = parseInt(response.rowCount as string, 10);
    this._offset += rowCount;
  }

  /**
   * Get the name of the read stream associated with this connection.
   */
  getStreamName = (): string => {
    return this._streamName;
  };

  getReadSession(): ReadSession {
    return this._session;
  }

  getRowsStream(): Readable {
    return this._readStream!;
  }

  /**
   * Check if connection is open and ready to read data.
   */
  isOpen(): boolean {
    if (this._connection) {
      return !(this._connection.destroyed || this._connection.closed);
    }
    return false;
  }

  /**
   * Reconnect and re-open readRows channel.
   */
  reconnect() {
    this.trace('reconnect called');
    this.close();
    this.open();
  }

  /**
   * Close the read stream connection.
   */
  close() {
    if (this._connection) {
      this._connection.end();
      this._connection.removeAllListeners();
      this._connection.destroy();
      this._connection = null;
    }
    if (this._readStream) {
      this._readStream.destroy();
      this._readStream = null;
    }
  }
}
