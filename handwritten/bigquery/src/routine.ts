/*!
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  ServiceObject,
  ResponseCallback,
  SetMetadataResponse,
} from '@google-cloud/common';
import {promisifyAll} from '@google-cloud/promisify';
import extend = require('extend');

import {Dataset, RoutineMetadata} from './dataset';

/**
 * Routine objects are returned by methods such as
 * {@link Dataset#routine}, {@link Dataset#createRoutine}, and
 * {@link Dataset#getRoutines}.
 *
 * @class
 * @param {Dataset} dataset {@link Dataset} instance.
 * @param {string} id The ID of the routine.
 *
 * @example
 * ```
 * const {BigQuery} = require('@google-cloud/bigquery');
 * const bigquery = new BigQuery();
 * const dataset = bigquery.dataset('my-dataset');
 *
 * const routine = dataset.routine('my_routine');
 * ```
 */
class Routine extends ServiceObject {
  constructor(dataset: Dataset, id: string) {
    const methods = {
      /**
       * Create a routine.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines/insert| Routines: insert API Documentation}
       *
       * @method Routine#create
       * @param {object} config A [routine resource]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines#Routine}.
       * @param {CreateRoutineCallback} [callback] The callback function.
       * @returns {Promise<CreateRoutineResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * const config = {
       *   arguments: [{
       *     name: 'x',
       *     dataType: {
       *       typeKind: 'INT64'
       *     }
       *   }],
       *   definitionBody: 'x * 3',
       *   routineType: 'SCALAR_FUNCTION',
       *   returnType: {
       *     typeKind: 'INT64'
       *   }
       * };
       *
       * routine.create(config, (err, routine, apiResponse) => {
       *   if (!err) {
       *     // The routine was created successfully.
       *   }
       * });
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [routine, apiResponse] = await routine.create(config);
       * ```
       */
      create: true,

      /**
       * @callback DeleteRoutineCallback
       * @param {?Error} err Request error, if any.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {array} DeleteRoutineResponse
       * @property {object} 0 The full API response.
       */
      /**
       * Deletes a routine.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines/delete| Routines: delete API Documentation}
       *
       * @method Routine#delete
       * @param {DeleteRoutineCallback} [callback] The callback function.
       * @returns {Promise<DeleteRoutineResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * routine.delete((err, apiResponse) => {
       *   if (!err) {
       *     // The routine was deleted successfully.
       *   }
       * });
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [apiResponse] = await routine.delete();
       * ```
       */
      delete: true,

      /**
       * @callback RoutineExistsCallback
       * @param {?Error} err Request error, if any.
       * @param {boolean} exists Indicates if the routine exists.
       */
      /**
       * @typedef {array} RoutineExistsResponse
       * @property {boolean} 0 Indicates if the routine exists.
       */
      /**
       * Check if the routine exists.
       *
       * @method Routine#exists
       * @param {RoutineExistsCallback} [callback] The callback function.
       * @returns {Promise<RoutineExistsResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * routine.exists((err, exists) => {});
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [exists] = await routine.exists();
       * ```
       */
      exists: true,

      /**
       * @callback GetRoutineCallback
       * @param {?Error} err Request error, if any.
       * @param {Routine} routine The routine.
       * @param {object} apiResponse The full API response body.
       */
      /**
       * @typedef {array} GetRoutineResponse
       * @property {Routine} 0 The routine.
       * @property {object} 1 The full API response body.
       */
      /**
       * Get a routine if it exists.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines/get| Routines: get API Documentation}
       *
       * @method Routine#get
       * @param {GetRoutineCallback} [callback] The callback function.
       * @returns {Promise<GetRoutineResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * routine.get((err, routine) => {});
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [routine2] = await routine.get();
       * ```
       */
      get: true,

      /**
       * @callback GetRoutineMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The routine metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {array} GetRoutineMetadataResponse
       * @property {object} 0 The routine metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * Get the metadata associated with a routine.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines/get| Routines: get API Documentation}
       *
       * @method Routine#getMetadata
       * @param {GetRoutineMetadataCallback} [callback] The callback function.
       * @returns {Promise<GetRoutineMetadataResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * routine.getMetadata((err, metadata, apiResponse) => {});
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [metadata, apiResponse] = await routine.getMetadata();
       * ```
       */
      getMetadata: true,

      /**
       * @callback SetRoutineMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The routine metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {array} SetRoutineMetadataResponse
       * @property {object} 0 The routine metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * Update a routine.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines/update| Routines: update API Documentation}
       *
       * @method Routine#setMetadata
       * @param {object} metadata A [routine resource object]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/routines#Routine}.
       * @param {SetRoutineMetadataCallback} [callback] The callback function.
       * @returns {Promise<SetRoutineMetadataResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const routine = dataset.routine('my_routine');
       *
       * const updates = {
       *   description: 'The perfect description!'
       * };
       *
       * routine.setMetadata(updates, (err, metadata, apiResponse) => {});
       *
       * ```
       * @example If the callback is omitted a Promise will be returned
       * ```
       * const [metadata, apiResponse] = await routine.setMetadata(updates);
       * ```
       */
      setMetadata: {
        reqOpts: {
          method: 'PUT',
        },
      },
    };

    super({
      parent: dataset,
      baseUrl: '/routines',
      id,
      methods,
      createMethod: dataset.createRoutine.bind(dataset),
    });
  }

  setMetadata(metadata: RoutineMetadata): Promise<SetMetadataResponse>;
  setMetadata(metadata: RoutineMetadata, callback: ResponseCallback): void;
  setMetadata(
    metadata: RoutineMetadata,
    callback?: ResponseCallback,
  ): void | Promise<SetMetadataResponse> {
    // per the python client, it would appear that in order to update a routine
    // you need to send the routine in its entirety, not just the updated fields
    void this.getMetadata(
      (err: Error | null, fullMetadata: RoutineMetadata) => {
        if (err) {
          callback!(err);
          return;
        }

        const updatedMetadata = extend(true, {}, fullMetadata, metadata);
        void super.setMetadata(updatedMetadata, callback!);
      },
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Routine);

export {Routine};
