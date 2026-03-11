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

import * as protos from '../../protos/protos';

export type WriteStream = protos.google.cloud.bigquery.storage.v1.IWriteStream;
export type WriteStreamType = WriteStream['type'] | 'DEFAULT';

export const WriteStreamType =
  protos.google.cloud.bigquery.storage.v1.WriteStream.Type;

/**
 * DefaultStream most closely mimics the legacy bigquery
 * tabledata.insertAll semantics. Successful inserts are
 * committed immediately, and there's no tracking offsets as
 * all writes go into a "default" stream that always exists
 * for a table.
 *
 * @memberof managedwriter
 */
export const DefaultStream = 'DEFAULT';

/**
 * CommittedStream appends data immediately, but creates a
 * discrete stream for the work so that offset tracking can
 * be used to track writes.
 *
 * @memberof managedwriter
 */
export const CommittedStream = 'COMMITTED';

/**
 * BufferedStream is a form of checkpointed stream, that allows
 * you to advance the offset of visible rows via Flush operations.
 *
 * @memberof managedwriter
 */
export const BufferedStream = 'BUFFERED';

/**
 * PendingStream is a stream in which no data is made visible to
 * readers until the stream is finalized and committed explicitly.
 *
 * @memberof managedwriter
 */
export const PendingStream = 'PENDING';

export function streamTypeToEnum(
  streamType: WriteStreamType,
): WriteStream['type'] {
  switch (streamType) {
    case WriteStreamType.BUFFERED:
    case BufferedStream:
      return WriteStreamType.BUFFERED;
    case WriteStreamType.COMMITTED:
    case CommittedStream:
      return WriteStreamType.COMMITTED;
    case WriteStreamType.PENDING:
    case PendingStream:
      return WriteStreamType.PENDING;
    default:
      return WriteStreamType.TYPE_UNSPECIFIED;
  }
}
