[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Backup and DR Service API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-backupdr)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/backupdr.svg)](https://www.npmjs.org/package/@google-cloud/backupdr)




Backup and DR Service API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-backupdr/CHANGELOG.md).

* [Backup and DR Service API Node.js Client API Reference][client-docs]
* [Backup and DR Service API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-backupdr](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-backupdr)

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
1.  [Enable the Backup and DR Service API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/backupdr
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
 *  Required. The project and location for which to retrieve management servers
 *  information, in the format `projects/{project_id}/locations/{location}`. In
 *  Cloud BackupDR, locations map to GCP regions, for example **us-central1**.
 *  To retrieve management servers for all locations, use "-" for the
 *  `{location}` value.
 */
// const parent = 'abc123'
/**
 *  Optional. Requested page size. Server may return fewer items than
 *  requested. If unspecified, server will pick an appropriate default.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filtering results.
 */
// const filter = 'abc123'
/**
 *  Optional. Hint for how to order the results.
 */
// const orderBy = 'abc123'

// Imports the Backupdr library
const {BackupDRClient} = require('@google-cloud/backupdr').v1;

// Instantiates a client
const backupdrClient = new BackupDRClient();

async function callListManagementServers() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = backupdrClient.listManagementServersAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListManagementServers();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-backupdr/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Backup_d_r.abandon_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.abandon_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.abandon_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.create_backup_plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.create_backup_plan_association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan_association.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan_association.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.create_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_vault.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.create_management_server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_management_server.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_management_server.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.delete_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.delete_backup_plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.delete_backup_plan_association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan_association.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan_association.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.delete_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_vault.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.delete_management_server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_management_server.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_management_server.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.fetch_access_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_access_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_access_token.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.fetch_usable_backup_vaults | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_usable_backup_vaults.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_usable_backup_vaults.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.finalize_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.finalize_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.finalize_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_backup_plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_backup_plan_association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan_association.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan_association.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_vault.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_data_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_data_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_data_source.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.get_management_server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_management_server.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_management_server.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.initialize_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.initialize_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.initialize_service.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.initiate_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.initiate_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.initiate_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_backup_plan_associations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plan_associations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plan_associations.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_backup_plans | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plans.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plans.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_backup_vaults | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_vaults.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_vaults.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backups.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_data_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_data_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_data_sources.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.list_management_servers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_management_servers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_management_servers.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.remove_data_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.remove_data_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.remove_data_source.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.restore_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.restore_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.restore_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.set_internal_status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.set_internal_status.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.set_internal_status.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.test_iam_permissions.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.trigger_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.trigger_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.trigger_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.update_backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.update_backup_vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup_vault.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup_vault.js,packages/google-cloud-backupdr/samples/README.md) |
| Backup_d_r.update_data_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_data_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_data_source.js,packages/google-cloud-backupdr/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-backupdr/samples/quickstart.js,packages/google-cloud-backupdr/samples/README.md) |



The [Backup and DR Service API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/backupdr@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/backupdr/latest
[product-docs]: https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=backupdr.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
