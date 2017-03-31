# @google-cloud/translate ([Beta][versioning])
> Cloud Translation API Client Library for Node.js

*Looking for more Google APIs than just Translation? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-translate-docs]
- [Official Documentation][cloud-translate-docs]


```sh
$ npm install --save @google-cloud/translate
```
```js
var translate = require('@google-cloud/translate')({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
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

// Promises are also supported by omitting callbacks.
translate.getLanguages().then(function(data) {
  var languages = data[0];
});

// It's also possible to integrate with third-party Promise libraries.
var translate = require('@google-cloud/translate')({
  promise: require('bluebird')
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var translate = require('@google-cloud/translate')();
// ...you're good to go!
```

### With a Google Developers Service Account

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Translation API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.
  *  If you want to use an API key, click on **Create credentials** and select **API key**. After the API key is created, you will see a newly opened modal with the API key in a field named **Your API key** that the library uses to authenticate your requests.
  * If you want to generate a new API key for an existing API key, click on an existing API key and click **Regenerate key**.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var translate = require('@google-cloud/translate')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')

  // Your API key (if not using a service account JSON file):
  key: '...'
});

// ...you're good to go!
```

### With an API key

It's also possible to authenticate with an API key. To create an API key:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Translate API
4. Navigate to **APIs & auth** >  **Credentials** and then click on **Create new Client ID** and select **API key**. You should then be presented with a pop-up containing your newly created key.

```js
var translate = require('@google-cloud/translate')({
  key: 'API Key'
});

// ...you're good to go!
```


[versioning]: https://github.com/GoogleCloudPlatform/google-cloud-node#versioning
[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[api-key-howto]: https://cloud.google.com/translate/v2/using_rest#auth
[gcloud-translate-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/translate
[cloud-translate-docs]: https://cloud.google.com/translate/docs
