# @google-cloud/monitoring ([Alpha][versioning])
> Google Stackdriver Monitoring Client Library for Node.js

*Looking for more Google APIs than just Monitoring? You might want to check out [`google-cloud`][google-cloud].*

- [Official Documentation][cloud-monitoring-docs]

## This is an auto-generated API

It does not follow the conventions you're familiar with from other parts of our library. A handwritten layer is not yet available.

The example below shows you how to instantiate the generated client. For further documentation, please browse the [Monitoring .proto files][cloud-monitoring-protos] on GitHub.


```sh
$ npm install --save @google-cloud/monitoring
```
```js
var monitoring = require('@google-cloud/monitoring').v3({
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
});
```


## Authentication

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

### On Google Cloud Platform

If you are running this client on Google Cloud Platform, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

``` js
// Authenticating on a global basis.
var monitoring = require('@google-cloud/monitoring').v3();
// ...you're good to go!
```

### Elsewhere

If you are not running this client on Google Cloud Platform, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account key, click on **Create credentials** and select **Service account key**. After the account key is created, you will be prompted to download the JSON key file that the library uses to authenticate your requests.
  * If you want to generate a new service account key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

``` js
var monitoring = require('@google-cloud/monitoring').v3({
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
[cloud-monitoring-docs]: https://cloud.google.com/monitoring/docs
[cloud-monitoring-protos]: https://github.com/googleapis/googleapis/tree/master/google/monitoring/v3
