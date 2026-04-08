[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Managed Service for Apache Kafka API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/managedkafka-schemaregistry.svg)](https://www.npmjs.org/package/@google-cloud/managedkafka-schemaregistry)

Managed Service for Apache Kafka API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Managed Service for Apache Kafka API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/schemaregistry/latest)
* [Managed Service for Apache Kafka API Documentation](https://cloud.google.com/managed-service-for-apache-kafka/docs)

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
1.  [Enable the Managed Service for Apache Kafka API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/managedkafka-schemaregistry
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| check compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.check_compatibility.js) |
| create schema registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_schema_registry.js) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_version.js) |
| delete schema config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_config.js) |
| delete schema mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_mode.js) |
| delete schema registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_registry.js) |
| delete subject | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_subject.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_version.js) |
| get context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_context.js) |
| get raw schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema.js) |
| get raw schema version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema_version.js) |
| get schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema.js) |
| get schema config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_config.js) |
| get schema mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_mode.js) |
| get schema registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_registry.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_version.js) |
| list contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_contexts.js) |
| list referenced schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_referenced_schemas.js) |
| list schema registries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_registries.js) |
| list schema types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_types.js) |
| list schema versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_versions.js) |
| list subjects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects.js) |
| list subjects by schema id | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects_by_schema_id.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_versions.js) |
| lookup version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.lookup_version.js) |
| update schema config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_config.js) |
| update schema mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_mode.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/snippet_metadata_google.cloud.managedkafka.schemaregistry.v1.json) |


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
For example, `npm install @google-cloud/managedkafka-schemaregistry@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=managedkafka.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry
