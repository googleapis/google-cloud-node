[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Apigee Registry API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/apigee-registry.svg)](https://www.npmjs.org/package/@google-cloud/apigee-registry)

Apigee Registry API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Apigee Registry API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/apigeeregistry/latest)


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
1.  [Enable the Apigee Registry API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/apigee-registry
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.create_instance.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.delete_instance.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.get_instance.js) |
| create api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api.js) |
| create api deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_deployment.js) |
| create api spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_spec.js) |
| create api version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_version.js) |
| create artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_artifact.js) |
| delete api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api.js) |
| delete api deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment.js) |
| delete api deployment revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment_revision.js) |
| delete api spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec.js) |
| delete api spec revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec_revision.js) |
| delete api version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_version.js) |
| delete artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_artifact.js) |
| get api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api.js) |
| get api deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_deployment.js) |
| get api spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec.js) |
| get api spec contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec_contents.js) |
| get api version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_version.js) |
| get artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact.js) |
| get artifact contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact_contents.js) |
| list api deployment revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployment_revisions.js) |
| list api deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployments.js) |
| list api spec revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_spec_revisions.js) |
| list api specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_specs.js) |
| list api versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_versions.js) |
| list apis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_apis.js) |
| list artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_artifacts.js) |
| replace artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.replace_artifact.js) |
| rollback api deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_deployment.js) |
| rollback api spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_spec.js) |
| tag api deployment revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_deployment_revision.js) |
| tag api spec revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_spec_revision.js) |
| update api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api.js) |
| update api deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_deployment.js) |
| update api spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_spec.js) |
| update api version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_version.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/snippet_metadata_google.cloud.apigeeregistry.v1.json) |


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
For example, `npm install @google-cloud/apigee-registry@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=apigeeregistry.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry
