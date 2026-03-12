[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Datastore: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/datastore)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datastore.svg)](https://www.npmjs.com/package/@google-cloud/datastore)




Cloud Datastore Client Library for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/datastore/CHANGELOG.md).

* [Google Cloud Datastore Node.js Client API Reference][client-docs]
* [Google Cloud Datastore Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/handwritten/datastore](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/datastore)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable the Google Cloud Datastore API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/datastore
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/datastore/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Datastore.allocate_ids | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.allocate_ids.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.allocate_ids.js,handwritten/datastore/samples/README.md) |
| Datastore.begin_transaction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.begin_transaction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.begin_transaction.js,handwritten/datastore/samples/README.md) |
| Datastore.commit | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.commit.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.commit.js,handwritten/datastore/samples/README.md) |
| Datastore.lookup | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.lookup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.lookup.js,handwritten/datastore/samples/README.md) |
| Datastore.reserve_ids | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.reserve_ids.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.reserve_ids.js,handwritten/datastore/samples/README.md) |
| Datastore.rollback | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.rollback.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.rollback.js,handwritten/datastore/samples/README.md) |
| Datastore.run_aggregation_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.run_aggregation_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.run_aggregation_query.js,handwritten/datastore/samples/README.md) |
| Datastore.run_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore.run_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore.run_query.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.create_index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.create_index.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.create_index.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.delete_index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.delete_index.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.delete_index.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.export_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.export_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.export_entities.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.get_index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.get_index.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.get_index.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.import_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.import_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.import_entities.js,handwritten/datastore/samples/README.md) |
| Datastore_admin.list_indexes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/datastore/samples/generated/v1/datastore_admin.list_indexes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/datastore/samples/generated/v1/datastore_admin.list_indexes.js,handwritten/datastore/samples/README.md) |



The [Google Cloud Datastore Node.js Client API Reference][client-docs] documentation
also contains samples.

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
For example, `npm install @google-cloud/datastore@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datastore/latest
[product-docs]: https://cloud.google.com/datastore/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datastore.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
