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

/**
 * The `@google-cloud/storage` package has a single named export which is the
 * {@link Storage} (ES6) class, which should be instantiated with `new`.
 *
 * See {@link Storage} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {Storage} @google-cloud/storage
 * @alias nodejs-storage
 *
 * @example
 * Install the client library with <a href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save @google-cloud/storage
 * ```
 *
 * @example
 * Import the client library
 * ```
 * const {Storage} = require('@google-cloud/storage');
 * ```
 *
 * @example
 * Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:
 * ```
 * const storage = new Storage();
 * ```
 *
 * @example
 * Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:
 * ```
 * const storage = new Storage({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 * ```
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:storage_quickstart
 * Full quickstart example:
 */
export {
  BucketCallback,
  BucketOptions,
  CreateBucketQuery,
  CreateBucketRequest,
  CreateBucketResponse,
  CreateHmacKeyCallback,
  CreateHmacKeyOptions,
  CreateHmacKeyResponse,
  GetBucketsCallback,
  GetBucketsRequest,
  GetBucketsResponse,
  GetHmacKeysCallback,
  GetHmacKeysOptions,
  GetHmacKeysResponse,
  GetServiceAccountCallback,
  GetServiceAccountOptions,
  GetServiceAccountResponse,
  HmacKeyResourceResponse,
  IdempotencyStrategy,
  PreconditionOptions,
  RETRYABLE_ERR_FN_DEFAULT,
  ServiceAccount,
  Storage,
  StorageOptions,
} from './storage.js';
export {
  AclMetadata,
  AccessControlObject,
  AclOptions,
  AddAclCallback,
  AddAclOptions,
  AddAclResponse,
  GetAclCallback,
  GetAclOptions,
  GetAclResponse,
  RemoveAclCallback,
  RemoveAclOptions,
  RemoveAclResponse,
  UpdateAclCallback,
  UpdateAclOptions,
  UpdateAclResponse,
} from './acl.js';
export {
  Bucket,
  BucketExistsCallback,
  BucketExistsOptions,
  BucketExistsResponse,
  BucketLockCallback,
  BucketLockResponse,
  BucketMetadata,
  CombineCallback,
  CombineOptions,
  CombineResponse,
  CreateChannelCallback,
  CreateChannelConfig,
  CreateChannelOptions,
  CreateChannelResponse,
  CreateNotificationCallback,
  CreateNotificationOptions,
  CreateNotificationResponse,
  DeleteBucketCallback,
  DeleteBucketOptions,
  DeleteBucketResponse,
  DeleteFilesCallback,
  DeleteFilesOptions,
  DeleteLabelsCallback,
  DeleteLabelsResponse,
  DisableRequesterPaysCallback,
  DisableRequesterPaysResponse,
  EnableRequesterPaysCallback,
  EnableRequesterPaysResponse,
  GetBucketCallback,
  GetBucketMetadataCallback,
  GetBucketMetadataOptions,
  GetBucketMetadataResponse,
  GetBucketOptions,
  GetBucketResponse,
  GetBucketSignedUrlConfig,
  GetFilesCallback,
  GetFilesOptions,
  GetFilesResponse,
  GetLabelsCallback,
  GetLabelsOptions,
  GetLabelsResponse,
  GetNotificationsCallback,
  GetNotificationsOptions,
  GetNotificationsResponse,
  Labels,
  LifecycleAction,
  LifecycleCondition,
  LifecycleRule,
  MakeBucketPrivateCallback,
  MakeBucketPrivateOptions,
  MakeBucketPrivateResponse,
  MakeBucketPublicCallback,
  MakeBucketPublicOptions,
  MakeBucketPublicResponse,
  SetBucketMetadataCallback,
  SetBucketMetadataOptions,
  SetBucketMetadataResponse,
  SetBucketStorageClassCallback,
  SetBucketStorageClassOptions,
  SetLabelsCallback,
  SetLabelsOptions,
  SetLabelsResponse,
  UploadCallback,
  UploadOptions,
  UploadResponse,
} from './bucket.js';
export * from './crc32c.js';
export {Channel, StopCallback} from './channel.js';
export {
  CopyCallback,
  CopyOptions,
  CopyResponse,
  CreateReadStreamOptions,
  CreateResumableUploadCallback,
  CreateResumableUploadOptions,
  CreateResumableUploadResponse,
  CreateWriteStreamOptions,
  DeleteFileCallback,
  DeleteFileOptions,
  DeleteFileResponse,
  DownloadCallback,
  DownloadOptions,
  DownloadResponse,
  EncryptionKeyOptions,
  File,
  FileExistsCallback,
  FileExistsOptions,
  FileExistsResponse,
  FileMetadata,
  FileOptions,
  GetExpirationDateCallback,
  GetExpirationDateResponse,
  GetFileCallback,
  GetFileMetadataCallback,
  GetFileMetadataOptions,
  GetFileMetadataResponse,
  GetFileOptions,
  GetFileResponse,
  GenerateSignedPostPolicyV2Callback,
  GenerateSignedPostPolicyV2Options,
  GenerateSignedPostPolicyV2Response,
  GenerateSignedPostPolicyV4Callback,
  GenerateSignedPostPolicyV4Options,
  GenerateSignedPostPolicyV4Response,
  GetSignedUrlConfig,
  MakeFilePrivateCallback,
  MakeFilePrivateOptions,
  MakeFilePrivateResponse,
  MakeFilePublicCallback,
  MakeFilePublicResponse,
  MoveCallback,
  MoveOptions,
  MoveResponse,
  PolicyDocument,
  PolicyFields,
  PredefinedAcl,
  RotateEncryptionKeyCallback,
  RotateEncryptionKeyOptions,
  RotateEncryptionKeyResponse,
  SaveCallback,
  SaveData,
  SaveOptions,
  SetFileMetadataCallback,
  SetFileMetadataOptions,
  SetFileMetadataResponse,
  SetStorageClassCallback,
  SetStorageClassOptions,
  SetStorageClassResponse,
  SignedPostPolicyV4Output,
} from './file.js';
export * from './hash-stream-validator.js';
export {
  HmacKey,
  HmacKeyMetadata,
  HmacKeyMetadataCallback,
  HmacKeyMetadataResponse,
  SetHmacKeyMetadata,
  SetHmacKeyMetadataOptions,
} from './hmacKey.js';
export {
  GetPolicyCallback,
  GetPolicyOptions,
  GetPolicyResponse,
  Iam,
  Policy,
  SetPolicyCallback,
  SetPolicyOptions,
  SetPolicyResponse,
  TestIamPermissionsCallback,
  TestIamPermissionsOptions,
  TestIamPermissionsResponse,
} from './iam.js';
export {
  DeleteNotificationCallback,
  DeleteNotificationOptions,
  GetNotificationCallback,
  GetNotificationMetadataCallback,
  GetNotificationMetadataOptions,
  GetNotificationMetadataResponse,
  GetNotificationOptions,
  GetNotificationResponse,
  Notification,
  NotificationMetadata,
} from './notification.js';
export {GetSignedUrlCallback, GetSignedUrlResponse} from './signer.js';
export * from './transfer-manager.js';
export * from 'gaxios';
