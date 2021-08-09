[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud AutoML: Node.js Client](https://github.com/googleapis/nodejs-automl)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/automl.svg)](https://www.npmjs.org/package/@google-cloud/automl)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-automl/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-automl)




Cloud AutoML API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-automl/blob/master/CHANGELOG.md).

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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-automl/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Batch_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/batch_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/batch_predict.js,samples/README.md) |
| Delete_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/delete_dataset.js,samples/README.md) |
| Delete_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/delete_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/delete_model.js,samples/README.md) |
| Deploy_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/deploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/deploy_model.js,samples/README.md) |
| Export_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/export_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/export_dataset.js,samples/README.md) |
| Get_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/get_dataset.js,samples/README.md) |
| Get_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/get_model.js,samples/README.md) |
| Get_model_evaluation | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/get_model_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/get_model_evaluation.js,samples/README.md) |
| Get_operation_status | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/get_operation_status.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/get_operation_status.js,samples/README.md) |
| Import_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/import_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/import_dataset.js,samples/README.md) |
| Language_entity_extraction_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_entity_extraction_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_entity_extraction_create_dataset.js,samples/README.md) |
| Language_entity_extraction_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_entity_extraction_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_entity_extraction_create_model.js,samples/README.md) |
| Language_entity_extraction_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_entity_extraction_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_entity_extraction_predict.js,samples/README.md) |
| Language_sentiment_analysis_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_sentiment_analysis_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_sentiment_analysis_create_dataset.js,samples/README.md) |
| Language_sentiment_analysis_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_sentiment_analysis_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_sentiment_analysis_create_model.js,samples/README.md) |
| Language_sentiment_analysis_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_sentiment_analysis_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_sentiment_analysis_predict.js,samples/README.md) |
| Language_text_classification_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_text_classification_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_text_classification_create_dataset.js,samples/README.md) |
| Language_text_classification_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_text_classification_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_text_classification_create_model.js,samples/README.md) |
| Language_text_classification_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/language_text_classification_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/language_text_classification_predict.js,samples/README.md) |
| List_datasets | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/list_datasets.js,samples/README.md) |
| List_model_evaluations | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/list_model_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/list_model_evaluations.js,samples/README.md) |
| List_models | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/list_models.js,samples/README.md) |
| List_operation_status | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/list_operation_status.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/list_operation_status.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Translate_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/translate_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/translate_create_dataset.js,samples/README.md) |
| Translate_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/translate_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/translate_create_model.js,samples/README.md) |
| Translate_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/translate_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/translate_predict.js,samples/README.md) |
| Undeploy_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/undeploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/undeploy_model.js,samples/README.md) |
| Vision_classification_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_classification_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_classification_create_dataset.js,samples/README.md) |
| Vision_classification_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_classification_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_classification_create_model.js,samples/README.md) |
| Vision_classification_deploy_model_node_count | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_classification_deploy_model_node_count.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_classification_deploy_model_node_count.js,samples/README.md) |
| Vision_classification_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_classification_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_classification_predict.js,samples/README.md) |
| Vision_object_detection_create_dataset | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_object_detection_create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_object_detection_create_dataset.js,samples/README.md) |
| Vision_object_detection_create_model | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_object_detection_create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_object_detection_create_model.js,samples/README.md) |
| Vision_object_detection_deploy_model_node_count | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_object_detection_deploy_model_node_count.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_object_detection_deploy_model_node_count.js,samples/README.md) |
| Vision_object_detection_predict | [source code](https://github.com/googleapis/nodejs-automl/blob/master/samples/vision_object_detection_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-automl&page=editor&open_in_editor=samples/vision_object_detection_predict.js,samples/README.md) |



The [Cloud AutoML Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-automl/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-automl/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/automl/latest
[product-docs]: https://cloud.google.com/automl/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=automl.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
