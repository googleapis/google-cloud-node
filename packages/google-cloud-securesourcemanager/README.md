[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Secure Source Manager API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/securesourcemanager.svg)](https://www.npmjs.org/package/@google-cloud/securesourcemanager)

Secure Source Manager API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Secure Source Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/securesourcemanager/latest)
* [Secure Source Manager API Documentation](https://cloud.google.com/secure-source-manager/docs/overview)

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
1.  [Enable the Secure Source Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/securesourcemanager
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch create pull request comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.batch_create_pull_request_comments.js) |
| close issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.close_issue.js) |
| close pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.close_pull_request.js) |
| create branch rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_branch_rule.js) |
| create hook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_hook.js) |
| create instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_instance.js) |
| create issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_issue.js) |
| create issue comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_issue_comment.js) |
| create pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_pull_request.js) |
| create pull request comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_pull_request_comment.js) |
| create repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.create_repository.js) |
| delete branch rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_branch_rule.js) |
| delete hook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_hook.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_instance.js) |
| delete issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_issue.js) |
| delete issue comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_issue_comment.js) |
| delete pull request comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_pull_request_comment.js) |
| delete repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.delete_repository.js) |
| fetch blob | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.fetch_blob.js) |
| fetch tree | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.fetch_tree.js) |
| get branch rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_branch_rule.js) |
| get hook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_hook.js) |
| get iam policy repo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_iam_policy_repo.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_instance.js) |
| get issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_issue.js) |
| get issue comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_issue_comment.js) |
| get pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_pull_request.js) |
| get pull request comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_pull_request_comment.js) |
| get repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.get_repository.js) |
| list branch rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_branch_rules.js) |
| list hooks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_hooks.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_instances.js) |
| list issue comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_issue_comments.js) |
| list issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_issues.js) |
| list pull request comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_pull_request_comments.js) |
| list pull request file diffs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_pull_request_file_diffs.js) |
| list pull requests | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_pull_requests.js) |
| list repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.list_repositories.js) |
| merge pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.merge_pull_request.js) |
| open issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.open_issue.js) |
| open pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.open_pull_request.js) |
| resolve pull request comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.resolve_pull_request_comments.js) |
| set iam policy repo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.set_iam_policy_repo.js) |
| test iam permissions repo | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.test_iam_permissions_repo.js) |
| unresolve pull request comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.unresolve_pull_request_comments.js) |
| update branch rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_branch_rule.js) |
| update hook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_hook.js) |
| update issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_issue.js) |
| update issue comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_issue_comment.js) |
| update pull request | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_pull_request.js) |
| update pull request comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_pull_request_comment.js) |
| update repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/secure_source_manager.update_repository.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples/generated/v1/snippet_metadata_google.cloud.securesourcemanager.v1.json) |


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
For example, `npm install @google-cloud/securesourcemanager@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securesourcemanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securesourcemanager
