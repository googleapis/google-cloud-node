[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud AutoML: Node.js Client](https://github.com/googleapis/nodejs-automl)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/automl.svg)](https://www.npmjs.org/package/@google-cloud/automl)




🔔 **AutoML API NodeJS Client is now available in Vertex AI. Please visit** 
[node-js-aiplatform](https://github.com/googleapis/nodejs-ai-platform) **for the new NodeJS Vertex AI client.** 
Vertex AI is our next generation AI Platform, with many new features that are unavailable in the current platform. 
[Migrate your resources to Vertex AI](https://cloud.google.com/vertex-ai/docs/start/migrating-to-vertex-ai) to get 
the latest machine learning features, simplify end-to-end journeys, and productionize models with MLOps.

Cloud AutoML API client for Node.js



A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-automl/blob/main/CHANGELOG.md).

* [Cloud AutoML Node.js Client API Reference][client-docs]
* [Cloud AutoML Documentation][product-docs]
* [github.com/googleapis/nodejs-automl](https://github.com/googleapis/nodejs-automl)

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
1.  [Enable the Cloud AutoML API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/automl
```


### Using the client library

```javascript
const automl = require('@google-cloud/automl');
const fs = require('fs');

// Create client for prediction service.
const client = new automl.PredictionServiceClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const projectId = `The GCLOUD_PROJECT string, e.g. "my-gcloud-project"`;
// const computeRegion = `region-name, e.g. "us-central1"`;
// const modelId = `id of the model, e.g. “ICN723541179344731436”`;
// const filePath = `local text file path of content to be classified, e.g. "./resources/flower.png"`;
// const scoreThreshold = `value between 0.0 and 1.0, e.g. "0.5"`;

// Get the full path of the model.
const modelFullId = client.modelPath(projectId, computeRegion, modelId);

// Read the file content for prediction.
const content = fs.readFileSync(filePath, 'base64');

const params = {};

if (scoreThreshold) {
  params.score_threshold = scoreThreshold;
}

// Set the payload by giving the content and type of the file.
const payload = {};
payload.image = {imageBytes: content};

// params is additional domain-specific parameters.
// currently there is no additional parameters supported.
const [response] = await client.predict({
  name: modelFullId,
  payload: payload,
  params: params,
});
console.log('Prediction results:');
response.payload.forEach(result => {
  console.log(`Predicted class name: ${result.displayName}`);
  console.log(`Predicted class score: ${result.classification.score}`);
});

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-automl/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-automl/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Cloud AutoML Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/automl@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-automl/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-automl/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/automl/latest
[product-docs]: https://cloud.google.com/automl/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=automl.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
