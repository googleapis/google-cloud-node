[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [reCAPTCHA Enterprise API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/recaptcha-enterprise.svg)](https://www.npmjs.org/package/@google-cloud/recaptcha-enterprise)

reCAPTCHA Enterprise API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [reCAPTCHA Enterprise API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/recaptchaenterprise/latest)


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
1.  [Enable the reCAPTCHA Enterprise API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/recaptcha-enterprise
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| add ip override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.add_ip_override.js) |
| annotate assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.annotate_assessment.js) |
| create assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_assessment.js) |
| create firewall policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_firewall_policy.js) |
| create key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_key.js) |
| delete firewall policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_firewall_policy.js) |
| delete key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_key.js) |
| get firewall policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_firewall_policy.js) |
| get key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_key.js) |
| get metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_metrics.js) |
| list firewall policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_firewall_policies.js) |
| list ip overrides | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_ip_overrides.js) |
| list keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_keys.js) |
| list related account group memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_group_memberships.js) |
| list related account groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_groups.js) |
| migrate key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.migrate_key.js) |
| remove ip override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.remove_ip_override.js) |
| reorder firewall policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.reorder_firewall_policies.js) |
| retrieve legacy secret key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.retrieve_legacy_secret_key.js) |
| search related account group memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.search_related_account_group_memberships.js) |
| update firewall policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_firewall_policy.js) |
| update key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_key.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/snippet_metadata_google.cloud.recaptchaenterprise.v1.json) |
| annotate assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.annotate_assessment.js) |
| create assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.create_assessment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/snippet_metadata_google.cloud.recaptchaenterprise.v1beta1.json) |


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
For example, `npm install @google-cloud/recaptcha-enterprise@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=recaptchaenterprise.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise
