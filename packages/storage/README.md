# @google-cloud/storage ([GA][versioning])
> Cloud Storage Client Library for Node.js

*Looking for more Google APIs than just Storage? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-storage-docs]
- [Official Documentation][cloud-storage-docs]


```sh
$ npm install --save @google-cloud/storage
```
```js
var fs = require('fs');

var gcs = require('@google-cloud/storage')({
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

// Promises are also supported by omitting callbacks.
bucket.upload('/photos/zoo/zebra.jpg').then(function(data) {
  var file = data[0];
});

// It's also possible to integrate with third-party Promise libraries.
var gcs = require('@google-cloud/storage')({
  promise: require('bluebird')
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var gcs = require('@google-cloud/storage')();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Storage
  * Google Cloud Storage JSON API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var gcs = require('@google-cloud/storage')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```


[versioning]: https://github.com/GoogleCloudPlatform/google-cloud-node#versioning
[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
[gcloud-storage-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage
[cloud-storage-docs]: https://cloud.google.com/storage/docs/overview
