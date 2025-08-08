[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [SaaS Runtime API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-saasplatform-saasservicemgmt)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/saasservicemgmt.svg)](https://www.npmjs.org/package/@google-cloud/saasservicemgmt)




SaaS Runtime API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-saasplatform-saasservicemgmt/CHANGELOG.md).

* [SaaS Runtime API Node.js Client API Reference][client-docs]
* [SaaS Runtime API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-saasplatform-saasservicemgmt](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-saasplatform-saasservicemgmt)

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
1.  [Enable the SaaS Runtime API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/saasservicemgmt
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
 *  Required. The parent of the rollout.
 */
// const parent = 'abc123'
/**
 *  The maximum number of rollouts to send per page.
 */
// const pageSize = 1234
/**
 *  The page token: If the next_page_token from a previous response
 *  is provided, this request will send the subsequent page.
 */
// const pageToken = 'abc123'
/**
 *  Filter the list as specified in https://google.aip.dev/160.
 */
// const filter = 'abc123'
/**
 *  Order results as specified in https://google.aip.dev/132.
 */
// const orderBy = 'abc123'

// Imports the Saasservicemgmt library
const {SaasRolloutsClient} = require('@google-cloud/saasservicemgmt').v1beta1;

// Instantiates a client
const saasservicemgmtClient = new SaasRolloutsClient();

async function callListRollouts() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = saasservicemgmtClient.listRolloutsAsync(request);
  for await (const response of iterable) {
      console.log(response);
  }
}

callListRollouts();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-saasplatform-saasservicemgmt/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Saas_deployments.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_release.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.create_saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_saas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_saas.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.create_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_tenant.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.create_unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.create_unit_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.create_unit_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_operation.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_release.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_saas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_saas.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_tenant.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_unit_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.delete_unit_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_operation.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_release.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_saas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_saas.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_tenant.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_unit_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.get_unit_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_operation.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_releases.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_saas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_saas.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_tenants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_tenants.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_unit_kinds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_kinds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_kinds.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_unit_operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_operations.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.list_units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_units.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_units.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_release.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_saas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_saas.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_tenant.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_unit_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_deployments.update_unit_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_operation.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.create_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.create_rollout_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.delete_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.delete_rollout_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.get_rollout_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.list_rollout_kinds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollout_kinds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollout_kinds.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollouts.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.update_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Saas_rollouts.update_rollout_kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout_kind.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout_kind.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-saasplatform-saasservicemgmt/samples/quickstart.js,packages/google-cloud-saasplatform-saasservicemgmt/samples/README.md) |



The [SaaS Runtime API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/saasservicemgmt@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/saasservicemgmt/latest
[product-docs]: https://cloud.google.com/saas-runtime/docs/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=saasservicemgmt.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
