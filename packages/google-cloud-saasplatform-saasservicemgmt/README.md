[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [SaaS Runtime API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/saasservicemgmt.svg)](https://www.npmjs.org/package/@google-cloud/saasservicemgmt)

SaaS Runtime API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [SaaS Runtime API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/saasservicemgmt/latest)
* [SaaS Runtime API Documentation](https://cloud.google.com/saas-runtime/docs/overview)

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
1.  [Enable the SaaS Runtime API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/saasservicemgmt
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_release.js) |
| create saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_saas.js) |
| create tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_tenant.js) |
| create unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit.js) |
| create unit kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_kind.js) |
| create unit operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.create_unit_operation.js) |
| delete release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_release.js) |
| delete saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_saas.js) |
| delete tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_tenant.js) |
| delete unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit.js) |
| delete unit kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_kind.js) |
| delete unit operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.delete_unit_operation.js) |
| get release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_release.js) |
| get saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_saas.js) |
| get tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_tenant.js) |
| get unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit.js) |
| get unit kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_kind.js) |
| get unit operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.get_unit_operation.js) |
| list releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_releases.js) |
| list saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_saas.js) |
| list tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_tenants.js) |
| list unit kinds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_kinds.js) |
| list unit operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_unit_operations.js) |
| list units | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.list_units.js) |
| update release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_release.js) |
| update saas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_saas.js) |
| update tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_tenant.js) |
| update unit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit.js) |
| update unit kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_kind.js) |
| update unit operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_deployments.update_unit_operation.js) |
| create rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout.js) |
| create rollout kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.create_rollout_kind.js) |
| delete rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout.js) |
| delete rollout kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.delete_rollout_kind.js) |
| get rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout.js) |
| get rollout kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.get_rollout_kind.js) |
| list rollout kinds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollout_kinds.js) |
| list rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.list_rollouts.js) |
| update rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout.js) |
| update rollout kind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/saas_rollouts.update_rollout_kind.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples/generated/v1beta1/snippet_metadata_google.cloud.saasplatform.saasservicemgmt.v1beta1.json) |


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
For example, `npm install @google-cloud/saasservicemgmt@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=saasservicemgmt.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-saasplatform-saasservicemgmt
