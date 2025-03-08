[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [App Hub API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apphub)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/apphub.svg)](https://www.npmjs.org/package/@google-cloud/apphub)




App Hub API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apphub/CHANGELOG.md).

* [App Hub API Node.js Client API Reference][client-docs]
* [App Hub API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-apphub](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apphub)

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
1.  [Enable the App Hub API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/apphub
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. Project and location to list Discovered Services on.
 *  Expected format: `projects/{project}/locations/{location}`.
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server may return fewer items than
 *  requested. If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results.
 */
// const filter = 'abc123'
/**
 *  Optional. Hint for how to order the results.
 */
// const orderBy = 'abc123'

// Imports the Apphub library
const {AppHubClient} = require('@google-cloud/apphub').v1;

// Instantiates a client
const apphubClient = new AppHubClient();

async function callListDiscoveredServices() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = apphubClient.listDiscoveredServicesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDiscoveredServices();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apphub/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| App_hub.create_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.create_application.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.create_service_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service_project_attachment.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.create_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.create_workload.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.delete_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_application.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.delete_service_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service_project_attachment.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.delete_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_workload.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.detach_service_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.detach_service_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.detach_service_project_attachment.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_application.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_discovered_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_discovered_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_workload.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_service_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service_project_attachment.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.get_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.get_workload.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_applications | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_applications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_applications.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_discovered_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_services.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_discovered_workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_workloads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_workloads.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_service_project_attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_service_project_attachments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_service_project_attachments.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_services.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.list_workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_workloads.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.list_workloads.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.lookup_discovered_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.lookup_discovered_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_workload.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.lookup_service_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_service_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_service_project_attachment.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.update_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.update_application.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.update_service.js,packages/google-cloud-apphub/samples/README.md) |
| App_hub.update_workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_workload.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/generated/v1/app_hub.update_workload.js,packages/google-cloud-apphub/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apphub/samples/quickstart.js,packages/google-cloud-apphub/samples/README.md) |



The [App Hub API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/apphub@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/apphub/latest
[product-docs]: https://cloud.google.com/app-hub/docs/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=apphub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
