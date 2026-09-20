[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Spanner: Node.js Samples](https://github.com/googleapis/nodejs-spanner)

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Spanner](https://cloud.google.com/spanner/docs/) is a fully managed, mission-critical, relational database service that
offers transactional consistency at global scale, schemas, SQL (ANSI 2011 with extensions),
and automatic, synchronous replication for high availability.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Add and drop new database role](#add-and-drop-new-database-role)
  * [Backups-cancel](#backups-cancel)
  * [Copies a source backup](#copies-a-source-backup)
  * [Copies a source backup](#copies-a-source-backup)
  * [Backups-create-with-encryption-key](#backups-create-with-encryption-key)
  * [Backups-create-with-multiple-kms-keys](#backups-create-with-multiple-kms-keys)
  * [Backups-create](#backups-create)
  * [Backups-delete](#backups-delete)
  * [Backups-get-database-operations](#backups-get-database-operations)
  * [Backups-get-operations](#backups-get-operations)
  * [Backups-get](#backups-get)
  * [Backups-restore-with-encryption-key](#backups-restore-with-encryption-key)
  * [Backups-restore-with-multiple-kms-keys](#backups-restore-with-multiple-kms-keys)
  * [Backups-restore](#backups-restore)
  * [Backups-update](#backups-update)
  * [Backups](#backups)
  * [Batch Write](#batch-write)
  * [Batch](#batch)
  * [Creates a full backup schedule](#creates-a-full-backup-schedule)
  * [Creates an incremental backup schedule](#creates-an-incremental-backup-schedule)
  * [Create-instance-without-default-backup-schedules](#create-instance-without-default-backup-schedules)
  * [CRUD](#crud)
  * [Adds split points to a database.](#adds-split-points-to-a-database.)
  * [Creates a new database with a specific default leader](#creates-a-new-database-with-a-specific-default-leader)
  * [Database-create-with-encryption-key](#database-create-with-encryption-key)
  * [Database-create-with-multiple-kms-keys](#database-create-with-multiple-kms-keys)
  * [Database-create-with-version-retention-period](#database-create-with-version-retention-period)
  * [Gets the schema definition of an existing database](#gets-the-schema-definition-of-an-existing-database)
  * [Gets the default leader option of an existing database](#gets-the-default-leader-option-of-an-existing-database)
  * [Updates the default leader of an existing database](#updates-the-default-leader-of-an-existing-database)
  * [Updates a Cloud Spanner Database.](#updates-a-cloud-spanner-database.)
  * [Datatypes](#datatypes)
  * [Deletes a backup schedule](#deletes-a-backup-schedule)
  * [Runs an execute sql request with directed read options](#runs-an-execute-sql-request-with-directed-read-options)
  * [Delete using DML returning.](#delete-using-dml-returning.)
  * [Insert using DML returning.](#insert-using-dml-returning.)
  * [Update using DML returning.](#update-using-dml-returning.)
  * [DML](#dml)
  * [Enable fine grained access control](#enable-fine-grained-access-control)
  * [Gets a backup schedule](#gets-a-backup-schedule)
  * [Get-commit-stats](#get-commit-stats)
  * [List database roles](#list-database-roles)
  * [Gets the instance config metadata for the configuration nam6](#gets-the-instance-config-metadata-for-the-configuration-nam6)
  * [Creates a new value-storing index](#creates-a-new-value-storing-index)
  * [Creates a new index](#creates-a-new-index)
  * [Executes a read-only SQL query using an existing index.](#executes-a-read-only-sql-query-using-an-existing-index.)
  * [Reads data using an existing storing index.](#reads-data-using-an-existing-storing-index.)
  * [Read data using an existing index.](#read-data-using-an-existing-index.)
  * [Indexing](#indexing)
  * [Creates a user-managed instance configuration.](#creates-a-user-managed-instance-configuration.)
  * [Deletes a user-managed instance configuration.](#deletes-a-user-managed-instance-configuration.)
  * [Lists the instance configuration operations.](#lists-the-instance-configuration-operations.)
  * [Updates a user-managed instance configuration.](#updates-a-user-managed-instance-configuration.)
  * [Creates a new instance partition](#creates-a-new-instance-partition)
  * [Updates an instance.](#updates-an-instance.)
  * [Creates a instance with asymmetric autoscaling config.](#creates-a-instance-with-asymmetric-autoscaling-config.)
  * [Creates a instance with autoscaling config.](#creates-a-instance-with-autoscaling-config.)
  * [Instance-with-processing-units](#instance-with-processing-units)
  * [Instance](#instance)
  * [Json-add-column](#json-add-column)
  * [Json-query-parameter](#json-query-parameter)
  * [Json-update-data](#json-update-data)
  * [Lists backup schedules of a database](#lists-backup-schedules-of-a-database)
  * [Lists all databases on the selected instance](#lists-all-databases-on-the-selected-instance)
  * [Lists all the available instance configs for the selected project.](#lists-all-the-available-instance-configs-for-the-selected-project.)
  * [Executes request with max commit delay](#executes-request-with-max-commit-delay)
  * [Numeric-add-column](#numeric-add-column)
  * [Numeric-query-parameter](#numeric-query-parameter)
  * [Numeric-update-data](#numeric-update-data)
  * [Observability (Tracing) with OpenTelemetry using OTLP](#observability-tracing-with-opentelemetry-using-otlp)
  * [Observability (Tracing) with OpenTelemetry](#observability-tracing-with-opentelemetry)
  * [Adds a column to an existing table in a Spanner PostgreSQL database.](#adds-a-column-to-an-existing-table-in-a-spanner-postgresql-database.)
  * [Showcase the rules for case-sensitivity and case folding for a Spanner PostgreSQL database.](#showcase-the-rules-for-case-sensitivity-and-case-folding-for-a-spanner-postgresql-database.)
  * [Creates a PostgreSQL Database.](#creates-a-postgresql-database.)
  * [Use cast operator to cast from one data type to another in a Spanner PostgreSQL database.](#use-cast-operator-to-cast-from-one-data-type-to-another-in-a-spanner-postgresql-database.)
  * [Execute a batch of DML statements on a Spanner PostgreSQL database.](#execute-a-batch-of-dml-statements-on-a-spanner-postgresql-database.)
  * [Updates data in a table in a Spanner PostgreSQL database.](#updates-data-in-a-table-in-a-spanner-postgresql-database.)
  * [Execute a Partitioned DML on a Spanner PostgreSQL database.](#execute-a-partitioned-dml-on-a-spanner-postgresql-database.)
  * [Delete using DML returning on a Spanner PostgreSQL database.](#delete-using-dml-returning-on-a-spanner-postgresql-database.)
  * [Insert using DML returning on a Spanner PostgreSQL database.](#insert-using-dml-returning-on-a-spanner-postgresql-database.)
  * [Update using DML returning on a Spanner PostgreSQL database.](#update-using-dml-returning-on-a-spanner-postgresql-database.)
  * [Execute a DML statement with parameters on a Spanner PostgreSQL database.](#execute-a-dml-statement-with-parameters-on-a-spanner-postgresql-database.)
  * [Calls a server side function on a Spanner PostgreSQL database.](#calls-a-server-side-function-on-a-spanner-postgresql-database.)
  * [Creates a new storing index in a Spanner PostgreSQL database.](#creates-a-new-storing-index-in-a-spanner-postgresql-database.)
  * [Created interleaved table hierarchy using PostgreSQL dialect.](#created-interleaved-table-hierarchy-using-postgresql-dialect.)
  * [Showcase how add a jsonb column in a PostgreSQL table.](#showcase-how-add-a-jsonb-column-in-a-postgresql-table.)
  * [Showcase how query data to a jsonb column in a PostgreSQL table.](#showcase-how-query-data-to-a-jsonb-column-in-a-postgresql-table.)
  * [Showcase how update data to a jsonb column in a PostgreSQL table.](#showcase-how-update-data-to-a-jsonb-column-in-a-postgresql-table.)
  * [Showcase how to work with the PostgreSQL NUMERIC/DECIMAL data type on a Spanner PostgreSQL database.](#showcase-how-to-work-with-the-postgresql-numeric/decimal-data-type-on-a-spanner-postgresql-database.)
  * [Showcases how a Spanner PostgreSQL database orders null values in a query.](#showcases-how-a-spanner-postgresql-database-orders-null-values-in-a-query.)
  * [Execute a query with parameters on a Spanner PostgreSQL database.](#execute-a-query-with-parameters-on-a-spanner-postgresql-database.)
  * [Query the information schema metadata in a Spanner PostgreSQL database.](#query-the-information-schema-metadata-in-a-spanner-postgresql-database.)
  * [Alters a sequence in a PostgreSQL database.](#alters-a-sequence-in-a-postgresql-database.)
  * [Creates sequence in PostgreSQL database.](#creates-sequence-in-postgresql-database.)
  * [Drops a sequence in PostgreSQL database.](#drops-a-sequence-in-postgresql-database.)
  * [Proto-query-data](#proto-query-data)
  * [Creates a new database with a proto column and enum](#creates-a-new-database-with-a-proto-column-and-enum)
  * [Proto-update-data-dml](#proto-update-data-dml)
  * [Proto-update-data](#proto-update-data)
  * [Queryoptions](#queryoptions)
  * [Quickstart](#quickstart)
  * [Read data with database role](#read-data-with-database-role)
  * [Sets a request tag for a single query](#sets-a-request-tag-for-a-single-query)
  * [Run Batch update with RPC priority](#run-batch-update-with-rpc-priority)
  * [Run partitioned update with RPC priority](#run-partitioned-update-with-rpc-priority)
  * [Create partitions with RPC priority](#create-partitions-with-rpc-priority)
  * [Read data with RPC Priority](#read-data-with-rpc-priority)
  * [Query data with RPC Priority](#query-data-with-rpc-priority)
  * [Run transaction with RPC priority](#run-transaction-with-rpc-priority)
  * [Schema](#schema)
  * [Alters a sequence in a GoogleSQL database.](#alters-a-sequence-in-a-googlesql-database.)
  * [Creates sequence in GoogleSQL database.](#creates-sequence-in-googlesql-database.)
  * [Drops a sequence in GoogleSQL database.](#drops-a-sequence-in-googlesql-database.)
  * [Executes a read/write transaction with statement timeout](#executes-a-read/write-transaction-with-statement-timeout)
  * [Struct](#struct)
  * [Alters a table with foreign key delete cascade action](#alters-a-table-with-foreign-key-delete-cascade-action)
  * [Creates a table with foreign key delete cascade action](#creates-a-table-with-foreign-key-delete-cascade-action)
  * [Drops a foreign key constraint with delete cascade action](#drops-a-foreign-key-constraint-with-delete-cascade-action)
  * [Timestamp](#timestamp)
  * [Executes a read/write transaction with transaction and request tags](#executes-a-read/write-transaction-with-transaction-and-request-tags)
  * [Executes a read/write transaction with transaction timeout](#executes-a-read/write-transaction-with-transaction-timeout)
  * [Transaction](#transaction)
  * [Updates a backup schedule](#updates-a-backup-schedule)
  * [Updates an instance.](#updates-an-instance.)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-spanner#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Add and drop new database role

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/add-and-drop-new-database-role.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/add-and-drop-new-database-role.js,samples/README.md)

__Usage:__


`node add-and-drop-new-database-role.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Backups-cancel

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-cancel.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-cancel.js,samples/README.md)

__Usage:__


`node samples/backups-cancel.js`


-----




### Copies a source backup

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-copy-with-multiple-kms-keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-copy-with-multiple-kms-keys.js,samples/README.md)

__Usage:__


`node spannerCopyBackup <INSTANCE_ID> <COPY_BACKUP_ID> <SOURCE_BACKUP_ID> <PROJECT_ID>`


-----




### Copies a source backup

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-copy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-copy.js,samples/README.md)

__Usage:__


`node spannerCopyBackup <INSTANCE_ID> <COPY_BACKUP_ID> <SOURCE_BACKUP_ID> <PROJECT_ID>`


-----




### Backups-create-with-encryption-key

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create-with-encryption-key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create-with-encryption-key.js,samples/README.md)

__Usage:__


`node samples/backups-create-with-encryption-key.js`


-----




### Backups-create-with-multiple-kms-keys

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create-with-multiple-kms-keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create-with-multiple-kms-keys.js,samples/README.md)

__Usage:__


`node samples/backups-create-with-multiple-kms-keys.js`


-----




### Backups-create

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-create.js,samples/README.md)

__Usage:__


`node samples/backups-create.js`


-----




### Backups-delete

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-delete.js,samples/README.md)

__Usage:__


`node samples/backups-delete.js`


-----




### Backups-get-database-operations

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get-database-operations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get-database-operations.js,samples/README.md)

__Usage:__


`node samples/backups-get-database-operations.js`


-----




### Backups-get-operations

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get-operations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get-operations.js,samples/README.md)

__Usage:__


`node samples/backups-get-operations.js`


-----




### Backups-get

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-get.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-get.js,samples/README.md)

__Usage:__


`node samples/backups-get.js`


-----




### Backups-restore-with-encryption-key

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore-with-encryption-key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore-with-encryption-key.js,samples/README.md)

__Usage:__


`node samples/backups-restore-with-encryption-key.js`


-----




### Backups-restore-with-multiple-kms-keys

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore-with-multiple-kms-keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore-with-multiple-kms-keys.js,samples/README.md)

__Usage:__


`node samples/backups-restore-with-multiple-kms-keys.js`


-----




### Backups-restore

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-restore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-restore.js,samples/README.md)

__Usage:__


`node samples/backups-restore.js`


-----




### Backups-update

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups-update.js,samples/README.md)

__Usage:__


`node samples/backups-update.js`


-----




### Backups

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/backups.js,samples/README.md)

__Usage:__


`node samples/backups.js`


-----




### Batch Write

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/batch-write.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/batch-write.js,samples/README.md)

__Usage:__


`node batch-write.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Batch

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/batch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/batch.js,samples/README.md)

__Usage:__


`node samples/batch.js`


-----




### Creates a full backup schedule

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-full-backup-schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-full-backup-schedule.js,samples/README.md)

__Usage:__


`node create-full-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>`


-----




### Creates an incremental backup schedule

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-incremental-backup-schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-incremental-backup-schedule.js,samples/README.md)

__Usage:__


`node create-incremental-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>`


-----




### Create-instance-without-default-backup-schedules

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/create-instance-without-default-backup-schedules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/create-instance-without-default-backup-schedules.js,samples/README.md)

__Usage:__


`node samples/create-instance-without-default-backup-schedules.js`


-----




### CRUD

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/crud.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/crud.js,samples/README.md)

__Usage:__


`node samples/crud.js`


-----




### Adds split points to a database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-add-split-points.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-add-split-points.js,samples/README.md)

__Usage:__


`node database-add-split-points.js  <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates a new database with a specific default leader

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-default-leader.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-default-leader.js,samples/README.md)

__Usage:__


`node database-create-with-default-leader.js <INSTANCE_ID> <DATABASE_ID> <DEFAULT_LEADER> <PROJECT_ID>`


-----




### Database-create-with-encryption-key

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-encryption-key.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-encryption-key.js,samples/README.md)

__Usage:__


`node samples/database-create-with-encryption-key.js`


-----




### Database-create-with-multiple-kms-keys

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-multiple-kms-keys.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-multiple-kms-keys.js,samples/README.md)

__Usage:__


`node samples/database-create-with-multiple-kms-keys.js`


-----




### Database-create-with-version-retention-period

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-create-with-version-retention-period.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-create-with-version-retention-period.js,samples/README.md)

__Usage:__


`node samples/database-create-with-version-retention-period.js`


-----




### Gets the schema definition of an existing database

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-get-ddl.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-get-ddl.js,samples/README.md)

__Usage:__


`node database-get-ddl.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Gets the default leader option of an existing database

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-get-default-leader.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-get-default-leader.js,samples/README.md)

__Usage:__


`node database-get-default-leader.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Updates the default leader of an existing database

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-update-default-leader.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-update-default-leader.js,samples/README.md)

__Usage:__


`node database-update-default-leader.js <INSTANCE_ID> <DATABASE_ID> <DEFAULT_LEADER> <PROJECT_ID>`


-----




### Updates a Cloud Spanner Database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/database-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/database-update.js,samples/README.md)

__Usage:__


`node database-update.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Datatypes

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/datatypes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/datatypes.js,samples/README.md)

__Usage:__


`node samples/datatypes.js`


-----




### Deletes a backup schedule

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/delete-backup-schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/delete-backup-schedule.js,samples/README.md)

__Usage:__


`node delete-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>`


-----




### Runs an execute sql request with directed read options

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/directed-reads.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/directed-reads.js,samples/README.md)

__Usage:__


`node directed-reads.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Delete using DML returning.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-delete.js,samples/README.md)

__Usage:__


`node dml-returning-delete.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Insert using DML returning.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-insert.js,samples/README.md)

__Usage:__


`node dml-returning-insert.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Update using DML returning.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml-returning-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml-returning-update.js,samples/README.md)

__Usage:__


`node dml-returning-update.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### DML

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/dml.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/dml.js,samples/README.md)

__Usage:__


`node samples/dml.js`


-----




### Enable fine grained access control

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/enable-fine-grained-access.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/enable-fine-grained-access.js,samples/README.md)

__Usage:__


`node enable-fine-grained-access.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Gets a backup schedule

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-backup-schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-backup-schedule.js,samples/README.md)

__Usage:__


`node get-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>`


-----




### Get-commit-stats

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-commit-stats.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-commit-stats.js,samples/README.md)

__Usage:__


`node samples/get-commit-stats.js`


-----




### List database roles

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-database-roles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-database-roles.js,samples/README.md)

__Usage:__


`node get-database-roles.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Gets the instance config metadata for the configuration nam6

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/get-instance-config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/get-instance-config.js,samples/README.md)

__Usage:__


`node get-instance-config.js <PROJECT_ID>`


-----




### Creates a new value-storing index

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-create-storing.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-create-storing.js,samples/README.md)

__Usage:__


`node createStoringIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates a new index

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-create.js,samples/README.md)

__Usage:__


`node createIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Executes a read-only SQL query using an existing index.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-query-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-query-data.js,samples/README.md)

__Usage:__


`node queryDataWithIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID> <START_TITLE> <END_TITLE>`


-----




### Reads data using an existing storing index.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-read-data-with-storing.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-read-data-with-storing.js,samples/README.md)

__Usage:__


`node readDataWithStoringIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Read data using an existing index.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/index-read-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/index-read-data.js,samples/README.md)

__Usage:__


`node readDataWithIndex <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Indexing

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/indexing.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/indexing.js,samples/README.md)

__Usage:__


`node samples/indexing.js`


-----




### Creates a user-managed instance configuration.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-create.js,samples/README.md)

__Usage:__


`node instance-config-create <INSTANCE_CONFIG_ID> <BASE_INSTANCE_CONFIG_ID> <PROJECT_ID>`


-----




### Deletes a user-managed instance configuration.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-delete.js,samples/README.md)

__Usage:__


`node instance-config-delete <INSTANCE_CONFIG_ID> <PROJECT_ID>`


-----




### Lists the instance configuration operations.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-get-operations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-get-operations.js,samples/README.md)

__Usage:__


`node instance-config-get-operations <PROJECT_ID>`


-----




### Updates a user-managed instance configuration.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-config-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-config-update.js,samples/README.md)

__Usage:__


`node instance-config-update <INSTANCE_CONFIG_ID> <PROJECT_ID>`


-----




### Creates a new instance partition

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-partition-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-partition-create.js,samples/README.md)

__Usage:__


`node instance-partition-create.js <INSTANCE_ID> <INSTANCE_PARTITION_ID> <PROJECT_ID>`


-----




### Updates an instance.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-update.js,samples/README.md)

__Usage:__


`node instance-update.js <INSTANCE_ID> <PROJECT_ID>`


-----




### Creates a instance with asymmetric autoscaling config.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-asymmetric-autoscaling-config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-asymmetric-autoscaling-config.js,samples/README.md)

__Usage:__


`node instance-with-asymmetric-autoscaling-config.js <INSTANCE_ID> <PROJECT_ID>`


-----




### Creates a instance with autoscaling config.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-autoscaling-config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-autoscaling-config.js,samples/README.md)

__Usage:__


`node instance-with-autoscaling-config.js <INSTANCE_ID> <PROJECT_ID>`


-----




### Instance-with-processing-units

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance-with-processing-units.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance-with-processing-units.js,samples/README.md)

__Usage:__


`node samples/instance-with-processing-units.js`


-----




### Instance

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/instance.js,samples/README.md)

__Usage:__


`node samples/instance.js`


-----




### Json-add-column

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-add-column.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-add-column.js,samples/README.md)

__Usage:__


`node samples/json-add-column.js`


-----




### Json-query-parameter

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-query-parameter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-query-parameter.js,samples/README.md)

__Usage:__


`node samples/json-query-parameter.js`


-----




### Json-update-data

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/json-update-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/json-update-data.js,samples/README.md)

__Usage:__


`node samples/json-update-data.js`


-----




### Lists backup schedules of a database

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-backup-schedules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-backup-schedules.js,samples/README.md)

__Usage:__


`node list-backup-schedules.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID>`


-----




### Lists all databases on the selected instance

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-databases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-databases.js,samples/README.md)

__Usage:__


`node list-databases.js <INSTANCE_ID> <PROJECT_ID>`


-----




### Lists all the available instance configs for the selected project.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/list-instance-configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/list-instance-configs.js,samples/README.md)

__Usage:__


`node list-instance-configs.js <PROJECT_ID>`


-----




### Executes request with max commit delay

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/max-commit-delay.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/max-commit-delay.js,samples/README.md)

__Usage:__


`node max-commit-delay.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Numeric-add-column

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-add-column.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-add-column.js,samples/README.md)

__Usage:__


`node samples/numeric-add-column.js`


-----




### Numeric-query-parameter

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-query-parameter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-query-parameter.js,samples/README.md)

__Usage:__


`node samples/numeric-query-parameter.js`


-----




### Numeric-update-data

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/numeric-update-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/numeric-update-data.js,samples/README.md)

__Usage:__


`node samples/numeric-update-data.js`


-----




### Observability (Tracing) with OpenTelemetry using OTLP

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/observability-traces-otlp.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/observability-traces-otlp.js,samples/README.md)

__Usage:__


`node observability-traces-otlp.js <PROJECT-ID> <INSTANCE-ID> <DATABASE-ID>`


-----




### Observability (Tracing) with OpenTelemetry

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/observability-traces.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/observability-traces.js,samples/README.md)

__Usage:__


`node observability-traces.js <PROJECT-ID> <INSTANCE-ID> <DATABASE-ID>`


-----




### Adds a column to an existing table in a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-add-column.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-add-column.js,samples/README.md)

__Usage:__


`node pg-add-column.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcase the rules for case-sensitivity and case folding for a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-case-sensitivity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-case-sensitivity.js,samples/README.md)

__Usage:__


`node pg-case-sensitivity.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates a PostgreSQL Database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-database-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-database-create.js,samples/README.md)

__Usage:__


`node pg-database-create.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Use cast operator to cast from one data type to another in a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-datatypes-casting.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-datatypes-casting.js,samples/README.md)

__Usage:__


`node pg-datatypes-casting.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Execute a batch of DML statements on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-batch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-batch.js,samples/README.md)

__Usage:__


`node pg-dml-batch.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Updates data in a table in a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-getting-started-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-getting-started-update.js,samples/README.md)

__Usage:__


`node pg-dml-getting-started-update.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Execute a Partitioned DML on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-partitioned.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-partitioned.js,samples/README.md)

__Usage:__


`node pg-dml-partitioned.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Delete using DML returning on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-delete.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-delete.js,samples/README.md)

__Usage:__


`node pg-dml-returning-delete.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Insert using DML returning on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-insert.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-insert.js,samples/README.md)

__Usage:__


`node pg-dml-returning-insert.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Update using DML returning on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-returning-update.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-returning-update.js,samples/README.md)

__Usage:__


`node pg-dml-returning-update.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Execute a DML statement with parameters on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-dml-with-parameter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-dml-with-parameter.js,samples/README.md)

__Usage:__


`node pg-dml-with-parameter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Calls a server side function on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-functions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-functions.js,samples/README.md)

__Usage:__


`node pg-functions.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates a new storing index in a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-index-create-storing.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-index-create-storing.js,samples/README.md)

__Usage:__


`node pg-index-create-storing.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Created interleaved table hierarchy using PostgreSQL dialect.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-interleaving.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-interleaving.js,samples/README.md)

__Usage:__


`node pg-interleaving.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcase how add a jsonb column in a PostgreSQL table.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-add-column.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-add-column.js,samples/README.md)

__Usage:__


`node pg-jsonb-add-column.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcase how query data to a jsonb column in a PostgreSQL table.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-query-parameter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-query-parameter.js,samples/README.md)

__Usage:__


`node pg-jsonb-query-parameter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcase how update data to a jsonb column in a PostgreSQL table.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-jsonb-update-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-jsonb-update-data.js,samples/README.md)

__Usage:__


`node pg-jsonb-update-data.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcase how to work with the PostgreSQL NUMERIC/DECIMAL data type on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-numeric-data-type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-numeric-data-type.js,samples/README.md)

__Usage:__


`node ppg-numeric-data-type.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Showcases how a Spanner PostgreSQL database orders null values in a query.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-ordering-nulls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-ordering-nulls.js,samples/README.md)

__Usage:__


`node pg-ordering-nulls.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Execute a query with parameters on a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-query-parameter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-query-parameter.js,samples/README.md)

__Usage:__


`node pg-query-parameter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Query the information schema metadata in a Spanner PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-schema-information.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-schema-information.js,samples/README.md)

__Usage:__


`node pg-schema-information.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Alters a sequence in a PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-alter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-alter.js,samples/README.md)

__Usage:__


`node pg-sequence-alter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates sequence in PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-create.js,samples/README.md)

__Usage:__


`node pg-sequence-create.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Drops a sequence in PostgreSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/pg-sequence-drop.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/pg-sequence-drop.js,samples/README.md)

__Usage:__


`node pg-sequence-drop.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Proto-query-data

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-query-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-query-data.js,samples/README.md)

__Usage:__


`node samples/proto-query-data.js`


-----




### Creates a new database with a proto column and enum

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-type-add-column.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-type-add-column.js,samples/README.md)

__Usage:__


`node proto-type-add-column.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Proto-update-data-dml

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-update-data-dml.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-update-data-dml.js,samples/README.md)

__Usage:__


`node samples/proto-update-data-dml.js`


-----




### Proto-update-data

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/proto-update-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/proto-update-data.js,samples/README.md)

__Usage:__


`node samples/proto-update-data.js`


-----




### Queryoptions

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/queryoptions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/queryoptions.js,samples/README.md)

__Usage:__


`node samples/queryoptions.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Read data with database role

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/read-data-with-database-role.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/read-data-with-database-role.js,samples/README.md)

__Usage:__


`node read-data-with-database-role.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Sets a request tag for a single query

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/request-tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/request-tag.js,samples/README.md)

__Usage:__


`node request-tag.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Run Batch update with RPC priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-batch-dml.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-batch-dml.js,samples/README.md)

__Usage:__


`node rpc-priority-batch-dml.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Run partitioned update with RPC priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-partitioned-dml.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-partitioned-dml.js,samples/README.md)

__Usage:__


`node rpc-priority-partitioned-dml.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Create partitions with RPC priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-query-partitions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-query-partitions.js,samples/README.md)

__Usage:__


`node rpc-priority-query-partitions.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Read data with RPC Priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-read.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-read.js,samples/README.md)

__Usage:__


`node rpc-priority-read.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Query data with RPC Priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-run.js,samples/README.md)

__Usage:__


`node rpc-priority-run.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Run transaction with RPC priority

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/rpc-priority-transaction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/rpc-priority-transaction.js,samples/README.md)

__Usage:__


`node rpc-priority-transaction.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Schema

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/schema.js,samples/README.md)

__Usage:__


`node samples/schema.js`


-----




### Alters a sequence in a GoogleSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-alter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-alter.js,samples/README.md)

__Usage:__


`node sequence-alter.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates sequence in GoogleSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-create.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-create.js,samples/README.md)

__Usage:__


`node sequence-create.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Drops a sequence in GoogleSQL database.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/sequence-drop.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/sequence-drop.js,samples/README.md)

__Usage:__


`node sequence-drop.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Executes a read/write transaction with statement timeout

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/statement-timeout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/statement-timeout.js,samples/README.md)

__Usage:__


`node statement-timeout.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Struct

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/struct.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/struct.js,samples/README.md)

__Usage:__


`node samples/struct.js`


-----




### Alters a table with foreign key delete cascade action

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-alter-with-foreign-key-delete-cascade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-alter-with-foreign-key-delete-cascade.js,samples/README.md)

__Usage:__


`node table-alter-with-foreign-key-delete-cascade.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Creates a table with foreign key delete cascade action

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-create-with-foreign-key-delete-cascade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-create-with-foreign-key-delete-cascade.js,samples/README.md)

__Usage:__


`node table-create-with-foreign-key-delete-cascade.js.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Drops a foreign key constraint with delete cascade action

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/table-drop-foreign-key-constraint-delete-cascade.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/table-drop-foreign-key-constraint-delete-cascade.js,samples/README.md)

__Usage:__


`node table-drop-foreign-key-constraint-delete-cascade.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Timestamp

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/timestamp.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/timestamp.js,samples/README.md)

__Usage:__


`node samples/timestamp.js`


-----




### Executes a read/write transaction with transaction and request tags

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction-tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction-tag.js,samples/README.md)

__Usage:__


`node transaction-tag.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Executes a read/write transaction with transaction timeout

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction-timeout.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction-timeout.js,samples/README.md)

__Usage:__


`node transaction-timeout.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>`


-----




### Transaction

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/transaction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/transaction.js,samples/README.md)

__Usage:__


`node samples/transaction.js`


-----




### Updates a backup schedule

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/update-backup-schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/update-backup-schedule.js,samples/README.md)

__Usage:__


`node update-backup-schedule.js <PROJECT_ID> <INSTANCE_ID> <DATABASE_ID> <SCHEDULE_ID>`


-----




### Updates an instance.

View the [source code](https://github.com/googleapis/nodejs-spanner/blob/main/samples/update-instance-default-backup-schedule-type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/update-instance-default-backup-schedule-type.js,samples/README.md)

__Usage:__


`node instance-update.js <INSTANCE_ID> <PROJECT_ID>`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-spanner&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/spanner/docs/
