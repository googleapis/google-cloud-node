[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Fusion: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datafusion)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/data-fusion.svg)](https://www.npmjs.org/package/@google-cloud/data-fusion)




datafusion client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datafusion/CHANGELOG.md).

* [Cloud Data Fusion Node.js Client API Reference][client-docs]
* [Cloud Data Fusion Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-datafusion](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datafusion)

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
1.  [Enable the Cloud Data Fusion API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/data-fusion
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datafusion/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_fusion.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.create_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.delete_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.get_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_available_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.list_available_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.list_available_versions.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.list_instances.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.restart_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.restart_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.restart_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1/data_fusion.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1/data_fusion.update_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.add_dns_peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.add_dns_peering.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.add_dns_peering.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.create_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.delete_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.get_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_available_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_available_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_available_versions.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_dns_peerings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_dns_peerings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_dns_peerings.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_instances.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.list_namespaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_namespaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.list_namespaces.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.remove_dns_peering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.remove_dns_peering.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.remove_dns_peering.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.remove_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.remove_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.remove_iam_policy.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.restart_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.restart_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.restart_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.update_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.update_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.update_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Data_fusion.upgrade_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.upgrade_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/generated/v1beta1/data_fusion.upgrade_instance.js,packages/google-cloud-datafusion/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datafusion/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datafusion/samples/quickstart.js,packages/google-cloud-datafusion/samples/README.md) |



The [Cloud Data Fusion Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/data-fusion@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/data-fusion/latest
[product-docs]: https://cloud.google.com/data-fusion/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datafusion.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
