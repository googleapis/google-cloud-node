[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Container Analysis: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-containeranalysis)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/containeranalysis.svg)](https://www.npmjs.org/package/@google-cloud/containeranalysis)




Containeranalysis client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-containeranalysis/CHANGELOG.md).

* [Google Container Analysis Node.js Client API Reference][client-docs]
* [Google Container Analysis Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-devtools-containeranalysis](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-containeranalysis)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Container Analysis API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/containeranalysis
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-containeranalysis/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Container_analysis.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.get_iam_policy.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis.get_vulnerability_occurrences_summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.get_vulnerability_occurrences_summary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.get_vulnerability_occurrences_summary.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.set_iam_policy.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/container_analysis.test_iam_permissions.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.batch_create_notes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.batch_create_notes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.batch_create_notes.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.batch_create_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.batch_create_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.batch_create_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.create_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.create_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.create_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.create_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.create_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.create_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.delete_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.delete_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.delete_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.delete_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.delete_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.delete_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.get_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.get_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.get_occurrence_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_occurrence_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.get_occurrence_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.list_note_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_note_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_note_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.list_notes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_notes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_notes.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.list_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.list_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.update_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.update_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.update_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas.update_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.update_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1/grafeas.update_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.export_s_b_o_m | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.export_s_b_o_m.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.export_s_b_o_m.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.generate_packages_summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.generate_packages_summary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.generate_packages_summary.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.get_iam_policy.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.get_scan_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.get_scan_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.get_scan_config.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.list_scan_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.list_scan_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.list_scan_configs.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.set_iam_policy.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.test_iam_permissions.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Container_analysis_v1_beta1.update_scan_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.update_scan_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/container_analysis_v1_beta1.update_scan_config.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.batch_create_notes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.batch_create_notes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.batch_create_notes.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.batch_create_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.batch_create_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.batch_create_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.create_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.create_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.create_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.create_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.create_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.create_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.delete_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.delete_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.delete_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.delete_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.delete_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.delete_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.get_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.get_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.get_occurrence_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_occurrence_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_occurrence_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.get_vulnerability_occurrences_summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_vulnerability_occurrences_summary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.get_vulnerability_occurrences_summary.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.list_note_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_note_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_note_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.list_notes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_notes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_notes.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.list_occurrences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_occurrences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.list_occurrences.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.update_note | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.update_note.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.update_note.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Grafeas_v1_beta1.update_occurrence | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.update_occurrence.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/generated/v1beta1/grafeas_v1_beta1.update_occurrence.js,packages/google-devtools-containeranalysis/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-containeranalysis/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-containeranalysis/samples/quickstart.js,packages/google-devtools-containeranalysis/samples/README.md) |



The [Google Container Analysis Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/containeranalysis@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/containeranalysis/latest
[product-docs]: https://cloud.google.com/container-registry/docs/container-analysis
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=containeranalysis.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
