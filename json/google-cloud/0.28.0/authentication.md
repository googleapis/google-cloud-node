## With `gcloud-node`

With `gcloud-node` it's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

```hljs-class
var config = {
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
};

var gcloud = require('gcloud')(config);
```

### The `config` object

A `config` object requires the following properties:

1. `projectId`

  If you wish, you can set an environment variable (`GCLOUD_PROJECT`) in place of specifying this inline.

2. One of the following:
  1. `config.credentials` object containing `client_email` and `private_key` properties.
  2. `config.keyFilename` path to a .json, .pem, or .p12 key file.
  3. `GOOGLE_APPLICATION_CREDENTIALS` environment variable with a full path to your key file.

**Note**: When using a .pem or .p12 key file, `config.email` is also required.

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
