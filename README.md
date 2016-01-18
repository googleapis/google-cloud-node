# Google Cloud Node.js Client
> Node.js idiomatic client for [Google Cloud Platform](https://cloud.google.com/) services.

[![NPM Version](https://img.shields.io/npm/v/gcloud.svg)](https://www.npmjs.org/package/gcloud)
[![Travis Build Status](https://travis-ci.org/GoogleCloudPlatform/gcloud-node.svg)](https://travis-ci.org/GoogleCloudPlatform/gcloud-node/)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/gcloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/gcloud-node?branch=master)

* [Homepage][gcloud-homepage]
* [API Documentation][gcloud-docs]

This client supports the following Google Cloud Platform services:

* [Google BigQuery](#google-bigquery)
* [Google Cloud Datastore](#google-cloud-datastore)
* [Google Cloud DNS](#google-cloud-dns)
* [Google Cloud Pub/Sub](#google-cloud-pubsub)
* [Google Cloud Storage](#google-cloud-storage)
* [Google Compute Engine](#google-compute-engine)
* [Google Prediction API](#google-prediction-api)
* [Google Translate API](#google-translate-api)
* [Google Cloud Logging](#google-cloud-logging-beta) (Beta)
* [Google Cloud Resource Manager](#google-cloud-resource-manager-beta) (Beta)
* [Google Cloud Search](#google-cloud-search-alpha) (Alpha)

If you need support for other Google APIs, check out the [Google Node.js API Client library][googleapis].

## Quick Start

```sh
$ npm install --save gcloud
```

## Example Applications

- [nodejs-getting-started][nodejs-getting-started] - A sample and [tutorial][nodejs-getting-started-tutorial] that demonstrates how to build a complete web application using Cloud Datastore, Cloud Storage, and Cloud Pub/Sub and deploy it to Google App Engine or Google Compute Engine.
- [gcloud-node-todos][gcloud-todos] - A TodoMVC backend using gcloud-node and Datastore.
- [gitnpm][gitnpm] - Easily lookup an npm package's GitHub repo using gcloud-node and Google App Engine.
- [gcloud-kvstore][gcloud-kvstore] - Use Datastore as a simple key-value store.
- [hya-wave][hya-wave] - Cloud-based web sample editor. Part of the [hya-io][hya-io] family of products.

## Authentication

With `gcloud-node` it's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
// Authenticating on a global basis.
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
  * If you want to use a new service account, click on **Create new Client ID** and select **Service account**. After the account is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
// Authenticating on a global basis.
var projectId = process.env.GCLOUD_PROJECT_ID; // E.g. 'grape-spaceship-123'

var gcloud = require('gcloud')({
  projectId: projectId,
  keyFilename: '/path/to/keyfile.json'
});

// ...you're good to go! See the next section to get started using the APIs.
```

You can also set auth on a per-API-instance basis. The examples below show you how.


## Google BigQuery

- [API Documentation][gcloud-bigquery-docs]
- [Official Documentation][cloud-bigquery-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).
var bigquery = gcloud.bigquery({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Access an existing dataset and table.
var schoolsDataset = bigquery.dataset('schools');
var schoolsTable = schoolsDataset.table('schoolsData');

// Import data into a table.
schoolsTable.import('/local/file.json', function(err, job) {});

// Get results from a query job.
var job = bigquery.job('job-id');

// Use a callback.
job.getQueryResults(function(err, rows) {});

// Or get the same results as a readable stream.
job.getQueryResults().on('data', function(row) {});
```


## Google Cloud Datastore

- [API Documentation][gcloud-datastore-docs]
- [Official Documentation][cloud-datastore-docs]

*Follow the [activation instructions][cloud-datastore-activation] to use the Google Cloud Datastore API with your project.*

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var dataset = gcloud.datastore.dataset({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

dataset.get(dataset.key(['Product', 'Computer']), function(err, entity) {
  console.log(err || entity);
});

// Save data to your dataset.
var blogPostData = {
  title: 'How to make the perfect homemade pasta',
  author: 'Andrew Chilton',
  isDraft: true
};

var blogPostKey = dataset.key('BlogPost');

dataset.save({
  key: blogPostKey,
  data: blogPostData
}, function(err) {
  // `blogPostKey` has been updated with an ID so you can do more operations
  // with it, such as an update.
  blogPostData.isDraft = false;

  dataset.save({
    key: blogPostKey,
    data: blogPostData
  }, function(err) {
    if (!err) {
      // The blog post is now published!
    }
  });
});
```


## Google Cloud DNS

- [API Documentation][gcloud-dns-docs]
- [Official Documentation][cloud-dns-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var dns = gcloud.dns({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Create a managed zone.
dns.createZone('my-new-zone', {
  dnsName: 'my-domain.com.'
}, function(err, zone) {});

// Reference an existing zone.
var zone = dns.zone('my-existing-zone');

// Create an NS record.
var nsRecord = zone.record('ns', {
  ttl: 86400,
  name: 'my-domain.com.',
  data: 'ns-cloud1.googledomains.com.'
});

zone.addRecord(nsRecord, function(err, change) {});

// Create a zonefile from the records in your zone.
zone.export('/zonefile.zone', function(err) {});
```


## Google Cloud Pub/Sub

- [API Documentation][gcloud-pubsub-docs]
- [Official Documentation][cloud-pubsub-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authentication section above).

var pubsub = gcloud.pubsub({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Reference a topic that has been previously created.
var topic = pubsub.topic('my-topic');

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


## Google Cloud Storage

- [API Documentation][gcloud-storage-docs]
- [Official Documentation][cloud-storage-docs]

#### Preview

```js
var fs = require('fs');
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var gcs = gcloud.storage({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Create a new bucket.
gcs.createBucket('my-new-bucket', function(err, bucket) {
  if (!err) {
    // "my-new-bucket" was successfully created.
  }
});

// Reference an existing bucket.
var bucket = gcs.bucket('my-existing-bucket');

// Upload a local file to a new file to be created in your bucket.
bucket.upload('/photos/zoo/zebra.jpg', function(err, file) {
  if (!err) {
    // "zebra.jpg" is now in your bucket.
  }
});

// Download a file from your bucket.
bucket.file('giraffe.jpg').download({
  destination: '/photos/zoo/giraffe.jpg'
}, function(err) {});

// Streams are also supported for reading and writing files.
var remoteReadStream = bucket.file('giraffe.jpg').createReadStream();
var localWriteStream = fs.createWriteStream('/photos/zoo/giraffe.jpg');
remoteReadStream.pipe(localWriteStream);

var localReadStream = fs.createReadStream('/photos/zoo/zebra.jpg');
var remoteWriteStream = bucket.file('zebra.jpg').createWriteStream();
localReadStream.pipe(remoteWriteStream);
```


## Google Compute Engine

- [API Documentation][gcloud-compute-docs]
- [Official Documentation][cloud-compute-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var gce = gcloud.compute({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Create a new VM using the latest OS image of your choice.
var zone = gce.zone('us-central1-a');
var name = 'ubuntu-http';

zone.createVM(name, { os: 'ubuntu' }, function(err, vm, operation) {
  // `operation` lets you check the status of long-running tasks.

  operation.onComplete(function(err, metadata) {
    if (!err) {
      // Virtual machine created!
    }
  });
});
```


## Google Prediction API

- [API Documentation][gcloud-prediction-docs]
- [Official Documentation][cloud-prediction-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var prediction = gcloud.prediction({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Get all of the trained models in your project.
prediction.getModels(function(err, models) {
  if (!err) {
    // `models` is an array of Model objects.
  }
});

// Reference an existing trained model.
var model = prediction.model('my-existing-model');

// Train a model.
model.train('english', 'Hello from your friends at Google!', function(err) {});

// Query a model.
model.query('Hello', function(err, results) {
  if (!err) {
    // results.winner == 'english'
    // results.scores == [
    //   {
    //     label: 'english',
    //     score: 1
    //   },
    //   {
    //     label: 'spanish',
    //     score: 0
    //   }
    // ]
  }
});
```


## Google Translate API

- [API Documentation][gcloud-translate-docs]
- [Official Documentation][cloud-translate-docs]

**An API key is required for Translate.** See [Identifying your application to Google][api-key-howto].

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).
var translate = gcloud.translate({
  key: 'API Key'
});

// Translate a string of text.
translate.translate('Hello', 'es', function(err, translation) {
  if (!err) {
    // translation = 'Hola'
  }
});

// Detect a language from a string of text.
translate.detect('Hello', function(err, results) {
  if (!err) {
    // results = {
    //   language: 'en',
    //   confidence: 1,
    //   input: 'Hello'
    // }
  }
});

// Get a list of supported languages.
translate.getLanguages(function(err, languages) {
  if (!err) {
    // languages = [
    //   'af',
    //   'ar',
    //   'az',
    //   ...
    // ]
  }
});
```


## Google Cloud Logging (Beta)

> **This is a Beta release of Google Cloud Logging.** This API is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

- [API Documentation][gcloud-logging-docs]
- [Official Documentation][cloud-logging-docs]

```js
// Authenticating on a global-basis. You can also authenticate on a per-API-
// basis (see Authentication section above).

var gcloud = require('gcloud')({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

var logging = gcloud.logging();

// Create a sink using a Bucket as a destination.
var gcs = gcloud.storage();

logging.createSink('my-new-sink', {
  destination: gcs.bucket('my-sink')
}, function(err, sink) {});

// Write a critical entry to a log.
var syslog = logging.log('syslog');

var resource = {
  type: 'gce_instance',
  labels: {
    zone: 'global',
    instance_id: 3
  }
};

var entry = syslog.entry(resource, {
  delegate: process.env.user
});

syslog.critical(entry, function(err) {});

// Get all entries in your project.
logging.getEntries(function(err, entries) {
  if (!err) {
    // `entries` contains all of the entries from the logs in your project.
  }
});
```


## Google Cloud Resource Manager (Beta)

> **This is a Beta release of Google Cloud Resource Manager.** This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

- [API Documentation][gcloud-resource-docs]
- [Official Documentation][cloud-resource-docs]

#### Preview

```js
var gcloud = require('gcloud');

// Authorizing on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authorization section above).

var resource = gcloud.resource({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Get all of the projects you maintain.
resource.getProjects(function(err, projects) {
  if (!err) {
    // `projects` contains all of your projects.
  }
});

// Get the metadata from your project. (defaults to `my-project`)
var project = resource.project();

project.getMetadata(function(err, metadata) {
  // `metadata` describes your project.
});
```


## Google Cloud Search (Alpha)

> **This is an Alpha release of Google Cloud Search.** This feature is not covered by any SLA or deprecation policy and may be subject to backward-incompatible changes.

- [API Documentation][gcloud-search-docs]
- [Official Documentation][cloud-search-docs] - *If you are not a tester, this documentation is unavailable.*

#### Preview

```js
var gcloud = require('gcloud');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var search = gcloud.search({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Create a document in a new index.
var index = search.index('memberData');

var document = index.document('member-id-34211');
document.addField('preferredContactForm').addTextValue('phone');

index.createDocument(document, function(err, document) {
  console.log(err || document);
});

// Search an index and get the results as a readable object stream.
var index = search.index('memberData');

index.search('preferredContactForm:phone')
  .on('error', console.error)
  .on('data', function(document) {
    // document.id = 'member-id-34211';
  })
  .on('end', function() {
    // All results consumed.
  });
```


## Contributing

Contributions to this library are always welcome and highly encouraged.

See [CONTRIBUTING](CONTRIBUTING.md) for more information on how to get started.

## License

Apache 2.0 - See [COPYING](COPYING) for more information.

[gcloud-homepage]: https://googlecloudplatform.github.io/gcloud-node/
[gcloud-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs
[gcloud-bigquery-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/bigquery
[gcloud-compute-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/compute
[gcloud-datastore-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/datastore
[gcloud-dns-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/dns
[gcloud-logging-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/logging
[gcloud-prediction-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/prediction
[gcloud-pubsub-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/pubsub
[gcloud-resource-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/resource
[gcloud-search-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/search
[gcloud-storage-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/storage
[gcloud-translate-docs]: https://googlecloudplatform.github.io/gcloud-node/#/docs/translate

[nodejs-getting-started]: https://github.com/GoogleCloudPlatform/nodejs-getting-started
[nodejs-getting-started-tutorial]: https://cloud.google.com/nodejs/getting-started/hello-world
[gcloud-todos]: https://github.com/GoogleCloudPlatform/gcloud-node-todos
[gitnpm]: https://github.com/stephenplusplus/gitnpm
[gcloud-kvstore]: https://github.com/stephenplusplus/gcloud-kvstore
[hya-wave]: https://wav.hya.io
[hya-io]: https://hya.io

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[api-key-howto]: https://cloud.google.com/translate/v2/using_rest#auth

[googleapis]: https://github.com/google/google-api-nodejs-client

[cloud-bigquery-docs]: https://cloud.google.com/bigquery/what-is-bigquery

[cloud-compute-docs]: https://cloud.google.com/compute/docs

[cloud-datastore-docs]: https://cloud.google.com/datastore/docs
[cloud-datastore-activation]: https://cloud.google.com/datastore/docs/activate

[cloud-dns-docs]: https://cloud.google.com/dns/docs

[cloud-logging-docs]: https://cloud.google.com/logging/docs

[cloud-prediction-docs]: https://cloud.google.com/prediction/docs

[cloud-pubsub-docs]: https://cloud.google.com/pubsub/docs

[cloud-resource-docs]: https://cloud.google.com/resource-manager

[cloud-search-docs]: https://cloud.google.com/search

[cloud-storage-docs]: https://cloud.google.com/storage/docs/overview

[cloud-translate-docs]: https://cloud.google.com/translate/docs
