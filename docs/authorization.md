With `gcloud-node` it's incredibly easy to get authorized and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Google Cloud services.

## On Google Compute Engine

If you are running this client on Google Compute Engine, we handle authorization for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

```hljs-class
var config = {
  projectId: 'grape-spaceship-123'
};

var gcloud = require('gcloud')(config);
```

## Elsewhere

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account:

1. Visit the [Google Developers Console][dev-console].
2. Create a new project or click on an existing project.
3. Navigate to  **APIs & auth** > **APIs section** and turn on the following APIs (you may need to enable billing in order to use these services):
  * Google Cloud Datastore API
  * Google Cloud Storage
  * Google Cloud Storage JSON API
4. Navigate to **APIs & auth** >  **Credentials** and then:
  * If you want to use a new service account, click on **Create new Client ID** and select **Service account**. After the account is created, you will be prompted to download the JSON key file that the library uses to authorize your requests.
  * If you want to generate a new key for an existing service account, click on **Generate new JSON key** and download the JSON key file.

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

2. One of the following:
  1. `config.credentials` object containing `client_email` and `private_key` properties.
  2. `config.keyFilename` path to a .json, .pem, or .p12 key file.
  3. `GOOGLE_APPLICATION_CREDENTIALS` environment variable with a full path to your key file.

**Note**: When using a .pem or .p12 key file, `config.email` is also required.

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
