/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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

import {ServiceObject, util} from '@google-cloud/common';
import {promisifyAll} from '@google-cloud/promisify';
import {toArray} from './util';
import * as extend from 'extend';
import {
  BigQuery,
  Job,
  Dataset,
  ResourceCallback,
  RequestCallback,
  JobRequest,
} from '.';
import {JobMetadata, JobOptions} from './job';
import bigquery from './types';

// This is supposed to be a @google-cloud/storage `File` type. The storage npm
// module includes these types, but is currently installed as a devDependency.
// Unless it's included as a production dependency, the types would not be
// included.  The storage module is fairly large, and only really needed for
// types.  We need to figure out how to include these types properly.
export interface File {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bucket: any;
  kmsKeyName?: string;
  userProject?: string;
  name: string;
  generation?: number;
}

export type JobMetadataCallback = RequestCallback<JobMetadata>;
export type JobMetadataResponse = [JobMetadata];

export type JobResponse = [Job, bigquery.IJob];
export type JobCallback = ResourceCallback<Job, bigquery.IJob>;

export type CreateExtractJobOptions =
  JobRequest<bigquery.IJobConfigurationExtract> & {
    format?: 'ML_TF_SAVED_MODEL' | 'ML_XGBOOST_BOOSTER';
  };

/**
 * The model export formats accepted by BigQuery.
 *
 * @type {array}
 * @private
 */
const FORMATS = ['ML_TF_SAVED_MODEL', 'ML_XGBOOST_BOOSTER'];

/**
 * Model objects are returned by methods such as {@link Dataset#model} and
 * {@link Dataset#getModels}.
 *
 * @class
 * @param {Dataset} dataset {@link Dataset} instance.
 * @param {string} id The ID of the model.
 *
 * @example
 * ```
 * const {BigQuery} = require('@google-cloud/bigquery');
 * const bigquery = new BigQuery();
 * const dataset = bigquery.dataset('my-dataset');
 *
 * const model = dataset.model('my-model');
 * ```
 */
class Model extends ServiceObject {
  dataset: Dataset;
  bigQuery: BigQuery;

  constructor(dataset: Dataset, id: string) {
    const methods = {
      /**
       * @callback DeleteModelCallback
       * @param {?Error} err Request error, if any.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Delete the model.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/models/delete| Models: delete API Documentation}
       *
       * @method Model#delete
       * @param {DeleteModelCallback} [callback] The callback function.
       * @param {?error} callback.err An error returned while making this
       *     request.
       * @param {object} callback.apiResponse The full API response.
       * @returns {Promise}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const model = dataset.model('my-model');
       *
       * model.delete((err, apiResponse) => {});
       *
       * ```
       * @example If the callback is omitted we'll return a Promise.
       * ```
       * const [apiResponse] = await model.delete();
       * ```
       * @example If successful, the response body is empty.
       * ```
       * ```
       */
      delete: true,

      /**
       * @callback ModelExistsCallback
       * @param {?Error} err Request error, if any.
       * @param {boolean} exists Indicates if the model exists.
       */
      /**
       * @typedef {array} ModelExistsResponse
       * @property {boolean} 0 Indicates if the model exists.
       */
      /**
       * Check if the model exists.
       *
       * @method Model#exists
       * @param {ModelExistsCallback} [callback] The callback function.
       * @param {?error} callback.err An error returned while making this
       *     request.
       * @param {boolean} callback.exists Whether the model exists or not.
       * @returns {Promise<ModelExistsResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const model = dataset.model('my-model');
       *
       * model.exists((err, exists) => {});
       *
       * ```
       * @example If the callback is omitted we'll return a Promise.
       * ```
       * const [exists] = await model.exists();
       * ```
       */
      exists: true,

      /**
       * @callback GetModelCallback
       * @param {?Error} err Request error, if any.
       * @param {Model} model The model.
       * @param {object} apiResponse The full API response body.
       */
      /**
       * @typedef {array} GetModelResponse
       * @property {Model} 0 The model.
       * @property {object} 1 The full API response body.
       */
      /**
       * Get a model if it exists.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/models/get| Models: get API Documentation}
       *
       * @method Model#get:
       * @param {GetModelCallback} [callback] The callback function.
       * @param {?error} callback.err An error returned while making this
       *     request.
       * @param {Model} callback.model The {@link Model}.
       * @param {object} callback.apiResponse The full API response.
       * @returns {Promise<GetModelResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const model = dataset.model('my-model');
       *
       * model.get(err => {
       *   if (!err) {
       *     // `model.metadata` has been populated.
       *   }
       * });
       *
       * ```
       * @example If the callback is omitted we'll return a Promise.
       * ```
       * await model.get();
       * ```
       */
      get: true,

      /**
       * @callback GetModelMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The model metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {array} GetModelMetadataResponse
       * @property {object} 0 The model metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * Return the metadata associated with the model.
       *
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/models/get| Models: get API Documentation}
       *
       * @method Model#getMetadata
       * @param {GetModelMetadataCallback} [callback] The callback function.
       * @param {?error} callback.err An error returned while making this
       *     request.
       * @param {object} callback.metadata The metadata of the model.
       * @param {object} callback.apiResponse The full API response.
       * @returns {Promise<GetModelMetadataResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const model = dataset.model('my-model');
       *
       * model.getMetadata((err, metadata, apiResponse) => {});
       *
       * ```
       * @example If the callback is omitted we'll return a Promise.
       * ```
       * const [metadata, apiResponse] = await model.getMetadata();
       * ```
       */
      getMetadata: true,

      /**
       * @callback SetModelMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The model metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {array} SetModelMetadataResponse
       * @property {object} 0 The model metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/models/patch| Models: patch API Documentation}
       *
       * @method Model#setMetadata
       * @param {object} metadata The metadata key/value object to set.
       * @param {SetModelMetadataCallback} [callback] The callback function.
       * @param {?error} callback.err An error returned while making this
       *     request.
       * @param {object} callback.metadata The updated metadata of the model.
       * @param {object} callback.apiResponse The full API response.
       * @returns {Promise<SetModelMetadataResponse>}
       *
       * @example
       * ```
       * const {BigQuery} = require('@google-cloud/bigquery');
       * const bigquery = new BigQuery();
       * const dataset = bigquery.dataset('my-dataset');
       * const model = dataset.model('my-model');
       *
       * const metadata = {
       *   friendlyName: 'TheBestModelEver'
       * };
       *
       * model.setMetadata(metadata, (err, metadata, apiResponse) => {});
       *
       * ```
       * @example If the callback is omitted we'll return a Promise.
       * ```
       * const [metadata, apiResponse] = await model.setMetadata(metadata);
       * ```
       */
      setMetadata: true,
    };

    super({
      parent: dataset,
      baseUrl: '/models',
      id,
      methods,
    });

    this.dataset = dataset;
    this.bigQuery = dataset.bigQuery;
  }

  /**
   * @callback JobCallback
   * @param {?Error} err Request error, if any.
   * @param {object} Job The [Job]{@link https://cloud.google.com/bigquery/docs/reference/v2/Job} resource.
   * @param {object} apiResponse The full API response.
   */
  /**
   * @typedef {array} JobResponse
   * @property {object} 0 The [Job]{@link https://cloud.google.com/bigquery/docs/reference/v2/Job} resource.
   * @property {object} 1 The full API response.
   */
  /**
   * Export model to Cloud Storage.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert| Jobs: insert API Documentation}
   *
   * @param {string|File} destination Where the model should be exported
   *    to. A string or {@link
   *    https://googleapis.dev/nodejs/storage/latest/File.html File}
   *    object.
   * @param {object} [options] The configuration object. For all extract job options, see [CreateExtractJobOptions]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationExtract}.
   * @param {string} [options.format] The format to export the data in.
   *    Allowed options are "ML_TF_SAVED_MODEL" or "ML_XGBOOST_BOOSTER".
   *    Default: "ML_TF_SAVED_MODEL".
   * @param {string} [options.jobId] Custom job id.
   * @param {string} [options.jobPrefix] Prefix to apply to the job id.
   * @param {JobCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Job} callback.job The job used to export the model.
   * @param {object} callback.apiResponse The full API response.
   * @returns {Promise<JobResponse>}
   *
   * @throws {Error} If a destination isn't a string or File object.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const dataset = bigquery.dataset('my-dataset');
   * const model = dataset.model('my-model');
   *
   * const extractedModel = 'gs://my-bucket/extracted-model';
   *
   * function callback(err, job, apiResponse) {
   *   // `job` is a Job object that can be used to check the status of the
   *   // request.
   * }
   *
   * //-
   * // To use the default options, just pass a string or a {@link
   * https://googleapis.dev/nodejs/storage/latest/File.html File}
   * object.
   * //
   * // Note: The default format is 'ML_TF_SAVED_MODEL'.
   * //-
   * model.createExtractJob(extractedModel, callback);
   *
   * //-
   * // If you need more customization, pass an `options` object.
   * //-
   * const options = {
   *   format: 'ML_TF_SAVED_MODEL',
   *   jobId: '123abc'
   * };
   *
   * model.createExtractJob(extractedModel, options, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * model.createExtractJob(extractedModel, options).then((data) => {
   *   const job = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  createExtractJob(
    destination: string | File,
    options?: CreateExtractJobOptions,
  ): Promise<JobResponse>;
  createExtractJob(
    destination: string | File,
    options: CreateExtractJobOptions,
    callback: JobCallback,
  ): void;
  createExtractJob(destination: string | File, callback: JobCallback): void;
  createExtractJob(
    destination: string | File,
    optionsOrCallback?: CreateExtractJobOptions | JobCallback,
    cb?: JobCallback,
  ): void | Promise<JobResponse> {
    let options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;

    options = extend(true, options, {
      destinationUris: (toArray(destination) as Array<File | string>).map(
        dest => {
          if (util.isCustomType(dest, 'storage/file')) {
            return (
              'gs://' + (dest as File).bucket.name + '/' + (dest as File).name
            );
          }

          if (typeof dest === 'string') {
            return dest;
          }
          throw new Error('Destination must be a string or a File object.');
        },
      ),
    });

    if (options.format) {
      options.format = options.format.toUpperCase() as typeof options.format;

      if (FORMATS.includes(options.format as string)) {
        options.destinationFormat = options.format!;
        delete options.format;
      } else {
        throw new Error('Destination format not recognized: ' + options.format);
      }
    }

    const body: JobOptions = {
      configuration: {
        extract: extend(true, options, {
          sourceModel: {
            datasetId: this.dataset.id,
            projectId: this.dataset.projectId,
            modelId: this.id,
          },
        }),
      },
    };

    if (options.jobPrefix) {
      body.jobPrefix = options.jobPrefix;
      delete options.jobPrefix;
    }

    if (options.jobId) {
      body.jobId = options.jobId;
      delete options.jobId;
    }

    if (body.configuration && options.reservation) {
      body.configuration.reservation = options.reservation;
      delete options.reservation;
    }

    this.bigQuery.createJob(body, callback!);
  }

  /**
   * @callback JobMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The job metadata.
   * @param {object} apiResponse The full API response.
   */
  /**
   * @typedef {array} JobMetadataResponse
   * @property {object} 0 The job metadata.
   * @property {object} 1 The full API response.
   */
  /**
   * Export model to Cloud Storage.
   *
   * @param {string|File} destination Where the model should be exported
   *    to. A string or {@link
   *    https://googleapis.dev/nodejs/storage/latest/File.html File}
   *    object.
   * @param {object} [options] The configuration object. For all extract job options, see [CreateExtractJobOptions]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationExtract}.
   * @param {string} [options.format] The format to export
   *    the data in. Allowed options are "ML_TF_SAVED_MODEL" or
   *    "ML_XGBOOST_BOOSTER". Default: "ML_TF_SAVED_MODEL".
   * @param {string} [options.jobId] Custom id for the underlying job.
   * @param {string} [options.jobPrefix] Prefix to apply to the underlying job id.
   * @param {JobMetadataCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {object} callback.apiResponse The full API response.
   * @returns {Promise<JobMetadataResponse>}
   *
   * @throws {Error} If destination isn't a string or File object.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const dataset = bigquery.dataset('my-dataset');
   * const model = dataset.model('my-model');
   *
   * const extractedModel = 'gs://my-bucket/extracted-model';
   *
   *
   * //-
   * function callback(err, job, apiResponse) {
   *   // `job` is a Job object that can be used to check the status of the
   *   // request.
   * }
   *
   * //-
   * // To use the default options, just pass a string or a {@link
   * https://googleapis.dev/nodejs/storage/latest/File.html File}
   * object.
   * //
   * // Note: The default format is 'ML_TF_SAVED_MODEL'.
   * //-
   * model.createExtractJob(extractedModel, callback);
   *
   * //-
   * // If you need more customization, pass an `options` object.
   * //-
   * const options = {
   *   format: 'ML_TF_SAVED_MODEL',
   *   jobId: '123abc'
   * };
   *
   * model.createExtractJob(extractedModel, options, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * model.createExtractJob(extractedModel, options).then((data) => {
   *   const job = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  extract(
    destination: string | File,
    options?: CreateExtractJobOptions,
  ): Promise<JobMetadataResponse>;
  extract(
    destination: string | File,
    options: CreateExtractJobOptions,
    callback?: JobMetadataCallback,
  ): void;
  extract(destination: string | File, callback?: JobMetadataCallback): void;
  extract(
    destination: string | File,
    optionsOrCallback?: CreateExtractJobOptions | JobMetadataCallback,
    cb?: JobMetadataCallback,
  ): void | Promise<JobMetadataResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;

    this.createExtractJob(destination, options, (err, job, resp) => {
      if (err) {
        callback!(err, resp);
        return;
      }

      job!.on('error', callback!).on('complete', metadata => {
        callback!(null, metadata);
      });
    });
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Model);

/**
 * Reference to the {@link Model} class.
 * @name module:@google-cloud/bigquery.Model
 * @see Model
 */
export {Model};
