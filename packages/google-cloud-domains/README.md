[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Domains API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/domains.svg)](https://www.npmjs.org/package/@google-cloud/domains)

Cloud Domains API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Domains API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/domains/latest)


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
1.  [Enable the Cloud Domains API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/domains
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| configure contact settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.configure_contact_settings.js) |
| configure dns settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.configure_dns_settings.js) |
| configure management settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.configure_management_settings.js) |
| delete registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.delete_registration.js) |
| export registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.export_registration.js) |
| get registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.get_registration.js) |
| list registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.list_registrations.js) |
| register domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.register_domain.js) |
| reset authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.reset_authorization_code.js) |
| retrieve authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.retrieve_authorization_code.js) |
| retrieve register parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.retrieve_register_parameters.js) |
| retrieve transfer parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.retrieve_transfer_parameters.js) |
| search domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.search_domains.js) |
| transfer domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.transfer_domain.js) |
| update registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1/domains.update_registration.js) |
| configure contact settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.configure_contact_settings.js) |
| configure dns settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.configure_dns_settings.js) |
| configure management settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.configure_management_settings.js) |
| delete registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.delete_registration.js) |
| export registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.export_registration.js) |
| get registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.get_registration.js) |
| list registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.list_registrations.js) |
| register domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.register_domain.js) |
| reset authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.reset_authorization_code.js) |
| retrieve authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.retrieve_authorization_code.js) |
| retrieve register parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.retrieve_register_parameters.js) |
| retrieve transfer parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.retrieve_transfer_parameters.js) |
| search domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.search_domains.js) |
| transfer domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.transfer_domain.js) |
| update registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1alpha2/domains.update_registration.js) |
| configure contact settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.configure_contact_settings.js) |
| configure dns settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.configure_dns_settings.js) |
| configure management settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.configure_management_settings.js) |
| delete registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.delete_registration.js) |
| export registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.export_registration.js) |
| get registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.get_registration.js) |
| list registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.list_registrations.js) |
| register domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.register_domain.js) |
| reset authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.reset_authorization_code.js) |
| retrieve authorization code | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.retrieve_authorization_code.js) |
| retrieve register parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.retrieve_register_parameters.js) |
| retrieve transfer parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.retrieve_transfer_parameters.js) |
| search domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.search_domains.js) |
| transfer domain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.transfer_domain.js) |
| update registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-domains/samples/generated/v1beta1/domains.update_registration.js) |


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
For example, `npm install @google-cloud/domains@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=domains.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-domains
