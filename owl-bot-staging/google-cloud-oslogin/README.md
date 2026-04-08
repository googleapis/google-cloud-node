[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud OS Login API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/os-login.svg)](https://www.npmjs.org/package/@google-cloud/os-login)

Cloud OS Login API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud OS Login API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/oslogin/latest)


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
1.  [Enable the Cloud OS Login API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/os-login
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.create_ssh_public_key.js) |
| delete posix account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_posix_account.js) |
| delete ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.delete_ssh_public_key.js) |
| get login profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_login_profile.js) |
| get ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.get_ssh_public_key.js) |
| import ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.import_ssh_public_key.js) |
| update ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/os_login_service.update_ssh_public_key.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1/snippet_metadata_google.cloud.oslogin.v1.json) |
| create ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.create_ssh_public_key.js) |
| delete posix account | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_posix_account.js) |
| delete ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.delete_ssh_public_key.js) |
| get login profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_login_profile.js) |
| get ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.get_ssh_public_key.js) |
| import ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.import_ssh_public_key.js) |
| sign ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.sign_ssh_public_key.js) |
| update ssh public key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/os_login_service.update_ssh_public_key.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples/generated/v1beta/snippet_metadata_google.cloud.oslogin.v1beta.json) |


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
For example, `npm install @google-cloud/os-login@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=oslogin.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oslogin
