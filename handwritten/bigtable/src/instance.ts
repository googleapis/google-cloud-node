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

import {promisifyAll} from '@google-cloud/promisify';
import {Transform} from 'stream';
import arrify = require('arrify');
import * as is from 'is';
import * as extend from 'extend';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pumpify = require('pumpify');
const concat = require('concat-stream');

import snakeCase = require('lodash.snakecase');
import {
  AppProfile,
  AppProfileOptions,
  CreateAppProfileCallback,
  CreateAppProfileResponse,
  GetAppProfilesCallback,
  GetAppProfilesResponse,
} from './app-profile';
import {
  GetBackupsCallback,
  GetBackupsOptions,
  GetBackupsResponse,
} from './backup';
import {
  Cluster,
  CreateClusterOptions,
  CreateClusterCallback,
  CreateClusterResponse,
  GetClustersCallback,
  GetClustersResponse,
  IOperation,
  BasicClusterConfig,
} from './cluster';
import {Family} from './family';
import {
  GetIamPolicyCallback,
  GetIamPolicyOptions,
  GetIamPolicyResponse,
  Policy,
  SetIamPolicyCallback,
  SetIamPolicyResponse,
  Table,
  TestIamPermissionsCallback,
  TestIamPermissionsResponse,
  CreateTableOptions,
  CreateTableCallback,
  CreateTableResponse,
  GetTablesOptions,
  GetTablesCallback,
  GetTablesResponse,
} from './table';
import {CallOptions, Operation} from 'google-gax';
import {ServiceError} from 'google-gax';
import {Bigtable} from '.';
import {google} from '../protos/protos';
import {Backup, RestoreTableCallback, RestoreTableResponse} from './backup';
import {ClusterUtils} from './utils/cluster';
import {AuthorizedView} from './authorized-view';

import * as SqlTypes from './execute-query/types';
import {
  ExecuteQueryParameterValue,
  QueryResultRow,
} from './execute-query/values';
import {ProtobufReaderTransformer} from './execute-query/protobufreadertransformer';
import {ExecuteQueryStreamTransformWithMetadata} from './execute-query/queryresultrowtransformer';
import {ExecuteQueryStreamWithMetadata} from './execute-query/values';
import {
  parseParameters,
  parseParameterTypes,
} from './execute-query/parameterparsing';
import {MetadataConsumer} from './execute-query/metadataconsumer';
import {
  createCallerStream,
  ExecuteQueryStateMachine,
} from './execute-query/executequerystatemachine';
import {PreparedStatement} from './execute-query/preparedstatement';

export interface ClusterInfo extends BasicClusterConfig {
  id: string;
}

export interface InstanceOptions {
  /**
   * The clusters to be created within the instance.
   */
  clusters: ClusterInfo[] | ClusterInfo;

  /**
   * The descriptive name for this instance as it appears in UIs.
   */
  displayName?: string;

  /**
   * Labels are a flexible and lightweight mechanism for organizing cloud
   * resources into groups that reflect a customer's organizational needs and
   * deployment strategies. They can be used to filter resources and
   * aggregate metrics.
   *
   * Label keys must be between 1 and 63 characters long and must conform to
   * the regular expression: `[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}`.
   * Label values must be between 0 and 63 characters long and must conform
   * to the regular expression: `[\p{Ll}\p{Lo}\p{N}_-]{0,63}`.
   * No more than 64 labels can be associated with a given resource.
   * Keys and values must both be under 128 bytes.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels?: {[index: string]: any};

  type?: 'production' | 'development';

  /**
   * Request configuration options, outlined here:
   * https://googleapis.github.io/gax-nodejs/CallSettings.html.
   */
  gaxOptions?: CallOptions;
}

export type IInstance = google.bigtable.admin.v2.IInstance;
export interface LongRunningResourceCallback<Resource> {
  (
    err: ServiceError | null,
    resource?: Resource,
    operation?: Operation,
    apiResponse?: IOperation,
  ): void;
}
export type CreateInstanceCallback = LongRunningResourceCallback<Instance>;
export type CreateInstanceResponse = [Instance, Operation, IOperation];
export type DeleteInstanceCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type DeleteInstanceResponse = [google.protobuf.Empty];
export type InstanceExistsCallback = (
  err: ServiceError | null,
  exists?: boolean,
) => void;
export type InstanceExistsResponse = [boolean];
export type GetInstanceCallback = (
  err: ServiceError | null,
  instance?: Instance,
  apiResponse?: IInstance,
) => void;
export type GetInstanceResponse = [Instance, IInstance];
export type GetInstanceMetadataCallback = (
  err: ServiceError | null,
  metadata?: IInstance,
) => void;
export type GetInstanceMetadataResponse = [IInstance];
export type SetInstanceMetadataCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type SetInstanceMetadataResponse = [google.protobuf.Empty];

export interface CreateTableFromBackupConfig {
  table: string;
  backup: Backup | string;
  gaxOptions?: CallOptions;
}

export type ExecuteQueryCallback = (
  err: Error | null,
  rows?: QueryResultRow[],
) => void;

export interface ExecuteQueryOptions {
  preparedStatement: PreparedStatement;
  parameters?: {[param: string]: ExecuteQueryParameterValue};
  retryOptions?: CallOptions;
  encoding?: BufferEncoding;
}
export type ExecuteQueryResponse = [QueryResultRow[]];

export type PrepareStatementCallback = (
  err: Error | null,
  preparedStatement?: PreparedStatement,
) => void;

export interface PrepareStatementOptions {
  query: string;
  parameterTypes?: {[param: string]: SqlTypes.Type};
  retryOptions?: CallOptions;
  encoding?: BufferEncoding;
}
export type PrepareStatementResponse = [PreparedStatement];

/**
 * Create an Instance object to interact with a Cloud Bigtable instance.
 *
 * @class
 * @param {Bigtable} bigtable The parent {@link Bigtable} object of this
 *     instance.
 * @param {string} id Id of the instance.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * ```
 */

export class Instance {
  bigtable: Bigtable;
  id: string;
  name: string;
  metadata?: google.bigtable.admin.v2.IInstance;
  constructor(bigtable: Bigtable, id: string) {
    this.bigtable = bigtable;

    let name;
    if (id.includes('/')) {
      if (id.startsWith(`${bigtable.projectName}/instances/`)) {
        name = id;
      } else {
        throw new Error(`Instance id '${id}' is not formatted correctly.
Please use the format 'my-instance' or '${bigtable.projectName}/instances/my-instance'.`);
      }
    } else {
      name = `${bigtable.projectName}/instances/${id}`;
    }

    this.id = name.split('/').pop()!;
    this.name = name;
  }

  /**
   * Maps the instance type to the proper integer.
   *
   * @private
   *
   * @param {string} type The instance type (production, development).
   * @returns {number}
   *
   * @example
   * ```
   * Instance.getTypeType_('production');
   * // 1
   * ```
   */
  static getTypeType_(type?: string): number {
    const types = {
      unspecified: 0,
      production: 1,
      development: 2,
    } as {[index: string]: number};
    if (typeof type === 'string') {
      type = type.toLowerCase();
    }
    return types[type!] || types.unspecified;
  }

  /**
   * Get a reference to a Bigtable App Profile.
   *
   * @param {string} name The name of the app profile.
   * @returns {AppProfile}
   */
  appProfile(name: string): AppProfile {
    return new AppProfile(this, name);
  }

  create(options: InstanceOptions): Promise<CreateInstanceResponse>;
  create(options: InstanceOptions, callback: CreateInstanceCallback): void;
  /**
   * Create an instance.
   *
   * @param {object} options See {@link Bigtable#createInstance}.
   * @param {object} [options.gaxOptions]  Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {Instance} callback.instance The newly created
   *     instance.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_create_instance
   */
  create(
    options: InstanceOptions,
    callback?: CreateInstanceCallback,
  ): void | Promise<CreateInstanceResponse> {
    this.bigtable.createInstance(this.id, options, callback!);
  }

  createAppProfile(
    id: string,
    options?: AppProfileOptions,
  ): Promise<CreateAppProfileResponse>;
  createAppProfile(
    id: string,
    options: AppProfileOptions,
    callback: CreateAppProfileCallback,
  ): void;
  createAppProfile(id: string, callback: CreateAppProfileCallback): void;
  /**
   * Create an app profile.
   *
   * @param {string} id The name to be used when referring to the new
   *     app profile within its instance.
   * @param {object} options AppProfile creation options.
   * @param {'any'|Cluster} options.routing  The routing policy for all
   *     read/write requests which use this app profile. This can be either the
   *     string 'any' or a cluster of an instance. This value is required when
   *     creating the app profile and optional when setting the metadata.
   * @param {object} [options.gaxOptions]  Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {boolean} [options.allowTransactionalWrites] Whether or not
   *     CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this
   *     app profile. It is unsafe to send these requests to the same
   *     table/row/column in multiple clusters. This is only used when the
   *     routing value is a cluster.
   * @param {string} [options.description] The long form description of the use
   *     case for this AppProfile.
   * @param {string} [options.ignoreWarnings] Whether to ignore safety checks
   *     when creating the app profile
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Cluster} callback.appProfile The newly created app profile.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_create_app_profile
   */
  createAppProfile(
    id: string,
    optionsOrCallback?: AppProfileOptions | CreateAppProfileCallback,
    cb?: CreateAppProfileCallback,
  ): void | Promise<CreateAppProfileResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    if (!options.routing) {
      throw new Error('An app profile must contain a routing policy.');
    }

    const appProfile = AppProfile.formatAppProfile_(options);

    const reqOpts = {
      parent: this.name,
      appProfileId: id,
      appProfile,
    } as google.bigtable.admin.v2.CreateAppProfileRequest;

    if (is.boolean(options.ignoreWarnings)) {
      reqOpts.ignoreWarnings = options.ignoreWarnings!;
    }

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'createAppProfile',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          args.splice(1, 0, this.appProfile(id));
        }

        callback(...args);
      },
    );
  }

  createCluster(
    id: string,
    options?: CreateClusterOptions,
  ): Promise<CreateClusterResponse>;
  createCluster(
    id: string,
    options: CreateClusterOptions,
    callback: CreateClusterCallback,
  ): void;
  createCluster(id: string, callback: CreateClusterCallback): void;
  /**
   * Create a cluster.
   *
   * @param {string} id The id to be used when referring to the new
   *     cluster within its instance.
   * @param {object} options Cluster creation options.
   * @param {object} [options.gaxOptions]  Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {object} [options.encryption] CMEK configuration options.
   * @param {string} options.encryption.kmsKeyName The KMS key name.
   * @param {string} [options.key] Alias for `options.encryption.kmsKeyName`.
   * @param {string} options.location The location where this cluster's nodes
   *     and storage reside. For best performance clients should be located as
   *     as close as possible to this cluster. Currently only zones are
   *     supported.
   * @param {number} options.nodes The number of nodes allocated to this
   *     cluster. More nodes enable higher throughput and more consistent
   *     performance.
   * @param {string} [options.storage] The type of storage used by this cluster
   *     to serve its parent instance's tables. Options are 'hdd' or 'ssd'.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Cluster} callback.cluster The newly created
   *     cluster.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_create_cluster
   */
  createCluster(
    id: string,
    optionsOrCallback?: CreateClusterOptions | CreateClusterCallback,
    cb?: CreateClusterCallback,
  ): void | Promise<CreateClusterResponse> {
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as CreateClusterOptions);
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      parent: this.name,
      clusterId: id,
    } as google.bigtable.admin.v2.CreateClusterRequest;
    ClusterUtils.validateClusterMetadata(options);
    if (!is.empty(options)) {
      reqOpts.cluster = ClusterUtils.getClusterBaseConfigWithFullLocation(
        options,
        this.bigtable.projectId,
        undefined,
      );
    }

    if (
      typeof options.key !== 'undefined' &&
      typeof options.encryption !== 'undefined'
    ) {
      throw new Error(
        'The cluster cannot have both `encryption` and `key` defined.',
      );
    }

    if (options.key) {
      reqOpts.cluster!.encryptionConfig = {
        kmsKeyName: options.key,
      };
    }

    if (options.encryption) {
      reqOpts.cluster!.encryptionConfig = options.encryption;
    }

    if (options.storage) {
      const storageType = Cluster.getStorageType_(options.storage);
      reqOpts.cluster!.defaultStorageType = storageType;
    }

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'createCluster',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          args.splice(1, 0, this.cluster(id));
        }

        callback(...args);
      },
    );
  }

  createTable(
    id: string,
    options?: CreateTableOptions,
  ): Promise<CreateTableResponse>;
  createTable(
    id: string,
    options: CreateTableOptions,
    callback: CreateTableCallback,
  ): void;
  createTable(id: string, callback: CreateTableCallback): void;
  /**
   * Create a table on your Bigtable instance.
   *
   * @see [Designing Your Schema]{@link https://cloud.google.com/bigtable/docs/schema-design}
   * @see [Splitting Keys]{@link https://cloud.google.com/bigtable/docs/managing-tables#splits}
   *
   * @throws {error} If a id is not provided.
   *
   * @param {string} id Unique identifier of the table.
   * @param {object} [options] Table creation options.
   * @param {object|string[]} [options.families] Column families to be created
   *     within the table.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {string[]} [options.splits] Initial
   *    {@link https://cloud.google.com/bigtable/docs/managing-tables#splits| split keys}.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Table} callback.table The newly created table.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_create_table
   */
  createTable(
    id: string,
    optionsOrCallback?: CreateTableOptions | CreateTableCallback,
    cb?: CreateTableCallback,
  ): void | Promise<CreateTableResponse> {
    if (!id) {
      throw new Error('An id is required to create a table.');
    }

    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      parent: this.name,
      tableId: id,
      table: {
        // The granularity at which timestamps are stored in the table.
        // Currently only milliseconds is supported, so it's not
        // configurable.
        granularity: 0,
      },
    } as google.bigtable.admin.v2.CreateTableRequest;

    if (options.splits) {
      reqOpts.initialSplits = options.splits.map(key => ({
        key,
      }));
    }

    if (options.families) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const columnFamilies = (options.families as any[]).reduce(
        (families, family) => {
          if (typeof family === 'string') {
            family = {
              name: family,
            };
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const columnFamily: any = (families[family.name] = {});
          if (family.rule) {
            columnFamily.gcRule = Family.formatRule_(family.rule);
          }
          return families;
        },
        {},
      );

      reqOpts.table!.columnFamilies = columnFamilies;
    }

    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'createTable',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          const table = this.table(args[1].name.split('/').pop());
          table.metadata = args[1];
          args.splice(1, 0, table);
        }

        callback(...args);
      },
    );
  }

  /**
   * Get a reference to a Bigtable Cluster.
   *
   * @param {string} id The id of the cluster.
   * @returns {Cluster}
   */
  cluster(id: string): Cluster {
    return new Cluster(this, id);
  }

  delete(gaxOptions?: CallOptions): Promise<DeleteInstanceResponse>;
  delete(gaxOptions: CallOptions, callback: DeleteInstanceCallback): void;
  delete(callback: DeleteInstanceCallback): void;
  /**
   * Delete the instance.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_del_instance
   */
  delete(
    optionsOrCallback?: CallOptions | DeleteInstanceCallback,
    cb?: DeleteInstanceCallback,
  ): void | Promise<DeleteInstanceResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'deleteInstance',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  exists(options?: CallOptions): Promise<InstanceExistsResponse>;
  exists(options: CallOptions, callback: InstanceExistsCallback): void;
  exists(callback: InstanceExistsCallback): void;
  /**
   * Check if an instance exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the instance exists or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_exists_instance
   */
  exists(
    optionsOrCallback?: CallOptions | InstanceExistsCallback,
    cb?: InstanceExistsCallback,
  ): void | Promise<InstanceExistsResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.getMetadata(gaxOptions, err => {
      if (err) {
        if (err.code === 5) {
          callback(null, false);
          return;
        }
        callback(err);
        return;
      }
      callback(null, true);
    });
  }

  get(gaxOptions?: CallOptions): Promise<GetInstanceResponse>;
  get(gaxOptions: CallOptions, callback: GetInstanceCallback): void;
  get(callback: GetInstanceCallback): void;
  /**
   * Get an instance if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Instance} callback.instance The Instance object.
   * @param {object} callback.apiResponse The resource as it exists in the API.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_instance
   */
  get(
    optionsOrCallback?: CallOptions | GetInstanceCallback,
    cb?: GetInstanceCallback,
  ): void | Promise<GetInstanceResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.getMetadata(gaxOptions, (err, metadata) => {
      if (err) {
        callback(err, undefined, metadata);
      } else {
        callback(null, this, metadata);
      }
    });
  }

  getAppProfiles(options?: CallOptions): Promise<GetAppProfilesResponse>;
  getAppProfiles(options: CallOptions, callback: GetAppProfilesCallback): void;
  getAppProfiles(callback: GetAppProfilesCallback): void;
  /**
   * Get App Profile objects for this instance.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {AppProfile[]} callback.appProfiles List of all AppProfiles.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_app_profiles
   */
  getAppProfiles(
    optionsOrCallback?: CallOptions | GetAppProfilesCallback,
    cb?: GetAppProfilesCallback,
  ): void | Promise<GetAppProfilesResponse> {
    const gaxOpts =
      typeof optionsOrCallback === 'object'
        ? extend(true, {}, optionsOrCallback)
        : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts: google.bigtable.admin.v2.IListAppProfilesRequest = {
      parent: this.name,
    };

    if (is.number((gaxOpts as GetBackupsOptions).pageSize)) {
      reqOpts.pageSize = (gaxOpts as GetBackupsOptions).pageSize;
    }
    delete (gaxOpts as GetBackupsOptions).pageSize;

    if ((gaxOpts as GetBackupsOptions).pageToken) {
      reqOpts.pageToken = (gaxOpts as GetBackupsOptions).pageToken;
    }
    delete (gaxOpts as GetBackupsOptions).pageToken;

    this.bigtable.request<google.bigtable.admin.v2.IAppProfile[]>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'listAppProfiles',
        reqOpts,
        gaxOpts,
      },
      (err, resp) => {
        if (err) {
          callback(err);
          return;
        }
        const appProfiles = resp!.map(appProfileObj => {
          const appProfile = this.appProfile(
            appProfileObj.name!.split('/').pop()!,
          );
          appProfile.metadata = appProfileObj;
          return appProfile;
        });
        callback(null, appProfiles, resp);
      },
    );
  }

  /**
   * Get {@link AppProfile} objects for all the App Profiles in your
   * Cloud Bigtable instance as a readable object stream.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   *     {@link Instance#getAppProfiles} for a complete list of options.
   * @returns {stream}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   *
   * instance.getAppProfilesStream()
   *   .on('error', console.error)
   *   .on('data', function(appProfile) {
   *     // appProfile is a AppProfile object.
   *   })
   *   .on('end', () => {
   *     // All appProfiles retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * instance.getAppProfilesStream()
   *   .on('data', function(appProfile) {
   *     this.end();
   *   });
   * ```
   */
  getAppProfilesStream(gaxOptions: CallOptions = {}): NodeJS.ReadableStream {
    const reqOpts: google.bigtable.admin.v2.IListAppProfilesRequest = {
      parent: this.name,
    };
    const gaxOpts = extend(true, {}, gaxOptions);

    if (is.number((gaxOpts as GetBackupsOptions).pageSize)) {
      reqOpts.pageSize = (gaxOpts as GetBackupsOptions).pageSize;
    }
    delete (gaxOpts as GetBackupsOptions).pageSize;

    if ((gaxOpts as GetBackupsOptions).pageToken) {
      reqOpts.pageToken = (gaxOpts as GetBackupsOptions).pageToken;
    }
    delete (gaxOpts as GetBackupsOptions).pageToken;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const transformToAppProfile = (
      chunk: google.bigtable.admin.v2.IAppProfile,
      enc: string,
      callback: Function,
    ) => {
      const appProfile = self.appProfile(chunk.name!.split('/').pop()!);
      appProfile.metadata = chunk;
      callback(null, appProfile);
    };
    let failedLocations: string[] = [];
    const flush = (callback: Function) => {
      if (failedLocations.length > 0) {
        callback(
          new Error(
            `Resources from the following locations are currently not available\n${JSON.stringify(
              failedLocations,
            )}`,
          ),
        );
      } else {
        callback();
      }
    };
    const stream = this.bigtable.request({
      client: 'BigtableInstanceAdminClient',
      method: 'listAppProfilesStream',
      reqOpts,
      gaxOpts,
    });
    stream.on('response', apiResp => {
      if (arrify(apiResp.failedLocations).length > 0) {
        failedLocations = failedLocations.concat(apiResp.failedLocations);
      }
    });
    return pumpify.obj([
      stream,
      new Transform({
        objectMode: true,
        transform: transformToAppProfile,
        flush,
      }),
    ]);
  }

  getBackups(options?: GetBackupsOptions): Promise<GetBackupsResponse>;
  getBackups(options: GetBackupsOptions, callback: GetBackupsCallback): void;
  getBackups(callback: GetBackupsCallback): void;
  /**
   * Get Cloud Bigtable Backup instances within this instance. This returns both
   * completed and pending backups.
   *
   * @param {GetBackupsOptions | GetBackupsCallback} [optionsOrCallback]
   * @param {GetBackupsResponse} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Backup[]} callback.backups All matching Backup instances.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<ListBackupsResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.list.js</caption>
   * region_tag:bigtable_api_list_backups
   */
  getBackups(
    optionsOrCallback?: GetBackupsOptions | GetBackupsCallback,
    cb?: GetBackupsCallback,
  ): void | Promise<GetBackupsResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.cluster('-').getBackups(options, callback);
  }

  /**
   * Get Cloud Bigtable Backup instances within this instance. This returns both
   * completed and pending backups as a readable stream.
   *
   * @param {GetBackupsOptions} [options] Configuration object. See
   *     {@link Instance#getBackups} for a complete list of options.
   * @returns {ReadableStream<Backup>}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   *
   * instance.getBackupsStream()
   *   .on('error', console.error)
   *   .on('data', function(backup) {
   *     // backup is a Backup object.
   *   })
   *   .on('end', () => {
   *     // All backups retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * instance.getBackupsStream()
   *   .on('data', function(backup) {
   *     this.end();
   *   });
   * ```
   */
  getBackupsStream(options?: GetBackupsOptions): NodeJS.ReadableStream {
    return this.cluster('-').getBackupsStream(options);
  }

  getClusters(options?: CallOptions): Promise<GetClustersResponse>;
  getClusters(options: CallOptions, callback: GetClustersCallback): void;
  getClusters(callback: GetClustersCallback): void;
  /**
   * Get Cluster objects for all of your clusters.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Cluster[]} callback.clusters List of all
   *     Clusters.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_clusters
   */
  getClusters(
    optionsOrCallback?: CallOptions | GetClustersCallback,
    cb?: GetClustersCallback,
  ): void | Promise<GetClustersResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      parent: this.name,
    };

    this.bigtable.request<google.bigtable.admin.v2.IListClustersResponse>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'listClusters',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback(err);
          return;
        }
        const clusters = resp!.clusters!.map(clusterObj => {
          const cluster = this.cluster(clusterObj.name!.split('/').pop()!);
          cluster.metadata = clusterObj;
          return cluster;
        });
        callback(null, clusters, resp);
      },
    );
  }

  getIamPolicy(options?: GetIamPolicyOptions): Promise<[Policy]>;
  getIamPolicy(
    options: GetIamPolicyOptions,
    callback: GetIamPolicyCallback,
  ): void;
  /**
   * @param {object} [options] Configuration object.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {number} [options.requestedPolicyVersion] The policy format version
   *     to be returned. Valid values are 0, 1, and 3. Requests specifying an
   *     invalid value will be rejected. Requests for policies with any
   *     conditional bindings must specify version 3. Policies without any
   *     conditional bindings may specify any valid value or leave the field unset.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Policy} policy The policy.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_instance_Iam_policy
   */
  getIamPolicy(
    optionsOrCallback?: GetIamPolicyOptions | GetIamPolicyCallback,
    callback?: GetIamPolicyCallback,
  ): void | Promise<GetIamPolicyResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback!;

    const reqOpts = {
      resource: this.name,
    } as google.iam.v1.IGetIamPolicyRequest;

    if (
      options.requestedPolicyVersion !== null &&
      options.requestedPolicyVersion !== undefined
    ) {
      reqOpts.options = {
        requestedPolicyVersion: options.requestedPolicyVersion,
      };
    }

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'getIamPolicy',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback!(err);
          return;
        }
        callback!(null, Table.decodePolicyEtag(resp));
      },
    );
  }

  getMetadata(options?: CallOptions): Promise<GetInstanceMetadataResponse>;
  getMetadata(
    options: CallOptions,
    callback: GetInstanceMetadataCallback,
  ): void;
  getMetadata(callback: GetInstanceMetadataCallback): void;
  /**
   * Get the instance metadata.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The metadata.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_instance_metadata
   */
  getMetadata(
    optionsOrCallback?: CallOptions | GetInstanceMetadataCallback,
    cb?: GetInstanceMetadataCallback,
  ): void | Promise<GetInstanceMetadataResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    this.bigtable.request<google.bigtable.admin.v2.IInstance>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'getInstance',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          this.metadata = args[1];
        }
        callback(...args);
      },
    );
  }

  getTables(options?: GetTablesOptions): Promise<GetTablesResponse>;
  getTables(options: GetTablesOptions, callback: GetTablesCallback): void;
  getTables(callback: GetTablesCallback): void;
  /**
   * Get Table objects for all the tables in your Cloud Bigtable instance.
   *
   * @param {object} [options] Query object.
   * @param {boolean} [options.autoPaginate=true] Have pagination handled
   *     automatically.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {number} [options.maxApiCalls] Maximum number of API calls to make.
   * @param {number} [options.maxResults] Maximum number of items to return.
   * @param {string} [options.pageToken] A previously-returned page token
   *     representing part of a larger set of results to view.
   * @param {string} [options.view] View over the table's fields. Possible options
   *     are 'name', 'schema' or 'full'. Default: 'name'.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Table[]} callback.tables List of all Table objects.These objects contains
   *     only table name & id but is not a complete representation of a table.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_tables
   */
  getTables(
    optionsOrCallback?: GetTablesOptions | GetTablesCallback,
    cb?: GetTablesCallback,
  ): void | Promise<GetTablesResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const gaxOpts = extend(true, {}, options.gaxOptions);
    let reqOpts = Object.assign({}, options, {
      parent: this.name,
      view: Table.VIEWS[options.view || 'unspecified'],
    });

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetBackupsOptions).pageSize,
          pageToken: (gaxOpts as GetBackupsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetBackupsOptions).pageSize;
      delete (gaxOpts as GetBackupsOptions).pageToken;
    }

    delete (reqOpts as GetTablesOptions).gaxOptions;

    this.bigtable.request<Table[]>(
      {
        client: 'BigtableTableAdminClient',
        method: 'listTables',
        reqOpts,
        gaxOpts,
      },
      (...args) => {
        if (args[1]) {
          args[1] = args[1].map(tableObj => {
            const table = this.table(tableObj.name!.split('/').pop()!);
            table.metadata = tableObj;
            return table;
          });
        }

        callback(...args);
      },
    );
  }

  /**
   * Get {@link Table} objects for all the tables in your Cloud Bigtable
   * instance as a readable object stream.
   *
   * @param {object} [options] Query object. See
   *     {@link Instance#getTables} for a complete list of options.
   * @returns {stream}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   *
   * instance.getTablesStream()
   *   .on('error', console.error)
   *   .on('data', function(table) {
   *     // table is a Table object.
   *   })
   *   .on('end', () => {
   *     // All tables retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * instance.getTablesStream()
   *   .on('data', function(table) {
   *     this.end();
   *   });
   * ```
   */
  getTablesStream(options: GetTablesOptions = {}): NodeJS.ReadableStream {
    const gaxOpts = extend(true, {}, options.gaxOptions);
    let reqOpts = Object.assign({}, options, {
      parent: this.name,
      view: Table.VIEWS[options.view || 'unspecified'],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (reqOpts as any).gaxOptions;

    // Copy over pageSize and pageToken values from gaxOptions.
    // However values set on options take precedence.
    if (gaxOpts) {
      reqOpts = extend(
        {},
        {
          pageSize: (gaxOpts as GetBackupsOptions).pageSize,
          pageToken: (gaxOpts as GetBackupsOptions).pageToken,
        },
        reqOpts,
      );
      delete (gaxOpts as GetBackupsOptions).pageSize;
      delete (gaxOpts as GetBackupsOptions).pageToken;
    }

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const transformToTable = (
      chunk: google.bigtable.admin.v2.ITable,
      enc: string,
      callback: Function,
    ) => {
      const table = self.table(chunk.name!.split('/').pop()!);
      table.metadata = chunk;
      callback(null, table);
    };
    return pumpify.obj([
      this.bigtable.request({
        client: 'BigtableTableAdminClient',
        method: 'listTablesStream',
        reqOpts,
        gaxOpts,
      }),
      new Transform({objectMode: true, transform: transformToTable}),
    ]);
  }

  createTableFromBackup(
    config: CreateTableFromBackupConfig,
  ): Promise<RestoreTableResponse>;
  createTableFromBackup(
    config: CreateTableFromBackupConfig,
    callback: RestoreTableCallback,
  ): void;
  /**
   * Create a new table by restoring from a completed backup.
   *
   * The new table must be in the same instance as the instance containing
   * the backup. The returned table
   * {@link google.longrunning.Operation|long-running operation} can be used
   * to track the progress of the operation, and to cancel it.
   *
   * @param {CreateTableFromBackupConfig} config Configuration object.
   * @param {Backup | string} config.backup The name of the backup from which to
   *     restore of the form
   *     `projects/<project>/instances/<instance>/clusters/<cluster>/backups/<backup>`,
   *     or a Backup instance.
   * @param {string} config.table The id of the table to create and restore to.
   * @param {CallOptions} [config.gaxOptions] Request configuration options,
   *     outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {RestoreTableCallback} [cb]
   * @return {void | Promise<RestoreTableResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.restore.js</caption>
   * region_tag:bigtable_api_restore_backup
   */
  createTableFromBackup(
    config: CreateTableFromBackupConfig,
    callback?: RestoreTableCallback,
  ): void | Promise<RestoreTableResponse> {
    if (!config.table) {
      throw new Error('A table id is required to restore from a backup.');
    }

    let backup: Backup;

    if (config.backup instanceof Backup) {
      backup = config.backup;
    } else {
      try {
        const clusterId = config.backup.match(/clusters\/([^/]+)/)![1];
        const instanceId = config.backup.match(/instances\/([^/]+)/)![1];
        if (instanceId !== this.id) {
          backup = this.bigtable
            .instance(instanceId)
            .cluster(clusterId)
            .backup(config.backup);
        } else {
          backup = this.cluster(clusterId).backup(config.backup);
        }
      } catch (e) {
        throw new Error(
          'A complete backup name (path) is required or a Backup object.',
        );
      }
    }

    backup.restoreTo(
      {tableId: config.table, instance: this, gaxOptions: config.gaxOptions!},
      callback!,
    );
  }

  setIamPolicy(
    policy: Policy,
    gaxOptions?: CallOptions,
  ): Promise<SetIamPolicyResponse>;
  setIamPolicy(
    policy: Policy,
    gaxOptions: CallOptions,
    callback: SetIamPolicyCallback,
  ): void;
  setIamPolicy(policy: Policy, callback: SetIamPolicyCallback): void;
  /**
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Policy} policy The policy.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_set_instance_Iam_policy
   */
  setIamPolicy(
    policy: Policy,
    gaxOptionsOrCallback?: CallOptions | SetIamPolicyCallback,
    callback?: SetIamPolicyCallback,
  ): void | Promise<SetIamPolicyResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    callback =
      typeof gaxOptionsOrCallback === 'function'
        ? gaxOptionsOrCallback
        : callback!;

    if (policy.etag !== null && policy.etag !== undefined) {
      (policy.etag as {} as Buffer) = Buffer.from(policy.etag as string);
    }
    const reqOpts = {
      resource: this.name,
      policy,
    };

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'setIamPolicy',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback!(err);
        }
        callback!(null, Table.decodePolicyEtag(resp));
      },
    );
  }

  setMetadata(
    metadata: IInstance,
    options?: CallOptions,
  ): Promise<SetInstanceMetadataResponse>;
  setMetadata(
    metadata: IInstance,
    options: CallOptions,
    callback: SetInstanceMetadataCallback,
  ): void;
  setMetadata(metadata: IInstance, callback: SetInstanceMetadataCallback): void;
  /**
   * Set the instance metadata.
   *
   * @param {object} metadata Metadata object.
   * @param {string} metadata.displayName The descriptive name for this
   *     instance as it appears in UIs. It can be changed at any time, but
   *     should be kept globally unique to avoid confusion.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_set_meta_data
   */
  setMetadata(
    metadata: IInstance,
    optionsOrCallback?: CallOptions | SetInstanceMetadataCallback,
    cb?: SetInstanceMetadataCallback,
  ): void | Promise<SetInstanceMetadataResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const reqOpts = {
      instance: Object.assign({name: this.name}, metadata),
      updateMask: {
        paths: [],
      },
    } as google.bigtable.admin.v2.IPartialUpdateInstanceRequest;
    const fieldsForMask = ['displayName', 'type', 'labels'];

    fieldsForMask.forEach(field => {
      if (field in reqOpts.instance!) {
        reqOpts.updateMask!.paths!.push(snakeCase(field));
      }
    });

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'partialUpdateInstance',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          this.metadata = args[1];
        }
        callback(...args);
      },
    );
  }

  /**
   * Get a reference to a Bigtable table.
   *
   * @param {string} id Unique identifier of the table.
   * @returns {Table}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   * const table = instance.table('presidents');
   * ```
   */
  table(id: string): Table {
    return new Table(this, id);
  }

  testIamPermissions(
    permissions: string | string[],
    gaxOptions?: CallOptions,
  ): Promise<TestIamPermissionsResponse>;
  testIamPermissions(
    permissions: string | string[],
    callback: TestIamPermissionsCallback,
  ): void;
  testIamPermissions(
    permissions: string | string[],
    gaxOptions: CallOptions,
    callback: TestIamPermissionsCallback,
  ): void;
  /**
   *
   * @param {string | string[]} permissions The permission(s) to test for.
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {string[]} permissions A subset of permissions that the caller is
   *     allowed.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_test_instance_Iam_permissions
   */
  testIamPermissions(
    permissions: string | string[],
    gaxOptionsOrCallback?: CallOptions | TestIamPermissionsCallback,
    callback?: TestIamPermissionsCallback,
  ): void | Promise<TestIamPermissionsResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    callback =
      typeof gaxOptionsOrCallback === 'function'
        ? gaxOptionsOrCallback
        : callback!;

    const reqOpts = {
      resource: this.name,
      permissions: arrify(permissions),
    };

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'testIamPermissions',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback!(err);
          return;
        }
        callback!(null, resp.permissions);
      },
    );
  }

  /**
   * Gets an Authorized View object for making authorized view grpc calls.
   *
   * @param {string} tableName The name for the Table
   * @param {string} viewName The name for the Authorized view
   */
  view(tableName: string, viewName: string): AuthorizedView {
    return new AuthorizedView(this, tableName, viewName);
  }

  prepareStatement(
    options: PrepareStatementOptions,
  ): Promise<PrepareStatementResponse>;
  prepareStatement(
    options: PrepareStatementOptions,
    callback: PrepareStatementCallback,
  ): void;
  prepareStatement(query: string): Promise<PrepareStatementResponse>;
  prepareStatement(query: string, callback: PrepareStatementCallback): void;
  /**
   * Prepare an SQL query to be executed on an instance.
   *
   * @param {?string} [query] PreparedStatement object representing a query
   *   to execute.
   * @param {string} [opts.query] Query string for which we want to construct the preparedStatement object.
   * @param {object} [opts.parameterTypes] Object mapping names of parameters to their types.
   * Type hints should be constructed using factory functions such as {@link Int64}
   * @param {CallOptions} [opts.retryOptions] gax's CallOptions wich are passed straight to gax.
   *   The same retry options are also used when automatically refreshing the PreparedStatement.
   *
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {?PreparedStatement} callback.preparedStatement The preparedStatement object used to perform the executeQuery operation.
   *
   */
  prepareStatement(
    queryOrOpts: string | PrepareStatementOptions,
    callback?: PrepareStatementCallback,
  ): void | Promise<PrepareStatementResponse> {
    const opts: PrepareStatementOptions =
      typeof queryOrOpts === 'string' ? {query: queryOrOpts} : queryOrOpts;

    const protoParamTypes = parseParameterTypes(opts.parameterTypes || {});
    const request = {
      client: 'BigtableClient',
      method: 'prepareQuery',
      reqOpts: {
        instanceName: this.name,
        appProfileId: this.bigtable.appProfileId,
        query: opts.query,
        paramTypes: protoParamTypes,
      },
      gaxOpts: opts.retryOptions,
    };
    this.bigtable.request(request, (...args) => {
      if (args[0]) {
        callback!(args[0]);
      }
      try {
        callback!(
          null,
          new PreparedStatement(
            this.bigtable,
            args[1]!,
            request,
            opts.parameterTypes || {},
          ),
        );
      } catch (err) {
        callback!(err as any, undefined);
      }
    });
  }

  executeQuery(options: ExecuteQueryOptions): Promise<ExecuteQueryResponse>;
  executeQuery(
    options: ExecuteQueryOptions,
    callback: ExecuteQueryCallback,
  ): void;
  executeQuery(
    preparedStatement: PreparedStatement,
  ): Promise<ExecuteQueryResponse>;
  executeQuery(
    preparedStatement: PreparedStatement,
    callback: ExecuteQueryCallback,
  ): void;
  /**
   * Execute a SQL query on an instance.
   *
   *
   * @param {?PreparedStatement} [preparedStatement] PreparedStatement object representing a query
   *   to execute.
   * @param {?object} [options] Configuration object. See
   *     {@link Instance#createExecuteQueryStream} for a complete list of options.
   *
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {?QueryResultRow[]} callback.rows List of rows.
   * @param {?SqlTypes.ResultSetMetadata} callback.metadata Metadata for the response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_execute_query
   */
  executeQuery(
    preparedStatementOrOpts: PreparedStatement | ExecuteQueryOptions,
    callback?: ExecuteQueryCallback,
  ): void | Promise<ExecuteQueryResponse> {
    let opts: ExecuteQueryOptions;
    if (preparedStatementOrOpts instanceof PreparedStatement) {
      opts = {preparedStatement: preparedStatementOrOpts};
    } else {
      opts = preparedStatementOrOpts;
    }
    const stream = this.createExecuteQueryStream(opts);

    stream.on('error', callback!).pipe(
      concat((rows: QueryResultRow[]) => {
        callback!(null, rows);
      }),
    );
  }

  /**
   * Execute a SQL query on an instance.
   *
   * @param {PreparedStatement} [preparedStatement] SQL query to execute. Parameters can be specified using @name notation.
   * @param {object} [opts] Configuration object.
   * @param {object} [opts.parameters] Object mapping names of parameters used in the query to JS values.
   * @param {object} [opts.retryOptions] Retry options used for executing the query. Note that the only values
   *   used are:
   *   - retryOptions.retry.retryCodes
   *   - retryOptions.retry.backoffSettings.maxRetries
   *   - retryOptions.retry.backoffSettings.totalTimeoutMillis
   *   - retryOptions.retry.backoffSettings.maxRetryDelayMillis
   *   - retryOptions.retry.backoffSettings.retryDelayMultiplier
   *   - retryOptions.retry.backoffSettings.initialRetryDelayMillis
   * @returns {ExecuteQueryStreamWithMetadata}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_create_query_stream
   */
  createExecuteQueryStream(
    opts: ExecuteQueryOptions,
  ): ExecuteQueryStreamWithMetadata {
    /**
     * We create the following streams:
     * responseStream -> byteBuffer -> readerStream -> resultStream
     *
     * The last two (readerStream and resultStream) are connected using pumpify
     * and returned to the caller.
     *
     * When a request is made responseStream and byteBuffer are created,
     * connected using pumpify and piped to the readerStream.
     *
     * On retry, the old responseStream-byteBuffer pair is discarded and a
     * new pair is crated.
     *
     * For more info please refer to comments in setupRetries function.
     *
     */
    const metadataConsumer = new MetadataConsumer();

    let callerCancelled = false;
    const setCallerCancelled = (value: boolean) => {
      callerCancelled = value;
    };
    const hasCallerCancelled = () => callerCancelled;

    const resultStream = new ExecuteQueryStreamTransformWithMetadata(
      metadataConsumer,
      hasCallerCancelled,
      opts.encoding,
    );
    const protoParams: {[k: string]: google.bigtable.v2.IValue} | null =
      parseParameters(
        opts.parameters || {},
        opts.preparedStatement.getParameterTypes(),
      );

    const readerStream = new ProtobufReaderTransformer(metadataConsumer);

    const reqOpts: google.bigtable.v2.IExecuteQueryRequest = {
      instanceName: this.name,
      appProfileId: this.bigtable.appProfileId,
      params: protoParams,
    };

    // This creates a row stream which is two streams connected in a series.
    const callerStream = createCallerStream(
      readerStream,
      resultStream,
      metadataConsumer,
      setCallerCancelled,
    );

    const stateMachine = new ExecuteQueryStateMachine(
      this.bigtable,
      callerStream,
      opts.preparedStatement,
      reqOpts,
      opts.retryOptions?.retry,
      opts.encoding,
    );

    // make sure stateMachine is not garbage collected as long as the callerStream.
    callerStream._stateMachine = stateMachine;

    return callerStream;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Instance, {
  exclude: [
    'appProfile',
    'cluster',
    'table',
    'getBackupsStream',
    'getTablesStream',
    'getAppProfilesStream',
    'view',
  ],
});

/**
 * Reference to the {@link Instance} class.
 * @name module:@google-cloud/bigtable.Instance
 * @see Instance
 */
