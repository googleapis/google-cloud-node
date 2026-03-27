// Copyright 2016 Google LLC
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

import {replaceProjectIdToken} from '@google-cloud/projectify';
import {promisifyAll} from '@google-cloud/promisify';
import arrify = require('arrify');
import * as extend from 'extend';
import {
  GoogleAuth,
  CallOptions,
  grpc as gaxVendoredGrpc,
  ClientOptions,
} from 'google-gax';
import * as gax from 'google-gax';
import * as protos from '../protos/protos';
import * as SqlTypes from './execute-query/types';

import {AppProfile} from './app-profile';
import {Cluster} from './cluster';
import {
  Instance,
  InstanceOptions,
  CreateInstanceCallback,
  CreateInstanceResponse,
  IInstance,
  ClusterInfo,
} from './instance';
import {google} from '../protos/protos';
import {ServiceError} from 'google-gax';
import * as v2 from './v2';
import * as admin from './admin';
import {PassThrough, Duplex} from 'stream';
import grpcGcpModule = require('grpc-gcp');
import {ClusterUtils} from './utils/cluster';
import {ClientSideMetricsConfigManager} from './client-side-metrics/metrics-config-manager';
import {GCPMetricsHandler} from './client-side-metrics/gcp-metrics-handler';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const streamEvents = require('stream-events');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const PKG = require('../../package.json');

const {grpc} = new gax.GrpcClient();

// Enable channel pooling
const grpcGcp = grpcGcpModule(gaxVendoredGrpc);

export interface GetInstancesCallback {
  (
    err: ServiceError | null,
    result?: Instance[],
    failedLocations?: string[],
    response?: google.bigtable.admin.v2.IListInstancesResponse,
  ): void;
}
export type GetInstancesResponse = [
  Instance[],
  string[],
  google.bigtable.admin.v2.IListInstancesResponse,
];

export type RequestCallback<T> = (err: ServiceError | null, resp?: T) => void;

export interface RequestOptions {
  client:
    | 'BigtableInstanceAdminClient'
    | 'BigtableTableAdminClient'
    | 'BigtableClient';
  reqOpts?: {};
  retryOpts?: {};
  gaxOpts?: {};
  method?: string;
}

export interface AbortableDuplex extends Duplex {
  abort(): void;
}

export interface BigtableOptions extends gax.GoogleAuthOptions {
  /**
   * Override the default API endpoint used to reach Bigtable. This is useful for connecting to your local Bigtable emulator.
   */
  apiEndpoint?: string;

  appProfileId?: string;

  /**
   * Internal only.
   */
  BigtableClient?: gax.ClientOptions;

  /**
   * Internal only.
   */
  BigtableInstanceAdminClient?: gax.ClientOptions;

  /**
   * Internal only.
   */
  BigtableTableAdminClient?: gax.ClientOptions;

  metricsEnabled?: boolean;
}

/**
 * Retrieves the universe domain, if configured.
 *
 * This function checks for a universe domain in the following order:
 * 1. The `universeDomain` property within the provided options.
 * 2. The `universeDomain` or `universe_domain` property within the `opts` object.
 * 3. The `GOOGLE_CLOUD_UNIVERSE_DOMAIN` environment variable.
 *
 * If a universe domain is found in any of these locations, it is returned.
 * Otherwise, the function returns `undefined`.
 *
 * @param {BigtableOptions} options - The Bigtable client options.
 * @param {gax.ClientOptions} [gaxOpts] - Optional gax client options.
 * @returns {string | undefined} The universe domain, or `undefined` if not found.
 */
function getUniverseDomainOnly(
  options: BigtableOptions,
  gaxOpts?: gax.ClientOptions,
): string | undefined {
  // From https://github.com/googleapis/nodejs-bigtable/blob/589540475b0b2a055018a1cb6e475800fdd46a37/src/v2/bigtable_client.ts#L120-L128.
  // This code for universe domain was taken from the Gapic Layer.
  // It is reused here to build the service path.
  const universeDomainEnvVar =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN']
      : undefined;
  return (
    gaxOpts?.universeDomain ??
    gaxOpts?.universe_domain ??
    options?.universeDomain ??
    universeDomainEnvVar
  );
}

/**
 * Retrieves the universe domain options from the provided options.
 *
 * This function examines the provided BigtableOptions and an optional
 * gax.ClientOptions object to determine the universe domain to be used.
 * It prioritizes the `universeDomain` property in the options, then checks
 * for `universeDomain` or `universe_domain` in the gax options, and finally
 * falls back to the `GOOGLE_CLOUD_UNIVERSE_DOMAIN` environment variable.
 * If a universe domain is found, it returns an object containing the
 * `universeDomain` property; otherwise, it returns `null`.
 *
 * @param {BigtableOptions} options - The Bigtable client options.
 * @param {gax.ClientOptions} [gaxOpts] - Optional gax client options.
 * @returns {{universeDomain: string} | null} An object containing the `universeDomain` property if found,
 *   otherwise `null`.
 */
function getUniverseDomainOptions(
  options: BigtableOptions,
  gaxOpts?: gax.ClientOptions,
): {universeDomain: string} | null {
  const universeDomainOnly = getUniverseDomainOnly(options, gaxOpts);
  return universeDomainOnly ? {universeDomain: universeDomainOnly} : null;
}

/**
 * Retrieves the domain to be used for the service path.
 *
 * This function retrieves the domain from gax.ClientOptions passed in or via an environment variable.
 * It defaults to 'googleapis.com' if none has been set.
 * @param {string} [prefix] The prefix for the domain.
 * @param {BigtableOptions} [options] The options passed into the Bigtable client.
 * @param {gax.ClientOptions} [gaxOpts] The gax client options.
 * @returns {string} The universe domain.
 */
function getDomain(
  prefix: string,
  options: BigtableOptions,
  gaxOpts?: gax.ClientOptions,
): string {
  const universeDomainOnly = getUniverseDomainOnly(options, gaxOpts);
  const suffix = universeDomainOnly ? universeDomainOnly : 'googleapis.com';
  return `${prefix}.${suffix}`;
}

/**
 * @typedef {object} ClientConfig
 * @property {string} [apiEndpoint] Override the default API endpoint used
 *     to reach Bigtable. This is useful for connecting to your local Bigtable
 *     emulator.
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
 * @property {string} [appProfileId] An application profile ID, a configuration
 *     string value describing how Cloud Bigtable should treat traffic from a
 *     particular end user application.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {number} [maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 */

/**
 * @see [Creating a Cloud Bigtable Cluster]{@link https://cloud.google.com/bigtable/docs/creating-instance}
 * @see [Cloud Bigtable Concepts Overview]{@link https://cloud.google.com/bigtable/docs/concepts}
 *
 * @class
 * @param {ClientConfig} [options] Configuration options.
 *
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example The Bigtable Emulator
 * ```
 * // Make sure you have the {@link https://cloud.google.com/sdk/downloads gcloud SDK installed}, then run:
 * $ gcloud beta emulators bigtable start
 *
 * // Before running your Node.js app, set the environment variables that this
 * // library will look for to connect to the emulator:
 *
 * $ $(gcloud beta emulators bigtable env-init)
 *
 * ```
 * @example Creating a Bigtable Instance and Cluster
 * ```
 *
 * // Before you create your table, you first need to create a Bigtable Instance
 * // and cluster for the table to be served from.
 *
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 *
 * const callback = (err, instance, operation) => {
 *   operation
 *     .on('error', console.log)
 *     .on('complete', () => {
 *       // `instance` is your newly created Instance object.
 *     });
 * };
 *
 * const instance = bigtable.instance('my-instance');
 *
 * instance.create({
 *   clusters: [
 *     {
 *       id: 'my-cluster',
 *       location: 'us-central1-b',
 *       nodes: 3
 *     }
 *   ]
 * }, callback);
 *
 * // This can also be done from either the Google Cloud Platform Console or the
 * // `gcloud` cli tool. Please refer to the
 * // {@link https://cloud.google.com/bigtable/docs/creating-instance official Bigtable documentation}
 * // for more information.
 *
 * ```
 * @example Creating Tables
 * ```
 * // After creating your instance and enabling the Bigtable APIs, you are now
 * // ready to create your table with {@link Instance#createTable}.
 * instance.createTable('prezzy', function(err, table) {
 *   // `table` is your newly created Table object.
 * });
 *
 * ```
 * @example Creating Column Families
 * ```
 * // Column families are used to group together various pieces of data within
 * // your table. You can think of column families as a mechanism to categorize
 * // all of your data.
 * //
 * // We can create a column family with {@link Table#createFamily}.
 * const table = instance.table('prezzy');
 *
 * table.createFamily('follows', function(err, family) {
 *   // `family` is your newly created Family object.
 * });
 *
 * // It is also possible to create your column families when creating a new
 * // table.
 * const options = {
 *   families: ['follows']
 * };
 *
 * instance.createTable('prezzy', options, function(err, table) {});
 *
 * ```
 * @example Creating Rows
 * ```
 * // New rows can be created within your table using
 * // {@link Table#insert}. You must provide a unique key for each row
 * // to be inserted, this key can then be used to retrieve your row at a later
 * // time.
 * //
 * // With Bigtable, all columns have a unique id composed of a column family
 * // and a column qualifier. In the example below `follows` is the column
 * // family and `tjefferson` is the column qualifier. Together they could be
 * // referred to as `follows:tjefferson`.
 * const rows = [
 *   {
 *     key: 'wmckinley',
 *     data: {
 *       follows: {
 *         tjefferson: 1
 *       }
 *     }
 *   }
 * ];
 *
 * table.insert(rows, err => {
 *   if (!err) {
 *     // Your rows were successfully inserted.
 *   }
 * });
 *
 * ```
 * @example Retrieving Rows
 * ```
 * // If you're anticipating a large number of rows to be returned, we suggest
 * // using the {@link Table#getRows} streaming API.
 * table.createReadStream()
 *   .on('error', console.error)
 *   .on('data', row => {
 *     // `row` is a Row object.
 *   });
 *
 * // If you're not anticpating a large number of results, a callback mode
 * // is also available.
 * const callback = (err, rows) => {
 *   // `rows` is an array of Row objects.
 * };
 *
 * table.getRows(callback);
 *
 * // A range of rows can be retrieved by providing `start` and `end` row keys.
 * const options = {
 *   start: 'gwashington',
 *   end: 'wmckinley'
 * };
 *
 * table.getRows(options, callback);
 *
 * // Retrieve an individual row with {@link Row#get}.
 * const row = table.row('alincoln');
 *
 * row.get(err => {
 *   // `row.data` is now populated.
 * });
 *
 * ```
 * @example Accessing Row Data
 * ```
 * // When retrieving rows, upon success the `row.data` property will be
 * // populated by an object. That object will contain additional objects
 * // for each family in your table that the row has data for.
 * //
 * // By default, when retrieving rows, each column qualifier will provide you
 * // with all previous versions of the data. So your `row.data` object could
 * // resemble the following.
 * {
 *   follows: {
 *     wmckinley: [
 *       {
 *         value: 1,
 *         timestamp: 1466017315951
 *       }, {
 *         value: 2,
 *         timestamp: 1458619200000
 *       }
 *     ]
 *   }
 * }
 *
 * // The `timestamp` field can be used to order cells from newest to oldest.
 * // If you only wish to retrieve the most recent version of the data, you
 * // can specify the number of cells with a {@link Filter} object.
 * const filter = [
 *   {
 *     column: {
 *       cellLimit: 1
 *     }
 *   }
 * ];
 *
 * table.getRows({
 *   filter: filter
 * }, callback);
 *
 * ```
 * @example Deleting Row Data
 * ```
 * // We can delete all of an individual row's cells using {@link Row#delete}.
 * const callback = err => {
 *   if (!err) {
 *     // All cells for this row were deleted successfully.
 *   }
 * };
 *
 * row.delete(callback);
 *
 * // To delete a specific set of cells, we can provide an array of
 * // column families and qualifiers.
 * const cells = [
 *   'follows:gwashington',
 *   'traits'
 * ];
 *
 * row.delete(cells, callback);
 *
 * ```
 * @example Deleting Rows
 * ```
 * // If you wish to delete multiple rows entirely, we can do so with
 * // {@link Table#deleteRows}. You can provide this method with a
 * // row key prefix.
 * const options = {
 *   prefix: 'gwash'
 * };
 *
 * table.deleteRows(options, err => {
 *   if (!err) {
 *     // Rows were deleted successfully.
 *   }
 * });
 *
 * // If you omit the prefix, you can delete all rows in your table.
 * table.deleteRows(err => {
 *   if (!err) {
 *     // All rows were deleted successfully.
 *   }
 * });
 * ```
 */
export class Bigtable {
  customEndpoint?: string;
  options: BigtableOptions;
  api: {
    [index: string]:
      | v2.BigtableClient
      | v2.BigtableInstanceAdminClient
      | v2.BigtableTableAdminClient;
  };
  auth: GoogleAuth;
  projectId: string;
  appProfileId?: string;
  projectName: string;
  shouldReplaceProjectIdToken: boolean;
  static AppProfile: AppProfile;
  static Instance: Instance;
  static Cluster: Cluster;
  _metricsConfigManager: ClientSideMetricsConfigManager;
  admin: admin.BigtableAdmin;
  closed = false;

  constructor(options: BigtableOptions = {}) {
    // Determine what scopes are needed.
    // It is the union of the scopes on all three clients.
    const scopes: string[] = [];
    const clientClasses = [
      v2.BigtableClient,
      admin.v2.BigtableInstanceAdminClient,
      admin.v2.BigtableTableAdminClient,
    ];
    for (const clientClass of clientClasses) {
      for (const scope of clientClass.scopes) {
        if (!scopes.includes(scope)) {
          scopes.push(scope);
        }
      }
    }

    const customEndpoint =
      options.apiEndpoint || process.env.BIGTABLE_EMULATOR_HOST;
    this.customEndpoint = customEndpoint;

    let customEndpointBaseUrl: string | undefined;
    let customEndpointPort: number | undefined;
    let sslCreds: gaxVendoredGrpc.ChannelCredentials | undefined;

    if (customEndpoint) {
      const customEndpointParts = customEndpoint.split(':');
      customEndpointBaseUrl = customEndpointParts[0];
      customEndpointPort = Number(customEndpointParts[1]);
      sslCreds = grpc.credentials.createInsecure();
    }

    const baseOptions = Object.assign({
      libName: 'gccl',
      libVersion: PKG.version,
      port: customEndpointPort || 443,
      sslCreds,
      scopes,
      'grpc.keepalive_time_ms': 30000,
      'grpc.keepalive_timeout_ms': 10000,
    }) as gax.ClientOptions;

    const dataOptions = Object.assign(
      {},
      baseOptions,
      getUniverseDomainOptions(options, options.BigtableClient),
      {
        servicePath:
          customEndpointBaseUrl ||
          getDomain('bigtable', options, options.BigtableClient),
        'grpc.callInvocationTransformer': grpcGcp.gcpCallInvocationTransformer,
        'grpc.channelFactoryOverride': grpcGcp.gcpChannelFactoryOverride,
        'grpc.gcpApiConfig': grpcGcp.createGcpApiConfig({
          channelPool: {
            minSize: 2,
            maxSize: 4,
            maxConcurrentStreamsLowWatermark: 10,
            debugHeaderIntervalSecs: 600,
          },
        }),
      },
      options,
    ) as gax.ClientOptions;

    const adminOptions = Object.assign(
      {},
      baseOptions,
      getUniverseDomainOptions(options, options.BigtableTableAdminClient),
      {
        servicePath:
          customEndpointBaseUrl ||
          getDomain('bigtableadmin', options, options.BigtableTableAdminClient),
      },
      options,
    );
    const instanceAdminOptions = Object.assign(
      {},
      baseOptions,
      getUniverseDomainOptions(options, options.BigtableInstanceAdminClient),
      {
        servicePath:
          customEndpointBaseUrl ||
          getDomain(
            'bigtableadmin',
            options,
            options.BigtableInstanceAdminClient,
          ),
      },
      options,
    );

    this.options = {
      BigtableClient: dataOptions,
      BigtableInstanceAdminClient: instanceAdminOptions,
      BigtableTableAdminClient: adminOptions,
    };
    this.admin = admin.BigtableAdmin.fromBigtable(this);

    this.api = {};
    this.auth = new GoogleAuth(Object.assign({}, baseOptions, options));
    this.projectId = options.projectId || '{{projectId}}';
    this.appProfileId = options.appProfileId;
    this.projectName = `projects/${this.projectId}`;
    this.shouldReplaceProjectIdToken = this.projectId === '{{projectId}}';

    const handlers = !(options.metricsEnabled === false)
      ? [new GCPMetricsHandler(Object.assign({}, options) as ClientOptions)]
      : [];
    this._metricsConfigManager = new ClientSideMetricsConfigManager(handlers);
  }

  createInstance(
    id: string,
    options: InstanceOptions,
  ): Promise<CreateInstanceResponse>;
  createInstance(
    id: string,
    options: InstanceOptions,
    callback: CreateInstanceCallback,
  ): void;
  /**
   * Create a Cloud Bigtable instance.
   *
   * @see [Creating a Cloud Bigtable Instance]{@link https://cloud.google.com/bigtable/docs/creating-instance}
   *
   * @param {string} id The unique id of the instance.
   * @param {object} options Instance creation options.
   * @param {object[]} options.clusters The clusters to be created within the
   *     instance.
   * @param {string} [options.displayName] The descriptive name for this instance
   *     as it appears in UIs.
   * @param {Object.<string, string>} [options.labels] Labels are a flexible and
   *     lightweight mechanism for organizing cloud resources into groups that
   *     reflect a customer's organizational needs and deployment strategies.
   *     They can be used to filter resources and aggregate metrics.
   *
   *   * Label keys must be between 1 and 63 characters long and must conform to
   *     the regular expression: `[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}`.
   *   * Label values must be between 0 and 63 characters long and must conform
   * to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`.
   *   * No more than 64 labels can be associated with a given resource.
   *   * Keys and values must both be under 128 bytes.
   * @param {string} [options.type] The type of the instance. Options are
   *     'production' or 'development'.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Instance} callback.instance The newly created
   *     instance.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   *
   * const callback = function(err, instance, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', console.log)
   *     .on('complete', () => {
   *       // The instance was created successfully.
   *     });
   * };
   *
   * const options = {
   *   displayName: 'my-sweet-instance',
   *   labels: {env: 'prod'},
   *   clusters: [
   *     {
   *       id: 'my-sweet-cluster',
   *       nodes: 3,
   *       location: 'us-central1-b',
   *       storage: 'ssd'
   *     }
   *   ]
   * };
   *
   * bigtable.createInstance('my-instance', options, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bigtable.createInstance('my-instance', options).then(function(data) {
   *   const instance = data[0];
   *   const operation = data[1];
   *   const apiResponse = data[2];
   * });
   * ```
   */
  createInstance(
    id: string,
    options: InstanceOptions,
    callback?: CreateInstanceCallback,
  ): void | Promise<CreateInstanceResponse> {
    if (typeof options !== 'object') {
      throw new Error(
        'A configuration object is required to create an instance.',
      );
    }
    if (!options.clusters) {
      throw new Error(
        'At least one cluster configuration object is required to create an instance.',
      );
    }
    const reqOpts = {
      parent: this.projectName,
      instanceId: id,
      instance: {
        displayName: options.displayName || id,
        labels: options.labels,
      },
    } as google.bigtable.admin.v2.CreateInstanceRequest;

    if (options.type) {
      reqOpts.instance!.type = Instance.getTypeType_(options.type);
    }

    reqOpts.clusters = arrify(options.clusters).reduce(
      (clusters, cluster) => {
        // TOD: Find a way to eliminate all ClusterInfo casts in this file.
        if (!(cluster as ClusterInfo).id) {
          throw new Error(
            'A cluster was provided without an `id` property defined.',
          );
        }

        if (
          typeof (cluster as ClusterInfo).key !== 'undefined' &&
          typeof (cluster as ClusterInfo).encryption !== 'undefined'
        ) {
          throw new Error(
            'A cluster was provided with both `encryption` and `key` defined.',
          );
        }
        ClusterUtils.validateClusterMetadata(cluster as ClusterInfo);
        clusters[(cluster as ClusterInfo).id!] =
          ClusterUtils.getClusterBaseConfigWithFullLocation(
            cluster as ClusterInfo,
            this.projectId,
            undefined,
          );
        Object.assign(clusters[(cluster as ClusterInfo).id!], {
          defaultStorageType: Cluster.getStorageType_(
            (cluster as ClusterInfo).storage!,
          ),
        });

        if ((cluster as ClusterInfo).key) {
          clusters[(cluster as ClusterInfo).id!].encryptionConfig = {
            kmsKeyName: (cluster as ClusterInfo).key,
          };
        }

        if ((cluster as ClusterInfo).encryption) {
          clusters[(cluster as ClusterInfo).id!].encryptionConfig = (
            cluster as ClusterInfo
          ).encryption;
        }

        return clusters;
      },
      {} as {[index: string]: google.bigtable.admin.v2.ICluster},
    );

    this.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'createInstance',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (...args) => {
        const err = args[0];
        if (!err) {
          args.splice(1, 0, this.instance(id));
        }
        callback!(...args);
      },
    );
  }

  getInstances(gaxOptions?: CallOptions): Promise<GetInstancesResponse>;
  getInstances(callback: GetInstancesCallback): void;
  getInstances(gaxOptions: CallOptions, callback: GetInstancesCallback): void;
  /**
   * @typedef {array} GetInstancesResponse
   * @property {Instance[]} 0 Array of {@link Instance} instances.
   * @property {string[]} 1 locations from which Instance information could not be retrieved
   * @property {object} 2 The full API response.
   *     Note: 'failedLocations' property may contain locations from which
   *     Instance information could not be retrieved.
   *     Values are of the form `projects/<project>/locations/<zone_id>`
   */
  /**
   * @callback GetInstancesCallback
   * @param {?Error} err Request error, if any.
   * @param {Instance[]} instances Array of {@link Instance} instances.
   * @param {string[]} locations from which Instance information could not be retrieved
   * @param {object} apiResponse The full API response.
   *     Note: 'failedLocations' property may contain locations from which
   *     Instance information could not be retrieved.
   *     Values are of the form `projects/<project>/locations/<zone_id>`
   */
  /**
   * Get Instance objects for all of your Cloud Bigtable instances.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/classes/CallSettings.html.
   * @param {GetInstancesCallback} [callback] The callback function.
   * @returns {Promise<GetInstancesResponse>}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   *
   * bigtable.getInstances(function(err, instances, response) {
   *   if (!err) {
   *     // `instances` is an array of Instance objects.
   *     if (response.failedLocations.length > 0) {
   *       // These locations contain instances which could not be retrieved.
   *     }
   *   }
   * });
   *
   * ```
   * @example If the callback is omitted, we'll return a Promise.
   * ```
   * bigtable.getInstances().then(function(data) {
   *   const instances = data[0];
   *   const fullResponse = data[2];
   *
   *   if (fullResponse.failedLocations.length > 0) {
   *     // These locations contain instances which could not be retrieved.
   *     const failedLocations = fullResponse.failedLocations;
   *   }
   * });
   * ```
   */
  getInstances(
    gaxOptionsOrCallback?: CallOptions | GetInstancesCallback,
    callback?: GetInstancesCallback,
  ): void | Promise<GetInstancesResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    callback =
      typeof gaxOptionsOrCallback === 'function'
        ? gaxOptionsOrCallback
        : callback;

    const reqOpts = {
      parent: this.projectName,
    };

    this.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'listInstances',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback!(err);
          return;
        }
        const instances = resp.instances.map((instanceData: IInstance) => {
          const instance = this.instance(instanceData.name!.split('/').pop()!);
          instance.metadata = instanceData;
          return instance;
        });
        callback!(null, instances, resp.failedLocations, resp);
      },
    );
  }

  /**
   * Get a reference to a Cloud Bigtable instance.
   *
   * @param {string} id The id of the instance.
   * @returns {Instance}
   */
  instance(name: string) {
    return new Instance(this, name);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  request<T = any>(config?: any): AbortableDuplex;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request<T = any>(config?: any, callback?: RequestCallback<T>): void;
  /**
   * Funnel all API requests through this method, to be sure we have a project ID.
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @param {function} [callback] Callback function.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request<T = any>(
    config: RequestOptions,
    callback?: (err: ServiceError | null, resp?: T) => void,
  ): void | AbortableDuplex {
    const isStreamMode = !callback;

    let gaxStream: gax.CancellableStream;
    let stream: AbortableDuplex;

    if (this.closed) {
      const error = Object.assign(
        new Error('The client has already been closed.'),
        {
          name: 'Closed',
          code: grpc.status.ABORTED,
          details: 'The client has already been closed.',
          metadata: new grpc.Metadata(),
        },
      );
      if (isStreamMode) {
        stream = streamEvents(new PassThrough({objectMode: true}));
        stream.abort = () => {};
        setImmediate(() => stream.destroy(error));
        return stream;
      } else {
        callback?.(error as ServiceError);
        return;
      }
    }

    const prepareGaxRequest = (
      callback: (err: Error | null, fn?: Function) => void,
    ) => {
      this.getProjectId_((err, projectId) => {
        if (err) {
          callback(err);
          return;
        }
        let gaxClient = this.api[config.client];
        if (!gaxClient) {
          // Lazily instantiate client.
          const clientOptions = this.options[config.client]!;
          gaxClient = new v2[config.client](clientOptions);
          this.api[config.client] = gaxClient;
        }
        let reqOpts = extend(true, {}, config.reqOpts);
        if (this.shouldReplaceProjectIdToken && projectId !== '{{projectId}}') {
          reqOpts = replaceProjectIdToken(reqOpts, projectId!);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const requestFn = (gaxClient as any)[config.method!].bind(
          gaxClient,
          reqOpts,
          config.gaxOpts,
        );
        callback(null, requestFn);
      });
    };

    const gapicStreamingMethods = {
      listAppProfilesStream: true,
      listBackupsStream: true,
      listTablesStream: true,
    };

    if (isStreamMode) {
      stream = streamEvents(new PassThrough({objectMode: true}));
      stream.abort = () => {
        if (gaxStream && gaxStream.cancel) {
          gaxStream.cancel();
        }
      };
      if (config.method! in gapicStreamingMethods) {
        stream.once('reading', makeGapicStreamRequest);
      } else {
        stream.once('reading', makeRequestStream);
      }
      return stream;
    } else {
      makeRequestCallback();
    }

    function makeRequestCallback() {
      prepareGaxRequest((err, requestFn) => {
        if (err) {
          callback!(err as ServiceError);
          return;
        }
        requestFn!(callback);
      });
    }

    function makeRequestStream() {
      const retryRequestOptions = Object.assign(
        {
          currentRetryAttempt: 0,
          noResponseRetries: 0,
          objectMode: true,
        },
        config.retryOpts,
      );

      config.gaxOpts = Object.assign(config.gaxOpts || {}, {
        retryRequestOptions,
      });
      prepareGaxRequest((err, requestFn) => {
        if (err) {
          stream.destroy(err);
          return;
        }

        gaxStream = requestFn!();
        gaxStream
          .on('error', stream.destroy.bind(stream))
          .on('metadata', stream.emit.bind(stream, 'metadata'))
          .on('status', stream.emit.bind(stream, 'status'))
          .on('request', stream.emit.bind(stream, 'request'))
          .pipe(stream);
      });
    }

    function makeGapicStreamRequest() {
      prepareGaxRequest((err, requestFn) => {
        if (err) {
          stream.destroy(err);
          return;
        }
        gaxStream = requestFn!();
        gaxStream
          .on('error', (err: Error) => {
            stream.destroy(err);
          })
          .on('metadata', metadata => {
            stream.emit('metadata', metadata);
          })
          .on('response', response => {
            stream.emit('response', response);
          })
          .pipe(stream);
      });
    }
  }

  /**
   * Close all bigtable clients. New requests will be rejected but it will not
   * kill connections with pending requests.
   */
  async close(): Promise<void[]> {
    // Close all of the clients.
    const combined = Object.keys(this.api).map(clientType =>
      this.api[clientType].close(),
    );
    const results = await Promise.all(combined);

    // Clear them out of our cache.
    Object.keys(this.api).forEach(clientType => {
      delete this.api[clientType];
    });

    // Mark as closed.
    this.closed = true;

    return results;
  }

  /**
   * Determine and localize the project ID. If a user provides an ID, we bypass
   * checking with the auth client for an ID.
   *
   * @private
   *
   * @param {function} callback Callback function.
   * @param {?error} callback.err An error returned from the auth client.
   * @param {string} callback.projectId The detected project ID.
   */
  getProjectId_(callback: (err: Error | null, projectId?: string) => void) {
    const projectIdRequired =
      this.projectId === '{{projectId}}' && !this.customEndpoint;

    if (!projectIdRequired) {
      setImmediate(callback, null, this.projectId);
      return;
    }

    this.auth.getProjectId((err, projectId) => {
      if (err) {
        callback(err);
        return;
      }
      this.projectId = projectId!;
      callback(null, this.projectId);
    });
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Bigtable, {
  exclude: ['close', 'instance', 'operation', 'request'],
});

/**
 * {@link AppProfile} class.
 *
 * @name Bigtable.AppProfile
 * @see AppProfile
 * @type {Constructor}
 */

/**
 * {@link Cluster} class.
 *
 * @name Bigtable.Cluster
 * @see Cluster
 * @type {Constructor}
 */

/**
 * {@link Instance} class.
 *
 * @name Bigtable.Instance
 * @see Instance
 * @type {Constructor}
 */

// Allow creating a `Bigtable` instance without using the `new` keyword.
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-class-assign
(Bigtable as any) = new Proxy(Bigtable, {
  apply(target, thisArg, argumentsList) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (target as any)(...argumentsList);
  },
});
/**
 * The default export of the `@google-cloud/bigtable` package is the
 * {@link Bigtable} class.
 *
 * See {@link Bigtable} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {constructor} @google-cloud/bigtable
 * @alias nodejs-bigtable
 *
 * @example Install the client library with <a href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save @google-cloud/bigtable
 *
 * ```
 * @example Import the client library
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 *
 * ```
 * @example Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:
 * ```
 * const bigtable = new Bigtable();
 *
 * ```
 * @example Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:
 * ```
 * const bigtable = new Bigtable({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * ```
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:bigtable_quickstart
 * Full quickstart example:
 */

module.exports = Bigtable;
module.exports.admin = admin;
module.exports.v2 = v2;
module.exports.Bigtable = Bigtable;
module.exports.SqlTypes = SqlTypes;

export {v2};
export {admin};
export {protos};
export {
  AppProfile,
  AppProfileExistsCallback,
  AppProfileExistsResponse,
  AppProfileOptions,
  CreateAppProfileCallback,
  CreateAppProfileResponse,
  DeleteAppProfileCallback,
  DeleteAppProfileOptions,
  DeleteAppProfileResponse,
  GetAppProfileCallback,
  GetAppProfileMetadataCallback,
  GetAppProfileMetadataResponse,
  GetAppProfileResponse,
  GetAppProfilesCallback,
  GetAppProfilesResponse,
  SetAppProfileMetadataCallback,
  SetAppProfileMetadataResponse,
} from './app-profile';
export {
  Backup,
  BackupTimestamp,
  DeleteBackupCallback,
  DeleteBackupResponse,
  GenericBackupCallback,
  GetBackupCallback,
  GetBackupResponse,
  GetBackupsCallback,
  GetBackupsOptions,
  GetBackupsResponse,
  IBackup,
  ModifiableBackupFields,
  RestoreTableCallback,
  RestoreTableResponse,
  BackupSetMetadataCallback,
  BackupSetMetadataResponse,
  BackupGetMetadataCallback,
  BackupGetMetadataResponse,
} from './backup';
export {
  Chunk,
  ChunkTransformer,
  Data,
  Qualifier,
  RowStateEnum,
  TransformErrorProps,
  Value,
} from './chunktransformer';
export {
  Cluster,
  ICluster,
  IOperation,
  ApiResponse,
  BooleanResponse,
  CreateBackupCallback,
  CreateBackupResponse,
  CreateClusterCallback,
  CreateClusterOptions,
  CreateClusterResponse,
  DeleteClusterCallback,
  ExistsClusterCallback,
  GenericCallback,
  GenericClusterCallback,
  GenericOperationCallback,
  GetClusterCallback,
  GetClusterMetadataCallback,
  GetClusterMetadataResponse,
  GetClusterResponse,
  GetClustersCallback,
  GetClustersResponse,
  IEmpty,
  SetClusterMetadataCallback,
  SetClusterMetadataResponse,
} from './cluster';
export {
  CreateFamilyCallback,
  CreateFamilyOptions,
  FamilyError,
  GcRule,
  IGcRule,
  ITable,
  CreateFamilyResponse,
  DeleteFamilyCallback,
  DeleteFamilyResponse,
  Family,
  FamilyExistsCallback,
  FamilyExistsResponse,
  GetFamilyCallback,
  GetFamilyMetadataCallback,
  GetFamilyMetadataResponse,
  GetFamilyOptions,
  GetFamilyResponse,
  IColumnFamily,
  IModification,
  InstanceCallback,
  SetFamilyMetadataCallback,
  SetFamilyMetadataOptions,
  SetFamilyMetadataResponse,
} from './family';
export {
  RawFilter,
  BoundData,
  Column,
  Condition,
  Filter,
  FilterError,
  Time,
  ValueFilter,
} from './filter';
export {
  ClusterInfo,
  CreateInstanceCallback,
  Instance,
  InstanceOptions,
  CreateInstanceResponse,
  DeleteInstanceCallback,
  DeleteInstanceResponse,
  GetInstanceCallback,
  GetInstanceMetadataCallback,
  GetInstanceMetadataResponse,
  GetInstanceResponse,
  IInstance,
  InstanceExistsCallback,
  InstanceExistsResponse,
  SetInstanceMetadataCallback,
  SetInstanceMetadataResponse,
} from './instance';
export {
  IMutation,
  Bytes,
  ConvertFromBytesOptions,
  ConvertFromBytesUserOptions,
  IMutateRowRequest,
  ISetCell,
  JsonObj,
  Mutation,
  MutationConstructorObj,
  MutationSettingsObj,
  ParsedColumn,
  SetCellObj,
  TimeRange,
  ValueObj,
} from './mutation';
export {
  GetRowCallback,
  IncrementResponse,
  Rule,
  CreateRowCallback,
  CreateRowOptions,
  CreateRowResponse,
  CreateRulesCallback,
  CreateRulesResponse,
  FilterCallback,
  FilterConfig,
  FilterConfigOption,
  FilterResponse,
  FormatFamiliesOptions,
  GetRowMetadataCallback,
  GetRowMetadataResponse,
  GetRowOptions,
  GetRowResponse,
  IncrementCallback,
  Row,
  RowError,
  RowExistsCallback,
  RowExistsResponse,
} from './row';
export {
  GetIamPolicyOptions,
  GetRowsOptions,
  GetTablesOptions,
  CheckConsistencyCallback,
  CheckConsistencyResponse,
  CreateTableCallback,
  CreateTableOptions,
  CreateTableResponse,
  DeleteRowsCallback,
  DeleteRowsResponse,
  DeleteTableCallback,
  DeleteTableResponse,
  Entry,
  GenerateConsistencyTokenCallback,
  GenerateConsistencyTokenResponse,
  GetFamiliesCallback,
  GetFamiliesResponse,
  GetIamPolicyCallback,
  GetIamPolicyResponse,
  GetMetadataCallback,
  GetMetadataOptions,
  GetMetadataResponse,
  GetReplicationStatesCallback,
  GetReplicationStatesResponse,
  GetRowsCallback,
  GetRowsResponse,
  GetTableCallback,
  GetTableOptions,
  GetTableResponse,
  GetTablesCallback,
  GetTablesResponse,
  InsertRowsCallback,
  InsertRowsResponse,
  MutateCallback,
  MutateOptions,
  MutateResponse,
  PartialFailureError,
  Policy,
  PolicyBinding,
  PrefixRange,
  SampleRowKeysCallback,
  SampleRowsKeysResponse,
  SetIamPolicyCallback,
  SetIamPolicyResponse,
  Table,
  TableExistsCallback,
  TableExistsResponse,
  TestIamPermissionsCallback,
  TestIamPermissionsResponse,
  TruncateCallback,
  TruncateResponse,
  WaitForReplicationCallback,
  WaitForReplicationResponse,
} from './table';
export {SqlTypes};
