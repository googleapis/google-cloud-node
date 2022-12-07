[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google BigQuery Storage: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-storage.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-storage)




Client for the BigQuery Storage API


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-storage/CHANGELOG.md).

* [Google BigQuery Storage Node.js Client API Reference][client-docs]
* [Google BigQuery Storage Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-bigquery-storage](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-storage)

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
1.  [Enable the Google BigQuery Storage API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigquery-storage
```


### Using the client library

```javascript

// The read stream contains blocks of Avro-encoded bytes. We use the
// 'avsc' library to decode these blocks. Install avsc with the following
// command: npm install avsc
const avro = require('avsc');

// See reference documentation at
// https://cloud.google.com/bigquery/docs/reference/storage
const {BigQueryReadClient} = require('@google-cloud/bigquery-storage');

const client = new BigQueryReadClient();

async function bigqueryStorageQuickstart() {
  // Get current project ID. The read session is created in this project.
  // This project can be different from that which contains the table.
  const myProjectId = await client.getProjectId();

  // This example reads baby name data from the public datasets.
  const projectId = 'bigquery-public-data';
  const datasetId = 'usa_names';
  const tableId = 'usa_1910_current';

  const tableReference = `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`;

  const parent = `projects/${myProjectId}`;

  /* We limit the output columns to a subset of those allowed in the table,
   * and set a simple filter to only report names from the state of
   * Washington (WA).
   */
  const readOptions = {
    selectedFields: ['name', 'number', 'state'],
    rowRestriction: 'state = "WA"',
  };

  let tableModifiers = null;
  const snapshotSeconds = 0;

  // Set a snapshot time if it's been specified.
  if (snapshotSeconds > 0) {
    tableModifiers = {snapshotTime: {seconds: snapshotSeconds}};
  }

  // API request.
  const request = {
    parent,
    readSession: {
      table: tableReference,
      // This API can also deliver data serialized in Apache Arrow format.
      // This example leverages Apache Avro.
      dataFormat: 'AVRO',
      readOptions,
      tableModifiers,
    },
  };

  const [session] = await client.createReadSession(request);

  const schema = JSON.parse(session.avroSchema.schema);

  const avroType = avro.Type.forSchema(schema);

  /* The offset requested must be less than the last
   * row read from ReadRows. Requesting a larger offset is
   * undefined.
   */
  let offset = 0;

  const readRowsRequest = {
    // Required stream name and optional offset. Offset requested must be less than
    // the last row read from readRows(). Requesting a larger offset is undefined.
    readStream: session.streams[0].name,
    offset,
  };

  const names = new Set();
  const states = [];

  /* We'll use only a single stream for reading data from the table. Because
   * of dynamic sharding, this will yield all the rows in the table. However,
   * if you wanted to fan out multiple readers you could do so by having a
   * reader process each individual stream.
   */
  client
    .readRows(readRowsRequest)
    .on('error', console.error)
    .on('data', data => {
      offset = data.avroRows.serializedBinaryRows.offset;

      try {
        // Decode all rows in buffer
        let pos;
        do {
          const decodedData = avroType.decode(
            data.avroRows.serializedBinaryRows,
            pos
          );

          if (decodedData.value) {
            names.add(decodedData.value.name);

            if (!states.includes(decodedData.value.state)) {
              states.push(decodedData.value.state);
            }
          }

          pos = decodedData.offset;
        } while (pos > 0);
      } catch (error) {
        console.log(error);
      }
    })
    .on('end', () => {
      console.log(`Got ${names.size} unique names in states: ${states}`);
      console.log(`Last offset: ${offset}`);
    });
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Big_query_read.create_read_session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.create_read_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.create_read_session.js,samples/README.md) |
| Big_query_read.read_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.read_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.read_rows.js,samples/README.md) |
| Big_query_read.split_read_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.split_read_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_read.split_read_stream.js,samples/README.md) |
| Big_query_write.append_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.append_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.append_rows.js,samples/README.md) |
| Big_query_write.batch_commit_write_streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.batch_commit_write_streams.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.batch_commit_write_streams.js,samples/README.md) |
| Big_query_write.create_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.create_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.create_write_stream.js,samples/README.md) |
| Big_query_write.finalize_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.finalize_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.finalize_write_stream.js,samples/README.md) |
| Big_query_write.flush_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.flush_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.flush_rows.js,samples/README.md) |
| Big_query_write.get_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.get_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1/big_query_write.get_write_stream.js,samples/README.md) |
| Big_query_storage.batch_create_read_session_streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.batch_create_read_session_streams.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.batch_create_read_session_streams.js,samples/README.md) |
| Big_query_storage.create_read_session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.create_read_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.create_read_session.js,samples/README.md) |
| Big_query_storage.finalize_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.finalize_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.finalize_stream.js,samples/README.md) |
| Big_query_storage.read_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.read_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.read_rows.js,samples/README.md) |
| Big_query_storage.split_read_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.split_read_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta1/big_query_storage.split_read_stream.js,samples/README.md) |
| Big_query_read.create_read_session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.create_read_session.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.create_read_session.js,samples/README.md) |
| Big_query_read.read_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.read_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.read_rows.js,samples/README.md) |
| Big_query_read.split_read_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.split_read_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_read.split_read_stream.js,samples/README.md) |
| Big_query_write.append_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.append_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.append_rows.js,samples/README.md) |
| Big_query_write.batch_commit_write_streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.batch_commit_write_streams.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.batch_commit_write_streams.js,samples/README.md) |
| Big_query_write.create_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.create_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.create_write_stream.js,samples/README.md) |
| Big_query_write.finalize_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.finalize_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.finalize_write_stream.js,samples/README.md) |
| Big_query_write.flush_rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.flush_rows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.flush_rows.js,samples/README.md) |
| Big_query_write.get_write_stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.get_write_stream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/generated/v1beta2/big_query_write.get_write_stream.js,samples/README.md) |
| BigQuery Storage Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-storage/samples/test/quickstart.js,samples/README.md) |



The [Google BigQuery Storage Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bigquery-storage@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigquery-storage/latest
[product-docs]: https://cloud.google.com/bigquery/docs/reference/storage
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerystorage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
