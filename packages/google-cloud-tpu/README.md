[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud TPU API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/tpu.svg)](https://www.npmjs.org/package/@google-cloud/tpu)

Cloud TPU API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud TPU API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/tpu/latest)


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
1.  [Enable the Cloud TPU API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/tpu
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/snippet_metadata_google.cloud.tpu.v1.json) |
| create node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.create_node.js) |
| delete node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.delete_node.js) |
| get accelerator type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_accelerator_type.js) |
| get node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_node.js) |
| get tensor flow version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_tensor_flow_version.js) |
| list accelerator types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_accelerator_types.js) |
| list nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_nodes.js) |
| list tensor flow versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_tensor_flow_versions.js) |
| reimage node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.reimage_node.js) |
| start node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.start_node.js) |
| stop node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.stop_node.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/snippet_metadata_google.cloud.tpu.v2.json) |
| create node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.create_node.js) |
| create queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.create_queued_resource.js) |
| delete node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.delete_node.js) |
| delete queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.delete_queued_resource.js) |
| generate service identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.generate_service_identity.js) |
| get accelerator type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_accelerator_type.js) |
| get guest attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_guest_attributes.js) |
| get node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_node.js) |
| get queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_queued_resource.js) |
| get runtime version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_runtime_version.js) |
| list accelerator types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_accelerator_types.js) |
| list nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_nodes.js) |
| list queued resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_queued_resources.js) |
| list runtime versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_runtime_versions.js) |
| reset queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.reset_queued_resource.js) |
| start node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.start_node.js) |
| stop node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.stop_node.js) |
| update node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.update_node.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/snippet_metadata_google.cloud.tpu.v2alpha1.json) |
| create node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_node.js) |
| create queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_queued_resource.js) |
| delete node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_node.js) |
| delete queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_queued_resource.js) |
| generate service identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.generate_service_identity.js) |
| get accelerator type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_accelerator_type.js) |
| get guest attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_guest_attributes.js) |
| get node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_node.js) |
| get queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_queued_resource.js) |
| get runtime version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_runtime_version.js) |
| list accelerator types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_accelerator_types.js) |
| list nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_nodes.js) |
| list queued resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_queued_resources.js) |
| list reservations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_reservations.js) |
| list runtime versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_runtime_versions.js) |
| perform maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance.js) |
| perform maintenance queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance_queued_resource.js) |
| reset queued resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.reset_queued_resource.js) |
| simulate maintenance event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.simulate_maintenance_event.js) |
| start node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.start_node.js) |
| stop node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.stop_node.js) |
| update node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.update_node.js) |


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
For example, `npm install @google-cloud/tpu@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=tpu.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu
