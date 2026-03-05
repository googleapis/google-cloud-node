/**
 * Copyright 2022 Google LLC
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

import {ServiceObjectConfig} from '@google-cloud/common';
const common = require('./common-grpc/service-object');

import {google as instanceAdmin} from '../protos/protos';
import {Operation as GaxOperation} from 'google-gax';
import snakeCase = require('lodash.snakecase');
import {
  CLOUD_RESOURCE_HEADER,
  LongRunningCallback,
  RequestCallback,
  ResourceCallback,
  NormalCallback,
} from './common';
import {
  CreateInstanceConfigRequest,
  GetInstanceConfigCallback,
  GetInstanceConfigOptions,
  GetInstanceConfigResponse,
  RequestConfig,
  Spanner,
} from './index';
import {promisifyAll} from '@google-cloud/promisify';
import {CallOptions, grpc} from 'google-gax';
import extend = require('extend');

export type IOperation = instanceAdmin.longrunning.IOperation;

export type CreateInstanceConfigCallback = LongRunningCallback<InstanceConfig>;
export type SetInstanceConfigMetadataCallback = ResourceCallback<
  GaxOperation,
  IOperation
>;
export type DeleteInstanceConfigCallback =
  NormalCallback<instanceAdmin.protobuf.IEmpty>;
export type ExistsInstanceConfigCallback = NormalCallback<boolean>;

export type CreateInstanceConfigResponse = [
  InstanceConfig,
  GaxOperation,
  IOperation,
];
export type SetInstanceConfigMetadataResponse = [GaxOperation, IOperation];
export type DeleteInstanceConfigResponse = [instanceAdmin.protobuf.IEmpty];
export type ExistsInstanceConfigResponse = boolean;

export type IInstanceConfig =
  instanceAdmin.spanner.admin.instance.v1.IInstanceConfig;

interface InstanceConfigRequest {
  (
    config: RequestConfig,
    callback: ResourceCallback<GaxOperation, IOperation>,
  ): void;
  <T>(config: RequestConfig, callback: RequestCallback<T>): void;
  <T, R>(config: RequestConfig, callback: RequestCallback<T, R>): void;
}

export interface SetInstanceConfigMetadataRequest {
  instanceConfig: IInstanceConfig;
  validateOnly?: boolean;
  gaxOpts?: CallOptions;
}

interface DeleteInstanceConfigRequest {
  etag?: string;
  validateOnly?: boolean;
  gaxOpts?: CallOptions;
}
/**
 * The {@link InstanceConfig} class represents a possible configuration for a
 * Cloud Spanner instance.
 *
 * Create an `InstanceConfig` object to interact with a Cloud Spanner instance
 * config.
 *
 * @class
 *
 * @param {Spanner} spanner {@link Spanner} instance.
 * @param {string} name Name of the instance config.
 *
 * @example
 * ```
 * const {Spanner} = require('@google-cloud/spanner');
 * const spanner = new Spanner();
 * const instance = spanner.instanceConfig('my-instance-config');
 * ```
 */
class InstanceConfig extends common.GrpcServiceObject {
  formattedName_: string;
  request: InstanceConfigRequest;
  metadata?: IInstanceConfig;
  resourceHeader_: {[k: string]: string};

  constructor(spanner: Spanner, name: string) {
    const formattedName_ = InstanceConfig.formatName_(spanner.projectId, name);
    const methods = {
      /**
       * Create an instance config.
       *
       * Wrapper around {@link v1.InstanceAdminClient#createInstanceConfig}.
       *
       * @see {@link v1.InstanceAdminClient#createInstanceConfig}
       * @see [CreateInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig)
       *
       * @method InstanceConfig#create
       * @param {CreateInstanceConfigRequest} config Configuration object.
       * @param {CreateInstanceConfigCallback} [callback] Callback function.
       * @returns {Promise<CreateInstanceConfigResponse>}
       *
       * @example
       * ```
       * const {Spanner} = require('@google-cloud/spanner');
       * const spanner = new Spanner();
       *
       * const instanceConfig =
       *     spanner.instanceConfig('custom-my-instance-config');
       *
       * instanceConfig.create(function(err, instance, operation, apiResponse) {
       *   if (err) {
       *     // Error handling omitted.
       *   }
       *
       *   operation
       *     .on('error', function(err) {})
       *     .on('complete', function() {
       *       // Instance config created successfully.
       *     });
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * instanceConfig.create()
       *   .then(function(data) {
       *     const operation = data[0];
       *     const apiResponse = data[1];
       *
       *     return operation.promise();
       *   })
       *   .then(function() {
       *     // Instance config created successfully.
       *   });
       * ```
       */
      create: true,
    };
    super({
      parent: spanner,
      id: name,
      methods,
      createMethod(
        _: {},
        options: CreateInstanceConfigRequest,
        callback: CreateInstanceConfigCallback,
      ): void {
        spanner.createInstanceConfig(formattedName_, options, callback);
      },
    } as {} as ServiceObjectConfig);
    this.formattedName_ = formattedName_;
    this.request = spanner.request.bind(spanner);
    this.resourceHeader_ = {
      [CLOUD_RESOURCE_HEADER]: this.formattedName_,
    };
  }

  /**
   * Gets the metadata from the backend for this InstanceConfig.
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
   * Gets the metadata from the backend for this InstanceConfig.
   *
   * Wrapper around {@link v1.InstanceAdminClient#getInstanceConfig}.
   *
   * @see {@link v1.InstanceAdminClient#getInstanceConfig}
   * @see [GetInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig)
   *
   * @param {GetInstanceConfigCallback} [callback] Callback function.
   * @returns {Promise<GetInstanceConfigResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instanceConfig = spanner.instanceConfig('custom-my-instance-config');
   *
   * instanceConfig.get(function(err, instanceConfig) {
   *   // `instanceConfig` is an instance configuration descriptor.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceConfig.get().then(function(data) {
   *   const instanceConfig = data[0];
   * });
   * ```
   */
  get(options?: GetInstanceConfigOptions): Promise<GetInstanceConfigResponse>;
  get(callback: GetInstanceConfigCallback): void;
  get(
    options: GetInstanceConfigOptions,
    callback: GetInstanceConfigCallback,
  ): void;
  get(
    optionsOrCallback?: GetInstanceConfigOptions | GetInstanceConfigCallback,
    cb?: GetInstanceConfigCallback,
  ): void | Promise<GetInstanceConfigResponse> {
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;
    const options =
      typeof optionsOrCallback === 'object'
        ? optionsOrCallback
        : ({} as GetInstanceConfigOptions);
    this.parent.getInstanceConfig(this.id, options, callback);
  }

  /**
   * Update the metadata for this instance config. Note that this method follows
   * PATCH semantics, so previously-configured settings will persist.
   * This function can only be called for deleting user managed instance
   * configs.
   *
   * Wrapper around {@link v1.InstanceAdminClient#updateInstanceConfig}.
   *
   * @see {@link v1.InstanceAdminClient#updateInstanceConfig}
   * @see [UpdateInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig)
   *
   * @param {object} metadata The metadata you wish to set.
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {SetInstanceConfigMetadataCallback} [callback] Callback function.
   * @returns {Promise<LongRunningOperationResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instanceConfig = spanner.instanceConfig('custom-my-instance-config');
   *
   * const metadata = {
   *   instanceConfig: {
   *     displayName: 'My Instance Config'
   *   }
   * };
   *
   * instanceConfig.setMetadata(metadata, function(err, operation, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   operation
   *     .on('error', function(err) {})
   *     .on('complete', function() {
   *       // Metadata updated successfully.
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceConfig.setMetadata(metadata).then(function(data) {
   *   const operation = data[0];
   *   const apiResponse = data[1];
   * });
   * ```
   */
  setMetadata(
    config: SetInstanceConfigMetadataRequest,
  ): Promise<SetInstanceConfigMetadataResponse>;
  setMetadata(
    config: SetInstanceConfigMetadataRequest,
    callback: SetInstanceConfigMetadataCallback,
  ): void;
  setMetadata(
    config: SetInstanceConfigMetadataRequest,
    callback?: SetInstanceConfigMetadataCallback,
  ): void | Promise<SetInstanceConfigMetadataResponse> {
    const reqOpts = {
      instanceConfig: extend(
        {
          name: this.formattedName_,
        },
        config.instanceConfig,
      ),
      updateMask: {
        paths: Object.keys(config.instanceConfig).map(snakeCase),
      },
      validateOnly: config.validateOnly,
    };

    // validateOnly need not be passed in if it is null or undefined.
    if (reqOpts.validateOnly === null || reqOpts.validateOnly === undefined)
      delete reqOpts.validateOnly;

    return this.request(
      {
        client: 'InstanceAdminClient',
        method: 'updateInstanceConfig',
        reqOpts,
        gaxOpts:
          config.gaxOpts === null || config.gaxOpts === undefined
            ? {}
            : config.gaxOpts,
        headers: this.resourceHeader_,
      },
      callback!,
    );
  }

  /**
   * @typedef {array} DeleteInstanceConfigResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DeleteInstanceConfigCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Delete the instance config. This function can only be called for deleting
   * user managed instance configs.
   *
   * Wrapper around {@link v1.InstanceAdminClient#deleteInstanceConfig}.
   *
   * @see {@link v1.InstanceAdminClient#deleteInstanceConfig}
   * @see [DeleteInstanceConfig API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig)
   *
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {DeleteInstanceConfigCallback} [callback] Callback function.
   * @returns {Promise<DeleteInstanceConfigResponse>}
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instanceConfig = spanner.instanceConfig('custom-my-instance-config');
   *
   * instanceConfig.delete(function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // Instance config was deleted successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * instanceConfig.delete().then(function(data) {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  delete(
    config?: DeleteInstanceConfigRequest,
  ): Promise<DeleteInstanceConfigResponse>;
  delete(callback: DeleteInstanceConfigCallback): void;
  delete(
    config: DeleteInstanceConfigRequest,
    callback: DeleteInstanceConfigCallback,
  ): void;
  delete(
    optionsOrCallback?:
      | DeleteInstanceConfigRequest
      | DeleteInstanceConfigCallback,
    cb?: DeleteInstanceConfigCallback,
  ): void | Promise<DeleteInstanceConfigResponse> {
    const config =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    const callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : cb!;

    const reqOpts = {
      name: this.formattedName_,
      etag: config.etag,
      validateOnly: config.validateOnly,
    };

    // etag/validateOnly need not be passed in if null or undefined.
    if (reqOpts.etag === null || reqOpts.etag === undefined)
      delete reqOpts.etag;
    if (reqOpts.validateOnly === null || reqOpts.etag === undefined)
      delete reqOpts.validateOnly;

    this.request<instanceAdmin.protobuf.IEmpty>(
      {
        client: 'InstanceAdminClient',
        method: 'deleteInstanceConfig',
        reqOpts,
        gaxOpts:
          config.gaxOpts === null || config.gaxOpts === undefined
            ? {}
            : config.gaxOpts,
        headers: this.resourceHeader_,
      },
      (err, resp) => {
        if (!err) {
          this.parent.instanceConfigs_.delete(this.id);
        }
        callback!(err, resp!);
      },
    );
  }

  /**
   * @typedef {array} ExistsInstanceConfigResponse
   * @property {boolean} 0 Whether the {@link InstanceConfig} exists.
   */
  /**
   * @callback ExistsInstanceConfigCallback
   * @param {?Error} err Request error, if any.
   * @param {boolean} exists Whether the {@link InstanceConfig} exists.
   */
  /**
   * Check if an instance config exists.
   *
   * @method InstanceConfig#exists
   * @param {object} [gaxOptions] Request configuration options,
   *     See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions}
   *     for more details.
   * @param {ExistsInstanceConfigCallback} [callback] Callback function.
   * @returns {Promise<ExistsInstanceConfigResponse>} When resolved, contains
   *     true if the instance config exists and false if it does not exist.
   *
   * @example
   * ```
   * const {Spanner} = require('@google-cloud/spanner');
   * const spanner = new Spanner();
   *
   * const instanceConfig = spanner.instanceConfig('custom-my-instance-config');
   *
   * const exists = await instanceConfig.exists();
   * console.log(`Does instance config exist? ${exists}`);
   * ```
   */
  exists(): Promise<ExistsInstanceConfigResponse>;
  exists(callback: ExistsInstanceConfigCallback): void;
  async exists(): Promise<ExistsInstanceConfigResponse> {
    try {
      // Attempt to read metadata to determine whether instance config exists
      await this.get();
      // Found, therefore it exists
      return true;
    } catch (err) {
      if ((err as grpc.ServerErrorResponse).code === grpc.status.NOT_FOUND) {
        return false;
      }
      // Some other error occurred, rethrow
      throw err;
    }
  }

  /**
   * Format the instance config name to include the project ID.
   *
   * @private
   *
   * @param {string} projectId The project ID.
   * @param {string} name The instance config name.
   * @returns {string}
   *
   * @example
   * ```
   * InstanceConfig.formatName_('grape-spaceship-123', 'my-instance-config');
   * // 'projects/grape-spaceship-123/instanceConfigs/my-instance-config'
   * ```
   */
  static formatName_(projectId: string, name: string) {
    if (name.indexOf('/') > -1) {
      return name;
    }
    const instanceConfigName = name.split('/').pop();
    return 'projects/' + projectId + '/instanceConfigs/' + instanceConfigName;
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(InstanceConfig, {
  exclude: ['exists'],
});

/**
 * Reference to the {@link InstanceConfig} class.
 * @name module:@google-cloud/spanner.InstanceConfig
 * @see InstanceConfig
 */
export {InstanceConfig};
