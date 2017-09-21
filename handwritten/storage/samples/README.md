<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Storage: Node.js Samples

[![Build](https://storage.googleapis.com/.svg)]()

[Cloud Storage](https://cloud.google.com/storage/docs) allows world-wide storage and retrieval of any amount of data at any time. You can use Google Cloud Storage for a range of scenarios including serving website content, storing data for archival and disaster recovery, or distributing large data objects to users via direct download.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [ACL (Access Control Lists)](#acl-access-control-lists)
  * [Buckets](#buckets)
  * [Encryption](#encryption)
  * [Files](#files)
  * [Requester Pays](#requester-pays)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### ACL (Access Control Lists)

View the [documentation][acl_0_docs] or the [source code][acl_0_code].

__Usage:__ `node acl.js --help`

```
Commands:
  print-bucket-acl <bucketName>                                Prints the ACL for a bucket.
  print-bucket-acl-for-user <bucketName> <userEmail>           Prints a user's ACL for a bucket.
  add-bucket-owner <bucketName> <userEmail>                    Adds a user as an owner of a bucket.
  remove-bucket-owner <bucketName> <userEmail>                 Removes a user from the ACL of a bucket.
  add-bucket-default-owner <bucketName> <userEmail>            Adds a user as an owner in the default ACL of a bucket.
  remove-bucket-default-owner <bucketName> <userEmail>         Removes a user from the default ACL of a bucket.
  print-file-acl <bucketName> <fileName>                       Prints the ACL for a file.
  print-file-acl-for-user <bucketName> <fileName> <userEmail>  Prints a user's ACL for a file.
  add-file-owner <bucketName> <fileName> <userEmail>           Adds a user as an owner of a file.
  remove-file-owner <bucketName> <fileName> <userEmail>        Removes a user from the ACL of a file.

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

View the [documentation][buckets_1_docs] or the [source code][buckets_1_code].

__Usage:__ `node buckets.js --help`

```
Commands:
  create <bucket>  Creates a new bucket.
  list             Lists all buckets in the current project.
  delete <bucket>  Deletes a bucket.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node buckets.js create my-bucket  Creates a new bucket named "my-bucket".
  node buckets.js list              Lists all buckets in the current project.
  node buckets.js delete my-bucket  Deletes a bucket named "my-bucket".

For more information, see https://cloud.google.com/storage/docs
```

[buckets_1_docs]: https://cloud.google.com/storage/docs
[buckets_1_code]: buckets.js

### Encryption

View the [documentation][encryption_2_docs] or the [source code][encryption_2_code].

__Usage:__ `node encryption.js --help`

```
Commands:
  generate-encryption-key                                   Generate a sample encryption key.
  upload <bucketName> <srcFilename> <destFilename> <key>    Encrypts and uploads a file.
  download <bucketName> <srcFilename> <destFilename> <key>  Decrypts and downloads a file.
  rotate <bucketName> <fileName> <oldkey> <newKey>          Rotates encryption keys for a file.

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

View the [documentation][files_3_docs] or the [source code][files_3_code].

__Usage:__ `node files.js --help`

```
Commands:
  list <bucketName> [prefix] [delimiter]                        Lists files in a bucket, optionally filtering by a
                                                                prefix.
  upload <bucketName> <srcFileName>                             Uploads a local file to a bucket.
  download <bucketName> <srcFileName> <destFileName>            Downloads a file from a bucket.
  delete <bucketName> <fileName>                                Deletes a file from a bucket.
  get-metadata <bucketName> <fileName>                          Gets the metadata for a file.
  make-public <bucketName> <fileName>                           Makes a file public.
  generate-signed-url <bucketName> <fileName>                   Generates a signed URL for a file.
  move <bucketName> <srcFileName> <destFileName>                Moves a file to a new location within the same bucket,
                                                                i.e. rename the file.
  copy <srcBucketName> <srcFileName> <destBucketName>           Copies a file in a bucket to another bucket.
  <destFileName>

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node files.js list my-bucket                                  Lists files in "my-bucket".
  node files.js list my-bucket public/                          Lists files in "my-bucket" filtered by prefix "public/".
  node files.js upload my-bucket ./file.txt                     Uploads "./file.txt" to "my-bucket".
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

### Requester Pays

View the [documentation][requesterPays_4_docs] or the [source code][requesterPays_4_code].

__Usage:__ `node requesterPays.js --help`

```
Commands:
  enable <bucket>                                     Enables requester-pays requests on a bucket.
  disable <bucket>                                    Disables requester-pays requests on a bucket.
  get-status <bucket>                                 Determines whether requester-pays requests are enabled on a
                                                      bucket.
  download <bucketName> <srcFileName> <destFileName>  Downloads a file from a bucket using requester-pays requests.

Options:
  --help     Show help                                                                                         [boolean]
  --version  Show version number                                                                               [boolean]

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

[requesterPays_4_docs]: https://cloud.google.com/storage/docs
[requesterPays_4_code]: requesterPays.js
