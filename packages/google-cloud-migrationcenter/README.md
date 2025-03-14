[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Migration Center API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-migrationcenter)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/migrationcenter.svg)](https://www.npmjs.org/package/@google-cloud/migrationcenter)




Migration Center API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-migrationcenter/CHANGELOG.md).

* [Migration Center API Node.js Client API Reference][client-docs]
* [Migration Center API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-migrationcenter](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-migrationcenter)

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
1.  [Enable the Migration Center API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/migrationcenter
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
 *  Required. Parent value for `ListSourcesRequest`.
 */
// const parent = 'abc123'
/**
 *  Requested page size. The server may return fewer items than requested.
 *  If unspecified, the server will pick an appropriate default value.
 */
// const pageSize = 1234
/**
 *  A token identifying a page of results that the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Filtering results.
 */
// const filter = 'abc123'
/**
 *  Field to sort by. See https://google.aip.dev/132#ordering for more details.
 */
// const orderBy = 'abc123'

// Imports the Migrationcenter library
const {MigrationCenterClient} = require('@google-cloud/migrationcenter').v1;

// Instantiates a client
const migrationcenterClient = new MigrationCenterClient();

async function callListSources() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await migrationcenterClient.listSourcesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListSources();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-migrationcenter/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Migration_center.add_assets_to_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.add_assets_to_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.add_assets_to_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.aggregate_assets_values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.aggregate_assets_values.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.aggregate_assets_values.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.batch_delete_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.batch_delete_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.batch_delete_assets.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.batch_update_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.batch_update_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.batch_update_assets.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_import_data_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_import_data_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_import_data_file.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_preference_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_preference_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_preference_set.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_report.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_report_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_report_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_report_config.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.create_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.create_source.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_asset.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_import_data_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_import_data_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_import_data_file.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_preference_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_preference_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_preference_set.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_report.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_report_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_report_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_report_config.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.delete_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.delete_source.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_asset.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_error_frame | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_error_frame.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_error_frame.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_import_data_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_import_data_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_import_data_file.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_preference_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_preference_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_preference_set.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_report.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_report.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_report_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_report_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_report_config.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_settings.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.get_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.get_source.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_assets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_assets.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_error_frames | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_error_frames.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_error_frames.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_groups.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_import_data_files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_import_data_files.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_import_data_files.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_import_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_import_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_import_jobs.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_preference_sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_preference_sets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_preference_sets.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_report_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_report_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_report_configs.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_reports.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_reports.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.list_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.list_sources.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.remove_assets_from_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.remove_assets_from_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.remove_assets_from_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.report_asset_frames | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.report_asset_frames.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.report_asset_frames.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.run_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.run_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.run_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_asset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_asset.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_group.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_preference_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_preference_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_preference_set.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_settings.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.update_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.update_source.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Migration_center.validate_import_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.validate_import_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/generated/v1/migration_center.validate_import_job.js,packages/google-cloud-migrationcenter/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-migrationcenter/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-migrationcenter/samples/quickstart.js,packages/google-cloud-migrationcenter/samples/README.md) |



The [Migration Center API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/migrationcenter@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/migrationcenter/latest
[product-docs]: https://cloud.google.com/migration-center/docs/migration-center-overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=migrationcenter.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
