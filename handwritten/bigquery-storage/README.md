[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [BigQuery Storage API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-storage.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-storage)

BigQuery Storage API client for Node.js

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
[the CHANGELOG][homepage_changelog].

* [BigQuery Storage API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/storage/latest)
* [BigQuery Storage API Documentation](https://cloud.google.com/bigquery/docs/reference/storage/)

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
1.  [Enable the BigQuery Storage API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/bigquery-storage
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create read session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_read.create_read_session.js) |
| read rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_read.read_rows.js) |
| split read stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_read.split_read_stream.js) |
| append rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.append_rows.js) |
| batch commit write streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.batch_commit_write_streams.js) |
| create write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.create_write_stream.js) |
| finalize write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.finalize_write_stream.js) |
| flush rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.flush_rows.js) |
| get write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1/big_query_write.get_write_stream.js) |
| batch create metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1alpha/metastore_partition_service.batch_create_metastore_partitions.js) |
| batch delete metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1alpha/metastore_partition_service.batch_delete_metastore_partitions.js) |
| batch update metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1alpha/metastore_partition_service.batch_update_metastore_partitions.js) |
| list metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1alpha/metastore_partition_service.list_metastore_partitions.js) |
| stream metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1alpha/metastore_partition_service.stream_metastore_partitions.js) |
| batch create metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta/metastore_partition_service.batch_create_metastore_partitions.js) |
| batch delete metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta/metastore_partition_service.batch_delete_metastore_partitions.js) |
| batch update metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta/metastore_partition_service.batch_update_metastore_partitions.js) |
| list metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta/metastore_partition_service.list_metastore_partitions.js) |
| stream metastore partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta/metastore_partition_service.stream_metastore_partitions.js) |
| batch create read session streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta1/big_query_storage.batch_create_read_session_streams.js) |
| create read session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta1/big_query_storage.create_read_session.js) |
| finalize stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta1/big_query_storage.finalize_stream.js) |
| read rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta1/big_query_storage.read_rows.js) |
| split read stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta1/big_query_storage.split_read_stream.js) |
| create read session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_read.create_read_session.js) |
| read rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_read.read_rows.js) |
| split read stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_read.split_read_stream.js) |
| append rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.append_rows.js) |
| batch commit write streams | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.batch_commit_write_streams.js) |
| create write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.create_write_stream.js) |
| finalize write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.finalize_write_stream.js) |
| flush rows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.flush_rows.js) |
| get write stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/bigquery-storage/samples/generated/v1beta2/big_query_write.get_write_stream.js) |


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

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerystorage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-storage
