[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Workflows: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workflows-executions)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/workflows.svg)](https://www.npmjs.org/package/@google-cloud/workflows)




Workflows client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workflows-executions/CHANGELOG.md).

* [Workflows Node.js Client API Reference][client-docs]
* [Workflows Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-workflows-executions](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workflows-executions)

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
1.  [Enable the Workflows API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/workflows
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'us-central1';
const {WorkflowsClient} = require('@google-cloud/workflows');
const client = new WorkflowsClient();
async function listWorkflows() {
  const [workflows] = await client.listWorkflows({
    parent: client.locationPath(projectId, location),
  });
  for (const workflow of workflows) {
    console.info(`name: ${workflow.name}`);
  }
}
listWorkflows();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-workflows-executions/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Executions.cancel_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/executions.cancel_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/executions.cancel_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.create_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/executions.create_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/executions.create_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.get_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/executions.get_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/executions.get_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.list_executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/executions.list_executions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/executions.list_executions.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.create_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/workflows.create_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/workflows.create_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.delete_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/workflows.delete_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/workflows.delete_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.get_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/workflows.get_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/workflows.get_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.list_workflows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/workflows.list_workflows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/workflows.list_workflows.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.update_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1/workflows.update_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1/workflows.update_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.cancel_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.cancel_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.cancel_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.create_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.create_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.create_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.get_execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.get_execution.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.get_execution.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Executions.list_executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.list_executions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/executions.list_executions.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.create_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.create_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.create_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.delete_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.delete_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.delete_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.get_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.get_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.get_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.list_workflows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.list_workflows.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.list_workflows.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Workflows.update_workflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.update_workflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/generated/v1beta/workflows.update_workflow.js,packages/google-cloud-workflows-executions/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-workflows-executions/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-workflows-executions/samples/quickstart.js,packages/google-cloud-workflows-executions/samples/README.md) |



The [Workflows Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/workflows@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/workflows/latest
[product-docs]: https://cloud.google.com/workflows/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=workflows.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
