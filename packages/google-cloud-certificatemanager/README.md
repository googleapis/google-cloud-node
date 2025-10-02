[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Certificate Manager API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/certificate-manager.svg)](https://www.npmjs.org/package/@google-cloud/certificate-manager)

Certificate Manager API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Certificate Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/certificatemanager/latest)


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
1.  [Enable the Certificate Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/certificate-manager
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate.js) |
| create certificate issuance config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_issuance_config.js) |
| create certificate map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map.js) |
| create certificate map entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_certificate_map_entry.js) |
| create dns authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_dns_authorization.js) |
| create trust config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.create_trust_config.js) |
| delete certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate.js) |
| delete certificate issuance config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_issuance_config.js) |
| delete certificate map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map.js) |
| delete certificate map entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_certificate_map_entry.js) |
| delete dns authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_dns_authorization.js) |
| delete trust config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.delete_trust_config.js) |
| get certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate.js) |
| get certificate issuance config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_issuance_config.js) |
| get certificate map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map.js) |
| get certificate map entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_certificate_map_entry.js) |
| get dns authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_dns_authorization.js) |
| get trust config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.get_trust_config.js) |
| list certificate issuance configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_issuance_configs.js) |
| list certificate map entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_map_entries.js) |
| list certificate maps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificate_maps.js) |
| list certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_certificates.js) |
| list dns authorizations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_dns_authorizations.js) |
| list trust configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.list_trust_configs.js) |
| update certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate.js) |
| update certificate map | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map.js) |
| update certificate map entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_certificate_map_entry.js) |
| update dns authorization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_dns_authorization.js) |
| update trust config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/certificate_manager.update_trust_config.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples/generated/v1/snippet_metadata_google.cloud.certificatemanager.v1.json) |


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
For example, `npm install @google-cloud/certificate-manager@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=certificatemanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-certificatemanager
