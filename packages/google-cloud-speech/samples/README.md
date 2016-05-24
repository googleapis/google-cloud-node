## Cloud Speech API samples

These samples require two environment variables to be set:

- `GOOGLE_APPLICATION_CREDENTIALS` - Path to a service account file. You can
download one from your Google project's "credentials" page.
- `GCLOUD_PROJECT` - ID of your Google project.

See [gcloud-node authentication][auth] for more details.

[auth]: https://googlecloudplatform.github.io/gcloud-node/#/docs/guides/authentication

## Run a sample

Install dependencies first:

    npm install

### Recognition sample

Execute the sample:

    node recognize "/path/to/audio.file"

- Recognition sample - [Source code][speech_1] | [Documentation][speech_2]

[speech_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/speech/recognize.js
[speech_2]: https://cloud.google.com/speech