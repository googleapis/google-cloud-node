[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Storage Control API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/storage-control.svg)](https://www.npmjs.org/package/@google-cloud/storage-control)

Storage Control API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Storage Control API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/control/latest)
* [Storage Control API Documentation](https://cloud.google.com/storage/docs/overview)

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
1.  [Enable the Storage Control API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/storage-control
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| storage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/snippet_metadata_google.storage.control.v2.json) |
| create anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.create_anywhere_cache.js) |
| create folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.create_folder.js) |
| create managed folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.create_managed_folder.js) |
| delete folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.delete_folder.js) |
| delete managed folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.delete_managed_folder.js) |
| disable anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.disable_anywhere_cache.js) |
| get anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_anywhere_cache.js) |
| get folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_folder.js) |
| get folder intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_folder_intelligence_config.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_iam_policy.js) |
| get managed folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_managed_folder.js) |
| get organization intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_organization_intelligence_config.js) |
| get project intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_project_intelligence_config.js) |
| get storage layout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.get_storage_layout.js) |
| list anywhere caches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.list_anywhere_caches.js) |
| list folders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.list_folders.js) |
| list managed folders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.list_managed_folders.js) |
| pause anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.pause_anywhere_cache.js) |
| rename folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.rename_folder.js) |
| resume anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.resume_anywhere_cache.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.test_iam_permissions.js) |
| update anywhere cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.update_anywhere_cache.js) |
| update folder intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.update_folder_intelligence_config.js) |
| update organization intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.update_organization_intelligence_config.js) |
| update project intelligence config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples/generated/v2/storage_control.update_project_intelligence_config.js) |


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
For example, `npm install @google-cloud/storage-control@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=storage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-storage-control
