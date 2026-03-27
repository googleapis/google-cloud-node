// Copyright 2025 Google LLC
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

import {Transform, TransformCallback} from 'stream';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {google} from '../../protos/protos';
import * as SqlValues from './values';

/**
 * stream.Transform which buffers bytes from `ExecuteQuery` responses until
 * resumeToken is received. At that point all buffered messages are passed
 * forward.
 */
export class ByteBufferTransformer extends Transform {
  private messageQueue: Buffer[] = [];
  private messageBuffer: Uint8Array[] = [];
  private protoBytesEncoding?: BufferEncoding;

  constructor(protoBytesEncoding?: BufferEncoding) {
    super({objectMode: true, highWaterMark: 0});
    this.protoBytesEncoding = protoBytesEncoding;
  }

  private resetQueueAndBuffer = (
    estimatedBatchSize: number | null | undefined,
  ): void => {
    this.messageQueue = [];
    this.messageBuffer = new Array(estimatedBatchSize || 0);
  };

  private flushMessageBuffer = (
    batchChecksum: number,
    estimatedBatchSize: number | null | undefined,
  ): void => {
    if (this.messageBuffer.length === 0) {
      throw new Error('Recieved empty batch with non-zero checksum.');
    }
    const newBatch = Buffer.concat(this.messageBuffer);
    if (!SqlValues.checksumValid(newBatch, batchChecksum)) {
      throw new Error('Failed to validate next batch of results');
    }
    this.messageQueue.push(newBatch);
    this.messageBuffer = new Array(estimatedBatchSize || 0);
  };

  private pushMessages = (resumeToken: string | Uint8Array): void => {
    const token = SqlValues.ensureUint8Array(
      resumeToken,
      this.protoBytesEncoding,
    );
    if (this.messageBuffer.length !== 0) {
      throw new Error('Recieved incomplete batch of rows.');
    }
    this.push([this.messageQueue, token]);
    this.messageBuffer = [];
    this.messageQueue = [];
  };

  /**
   * Process a `PartialResultSet` message from the server.
   * For more info refer to the PartialResultSet protobuf definition.
   * @param partialResultSet The `PartialResultSet` message to process.
   */
  private processProtoRowsBatch = (
    partialResultSet: google.bigtable.v2.IPartialResultSet,
  ): void => {
    let handled = false;
    if (partialResultSet.reset) {
      this.resetQueueAndBuffer(partialResultSet.estimatedBatchSize);
      handled = true;
    }

    if (partialResultSet.protoRowsBatch?.batchData?.length) {
      this.messageBuffer.push(
        SqlValues.ensureUint8Array(
          partialResultSet.protoRowsBatch.batchData,
          this.protoBytesEncoding,
        ),
      );
      handled = true;
    }

    if (partialResultSet.batchChecksum) {
      this.flushMessageBuffer(
        partialResultSet.batchChecksum,
        partialResultSet.estimatedBatchSize,
      );
      handled = true;
    }

    if (
      partialResultSet.resumeToken &&
      partialResultSet.resumeToken.length > 0
    ) {
      this.pushMessages(partialResultSet.resumeToken);
      handled = true;
    }

    if (!handled) {
      throw new Error('Response did not contain any results!');
    }
  };

  _transform(
    chunk: google.bigtable.v2.ExecuteQueryResponse,
    _encoding: BufferEncoding,
    callback: TransformCallback,
  ) {
    let maybeError: Error | null = null;
    const reponse = chunk as google.bigtable.v2.ExecuteQueryResponse;
    try {
      switch (reponse.response) {
        case 'results': {
          this.processProtoRowsBatch(reponse.results!);
          break;
        }
        default:
          throw Error(`Response contains unknown type ${reponse.response}`);
      }
    } catch (error) {
      maybeError = new Error(
        `Internal Error. Failed to process response: ${error}`,
      );
    }
    callback(maybeError);
  }

  _flush(callback: TransformCallback): void {
    if (this.messageBuffer.length > 0) {
      callback(
        new Error(
          'Internal Error. Last message did not contain a resumeToken.',
        ),
      );
      return;
    }
    callback(null);
  }
}
