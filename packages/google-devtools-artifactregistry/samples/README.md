[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Artifact Registry: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Artifact_registry.batch_delete_versions](#artifact_registry.batch_delete_versions)
  * [Artifact_registry.create_attachment](#artifact_registry.create_attachment)
  * [Artifact_registry.create_repository](#artifact_registry.create_repository)
  * [Artifact_registry.create_rule](#artifact_registry.create_rule)
  * [Artifact_registry.create_tag](#artifact_registry.create_tag)
  * [Artifact_registry.delete_attachment](#artifact_registry.delete_attachment)
  * [Artifact_registry.delete_file](#artifact_registry.delete_file)
  * [Artifact_registry.delete_package](#artifact_registry.delete_package)
  * [Artifact_registry.delete_repository](#artifact_registry.delete_repository)
  * [Artifact_registry.delete_rule](#artifact_registry.delete_rule)
  * [Artifact_registry.delete_tag](#artifact_registry.delete_tag)
  * [Artifact_registry.delete_version](#artifact_registry.delete_version)
  * [Artifact_registry.get_attachment](#artifact_registry.get_attachment)
  * [Artifact_registry.get_docker_image](#artifact_registry.get_docker_image)
  * [Artifact_registry.get_file](#artifact_registry.get_file)
  * [Artifact_registry.get_iam_policy](#artifact_registry.get_iam_policy)
  * [Artifact_registry.get_maven_artifact](#artifact_registry.get_maven_artifact)
  * [Artifact_registry.get_npm_package](#artifact_registry.get_npm_package)
  * [Artifact_registry.get_package](#artifact_registry.get_package)
  * [Artifact_registry.get_project_settings](#artifact_registry.get_project_settings)
  * [Artifact_registry.get_python_package](#artifact_registry.get_python_package)
  * [Artifact_registry.get_repository](#artifact_registry.get_repository)
  * [Artifact_registry.get_rule](#artifact_registry.get_rule)
  * [Artifact_registry.get_tag](#artifact_registry.get_tag)
  * [Artifact_registry.get_v_p_c_s_c_config](#artifact_registry.get_v_p_c_s_c_config)
  * [Artifact_registry.get_version](#artifact_registry.get_version)
  * [Artifact_registry.import_apt_artifacts](#artifact_registry.import_apt_artifacts)
  * [Artifact_registry.import_yum_artifacts](#artifact_registry.import_yum_artifacts)
  * [Artifact_registry.list_attachments](#artifact_registry.list_attachments)
  * [Artifact_registry.list_docker_images](#artifact_registry.list_docker_images)
  * [Artifact_registry.list_files](#artifact_registry.list_files)
  * [Artifact_registry.list_maven_artifacts](#artifact_registry.list_maven_artifacts)
  * [Artifact_registry.list_npm_packages](#artifact_registry.list_npm_packages)
  * [Artifact_registry.list_packages](#artifact_registry.list_packages)
  * [Artifact_registry.list_python_packages](#artifact_registry.list_python_packages)
  * [Artifact_registry.list_repositories](#artifact_registry.list_repositories)
  * [Artifact_registry.list_rules](#artifact_registry.list_rules)
  * [Artifact_registry.list_tags](#artifact_registry.list_tags)
  * [Artifact_registry.list_versions](#artifact_registry.list_versions)
  * [Artifact_registry.set_iam_policy](#artifact_registry.set_iam_policy)
  * [Artifact_registry.test_iam_permissions](#artifact_registry.test_iam_permissions)
  * [Artifact_registry.update_file](#artifact_registry.update_file)
  * [Artifact_registry.update_package](#artifact_registry.update_package)
  * [Artifact_registry.update_project_settings](#artifact_registry.update_project_settings)
  * [Artifact_registry.update_repository](#artifact_registry.update_repository)
  * [Artifact_registry.update_rule](#artifact_registry.update_rule)
  * [Artifact_registry.update_tag](#artifact_registry.update_tag)
  * [Artifact_registry.update_v_p_c_s_c_config](#artifact_registry.update_v_p_c_s_c_config)
  * [Artifact_registry.update_version](#artifact_registry.update_version)
  * [Artifact_registry.create_repository](#artifact_registry.create_repository)
  * [Artifact_registry.create_tag](#artifact_registry.create_tag)
  * [Artifact_registry.delete_package](#artifact_registry.delete_package)
  * [Artifact_registry.delete_repository](#artifact_registry.delete_repository)
  * [Artifact_registry.delete_tag](#artifact_registry.delete_tag)
  * [Artifact_registry.delete_version](#artifact_registry.delete_version)
  * [Artifact_registry.get_file](#artifact_registry.get_file)
  * [Artifact_registry.get_iam_policy](#artifact_registry.get_iam_policy)
  * [Artifact_registry.get_package](#artifact_registry.get_package)
  * [Artifact_registry.get_project_settings](#artifact_registry.get_project_settings)
  * [Artifact_registry.get_repository](#artifact_registry.get_repository)
  * [Artifact_registry.get_tag](#artifact_registry.get_tag)
  * [Artifact_registry.get_version](#artifact_registry.get_version)
  * [Artifact_registry.import_apt_artifacts](#artifact_registry.import_apt_artifacts)
  * [Artifact_registry.import_yum_artifacts](#artifact_registry.import_yum_artifacts)
  * [Artifact_registry.list_files](#artifact_registry.list_files)
  * [Artifact_registry.list_packages](#artifact_registry.list_packages)
  * [Artifact_registry.list_repositories](#artifact_registry.list_repositories)
  * [Artifact_registry.list_tags](#artifact_registry.list_tags)
  * [Artifact_registry.list_versions](#artifact_registry.list_versions)
  * [Artifact_registry.set_iam_policy](#artifact_registry.set_iam_policy)
  * [Artifact_registry.test_iam_permissions](#artifact_registry.test_iam_permissions)
  * [Artifact_registry.update_project_settings](#artifact_registry.update_project_settings)
  * [Artifact_registry.update_repository](#artifact_registry.update_repository)
  * [Artifact_registry.update_tag](#artifact_registry.update_tag)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Artifact_registry.batch_delete_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.batch_delete_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.batch_delete_versions.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.batch_delete_versions.js`


-----




### Artifact_registry.create_attachment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_attachment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_attachment.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_attachment.js`


-----




### Artifact_registry.create_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_repository.js`


-----




### Artifact_registry.create_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_rule.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_rule.js`


-----




### Artifact_registry.create_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.create_tag.js`


-----




### Artifact_registry.delete_attachment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_attachment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_attachment.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_attachment.js`


-----




### Artifact_registry.delete_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_file.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_file.js`


-----




### Artifact_registry.delete_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_package.js`


-----




### Artifact_registry.delete_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_repository.js`


-----




### Artifact_registry.delete_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_rule.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_rule.js`


-----




### Artifact_registry.delete_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_tag.js`


-----




### Artifact_registry.delete_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_version.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.delete_version.js`


-----




### Artifact_registry.get_attachment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_attachment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_attachment.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_attachment.js`


-----




### Artifact_registry.get_docker_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_docker_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_docker_image.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_docker_image.js`


-----




### Artifact_registry.get_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_file.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_file.js`


-----




### Artifact_registry.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_iam_policy.js`


-----




### Artifact_registry.get_maven_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_maven_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_maven_artifact.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_maven_artifact.js`


-----




### Artifact_registry.get_npm_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_npm_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_npm_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_npm_package.js`


-----




### Artifact_registry.get_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_package.js`


-----




### Artifact_registry.get_project_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_project_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_project_settings.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_project_settings.js`


-----




### Artifact_registry.get_python_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_python_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_python_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_python_package.js`


-----




### Artifact_registry.get_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_repository.js`


-----




### Artifact_registry.get_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_rule.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_rule.js`


-----




### Artifact_registry.get_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_tag.js`


-----




### Artifact_registry.get_v_p_c_s_c_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_v_p_c_s_c_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_v_p_c_s_c_config.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_v_p_c_s_c_config.js`


-----




### Artifact_registry.get_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_version.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.get_version.js`


-----




### Artifact_registry.import_apt_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_apt_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_apt_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_apt_artifacts.js`


-----




### Artifact_registry.import_yum_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_yum_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_yum_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.import_yum_artifacts.js`


-----




### Artifact_registry.list_attachments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_attachments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_attachments.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_attachments.js`


-----




### Artifact_registry.list_docker_images

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_docker_images.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_docker_images.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_docker_images.js`


-----




### Artifact_registry.list_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_files.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_files.js`


-----




### Artifact_registry.list_maven_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_maven_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_maven_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_maven_artifacts.js`


-----




### Artifact_registry.list_npm_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_npm_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_npm_packages.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_npm_packages.js`


-----




### Artifact_registry.list_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_packages.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_packages.js`


-----




### Artifact_registry.list_python_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_python_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_python_packages.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_python_packages.js`


-----




### Artifact_registry.list_repositories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_repositories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_repositories.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_repositories.js`


-----




### Artifact_registry.list_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_rules.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_rules.js`


-----




### Artifact_registry.list_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_tags.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_tags.js`


-----




### Artifact_registry.list_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_versions.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.list_versions.js`


-----




### Artifact_registry.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.set_iam_policy.js`


-----




### Artifact_registry.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.test_iam_permissions.js`


-----




### Artifact_registry.update_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_file.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_file.js`


-----




### Artifact_registry.update_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_package.js`


-----




### Artifact_registry.update_project_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_project_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_project_settings.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_project_settings.js`


-----




### Artifact_registry.update_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_repository.js`


-----




### Artifact_registry.update_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_rule.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_rule.js`


-----




### Artifact_registry.update_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_tag.js`


-----




### Artifact_registry.update_v_p_c_s_c_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_v_p_c_s_c_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_v_p_c_s_c_config.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_v_p_c_s_c_config.js`


-----




### Artifact_registry.update_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_version.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1/artifact_registry.update_version.js`


-----




### Artifact_registry.create_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_repository.js`


-----




### Artifact_registry.create_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.create_tag.js`


-----




### Artifact_registry.delete_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_package.js`


-----




### Artifact_registry.delete_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_repository.js`


-----




### Artifact_registry.delete_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_tag.js`


-----




### Artifact_registry.delete_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_version.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.delete_version.js`


-----




### Artifact_registry.get_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_file.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_file.js`


-----




### Artifact_registry.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_iam_policy.js`


-----




### Artifact_registry.get_package

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_package.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_package.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_package.js`


-----




### Artifact_registry.get_project_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_project_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_project_settings.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_project_settings.js`


-----




### Artifact_registry.get_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_repository.js`


-----




### Artifact_registry.get_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_tag.js`


-----




### Artifact_registry.get_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_version.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.get_version.js`


-----




### Artifact_registry.import_apt_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_apt_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_apt_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_apt_artifacts.js`


-----




### Artifact_registry.import_yum_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_yum_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_yum_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.import_yum_artifacts.js`


-----




### Artifact_registry.list_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_files.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_files.js`


-----




### Artifact_registry.list_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_packages.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_packages.js`


-----




### Artifact_registry.list_repositories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_repositories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_repositories.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_repositories.js`


-----




### Artifact_registry.list_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_tags.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_tags.js`


-----




### Artifact_registry.list_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_versions.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.list_versions.js`


-----




### Artifact_registry.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.set_iam_policy.js`


-----




### Artifact_registry.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.test_iam_permissions.js`


-----




### Artifact_registry.update_project_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_project_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_project_settings.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_project_settings.js`


-----




### Artifact_registry.update_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_repository.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_repository.js`


-----




### Artifact_registry.update_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_tag.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/generated/v1beta2/artifact_registry.update_tag.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-artifactregistry/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-artifactregistry/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-devtools-artifactregistry/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/artifact-registry/
