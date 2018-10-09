/**
 * Copyright 2018, Google, Inc.
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
 * This application demonstrates how to use Bucket Lock operations on buckets
 * and objects using the Google Cloud Storage API.
 *
 * For more information read the documentation
 * at https://cloud.google.com/storage/docs/bucket-lock
 */

'use strict';
function setRetentionPolicy(bucketName, retentionPeriod) {
  // [START storage_set_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  storage
    .bucket(bucketName)
    .setRetentionPeriod(retentionPeriod)
    .then(response => {
      const metadata = response[0];
      console.log(
        `Bucket ${bucketName} retention period set for ${
          metadata.retentionPolicy.retentionPeriod
        } seconds.`
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_set_retention_policy]
}

function getRetentionPolicy(bucketName) {
  // [START storage_get_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();
  storage
    .bucket(bucketName)
    .getMetadata()
    .then(results => {
      const metadata = results[0];
      if (metadata.hasOwnProperty('retentionPolicy')) {
        const retentionPolicy = metadata.retentionPolicy;
        console.log('A retention policy exists!');
        console.log(`Period: ${retentionPolicy.retentionPeriod}`);
        console.log(`Effective time: ${retentionPolicy.effectiveTime}`);
        if (retentionPolicy.hasOwnProperty('isLocked')) {
          console.log('Policy is locked');
        } else {
          console.log('Policy is unlocked');
        }
      }
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_get_retention_policy]
}

function removeRetentionPolicy(bucketName) {
  // [START storage_remove_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();
  storage
    .bucket(bucketName)
    .getMetadata()
    .then(results => {
      const metadata = results[0];
      if (
        metadata.hasOwnProperty('retentionPolicy') &&
        metadata.retentionPolicy.hasOwnProperty('isLocked')
      ) {
        console.log(
          'Unable to remove retention period as retention policy is locked.'
        );
        return null;
      } else {
        return storage
          .bucket(bucketName)
          .removeRetentionPeriod()
          .then(() => {
            console.log(`Removed bucket ${bucketName} retention policy.`);
          });
      }
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_remove_retention_policy]
}

function lockRetentionPolicy(bucketName) {
  // [START storage_lock_retention_policy]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();
  // get_bucket gets the current metageneration value for the bucket,
  // required by lock_retention_policy.
  storage
    .bucket(bucketName)
    .getMetadata()
    .then(results => {
      const unlockedMetadata = results[0];
      // Warning: Once a retention policy is locked it cannot be unlocked
      // and retention period can only be increased.
      return storage
        .bucket(bucketName)
        .lock(unlockedMetadata.metageneration)
        .then(results => {
          const lockedMetadata = results[0];
          console.log(`Retention policy for ${bucketName} is now locked.`);
          console.log(
            `Retention policy effective as of ${
              lockedMetadata.retentionPolicy.effectiveTime
            }`
          );
        });
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_lock_retention_policy]
}

function enableDefaultEventBasedHold(bucketName) {
  // [START storage_enable_default_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Enables a default event-based hold for the bucket.
  storage
    .bucket(bucketName)
    .setMetadata({
      defaultEventBasedHold: true,
    })
    .then(() => {
      console.log(`Default event-based hold was enabled for ${bucketName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_enable_default_event_based_hold]
}

function disableDefaultEventBasedHold(bucketName) {
  // [START storage_disable_default_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Disables a default event-based hold for a bucket.
  storage
    .bucket(bucketName)
    .setMetadata({
      defaultEventBasedHold: false,
    })
    .then(() => {
      console.log(`Default event-based hold was disabled for ${bucketName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_disable_default_event_based_hold]
}

function getDefaultEventBasedHold(bucketName) {
  // [START storage_get_default_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // get bucketName metadata
  storage
    .bucket(bucketName)
    .getMetadata()
    .then(results => {
      const metadata = results[0];
      console.log(
        `Default event-based hold: ${metadata.defaultEventBasedHold}.`
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_get_default_event_based_hold]
}

function setEventBasedHold(bucketName, fileName) {
  // [START storage_set_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // Set event-based hold
  storage
    .bucket(bucketName)
    .file(fileName)
    .setMetadata({
      eventBasedHold: true,
    })
    .then(() => {
      console.log(`Event-based hold was set for ${fileName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_set_event_based_hold]
}

function releaseEventBasedHold(bucketName, fileName) {
  // [START storage_release_event_based_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  storage
    .bucket(bucketName)
    .file(fileName)
    .setMetadata({
      eventBasedHold: false,
    })
    .then(() => {
      console.log(`Event-based hold was released for ${fileName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_release_event_based_hold]
}

function setTemporarydHold(bucketName, fileName) {
  // [START storage_set_temporary_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  storage
    .bucket(bucketName)
    .file(fileName)
    .setMetadata({
      temporaryHold: true,
    })
    .then(() => {
      console.log(`Temporary hold was set for ${fileName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_set_temporary_hold]
}

function releaseTemporaryHold(bucketName, fileName) {
  // [START storage_release_temporary_hold]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  storage
    .bucket(bucketName)
    .file(fileName)
    .setMetadata({
      temporaryHold: false,
    })
    .then(() => {
      console.log(`Temporary hold was released for ${fileName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_release_temporary_hold]
}

require(`yargs`)
  .demand(1)
  .command(
    `set-retention-policy <bucketName> <period>`,
    `Defines a retention policy on a given bucket.`,
    {},
    opts => setRetentionPolicy(opts.bucketName, opts.period)
  )
  .command(
    `remove-retention-policy <bucketName>`,
    `Removes a retention policy on a given bucket if the policy is unlocked.`,
    {},
    opts => removeRetentionPolicy(opts.bucketName)
  )
  .command(
    `get-retention-policy <bucketName>`,
    `Get a retention policy for a given bucket.`,
    {},
    opts => getRetentionPolicy(opts.bucketName)
  )
  .command(
    `lock-retention-policy <bucketName>`,
    `Lock a retention policy for a given bucket.`,
    {},
    opts => lockRetentionPolicy(opts.bucketName)
  )
  .command(
    `enable-default-event-based-hold <bucketName>`,
    `Enable default event-based hold for a given bucket.`,
    {},
    opts => enableDefaultEventBasedHold(opts.bucketName)
  )
  .command(
    `disable-default-event-based-hold <bucketName>`,
    `Disable default event-based hold for a given bucket.`,
    {},
    opts => disableDefaultEventBasedHold(opts.bucketName)
  )
  .command(
    `get-default-event-based-hold <bucketName>`,
    `Get default event-based hold for a given bucket.`,
    {},
    opts => getDefaultEventBasedHold(opts.bucketName)
  )
  .command(
    `set-event-based-hold <bucketName> <fileName>`,
    `Set an event-based hold for a given file.`,
    {},
    opts => setEventBasedHold(opts.bucketName, opts.fileName)
  )
  .command(
    `release-event-based-hold <bucketName> <fileName>`,
    `Release an event-based hold for a given file.`,
    {},
    opts => releaseEventBasedHold(opts.bucketName, opts.fileName)
  )
  .command(
    `set-temporary-hold <bucketName> <fileName>`,
    `Set a temporary hold for a given file.`,
    {},
    opts => setTemporarydHold(opts.bucketName, opts.fileName)
  )
  .command(
    `release-temporary-hold <bucketName> <fileName>`,
    `Release a temporary hold for a given file.`,
    {},
    opts => releaseTemporaryHold(opts.bucketName, opts.fileName)
  )
  .example(
    `node $0 set-retention-policy my-bucket 5`,
    `Defines a retention policy of 5 seconds on a "my-bucket".`
  )
  .example(
    `node $0 remove-retention-policy my-bucket`,
    `Removes a retention policy from "my-bucket".`
  )
  .example(
    `node $0 get-retention-policy my-bucket`,
    `Get the retention policy for "my-bucket".`
  )
  .example(
    `node $0 lock-retention-policy my-bucket`,
    `Lock the retention policy for "my-bucket".`
  )
  .example(
    `node $0 enable-default-event-based-hold my-bucket`,
    `Enable a default event-based hold for "my-bucket".`
  )
  .example(
    `node $0 disable-default-event-based-hold my-bucket`,
    `Disable a default-event based hold for "my-bucket".`
  )
  .example(
    `node $0 get-default-event-based-hold my-bucket`,
    `Get the value of a default-event-based hold for "my-bucket".`
  )
  .example(
    `node $0 set-event-based-hold my-bucket my-file`,
    `Sets an event-based hold on "my-file".`
  )
  .example(
    `node $0 release-event-based-hold my-bucket my-file`,
    `Releases an event-based hold on "my-file".`
  )
  .example(
    `node $0 set-temporary-hold my-bucket my-file`,
    `Sets a temporary hold on "my-file".`
  )
  .example(
    `node $0 release-temporary-hold my-bucket my-file`,
    `Releases a temporary hold on "my-file".`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .help()
  .strict().argv;
