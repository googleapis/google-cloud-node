[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Storage: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Storage](https://cloud.google.com/storage/docs) allows world-wide storage and retrieval of any amount of data at any time. You can use Google Cloud Storage for a range of scenarios including serving website content, storing data for archival and disaster recovery, or distributing large data objects to users via direct download.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [ACL (Access Control Lists)](#acl-access-control-lists)
  * [Buckets](#buckets)
  * [Encryption](#encryption)
  * [Files](#files)
  * [Notifications](#notifications)
  * [Requester Pays](#requester-pays)
  * [Bucket Lock](#bucket-lock)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### ACL (Access Control Lists)

View the [source code][acl_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/acl.js,samples/README.md)

__Usage:__ `node acl.js --help`

```
acl.js <command>

Commands:
  acl.js print-bucket-acl <bucketName>                          Prints the ACL for a bucket.
  acl.js print-bucket-acl-for-user <bucketName> <userEmail>     Prints a user's ACL for a bucket.
  acl.js add-bucket-owner <bucketName> <userEmail>              Adds a user as an owner of a bucket.
  acl.js remove-bucket-owner <bucketName> <userEmail>           Removes a user from the ACL of a bucket.
  acl.js add-bucket-default-owner <bucketName> <userEmail>      Adds a user as an owner in the default ACL of a bucket.
  acl.js remove-bucket-default-owner <bucketName> <userEmail>   Removes a user from the default ACL of a bucket.
  acl.js print-file-acl <bucketName> <fileName>                 Prints the ACL for a file.
  acl.js print-file-acl-for-user <bucketName> <fileName>        Prints a user's ACL for a file.
  <userEmail>
  acl.js add-file-owner <bucketName> <fileName> <userEmail>     Adds a user as an owner of a file.
  acl.js remove-file-owner <bucketName> <fileName> <userEmail>  Removes a user from the ACL of a file.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node acl.js print-bucket-acl my-bucket
  node acl.js print-bucket-acl-for-user my-bucket bob@company.com
  node acl.js add-bucket-owner my-bucket bob@company.com
  node acl.js remove-bucket-owner my-bucket bob@company.com
  node acl.js add-bucket-default-owner my-bucket bob@company.com
  node acl.js remove-bucket-default-owner my-bucket bob@company.com
  node acl.js print-file-acl my-bucket file.txt
  node acl.js print-file-acl-for-user my-bucket file.txt bob@company.com
  node acl.js add-file-owner my-bucket file.txt bob@company.com
  node acl.js remove-file-owner my-bucket file.txt bob@company.com

For more information, see https://cloud.google.com/storage/docs/access-control/create-manage-lists
```

[acl_0_docs]: https://cloud.google.com/storage/docs/access-control/create-manage-lists
[acl_0_code]: acl.js

### Buckets

View the [source code][buckets_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/buckets.js,samples/README.md)

__Usage:__ `node buckets.js --help`

```
buckets.js <command>

Commands:
  buckets.js create <bucket>                                    Creates a new bucket.
  buckets.js list                                               Lists all buckets in the current project.
  buckets.js enable-default-kms-key <bucket>                    Sets the default KMS key for the specified bucket.
  <defaultKmsKeyName>
  buckets.js delete <bucket>                                    Deletes a bucket.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node buckets.js create my-bucket                         Creates a new bucket named "my-bucket".
  node buckets.js list                                     Lists all buckets in the current project.
  node buckets.js enable-default-kms-key my-bucket my-key  Sets the default KMS key for my-bucket.
  node buckets.js delete my-bucket                         Deletes a bucket named "my-bucket".

For more information, see https://cloud.google.com/storage/docs
```

[buckets_1_docs]: https://cloud.google.com/storage/docs
[buckets_1_code]: buckets.js

### Encryption

View the [source code][encryption_2_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/encryption.js,samples/README.md)

__Usage:__ `node encryption.js --help`

```
encryption.js <command>

Commands:
  encryption.js generate-encryption-key                         Generate a sample encryption key.
  encryption.js upload <bucketName> <srcFilename>               Encrypts and uploads a file.
  <destFilename> <key>
  encryption.js download <bucketName> <srcFilename>             Decrypts and downloads a file.
  <destFilename> <key>
  encryption.js rotate <bucketName> <fileName> <oldKey>         Rotates encryption keys for a file.
  <newKey>

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node encryption.js generate-encryption-key                    Generate a sample encryption key.
  node encryption.js upload my-bucket ./resources/test.txt      Encrypts and uploads "resources/test.txt" to
  file_encrypted.txt QxhqaZEqBGVTW55HhQw9Q=                     "gs://my-bucket/file_encrypted.txt".
  node encryption.js download my-bucket file_encrypted.txt      Decrypts and downloads
  ./file.txt QxhqaZEqBGVTW55HhQw9Q=                             "gs://my-bucket/file_encrypted.txt" to "./file.txt".
  node encryption.js rotate my-bucket file_encrypted.txt        Rotates encryption keys for
  QxhqaZEqBGVTW55HhQw9Q= SxafpsdfSDFS89sds9Q=                   "gs://my-bucket/file_encrypted.txt".

For more information, see https://cloud.google.com/storage/docs
```

[encryption_2_docs]: https://cloud.google.com/storage/docs
[encryption_2_code]: encryption.js

### Files

View the [source code][files_3_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/files.js,samples/README.md)

__Usage:__ `node files.js --help`

```
files.js <command>

Commands:
  files.js list <bucketName> [prefix] [delimiter]               Lists files in a bucket, optionally filtering by a
                                                                prefix.
  files.js upload <bucketName> <srcFileName>                    Uploads a local file to a bucket.
  files.js upload-with-kms-key <bucketName> <srcFileName>       Uploads a local file to a bucket using a KMS key.
  <kmsKeyName>
  files.js download <bucketName> <srcFileName> <destFileName>   Downloads a file from a bucket.
  files.js delete <bucketName> <fileName>                       Deletes a file from a bucket.
  files.js get-metadata <bucketName> <fileName>                 Gets the metadata for a file.
  files.js make-public <bucketName> <fileName>                  Makes a file public.
  files.js generate-signed-url <bucketName> <fileName>          Generates a signed URL for a file.
  files.js move <bucketName> <srcFileName> <destFileName>       Moves a file to a new location within the same bucket,
                                                                i.e. rename the file.
  files.js copy <srcBucketName> <srcFileName> <destBucketName>  Copies a file in a bucket to another bucket.
  <destFileName>

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node files.js list my-bucket                                  Lists files in "my-bucket".
  node files.js list my-bucket public/                          Lists files in "my-bucket" filtered by prefix "public/".
  node files.js upload my-bucket ./file.txt                     Uploads "./file.txt" to "my-bucket".
  node files.js upload-with-kms-key my-bucket ./file.txt        Uploads "./file.txt" to "my-bucket" using "my-key".
  my-key
  node files.js download my-bucket file.txt ./file.txt          Downloads "gs://my-bucket/file.txt" to "./file.txt".
  node files.js delete my-bucket file.txt                       Deletes "gs://my-bucket/file.txt".
  node files.js get-metadata my-bucket file.txt                 Gets the metadata for "gs://my-bucket/file.txt".
  node files.js make-public my-bucket file.txt                  Makes "gs://my-bucket/file.txt" public.
  node files.js move my-bucket file.txt file2.txt               Renames "gs://my-bucket/file.txt" to
                                                                "gs://my-bucket/file2.txt".
  node files.js copy my-bucket file.txt my-other-bucket         Copies "gs://my-bucket/file.txt" to
  file.txt                                                      "gs://my-other-bucket/file.txt".

For more information, see https://cloud.google.com/storage/docs
```

[files_3_docs]: https://cloud.google.com/storage/docs
[files_3_code]: files.js

### Notifications

View the [source code][notifications_4_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/notifications.js,samples/README.md)

__Usage:__ `node notifications.js --help`

```
notifications.js <command>

Commands:
  notifications.js create <bucketName> <topic>                 Creates a new notification
  notifications.js list <bucketName>                           Lists notifications for a given bucket.
  notifications.js get-metadata <bucketName> <notificationId>  Gets metadata for a notification.
  notifications.js delete <bucketName> <notificationId>        Deletes a notification from a bucket.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node notifications.js create my-bucket my-topic  Creates a notification subscription.
  node notifications.js list my-bucket             Lists notifications associated with "my-bucket".
  node notifications.js get-metadata my-bucket 1   Gets the metadata for notification "1" attached to "my-bucket".
  node notifications.js delete my-bucket 1         Deletes the notification "1" from "my-bucket".

For more information, see https://cloud.google.com/storage/docs
```

[notifications_4_docs]: https://cloud.google.com/storage/docs
[notifications_4_code]: notifications.js

### Requester Pays

View the [source code][requesterPays_5_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/requesterPays.js,samples/README.md)

__Usage:__ `node requesterPays.js --help`

```
requesterPays.js <command>

Commands:
  requesterPays.js enable <bucket>                              Enables requester-pays requests on a bucket.
  requesterPays.js disable <bucket>                             Disables requester-pays requests on a bucket.
  requesterPays.js get-status <bucket>                          Determines whether requester-pays requests are enabled
                                                                on a bucket.
  requesterPays.js download <bucketName> <srcFileName>          Downloads a file from a bucket using requester-pays
  <destFileName>                                                requests.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node requesterPays.js enable my-bucket                        Enables requester-pays requests on a bucket named
                                                                "my-bucket".
  node requesterPays.js disable my-bucket                       Disables requester-pays requests on a bucket named
                                                                "my-bucket".
  node requesterPays.js get-status my-bucket                    Determines whether requester-pays requests are enabled
                                                                for a bucket named "my-bucket".
  node requesterPays.js download my-bucket file.txt ./file.txt  Downloads "gs://my-bucket/file.txt" to "./file.txt"
                                                                using requester-pays requests.

For more information, see https://cloud.google.com/storage/docs
```

[requesterPays_5_docs]: https://cloud.google.com/storage/docs
[requesterPays_5_code]: requesterPays.js

### Bucket Lock

View the [source code][bucketLock_6_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/bucketLock.js,samples/README.md)

__Usage:__ `node bucketLock.js --help`

```
bucketLock.js <command>

Commands:
  bucketLock.js set-retention-policy <bucketName> <period>      Defines a retention policy on a given bucket.
  bucketLock.js remove-retention-policy <bucketName>            Removes a retention policy on a given bucket if the
                                                                policy is unlocked.
  bucketLock.js get-retention-policy <bucketName>               Get a retention policy for a given bucket.
  bucketLock.js enable-default-event-based-hold <bucketName>    Enable default event-based hold for a given bucket.
  bucketLock.js disable-default-event-based-hold <bucketName>   Disable default event-based hold for a given bucket.
  bucketLock.js set-event-based-hold <bucketName> <fileName>    Set an event-based hold for a given file.
  bucketLock.js release-event-based-hold <bucketName>           Release an event-based hold for a given file.
  <fileName>
  bucketLock.js set-temporary-hold <bucketName> <fileName>      Set a temporary hold for a given file.
  bucketLock.js release-temporary-hold <bucketName> <fileName>  Release a temporary hold for a given file.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node bucketLock.js set-retention-policy my-bucket 5           Defines a retention policy of 5 seconds on a
                                                                "my-bucket".
  node bucketLock.js remove-retention-policy my-bucket          Removes a retention policy from "my-bucket".
  node bucketLock.js get-retention-policy my-bucket             Get the retention policy for "my-bucket".
  node bucketLock.js enable-default-event-based-hold my-bucket  Enable a default event-based hold for "my-bucket".
  node bucketLock.js disable-default-event-based-hold           Disable a default-event based hold for "my-bucket".
  my-bucket
  node bucketLock.js get-default-event-based-hold my-bucket     Get the value of a default-event-based hold for
                                                                "my-bucket".
  node bucketLock.js set-event-based-hold my-bucket my-file     Sets an event-based hold on "my-file".
  node bucketLock.js release-event-based-hold my-bucket         Releases an event-based hold on "my-file".
  my-file
  node bucketLock.js set-temporary-hold my-bucket my-file       Sets a temporary hold on "my-file".
  node bucketLock.js release-temporary-hold my-bucket my-file   Releases a temporary hold on "my-file".

For more information, see https://cloud.google.com/storage/docs
```

[bucketLock_6_docs]: https://cloud.google.com/storage/docs
[bucketLock_6_code]: bucketLock.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-storage&page=editor&open_in_editor=samples/README.md
