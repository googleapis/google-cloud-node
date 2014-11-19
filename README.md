# Google Cloud Node.js Client
> Node.js idiomatic client for Google Cloud Platform services.

[![NPM Version](https://img.shields.io/npm/v/gcloud.svg)](https://www.npmjs.org/package/gcloud)
[![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)](https://travis-ci.org/GoogleCloudPlatform/gcloud-node/)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

* [Homepage][gcloud-homepage]
* [API Documentation][gcloud-docs]
* [Frequently Asked Questions][wiki-faq]
* [Examples][wiki-examples]

This client supports the following Google Cloud Platform services:

* [Google BigQuery][cloud-bigquery]
* [Google Cloud Datastore][cloud-datastore]
* [Google Cloud Storage][cloud-storage]
* [Google Cloud Pub/Sub][cloud-pubsub] (Alpha)


## Getting Started

```sh
$ npm install --save gcloud
```

:warning: **All `gcloud` service APIs require authorization details for your project.**

Instructions on where to find these are available if you are [running your application on Google Compute Engine][wiki-faq-gce], or [running it elsewhere][wiki-faq-elsewhere].

### Google BigQuery

Analyze Big Data in the cloud with [Google BigQuery][cloud-bigquery] ([docs][cloud-bigquery-docs]) . Run fast, SQL-like queries against multi-terabyte datasets in seconds. Scalable and easy to use, BigQuery gives you real-time insights about your data.

See the [gcloud-node BigQuery API documentation][gcloud-bigquery-docs] to learn how to access your BigQuery datasets using this library.

```js
var gcloud = require('gcloud');
var bigquery;

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

### Google Cloud Datastore

[Google Cloud Datastore][cloud-datastore] ([docs][cloud-datastore-docs]) is a fully managed, schemaless database for storing non-relational data. Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.

Follow the [activation instructions][cloud-datastore-activation] to use the Google Cloud Datastore API with your project.

See the [gcloud-node Datastore API documentation][gcloud-datastore-docs] to learn how to interact with the Cloud Datastore using this library.

```js
var gcloud = require('gcloud');
var dataset;

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
```

### Google Cloud Storage

[Google Cloud Storage][cloud-storage] ([docs][cloud-storage-docs]) allows you to store data on Google infrastructure with very high reliability, performance and availability, and can be used to distribute large data objects to users via direct download.

See the [gcloud-node Storage API documentation][gcloud-storage-docs] to learn how to connect to Cloud Storage using this library.

```js
var fs = require('fs');
var gcloud = require('gcloud');
var storage;

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

### Google Cloud Pub/Sub (Alpha)

> Google Cloud Pub/Sub is in **Alpha status**. As a result, it might change in backward-incompatible ways and is not recommended for production use. It is not subject to any SLA or deprecation policy.

[Google Cloud Pub/Sub][cloud-pubsub] ([docs][cloud-pubsub-docs]) allows you to connect your services with reliable, many-to-many, asynchronous messaging hosted on Google's infrastructure. Cloud Pub/Sub automatically scales as you need it and provides a foundation for building your own robust, global services.

See the [gcloud-node Pub/Sub API documentation][gcloud-pubsub-docs] to learn how to use Cloud Pub/Sub with this library.

```js
var gcloud = require('gcloud');
var pubsub;

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
topic.publish('New message!', function(err) {});

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

[wiki-faq]: https://github.com/GoogleCloudPlatform/wiki/Frequently-Asked-Questions
[wiki-examples]: https://github.com/GoogleCloudPlatform/wiki/Examples
[wiki-faq-gce]: https://github.com/GoogleCloudPlatform/wiki/Frequently-Asked-Questions#how-do-i-use-gcloud-with-google-compute-engine]
[wiki-faq-elsewhere]: https://github.com/GoogleCloudPlatform/wiki/Frequently-Asked-Questions#im-not-using-compute-engine-what-do-i-need-to-do]

[cloud-bigquery]: https://cloud.google.com/bigquery
[cloud-bigquery-docs]: https://cloud.google.com/bigquery/what-is-bigquery

[cloud-datastore]: https://cloud.google.com/products/cloud-datastore
[cloud-datastore-docs]: https://developers.google.com/datastore
[cloud-datastore-activation]: https://developers.google.com/datastore/docs/activate

[cloud-pubsub]: https://cloud.google.com/pubsub
[cloud-pubsub-docs]: https://developers.google.com/pubsub

[cloud-storage]: https://cloud.google.com/products/cloud-storage
[cloud-storage-docs]: https://developers.google.com/storage
[cloud-storage-create-bucket]: https://developers.google.com/storage/docs/cloud-console#_creatingbuckets
