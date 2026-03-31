[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Spanner: Node.js Client](https://github.com/googleapis/nodejs-spanner)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/spanner.svg)](https://www.npmjs.com/package/@google-cloud/spanner)




[Cloud Spanner](https://cloud.google.com/spanner/docs/) is a fully managed, mission-critical, relational database service that
offers transactional consistency at global scale, schemas, SQL (ANSI 2011 with extensions),
and automatic, synchronous replication for high availability.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-spanner/blob/main/CHANGELOG.md).

* [Cloud Spanner Node.js Client API Reference][client-docs]
* [Cloud Spanner Documentation][product-docs]
* [github.com/googleapis/nodejs-spanner](https://github.com/googleapis/nodejs-spanner)

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
1.  [Enable the Cloud Spanner API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/spanner
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {Spanner} = require('@google-cloud/spanner');

// Creates a client
const spanner = new Spanner({projectId});

// Gets a reference to a Cloud Spanner instance and database
const instance = spanner.instance(instanceId);
const database = instance.database(databaseId);

// The query to execute
const query = {
  sql: 'SELECT 1',
};

// Execute a simple SQL statement
const [rows] = await database.run(query);
console.log(`Query: ${rows.length} found.`);
rows.forEach(row => console.log(row));

```
## Metrics

Cloud Spanner client supports [client-side metrics](https://cloud.google.com/spanner/docs/view-manage-client-side-metrics) that you can use along with server-side metrics to optimize performance and troubleshoot performance issues if they occur.

Client-side metrics are measured from the time a request leaves your application to the time your application receives the response. 
In contrast, server-side metrics are measured from the time Spanner receives a request until the last byte of data is sent to the client.

These metrics are enabled by default. You can opt out of using client-side metrics with the following code:

```javascript
const spanner = new Spanner({
        disableBuiltInMetrics: true
});
```

You can also disable these metrics by setting `SPANNER_DISABLE_BUILTIN_METRICS` to `true`.

> Note: Client-side metrics needs `monitoring.timeSeries.create` IAM permission to export metrics data. Ask your administrator to grant your service account the [Monitoring Metric Writer](https://cloud.google.com/iam/docs/roles-permissions/monitoring#monitoring.metricWriter) (roles/monitoring.metricWriter) IAM role on the project.

## Traces
Refer to the Observability README to know more about tracing support in the Cloud Spanner client.

## Multiplexed Sessions

Spanner's Multiplexed Sessions is now default enabled session mode in node client. This feature helps reduce
session management overhead and minimize session-related errors.

For a detailed explanation on multiplexed sessions, please refer to the [official documentation](https://cloud.google.com/spanner/docs/sessions#multiplexed_sessions).

## Regular Sessions

To use regular sessions, disable the multiplexed sessions and set the following environment variables to `false`:

* **For Read-Only Transactions:**
- `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS`
* **For Partitioned Operations:**
- `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS`
- `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_PARTITIONED_OPS`
* **For Read-Write Transactions:**
- `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS`
- `GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW`

For a detailed explanation on session modes and env configurations, please refer to the [official documentation](https://cloud.google.com/spanner/docs/sessions).


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-spanner/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Add and drop new database role | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/add-and-drop-new-database-role.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/add-and-drop-new-database-role.js,samples/README.md) |
| Backups-cancel | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-cancel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-cancel.js,samples/README.md) |
| Copies a source backup | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-copy-with-multiple-kms-keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-copy-with-multiple-kms-keys.js,samples/README.md) |
| Copies a source backup | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-copy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-copy.js,samples/README.md) |
| Backups-create-with-encryption-key | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create-with-encryption-key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create-with-encryption-key.js,samples/README.md) |
| Backups-create-with-multiple-kms-keys | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create-with-multiple-kms-keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create-with-multiple-kms-keys.js,samples/README.md) |
| Backups-create | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create.js,samples/README.md) |
| Backups-delete | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-delete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-delete.js,samples/README.md) |
| Backups-get-database-operations | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get-database-operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get-database-operations.js,samples/README.md) |
| Backups-get-operations | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get-operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get-operations.js,samples/README.md) |
| Backups-get | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get.js,samples/README.md) |
| Backups-restore-with-encryption-key | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore-with-encryption-key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore-with-encryption-key.js,samples/README.md) |
| Backups-restore-with-multiple-kms-keys | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore-with-multiple-kms-keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore-with-multiple-kms-keys.js,samples/README.md) |
| Backups-restore | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore.js,samples/README.md) |
| Backups-update | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-update.js,samples/README.md) |
| Backups | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups.js,samples/README.md) |
| Batch Write | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/batch-write.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/batch-write.js,samples/README.md) |
| Batch | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/batch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/batch.js,samples/README.md) |
| Creates a full backup schedule | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-full-backup-schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-full-backup-schedule.js,samples/README.md) |
| Creates an incremental backup schedule | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-incremental-backup-schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-incremental-backup-schedule.js,samples/README.md) |
| Create-instance-without-default-backup-schedules | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-instance-without-default-backup-schedules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-instance-without-default-backup-schedules.js,samples/README.md) |
| CRUD | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/crud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/crud.js,samples/README.md) |
| Adds split points to a database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-add-split-points.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-add-split-points.js,samples/README.md) |
| Creates a new database with a specific default leader | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-default-leader.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-default-leader.js,samples/README.md) |
| Database-create-with-encryption-key | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-encryption-key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-encryption-key.js,samples/README.md) |
| Database-create-with-multiple-kms-keys | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-multiple-kms-keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-multiple-kms-keys.js,samples/README.md) |
| Database-create-with-version-retention-period | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-version-retention-period.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-version-retention-period.js,samples/README.md) |
| Gets the schema definition of an existing database | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-get-ddl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-get-ddl.js,samples/README.md) |
| Gets the default leader option of an existing database | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-get-default-leader.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-get-default-leader.js,samples/README.md) |
| Updates the default leader of an existing database | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-update-default-leader.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-update-default-leader.js,samples/README.md) |
| Updates a Cloud Spanner Database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-update.js,samples/README.md) |
| Datatypes | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/datatypes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/datatypes.js,samples/README.md) |
| Deletes a backup schedule | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/delete-backup-schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/delete-backup-schedule.js,samples/README.md) |
| Runs an execute sql request with directed read options | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/directed-reads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/directed-reads.js,samples/README.md) |
| Delete using DML returning. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-delete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-delete.js,samples/README.md) |
| Insert using DML returning. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-insert.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-insert.js,samples/README.md) |
| Update using DML returning. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-update.js,samples/README.md) |
| DML | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml.js,samples/README.md) |
| Enable fine grained access control | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/enable-fine-grained-access.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/enable-fine-grained-access.js,samples/README.md) |
| Gets a backup schedule | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-backup-schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-backup-schedule.js,samples/README.md) |
| Get-commit-stats | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-commit-stats.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-commit-stats.js,samples/README.md) |
| List database roles | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-database-roles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-database-roles.js,samples/README.md) |
| Gets the instance config metadata for the configuration nam6 | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-instance-config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-instance-config.js,samples/README.md) |
| Creates a new value-storing index | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-create-storing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-create-storing.js,samples/README.md) |
| Creates a new index | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-create.js,samples/README.md) |
| Executes a read-only SQL query using an existing index. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-query-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-query-data.js,samples/README.md) |
| Reads data using an existing storing index. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-read-data-with-storing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-read-data-with-storing.js,samples/README.md) |
| Read data using an existing index. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-read-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-read-data.js,samples/README.md) |
| Indexing | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/indexing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/indexing.js,samples/README.md) |
| Creates a user-managed instance configuration. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-create.js,samples/README.md) |
| Deletes a user-managed instance configuration. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-delete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-delete.js,samples/README.md) |
| Lists the instance configuration operations. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-get-operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-get-operations.js,samples/README.md) |
| Updates a user-managed instance configuration. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-update.js,samples/README.md) |
| Creates a new instance partition | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-partition-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-partition-create.js,samples/README.md) |
| Updates an instance. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-update.js,samples/README.md) |
| Creates a instance with asymmetric autoscaling config. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-asymmetric-autoscaling-config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-asymmetric-autoscaling-config.js,samples/README.md) |
| Creates a instance with autoscaling config. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-autoscaling-config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-autoscaling-config.js,samples/README.md) |
| Instance-with-processing-units | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-processing-units.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-processing-units.js,samples/README.md) |
| Instance | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance.js,samples/README.md) |
| Json-add-column | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-add-column.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-add-column.js,samples/README.md) |
| Json-query-parameter | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-query-parameter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-query-parameter.js,samples/README.md) |
| Json-update-data | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-update-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-update-data.js,samples/README.md) |
| Lists backup schedules of a database | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-backup-schedules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-backup-schedules.js,samples/README.md) |
| Lists all databases on the selected instance | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-databases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-databases.js,samples/README.md) |
| Lists all the available instance configs for the selected project. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-instance-configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-instance-configs.js,samples/README.md) |
| Executes request with max commit delay | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/max-commit-delay.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/max-commit-delay.js,samples/README.md) |
| Numeric-add-column | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-add-column.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-add-column.js,samples/README.md) |
| Numeric-query-parameter | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-query-parameter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-query-parameter.js,samples/README.md) |
| Numeric-update-data | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-update-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-update-data.js,samples/README.md) |
| Observability (Tracing) with OpenTelemetry using OTLP | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/observability-traces-otlp.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/observability-traces-otlp.js,samples/README.md) |
| Observability (Tracing) with OpenTelemetry | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/observability-traces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/observability-traces.js,samples/README.md) |
| Adds a column to an existing table in a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-add-column.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-add-column.js,samples/README.md) |
| Showcase the rules for case-sensitivity and case folding for a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-case-sensitivity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-case-sensitivity.js,samples/README.md) |
| Creates a PostgreSQL Database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-database-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-database-create.js,samples/README.md) |
| Use cast operator to cast from one data type to another in a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-datatypes-casting.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-datatypes-casting.js,samples/README.md) |
| Execute a batch of DML statements on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-batch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-batch.js,samples/README.md) |
| Updates data in a table in a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-getting-started-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-getting-started-update.js,samples/README.md) |
| Execute a Partitioned DML on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-partitioned.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-partitioned.js,samples/README.md) |
| Delete using DML returning on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-delete.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-delete.js,samples/README.md) |
| Insert using DML returning on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-insert.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-insert.js,samples/README.md) |
| Update using DML returning on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-update.js,samples/README.md) |
| Execute a DML statement with parameters on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-with-parameter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-with-parameter.js,samples/README.md) |
| Calls a server side function on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-functions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-functions.js,samples/README.md) |
| Creates a new storing index in a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-index-create-storing.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-index-create-storing.js,samples/README.md) |
| Created interleaved table hierarchy using PostgreSQL dialect. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-interleaving.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-interleaving.js,samples/README.md) |
| Showcase how add a jsonb column in a PostgreSQL table. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-add-column.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-add-column.js,samples/README.md) |
| Showcase how query data to a jsonb column in a PostgreSQL table. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-query-parameter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-query-parameter.js,samples/README.md) |
| Showcase how update data to a jsonb column in a PostgreSQL table. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-update-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-update-data.js,samples/README.md) |
| Showcase how to work with the PostgreSQL NUMERIC/DECIMAL data type on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-numeric-data-type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-numeric-data-type.js,samples/README.md) |
| Showcases how a Spanner PostgreSQL database orders null values in a query. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-ordering-nulls.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-ordering-nulls.js,samples/README.md) |
| Execute a query with parameters on a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-query-parameter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-query-parameter.js,samples/README.md) |
| Query the information schema metadata in a Spanner PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-schema-information.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-schema-information.js,samples/README.md) |
| Alters a sequence in a PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-alter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-alter.js,samples/README.md) |
| Creates sequence in PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-create.js,samples/README.md) |
| Drops a sequence in PostgreSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-drop.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-drop.js,samples/README.md) |
| Proto-query-data | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-query-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-query-data.js,samples/README.md) |
| Creates a new database with a proto column and enum | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-type-add-column.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-type-add-column.js,samples/README.md) |
| Proto-update-data-dml | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-update-data-dml.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-update-data-dml.js,samples/README.md) |
| Proto-update-data | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-update-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-update-data.js,samples/README.md) |
| Queryoptions | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/queryoptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/queryoptions.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Read data with database role | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/read-data-with-database-role.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/read-data-with-database-role.js,samples/README.md) |
| Performs a read-write transaction with read lock mode option | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/read-lock-mode.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/read-lock-mode.js,samples/README.md) |
| Performs a read-write transaction with isolation level option | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/repeatable-reads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/repeatable-reads.js,samples/README.md) |
| Sets a request tag for a single query | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/request-tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/request-tag.js,samples/README.md) |
| Run Batch update with RPC priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-batch-dml.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-batch-dml.js,samples/README.md) |
| Run partitioned update with RPC priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-partitioned-dml.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-partitioned-dml.js,samples/README.md) |
| Create partitions with RPC priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-query-partitions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-query-partitions.js,samples/README.md) |
| Read data with RPC Priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-read.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-read.js,samples/README.md) |
| Query data with RPC Priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-run.js,samples/README.md) |
| Run transaction with RPC priority | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-transaction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-transaction.js,samples/README.md) |
| Schema | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/schema.js,samples/README.md) |
| Alters a sequence in a GoogleSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-alter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-alter.js,samples/README.md) |
| Creates sequence in GoogleSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-create.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-create.js,samples/README.md) |
| Drops a sequence in GoogleSQL database. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-drop.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-drop.js,samples/README.md) |
| Executes a read/write transaction with statement timeout | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/statement-timeout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/statement-timeout.js,samples/README.md) |
| Struct | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/struct.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/struct.js,samples/README.md) |
| Alters a table with foreign key delete cascade action | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-alter-with-foreign-key-delete-cascade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-alter-with-foreign-key-delete-cascade.js,samples/README.md) |
| Creates a table with foreign key delete cascade action | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-create-with-foreign-key-delete-cascade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-create-with-foreign-key-delete-cascade.js,samples/README.md) |
| Drops a foreign key constraint with delete cascade action | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-drop-foreign-key-constraint-delete-cascade.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-drop-foreign-key-constraint-delete-cascade.js,samples/README.md) |
| Timestamp | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/timestamp.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/timestamp.js,samples/README.md) |
| Executes a read/write transaction with transaction and request tags | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction-tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction-tag.js,samples/README.md) |
| Executes a read/write transaction with transaction timeout | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction-timeout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction-timeout.js,samples/README.md) |
| Transaction | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction.js,samples/README.md) |
| Updates a backup schedule | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/update-backup-schedule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/update-backup-schedule.js,samples/README.md) |
| Updates an instance. | [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/update-instance-default-backup-schedule-type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/update-instance-default-backup-schedule-type.js,samples/README.md) |



The [Cloud Spanner Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/spanner@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-spanner/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-spanner/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/spanner/latest
[product-docs]: https://cloud.google.com/spanner/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=spanner.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
