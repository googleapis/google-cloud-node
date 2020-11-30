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

import {GoogleAuthOptions, Metadata, Service} from '@google-cloud/common';
import {paginator} from '@google-cloud/paginator';
import {promisifyAll} from '@google-cloud/promisify';

import arrify = require('arrify');
import {Readable} from 'stream';

import {Bucket} from './bucket';
import {Channel} from './channel';
import {File} from './file';
import {normalize} from './util';
import {HmacKey, HmacKeyMetadata, HmacKeyOptions} from './hmacKey';

export interface GetServiceAccountOptions {
  userProject?: string;
}
export interface ServiceAccount {
  emailAddress?: string;
}
export type GetServiceAccountResponse = [ServiceAccount, Metadata];
export interface GetServiceAccountCallback {
  (
    err: Error | null,
    serviceAccount?: ServiceAccount,
    apiResponse?: Metadata
  ): void;
}

export interface CreateBucketQuery {
  project: string;
  userProject: string;
}

export interface StorageOptions extends GoogleAuthOptions {
  autoRetry?: boolean;
  maxRetries?: number;
  promise?: typeof Promise;
  userAgent?: string;
  /**
   * The API endpoint of the service used to make requests.
   * Defaults to `storage.googleapis.com`.
   */
  apiEndpoint?: string;
}

export interface BucketOptions {
  kmsKeyName?: string;
  userProject?: string;
}

export interface Cors {
  maxAgeSeconds?: number;
  method?: string[];
  origin?: string[];
  responseHeader?: string[];
}

interface Versioning {
  enabled: boolean;
}

export interface CreateBucketRequest {
  archive?: boolean;
  coldline?: boolean;
  cors?: Cors[];
  dra?: boolean;
  multiRegional?: boolean;
  nearline?: boolean;
  regional?: boolean;
  requesterPays?: boolean;
  retentionPolicy?: object;
  standard?: boolean;
  storageClass?: string;
  userProject?: string;
  location?: string;
  versioning?: Versioning;
}

export type CreateBucketResponse = [Bucket, Metadata];

export interface BucketCallback {
  (err: Error | null, bucket?: Bucket | null, apiResponse?: Metadata): void;
}

export type GetBucketsResponse = [Bucket[], {}, Metadata];
export interface GetBucketsCallback {
  (
    err: Error | null,
    buckets: Bucket[],
    nextQuery?: {},
    apiResponse?: Metadata
  ): void;
}
export interface GetBucketsRequest {
  prefix?: string;
  project?: string;
  autoPaginate?: boolean;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
  userProject?: string;
}

export interface HmacKeyResourceResponse {
  metadata: HmacKeyMetadata;
  secret: string;
}

export type CreateHmacKeyResponse = [HmacKey, string, HmacKeyResourceResponse];

export interface CreateHmacKeyOptions {
  projectId?: string;
  userProject?: string;
}

export interface CreateHmacKeyCallback {
  (
    err: Error | null,
    hmacKey?: HmacKey | null,
    secret?: string | null,
    apiResponse?: HmacKeyResourceResponse
  ): void;
}

export interface GetHmacKeysOptions {
  projectId?: string;
  serviceAccountEmail?: string;
  showDeletedKeys?: boolean;
  autoPaginate?: boolean;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
  userProject?: string;
}

export interface GetHmacKeysCallback {
  (
    err: Error | null,
    hmacKeys: HmacKey[] | null,
    nextQuery?: {},
    apiResponse?: Metadata
  ): void;
}

export type GetHmacKeysResponse = [HmacKey[]];

export const PROTOCOL_REGEX = /^(\w*):\/\//;

/*! Developer Documentation
 *
 * Invoke this method to create a new Storage object bound with pre-determined
 * configuration options. For each object that can be created (e.g., a bucket),
 * there is an equivalent static and instance method. While they are classes,
 * they can be instantiated without use of the `new` keyword.
 */
/**
 * <h4>ACLs</h4>
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share files with other users
 * and allow other users to access your buckets and files.
 *
 * To learn more about ACLs, read this overview on
 * [Access Control](https://cloud.google.com/storage/docs/access-control).
 *
 * @see [Cloud Storage overview]{@link https://cloud.google.com/storage/docs/overview}
 * @see [Access Control]{@link https://cloud.google.com/storage/docs/access-control}
 *
 * @class
 */
export class Storage extends Service {
  /**
   * {@link Bucket} class.
   *
   * @name Storage.Bucket
   * @see Bucket
   * @type {Constructor}
   */
  static Bucket: typeof Bucket = Bucket;

  /**
   * {@link Channel} class.
   *
   * @name Storage.Channel
   * @see Channel
   * @type {Constructor}
   */
  static Channel: typeof Channel = Channel;

  /**
   * {@link File} class.
   *
   * @name Storage.File
   * @see File
   * @type {Constructor}
   */
  static File: typeof File = File;

  /**
   * {@link HmacKey} class.
   *
   * @name Storage.HmacKey
   * @see HmacKey
   * @type {Constructor}
   */
  static HmacKey: typeof HmacKey = HmacKey;

  /**
   * Cloud Storage uses access control lists (ACLs) to manage object and
   * bucket access. ACLs are the mechanism you use to share objects with other
   * users and allow other users to access your buckets and objects.
   *
   * This object provides constants to refer to the three permission levels that
   * can be granted to an entity:
   *
   *   - `gcs.acl.OWNER_ROLE` - ("OWNER")
   *   - `gcs.acl.READER_ROLE` - ("READER")
   *   - `gcs.acl.WRITER_ROLE` - ("WRITER")
   *
   * @see [About Access Control Lists]{@link https://cloud.google.com/storage/docs/access-control/lists}
   *
   * @name Storage.acl
   * @type {object}
   * @property {string} OWNER_ROLE
   * @property {string} READER_ROLE
   * @property {string} WRITER_ROLE
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const albums = storage.bucket('albums');
   *
   * //-
   * // Make all of the files currently in a bucket publicly readable.
   * //-
   * const options = {
   *   entity: 'allUsers',
   *   role: storage.acl.READER_ROLE
   * };
   *
   * albums.acl.add(options, function(err, aclObject) {});
   *
   * //-
   * // Make any new objects added to a bucket publicly readable.
   * //-
   * albums.acl.default.add(options, function(err, aclObject) {});
   *
   * //-
   * // Grant a user ownership permissions to a bucket.
   * //-
   * albums.acl.add({
   *   entity: 'user-useremail@example.com',
   *   role: storage.acl.OWNER_ROLE
   * }, function(err, aclObject) {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * albums.acl.add(options).then(function(data) {
   *   const aclObject = data[0];
   *   const apiResponse = data[1];
   * });
   */
  static acl = {
    OWNER_ROLE: 'OWNER',
    READER_ROLE: 'READER',
    WRITER_ROLE: 'WRITER',
  };

  /**
   * Reference to {@link Storage.acl}.
   *
   * @name Storage#acl
   * @see Storage.acl
   */
  acl: typeof Storage.acl;

  /**
   * Get {@link Bucket} objects for all of the buckets in your project as
   * a readable object stream.
   *
   * @method Storage#getBucketsStream
   * @param {GetBucketsRequest} [query] Query object for listing buckets.
   * @returns {ReadableStream} A readable stream that emits {@link Bucket} instances.
   *
   * @example
   * storage.getBucketsStream()
   *   .on('error', console.error)
   *   .on('data', function(bucket) {
   *     // bucket is a Bucket object.
   *   })
   *   .on('end', function() {
   *     // All buckets retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * storage.getBucketsStream()
   *   .on('data', function(bucket) {
   *     this.end();
   *   });
   */
  getBucketsStream: () => Readable;

  /**
   * Get {@link HmacKey} objects for all of the HMAC keys in the project in
   * a readable object stream.
   *
   * @method Storage#getHmacKeysStream
   * @param {GetHmacKeysOptions} [options] Configuration options.
   * @returns {ReadableStream} A readable stream that emits {@link HmacKey} instances.
   *
   * @example
   * storage.getHmacKeysStream()
   *   .on('error', console.error)
   *   .on('data', function(hmacKey) {
   *     // hmacKey is an HmacKey object.
   *   })
   *   .on('end', function() {
   *     // All HmacKey retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * storage.getHmacKeysStream()
   *   .on('data', function(bucket) {
   *     this.end();
   *   });
   */
  getHmacKeysStream: () => Readable;

  /**
   * @typedef {object} StorageOptions
   * @property {string} [projectId] The project ID from the Google Developer's
   *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
   *     variable `GCLOUD_PROJECT` for your project ID. If your app is running
   * in an environment which supports {@link
   * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
   * Application Default Credentials}, your project ID will be detected
   * automatically.
   * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
   *     downloaded from the Google Developers Console. If you provide a path to
   * a JSON file, the `projectId` option above is not necessary. NOTE: .pem and
   *     .p12 require you to specify the `email` option as well.
   * @property {string} [email] Account email address. Required when using a .pem
   *     or .p12 keyFilename.
   * @property {object} [credentials] Credentials object.
   * @property {string} [credentials.client_email]
   * @property {string} [credentials.private_key]
   * @property {boolean} [autoRetry=true] Automatically retry requests if the
   *     response is related to rate limits or certain intermittent server
   * errors. We will exponentially backoff subsequent requests by default.
   * @property {number} [maxRetries=3] Maximum number of automatic retries
   *     attempted before returning the error.
   * @property {Constructor} [promise] Custom promise module to use instead of
   *     native Promises.
   * @property {string} [userAgent] The value to be prepended to the User-Agent
   *     header in API requests.
   */
  /**
   * Constructs the Storage client.
   *
   * @example <caption>Create a client that uses Application Default Credentials
   * (ADC)</caption> const {Storage} = require('@google-cloud/storage'); const
   * storage = new Storage();
   *
   * @example <caption>Create a client with explicit credentials</caption>
   * storage');/storage');
   * const storage = new Storage({
   *   projectId: 'your-project-id',
   *   keyFilename: '/path/to/keyfile.json'
   * });
   *
   * @param {StorageOptions} [options] Configuration options.
   */
  constructor(options: StorageOptions = {}) {
    let apiEndpoint = 'https://storage.googleapis.com';
    let customEndpoint = false;

    const EMULATOR_HOST = process.env.STORAGE_EMULATOR_HOST;
    if (typeof EMULATOR_HOST === 'string') {
      apiEndpoint = Storage.sanitizeEndpoint(EMULATOR_HOST);
      customEndpoint = true;
    }

    if (options.apiEndpoint) {
      apiEndpoint = Storage.sanitizeEndpoint(options.apiEndpoint);
      customEndpoint = true;
    }

    options = Object.assign({}, options, {apiEndpoint});

    const baseUrl = EMULATOR_HOST || `${options.apiEndpoint}/storage/v1`;

    const config = {
      apiEndpoint: options.apiEndpoint!,
      baseUrl,
      customEndpoint,
      projectIdRequired: false,
      scopes: [
        'https://www.googleapis.com/auth/iam',
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/devstorage.full_control',
      ],
      packageJson: require('../../package.json'),
    };

    super(config, options);

    /**
     * Reference to {@link Storage.acl}.
     *
     * @name Storage#acl
     * @see Storage.acl
     */
    this.acl = Storage.acl;

    this.getBucketsStream = paginator.streamify('getBuckets');
    this.getHmacKeysStream = paginator.streamify('getHmacKeys');
  }

  private static sanitizeEndpoint(url: string) {
    if (!PROTOCOL_REGEX.test(url)) {
      url = `https://${url}`;
    }
    return url.replace(/\/+$/, ''); // Remove trailing slashes
  }

  /**
   * Get a reference to a Cloud Storage bucket.
   *
   * @param {string} name Name of the bucket.
   * @param {object} [options] Configuration object.
   * @param {string} [options.kmsKeyName] A Cloud KMS key that will be used to
   *     encrypt objects inserted into this bucket, if no encryption method is
   *     specified.
   * @param {string} [options.userProject] User project to be billed for all
   *     requests made from this Bucket object.
   * @returns {Bucket}
   * @see Bucket
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const albums = storage.bucket('albums');
   * const photos = storage.bucket('photos');
   */
  bucket(name: string, options?: BucketOptions) {
    if (!name) {
      throw new Error('A bucket name is needed to use Cloud Storage.');
    }
    return new Bucket(this, name, options);
  }

  /**
   * Reference a channel to receive notifications about changes to your bucket.
   *
   * @param {string} id The ID of the channel.
   * @param {string} resourceId The resource ID of the channel.
   * @returns {Channel}
   * @see Channel
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const channel = storage.channel('id', 'resource-id');
   */
  channel(id: string, resourceId: string) {
    return new Channel(this, id, resourceId);
  }

  createBucket(
    name: string,
    metadata?: CreateBucketRequest
  ): Promise<CreateBucketResponse>;
  createBucket(name: string, callback: BucketCallback): void;
  createBucket(
    name: string,
    metadata: CreateBucketRequest,
    callback: BucketCallback
  ): void;
  createBucket(
    name: string,
    metadata: CreateBucketRequest,
    callback: BucketCallback
  ): void;
  /**
   * @typedef {array} CreateBucketResponse
   * @property {Bucket} 0 The new {@link Bucket}.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback CreateBucketCallback
   * @param {?Error} err Request error, if any.
   * @param {Bucket} bucket The new {@link Bucket}.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Metadata to set for the bucket.
   *
   * @typedef {object} CreateBucketRequest
   * @property {boolean} [archive=false] Specify the storage class as Archive.
   * @property {boolean} [coldline=false] Specify the storage class as Coldline.
   * @property {Cors[]} [cors=[]] Specify the CORS configuration to use.
   * @property {boolean} [dra=false] Specify the storage class as Durable Reduced
   *     Availability.
   * @property {boolean} [multiRegional=false] Specify the storage class as
   *     Multi-Regional.
   * @property {boolean} [nearline=false] Specify the storage class as Nearline.
   * @property {boolean} [regional=false] Specify the storage class as Regional.
   * @property {boolean} [requesterPays=false] **Early Access Testers Only**
   *     Force the use of the User Project metadata field to assign operational
   *     costs when an operation is made on a Bucket and its objects.
   * @property {boolean} [standard=true] Specify the storage class as Standard.
   * @property {Versioning} [versioning=undefined] Specify the versioning status.
   * @property {string} [userProject] The ID of the project which will be billed
   *     for the request.
   */
  /**
   * Create a bucket.
   *
   * Cloud Storage uses a flat namespace, so you can't create a bucket with
   * a name that is already in use. For more information, see
   * [Bucket Naming
   * Guidelines](https://cloud.google.com/storage/docs/bucketnaming.html#requirements).
   *
   * @see [Buckets: insert API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/insert}
   * @see [Storage Classes]{@link https://cloud.google.com/storage/docs/storage-classes}
   *
   * @param {string} name Name of the bucket to create.
   * @param {CreateBucketRequest} [metadata] Metadata to set for the bucket.
   * @param {CreateBucketCallback} [callback] Callback function.
   * @returns {Promise<CreateBucketResponse>}
   * @throws {Error} If a name is not provided.
   * @see Bucket#create
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const callback = function(err, bucket, apiResponse) {
   *   // `bucket` is a Bucket object.
   * };
   *
   * storage.createBucket('new-bucket', callback);
   *
   * //-
   * // Create a bucket in a specific location and region. <em>See the <a
   * // href="https://cloud.google.com/storage/docs/json_api/v1/buckets/insert">
   * // Official JSON API docs</a> for complete details on the `location`
   * option.
   * // </em>
   * //-
   * const metadata = {
   *   location: 'US-CENTRAL1',
   *   regional: true
   * };
   *
   * storage.createBucket('new-bucket', metadata, callback);
   *
   * //-
   * // Create a bucket with a retention policy of 6 months.
   * //-
   * const metadata = {
   *   retentionPolicy: {
   *     retentionPeriod: 15780000 // 6 months in seconds.
   *   }
   * };
   *
   * storage.createBucket('new-bucket', metadata, callback);
   *
   * //-
   * // Enable versioning on a new bucket.
   * //-
   * const metadata = {
   *   versioning: {
   *     enabled: true
   *   }
   * };
   *
   * storage.createBucket('new-bucket', metadata, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * storage.createBucket('new-bucket').then(function(data) {
   *   const bucket = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/buckets.js</caption>
   * region_tag:storage_create_bucket
   * Another example:
   */
  createBucket(
    name: string,
    metadataOrCallback?: BucketCallback | CreateBucketRequest,
    callback?: BucketCallback
  ): Promise<CreateBucketResponse> | void {
    if (!name) {
      throw new Error('A name is required to create a bucket.');
    }

    let metadata: CreateBucketRequest;
    if (!callback) {
      callback = metadataOrCallback as BucketCallback;
      metadata = {};
    } else {
      metadata = metadataOrCallback as CreateBucketRequest;
    }

    const body = (Object.assign({}, metadata, {name}) as {}) as {
      [index: string]: string | {};
    };

    const storageClasses = {
      archive: 'ARCHIVE',
      coldline: 'COLDLINE',
      dra: 'DURABLE_REDUCED_AVAILABILITY',
      multiRegional: 'MULTI_REGIONAL',
      nearline: 'NEARLINE',
      regional: 'REGIONAL',
      standard: 'STANDARD',
    } as {[index: string]: string};

    Object.keys(storageClasses).forEach(storageClass => {
      if (body[storageClass]) {
        if (metadata.storageClass) {
          throw new Error(
            `Both \`${storageClass}\` and \`storageClass\` were provided.`
          );
        }
        body.storageClass = storageClasses[storageClass];
        delete body[storageClass];
      }
    });

    if (body.requesterPays) {
      body.billing = {
        requesterPays: body.requesterPays,
      };
      delete body.requesterPays;
    }

    const query = {
      project: this.projectId,
    } as CreateBucketQuery;

    if (body.userProject) {
      query.userProject = body.userProject as string;
      delete body.userProject;
    }

    this.request(
      {
        method: 'POST',
        uri: '/b',
        qs: query,
        json: body,
      },
      (err, resp) => {
        if (err) {
          callback!(err, null, resp);
          return;
        }

        const bucket = this.bucket(name);
        bucket.metadata = resp;

        callback!(null, bucket, resp);
      }
    );
  }

  createHmacKey(
    serviceAccountEmail: string,
    options?: CreateHmacKeyOptions
  ): Promise<CreateHmacKeyResponse>;
  createHmacKey(
    serviceAccountEmail: string,
    callback: CreateHmacKeyCallback
  ): void;
  createHmacKey(
    serviceAccountEmail: string,
    options: CreateHmacKeyOptions,
    callback: CreateHmacKeyCallback
  ): void;
  /**
   * @typedef {object} CreateHmacKeyOptions
   * @property {string} [projectId] The project ID of the project that owns
   *     the service account of the requested HMAC key. If not provided,
   *     the project ID used to instantiate the Storage client will be used.
   * @property {string} [userProject] This parameter is currently ignored.
   */
  /**
   * @typedef {object} HmacKeyMetadata
   * @property {string} accessId The access id identifies which HMAC key was
   *     used to sign a request when authenticating with HMAC.
   * @property {string} etag Used to perform a read-modify-write of the key.
   * @property {string} id The resource name of the HMAC key.
   * @property {string} projectId The project ID.
   * @property {string} serviceAccountEmail The service account's email this
   *     HMAC key is created for.
   * @property {string} state The state of this HMAC key. One of "ACTIVE",
   *     "INACTIVE" or "DELETED".
   * @property {string} timeCreated The creation time of the HMAC key in
   *     RFC 3339 format.
   * @property {string} [updated] The time this HMAC key was last updated in
   *     RFC 3339 format.
   */
  /**
   * @typedef {array} CreateHmacKeyResponse
   * @property {HmacKey} 0 The HmacKey instance created from API response.
   * @property {string} 1 The HMAC key's secret used to access the XML API.
   * @property {object} 3 The raw API response.
   */
  /**
   * @callback CreateHmacKeyCallback Callback function.
   * @param {?Error} err Request error, if any.
   * @param {HmacKey} hmacKey The HmacKey instance created from API response.
   * @param {string} secret The HMAC key's secret used to access the XML API.
   * @param {object} apiResponse The raw API response.
   */
  /**
   * Create an HMAC key associated with an service account to authenticate
   * requests to the Cloud Storage XML API.
   *
   * @see [HMAC keys documentation]{@link https://cloud.google.com/storage/docs/authentication/hmackeys}
   *
   * @param {string} serviceAccountEmail The service account's email address
   *     with which the HMAC key is created for.
   * @param {CreateHmacKeyCallback} [callback] Callback function.
   * @return {Promise<CreateHmacKeyResponse>}
   *
   * @example
   * const {Storage} = require('google-cloud/storage');
   * const storage = new Storage();
   *
   * // Replace with your service account's email address
   * const serviceAccountEmail =
   *   'my-service-account@appspot.gserviceaccount.com';
   *
   * storage.createHmacKey(serviceAccountEmail, function(err, hmacKey, secret) {
   *   if (!err) {
   *     // Securely store the secret for use with the XML API.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * storage.createHmacKey(serviceAccountEmail)
   *   .then((response) => {
   *     const hmacKey = response[0];
   *     const secret = response[1];
   *     // Securely store the secret for use with the XML API.
   *   });
   */
  createHmacKey(
    serviceAccountEmail: string,
    optionsOrCb?: CreateHmacKeyOptions | CreateHmacKeyCallback,
    cb?: CreateHmacKeyCallback
  ): Promise<CreateHmacKeyResponse> | void {
    if (typeof serviceAccountEmail !== 'string') {
      throw new Error(
        'The first argument must be a service account email to create an HMAC key.'
      );
    }

    const {options, callback} = normalize<
      CreateHmacKeyOptions,
      CreateHmacKeyCallback
    >(optionsOrCb, cb);
    const query = Object.assign({}, options, {serviceAccountEmail});
    const projectId = query.projectId || this.projectId;
    delete query.projectId;

    this.request(
      {
        method: 'POST',
        uri: `/projects/${projectId}/hmacKeys`,
        qs: query,
      },
      (err, resp: HmacKeyResourceResponse) => {
        if (err) {
          callback!(err, null, null, resp);
          return;
        }

        const metadata = resp.metadata;
        const hmacKey = this.hmacKey(metadata.accessId, {
          projectId: metadata.projectId,
        });
        hmacKey.metadata = resp.metadata;

        callback!(null, hmacKey, resp.secret, resp);
      }
    );
  }

  getBuckets(options?: GetBucketsRequest): Promise<GetBucketsResponse>;
  getBuckets(options: GetBucketsRequest, callback: GetBucketsCallback): void;
  getBuckets(callback: GetBucketsCallback): void;
  /**
   * Query object for listing buckets.
   *
   * @typedef {object} GetBucketsRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {number} [maxApiCalls] Maximum number of API calls to make.
   * @property {number} [maxResults] Maximum number of items plus prefixes to
   *     return per call.
   *     Note: By default will handle pagination automatically
   *     if more than 1 page worth of results are requested per call.
   *     When `autoPaginate` is set to `false` the smaller of `maxResults`
   *     or 1 page of results will be returned per call.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {string} [userProject] The ID of the project which will be billed
   *     for the request.
   */
  /**
   * @typedef {array} GetBucketsResponse
   * @property {Bucket[]} 0 Array of {@link Bucket} instances.
   * @property {objcet} 1 nextQuery A query object to receive more results.
   * @property {object} 2 The full API response.
   */
  /**
   * @callback GetBucketsCallback
   * @param {?Error} err Request error, if any.
   * @param {Bucket[]} buckets Array of {@link Bucket} instances.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get Bucket objects for all of the buckets in your project.
   *
   * @see [Buckets: list API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/list}
   *
   * @param {GetBucketsRequest} [query] Query object for listing buckets.
   * @param {GetBucketsCallback} [callback] Callback function.
   * @returns {Promise<GetBucketsResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * storage.getBuckets(function(err, buckets) {
   *   if (!err) {
   *     // buckets is an array of Bucket objects.
   *   }
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * const callback = function(err, buckets, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     storage.getBuckets(nextQuery, callback);
   *   }
   *
   *   // The `metadata` property is populated for you with the metadata at the
   *   // time of fetching.
   *   buckets[0].metadata;
   *
   *   // However, in cases where you are concerned the metadata could have
   *   // changed, use the `getMetadata` method.
   *   buckets[0].getMetadata(function(err, metadata, apiResponse) {});
   * };
   *
   * storage.getBuckets({
   *   autoPaginate: false
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * storage.getBuckets().then(function(data) {
   *   const buckets = data[0];
   * });
   *
   * @example <caption>include:samples/buckets.js</caption>
   * region_tag:storage_list_buckets
   * Another example:
   */
  getBuckets(
    optionsOrCallback?: GetBucketsRequest | GetBucketsCallback,
    cb?: GetBucketsCallback
  ): void | Promise<GetBucketsResponse> {
    const {options, callback} = normalize<GetBucketsRequest>(
      optionsOrCallback,
      cb
    );
    options.project = options.project || this.projectId;

    this.request(
      {
        uri: '/b',
        qs: options,
      },
      (err, resp) => {
        if (err) {
          callback(err, null, null, resp);
          return;
        }

        const buckets = arrify(resp.items).map((bucket: Metadata) => {
          const bucketInstance = this.bucket(bucket.id);
          bucketInstance.metadata = bucket;
          return bucketInstance;
        });

        const nextQuery = resp.nextPageToken
          ? Object.assign({}, options, {pageToken: resp.nextPageToken})
          : null;

        callback(null, buckets, nextQuery, resp);
      }
    );
  }

  /**
   * Query object for listing HMAC keys.
   *
   * @typedef {object} GetHmacKeysOptions
   * @property {string} [projectId] The project ID of the project that owns
   *     the service account of the requested HMAC key. If not provided,
   *     the project ID used to instantiate the Storage client will be used.
   * @property {string} [serviceAccountEmail] If present, only HMAC keys for the
   *     given service account are returned.
   * @property {boolean} [showDeletedKeys=false] If true, include keys in the DELETE
   *     state. Default is false.
   * @property {boolean} [autoPaginate=true] Have pagination handled
   *     automatically.
   * @property {number} [maxApiCalls] Maximum number of API calls to make.
   * @property {number} [maxResults] Maximum number of items plus prefixes to
   *     return per call.
   *     Note: By default will handle pagination automatically
   *     if more than 1 page worth of results are requested per call.
   *     When `autoPaginate` is set to `false` the smaller of `maxResults`
   *     or 1 page of results will be returned per call.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {string} [userProject] This parameter is currently ignored.
   */
  /**
   * @typedef {array} GetHmacKeysResponse
   * @property {HmacKey[]} 0 Array of {@link HmacKey} instances.
   * @param {object} nextQuery 1 A query object to receive more results.
   * @param {object} apiResponse 2 The full API response.
   */
  /**
   * @callback GetHmacKeysCallback
   * @param {?Error} err Request error, if any.
   * @param {HmacKey[]} hmacKeys Array of {@link HmacKey} instances.
   * @param {object} nextQuery A query object to receive more results.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Retrieves a list of HMAC keys matching the criteria.
   *
   * The authenticated user must have storage.hmacKeys.list permission for the project in which the key exists.
   *
   * @param {GetHmacKeysOption} options Configuration options.
   * @param {GetHmacKeysCallback} callback Callback function.
   * @return {Promise<GetHmacKeysResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * storage.getHmacKeys(function(err, hmacKeys) {
   *   if (!err) {
   *     // hmacKeys is an array of HmacKey objects.
   *   }
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * const callback = function(err, hmacKeys, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     storage.getHmacKeys(nextQuery, callback);
   *   }
   *
   *   // The `metadata` property is populated for you with the metadata at the
   *   // time of fetching.
   *   hmacKeys[0].metadata;
   * };
   *
   * storage.getHmacKeys({
   *   autoPaginate: false
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * storage.getHmacKeys().then(function(data) {
   *   const hmacKeys = data[0];
   * });
   */
  getHmacKeys(options?: GetHmacKeysOptions): Promise<GetHmacKeysResponse>;
  getHmacKeys(callback: GetHmacKeysCallback): void;
  getHmacKeys(options: GetHmacKeysOptions, callback: GetHmacKeysCallback): void;
  getHmacKeys(
    optionsOrCb?: GetHmacKeysOptions | GetHmacKeysCallback,
    cb?: GetHmacKeysCallback
  ): Promise<GetHmacKeysResponse> | void {
    const {options, callback} = normalize<GetHmacKeysOptions>(optionsOrCb, cb);
    const query = Object.assign({}, options);
    const projectId = query.projectId || this.projectId;
    delete query.projectId;

    this.request(
      {
        uri: `/projects/${projectId}/hmacKeys`,
        qs: query,
      },
      (err, resp) => {
        if (err) {
          callback(err, null, null, resp);
          return;
        }

        const hmacKeys = arrify(resp.items).map((hmacKey: HmacKeyMetadata) => {
          const hmacKeyInstance = this.hmacKey(hmacKey.accessId, {
            projectId: hmacKey.projectId,
          });
          hmacKeyInstance.metadata = hmacKey;
          return hmacKeyInstance;
        });

        const nextQuery = resp.nextPageToken
          ? Object.assign({}, options, {pageToken: resp.nextPageToken})
          : null;

        callback(null, hmacKeys, nextQuery, resp);
      }
    );
  }

  getServiceAccount(
    options?: GetServiceAccountOptions
  ): Promise<GetServiceAccountResponse>;
  getServiceAccount(
    options?: GetServiceAccountOptions
  ): Promise<GetServiceAccountResponse>;
  getServiceAccount(
    options: GetServiceAccountOptions,
    callback: GetServiceAccountCallback
  ): void;
  getServiceAccount(callback: GetServiceAccountCallback): void;
  /**
   * @typedef {array} GetServiceAccountResponse
   * @property {object} 0 The service account resource.
   * @property {object} 1 The full
   * [API
   * response](https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource).
   */
  /**
   * @callback GetServiceAccountCallback
   * @param {?Error} err Request error, if any.
   * @param {object} serviceAccount The serviceAccount resource.
   * @param {string} serviceAccount.emailAddress The service account email
   *     address.
   * @param {object} apiResponse The full
   * [API
   * response](https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource).
   */
  /**
   * Get the email address of this project's Google Cloud Storage service
   * account.
   *
   * @see [Projects.serviceAccount: get API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount/get}
   * @see [Projects.serviceAccount Resource]{@link https://cloud.google.com/storage/docs/json_api/v1/projects/serviceAccount#resource}
   *
   * @param {object} [options] Configuration object.
   * @param {string} [options.userProject] User project to be billed for this
   *     request.
   * @param {GetServiceAccountCallback} [callback] Callback function.
   * @returns {Promise<GetServiceAccountResponse>}
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   *
   * storage.getServiceAccount(function(err, serviceAccount, apiResponse) {
   *   if (!err) {
   *     const serviceAccountEmail = serviceAccount.emailAddress;
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * storage.getServiceAccount().then(function(data) {
   *   const serviceAccountEmail = data[0].emailAddress;
   *   const apiResponse = data[1];
   * });
   */
  getServiceAccount(
    optionsOrCallback?: GetServiceAccountOptions | GetServiceAccountCallback,
    cb?: GetServiceAccountCallback
  ): void | Promise<GetServiceAccountResponse> {
    const {options, callback} = normalize<GetServiceAccountOptions>(
      optionsOrCallback,
      cb
    );
    this.request(
      {
        uri: `/projects/${this.projectId}/serviceAccount`,
        qs: options,
      },
      (err, resp) => {
        if (err) {
          callback(err, null, resp);
          return;
        }

        const camelCaseResponse = {} as {[index: string]: string};

        for (const prop in resp) {
          // eslint-disable-next-line no-prototype-builtins
          if (resp.hasOwnProperty(prop)) {
            const camelCaseProp = prop.replace(/_(\w)/g, (_, match) =>
              match.toUpperCase()
            );
            camelCaseResponse[camelCaseProp] = resp[prop];
          }
        }

        callback(null, camelCaseResponse, resp);
      }
    );
  }

  /**
   * Get a reference to an HmacKey object.
   * Note: this does not fetch the HMAC key's metadata. Use HmacKey#get() to
   * retrieve and populate the metadata.
   *
   * To get a reference to an HMAC key that's not created for a service
   * account in the same project used to instantiate the Storage client,
   * supply the project's ID as `projectId` in the `options` argument.
   *
   * @param {string} accessId The HMAC key's access ID.
   * @param {HmacKeyOptions} options HmacKey constructor owptions.
   * @returns {HmacKey}
   * @see HmacKey
   *
   * @example
   * const {Storage} = require('@google-cloud/storage');
   * const storage = new Storage();
   * const hmacKey = storage.hmacKey('ACCESS_ID');
   */
  hmacKey(accessId: string, options?: HmacKeyOptions) {
    if (!accessId) {
      throw new Error('An access ID is needed to create an HmacKey object.');
    }

    return new HmacKey(this, accessId, options);
  }
}

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(Storage, ['getBuckets', 'getHmacKeys']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Storage, {
  exclude: ['bucket', 'channel', 'hmacKey'],
});
