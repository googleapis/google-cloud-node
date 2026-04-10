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

export type AdaptOptions = {
  addChangeSequenceNumber: boolean;
  addChangeType: boolean;
};

export type AdaptOption = (opts: AdaptOptions) => AdaptOptions;

/**
 * Add pseudocolumn `_CHANGE_TYPE` for BigQuery Change Data Capture.
 * Used to define the type of change to be professed for each row.
 * The pseudocolumn `_CHANGE_TYPE` only accepts the values UPSERT and DELETE.
 * See more: https://cloud.google.com/bigquery/docs/change-data-capture#specify_changes_to_existing_records
 */
export function withChangeType(): AdaptOption {
  return (opts: AdaptOptions) => ({
    ...opts,
    addChangeType: true,
  });
}

/**
 * Add pseudocolumn `_CHANGE_SEQUENCE_NUMBER` for BigQuery Change Data Capture.
 * Used to change behavior of ordering records with same primary key.
 * See more: https://cloud.google.com/bigquery/docs/change-data-capture#manage_custom_ordering
 */
export function withChangeSequenceNumber(): AdaptOption {
  return (opts: AdaptOptions) => ({
    ...opts,
    addChangeSequenceNumber: true,
  });
}
