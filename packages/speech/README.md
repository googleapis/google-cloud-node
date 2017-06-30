# Node.js Client for Google Cloud Speech API ([Beta](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[Google Cloud Speech API][Product Documentation]: Google Cloud Speech API.
- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Google Cloud Speech API.](https://console.cloud.google.com/apis/api/speech)
3. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/speech
```

### Preview
#### SpeechClient
```js
 var speech = require('@google-cloud/speech');

 var client = speech({
    // optional auth parameters.
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
 client.recognize(request).then(function(responses) {
     var response = responses[0];
     // doThingsWith(response)
 })
 .catch(function(err) {
     console.error(err);
 });
```

### Next Steps
- Read the [Client Library Documentation][] for Google Cloud Speech API to see other available methods on the client.
- Read the [Google Cloud Speech API Product documentation][Product Documentation] to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md) to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/speech
[Product Documentation]: https://cloud.google.com/speech