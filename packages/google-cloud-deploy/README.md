[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Deploy: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/deploy.svg)](https://www.npmjs.org/package/@google-cloud/deploy)




clouddeploy client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy/CHANGELOG.md).

* [Google Cloud Deploy Node.js Client API Reference][client-docs]
* [Google Cloud Deploy Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-deploy](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy)

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
1.  [Enable the Google Cloud Deploy API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/deploy
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent, which owns this collection of pipelines. Format must be
 *  projects/{project_id}/locations/{location_name}.
 */
// const parent = 'abc123'
/**
 *  The maximum number of pipelines to return. The service may return
 *  fewer than this value. If unspecified, at most 50 pipelines will
 *  be returned. The maximum value is 1000; values above 1000 will be set
 *  to 1000.
 */
// const pageSize = 1234
/**
 *  A page token, received from a previous `ListDeliveryPipelines` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other provided parameters match
 *  the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Filter builds to be returned. See https://google.aip.dev/160 for more
 *  details.
 */
// const filter = 'abc123'
/**
 *  Field to sort by. See https://google.aip.dev/132#ordering for more details.
 */
// const orderBy = 'abc123'

// Imports the Deploy library
const {CloudDeployClient} = require('@google-cloud/deploy').v1;

// Instantiates a client
const deployClient = new CloudDeployClient();

async function listDeliveryPipelines() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await deployClient.listDeliveryPipelinesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

listDeliveryPipelines();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_deploy.abandon_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.abandon_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.abandon_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.advance_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.advance_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.advance_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.approve_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.approve_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.approve_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.cancel_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.delete_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.delete_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_config.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_job_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_job_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_job_run.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.ignore_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.ignore_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.ignore_job.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_delivery_pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_delivery_pipelines.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_delivery_pipelines.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_job_runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_job_runs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_job_runs.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_releases.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_rollouts.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_targets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_targets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_targets.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.retry_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.retry_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.retry_job.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.terminate_job_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.terminate_job_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.terminate_job_run.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.update_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.update_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_target.js,packages/google-cloud-deploy/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/quickstart.js,packages/google-cloud-deploy/samples/README.md) |



The [Google Cloud Deploy Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/deploy@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/deploy/latest
[product-docs]: https://cloud.google.com/deploy/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouddeploy.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
