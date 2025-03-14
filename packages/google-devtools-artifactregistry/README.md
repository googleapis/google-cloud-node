[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Artifact Registry: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-artifactregistry)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/artifact-registry.svg)](https://www.npmjs.org/package/@google-cloud/artifact-registry)




Artifactregistry client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-artifactregistry/CHANGELOG.md).

* [Artifact Registry Node.js Client API Reference][client-docs]
* [Artifact Registry Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-devtools-artifactregistry](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-artifactregistry)

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
1.  [Enable the Artifact Registry API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/artifact-registry
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
// eslint-disable-next-line node/no-missing-require
const {ArtifactRegistryClient} = require('@google-cloud/artifact-registry');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new ArtifactRegistryClient();

//TODO(library generator): write the actual function you will be testing
async function listsRepositories() {
  const repositories = await client.listRepositories({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(repositories);
}
listsRepositories();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-artifactregistry/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Artifact_registry.batch_delete_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.batch_delete_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.batch_delete_versions.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_attachment.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_rule.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_attachment.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_file.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_rule.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_version.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_attachment.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_docker_image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_docker_image.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_docker_image.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_file.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_iam_policy.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_maven_artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_maven_artifact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_maven_artifact.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_npm_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_npm_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_npm_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_project_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_project_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_project_settings.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_python_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_python_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_python_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_rule.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_v_p_c_s_c_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_v_p_c_s_c_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_v_p_c_s_c_config.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_version.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.import_apt_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_apt_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_apt_artifacts.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.import_yum_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_yum_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_yum_artifacts.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_attachments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_attachments.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_docker_images | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_docker_images.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_docker_images.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_files.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_files.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_maven_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_maven_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_maven_artifacts.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_npm_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_npm_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_npm_packages.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_packages.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_python_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_python_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_python_packages.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_repositories.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_rules.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_tags.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_versions.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.set_iam_policy.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.test_iam_permissions.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_file.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_project_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_project_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_project_settings.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_rule.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_v_p_c_s_c_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_v_p_c_s_c_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_v_p_c_s_c_config.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_version.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.create_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.delete_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_version.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_file.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_iam_policy.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_package | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_package.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_package.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_project_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_project_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_project_settings.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.get_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_version.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.import_apt_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_apt_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_apt_artifacts.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.import_yum_artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_yum_artifacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_yum_artifacts.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_files.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_files.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_packages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_packages.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_repositories.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_repositories.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_tags.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.list_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_versions.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.set_iam_policy.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.test_iam_permissions.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_project_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_project_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_project_settings.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_repository.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_repository.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Artifact_registry.update_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_tag.js,packages/google-devtools-artifactregistry/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/quickstart.js,packages/google-devtools-artifactregistry/samples/README.md) |



The [Artifact Registry Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/artifact-registry@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/artifact-registry/latest
[product-docs]: https://cloud.google.com/artifact-registry/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=artifactregistry.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
