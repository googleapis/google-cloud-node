[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Backup and DR Service API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/backupdr.svg)](https://www.npmjs.org/package/@google-cloud/backupdr)

Backup and DR Service API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Backup and DR Service API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/backupdr/latest)
* [Backup and DR Service API Documentation](https://cloud.google.com/backup-disaster-recovery/docs/reference/rpc)

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
1.  [Enable the Backup and DR Service API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/backupdr
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create backup plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan.js) |
| create backup plan association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_plan_association.js) |
| create backup vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_backup_vault.js) |
| create management server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.create_management_server.js) |
| delete backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup.js) |
| delete backup plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan.js) |
| delete backup plan association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_plan_association.js) |
| delete backup vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_backup_vault.js) |
| delete management server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.delete_management_server.js) |
| fetch backup plan associations for resource type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_backup_plan_associations_for_resource_type.js) |
| fetch data source references for resource type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_data_source_references_for_resource_type.js) |
| fetch usable backup vaults | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.fetch_usable_backup_vaults.js) |
| get backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup.js) |
| get backup plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan.js) |
| get backup plan association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan_association.js) |
| get backup plan revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_plan_revision.js) |
| get backup vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_backup_vault.js) |
| get data source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_data_source.js) |
| get data source reference | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_data_source_reference.js) |
| get management server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.get_management_server.js) |
| initialize service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.initialize_service.js) |
| list backup plan associations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plan_associations.js) |
| list backup plan revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plan_revisions.js) |
| list backup plans | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_plans.js) |
| list backup vaults | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backup_vaults.js) |
| list backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_backups.js) |
| list data sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_data_sources.js) |
| list management servers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.list_management_servers.js) |
| restore backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.restore_backup.js) |
| trigger backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.trigger_backup.js) |
| update backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup.js) |
| update backup plan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup_plan.js) |
| update backup plan association | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup_plan_association.js) |
| update backup vault | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_backup_vault.js) |
| update data source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/backup_d_r.update_data_source.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples/generated/v1/snippet_metadata_google.cloud.backupdr.v1.json) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=backupdr.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-backupdr
