# @google-cloud/speech ([Alpha][versioning])
> Google Cloud Speech Client Library for Node.js

*Looking for more Google APIs than just Speech? You might want to check out [`google-cloud`][google-cloud].*

- [API Documentation][gcloud-speech-docs]
- [Official Documentation][cloud-speech-docs]


```sh
$ npm install --save @google-cloud/speech
```
```js
var speech = require('@google-cloud/speech')({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});

// Detect the speech in an audio file.
speech.recognize('./audio.raw', {
  encoding: 'LINEAR16',
  sampleRate: 16000
}, function(err, transcript) {
  // transcript = 'how old is the Brooklyn Bridge'
});

// Detect the speech in an audio file stream.
fs.createReadStream('./audio.raw')
  .on('error', console.error)
  .pipe(speech.createRecognizeStream({
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
    //     ...
    //   }
    //
    // A later "data" event emitted might look like:
    //   data = {
    //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
    //     ...
    //   }
    //
    // A final "data" event emitted might look like:
    //   data = {
    //     endpointerType: Speech.endpointerTypes.END_OF_AUDIO,
    //     results: "how old is the Brooklyn Bridge",
    //     ...
    //   }
  });

// Promises are also supported by omitting callbacks.
speech.recognize('./audio.raw', {
  encoding: 'LINEAR16',
  sampleRate: 16000
}).then(function(data) {
  var transcript = data[0];
});

// It's also possible to integrate with third-party Promise libraries.
var speech = require('@google-cloud/speech')({
  promise: require('bluebird')
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
var speech = require('@google-cloud/speech')();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Speech API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var projectId = process.env.GCLOUD_PROJECT; // E.g. 'grape-spaceship-123'

var speech = require('@google-cloud/speech')({
  projectId: projectId,

  // The path to your key file:
  keyFilename: '/path/to/keyfile.json'

  // Or the contents of the key file:
  credentials: require('./path/to/keyfile.json')
});

// ...you're good to go!
```


[versioning]: https://github.com/readme.md#versioning
[google-cloud]: https://github.com/GoogleCloudPlatform/google-cloud-node/
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
[dev-console]: https://console.developers.google.com/project
[gcloud-speech-docs]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/speech
[cloud-speech-docs]: https://cloud.google.com/speech
