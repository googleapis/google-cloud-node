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
import arrify = require('arrify');
import {ServiceError} from 'google-gax';

import {
  Family,
  CreateFamilyOptions,
  CreateFamilyCallback,
  CreateFamilyResponse,
  IColumnFamily,
} from './family';
import {Mutation} from './mutation';
import {CallOptions} from 'google-gax';
import {Instance} from './instance';
import {ModifiableBackupFields} from './backup';
import {CreateBackupCallback, CreateBackupResponse} from './cluster';
import {google} from '../protos/protos';
import {TableUtils} from './utils/table';
import * as is from 'is';
import {
  TabularApiSurface,
  InsertRowsCallback,
  InsertRowsResponse,
  MutateCallback,
  MutateResponse,
  PartialFailureError,
  PrefixRange,
  GetRowsOptions,
  GetRowsCallback,
  GetRowsResponse,
} from './tabular-api-surface';

export {
  InsertRowsCallback,
  InsertRowsResponse,
  MutateCallback,
  MutateResponse,
  PartialFailureError,
  PrefixRange,
  GetRowsOptions,
  GetRowsCallback,
  GetRowsResponse,
};

/**
 * @typedef {object} Policy
 * @property {number} [version] Specifies the format of the policy.
 *     Valid values are 0, 1, and 3. Requests specifying an invalid value will
 *     be rejected.
 *
 *     Operations affecting conditional bindings must specify version 3. This
 *     can be either setting a conditional policy, modifying a conditional
 *     binding, or removing a binding (conditional or unconditional) from the
 *     stored conditional policy.
 *     Operations on non-conditional policies may specify any valid value or
 *     leave the field unset.
 *
 *     If no etag is provided in the call to `setIamPolicy`, version compliance
 *     checks against the stored policy is skipped.
 * @property {array} [policy.bindings] Bindings associate members with roles.
 * @property {string} [policy.etag] `etag` is used for optimistic concurrency
 *     control as a way to help prevent simultaneous updates of a policy from
 *     overwriting each other. It is strongly suggested that systems make use
 *     of the `etag` in the read-modify-write cycle to perform policy updates
 *     in order to avoid raceconditions.
 */
export interface Policy {
  version?: number;
  bindings?: PolicyBinding[];
  etag?: Buffer | string;
}

/**
 * @typedef {object} PolicyBinding
 * @property {array} [PolicyBinding.role] Role that is assigned to `members`.
 *     For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
 * @property {string} [PolicyBinding.members] Identities requesting access.
 *     The full list of accepted values is outlined here
 *     https://googleapis.dev/nodejs/bigtable/latest/google.iam.v1.html#.Binding
 * @property {Expr} [PolicyBinding.condition] The condition that is associated
 *     with this binding.
 *     NOTE: An unsatisfied condition will not allow user access via current
 *     binding. Different bindings, including their conditions, are examined
 *     independently.
 */
export interface PolicyBinding {
  role?: string;
  members?: string[];
  condition?: Expr | null;
}

/**
 * @typedef {object} Expr
 * @property {string} [Expr.expression] The application context of the containing
 *     message determines which well-known feature set of Common Expression Language
 *     is supported.
 * @property {string} [Expr.title] An optional title for the expression, i.e. a
 *     short string describing its purpose. This can be used e.g. in UIs which
 *     allow to enter the expression.
 * @property {string} [Expr.description] An optional description of the
 *     expression. This is a longer text which describes the expression,
 *     e.g. when hovered over it in a UI.
 * @property {string} [Expr.location] An optional string indicating the location
 *     of the expression for error reporting, e.g. a file name and a position
 *     in the file.
 */
interface Expr {
  expression?: string;
  title?: string;
  description?: string;
  location?: string;
}

/**
 * @callback GetIamPolicyCallback
 * @param {?Error} err Request error, if any.
 * @param {object} policy The policy.
 */
export interface GetIamPolicyCallback {
  (err?: Error | null, policy?: Policy): void;
}

/**
 * @typedef {array} GetIamPolicyResponse
 * @property {object} 0 The policy.
 */
export type GetIamPolicyResponse = [Policy];

export interface GetIamPolicyOptions {
  gaxOptions?: CallOptions;
  requestedPolicyVersion?: 0 | 1 | 3;
}

export type SetIamPolicyCallback = GetIamPolicyCallback;
export type SetIamPolicyResponse = GetIamPolicyResponse;

/**
 * @callback TestIamPermissionsCallback
 * @param {?Error} err Request error, if any.
 * @param {string[]} permissions A subset of permissions that the caller is
 *     allowed.
 */
export interface TestIamPermissionsCallback {
  (err?: Error | null, permissions?: string[]): void;
}

/**
 * @typedef {array} TestIamPermissionsResponse
 * @property {string[]} 0 A subset of permissions that the caller is allowed.
 */
export type TestIamPermissionsResponse = [string[]];

export interface CreateTableOptions {
  families?: {} | string[];
  gaxOptions?: CallOptions;
  splits?: string[];
}
export type CreateTableCallback = (
  err: ServiceError | null,
  table?: Table,
  apiResponse?: google.bigtable.admin.v2.Table,
) => void;
export type CreateTableResponse = [Table, google.bigtable.admin.v2.Table];

export type TableExistsCallback = (
  err: ServiceError | null,
  exists?: boolean,
) => void;
export type TableExistsResponse = [boolean];

export interface GetTablesOptions {
  gaxOptions?: CallOptions;
  /**
   * View over the table's fields. Possible options are 'name', 'schema' or
   * 'full'. Default: 'name'.
   */
  view?: 'name' | 'schema' | 'full';
  pageSize?: number;
  pageToken?: string;
}

export interface GetMetadataOptions {
  /**
   * Request configuration options, outlined here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   */
  gaxOptions?: CallOptions;

  /**
   * The view to be applied to the table fields.
   */
  view?: string;
}

export interface GetTableOptions {
  /**
   * Automatically create the instance if it does not already exist.
   */
  autoCreate?: boolean;

  /**
   * Request configuration options, outlined here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   */
  gaxOptions?: CallOptions;
}

export interface MutateOptions {
  /**
   * Request configuration options, outlined here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   */
  gaxOptions?: CallOptions;
  /**
   * If set to `true` will treat entriesmas a raw Mutation object. See {@link Mutation#parse}.
   */
  rawMutation?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Entry = any;
/*
The Entry type is expected to be in the following format:
{
  key?: Uint8Array|string,
  data?: Data, // The Data type is described in the Mutation class.
  method?: typeof mutation.methods
}
*/

export type DeleteTableCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type DeleteTableResponse = [google.protobuf.Empty];
export type CheckConsistencyCallback = (
  err: ServiceError | null,
  consistent?: boolean,
) => void;
export type CheckConsistencyResponse = [boolean];
export type GenerateConsistencyTokenCallback = (
  err: ServiceError | null,
  token?: string,
) => void;
export type GenerateConsistencyTokenResponse = [string];
export type WaitForReplicationCallback = (
  err: ServiceError | null,
  wait?: boolean,
) => void;
export type WaitForReplicationResponse = [boolean];
export type TruncateCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type TruncateResponse = [google.protobuf.Empty];
export type SampleRowKeysCallback = (
  err: ServiceError | null,
  keys?: string[],
) => void;
export type SampleRowsKeysResponse = [{key: Uint8Array; offset: string}[]];
export type DeleteRowsCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type DeleteRowsResponse = [google.protobuf.Empty];
export type GetMetadataCallback = (
  err: ServiceError | null,
  apiResponse: google.bigtable.admin.v2.ITable,
) => void;
export type GetMetadataResponse = [google.bigtable.admin.v2.Table];
export type GetTableCallback = (
  err: ServiceError | null,
  table?: Table,
  apiResponse?: google.bigtable.admin.v2.ITable,
) => void;
export type GetTableResponse = [Table, google.bigtable.admin.v2.Table];
export type GetTablesCallback = (
  err: ServiceError | null,
  tables?: Table[],
  apiResponse?: google.bigtable.admin.v2.ITable[],
) => void;
export type GetTablesResponse = [Table[], google.bigtable.admin.v2.Table[]];
export type GetFamiliesCallback = (
  err: ServiceError | null,
  families?: Family[],
  apiResponse?: IColumnFamily,
) => void;
export type GetFamiliesResponse = [Family[], IColumnFamily];
export type GetReplicationStatesCallback = (
  err: ServiceError | null,
  clusterStates?: Map<string, google.bigtable.admin.v2.Table.IClusterState>,
  apiResponse?: {},
) => void;
export type GetReplicationStatesResponse = [
  Map<string, google.bigtable.admin.v2.Table.IClusterState>,
  google.bigtable.admin.v2.ITable,
];

export interface CreateBackupConfig extends ModifiableBackupFields {
  gaxOptions?: CallOptions;
}

/**
 * Create a Table object to interact with a Cloud Bigtable table.
 *
 * @class
 * @param {Instance} instance Instance Object.
 * @param {string} id Unique identifier of the table.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const table = instance.table('prezzy');
 * ```
 */
export class Table extends TabularApiSurface {
  constructor(instance: Instance, id: string) {
    super(instance, id);
  }

  /**
   * Formats the decodes policy etag value to string.
   *
   * @private
   *
   * @param {object} policy
   */
  static decodePolicyEtag(policy: Policy): Policy {
    policy.etag = policy.etag!.toString('ascii');
    return policy;
  }

  /**
   * Formats the table name to include the Bigtable cluster.
   *
   * @private
   *
   * @param {string} instanceName The formatted instance name.
   * @param {string} name The table name.
   *
   * @example
   * ```
   * Table.formatName_(
   *   'projects/my-project/zones/my-zone/instances/my-instance',
   *   'my-table'
   * );
   * //
   * 'projects/my-project/zones/my-zone/instances/my-instance/tables/my-table'
   * ```
   */
  static formatName_(instanceName: string, id: string) {
    if (id.includes('/')) {
      return id;
    }
    return `${instanceName}/tables/${id}`;
  }

  /**
   * Creates a range based off of a key prefix.
   *
   * @private
   *
   * @param {string} start The key prefix/starting bound.
   * @returns {object} range
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   * const table = instance.table('prezzy');
   * table.createPrefixRange('start');
   * // => {
   * //   start: 'start',
   * //   end: {
   * //     value: 'staru',
   * //     inclusive: false
   * //   }
   * // }
   * ```
   */
  static createPrefixRange(start: string): PrefixRange {
    return TableUtils.createPrefixRange(start);
  }

  create(options?: CreateTableOptions): Promise<CreateTableResponse>;
  create(options: CreateTableOptions, callback: CreateTableCallback): void;
  create(callback: CreateTableCallback): void;
  /**
   * Create a table.
   *
   * @param {object} [options] See {@link Instance#createTable}.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Table} callback.table The newly created table.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_create_table
   */
  create(
    optionsOrCallback?: CreateTableOptions | CreateTableCallback,
    cb?: CreateTableCallback,
  ): void | Promise<CreateTableResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    this.instance.createTable(this.id, options, callback);
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
  createBackup(
    id: string,
    config: CreateBackupConfig,
    callback: CreateBackupCallback,
  ): void;
  /**
   * Backup a table with cluster auto selection.
   *
   * Backups of tables originate from a specific cluster. This is a helper
   * around `Cluster.createBackup` that automatically selects the first ready
   * cluster from which a backup can be performed.
   *
   * NOTE: This will make two API requests to first determine the most
   * appropriate cluster, then create the backup. This could lead to a race
   * condition if other requests are simultaneously sent or if the cluster
   * availability state changes between each call.
   *
   * @param {string} id A unique ID for the backup.
   * @param {CreateBackupConfig} config Metadata to set on the Backup.
   * @param {BackupTimestamp} config.expireTime When the backup will be
   *   automatically deleted.
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
   */
  createBackup(
    id: string,
    config: CreateBackupConfig,
    callback?: CreateBackupCallback,
  ): void | Promise<CreateBackupResponse> {
    if (!id) {
      throw new TypeError('An id is required to create a backup.');
    }

    if (!config) {
      throw new TypeError('A configuration object is required.');
    }

    this.getReplicationStates(config.gaxOptions!, (err, stateMap) => {
      if (err) {
        callback!(err);
        return;
      }

      const [clusterId] =
        [...stateMap!.entries()].find(([, clusterState]) => {
          return (
            clusterState.replicationState === 'READY' ||
            clusterState.replicationState === 'READY_OPTIMIZING'
          );
        }) || [];

      if (!clusterId) {
        callback!(new Error('No ready clusters eligible for backup.'));
        return;
      }

      this.instance.cluster(clusterId).createBackup(
        id,
        {
          table: this.name,
          ...config,
        },
        callback!,
      );
    });
  }

  createFamily(
    id: string,
    options?: CreateFamilyOptions,
  ): Promise<CreateFamilyResponse>;
  createFamily(
    id: string,
    options: CreateFamilyOptions,
    callback: CreateFamilyCallback,
  ): void;
  createFamily(id: string, callback: CreateFamilyCallback): void;
  /**
   * Create a column family.
   *
   * Optionally you can send garbage collection rules and when creating a
   * family. Garbage collection executes opportunistically in the background, so
   * it's possible for reads to return a cell even if it matches the active
   * expression for its family.
   *
   * @see [Garbage Collection Proto Docs]{@link https://github.com/googleapis/googleapis/blob/3b236df084cf9222c529a2890f90e3a4ff0f2dfd/google/bigtable/admin/v2/table.proto#L184}
   *
   * @throws {error} If a name is not provided.
   *
   * @param {string} id The unique identifier of column family.
   * @param {object} [options] Configuration object.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {object} [options.rule] Garbage collection rule
   * @param {object} [options.rule.age] Delete cells in a column older than the
   *     given age. Values must be at least 1 millisecond.
   * @param {number} [options.rule.versions] Maximum number of versions to delete
   *     cells in a column, except for the most recent.
   * @param {boolean} [options.rule.intersect] Cells to delete should match all
   *     rules.
   * @param {boolean} [options.rule.union] Cells to delete should match any of the
   *     rules.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Family} callback.family The newly created Family.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_create_family
   */
  createFamily(
    id: string,
    optionsOrCallback?: CreateFamilyOptions | CreateFamilyCallback,
    cb?: CreateFamilyCallback,
  ): void | Promise<CreateFamilyResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};

    if (!id) {
      throw new Error('An id is required to create a family.');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mod: any = {
      id,
      create: {},
    };

    if (options.rule) {
      mod.create.gcRule = Family.formatRule_(options.rule);
    }

    const reqOpts = {
      name: this.name,
      modifications: [mod],
    };

    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'modifyColumnFamilies',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback(err, null, resp);
          return;
        }
        const family = this.family(id);
        family.metadata = resp;
        callback(null, family, resp);
      },
    );
  }

  delete(gaxOptions?: CallOptions): Promise<DeleteTableResponse>;
  delete(gaxOptions: CallOptions, callback: DeleteTableCallback): void;
  delete(callback: DeleteTableCallback): void;
  /**
   * Delete the table.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_del_table
   */
  delete(
    optionsOrCallback?: CallOptions | DeleteTableCallback,
    cb?: DeleteTableCallback,
  ): void | Promise<DeleteTableResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'deleteTable',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  deleteRows(
    prefix: string,
    gaxOptions?: CallOptions,
  ): Promise<DeleteRowsResponse>;
  deleteRows(
    prefix: string,
    gaxOptions: CallOptions,
    callback: DeleteRowsCallback,
  ): void;
  deleteRows(prefix: string, callback: DeleteRowsCallback): void;
  /**
   * Delete all rows in the table, optionally corresponding to a particular
   * prefix.
   *
   * @throws {error} If a prefix is not provided.
   *
   * @param {string} prefix Row key prefix.
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_del_rows
   */
  deleteRows(
    prefix: string,
    optionsOrCallback?: CallOptions | DeleteRowsCallback,
    cb?: DeleteRowsCallback,
  ): void | Promise<DeleteRowsResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    if (!prefix || is.fn(prefix)) {
      throw new Error('A prefix is required for deleteRows.');
    }
    const reqOpts = {
      name: this.name,
      rowKeyPrefix: Mutation.convertToBytes(prefix),
    };
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'dropRowRange',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  exists(gaxOptions?: CallOptions): Promise<TableExistsResponse>;
  exists(gaxOptions: CallOptions, callback: TableExistsCallback): void;
  exists(callback: TableExistsCallback): void;
  /**
   * Check if a table exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the table exists or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_exists_table
   */
  exists(
    optionsOrCallback?: CallOptions | TableExistsCallback,
    cb?: TableExistsCallback,
  ): void | Promise<TableExistsResponse> {
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const reqOpts = {
      view: 'name',
      gaxOptions,
    };
    this.getMetadata(reqOpts, err => {
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

  /**
   * Get a reference to a Table Family.
   *
   * @throws {error} If a name is not provided.
   *
   * @param {string} id The family unique identifier.
   * @returns {Family}
   *
   * @example
   * ```
   * const family = table.family('my-family');
   * ```
   */
  family(id: string): Family {
    if (!id) {
      throw new Error('A family id must be provided.');
    }
    return new Family(this, id);
  }

  get(options?: GetTableOptions): Promise<GetTableResponse>;
  get(options: GetTableOptions, callback: GetTableCallback): void;
  get(callback: GetTableCallback): void;
  /**
   * Get a table if it exists.
   *
   * You may optionally use this to "get or create" an object by providing an
   * object with `autoCreate` set to `true`. Any extra configuration that is
   * normally required for the `create` method must be contained within this
   * object as well.
   *
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.autoCreate=false] Automatically create the
   *     instance if it does not already exist.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Table} callback.table The Table object.
   * @param {object} callback.apiResponse The resource as it exists in the API.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_get_table
   */
  get(
    optionsOrCallback?: GetTableOptions | GetTableCallback,
    cb?: GetTableCallback,
  ): void | Promise<GetTableResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const autoCreate = !!options.autoCreate;
    const gaxOptions = options.gaxOptions;

    this.getMetadata({gaxOptions}, (err, metadata) => {
      if (err) {
        if (err.code === 5 && autoCreate) {
          this.create({gaxOptions}, callback);
          return;
        }

        callback(err);
        return;
      }

      callback(null, this, metadata);
    });
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
   * region_tag:bigtable_api_get_table_Iam_policy
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
    } as google.iam.v1.GetIamPolicyRequest;

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
        client: 'BigtableTableAdminClient',
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

  getFamilies(gaxOptions?: CallOptions): Promise<GetFamiliesResponse>;
  getFamilies(gaxOptions: CallOptions, callback: GetFamiliesCallback): void;
  getFamilies(callback: GetFamiliesCallback): void;
  /**
   * Get Family objects for all the column families in your table.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Family[]} callback.families The list of families.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_get_families
   */
  getFamilies(
    optionsOrCallback?: CallOptions | GetFamiliesCallback,
    cb?: GetFamiliesCallback,
  ): void | Promise<GetFamiliesResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    this.getMetadata({gaxOptions}, (err, metadata) => {
      if (err) {
        callback(err);
        return;
      }
      const families = Object.keys(metadata.columnFamilies!).map(familyId => {
        const family = this.family(familyId);
        family.metadata = metadata.columnFamilies![familyId];
        return family;
      });
      callback(null, families, metadata.columnFamilies!);
    });
  }

  getReplicationStates(
    gaxOptions?: CallOptions,
  ): Promise<GetReplicationStatesResponse>;
  getReplicationStates(
    gaxOptions: CallOptions,
    callback: GetReplicationStatesCallback,
  ): void;
  getReplicationStates(callback: GetReplicationStatesCallback): void;
  /**
   * Get replication states of the clusters for this table.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Family[]} callback.clusterStates The map of clusterId and its replication state.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * const {Bigtable} = require('@google-cloud/bigtable');
   * const bigtable = new Bigtable();
   * const instance = bigtable.instance('my-instance');
   * const table = instance.table('prezzy');
   *
   * table.getReplicationStates(function(err, clusterStates, apiResponse) {
   *   // `clusterStates` is an map of clusterId and its replication state.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.getReplicationStates().then(function(data) {
   *   const clusterStates = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  getReplicationStates(
    optionsOrCallback?: CallOptions | GetReplicationStatesCallback,
    cb?: GetReplicationStatesCallback,
  ): void | Promise<GetReplicationStatesResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const reqOpts = {
      view: 'replication',
      gaxOptions,
    };
    this.getMetadata(reqOpts, (err, metadata) => {
      if (err) {
        callback(err);
        return;
      }
      const clusterStates = new Map<
        string,
        google.bigtable.admin.v2.Table.IClusterState
      >();
      Object.keys(metadata.clusterStates!).map(clusterId =>
        clusterStates.set(clusterId, metadata.clusterStates![clusterId]),
      );
      callback(null, clusterStates, metadata);
    });
  }

  getMetadata(options?: GetMetadataOptions): Promise<GetMetadataResponse>;
  getMetadata(options: GetMetadataOptions, callback: GetMetadataCallback): void;
  getMetadata(callback: GetMetadataCallback): void;
  /**
   * Get the table's metadata.
   *
   * @param {object} [options] Table request options.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {string} [options.view] The view to be applied to the table fields.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The table's metadata.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/table.js</caption>
   * region_tag:bigtable_api_get_table_meta
   */
  getMetadata(
    optionsOrCallback?: GetMetadataOptions | GetMetadataCallback,
    cb?: GetMetadataCallback,
  ): void | Promise<GetMetadataResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const reqOpts = {
      name: this.name,
      view: Table.VIEWS[options.view || 'unspecified'],
    };
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'getTable',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      (...args) => {
        if (args[1]) {
          this.metadata = args[1];
        }
        callback(...args);
      },
    );
  }

  setIamPolicy(
    policy: Policy,
    gaxOptions?: CallOptions,
  ): Promise<SetIamPolicyResponse>;
  setIamPolicy(policy: Policy, callback: SetIamPolicyCallback): void;
  setIamPolicy(
    policy: Policy,
    gaxOptions: CallOptions,
    callback: SetIamPolicyCallback,
  ): void;
  /**
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Policy} policy The policy.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_set_table_Iam_policy
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
        client: 'BigtableTableAdminClient',
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
   * region_tag:bigtable_api_test_table_Iam_permissions
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
        client: 'BigtableTableAdminClient',
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

  truncate(gaxOptions?: CallOptions): Promise<TruncateResponse>;
  truncate(gaxOptions: CallOptions, callback: TruncateCallback): void;
  truncate(callback: TruncateCallback): void;
  /**
   * Truncate the table.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * table.truncate(function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * table.truncate().then(function(data) {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  truncate(
    optionsOrCallback?: CallOptions | TruncateCallback,
    cb?: TruncateCallback,
  ): void | Promise<TruncateResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const reqOpts = {
      name: this.name,
      deleteAllDataFromTable: true,
    };
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'dropRowRange',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  waitForReplication(): Promise<WaitForReplicationResponse>;
  waitForReplication(callback: WaitForReplicationCallback): void;
  /**
   * Generates Consistency-Token and check consistency for generated token
   * In-case consistency check returns false, retrial is done in interval
   * of 5 seconds till 10 minutes, after that it returns false.
   *
   * @param {function(?error, ?boolean)} callback The callback function.
   * @param {?Error} callback.err An error returned while making this request.
   * @param {?Boolean} callback.resp Boolean value.
   */
  waitForReplication(
    callback?: WaitForReplicationCallback,
  ): void | Promise<WaitForReplicationResponse> {
    // handler for generated consistency-token
    const tokenHandler: GenerateConsistencyTokenCallback = (err, token) => {
      if (err) {
        return callback!(err);
      }

      // set timeout for 10 minutes
      const timeoutAfterTenMinutes = setTimeout(
        () => {
          callback!(null, false);
        },
        10 * 60 * 1000,
      );

      // method checks if retrial is required & init retrial with 5 sec
      // delay
      const retryIfNecessary: CheckConsistencyCallback = (err, res) => {
        if (err) {
          clearTimeout(timeoutAfterTenMinutes);
          return callback!(err);
        }

        if (res === true) {
          clearTimeout(timeoutAfterTenMinutes);
          return callback!(null, true);
        }

        setTimeout(launchCheck, 5000);
      };

      // method to launch token consistency check
      const launchCheck = () => {
        this.checkConsistency(token!, retryIfNecessary);
      };

      launchCheck();
    };

    // generate consistency-token
    this.generateConsistencyToken(tokenHandler);
  }

  generateConsistencyToken(): Promise<GenerateConsistencyTokenResponse>;
  generateConsistencyToken(callback: GenerateConsistencyTokenCallback): void;
  /**
   * Generates Consistency-Token
   * @param {function(?error, ?boolean)} callback The callback function.
   * @param {?Error} callback.err An error returned while making this request.
   * @param {?String} callback.token The generated consistency token.
   */
  generateConsistencyToken(
    callback?: GenerateConsistencyTokenCallback,
  ): void | Promise<GenerateConsistencyTokenResponse> {
    const reqOpts = {
      name: this.name,
    };
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'generateConsistencyToken',
        reqOpts,
      },
      (err, res) => {
        if (err) {
          callback!(err);
          return;
        }
        callback!(null, res.consistencyToken);
      },
    );
  }

  checkConsistency(token: string): Promise<CheckConsistencyResponse>;
  checkConsistency(token: string, callback: CheckConsistencyCallback): void;
  /**
   * Checks consistency for given ConsistencyToken
   * @param {string} token consistency token
   * @param {function(?error, ?boolean)} callback The callback function.
   * @param {?Error} callback.err An error returned while making this request.
   * @param {?Boolean} callback.consistent Boolean value.
   */
  checkConsistency(
    token: string,
    callback?: CheckConsistencyCallback,
  ): void | Promise<CheckConsistencyResponse> {
    const reqOpts = {
      name: this.name,
      consistencyToken: token,
    };
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'checkConsistency',
        reqOpts,
      },
      (err, res) => {
        if (err) {
          callback!(err);
          return;
        }
        callback!(null, res.consistent);
      },
    );
  }
  /**
   * The view to be applied to the returned table's fields.
   * Defaults to schema if unspecified.
   *
   * @private
   */
  static VIEWS = {
    unspecified: 0,
    name: 1,
    schema: 2,
    replication: 3,
    full: 4,
  } as {[index: string]: number};
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Table, {
  exclude: ['family', 'row'],
});

export interface GoogleInnerError {
  reason?: string;
  message?: string;
}
