[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Data Catalog API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/datacatalog.svg)](https://www.npmjs.org/package/@google-cloud/datacatalog)

Google Cloud Data Catalog API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Google Cloud Data Catalog API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/datacatalog/latest)
* [Google Cloud Data Catalog API Documentation](https://cloud.google.com/data-catalog/docs)

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
1.  [Enable the Google Cloud Data Catalog API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/datacatalog
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js) |
| create entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js) |
| create tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js) |
| create tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js) |
| create tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js) |
| delete entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js) |
| delete entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js) |
| delete tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js) |
| delete tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js) |
| delete tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js) |
| get entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js) |
| get entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js) |
| get tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js) |
| import entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.import_entries.js) |
| list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js) |
| list entry groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js) |
| list tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js) |
| lookup entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js) |
| modify entry contacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js) |
| modify entry overview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js) |
| reconcile tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.reconcile_tags.js) |
| rename tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js) |
| rename tag template field enum value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js) |
| retrieve config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_config.js) |
| retrieve effective config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_effective_config.js) |
| search catalog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js) |
| set config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_config.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js) |
| star entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js) |
| unstar entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js) |
| update entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js) |
| update entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js) |
| update tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js) |
| update tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js) |
| update tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js) |
| create policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js) |
| create taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js) |
| delete policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js) |
| delete taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js) |
| get policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js) |
| get taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js) |
| list policy tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js) |
| list taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js) |
| update policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js) |
| update taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js) |
| export taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js) |
| import taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js) |
| replace taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/snippet_metadata_google.cloud.datacatalog.v1.json) |
| create entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js) |
| create entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js) |
| create tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js) |
| create tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js) |
| create tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js) |
| delete entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js) |
| delete entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js) |
| delete tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js) |
| delete tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js) |
| delete tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js) |
| get entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js) |
| get entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js) |
| get tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js) |
| list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js) |
| list entry groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js) |
| list tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js) |
| lookup entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js) |
| rename tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js) |
| rename tag template field enum value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field_enum_value.js) |
| search catalog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js) |
| update entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js) |
| update entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js) |
| update tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js) |
| update tag template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js) |
| update tag template field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js) |
| create policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js) |
| create taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js) |
| delete policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js) |
| delete taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js) |
| get policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js) |
| get taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js) |
| list policy tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js) |
| list taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js) |
| update policy tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js) |
| update taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js) |
| export taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js) |
| import taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/snippet_metadata_google.cloud.datacatalog.v1beta1.json) |


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
For example, `npm install @google-cloud/datacatalog@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datacatalog.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog
