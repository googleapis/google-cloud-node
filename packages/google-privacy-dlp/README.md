# Node.js Client for DLP API ([Alpha](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[DLP API][Product Documentation]: The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.
- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the DLP API.](https://console.cloud.google.com/apis/api/dlp)
3. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/dlp
```

### Preview
#### DlpServiceClient
```js
 var dlp = require('@google-cloud/dlp');

 var client = dlp({
    // optional auth parameters.
 });

 var minLikelihood = dlp.v2beta1.types.Likelihood.POSSIBLE;
 var inspectConfig = {
     minLikelihood : minLikelihood
 };
 var type = 'text/plain';
 var value = 'my phone number is 215-512-1212';
 var itemsElement = {
     type : type,
     value : value
 };
 var items = [itemsElement];
 var request = {
     inspectConfig: inspectConfig,
     items: items
 };
 client.inspectContent(request).then(function(responses) {
     var response = responses[0];
     // doThingsWith(response)
 })
 .catch(function(err) {
     console.error(err);
 });
```

### Next Steps
- Read the [Client Library Documentation][] for DLP API to see other available methods on the client.
- Read the [DLP API Product documentation][Product Documentation] to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md) to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/dlp
[Product Documentation]: https://cloud.google.com/dlp