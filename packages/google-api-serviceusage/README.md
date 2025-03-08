[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Service Usage: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-serviceusage)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/service-usage.svg)](https://www.npmjs.org/package/@google-cloud/service-usage)




Serviceusage client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-serviceusage/CHANGELOG.md).

* [Service Usage Node.js Client API Reference][client-docs]
* [Service Usage Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-api-serviceusage](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-serviceusage)

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
1.  [Enable the Service Usage API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/service-usage
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {ServiceUsageClient} = require('@google-cloud/service-usage');

// const parent = 'projects/my-project', // Project to list service usage for.
// filter = 'state:ENABLED' // Filter when listing services.

// Creates a client
const client = new ServiceUsageClient();
async function listServices() {
  for await (const service of client.listServicesAsync({
    parent,
    filter,
  })) {
    console.info(service.name);
  }
}
listServices();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-serviceusage/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Service_usage.batch_enable_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.batch_enable_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.batch_enable_services.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.batch_get_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.batch_get_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.batch_get_services.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.disable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.disable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.disable_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.enable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.enable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.enable_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.get_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1/service_usage.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1/service_usage.list_services.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.batch_enable_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.batch_enable_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.batch_enable_services.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.create_admin_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.create_admin_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.create_admin_override.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.create_consumer_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.create_consumer_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.create_consumer_override.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.delete_admin_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.delete_admin_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.delete_admin_override.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.delete_consumer_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.delete_consumer_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.delete_consumer_override.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.disable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.disable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.disable_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.enable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.enable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.enable_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.generate_service_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.generate_service_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.generate_service_identity.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.get_consumer_quota_limit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_consumer_quota_limit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_consumer_quota_limit.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.get_consumer_quota_metric | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_consumer_quota_metric.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_consumer_quota_metric.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.get_service.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.import_admin_overrides | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.import_admin_overrides.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.import_admin_overrides.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.import_consumer_overrides | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.import_consumer_overrides.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.import_consumer_overrides.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.list_admin_overrides | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_admin_overrides.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_admin_overrides.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.list_consumer_overrides | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_consumer_overrides.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_consumer_overrides.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.list_consumer_quota_metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_consumer_quota_metrics.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_consumer_quota_metrics.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.list_services.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.update_admin_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.update_admin_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.update_admin_override.js,packages/google-api-serviceusage/samples/README.md) |
| Service_usage.update_consumer_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.update_consumer_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/generated/v1beta1/service_usage.update_consumer_override.js,packages/google-api-serviceusage/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-serviceusage/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-serviceusage/samples/quickstart.js,packages/google-api-serviceusage/samples/README.md) |



The [Service Usage Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/service-usage@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/service-usage/docs/overview
[product-docs]: https://cloud.google.com/service-usage/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=serviceusage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
