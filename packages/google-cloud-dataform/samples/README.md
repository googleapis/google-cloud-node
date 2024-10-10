[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataform API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Dataform.cancel_workflow_invocation](#dataform.cancel_workflow_invocation)
  * [Dataform.commit_workspace_changes](#dataform.commit_workspace_changes)
  * [Dataform.create_compilation_result](#dataform.create_compilation_result)
  * [Dataform.create_repository](#dataform.create_repository)
  * [Dataform.create_workflow_invocation](#dataform.create_workflow_invocation)
  * [Dataform.create_workspace](#dataform.create_workspace)
  * [Dataform.delete_repository](#dataform.delete_repository)
  * [Dataform.delete_workflow_invocation](#dataform.delete_workflow_invocation)
  * [Dataform.delete_workspace](#dataform.delete_workspace)
  * [Dataform.fetch_file_diff](#dataform.fetch_file_diff)
  * [Dataform.fetch_file_git_statuses](#dataform.fetch_file_git_statuses)
  * [Dataform.fetch_git_ahead_behind](#dataform.fetch_git_ahead_behind)
  * [Dataform.fetch_remote_branches](#dataform.fetch_remote_branches)
  * [Dataform.get_compilation_result](#dataform.get_compilation_result)
  * [Dataform.get_repository](#dataform.get_repository)
  * [Dataform.get_workflow_invocation](#dataform.get_workflow_invocation)
  * [Dataform.get_workspace](#dataform.get_workspace)
  * [Dataform.install_npm_packages](#dataform.install_npm_packages)
  * [Dataform.list_compilation_results](#dataform.list_compilation_results)
  * [Dataform.list_repositories](#dataform.list_repositories)
  * [Dataform.list_workflow_invocations](#dataform.list_workflow_invocations)
  * [Dataform.list_workspaces](#dataform.list_workspaces)
  * [Dataform.make_directory](#dataform.make_directory)
  * [Dataform.move_directory](#dataform.move_directory)
  * [Dataform.move_file](#dataform.move_file)
  * [Dataform.pull_git_commits](#dataform.pull_git_commits)
  * [Dataform.push_git_commits](#dataform.push_git_commits)
  * [Dataform.query_compilation_result_actions](#dataform.query_compilation_result_actions)
  * [Dataform.query_directory_contents](#dataform.query_directory_contents)
  * [Dataform.query_workflow_invocation_actions](#dataform.query_workflow_invocation_actions)
  * [Dataform.read_file](#dataform.read_file)
  * [Dataform.remove_directory](#dataform.remove_directory)
  * [Dataform.remove_file](#dataform.remove_file)
  * [Dataform.reset_workspace_changes](#dataform.reset_workspace_changes)
  * [Dataform.update_repository](#dataform.update_repository)
  * [Dataform.write_file](#dataform.write_file)
  * [Dataform.cancel_workflow_invocation](#dataform.cancel_workflow_invocation)
  * [Dataform.commit_repository_changes](#dataform.commit_repository_changes)
  * [Dataform.commit_workspace_changes](#dataform.commit_workspace_changes)
  * [Dataform.compute_repository_access_token_status](#dataform.compute_repository_access_token_status)
  * [Dataform.create_compilation_result](#dataform.create_compilation_result)
  * [Dataform.create_release_config](#dataform.create_release_config)
  * [Dataform.create_repository](#dataform.create_repository)
  * [Dataform.create_workflow_config](#dataform.create_workflow_config)
  * [Dataform.create_workflow_invocation](#dataform.create_workflow_invocation)
  * [Dataform.create_workspace](#dataform.create_workspace)
  * [Dataform.delete_release_config](#dataform.delete_release_config)
  * [Dataform.delete_repository](#dataform.delete_repository)
  * [Dataform.delete_workflow_config](#dataform.delete_workflow_config)
  * [Dataform.delete_workflow_invocation](#dataform.delete_workflow_invocation)
  * [Dataform.delete_workspace](#dataform.delete_workspace)
  * [Dataform.fetch_file_diff](#dataform.fetch_file_diff)
  * [Dataform.fetch_file_git_statuses](#dataform.fetch_file_git_statuses)
  * [Dataform.fetch_git_ahead_behind](#dataform.fetch_git_ahead_behind)
  * [Dataform.fetch_remote_branches](#dataform.fetch_remote_branches)
  * [Dataform.fetch_repository_history](#dataform.fetch_repository_history)
  * [Dataform.get_compilation_result](#dataform.get_compilation_result)
  * [Dataform.get_release_config](#dataform.get_release_config)
  * [Dataform.get_repository](#dataform.get_repository)
  * [Dataform.get_workflow_config](#dataform.get_workflow_config)
  * [Dataform.get_workflow_invocation](#dataform.get_workflow_invocation)
  * [Dataform.get_workspace](#dataform.get_workspace)
  * [Dataform.install_npm_packages](#dataform.install_npm_packages)
  * [Dataform.list_compilation_results](#dataform.list_compilation_results)
  * [Dataform.list_release_configs](#dataform.list_release_configs)
  * [Dataform.list_repositories](#dataform.list_repositories)
  * [Dataform.list_workflow_configs](#dataform.list_workflow_configs)
  * [Dataform.list_workflow_invocations](#dataform.list_workflow_invocations)
  * [Dataform.list_workspaces](#dataform.list_workspaces)
  * [Dataform.make_directory](#dataform.make_directory)
  * [Dataform.move_directory](#dataform.move_directory)
  * [Dataform.move_file](#dataform.move_file)
  * [Dataform.pull_git_commits](#dataform.pull_git_commits)
  * [Dataform.push_git_commits](#dataform.push_git_commits)
  * [Dataform.query_compilation_result_actions](#dataform.query_compilation_result_actions)
  * [Dataform.query_directory_contents](#dataform.query_directory_contents)
  * [Dataform.query_repository_directory_contents](#dataform.query_repository_directory_contents)
  * [Dataform.query_workflow_invocation_actions](#dataform.query_workflow_invocation_actions)
  * [Dataform.read_file](#dataform.read_file)
  * [Dataform.read_repository_file](#dataform.read_repository_file)
  * [Dataform.remove_directory](#dataform.remove_directory)
  * [Dataform.remove_file](#dataform.remove_file)
  * [Dataform.reset_workspace_changes](#dataform.reset_workspace_changes)
  * [Dataform.update_release_config](#dataform.update_release_config)
  * [Dataform.update_repository](#dataform.update_repository)
  * [Dataform.update_workflow_config](#dataform.update_workflow_config)
  * [Dataform.write_file](#dataform.write_file)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Dataform.cancel_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.cancel_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.cancel_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.cancel_workflow_invocation.js`


-----




### Dataform.commit_workspace_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.commit_workspace_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.commit_workspace_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.commit_workspace_changes.js`


-----




### Dataform.create_compilation_result

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_compilation_result.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_compilation_result.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_compilation_result.js`


-----




### Dataform.create_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_repository.js`


-----




### Dataform.create_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workflow_invocation.js`


-----




### Dataform.create_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.create_workspace.js`


-----




### Dataform.delete_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_repository.js`


-----




### Dataform.delete_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workflow_invocation.js`


-----




### Dataform.delete_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.delete_workspace.js`


-----




### Dataform.fetch_file_diff

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_diff.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_diff.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_diff.js`


-----




### Dataform.fetch_file_git_statuses

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_git_statuses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_git_statuses.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_file_git_statuses.js`


-----




### Dataform.fetch_git_ahead_behind

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_git_ahead_behind.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_git_ahead_behind.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_git_ahead_behind.js`


-----




### Dataform.fetch_remote_branches

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_remote_branches.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_remote_branches.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.fetch_remote_branches.js`


-----




### Dataform.get_compilation_result

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_compilation_result.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_compilation_result.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_compilation_result.js`


-----




### Dataform.get_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_repository.js`


-----




### Dataform.get_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workflow_invocation.js`


-----




### Dataform.get_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.get_workspace.js`


-----




### Dataform.install_npm_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.install_npm_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.install_npm_packages.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.install_npm_packages.js`


-----




### Dataform.list_compilation_results

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_compilation_results.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_compilation_results.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_compilation_results.js`


-----




### Dataform.list_repositories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_repositories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_repositories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_repositories.js`


-----




### Dataform.list_workflow_invocations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workflow_invocations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workflow_invocations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workflow_invocations.js`


-----




### Dataform.list_workspaces

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workspaces.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workspaces.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.list_workspaces.js`


-----




### Dataform.make_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.make_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.make_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.make_directory.js`


-----




### Dataform.move_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_directory.js`


-----




### Dataform.move_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.move_file.js`


-----




### Dataform.pull_git_commits

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.pull_git_commits.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.pull_git_commits.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.pull_git_commits.js`


-----




### Dataform.push_git_commits

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.push_git_commits.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.push_git_commits.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.push_git_commits.js`


-----




### Dataform.query_compilation_result_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_compilation_result_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_compilation_result_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_compilation_result_actions.js`


-----




### Dataform.query_directory_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_directory_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_directory_contents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_directory_contents.js`


-----




### Dataform.query_workflow_invocation_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_workflow_invocation_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_workflow_invocation_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.query_workflow_invocation_actions.js`


-----




### Dataform.read_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.read_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.read_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.read_file.js`


-----




### Dataform.remove_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_directory.js`


-----




### Dataform.remove_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.remove_file.js`


-----




### Dataform.reset_workspace_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.reset_workspace_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.reset_workspace_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.reset_workspace_changes.js`


-----




### Dataform.update_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.update_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.update_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.update_repository.js`


-----




### Dataform.write_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.write_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.write_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1alpha2/dataform.write_file.js`


-----




### Dataform.cancel_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js`


-----




### Dataform.commit_repository_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_repository_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_repository_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_repository_changes.js`


-----




### Dataform.commit_workspace_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js`


-----




### Dataform.compute_repository_access_token_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.compute_repository_access_token_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.compute_repository_access_token_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.compute_repository_access_token_status.js`


-----




### Dataform.create_compilation_result

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js`


-----




### Dataform.create_release_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_release_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_release_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_release_config.js`


-----




### Dataform.create_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js`


-----




### Dataform.create_workflow_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_config.js`


-----




### Dataform.create_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js`


-----




### Dataform.create_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js`


-----




### Dataform.delete_release_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_release_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_release_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_release_config.js`


-----




### Dataform.delete_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js`


-----




### Dataform.delete_workflow_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_config.js`


-----




### Dataform.delete_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js`


-----




### Dataform.delete_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js`


-----




### Dataform.fetch_file_diff

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js`


-----




### Dataform.fetch_file_git_statuses

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js`


-----




### Dataform.fetch_git_ahead_behind

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js`


-----




### Dataform.fetch_remote_branches

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js`


-----




### Dataform.fetch_repository_history

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_repository_history.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_repository_history.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_repository_history.js`


-----




### Dataform.get_compilation_result

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js`


-----




### Dataform.get_release_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_release_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_release_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_release_config.js`


-----




### Dataform.get_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js`


-----




### Dataform.get_workflow_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_config.js`


-----




### Dataform.get_workflow_invocation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js`


-----




### Dataform.get_workspace

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js`


-----




### Dataform.install_npm_packages

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js`


-----




### Dataform.list_compilation_results

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js`


-----




### Dataform.list_release_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_release_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_release_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_release_configs.js`


-----




### Dataform.list_repositories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js`


-----




### Dataform.list_workflow_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_configs.js`


-----




### Dataform.list_workflow_invocations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js`


-----




### Dataform.list_workspaces

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js`


-----




### Dataform.make_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js`


-----




### Dataform.move_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js`


-----




### Dataform.move_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js`


-----




### Dataform.pull_git_commits

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js`


-----




### Dataform.push_git_commits

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js`


-----




### Dataform.query_compilation_result_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js`


-----




### Dataform.query_directory_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js`


-----




### Dataform.query_repository_directory_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_repository_directory_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_repository_directory_contents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_repository_directory_contents.js`


-----




### Dataform.query_workflow_invocation_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js`


-----




### Dataform.read_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js`


-----




### Dataform.read_repository_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_repository_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_repository_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_repository_file.js`


-----




### Dataform.remove_directory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js`


-----




### Dataform.remove_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js`


-----




### Dataform.reset_workspace_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js`


-----




### Dataform.update_release_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_release_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_release_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_release_config.js`


-----




### Dataform.update_repository

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js`


-----




### Dataform.update_workflow_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_workflow_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_workflow_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_workflow_config.js`


-----




### Dataform.write_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataform/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataform/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://dataform.co/
