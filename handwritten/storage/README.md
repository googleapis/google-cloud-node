[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Storage: Node.js Client](https://github.com/googleapis/nodejs-storage)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/storage.svg)](https://www.npmjs.org/package/@google-cloud/storage)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-storage/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-storage)




> Node.js idiomatic client for [Cloud Storage][product-docs].

[Cloud Storage](https://cloud.google.com/storage/docs) allows world-wide
storage and retrieval of any amount of data at any time. You can use Google
Cloud Storage for a range of scenarios including serving website content,
storing data for archival and disaster recovery, or distributing large data
objects to users via direct download.


* [Google Cloud Storage Node.js Client API Reference][client-docs]
* [Google Cloud Storage Documentation][product-docs]
* [github.com/googleapis/nodejs-storage](https://github.com/googleapis/nodejs-storage)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Storage API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/storage
```


### Using the client library

```javascript
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();
  // Creates a client from a Google service account key.
  // const storage = new Storage({keyFilename: "key.json"});

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const bucketName = 'bucket-name';

  async function createBucket() {
    // Creates the new bucket
    await storage.createBucket(bucketName);
    console.log(`Bucket ${bucketName} created.`);
  }

  createBucket().catch(console.error);

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-storage/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Add Bucket Conditional Binding | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketConditionalBinding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketConditionalBinding.js,samples/README.md) |
| Add Bucket Default Owner Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketDefaultOwnerAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketDefaultOwnerAcl.js,samples/README.md) |
| Add Bucket Iam Member | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketIamMember.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketIamMember.js,samples/README.md) |
| Add Bucket Owner Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addBucketOwnerAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addBucketOwnerAcl.js,samples/README.md) |
| Add File Owner Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/addFileOwnerAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/addFileOwnerAcl.js,samples/README.md) |
| Storage Get Bucket Metadata. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/bucketMetadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketMetadata.js,samples/README.md) |
| Copy File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/copyFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/copyFile.js,samples/README.md) |
| Create New Bucket | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/createNewBucket.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNewBucket.js,samples/README.md) |
| Create Notification | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/createNotification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/createNotification.js,samples/README.md) |
| Delete Bucket | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteBucket.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteBucket.js,samples/README.md) |
| Delete File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteFile.js,samples/README.md) |
| Delete Notification | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/deleteNotification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/deleteNotification.js,samples/README.md) |
| Disable Default Event Based Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableDefaultEventBasedHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableDefaultEventBasedHold.js,samples/README.md) |
| Disable Requester Pays | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableRequesterPays.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableRequesterPays.js,samples/README.md) |
| Disable Uniform Bucket Level Access | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/disableUniformBucketLevelAccess.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/disableUniformBucketLevelAccess.js,samples/README.md) |
| Download Encrypted File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadEncryptedFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadEncryptedFile.js,samples/README.md) |
| Download File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFile.js,samples/README.md) |
| Download File Using Requester Pays | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/downloadFileUsingRequesterPays.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/downloadFileUsingRequesterPays.js,samples/README.md) |
| Enable Default Event Based Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableDefaultEventBasedHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultEventBasedHold.js,samples/README.md) |
| Enable Default KMS Key | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableDefaultKMSKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableDefaultKMSKey.js,samples/README.md) |
| Enable Requester Pays | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableRequesterPays.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableRequesterPays.js,samples/README.md) |
| Enable Uniform Bucket Level Access | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/enableUniformBucketLevelAccess.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/enableUniformBucketLevelAccess.js,samples/README.md) |
| Storage Set File Metadata. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/fileSetMetadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/fileSetMetadata.js,samples/README.md) |
| Generate Encryption Key | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateEncryptionKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateEncryptionKey.js,samples/README.md) |
| Generate Signed Url | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateSignedUrl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateSignedUrl.js,samples/README.md) |
| Generate V4 Read Signed Url | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateV4ReadSignedUrl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4ReadSignedUrl.js,samples/README.md) |
| Generate V4 Upload Signed Url | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/generateV4UploadSignedUrl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/generateV4UploadSignedUrl.js,samples/README.md) |
| Get Default Event Based Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getDefaultEventBasedHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getDefaultEventBasedHold.js,samples/README.md) |
| Get Metadata | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getMetadata.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadata.js,samples/README.md) |
| Get Metadata Notifications | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getMetadataNotifications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getMetadataNotifications.js,samples/README.md) |
| Get Requester Pays Status | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getRequesterPaysStatus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRequesterPaysStatus.js,samples/README.md) |
| Get Retention Policy | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getRetentionPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getRetentionPolicy.js,samples/README.md) |
| Get Uniform Bucket Level Access | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/getUniformBucketLevelAccess.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/getUniformBucketLevelAccess.js,samples/README.md) |
| Activate HMAC SA Key. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyActivate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyActivate.js,samples/README.md) |
| Create HMAC SA Key. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyCreate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyCreate.js,samples/README.md) |
| Deactivate HMAC SA Key. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyDeactivate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDeactivate.js,samples/README.md) |
| Delete HMAC SA Key. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyDelete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyDelete.js,samples/README.md) |
| Get HMAC SA Key Metadata. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeyGet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeyGet.js,samples/README.md) |
| List HMAC SA Keys Metadata. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/hmacKeysList.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/hmacKeysList.js,samples/README.md) |
| List Buckets | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listBuckets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listBuckets.js,samples/README.md) |
| List Files | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFiles.js,samples/README.md) |
| List Files By Prefix | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listFilesByPrefix.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listFilesByPrefix.js,samples/README.md) |
| List Notifications | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/listNotifications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/listNotifications.js,samples/README.md) |
| Lock Retention Policy | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/lockRetentionPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/lockRetentionPolicy.js,samples/README.md) |
| Make Public | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/makePublic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/makePublic.js,samples/README.md) |
| Move File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/moveFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/moveFile.js,samples/README.md) |
| Notifications | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/notifications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/notifications.js,samples/README.md) |
| Print Bucket Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printBucketAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAcl.js,samples/README.md) |
| Print Bucket Acl For User | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printBucketAclForUser.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printBucketAclForUser.js,samples/README.md) |
| Print File Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printFileAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAcl.js,samples/README.md) |
| Print File Acl For User | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/printFileAclForUser.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/printFileAclForUser.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Release Event Based Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/releaseEventBasedHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseEventBasedHold.js,samples/README.md) |
| Release Temporary Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/releaseTemporaryHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/releaseTemporaryHold.js,samples/README.md) |
| Remove Bucket Default Owner | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketDefaultOwner.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketDefaultOwner.js,samples/README.md) |
| Remove Bucket Iam Member | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketIamMember.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketIamMember.js,samples/README.md) |
| Remove Bucket Owner Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeBucketOwnerAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeBucketOwnerAcl.js,samples/README.md) |
| Remove File Owner Acl | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeFileOwnerAcl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeFileOwnerAcl.js,samples/README.md) |
| Remove Retention Policy | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/removeRetentionPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/removeRetentionPolicy.js,samples/README.md) |
| Rotate Encryption Key | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/rotateEncryptionKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/rotateEncryptionKey.js,samples/README.md) |
| Set Event Based Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setEventBasedHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setEventBasedHold.js,samples/README.md) |
| Set Retention Policy | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setRetentionPolicy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setRetentionPolicy.js,samples/README.md) |
| Set Temporaryd Hold | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/setTemporarydHold.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/setTemporarydHold.js,samples/README.md) |
| Upload a directory to a bucket. | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadDirectory.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadDirectory.js,samples/README.md) |
| Upload Encrypted File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadEncryptedFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadEncryptedFile.js,samples/README.md) |
| Upload File | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFile.js,samples/README.md) |
| Upload File With Kms Key | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/uploadFileWithKmsKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/uploadFileWithKmsKey.js,samples/README.md) |
| View Bucket Iam Members | [source code](https://github.com/googleapis/nodejs-storage/blob/master/samples/viewBucketIamMembers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/viewBucketIamMembers.js,samples/README.md) |



The [Google Cloud Storage Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-storage/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-storage/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/storage/latest
[product-docs]: https://cloud.google.com/storage
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=storage-api.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
