<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Vision API: Node.js Client](https://github.com/googleapis/nodejs-vision)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-vision.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-vision)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-vision?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-vision)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-vision/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-vision)

> Node.js idiomatic client for [Vision API][product-docs].

The [Cloud Vision API](https://cloud.google.com/vision/docs) allows developers to easily integrate vision detection features within applications, including image labeling, face and landmark detection, optical character recognition (OCR), and tagging of explicit content.


* [Vision API Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-vision](https://github.com/googleapis/nodejs-vision)
* [Vision API Documentation][product-docs]

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

1.  Enable the Google Cloud Vision API API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/vision

### Using the client library

```javascript
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client
  .labelDetection('./resources/wakeupcat.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-vision/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Detection samples | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Detection samples for Beta API | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.v1p1beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/detect.v1p1beta1.js,samples/README.md) |

The [Vision API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-vision/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-vision/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/vision/latest/
[product-docs]: https://cloud.google.com/vision/docs
[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
