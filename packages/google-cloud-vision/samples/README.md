## Cloud Vision API samples

These samples require two environment variables to be set:

- `GOOGLE_APPLICATION_CREDENTIALS` - Path to a service account file. You can
download one from your Google project's "credentials" page.
- `GCLOUD_PROJECT` - ID of your Google project.

See [gcloud-node authentication][auth] for more details.

[auth]: https://googlecloudplatform.github.io/gcloud-node/#/docs/guides/authentication

## Run a sample

Install dependencies first:

    npm install

### Face detection sample

This sample uses [node-canvas](https://github.com/Automattic/node-canvas) to
draw an output image. node-canvas depends on Cairo, which may require separate
installation. See the node-canvas [installation section][canvas-install] for
details.

[canvas-install]: https://github.com/Automattic/node-canvas#installation

Execute the sample:

    node faceDetection "/path/to/image.jpg"

### Label detection sample

Execute the sample:

    node labelDetection "/path/to/image.jpg"
