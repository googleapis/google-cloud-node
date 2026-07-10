/**
 * Copyright 2024 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {createBackup} = require('./backups-create');
const {
  createBackupWithEncryptionKey,
} = require('./backups-create-with-encryption-key');
const {cancelBackup} = require('./backups-cancel');
const {getBackups} = require('./backups-get');
const {getBackupOperations} = require('./backups-get-operations');
const {getDatabaseOperations} = require('./backups-get-database-operations');
const {updateBackup} = require('./backups-update');
const {restoreBackup} = require('./backups-restore');
const {
  restoreBackupWithEncryptionKey,
} = require('./backups-restore-with-encryption-key');
const {deleteBackup} = require('./backups-delete');

require('yargs')
  .demand(1)
  .command(
    'createBackup <instanceName> <databaseName> <backupName> <projectId> <versionTime>',
    'Creates a backup of a Cloud Spanner database.',
    {},
    opts =>
      createBackup(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
        Date.parse(opts.versionTime),
      ),
  )
  .example(
    'node $0 createBackup "my-instance" "my-database" "my-backup" "my-project-id" "my-version-time"',
  )
  .command(
    'createBackupWithEncryptionKey <instanceName> <databaseName> <backupName> <projectId> <keyName>',
    'Creates a backup of a Cloud Spanner database using an encryption key.',
    {},
    opts =>
      createBackupWithEncryptionKey(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
        opts.keyName,
      ),
  )
  .example(
    'node $0 createBackupWithEncryptionKey "my-instance" "my-database" "my-backup" "my-project-id" "my-key-name"',
  )
  .command(
    'cancelBackup <instanceName> <databaseName> <backupName> <projectId>',
    'Creates and cancels a backup of a Cloud Spanner database.',
    {},
    opts =>
      cancelBackup(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 cancelBackup "my-instance" "my-database" "my-backup" "my-project-id"',
  )
  .command(
    'getBackups <instanceName> <databaseName> <backupName> <projectId>',
    'Lists backups in the instance with filters.',
    {},
    opts =>
      getBackups(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 getBackups "my-instance" "my-database" "my-backup" "my-project-id"',
  )
  .command(
    'getBackupOperations <instanceName> <databaseName> <backupName> <projectId>',
    'Lists all backup operations in the instance.',
    {},
    opts =>
      getBackupOperations(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 getBackupOperations "my-instance" "my-database" "my-backup" "my-project-id"',
  )
  .command(
    'getDatabaseOperations <instanceName> <projectId>',
    'Lists all database operations in the instance.',
    {},
    opts => getDatabaseOperations(opts.instanceName, opts.projectId),
  )
  .example('node $0 getDatabaseOperations "my-instance" "my-project-id"')
  .command(
    'updateBackup <instanceName> <backupName> <projectId>',
    'Updates the expire time of a backup.',
    {},
    opts => updateBackup(opts.instanceName, opts.backupName, opts.projectId),
  )
  .example('node $0 updateBackup "my-instance" "my-backup" "my-project-id"')
  .command(
    'restoreBackup <instanceName> <databaseName> <backupName> <projectId>',
    'Restores a Cloud Spanner database from a backup.',
    {},
    opts =>
      restoreBackup(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
      ),
  )
  .example(
    'node $0 restoreBackup "my-instance" "my-database" "my-backup" "my-project-id"',
  )
  .command(
    'restoreBackupWithEncryptionKey <instanceName> <databaseName> <backupName> <projectId> <keyName>',
    'Restores a Cloud Spanner database from a backup with an encryption key.',
    {},
    opts =>
      restoreBackupWithEncryptionKey(
        opts.instanceName,
        opts.databaseName,
        opts.backupName,
        opts.projectId,
        opts.keyName,
      ),
  )
  .example(
    'node $0 restoreBackupWithEncryptionKey "my-instance" "my-database" "my-backup" "my-project-id" "my-key-name"',
  )
  .command(
    'deleteBackup <instanceName> <backupName> <projectId>',
    'Deletes a backup.',
    {},
    opts => deleteBackup(opts.instanceName, opts.backupName, opts.projectId),
  )
  .example('node $0 deleteBackup "my-instance" "my-backup" "my-project-id"')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;
