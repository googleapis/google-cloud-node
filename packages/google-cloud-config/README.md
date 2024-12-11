[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Infrastructure Manager API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-config)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/config.svg)](https://www.npmjs.org/package/@google-cloud/config)




Infrastructure Manager API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-config/CHANGELOG.md).

* [Infrastructure Manager API Node.js Client API Reference][client-docs]
* [Infrastructure Manager API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-config](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-config)

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
1.  [Enable the Infrastructure Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/config
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent in whose context the Deployments are listed. The
 *  parent value is in the format:
 *  'projects/{project_id}/locations/{location}'.
 */
// const parent = 'abc123'
/**
 *  When requesting a page of resources, 'page_size' specifies number of
 *  resources to return. If unspecified or set to 0, all resources will be
 *  returned.
 */
// const pageSize = 1234
/**
 *  Token returned by previous call to 'ListDeployments' which specifies the
 *  position in the list from where to continue listing the resources.
 */
// const pageToken = 'abc123'
/**
 *  Lists the Deployments that match the filter expression. A filter
 *  expression filters the resources listed in the response. The expression
 *  must be of the form '{field} {operator} {value}' where operators: '<', '>',
 *  '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS
 *  operator which is roughly synonymous with equality). {field} can refer to a
 *  proto or JSON field, or a synthetic field. Field names can be camelCase or
 *  snake_case.
 *  Examples:
 *  - Filter by name:
 *    name = "projects/foo/locations/us-central1/deployments/bar
 *  - Filter by labels:
 *    - Resources that have a key called 'foo'
 *      labels.foo:*
 *    - Resources that have a key called 'foo' whose value is 'bar'
 *      labels.foo = bar
 *  - Filter by state:
 *    - Deployments in CREATING state.
 *      state=CREATING
 */
// const filter = 'abc123'
/**
 *  Field to use to sort the list.
 */
// const orderBy = 'abc123'

// Imports the Config library
const {ConfigClient} = require('@google-cloud/config').v1;

// Instantiates a client
const configClient = new ConfigClient();

async function callListDeployments() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await configClient.listDeploymentsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDeployments();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-config/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Config.create_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.create_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.create_deployment.js,packages/google-cloud-config/samples/README.md) |
| Config.create_preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.create_preview.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.create_preview.js,packages/google-cloud-config/samples/README.md) |
| Config.delete_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.delete_deployment.js,packages/google-cloud-config/samples/README.md) |
| Config.delete_preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_preview.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.delete_preview.js,packages/google-cloud-config/samples/README.md) |
| Config.delete_statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.delete_statefile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.delete_statefile.js,packages/google-cloud-config/samples/README.md) |
| Config.export_deployment_statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_deployment_statefile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.export_deployment_statefile.js,packages/google-cloud-config/samples/README.md) |
| Config.export_lock_info | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_lock_info.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.export_lock_info.js,packages/google-cloud-config/samples/README.md) |
| Config.export_preview_result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_preview_result.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.export_preview_result.js,packages/google-cloud-config/samples/README.md) |
| Config.export_revision_statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.export_revision_statefile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.export_revision_statefile.js,packages/google-cloud-config/samples/README.md) |
| Config.get_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.get_deployment.js,packages/google-cloud-config/samples/README.md) |
| Config.get_preview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_preview.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.get_preview.js,packages/google-cloud-config/samples/README.md) |
| Config.get_resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.get_resource.js,packages/google-cloud-config/samples/README.md) |
| Config.get_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.get_revision.js,packages/google-cloud-config/samples/README.md) |
| Config.get_terraform_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.get_terraform_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.get_terraform_version.js,packages/google-cloud-config/samples/README.md) |
| Config.import_statefile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.import_statefile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.import_statefile.js,packages/google-cloud-config/samples/README.md) |
| Config.list_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.list_deployments.js,packages/google-cloud-config/samples/README.md) |
| Config.list_previews | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_previews.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.list_previews.js,packages/google-cloud-config/samples/README.md) |
| Config.list_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.list_resources.js,packages/google-cloud-config/samples/README.md) |
| Config.list_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.list_revisions.js,packages/google-cloud-config/samples/README.md) |
| Config.list_terraform_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.list_terraform_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.list_terraform_versions.js,packages/google-cloud-config/samples/README.md) |
| Config.lock_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.lock_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.lock_deployment.js,packages/google-cloud-config/samples/README.md) |
| Config.unlock_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.unlock_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.unlock_deployment.js,packages/google-cloud-config/samples/README.md) |
| Config.update_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/generated/v1/config.update_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/generated/v1/config.update_deployment.js,packages/google-cloud-config/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-config/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-config/samples/quickstart.js,packages/google-cloud-config/samples/README.md) |



The [Infrastructure Manager API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/config@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/infra-manager/latest
[product-docs]: https://cloud.google.com/infrastructure-manager/docs/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=config.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
