[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [VMware Engine API: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/vmwareengine.svg)](https://www.npmjs.org/package/@google-cloud/vmwareengine)




VMware Engine API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmwareengine/CHANGELOG.md).

* [VMware Engine API Node.js Client API Reference][client-docs]
* [VMware Engine API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-vmwareengine](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-vmwareengine)

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
1.  [Enable the VMware Engine API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/vmwareengine
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
 *  Required. The resource name of the location to query for
 *  VMware Engine networks. Resource names are schemeless URIs that follow the
 *  conventions in https://cloud.google.com/apis/design/resource_names. For
 *  example: `projects/my-project/locations/global`
 */
// const parent = 'abc123'
/**
 *  The maximum number of results to return in one page.
 *  The maximum value is coerced to 1000.
 *  The default value of this field is 500.
 */
// const pageSize = 1234
/**
 *  A page token, received from a previous `ListVmwareEngineNetworks` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to
 *  `ListVmwareEngineNetworks` must match the call that provided the page
 *  token.
 */
// const pageToken = 'abc123'
/**
 *  A filter expression that matches resources returned in the response.
 *  The expression must specify the field name, a comparison
 *  operator, and the value that you want to use for filtering. The value
 *  must be a string, a number, or a boolean. The comparison operator
 *  must be `=`, `!=`, `>`, or `<`.
 *  For example, if you are filtering a list of network peerings, you can
 *  exclude the ones named `example-network` by specifying
 *  `name != "example-network"`.
 *  To filter on multiple expressions, provide each separate expression within
 *  parentheses. For example:
 *  ```
 *  (name = "example-network")
 *  (createTime > "2021-04-12T08:15:10.40Z")
 *  ```
 *  By default, each expression is an `AND` expression. However, you
 *  can include `AND` and `OR` expressions explicitly.
 *  For example:
 *  ```
 *  (name = "example-network-1") AND
 *  (createTime > "2021-04-12T08:15:10.40Z") OR
 *  (name = "example-network-2")
 *  ```
 */
// const filter = 'abc123'
/**
 *  Sorts list results by a certain order. By default, returned results
 *  are ordered by `name` in ascending order.
 *  You can also sort results in descending order based on the `name` value
 *  using `orderBy="name desc"`.
 *  Currently, only ordering by `name` is supported.
 */
// const orderBy = 'abc123'

// Imports the Vmwareengine library
const {VmwareEngineClient} = require('@google-cloud/vmwareengine').v1;

// Instantiates a client
const vmwareengineClient = new VmwareEngineClient();

async function callListVmwareEngineNetworks() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await vmwareengineClient.listVmwareEngineNetworksAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListVmwareEngineNetworks();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Vmware_engine.create_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_cluster.js,samples/README.md) |
| Vmware_engine.create_hcx_activation_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_hcx_activation_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_hcx_activation_key.js,samples/README.md) |
| Vmware_engine.create_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_network_policy.js,samples/README.md) |
| Vmware_engine.create_private_cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_private_cloud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_private_cloud.js,samples/README.md) |
| Vmware_engine.create_vmware_engine_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_vmware_engine_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.create_vmware_engine_network.js,samples/README.md) |
| Vmware_engine.delete_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_cluster.js,samples/README.md) |
| Vmware_engine.delete_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_network_policy.js,samples/README.md) |
| Vmware_engine.delete_private_cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_private_cloud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_private_cloud.js,samples/README.md) |
| Vmware_engine.delete_vmware_engine_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_vmware_engine_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.delete_vmware_engine_network.js,samples/README.md) |
| Vmware_engine.get_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_cluster.js,samples/README.md) |
| Vmware_engine.get_hcx_activation_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_hcx_activation_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_hcx_activation_key.js,samples/README.md) |
| Vmware_engine.get_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_network_policy.js,samples/README.md) |
| Vmware_engine.get_node_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_node_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_node_type.js,samples/README.md) |
| Vmware_engine.get_private_cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_private_cloud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_private_cloud.js,samples/README.md) |
| Vmware_engine.get_vmware_engine_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_vmware_engine_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.get_vmware_engine_network.js,samples/README.md) |
| Vmware_engine.list_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_clusters.js,samples/README.md) |
| Vmware_engine.list_hcx_activation_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_hcx_activation_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_hcx_activation_keys.js,samples/README.md) |
| Vmware_engine.list_network_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_network_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_network_policies.js,samples/README.md) |
| Vmware_engine.list_node_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_node_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_node_types.js,samples/README.md) |
| Vmware_engine.list_private_clouds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_private_clouds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_private_clouds.js,samples/README.md) |
| Vmware_engine.list_subnets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_subnets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_subnets.js,samples/README.md) |
| Vmware_engine.list_vmware_engine_networks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_vmware_engine_networks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.list_vmware_engine_networks.js,samples/README.md) |
| Vmware_engine.reset_nsx_credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_nsx_credentials.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_nsx_credentials.js,samples/README.md) |
| Vmware_engine.reset_vcenter_credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_vcenter_credentials.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.reset_vcenter_credentials.js,samples/README.md) |
| Vmware_engine.show_nsx_credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_nsx_credentials.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_nsx_credentials.js,samples/README.md) |
| Vmware_engine.show_vcenter_credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_vcenter_credentials.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.show_vcenter_credentials.js,samples/README.md) |
| Vmware_engine.undelete_private_cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.undelete_private_cloud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.undelete_private_cloud.js,samples/README.md) |
| Vmware_engine.update_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_cluster.js,samples/README.md) |
| Vmware_engine.update_network_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_network_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_network_policy.js,samples/README.md) |
| Vmware_engine.update_private_cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_private_cloud.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_private_cloud.js,samples/README.md) |
| Vmware_engine.update_vmware_engine_network | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_vmware_engine_network.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/generated/v1/vmware_engine.update_vmware_engine_network.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmwareengine/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-vmwareengine/samples/test/quickstart.js,samples/README.md) |



The [VMware Engine API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google-cloud/vmwareengine@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/vmwareengine/latest
[product-docs]: cloud.google.com/vmware-engine/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vmwareengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
