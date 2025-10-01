[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Parameter Manager API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/parametermanager.svg)](https://www.npmjs.org/package/@google-cloud/parametermanager)

Parameter Manager API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Parameter Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/parametermanager/latest)
* [Parameter Manager API Documentation](https://cloud.google.com/secret-manager/parameter-manager/docs/overview)

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
1.  [Enable the Parameter Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/parametermanager
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create parameter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.create_parameter.js) |
| create parameter version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.create_parameter_version.js) |
| delete parameter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.delete_parameter.js) |
| delete parameter version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.delete_parameter_version.js) |
| get parameter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.get_parameter.js) |
| get parameter version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.get_parameter_version.js) |
| list parameter versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.list_parameter_versions.js) |
| list parameters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.list_parameters.js) |
| render parameter version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.render_parameter_version.js) |
| update parameter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.update_parameter.js) |
| update parameter version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/parameter_manager.update_parameter_version.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples/generated/v1/snippet_metadata_google.cloud.parametermanager.v1.json) |


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
For example, `npm install @google-cloud/parametermanager@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=parametermanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-parametermanager
