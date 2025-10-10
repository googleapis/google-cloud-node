[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Infrastructure Manager API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/config.svg)](https://www.npmjs.org/package/@google-cloud/config)

Infrastructure Manager API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Infrastructure Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/config/latest)
* [Infrastructure Manager API Documentation](https://cloud.google.com/infrastructure-manager/docs/overview)

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
1.  [Enable the Infrastructure Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/config
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.create_deployment.js) |
| create preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.create_preview.js) |
| delete deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_deployment.js) |
| delete preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_preview.js) |
| delete statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_statefile.js) |
| export deployment statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_deployment_statefile.js) |
| export lock info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_lock_info.js) |
| export preview result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_preview_result.js) |
| export revision statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_revision_statefile.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_deployment.js) |
| get preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_preview.js) |
| get resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_resource.js) |
| get resource change | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_resource_change.js) |
| get resource drift | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_resource_drift.js) |
| get revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_revision.js) |
| get terraform version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_terraform_version.js) |
| import statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.import_statefile.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_deployments.js) |
| list previews | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_previews.js) |
| list resource changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_resource_changes.js) |
| list resource drifts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_resource_drifts.js) |
| list resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_resources.js) |
| list revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_revisions.js) |
| list terraform versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_terraform_versions.js) |
| lock deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.lock_deployment.js) |
| unlock deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.unlock_deployment.js) |
| update deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.update_deployment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/snippet_metadata_google.cloud.config.v1.json) |


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
For example, `npm install @google-cloud/config@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=config.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config
