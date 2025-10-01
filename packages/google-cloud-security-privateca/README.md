[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Certificate Authority API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/security-private-ca.svg)](https://www.npmjs.org/package/@google-cloud/security-private-ca)

Certificate Authority API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Certificate Authority API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/privateca/latest)


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
1.  [Enable the Certificate Authority API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/security-private-ca
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| activate certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.activate_certificate_authority.js) |
| create ca pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_ca_pool.js) |
| create certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate.js) |
| create certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_authority.js) |
| create certificate template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.create_certificate_template.js) |
| delete ca pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_ca_pool.js) |
| delete certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_authority.js) |
| delete certificate template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.delete_certificate_template.js) |
| disable certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.disable_certificate_authority.js) |
| enable certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.enable_certificate_authority.js) |
| fetch ca certs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_ca_certs.js) |
| fetch certificate authority csr | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.fetch_certificate_authority_csr.js) |
| get ca pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_ca_pool.js) |
| get certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate.js) |
| get certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_authority.js) |
| get certificate revocation list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_revocation_list.js) |
| get certificate template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.get_certificate_template.js) |
| list ca pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_ca_pools.js) |
| list certificate authorities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_authorities.js) |
| list certificate revocation lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_revocation_lists.js) |
| list certificate templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificate_templates.js) |
| list certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.list_certificates.js) |
| revoke certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.revoke_certificate.js) |
| undelete certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.undelete_certificate_authority.js) |
| update ca pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_ca_pool.js) |
| update certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate.js) |
| update certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_authority.js) |
| update certificate revocation list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_revocation_list.js) |
| update certificate template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/certificate_authority_service.update_certificate_template.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1/snippet_metadata_google.cloud.security.privateca.v1.json) |
| activate certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.activate_certificate_authority.js) |
| create certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate.js) |
| create certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.create_certificate_authority.js) |
| disable certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.disable_certificate_authority.js) |
| enable certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.enable_certificate_authority.js) |
| fetch certificate authority csr | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.fetch_certificate_authority_csr.js) |
| get certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate.js) |
| get certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_authority.js) |
| get certificate revocation list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_certificate_revocation_list.js) |
| get reusable config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.get_reusable_config.js) |
| list certificate authorities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_authorities.js) |
| list certificate revocation lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificate_revocation_lists.js) |
| list certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_certificates.js) |
| list reusable configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.list_reusable_configs.js) |
| restore certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.restore_certificate_authority.js) |
| revoke certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.revoke_certificate.js) |
| schedule delete certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.schedule_delete_certificate_authority.js) |
| update certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate.js) |
| update certificate authority | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_authority.js) |
| update certificate revocation list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/certificate_authority_service.update_certificate_revocation_list.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples/generated/v1beta1/snippet_metadata_google.cloud.security.privateca.v1beta1.json) |


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
For example, `npm install @google-cloud/security-private-ca@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=privateca.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-security-privateca
