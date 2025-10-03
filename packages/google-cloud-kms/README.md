[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Key Management Service (KMS) API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/kms.svg)](https://www.npmjs.org/package/@google-cloud/kms)

Cloud Key Management Service (KMS) API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Key Management Service (KMS) API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/kms/latest)


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
1.  [Enable the Cloud Key Management Service (KMS) API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/kms
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create key handle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.create_key_handle.js) |
| get key handle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.get_key_handle.js) |
| list key handles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey.list_key_handles.js) |
| get autokey config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.get_autokey_config.js) |
| show effective autokey config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.show_effective_autokey_config.js) |
| update autokey config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/autokey_admin.update_autokey_config.js) |
| create ekm connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.create_ekm_connection.js) |
| get ekm config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_config.js) |
| get ekm connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.get_ekm_connection.js) |
| list ekm connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.list_ekm_connections.js) |
| update ekm config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_config.js) |
| update ekm connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.update_ekm_connection.js) |
| verify connectivity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/ekm_service.verify_connectivity.js) |
| asymmetric decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_decrypt.js) |
| asymmetric sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.asymmetric_sign.js) |
| create crypto key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key.js) |
| create crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_crypto_key_version.js) |
| create import job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_import_job.js) |
| create key ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.create_key_ring.js) |
| decapsulate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.decapsulate.js) |
| decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.decrypt.js) |
| destroy crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.destroy_crypto_key_version.js) |
| encrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.encrypt.js) |
| generate random bytes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.generate_random_bytes.js) |
| get crypto key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key.js) |
| get crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_crypto_key_version.js) |
| get import job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_import_job.js) |
| get key ring | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_key_ring.js) |
| get public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.get_public_key.js) |
| import crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.import_crypto_key_version.js) |
| list crypto key versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_key_versions.js) |
| list crypto keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_crypto_keys.js) |
| list import jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_import_jobs.js) |
| list key rings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.list_key_rings.js) |
| mac sign | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_sign.js) |
| mac verify | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.mac_verify.js) |
| raw decrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_decrypt.js) |
| raw encrypt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.raw_encrypt.js) |
| restore crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.restore_crypto_key_version.js) |
| update crypto key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key.js) |
| update crypto key primary version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_primary_version.js) |
| update crypto key version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/key_management_service.update_crypto_key_version.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples/generated/v1/snippet_metadata_google.cloud.kms.v1.json) |


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
For example, `npm install @google-cloud/kms@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudkms.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-kms
