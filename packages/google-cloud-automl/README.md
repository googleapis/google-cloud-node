[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud AutoML API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/automl.svg)](https://www.npmjs.org/package/@google-cloud/automl)

Cloud AutoML API client for Node.js

🔔 **AutoML API NodeJS Client is now available in Vertex AI. Please visit** 
[node-js-aiplatform](https://github.com/googleapis/nodejs-ai-platform) **for the new NodeJS Vertex AI client.** 
Vertex AI is our next generation AI Platform, with many new features that are unavailable in the current platform. 
[Migrate your resources to Vertex AI](https://cloud.google.com/vertex-ai/docs/start/migrating-to-vertex-ai) to get 
the latest machine learning features, simplify end-to-end journeys, and productionize models with MLOps.

Cloud AutoML API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud AutoML API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/automl/latest)


Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud AutoML API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/automl
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.create_dataset.js) |
| create model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.create_model.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_dataset.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.delete_model.js) |
| deploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.deploy_model.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.export_data.js) |
| export model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.export_model.js) |
| get annotation spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_annotation_spec.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_dataset.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model.js) |
| get model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.get_model_evaluation.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.import_data.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_datasets.js) |
| list model evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_model_evaluations.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.list_models.js) |
| undeploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.undeploy_model.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.update_dataset.js) |
| update model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/auto_ml.update_model.js) |
| batch predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/prediction_service.batch_predict.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/prediction_service.predict.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1/snippet_metadata_google.cloud.automl.v1.json) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_dataset.js) |
| create model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.create_model.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_dataset.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.delete_model.js) |
| deploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.deploy_model.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_data.js) |
| export evaluated examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_evaluated_examples.js) |
| export model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.export_model.js) |
| get annotation spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_annotation_spec.js) |
| get column spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_column_spec.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_dataset.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model.js) |
| get model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_model_evaluation.js) |
| get table spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.get_table_spec.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.import_data.js) |
| list column specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_column_specs.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_datasets.js) |
| list model evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_model_evaluations.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_models.js) |
| list table specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.list_table_specs.js) |
| undeploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.undeploy_model.js) |
| update column spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_column_spec.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_dataset.js) |
| update table spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/auto_ml.update_table_spec.js) |
| batch predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.batch_predict.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/prediction_service.predict.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples/generated/v1beta1/snippet_metadata_google.cloud.automl.v1beta1.json) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=automl.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-automl
