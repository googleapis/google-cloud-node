[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud TPU: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tpu)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/tpu.svg)](https://www.npmjs.org/package/@google-cloud/tpu)




tpu client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tpu/CHANGELOG.md).

* [Cloud TPU Node.js Client API Reference][client-docs]
* [Cloud TPU Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-tpu](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tpu)

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
1.  [Enable the Cloud TPU API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/tpu
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
// eslint-disable-next-line node/no-missing-require
const {TpuClient} = require('@google-cloud/tpu');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new TpuClient();

async function listNodes() {
  const nodes = await client.listNodes({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(nodes);
}
listNodes();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tpu/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Tpu.create_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.create_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.create_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.delete_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.delete_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.delete_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_accelerator_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_accelerator_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.get_accelerator_type.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.get_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_tensor_flow_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.get_tensor_flow_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.get_tensor_flow_version.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_accelerator_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_accelerator_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.list_accelerator_types.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_nodes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.list_nodes.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_tensor_flow_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.list_tensor_flow_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.list_tensor_flow_versions.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.reimage_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.reimage_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.reimage_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.start_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.start_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.start_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.stop_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v1/tpu.stop_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v1/tpu.stop_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.create_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.create_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.create_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.create_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.create_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.create_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.delete_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.delete_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.delete_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.delete_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.delete_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.delete_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.generate_service_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.generate_service_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.generate_service_identity.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_accelerator_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_accelerator_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.get_accelerator_type.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_guest_attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_guest_attributes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.get_guest_attributes.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.get_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.get_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_runtime_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.get_runtime_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.get_runtime_version.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_accelerator_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_accelerator_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.list_accelerator_types.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_nodes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.list_nodes.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_queued_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_queued_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.list_queued_resources.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_runtime_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.list_runtime_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.list_runtime_versions.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.reset_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.reset_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.reset_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.start_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.start_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.start_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.stop_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.stop_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.stop_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.update_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2/tpu.update_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2/tpu.update_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.create_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.create_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.create_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.delete_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.delete_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.delete_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.generate_service_identity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.generate_service_identity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.generate_service_identity.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_accelerator_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_accelerator_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_accelerator_type.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_guest_attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_guest_attributes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_guest_attributes.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.get_runtime_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_runtime_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.get_runtime_version.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_accelerator_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_accelerator_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_accelerator_types.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_nodes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_nodes.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_queued_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_queued_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_queued_resources.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_reservations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_reservations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_reservations.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.list_runtime_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_runtime_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.list_runtime_versions.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.perform_maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.perform_maintenance_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.perform_maintenance_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.reset_queued_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.reset_queued_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.reset_queued_resource.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.simulate_maintenance_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.simulate_maintenance_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.simulate_maintenance_event.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.start_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.start_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.start_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.stop_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.stop_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.stop_node.js,packages/google-cloud-tpu/samples/README.md) |
| Tpu.update_node | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.update_node.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/generated/v2alpha1/tpu.update_node.js,packages/google-cloud-tpu/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-tpu/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tpu/samples/quickstart.js,packages/google-cloud-tpu/samples/README.md) |



The [Cloud TPU Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/tpu@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/tpu/latest
[product-docs]: https://cloud.google.com/tpu/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=tpu.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
