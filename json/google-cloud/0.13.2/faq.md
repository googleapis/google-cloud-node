## How do I use `gcloud` with Google Compute Engine?

If you are running this client on Google Compute Engine, we handle authorization for you with no configuration. You just need to make sure that when you [set up the GCE instance][gce-how-to], you add the correct scopes for the APIs you want to access.

## I'm not using Compute Engine. What do I need to do?

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

## What is the relationship between this and the `gcloud` command-line tool?

Both this library and the `gcloud` command-line tool are a part of the Google Cloud SDK: a collection of tools and libraries that enable you to easily create and manage resources on the Google Cloud Platform. The `gcloud` command-line tool can be used to manage both your development workflow and your Google Cloud Platform resources while this is the Google Cloud Client Library for Node.js.

## Does this replace [Google Cloud Node.js Client][googleapis]?

Google Cloud Node.js Client is a client library for using the broad set of Google APIs. `gcloud` is built specifically for the Google Cloud Platform and is the recommended way to integrate Google Cloud APIs into your Node.js applications. If your application requires both Google Cloud Platform and other Google APIs, the 2 libraries may be used together.

[dev-console]: https://console.developers.google.com/project
[gce-how-to]: https://developers.google.com/compute/docs/authentication#using
[googleapis]: https://github.com/google/google-api-nodejs-client
