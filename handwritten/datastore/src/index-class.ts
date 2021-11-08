// Copyright 2020 Google LLC
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

import {CallOptions, ServiceError} from 'google-gax';
import {promisifyAll} from '@google-cloud/promisify';

import {Datastore} from './';
import {google} from '../protos/protos';

export interface GenericIndexCallback<T> {
  (
    err?: ServiceError | null,
    index?: Index | null,
    apiResponse?: T | null
  ): void;
}

export type GetIndexCallback = GenericIndexCallback<IIndex>;
export type GetIndexResponse = [Index, IIndex];

export type IndexGetMetadataCallback = (
  err?: ServiceError | null,
  metadata?: IIndex | null
) => void;
export type IndexGetMetadataResponse = [IIndex];

export interface GetIndexesOptions {
  filter?: string;
  gaxOptions?: CallOptions;
  pageSize?: number;
  pageToken?: string;
  autoPaginate?: boolean;
}
export type GetIndexesResponse = [
  Index[],
  GetIndexesOptions,
  google.datastore.admin.v1.IListIndexesResponse
];
export type GetIndexesCallback = (
  err?: ServiceError | null,
  indexes?: Index[],
  nextQuery?: GetIndexesOptions,
  apiResponse?: google.datastore.admin.v1.IListIndexesResponse
) => void;

export type IIndex = google.datastore.admin.v1.IIndex;

/**
 * @class
 * @param {Datastore} datastore The parent instance of this index.
 * @param {string} id The index name or id.
 *
 * @example
 * ```
 * const {Datastore} = require('@google-cloud/datastore');
 * const datastore = new Datastore();
 * const index = datastore.index('my-index');
 * ```
 */
export class Index {
  datastore: Datastore;
  id: string;
  metadata?: IIndex;

  constructor(datastore: Datastore, id: string) {
    this.datastore = datastore;
    this.id = id.split('/').pop()!;
  }

  /**
   * Get an index if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Index} callback.index The Index instance.
   * @param {object} callback.apiResponse The full API response.
   */
  get(gaxOptions?: CallOptions): Promise<GetIndexResponse>;
  get(callback: GetIndexCallback): void;
  get(gaxOptions: CallOptions, callback: GetIndexCallback): void;
  get(
    gaxOptionsOrCallback?: CallOptions | GetIndexCallback,
    cb?: GetIndexCallback
  ): void | Promise<GetIndexResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.getMetadata(gaxOpts, (err, metadata) => {
      callback(err, err ? null : this, metadata);
    });
  }

  /**
   * Get the metadata of this index.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.metadata The metadata.
   */
  getMetadata(gaxOptions?: CallOptions): Promise<IndexGetMetadataResponse>;
  getMetadata(callback: IndexGetMetadataCallback): void;
  getMetadata(
    gaxOptions: CallOptions,
    callback: IndexGetMetadataCallback
  ): void;
  getMetadata(
    gaxOptionsOrCallback?: CallOptions | IndexGetMetadataCallback,
    cb?: IndexGetMetadataCallback
  ): void | Promise<IndexGetMetadataResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.datastore.request_(
      {
        client: 'DatastoreAdminClient',
        method: 'getIndex',
        reqOpts: {
          indexId: this.id,
        },
        gaxOpts,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }
        callback(err as ServiceError, resp);
      }
    );
  }

  // @TODO implement create()
  // @TODO implement delete()
  // @TODO implement exists()
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Index);
