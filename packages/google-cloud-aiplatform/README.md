[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AI Platform: Node.js Client](https://github.com/googleapis/nodejs-ai-platform)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/aiplatform.svg)](https://www.npmjs.org/package/@google-cloud/aiplatform)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-ai-platform/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-ai-platform)




Google Cloud AI Platform is an integrated suite of machine learning tools
and services for building and using ML models with AutoML or custom code.
It offers both novices and experts the best workbench for the entire
machine learning development lifecycle.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-ai-platform/blob/master/CHANGELOG.md).

* [AI Platform Node.js Client API Reference][client-docs]
* [AI Platform Documentation][product-docs]
* [github.com/googleapis/nodejs-ai-platform](https://github.com/googleapis/nodejs-ai-platform)

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
1.  [Enable the AI Platform API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/aiplatform
```


### Using the client library

```javascript
const {DatasetServiceClient} = require('@google-cloud/aiplatform');
const client = new DatasetServiceClient();

// Do something with DatasetServiceClient.
console.info(client);


```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-ai-platform/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cancel-batch-prediction-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/cancel-batch-prediction-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/cancel-batch-prediction-job.js,samples/README.md) |
| Cancel-custom-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/cancel-custom-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/cancel-custom-job.js,samples/README.md) |
| Create-batch-prediction-job-text-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-classification.js,samples/README.md) |
| Create-batch-prediction-job-text-entity-extraction | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-entity-extraction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-entity-extraction.js,samples/README.md) |
| Create-batch-prediction-job-text-sentiment-analysis | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-sentiment-analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-sentiment-analysis.js,samples/README.md) |
| Create-batch-prediction-job-video-action-recognition | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-action-recognition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-action-recognition.js,samples/README.md) |
| Create-batch-prediction-job-video-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-classification.js,samples/README.md) |
| Create-batch-prediction-job-video-object-tracking | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-object-tracking.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-object-tracking.js,samples/README.md) |
| Create-custom-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-custom-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-custom-job.js,samples/README.md) |
| Create-dataset-image | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-image.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-image.js,samples/README.md) |
| Create-dataset-tabular-bigquery | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-tabular-bigquery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-tabular-bigquery.js,samples/README.md) |
| Create-dataset-tabular-gcs | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-tabular-gcs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-tabular-gcs.js,samples/README.md) |
| Create-dataset-text | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-text.js,samples/README.md) |
| Create-dataset-video | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-video.js,samples/README.md) |
| Create-dataset | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset.js,samples/README.md) |
| Create-endpoint | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-endpoint.js,samples/README.md) |
| Create-hyperparameter-tuning-job-sample | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-hyperparameter-tuning-job-sample.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-hyperparameter-tuning-job-sample.js,samples/README.md) |
| Create-hyperparameter-tuning-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-hyperparameter-tuning-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-hyperparameter-tuning-job.js,samples/README.md) |
| Create-training-pipeline-image-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-image-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-image-classification.js,samples/README.md) |
| Create-training-pipeline-image-object-detection | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-image-object-detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-image-object-detection.js,samples/README.md) |
| Create-training-pipeline-tabular-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-tabular-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-tabular-classification.js,samples/README.md) |
| Create-training-pipeline-tabular-regression | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-tabular-regression.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-tabular-regression.js,samples/README.md) |
| Create-training-pipeline-text-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-classification.js,samples/README.md) |
| Create-training-pipeline-text-entity-extraction | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-entity-extraction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-entity-extraction.js,samples/README.md) |
| Create-training-pipeline-text-sentiment-analysis | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-sentiment-analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-sentiment-analysis.js,samples/README.md) |
| Create-training-pipeline-video-action-recognition | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-action-recognition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-action-recognition.js,samples/README.md) |
| Create-training-pipeline-video-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-classification.js,samples/README.md) |
| Create-training-pipeline-video-object-tracking | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-object-tracking.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-object-tracking.js,samples/README.md) |
| Delete-batch-prediction-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-batch-prediction-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-batch-prediction-job.js,samples/README.md) |
| Delete-custom-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-custom-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-custom-job.js,samples/README.md) |
| Delete-dataset | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-dataset.js,samples/README.md) |
| Delete-endpoint | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-endpoint.js,samples/README.md) |
| Delete-export-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-export-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-export-model.js,samples/README.md) |
| Delete-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-model.js,samples/README.md) |
| Deploy-model-custom-trained-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/deploy-model-custom-trained-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/deploy-model-custom-trained-model.js,samples/README.md) |
| Deploy-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/deploy-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/deploy-model.js,samples/README.md) |
| Export-model-tabular-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/export-model-tabular-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/export-model-tabular-classification.js,samples/README.md) |
| Export-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/export-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/export-model.js,samples/README.md) |
| Get-batch-prediction-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-batch-prediction-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-batch-prediction-job.js,samples/README.md) |
| Get-custom-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-custom-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-custom-job.js,samples/README.md) |
| Get-hyperparameter-tuning-job | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-hyperparameter-tuning-job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-hyperparameter-tuning-job.js,samples/README.md) |
| Get-model-evaluation-image-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-image-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-image-classification.js,samples/README.md) |
| Get-model-evaluation-image-object-detection | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-image-object-detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-image-object-detection.js,samples/README.md) |
| Get-model-evaluation-slice | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-slice.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-slice.js,samples/README.md) |
| Get-model-evaluation-tabular-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-tabular-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-tabular-classification.js,samples/README.md) |
| Get-model-evaluation-tabular-regression | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-tabular-regression.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-tabular-regression.js,samples/README.md) |
| Get-model-evaluation-text-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-classification.js,samples/README.md) |
| Get-model-evaluation-text-entity-extraction | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-entity-extraction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-entity-extraction.js,samples/README.md) |
| Get-model-evaluation-text-sentiment-analysis | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-sentiment-analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-sentiment-analysis.js,samples/README.md) |
| Get-model-evaluation-video-action-recognition | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-action-recognition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-action-recognition.js,samples/README.md) |
| Get-model-evaluation-video-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-classification.js,samples/README.md) |
| Get-model-evaluation-video-object-tracking | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-object-tracking.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-object-tracking.js,samples/README.md) |
| Get-model-evaluation | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation.js,samples/README.md) |
| Get-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model.js,samples/README.md) |
| Get-training-pipeline | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-training-pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-training-pipeline.js,samples/README.md) |
| Import-data-image-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-image-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-image-classification.js,samples/README.md) |
| Import-data-image-object-detection | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-image-object-detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-image-object-detection.js,samples/README.md) |
| Import-data-text-classification-single-label | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-classification-single-label.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-classification-single-label.js,samples/README.md) |
| Import-data-text-entity-extraction | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-entity-extraction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-entity-extraction.js,samples/README.md) |
| Import-data-text-sentiment-analysis | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-sentiment-analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-sentiment-analysis.js,samples/README.md) |
| Import-data-video-action-recognition | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-action-recognition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-action-recognition.js,samples/README.md) |
| Import-data-video-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-classification.js,samples/README.md) |
| Import-data-video-object-tracking | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-object-tracking.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-object-tracking.js,samples/README.md) |
| Import-data | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data.js,samples/README.md) |
| List-endpoints | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/list-endpoints.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/list-endpoints.js,samples/README.md) |
| List-model-evaluation-slices | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/list-model-evaluation-slices.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/list-model-evaluation-slices.js,samples/README.md) |
| Predict-custom-trained-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-custom-trained-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-custom-trained-model.js,samples/README.md) |
| Predict-image-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-image-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-image-classification.js,samples/README.md) |
| Predict-image-object-detection | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-image-object-detection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-image-object-detection.js,samples/README.md) |
| Predict-tabular-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-tabular-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-tabular-classification.js,samples/README.md) |
| Predict-tabular-regression | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-tabular-regression.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-tabular-regression.js,samples/README.md) |
| Predict-text-classification | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-classification.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-classification.js,samples/README.md) |
| Predict-text-entity-extraction | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-entity-extraction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-entity-extraction.js,samples/README.md) |
| Predict-text-sentiment-analysis | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-sentiment-analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-sentiment-analysis.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Undeploy-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/undeploy-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/undeploy-model.js,samples/README.md) |
| Upload-model | [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/upload-model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/upload-model.js,samples/README.md) |



The [AI Platform Node.js Client API Reference][client-docs] documentation
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



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-ai-platform/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-ai-platform/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/aiplatform/latest
[product-docs]: https://cloud.google.com/ai-platform-unified/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
