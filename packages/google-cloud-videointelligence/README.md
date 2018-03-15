<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Video Intelligence API: Node.js Client](https://github.com/googleapis/nodejs-video-intelligence)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-video-intelligence.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-video-intelligence)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-video-intelligence?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-video-intelligence)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-video-intelligence/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-video-intelligence)

> Node.js idiomatic client for [Video Intelligence API][product-docs].

The [Cloud Video Intelligence API](https://cloud.google.com/video-intelligence) allows developers to use Google video analysis technology as part of their applications.


* [Video Intelligence API Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-video-intelligence](https://github.com/googleapis/nodejs-video-intelligence)
* [Video Intelligence API Documentation][product-docs]

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

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Cloud Video Intelligence API API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=videointelligence.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/video-intelligence

### Using the client library

```javascript
// Imports the Google Cloud Video Intelligence library
const videoIntelligence = require('@google-cloud/video-intelligence');

// Creates a client
const client = new videoIntelligence.VideoIntelligenceServiceClient();

// The GCS uri of the video to analyze
const gcsUri = 'gs://nodejs-docs-samples-video/quickstart_short.mp4';

// Construct request
const request = {
  inputUri: gcsUri,
  features: ['LABEL_DETECTION'],
};

// Execute request
client
  .annotateVideo(request)
  .then(results => {
    const operation = results[0];
    console.log(
      'Waiting for operation to complete... (this may take a few minutes)'
    );
    return operation.promise();
  })
  .then(results => {
    // Gets annotations for video
    const annotations = results[0].annotationResults[0];

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
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-video-intelligence/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Video Intelligence | [source code](https://github.com/googleapis/nodejs-video-intelligence/blob/master/samples/analyze.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-video-intelligence&page=editor&open_in_editor=samples/analyze.js,samples/README.md) |

The [Video Intelligence API Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-video-intelligence/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-video-intelligence/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/video-intelligence/latest/
[product-docs]: https://cloud.google.com/video-intelligence
[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
