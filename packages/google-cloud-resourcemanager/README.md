[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Resource Manager API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/resource-manager.svg)](https://www.npmjs.org/package/@google-cloud/resource-manager)

Cloud Resource Manager API client for Node.js


> Node.js idiomatic client for [Cloud Resource Manager API][product-docs].

Google Cloud Platform provides container resources such as Organizations
and Projects, that allow you to group and hierarchically organize other
Cloud Platform resources. This hierarchical organization lets you easily
manage common aspects of your resources such as access control and
configuration settings. The [Cloud Resource Manager API](https://cloud.google.com/resource-manager/docs/)
enables you to programmatically manage these container resources.

### **_IMPORTANT NOTE_**
**Version 2.0.0 renames `@google-cloud/resource` to `@google-cloud/resource-manager` on npm.**

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Resource Manager API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/resourcemanager/latest)


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
1.  [Enable the Cloud Resource Manager API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/resource-manager
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.create_folder.js) |
| delete folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.delete_folder.js) |
| get folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.get_folder.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.get_iam_policy.js) |
| list folders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.list_folders.js) |
| move folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.move_folder.js) |
| search folders | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.search_folders.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.test_iam_permissions.js) |
| undelete folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.undelete_folder.js) |
| update folder | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/folders.update_folder.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/organizations.get_iam_policy.js) |
| get organization | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/organizations.get_organization.js) |
| search organizations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/organizations.search_organizations.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/organizations.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/organizations.test_iam_permissions.js) |
| create project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.create_project.js) |
| delete project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.delete_project.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.get_iam_policy.js) |
| get project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.get_project.js) |
| list projects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.list_projects.js) |
| move project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.move_project.js) |
| search projects | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.search_projects.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.test_iam_permissions.js) |
| undelete project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.undelete_project.js) |
| update project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/projects.update_project.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/snippet_metadata_google.cloud.resourcemanager.v3.json) |
| create tag binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_bindings.create_tag_binding.js) |
| delete tag binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_bindings.delete_tag_binding.js) |
| list effective tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_bindings.list_effective_tags.js) |
| list tag bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_bindings.list_tag_bindings.js) |
| create tag hold | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_holds.create_tag_hold.js) |
| delete tag hold | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_holds.delete_tag_hold.js) |
| list tag holds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_holds.list_tag_holds.js) |
| create tag key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.create_tag_key.js) |
| delete tag key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.delete_tag_key.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.get_iam_policy.js) |
| get namespaced tag key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.get_namespaced_tag_key.js) |
| get tag key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.get_tag_key.js) |
| list tag keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.list_tag_keys.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.test_iam_permissions.js) |
| update tag key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_keys.update_tag_key.js) |
| create tag value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.create_tag_value.js) |
| delete tag value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.delete_tag_value.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.get_iam_policy.js) |
| get namespaced tag value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.get_namespaced_tag_value.js) |
| get tag value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.get_tag_value.js) |
| list tag values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.list_tag_values.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.test_iam_permissions.js) |
| update tag value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples/generated/v3/tag_values.update_tag_value.js) |


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
For example, `npm install @google-cloud/resource-manager@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudresourcemanager.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-resourcemanager
