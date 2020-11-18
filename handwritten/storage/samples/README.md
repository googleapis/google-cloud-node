[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Storage: Node.js Samples](https://github.com/googleapis/nodejs-storage)

[![Open in Cloud Shell][shell_img]][shell_link]

> Node.js idiomatic client for [Cloud Storage][product-docs].

[Cloud Storage](https://cloud.google.com/storage/docs) allows world-wide
storage and retrieval of any amount of data at any time. You can use Google
Cloud Storage for a range of scenarios including serving website content,
storing data for archival and disaster recovery, or distributing large data
objects to users via direct download.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Add Bucket Conditional Binding](#add-bucket-conditional-binding)
  * [Add Bucket Default Owner Acl](#add-bucket-default-owner-acl)
  * [Add Bucket Iam Member](#add-bucket-iam-member)
  * [Add Bucket Owner Acl](#add-bucket-owner-acl)
  * [Add File Owner Acl](#add-file-owner-acl)
  * [Storage Get Bucket Metadata.](#storage-get-bucket-metadata.)
  * [Storage Configure Bucket Cors.](#storage-configure-bucket-cors.)
  * [Copy File](#copy-file)
  * [Copy Old Version Of File.](#copy-old-version-of-file.)
  * [Create New Bucket](#create-new-bucket)
  * [Create Notification](#create-notification)
  * [Delete Bucket](#delete-bucket)
  * [Delete File](#delete-file)
  * [Delete Notification](#delete-notification)
  * [Delete Old Version Of File.](#delete-old-version-of-file.)
  * [Disable Bucket Lifecycle Management](#disable-bucket-lifecycle-management)
  * [Disable Default Event Based Hold](#disable-default-event-based-hold)
  * [Disable Requester Pays](#disable-requester-pays)
  * [Disable Uniform Bucket Level Access](#disable-uniform-bucket-level-access)
  * [Download Encrypted File](#download-encrypted-file)
  * [Download File](#download-file)
  * [Download File Using Requester Pays](#download-file-using-requester-pays)
  * [Enable Bucket Lifecycle Management](#enable-bucket-lifecycle-management)
  * [Enable Default Event Based Hold](#enable-default-event-based-hold)
  * [Enable Default KMS Key](#enable-default-kms-key)
  * [Enable Requester Pays](#enable-requester-pays)
  * [Enable Uniform Bucket Level Access](#enable-uniform-bucket-level-access)
  * [Storage Set File Metadata.](#storage-set-file-metadata.)
  * [Generate Encryption Key](#generate-encryption-key)
  * [Generate Signed Url](#generate-signed-url)
  * [Generate V4 Read Signed Url](#generate-v4-read-signed-url)
  * [Generate V4 Signed Policy](#generate-v4-signed-policy)
  * [Generate V4 Upload Signed Url](#generate-v4-upload-signed-url)
  * [Get Default Event Based Hold](#get-default-event-based-hold)
  * [Get Metadata](#get-metadata)
  * [Get Metadata Notifications](#get-metadata-notifications)
  * [Get Requester Pays Status](#get-requester-pays-status)
  * [Get Retention Policy](#get-retention-policy)
  * [Get Uniform Bucket Level Access](#get-uniform-bucket-level-access)
  * [Activate HMAC SA Key.](#activate-hmac-sa-key.)
  * [Create HMAC SA Key.](#create-hmac-sa-key.)
  * [Deactivate HMAC SA Key.](#deactivate-hmac-sa-key.)
  * [Delete HMAC SA Key.](#delete-hmac-sa-key.)
  * [Get HMAC SA Key Metadata.](#get-hmac-sa-key-metadata.)
  * [List HMAC SA Keys Metadata.](#list-hmac-sa-keys-metadata.)
  * [List Buckets](#list-buckets)
  * [List Files](#list-files)
  * [List Files By Prefix](#list-files-by-prefix)
  * [List Files Paginate](#list-files-paginate)
  * [List Files with Old Versions.](#list-files-with-old-versions.)
  * [List Notifications](#list-notifications)
  * [Lock Retention Policy](#lock-retention-policy)
  * [Make Public](#make-public)
  * [Move File](#move-file)
  * [Notifications](#notifications)
  * [Print Bucket Acl](#print-bucket-acl)
  * [Print Bucket Acl For User](#print-bucket-acl-for-user)
  * [Print File Acl](#print-file-acl)
  * [Print File Acl For User](#print-file-acl-for-user)
  * [Quickstart](#quickstart)
  * [Release Event Based Hold](#release-event-based-hold)
  * [Release Temporary Hold](#release-temporary-hold)
  * [Remove Bucket Conditional Binding](#remove-bucket-conditional-binding)
  * [Storage Remove Bucket Cors Configuration.](#storage-remove-bucket-cors-configuration.)
  * [Remove Bucket Default Owner](#remove-bucket-default-owner)
  * [Remove Bucket Iam Member](#remove-bucket-iam-member)
  * [Remove Bucket Owner Acl](#remove-bucket-owner-acl)
  * [Remove File Owner Acl](#remove-file-owner-acl)
  * [Remove Retention Policy](#remove-retention-policy)
  * [Rename File](#rename-file)
  * [Rotate Encryption Key](#rotate-encryption-key)
  * [Set Event Based Hold](#set-event-based-hold)
  * [Set Retention Policy](#set-retention-policy)
  * [Set Temporary Hold](#set-temporary-hold)
  * [Upload a directory to a bucket.](#upload-a-directory-to-a-bucket.)
  * [Upload Encrypted File](#upload-encrypted-file)
  * [Upload File](#upload-file)
  * [Upload File With Kms Key](#upload-file-with-kms-key)
  * [View Bucket Iam Members](#view-bucket-iam-members)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-storage#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Add Bucket Conditional Binding

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketConditionalBinding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketConditionalBinding.js,samples/README.md)

__Usage:__


`node samples/addBucketConditionalBinding.js`


-----




### Add Bucket Default Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketDefaultOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketDefaultOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addBucketDefaultOwnerAcl.js`


-----




### Add Bucket Iam Member

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketIamMember.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketIamMember.js,samples/README.md)

__Usage:__


`node samples/addBucketIamMember.js`


-----




### Add Bucket Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addBucketOwnerAcl.js`


-----




### Add File Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addFileOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addFileOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addFileOwnerAcl.js`


-----




### Storage Get Bucket Metadata.

Get bucket metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/bucketMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketMetadata.js,samples/README.md)

__Usage:__


`node bucketMetadata.js <BUCKET_NAME>`


-----




### Storage Configure Bucket Cors.

Configures bucket cors.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/configureBucketCors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/configureBucketCors.js,samples/README.md)

__Usage:__


`node configureBucketCors.js <BUCKET_NAME> <MAX_AGE_SECONDS> <METHOD> <ORIGIN> <RESPONSE_HEADER>`


-----




### Copy File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/copyFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/copyFile.js,samples/README.md)

__Usage:__


`node samples/copyFile.js`


-----




### Copy Old Version Of File.

Copy Old Version Of File.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/copyOldVersionOfFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/copyOldVersionOfFile.js,samples/README.md)

__Usage:__


`node copyOldVersionOfFile.js <SRC_BUCKET_NAME> <SRC_FILE_NAME> <DEST_BUCKET_NAME> <DEST_FILE_NAME> <GENERATION>`


-----




### Create New Bucket

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/createNewBucket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNewBucket.js,samples/README.md)

__Usage:__


`node samples/createNewBucket.js`


-----




### Create Notification

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/createNotification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNotification.js,samples/README.md)

__Usage:__


`node samples/createNotification.js`


-----




### Delete Bucket

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteBucket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteBucket.js,samples/README.md)

__Usage:__


`node samples/deleteBucket.js`


-----




### Delete File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteFile.js,samples/README.md)

__Usage:__


`node samples/deleteFile.js`


-----




### Delete Notification

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteNotification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteNotification.js,samples/README.md)

__Usage:__


`node samples/deleteNotification.js`


-----




### Delete Old Version Of File.

Delete Old Version Of File.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteOldVersionOfFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteOldVersionOfFile.js,samples/README.md)

__Usage:__


`node deleteOldVersionOfFile.js <BUCKET_NAME> <FILE_NAME> <GENERATION>`


-----




### Disable Bucket Lifecycle Management

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableBucketLifecycleManagement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableBucketLifecycleManagement.js,samples/README.md)

__Usage:__


`node samples/disableBucketLifecycleManagement.js`


-----




### Disable Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/disableDefaultEventBasedHold.js`


-----




### Disable Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableRequesterPays.js,samples/README.md)

__Usage:__


`node samples/disableRequesterPays.js`


-----




### Disable Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/disableUniformBucketLevelAccess.js`


-----




### Download Encrypted File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadEncryptedFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadEncryptedFile.js,samples/README.md)

__Usage:__


`node samples/downloadEncryptedFile.js`


-----




### Download File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFile.js,samples/README.md)

__Usage:__


`node samples/downloadFile.js`


-----




### Download File Using Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadFileUsingRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFileUsingRequesterPays.js,samples/README.md)

__Usage:__


`node samples/downloadFileUsingRequesterPays.js`


-----




### Enable Bucket Lifecycle Management

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableBucketLifecycleManagement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableBucketLifecycleManagement.js,samples/README.md)

__Usage:__


`node samples/enableBucketLifecycleManagement.js`


-----




### Enable Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/enableDefaultEventBasedHold.js`


-----




### Enable Default KMS Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableDefaultKMSKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultKMSKey.js,samples/README.md)

__Usage:__


`node samples/enableDefaultKMSKey.js`


-----




### Enable Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableRequesterPays.js,samples/README.md)

__Usage:__


`node samples/enableRequesterPays.js`


-----




### Enable Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/enableUniformBucketLevelAccess.js`


-----




### Storage Set File Metadata.

Set file metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/fileSetMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/fileSetMetadata.js,samples/README.md)

__Usage:__


`node fileSetMetadata.js <BUCKET_NAME> <FILE_NAME>`


-----




### Generate Encryption Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateEncryptionKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateEncryptionKey.js,samples/README.md)

__Usage:__


`node samples/generateEncryptionKey.js`


-----




### Generate Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateSignedUrl.js`


-----




### Generate V4 Read Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateV4ReadSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4ReadSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateV4ReadSignedUrl.js`


-----




### Generate V4 Signed Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateV4SignedPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4SignedPolicy.js,samples/README.md)

__Usage:__


`node samples/generateV4SignedPolicy.js`


-----




### Generate V4 Upload Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateV4UploadSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4UploadSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateV4UploadSignedUrl.js`


-----




### Get Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/getDefaultEventBasedHold.js`


-----




### Get Metadata

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadata.js,samples/README.md)

__Usage:__


`node samples/getMetadata.js`


-----




### Get Metadata Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getMetadataNotifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadataNotifications.js,samples/README.md)

__Usage:__


`node samples/getMetadataNotifications.js`


-----




### Get Requester Pays Status

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getRequesterPaysStatus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRequesterPaysStatus.js,samples/README.md)

__Usage:__


`node samples/getRequesterPaysStatus.js`


-----




### Get Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/getRetentionPolicy.js`


-----




### Get Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/getUniformBucketLevelAccess.js`


-----




### Activate HMAC SA Key.

Activate HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyActivate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyActivate.js,samples/README.md)

__Usage:__


`node hmacKeyActivate.js <hmacKeyAccessId> [projectId]`


-----




### Create HMAC SA Key.

Create HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyCreate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyCreate.js,samples/README.md)

__Usage:__


`node hmacKeyCreate.js <serviceAccountEmail> [projectId]`


-----




### Deactivate HMAC SA Key.

Deactivate HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyDeactivate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDeactivate.js,samples/README.md)

__Usage:__


`node hmacKeyDeactivate.js <hmacKeyAccessId> [projectId]`


-----




### Delete HMAC SA Key.

Delete HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyDelete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDelete.js,samples/README.md)

__Usage:__


`node hmacKeyDelete.js <hmacKeyAccessId> [projectId]`


-----




### Get HMAC SA Key Metadata.

Get HMAC SA Key Metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyGet.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyGet.js,samples/README.md)

__Usage:__


`node hmacKeyGet.js <hmacKeyAccessId> [projectId]`


-----




### List HMAC SA Keys Metadata.

List HMAC SA Keys Metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeysList.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeysList.js,samples/README.md)

__Usage:__


`node hmacKeyList.js [projectId]`


-----




### List Buckets

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listBuckets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listBuckets.js,samples/README.md)

__Usage:__


`node samples/listBuckets.js`


-----




### List Files

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFiles.js,samples/README.md)

__Usage:__


`node samples/listFiles.js`


-----




### List Files By Prefix

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFilesByPrefix.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesByPrefix.js,samples/README.md)

__Usage:__


`node samples/listFilesByPrefix.js`


-----




### List Files Paginate

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFilesPaginate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesPaginate.js,samples/README.md)

__Usage:__


`node samples/listFilesPaginate.js`


-----




### List Files with Old Versions.

List Files with Old Versions.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFilesWithOldVersions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesWithOldVersions.js,samples/README.md)

__Usage:__


`node listFilesWithOldVersions.js <BUCKET_NAME>`


-----




### List Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listNotifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listNotifications.js,samples/README.md)

__Usage:__


`node samples/listNotifications.js`


-----




### Lock Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/lockRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/lockRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/lockRetentionPolicy.js`


-----




### Make Public

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/makePublic.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/makePublic.js,samples/README.md)

__Usage:__


`node samples/makePublic.js`


-----




### Move File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/moveFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/moveFile.js,samples/README.md)

__Usage:__


`node samples/moveFile.js`


-----




### Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/notifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/notifications.js,samples/README.md)

__Usage:__


`node samples/notifications.js`


-----




### Print Bucket Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printBucketAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAcl.js,samples/README.md)

__Usage:__


`node samples/printBucketAcl.js`


-----




### Print Bucket Acl For User

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printBucketAclForUser.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAclForUser.js,samples/README.md)

__Usage:__


`node samples/printBucketAclForUser.js`


-----




### Print File Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printFileAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAcl.js,samples/README.md)

__Usage:__


`node samples/printFileAcl.js`


-----




### Print File Acl For User

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printFileAclForUser.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAclForUser.js,samples/README.md)

__Usage:__


`node samples/printFileAclForUser.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Release Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/releaseEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/releaseEventBasedHold.js`


-----




### Release Temporary Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/releaseTemporaryHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseTemporaryHold.js,samples/README.md)

__Usage:__


`node samples/releaseTemporaryHold.js`


-----




### Remove Bucket Conditional Binding

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketConditionalBinding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketConditionalBinding.js,samples/README.md)

__Usage:__


`node samples/removeBucketConditionalBinding.js`


-----




### Storage Remove Bucket Cors Configuration.

Removes bucket cors configuration.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketCors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketCors.js,samples/README.md)

__Usage:__


`node removeBucketCors.js <BUCKET_NAME>`


-----




### Remove Bucket Default Owner

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketDefaultOwner.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketDefaultOwner.js,samples/README.md)

__Usage:__


`node samples/removeBucketDefaultOwner.js`


-----




### Remove Bucket Iam Member

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketIamMember.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketIamMember.js,samples/README.md)

__Usage:__


`node samples/removeBucketIamMember.js`


-----




### Remove Bucket Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/removeBucketOwnerAcl.js`


-----




### Remove File Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeFileOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeFileOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/removeFileOwnerAcl.js`


-----




### Remove Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/removeRetentionPolicy.js`


-----




### Rename File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/renameFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/renameFile.js,samples/README.md)

__Usage:__


`node samples/renameFile.js`


-----




### Rotate Encryption Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/rotateEncryptionKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/rotateEncryptionKey.js,samples/README.md)

__Usage:__


`node samples/rotateEncryptionKey.js`


-----




### Set Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/setEventBasedHold.js`


-----




### Set Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/setRetentionPolicy.js`


-----




### Set Temporary Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setTemporaryHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setTemporaryHold.js,samples/README.md)

__Usage:__


`node samples/setTemporaryHold.js`


-----




### Upload a directory to a bucket.

Uploads full hierarchy of a local directory to a bucket.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadDirectory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadDirectory.js,samples/README.md)

__Usage:__


`node files.js upload-directory <bucketName> <directoryPath>`


-----




### Upload Encrypted File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadEncryptedFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadEncryptedFile.js,samples/README.md)

__Usage:__


`node samples/uploadEncryptedFile.js`


-----




### Upload File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFile.js,samples/README.md)

__Usage:__


`node samples/uploadFile.js`


-----




### Upload File With Kms Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFileWithKmsKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFileWithKmsKey.js,samples/README.md)

__Usage:__


`node samples/uploadFileWithKmsKey.js`


-----




### View Bucket Iam Members

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/viewBucketIamMembers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/viewBucketIamMembers.js,samples/README.md)

__Usage:__


`node samples/viewBucketIamMembers.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/storage
