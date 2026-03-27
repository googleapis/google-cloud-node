[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Bigtable: Node.js Client](https://github.com/googleapis/nodejs-bigtable)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigtable.svg)](https://www.npmjs.com/package/@google-cloud/bigtable)




Cloud Bigtable Client Library for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-bigtable/blob/main/CHANGELOG.md).

* [Cloud Bigtable Node.js Client API Reference][client-docs]
* [Cloud Bigtable Documentation][product-docs]
* [github.com/googleapis/nodejs-bigtable](https://github.com/googleapis/nodejs-bigtable)

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
1.  [Enable the Cloud Bigtable API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigtable
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {Bigtable} = require('@google-cloud/bigtable');

const bigtable = new Bigtable();

async function quickstart() {
  // Connect to an existing instance:my-bigtable-instance
  const instance = bigtable.instance(INSTANCE_ID);

  // Connect to an existing table:my-table
  const table = instance.table(TABLE_ID);

  // Read a row from my-table using a row key
  const [singleRow] = await table.row('r1').get();

  // Print the row key and data (column value, labels, timestamp)
  const rowData = JSON.stringify(singleRow.data, null, 4);
  console.log(`Row key: ${singleRow.id}\nData: ${rowData}`);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-bigtable/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Delete Snippets | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/deleteSnippets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/deleteSnippets.js,samples/README.md) |
| Filter Snippets | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/filterSnippets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/filterSnippets.js,samples/README.md) |
| Instances | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/instances.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Read Snippets | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/readSnippets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/readSnippets.js,samples/README.md) |
| Tableadmin | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/tableadmin.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/tableadmin.js,samples/README.md) |
| Write Batch | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/writeBatch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/writeBatch.js,samples/README.md) |
| Write Conditionally | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/writeConditionally.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/writeConditionally.js,samples/README.md) |
| Write Increment | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/writeIncrement.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/writeIncrement.js,samples/README.md) |
| Simple Insert | [source code](https://github.com/googleapis/nodejs-bigtable/blob/main/samples/writeSimple.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigtable&page=editor&open_in_editor=samples/writeSimple.js,samples/README.md) |



The [Cloud Bigtable Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bigtable@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-bigtable/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-bigtable/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigtable/latest
[product-docs]: https://cloud.google.com/bigtable
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigtable.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
