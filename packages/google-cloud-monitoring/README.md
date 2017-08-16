# Node.js Clients for Stackdriver Monitoring API ([Beta](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[Stackdriver Monitoring API][Product Documentation]: Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.

- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Stackdriver Monitoring API.](https://console.cloud.google.com/apis/api/monitoring)
3. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/monitoring
```

### Preview
#### MetricServiceClient
```js
 var monitoring = require('@google-cloud/monitoring');

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

### Next Steps
- Read the [Client Library Documentation][] for Stackdriver Monitoring API to see other available methods on the client.
- Read the [Stackdriver Monitoring API Product documentation][Product Documentation] to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md) to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/monitoring
[Product Documentation]: https://cloud.google.com/monitoring