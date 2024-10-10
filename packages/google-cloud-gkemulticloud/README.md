[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Anthos Multi-Cloud API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkemulticloud)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/gkemulticloud.svg)](https://www.npmjs.org/package/@google-cloud/gkemulticloud)




Anthos Multi-Cloud API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkemulticloud/CHANGELOG.md).

* [Anthos Multi-Cloud API Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-cloud-gkemulticloud](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkemulticloud)

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
1.  [Enable the Anthos Multi-Cloud API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/gkemulticloud
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
 *  Required. The parent location which owns this collection of
 *  AwsCluster google.cloud.gkemulticloud.v1.AwsCluster  resources.
 *  Location names are formatted as `projects/<project-id>/locations/<region>`.
 *  See Resource Names (https://cloud.google.com/apis/design/resource_names)
 *  for more details on GCP resource names.
 */
// const parent = 'abc123'
/**
 *  The maximum number of items to return.
 *  If not specified, a default value of 50 will be used by the service.
 *  Regardless of the pageSize value, the response can include a partial list
 *  and a caller should only rely on response's
 *  nextPageToken google.cloud.gkemulticloud.v1.ListAwsClustersResponse.next_page_token  to determine if
 *  there are more instances left to be queried.
 */
// const pageSize = 1234
/**
 *  The `nextPageToken` value returned from a previous
 *  awsClusters.list google.cloud.gkemulticloud.v1.AwsClusters.ListAwsClusters  request, if any.
 */
// const pageToken = 'abc123'

// Imports the Gkemulticloud library
const {AwsClustersClient} = require('@google-cloud/gkemulticloud').v1;

// Instantiates a client
const gkemulticloudClient = new AwsClustersClient({
  // API endpoint must be set:
  apiEndpoint: 'us-west1-gkemulticloud.googleapis.com',
});

async function callListAwsClusters() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await gkemulticloudClient.listAwsClustersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListAwsClusters();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-gkemulticloud/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Attached_clusters.create_attached_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.create_attached_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.create_attached_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.delete_attached_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.delete_attached_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.delete_attached_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.generate_attached_cluster_agent_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_agent_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_agent_token.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.generate_attached_cluster_install_manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_install_manifest.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.generate_attached_cluster_install_manifest.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.get_attached_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.get_attached_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.get_attached_server_config.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.import_attached_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.import_attached_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.import_attached_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.list_attached_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.list_attached_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.list_attached_clusters.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Attached_clusters.update_attached_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.update_attached_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/attached_clusters.update_attached_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.create_aws_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.create_aws_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.create_aws_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.delete_aws_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.delete_aws_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.delete_aws_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.generate_aws_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_access_token.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.generate_aws_cluster_agent_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_cluster_agent_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.generate_aws_cluster_agent_token.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.get_aws_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.get_aws_json_web_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_json_web_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_json_web_keys.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.get_aws_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.get_aws_open_id_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_open_id_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_open_id_config.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.get_aws_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.get_aws_server_config.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.list_aws_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_clusters.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.list_aws_node_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_node_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.list_aws_node_pools.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.rollback_aws_node_pool_update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.rollback_aws_node_pool_update.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.rollback_aws_node_pool_update.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.update_aws_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Aws_clusters.update_aws_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/aws_clusters.update_aws_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.create_azure_client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_client.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.create_azure_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.create_azure_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.create_azure_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.delete_azure_client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_client.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.delete_azure_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.delete_azure_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.delete_azure_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.generate_azure_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_access_token.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.generate_azure_cluster_agent_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_cluster_agent_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.generate_azure_cluster_agent_token.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_client | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_client.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_json_web_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_json_web_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_json_web_keys.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_open_id_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_open_id_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_open_id_config.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.get_azure_server_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_server_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.get_azure_server_config.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.list_azure_clients | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clients.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clients.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.list_azure_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_clusters.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.list_azure_node_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_node_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.list_azure_node_pools.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.update_azure_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_cluster.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Azure_clusters.update_azure_node_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_node_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/generated/v1/azure_clusters.update_azure_node_pool.js,packages/google-cloud-gkemulticloud/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkemulticloud/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-gkemulticloud/samples/quickstart.js,packages/google-cloud-gkemulticloud/samples/README.md) |



The [Anthos Multi-Cloud API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/gkemulticloud@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/gkemulticloud/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gkemulticloud.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
