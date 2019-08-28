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
  * [Acl](#acl)
  * [Bucket Lock](#bucket-lock)
  * [Storage Get Bucket Metadata.](#storage-get-bucket-metadata.)
  * [Buckets](#buckets)
  * [Encryption](#encryption)
  * [Files](#files)
  * [Activate HMAC SA Key.](#activate-hmac-sa-key.)
  * [Create HMAC SA Key.](#create-hmac-sa-key.)
  * [Deactivate HMAC SA Key.](#deactivate-hmac-sa-key.)
  * [Delete HMAC SA Key.](#delete-hmac-sa-key.)
  * [Get HMAC SA Key Metadata.](#get-hmac-sa-key-metadata.)
  * [List HMAC SA Keys Metadata.](#list-hmac-sa-keys-metadata.)
  * [Iam](#iam)
  * [Notifications](#notifications)
  * [Quickstart](#quickstart)
  * [Requester Pays](#requester-pays)
  * [Upload a directory to a bucket.](#upload-a-directory-to-a-bucket.)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-storage#using-the-client-library).

## Samples



### Acl

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/acl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/acl.js,samples/README.md)

__Usage:__


`node acl.js`


-----




### Bucket Lock

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/bucketLock.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketLock.js,samples/README.md)

__Usage:__


`node bucketLock.js`


-----




### Storage Get Bucket Metadata.

Get bucket metadata.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/bucketMetadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketMetadata.js,samples/README.md)

__Usage:__


`node bucketMetadata.js <BUCKET_NAME>`


-----




### Buckets

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/buckets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/buckets.js,samples/README.md)

__Usage:__


`node buckets.js`


-----




### Encryption

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/encryption.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/encryption.js,samples/README.md)

__Usage:__


`node encryption.js`


-----




### Files

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/files.js,samples/README.md)

__Usage:__


`node files.js`


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




### Iam

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/iam.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/iam.js,samples/README.md)

__Usage:__


`node iam.js`


-----




### Notifications

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/notifications.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/notifications.js,samples/README.md)

__Usage:__


`node notifications.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js`


-----




### Requester Pays

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/requesterPays.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/requesterPays.js,samples/README.md)

__Usage:__


`node requesterPays.js`


-----




### Upload a directory to a bucket.

Uploads full hierarchy of a local directory to a bucket.

View the [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadDirectory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadDirectory.js,samples/README.md)

__Usage:__


`node files.js upload-directory <bucketName> <directoryPath>`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/storage