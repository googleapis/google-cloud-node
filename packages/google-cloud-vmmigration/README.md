[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [VM Migration API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/vmmigration.svg)](https://www.npmjs.org/package/@google-cloud/vmmigration)

VM Migration API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [VM Migration API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/vmmigration/latest)


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
1.  [Enable the VM Migration API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/vmmigration
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/snippet_metadata_google.cloud.vmmigration.v1.json) |
| add group migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.add_group_migration.js) |
| cancel clone job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_clone_job.js) |
| cancel cutover job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_cutover_job.js) |
| cancel disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_disk_migration_job.js) |
| cancel image import job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.cancel_image_import_job.js) |
| create clone job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_clone_job.js) |
| create cutover job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_cutover_job.js) |
| create datacenter connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_datacenter_connector.js) |
| create disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_disk_migration_job.js) |
| create group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_group.js) |
| create image import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_image_import.js) |
| create migrating vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_migrating_vm.js) |
| create source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_source.js) |
| create target project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_target_project.js) |
| create utilization report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.create_utilization_report.js) |
| delete datacenter connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_datacenter_connector.js) |
| delete disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_disk_migration_job.js) |
| delete group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_group.js) |
| delete image import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_image_import.js) |
| delete migrating vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_migrating_vm.js) |
| delete source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_source.js) |
| delete target project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_target_project.js) |
| delete utilization report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.delete_utilization_report.js) |
| extend migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.extend_migration.js) |
| fetch inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.fetch_inventory.js) |
| fetch storage inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.fetch_storage_inventory.js) |
| finalize migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.finalize_migration.js) |
| get clone job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_clone_job.js) |
| get cutover job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_cutover_job.js) |
| get datacenter connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_datacenter_connector.js) |
| get disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_disk_migration_job.js) |
| get group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_group.js) |
| get image import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_image_import.js) |
| get image import job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_image_import_job.js) |
| get migrating vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_migrating_vm.js) |
| get replication cycle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_replication_cycle.js) |
| get source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_source.js) |
| get target project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_target_project.js) |
| get utilization report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.get_utilization_report.js) |
| list clone jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_clone_jobs.js) |
| list cutover jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_cutover_jobs.js) |
| list datacenter connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_datacenter_connectors.js) |
| list disk migration jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_disk_migration_jobs.js) |
| list groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_groups.js) |
| list image import jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_image_import_jobs.js) |
| list image imports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_image_imports.js) |
| list migrating vms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_migrating_vms.js) |
| list replication cycles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_replication_cycles.js) |
| list sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_sources.js) |
| list target projects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_target_projects.js) |
| list utilization reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.list_utilization_reports.js) |
| pause migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.pause_migration.js) |
| remove group migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.remove_group_migration.js) |
| resume migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.resume_migration.js) |
| run disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.run_disk_migration_job.js) |
| start migration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.start_migration.js) |
| update disk migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_disk_migration_job.js) |
| update group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_group.js) |
| update migrating vm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_migrating_vm.js) |
| update source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_source.js) |
| update target project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.update_target_project.js) |
| upgrade appliance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples/generated/v1/vm_migration.upgrade_appliance.js) |


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
For example, `npm install @google-cloud/vmmigration@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vmmigration.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vmmigration
