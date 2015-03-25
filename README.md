# Google Cloud Node.js Client
> Node.js idiomatic client for [Google Cloud Platform](https://cloud.google.com/) services.

[![NPM Version](https://img.shields.io/npm/v/gcloud.svg)](https://www.npmjs.org/package/gcloud)
[![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)](https://travis-ci.org/GoogleCloudPlatform/gcloud-node/)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

* [Homepage][gcloud-homepage]
* [API Documentation][gcloud-docs]

This client supports the following Google Cloud Platform services:

* [Google BigQuery][cloud-bigquery]
* [Google Cloud Datastore][cloud-datastore]
* [Google Cloud Storage][cloud-storage]
* [Google Cloud Pub/Sub][cloud-pubsub] (Alpha)

If you need support for other Google APIs, check out the [Google Node.js API Client library][googleapis].

## Quick Start

```sh
$ npm install --save gcloud
```

## Example Applications

- [gcloud-node-todos][gcloud-todos] - A TodoMVC backend using gcloud-node and Datastore.
- [gitnpm][gitnpm] - Easily lookup an npm package's GitHub repo using gcloud-node and Google App Engine.
- [gcloud-keystore][gcloud-keystore] - Use Datastore as a simple key-value store.
- [hya-wave][hya-wave] - Cloud-based web sample editor. Part of the [hya-io][hya-io] family of products.

## Authorization

With `gcloud-node` it's incredibly easy to get authorized and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authorization for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
// Authorizing on a global basis.
var projectId = process.env.GCLOUD_PROJECT_ID; // E.g. 'grape-spaceship-123'
var gcloud = require('gcloud')({
  projectId: projectId
});

// ...you're good to go! See the next section to get started using the APIs.
```

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Datastore API
  * Google Cloud Storage
  * Google Cloud Storage JSON API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account, click on **Create new Client ID** and select **Service account**. After the account is created, you will be prompted to download the JSON key file that the library uses to authorize your requests.
  * If you want to generate a new key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
// Authorizing on a global basis.
var projectId = process.env.GCLOUD_PROJECT_ID; // E.g. 'grape-spaceship-123'

var gcloud = require('gcloud')({
  projectId: projectId,
  keyFilename: '/path/to/keyfile.json'
});

// ...you're good to go! See the next section to get started using the APIs.
```

You can also set auth on a per-API-instance basis. The examples below show you how.

## Google BigQuery

Analyze Big Data in the cloud with [Google BigQuery][cloud-bigquery] ([docs][cloud-bigquery-docs]) . Run fast, SQL-like queries against multi-terabyte datasets in seconds. Scalable and easy to use, BigQuery gives you real-time insights about your data.

See the [gcloud-node BigQuery API documentation][gcloud-bigquery-docs] to learn how to access your BigQuery datasets using this library.

```js
var gcloud = require('gcloud');
var bigquery;

// Authorizing on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authorization section above).

// From Google Compute Engine:
bigquery = gcloud.bigquery({
  projectId: 'my-project'
});

// Or from elsewhere:
bigquery = gcloud.bigquery({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Access an existing dataset.
var schoolsDataset = bigquery.dataset('schools');

// Import data into a dataset.
schoolsDataset.import('/local/file.json', function(err, job) {});

// Get results from a query job.
bigquery.job('job-id').getQueryResults(function(err, rows, nextQuery) {});

// Get the same results as a readable stream.
bigquery.job('job-id')
  .getQueryResults()
  .pipe(require('through2').obj(function(row, enc, next) {
    this.push(row.address + '\n');
    next();
  }))
  .pipe(process.stdout);
```

## Google Cloud Datastore

[Google Cloud Datastore][cloud-datastore] ([docs][cloud-datastore-docs]) is a fully managed, schemaless database for storing non-relational data. Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.

Follow the [activation instructions][cloud-datastore-activation] to use the Google Cloud Datastore API with your project.

See the [gcloud-node Datastore API documentation][gcloud-datastore-docs] to learn how to interact with the Cloud Datastore using this library.

```js
var gcloud = require('gcloud');
var dataset;

// Authorizing on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authorization section above).

// From Google Compute Engine:
dataset = gcloud.datastore.dataset({
  projectId: 'my-project'
});

// Or from elsewhere:
dataset = gcloud.datastore.dataset({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

dataset.get(dataset.key(['Product', 'Computer']), function(err, entity) {
  console.log(err || entity);
});

// Save data to your dataset.
var blogPostData = {
  title: 'How to make the perfect homemade pasta',
  tags: ['pasta', 'homemade'],
  author: 'Andrew Chilton',
  isDraft: true,
  wordCount: 450
};

var blogPostKey = dataset.key('BlogPost');

dataset.save({
  key: blogPostKey,
  data: blogPostData
}, function(err) {
  // `blogPostKey` has been updated with an id so you
  // can do more operations with it. Such as an update:
  dataset.save({
    key: blogPostKey,
    data: {
      isDraft: false
    }
  }, function(err) {
    // The blog post is now published!
  });
});
```

## Google Cloud Storage

[Google Cloud Storage][cloud-storage] ([docs][cloud-storage-docs]) allows you to store data on Google infrastructure with very high reliability, performance and availability, and can be used to distribute large data objects to users via direct download.

See the [gcloud-node Storage API documentation][gcloud-storage-docs] to learn how to connect to Cloud Storage using this library.

```js
var fs = require('fs');
var gcloud = require('gcloud');
var storage;

// Authorizing on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authorization section above).

// From Google Compute Engine:
storage = gcloud.storage({
  projectId: 'my-project'
});

// Or from elsewhere:
storage = gcloud.storage({
  keyFilename: '/path/to/keyfile.json',
  projectId: 'my-project'
});

// Create a new bucket.
storage.createBucket('my-new-bucket', function(err, bucket) {});

// Reference an existing bucket.
var bucket = storage.bucket('my-bucket');

// Upload a local file to a new file to be created in your bucket.
fs.createReadStream('/local/file.txt').pipe(bucket.file('file.txt').createWriteStream());

// Download a remote file to a new local file.
bucket.file('photo.jpg').createReadStream().pipe(fs.createWriteStream('/local/photo.jpg'));
```

## Google Cloud Pub/Sub (Beta)

> This is a *Beta* release of Google Cloud Pub/Sub. This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

[Google Cloud Pub/Sub][cloud-pubsub] ([docs][cloud-pubsub-docs]) allows you to connect your services with reliable, many-to-many, asynchronous messaging hosted on Google's infrastructure. Cloud Pub/Sub automatically scales as you need it and provides a foundation for building your own robust, global services.

See the [gcloud-node Pub/Sub API documentation][gcloud-pubsub-docs] to learn how to use Cloud Pub/Sub with this library.

```js
var gcloud = require('gcloud');
var pubsub;

// Authorizing on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authorization section above).

// From Google Compute Engine:
pubsub = gcloud.pubsub();

// Or from elsewhere:
pubsub = gcloud.pubsub({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Create a new topic.
pubsub.createTopic('my-new-topic', function(err, topic) {});

// Reference an existing topic.
var topic = pubsub.topic('my-existing-topic');

// Publish a message to the topic.
topic.publish({
  data: 'New message!'
}, function(err) {});

// Subscribe to the topic.
topic.subscribe('new-subscription', function(err, subscription) {
  // Register listeners to start pulling for messages.
  function onError(err) {}
  function onMessage(message) {}
  subscription.on('error', onError);
  subscription.on('message', onMessage);

  // Remove listeners to stop pulling for messages.
  subscription.removeListener('message', onMessage);
  subscription.removeListener('error', onError);
});
```

## Contributing

Contributions to this library are always welcome and highly encouraged.

See [CONTRIBUTING](CONTRIBUTING.md) for more information on how to get started.

## License

Apache 2.0 - See [COPYING](COPYING) for more information.

[gcloud-homepage]: https://googlecloudplatform.github.io/gcloud-node
[gcloud-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs
[gcloud-bigquery-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/bigquery
[gcloud-datastore-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/datastore
[gcloud-pubsub-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/pubsub
[gcloud-storage-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/storage
[gcloud-todos]: https://github.com/GoogleCloudPlatform/gcloud-node-todos
[gitnpm]: https://github.com/stephenplusplus/gitnpm
[gcloud-keystore]: https://github.com/stephenplusplus/gcloud-keystore

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using

[googleapis]: https://github.com/google/google-api-nodejs-client

[cloud-bigquery]: https://cloud.google.com/bigquery/
[cloud-bigquery-docs]: https://cloud.google.com/bigquery/what-is-bigquery

[cloud-datastore]: https://cloud.google.com/datastore/
[cloud-datastore-docs]: https://cloud.google.com/datastore/docs
[cloud-datastore-activation]: https://cloud.google.com/datastore/docs/activate

[cloud-pubsub]: https://cloud.google.com/pubsub/
[cloud-pubsub-docs]: https://cloud.google.com/pubsub/docs

[cloud-storage]: https://cloud.google.com/storage/
[cloud-storage-docs]: https://cloud.google.com/storage/docs/overview
[cloud-storage-create-bucket]: https://cloud.google.com/storage/docs/cloud-console#_creatingbuckets
[hya-wave]: https://wav.hya.io
[hya-io]: https://hya.io
