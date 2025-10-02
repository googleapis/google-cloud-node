[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Billing API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/billing.svg)](https://www.npmjs.org/package/@google-cloud/billing)

Cloud Billing API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Billing API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/billing/latest)


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
1.  [Enable the Cloud Billing API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/billing
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create billing account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.create_billing_account.js) |
| get billing account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.get_billing_account.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.get_iam_policy.js) |
| get project billing info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.get_project_billing_info.js) |
| list billing accounts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.list_billing_accounts.js) |
| list project billing info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.list_project_billing_info.js) |
| move billing account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.move_billing_account.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.test_iam_permissions.js) |
| update billing account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.update_billing_account.js) |
| update project billing info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_billing.update_project_billing_info.js) |
| list services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_catalog.list_services.js) |
| list skus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/cloud_catalog.list_skus.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples/generated/v1/snippet_metadata_google.cloud.billing.v1.json) |


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
For example, `npm install @google-cloud/billing@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudbilling.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-billing
