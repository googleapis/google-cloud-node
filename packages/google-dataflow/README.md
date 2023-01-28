[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataflow: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dataflow.svg)](https://www.npmjs.org/package/@google-cloud/dataflow)




dataflow client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-dataflow/CHANGELOG.md).

* [Dataflow Node.js Client API Reference][client-docs]
* [Dataflow Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-dataflow](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-dataflow)

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
1.  [Enable the Dataflow API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dataflow
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {TemplatesServiceClient} = require('@google-cloud/dataflow');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'
// TODO(developer): replace with your bucket path.
// const gcsPath = 'gs://<bucket>/path'

// Creates a client
const client = new TemplatesServiceClient();

//TODO(library generator): write the actual function you will be testing
async function getTemplate() {
  const template = await client.getTemplate({
    projectId,
    gcsPath,
  });
  console.info(template);
}
getTemplate();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Flex_templates_service.launch_flex_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/flex_templates_service.launch_flex_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/flex_templates_service.launch_flex_template.js,samples/README.md) |
| Jobs_v1_beta3.aggregated_list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.aggregated_list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.aggregated_list_jobs.js,samples/README.md) |
| Jobs_v1_beta3.check_active_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.check_active_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.check_active_jobs.js,samples/README.md) |
| Jobs_v1_beta3.create_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.create_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.create_job.js,samples/README.md) |
| Jobs_v1_beta3.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.get_job.js,samples/README.md) |
| Jobs_v1_beta3.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.list_jobs.js,samples/README.md) |
| Jobs_v1_beta3.snapshot_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.snapshot_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.snapshot_job.js,samples/README.md) |
| Jobs_v1_beta3.update_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.update_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/jobs_v1_beta3.update_job.js,samples/README.md) |
| Messages_v1_beta3.list_job_messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/messages_v1_beta3.list_job_messages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/messages_v1_beta3.list_job_messages.js,samples/README.md) |
| Metrics_v1_beta3.get_job_execution_details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_job_execution_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_job_execution_details.js,samples/README.md) |
| Metrics_v1_beta3.get_job_metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_job_metrics.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_job_metrics.js,samples/README.md) |
| Metrics_v1_beta3.get_stage_execution_details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_stage_execution_details.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/metrics_v1_beta3.get_stage_execution_details.js,samples/README.md) |
| Snapshots_v1_beta3.delete_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.delete_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.delete_snapshot.js,samples/README.md) |
| Snapshots_v1_beta3.get_snapshot | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.get_snapshot.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.get_snapshot.js,samples/README.md) |
| Snapshots_v1_beta3.list_snapshots | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.list_snapshots.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/snapshots_v1_beta3.list_snapshots.js,samples/README.md) |
| Templates_service.create_job_from_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/templates_service.create_job_from_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/templates_service.create_job_from_template.js,samples/README.md) |
| Templates_service.get_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/templates_service.get_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/templates_service.get_template.js,samples/README.md) |
| Templates_service.launch_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/generated/v1beta3/templates_service.launch_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/generated/v1beta3/templates_service.launch_template.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-dataflow/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-dataflow/samples/test/quickstart.js,samples/README.md) |



The [Dataflow Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dataflow@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dataflow/latest
[product-docs]: https://cloud.google.com/dataflow/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
