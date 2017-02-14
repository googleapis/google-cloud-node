# @google-cloud/prediction ([Alpha][versioning])
> Google Prediction API Client Library for Node.js

*Looking for more Google APIs than just Prediction? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-prediction-docs]
- [Official Documentation][cloud-prediction-docs]


```sh
$ npm install --save @google-cloud/prediction
```
```js
var prediction = require('@google-cloud/prediction')({
  projectId: 'grape-spaceship-123',
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

// Promises are also supported by omitting callbacks.
model.query('Hello').then(function(data) {
  var results = data[0];
});

// It's also possible to integrate with third-party Promise libraries.
var prediction = require('@google-cloud/prediction')({
  promise: require('bluebird')
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var prediction = require('@google-cloud/prediction')();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Prediction API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var prediction = require('@google-cloud/prediction')({
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
[gcloud-prediction-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/prediction
[cloud-prediction-docs]: https://cloud.google.com/prediction/docs
