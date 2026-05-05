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
import {CallOptions} from 'google-gax';
import {ServiceError} from 'google-gax';

import {Bigtable} from './';
import {Table} from './table';
import {google} from '../protos/protos';

export type IColumnFamily = google.bigtable.admin.v2.IColumnFamily;
export type IGcRule = google.bigtable.admin.v2.IGcRule;
export type IModification =
  google.bigtable.admin.v2.ModifyColumnFamiliesRequest.IModification;
export type ITable = google.bigtable.admin.v2.ITable;

export interface RequestCallback<R> {
  (err: null | ServiceError, response?: null | R): void;
}

export interface InstanceCallback<I, R> {
  (err: null | ServiceError, instance?: null | I, response?: null | R): void;
}

export interface GcRule {
  age?: google.protobuf.IDuration | number;
  versions?: number;
  rule?: GcRule;
  union?: boolean;
}

export interface CreateFamilyOptions {
  rule?: GcRule;
  gaxOptions?: CallOptions;
}

export type CreateFamilyResponse = [Family, ITable];
export type CreateFamilyCallback = InstanceCallback<Family, ITable>;

export type DeleteFamilyResponse = [ITable];
export type DeleteFamilyCallback = RequestCallback<ITable>;

export type FamilyExistsResponse = [boolean];
export type FamilyExistsCallback = RequestCallback<boolean>;

export interface GetFamilyOptions {
  autoCreate?: boolean;
  gaxOptions?: CallOptions;
  rule?: GcRule;
}

export type GetFamilyResponse = [Family, IColumnFamily | ITable];
export type GetFamilyCallback = InstanceCallback<
  Family,
  IColumnFamily | ITable
>;

export type GetFamilyMetadataResponse = [IColumnFamily];
export type GetFamilyMetadataCallback = RequestCallback<IColumnFamily>;

export interface SetFamilyMetadataOptions {
  rule?: GcRule;
}

export type SetFamilyMetadataResponse = [IColumnFamily, ITable];
export type SetFamilyMetadataCallback = InstanceCallback<IColumnFamily, ITable>;

/**
 * @private
 */
export class FamilyError extends Error {
  code: number;
  constructor(name: string) {
    super();
    this.name = 'FamilyError';
    this.message = `Column family not found: ${name}.`;
    this.code = 404;
  }
}

/**
 * Create a Family object to interact with your table column families.
 *
 * @class
 * @param {Table} table
 * @param {string} id
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const table = instance.table('prezzy');
 * const family = table.family('follows');
 * ```
 */
export class Family {
  bigtable: Bigtable;
  table: Table;
  name: string;
  id: string;
  metadata?: IColumnFamily;
  constructor(table: Table, id: string) {
    this.bigtable = table.bigtable;
    this.table = table;

    let name: string;
    if (id.includes('/')) {
      if (id.startsWith(`${table.name}/columnFamilies/`)) {
        name = id;
      } else {
        throw new Error(`Family id '${id}' is not formatted correctly.
Please use the format 'follows' or '${table.name}/columnFamilies/my-family'.`);
      }
    } else {
      name = `${table.name}/columnFamilies/${id}`;
    }

    this.name = name;
    this.id = name.split('/').pop()!;
  }

  /**
   * Formats Garbage Collection rule into proto format.
   *
   * @private
   *
   * @param {object} ruleObj The rule object.
   * @returns {object}
   *
   * @example
   * ```
   * Family.formatRule({
   *   age: {
   *     seconds: 10000,
   *     nanos: 10000
   *   },
   *   versions: 2,
   *   union: true
   * });
   * // {
   * //   union: {
   * //     rules: [
   * //       {
   * //         maxAge: {
   * //           seconds: 10000,
   * //           nanos: 10000
   * //         }
   * //       }, {
   * //         maxNumVersions: 2
   * //       }
   * //     ]
   * //   }
   * // }
   * ```
   */
  static formatRule_(ruleObj: GcRule): IGcRule {
    const rules: IGcRule[] = [];

    if (ruleObj.age) {
      rules.push({
        maxAge: ruleObj.age as google.protobuf.IDuration,
      });
    }

    if (ruleObj.versions) {
      rules.push({
        maxNumVersions: ruleObj.versions,
      });
    }

    if (ruleObj.rule) {
      rules.push(Family.formatRule_(ruleObj.rule));
    }

    if (rules.length === 1) {
      if (ruleObj.union) {
        throw new Error(
          'A union must have more than one garbage collection rule.',
        );
      }
      return rules[0];
    }

    if (rules.length === 0) {
      throw new Error('No garbage collection rules were specified.');
    }

    const rule = {} as IGcRule;
    const ruleType = ruleObj.union ? 'union' : 'intersection';

    rule[ruleType] = {
      rules,
    };

    return rule;
  }

  create(options?: CreateFamilyOptions): Promise<CreateFamilyResponse>;
  create(options: CreateFamilyOptions, callback: CreateFamilyCallback): void;
  create(callback: CreateFamilyCallback): void;
  /**
   * Create a column family.
   *
   * @param {object} [options] See {@link Table#createFamily}.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {Family} callback.family The metadata.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_create_family
   */
  create(
    options?: CreateFamilyOptions | CreateFamilyCallback,
    callback?: CreateFamilyCallback,
  ): void | Promise<CreateFamilyResponse> {
    callback = typeof options === 'function' ? options : callback!;
    options = typeof options === 'object' ? options : {};

    this.table.createFamily(this.id, options, callback);
  }

  delete(gaxOptions?: CallOptions): Promise<DeleteFamilyResponse>;
  delete(gaxOptions: CallOptions, callback: DeleteFamilyCallback): void;
  delete(callback: DeleteFamilyCallback): void;
  /**
   * Delete the column family.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_del_family
   */
  delete(
    gaxOptions?: CallOptions | DeleteFamilyCallback,
    callback?: DeleteFamilyCallback,
  ): void | Promise<DeleteFamilyResponse> {
    callback = typeof gaxOptions === 'function' ? gaxOptions : callback!;
    gaxOptions = typeof gaxOptions === 'object' ? gaxOptions : {};

    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'modifyColumnFamilies',
        reqOpts: {
          name: this.table.name,
          modifications: [
            {
              id: this.id,
              drop: true,
            },
          ],
        },
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }

  exists(gaxOptions?: CallOptions): Promise<FamilyExistsResponse>;
  exists(gaxOptions: CallOptions, callback: FamilyExistsCallback): void;
  exists(callback: FamilyExistsCallback): void;
  /**
   * Check if the column family exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the family exists or not.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_exists_family
   */
  exists(
    opts?: CallOptions | FamilyExistsCallback,
    cb?: FamilyExistsCallback,
  ): void | Promise<FamilyExistsResponse> {
    const callback = typeof opts === 'function' ? opts : cb!;
    const gaxOptions = typeof opts === 'object' ? opts : {};

    this.getMetadata(gaxOptions, err => {
      if (err) {
        if (err instanceof FamilyError) {
          callback(null, false);
          return;
        }

        callback(err);
        return;
      }

      callback(null, true);
    });
  }

  get(options?: GetFamilyOptions): Promise<GetFamilyResponse>;
  get(options: GetFamilyOptions, callback: GetFamilyCallback): void;
  get(callback: GetFamilyCallback): void;
  /**
   * Get a column family if it exists.
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
   * @param {Family} callback.family The Family object.
   * @param {object} callback.apiResponse The resource as it exists in the API.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_get_family
   */
  get(
    opts?: GetFamilyOptions | GetFamilyCallback,
    cb?: GetFamilyCallback,
  ): void | Promise<GetFamilyResponse> {
    const callback = typeof opts === 'function' ? opts : cb!;
    const options = typeof opts === 'object' ? opts : {};

    const autoCreate = !!options.autoCreate;
    const gaxOptions = options.gaxOptions!;

    this.getMetadata(gaxOptions, (err, metadata) => {
      if (err) {
        if (err instanceof FamilyError && autoCreate) {
          this.create({gaxOptions, rule: options.rule}, callback);
          return;
        }

        callback(err as ServiceError);
        return;
      }

      callback(null, this, metadata);
    });
  }

  getMetadata(gaxOptions?: CallOptions): Promise<GetFamilyMetadataResponse>;
  getMetadata(
    gaxOptions: CallOptions,
    callback: GetFamilyMetadataCallback,
  ): void;
  getMetadata(callback: GetFamilyMetadataCallback): void;
  /**
   * Get the column family's metadata.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The metadata.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_get_family_meta
   */
  getMetadata(
    opts?: CallOptions | GetFamilyMetadataCallback,
    cb?: GetFamilyMetadataCallback,
  ): void | Promise<GetFamilyMetadataResponse> {
    const callback = typeof opts === 'function' ? opts : cb!;
    const gaxOptions = typeof opts === 'object' ? opts : {};

    this.table.getFamilies(gaxOptions, (err, families) => {
      if (err) {
        callback(err);
        return;
      }

      for (let i = 0, l = families!.length; i < l; i++) {
        if (families![i].name === this.name) {
          this.metadata = families![i].metadata;
          callback(null, this.metadata);
          return;
        }
      }

      const error = new FamilyError(this.id);
      callback(error as ServiceError);
    });
  }

  setMetadata(
    metadata: SetFamilyMetadataOptions,
    gaxOptions?: CallOptions,
  ): Promise<SetFamilyMetadataResponse>;
  setMetadata(
    metadata: SetFamilyMetadataOptions,
    gaxOptions: CallOptions,
    callback: SetFamilyMetadataCallback,
  ): void;
  setMetadata(
    metadata: SetFamilyMetadataOptions,
    callback: SetFamilyMetadataCallback,
  ): void;
  /**
   * Set the column family's metadata.
   *
   * See {@link Table#createFamily} for a detailed explanation of the
   * arguments.
   *
   * @see [Garbage Collection Proto Docs]{@link https://github.com/googleapis/googleapis/blob/3592a7339da5a31a3565870989beb86e9235476e/google/bigtable/admin/table/v1/bigtable_table_data.proto#L59}
   *
   * @param {object} metadata Metadata object.
   * @param {object} [metadata.rule] Garbage collection rule.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example <caption>include:samples/api-reference-doc-snippets/family.js</caption>
   * region_tag:bigtable_api_set_family_meta
   */
  setMetadata(
    metadata: SetFamilyMetadataOptions,
    opts?: CallOptions | SetFamilyMetadataCallback,
    cb?: SetFamilyMetadataCallback,
  ): void | Promise<SetFamilyMetadataResponse> {
    const callback = typeof opts === 'function' ? opts : cb!;
    const gaxOptions = typeof opts === 'object' ? opts : {};

    const mod: IModification = {
      id: this.id,
      update: {},
    };

    if (metadata.rule) {
      mod.update!.gcRule = Family.formatRule_(metadata.rule);
    }

    const reqOpts = {
      name: this.table.name,
      modifications: [mod],
    };

    this.bigtable.request(
      {
        client: 'BigtableTableAdminClient',
        method: 'modifyColumnFamilies',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (err) {
          callback(err, null, resp);
          return;
        }

        this.metadata = resp.columnFamilies[this.id];
        callback(null, this.metadata, resp);
      },
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Family);
