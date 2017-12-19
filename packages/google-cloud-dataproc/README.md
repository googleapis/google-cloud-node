# Node.js Clients for Google Cloud Dataproc API ([Alpha](https://github.com/GoogleCloudPlatform/google-cloud-node#versioning))

[Google Cloud Dataproc API][Product Documentation]:
Manages Hadoop-based clusters and jobs on Google Cloud Platform.
- [Client Library Documentation][]
- [Product Documentation][]

## Quick Start
In order to use this library, you first need to go through the following
steps:

1. [Select or create a Cloud Platform project.](https://console.cloud.google.com/project)
2. [Enable the Google Cloud Dataproc API.](https://console.cloud.google.com/apis/api/dataproc)
3. [Setup Authentication.](https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/master/guides/authentication)

### Installation
```
$ npm install --save @google-cloud/dataproc
```

### Preview
#### ClusterControllerClient
```js
 const dataproc = require('@google-cloud/dataproc');

 var client = dataproc.ClusterControllerClient({
   // optional auth parameters.
 });

 // Iterate over all elements.
 var projectId2 = projectId;
 var region = 'global';
 var request = {
   projectId: projectId2,
   region: region,
 };

 client.listClusters(request)
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
 var projectId2 = projectId;
 var region = 'global';
 var request = {
   projectId: projectId2,
   region: region,
 };


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
     return client.listClusters(nextRequest, options).then(callback);
   }
 }
 client.listClusters(request, options)
   .then(callback)
   .catch(err => {
     console.error(err);
   });
```

### Next Steps
- Read the [Client Library Documentation][] for Google Cloud Dataproc API
  to see other available methods on the client.
- Read the [Google Cloud Dataproc API Product documentation][Product Documentation]
  to learn more about the product and see How-to Guides.
- View this [repository's main README](https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/README.md)
  to see the full list of Cloud APIs that we cover.

[Client Library Documentation]: https://googlecloudplatform.github.io/google-cloud-node/#/docs/dataproc
[Product Documentation]: https://cloud.google.com/dataproc