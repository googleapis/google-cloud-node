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
import * as protos from '../../protos/protos';

type StorageError = protos.google.cloud.bigquery.storage.v1.IStorageError;

const StorageError = protos.google.cloud.bigquery.storage.v1.StorageError;

/**
 * The BigQuery Storage API service augments applicable errors with service-specific details in
 * the form of a StorageError message.
 *
 * @param {gax.GoogleError} err
 * @returns {google.cloud.bigquery.storage.v1.StorageError}
 */
export function parseStorageErrors(err: gax.GoogleError): StorageError[] {
  const storageErrors: StorageError[] = [];
  if (
    err.metadata &&
    err.metadata.get('google.cloud.bigquery.storage.v1.storageerror-bin')
  ) {
    const serrors = err.metadata.get(
      'google.cloud.bigquery.storage.v1.storageerror-bin',
    ) as Buffer[];
    for (const serr of serrors) {
      const storageError = StorageError.decode(serr);
      storageErrors.push(storageError);
    }
  }
  return storageErrors;
}
