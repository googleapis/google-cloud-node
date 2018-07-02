# Node.js Client for Cloud IoT API ([Alpha](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[Cloud IoT API][Product Documentation]:
Registers and manages IoT (Internet of Things) devices that connect to the
Google Cloud Platform.
- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following
steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable billing for your project.](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project)
3. [Enable the Cloud IoT API.](https://console.cloud.google.com/apis/api/iot)
4. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/iot
```

### Preview
#### DeviceManagerClient
```js
 const iot = require('@google-cloud/iot');

 var client = iot.DeviceManagerClient({
   // optional auth parameters.
 });

 // Iterate over all elements.
 var formattedParent = client.locationPath(projectId, "us-central1");

 client.listDeviceRegistries({parent: formattedParent})
   .then(responses => {
     var resources = responses[0];
     for (let i = 0; i < resources.length; i += 1) {
       // doThingsWith(resources[i])
     }
   })
   .catch(err => {
     console.error(err);
   });

 // Or obtain the paged response.
 var formattedParent2 = client.locationPath(projectId, "us-central1");


 var options = {autoPaginate: false};
 var callback = responses => {
   // The actual resources in a response.
   var resources = responses[0];
   // The next request if the response shows that there are more responses.
   var nextRequest = responses[1];
   // The actual response object, if necessary.
   // var rawResponse = responses[2];
   for (let i = 0; i < resources.length; i += 1) {
     // doThingsWith(resources[i]);
   }
   if (nextRequest) {
     // Fetch the next page.
     return client.listDeviceRegistries(nextRequest, options).then(callback);
   }
 }
 client.listDeviceRegistries({parent: formattedParent2}, options)
   .then(callback)
   .catch(err => {
     console.error(err);
   });
```

### Next Steps
- Read the [Client Library Documentation][] for Cloud IoT API
  to see other available methods on the client.
- Read the [Cloud IoT API Product documentation][Product Documentation]
  to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md)
  to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/iot
[Product Documentation]: https://cloud.google.com/iot