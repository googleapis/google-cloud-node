[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Dataplex: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataplex)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataplex.svg)](https://www.npmjs.org/package/@google-cloud/dataplex)




dataplex client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataplex/CHANGELOG.md).

* [Cloud Dataplex Node.js Client API Reference][client-docs]
* [Cloud Dataplex Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-dataplex](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataplex)

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
1.  [Enable the Cloud Dataplex API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataplex
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// eslint-disable-next-line node/no-missing-require
const {DataplexServiceClient} = require('@google-cloud/dataplex');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'
// const location = 'my-location'

// Creates a client1046198160504
// eslint-disable-next-line no-unused-vars
const client = new DataplexServiceClient();

async function listLakes() {
  const [lakes] = await client.listLakes({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(lakes);
}
listLakes();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-dataplex/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Content_service.create_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.delete_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.get_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.list_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js,packages/google-cloud-dataplex/samples/README.md) |
| Content_service.update_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.create_data_scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.delete_data_scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.get_data_scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.get_data_scan_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.list_data_scan_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.list_data_scans | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.run_data_scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_scan_service.update_data_scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.create_data_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.create_data_attribute_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.create_data_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.delete_data_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.delete_data_attribute_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.delete_data_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.get_data_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.get_data_attribute_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.get_data_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.list_data_attribute_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.list_data_attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.list_data_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.update_data_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.update_data_attribute_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js,packages/google-cloud-dataplex/samples/README.md) |
| Data_taxonomy_service.update_data_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.cancel_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.create_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.create_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.create_lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.create_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.create_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.delete_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.delete_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.delete_lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.delete_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.delete_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.get_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_asset_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_lake_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_lakes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_zone_actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.list_zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.run_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.update_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.update_environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.update_lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.update_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js,packages/google-cloud-dataplex/samples/README.md) |
| Dataplex_service.update_zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.create_entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.create_partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.delete_entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.delete_partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.get_entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.get_partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.list_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.list_partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js,packages/google-cloud-dataplex/samples/README.md) |
| Metadata_service.update_entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js,packages/google-cloud-dataplex/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/quickstart.js,packages/google-cloud-dataplex/samples/README.md) |



The [Cloud Dataplex Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dataplex@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/dataplex
[product-docs]: https://cloud.google.com/dataplex/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataplex.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
