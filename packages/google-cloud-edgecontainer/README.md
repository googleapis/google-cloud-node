[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Distributed Cloud Edge Container API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgecontainer)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/edgecontainer.svg)](https://www.npmjs.org/package/@google-cloud/edgecontainer)




Distributed Cloud Edge Container API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgecontainer/CHANGELOG.md).

* [Distributed Cloud Edge Container API Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-cloud-edgecontainer](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgecontainer)

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
1.  [Enable the Distributed Cloud Edge Container API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/edgecontainer
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
 *  Required. The parent location, which owns this collection of clusters.
 */
// const parent = 'abc123'
/**
 *  The maximum number of resources to list.
 */
// const pageSize = 1234
/**
 *  A page token received from previous list request.
 *  A page token received from previous list request.
 */
// const pageToken = 'abc123'
/**
 *  Only resources matching this filter will be listed.
 */
// const filter = 'abc123'
/**
 *  Specifies the order in which resources will be listed.
 */
// const orderBy = 'abc123'

// Imports the Edgecontainer library
const {EdgeContainerClient} = require('@google-cloud/edgecontainer').v1;

// Instantiates a client
const edgecontainerClient = new EdgeContainerClient();

async function callListClusters() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await edgecontainerClient.listClustersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListClusters();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-edgecontainer/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Edge_container.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_cluster.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.create_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_node_pool.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.create_vpn_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_vpn_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.create_vpn_connection.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_cluster.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.delete_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_node_pool.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.delete_vpn_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_vpn_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.delete_vpn_connection.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.generate_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.generate_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.generate_access_token.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.generate_offline_credential | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.generate_offline_credential.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.generate_offline_credential.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_cluster.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.get_machine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_machine.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_machine.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.get_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_node_pool.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.get_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_server_config.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.get_vpn_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_vpn_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.get_vpn_connection.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_clusters.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.list_machines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_machines.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_machines.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.list_node_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_node_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_node_pools.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.list_vpn_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_vpn_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.list_vpn_connections.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.update_cluster.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.update_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.update_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.update_node_pool.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Edge_container.upgrade_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.upgrade_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/generated/v1/edge_container.upgrade_cluster.js,packages/google-cloud-edgecontainer/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-edgecontainer/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-edgecontainer/samples/quickstart.js,packages/google-cloud-edgecontainer/samples/README.md) |



The [Distributed Cloud Edge Container API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/edgecontainer@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/edgecontainer/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=edgecontainer.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
