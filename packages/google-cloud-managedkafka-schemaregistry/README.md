[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Managed Service for Apache Kafka API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka-schemaregistry)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/managedkafka-schemaregistry.svg)](https://www.npmjs.org/package/@google-cloud/managedkafka-schemaregistry)




Managed Service for Apache Kafka API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka-schemaregistry/CHANGELOG.md).

* [Managed Service for Apache Kafka API Node.js Client API Reference][client-docs]
* [Managed Service for Apache Kafka API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-managedkafka-schemaregistry](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka-schemaregistry)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
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


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The schema whose schema versions are to be listed. Structured
 *  like:
 *  `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/schemas/ids/{schema}`
 *  or
 *  `projects/{project}/locations/{location}/schemaRegistries/{schema_registry}/contexts/{context}/schemas/ids/{schema}`
 */
// const parent = 'abc123'
/**
 *  Optional. The subject to filter the subjects by.
 */
// const subject = 'abc123'
/**
 *  Optional. If true, the response will include soft-deleted versions of the
 *  schema, even if the subject is soft-deleted. The default is false.
 */
// const deleted = true

// Imports the Schemaregistry library
const {ManagedSchemaRegistryClient} = require('@google-cloud/managedkafka-schemaregistry').v1;

// Instantiates a client
const schemaregistryClient = new ManagedSchemaRegistryClient();

async function callListSchemaVersions() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const response = await schemaregistryClient.listSchemaVersions(request);
  console.log(response);
}

callListSchemaVersions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-managedkafka-schemaregistry/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Managed_schema_registry.check_compatibility | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.check_compatibility.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.check_compatibility.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.create_schema_registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_schema_registry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_schema_registry.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.create_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.create_version.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.delete_schema_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_config.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.delete_schema_mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_mode.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_mode.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.delete_schema_registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_registry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_schema_registry.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.delete_subject | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_subject.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_subject.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.delete_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.delete_version.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_context.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_context.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_raw_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_raw_schema_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_raw_schema_version.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_schema_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_config.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_schema_mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_mode.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_mode.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_schema_registry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_registry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_schema_registry.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.get_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.get_version.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_contexts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_contexts.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_referenced_schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_referenced_schemas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_referenced_schemas.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_schema_registries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_registries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_registries.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_schema_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_types.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_schema_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_schema_versions.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_subjects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_subjects_by_schema_id | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects_by_schema_id.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_subjects_by_schema_id.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.list_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.list_versions.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.lookup_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.lookup_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.lookup_version.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.update_schema_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_config.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Managed_schema_registry.update_schema_mode | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_mode.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/generated/v1/managed_schema_registry.update_schema_mode.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-managedkafka-schemaregistry/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-managedkafka-schemaregistry/samples/quickstart.js,packages/google-cloud-managedkafka-schemaregistry/samples/README.md) |



The [Managed Service for Apache Kafka API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/managedkafka-schemaregistry@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/managedkafka/latest
[product-docs]: https://cloud.google.com/managed-service-for-apache-kafka/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=managedkafka.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
