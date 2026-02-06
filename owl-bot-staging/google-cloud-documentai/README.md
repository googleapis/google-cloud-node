[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Document AI API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/documentai.svg)](https://www.npmjs.org/package/@google-cloud/documentai)

Cloud Document AI API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Document AI API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/documentai/latest)
* [Cloud Document AI API Documentation](https://cloud.google.com/document-ai/docs)

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
1.  [Enable the Cloud Document AI API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/documentai
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch process documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.batch_process_documents.js) |
| create processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.create_processor.js) |
| delete processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor.js) |
| delete processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor_version.js) |
| deploy processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.deploy_processor_version.js) |
| disable processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.disable_processor.js) |
| enable processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.enable_processor.js) |
| evaluate processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.evaluate_processor_version.js) |
| fetch processor types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.fetch_processor_types.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_evaluation.js) |
| get processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor.js) |
| get processor type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_type.js) |
| get processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_version.js) |
| list evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_evaluations.js) |
| list processor types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_types.js) |
| list processor versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_versions.js) |
| list processors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processors.js) |
| process document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.process_document.js) |
| review document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.review_document.js) |
| set default processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.set_default_processor_version.js) |
| train processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.train_processor_version.js) |
| undeploy processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.undeploy_processor_version.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/snippet_metadata_google.cloud.documentai.v1.json) |
| batch process documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.batch_process_documents.js) |
| create processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.create_processor.js) |
| delete processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor.js) |
| delete processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor_version.js) |
| deploy processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.deploy_processor_version.js) |
| disable processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.disable_processor.js) |
| enable processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.enable_processor.js) |
| evaluate processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.evaluate_processor_version.js) |
| fetch processor types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.fetch_processor_types.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_evaluation.js) |
| get processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor.js) |
| get processor type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_type.js) |
| get processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_version.js) |
| import processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.import_processor_version.js) |
| list evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_evaluations.js) |
| list processor types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_types.js) |
| list processor versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_versions.js) |
| list processors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processors.js) |
| process document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.process_document.js) |
| review document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.review_document.js) |
| set default processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.set_default_processor_version.js) |
| train processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.train_processor_version.js) |
| undeploy processor version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.undeploy_processor_version.js) |
| batch delete documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.batch_delete_documents.js) |
| get dataset schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_dataset_schema.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.list_documents.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset.js) |
| update dataset schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset_schema.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/snippet_metadata_google.cloud.documentai.v1beta3.json) |


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
For example, `npm install @google-cloud/documentai@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=documentai.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai
