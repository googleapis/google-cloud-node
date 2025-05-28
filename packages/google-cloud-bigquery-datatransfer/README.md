[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google BigQuery Data Transfer Service: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-datatransfer)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery-data-transfer.svg)](https://www.npmjs.org/package/@google-cloud/bigquery-data-transfer)




BigQuery Data Transfer API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-datatransfer/CHANGELOG.md).

* [Google BigQuery Data Transfer Service Node.js Client API Reference][client-docs]
* [Google BigQuery Data Transfer Service Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-bigquery-datatransfer](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-datatransfer)

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
1.  [Enable the Google BigQuery Data Transfer Service API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigquery-data-transfer
```


### Using the client library

```javascript
const bigqueryDataTransfer = require('@google-cloud/bigquery-data-transfer');
const client = new bigqueryDataTransfer.v1.DataTransferServiceClient();

async function quickstart() {
  const projectId = await client.getProjectId();

  // Iterate over all elements.
  const formattedParent = client.projectPath(projectId, 'us-central1');
  let nextRequest = {parent: formattedParent};
  const options = {autoPaginate: false};
  console.log('Data sources:');
  do {
    // Fetch the next page.
    const responses = await client.listDataSources(nextRequest, options);
    // The actual resources in a response.
    const resources = responses[0];
    // The next request if the response shows that there are more responses.
    nextRequest = responses[1];
    // The actual response object, if necessary.
    // const rawResponse = responses[2];
    resources.forEach(resource => {
      console.log(`  ${resource.name}`);
    });
  } while (nextRequest);

  console.log('\n\n');
  console.log('Sources via stream:');

  client
    .listDataSourcesStream({parent: formattedParent})
    .on('data', element => {
      console.log(`  ${element.name}`);
    });
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-bigquery-datatransfer/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_transfer_service.check_valid_creds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.check_valid_creds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.check_valid_creds.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.create_transfer_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.create_transfer_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.create_transfer_config.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.delete_transfer_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.delete_transfer_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.delete_transfer_config.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.delete_transfer_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.delete_transfer_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.delete_transfer_run.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.enroll_data_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.enroll_data_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.enroll_data_sources.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.get_data_source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_data_source.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_data_source.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.get_transfer_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_transfer_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_transfer_config.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.get_transfer_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_transfer_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.get_transfer_run.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.list_data_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_data_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_data_sources.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.list_transfer_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_configs.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.list_transfer_logs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_logs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_logs.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.list_transfer_runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_runs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.list_transfer_runs.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.schedule_transfer_runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.schedule_transfer_runs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.schedule_transfer_runs.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.start_manual_transfer_runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.start_manual_transfer_runs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.start_manual_transfer_runs.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.unenroll_data_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.unenroll_data_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.unenroll_data_sources.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Data_transfer_service.update_transfer_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.update_transfer_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/generated/v1/data_transfer_service.update_transfer_config.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-bigquery-datatransfer/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-bigquery-datatransfer/samples/quickstart.js,packages/google-cloud-bigquery-datatransfer/samples/README.md) |



The [Google BigQuery Data Transfer Service Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bigquery-data-transfer@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigquery-data-transfer/latest
[product-docs]: https://cloud.google.com/bigquery/transfer/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquerydatatransfer.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
