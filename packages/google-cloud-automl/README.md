[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud AutoML: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-automl)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/automl.svg)](https://www.npmjs.org/package/@google-cloud/automl)




Cloud AutoML API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-automl/CHANGELOG.md).

* [Cloud AutoML Node.js Client API Reference][client-docs]
* [Cloud AutoML Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-automl](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-automl)

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
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/automl
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'us-central1';

// Imports the Google Cloud AutoML library
const {AutoMlClient} = require('@google-cloud/automl').v1;

// Instantiates a client
const client = new AutoMlClient();

async function listDatasets() {
  // Construct request
  const request = {
    parent: client.locationPath(projectId, location),
    filter: 'translation_dataset_metadata:*',
  };

  const [response] = await client.listDatasets(request);

  console.log('List of datasets:');
  for (const dataset of response) {
    console.log(`Dataset name: ${dataset.name}`);
    console.log(
      `Dataset id: ${
        dataset.name.split('/')[dataset.name.split('/').length - 1]
      }`
    );
    console.log(`Dataset display name: ${dataset.displayName}`);
    console.log('Dataset create time');
    console.log(`\tseconds ${dataset.createTime.seconds}`);
    console.log(`\tnanos ${dataset.createTime.nanos / 1e9}`);
    console.log(
      `Text extraction dataset metadata: ${dataset.textExtractionDatasetMetadata}`
    );

    console.log(
      `Text sentiment dataset metadata: ${dataset.textSentimentDatasetMetadata}`
    );

    console.log(
      `Text classification dataset metadata: ${dataset.textClassificationDatasetMetadata}`
    );

    if (dataset.translationDatasetMetadata !== undefined) {
      console.log('Translation dataset metadata:');
      console.log(
        `\tSource language code: ${dataset.translationDatasetMetadata.sourceLanguageCode}`
      );
      console.log(
        `\tTarget language code: ${dataset.translationDatasetMetadata.targetLanguageCode}`
      );
    }

    console.log(
      `Image classification dataset metadata: ${dataset.imageClassificationDatasetMetadata}`
    );

    console.log(
      `Image object detection dataset metatdata: ${dataset.imageObjectDetectionDatasetMetatdata}`
    );
  }
}

listDatasets();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-automl/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Auto_ml.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.create_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.create_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.create_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.delete_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.deploy_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.deploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.deploy_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.export_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.export_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.export_data.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.export_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.export_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.export_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_annotation_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_annotation_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.get_annotation_spec.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.get_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_model_evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model_evaluation.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.import_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.import_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.import_data.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.list_datasets.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_model_evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_model_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.list_model_evaluations.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.list_models.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.undeploy_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.undeploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.undeploy_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.update_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.update_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.update_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.update_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.update_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/auto_ml.update_model.js,packages/google-cloud-automl/samples/README.md) |
| Prediction_service.batch_predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/prediction_service.batch_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/prediction_service.batch_predict.js,packages/google-cloud-automl/samples/README.md) |
| Prediction_service.predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/prediction_service.predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1/prediction_service.predict.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.create_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.delete_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.deploy_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.deploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.deploy_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.export_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_data.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.export_evaluated_examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_evaluated_examples.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_evaluated_examples.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.export_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_annotation_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_annotation_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_annotation_spec.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_column_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_column_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_column_spec.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_model_evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model_evaluation.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.get_table_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_table_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_table_spec.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.import_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.import_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.import_data.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_column_specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_column_specs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_column_specs.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_datasets.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_model_evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_model_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_model_evaluations.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_models.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.list_table_specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_table_specs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_table_specs.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.undeploy_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.undeploy_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.undeploy_model.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.update_column_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_column_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_column_spec.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.update_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_dataset.js,packages/google-cloud-automl/samples/README.md) |
| Auto_ml.update_table_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_table_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_table_spec.js,packages/google-cloud-automl/samples/README.md) |
| Prediction_service.batch_predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.batch_predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.batch_predict.js,packages/google-cloud-automl/samples/README.md) |
| Prediction_service.predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.predict.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.predict.js,packages/google-cloud-automl/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-automl/samples/quickstart.js,packages/google-cloud-automl/samples/README.md) |



The [Cloud AutoML Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/automl/latest
[product-docs]: https://cloud.google.com/automl/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=automl.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
