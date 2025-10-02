[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Labeling API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/datalabeling.svg)](https://www.npmjs.org/package/@google-cloud/datalabeling)

Data Labeling API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Data Labeling API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/datalabeling/latest)


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
1.  [Enable the Data Labeling API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/datalabeling
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create annotation spec set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_annotation_spec_set.js) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_dataset.js) |
| create evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_evaluation_job.js) |
| create instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_instruction.js) |
| delete annotated dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotated_dataset.js) |
| delete annotation spec set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotation_spec_set.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_dataset.js) |
| delete evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_evaluation_job.js) |
| delete instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_instruction.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.export_data.js) |
| get annotated dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotated_dataset.js) |
| get annotation spec set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotation_spec_set.js) |
| get data item | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_data_item.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_dataset.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation.js) |
| get evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation_job.js) |
| get example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_example.js) |
| get instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_instruction.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.import_data.js) |
| label image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_image.js) |
| label text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_text.js) |
| label video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_video.js) |
| list annotated datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotated_datasets.js) |
| list annotation spec sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotation_spec_sets.js) |
| list data items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_data_items.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_datasets.js) |
| list evaluation jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_evaluation_jobs.js) |
| list examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_examples.js) |
| list instructions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_instructions.js) |
| pause evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.pause_evaluation_job.js) |
| resume evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.resume_evaluation_job.js) |
| search evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_evaluations.js) |
| search example comparisons | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_example_comparisons.js) |
| update evaluation job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.update_evaluation_job.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/snippet_metadata_google.cloud.datalabeling.v1beta1.json) |


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
For example, `npm install @google-cloud/datalabeling@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datalabeling.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling
