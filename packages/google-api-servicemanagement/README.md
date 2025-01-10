[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Service Management API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-servicemanagement)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/service-management.svg)](https://www.npmjs.org/package/@google-cloud/service-management)




Service management client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-servicemanagement/CHANGELOG.md).

* [Service Management API Node.js Client API Reference][client-docs]
* [Service Management API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-api-servicemanagement](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-servicemanagement)

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
1.  [Enable the Service Management API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/service-management
```


### Using the client library

```javascript

// Imports the Google Cloud client library
const {ServiceManagerClient} = require('@google-cloud/service-management');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new ServiceManagerClient();

async function listServices() {
  const [services] = await client.listServices({
    producerProjectId: projectId,
  });
  console.info(services);
}
listServices();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-api-servicemanagement/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Service_manager.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.create_service_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service_config.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.create_service_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.create_service_rollout.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.delete_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.disable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.disable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.disable_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.enable_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.enable_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.enable_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.generate_config_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.generate_config_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.generate_config_report.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.get_service_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service_config.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.get_service_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.get_service_rollout.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.list_service_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_service_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_service_configs.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.list_service_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_service_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_service_rollouts.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.list_services.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.submit_config_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.submit_config_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.submit_config_source.js,packages/google-api-servicemanagement/samples/README.md) |
| Service_manager.undelete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/generated/v1/service_manager.undelete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/generated/v1/service_manager.undelete_service.js,packages/google-api-servicemanagement/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-api-servicemanagement/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-api-servicemanagement/samples/quickstart.js,packages/google-api-servicemanagement/samples/README.md) |



The [Service Management API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/service-management@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/service-management/latest
[product-docs]: https://cloud.google.com/service-infrastructure/docs/overview/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=servicemanagement.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
