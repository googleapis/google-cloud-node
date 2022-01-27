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
  * [Storage Add Bucket Label.](#storage-add-bucket-label.)
  * [Add Bucket Owner Acl](#add-bucket-owner-acl)
  * [Bucket Website Configuration.](#bucket-website-configuration.)
  * [Add File Owner Acl](#add-file-owner-acl)
  * [Storage Get Bucket Metadata.](#storage-get-bucket-metadata.)
  * [Change Bucket's Default Storage Class.](#change-bucket's-default-storage-class.)
  * [Storage File Convert CSEK to CMEK.](#storage-file-convert-csek-to-cmek.)
  * [Storage Combine files.](#storage-combine-files.)
  * [Storage Configure Bucket Cors.](#storage-configure-bucket-cors.)
  * [Configure Retries](#configure-retries)
  * [Copy File](#copy-file)
  * [Copy Old Version Of File.](#copy-old-version-of-file.)
  * [Create Bucket With Storage Class and Location.](#create-bucket-with-storage-class-and-location.)
  * [Create Bucket With Turbo Replication](#create-bucket-with-turbo-replication)
  * [Create New Bucket](#create-new-bucket)
  * [Create Notification](#create-notification)
  * [Delete Bucket](#delete-bucket)
  * [Delete File](#delete-file)
  * [Delete Notification](#delete-notification)
  * [Delete Old Version Of File.](#delete-old-version-of-file.)
  * [Disable Bucket Lifecycle Management](#disable-bucket-lifecycle-management)
  * [Storage Disable Bucket Versioning.](#storage-disable-bucket-versioning.)
  * [Disable Default Event Based Hold](#disable-default-event-based-hold)
  * [Disable Requester Pays](#disable-requester-pays)
  * [Disable Uniform Bucket Level Access](#disable-uniform-bucket-level-access)
  * [Download Byte Range](#download-byte-range)
  * [Download Encrypted File](#download-encrypted-file)
  * [Download File](#download-file)
  * [Download File Using Requester Pays](#download-file-using-requester-pays)
  * [Download Into Memory](#download-into-memory)
  * [Storage Download Public File.](#storage-download-public-file.)
  * [Enable Bucket Lifecycle Management](#enable-bucket-lifecycle-management)
  * [Storage Enable Bucket Versioning.](#storage-enable-bucket-versioning.)
  * [Enable Default Event Based Hold](#enable-default-event-based-hold)
  * [Enable Default KMS Key](#enable-default-kms-key)
  * [Enable Requester Pays](#enable-requester-pays)
  * [Enable Uniform Bucket Level Access](#enable-uniform-bucket-level-access)
  * [Change File's Storage Class.](#change-file's-storage-class.)
  * [Storage Set File Metadata.](#storage-set-file-metadata.)
  * [Generate Encryption Key](#generate-encryption-key)
  * [Generate Signed Url](#generate-signed-url)
  * [Generate V4 Read Signed Url](#generate-v4-read-signed-url)
  * [Generate V4 Signed Policy](#generate-v4-signed-policy)
  * [Generate V4 Upload Signed Url](#generate-v4-upload-signed-url)
  * [Get Default Event Based Hold](#get-default-event-based-hold)
  * [Get Metadata](#get-metadata)
  * [Get Metadata Notifications](#get-metadata-notifications)
  * [Get Public Access Prevention](#get-public-access-prevention)
  * [Get RPO](#get-rpo)
  * [Get Requester Pays Status](#get-requester-pays-status)
  * [Get Retention Policy](#get-retention-policy)
  * [Storage Get Service Account.](#storage-get-service-account.)
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
  * [Storage Make Bucket Public.](#storage-make-bucket-public.)
  * [Make Public](#make-public)
  * [Move File](#move-file)
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
  * [Storage Remove Bucket Label.](#storage-remove-bucket-label.)
  * [Remove Bucket Owner Acl](#remove-bucket-owner-acl)
  * [Remove Default KMS Key.](#remove-default-kms-key.)
  * [Remove File Owner Acl](#remove-file-owner-acl)
  * [Remove Retention Policy](#remove-retention-policy)
  * [Rename File](#rename-file)
  * [Rotate Encryption Key](#rotate-encryption-key)
  * [Set Event Based Hold](#set-event-based-hold)
  * [Set Public Access Prevention Enforced](#set-public-access-prevention-enforced)
  * [Set Public Access Prevention Inherited](#set-public-access-prevention-inherited)
  * [Set RPO Async Turbo](#set-rpo-async-turbo)
  * [Set RPO Default](#set-rpo-default)
  * [Set Retention Policy](#set-retention-policy)
  * [Set Temporary Hold](#set-temporary-hold)
  * [Stream File Download](#stream-file-download)
  * [Stream File Upload](#stream-file-upload)
  * [Upload a directory to a bucket.](#upload-a-directory-to-a-bucket.)
  * [Upload Encrypted File](#upload-encrypted-file)
  * [Upload File](#upload-file)
  * [Upload File With Kms Key](#upload-file-with-kms-key)
  * [Upload From Memory](#upload-from-memory)
  * [Upload Without Authentication](#upload-without-authentication)
  * [Upload Without Authentication Signed Url](#upload-without-authentication-signed-url)
  * [View Bucket Iam Members](#view-bucket-iam-members)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-storage#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Add Bucket Conditional Binding

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketConditionalBinding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketConditionalBinding.js,samples/README.md)

__Usage:__


`node samples/addBucketConditionalBinding.js`


-----




### Add Bucket Default Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketDefaultOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketDefaultOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addBucketDefaultOwnerAcl.js`


-----




### Add Bucket Iam Member

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketIamMember.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketIamMember.js,samples/README.md)

__Usage:__


`node samples/addBucketIamMember.js`


-----




### Storage Add Bucket Label.

Adds bucket label.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketLabel.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketLabel.js,samples/README.md)

__Usage:__


`node addBucketLabel.js <BUCKET_NAME> <LABEL_KEY> <LABEL_VALUE>`


-----




### Add Bucket Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addBucketOwnerAcl.js`


-----




### Bucket Website Configuration.

Bucket Website Configuration.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addBucketWebsiteConfiguration.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketWebsiteConfiguration.js,samples/README.md)

__Usage:__


`node addBucketWebsiteConfiguration.js <BUCKET_NAME> <MAIN_PAGE_SUFFIX> <NOT_FOUND_PAGE>`


-----




### Add File Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/addFileOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addFileOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/addFileOwnerAcl.js`


-----




### Storage Get Bucket Metadata.

Get bucket metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/bucketMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketMetadata.js,samples/README.md)

__Usage:__


`node bucketMetadata.js <BUCKET_NAME>`


-----




### Change Bucket's Default Storage Class.

Change Bucket's Default Storage Class.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/changeDefaultStorageClass.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/changeDefaultStorageClass.js,samples/README.md)

__Usage:__


`node changeDefaultStorageClass.js <BUCKET_NAME> <CLASS_NAME>`


-----




### Storage File Convert CSEK to CMEK.

Storage File Convert CSEK to CMEK.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/changeFileCSEKToCMEK.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/changeFileCSEKToCMEK.js,samples/README.md)

__Usage:__


`node changeFileCSEKToCMEK.js <BUCKET_NAME> <FILE_NAME> <ENCRYPTION_KEY> <KMS_KEY_NAME>`


-----




### Storage Combine files.

Combine multiple files into one new file.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/composeFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/composeFile.js,samples/README.md)

__Usage:__


`node composeFile.js <BUCKET_NAME> <FIRST_FILE_NAME> <SECOND_FILE_NAME> <DESTINATION_FILE_NAME>`


-----




### Storage Configure Bucket Cors.

Configures bucket cors.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/configureBucketCors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/configureBucketCors.js,samples/README.md)

__Usage:__


`node configureBucketCors.js <BUCKET_NAME> <MAX_AGE_SECONDS> <METHOD> <ORIGIN> <RESPONSE_HEADER>`


-----




### Configure Retries

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/configureRetries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/configureRetries.js,samples/README.md)

__Usage:__


`node samples/configureRetries.js`


-----




### Copy File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/copyFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/copyFile.js,samples/README.md)

__Usage:__


`node samples/copyFile.js`


-----




### Copy Old Version Of File.

Copy Old Version Of File.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/copyOldVersionOfFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/copyOldVersionOfFile.js,samples/README.md)

__Usage:__


`node copyOldVersionOfFile.js <SRC_BUCKET_NAME> <SRC_FILE_NAME> <DEST_BUCKET_NAME> <DEST_FILE_NAME> <GENERATION>`


-----




### Create Bucket With Storage Class and Location.

Create Bucket With Storage Class and Location.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/createBucketWithStorageClassAndLocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createBucketWithStorageClassAndLocation.js,samples/README.md)

__Usage:__


`node createBucketWithStorageClassAndLocation.js <BUCKET_NAME> <CLASS_NAME> <LOCATION>`


-----




### Create Bucket With Turbo Replication

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/createBucketWithTurboReplication.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createBucketWithTurboReplication.js,samples/README.md)

__Usage:__


`node samples/createBucketWithTurboReplication.js`


-----




### Create New Bucket

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/createNewBucket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNewBucket.js,samples/README.md)

__Usage:__


`node samples/createNewBucket.js`


-----




### Create Notification

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/createNotification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNotification.js,samples/README.md)

__Usage:__


`node samples/createNotification.js`


-----




### Delete Bucket

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteBucket.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteBucket.js,samples/README.md)

__Usage:__


`node samples/deleteBucket.js`


-----




### Delete File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteFile.js,samples/README.md)

__Usage:__


`node samples/deleteFile.js`


-----




### Delete Notification

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteNotification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteNotification.js,samples/README.md)

__Usage:__


`node samples/deleteNotification.js`


-----




### Delete Old Version Of File.

Delete Old Version Of File.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteOldVersionOfFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteOldVersionOfFile.js,samples/README.md)

__Usage:__


`node deleteOldVersionOfFile.js <BUCKET_NAME> <FILE_NAME> <GENERATION>`


-----




### Disable Bucket Lifecycle Management

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/disableBucketLifecycleManagement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableBucketLifecycleManagement.js,samples/README.md)

__Usage:__


`node samples/disableBucketLifecycleManagement.js`


-----




### Storage Disable Bucket Versioning.

Disables bucket versioning.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/disableBucketVersioning.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableBucketVersioning.js,samples/README.md)

__Usage:__


`node disableBucketVersioning.js <BUCKET_NAME>`


-----




### Disable Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/disableDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/disableDefaultEventBasedHold.js`


-----




### Disable Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/disableRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableRequesterPays.js,samples/README.md)

__Usage:__


`node samples/disableRequesterPays.js`


-----




### Disable Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/disableUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/disableUniformBucketLevelAccess.js`


-----




### Download Byte Range

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadByteRange.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadByteRange.js,samples/README.md)

__Usage:__


`node samples/downloadByteRange.js`


-----




### Download Encrypted File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadEncryptedFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadEncryptedFile.js,samples/README.md)

__Usage:__


`node samples/downloadEncryptedFile.js`


-----




### Download File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFile.js,samples/README.md)

__Usage:__


`node samples/downloadFile.js`


-----




### Download File Using Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadFileUsingRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFileUsingRequesterPays.js,samples/README.md)

__Usage:__


`node samples/downloadFileUsingRequesterPays.js`


-----




### Download Into Memory

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadIntoMemory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadIntoMemory.js,samples/README.md)

__Usage:__


`node samples/downloadIntoMemory.js`


-----




### Storage Download Public File.

Download Public File.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/downloadPublicFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadPublicFile.js,samples/README.md)

__Usage:__


`node downloadPublicFile.js <BUCKET_NAME> <SRC_FILE_NAME> <DEST_FILE_NAME>`


-----




### Enable Bucket Lifecycle Management

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableBucketLifecycleManagement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableBucketLifecycleManagement.js,samples/README.md)

__Usage:__


`node samples/enableBucketLifecycleManagement.js`


-----




### Storage Enable Bucket Versioning.

Enables bucket versioning.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableBucketVersioning.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableBucketVersioning.js,samples/README.md)

__Usage:__


`node enableBucketVersioning.js <BUCKET_NAME>`


-----




### Enable Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/enableDefaultEventBasedHold.js`


-----




### Enable Default KMS Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableDefaultKMSKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultKMSKey.js,samples/README.md)

__Usage:__


`node samples/enableDefaultKMSKey.js`


-----




### Enable Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableRequesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableRequesterPays.js,samples/README.md)

__Usage:__


`node samples/enableRequesterPays.js`


-----




### Enable Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/enableUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/enableUniformBucketLevelAccess.js`


-----




### Change File's Storage Class.

Change File's Storage Class.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/fileChangeStorageClass.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/fileChangeStorageClass.js,samples/README.md)

__Usage:__


`node fileChangeStorageClass.js <BUCKET_NAME> <FILE_NAME> <CLASS_NAME>`


-----




### Storage Set File Metadata.

Set file metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/fileSetMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/fileSetMetadata.js,samples/README.md)

__Usage:__


`node fileSetMetadata.js <BUCKET_NAME> <FILE_NAME>`


-----




### Generate Encryption Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/generateEncryptionKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateEncryptionKey.js,samples/README.md)

__Usage:__


`node samples/generateEncryptionKey.js`


-----




### Generate Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/generateSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateSignedUrl.js`


-----




### Generate V4 Read Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/generateV4ReadSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4ReadSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateV4ReadSignedUrl.js`


-----




### Generate V4 Signed Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/generateV4SignedPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4SignedPolicy.js,samples/README.md)

__Usage:__


`node samples/generateV4SignedPolicy.js`


-----




### Generate V4 Upload Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/generateV4UploadSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4UploadSignedUrl.js,samples/README.md)

__Usage:__


`node samples/generateV4UploadSignedUrl.js`


-----




### Get Default Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getDefaultEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getDefaultEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/getDefaultEventBasedHold.js`


-----




### Get Metadata

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadata.js,samples/README.md)

__Usage:__


`node samples/getMetadata.js`


-----




### Get Metadata Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getMetadataNotifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadataNotifications.js,samples/README.md)

__Usage:__


`node samples/getMetadataNotifications.js`


-----




### Get Public Access Prevention

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getPublicAccessPrevention.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getPublicAccessPrevention.js,samples/README.md)

__Usage:__


`node samples/getPublicAccessPrevention.js`


-----




### Get RPO

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getRPO.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRPO.js,samples/README.md)

__Usage:__


`node samples/getRPO.js`


-----




### Get Requester Pays Status

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getRequesterPaysStatus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRequesterPaysStatus.js,samples/README.md)

__Usage:__


`node samples/getRequesterPaysStatus.js`


-----




### Get Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/getRetentionPolicy.js`


-----




### Storage Get Service Account.

Get Service Account.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getServiceAccount.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getServiceAccount.js,samples/README.md)

__Usage:__


`node getServiceAccount.js <PROJECT_ID>`


-----




### Get Uniform Bucket Level Access

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/getUniformBucketLevelAccess.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getUniformBucketLevelAccess.js,samples/README.md)

__Usage:__


`node samples/getUniformBucketLevelAccess.js`


-----




### Activate HMAC SA Key.

Activate HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeyActivate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyActivate.js,samples/README.md)

__Usage:__


`node hmacKeyActivate.js <hmacKeyAccessId> [projectId]`


-----




### Create HMAC SA Key.

Create HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeyCreate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyCreate.js,samples/README.md)

__Usage:__


`node hmacKeyCreate.js <serviceAccountEmail> [projectId]`


-----




### Deactivate HMAC SA Key.

Deactivate HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeyDeactivate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDeactivate.js,samples/README.md)

__Usage:__


`node hmacKeyDeactivate.js <hmacKeyAccessId> [projectId]`


-----




### Delete HMAC SA Key.

Delete HMAC SA Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeyDelete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDelete.js,samples/README.md)

__Usage:__


`node hmacKeyDelete.js <hmacKeyAccessId> [projectId]`


-----




### Get HMAC SA Key Metadata.

Get HMAC SA Key Metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeyGet.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyGet.js,samples/README.md)

__Usage:__


`node hmacKeyGet.js <hmacKeyAccessId> [projectId]`


-----




### List HMAC SA Keys Metadata.

List HMAC SA Keys Metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/hmacKeysList.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeysList.js,samples/README.md)

__Usage:__


`node hmacKeyList.js [projectId]`


-----




### List Buckets

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listBuckets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listBuckets.js,samples/README.md)

__Usage:__


`node samples/listBuckets.js`


-----




### List Files

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listFiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFiles.js,samples/README.md)

__Usage:__


`node samples/listFiles.js`


-----




### List Files By Prefix

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listFilesByPrefix.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesByPrefix.js,samples/README.md)

__Usage:__


`node samples/listFilesByPrefix.js`


-----




### List Files Paginate

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listFilesPaginate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesPaginate.js,samples/README.md)

__Usage:__


`node samples/listFilesPaginate.js`


-----




### List Files with Old Versions.

List Files with Old Versions.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listFilesWithOldVersions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesWithOldVersions.js,samples/README.md)

__Usage:__


`node listFilesWithOldVersions.js <BUCKET_NAME>`


-----




### List Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/listNotifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listNotifications.js,samples/README.md)

__Usage:__


`node samples/listNotifications.js`


-----




### Lock Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/lockRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/lockRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/lockRetentionPolicy.js`


-----




### Storage Make Bucket Public.

Storage Make Bucket Public.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/makeBucketPublic.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/makeBucketPublic.js,samples/README.md)

__Usage:__


`node makeBucketPublic.js <BUCKET_NAME>`


-----




### Make Public

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/makePublic.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/makePublic.js,samples/README.md)

__Usage:__


`node samples/makePublic.js`


-----




### Move File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/moveFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/moveFile.js,samples/README.md)

__Usage:__


`node samples/moveFile.js`


-----




### Print Bucket Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/printBucketAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAcl.js,samples/README.md)

__Usage:__


`node samples/printBucketAcl.js`


-----




### Print Bucket Acl For User

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/printBucketAclForUser.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAclForUser.js,samples/README.md)

__Usage:__


`node samples/printBucketAclForUser.js`


-----




### Print File Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/printFileAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAcl.js,samples/README.md)

__Usage:__


`node samples/printFileAcl.js`


-----




### Print File Acl For User

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/printFileAclForUser.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAclForUser.js,samples/README.md)

__Usage:__


`node samples/printFileAclForUser.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Release Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/releaseEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/releaseEventBasedHold.js`


-----




### Release Temporary Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/releaseTemporaryHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseTemporaryHold.js,samples/README.md)

__Usage:__


`node samples/releaseTemporaryHold.js`


-----




### Remove Bucket Conditional Binding

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketConditionalBinding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketConditionalBinding.js,samples/README.md)

__Usage:__


`node samples/removeBucketConditionalBinding.js`


-----




### Storage Remove Bucket Cors Configuration.

Removes bucket cors configuration.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketCors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketCors.js,samples/README.md)

__Usage:__


`node removeBucketCors.js <BUCKET_NAME>`


-----




### Remove Bucket Default Owner

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketDefaultOwner.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketDefaultOwner.js,samples/README.md)

__Usage:__


`node samples/removeBucketDefaultOwner.js`


-----




### Remove Bucket Iam Member

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketIamMember.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketIamMember.js,samples/README.md)

__Usage:__


`node samples/removeBucketIamMember.js`


-----




### Storage Remove Bucket Label.

Removes bucket label.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketLabel.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketLabel.js,samples/README.md)

__Usage:__


`node removeBucketLabel.js <BUCKET_NAME> labelone)`


-----




### Remove Bucket Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeBucketOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/removeBucketOwnerAcl.js`


-----




### Remove Default KMS Key.

Remove Default KMS Key.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeDefaultKMSKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeDefaultKMSKey.js,samples/README.md)

__Usage:__


`node removeDefaultKMSKey.js <BUCKET_NAME>`


-----




### Remove File Owner Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeFileOwnerAcl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeFileOwnerAcl.js,samples/README.md)

__Usage:__


`node samples/removeFileOwnerAcl.js`


-----




### Remove Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/removeRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/removeRetentionPolicy.js`


-----




### Rename File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/renameFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/renameFile.js,samples/README.md)

__Usage:__


`node samples/renameFile.js`


-----




### Rotate Encryption Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/rotateEncryptionKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/rotateEncryptionKey.js,samples/README.md)

__Usage:__


`node samples/rotateEncryptionKey.js`


-----




### Set Event Based Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setEventBasedHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setEventBasedHold.js,samples/README.md)

__Usage:__


`node samples/setEventBasedHold.js`


-----




### Set Public Access Prevention Enforced

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setPublicAccessPreventionEnforced.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setPublicAccessPreventionEnforced.js,samples/README.md)

__Usage:__


`node samples/setPublicAccessPreventionEnforced.js`


-----




### Set Public Access Prevention Inherited

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setPublicAccessPreventionInherited.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setPublicAccessPreventionInherited.js,samples/README.md)

__Usage:__


`node samples/setPublicAccessPreventionInherited.js`


-----




### Set RPO Async Turbo

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setRPOAsyncTurbo.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setRPOAsyncTurbo.js,samples/README.md)

__Usage:__


`node samples/setRPOAsyncTurbo.js`


-----




### Set RPO Default

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setRPODefault.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setRPODefault.js,samples/README.md)

__Usage:__


`node samples/setRPODefault.js`


-----




### Set Retention Policy

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setRetentionPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setRetentionPolicy.js,samples/README.md)

__Usage:__


`node samples/setRetentionPolicy.js`


-----




### Set Temporary Hold

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/setTemporaryHold.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setTemporaryHold.js,samples/README.md)

__Usage:__


`node samples/setTemporaryHold.js`


-----




### Stream File Download

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/streamFileDownload.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/streamFileDownload.js,samples/README.md)

__Usage:__


`node samples/streamFileDownload.js`


-----




### Stream File Upload

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/streamFileUpload.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/streamFileUpload.js,samples/README.md)

__Usage:__


`node samples/streamFileUpload.js`


-----




### Upload a directory to a bucket.

Uploads full hierarchy of a local directory to a bucket.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadDirectory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadDirectory.js,samples/README.md)

__Usage:__


`node files.js upload-directory <bucketName> <directoryPath>`


-----




### Upload Encrypted File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadEncryptedFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadEncryptedFile.js,samples/README.md)

__Usage:__


`node samples/uploadEncryptedFile.js`


-----




### Upload File

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFile.js,samples/README.md)

__Usage:__


`node samples/uploadFile.js`


-----




### Upload File With Kms Key

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFileWithKmsKey.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFileWithKmsKey.js,samples/README.md)

__Usage:__


`node samples/uploadFileWithKmsKey.js`


-----




### Upload From Memory

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadFromMemory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFromMemory.js,samples/README.md)

__Usage:__


`node samples/uploadFromMemory.js`


-----




### Upload Without Authentication

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadWithoutAuthentication.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadWithoutAuthentication.js,samples/README.md)

__Usage:__


`node samples/uploadWithoutAuthentication.js`


-----




### Upload Without Authentication Signed Url

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/uploadWithoutAuthenticationSignedUrl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadWithoutAuthenticationSignedUrl.js,samples/README.md)

__Usage:__


`node samples/uploadWithoutAuthenticationSignedUrl.js`


-----




### View Bucket Iam Members

View the [source code](https://github.com/googleapis/nodejs-storage/blob/main/samples/viewBucketIamMembers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/viewBucketIamMembers.js,samples/README.md)

__Usage:__


`node samples/viewBucketIamMembers.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/storage
