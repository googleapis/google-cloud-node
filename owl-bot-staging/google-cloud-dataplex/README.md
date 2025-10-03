[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Dataplex API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/dataplex.svg)](https://www.npmjs.org/package/@google-cloud/dataplex)

Cloud Dataplex API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Dataplex API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/dataplex/latest)
* [Cloud Dataplex API Documentation](https://cloud.google.com/dataplex/docs/overview)

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
1.  [Enable the Cloud Dataplex API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/dataplex
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.create_glossary.js) |
| create glossary category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.create_glossary_category.js) |
| create glossary term | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.create_glossary_term.js) |
| delete glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.delete_glossary.js) |
| delete glossary category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.delete_glossary_category.js) |
| delete glossary term | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.delete_glossary_term.js) |
| get glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.get_glossary.js) |
| get glossary category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.get_glossary_category.js) |
| get glossary term | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.get_glossary_term.js) |
| list glossaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.list_glossaries.js) |
| list glossary categories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.list_glossary_categories.js) |
| list glossary terms | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.list_glossary_terms.js) |
| update glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.update_glossary.js) |
| update glossary category | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.update_glossary_category.js) |
| update glossary term | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/business_glossary_service.update_glossary_term.js) |
| cancel metadata job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.cancel_metadata_job.js) |
| create aspect type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_aspect_type.js) |
| create entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry.js) |
| create entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_group.js) |
| create entry link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_link.js) |
| create entry type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_type.js) |
| create metadata job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_metadata_job.js) |
| delete aspect type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_aspect_type.js) |
| delete entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry.js) |
| delete entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_group.js) |
| delete entry link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_link.js) |
| delete entry type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_type.js) |
| get aspect type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_aspect_type.js) |
| get entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry.js) |
| get entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_group.js) |
| get entry link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_link.js) |
| get entry type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_type.js) |
| get metadata job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_metadata_job.js) |
| list aspect types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_aspect_types.js) |
| list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entries.js) |
| list entry groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_groups.js) |
| list entry types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_types.js) |
| list metadata jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_metadata_jobs.js) |
| lookup entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.lookup_entry.js) |
| search entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.search_entries.js) |
| update aspect type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_aspect_type.js) |
| update entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry.js) |
| update entry group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_group.js) |
| update entry type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_type.js) |
| create encryption config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/cmek_service.create_encryption_config.js) |
| delete encryption config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/cmek_service.delete_encryption_config.js) |
| get encryption config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/cmek_service.get_encryption_config.js) |
| list encryption configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/cmek_service.list_encryption_configs.js) |
| update encryption config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/cmek_service.update_encryption_config.js) |
| create content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js) |
| delete content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js) |
| get content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js) |
| get iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js) |
| list content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js) |
| set iam policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js) |
| test iam permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js) |
| update content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js) |
| create data scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js) |
| delete data scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js) |
| generate data quality rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.generate_data_quality_rules.js) |
| get data scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js) |
| get data scan job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js) |
| list data scan jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js) |
| list data scans | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js) |
| run data scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js) |
| update data scan | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js) |
| create data attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js) |
| create data attribute binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js) |
| create data taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js) |
| delete data attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js) |
| delete data attribute binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js) |
| delete data taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js) |
| get data attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js) |
| get data attribute binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js) |
| get data taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js) |
| list data attribute bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js) |
| list data attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js) |
| list data taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js) |
| update data attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js) |
| update data attribute binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js) |
| update data taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js) |
| cancel job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js) |
| create asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js) |
| create lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js) |
| create task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js) |
| create zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js) |
| delete asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js) |
| delete lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js) |
| delete task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js) |
| delete zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js) |
| get asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js) |
| get job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js) |
| get lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js) |
| get task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js) |
| get zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js) |
| list asset actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js) |
| list assets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js) |
| list jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js) |
| list lake actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js) |
| list lakes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js) |
| list tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js) |
| list zone actions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js) |
| list zones | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js) |
| run task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js) |
| update asset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js) |
| update lake | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js) |
| update task | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js) |
| update zone | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js) |
| create entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js) |
| create partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js) |
| delete entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js) |
| delete partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js) |
| get entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js) |
| get partition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js) |
| list entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js) |
| list partitions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js) |
| update entity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/snippet_metadata_google.cloud.dataplex.v1.json) |


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
For example, `npm install @google-cloud/dataplex@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dataplex.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex
