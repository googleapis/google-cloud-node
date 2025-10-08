[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud SQL Admin API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/sql.svg)](https://www.npmjs.org/package/@google-cloud/sql)

Cloud SQL Admin API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud SQL Admin API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/sql/latest)


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
1.  [Enable the Cloud SQL Admin API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/sql
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/snippet_metadata_google.cloud.sql.v1.json) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_backup_runs_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_backup_runs_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_backup_runs_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_backup_runs_service.list.js) |
| generate ephemeral cert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_connect_service.generate_ephemeral_cert.js) |
| get connect settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_connect_service.get_connect_settings.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.list.js) |
| patch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.patch.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_databases_service.update.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_flags_service.list.js) |
| acquire ssrs lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.acquire_ssrs_lease.js) |
| add server ca | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.add_server_ca.js) |
| clone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.clone.js) |
| create ephemeral | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.create_ephemeral.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.delete.js) |
| demote | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.demote.js) |
| demote master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.demote_master.js) |
| export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.export.js) |
| failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.failover.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.get.js) |
| get disk shrink config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.get_disk_shrink_config.js) |
| get latest recovery time | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.get_latest_recovery_time.js) |
| import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.import.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.list.js) |
| list server cas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.list_server_cas.js) |
| patch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.patch.js) |
| perform disk shrink | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.perform_disk_shrink.js) |
| promote replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.promote_replica.js) |
| reencrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.reencrypt.js) |
| release ssrs lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.release_ssrs_lease.js) |
| reschedule maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.reschedule_maintenance.js) |
| reset replica size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.reset_replica_size.js) |
| reset ssl config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.reset_ssl_config.js) |
| restart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.restart.js) |
| restore backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.restore_backup.js) |
| rotate server ca | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.rotate_server_ca.js) |
| start external sync | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.start_external_sync.js) |
| start replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.start_replica.js) |
| stop replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.stop_replica.js) |
| switchover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.switchover.js) |
| truncate log | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.truncate_log.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.update.js) |
| verify external sync settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_instances_service.verify_external_sync_settings.js) |
| cancel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_operations_service.cancel.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_operations_service.get.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_operations_service.list.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_ssl_certs_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_ssl_certs_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_ssl_certs_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_ssl_certs_service.list.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_tiers_service.list.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_users_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_users_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_users_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_users_service.list.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1/sql_users_service.update.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/snippet_metadata_google.cloud.sql.v1beta4.json) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_backup_runs_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_backup_runs_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_backup_runs_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_backup_runs_service.list.js) |
| generate ephemeral cert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_connect_service.generate_ephemeral_cert.js) |
| get connect settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_connect_service.get_connect_settings.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.list.js) |
| patch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.patch.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_databases_service.update.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_flags_service.list.js) |
| acquire ssrs lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.acquire_ssrs_lease.js) |
| add server ca | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.add_server_ca.js) |
| clone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.clone.js) |
| create ephemeral | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.create_ephemeral.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.delete.js) |
| demote | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.demote.js) |
| demote master | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.demote_master.js) |
| export | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.export.js) |
| failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.failover.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.get.js) |
| get disk shrink config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.get_disk_shrink_config.js) |
| get latest recovery time | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.get_latest_recovery_time.js) |
| import | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.import.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.list.js) |
| list server cas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.list_server_cas.js) |
| patch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.patch.js) |
| perform disk shrink | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.perform_disk_shrink.js) |
| promote replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.promote_replica.js) |
| reencrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.reencrypt.js) |
| release ssrs lease | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.release_ssrs_lease.js) |
| reschedule maintenance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.reschedule_maintenance.js) |
| reset replica size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.reset_replica_size.js) |
| reset ssl config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.reset_ssl_config.js) |
| restart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.restart.js) |
| restore backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.restore_backup.js) |
| rotate server ca | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.rotate_server_ca.js) |
| start external sync | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.start_external_sync.js) |
| start replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.start_replica.js) |
| stop replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.stop_replica.js) |
| switchover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.switchover.js) |
| truncate log | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.truncate_log.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.update.js) |
| verify external sync settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_instances_service.verify_external_sync_settings.js) |
| cancel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_operations_service.cancel.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_operations_service.get.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_operations_service.list.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_ssl_certs_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_ssl_certs_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_ssl_certs_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_ssl_certs_service.list.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_tiers_service.list.js) |
| delete | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_users_service.delete.js) |
| get | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_users_service.get.js) |
| insert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_users_service.insert.js) |
| list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_users_service.list.js) |
| update | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples/generated/v1beta4/sql_users_service.update.js) |


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
For example, `npm install @google-cloud/sql@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=sqladmin.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-sql
