[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Notebooks API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/notebooks.svg)](https://www.npmjs.org/package/@google-cloud/notebooks)

Notebooks API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Notebooks API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/notebooks/latest)


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
1.  [Enable the Notebooks API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/notebooks
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js) |
| delete runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js) |
| diagnose runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js) |
| get runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js) |
| list runtimes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js) |
| refresh runtime token internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js) |
| report runtime event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js) |
| reset runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js) |
| start runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js) |
| stop runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js) |
| switch runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js) |
| update runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js) |
| upgrade runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js) |
| create execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js) |
| create schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js) |
| delete execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js) |
| delete schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js) |
| diagnose instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js) |
| get execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js) |
| get instance health | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js) |
| get schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js) |
| is instance upgradeable | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js) |
| list executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js) |
| list schedules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js) |
| register instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js) |
| report instance info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js) |
| reset instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js) |
| rollback instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js) |
| set instance accelerator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js) |
| set instance labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js) |
| set instance machine type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js) |
| start instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js) |
| stop instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js) |
| trigger schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js) |
| update instance config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js) |
| update instance metadata items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js) |
| update shielded instance config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js) |
| upgrade instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js) |
| upgrade instance internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/snippet_metadata_google.cloud.notebooks.v1.json) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js) |
| is instance upgradeable | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js) |
| register instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js) |
| report instance info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js) |
| reset instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js) |
| set instance accelerator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js) |
| set instance labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js) |
| set instance machine type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js) |
| start instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js) |
| stop instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js) |
| upgrade instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js) |
| upgrade instance internal | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/snippet_metadata_google.cloud.notebooks.v1beta1.json) |
| check instance upgradability | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js) |
| diagnose instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js) |
| reset instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js) |
| rollback instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js) |
| start instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js) |
| stop instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js) |
| update instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js) |
| upgrade instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/snippet_metadata_google.cloud.notebooks.v2.json) |


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
For example, `npm install @google-cloud/notebooks@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=notebooks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks
