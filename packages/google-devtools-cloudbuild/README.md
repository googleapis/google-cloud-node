[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Build: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudbuild)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/cloudbuild.svg)](https://www.npmjs.org/package/@google-cloud/cloudbuild)




Cloud Build API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudbuild/CHANGELOG.md).

* [Cloud Build Node.js Client API Reference][client-docs]
* [Cloud Build Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-devtools-cloudbuild](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudbuild)

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
1.  [Enable the Cloud Build API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/cloudbuild
```


### Using the client library

```javascript
async function quickstart(
  projectId = 'YOUR_PROJECT_ID', // Your Google Cloud Platform project ID
  triggerId = 'YOUR_TRIGGER_ID', // UUID for build trigger.
  branchName = 'BRANCH_TO_BUILD' // Branch to run build against.
) {
  // Imports the Google Cloud client library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild');

  // Creates a client
  const cb = new CloudBuildClient();

  // Note: for Private Pools, you'll have to specify an API endpoint value
  // For example:
  // const cb = new CloudBuildClient({ apiEndpoint: '<YOUR_POOL_REGION>-cloudbuild.googleapis.com' });

  // Starts a build against the branch provided.
  const [resp] = await cb.runBuildTrigger({
    projectId,
    triggerId,
    source: {
      projectId,
      dir: './',
      branchName,
    },
  });
  console.info(`triggered build for ${triggerId}`);
  const [build] = await resp.promise();

  const STATUS_LOOKUP = [
    'UNKNOWN',
    'Queued',
    'Working',
    'Success',
    'Failure',
    'Error',
    'Timeout',
    'Cancelled',
  ];
  for (const step of build.steps) {
    console.info(
      `step:\n\tname: ${step.name}\n\tstatus: ${STATUS_LOOKUP[build.status]}`
    );
  }
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudbuild/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_build.approve_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.approve_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.approve_build.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.cancel_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.cancel_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.cancel_build.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.create_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.create_build_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build_trigger.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.create_worker_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_worker_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_worker_pool.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.delete_build_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_build_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_build_trigger.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.delete_worker_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_worker_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_worker_pool.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.get_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.get_build_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build_trigger.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.get_worker_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_worker_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_worker_pool.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.list_build_triggers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_build_triggers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_build_triggers.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.list_builds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_builds.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_builds.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.list_worker_pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_worker_pools.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_worker_pools.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.receive_trigger_webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.receive_trigger_webhook.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.receive_trigger_webhook.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.retry_build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.retry_build.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.retry_build.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.run_build_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.run_build_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.run_build_trigger.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.update_build_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_build_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_build_trigger.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Cloud_build.update_worker_pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_worker_pool.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_worker_pool.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.batch_create_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.batch_create_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.batch_create_repositories.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.create_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_connection.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.create_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_repository.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.delete_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_connection.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.delete_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_repository.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.fetch_git_refs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_git_refs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_git_refs.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.fetch_linkable_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_linkable_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_linkable_repositories.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.fetch_read_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_token.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.fetch_read_write_token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_write_token.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_write_token.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.get_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_connection.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.get_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_repository.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.list_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_connections.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.list_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_repositories.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Repository_manager.update_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.update_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.update_connection.js,packages/google-devtools-cloudbuild/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudbuild/samples/quickstart.js,packages/google-devtools-cloudbuild/samples/README.md) |



The [Cloud Build Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/cloudbuild@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/cloudbuild/latest
[product-docs]: https://cloud.google.com/cloud-build/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
