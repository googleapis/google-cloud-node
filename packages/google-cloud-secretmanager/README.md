[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Secret Manager: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-secretmanager)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/secret-manager.svg)](https://www.npmjs.org/package/@google-cloud/secret-manager)




Secrets client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-secretmanager/CHANGELOG.md).

* [Secret Manager Node.js Client API Reference][client-docs]
* [Secret Manager Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-secretmanager](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-secretmanager)

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
1.  [Enable the Secret Manager API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/secret-manager
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
 *  Required. The resource name of the project associated with the
 *  Secrets google.cloud.secretmanager.v1.Secret, in the format `projects/*`.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of results to be returned in a single page. If
 *  set to 0, the server decides the number of results to return. If the
 *  number is greater than 25000, it is capped at 25000.
 */
// const pageSize = 1234
/**
 *  Optional. Pagination token, returned earlier via
 *  ListSecretsResponse.next_page_token google.cloud.secretmanager.v1.ListSecretsResponse.next_page_token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. Filter string, adhering to the rules in
 *  List-operation
 *  filtering (https://cloud.google.com/secret-manager/docs/filtering). List
 *  only secrets matching the filter. If filter is empty, all secrets are
 *  listed.
 */
// const filter = 'abc123'

// Imports the Secretmanager library
const {SecretManagerServiceClient} =
  require('@google-cloud/secret-manager').v1;

// Instantiates a client
const secretmanagerClient = new SecretManagerServiceClient();

async function callListSecrets() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await secretmanagerClient.listSecretsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListSecrets();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-secretmanager/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Secret_manager_service.access_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.access_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.access_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.add_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.add_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.add_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.create_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.create_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.create_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.delete_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.delete_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.delete_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.destroy_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.destroy_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.destroy_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.disable_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.disable_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.disable_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.enable_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.enable_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.enable_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_iam_policy.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.get_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.list_secret_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.list_secret_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.list_secret_versions.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.list_secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.list_secrets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.list_secrets.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.set_iam_policy.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.test_iam_permissions.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.update_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.update_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1/secret_manager_service.update_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.access_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.access_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.access_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.add_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.add_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.add_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.create_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.create_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.create_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.delete_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.delete_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.delete_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.destroy_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.destroy_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.destroy_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.disable_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.disable_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.disable_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.enable_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.enable_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.enable_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_iam_policy.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.get_secret_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_secret_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.get_secret_version.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.list_secret_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.list_secret_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.list_secret_versions.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.list_secrets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.list_secrets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.list_secrets.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.set_iam_policy.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.test_iam_permissions.js,packages/google-cloud-secretmanager/samples/README.md) |
| Secret_manager_service.update_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.update_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/generated/v1beta2/secret_manager_service.update_secret.js,packages/google-cloud-secretmanager/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-secretmanager/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-secretmanager/samples/quickstart.js,packages/google-cloud-secretmanager/samples/README.md) |



The [Secret Manager Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/secret-manager@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/secret-manager/latest
[product-docs]: https://cloud.google.com/secret-manager/docs
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=secretmanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
