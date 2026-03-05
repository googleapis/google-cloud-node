[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google BigQuery Storage: Node.js Client](https://github.com/googleapis/nodejs-bigquery-storage)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-storage.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-storage)




> Node.js idiomatic client for [BigQuery Storage](https://cloud.google.com/bigquery).

The BigQuery Storage product is divided into two major APIs: Write and Read API. 
BigQuery Storage API does not provide functionality related to managing BigQuery 
resources such as datasets, jobs, or tables.

The BigQuery Storage Write API is a unified data-ingestion API for BigQuery. 
It combines streaming ingestion and batch loading into a single high-performance API.
You can use the Storage Write API to stream records into BigQuery in real time or 
to batch process an arbitrarily large number of records and commit them in a single 
atomic operation. 

Read more in our [introduction guide](https://cloud.google.com/bigquery/docs/write-api).

Using a system provided default stream, this code sample demonstrates using the 
schema of a destination stream/table to construct a writer, and send several 
batches of row data to the table.

```javascript
const {adapt, managedwriter} = require('@google-cloud/bigquery-storage');
const {WriterClient, JSONWriter} = managedwriter;

async function appendJSONRowsDefaultStream() {      
  const projectId = 'my_project';
  const datasetId = 'my_dataset';
  const tableId = 'my_table';

  const destinationTable = `projects/${projectId}/datasets/${datasetId}/tables/${tableId}`;
  const writeClient = new WriterClient({projectId});

  try {
    const writeStream = await writeClient.getWriteStream({
      streamId: `${destinationTable}/streams/_default`,
      view: 'FULL'
    });
    const protoDescriptor = adapt.convertStorageSchemaToProto2Descriptor(
      writeStream.tableSchema,
      'root'
    );

    const connection = await writeClient.createStreamConnection({
      streamId: managedwriter.DefaultStream,
      destinationTable,
    });
    const streamId = connection.getStreamId();

    const writer = new JSONWriter({
      streamId,
      connection,
      protoDescriptor,
    });

    let rows = [];
    const pendingWrites = [];

    // Row 1
    let row = {
      row_num: 1,
      customer_name: 'Octavia',
    };
    rows.push(row);

    // Row 2
    row = {
      row_num: 2,
      customer_name: 'Turing',
    };
    rows.push(row);

    // Send batch.
    let pw = writer.appendRows(rows);
    pendingWrites.push(pw);

    rows = [];

    // Row 3
    row = {
      row_num: 3,
      customer_name: 'Bell',
    };
    rows.push(row);

    // Send batch.
    pw = writer.appendRows(rows);
    pendingWrites.push(pw);

    const results = await Promise.all(
      pendingWrites.map(pw => pw.getResult())
    );
    console.log('Write results:', results);
  } catch (err) {
    console.log(err);
  } finally {
    writeClient.close();
  }
}
```

The BigQuery Storage Read API provides fast access to BigQuery-managed storage by 
using an gRPC based protocol. When you use the Storage Read API, structured data is 
sent over the wire in a binary serialization format. This allows for additional 
parallelism among multiple consumers for a set of results.

Read more how to [use the BigQuery Storage Read API](https://cloud.google.com/bigquery/docs/reference/storage).

See sample code on the [Quickstart section](#quickstart).


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/CHANGELOG.md).

* [Google BigQuery Storage Node.js Client API Reference][client-docs]
* [Google BigQuery Storage Documentation][product-docs]
* [github.com/googleapis/nodejs-bigquery-storage](https://github.com/googleapis/nodejs-bigquery-storage)

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
1.  [Set up authentication][auth] so you can access the
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
            pos,
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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-bigquery-storage/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Append_rows_buffered | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_buffered.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_buffered.js,samples/README.md) |
| Append_rows_json_writer_committed | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_json_writer_committed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_json_writer_committed.js,samples/README.md) |
| Append_rows_json_writer_default | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_json_writer_default.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_json_writer_default.js,samples/README.md) |
| Append_rows_pending | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_pending.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_pending.js,samples/README.md) |
| Append_rows_proto2 | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_proto2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_proto2.js,samples/README.md) |
| Append_rows_table_to_proto2 | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/append_rows_table_to_proto2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/append_rows_table_to_proto2.js,samples/README.md) |
| Customer_record_pb | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/customer_record_pb.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/customer_record_pb.js,samples/README.md) |
| BigQuery Storage Quickstart | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Sample_data_pb | [source code](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/samples/sample_data_pb.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-bigquery-storage&page=editor&open_in_editor=samples/sample_data_pb.js,samples/README.md) |



The [Google BigQuery Storage Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-bigquery-storage/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigquery-storage/latest
[product-docs]: https://cloud.google.com/bigquery/docs/reference/storage
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerystorage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local