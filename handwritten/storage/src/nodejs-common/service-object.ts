/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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
import {promisifyAll} from '@google-cloud/promisify';
import {EventEmitter} from 'events';
import * as extend from 'extend';
import * as r from 'teeny-request';

import {StreamRequestOptions} from '.';
import {
  ApiError,
  BodyResponseCallback,
  DecorateRequestOptions,
  ResponseBody,
  util,
} from './util';

export type RequestResponse = [Metadata, r.Response];

export interface ServiceObjectParent {
  interceptors: Interceptor[];
  getRequestInterceptors(): Function[];
  requestStream(reqOpts: DecorateRequestOptions): r.Request;
  request(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void;
}

export interface Interceptor {
  request(opts: r.Options): DecorateRequestOptions;
}

export type GetMetadataOptions = object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Metadata = any;
export type MetadataResponse = [Metadata, r.Response];
export type MetadataCallback = (
  err: Error | null,
  metadata?: Metadata,
  apiResponse?: r.Response
) => void;

export type ExistsOptions = object;
export interface ExistsCallback {
  (err: Error | null, exists?: boolean): void;
}

export interface ServiceObjectConfig {
  /**
   * The base URL to make API requests to.
   */
  baseUrl?: string;

  /**
   * The method which creates this object.
   */
  createMethod?: Function;

  /**
   * The identifier of the object. For example, the name of a Storage bucket or
   * Pub/Sub topic.
   */
  id?: string;

  /**
   * A map of each method name that should be inherited.
   */
  methods?: Methods;

  /**
   * The parent service instance. For example, an instance of Storage if the
   * object is Bucket.
   */
  parent: ServiceObjectParent;

  /**
   * Override of projectId, used to allow access to resources in another project.
   * For example, a BigQuery dataset in another project to which the user has been
   * granted permission.
   */
  projectId?: string;
}

export interface Methods {
  [methodName: string]: {reqOpts?: r.CoreOptions} | boolean;
}

export interface InstanceResponseCallback<T> {
  (err: ApiError | null, instance?: T | null, apiResponse?: r.Response): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateOptions {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export type CreateResponse<T> = any[];
export interface CreateCallback<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (err: ApiError | null, instance?: T | null, ...args: any[]): void;
}

export type DeleteOptions = {
  ignoreNotFound?: boolean;
  ifGenerationMatch?: number;
  ifGenerationNotMatch?: number;
  ifMetagenerationMatch?: number;
  ifMetagenerationNotMatch?: number;
} & object;
export interface DeleteCallback {
  (err: Error | null, apiResponse?: r.Response): void;
}

export interface GetConfig {
  /**
   * Create the object if it doesn't already exist.
   */
  autoCreate?: boolean;
}
type GetOrCreateOptions = GetConfig & CreateOptions;
export type GetResponse<T> = [T, r.Response];

export interface ResponseCallback {
  (err?: Error | null, apiResponse?: r.Response): void;
}

export type SetMetadataResponse = [Metadata];
export type SetMetadataOptions = object;

/**
 * ServiceObject is a base class, meant to be inherited from by a "service
 * object," like a BigQuery dataset or Storage bucket.
 *
 * Most of the time, these objects share common functionality; they can be
 * created or deleted, and you can get or set their metadata.
 *
 * By inheriting from this class, a service object will be extended with these
 * shared behaviors. Note that any method can be overridden when the service
 * object requires specific behavior.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ServiceObject<T = any> extends EventEmitter {
  metadata: Metadata;
  baseUrl?: string;
  parent: ServiceObjectParent;
  id?: string;
  private createMethod?: Function;
  protected methods: Methods;
  interceptors: Interceptor[];
  projectId?: string;

  /*
   * @constructor
   * @alias module:common/service-object
   *
   * @private
   *
   * @param {object} config - Configuration object.
   * @param {string} config.baseUrl - The base URL to make API requests to.
   * @param {string} config.createMethod - The method which creates this object.
   * @param {string=} config.id - The identifier of the object. For example, the
   *     name of a Storage bucket or Pub/Sub topic.
   * @param {object=} config.methods - A map of each method name that should be inherited.
   * @param {object} config.methods[].reqOpts - Default request options for this
   *     particular method. A common use case is when `setMetadata` requires a
   *     `PUT` method to override the default `PATCH`.
   * @param {object} config.parent - The parent service instance. For example, an
   *     instance of Storage if the object is Bucket.
   */
  constructor(config: ServiceObjectConfig) {
    super();
    this.metadata = {};
    this.baseUrl = config.baseUrl;
    this.parent = config.parent; // Parent class.
    this.id = config.id; // Name or ID (e.g. dataset ID, bucket name, etc).
    this.createMethod = config.createMethod;
    this.methods = config.methods || {};
    this.interceptors = [];
    this.projectId = config.projectId;

    if (config.methods) {
      // This filters the ServiceObject instance (e.g. a "File") to only have
      // the configured methods. We make a couple of exceptions for core-
      // functionality ("request()" and "getRequestInterceptors()")
      Object.getOwnPropertyNames(ServiceObject.prototype)
        .filter(methodName => {
          return (
            // All ServiceObjects need `request` and `getRequestInterceptors`.
            // clang-format off
            !/^request/.test(methodName) &&
            !/^getRequestInterceptors/.test(methodName) &&
            // clang-format on
            // The ServiceObject didn't redefine the method.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (this as any)[methodName] ===
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (ServiceObject.prototype as any)[methodName] &&
            // This method isn't wanted.
            !config.methods![methodName]
          );
        })
        .forEach(methodName => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this as any)[methodName] = undefined;
        });
    }
  }

  /**
   * Create the object.
   *
   * @param {object=} options - Configuration object.
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.instance - The instance.
   * @param {object} callback.apiResponse - The full API response.
   */
  create(options?: CreateOptions): Promise<CreateResponse<T>>;
  create(options: CreateOptions, callback: CreateCallback<T>): void;
  create(callback: CreateCallback<T>): void;
  create(
    optionsOrCallback?: CreateOptions | CreateCallback<T>,
    callback?: CreateCallback<T>
  ): void | Promise<CreateResponse<T>> {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const args = [this.id] as Array<{}>;

    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback as CreateCallback<T>;
    }

    if (typeof optionsOrCallback === 'object') {
      args.push(optionsOrCallback);
    }

    // Wrap the callback to return *this* instance of the object, not the
    // newly-created one.
    // tslint: disable-next-line no-any
    function onCreate(...args: [Error, ServiceObject<T>]) {
      const [err, instance] = args;
      if (!err) {
        self.metadata = instance.metadata;
        if (self.id && instance.metadata) {
          self.id = instance.metadata.id;
        }
        args[1] = self; // replace the created `instance` with this one.
      }
      callback!(...(args as {} as [Error, T]));
    }
    args.push(onCreate);
    // eslint-disable-next-line prefer-spread
    this.createMethod!.apply(null, args);
  }

  /**
   * Delete the object.
   *
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.apiResponse - The full API response.
   */
  delete(options?: DeleteOptions): Promise<[r.Response]>;
  delete(options: DeleteOptions, callback: DeleteCallback): void;
  delete(callback: DeleteCallback): void;
  delete(
    optionsOrCallback?: DeleteOptions | DeleteCallback,
    cb?: DeleteCallback
  ): Promise<[r.Response]> | void {
    const [options, callback] = util.maybeOptionsOrCallback<
      DeleteOptions,
      DeleteCallback
    >(optionsOrCallback, cb);

    const ignoreNotFound = options.ignoreNotFound!;
    delete options.ignoreNotFound;

    const methodConfig =
      (typeof this.methods.delete === 'object' && this.methods.delete) || {};

    const reqOpts = extend(
      true,
      {
        method: 'DELETE',
        uri: '',
      },
      methodConfig.reqOpts,
      {
        qs: options,
      }
    );

    // The `request` method may have been overridden to hold any special
    // behavior. Ensure we call the original `request` method.
    ServiceObject.prototype.request.call(
      this,
      reqOpts,
      (err: ApiError | null, ...args) => {
        if (err) {
          if (err.code === 404 && ignoreNotFound) {
            err = null;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback(err, ...(args as any));
      }
    );
  }

  /**
   * Check if the object exists.
   *
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {boolean} callback.exists - Whether the object exists or not.
   */
  exists(options?: ExistsOptions): Promise<[boolean]>;
  exists(options: ExistsOptions, callback: ExistsCallback): void;
  exists(callback: ExistsCallback): void;
  exists(
    optionsOrCallback?: ExistsOptions | ExistsCallback,
    cb?: ExistsCallback
  ): void | Promise<[boolean]> {
    const [options, callback] = util.maybeOptionsOrCallback<
      ExistsOptions,
      ExistsCallback
    >(optionsOrCallback, cb);

    this.get(options, err => {
      if (err) {
        if (err.code === 404) {
          callback!(null, false);
        } else {
          callback!(err);
        }
        return;
      }
      callback!(null, true);
    });
  }

  /**
   * Get the object if it exists. Optionally have the object created if an
   * options object is provided with `autoCreate: true`.
   *
   * @param {object=} options - The configuration object that will be used to
   *     create the object if necessary.
   * @param {boolean} options.autoCreate - Create the object if it doesn't already exist.
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.instance - The instance.
   * @param {object} callback.apiResponse - The full API response.
   */
  get(options?: GetOrCreateOptions): Promise<GetResponse<T>>;
  get(callback: InstanceResponseCallback<T>): void;
  get(options: GetOrCreateOptions, callback: InstanceResponseCallback<T>): void;
  get(
    optionsOrCallback?: GetOrCreateOptions | InstanceResponseCallback<T>,
    cb?: InstanceResponseCallback<T>
  ): Promise<GetResponse<T>> | void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    const [opts, callback] = util.maybeOptionsOrCallback<
      GetOrCreateOptions,
      InstanceResponseCallback<T>
    >(optionsOrCallback, cb);
    const options = Object.assign({}, opts);

    const autoCreate = options.autoCreate && typeof this.create === 'function';
    delete options.autoCreate;

    function onCreate(
      err: ApiError | null,
      instance: T,
      apiResponse: r.Response
    ) {
      if (err) {
        if (err.code === 409) {
          self.get(options, callback!);
          return;
        }
        callback!(err, null, apiResponse);
        return;
      }
      callback!(null, instance, apiResponse);
    }

    this.getMetadata(options, (err: ApiError | null, metadata) => {
      if (err) {
        if (err.code === 404 && autoCreate) {
          const args: Array<Function | GetOrCreateOptions> = [];
          if (Object.keys(options).length > 0) {
            args.push(options);
          }
          args.push(onCreate);
          self.create(...args);
          return;
        }
        callback!(err, null, metadata as r.Response);
        return;
      }
      callback!(null, self as {} as T, metadata as r.Response);
    });
  }

  /**
   * Get the metadata of this object.
   *
   * @param {function} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.metadata - The metadata for this object.
   * @param {object} callback.apiResponse - The full API response.
   */
  getMetadata(options?: GetMetadataOptions): Promise<MetadataResponse>;
  getMetadata(options: GetMetadataOptions, callback: MetadataCallback): void;
  getMetadata(callback: MetadataCallback): void;
  getMetadata(
    optionsOrCallback: GetMetadataOptions | MetadataCallback,
    cb?: MetadataCallback
  ): Promise<MetadataResponse> | void {
    const [options, callback] = util.maybeOptionsOrCallback<
      GetMetadataOptions,
      MetadataCallback
    >(optionsOrCallback, cb);

    const methodConfig =
      (typeof this.methods.getMetadata === 'object' &&
        this.methods.getMetadata) ||
      {};
    const reqOpts = extend(
      true,
      {
        uri: '',
      },
      methodConfig.reqOpts,
      {
        qs: options,
      }
    );

    // The `request` method may have been overridden to hold any special
    // behavior. Ensure we call the original `request` method.
    ServiceObject.prototype.request.call(
      this,
      reqOpts,
      (err: Error | null, body?: ResponseBody, res?: r.Response) => {
        this.metadata = body;
        callback!(err, this.metadata, res);
      }
    );
  }

  /**
   * Return the user's custom request interceptors.
   */
  getRequestInterceptors(): Function[] {
    // Interceptors should be returned in the order they were assigned.
    const localInterceptors = this.interceptors
      .filter(interceptor => typeof interceptor.request === 'function')
      .map(interceptor => interceptor.request);
    return this.parent.getRequestInterceptors().concat(localInterceptors);
  }

  /**
   * Set the metadata for this object.
   *
   * @param {object} metadata - The metadata to set on this object.
   * @param {object=} options - Configuration options.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.apiResponse - The full API response.
   */
  setMetadata(
    metadata: Metadata,
    options?: SetMetadataOptions
  ): Promise<SetMetadataResponse>;
  setMetadata(metadata: Metadata, callback: MetadataCallback): void;
  setMetadata(
    metadata: Metadata,
    options: SetMetadataOptions,
    callback: MetadataCallback
  ): void;
  setMetadata(
    metadata: Metadata,
    optionsOrCallback: SetMetadataOptions | MetadataCallback,
    cb?: MetadataCallback
  ): Promise<SetMetadataResponse> | void {
    const [options, callback] = util.maybeOptionsOrCallback<
      SetMetadataOptions,
      MetadataCallback
    >(optionsOrCallback, cb);
    const methodConfig =
      (typeof this.methods.setMetadata === 'object' &&
        this.methods.setMetadata) ||
      {};

    const reqOpts = extend(
      true,
      {},
      {
        method: 'PATCH',
        uri: '',
      },
      methodConfig.reqOpts,
      {
        json: metadata,
        qs: options,
      }
    );

    // The `request` method may have been overridden to hold any special
    // behavior. Ensure we call the original `request` method.
    ServiceObject.prototype.request.call(
      this,
      reqOpts,
      (err: Error | null, body?: ResponseBody, res?: r.Response) => {
        this.metadata = body;
        callback!(err, this.metadata, res);
      }
    );
  }

  /**
   * Make an authenticated API request.
   *
   * @private
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   * @param {function} callback - The callback function passed to `request`.
   */
  private request_(reqOpts: StreamRequestOptions): r.Request;
  private request_(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void;
  private request_(
    reqOpts: DecorateRequestOptions | StreamRequestOptions,
    callback?: BodyResponseCallback
  ): void | r.Request {
    reqOpts = extend(true, {}, reqOpts);

    if (this.projectId) {
      reqOpts.projectId = this.projectId;
    }

    const isAbsoluteUrl = reqOpts.uri.indexOf('http') === 0;
    const uriComponents = [this.baseUrl, this.id || '', reqOpts.uri];

    if (isAbsoluteUrl) {
      uriComponents.splice(0, uriComponents.indexOf(reqOpts.uri));
    }

    reqOpts.uri = uriComponents
      .filter(x => x!.trim()) // Limit to non-empty strings.
      .map(uriComponent => {
        const trimSlashesRegex = /^\/*|\/*$/g;
        return uriComponent!.replace(trimSlashesRegex, '');
      })
      .join('/');

    const childInterceptors = Array.isArray(reqOpts.interceptors_)
      ? reqOpts.interceptors_
      : [];
    const localInterceptors = [].slice.call(this.interceptors);

    reqOpts.interceptors_ = childInterceptors.concat(localInterceptors);

    if (reqOpts.shouldReturnStream) {
      return this.parent.requestStream(reqOpts);
    }

    this.parent.request(reqOpts, callback!);
  }

  /**
   * Make an authenticated API request.
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   * @param {function} callback - The callback function passed to `request`.
   */
  request(reqOpts: DecorateRequestOptions): Promise<RequestResponse>;
  request(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void;
  request(
    reqOpts: DecorateRequestOptions,
    callback?: BodyResponseCallback
  ): void | Promise<RequestResponse> {
    this.request_(reqOpts, callback!);
  }

  /**
   * Make an authenticated API request.
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   */
  requestStream(reqOpts: DecorateRequestOptions): r.Request {
    const opts = extend(true, reqOpts, {shouldReturnStream: true});
    return this.request_(opts as StreamRequestOptions);
  }
}

promisifyAll(ServiceObject, {exclude: ['getRequestInterceptors']});

export {ServiceObject};
