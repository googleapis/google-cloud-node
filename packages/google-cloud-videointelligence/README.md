[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Video Intelligence: Node.js Client](https://github.com/googleapis/nodejs-video-intelligence)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/video-intelligence.svg)](https://www.npmjs.org/package/@google-cloud/video-intelligence)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-video-intelligence/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-video-intelligence)




Google Cloud Video Intelligence API client for Node.js


* [Google Cloud Video Intelligence Node.js Client API Reference][client-docs]
* [Google Cloud Video Intelligence Documentation][product-docs]
* [github.com/googleapis/nodejs-video-intelligence](https://github.com/googleapis/nodejs-video-intelligence)

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
      if (segment.startTimeOffset.seconds === undefined) {
        segment.startTimeOffset.seconds = 0;
      }
      if (segment.startTimeOffset.nanos === undefined) {
        segment.startTimeOffset.nanos = 0;
      }
      if (segment.endTimeOffset.seconds === undefined) {
        segment.endTimeOffset.seconds = 0;
      }
      if (segment.endTimeOffset.nanos === undefined) {
        segment.endTimeOffset.nanos = 0;
      }
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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-video-intelligence/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Analyze-streaming-annotation-to-storage | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-annotation-to-storage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-annotation-to-storage.js,samples/README.md) |
| Analyze-streaming-automl-classification | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-automl-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-automl-classification.js,samples/README.md) |
| Analyze-streaming-labels | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-labels.js,samples/README.md) |
| Analyze-streaming-object | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-object.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-object.js,samples/README.md) |
| Analyze-streaming-safe-search | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-safe-search.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-safe-search.js,samples/README.md) |
| Analyze-streaming-shot-change | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze-streaming-shot-change.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze-streaming-shot-change.js,samples/README.md) |
| Analyze | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze.js,samples/README.md) |
| Analyze.v1p2beta1 | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze.v1p2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze.v1p2beta1.js,samples/README.md) |
| Analyze_face_detection | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze_face_detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze_face_detection.js,samples/README.md) |
| Analyze_face_detection_gcs | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze_face_detection_gcs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze_face_detection_gcs.js,samples/README.md) |
| Analyze_person_detection | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze_person_detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze_person_detection.js,samples/README.md) |
| Analyze_person_detection_gcs | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze_person_detection_gcs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze_person_detection_gcs.js,samples/README.md) |
| Detect_logo | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/detect_logo.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/detect_logo.js,samples/README.md) |
| Detect_logo_gcs | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/detect_logo_gcs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/detect_logo_gcs.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Video Intelligence Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-video-intelligence/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-video-intelligence/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/video/latest
[product-docs]: https://cloud.google.com/video-intelligence
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=videointelligence.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
