# Node.js Client for Google Cloud Vision API ([Alpha](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[Google Cloud Vision API][Product Documentation]: Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.
- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Google Cloud Vision API.](https://console.cloud.google.com/apis/api/vision)
3. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/vision
```

### Preview
#### ImageAnnotatorClient
```js
 var vision = require('@google-cloud/vision');

 var client = vision({
    // optional auth parameters.
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
 client.batchAnnotateImages({requests: requests}).then(function(responses) {
     var response = responses[0];
     // doThingsWith(response)
 }).catch(function(err) {
     console.error(err);
 });
```

### Next Steps
- Read the [Client Library Documentation][] for Google Cloud Vision API to see other available methods on the client.
- Read the [Google Cloud Vision API Product documentation][Product Documentation] to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md) to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/vision
[Product Documentation]: https://cloud.google.com/vision