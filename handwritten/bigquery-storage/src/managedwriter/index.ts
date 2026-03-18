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

/**
 * Package managedwriter provides an EXPERIMENTAL thick client around the
 * BigQuery storage API's BigQueryWriteClient.
 * More information about this new write client may also be found in
 * the public documentation: https://cloud.google.com/bigquery/docs/write-api
 *
 * It is EXPERIMENTAL and subject to change or removal without notice. This is primarily to signal that this
 * package may still make breaking changes to existing methods and functionality.
 *
 * @namespace managedwriter
 */

export {WriterClient} from './writer_client';
export {Writer} from './writer';
export {JSONWriter} from './json_writer';
export {
  DefaultStream,
  BufferedStream,
  CommittedStream,
  PendingStream,
} from './stream_types';
export {parseStorageErrors} from './error';
export {setLogFunction} from '../util/logger';
