## How do I use `gcloud` with Google Compute Engine?

If you are running this client on Google Compute Engine, we handle authorization for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

## I'm not using Compute Engine. What do I need to do?

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account, please see our [Authorization][auth-guide] guide.

## Does this replace [Google Cloud Node.js Client][googleapis]?

Google Cloud Node.js Client is a client library for using the broad set of Google APIs. `gcloud` is built specifically for the Google Cloud Platform and is the recommended way to integrate Google Cloud APIs into your Node.js applications. If your application requires both Google Cloud Platform and other Google APIs, the 2 libraries may be used together.

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://developers.google.com/compute/docs/authentication#using
[googleapis]: https://github.com/google/google-api-nodejs-client
[auth-guide]: #/authorization
