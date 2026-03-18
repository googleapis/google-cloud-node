[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Distributed Cloud Edge Network API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/edgenetwork.svg)](https://www.npmjs.org/package/@google-cloud/edgenetwork)

Distributed Cloud Edge Network API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Distributed Cloud Edge Network API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/edgenetwork/latest)
* [Distributed Cloud Edge Network API Documentation](https://cloud.google.com/distributed-cloud/edge/latest/docs/overview)

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
1.  [Enable the Distributed Cloud Edge Network API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/edgenetwork
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create interconnect attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_interconnect_attachment.js) |
| create network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_network.js) |
| create router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_router.js) |
| create subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_subnet.js) |
| delete interconnect attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_interconnect_attachment.js) |
| delete network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_network.js) |
| delete router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_router.js) |
| delete subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_subnet.js) |
| diagnose interconnect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_interconnect.js) |
| diagnose network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_network.js) |
| diagnose router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_router.js) |
| get interconnect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect.js) |
| get interconnect attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect_attachment.js) |
| get network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_network.js) |
| get router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_router.js) |
| get subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_subnet.js) |
| get zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_zone.js) |
| initialize zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.initialize_zone.js) |
| list interconnect attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnect_attachments.js) |
| list interconnects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnects.js) |
| list networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_networks.js) |
| list routers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_routers.js) |
| list subnets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_subnets.js) |
| list zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_zones.js) |
| update router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_router.js) |
| update subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_subnet.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/snippet_metadata_google.cloud.edgenetwork.v1.json) |


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
For example, `npm install @google-cloud/edgenetwork@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=edgenetwork.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork
