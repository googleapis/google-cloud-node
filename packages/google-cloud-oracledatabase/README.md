[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Oracle Database@Google Cloud API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-oracledatabase)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/oracledatabase.svg)](https://www.npmjs.org/package/@google-cloud/oracledatabase)




Oracle Database@Google Cloud API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-oracledatabase/CHANGELOG.md).

* [Oracle Database@Google Cloud API Node.js Client API Reference][client-docs]
* [Oracle Database@Google Cloud API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-oracledatabase](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-oracledatabase)

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
1.  [Enable the Oracle Database@Google Cloud API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/oracledatabase
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
 *  Required. The parent value for the Autonomous Database in the following
 *  format: projects/{project}/locations/{location}.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of items to return.
 *  If unspecified, at most 50 Autonomous Database will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 */
// const pageToken = 'abc123'
/**
 *  Optional. An expression for filtering the results of the request.
 */
// const filter = 'abc123'
/**
 *  Optional. An expression for ordering the results of the request.
 */
// const orderBy = 'abc123'

// Imports the Oracledatabase library
const {OracleDatabaseClient} = require('@google-cloud/oracledatabase').v1;

// Instantiates a client
const oracledatabaseClient = new OracleDatabaseClient({fallback: true});

async function callListAutonomousDatabases() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = oracledatabaseClient.listAutonomousDatabasesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListAutonomousDatabases();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-oracledatabase/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Oracle_database.create_autonomous_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_autonomous_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_autonomous_database.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.create_cloud_exadata_infrastructure | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_cloud_exadata_infrastructure.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_cloud_exadata_infrastructure.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.create_cloud_vm_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_cloud_vm_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.create_cloud_vm_cluster.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.delete_autonomous_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_autonomous_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_autonomous_database.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.delete_cloud_exadata_infrastructure | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_cloud_exadata_infrastructure.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_cloud_exadata_infrastructure.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.delete_cloud_vm_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_cloud_vm_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.delete_cloud_vm_cluster.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.generate_autonomous_database_wallet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.generate_autonomous_database_wallet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.generate_autonomous_database_wallet.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.get_autonomous_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_autonomous_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_autonomous_database.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.get_cloud_exadata_infrastructure | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_cloud_exadata_infrastructure.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_cloud_exadata_infrastructure.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.get_cloud_vm_cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_cloud_vm_cluster.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.get_cloud_vm_cluster.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_autonomous_database_backups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_database_backups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_database_backups.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_autonomous_database_character_sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_database_character_sets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_database_character_sets.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_autonomous_databases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_databases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_databases.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_autonomous_db_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_db_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_autonomous_db_versions.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_cloud_exadata_infrastructures | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_cloud_exadata_infrastructures.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_cloud_exadata_infrastructures.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_cloud_vm_clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_cloud_vm_clusters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_cloud_vm_clusters.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_db_nodes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_nodes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_nodes.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_db_servers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_servers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_servers.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_db_system_shapes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_system_shapes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_db_system_shapes.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_entitlements | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_entitlements.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_entitlements.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.list_gi_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_gi_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.list_gi_versions.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Oracle_database.restore_autonomous_database | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.restore_autonomous_database.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/generated/v1/oracle_database.restore_autonomous_database.js,packages/google-cloud-oracledatabase/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-oracledatabase/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-oracledatabase/samples/quickstart.js,packages/google-cloud-oracledatabase/samples/README.md) |



The [Oracle Database@Google Cloud API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/oracledatabase@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/oracledatabase/latest
[product-docs]: https://cloud.google.com/oracle/database/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=oracledatabase.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
