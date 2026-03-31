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

import {Transform, TransformOptions, TransformCallback} from 'stream';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {google} from '../../protos/protos';
import {MetadataConsumer} from './metadataconsumer';

class DrainGuard {
  callback: () => void;

  constructor(callback: () => void) {
    this.callback = callback;
  }
}

export type BatchAndToken = [Buffer[], Uint8Array];

/**
 * This transformer is responsible for deserializing bytes sent from the
 * server to an appropriate object which can be used to construct rows.
 * Right now only google.bigtable.v2.ProtoRows is supported.
 */
export class ProtobufReaderTransformer extends Transform {
  metadataConsumer: MetadataConsumer;
  resumeToken: Uint8Array | null;

  constructor(metadataConsumer: MetadataConsumer, opts?: TransformOptions) {
    super({...opts, objectMode: true, highWaterMark: 1024});
    this.metadataConsumer = metadataConsumer;
    this.resumeToken = null;
  }

  _transform(
    batchAndToken: BatchAndToken | DrainGuard,
    _encoding: BufferEncoding,
    callback: TransformCallback,
  ) {
    if (batchAndToken instanceof DrainGuard) {
      batchAndToken.callback();
    } else {
      const maybeMetadata = this.metadataConsumer.getMetadata();
      if (maybeMetadata) {
        const [batches, resumeToken] = batchAndToken;
        this.resumeToken = resumeToken;
        const valuesBuffer: google.bigtable.v2.IValue[] = [];

        const expectedLength = maybeMetadata.columns.length;

        for (let batchIdx = 0; batchIdx < batches.length; batchIdx++) {
          const batch = batches[batchIdx];
          const protoRows = google.bigtable.v2.ProtoRows.decode(batch);

          if (protoRows.values.length % expectedLength) {
            callback(new Error('Internal error - received incomplete row.'));
            return;
          }

          for (
            let valueIdx = 0;
            valueIdx < protoRows.values.length;
            valueIdx++
          ) {
            valuesBuffer.push(protoRows.values[valueIdx]);
          }
        }

        if (valuesBuffer.length > 0) {
          for (let i = 0; i < valuesBuffer.length; i += expectedLength) {
            this.push(valuesBuffer.slice(i, i + expectedLength));
          }
        }
      } else {
        return callback(new Error('Internal error - missing metadata'));
      }
    }

    callback();
  }

  /**
   * @param callback guaranteed to be called **after** the last message
   * was processed.
   */
  onDrain = (callback: () => void) => {
    // Writable streams keep a buffer of objects to
    // process (in case of a Transform processing means calling _transform() method). Readable streams
    // keep a buffer of objects to be read by downstream processors. Transforms are both Writable and
    // Readable, thus they have one buffer for parameters to, and one buffer for results of
    // _transform() method.
    // Objects can end up in a writeable's buffer if they are written after previous write call
    // returned false but before 'drain' event is emitted or when a write happens while another
    // objects is processed.
    // Objects can end up in a readable's buffer if there are no downstream processors ready to accept
    // new objects (either there are none or at least one of them is paused).
    //
    // Our data pipeline looks as follows:
    // bigtable stream -> ByteBuffer transform -> Reader transform -> ...
    //
    // But if we include buffers in this diagram this becomes more complicated:
    //
    // (bigtable stream -> [readable buffer])
    // -> ([writable buffer] -> ByteBuffer transform() -> [readable buffer])
    // -> ([writable buffer] -> Reader transform() -> [readable buffer])
    // -> ...
    //
    // and each of these buffers can buffer requests that were (in readable) or were not (in readable)
    // already passed to _transform() method.
    // During the retry we have to recreate bigtable stream and discard all data stored in
    // the ByteBuffer, and perform a new request with an appropriate resumeToken.
    //
    // Passing an appropriate resumeToken is crucial to prevent duplicate or lost responses.
    //
    // So, how to obtain a resumption token? Let's try a few options:
    // We cannot take last resumeToken that was seen by ByteBuffer's _transform() method
    // - it is possible that there are some unprocessed events in ByteBuffer's writable buffer
    // that will be processed at some point.
    // The same applies to Reader's _transform(), writeable buffers are still there.
    //
    // Thus we see that we have to consider events waiting in the buffers and wait until they are
    // processed.
    this.write(new DrainGuard(callback));
  };
}
