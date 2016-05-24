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

### Landmark detection sample

Execute the sample:

    node landmarkDetection "https://cloud-samples-tests.storage.googleapis.com/vision/water.jpg"

### Text detection sample

Execute the sample:

    node textDetection analyze resources
    node textDetection lookup the sunbeams in

- Face detection - [Source code][vision_1] | [Documentation][vision_2]
- Label detection - [Source code][vision_3] | [Documentation][vision_4]
- Landmark detection - [Source code][vision_5] | [Documentation][vision_6]
- Text detection - [Source code][vision_7] | [Documentation][vision_8]

[vision_1]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/vision/faceDetection.js
[vision_2]: https://cloud.google.com/vision/docs/face-tutorial
[vision_3]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/vision/labelDetection.js
[vision_4]: https://cloud.google.com/vision/docs/label-tutorial
[vision_5]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/vision/landmarkDetection.js
[vision_6]: https://cloud.google.com/vision/docs/landmark-tutorial
[vision_7]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/vision/textDetection.js
[vision_8]: https://cloud.google.com/vision/docs/text-tutorial