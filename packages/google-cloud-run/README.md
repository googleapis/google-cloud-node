[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Run: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-run)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/run.svg)](https://www.npmjs.org/package/@google-cloud/run)




Cloud Run Admin API


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-run/CHANGELOG.md).

* [Cloud Run Node.js Client API Reference][client-docs]
* [Cloud Run Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-run](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-run)

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
1.  [Enable the Cloud Run API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/run
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The location and project to list resources on.
 *  Location must be a valid GCP region, and may not be the "-" wildcard.
 *  Format: projects/{projectnumber}/locations/{location}
 */
// const parent = 'abc123'
/**
 *  Maximum number of Services to return in this call.
 */
// const pageSize = 1234
/**
 *  A page token received from a previous call to ListServices.
 *  All other parameters must match.
 */
// const pageToken = 'abc123'

/**
 *  If true, returns deleted (but unexpired) resources along with active ones.
 */
// const showDeleted = true
// Imports the Run library
const {ServicesClient} = require('@google-cloud/run').v2;

// Instantiates a client
const runClient = new ServicesClient();

async function callListServices() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await runClient.listServicesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListServices();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-run/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Builds.submit_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/builds.submit_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/builds.submit_build.js,packages/google-cloud-run/samples/README.md) |
| Executions.cancel_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/executions.cancel_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/executions.cancel_execution.js,packages/google-cloud-run/samples/README.md) |
| Executions.delete_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/executions.delete_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/executions.delete_execution.js,packages/google-cloud-run/samples/README.md) |
| Executions.get_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/executions.get_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/executions.get_execution.js,packages/google-cloud-run/samples/README.md) |
| Executions.list_executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/executions.list_executions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/executions.list_executions.js,packages/google-cloud-run/samples/README.md) |
| Jobs.create_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.create_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.create_job.js,packages/google-cloud-run/samples/README.md) |
| Jobs.delete_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.delete_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.delete_job.js,packages/google-cloud-run/samples/README.md) |
| Jobs.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.get_iam_policy.js,packages/google-cloud-run/samples/README.md) |
| Jobs.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.get_job.js,packages/google-cloud-run/samples/README.md) |
| Jobs.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.list_jobs.js,packages/google-cloud-run/samples/README.md) |
| Jobs.run_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.run_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.run_job.js,packages/google-cloud-run/samples/README.md) |
| Jobs.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.set_iam_policy.js,packages/google-cloud-run/samples/README.md) |
| Jobs.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.test_iam_permissions.js,packages/google-cloud-run/samples/README.md) |
| Jobs.update_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/jobs.update_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/jobs.update_job.js,packages/google-cloud-run/samples/README.md) |
| Revisions.delete_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/revisions.delete_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/revisions.delete_revision.js,packages/google-cloud-run/samples/README.md) |
| Revisions.get_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/revisions.get_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/revisions.get_revision.js,packages/google-cloud-run/samples/README.md) |
| Revisions.list_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/revisions.list_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/revisions.list_revisions.js,packages/google-cloud-run/samples/README.md) |
| Services.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.create_service.js,packages/google-cloud-run/samples/README.md) |
| Services.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.delete_service.js,packages/google-cloud-run/samples/README.md) |
| Services.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.get_iam_policy.js,packages/google-cloud-run/samples/README.md) |
| Services.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.get_service.js,packages/google-cloud-run/samples/README.md) |
| Services.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.list_services.js,packages/google-cloud-run/samples/README.md) |
| Services.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.set_iam_policy.js,packages/google-cloud-run/samples/README.md) |
| Services.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.test_iam_permissions.js,packages/google-cloud-run/samples/README.md) |
| Services.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/services.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/services.update_service.js,packages/google-cloud-run/samples/README.md) |
| Tasks.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/tasks.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/tasks.get_task.js,packages/google-cloud-run/samples/README.md) |
| Tasks.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/generated/v2/tasks.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/generated/v2/tasks.list_tasks.js,packages/google-cloud-run/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-run/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-run/samples/quickstart.js,packages/google-cloud-run/samples/README.md) |



The [Cloud Run Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/run@legacy-8` installs client libraries
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

[client-docs]: https://googleapis.dev/nodejs/run/latest
[product-docs]: https://cloud.google.com/run
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=run.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
