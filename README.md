# Google Cloud Node.js Client
> Node.js idiomatic client for [Google Cloud Platform](https://cloud.google.com/) services.

[![NPM Version](https://img.shields.io/npm/v/google-cloud.svg)](https://www.npmjs.org/package/google-cloud)
[![Appveyor Build Status](https://ci.appveyor.com/api/projects/status/github/GoogleCloudPlatform/google-cloud-node?svg=true)](https://ci.appveyor.com/project/GoogleCloudPlatform/google-cloud-node)
[![Dependency Status](https://dependencyci.com/github/GoogleCloudPlatform/google-cloud-node/badge)](https://dependencyci.com/github/GoogleCloudPlatform/google-cloud-node)
[![Coverage Status](https://img.shields.io/coveralls/GoogleCloudPlatform/google-cloud-node.svg)](https://coveralls.io/r/GoogleCloudPlatform/google-cloud-node?branch=master)

* [Homepage][gcloud-homepage]
* [API Documentation][gcloud-docs]

This client supports the following Google Cloud Platform services at a [Beta](#versioning) quality level:

* [Google BigQuery](#google-bigquery-beta) (Beta)
* [Google Cloud Datastore](#google-cloud-datastore-beta) (Beta)
* [Google Cloud Storage](#google-cloud-storage-beta) (Beta)
* [Google Stackdriver Logging](#google-stackdriver-logging-beta) (Beta)

This client supports the following Google Cloud Platform services at an [Alpha](#versioning) quality level:

* [Google Cloud Bigtable](#google-cloud-bigtable-alpha) (Alpha)
* [Google Cloud DNS](#google-cloud-dns-alpha) (Alpha)
* [Google Cloud Natural Language](#google-cloud-natural-language-alpha) (Alpha)
* [Google Cloud Pub/Sub](#google-cloud-pubsub-alpha) (Alpha)
* [Google Cloud Resource Manager](#google-cloud-resource-manager-alpha) (Alpha)
* [Google Cloud Speech](#google-cloud-speech-alpha) (Alpha)
* [Google Cloud Translation API](#google-cloud-translation-api-alpha) (Alpha)
* [Google Cloud Vision](#google-cloud-vision-alpha) (Alpha)
* [Google Compute Engine](#google-compute-engine-alpha) (Alpha)
* [Google Prediction API](#google-prediction-api-alpha) (Alpha)
* [Google Stackdriver Monitoring](#google-stackdriver-monitoring-alpha) (Alpha)

If you need support for other Google APIs, check out the [Google Node.js API Client library][googleapis].


## Quick Start

```sh
$ npm install --save google-cloud
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

With `google-cloud` it's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Cloud Platform

If you are running this client on Google Compute Engine, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var gcloud = require('google-cloud');
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
  * Google Cloud Datastore API
  * Google Cloud DNS API
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


## Google BigQuery (Beta)

- [API Documentation][gcloud-bigquery-docs]
- [Official Documentation][cloud-bigquery-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var bigquery = gcloud.bigquery;
```

#### Using the BigQuery API module

```
$ npm install --save @google-cloud/bigquery
```

```js
var bigquery = require('@google-cloud/bigquery');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Cloud Datastore (Beta)

- [API Documentation][gcloud-datastore-docs]
- [Official Documentation][cloud-datastore-docs]

*Follow the [activation instructions][cloud-datastore-activation] to use the Google Cloud Datastore API with your project.*

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var datastore = gcloud.datastore;
```

#### Using the Cloud Datastore API module

```
$ npm install --save @google-cloud/datastore
```

```js
var datastore = require('@google-cloud/datastore');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Cloud Storage (Beta)

- [API Documentation][gcloud-storage-docs]
- [Official Documentation][cloud-storage-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var storage = gcloud.storage;
```

#### Using the Cloud Storage API module

```
$ npm install --save @google-cloud/storage
```

```js
var storage = require('@google-cloud/storage');
```

#### Preview

```js
var fs = require('fs');

// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Stackdriver Logging (Beta)

- [API Documentation][gcloud-logging-docs]
- [Official Documentation][cloud-logging-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var logging = gcloud.logging;
```

#### Using the Google Stackdriver Logging API module

```
$ npm install --save @google-cloud/logging
```

```js
var logging = require('@google-cloud/logging');
```

#### Preview

```js
// Authenticating on a global-basis. You can also authenticate on a per-API-
// basis (see Authentication section above).

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


## Google Cloud Bigtable (Alpha)

- [API Documentation][gcloud-bigtable-docs]
- [Official Documentation][cloud-bigtable-docs]

*You may need to [create a cluster][cloud-bigtable-cluster] to use the Google Cloud Bigtable API with your project.*

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var bigtable = gcloud.bigtable;
```

#### Using the Cloud Bigtable API module

```
$ npm install --save @google-cloud/bigtable
```

```js
var bigtable = require('@google-cloud/bigtable');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Cloud DNS (Alpha)

- [API Documentation][gcloud-dns-docs]
- [Official Documentation][cloud-dns-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var dns = gcloud.dns;
```

#### Using the Cloud DNS API module

```
$ npm install --save @google-cloud/dns
```

```js
var dns = require('@google-cloud/dns');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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

zone.addRecord(nsRecord, function(err, change) {});

// Create a zonefile from the records in your zone.
zone.export('/zonefile.zone', function(err) {});
```


## Google Cloud Natural Language (Alpha)

- [API Documentation][gcloud-language-docs]
- [Official Documentation][cloud-language-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var language = gcloud.language;
```

#### Using the Natural Language API module

```
$ npm install --save @google-cloud/language
```

```js
var language = require('@google-cloud/language');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authorization section above).

var languageClient = language({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Get the entities from a sentence.
languageClient.detectEntities('Stephen of Michigan!', function(err, entities) {
  // entities = {
  //   people: ['Stephen'],
  //   places: ['Michigan']
  // }
});

// Create a document if you plan to run multiple detections.
var document = languageClient.document('Contributions welcome!');

// Analyze the sentiment of the document.
document.detectSentiment(function(err, sentiment) {
  // sentiment = 100 // Large numbers represent more positive sentiments.
});

// Parse the syntax of the document.
document.annotate(function(err, annotations) {
  // annotations = {
  //   language: 'en',
  //   sentiment: 100,
  //   entities: {},
  //   sentences: ['Contributions welcome!'],
  //   tokens: [
  //     {
  //       text: 'Contributions',
  //       partOfSpeech: 'Noun (common and proper)',
  //       partOfSpeechTag: 'NOUN'
  //     },
  //     {
  //       text: 'welcome',
  //       partOfSpeech: 'Verb (all tenses and modes)',
  //       partOfSpeechTag: 'VERB'
  //     },
  //     {
  //       text: '!',
  //       partOfSpeech: 'Punctuation',
  //       partOfSpeechTag: 'PUNCT'
  //     }
  //   ]
  // }
});
```


## Google Cloud Pub/Sub (Alpha)

- [API Documentation][gcloud-pubsub-docs]
- [Official Documentation][cloud-pubsub-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var pubsub = gcloud.pubsub;
```

#### Using the Cloud Pub/Sub API module

```
$ npm install --save @google-cloud/pubsub
```

```js
var pubsub = require('@google-cloud/pubsub');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you
// auth on a global basis (see Authentication section above).

var pubsubClient = pubsub({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Reference a topic that has been previously created.
var topic = pubsubClient.topic('my-topic');

// Publish a message to the topic.
topic.publish('New message!', function(err) {});

// Subscribe to the topic.
topic.subscribe('subscription-name', function(err, subscription) {
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


## Google Cloud Resource Manager (Alpha)

- [API Documentation][gcloud-resource-docs]
- [Official Documentation][cloud-resource-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var resource = gcloud.resource;
```

#### Using the Cloud Resource Manager API module

```
$ npm install --save @google-cloud/resource
```

```js
var resource = require('@google-cloud/resource');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Cloud Speech (Alpha)

- [API Documentation][gcloud-speech-docs]
- [Official Documentation][cloud-speech-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var speech = gcloud.speech;
```

#### Using the Cloud Speech API module

```
$ npm install --save @google-cloud/speech
```

```js
var speech = require('@google-cloud/speech');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var speechClient = speech({
  projectId: 'my-project',
  keyFilename: '/path/to/keyfile.json'
});

// Detect the speech in an audio file.
speechClient.recognize('./audio.raw', {
  encoding: 'LINEAR16',
  sampleRate: 16000
}, function(err, transcript) {
  // transcript = 'how old is the Brooklyn Bridge'
});

// Detect the speech in an audio file stream.
fs.createReadStream('./audio.raw')
  .on('error', console.error)
  .pipe(speechClient.createRecognizeStream({
    config: {
      encoding: 'LINEAR16',
      sampleRate: 16000
    },
    singleUtterance: false,
    interimResults: false
  }))
  .on('error', console.error)
  .on('data', function(data) {
    // The first "data" event emitted might look like:
    //   data = {
    //     endpointerType: Speech.endpointerTypes.START_OF_SPEECH,
    //     results: "",
    //     ...
    //   }
    //
    // A later "data" event emitted might look like:
    //   data = {
    //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
    //     results: "",
    //     ...
    //   }
    //
    // A final "data" event emitted might look like:
    //   data = {
    //     endpointerType:
    //       Speech.endpointerTypes.ENDPOINTER_EVENT_UNSPECIFIED,
    //     results: "how old is the Brooklyn Bridge",
    //     ...
    //   }
  });
```


## Google Cloud Translation API (Alpha)

- [API Documentation][gcloud-translate-docs]
- [Official Documentation][cloud-translate-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var translate = gcloud.translate;
```

#### Using the Google Translate API module

```
$ npm install --save @google-cloud/translate
```

```js
var translate = require('@google-cloud/translate');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Cloud Vision (Alpha)

- [API Documentation][gcloud-vision-docs]
- [Official Documentation][cloud-vision-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var vision = gcloud.vision;
```

#### Using the Cloud Vision API module

```
$ npm install --save @google-cloud/vision
```

```js
var vision = require('@google-cloud/vision');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

var visionClient = vision({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Read the text from an image.
visionClient.detectText('./image.jpg', function(err, text) {
  // text = [
  //   'This was text found in the image',
  //   'This was more text found in the image'
  // ]
});

// Detect faces and the locations of their features in an image.
visionClient.detectFaces('./image.jpg', function(err, faces) {
  // faces = [
  //   {
  //     angles: {pan,tilt,roll},
  //     bounds: {
  //       head: [{x,y},{x,y},{x,y},{x,y}],
  //       face: [{x,y},{x,y},{x,y},{x,y}]
  //     },
  //     features: {
  //       confidence: 34.489909,
  //       chin: {
  //         center: {x,y,z},
  //         left: {x,y,z},
  //         right: {x,y,z}
  //       },
  //       ears: {
  //         left: {x,y,z},
  //         right: {x,y,z}
  //       },
  //       eyebrows: {
  //         left: {
  //           left: {x,y,z},
  //           right: {x,y,z},
  //           top: {x,y,z}
  //         },
  //         right: {
  //           left: {x,y,z},
  //           right: {x,y,z},
  //           top: {x,y,z}
  //         }
  //       },
  //       eyes: {
  //         left: {
  //           bottom: {x,y,z},
  //           center: {x,y,z},
  //           left: {x,y,z},
  //           pupil: {x,y,z},
  //           right: {x,y,z},
  //           top: {x,y,z}
  //         },
  //         right: {
  //           bottom: {x,y,z},
  //           center: {x,y,z},
  //           left: {x,y,z},
  //           pupil: {x,y,z},
  //           right: {x,y,z},
  //           top: {x,y,z}
  //         }
  //       },
  //       forehead: {x,y,z},
  //       lips: {
  //         bottom: {x,y,z},
  //         top: {x,y,z}
  //       },
  //       mouth: {
  //         center: {x,y,z},
  //         left: {x,y,z},
  //         right: {x,y,z}
  //       },
  //       nose: {
  //         bottom: {
  //           center: {x,y,z},
  //           left: {x,y,z},
  //           right: {x,y,z}
  //         },
  //         tip: {x,y,z},
  //         top: {x,y,z}
  //       }
  //     },
  //     confidence: 56.748849,
  //     blurry: false,
  //     dark: false,
  //     happy: false,
  //     hat: false,
  //     mad: false,
  //     sad: false,
  //     surprised: false
  //   }
  // ]
});
```


## Google Compute Engine (Alpha)

- [API Documentation][gcloud-compute-docs]
- [Official Documentation][cloud-compute-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var compute = gcloud.compute;
```

#### Using the Compute Engine API module

```
$ npm install --save @google-cloud/compute
```

```js
var compute = require('@google-cloud/compute');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var prediction = gcloud.prediction;
```

#### Using the Prediction API module

```
$ npm install --save @google-cloud/prediction
```

```js
var prediction = require('@google-cloud/prediction');
```

#### Preview

```js
// Authenticating on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authentication section above).

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


## Google Stackdriver Monitoring (Alpha)

### :warning: This is an auto-generated API

It does not follow the conventions you're familiar with from other parts of our library. A handwritten layer is not yet available.

The example below shows you how to instantiate the generated client. For further documentation, please browse the [Monitoring .proto files][cloud-monitoring-protos] on GitHub.

- [Official Documentation][cloud-monitoring-docs]

#### Using the all-in-one module

```
$ npm install --save google-cloud
```

```js
var gcloud = require('google-cloud');
var monitoring = gcloud.monitoring;
```

#### Using the Google Stackdriver Monitoring API module

```
$ npm install --save @google-cloud/monitoring
```

```js
var monitoring = require('@google-cloud/monitoring');
```

#### Preview

```js
var monitoringClient = monitoring.v3({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});
```


## Versioning

This library follows [Semantic Versioning][semver].

Please note it is currently under active development. Any release versioned 0.x.y is subject to backwards incompatible changes at any time.

**Beta**: Libraries defined at a Beta quality level are expected to be mostly stable and we're working towards their release candidate. We will address issues and requests with a higher priority.

**Alpha**: Libraries defined at an Alpha quality level are still a work-in-progress and are more likely to get backwards-incompatible updates.


## Contributing

Contributions to this library are always welcome and highly encouraged.

See [CONTRIBUTING][contributing] for more information on how to get started.


## License

Apache 2.0 - See [COPYING][copying] for more information.


[gcloud-homepage]: https://googlecloudplatform.github.io/google-cloud-node/
[gcloud-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs
[gcloud-bigquery-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/bigquery
[gcloud-bigtable-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/bigtable
[gcloud-compute-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/compute
[gcloud-datastore-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore
[gcloud-dns-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/dns
[gcloud-language-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/language
[gcloud-logging-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/logging
[gcloud-prediction-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/prediction
[gcloud-pubsub-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub
[gcloud-resource-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/resource
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
[cloud-bigtable-cluster]: https://cloud.google.com/bigtable/docs/creating-compute-instance

[cloud-compute-docs]: https://cloud.google.com/compute/docs

[cloud-datastore-docs]: https://cloud.google.com/datastore/docs
[cloud-datastore-activation]: https://cloud.google.com/datastore/docs/activate

[cloud-dns-docs]: https://cloud.google.com/dns/docs

[cloud-language-docs]: https://cloud.google.com/natural-language/docs

[cloud-monitoring-docs]: https://cloud.google.com/monitoring/docs
[cloud-monitoring-protos]: https://github.com/googleapis/googleapis/tree/master/google/monitoring/v3

[cloud-logging-docs]: https://cloud.google.com/logging/docs

[cloud-prediction-docs]: https://cloud.google.com/prediction/docs

[cloud-pubsub-docs]: https://cloud.google.com/pubsub/docs

[cloud-resource-docs]: https://cloud.google.com/resource-manager

[cloud-storage-docs]: https://cloud.google.com/storage/docs/overview

[cloud-translate-docs]: https://cloud.google.com/translate/docs

[cloud-speech-docs]: https://cloud.google.com/speech/docs

[cloud-vision-docs]: https://cloud.google.com/vision/docs

[semver]: http://semver.org

[contributing]: .github/CONTRIBUTING.md

[copying]: COPYING
