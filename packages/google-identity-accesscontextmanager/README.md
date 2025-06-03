[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Access Context Manager: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-identity-accesscontextmanager)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/access-context-manager.svg)](https://www.npmjs.org/package/@google-cloud/access-context-manager)




accesscontextmanager client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-identity-accesscontextmanager/CHANGELOG.md).

* [Access Context Manager Node.js Client API Reference][client-docs]
* [Access Context Manager Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-identity-accesscontextmanager](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-identity-accesscontextmanager)

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
1.  [Enable the Access Context Manager API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/access-context-manager
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. Resource name for the container to list AccessPolicy instances
 *  from.
 *  Format:
 *  `organizations/{org_id}`
 */
// const parent = 'abc123'
/**
 *  Number of AccessPolicy instances to include in the list. Default 100.
 */
// const pageSize = 1234
/**
 *  Next page token for the next batch of AccessPolicy instances. Defaults to
 *  the first page of results.
 */
// const pageToken = 'abc123'

// Imports the Accesscontextmanager library
const {AccessContextManagerClient} =
  require('@google-cloud/access-context-manager').v1;

// Instantiates a client
const accesscontextmanagerClient = new AccessContextManagerClient();

async function listAccessPolicies() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    await accesscontextmanagerClient.listAccessPoliciesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

listAccessPolicies();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-identity-accesscontextmanager/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Access_context_manager.commit_service_perimeters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.commit_service_perimeters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.commit_service_perimeters.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.create_access_level | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_access_level.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_access_level.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.create_access_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_access_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_access_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.create_gcp_user_access_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_gcp_user_access_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_gcp_user_access_binding.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.create_service_perimeter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_service_perimeter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.create_service_perimeter.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.delete_access_level | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_access_level.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_access_level.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.delete_access_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_access_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_access_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.delete_gcp_user_access_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_gcp_user_access_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_gcp_user_access_binding.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.delete_service_perimeter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_service_perimeter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.delete_service_perimeter.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.get_access_level | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_access_level.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_access_level.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.get_access_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_access_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_access_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.get_gcp_user_access_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_gcp_user_access_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_gcp_user_access_binding.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_iam_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.get_service_perimeter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_service_perimeter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.get_service_perimeter.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.list_access_levels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_access_levels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_access_levels.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.list_access_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_access_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_access_policies.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.list_gcp_user_access_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_gcp_user_access_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_gcp_user_access_bindings.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.list_service_perimeters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_service_perimeters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.list_service_perimeters.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.replace_access_levels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.replace_access_levels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.replace_access_levels.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.replace_service_perimeters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.replace_service_perimeters.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.replace_service_perimeters.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.set_iam_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.test_iam_permissions.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.update_access_level | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_access_level.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_access_level.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.update_access_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_access_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_access_policy.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.update_gcp_user_access_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_gcp_user_access_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_gcp_user_access_binding.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Access_context_manager.update_service_perimeter | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_service_perimeter.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/generated/v1/access_context_manager.update_service_perimeter.js,packages/google-identity-accesscontextmanager/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-identity-accesscontextmanager/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-identity-accesscontextmanager/samples/quickstart.js,packages/google-identity-accesscontextmanager/samples/README.md) |



The [Access Context Manager Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/access-context-manager@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/access-context-manager/latest
[product-docs]: https://cloud.google.com/access-context-manager/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=accesscontextmanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
