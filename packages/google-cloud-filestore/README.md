[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Filestore API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/filestore.svg)](https://www.npmjs.org/package/@google-cloud/filestore)

Cloud Filestore API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Filestore API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/filestore/latest)


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
1.  [Enable the Cloud Filestore API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/filestore
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_backup.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_instance.js) |
| create snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.create_snapshot.js) |
| delete backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_backup.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_instance.js) |
| delete snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.delete_snapshot.js) |
| get backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_backup.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_instance.js) |
| get snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.get_snapshot.js) |
| list backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_backups.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_instances.js) |
| list snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.list_snapshots.js) |
| promote replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.promote_replica.js) |
| restore instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.restore_instance.js) |
| revert instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.revert_instance.js) |
| update backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_backup.js) |
| update instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_instance.js) |
| update snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/cloud_filestore_manager.update_snapshot.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1/snippet_metadata_google.cloud.filestore.v1.json) |
| create backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_backup.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_instance.js) |
| create share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_share.js) |
| create snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.create_snapshot.js) |
| delete backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_backup.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_instance.js) |
| delete share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_share.js) |
| delete snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.delete_snapshot.js) |
| get backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_backup.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_instance.js) |
| get share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_share.js) |
| get snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.get_snapshot.js) |
| list backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_backups.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_instances.js) |
| list shares | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_shares.js) |
| list snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.list_snapshots.js) |
| promote replica | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.promote_replica.js) |
| restore instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.restore_instance.js) |
| revert instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.revert_instance.js) |
| update backup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_backup.js) |
| update instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_instance.js) |
| update share | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_share.js) |
| update snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/cloud_filestore_manager.update_snapshot.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples/generated/v1beta1/snippet_metadata_google.cloud.filestore.v1beta1.json) |


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
For example, `npm install @google-cloud/filestore@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=file.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-filestore
