[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Composer API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/orchestration-airflow.svg)](https://www.npmjs.org/package/@google-cloud/orchestration-airflow)

Cloud Composer API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Composer API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/service/latest)


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
1.  [Enable the Cloud Composer API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/orchestration-airflow
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| check upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.check_upgrade.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_environment.js) |
| create user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_config_map.js) |
| create user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.create_user_workloads_secret.js) |
| database failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.database_failover.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_environment.js) |
| delete user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_config_map.js) |
| delete user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.delete_user_workloads_secret.js) |
| execute airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.execute_airflow_command.js) |
| fetch database properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.fetch_database_properties.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_environment.js) |
| get user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_config_map.js) |
| get user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.get_user_workloads_secret.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_environments.js) |
| list user workloads config maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_config_maps.js) |
| list user workloads secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_user_workloads_secrets.js) |
| list workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.list_workloads.js) |
| load snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.load_snapshot.js) |
| poll airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.poll_airflow_command.js) |
| save snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.save_snapshot.js) |
| stop airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.stop_airflow_command.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_environment.js) |
| update user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_config_map.js) |
| update user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/environments.update_user_workloads_secret.js) |
| list image versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/image_versions.list_image_versions.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1/snippet_metadata_google.cloud.orchestration.airflow.service.v1.json) |
| check upgrade | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.check_upgrade.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_environment.js) |
| create user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_config_map.js) |
| create user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.create_user_workloads_secret.js) |
| database failover | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.database_failover.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_environment.js) |
| delete user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_config_map.js) |
| delete user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.delete_user_workloads_secret.js) |
| execute airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.execute_airflow_command.js) |
| fetch database properties | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.fetch_database_properties.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_environment.js) |
| get user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_config_map.js) |
| get user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.get_user_workloads_secret.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_environments.js) |
| list user workloads config maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_config_maps.js) |
| list user workloads secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_user_workloads_secrets.js) |
| list workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.list_workloads.js) |
| load snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.load_snapshot.js) |
| poll airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.poll_airflow_command.js) |
| restart web server | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.restart_web_server.js) |
| save snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.save_snapshot.js) |
| stop airflow command | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.stop_airflow_command.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_environment.js) |
| update user workloads config map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_config_map.js) |
| update user workloads secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/environments.update_user_workloads_secret.js) |
| list image versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/image_versions.list_image_versions.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples/generated/v1beta1/snippet_metadata_google.cloud.orchestration.airflow.service.v1beta1.json) |


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
For example, `npm install @google-cloud/orchestration-airflow@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=composer.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orchestration-airflow-service
