[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Config Delivery API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/configdelivery.svg)](https://www.npmjs.org/package/@google-cloud/configdelivery)

Config Delivery API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Config Delivery API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/configdelivery/latest)
* [Config Delivery API Documentation](https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/concepts/fleet-packages)

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
1.  [Enable the Config Delivery API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/configdelivery
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| abort rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.abort_rollout.js) |
| create fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_fleet_package.js) |
| create release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_release.js) |
| create resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_resource_bundle.js) |
| create variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.create_variant.js) |
| delete fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_fleet_package.js) |
| delete release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_release.js) |
| delete resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_resource_bundle.js) |
| delete variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.delete_variant.js) |
| get fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_fleet_package.js) |
| get release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_release.js) |
| get resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_resource_bundle.js) |
| get rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_rollout.js) |
| get variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.get_variant.js) |
| list fleet packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_fleet_packages.js) |
| list releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_releases.js) |
| list resource bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_resource_bundles.js) |
| list rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_rollouts.js) |
| list variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.list_variants.js) |
| resume rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.resume_rollout.js) |
| suspend rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.suspend_rollout.js) |
| update fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_fleet_package.js) |
| update release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_release.js) |
| update resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_resource_bundle.js) |
| update variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/config_delivery.update_variant.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1/snippet_metadata_google.cloud.configdelivery.v1.json) |
| abort rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.abort_rollout.js) |
| create fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_fleet_package.js) |
| create release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_release.js) |
| create resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_resource_bundle.js) |
| create variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.create_variant.js) |
| delete fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_fleet_package.js) |
| delete release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_release.js) |
| delete resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_resource_bundle.js) |
| delete variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.delete_variant.js) |
| get fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_fleet_package.js) |
| get release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_release.js) |
| get resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_resource_bundle.js) |
| get rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_rollout.js) |
| get variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.get_variant.js) |
| list fleet packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_fleet_packages.js) |
| list releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_releases.js) |
| list resource bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_resource_bundles.js) |
| list rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_rollouts.js) |
| list variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.list_variants.js) |
| resume rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.resume_rollout.js) |
| suspend rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.suspend_rollout.js) |
| update fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_fleet_package.js) |
| update release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_release.js) |
| update resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_resource_bundle.js) |
| update variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/config_delivery.update_variant.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1alpha/snippet_metadata_google.cloud.configdelivery.v1alpha.json) |
| abort rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.abort_rollout.js) |
| create fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_fleet_package.js) |
| create release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_release.js) |
| create resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_resource_bundle.js) |
| create variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.create_variant.js) |
| delete fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_fleet_package.js) |
| delete release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_release.js) |
| delete resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_resource_bundle.js) |
| delete variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.delete_variant.js) |
| get fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_fleet_package.js) |
| get release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_release.js) |
| get resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_resource_bundle.js) |
| get rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_rollout.js) |
| get variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.get_variant.js) |
| list fleet packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_fleet_packages.js) |
| list releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_releases.js) |
| list resource bundles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_resource_bundles.js) |
| list rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_rollouts.js) |
| list variants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.list_variants.js) |
| resume rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.resume_rollout.js) |
| suspend rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.suspend_rollout.js) |
| update fleet package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_fleet_package.js) |
| update release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_release.js) |
| update resource bundle | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_resource_bundle.js) |
| update variant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/config_delivery.update_variant.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples/generated/v1beta/snippet_metadata_google.cloud.configdelivery.v1beta.json) |


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
For example, `npm install @google-cloud/configdelivery@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=configdelivery.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-configdelivery
