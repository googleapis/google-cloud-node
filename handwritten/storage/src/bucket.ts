// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  ApiError,
  BodyResponseCallback,
  DecorateRequestOptions,
  DeleteCallback,
  ExistsCallback,
  GetConfig,
  Metadata,
  ResponseBody,
  ServiceObject,
  util,
} from '@google-cloud/common';
import {paginator} from '@google-cloud/paginator';
import {promisifyAll} from '@google-cloud/promisify';
import arrify = require('arrify');
import * as extend from 'extend';
import * as fs from 'fs';
import * as http from 'http';
import * as mime from 'mime-types';
import * as path from 'path';
import pLimit = require('p-limit');
import {promisify} from 'util';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const snakeize = require('snakeize');

import {Acl} from './acl';
import {Channel} from './channel';
import {
  File,
  FileOptions,
  CreateResumableUploadOptions,
  CreateWriteStreamOptions,
} from './file';
import {Iam} from './iam';
import {Notification} from './notification';
import {Storage, Cors} from './storage';
import {
  GetSignedUrlResponse,
  GetSignedUrlCallback,
  SignerGetSignedUrlConfig,
  URLSigner,
  Query,
} from './signer';

interface SourceObject {
  name: string;
  generation?: number;
}

interface CreateNotificationQuery {
  userProject?: string;
}

interface MetadataOptions {
  predefinedAcl: string;
  userProject?: string;
}

interface BucketOptions {
  userProject?: string;
}

export type GetFilesResponse = [File[], {}, Metadata];
export interface GetFilesCallback {
  (
    err: Error | null,
    files?: File[],
    nextQuery?: {},
    apiResponse?: Metadata
  ): void;
}

interface WatchAllOptions {
  delimiter?: string;
  maxResults?: number;
  pageToken?: string;
  prefix?: string;
  projection?: string;
  userProject?: string;
  versions?: boolean;
}

export interface AddLifecycleRuleOptions {
  append?: boolean;
}

export interface LifecycleRule {
  action: {type: string; storageClass?: string} | string;
  condition: {[key: string]: boolean | Date | number | string};
  storageClass?: string;
}

export interface EnableLoggingOptions {
  bucket?: string | Bucket;
  prefix: string;
}

export interface GetFilesOptions {
  autoPaginate?: boolean;
  delimiter?: string;
  directory?: string;
  endOffset?: string;
  includeTrailingDelimiter?: boolean;
  prefix?: string;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
  startOffset?: string;
  userProject?: string;
  versions?: boolean;
}

export interface CombineOptions {
  kmsKeyName?: string;
  userProject?: string;
}

export interface CombineCallback {
  (err: Error | null, newFile: File | null, apiResponse: Metadata): void;
}

export type CombineResponse = [File, Metadata];

export interface CreateChannelConfig extends WatchAllOptions {
  address: string;
}

export interface CreateChannelOptions {
  userProject?: string;
}

export type CreateChannelResponse = [Channel, Metadata];

export interface CreateChannelCallback {
  (err: Error | null, channel: Channel | null, apiResponse: Metadata): void;
}

export interface CreateNotificationOptions {
  customAttributes?: {[key: string]: string};
  eventTypes?: string[];
  objectNamePrefix?: string;
  payloadFormat?: string;
  userProject?: string;
}

export interface CreateNotificationCallback {
  (
    err: Error | null,
    notification: Notification | null,
    apiResponse: Metadata
  ): void;
}

export type CreateNotificationResponse = [Notification, Metadata];

export interface DeleteBucketOptions {
  userProject?: string;
}

export type DeleteBucketResponse = [Metadata];

export interface DeleteBucketCallback extends DeleteCallback {
  (err: Error | null, apiResponse: Metadata): void;
}

export interface DeleteFilesOptions extends GetFilesOptions {
  force?: boolean;
}

export interface DeleteFilesCallback {
  (err: Error | Error[] | null, apiResponse?: object): void;
}

export type DeleteLabelsResponse = [Metadata];

export type DeleteLabelsCallback = SetLabelsCallback;

export type DisableRequesterPaysResponse = [Metadata];

export interface DisableRequesterPaysCallback {
  (err?: Error | null, apiResponse?: object): void;
}

export type EnableRequesterPaysResponse = [Metadata];

export interface EnableRequesterPaysCallback {
  (err?: Error | null, apiResponse?: Metadata): void;
}

export interface BucketExistsOptions extends GetConfig {
  userProject?: string;
}

export type BucketExistsResponse = [boolean];

export type BucketExistsCallback = ExistsCallback;

export interface GetBucketOptions extends GetConfig {
  userProject?: string;
}

export type GetBucketResponse = [Bucket, Metadata];

export interface GetBucketCallback {
  (err: ApiError | null, bucket: Bucket | null, apiResponse: Metadata): void;
}

export interface GetLabelsOptions {
  userProject?: string;
}

export type GetLabelsResponse = [Metadata];

export interface GetLabelsCallback {
  (err: Error | null, labels: object | null): void;
}

export type GetBucketMetadataResponse = [Metadata, Metadata];

export interface GetBucketMetadataCallback {
  (
    err: ApiError | null,
    metadata: Metadata | null,
    apiResponse: Metadata
  ): void;
}

export interface GetBucketMetadataOptions {
  userProject?: string;
}

export interface GetBucketSignedUrlConfig {
  action: 'list';
  version?: 'v2' | 'v4';
  cname?: string;
  virtualHostedStyle?: boolean;
  expires: string | number | Date;
  extensionHeaders?: http.OutgoingHttpHeaders;
  queryParams?: Query;
}

export enum BucketActionToHTTPMethod {
  list = 'GET',
}

export interface GetNotificationsOptions {
  userProject?: string;
}

export interface GetNotificationsCallback {
  (
    err: Error | null,
    notifications: Notification[] | null,
    apiResponse: Metadata
  ): void;
}

export type GetNotificationsResponse = [Notification[], Metadata];

export interface MakeBucketPrivateOptions {
  includeFiles?: boolean;
  force?: boolean;
  userProject?: string;
}

interface MakeBucketPrivateRequest extends MakeBucketPrivateOptions {
  private?: boolean;
}

export type MakeBucketPrivateResponse = [File[]];

export interface MakeBucketPrivateCallback {
  (err?: Error | null, files?: File[]): void;
}

export interface MakeBucketPublicOptions {
  includeFiles?: boolean;
  force?: boolean;
}

export interface MakeBucketPublicCallback {
  (err?: Error | null, files?: File[]): void;
}

export type MakeBucketPublicResponse = [File[]];

export interface SetBucketMetadataOptions {
  userProject?: string;
}

export type SetBucketMetadataResponse = [Metadata];

export interface SetBucketMetadataCallback {
  (err?: Error | null, metadata?: Metadata): void;
}

export interface BucketLockCallback {
  (err?: Error | null, apiResponse?: Metadata): void;
}

export type BucketLockResponse = [Metadata];

export interface Labels {
  [key: string]: string;
}

export interface SetLabelsOptions {
  userProject?: string;
}

export type SetLabelsResponse = [Metadata];

export interface SetLabelsCallback {
  (err?: Error | null, metadata?: Metadata): void;
}

export interface SetBucketStorageClassOptions {
  userProject?: string;
}

export interface SetBucketStorageClassCallback {
  (err?: Error | null): void;
}

export type UploadResponse = [File, Metadata];

export interface UploadCallback {
  (err: Error | null, file?: File | null, apiResponse?: Metadata): void;
}

export interface UploadOptions
  extends CreateResumableUploadOptions,
    CreateWriteStreamOptions {
  destination?: string | File;
  encryptionKey?: string | Buffer;
  kmsKeyName?: string;
  resumable?: boolean;
  timeout?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadProgress?: (progressEvent: any) => void;
}

export interface MakeAllFilesPublicPrivateOptions {
  force?: boolean;
  private?: boolean;
  public?: boolean;
  userProject?: string;
}

interface MakeAllFilesPublicPrivateCallback {
  (err?: Error | Error[] | null, files?: File[]): void;
}

type MakeAllFilesPublicPrivateResponse = [File[]];

/**
 * The size of a file (in bytes) must be greater than this number to
 * automatically trigger a resumable upload.
 *
 * @const {number}
 * @private
 */
const RESUMABLE_THRESHOLD = 5000000;

/**
 * Create a Bucket object to interact with a Cloud Storage bucket.
 *
 * @class
 * @hideconstructor
 *
 * @param {Storage} storage A {@link Storage} instance.
 * @param {string} name The name of the bucket.
 * @param {object} [options] Configuration object.
 * @param {string} [options.userProject] User project.
 *
 * @example
 * const {Storage} = require('@google-cloud/storage');
 * const storage = new Storage();
 * const bucket = storage.bucket('albums');
 */
class Bucket extends ServiceObject {
  /**
   * The bucket's name.
   * @name Bucket#name
   * @type {string}
   */
  name: string;

  /**
   * A reference to the {@link Storage} associated with this {@link Bucket}
   * instance.
   * @name Bucket#storage
   * @type {Storage}
   */
  storage: Storage;

  /**
   * A user project to apply to each request from this bucket.
   * @name Bucket#userProject
   * @type {string}
   */
  userProject?: string;

  /**
   * Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * An ACL consists of one or more entries, where each entry grants permissions
   * to an entity. Permissions define the actions that can be performed against
   * an object or bucket (for example, `READ` or `WRITE`); the entity defines
   * who the permission applies to (for example, a specific user or group of
   * users).
   *
   * The `acl` object on a Bucket instance provides methods to get you a list of
   * the ACLs defined on your bucket, as well as set, update, and delete them.
   *
   * Buckets also have
   * [default
   * ACLs](https://cloud.google.com/storage/docs/access-control/lists#default)
   * for all created files. Default ACLs specify permissions that all new
   * objects added to the bucket will inherit by default. You can add, delete,
   * get, and update entities and permissions for these as well with
   * {@link Bucket#acl.default}.
   *
   * @see [About Access Control Lists]{@link http://goo.gl/6qBBPO}
   * @see [Default ACLs]{@link https://cloud.google.com/storage/docs/access-control/lists#default}
   *
   * @name Bucket#acl
   * @mixes Acl
   * @property {Acl} default Cloud Storage Buckets have
   * [default
   * ACLs](https://cloud.google.com/storage/docs/access-control/lists#default)
   * for all created files. You can add, delete, get, and update entities and
   * permissions for these as well. The method signatures and examples are all
   * the same, after only prefixing the method call with `default`.
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   *
   * //-
   * // Make a bucket's contents publicly readable.
   * //-
   * const myBucket = storage.bucket('my-bucket');
   *
   * const options = {
   *   entity: 'allUsers',
   *   role: storage.acl.READER_ROLE
   * };
   *
   * myBucket.acl.add(options, function(err, aclObject) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * myBucket.acl.add(options).then(function(data) {
   *   const aclObject = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_print_bucket_acl
   * Example of printing a bucket's ACL:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_print_bucket_acl_for_user
   * Example of printing a bucket's ACL for a specific user:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_add_bucket_owner
   * Example of adding an owner to a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_remove_bucket_owner
   * Example of removing an owner from a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_add_bucket_default_owner
   * Example of adding a default owner to a bucket:
   *
   * @example <caption>include:samples/acl.js</caption>
   * region_tag:storage_remove_bucket_default_owner
   * Example of removing a default owner from a bucket:
   */
  acl: Acl;

  /**
   * Get and set IAM policies for your bucket.
   *
   * @name Bucket#iam
   * @mixes Iam
   *
   * @see [Cloud Storage IAM Management](https://cloud.google.com/storage/docs/access-control/iam#short_title_iam_management)
   * @see [Granting, Changing, and Revoking Access](https://cloud.google.com/iam/docs/granting-changing-revoking-access)
   * @see [IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Get the IAM policy for your bucket.
   * //-
   * bucket.iam.getPolicy(function(err, policy) {
   *   console.log(policy);
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.iam.getPolicy().then(function(data) {
   *   const policy = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_view_bucket_iam_members
   * Example of retrieving a bucket's IAM policy:
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_add_bucket_iam_member
   * Example of adding to a bucket's IAM policy:
   *
   * @example <caption>include:samples/iam.js</caption>
   * region_tag:storage_remove_bucket_iam_member
   * Example of removing from a bucket's IAM policy:
   */
  iam: Iam;

  /**
   * Get {@link File} objects for the files currently in the bucket as a
   * readable object stream.
   *
   * @method Bucket#getFilesStream
   * @param {GetFilesOptions} [query] Query object for listing files.
   * @returns {ReadableStream} A readable stream that emits {@link File} instances.
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.getFilesStream()
   *   .on('error', console.error)
   *   .on('data', function(file) {
   *     // file is a File object.
   *   })
   *   .on('end', function() {
   *     // All files retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * bucket.getFilesStream()
   *   .on('data', function(file) {
   *     this.end();
   *   });
   *
   * //-
   * // If you're filtering files with a delimiter, you should use
   * // {@link Bucket#getFiles} and set `autoPaginate: false` in order to
   * // preserve the `apiResponse` argument.
   * //-
   * const prefixes = [];
   *
   * function callback(err, files, nextQuery, apiResponse) {
   *   prefixes = prefixes.concat(apiResponse.prefixes);
   *
   *   if (nextQuery) {
   *     bucket.getFiles(nextQuery, callback);
   *   } else {
   *     // prefixes = The finished array of prefixes.
   *   }
   * }
   *
   * bucket.getFiles({
   *   autoPaginate: false,
   *   delimiter: '/'
   * }, callback);
   */
  getFilesStream: Function;
  signer?: URLSigner;

  constructor(storage: Storage, name: string, options?: BucketOptions) {
    options = options || {};

    // Allow for "gs://"-style input, and strip any trailing slashes.
    name = name.replace(/^gs:\/\//, '').replace(/\/+$/, '');

    const requestQueryObject: {userProject?: string} = {};

    const userProject = options.userProject;
    if (typeof userProject === 'string') {
      requestQueryObject.userProject = userProject;
    }

    const methods = {
      /**
       * Create a bucket.
       *
       * @method Bucket#create
       * @param {CreateBucketRequest} [metadata] Metadata to set for the bucket.
       * @param {CreateBucketCallback} [callback] Callback function.
       * @returns {Promise<CreateBucketResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       * bucket.create(function(err, bucket, apiResponse) {
       *   if (!err) {
       *     // The bucket was created successfully.
       *   }
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.create().then(function(data) {
       *   const bucket = data[0];
       *   const apiResponse = data[1];
       * });
       */
      create: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
      /**
       * @typedef {object} DeleteBucketOptions Configuration options.
       * @param {string} [userProject] The ID of the project which will be
       *     billed for the request.
       */
      /**
       * @typedef {array} DeleteBucketResponse
       * @property {object} 0 The full API response.
       */
      /**
       * @callback DeleteBucketCallback
       * @param {?Error} err Request error, if any.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Delete the bucket.
       *
       * @see [Buckets: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/delete}
       *
       * @method Bucket#delete
       * @param {DeleteBucketOptions} [options] Configuration options.
       * @param {DeleteBucketCallback} [callback] Callback function.
       * @returns {Promise<DeleteBucketResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       * bucket.delete(function(err, apiResponse) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.delete().then(function(data) {
       *   const apiResponse = data[0];
       * });
       *
       * @example <caption>include:samples/buckets.js</caption>
       * region_tag:storage_delete_bucket
       * Another example:
       */
      delete: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
      /**
       * @typedef {object} BucketExistsOptions Configuration options for Bucket#exists().
       * @param {string} [userProject] The ID of the project which will be
       *     billed for the request.
       */
      /**
       * @typedef {array} BucketExistsResponse
       * @property {boolean} 0 Whether the {@link Bucket} exists.
       */
      /**
       * @callback BucketExistsCallback
       * @param {?Error} err Request error, if any.
       * @param {boolean} exists Whether the {@link Bucket} exists.
       */
      /**
       * Check if the bucket exists.
       *
       * @method Bucket#exists
       * @param {BucketExistsOptions} [options] Configuration options.
       * @param {BucketExistsCallback} [callback] Callback function.
       * @returns {Promise<BucketExistsResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       *
       * bucket.exists(function(err, exists) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.exists().then(function(data) {
       *   const exists = data[0];
       * });
       */
      exists: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
      /**
       * @typedef {object} [GetBucketOptions] Configuration options for Bucket#get()
       * @property {boolean} [autoCreate] Automatically create the object if
       *     it does not exist. Default: `false`
       * @property {string} [userProject] The ID of the project which will be
       *     billed for the request.
       */
      /**
       * @typedef {array} GetBucketResponse
       * @property {Bucket} 0 The {@link Bucket}.
       * @property {object} 1 The full API response.
       */
      /**
       * @callback GetBucketCallback
       * @param {?Error} err Request error, if any.
       * @param {Bucket} bucket The {@link Bucket}.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Get a bucket if it exists.
       *
       * You may optionally use this to "get or create" an object by providing
       * an object with `autoCreate` set to `true`. Any extra configuration that
       * is normally required for the `create` method must be contained within
       * this object as well.
       *
       * @method Bucket#get
       * @param {GetBucketOptions} [options] Configuration options.
       * @param {GetBucketCallback} [callback] Callback function.
       * @returns {Promise<GetBucketResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       *
       * bucket.get(function(err, bucket, apiResponse) {
       *   // `bucket.metadata` has been populated.
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.get().then(function(data) {
       *   const bucket = data[0];
       *   const apiResponse = data[1];
       * });
       */
      get: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
      /**
       * @typedef {array} GetBucketMetadataResponse
       * @property {object} 0 The bucket metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * @callback GetBucketMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The bucket metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * @typedef {object} GetBucketMetadataOptions Configuration options for Bucket#getMetadata().
       * @property {string} [userProject] The ID of the project which will be
       *     billed for the request.
       */
      /**
       * Get the bucket's metadata.
       *
       * To set metadata, see {@link Bucket#setMetadata}.
       *
       * @see [Buckets: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/get}
       *
       * @method Bucket#getMetadata
       * @param {GetBucketMetadataOptions} [options] Configuration options.
       * @param {GetBucketMetadataCallback} [callback] Callback function.
       * @returns {Promise<GetBucketMetadataResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       *
       * bucket.getMetadata(function(err, metadata, apiResponse) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.getMetadata().then(function(data) {
       *   const metadata = data[0];
       *   const apiResponse = data[1];
       * });
       *
       * @example <caption>include:samples/requesterPays.js</caption>
       * region_tag:storage_get_requester_pays_status
       * Example of retrieving the requester pays status of a bucket:
       */
      getMetadata: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
      /**
       * @typedef {object} SetBucketMetadataOptions Configuration options for Bucket#setMetadata().
       * @property {string} [userProject] The ID of the project which will be
       *     billed for the request.
       */
      /**
       * @typedef {array} SetBucketMetadataResponse
       * @property {object} apiResponse The full API response.
       */
      /**
       * @callback SetBucketMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The bucket metadata.
       */
      /**
       * Set the bucket's metadata.
       *
       * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
       *
       * @method Bucket#setMetadata
       * @param {object<string, *>} metadata The metadata you wish to set.
       * @param {SetBucketMetadataOptions} [options] Configuration options.
       * @param {SetBucketMetadataCallback} [callback] Callback function.
       * @returns {Promise<SetBucketMetadataResponse>}
       *
       * @example
       * const {Storage} = require('@google-cloud/storage');
       * const storage = new Storage();
       * const bucket = storage.bucket('albums');
       *
       * //-
       * // Set website metadata field on the bucket.
       * //-
       * const metadata = {
       *   website: {
       *     mainPageSuffix: 'http://example.com',
       *     notFoundPage: 'http://example.com/404.html'
       *   }
       * };
       *
       * bucket.setMetadata(metadata, function(err, apiResponse) {});
       *
       * //-
       * // Enable versioning for your bucket.
       * //-
       * bucket.setMetadata({
       *   versioning: {
       *     enabled: true
       *   }
       * }, function(err, apiResponse) {});
       *
       * //-
       * // Enable KMS encryption for objects within this bucket.
       * //-
       * bucket.setMetadata({
       *   encryption: {
       *     defaultKmsKeyName: 'projects/grape-spaceship-123/...'
       *   }
       * }, function(err, apiResponse) {});
       *
       * //-
       * // Set the default event-based hold value for new objects in this
       * // bucket.
       * //-
       * bucket.setMetadata({
       *   defaultEventBasedHold: true
       * }, function(err, apiResponse) {});
       *
       * //-
       * // Remove object lifecycle rules.
       * //-
       * bucket.setMetadata({
       *   lifecycle: null
       * }, function(err, apiResponse) {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * bucket.setMetadata(metadata).then(function(data) {
       *   const apiResponse = data[0];
       * });
       */
      setMetadata: {
        reqOpts: {
          qs: requestQueryObject,
        },
      },
    };

    super({
      parent: storage,
      baseUrl: '/b',
      id: name,
      createMethod: storage.createBucket.bind(storage),
      methods,
    });

    this.name = name;

    this.storage = storage;

    this.userProject = options.userProject;

    this.acl = new Acl({
      request: this.request.bind(this),
      pathPrefix: '/acl',
    });

    this.acl.default = new Acl({
      request: this.request.bind(this),
      pathPrefix: '/defaultObjectAcl',
    });

    this.iam = new Iam(this);

    this.getFilesStream = paginator.streamify('getFiles');
  }

  addLifecycleRule(
    rule: LifecycleRule,
    options?: AddLifecycleRuleOptions
  ): Promise<SetBucketMetadataResponse>;
  addLifecycleRule(
    rule: LifecycleRule,
    options: AddLifecycleRuleOptions,
    callback: SetBucketMetadataCallback
  ): void;
  addLifecycleRule(
    rule: LifecycleRule,
    callback: SetBucketMetadataCallback
  ): void;
  /**
   * @typedef {object} AddLifecycleRuleOptions Configuration options for Bucket#addLifecycleRule().
   * @property {string} [append=true] The new rules will be appended to any
   *     pre-existing rules.
   */
  /**
   * Add an object lifecycle management rule to the bucket.
   *
   * By default, an Object Lifecycle Management rule provided to this method
   * will be included to the existing policy. To replace all existing rules,
   * supply the `options` argument, setting `append` to `false`.
   *
   * @see [Object Lifecycle Management]{@link https://cloud.google.com/storage/docs/lifecycle}
   * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
   *
   * @param {LifecycleRule} rule The new lifecycle rule to be added to objects
   *     in this bucket.
   * @param {string} [rule.storageClass] When using the `setStorageClass`
   *     action, provide this option to dictate which storage class the object
   *     should update to.
   * @param {AddLifecycleRuleOptions} [options] Configuration object.
   * @param {boolean} [options.append=true] Append the new rule to the existing
   *     policy.
   * @param {SetBucketMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetBucketMetadataResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Automatically have an object deleted from this bucket once it is 3 years
   * // of age.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     age: 365 * 3 // Specified in days.
   *   }
   * }, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   const lifecycleRules = bucket.metadata.lifecycle.rule;
   *
   *   // Iterate over the Object Lifecycle Management rules on this bucket.
   *   lifecycleRules.forEach(lifecycleRule => {});
   * });
   *
   * //-
   * // By default, the rule you provide will be added to the existing policy.
   * // Optionally, you can disable this behavior to replace all of the
   * // pre-existing rules.
   * //-
   * const options = {
   *   append: false
   * };
   *
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     age: 365 * 3 // Specified in days.
   *   }
   * }, options, function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // All rules have been replaced with the new "delete" rule.
   *
   *   // Iterate over the Object Lifecycle Management rules on this bucket.
   *   lifecycleRules.forEach(lifecycleRule => {});
   * });
   *
   * //-
   * // For objects created before 2018, "downgrade" the storage class.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'setStorageClass',
   *   storageClass: 'COLDLINE',
   *   condition: {
   *     createdBefore: new Date('2018')
   *   }
   * }, function(err, apiResponse) {});
   *
   * //-
   * // Delete objects created before 2016 which have the Coldline storage
   * // class.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     matchesStorageClass: [
   *       'COLDLINE'
   *     ],
   *     createdBefore: new Date('2016')
   *   }
   * }, function(err, apiResponse) {});
   *
   * //-
   * // Delete object that has a noncurrent timestamp that is at least 100 days.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     daysSinceNoncurrentTime: 100
   *   }
   * }, function(err, apiResponse) {});
   *
   * //-
   * // Delete object that has a noncurrent timestamp before 2020-01-01.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     noncurrentTimeBefore: new Date('2020-01-01')
   *   }
   * }, function(err, apiResponse) {});
   *
   * //-
   * // Delete object that has a customTime that is at least 100 days.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     daysSinceCustomTime: 100
   *   }
   * }, function(err, apiResponse) ());
   *
   * //-
   * // Delete object that has a customTime before 2020-01-01.
   * //-
   * bucket.addLifecycleRule({
   *   action: 'delete',
   *   condition: {
   *     customTimeBefore: new Date('2020-01-01')
   *   }
   * }, function(err, apiResponse) {});
   */
  addLifecycleRule(
    rule: LifecycleRule,
    optionsOrCallback?: AddLifecycleRuleOptions | SetBucketMetadataCallback,
    callback?: SetBucketMetadataCallback
  ): Promise<SetBucketMetadataResponse> | void {
    let options;

    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    options = options || {};
    callback = callback || util.noop;

    const newLifecycleRules = arrify(rule).map(rule => {
      if (typeof rule.action === 'object') {
        // This is a raw-formatted rule object, the way the API expects.
        // Just pass it through as-is.
        return rule;
      }

      const apiFormattedRule = {} as LifecycleRule;

      apiFormattedRule.condition = {};
      apiFormattedRule.action = {
        type: rule.action,
      };

      // @TODO: Remove if the API becomes less picky.
      if (rule.action === 'delete') {
        apiFormattedRule.action.type = 'Delete';
      }

      if (rule.storageClass) {
        apiFormattedRule.action.storageClass = rule.storageClass;
      }

      for (const condition in rule.condition) {
        if (rule.condition[condition] instanceof Date) {
          apiFormattedRule.condition[condition] = (rule.condition[
            condition
          ] as Date)
            .toISOString()
            .replace(/T.+$/, '');
        } else {
          apiFormattedRule.condition[condition] = rule.condition[condition];
        }
      }

      return apiFormattedRule;
    });

    if (options.append === false) {
      this.setMetadata({lifecycle: {rule: newLifecycleRules}}, callback);
      return;
    }

    // The default behavior appends the previously-defined lifecycle rules with
    // the new ones just passed in by the user.
    this.getMetadata((err: ApiError | null, metadata: Metadata) => {
      if (err) {
        callback!(err);
        return;
      }

      const currentLifecycleRules = arrify(
        metadata.lifecycle && metadata.lifecycle.rule
      );

      this.setMetadata(
        {
          lifecycle: {
            rule: currentLifecycleRules.concat(newLifecycleRules),
          },
        },
        callback!
      );
    });
  }

  combine(
    sources: string[] | File[],
    destination: string | File,
    options?: CombineOptions
  ): Promise<CombineResponse>;
  combine(
    sources: string[] | File[],
    destination: string | File,
    options: CombineOptions,
    callback: CombineCallback
  ): void;
  combine(
    sources: string[] | File[],
    destination: string | File,
    callback: CombineCallback
  ): void;
  /**
   * @typedef {object} CombineOptions
   * @property {string} [kmsKeyName] Resource name of the Cloud KMS key, of
   *     the form
   *     `projects/my-project/locations/location/keyRings/my-kr/cryptoKeys/my-key`,
   *     that will be used to encrypt the object. Overwrites the object
   * metadata's `kms_key_name` value, if any.
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @callback CombineCallback
   * @param {?Error} err Request error, if any.
   * @param {File} newFile The new {@link File}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * @typedef {array} CombineResponse
   * @property {File} 0 The new {@link File}.
   * @property {object} 1 The full API response.
   */
  /**
   * Combine multiple files into one new file.
   *
   * @see [Objects: compose API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/compose}
   *
   * @throws {Error} if a non-array is provided as sources argument.
   * @throws {Error} if no sources are provided.
   * @throws {Error} if no destination is provided.
   *
   * @param {string[]|File[]} sources The source files that will be
   *     combined.
   * @param {string|File} destination The file you would like the
   *     source files combined into.
   * @param {CombineOptions} [options] Configuration options.
   * @param {CombineCallback} [callback] Callback function.
   * @returns {Promise<CombineResponse>}
   *
   * @example
   * const logBucket = storage.bucket('log-bucket');
   *
   * const sources = [
   *   logBucket.file('2013-logs.txt'),
   *   logBucket.file('2014-logs.txt')
   * ];
   *
   * const allLogs = logBucket.file('all-logs.txt');
   *
   * logBucket.combine(sources, allLogs, function(err, newFile, apiResponse) {
   *   // newFile === allLogs
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * logBucket.combine(sources, allLogs).then(function(data) {
   *   const newFile = data[0];
   *   const apiResponse = data[1];
   * });
   */
  combine(
    sources: string[] | File[],
    destination: string | File,
    optionsOrCallback?: CombineOptions | CombineCallback,
    callback?: CombineCallback
  ): Promise<CombineResponse> | void {
    if (!Array.isArray(sources) || sources.length === 0) {
      throw new Error('You must provide at least one source file.');
    }

    if (!destination) {
      throw new Error('A destination file must be specified.');
    }

    let options: CombineOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    const convertToFile = (file: string | File): File => {
      if (file instanceof File) {
        return file;
      }
      return this.file(file);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sources = (sources as any).map(convertToFile);
    const destinationFile = convertToFile(destination);
    callback = callback || util.noop;

    if (!destinationFile.metadata.contentType) {
      const destinationContentType = mime.contentType(destinationFile.name);

      if (destinationContentType) {
        destinationFile.metadata.contentType = destinationContentType;
      }
    }

    // Make the request from the destination File object.
    destinationFile.request(
      {
        method: 'POST',
        uri: '/compose',
        json: {
          destination: {
            contentType: destinationFile.metadata.contentType,
          },
          sourceObjects: (sources as File[]).map(source => {
            const sourceObject = {
              name: source.name,
            } as SourceObject;

            if (source.metadata && source.metadata.generation) {
              sourceObject.generation = source.metadata.generation;
            }

            return sourceObject;
          }),
        },
        qs: options,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }

        callback!(null, destinationFile, resp);
      }
    );
  }

  createChannel(
    id: string,
    config: CreateChannelConfig,
    options?: CreateChannelOptions
  ): Promise<CreateChannelResponse>;
  createChannel(
    id: string,
    config: CreateChannelConfig,
    callback: CreateChannelCallback
  ): void;
  createChannel(
    id: string,
    config: CreateChannelConfig,
    options: CreateChannelOptions,
    callback: CreateChannelCallback
  ): void;
  /**
   * See a [Objects:
   * watchAll request
   * body](https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll).
   *
   * @typedef {object} CreateChannelConfig
   * @property {string} address The address where notifications are
   *     delivered for this channel.
   * @extends WatchAllOptions
   */
  /**
   * @typedef {object} CreateChannelOptions
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @typedef {array} CreateChannelResponse
   * @property {Channel} 0 The new {@link Channel}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateChannelCallback
   * @param {?Error} err Request error, if any.
   * @param {Channel} channel The new {@link Channel}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Create a channel that will be notified when objects in this bucket changes.
   *
   * @throws {Error} If an ID is not provided.
   * @throws {Error} If an address is not provided.
   *
   * @see [Objects: watchAll API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/watchAll}
   *
   * @param {string} id The ID of the channel to create.
   * @param {CreateChannelConfig} config Configuration for creating channel.
   * @param {CreateChannelOptions} [options] Configuration options.
   * @param {CreateChannelCallback} [callback] Callback function.
   * @returns {Promise<CreateChannelResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   * const id = 'new-channel-id';
   *
   * const config = {
   *   address: 'https://...'
   * };
   *
   * bucket.createChannel(id, config, function(err, channel, apiResponse) {
   *   if (!err) {
   *     // Channel created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.createChannel(id, config).then(function(data) {
   *   const channel = data[0];
   *   const apiResponse = data[1];
   * });
   */
  createChannel(
    id: string,
    config: CreateChannelConfig,
    optionsOrCallback?: CreateChannelOptions | CreateChannelCallback,
    callback?: CreateChannelCallback
  ): Promise<CreateChannelResponse> | void {
    if (typeof id !== 'string') {
      throw new Error('An ID is required to create a channel.');
    }

    if (typeof config.address !== 'string') {
      throw new Error('An address is required to create a channel.');
    }

    let options: CreateChannelOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    this.request(
      {
        method: 'POST',
        uri: '/o/watch',
        json: Object.assign(
          {
            id,
            type: 'web_hook',
          },
          config
        ),
        qs: options,
      },
      (err, apiResponse) => {
        if (err) {
          callback!(err, null, apiResponse);
          return;
        }

        const resourceId = apiResponse.resourceId;
        const channel = this.storage.channel(id, resourceId);

        channel.metadata = apiResponse;

        callback!(null, channel, apiResponse);
      }
    );
  }

  createNotification(
    topic: string,
    options?: CreateNotificationOptions
  ): Promise<CreateNotificationResponse>;
  createNotification(
    topic: string,
    options: CreateNotificationOptions,
    callback: CreateNotificationCallback
  ): void;
  createNotification(topic: string, callback: CreateNotificationCallback): void;
  /**
   * Metadata to set for the Notification.
   *
   * @typedef {object} CreateNotificationOptions
   * @property {object} [customAttributes] An optional list of additional
   *     attributes to attach to each Cloud PubSub message published for this
   *     notification subscription.
   * @property {string[]} [eventTypes] If present, only send notifications about
   *     listed event types. If empty, sent notifications for all event types.
   * @property {string} [objectNamePrefix] If present, only apply this
   *     notification configuration to object names that begin with this prefix.
   * @property {string} [payloadFormat] The desired content of the Payload.
   *     Defaults to `JSON_API_V1`.
   *
   *     Acceptable values are:
   *     - `JSON_API_V1`
   *
   *     - `NONE`
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @callback CreateNotificationCallback
   * @param {?Error} err Request error, if any.
   * @param {Notification} notification The new {@link Notification}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * @typedef {array} CreateNotificationResponse
   * @property {Notification} 0 The new {@link Notification}.
   * @property {object} 1 The full API response.
   */
  /**
   * Creates a notification subscription for the bucket.
   *
   * @see [Notifications: insert]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/insert}
   *
   * @param {Topic|string} topic The Cloud PubSub topic to which this
   *     subscription publishes. If the project ID is omitted, the current
   * project ID will be used.
   *
   *     Acceptable formats are:
   *     - `projects/grape-spaceship-123/topics/my-topic`
   *
   *     - `my-topic`
   * @param {CreateNotificationOptions} [options] Metadata to set for the
   *     notification.
   * @param {CreateNotificationCallback} [callback] Callback function.
   * @returns {Promise<CreateNotificationResponse>}
   * @throws {Error} If a valid topic is not provided.
   * @see Notification#create
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const myBucket = storage.bucket('my-bucket');
   *
   * const callback = function(err, notification, apiResponse) {
   *   if (!err) {
   *     // The notification was created successfully.
   *   }
   * };
   *
   * myBucket.createNotification('my-topic', callback);
   *
   * //-
   * // Configure the nofiication by providing Notification metadata.
   * //-
   * const metadata = {
   *   objectNamePrefix: 'prefix-'
   * };
   *
   * myBucket.createNotification('my-topic', metadata, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * myBucket.createNotification('my-topic').then(function(data) {
   *   const notification = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/notifications.js</caption>
   * region_tag:storage_create_notification
   * Another example:
   */
  createNotification(
    topic: string,
    optionsOrCallback?: CreateNotificationOptions | CreateNotificationCallback,
    callback?: CreateNotificationCallback
  ): Promise<CreateNotificationResponse> | void {
    let options: CreateNotificationOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    const topicIsObject = topic !== null && typeof topic === 'object';
    if (topicIsObject && util.isCustomType(topic, 'pubsub/topic')) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      topic = (topic as any).name;
    }

    if (typeof topic !== 'string') {
      throw new Error('A valid topic name is required.');
    }

    const body = Object.assign({topic}, options);

    if (body.topic.indexOf('projects') !== 0) {
      body.topic = 'projects/{{projectId}}/topics/' + body.topic;
    }

    body.topic = '//pubsub.googleapis.com/' + body.topic;

    if (!body.payloadFormat) {
      body.payloadFormat = 'JSON_API_V1';
    }

    const query = {} as CreateNotificationQuery;

    if (body.userProject) {
      query.userProject = body.userProject;
      delete body.userProject;
    }

    this.request(
      {
        method: 'POST',
        uri: '/notificationConfigs',
        json: snakeize(body),
        qs: query,
      },
      (err, apiResponse) => {
        if (err) {
          callback!(err, null, apiResponse);
          return;
        }

        const notification = this.notification(apiResponse.id);

        notification.metadata = apiResponse;

        callback!(null, notification, apiResponse);
      }
    );
  }

  deleteFiles(query?: DeleteFilesOptions): Promise<void>;
  deleteFiles(callback: DeleteFilesCallback): void;
  deleteFiles(query: DeleteFilesOptions, callback: DeleteFilesCallback): void;
  /**
   * @typedef {object} DeleteFilesOptions Query object. See {@link Bucket#getFiles}
   *     for all of the supported properties.
   * @property {boolean} [force] Suppress errors until all files have been
   *     processed.
   */
  /**
   * @callback DeleteFilesCallback
   * @param {?Error|?Error[]} err Request error, if any, or array of errors from
   *     files that were not able to be deleted.
   * @param {object} [apiResponse] The full API response.
   */
  /**
   * Iterate over the bucket's files, calling `file.delete()` on each.
   *
   * <strong>This is not an atomic request.</strong> A delete attempt will be
   * made for each file individually. Any one can fail, in which case only a
   * portion of the files you intended to be deleted would have.
   *
   * Operations are performed in parallel, up to 10 at once. The first error
   * breaks the loop and will execute the provided callback with it. Specify
   * `{ force: true }` to suppress the errors until all files have had a chance
   * to be processed.
   *
   * The `query` object passed as the first argument will also be passed to
   * {@link Bucket#getFiles}.
   *
   * @see [Objects: delete API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/delete}
   *
   * @param {DeleteFilesOptions} [query] Query object. See {@link Bucket#getFiles}
   * @param {DeleteFilesCallback} [callback] Callback function.
   * @returns {Promise}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Delete all of the files in the bucket.
   * //-
   * bucket.deleteFiles(function(err) {});
   *
   * //-
   * // By default, if a file cannot be deleted, this method will stop deleting
   * // files from your bucket. You can override this setting with `force:
   * // true`.
   * //-
   * bucket.deleteFiles({
   *   force: true
   * }, function(errors) {
   *   // `errors`:
   *   //    Array of errors if any occurred, otherwise null.
   * });
   *
   * //-
   * // The first argument to this method acts as a query to
   * // {@link Bucket#getFiles}. As an example, you can delete files
   * // which match a prefix.
   * //-
   * bucket.deleteFiles({
   *   prefix: 'images/'
   * }, function(err) {
   *   if (!err) {
   *     // All files in the `images` directory have been deleted.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.deleteFiles().then(function() {});
   */
  deleteFiles(
    queryOrCallback?: DeleteFilesOptions | DeleteFilesCallback,
    callback?: DeleteFilesCallback
  ): Promise<void> | void {
    let query: DeleteFilesOptions = {};
    if (typeof queryOrCallback === 'function') {
      callback = queryOrCallback;
    } else if (queryOrCallback) {
      query = queryOrCallback;
    }

    const MAX_PARALLEL_LIMIT = 10;
    const errors = [] as Error[];

    const deleteFile = (file: File) => {
      return file.delete(query).catch(err => {
        if (!query.force) {
          throw err;
        }
        errors.push(err);
      });
    };

    this.getFiles(query)
      .then(([files]) => {
        const limit = pLimit(MAX_PARALLEL_LIMIT);
        const promises = files!.map(file => {
          return limit(() => deleteFile(file));
        });
        return Promise.all(promises);
      })
      .then(() => callback!(errors.length > 0 ? errors : null), callback!);
  }

  deleteLabels(labels?: string | string[]): Promise<DeleteLabelsResponse>;
  deleteLabels(callback: DeleteLabelsCallback): void;
  deleteLabels(labels: string | string[], callback: DeleteLabelsCallback): void;
  /**
   * @typedef {array} DeleteLabelsResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DeleteLabelsCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata Bucket's metadata.
   */
  /**
   * Delete one or more labels from this bucket.
   *
   * @param {string|string[]} labels The labels to delete. If no labels are
   *     provided, all of the labels are removed.
   * @param {DeleteLabelsCallback} [callback] Callback function.
   * @returns {Promise<DeleteLabelsResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Delete all of the labels from this bucket.
   * //-
   * bucket.deleteLabels(function(err, apiResponse) {});
   *
   * //-
   * // Delete a single label.
   * //-
   * bucket.deleteLabels('labelone', function(err, apiResponse) {});
   *
   * //-
   * // Delete a specific set of labels.
   * //-
   * bucket.deleteLabels([
   *   'labelone',
   *   'labeltwo'
   * ], function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.deleteLabels().then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  deleteLabels(
    labelsOrCallback?: string | string[] | DeleteLabelsCallback,
    callback?: DeleteLabelsCallback
  ): Promise<DeleteLabelsResponse> | void {
    let labels = new Array<string>();
    if (typeof labelsOrCallback === 'function') {
      callback = labelsOrCallback;
    } else if (labelsOrCallback) {
      labels = arrify(labelsOrCallback);
    }

    const deleteLabels = (labels: string[]) => {
      const nullLabelMap = labels.reduce((nullLabelMap, labelKey) => {
        (nullLabelMap as {[index: string]: null})[labelKey] = null;
        return nullLabelMap;
      }, {});

      this.setLabels(nullLabelMap, callback!);
    };

    if (labels.length === 0) {
      this.getLabels((err, labels) => {
        if (err) {
          callback!(err);
          return;
        }
        deleteLabels(Object.keys(labels!));
      });
    } else {
      deleteLabels(labels);
    }
  }

  disableRequesterPays(): Promise<DisableRequesterPaysResponse>;
  disableRequesterPays(callback: DisableRequesterPaysCallback): void;
  /**
   * @typedef {array} DisableRequesterPaysResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DisableRequesterPaysCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * <div class="notice">
   *   <strong>Early Access Testers Only</strong>
   *   <p>
   *     This feature is not yet widely-available.
   *   </p>
   * </div>
   *
   * Disable `requesterPays` functionality from this bucket.
   *
   * @param {DisableRequesterPaysCallback} [callback] Callback function.
   * @returns {Promise<DisableRequesterPaysCallback>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.disableRequesterPays(function(err, apiResponse) {
   *   if (!err) {
   *     // requesterPays functionality disabled successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.disableRequesterPays().then(function(data) {
   *   const apiResponse = data[0];
   * });
   *
   * @example <caption>include:samples/requesterPays.js</caption>
   * region_tag:storage_disable_requester_pays
   * Example of disabling requester pays:
   */
  disableRequesterPays(
    callback?: DisableRequesterPaysCallback
  ): Promise<DisableRequesterPaysResponse> | void {
    this.setMetadata(
      {
        billing: {
          requesterPays: false,
        },
      },
      callback || util.noop
    );
  }

  enableLogging(
    config: EnableLoggingOptions
  ): Promise<SetBucketMetadataResponse>;
  enableLogging(
    config: EnableLoggingOptions,
    callback: SetBucketMetadataCallback
  ): void;
  /**
   * Configuration object for enabling logging.
   *
   * @typedef {object} EnableLoggingOptions
   * @property {string|Bucket} [bucket] The bucket for the log entries. By
   *     default, the current bucket is used.
   * @property {string} prefix A unique prefix for log object names.
   */
  /**
   * Enable logging functionality for this bucket. This will make two API
   * requests, first to grant Cloud Storage WRITE permission to the bucket, then
   * to set the appropriate configuration on the Bucket's metadata.
   *
   * @param {EnableLoggingOptions} config Configuration options.
   * @param {SetBucketMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetBucketMetadataResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * const config = {
   *   prefix: 'log'
   * };
   *
   * bucket.enableLogging(config, function(err, apiResponse) {
   *   if (!err) {
   *     // Logging functionality enabled successfully.
   *   }
   * });
   *
   * @example <caption>Optionally, provide a destination bucket.</caption>
   * const config = {
   *   prefix: 'log',
   *   bucket: 'destination-bucket'
   * };
   *
   * bucket.enableLogging(config, function(err, apiResponse) {});
   *
   * @example <caption>If the callback is omitted, we'll return a Promise.</caption>
   * bucket.enableLogging(config).then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  enableLogging(
    config: EnableLoggingOptions,
    callback?: SetBucketMetadataCallback
  ): Promise<SetBucketMetadataResponse> | void {
    if (
      !config ||
      typeof config === 'function' ||
      typeof config.prefix === 'undefined'
    ) {
      throw new Error('A configuration object with a prefix is required.');
    }

    const logBucket = config.bucket
      ? (config.bucket as Bucket).id || config.bucket
      : this.id;

    (async () => {
      let setMetadataResponse;

      try {
        const [policy] = await this.iam.getPolicy();
        policy.bindings.push({
          members: ['group:cloud-storage-analytics@google.com'],
          role: 'roles/storage.objectCreator',
        });
        await this.iam.setPolicy(policy);
        [setMetadataResponse] = await this.setMetadata({
          logging: {
            logBucket,
            logObjectPrefix: config.prefix,
          },
        });
      } catch (e) {
        callback!(e);
        return;
      }

      callback!(null, setMetadataResponse);
    })();
  }

  enableRequesterPays(): Promise<EnableRequesterPaysResponse>;
  enableRequesterPays(callback: EnableRequesterPaysCallback): void;
  /**
   * @typedef {array} EnableRequesterPaysResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback EnableRequesterPaysCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * <div class="notice">
   *   <strong>Early Access Testers Only</strong>
   *   <p>
   *     This feature is not yet widely-available.
   *   </p>
   * </div>
   *
   * Enable `requesterPays` functionality for this bucket. This enables you, the
   * bucket owner, to have the requesting user assume the charges for the access
   * to your bucket and its contents.
   *
   * @param {EnableRequesterPaysCallback} [callback] Callback function.
   * @returns {Promise<EnableRequesterPaysResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.enableRequesterPays(function(err, apiResponse) {
   *   if (!err) {
   *     // requesterPays functionality enabled successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.enableRequesterPays().then(function(data) {
   *   const apiResponse = data[0];
   * });
   *
   * @example <caption>include:samples/requesterPays.js</caption>
   * region_tag:storage_enable_requester_pays
   * Example of enabling requester pays:
   */
  enableRequesterPays(
    callback?: EnableRequesterPaysCallback
  ): Promise<EnableRequesterPaysResponse> | void {
    this.setMetadata(
      {
        billing: {
          requesterPays: true,
        },
      },
      callback || util.noop
    );
  }

  /**
   * Create a {@link File} object. See {@link File} to see how to handle
   * the different use cases you may have.
   *
   * @param {string} name The name of the file in this bucket.
   * @param {object} [options] Configuration options.
   * @param {string|number} [options.generation] Only use a specific revision of
   *     this file.
   * @param {string} [options.encryptionKey] A custom encryption key. See
   *     [Customer-supplied Encryption
   * Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
   * @param {string} [options.kmsKeyName] The name of the Cloud KMS key that will
   *     be used to encrypt the object. Must be in the format:
   *     `projects/my-project/locations/location/keyRings/my-kr/cryptoKeys/my-key`.
   *     KMS key ring must use the same location as the bucket.
   * @returns {File}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   * const file = bucket.file('my-existing-file.png');
   */
  file(name: string, options?: FileOptions): File {
    if (!name) {
      throw Error('A file name must be specified.');
    }

    return new File(this, name, options);
  }

  getFiles(query?: GetFilesOptions): Promise<GetFilesResponse>;
  getFiles(query: GetFilesOptions, callback: GetFilesCallback): void;
  getFiles(callback: GetFilesCallback): void;
  /**
   * @typedef {array} GetFilesResponse
   * @property {File[]} 0 Array of {@link File} instances.
   * @param {object} nextQuery 1 A query object to receive more results.
   * @param {object} apiResponse 2 The full API response.
   */
  /**
   * @callback GetFilesCallback
   * @param {?Error} err Request error, if any.
   * @param {File[]} files Array of {@link File} instances.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Query object for listing files.
   *
   * @typedef {object} GetFilesOptions
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {string} [delimiter] Results will contain only objects whose
   *     names, aside from the prefix, do not contain delimiter. Objects whose
   *     names, aside from the prefix, contain delimiter will have their name
   *     truncated after the delimiter, returned in `apiResponse.prefixes`.
   *     Duplicate prefixes are omitted.
   * @property {string} [directory] Filter results based on a directory name, or
   *     more technically, a "prefix".
   * @property {string} [endOffset] Filter results to objects whose names are
   * lexicographically before endOffset. If startOffset is also set, the objects
   * listed have names between startOffset (inclusive) and endOffset (exclusive).
   * @property {boolean} [includeTrailingDelimiter] If true, objects that end in
   * exactly one instance of delimiter have their metadata included in items[]
   * in addition to the relevant part of the object name appearing in prefixes[].
   * @property {string} [prefix] Filter results to objects whose names begin
   *     with this prefix.
   * @property {number} [maxApiCalls] Maximum number of API calls to make.
   * @property {number} [maxResults] Maximum number of items plus prefixes to
   *     return per call.
   *     Note: By default will handle pagination automatically
   *     if more than 1 page worth of results are requested per call.
   *     When `autoPaginate` is set to `false` the smaller of `maxResults`
   *     or 1 page of results will be returned per call.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {string} [startOffset] Filter results to objects whose names are
   * lexicographically equal to or after startOffset. If endOffset is also set,
   * the objects listed have names between startOffset (inclusive) and endOffset (exclusive).
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   * @property {boolean} [versions] If true, returns File objects scoped to
   *     their versions.
   */
  /**
   * Get {@link File} objects for the files currently in the bucket.
   *
   * @see [Objects: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/list}
   *
   * @param {GetFilesOptions} [query] Query object for listing files.
   * @param {GetFilesCallback} [callback] Callback function.
   * @returns {Promise<GetFilesResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.getFiles(function(err, files) {
   *   if (!err) {
   *     // files is an array of File objects.
   *   }
   * });
   *
   * //-
   * // If your bucket has versioning enabled, you can get all of your files
   * // scoped to their generation.
   * //-
   * bucket.getFiles({
   *   versions: true
   * }, function(err, files) {
   *   // Each file is scoped to its generation.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * const callback = function(err, files, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     bucket.getFiles(nextQuery, callback);
   *   }
   *
   *   // The `metadata` property is populated for you with the metadata at the
   *   // time of fetching.
   *   files[0].metadata;
   *
   *   // However, in cases where you are concerned the metadata could have
   *   // changed, use the `getMetadata` method.
   *   files[0].getMetadata(function(err, metadata) {});
   * };
   *
   * bucket.getFiles({
   *   autoPaginate: false
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.getFiles().then(function(data) {
   *   const files = data[0];
   * });
   *
   * @example <caption><h6>Simulating a File System</h6><p>With `autoPaginate: false`, it's possible to iterate over files which incorporate a common structure using a delimiter.</p><p>Consider the following remote objects:</p><ol><li>"a"</li><li>"a/b/c/d"</li><li>"b/d/e"</li></ol><p>Using a delimiter of `/` will return a single file, "a".</p><p>`apiResponse.prefixes` will return the "sub-directories" that were found:</p><ol><li>"a/"</li><li>"b/"</li></ol></caption>
   * bucket.getFiles({
   *   autoPaginate: false,
   *   delimiter: '/'
   * }, function(err, files, nextQuery, apiResponse) {
   *   // files = [
   *   //   {File} // File object for file "a"
   *   // ]
   *
   *   // apiResponse.prefixes = [
   *   //   'a/',
   *   //   'b/'
   *   // ]
   * });
   *
   * @example <caption>Using prefixes, it's now possible to simulate a file system with follow-up requests.</caption>
   * bucket.getFiles({
   *   autoPaginate: false,
   *   delimiter: '/',
   *   prefix: 'a/'
   * }, function(err, files, nextQuery, apiResponse) {
   *   // No files found within "directory" a.
   *   // files = []
   *
   *   // However, a "sub-directory" was found.
   *   // This prefix can be used to continue traversing the "file system".
   *   // apiResponse.prefixes = [
   *   //   'a/b/'
   *   // ]
   * });
   *
   * @example <caption>include:samples/files.js</caption>
   * region_tag:storage_list_files
   * Another example:
   *
   * @example <caption>include:samples/files.js</caption>
   * region_tag:storage_list_files_with_prefix
   * Example of listing files, filtered by a prefix:
   */
  getFiles(
    queryOrCallback?: GetFilesOptions | GetFilesCallback,
    callback?: GetFilesCallback
  ): void | Promise<GetFilesResponse> {
    let query = typeof queryOrCallback === 'object' ? queryOrCallback : {};
    if (!callback) {
      callback = queryOrCallback as GetFilesCallback;
    }
    query = Object.assign({}, query);

    if (query.directory) {
      query.prefix = `${query.directory}/`.replace(/\/*$/, '/');
      delete query.directory;
    }

    this.request(
      {
        uri: '/o',
        qs: query,
      },
      (err, resp) => {
        if (err) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (callback as any)(err, null, null, resp);
          return;
        }

        const files = arrify(resp.items).map((file: Metadata) => {
          const options = {} as FileOptions;

          if (query.versions) {
            options.generation = file.generation;
          }

          if (file.kmsKeyName) {
            options.kmsKeyName = file.kmsKeyName;
          }

          const fileInstance = this.file(file.name, options);
          fileInstance.metadata = file;

          return fileInstance;
        });

        let nextQuery: object | null = null;
        if (resp.nextPageToken) {
          nextQuery = Object.assign({}, query, {
            pageToken: resp.nextPageToken,
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (callback as any)(null, files, nextQuery, resp);
      }
    );
  }

  getLabels(options: GetLabelsOptions): Promise<GetLabelsResponse>;
  getLabels(callback: GetLabelsCallback): void;
  getLabels(options: GetLabelsOptions, callback: GetLabelsCallback): void;
  /**
   * @typedef {object} GetLabelsOptions Configuration options for Bucket#getLabels().
   * @param {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @typedef {array} GetLabelsResponse
   * @property {object} 0 Object of labels currently set on this bucket.
   */
  /**
   * @callback GetLabelsCallback
   * @param {?Error} err Request error, if any.
   * @param {object} labels Object of labels currently set on this bucket.
   */
  /**
   * Get the labels currently set on this bucket.
   *
   * @param {object} [options] Configuration options.
   * @param {string} [options.userProject] The ID of the project which will be
   *     billed for the request.
   * @param {GetLabelsCallback} [callback] Callback function.
   * @returns {Promise<GetLabelsCallback>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.getLabels(function(err, labels) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // labels = {
   *   //   label: 'labelValue',
   *   //   ...
   *   // }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.getLabels().then(function(data) {
   *   const labels = data[0];
   * });
   */
  getLabels(
    optionsOrCallback?: GetLabelsOptions | GetLabelsCallback,
    callback?: GetLabelsCallback
  ): Promise<GetLabelsResponse> | void {
    let options: GetLabelsOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    this.getMetadata(
      options,
      (err: ApiError | null, metadata: Metadata | null) => {
        if (err) {
          callback!(err, null);
          return;
        }

        callback!(null, metadata.labels || {});
      }
    );
  }

  getNotifications(
    options?: GetNotificationsOptions
  ): Promise<GetNotificationsResponse>;
  getNotifications(callback: GetNotificationsCallback): void;
  getNotifications(
    options: GetNotificationsOptions,
    callback: GetNotificationsCallback
  ): void;
  /**
   * @typedef {object} GetNotificationOptions Configuration options for Bucket#getNotification().
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @callback GetNotificationsCallback
   * @param {?Error} err Request error, if any.
   * @param {Notification[]} notifications Array of {@link Notification}
   *     instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * @typedef {array} GetNotificationsResponse
   * @property {Notification[]} 0 Array of {@link Notification} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * Retrieves a list of notification subscriptions for a given bucket.
   *
   * @see [Notifications: list]{@link https://cloud.google.com/storage/docs/json_api/v1/notifications/list}
   *
   * @param {GetNotificationsOptions} [options] Configuration options.
   * @param {GetNotificationsCallback} [callback] Callback function.
   * @returns {Promise<GetNotificationsResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   *
   * bucket.getNotifications(function(err, notifications, apiResponse) {
   *   if (!err) {
   *     // notifications is an array of Notification objects.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.getNotifications().then(function(data) {
   *   const notifications = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/notifications.js</caption>
   * region_tag:storage_list_notifications
   * Another example:
   */
  getNotifications(
    optionsOrCallback?: GetNotificationsOptions | GetNotificationsCallback,
    callback?: GetNotificationsCallback
  ): Promise<GetNotificationsResponse> | void {
    let options: GetNotificationsOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else if (optionsOrCallback) {
      options = optionsOrCallback;
    }

    this.request(
      {
        uri: '/notificationConfigs',
        qs: options,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }

        const notifications = arrify(resp.items).map(
          (notification: Metadata) => {
            const notificationInstance = this.notification(notification.id);
            notificationInstance.metadata = notification;
            return notificationInstance;
          }
        );

        callback!(null, notifications, resp);
      }
    );
  }

  getSignedUrl(cfg: GetBucketSignedUrlConfig): Promise<GetSignedUrlResponse>;
  getSignedUrl(
    cfg: GetBucketSignedUrlConfig,
    callback: GetSignedUrlCallback
  ): void;
  /**
   * @typedef {array} GetSignedUrlResponse
   * @property {object} 0 The signed URL.
   */
  /**
   * @callback GetSignedUrlCallback
   * @param {?Error} err Request error, if any.
   * @param {object} url The signed URL.
   */
  /**
   * @typedef {object} GetBucketSignedUrlConfig
   * @property {string} action Currently only supports "list" (HTTP: GET).
   * @property {*} expires A timestamp when this link will expire. Any value
   *     given is passed to `new Date()`.
   *     Note: 'v4' supports maximum duration of 7 days (604800 seconds) from now.
   * @property {string} [version='v2'] The signing version to use, either
   *     'v2' or 'v4'.
   * @param {boolean} [virtualHostedStyle=false] Use virtual hosted-style
   *     URLs ('https://mybucket.storage.googleapis.com/...') instead of path-style
   *     ('https://storage.googleapis.com/mybucket/...'). Virtual hosted-style URLs
   *     should generally be preferred instaed of path-style URL.
   *     Currently defaults to `false` for path-style, although this may change in a
   *     future major-version release.
   * @property {string} [cname] The cname for this bucket, i.e.,
   *     "https://cdn.example.com".
   *     See [reference]{@link https://cloud.google.com/storage/docs/access-control/signed-urls#example}
   * @property {object} [extensionHeaders] If these headers are used, the
   *     server will check to make sure that the client provides matching
   * values. See [Canonical extension
   * headers](https://cloud.google.com/storage/docs/access-control/signed-urls#about-canonical-extension-headers)
   *     for the requirements of this feature, most notably:
   *       - The header name must be prefixed with `x-goog-`
   *       - The header name must be all lowercase
   *     Note: Multi-valued header passed as an array in the extensionHeaders
   *           object is converted into a string, delimited by `,` with
   *           no space. Requests made using the signed URL will need to
   *           delimit multi-valued headers using a single `,` as well, or
   *           else the server will report a mismatched signature.
   * @param {object} [config.queryParams] Additional query parameters to include
   *     in the signed URL.
   */
  /**
   * Get a signed URL to allow limited time access to a bucket.
   *
   * In Google Cloud Platform environments, such as Cloud Functions and App
   * Engine, you usually don't provide a `keyFilename` or `credentials` during
   * instantiation. In those environments, we call the
   * [signBlob
   * API](https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/signBlob)
   * to create a signed URL. That API requires either the
   * `https://www.googleapis.com/auth/iam` or
   * `https://www.googleapis.com/auth/cloud-platform` scope, so be sure they are
   * enabled.
   *
   * @see [Signed URLs Reference]{@link https://cloud.google.com/storage/docs/access-control/signed-urls}
   *
   * @throws {Error} if an expiration timestamp from the past is given.
   *
   * @param {GetBucketSignedUrlConfig} config Configuration object.
   * @param {GetSignedUrlCallback} [callback] Callback function.
   * @returns {Promise<GetSignedUrlResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const myBucket = storage.bucket('my-bucket');
   *
   * //-
   * // Generate a URL that allows temporary access to list files in a bucket.
   * //-
   * const request = require('request');
   *
   * const config = {
   *   action: 'list',
   *   expires: '03-17-2025'
   * };
   *
   * bucket.getSignedUrl(config, function(err, url) {
   *   if (err) {
   *     console.error(err);
   *     return;
   *   }
   *
   *   // The bucket is now available to be listed from this URL.
   *   request(url, function(err, resp) {
   *     // resp.statusCode = 200
   *   });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.getSignedUrl(config).then(function(data) {
   *   const url = data[0];
   * });
   */
  getSignedUrl(
    cfg: GetBucketSignedUrlConfig,
    callback?: GetSignedUrlCallback
  ): void | Promise<GetSignedUrlResponse> {
    const method = BucketActionToHTTPMethod[cfg.action];
    if (!method) {
      throw new Error('The action is not provided or invalid.');
    }

    const signConfig = {
      method,
      expires: cfg.expires,
      version: cfg.version,
      cname: cfg.cname,
      extensionHeaders: cfg.extensionHeaders || {},
      queryParams: cfg.queryParams || {},
    } as SignerGetSignedUrlConfig;

    if (!this.signer) {
      this.signer = new URLSigner(this.storage.authClient, this);
    }

    this.signer
      .getSignedUrl(signConfig)
      .then(signedUrl => callback!(null, signedUrl), callback!);
  }

  lock(metageneration: number | string): Promise<BucketLockResponse>;
  lock(metageneration: number | string, callback: BucketLockCallback): void;
  /**
   * @callback BucketLockCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Lock a previously-defined retention policy. This will prevent changes to
   * the policy.
   *
   * @throws {Error} if a metageneration is not provided.
   *
   * @param {Number|String} metageneration The bucket's metageneration. This is
   *     accesssible from calling {@link File#getMetadata}.
   * @param {BucketLockCallback} [callback] Callback function.
   * @returns {Promise<BucketLockResponse>}
   *
   * @example
   * const storage = require('@google-cloud/storage')();
   * const bucket = storage.bucket('albums');
   *
   * const metageneration = 2;
   *
   * bucket.lock(metageneration, function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.lock(metageneration).then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  lock(
    metageneration: number | string,
    callback?: BucketLockCallback
  ): Promise<BucketLockResponse> | void {
    const metatype = typeof metageneration;
    if (metatype !== 'number' && metatype !== 'string') {
      throw new Error('A metageneration must be provided.');
    }

    this.request(
      {
        method: 'POST',
        uri: '/lockRetentionPolicy',
        qs: {
          ifMetagenerationMatch: metageneration,
        },
      },
      callback!
    );
  }

  makePrivate(
    options?: MakeBucketPrivateOptions
  ): Promise<MakeBucketPrivateResponse>;
  makePrivate(callback: MakeBucketPrivateCallback): void;
  makePrivate(
    options: MakeBucketPrivateOptions,
    callback: MakeBucketPrivateCallback
  ): void;
  /**
   * @typedef {array} MakeBucketPrivateResponse
   * @property {File[]} 0 List of files made private.
   */
  /**
   * @callback MakeBucketPrivateCallback
   * @param {?Error} err Request error, if any.
   * @param {File[]} files List of files made private.
   */
  /**
   * @typedef {object} MakeBucketPrivateOptions
   * @param {boolean} [includeFiles=false] Make each file in the bucket
   *     private.
   * @param {boolean} [force] Queue errors occurred while making files
   *     private until all files have been processed.
   * @param {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * Make the bucket listing private.
   *
   * You may also choose to make the contents of the bucket private by
   * specifying `includeFiles: true`. This will automatically run
   * {@link File#makePrivate} for every file in the bucket.
   *
   * When specifying `includeFiles: true`, use `force: true` to delay execution
   * of your callback until all files have been processed. By default, the
   * callback is executed after the first error. Use `force` to queue such
   * errors until all files have been processed, after which they will be
   * returned as an array as the first argument to your callback.
   *
   * NOTE: This may cause the process to be long-running and use a high number
   * of requests. Use with caution.
   *
   * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
   *
   * @param {MakeBucketPrivateOptions} [options] Configuration options.
   * @param {MakeBucketPrivateCallback} [callback] Callback function.
   * @returns {Promise<MakeBucketPrivateResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Make the bucket private.
   * //-
   * bucket.makePrivate(function(err) {});
   *
   * //-
   * // Make the bucket and its contents private.
   * //-
   * const opts = {
   *   includeFiles: true
   * };
   *
   * bucket.makePrivate(opts, function(err, files) {
   *   // `err`:
   *   //    The first error to occur, otherwise null.
   *   //
   *   // `files`:
   *   //    Array of files successfully made private in the bucket.
   * });
   *
   * //-
   * // Make the bucket and its contents private, using force to suppress errors
   * // until all files have been processed.
   * //-
   * const opts = {
   *   includeFiles: true,
   *   force: true
   * };
   *
   * bucket.makePrivate(opts, function(errors, files) {
   *   // `errors`:
   *   //    Array of errors if any occurred, otherwise null.
   *   //
   *   // `files`:
   *   //    Array of files successfully made private in the bucket.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.makePrivate(opts).then(function(data) {
   *   const files = data[0];
   * });
   */
  makePrivate(
    optionsOrCallback?: MakeBucketPrivateOptions | MakeBucketPrivateCallback,
    callback?: MakeBucketPrivateCallback
  ): Promise<MakeBucketPrivateResponse> | void {
    const options: MakeBucketPrivateRequest =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    options.private = true;

    const query: MetadataOptions = {
      predefinedAcl: 'projectPrivate',
    };

    if (options.userProject) {
      query.userProject = options.userProject;
    }

    this.setMetadata(
      {
        // You aren't allowed to set both predefinedAcl & acl properties on
        // a bucket so acl must explicitly be nullified.
        acl: null,
      },
      query
    )
      .then(() => {
        if (options.includeFiles) {
          return promisify(this.makeAllFilesPublicPrivate_).call(this, options);
        }
        return [];
      })
      .then(files => callback!(null, files), callback!);
  }

  makePublic(
    options?: MakeBucketPublicOptions
  ): Promise<MakeBucketPublicResponse>;
  makePublic(callback: MakeBucketPublicCallback): void;
  makePublic(
    options: MakeBucketPublicOptions,
    callback: MakeBucketPublicCallback
  ): void;
  /**
   * @typedef {object} MakeBucketPublicOptions
   * @param {boolean} [includeFiles=false] Make each file in the bucket
   *     private.
   * @param {boolean} [force] Queue errors occurred while making files
   *     private until all files have been processed.
   */
  /**
   * @callback MakeBucketPublicCallback
   * @param {?Error} err Request error, if any.
   * @param {File[]} files List of files made public.
   */
  /**
   * @typedef {array} MakeBucketPublicResponse
   * @property {File[]} 0 List of files made public.
   */
  /**
   * Make the bucket publicly readable.
   *
   * You may also choose to make the contents of the bucket publicly readable by
   * specifying `includeFiles: true`. This will automatically run
   * {@link File#makePublic} for every file in the bucket.
   *
   * When specifying `includeFiles: true`, use `force: true` to delay execution
   * of your callback until all files have been processed. By default, the
   * callback is executed after the first error. Use `force` to queue such
   * errors until all files have been processed, after which they will be
   * returned as an array as the first argument to your callback.
   *
   * NOTE: This may cause the process to be long-running and use a high number
   * of requests. Use with caution.
   *
   * @see [Buckets: patch API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/patch}
   *
   * @param {MakeBucketPublicOptions} [options] Configuration options.
   * @param {MakeBucketPublicCallback} [callback] Callback function.
   * @returns {Promise<MakeBucketPublicResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Make the bucket publicly readable.
   * //-
   * bucket.makePublic(function(err) {});
   *
   * //-
   * // Make the bucket and its contents publicly readable.
   * //-
   * const opts = {
   *   includeFiles: true
   * };
   *
   * bucket.makePublic(opts, function(err, files) {
   *   // `err`:
   *   //    The first error to occur, otherwise null.
   *   //
   *   // `files`:
   *   //    Array of files successfully made public in the bucket.
   * });
   *
   * //-
   * // Make the bucket and its contents publicly readable, using force to
   * // suppress errors until all files have been processed.
   * //-
   * const opts = {
   *   includeFiles: true,
   *   force: true
   * };
   *
   * bucket.makePublic(opts, function(errors, files) {
   *   // `errors`:
   *   //    Array of errors if any occurred, otherwise null.
   *   //
   *   // `files`:
   *   //    Array of files successfully made public in the bucket.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.makePublic(opts).then(function(data) {
   *   const files = data[0];
   * });
   */
  makePublic(
    optionsOrCallback?: MakeBucketPublicOptions | MakeBucketPublicCallback,
    callback?: MakeBucketPublicCallback
  ): Promise<MakeBucketPublicResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    const req = extend(true, {public: true}, options);

    this.acl
      .add({
        entity: 'allUsers',
        role: 'READER',
      })
      .then(() => {
        return this.acl.default!.add({
          entity: 'allUsers',
          role: 'READER',
        });
      })
      .then(() => {
        if (req.includeFiles) {
          return promisify(this.makeAllFilesPublicPrivate_).call(this, req);
        }
        return [];
      })
      .then(files => callback!(null, files), callback);
  }

  /**
   * Get a reference to a Cloud Pub/Sub Notification.
   *
   * @param {string} id ID of notification.
   * @returns {Notification}
   * @see Notification
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('my-bucket');
   * const notification = bucket.notification('1');
   */
  notification(id: string): Notification {
    if (!id) {
      throw new Error('You must supply a notification ID.');
    }

    return new Notification(this, id);
  }

  removeRetentionPeriod(): Promise<SetBucketMetadataResponse>;
  removeRetentionPeriod(callback: SetBucketMetadataCallback): void;
  /**
   * Remove an already-existing retention policy from this bucket, if it is not
   * locked.
   *
   * @param {SetBucketMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetBucketMetadataResponse>}
   *
   * @example
   * const storage = require('@google-cloud/storage')();
   * const bucket = storage.bucket('albums');
   *
   * bucket.removeRetentionPeriod(function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.removeRetentionPeriod().then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  removeRetentionPeriod(
    callback?: SetBucketMetadataCallback
  ): Promise<SetBucketMetadataResponse> | void {
    this.setMetadata(
      {
        retentionPolicy: null,
      },
      callback!
    );
  }

  request(reqOpts: DecorateRequestOptions): Promise<[ResponseBody, Metadata]>;
  request(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void;
  /**
   * Makes request and applies userProject query parameter if necessary.
   *
   * @private
   *
   * @param {object} reqOpts - The request options.
   * @param {function} callback - The callback function.
   */
  request(
    reqOpts: DecorateRequestOptions,
    callback?: BodyResponseCallback
  ): void | Promise<[ResponseBody, Metadata]> {
    if (this.userProject && (!reqOpts.qs || !reqOpts.qs.userProject)) {
      reqOpts.qs = extend(reqOpts.qs, {userProject: this.userProject});
    }
    return super.request(reqOpts, callback!);
  }

  setLabels(
    labels: Labels,
    options?: SetLabelsOptions
  ): Promise<SetLabelsResponse>;
  setLabels(labels: Labels, callback: SetLabelsCallback): void;
  setLabels(
    labels: Labels,
    options: SetLabelsOptions,
    callback: SetLabelsCallback
  ): void;
  /**
   * @typedef {array} SetLabelsResponse
   * @property {object} 0 The bucket metadata.
   */
  /**
   * @callback SetLabelsCallback
   * @param {?Error} err Request error, if any.
   * @param {object} metadata The bucket metadata.
   */
  /**
   * @typedef {object} SetLabelsOptions Configuration options for Bucket#setLabels().
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * Set labels on the bucket.
   *
   * This makes an underlying call to {@link Bucket#setMetadata}, which
   * is a PATCH request. This means an individual label can be overwritten, but
   * unmentioned labels will not be touched.
   *
   * @param {object<string, string>} labels Labels to set on the bucket.
   * @param {object} [options] Configuration options.
   * @param {SetLabelsCallback} [callback] Callback function.
   * @returns {Promise<SetLabelsResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * const labels = {
   *   labelone: 'labelonevalue',
   *   labeltwo: 'labeltwovalue'
   * };
   *
   * bucket.setLabels(labels, function(err, metadata) {
   *   if (!err) {
   *     // Labels set successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.setLabels(labels).then(function(data) {
   *   const metadata = data[0];
   * });
   */
  setLabels(
    labels: Labels,
    optionsOrCallback?: SetLabelsOptions | SetLabelsCallback,
    callback?: SetLabelsCallback
  ): Promise<SetLabelsResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    callback = callback || util.noop;

    this.setMetadata({labels}, options, callback);
  }

  setRetentionPeriod(duration: number): Promise<SetBucketMetadataResponse>;
  setRetentionPeriod(
    duration: number,
    callback: SetBucketMetadataCallback
  ): void;
  /**
   * Lock all objects contained in the bucket, based on their creation time. Any
   * attempt to overwrite or delete objects younger than the retention period
   * will result in a `PERMISSION_DENIED` error.
   *
   * An unlocked retention policy can be modified or removed from the bucket via
   * {@link File#removeRetentionPeriod} and {@link File#setRetentionPeriod}. A
   * locked retention policy cannot be removed or shortened in duration for the
   * lifetime of the bucket. Attempting to remove or decrease period of a locked
   * retention policy will result in a `PERMISSION_DENIED` error. You can still
   * increase the policy.
   *
   * @param {*} duration In seconds, the minimum retention time for all objects
   *     contained in this bucket.
   * @param {SetBucketMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetBucketMetadataResponse>}
   *
   * @example
   * const storage = require('@google-cloud/storage')();
   * const bucket = storage.bucket('albums');
   *
   * const DURATION_SECONDS = 15780000; // 6 months.
   *
   * //-
   * // Lock the objects in this bucket for 6 months.
   * //-
   * bucket.setRetentionPeriod(DURATION_SECONDS, function(err, apiResponse) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.setRetentionPeriod(DURATION_SECONDS).then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  setRetentionPeriod(
    duration: number,
    callback?: SetBucketMetadataCallback
  ): Promise<SetBucketMetadataResponse> | void {
    this.setMetadata(
      {
        retentionPolicy: {
          retentionPeriod: duration,
        },
      },
      callback!
    );
  }
  setCorsConfiguration(
    corsConfiguration: Cors[]
  ): Promise<SetBucketMetadataResponse>;
  setCorsConfiguration(
    corsConfiguration: Cors[],
    callback: SetBucketMetadataCallback
  ): void;
  /**
   * This can be used to set the CORS configuration on the bucket.
   *
   * The configuration will be overwritten with the value passed into this.
   *
   * @param {Cors[]} corsConfiguration The new CORS configuration to set
   * @param {SetBucketMetadataCallback} [callback] Callback function.
   * @returns {Promise<SetBucketMetadataResponse>}
   *
   * @example
   * const storage = require('@google-cloud/storage')();
   * const bucket = storage.bucket('albums');
   *
   * const corsConfiguration = [{maxAgeSeconds: 3600}]; // 1 hour
   * bucket.setCorsConfiguration(corsConfiguration);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.setCorsConfiguration(corsConfiguration).then(function(data) {
   *   const apiResponse = data[0];
   * });
   */
  setCorsConfiguration(
    corsConfiguration: Cors[],
    callback?: SetBucketMetadataCallback
  ): Promise<SetBucketMetadataResponse> | void {
    this.setMetadata(
      {
        cors: corsConfiguration,
      },
      callback!
    );
  }

  setStorageClass(
    storageClass: string,
    options?: SetBucketStorageClassOptions
  ): Promise<SetBucketMetadataResponse>;
  setStorageClass(
    storageClass: string,
    callback: SetBucketStorageClassCallback
  ): void;
  setStorageClass(
    storageClass: string,
    options: SetBucketStorageClassOptions,
    callback: SetBucketStorageClassCallback
  ): void;
  /**
   * @typedef {object} SetBucketStorageClassOptions
   * @param {string} [userProject] - The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @callback SetBucketStorageClassCallback
   * @param {?Error} err Request error, if any.
   */
  /**
   * Set the default storage class for new files in this bucket.
   *
   * @see [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
   *
   * @param {string} storageClass The new storage class. (`standard`,
   *     `nearline`, `coldline`, or `archive`).
   *     **Note:** The storage classes `multi_regional`, `regional`, and
   *     `durable_reduced_availability` are now legacy and will be deprecated in
   *     the future.
   * @param {object} [options] Configuration options.
   * @param {string} [options.userProject] - The ID of the project which will be
   *     billed for the request.
   * @param {SetStorageClassCallback} [callback] Callback function.
   * @returns {Promise}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.setStorageClass('nearline', function(err, apiResponse) {
   *   if (err) {
   *     // Error handling omitted.
   *   }
   *
   *   // The storage class was updated successfully.
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.setStorageClass('nearline').then(function() {});
   */
  setStorageClass(
    storageClass: string,
    optionsOrCallback?:
      | SetBucketStorageClassOptions
      | SetBucketStorageClassCallback,
    callback?: SetBucketStorageClassCallback
  ): Promise<SetBucketMetadataResponse> | void {
    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    // In case we get input like `storageClass`, convert to `storage_class`.
    storageClass = storageClass
      .replace(/-/g, '_')
      .replace(/([a-z])([A-Z])/g, (_, low, up) => {
        return low + '_' + up;
      })
      .toUpperCase();

    this.setMetadata({storageClass}, options, callback!);
  }

  /**
   * Set a user project to be billed for all requests made from this Bucket
   * object and any files referenced from this Bucket object.
   *
   * @param {string} userProject The user project.
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * bucket.setUserProject('grape-spaceship-123');
   */
  setUserProject(userProject: string) {
    this.userProject = userProject;

    const methods = [
      'create',
      'delete',
      'exists',
      'get',
      'getMetadata',
      'setMetadata',
    ];
    methods.forEach(method => {
      const methodConfig = this.methods[method];
      if (typeof methodConfig === 'object') {
        if (typeof methodConfig.reqOpts === 'object') {
          extend(methodConfig.reqOpts.qs, {userProject});
        } else {
          methodConfig.reqOpts = {
            qs: {userProject},
          };
        }
      }
    });
  }

  upload(pathString: string, options?: UploadOptions): Promise<UploadResponse>;
  upload(
    pathString: string,
    options: UploadOptions,
    callback: UploadCallback
  ): void;
  upload(pathString: string, callback: UploadCallback): void;
  /**
   * @typedef {object} UploadOptions Configuration options for Bucket#upload().
   * @param {string|File} [options.destination] The place to save
   *     your file. If given a string, the file will be uploaded to the bucket
   *     using the string as a filename. When given a File object, your local
   * file will be uploaded to the File object's bucket and under the File
   * object's name. Lastly, when this argument is omitted, the file is uploaded
   * to your bucket using the name of the local file.
   * @param {string} [options.encryptionKey] A custom encryption key. See
   *     [Customer-supplied Encryption
   * Keys](https://cloud.google.com/storage/docs/encryption#customer-supplied).
   * @param {boolean} [options.gzip] Automatically gzip the file. This will set
   *     `options.metadata.contentEncoding` to `gzip`.
   * @param {string} [options.kmsKeyName] The name of the Cloud KMS key that will
   *     be used to encrypt the object. Must be in the format:
   *     `projects/my-project/locations/location/keyRings/my-kr/cryptoKeys/my-key`.
   * @param {object} [options.metadata] See an
   *     [Objects: insert request
   * body](https://cloud.google.com/storage/docs/json_api/v1/objects/insert#request_properties_JSON).
   * @param {string} [options.offset] The starting byte of the upload stream, for
   *     resuming an interrupted upload. Defaults to 0.
   * @param {string} [options.predefinedAcl] Apply a predefined set of access
   *     controls to this object.
   *
   *     Acceptable values are:
   *     - **`authenticatedRead`** - Object owner gets `OWNER` access, and
   *       `allAuthenticatedUsers` get `READER` access.
   *
   *     - **`bucketOwnerFullControl`** - Object owner gets `OWNER` access, and
   *       project team owners get `OWNER` access.
   *
   *     - **`bucketOwnerRead`** - Object owner gets `OWNER` access, and project
   *       team owners get `READER` access.
   *
   *     - **`private`** - Object owner gets `OWNER` access.
   *
   *     - **`projectPrivate`** - Object owner gets `OWNER` access, and project
   *       team members get access according to their roles.
   *
   *     - **`publicRead`** - Object owner gets `OWNER` access, and `allUsers`
   * get `READER` access.
   * @param {boolean} [options.private] Make the uploaded file private. (Alias for
   *     `options.predefinedAcl = 'private'`)
   * @param {boolean} [options.public] Make the uploaded file public. (Alias for
   *     `options.predefinedAcl = 'publicRead'`)
   * @param {boolean} [options.resumable] Force a resumable upload. (default:
   *     true for files larger than 5 MB).
   * @param {number} [options.timeout=60000] Set the HTTP request timeout in
   *     milliseconds. This option is not available for resumable uploads.
   *     Default: `60000`
   * @param {string} [options.uri] The URI for an already-created resumable
   *     upload. See {@link File#createResumableUpload}.
   * @param {string} [options.userProject] The ID of the project which will be
   *     billed for the request.
   * @param {string|boolean} [options.validation] Possible values: `"md5"`,
   *     `"crc32c"`, or `false`. By default, data integrity is validated with an
   *     MD5 checksum for maximum reliability. CRC32c will provide better
   *     performance with less reliability. You may also choose to skip
   * validation completely, however this is **not recommended**.
   */
  /**
   * @typedef {array} UploadResponse
   * @property {object} 0 The uploaded {@link File}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback UploadCallback
   * @param {?Error} err Request error, if any.
   * @param {object} file The uploaded {@link File}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Upload a file to the bucket. This is a convenience method that wraps
   * {@link File#createWriteStream}.
   *
   * You can specify whether or not an upload is resumable by setting
   * `options.resumable`. *Resumable uploads are enabled by default if your
   * input file is larger than 5 MB.*
   *
   * For faster crc32c computation, you must manually install
   * [`fast-crc32c`](https://www.npmjs.com/package/fast-crc32c):
   *
   *     $ npm install --save fast-crc32c
   *
   * @see [Upload Options (Simple or Resumable)]{@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/upload#uploads}
   * @see [Objects: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/objects/insert}
   *
   * @param {string} pathString The fully qualified path to the file you
   *     wish to upload to your bucket.
   * @param {UploadOptions} [options] Configuration options.
   * @param {UploadCallback} [callback] Callback function.
   * @returns {Promise<UploadResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const bucket = storage.bucket('albums');
   *
   * //-
   * // Upload a file from a local path.
   * //-
   * bucket.upload('/local/path/image.png', function(err, file, apiResponse) {
   *   // Your bucket now contains:
   *   // - "image.png" (with the contents of `/local/path/image.png')
   *
   *   // `file` is an instance of a File object that refers to your new file.
   * });
   *
   *
   * //-
   * // It's not always that easy. You will likely want to specify the filename
   * // used when your new file lands in your bucket.
   * //
   * // You may also want to set metadata or customize other options.
   * //-
   * const options = {
   *   destination: 'new-image.png',
   *   resumable: true,
   *   validation: 'crc32c',
   *   metadata: {
   *     metadata: {
   *       event: 'Fall trip to the zoo'
   *     }
   *   }
   * };
   *
   * bucket.upload('local-image.png', options, function(err, file) {
   *   // Your bucket now contains:
   *   // - "new-image.png" (with the contents of `local-image.png')
   *
   *   // `file` is an instance of a File object that refers to your new file.
   * });
   *
   * //-
   * // You can also have a file gzip'd on the fly.
   * //-
   * bucket.upload('index.html', { gzip: true }, function(err, file) {
   *   // Your bucket now contains:
   *   // - "index.html" (automatically compressed with gzip)
   *
   *   // Downloading the file with `file.download` will automatically decode
   * the
   *   // file.
   * });
   *
   * //-
   * // You may also re-use a File object, {File}, that references
   * // the file you wish to create or overwrite.
   * //-
   * const options = {
   *   destination: bucket.file('existing-file.png'),
   *   resumable: false
   * };
   *
   * bucket.upload('local-img.png', options, function(err, newFile) {
   *   // Your bucket now contains:
   *   // - "existing-file.png" (with the contents of `local-img.png')
   *
   *   // Note:
   *   // The `newFile` parameter is equal to `file`.
   * });
   *
   * //-
   * // To use
   * // <a
   * href="https://cloud.google.com/storage/docs/encryption#customer-supplied">
   * // Customer-supplied Encryption Keys</a>, provide the `encryptionKey`
   * option.
   * //-
   * const crypto = require('crypto');
   * const encryptionKey = crypto.randomBytes(32);
   *
   * bucket.upload('img.png', {
   *   encryptionKey: encryptionKey
   * }, function(err, newFile) {
   *   // `img.png` was uploaded with your custom encryption key.
   *
   *   // `newFile` is already configured to use the encryption key when making
   *   // operations on the remote object.
   *
   *   // However, to use your encryption key later, you must create a `File`
   *   // instance with the `key` supplied:
   *   const file = bucket.file('img.png', {
   *     encryptionKey: encryptionKey
   *   });
   *
   *   // Or with `file#setEncryptionKey`:
   *   const file = bucket.file('img.png');
   *   file.setEncryptionKey(encryptionKey);
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * bucket.upload('local-image.png').then(function(data) {
   *   const file = data[0];
   * });
   *
   * To upload a file from a URL, use {@link File#createWriteStream}.
   *
   * @example <caption>include:samples/files.js</caption>
   * region_tag:storage_upload_file
   * Another example:
   *
   * @example <caption>include:samples/encryption.js</caption>
   * region_tag:storage_upload_encrypted_file
   * Example of uploading an encrypted file:
   */
  upload(
    pathString: string,
    optionsOrCallback?: UploadOptions | UploadCallback,
    callback?: UploadCallback
  ): Promise<UploadResponse> | void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((global as any)['GCLOUD_SANDBOX_ENV']) {
      return;
    }

    let options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    options = Object.assign(
      {
        metadata: {},
      },
      options
    );

    let newFile: File;
    if (options.destination instanceof File) {
      newFile = options.destination;
    } else if (
      options.destination !== null &&
      typeof options.destination === 'string'
    ) {
      // Use the string as the name of the file.
      newFile = this.file(options.destination, {
        encryptionKey: options.encryptionKey,
        kmsKeyName: options.kmsKeyName,
      });
    } else {
      // Resort to using the name of the incoming file.
      const destination = path.basename(pathString);
      newFile = this.file(destination, {
        encryptionKey: options.encryptionKey,
        kmsKeyName: options.kmsKeyName,
      });
    }

    if (options.resumable !== null && typeof options.resumable === 'boolean') {
      upload();
    } else {
      // Determine if the upload should be resumable if it's over the threshold.
      fs.stat(pathString, (err, fd) => {
        if (err) {
          callback!(err);
          return;
        }

        if (fd.size <= RESUMABLE_THRESHOLD) {
          // Only disable resumable uploads so createWriteStream still attempts them and falls back to simple upload.
          options.resumable = false;
        }

        upload();
      });
    }

    function upload() {
      const writable = newFile.createWriteStream(options);
      if (options.onUploadProgress) {
        writable.on('progress', options.onUploadProgress);
      }
      fs.createReadStream(pathString)
        .on('error', callback!)
        .pipe(writable)
        .on('error', callback!)
        .on('finish', () => {
          callback!(null, newFile, newFile.metadata);
        });
    }
  }

  makeAllFilesPublicPrivate_(
    options?: MakeAllFilesPublicPrivateOptions
  ): Promise<MakeAllFilesPublicPrivateResponse>;
  makeAllFilesPublicPrivate_(callback: MakeAllFilesPublicPrivateCallback): void;
  makeAllFilesPublicPrivate_(
    options: MakeAllFilesPublicPrivateOptions,
    callback: MakeAllFilesPublicPrivateCallback
  ): void;
  /**
   * @private
   *
   * @typedef {object} MakeAllFilesPublicPrivateOptions
   * @property {boolean} [force] Suppress errors until all files have been
   *     processed.
   * @property {boolean} [private] Make files private.
   * @property {boolean} [public] Make files public.
   * @property {string} [userProject] The ID of the project which will be
   *     billed for the request.
   */
  /**
   * @private
   *
   * @callback SetBucketMetadataCallback
   * @param {?Error} err Request error, if any.
   * @param {File[]} files Files that were updated.
   */
  /**
   * @typedef {array} MakeAllFilesPublicPrivateResponse
   * @property {File[]} 0 List of files affected.
   */
  /**
   * Iterate over all of a bucket's files, calling `file.makePublic()` (public)
   * or `file.makePrivate()` (private) on each.
   *
   * Operations are performed in parallel, up to 10 at once. The first error
   * breaks the loop, and will execute the provided callback with it. Specify
   * `{ force: true }` to suppress the errors.
   *
   * @private
   *
   * @param {MakeAllFilesPublicPrivateOptions} [options] Configuration options.
   * @param {MakeAllFilesPublicPrivateCallback} callback Callback function.
   *
   * @return {Promise<MakeAllFilesPublicPrivateResponse>}
   */
  makeAllFilesPublicPrivate_(
    optionsOrCallback?:
      | MakeAllFilesPublicPrivateOptions
      | MakeAllFilesPublicPrivateCallback,
    callback?: MakeAllFilesPublicPrivateCallback
  ): Promise<MakeAllFilesPublicPrivateResponse> | void {
    const MAX_PARALLEL_LIMIT = 10;
    const errors = [] as Error[];
    const updatedFiles = [] as File[];

    const options =
      typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
      typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;

    const processFile = async (file: File) => {
      try {
        await (options.public ? file.makePublic() : file.makePrivate(options));
        updatedFiles.push(file);
      } catch (e) {
        if (!options.force) {
          throw e;
        }
        errors.push(e);
      }
    };

    this.getFiles(options)
      .then(([files]) => {
        const limit = pLimit(MAX_PARALLEL_LIMIT);
        const promises = files.map(file => {
          return limit(() => processFile(file));
        });
        return Promise.all(promises);
      })
      .then(
        () => callback!(errors.length > 0 ? errors : null, updatedFiles),
        err => callback!(err, updatedFiles)
      );
  }

  getId(): string {
    return this.id!;
  }
}

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(Bucket, 'getFiles');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Bucket, {
  exclude: ['request', 'file', 'notification'],
});

/**
 * Reference to the {@link Bucket} class.
 * @name module:@google-cloud/storage.Bucket
 * @see Bucket
 */
export {Bucket};
