[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Eventarc: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/eventarc.svg)](https://www.npmjs.org/package/@google-cloud/eventarc)




eventarc client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc/CHANGELOG.md).

* [Eventarc Node.js Client API Reference][client-docs]
* [Eventarc Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-eventarc](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc)

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
1.  [Enable the Eventarc API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/eventarc
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
const {EventarcClient} = require('@google-cloud/eventarc');

// TODO: replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new EventarcClient();

async function doSomething() {
  for await (const trigger of await client.listTriggersAsync({
    parent: client.locationPath(projectId, 'us-central1'),
  })) {
    console.info(trigger.name);
  }
}
doSomething();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Eventarc.create_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_channel_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel_connection.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_enrollment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_enrollment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_enrollment.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_google_api_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_google_api_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_google_api_source.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_message_bus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_message_bus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_message_bus.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_pipeline.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_trigger.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_channel.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_channel_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_channel_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_channel_connection.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_enrollment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_enrollment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_enrollment.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_google_api_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_google_api_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_google_api_source.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_message_bus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_message_bus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_message_bus.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_pipeline.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.delete_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.delete_trigger.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_channel.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_channel_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_channel_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_channel_connection.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_enrollment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_enrollment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_enrollment.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_google_api_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_google_api_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_google_api_source.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_google_channel_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_google_channel_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_google_channel_config.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_message_bus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_message_bus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_message_bus.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_pipeline.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_provider.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_provider.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.get_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.get_trigger.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_channel_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_channel_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_channel_connections.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_channels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_channels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_channels.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_enrollments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_enrollments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_enrollments.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_google_api_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_google_api_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_google_api_sources.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_message_bus_enrollments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_message_bus_enrollments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_message_bus_enrollments.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_message_buses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_message_buses.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_message_buses.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_pipelines.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_pipelines.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_providers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_providers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_providers.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.list_triggers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_triggers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.list_triggers.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_channel.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_enrollment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_enrollment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_enrollment.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_google_api_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_google_api_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_google_api_source.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_google_channel_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_google_channel_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_google_channel_config.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_message_bus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_message_bus.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_message_bus.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_pipeline.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.update_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.update_trigger.js,packages/google-cloud-eventarc/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/quickstart.js,packages/google-cloud-eventarc/samples/README.md) |



The [Eventarc Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/eventarc@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/eventarc/latest
[product-docs]: https://cloud.google.com/eventarc/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=eventarc.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
