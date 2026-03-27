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
import {CallOptions, LROperation, Operation, ServiceError} from 'google-gax';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pumpify = require('pumpify');

import {google} from '../protos/protos';
import {Bigtable} from '.';
import {Instance} from './instance';
import {ClusterUtils} from './utils/cluster';

import {
  Backup,
  GetBackupsCallback,
  GetBackupsOptions,
  GetBackupsResponse,
  IBackup,
  ModifiableBackupFields,
} from './backup';
import {Transform} from 'stream';
import {Table} from './table';
import extend = require('extend');

export interface GenericCallback<T> {
  (err?: ServiceError | null, apiResponse?: T | null): void;
}
export interface GenericClusterCallback<T> {
  (
    err?: ServiceError | null,
    cluster?: Cluster | null,
    apiResponse?: T | null,
  ): void;
}
export interface GenericOperationCallback<T> {
  (
    err?: ServiceError | null,
    operation?: Operation | null,
    apiResponse?: T | null,
  ): void;
}

export type IEmpty = google.protobuf.IEmpty;
export type ICluster = google.bigtable.admin.v2.ICluster;
export type IOperation = google.longrunning.IOperation;

export type ApiResponse = [IOperation];
export type CreateClusterResponse = [ICluster, Operation, IOperation];
export type BooleanResponse = [boolean];
export type GetClusterResponse = [ICluster, IOperation];
export type GetClustersResponse = [Cluster[], IOperation];
export type GetClusterMetadataResponse = [ICluster, IOperation];
export type SetClusterMetadataResponse = [Operation, google.protobuf.Empty];

export type CreateClusterCallback = GenericCallback<IOperation>;
export type DeleteClusterCallback = GenericCallback<IOperation>;
export type ExistsClusterCallback = GenericCallback<boolean>;
export type GetClusterCallback = GenericClusterCallback<ICluster>;
export type GetClustersCallback = (
  err: ServiceError | null,
  clusters?: Cluster[],
  apiResponse?: google.bigtable.admin.v2.IListClustersResponse,
) => void;
export interface SetClusterMetadataOptions {
  nodes?: number;
  minServeNodes?: number;
  maxServeNodes?: number;
  cpuUtilizationPercent?: number;
  location?: string;
}
export type SetClusterMetadataCallback = GenericOperationCallback<
  Operation | null | undefined
>;
export interface BasicClusterConfig {
  encryption?: google.bigtable.admin.v2.Cluster.IEncryptionConfig;
  key?: string;
  location: string;
  nodes?: number;
  storage?: string;
  minServeNodes?: number;
  maxServeNodes?: number;
  cpuUtilizationPercent?: number;
}

export interface CreateBackupConfig extends ModifiableBackupFields {
  table?: string | Table;
  gaxOptions?: CallOptions;
}

export type CreateBackupCallback = (
  err: ServiceError | Error | null,
  backup?: Backup,
  operation?: Operation,
  apiResponse?: IOperation,
) => void;
export type CreateBackupResponse = [Backup, Operation, IOperation];

export interface CreateClusterOptions extends BasicClusterConfig {
  gaxOptions?: CallOptions;
}
export type GetClusterMetadataCallback = (
  err: ServiceError | null,
  metadata?: ICluster | null,
  apiResponse?: IOperation | null,
) => void;

/**
 * Create a cluster object to interact with your cluster.
 *
 * @class
 * @param {Instance} instance The parent instance of this cluster.
 * @param {string} id Id of the cluster.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const cluster = instance.cluster('my-cluster');
 * ```
 */
export class Cluster {
  bigtable: Bigtable;
  instance: Instance;
  id: string;
  name: string;
  metadata?: ICluster;
  constructor(instance: Instance, id: string) {
    this.bigtable = instance.bigtable;
    this.instance = instance;

    let name: string;

    if (id.includes('/')) {
      if (id.startsWith(`${instance.name}/clusters/`)) {
        name = id;
      } else {
        throw new Error(`Cluster id '${id}' is not formatted correctly.
Please use the format 'my-cluster' or '${instance.name}/clusters/my-cluster'.`);
      }
    } else {
      name = `${instance.name}/clusters/${id}`;
    }
    this.id = name.split('/').pop()!;
    this.name = name;
  }

  /**
   * Formats zone location.
   *
   * @private
   *
   * @param {string} project The project ID.
   * @param {string} location The zone location.
   * @returns {string}
   *
   * @example
   * ```
   * Cluster.getLocation_('my-project', 'us-central1-b');
   * // 'projects/my-project/locations/us-central1-b'
   * ```
   */
  static getLocation_(project: string, location: string): string {
    if (location.includes('/')) {
      return location;
    }

    // in-case project has '/', split and pick last component
    if (project.includes('/')) {
      project = project.split('/').pop()!;
    }

    return `projects/${project}/locations/${location}`;
  }

  /**
   * Maps the storage type to the proper integer.
   *
   * @private
   *
   * @param {string} type The storage type (hdd, ssd).
   * @returns {number}
   *
   * @example
   * ```
   * Cluster.getStorageType_('ssd');
   * // 1
   * ```
   */
  static getStorageType_(type: string): number {
    const storageTypes: {[k: string]: number} = {
      unspecified: 0,
      ssd: 1,
      hdd: 2,
    };

    if (typeof type === 'string') {
      type = type.toLowerCase();
    }

    return storageTypes[type] || storageTypes.unspecified;
  }

  /**
   * Get a reference to a Bigtable Cluster.
   *
   * @param {string} id The backup name or id.
   * @returns {Backup}
   */
  backup(id: string): Backup {
    return new Backup(this, id);
  }

  create(): Promise<CreateClusterResponse>;
  create(options: CreateClusterOptions): Promise<CreateClusterResponse>;
  create(callback: CreateClusterCallback): void;
  create(options: CreateClusterOptions, callback: CreateClusterCallback): void;
  /**
   * Create a cluster.
   *
   * @param {object} [options] See {@link Instance#createCluster}.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_create_cluster
   */
  create(
    optionsOrCallback?: CreateClusterOptions | CreateClusterCallback,
    cb?: CreateClusterCallback,
  ): void | Promise<CreateClusterResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' && optionsOrCallback
        ? optionsOrCallback
        : ({} as CreateClusterOptions);

    this.instance.createCluster(this.id, options, callback);
  }

  createBackup(
    id: string,
    config: CreateBackupConfig,
  ): Promise<CreateBackupResponse>;
  createBackup(
    id: string,
    config: CreateBackupConfig,
    callback: CreateBackupCallback,
  ): void;
  /**
   * Backup a table from this cluster.
   *
   * @param {string} id A unique ID for the backup.
   * @param {object} config Configuration object.
   * @param {BackupTimestamp} config.expireTime When the backup will be
   *     automatically deleted.
   * @param {string|Table} config.table Table to create the backup from.
   * @param {CallOptions} [config.gaxOptions] Request configuration options,
   *     outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {CreateBackupCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Backup} callback.backup The newly created Backup.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<CreateBackupResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.create.js</caption>
   * region_tag:bigtable_api_create_backup
   */
  createBackup(
    id: string,
    config: CreateBackupConfig,
    callback?: CreateBackupCallback,
  ): void | Promise<CreateBackupResponse> {
    if (!id) {
      throw new TypeError('An id is required to create a backup.');
    }

    if (typeof config !== 'object') {
      throw new Error('A configuration object is required.');
    }

    const table = config.table;

    if (!table) {
      throw new Error('A source table is required to backup.');
    }

    const reqOpts = {
      parent: this.name,
      backupId: id,
      backup: {
        sourceTable: typeof table === 'string' ? table : table.name,
        ...config,
      },
    };

    ClusterUtils.formatBackupExpiryTime(reqOpts.backup);

    delete reqOpts.backup.table;
    delete reqOpts.backup.gaxOptions;

    this.bigtable.request<
      LROperation<IBackup, google.bigtable.admin.v2.ICreateBackupMetadata>
    >(
      {
        client: 'BigtableTableAdminClient',
        method: 'createBackup',
        reqOpts,
        gaxOpts: config.gaxOptions,
      },
      (err, ...args) => {
        if (err) {
          callback!(err, undefined, ...args);
          return;
        }

        callback!(null, this.backup(id), ...args);
      },
    );
  }

  delete(): Promise<ApiResponse>;
  delete(gaxOptions: CallOptions): Promise<ApiResponse>;
  delete(callback: DeleteClusterCallback): void;
  delete(gaxOptions: CallOptions, callback: DeleteClusterCallback): void;
  /**
   * Delete the cluster.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_delete_cluster
   */
  delete(
    gaxOptionsOrCallback?: CallOptions | DeleteClusterCallback,
    cb?: DeleteClusterCallback,
  ): void | Promise<ApiResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' && gaxOptionsOrCallback
        ? gaxOptionsOrCallback
        : ({} as CallOptions);

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'deleteCluster',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  exists(): Promise<BooleanResponse>;
  exists(gaxOptions: CallOptions): Promise<BooleanResponse>;
  exists(callback: ExistsClusterCallback): void;
  exists(gaxOptions: CallOptions, callback: ExistsClusterCallback): void;
  /**
   * Check if a cluster exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the cluster exists or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_exists_cluster
   */
  exists(
    gaxOptionsOrCallback?: CallOptions | ExistsClusterCallback,
    cb?: ExistsClusterCallback,
  ): void | Promise<BooleanResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' && gaxOptionsOrCallback
        ? gaxOptionsOrCallback
        : ({} as CallOptions);

    this.getMetadata(gaxOptions, (err?: ServiceError | null) => {
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

  get(): Promise<GetClusterResponse>;
  get(gaxOptions: CallOptions): Promise<GetClusterResponse>;
  get(callback: GetClusterCallback): void;
  get(gaxOptions: CallOptions, callback: GetClusterCallback): void;
  /**
   * Get a cluster if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_get_cluster
   */
  get(
    gaxOptionsOrCallback?: CallOptions | GetClusterCallback,
    cb?: GetClusterCallback,
  ): void | Promise<GetClusterResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' && gaxOptionsOrCallback
        ? gaxOptionsOrCallback
        : ({} as CallOptions);

    this.getMetadata(
      gaxOptions,
      (err?: ServiceError | null, metadata?: ICluster | null) => {
        callback(err, err ? null : this, metadata);
      },
    );
  }

  getBackups(options?: GetBackupsOptions): Promise<GetBackupsResponse>;
  getBackups(options: GetBackupsOptions, callback: GetBackupsCallback): void;
  getBackups(callback: GetBackupsCallback): void;
  /**
   * Get Cloud Bigtable Backup instances within this cluster. This returns both
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
    let options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    options = extend(true, {}, options);

    const gaxOpts = options.gaxOptions || {};

    const reqOpts: google.bigtable.admin.v2.IListBackupsRequest = {
      parent: this.name,
      pageSize: (gaxOpts as GetBackupsOptions).pageSize,
      pageToken: (gaxOpts as GetBackupsOptions).pageToken,
      ...options,
    };

    delete (gaxOpts as GetBackupsOptions).pageSize;
    delete (gaxOpts as GetBackupsOptions).pageToken;
    delete (reqOpts as CallOptions).autoPaginate;
    delete (reqOpts as GetBackupsOptions).gaxOptions;

    if (
      typeof options.autoPaginate === 'boolean' &&
      typeof gaxOpts.autoPaginate === 'undefined'
    ) {
      gaxOpts.autoPaginate = options.autoPaginate;
    }

    this.bigtable.request<google.bigtable.admin.v2.IBackup[]>(
      {
        client: 'BigtableTableAdminClient',
        method: 'listBackups',
        reqOpts,
        gaxOpts,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err, ...resp: any[]) => {
        let backups: Backup[] = [];

        if (resp[0]) {
          backups = resp[0].map((backup: IBackup) => {
            // Instance#getBackups() uses `-` as a cluster id, which tells the
            // API to return backups from any cluster.
            const backupInstance =
              this.id === '-'
                ? this.instance
                    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                    .cluster(backup.name?.match(/clusters\/([^/]+)/)![1]!)
                    .backup(backup.name!.split('/').pop()!)
                : this.backup(backup.name!.split('/').pop()!);
            backupInstance.metadata = backup;
            return backupInstance;
          });
        }

        const nextQuery = resp[1]! ? Object.assign(options, resp[1]) : null;
        const apiResp: google.bigtable.admin.v2.IListBackupsResponse = resp[2];

        callback(err, backups, nextQuery, apiResp);
      },
    );
  }

  /**
   * Lists Cloud Bigtable backups within this cluster. Provides both
   * completed and pending backups as a readable object stream.
   *
   * @param {GetBackupsOptions} [options] Configuration object. See
   *     {@link Cluster#getBackups} for a complete list of options.
   * @returns {ReadableStream<Backup>}
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   * const cluster = instance.cluster('my-cluster');
   *
   * cluster.getBackupsStream()
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
   * cluster.getBackupsStream()
   *   .on('data', function(backup) {
   *     this.end();
   *   });
   * ```
   */
  getBackupsStream(options?: GetBackupsOptions): NodeJS.ReadableStream {
    const {gaxOptions, ...restOptions} = options || {};
    const reqOpts: google.bigtable.admin.v2.IListBackupsRequest = {
      ...restOptions,
      parent: this.name,
    };

    return pumpify.obj([
      this.bigtable.request({
        client: 'BigtableTableAdminClient',
        method: 'listBackupsStream',
        reqOpts,
        gaxOpts: gaxOptions,
      }),
      new Transform({
        objectMode: true,
        transform: (backup: IBackup, enc: string, cb: Function) => {
          // Instance#getBackupsStream() uses `-` as a cluster id, which tells
          // the API to return backups from any cluster.
          const backupInstance =
            this.id === '-'
              ? this.instance
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  .cluster(backup.name?.match(/clusters\/([^/]+)/)![1]!)
                  .backup(backup.name!.split('/').pop()!)
              : this.backup(backup.name!.split('/').pop()!);
          backupInstance.metadata = backup;
          cb(null, backupInstance);
        },
      }),
    ]);
  }

  getMetadata(): Promise<GetClusterMetadataResponse>;
  getMetadata(gaxOptions: CallOptions): Promise<GetClusterMetadataResponse>;
  getMetadata(callback: GetClusterMetadataCallback): void;
  getMetadata(
    gaxOptions: CallOptions,
    callback: GetClusterMetadataCallback,
  ): void;
  /**
   * Get the cluster metadata.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The metadata.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_cluster_get_meta
   */
  getMetadata(
    gaxOptionsOrCallback?: CallOptions | GetClusterMetadataCallback,
    cb?: GetClusterMetadataCallback,
  ): void | Promise<GetClusterMetadataResponse> {
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' && gaxOptionsOrCallback
        ? gaxOptionsOrCallback
        : ({} as CallOptions);

    this.bigtable.request<google.bigtable.admin.v2.ICluster>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'getCluster',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }
        callback(err, resp);
      },
    );
  }

  setMetadata(
    metadata: SetClusterMetadataOptions,
    gaxOptions?: CallOptions,
  ): Promise<SetClusterMetadataResponse>;
  setMetadata(
    metadata: SetClusterMetadataOptions,
    callback: SetClusterMetadataCallback,
  ): void;
  setMetadata(
    metadata: SetClusterMetadataOptions,
    gaxOptions: CallOptions,
    callback: SetClusterMetadataCallback,
  ): void;
  /**
   * Set the cluster metadata.
   *
   * @param {object} metadata See {@link Instance#createCluster} for the
   *     available metadata options.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/cluster.js</caption>
   * region_tag:bigtable_api_cluster_set_meta
   */
  setMetadata(
    metadata: SetClusterMetadataOptions,
    gaxOptionsOrCallback?: CallOptions | SetClusterMetadataCallback,
    cb?: SetClusterMetadataCallback,
  ): void | Promise<SetClusterMetadataResponse> {
    ClusterUtils.validateClusterMetadata(metadata);
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object'
        ? gaxOptionsOrCallback
        : ({} as CallOptions);
    const reqOpts = ClusterUtils.getRequestFromMetadata(metadata, this.name);
    this.bigtable.request<Operation>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'partialUpdateCluster',
        reqOpts: reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        callback(err, resp);
      },
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Cluster, {
  exclude: ['backup'],
});

/**
 * Reference to the {@link Cluster} class.
 * @name module:@google-cloud/bigtable.Cluster
 * @see Cluster
 */
