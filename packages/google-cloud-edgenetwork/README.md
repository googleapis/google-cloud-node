[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Distributed Cloud Edge Network API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgenetwork)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/edgenetwork.svg)](https://www.npmjs.org/package/@google-cloud/edgenetwork)




Distributed Cloud Edge Network API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgenetwork/CHANGELOG.md).

* [Distributed Cloud Edge Network API Node.js Client API Reference][client-docs]
* [Distributed Cloud Edge Network API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-edgenetwork](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgenetwork)

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
1.  [Enable the Distributed Cloud Edge Network API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/edgenetwork
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
 *  Required. Parent value for ListZonesRequest
 */
// const parent = 'projects/your-project/locations/your-location'

// Imports the Edgenetwork library
const {EdgeNetworkClient} = require('@google-cloud/edgenetwork').v1;

// Instantiates a client
const edgenetworkClient = new EdgeNetworkClient();

async function callListZones() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await edgenetworkClient.listZonesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListZones();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgenetwork/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Edge_network.create_interconnect_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_interconnect_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_interconnect_attachment.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.create_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_network.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.create_router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_router.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_router.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.create_subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_subnet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.create_subnet.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.delete_interconnect_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_interconnect_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_interconnect_attachment.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.delete_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_network.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.delete_router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_router.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_router.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.delete_subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_subnet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.delete_subnet.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.diagnose_interconnect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_interconnect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_interconnect.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.diagnose_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_network.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.diagnose_router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_router.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.diagnose_router.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_interconnect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_interconnect_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_interconnect_attachment.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_network.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_router.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_router.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_subnet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_subnet.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.get_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.get_zone.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.initialize_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.initialize_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.initialize_zone.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_interconnect_attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnect_attachments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnect_attachments.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_interconnects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnects.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_interconnects.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_networks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_networks.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_routers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_routers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_routers.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_subnets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_subnets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_subnets.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.list_zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_zones.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.list_zones.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.update_router | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_router.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_router.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Edge_network.update_subnet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_subnet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/generated/v1/edge_network.update_subnet.js,packages/google-cloud-edgenetwork/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgenetwork/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgenetwork/samples/quickstart.js,packages/google-cloud-edgenetwork/samples/README.md) |



The [Distributed Cloud Edge Network API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/edgenetwork@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/edgenetwork/latest
[product-docs]: https://cloud.google.com/distributed-cloud/edge/latest/docs/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=edgenetwork.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
