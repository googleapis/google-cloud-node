[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [OS Config API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/os-config.svg)](https://www.npmjs.org/package/@google-cloud/os-config)

OS Config API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [OS Config API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/osconfig/latest)


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
1.  [Enable the OS Config API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/os-config
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cancel patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js) |
| create patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js) |
| delete patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js) |
| execute patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js) |
| get patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js) |
| get patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js) |
| list patch deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js) |
| list patch job instance details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js) |
| list patch jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js) |
| pause patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js) |
| resume patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js) |
| update patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js) |
| create o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js) |
| delete o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js) |
| get inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js) |
| get o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js) |
| get o s policy assignment report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js) |
| get vulnerability report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js) |
| list inventories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js) |
| list o s policy assignment reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js) |
| list o s policy assignment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js) |
| list o s policy assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js) |
| list vulnerability reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js) |
| update o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/snippet_metadata_google.cloud.osconfig.v1.json) |
| create o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js) |
| delete o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js) |
| get instance o s policies compliance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js) |
| get inventory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js) |
| get o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js) |
| get o s policy assignment report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js) |
| get vulnerability report | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js) |
| list instance o s policies compliances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js) |
| list inventories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js) |
| list o s policy assignment reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js) |
| list o s policy assignment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js) |
| list o s policy assignments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js) |
| list vulnerability reports | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js) |
| update o s policy assignment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/snippet_metadata_google.cloud.osconfig.v1alpha.json) |
| cancel patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js) |
| create guest policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js) |
| create patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js) |
| delete guest policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js) |
| delete patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js) |
| execute patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js) |
| get guest policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js) |
| get patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js) |
| get patch job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js) |
| list guest policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js) |
| list patch deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js) |
| list patch job instance details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js) |
| list patch jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js) |
| lookup effective guest policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js) |
| pause patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js) |
| resume patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js) |
| update guest policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js) |
| update patch deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/snippet_metadata_google.cloud.osconfig.v1beta.json) |


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
For example, `npm install @google-cloud/os-config@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=osconfig.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig
