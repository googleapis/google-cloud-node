[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Apigee Registry API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apigeeregistry)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/apigee-registry.svg)](https://www.npmjs.org/package/@google-cloud/apigee-registry)




apigeeregistry client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apigeeregistry/CHANGELOG.md).

* [Apigee Registry API Node.js Client API Reference][client-docs]
* [Apigee Registry API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-apigeeregistry](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apigeeregistry)

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
1.  [Enable the Apigee Registry API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/apigee-registry
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apigeeregistry/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Provisioning.create_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.create_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.create_instance.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Provisioning.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.delete_instance.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Provisioning.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/provisioning.get_instance.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.create_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.create_api_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_deployment.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.create_api_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_spec.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.create_api_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_api_version.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.create_artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_artifact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.create_artifact.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api_deployment_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_deployment_revision.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api_spec_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_spec_revision.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_api_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_api_version.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.delete_artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_artifact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.delete_artifact.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_api_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_deployment.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_api_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_api_spec_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_spec_contents.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_api_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_api_version.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.get_artifact_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.get_artifact_contents.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_api_deployment_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployment_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployment_revisions.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_api_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_deployments.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_api_spec_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_spec_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_spec_revisions.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_api_specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_specs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_specs.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_api_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_api_versions.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_apis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_apis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_apis.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.list_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.list_artifacts.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.replace_artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.replace_artifact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.replace_artifact.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.rollback_api_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_deployment.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.rollback_api_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.rollback_api_spec.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.tag_api_deployment_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_deployment_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_deployment_revision.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.tag_api_spec_revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_spec_revision.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.tag_api_spec_revision.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.update_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.update_api_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_deployment.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.update_api_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_spec.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Registry.update_api_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/generated/v1/registry.update_api_version.js,packages/google-cloud-apigeeregistry/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apigeeregistry/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apigeeregistry/samples/quickstart.js,packages/google-cloud-apigeeregistry/samples/README.md) |



The [Apigee Registry API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/apigee-registry@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/apigee-registry/latest
[product-docs]: https://cloud.google.com/apigee/docs/api-hub/get-started-registry-api
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=apigeeregistry.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
