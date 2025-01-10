[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Data Labeling: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datalabeling)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datalabeling.svg)](https://www.npmjs.org/package/@google-cloud/datalabeling)




Data Labeling API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datalabeling/CHANGELOG.md).

* [Google Cloud Data Labeling Node.js Client API Reference][client-docs]
* [Google Cloud Data Labeling Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-datalabeling](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datalabeling)

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
1.  [Enable the Google Cloud Data Labeling API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/datalabeling
```


### Using the client library

```javascript
const {DataLabelingServiceClient} = require('@google-cloud/datalabeling');
const client = new DataLabelingServiceClient();

async function quickstart() {
  const parent = client.projectPath(projectId);
  const [result] = await client.listDatasets({parent});
  console.log('Datasets:');
  console.log(result);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datalabeling/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_labeling_service.create_annotation_spec_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_annotation_spec_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_annotation_spec_set.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_dataset.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.create_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.create_instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_instruction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.create_instruction.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.delete_annotated_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotated_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotated_dataset.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.delete_annotation_spec_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotation_spec_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_annotation_spec_set.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_dataset.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.delete_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.delete_instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_instruction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.delete_instruction.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.export_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.export_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.export_data.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_annotated_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotated_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotated_dataset.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_annotation_spec_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotation_spec_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_annotation_spec_set.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_data_item | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_data_item.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_data_item.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_dataset.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_example.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_example.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.get_instruction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_instruction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.get_instruction.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.import_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.import_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.import_data.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.label_image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_image.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_image.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.label_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_text.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.label_video | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_video.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.label_video.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_annotated_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotated_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotated_datasets.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_annotation_spec_sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotation_spec_sets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_annotation_spec_sets.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_data_items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_data_items.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_data_items.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_datasets.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_evaluation_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_evaluation_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_evaluation_jobs.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_examples.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_examples.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.list_instructions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_instructions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.list_instructions.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.pause_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.pause_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.pause_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.resume_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.resume_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.resume_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.search_evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_evaluations.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.search_example_comparisons | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_example_comparisons.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.search_example_comparisons.js,packages/google-cloud-datalabeling/samples/README.md) |
| Data_labeling_service.update_evaluation_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.update_evaluation_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/generated/v1beta1/data_labeling_service.update_evaluation_job.js,packages/google-cloud-datalabeling/samples/README.md) |
| Get Datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datalabeling/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datalabeling/samples/quickstart.js,packages/google-cloud-datalabeling/samples/README.md) |



The [Google Cloud Data Labeling Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/datalabeling@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datalabeling/latest
[product-docs]: https://cloud.google.com/data-labeling/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datalabeling.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
