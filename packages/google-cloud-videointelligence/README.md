[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Video Intelligence: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/video-intelligence.svg)](https://www.npmjs.org/package/@google-cloud/video-intelligence)




Google Cloud Video Intelligence API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-videointelligence/CHANGELOG.md).

* [Google Cloud Video Intelligence Node.js Client API Reference][client-docs]
* [Google Cloud Video Intelligence Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-videointelligence](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-videointelligence)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Video Intelligence API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/video-intelligence
```


### Using the client library

```javascript
// Imports the Google Cloud Video Intelligence library
const videoIntelligence = require('@google-cloud/video-intelligence');

// Creates a client
const client = new videoIntelligence.VideoIntelligenceServiceClient();

// The GCS uri of the video to analyze
const gcsUri = 'gs://cloud-samples-data/video/cat.mp4';

// Construct request
const request = {
  inputUri: gcsUri,
  features: ['LABEL_DETECTION'],
};

// Execute request
const [operation] = await client.annotateVideo(request);

console.log(
  'Waiting for operation to complete... (this may take a few minutes)'
);

const [operationResult] = await operation.promise();

// Gets annotations for video
const annotations = operationResult.annotationResults[0];

// Gets labels for video from its annotations
const labels = annotations.segmentLabelAnnotations;
labels.forEach(label => {
  console.log(`Label ${label.entity.description} occurs at:`);
  label.segments.forEach(segment => {
    segment = segment.segment;
    console.log(
      `\tStart: ${segment.startTimeOffset.seconds}` +
        `.${(segment.startTimeOffset.nanos / 1e6).toFixed(0)}s`
    );
    console.log(
      `\tEnd: ${segment.endTimeOffset.seconds}.` +
        `${(segment.endTimeOffset.nanos / 1e6).toFixed(0)}s`
    );
  });
});

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Video_intelligence_service.annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1/video_intelligence_service.annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1/video_intelligence_service.annotate_video.js,samples/README.md) |
| Video_intelligence_service.annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1beta2/video_intelligence_service.annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1beta2/video_intelligence_service.annotate_video.js,samples/README.md) |
| Video_intelligence_service.annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1p1beta1/video_intelligence_service.annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1p1beta1/video_intelligence_service.annotate_video.js,samples/README.md) |
| Video_intelligence_service.annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1p2beta1/video_intelligence_service.annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1p2beta1/video_intelligence_service.annotate_video.js,samples/README.md) |
| Streaming_video_intelligence_service.streaming_annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1p3beta1/streaming_video_intelligence_service.streaming_annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1p3beta1/streaming_video_intelligence_service.streaming_annotate_video.js,samples/README.md) |
| Video_intelligence_service.annotate_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/generated/v1p3beta1/video_intelligence_service.annotate_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/generated/v1p3beta1/video_intelligence_service.annotate_video.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/quickstart.js,samples/README.md) |
| Quickstart.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-videointelligence/samples/test/quickstart.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-videointelligence/samples/test/quickstart.test.js,samples/README.md) |



The [Google Cloud Video Intelligence Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/video-intelligence@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/video-intelligence/latest
[product-docs]: https://cloud.google.com/video-intelligence
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=videointelligence.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
