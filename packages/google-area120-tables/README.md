[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Area120 Tables API: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google/area120-tables.svg)](https://www.npmjs.org/package/@google/area120-tables)




Tables client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-area120-tables/CHANGELOG.md).

* [Area120 Tables API Node.js Client API Reference][client-docs]
* [Area120 Tables API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-area120-tables](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-area120-tables)

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
1.  [Enable the Area120 Tables API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google/area120-tables
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {TablesServiceClient} = require('@google/area120-tables');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new TablesServiceClient();

async function listTables() {
  const res = await client.listTables();
  console.log(res);
}

listTables();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Tables_service.batch_create_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_create_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_create_rows.js,samples/README.md) |
| Tables_service.batch_delete_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_delete_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_delete_rows.js,samples/README.md) |
| Tables_service.batch_update_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_update_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.batch_update_rows.js,samples/README.md) |
| Tables_service.create_row | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.create_row.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.create_row.js,samples/README.md) |
| Tables_service.delete_row | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.delete_row.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.delete_row.js,samples/README.md) |
| Tables_service.get_row | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_row.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_row.js,samples/README.md) |
| Tables_service.get_table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_table.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_table.js,samples/README.md) |
| Tables_service.get_workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_workspace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.get_workspace.js,samples/README.md) |
| Tables_service.list_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_rows.js,samples/README.md) |
| Tables_service.list_tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_tables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_tables.js,samples/README.md) |
| Tables_service.list_workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_workspaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.list_workspaces.js,samples/README.md) |
| Tables_service.update_row | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/generated/v1alpha1/tables_service.update_row.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/generated/v1alpha1/tables_service.update_row.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/quickstart.js,samples/README.md) |
| Quickstart.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-area120-tables/samples/test/quickstart.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-area120-tables/samples/test/quickstart.test.js,samples/README.md) |



The [Area120 Tables API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google/area120-tables@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/area120-tables/latest
[product-docs]: https://area120.google.com/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=area120tables.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
