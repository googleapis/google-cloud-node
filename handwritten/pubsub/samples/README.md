## Pub/Sub Samples

These samples require two environment variables to be set:

- `GOOGLE_APPLICATION_CREDENTIALS` - Path to a service account file. You can
download one from your Google project's "permissions" page.
- `GCLOUD_PROJECT` - Id of your Google project.

## Run a sample

Install dependencies:

    npm install

To print available commands:

    npm run

Execute a sample:

    npm run <sample>

Example:

    npm run subscription

- Subscriber/Publisher sample - [Source code][pubsub_subscriber_1] | [Documentation][pubsub_subscriber_2]
- IAM sample - [Source code][pubsub_iam_1] | [Documentation][pubsub_iam_2]

[pubsub_subscriber_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/pubsub/subscription.js
[pubsub_subscriber_2]: https://cloud.google.com/pubsub/subscriber
[pubsub_iam_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/pubsub/iam.js
[pubsub_iam_2]: https://cloud.google.com/pubsub/access_control