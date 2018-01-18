## Authenticating with this module

It's incredibly easy to get authenticated and start using Google's APIs. You can set your credentials on a global basis as well as on a per-API basis. See each individual API section below to see how you can auth on a per-API-basis. This is useful if you want to use different accounts for different Cloud services.

```js
var config = {
  projectId: 'grape-spaceship-123',
  keyFilename: '/path/to/keyfile.json'
};
```

### The `config` object

A `config` object is not required if you are in an environment which supports [Application Default Credentials](https://developers.google.com/identity/protocols/application-default-credentials). This could be your own development machine when using the [gcloud SDK](https://cloud.google.com/sdk) or within Google App Engine and Compute Engine.

If this doesn't describe your environment, the `config` object expects the following properties:

1. One of the following:
  1. `credentials` object containing `client_email` and `private_key` properties.
  2. `keyFilename` path to a .json, .pem, or .p12 key file.
  3. `GOOGLE_APPLICATION_CREDENTIALS` environment variable with a full path to your key file.

2. `projectId`

  If you wish, you can set an environment variable (`GOOGLE_CLOUD_PROJECT`) in place of specifying this inline. Or, if you have provided a service account JSON key file as the `config.keyFilename` property explained above, your project ID will be detected automatically.

**Note**: When using a .pem or .p12 key file, `config.email` is also required.


[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://cloud.google.com/compute/docs/authentication#using
