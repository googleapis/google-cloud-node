## Compute Engine Samples

These samples require two environment variables to be set:

- `GOOGLE_APPLICATION_CREDENTIALS` - Path to a service account file. You can
download one from your Google project's "permissions" page.
- `GCLOUD_PROJECT` - Id of your Google project.

## Run the samples

Install dependencies:

    npm install

### sendgrid.js

Requires a `SENDGRID_API_KEY` environment variable to be set.

    npm run sendgrid

### mailjet.js

Requires `MAILJET_API_KEY` and `MAILJET_API_SECRET` environment variables to be
set.

    npm run mailjet

### vms.js

    npm run vms

### vms_api.js

    npm run vms_api

- Sendgrid sample - [Source code][compute_sendgrid_1] | [Documentation][compute_sendgrid_2]
- VMs sample - [Source code][compute_vms_1] | [Documentation][compute_vms_2]

[compute_sendgrid_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/computeengine/sendgrid.js
[compute_sendgrid_2]: https://cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid

[compute_vms_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/computeengine/vms.js
[compute_vms_2]: https://cloud.google.com/compute/docs/tutorials/nodejs-guide