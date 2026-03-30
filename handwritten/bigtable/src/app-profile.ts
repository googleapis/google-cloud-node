// Copyright 2018 Google LLC
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
import * as is from 'is';
import snakeCase = require('lodash.snakecase');
import {Cluster} from './cluster';
import {Bigtable} from '.';
import {Instance} from './instance';
import {CallOptions} from 'google-gax';
import {google} from '../protos/protos';
import {ServiceError} from 'google-gax';

export interface AppProfileOptions {
  /**
   * The routing policy for all read/write requests which use this app profile.
   * This can be either the string 'any' or a cluster of an instance. This
   * value is required when creating the app profile and optional when setting
   * the metadata.
   */
  routing?: 'any' | Cluster | Set<Cluster> | Set<string>;
  /**
   * Whether or not CheckAndMutateRow and ReadModifyWriteRow requests are
   * allowed by this app profile. It is unsafe to send these requests to the
   * same table/row/column in multiple clusters. This is only used when the
   * routing value is a cluster.
   */
  allowTransactionalWrites?: boolean;
  /**
   * The long form description of the use case for this AppProfile.
   */
  description?: string;
  /**
   * Request configuration options, outlined here:
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   */
  gaxOptions?: CallOptions;
  /**
   * Whether to ignore safety checks when creating the app profile.
   */
  ignoreWarnings?: boolean;
}

export interface DeleteAppProfileOptions {
  /**
   * Request configuration options, outlined here:
   * https://googleapis.github.io/gax-nodejs/global.html#CallOptions
   */
  gaxOptions?: CallOptions;

  /**
   * Whether to ignore safety checks when deleting the app profile.
   */
  ignoreWarnings?: boolean;
}

export type CreateAppProfileCallback = (
  err: ServiceError | null,
  appProfile?: AppProfile,
  apiResponse?: google.bigtable.admin.v2.IAppProfile,
) => void;
export type CreateAppProfileResponse = [
  AppProfile,
  google.bigtable.admin.v2.IAppProfile,
];
export type DeleteAppProfileCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type DeleteAppProfileResponse = [google.protobuf.Empty];
export type AppProfileExistsCallback = (
  err: ServiceError | null,
  exists?: boolean,
) => void;
export type AppProfileExistsResponse = [boolean];
export type GetAppProfileMetadataCallback = (
  err: ServiceError | null,
  metadata?: google.bigtable.admin.v2.IAppProfile,
  apiResponse?: google.bigtable.admin.v2.IAppProfile,
) => void;
export type GetAppProfileMetadataResponse = [
  google.bigtable.admin.v2.IAppProfile,
  google.bigtable.admin.v2.IAppProfile,
];
export type GetAppProfileCallback = (
  err: ServiceError | null,
  appProfile?: AppProfile,
  apiResponse?: google.bigtable.admin.v2.IAppProfile,
) => void;
export type GetAppProfileResponse = [
  AppProfile,
  google.bigtable.admin.v2.IAppProfile,
];
export type GetAppProfilesCallback = (
  err: ServiceError | null,
  appProfiles?: AppProfile[],
  apiResponse?: google.bigtable.admin.v2.IAppProfile[],
) => void;
export type GetAppProfilesResponse = [
  AppProfile[],
  google.bigtable.admin.v2.IAppProfile[],
];
export type SetAppProfileMetadataCallback = (
  err: ServiceError | null,
  apiResponse?: google.protobuf.Empty,
) => void;
export type SetAppProfileMetadataResponse = [google.protobuf.Empty];

/**
 * Create an app profile object to interact with your app profile.
 *
 * @class
 * @param {Instance} instance The parent instance of this app profile.
 * @param {string} name Name of the app profile.
 *
 * @example
 * ```
 * const {Bigtable} = require('@google-cloud/bigtable');
 * const bigtable = new Bigtable();
 * const instance = bigtable.instance('my-instance');
 * const appProfile = instance.appProfile('my-app-profile');
 * ```
 */
export class AppProfile {
  bigtable: Bigtable;
  instance: Instance;
  name: string;
  id: string;
  metadata?: google.bigtable.admin.v2.IAppProfile;
  constructor(instance: Instance, id: string) {
    this.bigtable = instance.bigtable;
    this.instance = instance;

    let name;

    if (id.includes('/')) {
      if (id.startsWith(`${instance.name}/appProfiles/`)) {
        name = id;
      } else {
        throw new Error(`AppProfile id '${id}' is not formatted correctly.
Please use the format 'my-app-profile' or '${instance.name}/appProfiles/my-app-profile'.`);
      }
    } else {
      name = `${instance.name}/appProfiles/${id}`;
    }

    this.id = name.split('/').pop()!;
    this.name = name;
  }

  /**
   * Formats a app profile options object into proto format.
   *
   * @private
   *
   * @param {object} options The options object.
   * @returns {object}
   *
   * @example
   * ```
   * // Any cluster routing:
   * Family.formatAppProfile_({
   *   routing: 'any',
   *   description: 'My App Profile',
   * });
   * // {
   * //   multiClusterRoutingUseAny: {},
   * //   description: 'My App Profile',
   * // }
   *
   * // Single cluster routing:
   * const cluster = myInstance.cluster('my-cluster');
   * Family.formatAppProfile_({
   *   routing: cluster,
   *   allowTransactionalWrites: true,
   *   description: 'My App Profile',
   * });
   * // {
   * //   singleClusterRouting: {
   * //     clusterId: 'my-cluster',
   * //     allowTransactionalWrites: true,
   * //   },
   * //   description: 'My App Profile',
   * // }
   * ```
   */
  static formatAppProfile_(
    options: AppProfileOptions,
  ): google.bigtable.admin.v2.IAppProfile {
    const appProfile: google.bigtable.admin.v2.IAppProfile = {};

    const errMessage =
      'An app profile routing policy can only contain "any" for multi cluster routing, a `Cluster` for single routing, or a set of clusterIds as strings or `Clusters` for multi cluster routing.';
    if (options.routing) {
      if (options.routing === 'any') {
        appProfile.multiClusterRoutingUseAny = {};
      } else if (options.routing instanceof Set) {
        const routingAsArray = [...options.routing];
        if (isClusterArray(routingAsArray)) {
          // Runs if routing is a set and every element in it is a cluster
          appProfile.multiClusterRoutingUseAny = {
            clusterIds: routingAsArray.map(cluster => cluster.id),
          };
        } else if (isStringArray(routingAsArray)) {
          // Runs if routing is a set and every element in it is a string
          appProfile.multiClusterRoutingUseAny = {
            clusterIds: routingAsArray,
          };
        } else {
          throw new Error(errMessage);
        }
      } else if (options.routing instanceof Cluster) {
        appProfile.singleClusterRouting = {
          clusterId: options.routing.id,
        };
        if (is.boolean(options.allowTransactionalWrites)) {
          appProfile.singleClusterRouting.allowTransactionalWrites =
            options.allowTransactionalWrites;
        }
      } else {
        throw new Error(errMessage);
      }
    }

    if (is.string(options.description)) {
      appProfile.description = options.description;
    }

    return appProfile;
  }

  create(options: AppProfileOptions): Promise<CreateAppProfileResponse>;
  create(options: AppProfileOptions, callback: CreateAppProfileCallback): void;
  create(callback: CreateAppProfileCallback): void;
  /**
   * Create an app profile.
   *
   * @param {object} [options] See {@link Instance#createAppProfile}.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_create_app_profile
   * ```
   */
  create(
    optionsOrCallback?: AppProfileOptions | CreateAppProfileCallback,
    cb?: CreateAppProfileCallback,
  ): void | Promise<CreateAppProfileResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    this.instance.createAppProfile(this.id, options, callback);
  }

  delete(options?: DeleteAppProfileOptions): Promise<DeleteAppProfileResponse>;
  delete(
    options: DeleteAppProfileOptions,
    callback: DeleteAppProfileCallback,
  ): void;
  delete(callback: DeleteAppProfileCallback): void;
  /**
   * Delete the app profile.
   *
   * @param {object} [options] Cluster creation options.
   * @param {object} [options.gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {boolean} [options.ignoreWarnings] Whether to ignore safety checks
   *     when deleting the app profile.
   * @param {function} [callback] The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_delete_app_profile
   * ```
   */
  delete(
    optionsOrCallback?: DeleteAppProfileOptions | DeleteAppProfileCallback,
    cb?: DeleteAppProfileCallback,
  ): void | Promise<DeleteAppProfileResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};

    const reqOpts = {
      name: this.name,
    } as google.bigtable.admin.v2.IDeleteAppProfileRequest;

    if (is.boolean(options.ignoreWarnings)) {
      reqOpts.ignoreWarnings = options.ignoreWarnings;
    }

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'deleteAppProfile',
        reqOpts,
        gaxOpts: options.gaxOptions,
      },
      callback,
    );
  }

  exists(options?: CallOptions): Promise<AppProfileExistsResponse>;
  exists(options: CallOptions, callback: AppProfileExistsCallback): void;
  exists(callback: AppProfileExistsCallback): void;
  /**
   * Check if an app profile exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {boolean} callback.exists Whether the app profile exists or not.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_exists_app_profile
   * ```
   */
  exists(
    optionsOrCallback?: CallOptions | AppProfileExistsCallback,
    cb?: AppProfileExistsCallback,
  ): void | Promise<AppProfileExistsResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
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

  get(options?: CallOptions): Promise<GetAppProfileResponse>;
  get(options: CallOptions, callback: GetAppProfileCallback): void;
  get(callback: GetAppProfileCallback): void;
  /**
   * Get a appProfile if it exists.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_get_app_profile
   * ```
   */
  get(
    optionsOrCallback?: CallOptions | GetAppProfileCallback,
    cb?: GetAppProfileCallback,
  ): void | Promise<GetAppProfileResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    this.getMetadata(gaxOptions, (err, metadata) => {
      if (err) {
        callback(err, undefined, metadata);
      } else {
        callback(null, this, metadata);
      }
    });
  }

  getMetadata(options?: CallOptions): Promise<GetAppProfileMetadataResponse>;
  getMetadata(
    options: CallOptions,
    callback: GetAppProfileMetadataCallback,
  ): void;
  getMetadata(callback: GetAppProfileMetadataCallback): void;
  /**
   * Get the app profile metadata.
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this
   *     request.
   * @param {object} callback.metadata The metadata.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_app_profile_get_meta
   * ```
   */
  getMetadata(
    optionsOrCallback?: CallOptions | GetAppProfileMetadataCallback,
    cb?: GetAppProfileMetadataCallback,
  ): void | Promise<GetAppProfileMetadataResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    this.bigtable.request<google.bigtable.admin.v2.AppProfile>(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'getAppProfile',
        reqOpts: {
          name: this.name,
        },
        gaxOpts: gaxOptions,
      },
      (err, resp) => {
        if (resp) {
          this.metadata = resp;
        }
        callback(err, resp, resp);
      },
    );
  }

  setMetadata(
    metadata: AppProfileOptions,
    options?: CallOptions,
  ): Promise<SetAppProfileMetadataResponse>;
  setMetadata(
    metadata: AppProfileOptions,
    options: CallOptions,
    callback: SetAppProfileMetadataCallback,
  ): void;
  setMetadata(
    metadata: AppProfileOptions,
    callback: SetAppProfileMetadataCallback,
  ): void;
  /**
   * Set the app profile metadata.
   *
   * @param {object} metadata See {@link Instance#createAppProfile} for the
   *     available metadata options.
   * @param {object} [gaxOptions] Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/CallSettings.html.
   * @param {function} callback The callback function.
   * @param {?error} callback.err An error returned while making this request.
   * @param {object} callback.apiResponse The full API response.
   *
   * @example
   * ```
   * <caption>include:samples/api-reference-doc-snippets/app-profile.js</caption>
   * region_tag:bigtable_api_app_profile_set_meta
   * ```
   */
  setMetadata(
    metadata: AppProfileOptions,
    optionsOrCallback?: CallOptions | SetAppProfileMetadataCallback,
    cb?: SetAppProfileMetadataCallback,
  ): void | Promise<SetAppProfileMetadataResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const gaxOptions =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const reqOpts = {
      appProfile: AppProfile.formatAppProfile_(metadata as AppProfileOptions),
      updateMask: {
        paths: [],
      },
    } as google.bigtable.admin.v2.IUpdateAppProfileRequest;
    reqOpts.appProfile!.name = this.name;
    const fieldsForMask = [
      'description',
      'singleClusterRouting',
      'multiClusterRoutingUseAny',
      'allowTransactionalWrites',
    ];
    fieldsForMask.forEach(field => {
      if ((reqOpts.appProfile as {[index: string]: string})![field]) {
        reqOpts.updateMask!.paths!.push(snakeCase(field));
      }
    });

    if (is.boolean(metadata.ignoreWarnings)) {
      reqOpts.ignoreWarnings = metadata.ignoreWarnings;
    }

    this.bigtable.request(
      {
        client: 'BigtableInstanceAdminClient',
        method: 'updateAppProfile',
        reqOpts,
        gaxOpts: gaxOptions,
      },
      callback,
    );
  }
}

function isStringArray(array: any): array is string[] {
  return array.every((cluster: any) => {
    return typeof cluster === 'string';
  });
}

function isClusterArray(array: any): array is Cluster[] {
  return array.every((cluster: any) => {
    return isCluster(cluster);
  });
}

function isCluster(cluster: any): cluster is Cluster {
  return (
    (cluster as Cluster).bigtable !== undefined &&
    (cluster as Cluster).instance !== undefined &&
    (cluster as Cluster).id !== undefined &&
    (cluster as Cluster).name !== undefined
  );
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(AppProfile);

/**
 * Reference to the {@link AppProfile} class.
 * @name module:@google-cloud/bigtable.AppProfile
 * @see AppProfile
 */
