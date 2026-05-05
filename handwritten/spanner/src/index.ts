/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import {GrpcService, GrpcServiceConfig} from './common-grpc/service';
import {PreciseDate} from '@google-cloud/precise-date';
import {replaceProjectIdToken} from '@google-cloud/projectify';
import {promisifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
import {GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import * as path from 'path';
import {common as p} from 'protobufjs';
import * as streamEvents from 'stream-events';
import {EventEmitter} from 'events';
import * as through from 'through2';
import {
  codec,
  Float32,
  Float,
  Int,
  Numeric,
  PGNumeric,
  PGJsonb,
  SpannerDate,
  Interval,
  Struct,
  ProtoMessage,
  ProtoEnum,
  IProtoMessageParams,
  IProtoEnumParams,
} from './codec';
import {context, propagation} from '@opentelemetry/api';
import {Backup} from './backup';
import {Database} from './database';
import {
  Instance,
  CreateInstanceCallback,
  CreateInstanceResponse,
} from './instance';
import {
  InstanceConfig,
  CreateInstanceConfigCallback,
  CreateInstanceConfigResponse,
} from './instance-config';
import {
  grpc,
  GrpcClientOptions,
  CallOptions,
  GoogleError,
  ClientOptions,
} from 'google-gax';
import {google, google as instanceAdmin} from '../protos/protos';
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import {
  PagedOptions,
  PagedResponse,
  PagedCallback,
  PagedOptionsWithFilter,
  CLOUD_RESOURCE_HEADER,
  NormalCallback,
  getCommonHeaders,
} from './common';
import {Session} from './session';
import {SessionPool} from './session-pool';
import {Table} from './table';
import {
  MutationGroup,
  MutationSet,
  PartitionedDml,
  Snapshot,
  Transaction,
} from './transaction';
import grpcGcpModule = require('grpc-gcp');
const grpcGcp = grpcGcpModule(grpc);
import * as v1 from './v1';
import {
  ObservabilityOptions,
  ensureInitialContextManagerSet,
} from './instrument';
import {
  attributeXGoogSpannerRequestIdToActiveSpan,
  injectRequestIDIntoError,
  nextSpannerClientId,
} from './request_id_header';
import {PeriodicExportingMetricReader} from '@opentelemetry/sdk-metrics';
import {MetricInterceptor} from './metrics/interceptor';
import {CloudMonitoringMetricsExporter} from './metrics/spanner-metrics-exporter';
import {MetricsTracerFactory} from './metrics/metrics-tracer-factory';
import {MetricsTracer} from './metrics/metrics-tracer';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const gcpApiConfig = require('./spanner_grpc_config.json');

export type IOperation = instanceAdmin.longrunning.IOperation;

export type GetInstancesOptions = PagedOptionsWithFilter;

export type GetInstancesResponse = PagedResponse<
  Instance,
  instanceAdmin.spanner.admin.instance.v1.IListInstancesResponse
>;
export type GetInstancesCallback = PagedCallback<
  Instance,
  instanceAdmin.spanner.admin.instance.v1.IListInstancesResponse
>;

export type GetInstanceConfigsOptions = PagedOptions;
export type GetInstanceConfigsResponse = PagedResponse<
  instanceAdmin.spanner.admin.instance.v1.IInstanceConfig,
  instanceAdmin.spanner.admin.instance.v1.IListInstanceConfigsResponse
>;
export type GetInstanceConfigsCallback = PagedCallback<
  instanceAdmin.spanner.admin.instance.v1.IInstanceConfig,
  instanceAdmin.spanner.admin.instance.v1.IListInstanceConfigsResponse
>;

export interface GetInstanceConfigOptions {
  gaxOptions?: CallOptions;
}
export type GetInstanceConfigResponse = [IInstanceConfig];
export type GetInstanceConfigCallback = NormalCallback<IInstanceConfig>;

export type GetInstanceConfigOperationsOptions = PagedOptionsWithFilter;
export type GetInstanceConfigOperationsResponse = PagedResponse<
  IOperation,
  instanceAdmin.spanner.admin.instance.v1.IListInstanceConfigOperationsResponse
>;
export type GetInstanceConfigOperationsCallback = PagedCallback<
  IOperation,
  instanceAdmin.spanner.admin.instance.v1.IListInstanceConfigOperationsResponse
>;

/**
 * Session pool configuration options.
 * @property {boolean} [routeToLeaderEnabled=True] If set to false leader aware routing will be disabled.
 * Disabling leader aware routing would route all requests in RW/PDML transactions to any region.
 * @property {google.spanner.v1.IDirectedReadOptions} [directedReadOptions] Sets the DirectedReadOptions for all ReadRequests and ExecuteSqlRequests for the Client.
 * Indicates which replicas or regions should be used for non-transactional reads or queries.
 * DirectedReadOptions won't be set for readWrite transactions"
 * @property {ObservabilityOptions} [observabilityOptions] Sets the observability options to be used for OpenTelemetry tracing
 * @property {boolean} [disableBuiltInMetrics=True] If set to true, built-in metrics will be disabled.
 */
export interface SpannerOptions extends GrpcClientOptions {
  apiEndpoint?: string;
  servicePath?: string;
  port?: number;
  sslCreds?: grpc.ChannelCredentials;
  routeToLeaderEnabled?: boolean;
  directedReadOptions?: google.spanner.v1.IDirectedReadOptions | null;
  defaultTransactionOptions?: Pick<
    RunTransactionOptions,
    'isolationLevel' | 'readLockMode'
  >;
  observabilityOptions?: ObservabilityOptions;
  disableBuiltInMetrics?: boolean;
  interceptors?: any[];
  sessionLabels?: {[key: string]: string};
  /**
   * The Trusted Cloud Domain (TPC) DNS of the service used to make requests.
   * Defaults to `googleapis.com`.
   * We support both camelCase and snake_case for the universe domain.
   * Customer may set any of these as both the options are same,
   * they both points to universe endpoint.
   * There is no preference for any of these option; however exception will be
   * thrown if both are set to different values.
   */
  universe_domain?: string;
  universeDomain?: string;
}
export interface RequestConfig {
  client: string;
  method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reqOpts: any;
  gaxOpts?: CallOptions;
  headers: {[k: string]: string};
}
export interface CreateInstanceRequest {
  config?: string;
  nodes?: number;
  processingUnits?: number;
  displayName?: string;
  labels?: {[k: string]: string} | null;
  gaxOptions?: CallOptions;
}
export interface CreateInstanceConfigRequest {
  displayName?: string;
  replicas?: google.spanner.admin.instance.v1.IReplicaInfo[];
  baseConfig?: string;
  labels?: {[k: string]: string} | null;
  etag?: string;
  validateOnly?: boolean;
  gaxOptions?: CallOptions;
}

/**
 * Translates enum values to string keys.
 *
 * @param E enum type.
 */
export type EnumKey<E extends {[index: string]: unknown}> = keyof E;

/**
 * Translates an enum property of an object from enum value to enum key, leaving
 * all other properties as-is.
 *
 * @param T type containing properties to translate.
 * @param U name of the enum property.
 * @param E enum type to translate.
 */
export type TranslateEnumKeys<
  T,
  U extends keyof T,
  E extends {[index: string]: unknown},
> = {
  [P in keyof T]: P extends U ? EnumKey<E> | null | undefined : T[P];
};

/**
 * Retrieves the universe domain.
 *
 * This function checks for a universe domain in the following order:
 * 1. The `universeDomain` property within the provided spanner options.
 * 2. The `universe_domain` property within the provided spanner options.
 * 3. The `GOOGLE_CLOUD_UNIVERSE_DOMAIN` environment variable.
 * 4. If none of the above properties will be set, it will fallback to `googleapis.com`.
 *
 * For consistency with the Auth client, if the `universe_domain` option or the
 * `GOOGLE_CLOUD_UNIVERSE_DOMAIN` env variable is used, this function will also set the
 * `universeDomain` property within the provided `SpannerOptions` object. This ensures the
 * Spanner client's universe domain aligns with the universe configured for authentication.
 *
 * @param {SpannerOptions} options - The Spanner client options.
 * @returns {string} The universe domain.
 */
function getUniverseDomain(options: SpannerOptions): string {
  const universeDomainEnvVar =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN']
      : undefined;
  const universeDomain =
    options?.universeDomain ??
    options?.universe_domain ??
    universeDomainEnvVar ??
    'googleapis.com';
  // if the options.universe_domain/GOOGLE_CLOUD_UNIVERSE_DOMAIN env variable is set,
  // set its value to the Spanner `universeDomain` options
  // to match it with the universe from Auth Client
  if (
    !options?.universeDomain &&
    (options?.universe_domain || process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN)
  ) {
    options.universeDomain = universeDomain;
  }
  return universeDomain;
}

/**
 * [Cloud Spanner](https://cloud.google.com/spanner) is a highly scalable,
 * transactional, managed, NewSQL database service. Cloud Spanner solves the
 * need for a horizontally-scaling database with consistent global transaction
 * and SQL semantics. With Cloud Spanner you don't need to choose between
 * consistency and horizontal scaling — you get both.
 *
 * @class
 *
 * @see [Cloud Spanner Documentation](https://cloud.google.com/spanner/docs)
 * @see [Cloud Spanner Concepts](https://cloud.google.com/spanner/docs/concepts)
 *
 * @example Install the client library with <a
 * href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save @google-cloud/spanner
 * ```
 *
 * @example Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:
 * ```
 * const client = new Spanner();
 * ```
 *
 * @example Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:
 * ```
 * const client = new Spanner({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 * ```
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:spanner_quickstart
 * Full quickstart example:
 *
 * @param {ClientConfig} [options] Configuration options.
 */
class Spanner extends GrpcService {
  options: GoogleAuthOptions;
  auth: GoogleAuth;
  clients_: Map<string, {}>;
  instances_: Map<string, Instance>;
  instanceConfigs_: Map<string, InstanceConfig>;
  projectIdReplaced_: boolean;
  projectId_?: string;
  projectFormattedName_: string;
  commonHeaders_: {[k: string]: string};
  routeToLeaderEnabled = true;
  directedReadOptions: google.spanner.v1.IDirectedReadOptions | null;
  defaultTransactionOptions: RunTransactionOptions;
  _observabilityOptions: ObservabilityOptions | undefined;
  sessionLabels: {[key: string]: string} | null;
  private _universeDomain: string;
  private _isInSecureCredentials: boolean;
  private static _isAFEServerTimingEnabled: boolean | undefined;
  readonly _nthClientId: number;

  /**
   * Placeholder used to auto populate a column with the commit timestamp.
   * This can only be used for timestamp columns that have set the option
   * "(allow_commit_timestamp=true)" in the schema.
   *
   * @type {string}
   */
  static COMMIT_TIMESTAMP = 'spanner.commit_timestamp()';
  static POSTGRESQL =
    google.spanner.admin.database.v1.DatabaseDialect.POSTGRESQL;
  static GOOGLE_STANDARD_SQL =
    google.spanner.admin.database.v1.DatabaseDialect.GOOGLE_STANDARD_SQL;

  /**
   * Returns whether AFE (Application Frontend Extension) server timing is enabled.
   *
   * This method checks the value of the environment variable
   * `SPANNER_DISABLE_AFE_SERVER_TIMING`. If the variable is explicitly set to the
   * string `'true'`, then AFE server timing is considered disabled, and this method
   * returns `false`. For all other values (including if the variable is unset),
   * the method returns `true`.
   *
   * @returns {boolean} `true` if AFE server timing is enabled; otherwise, `false`.
   */
  public static isAFEServerTimingEnabled = (): boolean => {
    if (this._isAFEServerTimingEnabled === undefined) {
      this._isAFEServerTimingEnabled =
        process.env['SPANNER_DISABLE_AFE_SERVER_TIMING'] !== 'true';
    }
    return this._isAFEServerTimingEnabled;
  };

  /** Resets the cached value (use in tests if env changes). */
  public static _resetAFEServerTimingForTest(): void {
    this._isAFEServerTimingEnabled = undefined;
  }

  /**
   * Gets the configured Spanner emulator host from an environment variable.
   */
  static getSpannerEmulatorHost():
    | {endpoint: string; port?: number}
    | undefined {
    const endpointWithPort = process.env.SPANNER_EMULATOR_HOST;
    if (endpointWithPort) {
      if (
        endpointWithPort.startsWith('http:') ||
        endpointWithPort.startsWith('https:')
      ) {
        throw new GoogleError(
          'SPANNER_EMULATOR_HOST must not start with a protocol specification (http/https)',
        );
      }
      const index = endpointWithPort.indexOf(':');
      if (index > -1) {
        const portName = endpointWithPort.substring(index + 1);
        const port = +portName;
        if (!port || port < 1 || port > 65535) {
          throw new GoogleError(`Invalid port number: ${portName}`);
        }
        return {
          endpoint: endpointWithPort.substring(0, index),
          port: +endpointWithPort.substring(index + 1),
        };
      }
      return {endpoint: endpointWithPort};
    }
    return undefined;
  }

  constructor(options?: SpannerOptions) {
    const scopes: Array<{}> = [];
    const clientClasses = [
      v1.DatabaseAdminClient,
      v1.InstanceAdminClient,
      v1.SpannerClient,
    ];
    for (const clientClass of clientClasses) {
      for (const scope of clientClass.scopes) {
        if (scopes.indexOf(scope) === -1) {
          scopes.push(scope);
        }
      }
    }

    options = Object.assign(
      {
        libName: 'gccl',
        libVersion: require('../../package.json').version,
        scopes,
        // Add grpc keep alive setting
        'grpc.keepalive_time_ms': 120000,
        // Enable grpc-gcp support
        'grpc.callInvocationTransformer': grpcGcp.gcpCallInvocationTransformer,
        'grpc.channelFactoryOverride': grpcGcp.gcpChannelFactoryOverride,
        'grpc.gcpApiConfig': grpcGcp.createGcpApiConfig(gcpApiConfig),
        grpc,
      },
      options || {},
    ) as {} as SpannerOptions;

    const directedReadOptions = options.directedReadOptions
      ? options.directedReadOptions
      : null;
    delete options.directedReadOptions;

    const defaultTransactionOptions = options.defaultTransactionOptions
      ? options.defaultTransactionOptions
      : {
          isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
          readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
        };
    delete options.defaultTransactionOptions;

    if (
      options?.universe_domain &&
      options?.universeDomain &&
      options?.universe_domain !== options?.universeDomain
    ) {
      throw new Error(
        'Please set either universe_domain or universeDomain, but not both.',
      );
    }

    const emulatorHost = Spanner.getSpannerEmulatorHost();
    if (
      emulatorHost &&
      emulatorHost.endpoint &&
      emulatorHost.endpoint.length > 0
    ) {
      options.servicePath = emulatorHost.endpoint;
      options.port = emulatorHost.port;
      options.sslCreds = grpc.credentials.createInsecure();
    }

    const universeEndpoint = getUniverseDomain(options);
    const spannerUniverseEndpoint = 'spanner.' + universeEndpoint;
    const config = {
      baseUrl:
        options.apiEndpoint || options.servicePath || spannerUniverseEndpoint,
      protosDir: path.resolve(__dirname, '../protos'),
      protoServices: {
        Operations: {
          path: 'google/longrunning/operations.proto',
          service: 'longrunning',
        },
      },
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      packageJson: require('../../package.json'),
    } as {} as GrpcServiceConfig;
    super(config, options);

    if (options.routeToLeaderEnabled === false) {
      this.routeToLeaderEnabled = false;
    }

    this._isInSecureCredentials = options.sslCreds?._isSecure() === false;
    this.options = options;
    this.auth = new GoogleAuth(this.options);
    this.clients_ = new Map();
    this.instances_ = new Map();
    this.instanceConfigs_ = new Map();
    this.projectIdReplaced_ = false;
    this.projectFormattedName_ = 'projects/' + this.projectId;
    this.directedReadOptions = directedReadOptions;
    this.defaultTransactionOptions = defaultTransactionOptions;
    this._observabilityOptions = options.observabilityOptions;
    this.sessionLabels = options.sessionLabels || null;
    this.commonHeaders_ = getCommonHeaders(
      this.projectFormattedName_,
      this._observabilityOptions?.enableEndToEndTracing,
    );
    ensureInitialContextManagerSet();
    this._nthClientId = nextSpannerClientId();
    this._universeDomain = universeEndpoint;
    this.projectId_ = options.projectId;
    this.configureMetrics_(options.disableBuiltInMetrics);
  }

  get universeDomain() {
    return this._universeDomain;
  }

  /**
   * Gets the InstanceAdminClient object.
   * The returned InstanceAdminClient object is a shared, managed instance and should not be manually closed.
   * @returns {v1.InstanceAdminClient} The InstanceAdminClient object
   * @example
   *  ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner({
   *    projectId: projectId,
   *  });
   * const instanceAdminClient = spanner.getInstanceAdminClient();
   * ```
   */
  getInstanceAdminClient(): v1.InstanceAdminClient {
    const clientName = 'InstanceAdminClient';
    if (!this.clients_.has(clientName)) {
      this.clients_.set(
        clientName,
        new v1[clientName](this.options as ClientOptions),
      );
    }
    return this.clients_.get(clientName)! as v1.InstanceAdminClient;
  }

  /**
   * Gets the DatabaseAdminClient object.
   * The returned DatabaseAdminClient object is a managed, shared instance and should not be manually closed.
   * @returns {v1.DatabaseAdminClient} The DatabaseAdminClient object.
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner({
   *    projectId: projectId,
   * });
   * const databaseAdminClient = spanner.getDatabaseAdminClient();
   * ```
   */
  getDatabaseAdminClient(): v1.DatabaseAdminClient {
    const clientName = 'DatabaseAdminClient';
    if (!this.clients_.has(clientName)) {
      this.clients_.set(
        clientName,
        new v1[clientName](this.options as ClientOptions),
      );
    }
    return this.clients_.get(clientName)! as v1.DatabaseAdminClient;
  }

  /** Closes this Spanner client and cleans up all resources used by it. */
  close(): void {
    this.clients_.forEach(c => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const client = c as any;
      if (client.operationsClient && client.operationsClient.close) {
        client.operationsClient.close();
      }
      client.close();
    });
    cleanup().catch(err => {
      console.error('Error occured during cleanup: ', err);
    });
  }

  /**
   * Config for the new instance.
   *
   * @typedef {object} CreateInstanceRequest
   * @property {string} config The name of the instance's configuration.
   * @property {number} [nodes=1] The number of nodes allocated to this instance.
   *     Defaults to 1.
   * @property {Object.<string, string>} [labels] Labels are a flexible and
   *     lightweight mechanism for organizing cloud resources into groups that
   *     reflect a customer's organizational needs and deployment strategies.
   *     Cloud Labels can be used to filter collections of resources. They can
   *     be used to control how resource metrics are aggregated. And they can
   *     be used as arguments to policy management rules (e.g. route,
   *     firewall, load balancing, etc.).
   * @property {string} [displayName] The descriptive name for this instance
   *     as it appears in UIs. Must be unique per project and between 4 and 30
   *     characters in length.
   *     Defaults to the instance unique identifier '<instance>' of the full
   *     instance name of the form 'projects/<project>/instances/<instance>'.
   */
  /**
   * @typedef {array} CreateInstanceResponse
   * @property {Instance} 0 The new {@link Instance}.
   * @property {google.longrunning.Operation} 1 An operation object that can be used to check
   *     the status of the request.
   * @property {google.longrunning.IOperation} 2 The full API response.
   */
  /**
   * @callback CreateInstanceCallback
   * @param {?Error} err Request error, if any.
   * @param {Instance} instance The new {@link Instance}.
   * @param {google.longrunning.Operation} operation An operation object that can be used to
   *     check the status of the request.
   * @param {google.longrunning.IOperation} apiResponse The full API response.
   */
  /**
   * Create an instance.
   *
   * Wrapper around {@link v1.InstanceAdminClient#createInstance}.
   *
   * @see {@link v1.InstanceAdminClient#createInstance}
   * @see [CreateInstance API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance)
   *
   * @throws {GoogleError} If a name is not provided.
   * @throws {GoogleError} If a configuration object is not provided.
   *
   * @param {string} name The name of the instance to be created.
   * @param {CreateInstanceRequest} config Configuration object.
   * @param {CreateInstanceCallback} [callback] Callback function.
   * @returns {Promise<CreateInstanceResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const config = {
   *   config: 'regional-us-central1',
   *   nodes: 1
   * };
   *
   * function callback(err, instance, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Instance created successfully.
   *     });
   * }
   *
   * spanner.createInstance('new-instance-name', config, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * spanner.createInstance('new-instance-name', config)
   *   .then(function(data) {
   *     const instance = data[0];
   *     const operation = data[1];
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Instance created successfully.
   *   });
   * ```
   */
  createInstance(
    name: string,
    config: CreateInstanceRequest,
  ): Promise<CreateInstanceResponse>;
  createInstance(
    name: string,
    config: CreateInstanceRequest,
    callback: CreateInstanceCallback,
  ): void;
  createInstance(
    name: string,
    config: CreateInstanceRequest,
    callback?: CreateInstanceCallback,
  ): void | Promise<CreateInstanceResponse> {
    if (!name) {
      throw new GoogleError('A name is required to create an instance.');
    }
    if (!config) {
      throw new GoogleError(
        ['A configuration object is required to create an instance.'].join(''),
      );
    }
    const formattedName = Instance.formatName_(this.projectId, name);
    const displayName = config.displayName || formattedName.split('/').pop();
    const reqOpts = {
      parent: this.projectFormattedName_,
      instanceId: formattedName.split('/').pop(),
      instance: extend(
        {
          name: formattedName,
          displayName,
          nodeCount: config.nodes,
          processingUnits: config.processingUnits,
        },
        config,
      ),
    };

    if (reqOpts.instance.nodeCount && reqOpts.instance.processingUnits) {
      throw new GoogleError(
        ['Only one of nodeCount or processingUnits can be specified.'].join(''),
      );
    }
    if (!reqOpts.instance.nodeCount && !reqOpts.instance.processingUnits) {
      // If neither nodes nor processingUnits are specified, default to a
      // nodeCount of 1.
      reqOpts.instance.nodeCount = 1;
    }

    delete reqOpts.instance.nodes;
    delete reqOpts.instance.gaxOptions;

    if (config.config!.indexOf('/') === -1) {
      reqOpts.instance.config = `projects/${this.projectId}/instanceConfigs/${config.config}`;
    }
    this.request(
      {
        client: 'InstanceAdminClient',
        method: 'createInstance',
        reqOpts,
        gaxOpts: config.gaxOptions,
        headers: this.commonHeaders_,
      },
      (err, operation, resp) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }
        const instance = this.instance(formattedName);
        instance._observabilityOptions = this._observabilityOptions;
        callback!(null, instance, operation, resp);
      },
    );
  }

  /**
   * Query object for listing instances.
   *
   * @typedef {object} GetInstancesOptions
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @property {string} [filter] An expression for filtering the results of the
   *     request. Filter rules are case insensitive. The fields eligible for
   *     filtering are:
   *     - **`name`**
   *     - **`display_name`**
   *     - **`labels.key`** where key is the name of a label
   *
   *     Some examples of using filters are:
   *     - **`name:*`** The instance has a name.
   *     - **`name:Howl`** The instance's name is howl.
   *     - **`labels.env:*`** The instance has the label env.
   *     - **`labels.env:dev`** The instance's label env has the value dev.
   *     - **`name:howl labels.env:dev`** The instance's name is howl and it has
   *       the label env with value dev.
   * @property {number} [pageSize] Maximum number of results per page.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   */
  /**
   * @typedef {array} GetInstancesResponse
   * @property {Instance[]} 0 Array of {@link Instance} instances.
   * @property {object} 1 A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetInstancesCallback
   * @param {?Error} err Request error, if any.
   * @param {Instance[]} instances Array of {@link Instance} instances.
   * @param {string} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a list of instances.
   *
   * Wrapper around {@link v1.InstanceAdminClient#listInstances}.
   *
   * @see {@link v1.InstanceAdminClient#listInstances}
   * @see [ListInstances API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstances)
   *
   * @param {GetInstancesOptions} [options] Query object for listing instances.
   * @param {GetInstancesCallback} [callback] Callback function.
   * @returns {Promise<GetInstancesResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * spanner.getInstances(function(err, instances) {
   *   // `instances` is an array of `Instance` objects.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, instances, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     spanner.getInstances(nextQuery, callback);
   *   }
   * }
   *
   * spanner.getInstances({
   *   gaxOptions: {
   *     autoPaginate: false,
   *   }
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * spanner.getInstances().then(function(data) {
   *   const instances = data[0];
   * });
   * ```
   */
  getInstances(options?: GetInstancesOptions): Promise<GetInstancesResponse>;
  getInstances(callback: GetInstancesCallback): void;
  getInstances(
    query: GetInstancesOptions,
    callback: GetInstancesCallback,
  ): void;
  getInstances(
    optionsOrCallback?: GetInstancesOptions | GetInstancesCallback,
    cb?: GetInstancesCallback,
  ): Promise<GetInstancesResponse> | void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetInstancesOptions);
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const gaxOpts = extend(true, {}, options.gaxOptions);

    let reqOpts = extend({}, options, {
      parent: 'projects/' + this.projectId,
    });

    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetInstancesOptions).pageSize,
          pageToken: (gaxOpts as GetInstancesOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetInstancesOptions).pageToken;
      delete (gaxOpts as GetInstancesOptions).pageSize;
    }

    this.request(
      {
        client: 'InstanceAdminClient',
        method: 'listInstances',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, instances, nextPageRequest, ...args) => {
        let instanceInstances: Instance[] | null = null;
        if (instances) {
          instanceInstances = instances.map(instance => {
            const instanceInstance = self.instance(instance.name);
            instanceInstance.metadata = instance;
            return instanceInstance;
          });
        }
        const nextQuery = nextPageRequest!
          ? extend({}, options, nextPageRequest!)
          : null;
        callback!(err, instanceInstances, nextQuery, ...args);
      },
    );
  }

  /**
   * Get a list of {@link Instance} objects as a readable object stream.
   *
   * Wrapper around {@link v1.InstanceAdminClient#listInstances}.
   *
   * @see {@link v1.InstanceAdminClient#listInstances}
   * @see [ListInstances API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstances)
   *
   * @method Spanner#getInstancesStream
   * @param {GetInstancesOptions} [options] Query object for listing instances.
   * @returns {ReadableStream} A readable stream that emits {@link Instance}
   *     instances.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * spanner.getInstancesStream()
   *   .on('error', console.error)
   *   .on('data', function(instance) {
   *     // `instance` is an `Instance` object.
   *   })
   *   .on('end', function() {
   *     // All instances retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * spanner.getInstancesStream()
   *   .on('data', function(instance) {
   *     this.end();
   *   });
   * ```
   */
  getInstancesStream(options: GetInstancesOptions = {}): NodeJS.ReadableStream {
    const gaxOpts = extend(true, {}, options.gaxOptions);

    let reqOpts = extend({}, options, {
      parent: 'projects/' + this.projectId,
    });
    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetInstancesOptions).pageSize,
          pageToken: (gaxOpts as GetInstancesOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetInstancesOptions).pageSize;
      delete (gaxOpts as GetInstancesOptions).pageToken;
    }

    return this.requestStream({
      client: 'InstanceAdminClient',
      method: 'listInstancesStream',
      reqOpts,
      gaxOpts,
      headers: this.commonHeaders_,
    });
  }

  /**
   * Config for the new instance config.
   *
   * @typedef {object} CreateInstanceConfigRequest
   * @property {string} [displayName] The name of this instance configuration as
   *     it appears in the user interface.
   * @property {google.spanner.admin.instance.v1.IReplicaInfo[]} [replicas] The
   *     geographic placement of nodes in this instance configuration and their
   *     replication properties.
   * @property {string} [baseConfig] Base configuration name,
   *     e.g. projects/<project_name>/instanceConfigs/nam3 based on which this
   *     configuration is created.
   * @property {Object.<string, string>} [labels] Cloud Labels are a flexible
   *     and lightweight mechanism for organizing cloud resources into groups
   *     that reflect a customer's organizational needs and deployment
   *     strategies. Cloud Labels can be used to filter collections of
   *     resources. They can be used to control how resource metrics are
   *     aggregated. And they can be used as arguments to policy management
   *     rules (e.g. route, firewall, load balancing, etc.).
   * @property {string} [etag] etag is used for optimistic concurrency control
   *     as a way to help prevent simultaneous updates of a instance config from
   *     overwriting each other.
   * @property {boolean} [validateOnly] An option to validate, but not actually
   *     execute, a request, and provide the same response.
   */
  /**
   * @typedef {array} CreateInstanceConfigResponse
   * @property {InstanceConfig} 0 The new {@link google.spanner.admin.instance.v1.InstanceConfig}.
   * @property {google.longrunning.Operation} 1 An operation object that can be
   *     used to check the status of the request.
   * @property {google.longrunning.IOperation} 2 The full API response.
   */
  /**
   * @callback CreateInstanceConfigCallback
   * @param {?Error} err Request error, if any.
   * @param {InstanceConfig} instanceConfig The new {@link google.spanner.admin.instance.v1.InstanceConfig}.
   * @param {google.longrunning.Operation} operation An operation object that
   *     can be used to check the status of the request.
   * @param {google.longrunning.IOperation} apiResponse The full API response.
   */
  /**
   * Create an instance config.
   *
   * Wrapper around {@link v1.InstanceAdminClient#createInstanceConfig}.
   *
   * @see {@link v1.InstanceAdminClient#createInstanceConfig}
   * @see [CreateInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig)
   *
   * @throws {GoogleError} If a name is not provided.
   * @throws {GoogleError} If a configuration object is not provided.
   * @throws {GoogleError} If a base config is not provided in the configuration
   *                       object.
   *
   * @param {string} name The name of the instance config to be created.
   * @param {CreateInstanceConfigRequest} config Configuration object.
   * @param {CreateInstanceConfigCallback} [callback] Callback function.
   * @returns {Promise<CreateInstanceConfigResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const [baseInstanceConfig] =
   *     await spanner.getInstanceConfig(baseInstanceConfigId);
   * const config = {
   *   baseConfig: baseInstanceConfig.name,
   *   replicas: baseInstanceConfig.replicas.concat(baseInstanceConfig.optionalReplicas[0])
   * };
   *
   * function callback(err, instance, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Instance created successfully.
   *     });
   * }
   *
   * spanner.createInstanceConfig('custom-new-instance-config', config, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * spanner.createInstanceConfig('custom-new-instance-config', config)
   *   .then(function(data) {
   *     const instanceConfig = data[0];
   *     const operation = data[1];
   *     return operation.promise();
   *   })
   *   .then(function() {
   *     // Instance config created successfully.
   *   });
   * ```
   */
  createInstanceConfig(
    name: string,
    config: CreateInstanceConfigRequest,
  ): Promise<CreateInstanceConfigResponse>;
  createInstanceConfig(
    name: string,
    config: CreateInstanceConfigRequest,
    callback: CreateInstanceConfigCallback,
  ): void;
  createInstanceConfig(
    name: string,
    config: CreateInstanceConfigRequest,
    callback?: CreateInstanceConfigCallback,
  ): void | Promise<CreateInstanceConfigResponse> {
    if (!name) {
      throw new GoogleError('A name is required to create an instance config.');
    }
    if (!config) {
      throw new GoogleError(
        [
          'A configuration object is required to create an instance config.',
        ].join(''),
      );
    }
    if (!config.baseConfig) {
      throw new GoogleError(
        ['Base instance config is required to create an instance config.'].join(
          '',
        ),
      );
    }
    const formattedName = InstanceConfig.formatName_(this.projectId, name);
    const displayName = config.displayName || formattedName.split('/').pop();
    const reqOpts = {
      parent: this.projectFormattedName_,
      instanceConfigId: formattedName.split('/').pop(),
      instanceConfig: extend(
        {
          name: formattedName,
          displayName,
        },
        config,
      ),
      validateOnly: config.validateOnly,
    };

    if (config.baseConfig!.indexOf('/') === -1) {
      reqOpts.instanceConfig.baseConfig = `projects/${this.projectId}/instanceConfigs/${config.baseConfig}`;
    }

    // validateOnly need not be passed in if it is null.
    if (reqOpts.validateOnly === null || reqOpts.validateOnly === undefined)
      delete reqOpts.validateOnly;

    // validateOnly and gaxOptions are not fields in InstanceConfig.
    delete reqOpts.instanceConfig.validateOnly;
    delete reqOpts.instanceConfig.gaxOptions;

    this.request(
      {
        client: 'InstanceAdminClient',
        method: 'createInstanceConfig',
        reqOpts,
        gaxOpts: config.gaxOptions,
        headers: this.commonHeaders_,
      },
      (err, operation, resp) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }
        const instanceConfig = this.instanceConfig(formattedName);
        callback!(null, instanceConfig, operation, resp);
      },
    );
  }

  /**
   * Lists the supported instance configurations for a given project.
   *
   * @typedef {object} GetInstanceConfigsOptions
   * @property {number} [pageSize] Maximum number of results per page.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} GetInstanceConfigsResponse
   * @property {object[]} 0 List of all available instance configs.
   * @property {string} 0.name The unique identifier for the instance config.
   * @property {string} 0.displayName The name of the instance config as it
   *     appears in UIs.
   * @property {google.spanner.admin.instance.v1.IReplicaInfo[]} 0.replicas The replicas used by
   *     this instance config.
   * @property {string[]} 0.leaderOptions The possible leader options for this instance config.
   * @property {object} 1 A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetInstanceConfigsCallback
   * @param {?Error} err Request error, if any.
   * @param {object[]} instanceConfigs List of all available instance configs.
   * @param {string} instanceConfigs.name The unique identifier for the instance
   *     config.
   * @param {string} instanceConfigs.displayName The name of the instance config
   *     as it appears in UIs.
   * @param {google.spanner.admin.instance.v1.IReplicaInfo[]} instanceConfigs.replicas The replicas used by
   *     this instance config.
   * @param {string[]} instanceConfigs.leaderOptions The possible leader options for this instance config.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get a list of instance configs.
   *
   * Wrapper around {@link v1.InstanceAdminClient#listInstanceConfigs}.
   *
   * @see {@link v1.InstanceAdminClient#listInstanceConfigs}
   * @see [ListInstanceConfigs API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs)
   *
   * @param {GetInstanceConfigsOptions} [options] Query object for listing instance
   *     configs.
   * @param {GetInstanceConfigsCallback} [callback] Callback function.
   * @returns {Promise<GetInstanceConfigsResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * spanner.getInstanceConfigs(function(err, instanceConfigs) {
   *   // `instanceConfigs` is an array of instance configuration descriptors.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, instanceConfigs, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     spanner.getInstanceConfigs(nextQuery, callback);
   *   }
   * }
   *
   * spanner.getInstanceConfigs({
   *   gaxOptions: {
   *     autoPaginate: false,
   *   }
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * spanner.getInstanceConfigs().then(function(data) {
   *   const instanceConfigs = data[0];
   * });
   * ```
   */
  getInstanceConfigs(
    query?: GetInstanceConfigsOptions,
  ): Promise<GetInstanceConfigsResponse>;
  getInstanceConfigs(callback: GetInstanceConfigsCallback): void;
  getInstanceConfigs(
    query: GetInstanceConfigsOptions,
    callback: GetInstanceConfigsCallback,
  ): void;
  getInstanceConfigs(
    optionsOrCallback?: GetInstanceConfigsOptions | GetInstanceConfigsCallback,
    cb?: GetInstanceConfigsCallback,
  ): Promise<GetInstanceConfigsResponse> | void {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetInstanceConfigsOptions);

    const gaxOpts = extend(true, {}, options.gaxOptions);
    let reqOpts = extend({}, options, {
      parent: 'projects/' + this.projectId,
    });
    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetInstanceConfigsOptions).pageSize,
          pageToken: (gaxOpts as GetInstanceConfigsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetInstanceConfigsOptions).pageSize;
      delete (gaxOpts as GetInstanceConfigsOptions).pageToken;
    }

    return this.request(
      {
        client: 'InstanceAdminClient',
        method: 'listInstanceConfigs',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, instanceConfigs, nextPageRequest, ...args) => {
        const nextQuery = nextPageRequest!
          ? extend({}, options, nextPageRequest!)
          : null;
        callback!(err, instanceConfigs, nextQuery, ...args);
      },
    );
  }

  /**
   * Get a list of instance configs as a readable object stream.
   *
   * Wrapper around {@link v1.InstanceAdminClient#listInstanceConfigsStream}.
   *
   * @see {@link v1.InstanceAdminClient#listInstanceConfigsStream}
   * @see [ListInstanceConfigs API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs)
   *
   * @method Spanner#getInstanceConfigsStream
   * @param {GetInstanceConfigsOptions} [options] Query object for listing instance
   *     configs.
   * @returns {ReadableStream} A readable stream that emits instance configs.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * spanner.getInstanceConfigsStream()
   *   .on('error', console.error)
   *   .on('data', function(instanceConfig) {})
   *   .on('end', function() {
   *     // All instances retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * spanner.getInstanceConfigsStream()
   *   .on('data', function(instanceConfig) {
   *     this.end();
   *   });
   * ```
   */
  getInstanceConfigsStream(
    options: GetInstanceConfigsOptions = {},
  ): NodeJS.ReadableStream {
    const gaxOpts = extend(true, {}, options.gaxOptions);

    let reqOpts = extend({}, options, {
      parent: 'projects/' + this.projectId,
    });

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetInstancesOptions).pageSize,
          pageToken: (gaxOpts as GetInstancesOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetInstancesOptions).pageSize;
      delete (gaxOpts as GetInstancesOptions).pageToken;
    }

    delete reqOpts.gaxOptions;
    return this.requestStream({
      client: 'InstanceAdminClient',
      method: 'listInstanceConfigsStream',
      reqOpts,
      gaxOpts,
      headers: this.commonHeaders_,
    });
  }

  /**
   * Gets the instance configuration with the specified name.
   */
  /**
   * @typedef {array} GetInstanceConfigResponse
   * @property {object[]} 0 The metadata of the instance config.
   * @property {string} 0.name The unique identifier for the instance config.
   * @property {string} 0.displayName The name of the instance config as it
   *     appears in UIs.
   * @property {google.spanner.admin.instance.v1.IReplicaInfo[]} 0.replicas The replicas used by
   *     this instance config.
   * @property {string[]} 0.leaderOptions The possible leader options for this instance config.
   */
  /**
   * @callback GetInstanceConfigCallback
   * @param {?Error} err Request error, if any.
   * @param {object} instanceConfig The metadata of the instance config.
   * @param {string} instanceConfig.name The unique identifier for the instance
   *     config.
   * @param {string} instanceConfig.displayName The name of the instance config
   *     as it appears in UIs.
   * @param {google.spanner.admin.instance.v1.IReplicaInfo[]} instanceConfig.replicas The replicas used by
   *     this instance config.
   * @param {string[]} 0.leaderOptions The possible leader options for this instance config.
   */
  /**
   * Get a specific instance config.
   *
   * Wrapper around {@link v1.InstanceAdminClient#getInstanceConfig}.
   *
   * @see {@link v1.InstanceAdminClient#getInstanceConfig}
   * @see [GetInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig)
   *
   * @param {string} [name] The name of the instance config to get.
   * @param {GetInstanceConfigCallback} [callback] Callback function.
   * @returns {Promise<GetInstanceConfigResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * spanner.getInstanceConfig('nam6', function(err, instanceConfig) {
   *   // `instanceConfig` is an instance configuration descriptor.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * spanner.getInstanceConfig().then(function(data) {
   *   const instanceConfig = data[0];
   * });
   * ```
   */
  getInstanceConfig(name: string): Promise<GetInstanceConfigResponse>;
  getInstanceConfig(
    name: string,
    options: GetInstanceConfigOptions,
  ): Promise<GetInstanceConfigResponse>;
  getInstanceConfig(name: string, callback: GetInstanceConfigCallback): void;
  getInstanceConfig(
    name: string,
    options: GetInstanceConfigOptions,
    callback: GetInstanceConfigCallback,
  ): void;
  getInstanceConfig(
    name: string,
    optionsOrCallback?: GetInstanceConfigOptions | GetInstanceConfigCallback,
    cb?: GetInstanceConfigCallback,
  ): Promise<GetInstanceConfigResponse> | void {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetInstanceConfigOptions);

    const reqOpts = extend(
      {},
      {
        name: 'projects/' + this.projectId + '/instanceConfigs/' + name,
      },
    );
    const gaxOpts = extend({}, options.gaxOptions);

    return this.request(
      {
        client: 'InstanceAdminClient',
        method: 'getInstanceConfig',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, instanceConfig) => {
        callback!(err, instanceConfig);
      },
    );
  }

  /**
   * Query object for listing instance config operations.
   *
   * @typedef {object} GetInstanceConfigOperationsOptions
   * @property {string} [filter] An expression for filtering the results of the
   *     request. Filter can be configured as outlined in
   *     {@link v1.DatabaseAdminClient#listInstanceConfigOperations}.
   * @property {number} [pageSize] Maximum number of results per page.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   */
  /**
   * @typedef {array} GetInstanceConfigOperationsResponse
   * @property {google.longrunning.IOperation[]} 0 Array of {@link IOperation} instances.
   * @property {object} 1 A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetInstanceConfigOperationsCallback
   * @param {?Error} err Request error, if any.
   * @param {google.longrunning.IOperation[]} 0 Array of {@link IOperation} instances.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * List pending and completed instance config operations.
   *
   * @see {@link #listOperations}
   *
   * @param {GetInstanceConfigOperationsOptions} [options] The query object for
   *     listing InstanceConfig operations.
   * @param {gax.CallOptions} [options.gaxOptions] The request configuration
   *     options, See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @returns {Promise<GetInstanceConfigOperationsResponse>} When resolved,
   *     contains a paged list of InstanceConfig operations.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const [operations] = await spanner.getInstanceConfigOperations();
   *
   * //-
   * // To manually handle pagination, set autoPaginate:false in gaxOptions.
   * //-
   * let pageToken = undefined;
   * do {
   *   const [operations, , response] = await spanner.getInstanceConfigOperations({
   *     pageSize: 3,
   *     pageToken,
   *     gaxOptions: {autoPaginate: false},
   *   });
   *   operations.forEach(operation => {
   *     // Do something with operation
   *   });
   *   pageToken = response.nextPageToken;
   * } while (pageToken);
   * ```
   */
  getInstanceConfigOperations(
    options?: GetInstanceConfigOperationsOptions,
  ): Promise<GetInstanceConfigOperationsResponse>;
  getInstanceConfigOperations(
    callback: GetInstanceConfigOperationsCallback,
  ): void;
  getInstanceConfigOperations(
    options: GetInstanceConfigOperationsOptions,
    callback: GetInstanceConfigOperationsCallback,
  ): void;
  getInstanceConfigOperations(
    optionsOrCallback?:
      | GetInstanceConfigOperationsOptions
      | GetInstanceConfigOperationsCallback,
    cb?: GetInstanceConfigOperationsCallback,
  ): void | Promise<GetInstanceConfigOperationsResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetInstanceConfigOperationsOptions);
    const gaxOpts = extend(true, {}, options.gaxOptions);
    let reqOpts = extend({}, options, {
      parent: this.projectFormattedName_,
    });
    delete reqOpts.gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However, values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetInstanceConfigOperationsOptions).pageSize,
          pageToken: (gaxOpts as GetInstanceConfigOperationsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetInstanceConfigOperationsOptions).pageSize;
      delete (gaxOpts as GetInstanceConfigOperationsOptions).pageToken;
    }

    this.request(
      {
        client: 'InstanceAdminClient',
        method: 'listInstanceConfigOperations',
        reqOpts,
        gaxOpts,
        headers: this.commonHeaders_,
      },
      (err, operations, nextPageRequest, ...args) => {
        const nextQuery = nextPageRequest!
          ? extend({}, options, nextPageRequest!)
          : null;

        callback!(err, operations, nextQuery, ...args);
      },
    );
  }

  /**
   * Get a reference to an Instance object.
   *
   * @throws {GoogleError} If a name is not provided.
   *
   * @param {string} name The name of the instance.
   * @returns {Instance} An Instance object.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instance = spanner.instance('my-instance');
   * ```
   */
  instance(name: string): Instance {
    if (!name) {
      throw new GoogleError('A name is required to access an Instance object.');
    }
    const key = name.split('/').pop()!;
    if (!this.instances_.has(key)) {
      this.instances_.set(key, new Instance(this, name));
    }
    return this.instances_.get(key)!;
  }

  /**
   * Get a reference to an InstanceConfig object.
   *
   * @throws {GoogleError} If a name is not provided.
   *
   * @param {string} name The name of the instance config.
   * @returns {InstanceConfig} An InstanceConfig object.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   * const instanceConfig = spanner.instanceConfig('my-instance-config');
   * ```
   */
  instanceConfig(name: string): InstanceConfig {
    if (!name) {
      throw new GoogleError(
        'A name is required to access an InstanceConfig object.',
      );
    }
    const key = name.split('/').pop()!;
    if (!this.instanceConfigs_.has(key)) {
      this.instanceConfigs_.set(key, new InstanceConfig(this, name));
    }
    return this.instanceConfigs_.get(key)!;
  }

  /**
   * Setup the OpenTelemetry metrics capturing for service metrics to Google Cloud Monitoring.
   */
  configureMetrics_(disableBuiltInMetrics?: boolean) {
    // Only enable metrics if not explicitly disabled and we are not using
    // insecure credentials.
    const metricsEnabled =
      process.env.SPANNER_DISABLE_BUILTIN_METRICS !== 'true' &&
      !disableBuiltInMetrics &&
      !this._isInSecureCredentials;
    if (metricsEnabled) {
      try {
        this.auth.getProjectId((err, projectId) => {
          if (err || !projectId) {
            console.error(
              'Unable to get Project Id for client side metrics, will skip exporting client' +
                ' side metrics' +
                err,
            );
            return;
          }

          MetricsTracerFactory.enabled = metricsEnabled;
          this.projectId_ = projectId;
          const factory = MetricsTracerFactory.getInstance(projectId);
          const periodicReader = new PeriodicExportingMetricReader({
            exporter: new CloudMonitoringMetricsExporter(
              {auth: this.auth},
              projectId,
            ),
            exportIntervalMillis: 60000,
          });
          // Retrieve the MeterProvider to trigger construction
          factory!.getMeterProvider([periodicReader]);
        });
      } catch (err) {
        console.error(
          'Unable to configure client side metrics, will skip exporting client' +
            ' side metrics' +
            err,
        );
      }
    }
  }

  /**
   * Prepare a gapic request. This will cache the GAX client and replace
   * {{projectId}} placeholders, if necessary.
   *
   * @private
   *
   * @param {object} config Request config
   * @param {function} callback Callback function
   */
  prepareGapicRequest_(config, callback) {
    this.auth.getProjectId((err, projectId) => {
      if (err) {
        callback(err);
        return;
      }
      const clientName = config.client;
      try {
        if (!this.clients_.has(clientName)) {
          this.clients_.set(clientName, new v1[clientName](this.options));
        }
      } catch (err) {
        callback(err, null);
      }
      const gaxClient = this.clients_.get(clientName)!;
      let reqOpts = extend(true, {}, config.reqOpts);
      reqOpts = replaceProjectIdToken(reqOpts, projectId!);
      // It would have been preferable to replace the projectId already in the
      // constructor of Spanner, but that is not possible as auth.getProjectId
      // is an async method. This is therefore the first place where we have
      // access to the value that should be used instead of the placeholder.
      if (!this.projectIdReplaced_) {
        this.projectId = replaceProjectIdToken(this.projectId, projectId!);
        this.projectFormattedName_ = replaceProjectIdToken(
          this.projectFormattedName_,
          projectId!,
        );
        this.instances_.forEach(instance => {
          instance.formattedName_ = replaceProjectIdToken(
            instance.formattedName_,
            projectId!,
          );
          instance.databases_.forEach(database => {
            database.formattedName_ = replaceProjectIdToken(
              database.formattedName_,
              projectId!,
            );
          });
        });
        this.projectIdReplaced_ = true;
      }
      config.headers[CLOUD_RESOURCE_HEADER] = replaceProjectIdToken(
        config.headers[CLOUD_RESOURCE_HEADER],
        projectId!,
      );
      // Do context propagation
      propagation.inject(context.active(), config.headers, {
        set: (carrier, key, value) => {
          carrier[key] = value; // Set the span context (trace and span ID)
        },
      });
      // Attach the x-goog-spanner-request-id to the currently active span.
      attributeXGoogSpannerRequestIdToActiveSpan(config);
      const interceptors: any[] = [];
      if (MetricsTracerFactory.enabled) {
        interceptors.push(MetricInterceptor);
      }
      const requestFn = gaxClient[config.method].bind(
        gaxClient,
        reqOpts,
        // Add headers to `gaxOpts`
        extend(true, {}, config.gaxOpts, {
          otherArgs: {
            headers: config.headers,
            options: {
              interceptors: interceptors,
            },
          },
        }),
      );

      // Wrap requestFn to inject the spanner request id into every returned error.
      const wrappedRequestFn = (...args) => {
        const hasCallback =
          args &&
          args.length > 0 &&
          typeof args[args.length - 1] === 'function';

        switch (hasCallback) {
          case true: {
            const cb = args[args.length - 1];
            const priorArgs = args.slice(0, args.length - 1);
            requestFn(...priorArgs, (...results) => {
              if (results && results.length > 0) {
                const err = results[0] as Error;
                injectRequestIDIntoError(config, err);
              }

              cb(...results);
            });
            return;
          }

          case false: {
            const res = requestFn(...args);
            const stream = res as EventEmitter;
            if (stream) {
              stream.on('error', err => {
                injectRequestIDIntoError(config, err as Error);
              });
            }

            const originallyPromise = res instanceof Promise;
            if (!originallyPromise) {
              return res;
            }

            return new Promise((resolve, reject) => {
              requestFn(...args)
                .then(resolve)
                .catch(err => {
                  injectRequestIDIntoError(config, err as Error);
                  reject(err);
                });
            });
          }
        }
      };

      callback(null, wrappedRequestFn);
    });
  }

  /**
   * Funnel all API requests through this method to be sure we have a project
   * ID.
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @param {function} [callback] Callback function.
   * @returns {Promise}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request(config: any, callback?: any): any {
    let metricsTracer: MetricsTracer | null = null;
    if (config.client === 'SpannerClient' && this.projectId_) {
      metricsTracer =
        MetricsTracerFactory?.getInstance(this.projectId_)?.createMetricsTracer(
          config.method,
          config.reqOpts.database ?? config.reqOpts.session,
          config.headers['x-goog-spanner-request-id'],
        ) ?? null;
    }
    metricsTracer?.recordOperationStart();
    if (typeof callback === 'function') {
      this.prepareGapicRequest_(config, (err, requestFn) => {
        if (err) {
          callback(err);
          metricsTracer?.recordOperationCompletion();
        } else {
          const wrappedCallback = (...args) => {
            metricsTracer?.recordOperationCompletion();
            callback(...args);
          };
          requestFn(wrappedCallback);
        }
      });
    } else {
      return new Promise((resolve, reject) => {
        this.prepareGapicRequest_(config, (err, requestFn) => {
          if (err) {
            metricsTracer?.recordOperationCompletion();
            reject(err);
          } else {
            const result = requestFn();
            if (result && typeof result.then === 'function') {
              result
                .then(val => {
                  metricsTracer?.recordOperationCompletion();
                  resolve(val);
                })
                .catch(error => {
                  metricsTracer?.recordOperationCompletion();
                  reject(error);
                });
            } else {
              metricsTracer?.recordOperationCompletion();
              resolve(result);
            }
          }
        });
      });
    }
  }

  /**
   * Funnel all streaming API requests through this method to be sure we have a
   * project ID.
   *
   * @param {object} config Configuration object.
   * @param {object} config.gaxOpts GAX options.
   * @param {function} config.method The gax method to call.
   * @param {object} config.reqOpts Request options.
   * @param {function} [callback] Callback function.
   * @returns {Stream}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestStream(config): any {
    let metricsTracer: MetricsTracer | null = null;
    if (config.client === 'SpannerClient' && this.projectId_) {
      metricsTracer =
        MetricsTracerFactory?.getInstance(this.projectId_)?.createMetricsTracer(
          config.method,
          config.reqOpts.session ?? config.reqOpts.database,
          config.headers['x-goog-spanner-request-id'],
        ) ?? null;
    }
    metricsTracer?.recordOperationStart();
    const stream = streamEvents(through.obj());
    stream.once('reading', () => {
      this.prepareGapicRequest_(config, (err, requestFn) => {
        if (err) {
          stream.destroy(err);
          return;
        }
        requestFn()
          .on('error', err => {
            stream.destroy(err);
          })
          .pipe(stream);
      });
    });
    stream.on('finish', () => {
      stream.destroy();
    });
    stream.on('close', () => {
      metricsTracer?.recordOperationCompletion();
    });
    return stream;
  }

  static date(dateString?: string);
  static date(year: number, month: number, date: number);
  /**
   * Helper function to get a Cloud Spanner Date object.
   *
   * DATE types represent a logical calendar date, independent of time zone.
   * DATE values do not represent a specific 24-hour period. Rather, a given
   * DATE value represents a different 24-hour period when interpreted in a
   * different time zone. Because of this, all values passed to
   * {@link Spanner.date} will be interpreted as local time.
   *
   * To represent an absolute point in time, use {@link Spanner.timestamp}.
   *
   * @param {string|number} [date] String representing the date or number
   *     representing the year.
   * @param {number} [month] Number representing the month.
   * @param {number} [date] Number representing the date.
   * @returns {SpannerDate}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const date = Spanner.date('08-20-1969');
   * ```
   */
  static date(
    dateStringOrYear?: string | number,
    month?: number,
    date?: number,
  ): SpannerDate {
    if (typeof dateStringOrYear === 'number') {
      return new codec.SpannerDate(dateStringOrYear, month!, date!);
    }
    return new codec.SpannerDate(dateStringOrYear);
  }

  /**
   * Date object with nanosecond precision. Supports all standard Date arguments
   * in addition to several custom types.
   * @external PreciseDate
   * @see {@link https://github.com/googleapis/nodejs-precise-date|PreciseDate}
   */
  /**
   * Helper function to get a Cloud Spanner Timestamp object.
   *
   * String timestamps should have a canonical format of
   * `YYYY-[M]M-[D]D[( |T)[H]H:[M]M:[S]S[.DDDDDDDDD]]Z`
   *
   * **Timestamp values must be expressed in Zulu time and cannot include a UTC
   * offset.**
   *
   * @see https://cloud.google.com/spanner/docs/data-types#timestamp-type
   *
   * @param {string|number|google.protobuf.Timestamp|external:PreciseDate}
   *     [timestamp] Either a RFC 3339 timestamp formatted string or a
   *     {@link google.protobuf.Timestamp} object. If a PreciseDate is given, it
   *     will return that timestamp as is.
   * @returns {external:PreciseDate}
   *
   * @example
   * ```
   * const timestamp = Spanner.timestamp('2019-02-08T10:34:29.481145231Z');
   *
   * ```
   * @example With a `google.protobuf.Timestamp` object
   * ```
   * const [seconds, nanos] = process.hrtime();
   * const timestamp = Spanner.timestamp({seconds, nanos});
   * ```
   *
   * @example With a Date timestamp
   * ```
   * const timestamp = Spanner.timestamp(Date.now());
   * ```
   */
  static timestamp(
    value?: string | number | p.ITimestamp | PreciseDate,
  ): PreciseDate {
    value = value || Date.now();
    if (value instanceof PreciseDate) {
      return value;
    }
    return new PreciseDate(value as number);
  }

  /**
   * Helper function to get a Cloud Spanner Float32 object.
   *
   * @param {string|number} value The float as a number or string.
   * @returns {Float32}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const float = Spanner.float32(10);
   * ```
   */
  static float32(value): Float32 {
    return new codec.Float32(value);
  }

  /**
   * Helper function to get a Cloud Spanner Float64 object.
   *
   * @param {string|number} value The float as a number or string.
   * @returns {Float}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const float = Spanner.float(10);
   * ```
   */
  static float(value): Float {
    return new codec.Float(value);
  }

  /**
   * Helper function to get a Cloud Spanner Int64 object.
   *
   * @param {string|number} value The int as a number or string.
   * @returns {Int}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const int = Spanner.int(10);
   * ```
   */
  static int(value): Int {
    return new codec.Int(value);
  }

  /**
   * Helper function to get a Cloud Spanner Numeric object.
   *
   * @param {string} value The numeric value as a string.
   * @returns {Numeric}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const numeric = Spanner.numeric("3.141592653");
   * ```
   */
  static numeric(value): Numeric {
    return new codec.Numeric(value);
  }

  /**
   * Helper function to get a Cloud Spanner pgNumeric object.
   *
   * @param {string} value The pgNumeric value as a string.
   * @returns {PGNumeric}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const pgNumeric = Spanner.pgNumeric("3.141592653");
   * ```
   */
  static pgNumeric(value): PGNumeric {
    return new codec.PGNumeric(value);
  }

  /**
   * Helper function to get a Cloud Spanner pgJsonb object.
   *
   * @param {object|string} value The pgJsonb value as a string or object.
   * @returns {PGJsonb}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const pgJsonb1 = Spanner.pgJsonb({rating: 6});
   * const pgJsonb2 = Spanner.pgJsonb(`[
   *         {
   *           "name": null,
   *           "open": true
   *         }]`)
   * ```
   */
  static pgJsonb(value): PGJsonb {
    return new codec.PGJsonb(value);
  }

  /**
   * Helper function to get a Cloud Spanner Interval object.
   *
   * @param {number} months The months part of Interval as number.
   * @param {number} days The days part of Interval as number.
   * @param {bigint} nanoseconds The nanoseconds part of Interval as bigint.
   * @returns {Interval}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const interval = Spanner.Interval(10, 20, BigInt(30));
   * ```
   */
  static interval(months: number, days: number, nanoseconds: bigint): Interval {
    return new codec.Interval(months, days, nanoseconds);
  }

  /**
   * @typedef IProtoMessageParams
   * @property {object} value Proto Message value as serialized-buffer or message object.
   * @property {string} fullName Fully-qualified path name of proto message.
   * @property {Function} [messageFunction] Function generated by protobufs containing
   * helper methods for deserializing and serializing messages.
   */
  /**
   * Helper function to get a Cloud Spanner proto Message object.
   *
   * @param {IProtoMessageParams} params The proto message value params
   * @returns {ProtoMessage}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const protoMessage = Spanner.protoMessage({
   *   value: singerInfo,
   *   messageFunction: music.SingerInfo,
   *   fullName: "examples.spanner.music.SingerInfo"
   * });
   * ```
   */
  static protoMessage(params: IProtoMessageParams): ProtoMessage {
    return new codec.ProtoMessage(params);
  }

  /**
   * @typedef IProtoEnumParams
   * @property {string | number} value Proto Enum value as a string constant or
   * an integer constant.
   * @property {string} fullName Fully-qualified path name of proto enum.
   * @property {object} [enumObject] An enum object generated by protobufjs-cli.
   */
  /**
   * Helper function to get a Cloud Spanner proto enum object.
   *
   * @param {IProtoEnumParams} params The proto enum value params in the format of
   *     @code{IProtoEnumParams}
   * @returns {ProtoEnum}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const protoEnum = Spanner.protoEnum({
   *   value: 'ROCK',
   *   enumObject: music.Genre,
   *   fullName: "examples.spanner.music.Genre"
   * });
   * ```
   */
  static protoEnum(params: IProtoEnumParams): ProtoEnum {
    return new codec.ProtoEnum(params);
  }

  /**
   * Helper function to get a Cloud Spanner Struct object.
   *
   * @param {object} value The struct as a JSON object.
   * @returns {Struct}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const struct = Spanner.struct({
   *   user: 'bob',
   *   age: 32
   * });
   * ```
   */
  static struct(value?): Struct {
    if (Array.isArray(value)) {
      return codec.Struct.fromArray(value);
    }
    return codec.Struct.fromJSON(value);
  }
}

let cleanupCalled = false;
const cleanup = async () => {
  if (cleanupCalled) return;
  cleanupCalled = true;
  await MetricsTracerFactory.resetInstance();
};

// For signals (let process exit naturally)
process.on('SIGINT', async () => {
  await cleanup();
});
process.on('SIGTERM', async () => {
  await cleanup();
});

// For natural exit (Node will NOT wait for async, so we must block the event loop)
process.on('beforeExit', () => {
  const done = cleanup();
  if (done && typeof done.then === 'function') {
    // Handle promise rejection
    done.catch(err => {
      console.error('Cleanup error before exit:', err);
    });
  }
});

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Spanner, {
  exclude: [
    'date',
    'float32',
    'float',
    'instance',
    'instanceConfig',
    'int',
    'numeric',
    'pgNumeric',
    'pgJsonb',
    'operation',
    'timestamp',
    'interval',
    'getInstanceAdminClient',
    'getDatabaseAdminClient',
  ],
});

/**
 * The default export of the `@google-cloud/spanner` package is the
 * {@link Spanner} class.
 *
 * See {@link Spanner} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {constructor} @google-cloud/spanner
 * @alias nodejs-spanner
 *
 * @example Install the client library with <a
 * href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save @google-cloud/spanner
 * ```
 *
 * @example Import the client library
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * ```
 *
 * @example Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:
 * ```
 * const client = new Spanner();
 * ```
 *
 * @example Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:
 * ```
 * const client = new Spanner({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 * ```
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:spanner_quickstart
 * Full quickstart example:
 */
export {Spanner};

/**
 * {@link Instance} class.
 *
 * @name Spanner.Instance
 * @see Instance
 * @type {Constructor}
 */
export {Instance};

/**
 * {@link InstanceConfig} class.
 *
 * @name Spanner.InstanceConfig
 * @see InstanceConfig
 * @type {Constructor}
 */
export {InstanceConfig};

/**
 * {@link Database} class.
 *
 * @name Spanner.Database
 * @see Database
 * @type {Constructor}
 */
export {Database};

/**
 * {@link Backup} class.
 *
 * @name Spanner.Backup
 * @see Backup
 * @type {Constructor}
 */
export {Backup};

/**
 * {@link Session} class.
 *
 * @name Spanner.Session
 * @see Session
 * @type {Constructor}
 */
export {Session};

/**
 * {@link SessionPool} class.
 *
 * @name Spanner.SessionPool
 * @see SessionPool
 * @type {Constructor}
 */
export {SessionPool};

/**
 * {@link Table} class.
 *
 * @name Spanner.Table
 * @see Table
 * @type {Constructor}
 */
export {Table};

/**
 * {@link PartitionedDml} class.
 *
 * @name Spanner.PartitionedDml
 * @see PartitionedDml
 * @type {Constructor}
 */
export {PartitionedDml};

/**
 * {@link Snapshot} class.
 *
 * @name Spanner.Snapshot
 * @see Snapshot
 * @type {Constructor}
 */
export {Snapshot};

/**
 * {@link Transaction} class.
 *
 * @name Spanner.Transaction
 * @see Transaction
 * @type {Constructor}
 */
export {Transaction};

/**
 * {@link MutationGroup} class.
 *
 * @name Spanner.MutationGroup
 * @see MutationGroup
 * @type {Constructor}
 */
export {MutationGroup};

/**
 * {@link MutationSet} class.
 *
 * @name Spanner.MutationSet
 * @see MutationSet
 * @type {Constructor}
 */
export {MutationSet};

/**
 * @type {object}
 * @property {constructor} DatabaseAdminClient
 *   Reference to {@link v1.DatabaseAdminClient}
 * @property {constructor} InstanceAdminClient
 *   Reference to {@link v1.InstanceAdminClient}
 * @property {constructor} SpannerClient
 *   Reference to {@link v1.SpannerClient}
 */
import * as protos from '../protos/protos';
import IInstanceConfig = instanceAdmin.spanner.admin.instance.v1.IInstanceConfig;
import {RunTransactionOptions} from './transaction-runner';
export {v1, protos};
export default {Spanner};
export {Float32, Float, Int, Struct, Numeric, PGNumeric, SpannerDate, Interval};
export {ObservabilityOptions};
