[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Vector Search API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/vectorsearch.svg)](https://www.npmjs.org/package/@google-cloud/vectorsearch)

Vector Search API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Vector Search API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/vectorsearch/latest)
* [Vector Search API Documentation](https://docs.cloud.google.com/vertex-ai/docs/vector-search-2/overview)

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
1.  [Enable the Vector Search API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/vectorsearch
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| aggregate data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_search_service.aggregate_data_objects.js) |
| batch search data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_search_service.batch_search_data_objects.js) |
| query data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_search_service.query_data_objects.js) |
| search data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_search_service.search_data_objects.js) |
| batch create data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.batch_create_data_objects.js) |
| batch delete data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.batch_delete_data_objects.js) |
| batch update data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.batch_update_data_objects.js) |
| create data object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.create_data_object.js) |
| delete data object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.delete_data_object.js) |
| get data object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.get_data_object.js) |
| update data object | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/data_object_service.update_data_object.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/snippet_metadata_google.cloud.vectorsearch.v1beta.json) |
| create collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.create_collection.js) |
| create index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.create_index.js) |
| delete collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.delete_collection.js) |
| delete index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.delete_index.js) |
| get collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.get_collection.js) |
| get index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.get_index.js) |
| import data objects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.import_data_objects.js) |
| list collections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.list_collections.js) |
| list indexes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.list_indexes.js) |
| update collection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples/generated/v1beta/vector_search_service.update_collection.js) |


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
For example, `npm install @google-cloud/vectorsearch@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=vectorsearch.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-vectorsearch
