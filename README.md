# Google Cloud Node.js Client
> Node.js idiomatic client for Google Cloud Platform services.

[![NPM Version](https://img.shields.io/npm/v/gcloud.svg)](https://www.npmjs.org/package/gcloud)
[![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)](https://travis-ci.org/GoogleCloudPlatform/gcloud-node/)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

* [Homepage](https://googlecloudplatform.github.io/gcloud-node/)
* [API Documentation](https://googlecloudplatform.github.io/gcloud-node/#/docs)

This client supports the following Google Cloud Platform services:

* [Google Cloud Datastore](https://cloud.google.com/products/cloud-datastore/)
* [Google Cloud Storage](https://cloud.google.com/products/cloud-storage/)

If you need support for other Google APIs, check out the [Google Node.js API Client library][googleapis].

## Quick Start

```sh
$ npm install gcloud
```

## Authorization

### On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authorization for you with no configuration. You just need to make sure that when you [set up the GCE instance](https://developers.google.com/compute/docs/authentication#using), you add the correct scopes for the APIs you want to access.

### Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console](https://console.developers.google.com/project).
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
   * Google Cloud Datastore API
   * Google Cloud Storage
   * Google Cloud Storage JSON API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account, click on **Create new client ID**. After the account is created, you will be prompted to download the JSON key file that the library uses to authorize your requests.
  * If you want to generate a new key for an existing service account, click on **Generate new JSON key** and download the JSON key file. 

## Google Cloud Datastore

[Google Cloud Datastore](https://developers.google.com/datastore/) is a fully managed, schemaless database for storing non-relational data. Cloud Datastore automatically scales with your users and supports ACID transactions, high availability of reads and writes, strong consistency for reads and ancestor queries, and eventual consistency for all other queries.

See the [Google Cloud Datastore docs](https://developers.google.com/datastore/docs/activate) for more details on how to activate Cloud Datastore for your project.

See [the gcloud-node API documentation](https://googlecloudplatform.github.io/gcloud-node/#/docs/datastore) to learn how to interact with the Cloud Datastore using this Client Library.

```js
var gcloud = require('gcloud');
var datastore = gcloud.datastore;
var dataset;

// From Google Compute Engine:
dataset = new datastore.Dataset({
  projectId: 'my-project',
});

// Or from elsewhere:
dataset = new datastore.Dataset({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

dataset.get(dataset.key(['Product', 'Computer']), function(err, entity) {
  console.log(err || entity);
});
```

## Google Cloud Storage

[Google Cloud Storage](https://developers.google.com/storage/) allows you to store data on Google infrastructure with very high reliability, performance and availability, and can be used to distribute large data objects to users via direct download.

You need to create a Google Cloud Storage bucket to use this client library. Follow the steps on the [Google Cloud Storage docs](https://developers.google.com/storage/docs/cloud-console#_creatingbuckets) to learn how to create a bucket.

See [the gcloud-node API documentation](https://googlecloudplatform.github.io/gcloud-node/#/docs/storage) to learn how to connect to the Cloud Storage using this Client Library.

```js
var gcloud = require('gcloud');
var storage = gcloud.storage;
var bucket;

// From Google Compute Engine:
bucket = new storage.Bucket({
  bucketName: YOUR_BUCKET_NAME
});

// Or from elsewhere:
bucket = new storage.Bucket({
  bucketName: YOUR_BUCKET_NAME,
  keyFilename: '/path/to/the/key.json'
});

bucket.write('demo.txt', 'Hello World', function(err) {
  console.log(err || 'Created demo.txt');
});
```

## Contributing

Contributions to this library are always welcome and highly encouraged.

See [CONTRIBUTING](CONTRIBUTING.md) for more information on how to get started.

## License

Apache 2.0 - See [COPYING](COPYING) for more information.

[googleapis]: https://github.com/google/google-api-nodejs-client
