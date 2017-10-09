/**
 * Copyright 2017, Google, Inc.
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

/**
 * This application demonstrates how to perform basic operations on files with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

function createNotification(bucketName, topic) {
  // [START storage_create_notification]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // The name of the bucket to access, e.g. "my-bucket"
  // const bucketName = "my-bucket";

  // The name of the topic to which this subscription publishes.
  // const topic = "my-topic";

  // Instantiates a client
  const storage = Storage();

  // Lists files in the bucket
  storage
    .bucket(bucketName)
    .createNotification(topic)
    .then(() => {
      console.log('Notification subscription created.');
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_create_notification]
}

function listNotifications(bucketName) {
  // [START storage_list_notifications]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // The name of the bucket to access, e.g. "my-bucket"
  // const bucketName = "my-bucket";

  // Instantiates a client
  const storage = Storage();

  // Lists files in the bucket
  storage
    .bucket(bucketName)
    .getNotifications()
    .then(results => {
      const notifications = results[0];

      console.log('Notifications:');
      notifications.forEach(notification => {
        console.log(notification.id);
      });
    })
    .catch(err => {
      console.log('ERROR:', err);
    });
  // [END storage_list_notifications]
}

function getMetadata(bucketName, notificationId) {
  // [START storage_notifications_get_metadata]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // The name of the bucket to access, e.g. "my-bucket"
  // const bucketName = "my-bucket";

  // The id of the notification to delete, e.g. "1"
  // const notificationId = "1";

  // Instantiates a client
  const storage = Storage();

  // Deletes the file from the bucket
  storage
    .bucket(bucketName)
    .notification(notificationId)
    .getMetadata()
    .then(results => {
      const metadata = results[0];

      console.log(`ID: ${metadata.id}`);
      console.log(`Topic: ${metadata.topic}`);
      console.log(`Event Types: ${metadata.event_types}`);
      console.log(`Custom Attributes: ${metadata.custom_attributes}`);
      console.log(`Payload Format: ${metadata.payload_format}`);
      console.log(`Object Name Prefix: ${metadata.object_name_prefix}`);
      console.log(`Etag: ${metadata.etag}`);
      console.log(`Self Link: ${metadata.selfLink}`);
      console.log(`Kind: ${metadata.kind}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_notifications_get_metadata]
}

function deleteNotification(bucketName, notificationId) {
  // [START storage_delete_notification]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // The name of the bucket to access, e.g. "my-bucket"
  // const bucketName = "my-bucket";

  // The id of the notification to delete, e.g. "1"
  // const notificationId = "1";

  // Instantiates a client
  const storage = Storage();

  // Deletes the file from the bucket
  storage
    .bucket(bucketName)
    .notification(notificationId)
    .delete()
    .then(() => {
      console.log(`Notification ${notificationId} deleted.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_delete_notification]
}

const cli = require(`yargs`)
  .demand(1)
  .command(
    `create <bucketName> <topic>`,
    `Creates a new notification`,
    {},
    opts => createNotification(opts.bucketName, opts.topic)
  )
  .command(
    `list <bucketName>`,
    `Lists notifications for a given bucket.`,
    {},
    opts => listNotifications(opts.bucketName)
  )
  .command(
    `get-metadata <bucketName> <notificationId>`,
    `Gets metadata for a notification.`,
    {},
    opts => getMetadata(opts.bucketName, opts.notificationId)
  )
  .command(
    `delete <bucketName> <notificationId>`,
    `Deletes a notification from a bucket.`,
    {},
    opts => deleteNotification(opts.bucketName, opts.notificationId)
  )
  .example(
    `node $0 create my-bucket my-topic`,
    `Creates a notification subscription.`
  )
  .example(
    `node $0 list my-bucket`,
    `Lists notifications associated with "my-bucket".`
  )
  .example(
    `node $0 get-metadata my-bucket 1`,
    `Gets the metadata for notification "1" attached to "my-bucket".`
  )
  .example(
    `node $0 delete my-bucket 1`,
    `Deletes the notification "1" from "my-bucket".`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .help()
  .strict();

if (module === require.main) {
  cli.parse(process.argv.slice(2));
}
