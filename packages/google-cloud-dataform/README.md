[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataform API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/dataform.svg)](https://www.npmjs.org/package/@google-cloud/dataform)

Dataform API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Dataform API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/dataform/latest)
* [Dataform API Documentation](https://cloud.google.com/dataform/docs/overview)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Dataform API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/dataform
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cancel workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.cancel_workflow_invocation.js) |
| commit repository changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.commit_repository_changes.js) |
| commit workspace changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.commit_workspace_changes.js) |
| compute repository access token status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.compute_repository_access_token_status.js) |
| create compilation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_compilation_result.js) |
| create release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_release_config.js) |
| create repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_repository.js) |
| create workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_workflow_config.js) |
| create workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_workflow_invocation.js) |
| create workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.create_workspace.js) |
| delete release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.delete_release_config.js) |
| delete repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.delete_repository.js) |
| delete workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.delete_workflow_config.js) |
| delete workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.delete_workflow_invocation.js) |
| delete workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.delete_workspace.js) |
| fetch file diff | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.fetch_file_diff.js) |
| fetch file git statuses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.fetch_file_git_statuses.js) |
| fetch git ahead behind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.fetch_git_ahead_behind.js) |
| fetch remote branches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.fetch_remote_branches.js) |
| fetch repository history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.fetch_repository_history.js) |
| get compilation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_compilation_result.js) |
| get config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_config.js) |
| get release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_release_config.js) |
| get repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_repository.js) |
| get workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_workflow_config.js) |
| get workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_workflow_invocation.js) |
| get workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.get_workspace.js) |
| install npm packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.install_npm_packages.js) |
| list compilation results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_compilation_results.js) |
| list release configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_release_configs.js) |
| list repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_repositories.js) |
| list workflow configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_workflow_configs.js) |
| list workflow invocations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_workflow_invocations.js) |
| list workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.list_workspaces.js) |
| make directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.make_directory.js) |
| move directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.move_directory.js) |
| move file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.move_file.js) |
| pull git commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.pull_git_commits.js) |
| push git commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.push_git_commits.js) |
| query compilation result actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.query_compilation_result_actions.js) |
| query directory contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.query_directory_contents.js) |
| query repository directory contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.query_repository_directory_contents.js) |
| query workflow invocation actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.query_workflow_invocation_actions.js) |
| read file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.read_file.js) |
| read repository file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.read_repository_file.js) |
| remove directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.remove_directory.js) |
| remove file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.remove_file.js) |
| reset workspace changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.reset_workspace_changes.js) |
| search files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.search_files.js) |
| update config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.update_config.js) |
| update release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.update_release_config.js) |
| update repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.update_repository.js) |
| update workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.update_workflow_config.js) |
| write file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/dataform.write_file.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1/snippet_metadata_google.cloud.dataform.v1.json) |
| cancel workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.cancel_workflow_invocation.js) |
| commit repository changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_repository_changes.js) |
| commit workspace changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.commit_workspace_changes.js) |
| compute repository access token status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.compute_repository_access_token_status.js) |
| create compilation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_compilation_result.js) |
| create release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_release_config.js) |
| create repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_repository.js) |
| create workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_config.js) |
| create workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workflow_invocation.js) |
| create workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.create_workspace.js) |
| delete release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_release_config.js) |
| delete repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_repository.js) |
| delete workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_config.js) |
| delete workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workflow_invocation.js) |
| delete workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.delete_workspace.js) |
| fetch file diff | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_diff.js) |
| fetch file git statuses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_file_git_statuses.js) |
| fetch git ahead behind | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_git_ahead_behind.js) |
| fetch remote branches | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_remote_branches.js) |
| fetch repository history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.fetch_repository_history.js) |
| get compilation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_compilation_result.js) |
| get config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_config.js) |
| get release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_release_config.js) |
| get repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_repository.js) |
| get workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_config.js) |
| get workflow invocation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workflow_invocation.js) |
| get workspace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.get_workspace.js) |
| install npm packages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.install_npm_packages.js) |
| list compilation results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_compilation_results.js) |
| list release configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_release_configs.js) |
| list repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_repositories.js) |
| list workflow configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_configs.js) |
| list workflow invocations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workflow_invocations.js) |
| list workspaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.list_workspaces.js) |
| make directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.make_directory.js) |
| move directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_directory.js) |
| move file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.move_file.js) |
| pull git commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.pull_git_commits.js) |
| push git commits | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.push_git_commits.js) |
| query compilation result actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_compilation_result_actions.js) |
| query directory contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_directory_contents.js) |
| query repository directory contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_repository_directory_contents.js) |
| query workflow invocation actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.query_workflow_invocation_actions.js) |
| read file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_file.js) |
| read repository file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.read_repository_file.js) |
| remove directory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_directory.js) |
| remove file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.remove_file.js) |
| reset workspace changes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.reset_workspace_changes.js) |
| search files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.search_files.js) |
| update config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_config.js) |
| update release config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_release_config.js) |
| update repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_repository.js) |
| update workflow config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.update_workflow_config.js) |
| write file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/dataform.write_file.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples/generated/v1beta1/snippet_metadata_google.cloud.dataform.v1beta1.json) |


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
For example, `npm install @google-cloud/dataform@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataform.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataform
