## How do I use this module with Google Compute Engine?

If you are running this client on Google Compute Engine, we handle authentication for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.


## I'm not using Compute Engine. What do I need to do?

If you are not running this client on Google Compute Engine, you need a Google Developers service account. To create a service account, please see our [Authentication][auth-guide] guide.


## How do I use this module with AWS Lambda?

Our library uses some native libraries, which must be recompiled against the platform running your application. For AWS Lambda, we recommend using [lambda-packager](https://github.com/tomdale/lambda-packager) prior to deploying your code.

Reference Issues: [#1287](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1287), [#1297](https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1297)


## Does this replace [Cloud Node.js Client][googleapis]?

Cloud Node.js Client is a client library for using the broad set of Google APIs. This module is built specifically for the Google Cloud Platform and is the recommended way to integrate Cloud APIs into your Node.js applications. If your application requires both Google Cloud Platform and other Google APIs, the 2 libraries may be used together.


## How do I use this module with Firebase and the Bun runtime?

Managed Cloud Functions for Firebase (`firebase deploy --only functions`) only supports managed Node.js (V8) runtimes (`nodejs20`, `nodejs22`). To run `firebase-admin` and `@google-cloud/*` client libraries on Bun in a Firebase project, deploy an `oven/bun` container to Cloud Run and route traffic to it via Firebase Hosting `rewrites` in `firebase.json`. See our [Firebase & Bun Guide](firebase-bun.md) for templates and deployment instructions.

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://developers.google.com/compute/docs/authentication#using
[googleapis]: https://github.com/google/google-api-nodejs-client
[auth-guide]: #/authentication
