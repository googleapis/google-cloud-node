/*!
 * Copyright 2019 Google LLC
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
  ApiError,
  Service,
  DecorateRequestOptions,
  GoogleAuthOptions,
  util,
} from '@google-cloud/common';
import * as common from '@google-cloud/common';
import {paginator, ResourceStream} from '@google-cloud/paginator';
import {promisifyAll} from '@google-cloud/promisify';
import {PreciseDate} from '@google-cloud/precise-date';
import {
  toArray,
  isArray,
  isString,
  isObject,
  isDate,
  isBoolean,
  isNumber,
} from './util';
import * as Big from 'big.js';
import * as extend from 'extend';
import {randomUUID} from 'crypto';

import {Dataset, DatasetOptions} from './dataset';
import {Job, JobOptions, QueryResultsOptions} from './job';
import {
  Table,
  TableField,
  TableSchema,
  TableRow,
  TableRowField,
  JobCallback,
  JobResponse,
  RowMetadata,
} from './table';
import {
  GoogleErrorBody,
  RetryOptions,
} from '@google-cloud/common/build/src/util';
import bigquery from './types';
import {logger, setLogFunction} from './logger';

// Third-Party Re-exports
export {common};

export interface RequestCallback<T> {
  (err: Error | null, response?: T | null): void;
}

export interface ResourceCallback<T, R> {
  (err: Error | null, resource?: T | null, response?: R | null): void;
}

export type PagedResponse<T, Q, R> = [T[]] | [T[], Q | null, R];
export interface PagedCallback<T, Q, R> {
  (
    err: Error | null,
    resource?: T[] | null,
    nextQuery?: Q | null,
    response?: R | null,
  ): void;
}

export type JobRequest<J> = J & {
  jobId?: string;
  jobPrefix?: string;
  location?: string;
  projectId?: string;
  reservation?: string;
};

export type PagedRequest<P> = P & {
  autoPaginate?: boolean;
  maxApiCalls?: number;
};

export type QueryResultsResponse =
  | bigquery.IGetQueryResultsResponse
  | bigquery.IQueryResponse;

export type QueryRowsResponse = PagedResponse<
  RowMetadata,
  Query,
  QueryResultsResponse
>;
export type QueryRowsCallback = PagedCallback<
  RowMetadata,
  Query,
  QueryResultsResponse
>;

export type SimpleQueryRowsResponse = [RowMetadata[], bigquery.IJob];
export type SimpleQueryRowsCallback = ResourceCallback<
  RowMetadata[],
  bigquery.IJob
>;

type JobCreationMode = bigquery.IQueryRequest['jobCreationMode'];

export type Query = JobRequest<bigquery.IJobConfigurationQuery> & {
  destination?: Table;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any[] | {[param: string]: any};
  dryRun?: boolean;
  labels?: {[label: string]: string};
  types?: QueryParamTypes;
  job?: Job;
  maxResults?: number;
  jobTimeoutMs?: number;
  reservation?: string;
  pageToken?: string;
  wrapIntegers?: boolean | IntegerTypeCastOptions;
  parseJSON?: boolean;
  // Overrides default job creation mode set on the client.
  jobCreationMode?: JobCreationMode;
};

export type QueryParamTypeStruct = {
  [type: string]:
    | string
    | string[]
    | QueryParamTypeStruct
    | QueryParamTypeStruct[];
};
export type QueryParamTypes =
  | string[]
  | string[][]
  | QueryParamTypeStruct
  | QueryParamTypeStruct[];

export type QueryOptions = QueryResultsOptions;
export type QueryStreamOptions = {
  wrapIntegers?: boolean | IntegerTypeCastOptions;
  parseJSON?: boolean;
};
export type DatasetResource = bigquery.IDataset & {
  projectId?: string;
};
export type ValueType = bigquery.IQueryParameterType;

export type GetDatasetsOptions = PagedRequest<bigquery.datasets.IListParams> & {
  projectId?: string;
};

export type DatasetsResponse = PagedResponse<
  Dataset,
  GetDatasetsOptions,
  bigquery.IDatasetList
>;
export type DatasetsCallback = PagedCallback<
  Dataset,
  GetDatasetsOptions,
  bigquery.IDatasetList
>;

export type DatasetResponse = [Dataset, bigquery.IDataset];
export type DatasetCallback = ResourceCallback<Dataset, bigquery.IDataset>;

export type GetJobsOptions = PagedRequest<bigquery.jobs.IListParams>;
export type GetJobsResponse = PagedResponse<
  Job,
  GetJobsOptions,
  bigquery.IJobList
>;
export type GetJobsCallback = PagedCallback<
  Job,
  GetJobsOptions,
  bigquery.IJobList
>;

export type JobsQueryResponse = [Job, bigquery.IQueryResponse];
export type JobsQueryCallback = ResourceCallback<Job, bigquery.IQueryResponse>;

export interface BigQueryTimeOptions {
  hours?: number | string;
  minutes?: number | string;
  seconds?: number | string;
  fractional?: number | string;
}

export interface BigQueryDateOptions {
  year?: number | string;
  month?: number | string;
  day?: number | string;
}

export interface BigQueryDatetimeOptions {
  year?: string | number;
  month?: string | number;
  day?: string | number;
  hours?: string | number;
  minutes?: string | number;
  seconds?: string | number;
  fractional?: string | number;
}

export interface BigQueryRangeOptions {
  start?: BigQueryDate | BigQueryDatetime | BigQueryTimestamp | string;
  end?: BigQueryDate | BigQueryDatetime | BigQueryTimestamp | string;
}

export type ProvidedTypeArray = Array<ProvidedTypeStruct | string | []>;

export interface ProvidedTypeStruct {
  [key: string]: string | ProvidedTypeArray | ProvidedTypeStruct;
}

export type QueryParameter = bigquery.IQueryParameter;
export type ParameterMode = bigquery.IJobConfigurationQuery['parameterMode'];

export interface BigQueryOptions extends GoogleAuthOptions {
  /**
   * Automatically retry requests if the
   * response is related to rate limits or certain intermittent server errors.
   * We will exponentially backoff subsequent requests by default.
   *
   * Defaults to `true`.
   *
   * @deprecated Use retryOptions.
   */
  autoRetry?: boolean;
  /**
   * Maximum number of automatic retries
   * attempted before returning the error.
   *
   * Defaults to 3.
   *
   * @deprecated Use retryOptions.
   */
  maxRetries?: number;

  /**
   * Customize retry configuration for all requests in the SDK.
   * By default, a request is retried if the response is related to rate limits
   * or certain intermittent server errors.
   * We will exponentially backoff subsequent requests by default.
   *
   * More on the default retry predicate on the `shouldRetryRequest` method:
   * https://github.com/googleapis/nodejs-common/blob/main/src/util.ts
   *
   * Defaults:
   * - retryOptions.autoRetry: true
   * - retryOptions.maxRetries: 3
   */
  retryOptions?: RetryOptions;

  /**
   * The geographic location of all datasets and
   * jobs referenced and created through the client.
   */
  location?: string;
  /**
   * The value to be prepended to the User-Agent
   * header in API requests.
   */
  userAgent?: string;
  /**
   * The API endpoint of the service used to make requests.
   * Defaults to `bigquery.googleapis.com`.
   */
  apiEndpoint?: string;

  /**
   * The Trusted Cloud Domain (TPC) DNS of the service used to make requests.
   * Defaults to `googleapis.com`.
   */
  universeDomain?: string;

  /**
   * Controls the job creation mode used when executing queries that can be
   * accelerated via the jobs.Query API. Users may experience performance
   * improvements by leveraging the JOB_CREATION_OPTIONAL mode.
   */
  defaultJobCreationMode?: JobCreationMode;
}

export interface IntegerTypeCastOptions {
  integerTypeCastFunction: Function;
  fields?: string | string[];
}

export type IntegerTypeCastValue = {
  integerValue: string | number;
  schemaFieldName?: string;
};

export const PROTOCOL_REGEX = /^(\w*):\/\//;

/**
 * @typedef {object} BigQueryOptions
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link
 * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
 * Application Default Credentials}, your project ID will be detected
 * automatically.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [token] An OAUTH access token. If provided, we will not
 *     manage fetching, re-using, and re-minting access tokens.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 * @property {string[]} [scopes] Additional OAuth scopes to use in requests. For
 *     example, to access an external data source, you may need the
 *     `https://www.googleapis.com/auth/drive.readonly` scope.
 */

/**
 * In the following examples from this page and the other modules (`Dataset`,
 * `Table`, etc.), we are going to be using a dataset from
 * {@link http://goo.gl/f2SXcb| data.gov} of higher education institutions.
 *
 * We will create a table with the correct schema, import the public CSV file
 * into that table, and query it for data.
 *
 * @class
 *
 * See {@link https://cloud.google.com/bigquery/what-is-bigquery| What is BigQuery?}
 *
 * @param {BigQueryOptions} options Constructor options.
 *
 * @example Install the client library with <a href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install @google-cloud/bigquery
 *
 * ```
 * @example Import the client library
 * ```
 * const {BigQuery} = require('@google-cloud/bigquery');
 *
 * ```
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const bigquery = new BigQuery();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const bigquery = new BigQuery({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:bigquery_quickstart
 * Full quickstart example:
 */
export class BigQuery extends Service {
  location?: string;
  private _universeDomain: string;
  private _defaultJobCreationMode: JobCreationMode;

  createQueryStream(options?: Query | string): ResourceStream<RowMetadata> {
    // placeholder body, overwritten in constructor
    return new ResourceStream<RowMetadata>({}, () => {});
  }

  getDatasetsStream(options?: GetDatasetsOptions): ResourceStream<Dataset> {
    // placeholder body, overwritten in constructor
    return new ResourceStream<Dataset>({}, () => {});
  }

  getJobsStream(options?: GetJobsOptions): ResourceStream<Job> {
    // placeholder body, overwritten in constructor
    return new ResourceStream<Job>({}, () => {});
  }

  constructor(options: BigQueryOptions = {}) {
    let universeDomain = 'googleapis.com';
    const servicePath = 'bigquery';

    if (options.universeDomain) {
      universeDomain = BigQuery.sanitizeDomain(options.universeDomain);
    }

    const EMULATOR_HOST = process.env.BIGQUERY_EMULATOR_HOST;

    let apiEndpoint = `https://${servicePath}.${universeDomain}`;

    if (typeof EMULATOR_HOST === 'string') {
      apiEndpoint = BigQuery.sanitizeEndpoint(EMULATOR_HOST);
    }

    if (options.apiEndpoint) {
      apiEndpoint = BigQuery.sanitizeEndpoint(options.apiEndpoint);
    }

    options = Object.assign({}, options, {
      apiEndpoint,
    });

    const baseUrl = EMULATOR_HOST || `${options.apiEndpoint}/bigquery/v2`;

    const config = {
      apiEndpoint: options.apiEndpoint!,
      baseUrl,
      scopes: ['https://www.googleapis.com/auth/bigquery'],
      packageJson: require('../../package.json'),
      autoRetry: options.autoRetry,
      maxRetries: options.maxRetries,
      retryOptions: options.retryOptions,
    };

    if (options.scopes) {
      config.scopes = config.scopes.concat(options.scopes);
    }

    super(config, options);

    if (options.defaultJobCreationMode) {
      this._defaultJobCreationMode = options.defaultJobCreationMode;
    }

    this._universeDomain = universeDomain;
    this.location = options.location;
    /**
     * Run a query scoped to your project as a readable object stream.
     *
     * @method
     * @param {object} query Configuration object. See {@link BigQuery.query} for a complete
     *     list of options.
     *
     * @example
     * ```
     * const {BigQuery} = require('@google-cloud/bigquery');
     * const bigquery = new BigQuery();
     *
     * const query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT
     * 100';
     *
     * bigquery.createQueryStream(query)
     *   .on('error', console.error)
     *   .on('data', function(row) {
     *     // row is a result from your query.
     *   })
     *   .on('end', function() {
     *     // All rows retrieved.
     *   });
     *
     * //-
     * // If you anticipate many results, you can end a stream early to prevent
     * // unnecessary processing and API requests.
     * //-
     * bigquery.createQueryStream(query)
     *   .on('data', function(row) {
     *     this.end();
     *   });
     * ```
     */
    this.createQueryStream = paginator.streamify<RowMetadata>('queryAsStream_');

    /**
     * List all or some of the {@link Dataset} objects in your project as
     * a readable object stream.
     *
     * @param {object} [options] Configuration object. See
     *     {@link BigQuery.getDatasets} for a complete list of options.
     *
     * @example
     * ```
     * const {BigQuery} = require('@google-cloud/bigquery');
     * const bigquery = new BigQuery();
     *
     * bigquery.getDatasetsStream()
     *   .on('error', console.error)
     *   .on('data', function(dataset) {
     *     // dataset is a Dataset object.
     *   })
     *   .on('end', function() {
     *     // All datasets retrieved.
     *   });
     *
     * //-
     * // If you anticipate many results, you can end a stream early to prevent
     * // unnecessary processing and API requests.
     * //-
     * bigquery.getDatasetsStream()
     *   .on('data', function(dataset) {
     *     this.end();
     *   });
     * ```
     */
    this.getDatasetsStream = paginator.streamify<Dataset>('getDatasets');

    /**
     * List all or some of the {@link Job} objects in your project as a
     * readable object stream.
     *
     * @param {object} [options] Configuration object. See
     *     {@link BigQuery.getJobs} for a complete list of options.
     *
     * @example
     * ```
     * const {BigQuery} = require('@google-cloud/bigquery');
     * const bigquery = new BigQuery();
     *
     * bigquery.getJobsStream()
     *   .on('error', console.error)
     *   .on('data', function(job) {
     *     // job is a Job object.
     *   })
     *   .on('end', function() {
     *     // All jobs retrieved.
     *   });
     *
     * //-
     * // If you anticipate many results, you can end a stream early to prevent
     * // unnecessary processing and API requests.
     * //-
     * bigquery.getJobsStream()
     *   .on('data', function(job) {
     *     this.end();
     *   });
     * ```
     */
    this.getJobsStream = paginator.streamify<Job>('getJobs');

    // Disable `prettyPrint` for better performance.
    // https://github.com/googleapis/nodejs-bigquery/issues/858
    this.interceptors.push({
      request: (reqOpts: DecorateRequestOptions) => {
        return extend(true, {}, reqOpts, {qs: {prettyPrint: false}});
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private trace_(msg: string, ...otherArgs: any[]) {
    logger('[bigquery]', msg, ...otherArgs);
  }

  get universeDomain() {
    return this._universeDomain;
  }

  private static sanitizeEndpoint(url: string) {
    if (!PROTOCOL_REGEX.test(url)) {
      url = `https://${url}`;
    }
    return this.sanitizeDomain(url);
  }

  private static sanitizeDomain(url: string) {
    return url.replace(/\/+$/, ''); // Remove trailing slashes
  }

  /**
   * Merge a rowset returned from the API with a table schema.
   *
   * @private
   *
   * @param {object} schema
   * @param {array} rows
   * @param {object} options
   * @param {boolean|IntegerTypeCastOptions} options.wrapIntegers Wrap values of
   *     'INT64' type in {@link BigQueryInt} objects.
   *     If a `boolean`, this will wrap values in {@link BigQueryInt} objects.
   *     If an `object`, this will return a value returned by
   *     `wrapIntegers.integerTypeCastFunction`.
   *     Please see {@link IntegerTypeCastOptions} for options descriptions.
   * @param {array} options.selectedFields List of fields to return.
   * If unspecified, all fields are returned.
   * @param {array} options.parseJSON parse a 'JSON' field into a JSON object.
   * @returns Fields using their matching names from the table's schema.
   */
  static mergeSchemaWithRows_(
    schema: TableSchema | TableField | undefined,
    rows: TableRow[],
    options: {
      wrapIntegers: boolean | IntegerTypeCastOptions;
      selectedFields?: string[];
      parseJSON?: boolean;
      listParams?:
        | bigquery.tabledata.IListParams
        | bigquery.jobs.IGetQueryResultsParams;
    },
  ) {
    // deep copy schema fields to avoid mutation
    let schemaFields: TableField[] = extend(true, [], schema?.fields);
    let selectedFields: string[] = extend(true, [], options.selectedFields);
    if (options.selectedFields && options.selectedFields!.length > 0) {
      const selectedFieldsArray = options.selectedFields!.map(c => {
        return c.split('.');
      });

      const currentFields = selectedFieldsArray
        .map(c => c.shift())
        .filter(c => c !== undefined);

      //filter schema fields based on selected fields.
      schemaFields = schemaFields.filter(
        field =>
          currentFields
            .map(c => c!.toLowerCase())
            .indexOf(field.name!.toLowerCase()) >= 0,
      );
      selectedFields = selectedFieldsArray
        .filter(c => c.length > 0)
        .map(c => c.join('.'));
    }

    return toArray(rows).map(mergeSchema).map(flattenRows);

    function mergeSchema(row: TableRow) {
      return row.f!.map((field: TableRowField, index: number) => {
        const schemaField = schemaFields[index];
        let value = field.v;
        if (schemaField && schemaField.mode === 'REPEATED') {
          value = (value as TableRowField[]).map(val => {
            return convertSchemaFieldValue(schemaField, val.v, {
              ...options,
              selectedFields,
            });
          });
        } else {
          value = convertSchemaFieldValue(schemaField, value, {
            ...options,
            selectedFields,
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fieldObject: any = {};
        fieldObject[schemaField.name!] = value;
        return fieldObject;
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function flattenRows(rows: any[]) {
      return rows.reduce((acc, row) => {
        const key = Object.keys(row)[0];
        acc[key] = row[key];
        return acc;
      }, {});
    }
  }

  /**
   * The `DATE` type represents a logical calendar date, independent of time
   * zone. It does not represent a specific 24-hour time period. Rather, a given
   * DATE value represents a different 24-hour period when interpreted in
   * different time zones, and may represent a shorter or longer day during
   * Daylight Savings Time transitions.
   *
   * @param {object|string} value The date. If a string, this should be in the
   *     format the API describes: `YYYY-[M]M-[D]D`.
   *     Otherwise, provide an object.
   * @param {string|number} value.year Four digits.
   * @param {string|number} value.month One or two digits.
   * @param {string|number} value.day One or two digits.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const date = bigquery.date('2017-01-01');
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const date2 = bigquery.date({
   *   year: 2017,
   *   month: 1,
   *   day: 1
   * });
   * ```
   */
  static date(value: BigQueryDateOptions | string) {
    return new BigQueryDate(value);
  }

  /**
   * @param {object|string} value The date. If a string, this should be in the
   *     format the API describes: `YYYY-[M]M-[D]D`.
   *     Otherwise, provide an object.
   * @param {string|number} value.year Four digits.
   * @param {string|number} value.month One or two digits.
   * @param {string|number} value.day One or two digits.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const date = BigQuery.date('2017-01-01');
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const date2 = BigQuery.date({
   *   year: 2017,
   *   month: 1,
   *   day: 1
   * });
   * ```
   */

  date(value: BigQueryDateOptions | string) {
    return BigQuery.date(value);
  }

  /**
   * A `DATETIME` data type represents a point in time. Unlike a `TIMESTAMP`,
   * this does not refer to an absolute instance in time. Instead, it is the
   * civil time, or the time that a user would see on a watch or calendar.
   *
   * @method BigQuery.datetime
   * @param {object|string} value The time. If a string, this should be in the
   *     format the API describes: `YYYY-[M]M-[D]D[ [H]H:[M]M:[S]S[.DDDDDD]]`.
   *     Otherwise, provide an object.
   * @param {string|number} value.year Four digits.
   * @param {string|number} value.month One or two digits.
   * @param {string|number} value.day One or two digits.
   * @param {string|number} [value.hours] One or two digits (`00` - `23`).
   * @param {string|number} [value.minutes] One or two digits (`00` - `59`).
   * @param {string|number} [value.seconds] One or two digits (`00` - `59`).
   * @param {string|number} [value.fractional] Up to six digits for microsecond
   *     precision.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const datetime = BigQuery.datetime('2017-01-01 13:00:00');
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const datetime = BigQuery.datetime({
   *   year: 2017,
   *   month: 1,
   *   day: 1,
   *   hours: 14,
   *   minutes: 0,
   *   seconds: 0
   * });
   * ```
   */

  /**
   * A `DATETIME` data type represents a point in time. Unlike a `TIMESTAMP`,
   * this does not refer to an absolute instance in time. Instead, it is the
   * civil time, or the time that a user would see on a watch or calendar.
   *
   * @param {object|string} value The time. If a string, this should be in the
   *     format the API describes: `YYYY-[M]M-[D]D[ [H]H:[M]M:[S]S[.DDDDDD]]`.
   *     Otherwise, provide an object.
   * @param {string|number} value.year Four digits.
   * @param {string|number} value.month One or two digits.
   * @param {string|number} value.day One or two digits.
   * @param {string|number} [value.hours] One or two digits (`00` - `23`).
   * @param {string|number} [value.minutes] One or two digits (`00` - `59`).
   * @param {string|number} [value.seconds] One or two digits (`00` - `59`).
   * @param {string|number} [value.fractional] Up to six digits for microsecond
   *     precision.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const datetime = bigquery.datetime('2017-01-01 13:00:00');
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const datetime = bigquery.datetime({
   *   year: 2017,
   *   month: 1,
   *   day: 1,
   *   hours: 14,
   *   minutes: 0,
   *   seconds: 0
   * });
   * ```
   */
  static datetime(value: BigQueryDatetimeOptions | string) {
    return new BigQueryDatetime(value);
  }

  datetime(value: BigQueryDatetimeOptions | string) {
    return BigQuery.datetime(value);
  }

  /**
   * A `TIME` data type represents a time, independent of a specific date.
   *
   * @method BigQuery.time
   * @param {object|string} value The time. If a string, this should be in the
   *     format the API describes: `[H]H:[M]M:[S]S[.DDDDDD]`. Otherwise, provide
   *     an object.
   * @param {string|number} [value.hours] One or two digits (`00` - `23`).
   * @param {string|number} [value.minutes] One or two digits (`00` - `59`).
   * @param {string|number} [value.seconds] One or two digits (`00` - `59`).
   * @param {string|number} [value.fractional] Up to six digits for microsecond
   *     precision.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const time = BigQuery.time('14:00:00'); // 2:00 PM
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const time = BigQuery.time({
   *   hours: 14,
   *   minutes: 0,
   *   seconds: 0
   * });
   * ```
   */

  /**
   * A `TIME` data type represents a time, independent of a specific date.
   *
   * @param {object|string} value The time. If a string, this should be in the
   *     format the API describes: `[H]H:[M]M:[S]S[.DDDDDD]`. Otherwise, provide
   *     an object.
   * @param {string|number} [value.hours] One or two digits (`00` - `23`).
   * @param {string|number} [value.minutes] One or two digits (`00` - `59`).
   * @param {string|number} [value.seconds] One or two digits (`00` - `59`).
   * @param {string|number} [value.fractional] Up to six digits for microsecond
   *     precision.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const time = bigquery.time('14:00:00'); // 2:00 PM
   *
   * //-
   * // Alternatively, provide an object.
   * //-
   * const time = bigquery.time({
   *   hours: 14,
   *   minutes: 0,
   *   seconds: 0
   * });
   * ```
   */
  static time(value: BigQueryTimeOptions | string) {
    return new BigQueryTime(value);
  }

  time(value: BigQueryTimeOptions | string) {
    return BigQuery.time(value);
  }

  /**
   * A timestamp represents an absolute point in time, independent of any time
   * zone or convention such as Daylight Savings Time.
   *
   * The recommended input here is a `Date` or `PreciseDate` class.
   * If passing as a `string`, it should be Timestamp literals: https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#timestamp_literals.
   * When passing a `number` input, it should be epoch seconds in float representation.
   *
   * @method BigQuery.timestamp
   * @param {Date|string} value The time.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const timestamp = BigQuery.timestamp(new Date());
   * ```
   */
  static timestamp(value: Date | PreciseDate | string | number) {
    return new BigQueryTimestamp(value);
  }

  /**
   * A timestamp represents an absolute point in time, independent of any time
   * zone or convention such as Daylight Savings Time.
   *
   * The recommended input here is a `Date` or `PreciseDate` class.
   * If passing as a `string`, it should be Timestamp literals: https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#timestamp_literals.
   * When passing a `number` input, it should be epoch seconds in float representation.
   *
   * @param {Date|string|string|number} value The time.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const timestamp = bigquery.timestamp(new Date());
   * ```
   */
  timestamp(value: Date | PreciseDate | string | number) {
    return BigQuery.timestamp(value);
  }

  /**
   * A range represents contiguous range between two dates, datetimes, or timestamps.
   * The lower and upper bound for the range are optional.
   * The lower bound is inclusive and the upper bound is exclusive.
   *
   * @method BigQuery.range
   * @param {string|BigQueryRangeOptions} value The range API string or start/end with dates/datetimes/timestamp ranges.
   * @param {string} elementType The range element type - DATE|DATETIME|TIMESTAMP
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const timestampRange = BigQuery.range('[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)', 'TIMESTAMP');
   * ```
   */
  static range(
    value: string | BigQueryRangeOptions,
    elementType?: string,
  ): BigQueryRange {
    return new BigQueryRange(value, elementType);
  }

  /**
   * A range represents contiguous range between two dates, datetimes, or timestamps.
   * The lower and upper bound for the range are optional.
   * The lower bound is inclusive and the upper bound is exclusive.
   *
   * @param {string|BigQueryRangeOptions} value The range API string or start/end with dates/datetimes/timestamp ranges.
   * @param {string} elementType The range element type - DATE|DATETIME|TIMESTAMP
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const timestampRange = bigquery.range('[2020-10-01 12:00:00+08, 2020-12-31 12:00:00+08)', 'TIMESTAMP');
   * ```
   */
  range(value: string, elementType?: string): BigQueryRange {
    return BigQuery.range(value, elementType);
  }

  /**
   * A BigQueryInt wraps 'INT64' values. Can be used to maintain precision.
   *
   * @param {string|number|IntegerTypeCastValue} value The INT64 value to convert.
   * @param {IntegerTypeCastOptions} typeCastOptions Configuration to convert
   *     value. Must provide an `integerTypeCastFunction` to handle conversion.
   * @returns {BigQueryInt}
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * const largeIntegerValue = Number.MAX_SAFE_INTEGER + 1;
   *
   * const options = {
   *   integerTypeCastFunction: value => value.split(),
   * };
   *
   * const bqInteger = bigquery.int(largeIntegerValue, options);
   *
   * const customValue = bqInteger.valueOf();
   * // customValue is the value returned from your `integerTypeCastFunction`.
   * ```
   */
  static int(
    value: string | number | IntegerTypeCastValue,
    typeCastOptions?: IntegerTypeCastOptions,
  ) {
    return new BigQueryInt(value, typeCastOptions);
  }

  int(
    value: string | number | IntegerTypeCastValue,
    typeCastOptions?: IntegerTypeCastOptions,
  ) {
    return BigQuery.int(value, typeCastOptions);
  }

  /**
   * A geography value represents a surface area on the Earth
   * in Well-known Text (WKT) format.
   *
   * @param {string} value The geospatial data.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const geography = bigquery.geography('POINT(1, 2)');
   * ```
   */
  static geography(value: string) {
    return new Geography(value);
  }

  geography(value: string) {
    return BigQuery.geography(value);
  }

  /**
   * Convert an INT64 value to Number.
   *
   * @private
   * @param {object} value The INT64 value to convert.
   */
  static decodeIntegerValue_(value: IntegerTypeCastValue) {
    const num = Number(value.integerValue);
    if (!Number.isSafeInteger(num)) {
      throw new Error(
        'We attempted to return all of the numeric values, but ' +
          (value.schemaFieldName ? value.schemaFieldName + ' ' : '') +
          'value ' +
          value.integerValue +
          " is out of bounds of 'Number.MAX_SAFE_INTEGER'.\n" +
          "To prevent this error, please consider passing 'options.wrapIntegers' as\n" +
          '{\n' +
          '  integerTypeCastFunction: provide <your_custom_function>\n' +
          '  fields: optionally specify field name(s) to be custom casted\n' +
          '}\n',
      );
    }
    return num;
  }

  /**
   * Return a value's provided type.
   *
   * @private
   *
   * @throws {error} If the type provided is invalid.
   *
   * See {@link https://cloud.google.com/bigquery/data-types| Data Type}
   *
   * @param {*} providedType The type.
   * @returns {string} The valid type provided.
   */
  static getTypeDescriptorFromProvidedType_(
    providedType: string | ProvidedTypeStruct | ProvidedTypeArray,
  ): ValueType {
    // The list of types can be found in src/types.d.ts
    const VALID_TYPES = [
      'DATE',
      'DATETIME',
      'TIME',
      'TIMESTAMP',
      'BYTES',
      'NUMERIC',
      'DECIMAL',
      'BIGNUMERIC',
      'BIGDECIMAL',
      'BOOL',
      'INT64',
      'INT',
      'SMALLINT',
      'INTEGER',
      'BIGINT',
      'TINYINT',
      'BYTEINT',
      'FLOAT64',
      'FLOAT',
      'STRING',
      'GEOGRAPHY',
      'ARRAY',
      'STRUCT',
      'JSON',
      'RANGE',
    ];

    if (isArray(providedType)) {
      providedType = providedType as Array<ProvidedTypeStruct | string | []>;
      return {
        type: 'ARRAY',
        arrayType: BigQuery.getTypeDescriptorFromProvidedType_(providedType[0]),
      };
    } else if (isObject(providedType)) {
      return {
        type: 'STRUCT',
        structTypes: Object.keys(providedType).map(prop => {
          return {
            name: prop,
            type: BigQuery.getTypeDescriptorFromProvidedType_(
              (providedType as ProvidedTypeStruct)[prop],
            ),
          };
        }),
      };
    }

    providedType = (providedType as string).toUpperCase();
    if (!VALID_TYPES.includes(providedType)) {
      throw new Error(`Invalid type provided: "${providedType}"`);
    }

    return {type: providedType.toUpperCase()};
  }

  /**
   * Detect a value's type.
   *
   * @private
   *
   * @throws {error} If the type could not be detected.
   *
   * See {@link https://cloud.google.com/bigquery/data-types| Data Type}
   *
   * @param {*} value The value.
   * @returns {string} The type detected from the value.
   */
  static getTypeDescriptorFromValue_(value: unknown): ValueType {
    let typeName;

    if (value === null) {
      throw new Error(
        "Parameter types must be provided for null values via the 'types' field in query options.",
      );
    }

    if (value instanceof BigQueryDate) {
      typeName = 'DATE';
    } else if (value instanceof BigQueryDatetime) {
      typeName = 'DATETIME';
    } else if (value instanceof BigQueryTime) {
      typeName = 'TIME';
    } else if (value instanceof BigQueryTimestamp) {
      typeName = 'TIMESTAMP';
    } else if (value instanceof Buffer) {
      typeName = 'BYTES';
    } else if (value instanceof Big) {
      if (value.c.length - value.e >= 10) {
        typeName = 'BIGNUMERIC';
      } else {
        typeName = 'NUMERIC';
      }
    } else if (value instanceof BigQueryInt) {
      typeName = 'INT64';
    } else if (value instanceof Geography) {
      typeName = 'GEOGRAPHY';
    } else if (value instanceof BigQueryRange) {
      return {
        type: 'RANGE',
        rangeElementType: {
          type: value.elementType,
        },
      };
    } else if (isArray(value)) {
      if (value.length === 0) {
        throw new Error(
          "Parameter types must be provided for empty arrays via the 'types' field in query options.",
        );
      }
      return {
        type: 'ARRAY',
        arrayType: BigQuery.getTypeDescriptorFromValue_(value[0]),
      };
    } else if (isBoolean(value)) {
      typeName = 'BOOL';
    } else if (isNumber(value)) {
      typeName = (value as number) % 1 === 0 ? 'INT64' : 'FLOAT64';
    } else if (isObject(value)) {
      return {
        type: 'STRUCT',
        structTypes: Object.keys(value as object).map(prop => {
          return {
            name: prop,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            type: BigQuery.getTypeDescriptorFromValue_((value as any)[prop]),
          };
        }),
      };
    } else if (isString(value)) {
      typeName = 'STRING';
    }

    if (!typeName) {
      throw new Error(
        [
          'This value could not be translated to a BigQuery data type.',
          value,
        ].join('\n'),
      );
    }

    return {
      type: typeName,
    };
  }

  /**
   * Convert a value into a `queryParameter` object.
   *
   * @private
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#request-body| Jobs.query API Reference Docs (see `queryParameters`)}
   *
   * @param {*} value The value.
   * @param {string|ProvidedTypeStruct|ProvidedTypeArray} providedType Provided
   *     query parameter type.
   * @returns {object} A properly-formed `queryParameter` object.
   */
  static valueToQueryParameter_(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    providedType?: string | ProvidedTypeStruct | ProvidedTypeArray,
  ) {
    if (isDate(value)) {
      value = BigQuery.timestamp(value as Date);
    }
    let parameterType: bigquery.IQueryParameterType;
    if (providedType) {
      parameterType = BigQuery.getTypeDescriptorFromProvidedType_(providedType);
    } else {
      parameterType = BigQuery.getTypeDescriptorFromValue_(value);
    }
    const queryParameter: QueryParameter = {parameterType, parameterValue: {}};

    const typeName = queryParameter!.parameterType!.type!;
    if (typeName === 'ARRAY') {
      queryParameter.parameterValue!.arrayValues = (value as Array<{}>).map(
        itemValue => {
          const value = BigQuery._getValue(itemValue, parameterType.arrayType!);
          if (isObject(value) || isArray(value)) {
            if (isArray(providedType)) {
              providedType = providedType as [];
              return BigQuery.valueToQueryParameter_(value, providedType[0])
                .parameterValue!;
            } else {
              return BigQuery.valueToQueryParameter_(value).parameterValue!;
            }
          }
          return {value} as bigquery.IQueryParameterValue;
        },
      );
    } else if (typeName === 'STRUCT') {
      queryParameter.parameterValue!.structValues = Object.keys(value).reduce(
        (structValues, prop) => {
          let nestedQueryParameter;
          if (providedType) {
            nestedQueryParameter = BigQuery.valueToQueryParameter_(
              value[prop],
              (providedType as ProvidedTypeStruct)[prop],
            );
          } else {
            nestedQueryParameter = BigQuery.valueToQueryParameter_(value[prop]);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (structValues as any)[prop] = nestedQueryParameter.parameterValue;
          return structValues;
        },
        {},
      );
    } else if (typeName === 'RANGE') {
      let rangeValue: BigQueryRange;
      if (value instanceof BigQueryRange) {
        rangeValue = value;
      } else {
        rangeValue = BigQuery.range(
          value,
          queryParameter.parameterType?.rangeElementType?.type,
        );
      }
      queryParameter.parameterValue!.rangeValue = {
        start: {
          value: rangeValue.value.start,
        },
        end: {
          value: rangeValue.value.end,
        },
      };
    } else if (typeName === 'JSON' && isObject(value)) {
      queryParameter.parameterValue!.value = JSON.stringify(value);
    } else {
      queryParameter.parameterValue!.value = BigQuery._getValue(
        value,
        parameterType,
      );
    }

    return queryParameter;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static _getValue(value: any, type: ValueType): any {
    if (value === null) {
      return null;
    }
    if (value.type) type = value;
    return BigQuery._isCustomType(type) ? value.value : value;
  }

  private static _isCustomType({type}: ValueType): boolean {
    return (
      type!.indexOf('TIME') > -1 ||
      type!.indexOf('DATE') > -1 ||
      type!.indexOf('GEOGRAPHY') > -1 ||
      type!.indexOf('RANGE') > -1 ||
      type!.indexOf('BigQueryInt') > -1
    );
  }

  /**
   * @callback DatasetCallback
   * @param {?Error} err Request error, if any.
   * @param {object} dataset The [dataset resource]{@link https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#resource}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a dataset.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/datasets/insert| Datasets: insert API Documentation}
   *
   * @param {string} id ID of the dataset to create.
   * @param {object} [options] See a
   *     {@link https://cloud.google.com/bigquery/docs/reference/v2/datasets#resource| Dataset resource}.
   * @param {DatasetCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {Dataset} callback.dataset The newly created dataset
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * bigquery.createDataset('my-dataset', function(err, dataset, apiResponse)
   * {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.createDataset('my-dataset').then(function(data) {
   *   const dataset = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  createDataset(
    id: string,
    options?: DatasetResource,
  ): Promise<DatasetResponse>;
  createDataset(
    id: string,
    options: DatasetResource,
    callback: DatasetCallback,
  ): void;
  createDataset(id: string, callback: DatasetCallback): void;
  createDataset(
    id: string,
    optionsOrCallback?: DatasetResource | DatasetCallback,
    cb?: DatasetCallback,
  ): void | Promise<DatasetResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;

    const reqOpts: DecorateRequestOptions = {
      method: 'POST',
      uri: '/datasets',
      json: extend(
        true,
        {
          location: this.location,
        },
        options,
        {
          datasetReference: {
            datasetId: id,
          },
        },
      ),
    };
    if (options.projectId) {
      reqOpts.projectId = options.projectId;
    }
    this.request(reqOpts, (err, resp) => {
      if (err) {
        callback!(err, null, resp);
        return;
      }

      const dataset = this.dataset(id, options);
      dataset.metadata = resp;

      callback!(null, dataset, resp);
    });
  }

  /**
   * @callback JobCallback
   * @param {?Error} err Request error, if any.
   * @param {object} job The newly created job for your query.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Run a query as a job. No results are immediately returned. Instead, your
   * callback will be executed with a {@link Job} object that you must
   * ping for the results. See the Job documentation for explanations of how to
   * check on the status of the job.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert| Jobs: insert API Documentation}
   *
   * @param {object|string} options The configuration object. This must be in
   * the format of the {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationQuery| `configuration.query`}
   * property of a Jobs resource. If a string is provided, this is used as the
   * query string, and all other options are defaulted.
   * @param {Table} [options.destination] The table to save the
   *     query's results to. If omitted, a new table will be created.
   * @param {boolean} [options.dryRun] If set, don't actually run this job. A
   *     valid query will update the job with processing statistics. These can
   * be accessed via `job.metadata`.
   * @param {object} [options.labels] String key/value pairs to be attached as
   *     labels to the newly created Job.
   * @param {string} [options.location] The geographic location of the job.
   *     Required except for US and EU.
   * @param {number} [options.jobTimeoutMs] Job timeout in milliseconds.
   *     If this time limit is exceeded, BigQuery might attempt to stop the job.
   * @param {string} [options.jobId] Custom job id.
   * @param {string} [options.jobPrefix] Prefix to apply to the job id.
   * @param {string} options.query A query string, following the BigQuery query
   *     syntax, of the query to execute.
   * @param {boolean} [options.useLegacySql=false] Option to use legacy sql syntax.
   * @param {object} [options.defaultDataset] The dataset. This must be in
   *     the format of the {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#DatasetReference| `DatasetReference`}
   * @param {boolean} [options.wrapIntegers] Optionally wrap INT64 in BigQueryInt
   *     or custom INT64 value type.
   * @param {boolean} [options.parseJSON] Optionally parse JSON as a JSON Object.
   * @param {object|array} [options.params] Option to provide query prarameters.
   * @param {JobCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Job} callback.job The newly created job for your query.
   * @param {object} callback.apiResponse The full API response.
   *
   * @throws {Error} If a query is not specified.
   * @throws {Error} If a Table is not provided as a destination.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * const query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT
   * 100';
   *
   * //-
   * // You may pass only a query string, having a new table created to store
   * the
   * // results of the query.
   * //-
   * bigquery.createQueryJob(query, function(err, job) {});
   *
   * //-
   * // You can also control the destination table by providing a
   * // {@link Table} object.
   * //-
   * bigquery.createQueryJob({
   *   destination: bigquery.dataset('higher_education').table('institutions'),
   *   query: query
   * }, function(err, job) {});
   *
   * //-
   * // After you have run `createQueryJob`, your query will execute in a job.
   * Your
   * // callback is executed with a {@link Job} object so that you may
   * // check for the results.
   * //-
   * bigquery.createQueryJob(query, function(err, job) {
   *   if (!err) {
   *     job.getQueryResults(function(err, rows, apiResponse) {});
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.createQueryJob(query).then(function(data) {
   *   const job = data[0];
   *   const apiResponse = data[1];
   *
   *   return job.getQueryResults();
   * });
   * ```
   */
  createQueryJob(options: Query | string): Promise<JobResponse>;
  createQueryJob(options: Query | string, callback: JobCallback): void;
  createQueryJob(
    opts: Query | string,
    callback?: JobCallback,
  ): void | Promise<JobResponse> {
    const options = typeof opts === 'object' ? opts : {query: opts};
    this.trace_('[createQueryJob]', options, callback);
    if ((!options || !options.query) && !options.pageToken) {
      throw new Error('A SQL query string is required.');
    }

    const query: Query = extend(
      true,
      {
        useLegacySql: false,
      },
      options,
    );
    this.trace_('[createQueryJob]', query);

    if (options.destination) {
      if (!(options.destination instanceof Table)) {
        throw new Error('Destination must be a Table object.');
      }

      query.destinationTable = {
        datasetId: options.destination.dataset.id,
        projectId: options.destination.dataset.projectId,
        tableId: options.destination.id,
      };

      delete query.destination;
    }

    if (query.params) {
      const {parameterMode, params} = this.buildQueryParams_(
        query.params,
        query.types,
      );
      query.parameterMode = parameterMode;
      query.queryParameters = params;
      delete query.params;
    }

    const reqOpts: JobOptions = {};
    reqOpts.configuration = {
      query,
    };

    if (typeof query.jobTimeoutMs === 'number') {
      reqOpts.configuration.jobTimeoutMs = query.jobTimeoutMs.toString();
      delete query.jobTimeoutMs;
    }

    if (query.dryRun) {
      reqOpts.configuration.dryRun = query.dryRun;
      delete query.dryRun;
    }

    if (query.labels) {
      reqOpts.configuration.labels = query.labels;
      delete query.labels;
    }

    if (query.jobPrefix) {
      reqOpts.jobPrefix = query.jobPrefix;
      delete query.jobPrefix;
    }

    if (query.location) {
      reqOpts.location = query.location;
      delete query.location;
    }

    if (query.jobId) {
      reqOpts.jobId = query.jobId;
      delete query.jobId;
    }

    if (query.reservation) {
      reqOpts.configuration.reservation = query.reservation;
      delete query.reservation;
    }

    this.createJob(reqOpts, callback!);
  }

  private buildQueryParams_(
    params: Query['params'],
    types: Query['types'],
  ): {
    parameterMode: ParameterMode;
    params: bigquery.IQueryParameter[] | undefined;
  } {
    if (!params) {
      return {
        parameterMode: undefined,
        params: undefined,
      };
    }
    const parameterMode = isArray(params) ? 'positional' : 'named';
    const queryParameters: bigquery.IQueryParameter[] = [];
    if (parameterMode === 'named') {
      const namedParams = params as {[param: string]: any};
      for (const namedParameter of Object.getOwnPropertyNames(namedParams)) {
        const value = namedParams[namedParameter];
        let queryParameter;

        if (types) {
          if (!isObject(types)) {
            throw new Error(
              'Provided types must match the value type passed to `params`',
            );
          }

          const namedTypes = types as QueryParamTypeStruct;

          if (namedTypes[namedParameter]) {
            queryParameter = BigQuery.valueToQueryParameter_(
              value,
              namedTypes[namedParameter],
            );
          } else {
            queryParameter = BigQuery.valueToQueryParameter_(value);
          }
        } else {
          queryParameter = BigQuery.valueToQueryParameter_(value);
        }

        queryParameter.name = namedParameter;
        queryParameters.push(queryParameter);
      }
    } else {
      if (types) {
        if (!isArray(types)) {
          throw new Error(
            'Provided types must match the value type passed to `params`',
          );
        }

        const positionalTypes = types as QueryParamTypeStruct[];

        if (params.length !== types.length) {
          throw new Error('Incorrect number of parameter types provided.');
        }
        params.forEach((value: {}, i: number) => {
          const queryParameter = BigQuery.valueToQueryParameter_(
            value,
            positionalTypes[i],
          );
          queryParameters.push(queryParameter);
        });
      } else {
        params.forEach((value: {}) => {
          const queryParameter = BigQuery.valueToQueryParameter_(value);
          queryParameters.push(queryParameter);
        });
      }
    }

    return {
      parameterMode,
      params: queryParameters,
    };
  }

  /**
   * Creates a job. Typically when creating a job you'll have a very specific
   * task in mind. For this we recommend one of the following methods:
   *
   * - {@link BigQuery.createQueryJob}
   * - {@link Table#createCopyJob}
   * - {@link Table#createCopyFromJob}
   * - {@link Table#createExtractJob}
   * - {@link Table#createLoadJob}
   *
   * However in the event you need a finer level of control over the job
   * creation, you can use this method to pass in a raw {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/Job| Job resource}
   * object.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs| Jobs Overview}
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert| Jobs: insert API Documentation}
   *
   * @param {object} options Object in the form of a {@link https://cloud.google.com/bigquery/docs/reference/rest/v2/Job| Job resource};
   * @param {string} [options.jobId] Custom job id.
   * @param {string} [options.jobPrefix] Prefix to apply to the job id.
   * @param {string} [options.location] The geographic location of the job.
   *     Required except for US and EU.
   * @param {JobCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Job} callback.job The newly created job.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * const options = {
   *   configuration: {
   *     query: {
   *       query: 'SELECT url FROM `publicdata.samples.github_nested` LIMIT 100'
   *     }
   *   }
   * };
   *
   * bigquery.createJob(options, function(err, job) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   job.getQueryResults(function(err, rows) {});
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.createJob(options).then(function(data) {
   *   const job = data[0];
   *
   *   return job.getQueryResults();
   * });
   * ```
   */
  createJob(options: JobOptions): Promise<JobResponse>;
  createJob(options: JobOptions, callback: JobCallback): void;
  createJob(
    options: JobOptions,
    callback?: JobCallback,
  ): void | Promise<JobResponse> {
    const JOB_ID_PROVIDED = typeof options.jobId !== 'undefined';
    const DRY_RUN = options.configuration?.dryRun
      ? options.configuration.dryRun
      : false;

    const reqOpts = Object.assign({}, options);
    let jobId = JOB_ID_PROVIDED ? reqOpts.jobId : randomUUID();

    if (reqOpts.jobId) {
      delete reqOpts.jobId;
    }

    if (reqOpts.jobPrefix) {
      jobId = reqOpts.jobPrefix + jobId;
      delete reqOpts.jobPrefix;
    }

    reqOpts.jobReference = {
      projectId: this.projectId,
      jobId,
      location: this.location,
    };

    if (reqOpts.location) {
      reqOpts.jobReference.location = reqOpts.location;
      delete reqOpts.location;
    }

    if (reqOpts.configuration && reqOpts.reservation) {
      reqOpts.configuration.reservation = reqOpts.reservation;
      delete reqOpts.reservation;
    }

    const job = this.job(jobId!, {
      location: reqOpts.jobReference.location,
    });

    this.request(
      {
        method: 'POST',
        uri: '/jobs',
        json: reqOpts,
      },
      async (err, resp) => {
        const ALREADY_EXISTS_CODE = 409;

        if (err) {
          if (
            (err as ApiError).code === ALREADY_EXISTS_CODE &&
            !JOB_ID_PROVIDED &&
            !DRY_RUN
          ) {
            // The last insert attempt flaked, but the API still processed the
            // request and created the job. Because of our "autoRetry" feature,
            // we tried the request again, which tried to create it again,
            // unnecessarily. We will get the job's metadata and treat it as if
            // it just came back from the create call.
            err = null;
            [resp] = await job.getMetadata();
          } else {
            callback!(err, null, resp);
            return;
          }
        }

        if (resp.status.errors) {
          err = new util.ApiError({
            errors: resp.status.errors,
            response: resp,
          } as GoogleErrorBody);
        }

        // Update the location with the one used by the API.
        job.location = resp.jobReference.location;
        job.metadata = resp;
        callback!(err, job, resp);
      },
    );
  }

  /**
   * Create a reference to a dataset.
   *
   * @param {string} id ID of the dataset.
   * @param {object} [options] Dataset options.
   * @param {string} [options.projectId] The GCP project ID.
   * @param {string} [options.location] The geographic location of the dataset.
   *      Required except for US and EU.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   * const dataset = bigquery.dataset('higher_education');
   * ```
   */
  dataset(id: string, options?: DatasetOptions) {
    if (typeof id !== 'string') {
      throw new TypeError('A dataset ID is required.');
    }

    if (this.location) {
      options = extend({location: this.location}, options);
    }
    return new Dataset(this, id, options);
  }

  /**
   * List all or some of the datasets in a project.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/datasets/list| Datasets: list API Documentation}
   *
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.all] List all datasets, including hidden ones.
   * @param {string} [options.projectId] The GCP project ID.
   * @param {boolean} [options.autoPaginate] Have pagination handled automatically.
   *     Default: true.
   * @param {number} [options.maxApiCalls] Maximum number of API calls to make.
   * @param {number} [options.maxResults] Maximum number of results to return.
   * @param {string} [options.pageToken] Token returned from a previous call, to
   *     request the next page of results.
   * @param {DatasetsCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {Dataset[]} callback.datasets The list of datasets in your project.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * bigquery.getDatasets(function(err, datasets) {
   *   if (!err) {
   *     // datasets is an array of Dataset objects.
   *   }
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function manualPaginationCallback(err, datasets, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     bigquery.getDatasets(nextQuery, manualPaginationCallback);
   *   }
   * }
   *
   * bigquery.getDatasets({
   *   autoPaginate: false
   * }, manualPaginationCallback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.getDatasets().then(function(datasets) {});
   * ```
   */
  getDatasets(options?: GetDatasetsOptions): Promise<DatasetsResponse>;
  getDatasets(options: GetDatasetsOptions, callback: DatasetsCallback): void;
  getDatasets(callback: DatasetsCallback): void;
  getDatasets(
    optionsOrCallback?: GetDatasetsOptions | DatasetsCallback,
    cb?: DatasetsCallback,
  ): void | Promise<DatasetsResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;

    const reqOpts: DecorateRequestOptions = {
      uri: '/datasets',
      qs: options,
    };
    if (options.projectId) {
      reqOpts.projectId = options.projectId;
    }
    this.request(reqOpts, (err, resp) => {
      if (err) {
        callback!(err, null, null, resp);
        return;
      }

      let nextQuery: GetDatasetsOptions | null = null;

      if (resp.nextPageToken) {
        nextQuery = Object.assign({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const datasets = (resp.datasets || []).map(
        (dataset: bigquery.IDataset) => {
          const dsOpts: DatasetOptions = {
            location: dataset.location!,
          };
          if (options.projectId) {
            dsOpts.projectId = options.projectId;
          }
          const ds = this.dataset(dataset.datasetReference!.datasetId!, dsOpts);

          ds.metadata = dataset!;
          return ds;
        },
      );

      callback!(null, datasets, nextQuery, resp);
    });
  }

  /**
   * @callback GetJobsCallback
   * @param {?Error} err Request error, if any.
   * @param {object} jobs An array of [Job]{@link https://cloud.google.com/bigquery/docs/reference/v2/Job} objects.
   */
  /**
   * @typedef {array} GetJobsResponse
   * @property {object} 0 An array of Job objects.
   */
  /**
   * Get all of the jobs from your project.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/list| Jobs: list API Documentation}
   *
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.allUsers] Display jobs owned by all users in the
   *     project.
   * @param {boolean} [options.autoPaginate] Have pagination handled
   *     automatically. Default: true.
   * @param {number} [options.maxApiCalls] Maximum number of API calls to make.
   * @param {number} [options.maxResults] Maximum number of results to return.
   * @param {string} [options.pageToken] Token returned from a previous call, to
   *     request the next page of results.
   * @param {string} [options.projection] Restrict information returned to a set
   *     of selected fields. Acceptable values are "full", for all job data, and
   *     "minimal", to not include the job configuration.
   * @param {string} [options.stateFilter] Filter for job state. Acceptable
   *     values are "done", "pending", and "running". Sending an array to this
   *     option performs a disjunction.
   * @param {GetJobsCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {Job[]} callback.jobs The list of jobs in your
   *     project.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * bigquery.getJobs(function(err, jobs) {
   *   if (!err) {
   *     // jobs is an array of Job objects.
   *   }
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function manualPaginationCallback(err, jobs, nextQuery, apiRespose) {
   *   if (nextQuery) {
   *     // More results exist.
   *     bigquery.getJobs(nextQuery, manualPaginationCallback);
   *   }
   * }
   *
   * bigquery.getJobs({
   *   autoPaginate: false
   * }, manualPaginationCallback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.getJobs().then(function(data) {
   *   const jobs = data[0];
   * });
   * ```
   */
  getJobs(options?: GetJobsOptions): Promise<GetJobsResponse>;
  getJobs(options: GetJobsOptions, callback: GetJobsCallback): void;
  getJobs(callback: GetJobsCallback): void;
  getJobs(
    optionsOrCallback?: GetJobsOptions | GetJobsCallback,
    cb?: GetJobsCallback,
  ): void | Promise<GetJobsResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    this.request(
      {
        uri: '/jobs',
        qs: options,
        useQuerystring: true,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }
        let nextQuery: {} | null = null;
        if (resp.nextPageToken) {
          nextQuery = Object.assign({}, options, {
            pageToken: resp.nextPageToken,
          });
        }
        const jobs = (resp.jobs || []).map((jobObject: bigquery.IJob) => {
          const job = this.job(jobObject.jobReference!.jobId!, {
            location: jobObject.jobReference!.location!,
          });
          job.metadata = jobObject!;
          return job;
        });
        callback!(null, jobs, nextQuery, resp);
      },
    );
  }

  /**
   * Create a reference to an existing job.
   *
   * @param {string} id ID of the job.
   * @param {object} [options] Configuration object.
   * @param {string} [options.location] The geographic location of the job.
   *      Required except for US and EU.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * const myExistingJob = bigquery.job('job-id');
   * ```
   */
  job(id: string, options?: JobOptions) {
    if (this.location) {
      options = extend({location: this.location}, options);
    }
    return new Job(this, id, options);
  }

  /**
   * Run a query scoped to your project. For manual pagination please refer to
   * {@link BigQuery.createQueryJob}.
   *
   * See {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/query| Jobs: query API Documentation}
   *
   * @param {string|object} query A string SQL query or configuration object.
   *     For all available options, see
   *     {@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/query#request-body| Jobs: query request body}.
   * @param {string} [query.location] The geographic location of the job.
   *     Required except for US and EU.
   * @param {string} [query.jobId] Custom id for the underlying job.
   * @param {string} [query.jobPrefix] Prefix to apply to the underlying job id.
   * @param {object|Array<*>} query.params For positional SQL parameters, provide
   *     an array of values. For named SQL parameters, provide an object which
   *     maps each named parameter to its value. The supported types are
   * integers, floats, {@link BigQuery.date} objects, {@link BigQuery.datetime}
   *     objects, {@link BigQuery.time} objects, {@link BigQuery.timestamp}
   *     objects, Strings, Booleans, and Objects.
   * @param {string} query.query A query string, following the BigQuery query
   *     syntax, of the query to execute.
   * @param {object|Array<*>} query.types Provided types for query parameters.
   *     For positional SQL parameters, provide an array of types. For named
   *     SQL parameters, provide an object which maps each named parameter to
   *     its type.
   * @param {boolean} [query.useLegacySql=false] Option to use legacy sql syntax.
   * @param {object} [options] Configuration object for query results.
   * @param {number} [options.maxResults] Maximum number of results to read.
   * @param {number} [options.timeoutMs] How long to wait for the query to
   *     complete, in milliseconds, before returning. Default is 10 seconds.
   *     If the timeout passes before the job completes, an error will be returned
   *     and the 'jobComplete' field in the response will be false.
   * @param {boolean|IntegerTypeCastOptions} [options.wrapIntegers=false] Wrap values
   *     of 'INT64' type in {@link BigQueryInt} objects.
   *     If a `boolean`, this will wrap values in {@link BigQueryInt} objects.
   *     If an `object`, this will return a value returned by
   *     `wrapIntegers.integerTypeCastFunction`.
   *     Please see {@link IntegerTypeCastOptions} for options descriptions.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request
   * @param {array} callback.rows The list of results from your query.
   *
   * @example
   * ```
   * const {BigQuery} = require('@google-cloud/bigquery');
   * const bigquery = new BigQuery();
   *
   * const query = 'SELECT url FROM `publicdata.samples.github_nested` LIMIT
   * 100';
   *
   * bigquery.query(query, function(err, rows) {
   *   if (!err) {
   *     // rows is an array of results.
   *   }
   * });
   *
   * //-
   * // Positional SQL parameters are supported.
   * //-
   * bigquery.query({
   *   query: [
   *     'SELECT url',
   *     'FROM `publicdata.samples.github_nested`',
   *     'WHERE repository.owner = ?'
   *   ].join(' '),
   *
   *   params: [
   *     'google'
   *   ]
   * }, function(err, rows) {});
   *
   * //-
   * // Or if you prefer to name them, that's also supported.
   * //-
   * bigquery.query({
   *   query: [
   *     'SELECT url',
   *     'FROM `publicdata.samples.github_nested`',
   *     'WHERE repository.owner = @owner'
   *   ].join(' '),
   *   params: {
   *     owner: 'google'
   *   }
   * }, function(err, rows) {});
   *
   * //-
   * // Providing types for SQL parameters is supported.
   * //-
   * bigquery.query({
   *   query: [
   *     'SELECT url',
   *     'FROM `publicdata.samples.github_nested`',
   *     'WHERE repository.owner = ?'
   *   ].join(' '),
   *
   *   params: [
   *     null
   *   ],
   *
   *   types: ['string']
   * }, function(err, rows) {});
   *
   * //-
   * // If you need to use a `DATE`, `DATETIME`, `TIME`, or `TIMESTAMP` type in
   * // your query, see {@link BigQuery.date}, {@link BigQuery.datetime},
   * // {@link BigQuery.time}, and {@link BigQuery.timestamp}.
   * //-
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigquery.query(query).then(function(data) {
   *   const rows = data[0];
   * });
   * ```
   */
  query(query: string, options?: QueryOptions): Promise<QueryRowsResponse>;
  query(query: Query, options?: QueryOptions): Promise<SimpleQueryRowsResponse>;
  query(
    query: string,
    options: QueryOptions,
    callback?: QueryRowsCallback,
  ): void;
  query(
    query: Query,
    options: QueryOptions,
    callback?: SimpleQueryRowsCallback,
  ): void;
  query(query: string, callback?: QueryRowsCallback): void;
  query(query: Query, callback?: SimpleQueryRowsCallback): void;
  query(
    query: string | Query,
    optionsOrCallback?:
      | QueryOptions
      | SimpleQueryRowsCallback
      | QueryRowsCallback,
    cb?: SimpleQueryRowsCallback | QueryRowsCallback,
  ): void | Promise<SimpleQueryRowsResponse> | Promise<QueryRowsResponse> {
    let options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const queryOpts =
      typeof query === 'object'
        ? {
            wrapIntegers: query.wrapIntegers,
            parseJSON: query.parseJSON,
          }
        : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;

    this.trace_('[query]', query, options);
    const queryReq = this.buildQueryRequest_(query, options);
    this.trace_('[query] queryReq', queryReq);
    if (!queryReq) {
      this.createQueryJob(query, (err, job, resp) => {
        if (err) {
          (callback as SimpleQueryRowsCallback)(err, null, resp);
          return;
        }
        if (typeof query === 'object' && query.dryRun) {
          (callback as SimpleQueryRowsCallback)(null, [], resp);
          return;
        }
        // The Job is important for the `queryAsStream_` method, so a new query
        // isn't created each time results are polled for.
        options = extend({job}, queryOpts, options);
        job!.getQueryResults(options, callback as QueryRowsCallback);
      });
      return;
    }

    void this.runJobsQuery(queryReq, (err, job, res) => {
      this.trace_('[runJobsQuery callback]: ', query, err, job, res);
      if (err) {
        (callback as SimpleQueryRowsCallback)(err, null, job);
        return;
      }

      options = extend({job}, queryOpts, options);
      if (res && res.jobComplete) {
        let rows: any = [];
        if (res.schema && res.rows) {
          rows = BigQuery.mergeSchemaWithRows_(res.schema, res.rows, {
            wrapIntegers: options.wrapIntegers || false,
            parseJSON: options.parseJSON,
          });
          delete res.rows;
        }
        this.trace_('[runJobsQuery] job complete');
        options._cachedRows = rows;
        options._cachedResponse = res;
        if (res.pageToken) {
          this.trace_('[runJobsQuery] has more pages');
          options.pageToken = res.pageToken;
        } else {
          this.trace_('[runJobsQuery] no more pages');
        }
        job!.getQueryResults(options, callback as QueryRowsCallback);
        return;
      }
      // If timeout override was provided, return error.
      if (queryReq.timeoutMs) {
        const err = new Error(
          `The query did not complete before ${queryReq.timeoutMs}ms`,
        );
        (callback as SimpleQueryRowsCallback)(err, null, job);
        return;
      }
      delete options.timeoutMs;
      this.trace_('[runJobsQuery] job not complete');
      job!.getQueryResults(options, callback as QueryRowsCallback);
    });
  }

  /**
   * Check if the given Query can run using the `jobs.query` endpoint.
   * Returns a bigquery.IQueryRequest that can be used to call `jobs.query`.
   * Return undefined if is not possible to convert to a bigquery.IQueryRequest.
   *
   * @param query string | Query
   * @param options QueryOptions
   * @returns bigquery.IQueryRequest | undefined
   */
  private buildQueryRequest_(
    query: string | Query,
    options: QueryOptions,
  ): bigquery.IQueryRequest | undefined {
    if (process.env.FAST_QUERY_PATH === 'DISABLED') {
      return undefined;
    }
    const queryObj: Query =
      typeof query === 'string'
        ? {
            query: query,
          }
        : query;
    this.trace_('[buildQueryRequest]', query, options, queryObj);
    // This is a denylist of settings which prevent us from composing an equivalent
    // bq.QueryRequest due to differences between configuration parameters accepted
    // by jobs.insert vs jobs.query.
    if (
      !!queryObj.destination ||
      !!queryObj.tableDefinitions ||
      !!queryObj.createDisposition ||
      !!queryObj.writeDisposition ||
      (!!queryObj.priority && queryObj.priority !== 'INTERACTIVE') ||
      queryObj.useLegacySql ||
      !!queryObj.maximumBillingTier ||
      !!queryObj.timePartitioning ||
      !!queryObj.rangePartitioning ||
      !!queryObj.clustering ||
      !!queryObj.destinationEncryptionConfiguration ||
      !!queryObj.schemaUpdateOptions ||
      !!queryObj.jobTimeoutMs ||
      // User has defined the jobID generation behavior
      !!queryObj.jobId
    ) {
      return undefined;
    }

    if (queryObj.dryRun) {
      return undefined;
    }

    if (options.job) {
      return undefined;
    }
    const req: bigquery.IQueryRequest = {
      useQueryCache: queryObj.useQueryCache,
      labels: queryObj.labels,
      defaultDataset: queryObj.defaultDataset,
      createSession: queryObj.createSession,
      maximumBytesBilled: queryObj.maximumBytesBilled,
      timeoutMs: options.timeoutMs,
      location: queryObj.location || options.location,
      formatOptions: {
        useInt64Timestamp: true,
      },
      maxResults: queryObj.maxResults || options.maxResults,
      query: queryObj.query,
      useLegacySql: false,
      requestId: randomUUID(),
      jobCreationMode: this._defaultJobCreationMode,
      reservation: queryObj.reservation,
      continuous: queryObj.continuous,
      destinationEncryptionConfiguration:
        queryObj.destinationEncryptionConfiguration,
      writeIncrementalResults: queryObj.writeIncrementalResults,
      connectionProperties: queryObj.connectionProperties,
      preserveNulls: queryObj.preserveNulls,
    };
    if (queryObj.jobCreationMode) {
      // override default job creation mode
      req.jobCreationMode = queryObj.jobCreationMode;
    }
    const {parameterMode, params} = this.buildQueryParams_(
      queryObj.params,
      queryObj.types,
    );
    if (params) {
      req.queryParameters = params;
    }
    if (parameterMode) {
      req.parameterMode = parameterMode;
    }
    return req;
  }

  private runJobsQuery(
    req: bigquery.IQueryRequest,
    callback?: JobsQueryCallback,
  ): void | Promise<JobsQueryResponse> {
    this.trace_('[runJobsQuery]', req, callback);
    this.request(
      {
        method: 'POST',
        uri: '/queries',
        json: req,
      },
      async (err, res: bigquery.IQueryResponse) => {
        this.trace_('jobs.query res:', res, err);
        if (err) {
          callback!(err, null, res);
          return;
        }
        let job: Job | null = null;
        if (res.jobReference) {
          const jobRef = res.jobReference;
          job = this.job(jobRef.jobId!, {
            location: jobRef.location,
          });
        } else if (res.queryId) {
          job = this.job(res.queryId); // stateless query
        }
        callback!(null, job, res);
      },
    );
  }

  /**
   * This method will be called by `createQueryStream()`. It is required to
   * properly set the `autoPaginate` option value.
   *
   * @private
   */
  queryAsStream_(query: Query, callback?: SimpleQueryRowsCallback) {
    if (query.job) {
      query.job.getQueryResults(query, callback as QueryRowsCallback);
      return;
    }

    const {location, maxResults, pageToken, wrapIntegers, parseJSON} = query;

    const opts = {
      location,
      maxResults,
      pageToken,
      wrapIntegers,
      parseJSON,
      autoPaginate: false,
    };

    delete query.location;
    delete query.maxResults;
    delete query.pageToken;
    delete query.wrapIntegers;
    delete query.parseJSON;

    this.query(query, opts, callback);
  }

  static setLogFunction = setLogFunction;
}

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(BigQuery, ['getDatasets', 'getJobs']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(BigQuery, {
  exclude: [
    'dataset',
    'date',
    'datetime',
    'geography',
    'int',
    'job',
    'time',
    'timestamp',
    'range',
  ],
});

function convertSchemaFieldValue(
  schemaField: TableField,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  options: {
    wrapIntegers: boolean | IntegerTypeCastOptions;
    selectedFields?: string[];
    parseJSON?: boolean;
    listParams?:
      | bigquery.tabledata.IListParams
      | bigquery.jobs.IGetQueryResultsParams;
  },
) {
  if (value === null) {
    return value;
  }

  switch (schemaField.type) {
    case 'BOOLEAN':
    case 'BOOL': {
      value = value.toLowerCase() === 'true';
      break;
    }
    case 'BYTES': {
      value = Buffer.from(value, 'base64');
      break;
    }
    case 'FLOAT':
    case 'FLOAT64': {
      value = Number(value);
      break;
    }
    case 'INTEGER':
    case 'INT64': {
      const {wrapIntegers} = options;
      value = wrapIntegers
        ? typeof wrapIntegers === 'object'
          ? BigQuery.int(
              {integerValue: value, schemaFieldName: schemaField.name},
              wrapIntegers,
            ).valueOf()
          : BigQuery.int(value)
        : Number(value);
      break;
    }
    case 'NUMERIC': {
      value = new Big(value);
      break;
    }
    case 'BIGNUMERIC': {
      value = new Big(value);
      break;
    }
    case 'RECORD': {
      value = BigQuery.mergeSchemaWithRows_(schemaField, value, options).pop();
      break;
    }
    case 'DATE': {
      value = BigQuery.date(value);
      break;
    }
    case 'DATETIME': {
      value = BigQuery.datetime(value);
      break;
    }
    case 'TIME': {
      value = BigQuery.time(value);
      break;
    }
    case 'TIMESTAMP': {
      /*
      At this point, 'value' will equal the timestamp value returned from the
      server. We need to parse this value differently depending on its format.
      For example, value could be any of the following:
      1672574400123456
      1672574400.123456
      2023-01-01T12:00:00.123456789123Z
       */
      const listParams = options.listParams;
      const timestampOutputFormat = listParams
        ? listParams['formatOptions.timestampOutputFormat']
        : undefined;
      const useInt64Timestamp = listParams
        ? listParams['formatOptions.useInt64Timestamp']
        : undefined;
      if (timestampOutputFormat === 'ISO8601_STRING') {
        // value is ISO string, create BigQueryTimestamp wrapping the string
        value = BigQuery.timestamp(value);
      } else if (
        useInt64Timestamp !== true &&
        timestampOutputFormat !== 'INT64' &&
        (useInt64Timestamp !== undefined || timestampOutputFormat !== undefined)
      ) {
        // NOTE: The additional
        // (useInt64Timestamp !== undefined || timestampOutputFormat !== und...)
        // check is to ensure that calls to the /query endpoint remain
        // unaffected as they will not be providing any listParams.
        //
        // If the program reaches this point in time then
        // value is float seconds so convert to BigQueryTimestamp
        value = BigQuery.timestamp(Number(value));
      } else {
        // Expect int64 micros (default or explicit INT64)
        const pd = new PreciseDate();
        pd.setFullTime(PreciseDate.parseFull(BigInt(value) * BigInt(1000)));
        value = BigQuery.timestamp(pd);
      }
      break;
    }
    case 'GEOGRAPHY': {
      value = BigQuery.geography(value);
      break;
    }
    case 'JSON': {
      const {parseJSON} = options;
      value = parseJSON ? JSON.parse(value) : value;
      break;
    }
    case 'RANGE': {
      value = BigQueryRange.fromSchemaValue_(
        value,
        schemaField.rangeElementType!.type!,
      );
      break;
    }
    default:
      break;
  }

  return value;
}

/**
 * Range class for BigQuery.
 * A range represents contiguous range between two dates, datetimes, or timestamps.
 * The lower and upper bound for the range are optional.
 * The lower bound is inclusive and the upper bound is exclusive.
 * See https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#range_literals
 */
export class BigQueryRange {
  elementType?: string;
  start?: BigQueryTimestamp | BigQueryDate | BigQueryDatetime;
  end?: BigQueryTimestamp | BigQueryDate | BigQueryDatetime;

  constructor(value: string | BigQueryRangeOptions, elementType?: string) {
    if (typeof value === 'string') {
      if (!elementType) {
        throw new Error(
          'invalid RANGE. Element type required when using RANGE API string.',
        );
      }

      const [start, end] = BigQueryRange.fromStringValue_(value);
      this.start = this.convertElement_(start, elementType);
      this.end = this.convertElement_(end, elementType);
      this.elementType = elementType;
    } else {
      const {start, end} = value;
      if (start && end) {
        if (typeof start !== typeof end) {
          throw Error(
            'upper and lower bound on a RANGE should be of the same type.',
          );
        }
      }
      const inferredType =
        {
          BigQueryDate: 'DATE',
          BigQueryDatetime: 'DATETIME',
          BigQueryTimestamp: 'TIMESTAMP',
        }[(start || end || Object).constructor.name] || elementType;
      this.start = this.convertElement_(start, inferredType);
      this.end = this.convertElement_(end, inferredType);
      this.elementType = inferredType;
    }
  }

  /*
   * Get Range string representation used by the BigQuery API.
   */
  public get apiValue() {
    return `[${this.start ? this.start.value : 'UNBOUNDED'}, ${this.end ? this.end.value : 'UNBOUNDED'})`;
  }

  /*
   * Get Range literal representation accordingly to
   * https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#range_literals
   */
  public get literalValue() {
    return `RANGE<${this.elementType}> ${this.apiValue}`;
  }

  public get value() {
    return {
      start: this.start ? this.start.value : 'UNBOUNDED',
      end: this.end ? this.end.value : 'UNBOUNDED',
    };
  }

  private static fromStringValue_(value: string): [start: string, end: string] {
    let cleanedValue = value;
    if (cleanedValue.startsWith('[') || cleanedValue.startsWith('(')) {
      cleanedValue = cleanedValue.substring(1);
    }
    if (cleanedValue.endsWith(')') || cleanedValue.endsWith(']')) {
      cleanedValue = cleanedValue.substring(0, cleanedValue.length - 1);
    }
    const parts = cleanedValue.split(',');
    if (parts.length !== 2) {
      throw new Error(
        'invalid RANGE. See RANGE literal format docs for more information.',
      );
    }

    const [start, end] = parts.map((s: string) => s.trim());
    return [start, end];
  }

  static fromSchemaValue_(value: string, elementType: string): BigQueryRange {
    const [start, end] = BigQueryRange.fromStringValue_(value);
    const convertRangeSchemaValue = (value: string) => {
      if (value === 'UNBOUNDED' || value === 'NULL') {
        return null;
      }
      return convertSchemaFieldValue({type: elementType}, value, {
        wrapIntegers: false,
      });
    };
    return BigQuery.range(
      {
        start: convertRangeSchemaValue(start),
        end: convertRangeSchemaValue(end),
      },
      elementType,
    );
  }

  private convertElement_(
    value?: string | BigQueryDate | BigQueryDatetime | BigQueryTimestamp,
    elementType?: string,
  ) {
    if (typeof value === 'string') {
      if (value === 'UNBOUNDED' || value === 'NULL') {
        return undefined;
      }
      switch (elementType) {
        case 'DATE':
          return new BigQueryDate(value);
        case 'DATETIME':
          return new BigQueryDatetime(value);
        case 'TIMESTAMP':
          return new BigQueryTimestamp(value);
      }
      return undefined;
    }
    return value;
  }
}

/**
 * Date class for BigQuery.
 */
export class BigQueryDate {
  value: string;
  constructor(value: BigQueryDateOptions | string) {
    if (typeof value === 'object') {
      value = BigQuery.datetime(value).value;
    }
    this.value = value;
  }
}

/**
 * Geography class for BigQuery.
 */
export class Geography {
  value: string;
  constructor(value: string) {
    this.value = value;
  }
}

/**
 * Timestamp class for BigQuery.
 *
 * The recommended input here is a `Date` or `PreciseDate` class.
 * If passing as a `string`, it should be Timestamp literals: https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#timestamp_literals.
 * When passing a `number` input, it should be epoch seconds in float representation.
 *
 */
export class BigQueryTimestamp {
  value: string;
  constructor(value: Date | PreciseDate | string | number) {
    let pd: PreciseDate;
    if (value instanceof PreciseDate) {
      pd = value;
    } else if (value instanceof Date) {
      pd = new PreciseDate(value);
    } else if (typeof value === 'string') {
      if (/^\d{4}-\d{1,2}-\d{1,2}/.test(value)) {
        pd = new PreciseDate(value);
        if (value.match(/\.\d{10,}/) && !Number.isNaN(pd.getTime())) {
          /*
          TODO:
          When https://github.com/googleapis/nodejs-precise-date/pull/302
          is released and we have full support for picoseconds in PreciseData
          then we can remove this if block.
           */
          this.value = value;
          return;
        }
      } else {
        const floatValue = Number.parseFloat(value);
        if (!Number.isNaN(floatValue)) {
          pd = this.fromFloatValue_(floatValue);
        } else {
          pd = new PreciseDate(value);
        }
      }
    } else {
      pd = this.fromFloatValue_(value);
    }
    // to keep backward compatibility, only converts with microsecond
    // precision if needed.
    if (pd.getMicroseconds() > 0) {
      this.value = pd.toISOString();
    } else {
      this.value = new Date(pd.getTime()).toJSON();
    }
  }

  fromFloatValue_(value: number): PreciseDate {
    const secs = Math.trunc(value);
    // Timestamps in BigQuery have microsecond precision, so we must
    // return a round number of microseconds.
    const micros = Math.trunc((value - secs) * 1e6 + 0.5);
    const pd = new PreciseDate([secs, micros * 1000]);
    return pd;
  }
}

/**
 * Datetime class for BigQuery.
 */
export class BigQueryDatetime {
  value: string;
  constructor(value: BigQueryDatetimeOptions | string) {
    if (typeof value === 'object') {
      let time;
      if (value.hours) {
        time = BigQuery.time(value).value;
      }
      const y = value.year;
      const m = value.month;
      const d = value.day;
      time = time ? ' ' + time : '';
      value = `${y}-${m}-${d}${time}`;
    } else {
      value = value.replace(/^(.*)T(.*)Z$/, '$1 $2');
    }
    this.value = value as string;
  }
}

/**
 * Time class for BigQuery.
 */
export class BigQueryTime {
  value: string;
  constructor(value: BigQueryTimeOptions | string) {
    if (typeof value === 'object') {
      const h = value.hours;
      const m = value.minutes || 0;
      const s = value.seconds || 0;
      const f = value.fractional !== undefined ? '.' + value.fractional : '';
      value = `${h}:${m}:${s}${f}`;
    }
    this.value = value as string;
  }
}

/**
 * Build a BigQueryInt object. For long integers, a string can be provided.
 *
 * @class
 * @param {string|number|IntegerTypeCastValue} value The 'INT64' value.
 * @param {object} [typeCastOptions] Configuration to convert
 *     values of 'INT64' type to a custom value. Must provide an
 *     `integerTypeCastFunction` to handle conversion.
 * @param {function} typeCastOptions.integerTypeCastFunction A custom user
 *     provided function to convert value.
 * @param {string|string[]} [typeCastOptions.fields] Schema field
 *     names to be converted using `integerTypeCastFunction`.
 *
 * @example
 * ```
 * const {BigQuery} = require('@google-cloud/bigquery');
 * const bigquery = new BigQuery();
 * const anInt = bigquery.int(7);
 * ```
 */
export class BigQueryInt extends Number {
  type: string;
  value: string;
  typeCastFunction?: Function;
  private _schemaFieldName: string | undefined;
  constructor(
    value: string | number | IntegerTypeCastValue,
    typeCastOptions?: IntegerTypeCastOptions,
  ) {
    super(typeof value === 'object' ? value.integerValue : value);
    this._schemaFieldName =
      typeof value === 'object' ? value.schemaFieldName : undefined;
    this.value =
      typeof value === 'object'
        ? value.integerValue.toString()
        : value.toString();

    this.type = 'BigQueryInt';

    if (typeCastOptions) {
      if (typeof typeCastOptions.integerTypeCastFunction !== 'function') {
        throw new Error(
          'integerTypeCastFunction is not a function or was not provided.',
        );
      }

      const typeCastFields = typeCastOptions.fields
        ? toArray(typeCastOptions.fields)
        : undefined;

      let customCast = true;

      if (typeCastFields) {
        customCast = this._schemaFieldName
          ? typeCastFields.includes(this._schemaFieldName)
            ? true
            : false
          : false;
      }

      customCast &&
        (this.typeCastFunction = typeCastOptions.integerTypeCastFunction);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueOf(): any {
    const shouldCustomCast = this.typeCastFunction ? true : false;

    if (shouldCustomCast) {
      try {
        return this.typeCastFunction!(this.value);
      } catch (error) {
        if (error instanceof Error) {
          error.message = `integerTypeCastFunction threw an error:\n\n  - ${error.message}`;
        }
        throw error;
      }
    } else {
      return BigQuery.decodeIntegerValue_({
        integerValue: this.value,
        schemaFieldName: this._schemaFieldName,
      });
    }
  }

  toJSON(): Json {
    return {type: this.type, value: this.value};
  }
}

export interface Json {
  [field: string]: string;
}
