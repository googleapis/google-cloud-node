/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
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

async function createNotification(bucketName, topic) {
  // [START storage_create_notification]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const topic = 'Name of a topic, e.g. my-topic';

  // Creates a notification
  await storage.bucket(bucketName).createNotification(topic);

  console.log('Notification subscription created.');
  // [END storage_create_notification]
}

async function listNotifications(bucketName) {
  // [START storage_list_notifications]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Lists notifications in the bucket
  const [notifications] = await storage.bucket(bucketName).getNotifications();

  console.log('Notifications:');
  notifications.forEach(notification => {
    console.log(notification.id);
  });
  // [END storage_list_notifications]
}

async function getMetadata(bucketName, notificationId) {
  // [START storage_notifications_get_metadata]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const notificationId = 'ID of notification to get, e.g. 1';

  // Get the notification metadata
  const [metadata] = await storage
    .bucket(bucketName)
    .notification(notificationId)
    .getMetadata();

  console.log(`ID: ${metadata.id}`);
  console.log(`Topic: ${metadata.topic}`);
  console.log(`Event Types: ${metadata.event_types}`);
  console.log(`Custom Attributes: ${metadata.custom_attributes}`);
  console.log(`Payload Format: ${metadata.payload_format}`);
  console.log(`Object Name Prefix: ${metadata.object_name_prefix}`);
  console.log(`Etag: ${metadata.etag}`);
  console.log(`Self Link: ${metadata.selfLink}`);
  console.log(`Kind: ${metadata.kind}`);
  // [END storage_notifications_get_metadata]
}

async function deleteNotification(bucketName, notificationId) {
  // [START storage_delete_notification]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const notificationId = 'ID of notification to delete, e.g. 1';

  // Deletes the notification from the bucket
  await storage
    .bucket(bucketName)
    .notification(notificationId)
    .delete();

  console.log(`Notification ${notificationId} deleted.`);
  // [END storage_delete_notification]
}

require(`yargs`)
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
  .strict()
  .help().argv;
