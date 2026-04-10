[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Database Migration API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/dms.svg)](https://www.npmjs.org/package/@google-cloud/dms)

Database Migration API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Database Migration API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/clouddms/latest)


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
1.  [Enable the Database Migration API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/dms
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| apply conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.apply_conversion_workspace.js) |
| commit conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.commit_conversion_workspace.js) |
| convert conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.convert_conversion_workspace.js) |
| create connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_connection_profile.js) |
| create conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_conversion_workspace.js) |
| create mapping rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_mapping_rule.js) |
| create migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_migration_job.js) |
| create private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.create_private_connection.js) |
| delete connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_connection_profile.js) |
| delete conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_conversion_workspace.js) |
| delete mapping rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_mapping_rule.js) |
| delete migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_migration_job.js) |
| delete private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.delete_private_connection.js) |
| describe conversion workspace revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_conversion_workspace_revisions.js) |
| describe database entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.describe_database_entities.js) |
| fetch static ips | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.fetch_static_ips.js) |
| generate ssh script | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_ssh_script.js) |
| generate tcp proxy script | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.generate_tcp_proxy_script.js) |
| get connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_connection_profile.js) |
| get conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_conversion_workspace.js) |
| get mapping rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_mapping_rule.js) |
| get migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_migration_job.js) |
| get private connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.get_private_connection.js) |
| import mapping rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.import_mapping_rules.js) |
| list connection profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_connection_profiles.js) |
| list conversion workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_conversion_workspaces.js) |
| list mapping rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_mapping_rules.js) |
| list migration jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_migration_jobs.js) |
| list private connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.list_private_connections.js) |
| promote migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.promote_migration_job.js) |
| restart migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.restart_migration_job.js) |
| resume migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.resume_migration_job.js) |
| rollback conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.rollback_conversion_workspace.js) |
| search background jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.search_background_jobs.js) |
| seed conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.seed_conversion_workspace.js) |
| start migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.start_migration_job.js) |
| stop migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.stop_migration_job.js) |
| update connection profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_connection_profile.js) |
| update conversion workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_conversion_workspace.js) |
| update migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.update_migration_job.js) |
| verify migration job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/data_migration_service.verify_migration_job.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples/generated/v1/snippet_metadata_google.cloud.clouddms.v1.json) |


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
For example, `npm install @google-cloud/dms@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datamigration.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-clouddms
