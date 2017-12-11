# Cloud Node.js Client
> Node.js idiomatic client for [Google Cloud Platform](https://cloud.google.com/) services.

[![NPM Version](https://img.shields.io/npm/v/google-cloud.svg)](https://www.npmjs.org/package/google-cloud)
[![CircleCI](https://circleci.com/gh/GoogleCloudPlatform/google-cloud-node/tree/master.svg?style=shield)](https://circleci.com/gh/GoogleCloudPlatform/google-cloud-node/tree/master)
[![Appveyor Build Status](https://ci.appveyor.com/api/projects/status/github/GoogleCloudPlatform/google-cloud-node?svg=true)](https://ci.appveyor.com/project/GoogleCloudPlatform/google-cloud-node)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/google-cloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/google-cloud-node?branch=master)

* [Homepage][gcloud-homepage]
* [API Documentation][gcloud-docs]

This client supports the following Google Cloud Platform services at a [General Availability (GA)](#versioning) quality level:

* [Cloud Datastore](#cloud-datastore-ga) (GA)
* [Cloud Natural Language](http://github.com/googleapis/nodejs-language/) (GA)
* [Cloud Storage](http://github.com/googleapis/nodejs-storage/) (GA)
* [Cloud Translation API](https://github.com/googleapis/nodejs-translate/) (GA)
* [Google Stackdriver Logging](https://github.com/googleapis/nodejs-logging/) (GA)
* [Cloud Video Intelligence](https://github.com/googleapis/nodejs-video-intelligence/) (GA)

This client supports the following Google Cloud Platform services at a [Beta](#versioning) quality level:

* [Cloud Data Loss Prevention](https://github.com/googleapis/nodejs-dlp) (Beta)
* [Cloud Firestore](https://github.com/googleapis/nodejs-firestore/) (Beta)
* [Cloud Spanner](https://github.com/googleapis/nodejs-spanner/) (Beta)
* [Cloud Speech](https://github.com/googleapis/nodejs-speech/) (Beta)
* [Cloud Vision](https://github.com/googleapis/nodejs-vision) (Beta)
* [Google BigQuery](https://github.com/googleapis/nodejs-bigquery) (Beta)
* [Google Stackdriver Monitoring](https://github.com/googleapis/nodejs-monitoring) (Beta)

This client supports the following Google Cloud Platform services at an [Alpha](#versioning) quality level:

* [Cloud Bigtable](https://github.com/googleapis/nodejs-bigtable) (Alpha)
* [Cloud DNS](https://github.com/googleapis/nodejs-dns) (Alpha)
* [Cloud Resource Manager](https://github.com/googleapis/nodejs-resource) (Alpha)
* [Google Compute Engine](https://github.com/googleapis/nodejs-compute) (Alpha)
* [Google Stackdriver Debugger](#google-stackdriver-debugger-alpha) (Alpha)
* [Google Stackdriver Error Reporting](#google-stackdriver-error-reporting-alpha) (Alpha)
* [Google Stackdriver Trace](#google-stackdriver-trace-alpha) (Alpha)

The following client libraries are **deprecated** due to the underlying API also being deprecated:

* [Google Prediction API](https://github.com/googleapis/nodejs-prediction) (Deprecated)

If you need support for other Google APIs, check out the [Google Node.js API Client library][googleapis].


## Quick Start

We recommend installing the individual packages that you need, which are provided under the `@google-cloud` namespace. For example:

```sh
$ npm install --save @google-cloud/datastore
$ npm install --save @google-cloud/storage
```
```js
var config = {
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
};

var datastore = require('@google-cloud/datastore')(config);
var storage = require('@google-cloud/storage')(config);
```

#### The google-cloud meta-package

We also provide a meta-package, `google-cloud`, which provides all of the individual APIs. However, in order to keep file size and memory use low, the use of this package is not recommended.

If you want the kitchen sink, however, get it with:

```sh
$ npm install --save google-cloud
```
```js
var gcloud = require('google-cloud')({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var datastore = gcloud.datastore();
var storage = gcloud.storage();
```


## Example Applications

- [nodejs-getting-started][nodejs-getting-started] - A sample and [tutorial][nodejs-getting-started-tutorial] that demonstrates how to build a complete web application using Cloud Datastore, Cloud Storage, and Cloud Pub/Sub and deploy it to Google App Engine or Google Compute Engine.
- [gcloud-node-todos][gcloud-todos] - A TodoMVC backend using google-cloud-node and Datastore.
- [gitnpm][gitnpm] - Easily lookup an npm package's GitHub repo using google-cloud-node and Google App Engine.
- [gcloud-kvstore][gcloud-kvstore] - Use Datastore as a simple key-value store.
- [hya-wave][hya-wave] - Cloud-based web sample editor. Part of the [hya-io][hya-io] family of products.
- [gstore-node][gstore-node] - Google Datastore Entities Modeling library.
- [gstore-api][gstore-api] - REST API builder for Google Datastore Entities.


## Authentication

With `google-cloud` it's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var storage = require('@google-cloud/storage')();

// If you're using the google-cloud meta-package:
var gcloud = require('google-cloud');
var storage = gcloud.storage();

// ...you're good to go! See the next section to get started using the APIs.
```


### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * BigQuery API
  * Cloud Bigtable API
  * Cloud Bigtable Admin API
  * Cloud Bigtable Table Admin API
  * Cloud Spanner API
  * Google Cloud Datastore API
  * Google Cloud DNS API
  * Google Cloud Firestore API
  * Google Cloud Natural Language API
  * Google Cloud Pub/Sub API
  * Google Cloud Resource Manager API
  * Google Cloud Speech API
  * Google Cloud Storage
  * Google Cloud Storage JSON API
  * Google Cloud Translation API
  * Google Cloud Vision API
  * Google Compute Engine API
  * Prediction API
  * Stackdriver Logging API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
// Authenticating on a global basis.
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var gcloud = require('google-cloud')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')

  // For any APIs that accept an API key:
  key: '...'
});

// ...you're good to go! See the next section to get started using the APIs.
```

You can also set auth on a per-API-instance basis. The examples below show you how.


## Cloud Datastore (GA)

- [API Documentation][gcloud-datastore-docs]
- [Official Documentation][cloud-datastore-docs]

*Follow the [activation instructions][cloud-datastore-activation] to use the Cloud Datastore API with your project.*

#### Using the Cloud Datastore API module

```
$ npm install --save @google-cloud/datastore
```

```js
var datastore = require('@google-cloud/datastore');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var datastoreClient = datastore({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var key = datastoreClient.key(['Product', 'Computer']);

datastoreClient.get(key, function(err, entity) {
  console.log(err || entity);
});

// Save data to Datastore.
var blogPostData = {
  title: 'How to make the perfect homemade pasta',
  author: 'Andrew Chilton',
  isDraft: true
};

var blogPostKey = datastoreClient.key('BlogPost');

datastoreClient.save({
  key: blogPostKey,
  data: blogPostData
}, function(err) {
  // `blogPostKey` has been updated with an ID so you can do more operations
  // with it, such as an update.
  blogPostData.isDraft = false;

  datastoreClient.save({
    key: blogPostKey,
    data: blogPostData
  }, function(err) {
    if (!err) {
      // The blog post is now published!
    }
  });
});
```


## Cloud Natural Language (GA)

- [API Documentation][gcloud-language-docs]
- [Official Documentation][cloud-language-docs]

#### Using the Natural Language API module

```
$ npm install --save @google-cloud/language
```

```js
var language = require('@google-cloud/language');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var languageClient = language({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var content = 'Hello, world!';
var type = language.v1.types.Document.Type.PLAIN_TEXT;
var document = {
    content : content,
    type : type
};
languageClient.analyzeSentiment({document: document}).then(function(responses) {
    var response = responses[0];
    // doThingsWith(response)
})
.catch(function(err) {
    console.error(err);
});
```


## Cloud Storage (GA)

- [API Documentation][gcloud-storage-docs]
- [Official Documentation][cloud-storage-docs]

#### Using the Cloud Storage API module

```
$ npm install --save @google-cloud/storage
```

```js
var storage = require('@google-cloud/storage');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var fs = require('fs');

var gcs = storage({
  projectId: 'grape-spaceship-123',
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


## Cloud Translation API (GA)

- [API Documentation][gcloud-translate-docs]
- [Official Documentation][cloud-translate-docs]

#### Using the Google Translate API module

```
$ npm install --save @google-cloud/translate
```

```js
var translate = require('@google-cloud/translate');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var translateClient = translate({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Translate a string of text.
translateClient.translate('Hello', 'es', function(err, translation) {
  if (!err) {
    // translation = 'Hola'
  }
});

// Detect a language from a string of text.
translateClient.detect('Hello', function(err, results) {
  if (!err) {
    // results = {
    //   language: 'en',
    //   confidence: 1,
    //   input: 'Hello'
    // }
  }
});

// Get a list of supported languages.
translateClient.getLanguages(function(err, languages) {
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


## Google Stackdriver Logging (GA)

- [API Documentation][gcloud-logging-docs]
- [Official Documentation][cloud-logging-docs]

#### Using the Google Stackdriver Logging API module

```
$ npm install --save @google-cloud/logging
```

```js
var logging = require('@google-cloud/logging');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var loggingClient = logging({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Create a sink using a Bucket as a destination.
var gcs = storage();

loggingClient.createSink('my-new-sink', {
  destination: gcs.bucket('my-sink')
}, function(err, sink) {});

// Write a critical entry to a log.
var syslog = loggingClient.log('syslog');

var metadata = {
  resource: {
    type: 'gce_instance',
    labels: {
      zone: 'global',
      instance_id: '3'
    }
  }
};

var entry = syslog.entry(metadata, {
  delegate: process.env.user
});

syslog.critical(entry, function(err) {});

// Get all entries in your project.
loggingClient.getEntries(function(err, entries) {
  if (!err) {
    // `entries` contains all of the entries from the logs in your project.
  }
});
```


## Cloud Firestore (Beta)

- [API Documentation][gcloud-firestore-docs]
- [Official Documentation][cloud-firestore-docs]

#### Using the Cloud Firestore API module

```
$ npm install --save @google-cloud/firestore
```

```js
const Firestore = require('@google-cloud/firestore');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
const firestore = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});

const document = firestore.doc('posts/intro-to-firestore');

// Enter new data into the document.
document.set({
  title: 'Welcome to Firestore',
  body: 'Hello World',
}).then(() => {
  // Document created successfully.
});

// Update an existing document.
document.update({
  body: 'My first Firestore app',
}).then(() => {
  // Document updated successfully.
});

// Read the document.
document.get().then(doc => {
  // Document read successfully.
});

// Delete the document.
document.delete().then(() => {
  // Document deleted successfully.
});
```


## Cloud Pub/Sub (Beta)

- [API Documentation][gcloud-pubsub-docs]
- [Official Documentation][cloud-pubsub-docs]

#### Using the Cloud Pub/Sub API module

```
$ npm install --save @google-cloud/pubsub
```

```js
var pubsub = require('@google-cloud/pubsub');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var pubsubClient = pubsub({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Reference a topic that has been previously created.
var topic = pubsubClient.topic('my-topic');

// Publish a message to the topic.
var publisher = topic.publisher();
var message = new Buffer('New message!');

publisher.publish(message, function(err, messageId) {});

// Subscribe to the topic.
topic.createSubscription('subscription-name', function(err, subscription) {
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


## Cloud Spanner (Beta)

- [API Documentation][gcloud-spanner-docs]
- [Official Documentation][cloud-spanner-docs]

#### Using the Cloud Spanner API module

```
$ npm install --save @google-cloud/spanner
```

```js
var spanner = require('@google-cloud/spanner');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var spannerClient = spanner({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var instance = spannerClient.instance('my-instance');
var database = instance.database('my-database');

// Create a table.
var schema = `
  CREATE TABLE Singers (
    SingerId INT64 NOT NULL,
    FirstName STRING(1024),
    LastName STRING(1024),
    SingerInfo BYTES(MAX),
  ) PRIMARY KEY(SingerId)
`;

database.createTable(schema, function(err, table, operation) {
  if (err) {
    // Error handling omitted.
  }

  operation
    .on('error', function(err) {})
    .on('complete', function() {
      // Table created successfully.
    });
});

// Insert data into the table.
var table = database.table('Singers');

table.insert({
  SingerId: 10,
  FirstName: 'Eddie',
  LastName: 'Wilson'
}, function(err) {
  if (!err) {
    // Row inserted successfully.
  }
});

// Run a query as a readable object stream.
database.runStream('SELECT * FROM Singers')
  .on('error', function(err) {})
  .on('data', function(row) {
    // row.toJSON() = {
    //   SingerId: 10,
    //   FirstName: 'Eddie',
    //   LastName: 'Wilson'
    // }
  }
  })
  .on('end', function() {
    // All results retrieved.
  });
```


## Cloud Speech (Beta)

- [API Documentation][gcloud-speech-docs]
- [Official Documentation][cloud-speech-docs]

#### Using the Cloud Speech API module

```
$ npm install --save @google-cloud/speech
```

```js
var speech = require('@google-cloud/speech');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var speechClient = speech({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

var languageCode = 'en-US';
var sampleRateHertz = 44100;
var encoding = speech.v1.types.RecognitionConfig.AudioEncoding.FLAC;
var config = {
    languageCode : languageCode,
    sampleRateHertz : sampleRateHertz,
    encoding : encoding
};
var uri = 'gs://gapic-toolkit/hello.flac';
var audio = {
    uri : uri
};
var request = {
    config: config,
    audio: audio
};
speechClient.recognize(request).then(function(responses) {
    var response = responses[0];
    // doThingsWith(response)
})
.catch(function(err) {
    console.error(err);
});
```


## Cloud Vision (Beta)

- [API Documentation][gcloud-vision-docs]
- [Official Documentation][cloud-vision-docs]

#### Using the Cloud Vision API module

```
$ npm install --save @google-cloud/vision
```

```js
var vision = require('@google-cloud/vision');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var visionClient = vision({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var gcsImageUri = 'gs://gapic-toolkit/President_Barack_Obama.jpg';
var source = {
    gcsImageUri : gcsImageUri
};
var image = {
    source : source
};
var type = vision.v1.types.Feature.Type.FACE_DETECTION;
var featuresElement = {
    type : type
};
var features = [featuresElement];
var requestsElement = {
    image : image,
    features : features
};
var requests = [requestsElement];
visionClient.batchAnnotateImages({requests: requests}).then(function(responses) {
    var response = responses[0];
    // doThingsWith(response)
})
.catch(function(err) {
    console.error(err);
});
```


## Google BigQuery (Beta)

- [API Documentation][gcloud-bigquery-docs]
- [Official Documentation][cloud-bigquery-docs]


#### Using the BigQuery API module

```
$ npm install --save @google-cloud/bigquery
```

```js
var bigquery = require('@google-cloud/bigquery');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var bigqueryClient = bigquery({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Access an existing dataset and table.
var schoolsDataset = bigqueryClient.dataset('schools');
var schoolsTable = schoolsDataset.table('schoolsData');

// Import data into a table.
schoolsTable.import('/local/file.json', function(err, job) {});

// Get results from a query job.
var job = bigqueryClient.job('job-id');

// Use a callback.
job.getQueryResults(function(err, rows) {});

// Or get the same results as a readable stream.
job.getQueryResults().on('data', function(row) {});
```


## Google Stackdriver Monitoring (Beta)

### :warning: This is an auto-generated API

It does not follow the conventions you're familiar with from other parts of our library. A handwritten layer is not yet available.

The example below shows you how to instantiate the generated client. For further documentation, please browse the [Monitoring .proto files][cloud-monitoring-protos] on GitHub.

- [API Documentation][gcloud-monitoring-docs]
- [Official Documentation][cloud-monitoring-docs]

#### Using the Google Stackdriver Monitoring API module

```
$ npm install --save @google-cloud/monitoring
```

```js
var monitoring = require('@google-cloud/monitoring');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var client = monitoring.metric({
    // optional auth parameters.
});

// Iterate over all elements.
var formattedName = client.projectPath(projectId);

client.listMonitoredResourceDescriptors({name: formattedName}).then(function(responses) {
    var resources = responses[0];
    for (var i = 0; i < resources.length; ++i) {
        // doThingsWith(resources[i])
    }
})
.catch(function(err) {
    console.error(err);
});

// Or obtain the paged response.
var formattedName = client.projectPath(projectId);


var options = {autoPaginate: false};
function callback(responses) {
    // The actual resources in a response.
    var resources = responses[0];
    // The next request if the response shows there's more responses.
    var nextRequest = responses[1];
    // The actual response object, if necessary.
    // var rawResponse = responses[2];
    for (var i = 0; i < resources.length; ++i) {
        // doThingsWith(resources[i]);
    }
    if (nextRequest) {
        // Fetch the next page.
        return client.listMonitoredResourceDescriptors(nextRequest, options).then(callback);
    }
}
client.listMonitoredResourceDescriptors({name: formattedName}, options)
    .then(callback)
    .catch(function(err) {
        console.error(err);
    });
```


## Cloud Bigtable (Alpha)

- [API Documentation][gcloud-bigtable-docs]
- [Official Documentation][cloud-bigtable-docs]

*You may need to [create an instance][cloud-bigtable-instance] to use the Cloud Bigtable API with your project.*


#### Using the Cloud Bigtable API module

```
$ npm install --save @google-cloud/bigtable
```

```js
var bigtable = require('@google-cloud/bigtable');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var bigtableClient = bigtable({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

var instance = bigtableClient.instance('my-instance');
var table = instance.table('prezzy');

table.getRows(function(err, rows) {});

// Update a row in your table.
var row = table.row('alincoln');

row.save('follows:gwashington', 1, function(err) {
  if (err) {
    // Error handling omitted.
  }

  row.get('follows:gwashington', function(err, data) {
    if (err) {
      // Error handling omitted.
    }

    // data = {
    //   follows: {
    //     gwashington: [
    //       {
    //         value: 1
    //       }
    //     ]
    //   }
    // }
  });
});
```


## Cloud DNS (Alpha)

- [API Documentation][gcloud-dns-docs]
- [Official Documentation][cloud-dns-docs]

#### Using the Cloud DNS API module

```
$ npm install --save @google-cloud/dns
```

```js
var dns = require('@google-cloud/dns');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var dnsClient = dns({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Create a managed zone.
dnsClient.createZone('my-new-zone', {
  dnsName: 'my-domain.com.'
}, function(err, zone) {});

// Reference an existing zone.
var zone = dnsClient.zone('my-existing-zone');

// Create an NS record.
var nsRecord = zone.record('ns', {
  ttl: 86400,
  name: 'my-domain.com.',
  data: 'ns-cloud1.googledomains.com.'
});

zone.addRecords([nsRecord], function(err, change) {});

// Create a zonefile from the records in your zone.
zone.export('/zonefile.zone', function(err) {});
```


## Cloud Resource Manager (Alpha)

- [API Documentation][gcloud-resource-docs]
- [Official Documentation][cloud-resource-docs]

#### Using the Cloud Resource Manager API module

```
$ npm install --save @google-cloud/resource
```

```js
var resource = require('@google-cloud/resource');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var resourceClient = resource({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Get all of the projects you maintain.
resourceClient.getProjects(function(err, projects) {
  if (!err) {
    // `projects` contains all of your projects.
  }
});

// Get the metadata from your project. (defaults to `grape-spaceship-123`)
var project = resourceClient.project();

project.getMetadata(function(err, metadata) {
  // `metadata` describes your project.
});
```


## Google Compute Engine (Alpha)

- [API Documentation][gcloud-compute-docs]
- [Official Documentation][cloud-compute-docs]

#### Using the Compute Engine API module

```
$ npm install --save @google-cloud/compute
```

```js
var compute = require('@google-cloud/compute');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var gce = compute({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Create a new VM using the latest OS image of your choice.
var zone = gce.zone('us-central1-a');
var name = 'ubuntu-http';

zone.createVM(name, { os: 'ubuntu' }, function(err, vm, operation) {
  // `operation` lets you check the status of long-running tasks.

  operation
    .on('error', function(err) {})
    .on('running', function(metadata) {})
    .on('complete', function(metadata) {
      // Virtual machine created!
    });
});
```


## Google Prediction API (Alpha)

- [API Documentation][gcloud-prediction-docs]
- [Official Documentation][cloud-prediction-docs]

#### Using the Prediction API module

```
$ npm install --save @google-cloud/prediction
```

```js
var prediction = require('@google-cloud/prediction');
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
var predictionClient = prediction({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Get all of the trained models in your project.
predictionClient.getModels(function(err, models) {
  if (!err) {
    // `models` is an array of Model objects.
  }
});

// Reference an existing trained model.
var model = predictionClient.model('my-existing-model');

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

## Google Stackdriver Debugger (Alpha)

- [GitHub Repo][stackdriver-debug-nodejs-repo]
- [Official Documentation][stackdriver-debug-docs]

*The source code for the Node.js Cloud Debugger Agent lives in a [separate repo][stackdriver-debug-nodejs-repo].*


#### Using the Stackdriver Debug Agent module

```
$ npm install --save @google-cloud/debug-agent
```

```js
require('@google-cloud/debug-agent').start({ allowExpressions: true });
```

For more details on API usage, please see the [Stackdriver Debug Agent Github Repository][stackdriver-debug-nodejs-repo].


## Google Stackdriver Error Reporting (Alpha)

- [API Documentation][stackdriver-errors-module]
- [Official Documentation][stackdriver-errors-docs]


#### Using the Stackdriver Error Reporting module

```
$ npm install --save @google-cloud/error-reporting
```

The module provides automatic [uncaught exception handling][stackdriver-errors-uncaught], [manual error reporting][stackdriver-errors-manual], and integration with common frameworks like [express][stackdriver-errors-express] and [hapi][stackdriver-errors-hapi].

```js
var errors = require('@google-cloud/error-reporting')();
```

#### Authentication

See [Authentication](#authentication).

#### Preview

```js
errors.report(new Error('Something broke!'));
```

For more details on API usage, please see the [documentation][stackdriver-errors-module].


## Google Stackdriver Trace (Alpha)

- [GitHub Repo][stackdriver-trace-nodejs-repo]
- [Official Documentation][stackdriver-trace-docs]

*The source code for the Node.js Cloud Trace Agent lives in a [separate repo][stackdriver-trace-nodejs-repo].*


#### Using the Stackdriver Trace Agent module

```
$ npm install --save @google-cloud/trace-agent
```

```js
var trace = require('@google-cloud/trace-agent').start();
```

For more details on API usage, please see the [Stackdriver Trace Agent Github Repository][stackdriver-trace-nodejs-repo].


## Versioning

This library follows [Semantic Versioning][semver].

Please note it is currently under active development. Any release versioned `0.x.y` is subject to backwards-incompatible changes at any time.

**GA**: Libraries defined at the GA (general availability) quality level are stable. The code surface will not change in backwards-incompatible ways unless absolutely necessary (e.g. because of critical security issues) or with an extensive deprecation period. Issues and requests against GA libraries are addressed with the highest priority.

Please note that the auto-generated portions of the GA libraries (the ones in modules such as `v1` or `v2`) are considered to be of **Beta** quality, even if the libraries that wrap them are GA.

**Beta**: Libraries defined at the Beta quality level are expected to be mostly stable, while we work towards their release candidate. We will address issues and requests with a higher priority.

**Alpha**: Libraries defined at the Alpha quality level are still a work-in-progress and are more likely to get backwards-incompatible updates.


## Contributing

Contributions to this library are always welcome and highly encouraged.

See [CONTRIBUTING][contributing] for more information on how to get started.


## License

Apache 2.0 - See [LICENSE][license] for more information.


[gcloud-homepage]: https://googlecloudplatform.github.io/google-cloud-node/
[gcloud-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs
[gcloud-bigquery-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/bigquery
[gcloud-bigtable-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/bigtable
[gcloud-compute-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/compute
[gcloud-datastore-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore
[gcloud-firestore-docs]: https://cloud.google.com/nodejs/docs/reference/firestore/latest
[gcloud-dns-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/dns
[gcloud-language-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/language
[gcloud-logging-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging
[gcloud-prediction-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/prediction
[gcloud-monitoring-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/monitoring
[gcloud-pubsub-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub
[gcloud-resource-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/resource
[gcloud-spanner-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/spanner
[gcloud-speech-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/speech
[gcloud-storage-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage
[gcloud-translate-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/translate
[gcloud-vision-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/vision

[nodejs-getting-started]: https://github.com/GoogleCloudPlatform/nodejs-getting-started
[nodejs-getting-started-tutorial]: https://cloud.google.com/nodejs/getting-started/hello-world
[gcloud-todos]: https://github.com/GoogleCloudPlatform/gcloud-node-todos
[gitnpm]: https://github.com/stephenplusplus/gitnpm
[gcloud-kvstore]: https://github.com/stephenplusplus/gcloud-kvstore
[hya-wave]: https://wav.hya.io
[hya-io]: https://hya.io
[gstore-node]: https://github.com/sebelga/gstore-node
[gstore-api]: https://github.com/sebelga/gstore-api

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[api-key-howto]: https://cloud.google.com/translate/v2/using_rest#auth

[googleapis]: https://github.com/google/google-api-nodejs-client

[cloud-bigquery-docs]: https://cloud.google.com/bigquery/what-is-bigquery

[cloud-bigtable-docs]: https://cloud.google.com/bigtable/docs
[cloud-bigtable-instance]: https://cloud.google.com/bigtable/docs/creating-instance

[cloud-compute-docs]: https://cloud.google.com/compute/docs

[cloud-datastore-docs]: https://cloud.google.com/datastore/docs
[cloud-datastore-activation]: https://cloud.google.com/datastore/docs/activate

[cloud-dns-docs]: https://cloud.google.com/dns/docs

[cloud-firestore-docs]: https://firebase.google.com/docs/firestore

[cloud-language-docs]: https://cloud.google.com/natural-language/docs

[cloud-monitoring-docs]: https://cloud.google.com/monitoring/docs
[cloud-monitoring-protos]: https://github.com/googleapis/googleapis/tree/master/google/monitoring/v3

[cloud-logging-docs]: https://cloud.google.com/logging/docs

[cloud-prediction-docs]: https://cloud.google.com/prediction/docs

[cloud-pubsub-docs]: https://cloud.google.com/pubsub/docs

[cloud-resource-docs]: https://cloud.google.com/resource-manager

[cloud-spanner-docs]: https://cloud.google.com/spanner

[cloud-storage-docs]: https://cloud.google.com/storage/docs/overview

[cloud-translate-docs]: https://cloud.google.com/translate/docs

[cloud-speech-docs]: https://cloud.google.com/speech/docs

[cloud-vision-docs]: https://cloud.google.com/vision/docs

[semver]: http://semver.org

[stackdriver-debug-nodejs-repo]: https://github.com/GoogleCloudPlatform/cloud-debug-nodejs
[stackdriver-debug-docs]: https://cloud.google.com/debugger/docs/
[stackdriver-trace-nodejs-repo]: https://github.com/GoogleCloudPlatform/cloud-trace-nodejs
[stackdriver-trace-docs]: https://cloud.google.com/trace/docs/
[stackdriver-errors-docs]: https://cloud.google.com/error-reporting/docs/
[stackdriver-errors-uncaught]:  https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/error-reporting#catching-and-reporting-application-wide-uncaught-errors
[stackdriver-errors-manual]: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/error-reporting#reporting-manually
[stackdriver-errors-express]: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/error-reporting#using-express
[stackdriver-errors-hapi]: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/error-reporting#using-hapi
[stackdriver-errors-module]: https://github.com/GoogleCloudPlatform/google-cloud-node/tree/master/packages/error-reporting

[contributing]: .github/CONTRIBUTING.md

[license]: LICENSE
