[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Vision API: Node.js Client](https://github.com/googleapis/nodejs-vision)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/vision.svg)](https://www.npmjs.org/package/@google-cloud/vision)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-vision/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-vision)




Google Cloud Vision API client for Node.js


* [Google Cloud Vision API Node.js Client API Reference][client-docs]
* [Google Cloud Vision API Documentation][product-docs]
* [github.com/googleapis/nodejs-vision](https://github.com/googleapis/nodejs-vision)

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
1.  [Enable the Google Cloud Vision API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/vision
```


### Using the client library

```javascript
async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-vision/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Detect | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Detect.v1p1beta1 | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.v1p1beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/detect.v1p1beta1.js,samples/README.md) |
| Detect.v1p3beta1 | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/detect.v1p3beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/detect.v1p3beta1.js,samples/README.md) |
| Face Detection | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/faceDetection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/faceDetection.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Text Detection | [source code](https://github.com/googleapis/nodejs-vision/blob/master/samples/textDetection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-vision&page=editor&open_in_editor=samples/textDetection.js,samples/README.md) |



The [Google Cloud Vision API Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-vision/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-vision/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/vision/latest
[product-docs]: https://cloud.google.com/vision
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
