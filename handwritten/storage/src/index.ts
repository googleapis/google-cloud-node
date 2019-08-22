/**
 * Copyright 2019 Google LLC
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
 * @example <caption>Install the client library with <a
 * href="https://www.npmjs.com/">npm</a>:</caption> npm install --save
 * @google-cloud/storage
 *
 * @example <caption>Import the client library</caption>
 * const {Storage} = require('@google-cloud/storage');
 *
 * @example <caption>Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:</caption> const storage = new Storage();
 *
 * @example <caption>Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:</caption> const storage = new Storage({ projectId:
 * 'your-project-id', keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:storage_quickstart
 * Full quickstart example:
 */
export {
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
} from './acl';
export {
  Bucket,
  BucketExistsCallback,
  BucketExistsOptions,
  BucketExistsResponse,
  BucketLockCallback,
  BucketLockResponse,
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
} from './bucket';
export {Channel, StopCallback} from './channel';
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
  FileOptions,
  GetExpirationDateCallback,
  GetExpirationDateResponse,
  GetFileCallback,
  GetFileMetadataCallback,
  GetFileMetadataOptions,
  GetFileMetadataResponse,
  GetFileOptions,
  GetFileResponse,
  GetSignedPolicyCallback,
  GetSignedPolicyOptions,
  GetSignedPolicyResponse,
  GetSignedUrlCallback,
  GetSignedUrlConfig,
  GetSignedUrlResponse,
  MakeFilePrivateCallback,
  MakeFilePrivateOptions,
  MakeFilePrivateResponse,
  MakeFilePublicCallback,
  MakeFilePublicResponse,
  MoveCallback,
  MoveOptions,
  MoveResponse,
  PolicyDocument,
  PredefinedAcl,
  RotateEncryptionKeyCallback,
  RotateEncryptionKeyOptions,
  RotateEncryptionKeyResponse,
  SaveCallback,
  SaveOptions,
  SetFileMetadataCallback,
  SetFileMetadataOptions,
  SetFileMetadataResponse,
  SetStorageClassCallback,
  SetStorageClassOptions,
  SetStorageClassResponse,
} from './file';
export {
  HmacKey,
  HmacKeyMetadata,
  HmacKeyMetadataCallback,
  HmacKeyMetadataResponse,
  SetHmacKeyMetadata,
  SetHmacKeyMetadataOptions,
} from './hmacKey';
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
} from './iam';
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
} from './notification';
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
  ServiceAccount,
  Storage,
  StorageOptions,
} from './storage';
