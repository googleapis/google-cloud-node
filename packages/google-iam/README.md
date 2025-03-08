[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Identity and Access Management: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-iam)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/iam.svg)](https://www.npmjs.org/package/@google-cloud/iam)




Identity and Access Management client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-iam/CHANGELOG.md).

* [Identity and Access Management Node.js Client API Reference][client-docs]
* [Identity and Access Management Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-iam](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-iam)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Identity and Access Management API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/iam
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-iam/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Policies.create_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.create_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.create_policy.js,packages/google-iam/samples/README.md) |
| Policies.delete_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.delete_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.delete_policy.js,packages/google-iam/samples/README.md) |
| Policies.get_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.get_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.get_policy.js,packages/google-iam/samples/README.md) |
| Policies.list_applicable_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.list_applicable_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.list_applicable_policies.js,packages/google-iam/samples/README.md) |
| Policies.list_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.list_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.list_policies.js,packages/google-iam/samples/README.md) |
| Policies.update_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.update_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v2/policies.update_policy.js,packages/google-iam/samples/README.md) |
| Policy_bindings.create_policy_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.create_policy_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.create_policy_binding.js,packages/google-iam/samples/README.md) |
| Policy_bindings.delete_policy_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.delete_policy_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.delete_policy_binding.js,packages/google-iam/samples/README.md) |
| Policy_bindings.get_policy_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.get_policy_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.get_policy_binding.js,packages/google-iam/samples/README.md) |
| Policy_bindings.list_policy_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.list_policy_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.list_policy_bindings.js,packages/google-iam/samples/README.md) |
| Policy_bindings.search_target_policy_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.search_target_policy_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.search_target_policy_bindings.js,packages/google-iam/samples/README.md) |
| Policy_bindings.update_policy_binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.update_policy_binding.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/policy_bindings.update_policy_binding.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.create_principal_access_boundary_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.create_principal_access_boundary_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.create_principal_access_boundary_policy.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.delete_principal_access_boundary_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.delete_principal_access_boundary_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.delete_principal_access_boundary_policy.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.get_principal_access_boundary_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.get_principal_access_boundary_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.get_principal_access_boundary_policy.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.list_principal_access_boundary_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.list_principal_access_boundary_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.list_principal_access_boundary_policies.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.search_principal_access_boundary_policy_bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.search_principal_access_boundary_policy_bindings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.search_principal_access_boundary_policy_bindings.js,packages/google-iam/samples/README.md) |
| Principal_access_boundary_policies.update_principal_access_boundary_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.update_principal_access_boundary_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/generated/v3/principal_access_boundary_policies.update_principal_access_boundary_policy.js,packages/google-iam/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-iam/samples/quickstart.js,packages/google-iam/samples/README.md) |



The [Identity and Access Management Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/iam@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/iam/latest
[product-docs]: cloud.google.com/iam/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=google.iam.v2
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
