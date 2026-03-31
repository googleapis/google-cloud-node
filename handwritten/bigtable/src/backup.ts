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

import {PreciseDate} from '@google-cloud/precise-date';
import {promisifyAll} from '@google-cloud/promisify';
import snakeCase = require('lodash.snakecase');
import {google} from '../protos/protos';
import {
  Bigtable,
  Cluster,
  GetIamPolicyCallback,
  GetIamPolicyOptions,
  GetIamPolicyResponse,
  Policy,
  SetIamPolicyCallback,
  SetIamPolicyResponse,
  TestIamPermissionsCallback,
  TestIamPermissionsResponse,
} from './';
import {Table} from '../src/table';
import {
  CreateBackupConfig,
  CreateBackupCallback,
  CreateBackupResponse,
  IOperation,
} from './cluster';
import {CallOptions, LROperation, Operation, ServiceError} from 'google-gax';
import {Instance} from './instance';
import {ClusterUtils} from './utils/cluster';

export type CopyBackupResponse = GenericBackupPromise<Operation>;
export type CopyBackupCallback = GenericBackupCallback<Operation>;
export interface CopyBackupConfig extends ModifiableBackupFields {
  cluster: Cluster;
  gaxOptions?: CallOptions;
  id: string;
}

type IEmpty = google.protobuf.IEmpty;
export type IBackup = google.bigtable.admin.v2.IBackup;

export type BackupTimestamp = google.protobuf.ITimestamp | PreciseDate | Date;
export interface ModifiableBackupFields {
  /**
   * The ITimestamp (Date or PreciseDate will be converted) representing
   * when the backup will automatically be deleted. This must be at a
   * minimum 6 hours from the time of the backup request and a maximum of 30
   * days.
   */
  expireTime?: BackupTimestamp;
}

export interface GenericBackupCallback<T> {
  (
    err?: ServiceError | null,
    backup?: Backup | null,
    apiResponse?: T | null,
  ): void;
}
export type GenericBackupPromise<T> = [Backup, T];

export type DeleteBackupCallback = (
  err: ServiceError | null,
  apiResponse?: IEmpty,
) => void;
export type DeleteBackupResponse = [IEmpty];

export type BackupExistsCallback = (
  err: ServiceError | null,
  exists?: boolean,
) => void;
export type BackupExistsResponse = [boolean];

export type GetBackupCallback = GenericBackupCallback<IBackup>;
export type GetBackupResponse = [Backup, IBackup];

export type BackupGetMetadataCallback = (
  err?: ServiceError | null,
  metadata?: IBackup | null,
) => void;
export type BackupGetMetadataResponse = [IBackup];

export type BackupSetMetadataCallback = (
  err: ServiceError | null,
  metadata: IBackup,
  resp: IBackup,
) => void;
export type BackupSetMetadataResponse = [IBackup, IBackup];

export interface RestoreTableConfig {
  tableId: string;
  instance?: Instance | string;
  gaxOptions?: CallOptions;
}

export type RestoreTableCallback = (
  err: ServiceError | null,
  table?: Table,
  operation?: Operation,
  apiResponse?: IOperation,
) => void;
export type RestoreTableResponse = [Table, Operation, IOperation];

export interface GetBackupsOptions {
  /**
   * A filter expression that filters backups listed in the response. The
   * expression must specify the field name, a comparison operator, and the
   * value that you want to use for filtering. The value must be a string, a
   * number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =,
   * or :. Colon ‘:’ represents a HAS operator which is roughly synonymous with
   * equality. Filter rules are case insensitive.
   */
  filter?: string;

  /**
   * An expression for specifying the sort order of the results of the request.
   * The string value should specify one or more fields in
   * {@link google.bigtable.admin.v2.Backup|Backup}. The full syntax is
   * described at https://aip.dev/132#ordering.
   */
  orderBy?: string;

  gaxOptions?: CallOptions;

  pageSize?: number;
  pageToken?: string;
  autoPaginate?: boolean;
}

export type GetBackupsResponse = [
  Backup[],
  GetBackupsOptions,
  google.bigtable.admin.v2.IListBackupsResponse,
];
export type GetBackupsCallback = (
  err: ServiceError | null,
  backups?: Backup[],
  nextQuery?: GetBackupsOptions,
  apiResponse?: google.bigtable.admin.v2.IListBackupsResponse,
) => void;

/**
 * Interact with backups like get detailed information from BigTable, create
 * a backup, or restore a backup to a table.
 *
 * @class
 * @param {Cluster} cluster The parent instance of this backup.
 * @param {string} name Name of the backup.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const cluster = instance.cluster('my-cluster');
 * const backup = cluster.backup('my-backup');
 * ```
 */
export class Backup {
  bigtable: Bigtable;
  cluster: Cluster;

  /**
   * A unique backup string, e.g. "my-backup".
   */
  id: string;

  /**
   * The full path of the backup which is in the form of:
   *  `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup}`.
   */
  name: string;
  metadata?: IBackup;

  /**
   * @param {Cluster} cluster
   * @param {string} id The backup name or id.
   */
  constructor(cluster: Cluster, id: string) {
    this.bigtable = cluster.bigtable;
    this.cluster = cluster;

    if (id.includes('/')) {
      if (id.startsWith(cluster.name)) {
        this.name = id;
        this.id = id.split('/').pop()!;
      } else {
        throw new Error(`Backup id '${id}' is not formatted correctly.
Please use the format 'my-backup' or '${cluster.name}/backups/my-backup'.`);
      }
    } else {
      this.name = `${this.cluster.name}/backups/${id}`;
      this.id = id;
    }
  }

  /**
   * A Date-compatible PreciseDate representing the time that the backup was
   * finished.
   * @readonly
   * @return {PreciseDate}
   */
  get endDate(): PreciseDate {
    if (!this.metadata || !this.metadata.endTime) {
      throw new TypeError('An endTime is required to convert to Date.');
    }
    return new PreciseDate({
      seconds: this.metadata.endTime.seconds!,
      nanos: this.metadata.endTime.nanos!,
    });
  }

  /**
   * A Date-compatible PreciseDate representing the expiration time of this
   * backup.
   * @readonly
   * @return {PreciseDate}
   */
  get expireDate(): PreciseDate {
    if (!this.metadata || !this.metadata.expireTime) {
      throw new TypeError('An expireTime is required to convert to Date.');
    }
    return new PreciseDate({
      seconds: this.metadata.expireTime.seconds!,
      nanos: this.metadata.expireTime.nanos!,
    });
  }

  /**
   * A Date-compatible PreciseDate representing the time that this backup was
   * started.
   * @readonly
   * @return {PreciseDate}
   */
  get startDate(): PreciseDate {
    if (!this.metadata || !this.metadata.startTime) {
      throw new TypeError('A startTime is required to convert to Date.');
    }
    return new PreciseDate({
      seconds: this.metadata.startTime.seconds!,
      nanos: this.metadata.startTime.nanos!,
    });
  }

  /**
   * When this backup object represents a backup that has already been created,
   * copy will copy this created backup to the location and with the settings
   * specified by the config parameter. After running this function the original
   * backup will exist as well as a second backup matching the parameters given
   * by the config argument.
   *
   * @param {CopyBackupConfig} [config] The config that specifies all of the
   * information about the destination backup which is the new backup that gets
   * created as a result of calling copy.
   * @param {CopyBackupCallback} [callback] The callback function that passes an
   * error or results back to the user.
   */
  copy(config: CopyBackupConfig, callback: CopyBackupCallback): void;
  copy(config: CopyBackupConfig): Promise<CopyBackupResponse>;
  copy(
    config: CopyBackupConfig,
    callback?: CopyBackupCallback,
  ): void | Promise<CopyBackupResponse> {
    const reqOpts = {
      parent: config.cluster.name,
      backupId: config.id,
      sourceBackup: `${this.cluster.name}/backups/${this.id}`,
      expireTime: config?.expireTime,
    };
    ClusterUtils.formatBackupExpiryTime(reqOpts);
    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'copyBackup',
        reqOpts,
        gaxOpts: config.gaxOptions,
      },
      (err, ...args) => {
        if (err) {
          callback!(err, undefined, ...args);
          return;
        }
        // Second argument is a backup for the new backup id
        callback!(null, config.cluster.backup(config.id), ...args);
      },
    );
  }

  create(config: CreateBackupConfig, callback?: CreateBackupCallback): void;
  create(config: CreateBackupConfig): Promise<CreateBackupResponse>;
  /**
   * Starts creating a new Cloud Bigtable Backup.
   *
   * The returned {@link google.longrunning.Operation|long-running operation}
   * can be used to track creation of the backup. Cancelling the returned
   * operation will stop the creation and delete the backup.
   *
   * @param {CreateBackupConfig} config Configuration object.
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
  create(
    config: CreateBackupConfig,
    callback?: CreateBackupCallback,
  ): void | Promise<CreateBackupResponse> {
    this.cluster.createBackup(this.id, config, callback!);
  }

  delete(gaxOptions?: CallOptions): Promise<DeleteBackupResponse>;
  delete(callback: DeleteBackupCallback): void;
  delete(gaxOptions: CallOptions, callback: DeleteBackupCallback): void;
  /**
   * Deletes this pending or completed Cloud Bigtable backup.
   *
   * @param {CallOptions | DeleteBackupCallback} [gaxOptionsOrCallback]
   * @param {DeleteBackupCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<DeleteBackupResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.delete.js</caption>
   * region_tag:bigtable_api_delete_backup
   */
  delete(
    gaxOptionsOrCallback?: CallOptions | DeleteBackupCallback,
    cb?: DeleteBackupCallback,
  ): void | Promise<DeleteBackupResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.bigtable.request<google.protobuf.IEmpty>(
      {
        client: 'BigtableTableAdminClient',
        method: 'deleteBackup',
        reqOpts: {
          name: this.name,
        },
        gaxOpts,
      },
      callback,
    );
  }

  exists(gaxOptions?: CallOptions): Promise<BackupExistsResponse>;
  exists(gaxOptions: CallOptions, callback: BackupExistsCallback): void;
  exists(callback: BackupExistsCallback): void;
  /**
   * Check if a backup exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the backup exists or not.
   */
  exists(
    optionsOrCallback?: CallOptions | BackupExistsCallback,
    cb?: BackupExistsCallback,
  ): void | Promise<BackupExistsResponse> {
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

  get(gaxOptions?: CallOptions): Promise<GetBackupResponse>;
  get(callback: GetBackupCallback): void;
  get(gaxOptions: CallOptions, callback: GetBackupCallback): void;
  /**
   * Get a backup if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {Backup} callback.backup The Backup instance.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.get.js</caption>
   * region_tag:bigtable_api_get_backup
   */
  get(
    gaxOptionsOrCallback?: CallOptions | GetBackupCallback,
    cb?: GetBackupCallback,
  ): void | Promise<GetBackupResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.getMetadata(
      gaxOpts,
      (err?: ServiceError | null, metadata?: IBackup | null) => {
        callback(err, err ? null : this, metadata);
      },
    );
  }

  getIamPolicy(options?: GetIamPolicyOptions): Promise<GetIamPolicyResponse>;
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
   * @param {function} [cb] The callback function.
   * @param {?error} callback.error An error returned while making this request.
   * @param {Policy} policy The policy.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/instance.js</caption>
   * region_tag:bigtable_api_get_table_Iam_policy
   */
  getIamPolicy(
    optionsOrCallback?: GetIamPolicyOptions | GetIamPolicyCallback,
    cb?: GetIamPolicyCallback,
  ): void | Promise<GetIamPolicyResponse> {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    Table.prototype.getIamPolicy.call(this, options, callback);
  }

  getMetadata(gaxOptions?: CallOptions): Promise<BackupGetMetadataResponse>;
  getMetadata(callback: BackupGetMetadataCallback): void;
  getMetadata(
    gaxOptions: CallOptions,
    callback: BackupGetMetadataCallback,
  ): void;
  /**
   * Get a backup if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The metadata.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.get.js</caption>
   * region_tag:bigtable_api_get_backup
   */
  getMetadata(
    gaxOptionsOrCallback?: CallOptions | BackupGetMetadataCallback,
    cb?: BackupGetMetadataCallback,
  ): void | Promise<BackupGetMetadataResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.bigtable.request<IBackup>(
      {
        client: 'BigtableTableAdminClient',
        method: 'getBackup',
        reqOpts: {
          name: this.name,
        },
        gaxOpts,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }
        callback(err, resp);
      },
    );
  }

  restore(
    tableId: string,
    gaxOptions?: CallOptions,
  ): Promise<RestoreTableResponse>;
  restore(
    tableId: string,
    gaxOptions: CallOptions,
    callback: RestoreTableCallback,
  ): void;
  restore(tableId: string, callback: RestoreTableCallback): void;
  /**
   * Create a new table by restoring from this completed backup.
   *
   * The new table must be in the same instance as the instance containing
   * the backup. The returned
   * {@link google.longrunning.Operation|long-running operation} can be used
   * to track the progress of the operation, and to cancel it.
   *
   * @param {string} tableId The id of the table to create and restore to. This
   *   table must not already exist.
   * @param {CallOptions | RestoreTableCallback} [gaxOptionsOrCallback]
   * @param {RestoreTableCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Table} callback.table The newly created Table.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<RestoreTableResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.restore.js</caption>
   * region_tag:bigtable_api_restore_backup
   */
  restore(
    tableId: string,
    gaxOptionsOrCallback?: CallOptions | RestoreTableCallback,
    cb?: RestoreTableCallback,
  ): void | Promise<RestoreTableResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object'
        ? gaxOptionsOrCallback
        : undefined;
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    this.restoreTo(
      {
        tableId,
        instance: this.cluster.instance,
        gaxOptions: gaxOpts,
      },
      callback,
    );
  }

  restoreTo(config: RestoreTableConfig): Promise<RestoreTableResponse>;
  restoreTo(config: RestoreTableConfig, callback: RestoreTableCallback): void;
  /**
   * Create a new table by restoring from this completed backup.
   *
   * The returned
   * {@link google.longrunning.Operation|long-running operation} can be used
   * to track the progress of the operation, and to cancel it.
   *
   * @param {RestoreTableConfig} config Configuration object.
   * @param {string} tableId The id of the table to create and restore to. This
   *     table must not already exist.
   * @param {Instance|string} [instance] Instance in which the new table will
   *     be created and restored to. Instance must be in the same project as the
   *     project containing backup.
   *     If omitted the instance containing the backup will be used instead.
   * @param {CallOptions} [gaxOptions] Request configuration options,
   *     outlined here:
   *     https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html.
   * @param {RestoreTableCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {Table} callback.table The newly created Table.
   * @param {Operation} callback.operation An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<RestoreTableResponse>}
   */
  restoreTo(
    config: RestoreTableConfig,
    callback?: RestoreTableCallback,
  ): void | Promise<RestoreTableResponse> {
    let parent: string;
    if (config.instance) {
      if (config.instance instanceof Instance) {
        parent = config.instance.name;
      } else {
        parent = this.bigtable.instance(config.instance).name;
      }
    } else {
      parent = this.cluster.instance.name;
    }

    this.bigtable.request<
      LROperation<
        google.bigtable.admin.v2.ITable,
        google.bigtable.admin.v2.IRestoreTableMetadata
      >
    >(
      {
        client: 'BigtableTableAdminClient',
        method: 'restoreTable',
        reqOpts: {
          parent,
          tableId: config.tableId,
          backup: this.name,
        },
        gaxOpts: config.gaxOptions,
      },
      (err, ...args) => {
        if (err) {
          callback!(err, undefined, ...args);
          return;
        }
        callback!(err, this.cluster.instance.table(config.tableId), ...args);
      },
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
    cb?: SetIamPolicyCallback,
  ): void | Promise<SetIamPolicyResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    Table.prototype.setIamPolicy.call(this, policy, gaxOptions, callback);
  }

  setMetadata(
    metadata: ModifiableBackupFields,
    gaxOptions?: CallOptions,
  ): Promise<BackupSetMetadataResponse>;
  setMetadata(
    metadata: ModifiableBackupFields,
    callback: BackupSetMetadataCallback,
  ): void;
  setMetadata(
    metadata: ModifiableBackupFields,
    gaxOptions: CallOptions,
    callback: BackupSetMetadataCallback,
  ): void;
  /**
   * Updates this pending or completed Cloud Bigtable Backup.
   *
   * @param {ModifiableBackupFields} metadata - The fields to be updated.
   * @param {CallOptions | BackupSetMetadataCallback} [gaxOptionsOrCallback]
   * @param {BackupSetMetadataCallback} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param
   * @param {object} callback.apiResponse The full API response.
   * @return {void | Promise<BackupSetMetadataResponse>}
   *
   * @example <caption>include:samples/api-reference-doc-snippets/backups.update.js</caption>
   * region_tag:bigtable_api_update_backup
   */
  setMetadata(
    metadata: ModifiableBackupFields,
    gaxOptionsOrCallback?: CallOptions | BackupSetMetadataCallback,
    cb?: BackupSetMetadataCallback,
  ): void | Promise<BackupSetMetadataResponse> {
    const gaxOpts =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;

    const backup = {
      name: this.name,
      ...metadata,
    };

    if (backup.expireTime instanceof Date) {
      backup.expireTime = new PreciseDate(backup.expireTime).toStruct();
    }

    this.bigtable.request<IBackup>(
      {
        client: 'BigtableTableAdminClient',
        method: 'updateBackup',
        reqOpts: {
          backup,
          updateMask: {
            paths: Object.keys(metadata).map(snakeCase),
          },
        },
        gaxOpts,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }

        callback(err, this.metadata!, resp!);
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
    cb?: TestIamPermissionsCallback,
  ): void | Promise<TestIamPermissionsResponse> {
    const gaxOptions =
      typeof gaxOptionsOrCallback === 'object' ? gaxOptionsOrCallback : {};
    const callback =
      typeof gaxOptionsOrCallback === 'function' ? gaxOptionsOrCallback : cb!;
    Table.prototype.testIamPermissions.call(
      this,
      permissions,
      gaxOptions,
      callback,
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Backup, {exclude: ['endDate', 'expireDate', 'startDate']});

/**
 * Reference to the {@link Backup} class.
 * @name module:@google-cloud/bigtable.Backup
 * @see Backup
 */
