[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Dataplex: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Catalog_service.cancel_metadata_job](#catalog_service.cancel_metadata_job)
  * [Catalog_service.create_aspect_type](#catalog_service.create_aspect_type)
  * [Catalog_service.create_entry](#catalog_service.create_entry)
  * [Catalog_service.create_entry_group](#catalog_service.create_entry_group)
  * [Catalog_service.create_entry_type](#catalog_service.create_entry_type)
  * [Catalog_service.create_metadata_job](#catalog_service.create_metadata_job)
  * [Catalog_service.delete_aspect_type](#catalog_service.delete_aspect_type)
  * [Catalog_service.delete_entry](#catalog_service.delete_entry)
  * [Catalog_service.delete_entry_group](#catalog_service.delete_entry_group)
  * [Catalog_service.delete_entry_type](#catalog_service.delete_entry_type)
  * [Catalog_service.get_aspect_type](#catalog_service.get_aspect_type)
  * [Catalog_service.get_entry](#catalog_service.get_entry)
  * [Catalog_service.get_entry_group](#catalog_service.get_entry_group)
  * [Catalog_service.get_entry_type](#catalog_service.get_entry_type)
  * [Catalog_service.get_metadata_job](#catalog_service.get_metadata_job)
  * [Catalog_service.list_aspect_types](#catalog_service.list_aspect_types)
  * [Catalog_service.list_entries](#catalog_service.list_entries)
  * [Catalog_service.list_entry_groups](#catalog_service.list_entry_groups)
  * [Catalog_service.list_entry_types](#catalog_service.list_entry_types)
  * [Catalog_service.list_metadata_jobs](#catalog_service.list_metadata_jobs)
  * [Catalog_service.lookup_entry](#catalog_service.lookup_entry)
  * [Catalog_service.search_entries](#catalog_service.search_entries)
  * [Catalog_service.update_aspect_type](#catalog_service.update_aspect_type)
  * [Catalog_service.update_entry](#catalog_service.update_entry)
  * [Catalog_service.update_entry_group](#catalog_service.update_entry_group)
  * [Catalog_service.update_entry_type](#catalog_service.update_entry_type)
  * [Content_service.create_content](#content_service.create_content)
  * [Content_service.delete_content](#content_service.delete_content)
  * [Content_service.get_content](#content_service.get_content)
  * [Content_service.get_iam_policy](#content_service.get_iam_policy)
  * [Content_service.list_content](#content_service.list_content)
  * [Content_service.set_iam_policy](#content_service.set_iam_policy)
  * [Content_service.test_iam_permissions](#content_service.test_iam_permissions)
  * [Content_service.update_content](#content_service.update_content)
  * [Data_scan_service.create_data_scan](#data_scan_service.create_data_scan)
  * [Data_scan_service.delete_data_scan](#data_scan_service.delete_data_scan)
  * [Data_scan_service.generate_data_quality_rules](#data_scan_service.generate_data_quality_rules)
  * [Data_scan_service.get_data_scan](#data_scan_service.get_data_scan)
  * [Data_scan_service.get_data_scan_job](#data_scan_service.get_data_scan_job)
  * [Data_scan_service.list_data_scan_jobs](#data_scan_service.list_data_scan_jobs)
  * [Data_scan_service.list_data_scans](#data_scan_service.list_data_scans)
  * [Data_scan_service.run_data_scan](#data_scan_service.run_data_scan)
  * [Data_scan_service.update_data_scan](#data_scan_service.update_data_scan)
  * [Data_taxonomy_service.create_data_attribute](#data_taxonomy_service.create_data_attribute)
  * [Data_taxonomy_service.create_data_attribute_binding](#data_taxonomy_service.create_data_attribute_binding)
  * [Data_taxonomy_service.create_data_taxonomy](#data_taxonomy_service.create_data_taxonomy)
  * [Data_taxonomy_service.delete_data_attribute](#data_taxonomy_service.delete_data_attribute)
  * [Data_taxonomy_service.delete_data_attribute_binding](#data_taxonomy_service.delete_data_attribute_binding)
  * [Data_taxonomy_service.delete_data_taxonomy](#data_taxonomy_service.delete_data_taxonomy)
  * [Data_taxonomy_service.get_data_attribute](#data_taxonomy_service.get_data_attribute)
  * [Data_taxonomy_service.get_data_attribute_binding](#data_taxonomy_service.get_data_attribute_binding)
  * [Data_taxonomy_service.get_data_taxonomy](#data_taxonomy_service.get_data_taxonomy)
  * [Data_taxonomy_service.list_data_attribute_bindings](#data_taxonomy_service.list_data_attribute_bindings)
  * [Data_taxonomy_service.list_data_attributes](#data_taxonomy_service.list_data_attributes)
  * [Data_taxonomy_service.list_data_taxonomies](#data_taxonomy_service.list_data_taxonomies)
  * [Data_taxonomy_service.update_data_attribute](#data_taxonomy_service.update_data_attribute)
  * [Data_taxonomy_service.update_data_attribute_binding](#data_taxonomy_service.update_data_attribute_binding)
  * [Data_taxonomy_service.update_data_taxonomy](#data_taxonomy_service.update_data_taxonomy)
  * [Dataplex_service.cancel_job](#dataplex_service.cancel_job)
  * [Dataplex_service.create_asset](#dataplex_service.create_asset)
  * [Dataplex_service.create_environment](#dataplex_service.create_environment)
  * [Dataplex_service.create_lake](#dataplex_service.create_lake)
  * [Dataplex_service.create_task](#dataplex_service.create_task)
  * [Dataplex_service.create_zone](#dataplex_service.create_zone)
  * [Dataplex_service.delete_asset](#dataplex_service.delete_asset)
  * [Dataplex_service.delete_environment](#dataplex_service.delete_environment)
  * [Dataplex_service.delete_lake](#dataplex_service.delete_lake)
  * [Dataplex_service.delete_task](#dataplex_service.delete_task)
  * [Dataplex_service.delete_zone](#dataplex_service.delete_zone)
  * [Dataplex_service.get_asset](#dataplex_service.get_asset)
  * [Dataplex_service.get_environment](#dataplex_service.get_environment)
  * [Dataplex_service.get_job](#dataplex_service.get_job)
  * [Dataplex_service.get_lake](#dataplex_service.get_lake)
  * [Dataplex_service.get_task](#dataplex_service.get_task)
  * [Dataplex_service.get_zone](#dataplex_service.get_zone)
  * [Dataplex_service.list_asset_actions](#dataplex_service.list_asset_actions)
  * [Dataplex_service.list_assets](#dataplex_service.list_assets)
  * [Dataplex_service.list_environments](#dataplex_service.list_environments)
  * [Dataplex_service.list_jobs](#dataplex_service.list_jobs)
  * [Dataplex_service.list_lake_actions](#dataplex_service.list_lake_actions)
  * [Dataplex_service.list_lakes](#dataplex_service.list_lakes)
  * [Dataplex_service.list_sessions](#dataplex_service.list_sessions)
  * [Dataplex_service.list_tasks](#dataplex_service.list_tasks)
  * [Dataplex_service.list_zone_actions](#dataplex_service.list_zone_actions)
  * [Dataplex_service.list_zones](#dataplex_service.list_zones)
  * [Dataplex_service.run_task](#dataplex_service.run_task)
  * [Dataplex_service.update_asset](#dataplex_service.update_asset)
  * [Dataplex_service.update_environment](#dataplex_service.update_environment)
  * [Dataplex_service.update_lake](#dataplex_service.update_lake)
  * [Dataplex_service.update_task](#dataplex_service.update_task)
  * [Dataplex_service.update_zone](#dataplex_service.update_zone)
  * [Metadata_service.create_entity](#metadata_service.create_entity)
  * [Metadata_service.create_partition](#metadata_service.create_partition)
  * [Metadata_service.delete_entity](#metadata_service.delete_entity)
  * [Metadata_service.delete_partition](#metadata_service.delete_partition)
  * [Metadata_service.get_entity](#metadata_service.get_entity)
  * [Metadata_service.get_partition](#metadata_service.get_partition)
  * [Metadata_service.list_entities](#metadata_service.list_entities)
  * [Metadata_service.list_partitions](#metadata_service.list_partitions)
  * [Metadata_service.update_entity](#metadata_service.update_entity)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Catalog_service.cancel_metadata_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.cancel_metadata_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.cancel_metadata_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.cancel_metadata_job.js`


-----




### Catalog_service.create_aspect_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_aspect_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_aspect_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_aspect_type.js`


-----




### Catalog_service.create_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry.js`


-----




### Catalog_service.create_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_group.js`


-----




### Catalog_service.create_entry_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_entry_type.js`


-----




### Catalog_service.create_metadata_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_metadata_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_metadata_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.create_metadata_job.js`


-----




### Catalog_service.delete_aspect_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_aspect_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_aspect_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_aspect_type.js`


-----




### Catalog_service.delete_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry.js`


-----




### Catalog_service.delete_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_group.js`


-----




### Catalog_service.delete_entry_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.delete_entry_type.js`


-----




### Catalog_service.get_aspect_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_aspect_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_aspect_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_aspect_type.js`


-----




### Catalog_service.get_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry.js`


-----




### Catalog_service.get_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_group.js`


-----




### Catalog_service.get_entry_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_entry_type.js`


-----




### Catalog_service.get_metadata_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_metadata_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_metadata_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.get_metadata_job.js`


-----




### Catalog_service.list_aspect_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_aspect_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_aspect_types.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_aspect_types.js`


-----




### Catalog_service.list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entries.js`


-----




### Catalog_service.list_entry_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_groups.js`


-----




### Catalog_service.list_entry_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_types.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_entry_types.js`


-----




### Catalog_service.list_metadata_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_metadata_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_metadata_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.list_metadata_jobs.js`


-----




### Catalog_service.lookup_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.lookup_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.lookup_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.lookup_entry.js`


-----




### Catalog_service.search_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.search_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.search_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.search_entries.js`


-----




### Catalog_service.update_aspect_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_aspect_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_aspect_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_aspect_type.js`


-----




### Catalog_service.update_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry.js`


-----




### Catalog_service.update_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_group.js`


-----




### Catalog_service.update_entry_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/catalog_service.update_entry_type.js`


-----




### Content_service.create_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.create_content.js`


-----




### Content_service.delete_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.delete_content.js`


-----




### Content_service.get_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.get_content.js`


-----




### Content_service.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.get_iam_policy.js`


-----




### Content_service.list_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.list_content.js`


-----




### Content_service.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.set_iam_policy.js`


-----




### Content_service.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.test_iam_permissions.js`


-----




### Content_service.update_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/content_service.update_content.js`


-----




### Data_scan_service.create_data_scan

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.create_data_scan.js`


-----




### Data_scan_service.delete_data_scan

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.delete_data_scan.js`


-----




### Data_scan_service.generate_data_quality_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.generate_data_quality_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.generate_data_quality_rules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.generate_data_quality_rules.js`


-----




### Data_scan_service.get_data_scan

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan.js`


-----




### Data_scan_service.get_data_scan_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.get_data_scan_job.js`


-----




### Data_scan_service.list_data_scan_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scan_jobs.js`


-----




### Data_scan_service.list_data_scans

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.list_data_scans.js`


-----




### Data_scan_service.run_data_scan

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.run_data_scan.js`


-----




### Data_scan_service.update_data_scan

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_scan_service.update_data_scan.js`


-----




### Data_taxonomy_service.create_data_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute.js`


-----




### Data_taxonomy_service.create_data_attribute_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_attribute_binding.js`


-----




### Data_taxonomy_service.create_data_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.create_data_taxonomy.js`


-----




### Data_taxonomy_service.delete_data_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute.js`


-----




### Data_taxonomy_service.delete_data_attribute_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_attribute_binding.js`


-----




### Data_taxonomy_service.delete_data_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.delete_data_taxonomy.js`


-----




### Data_taxonomy_service.get_data_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute.js`


-----




### Data_taxonomy_service.get_data_attribute_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_attribute_binding.js`


-----




### Data_taxonomy_service.get_data_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.get_data_taxonomy.js`


-----




### Data_taxonomy_service.list_data_attribute_bindings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attribute_bindings.js`


-----




### Data_taxonomy_service.list_data_attributes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_attributes.js`


-----




### Data_taxonomy_service.list_data_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.list_data_taxonomies.js`


-----




### Data_taxonomy_service.update_data_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute.js`


-----




### Data_taxonomy_service.update_data_attribute_binding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_attribute_binding.js`


-----




### Data_taxonomy_service.update_data_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/data_taxonomy_service.update_data_taxonomy.js`


-----




### Dataplex_service.cancel_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.cancel_job.js`


-----




### Dataplex_service.create_asset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_asset.js`


-----




### Dataplex_service.create_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_environment.js`


-----




### Dataplex_service.create_lake

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_lake.js`


-----




### Dataplex_service.create_task

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_task.js`


-----




### Dataplex_service.create_zone

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.create_zone.js`


-----




### Dataplex_service.delete_asset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_asset.js`


-----




### Dataplex_service.delete_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_environment.js`


-----




### Dataplex_service.delete_lake

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_lake.js`


-----




### Dataplex_service.delete_task

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_task.js`


-----




### Dataplex_service.delete_zone

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.delete_zone.js`


-----




### Dataplex_service.get_asset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_asset.js`


-----




### Dataplex_service.get_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_environment.js`


-----




### Dataplex_service.get_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_job.js`


-----




### Dataplex_service.get_lake

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_lake.js`


-----




### Dataplex_service.get_task

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_task.js`


-----




### Dataplex_service.get_zone

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.get_zone.js`


-----




### Dataplex_service.list_asset_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_asset_actions.js`


-----




### Dataplex_service.list_assets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_assets.js`


-----




### Dataplex_service.list_environments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_environments.js`


-----




### Dataplex_service.list_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_jobs.js`


-----




### Dataplex_service.list_lake_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lake_actions.js`


-----




### Dataplex_service.list_lakes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_lakes.js`


-----




### Dataplex_service.list_sessions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_sessions.js`


-----




### Dataplex_service.list_tasks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_tasks.js`


-----




### Dataplex_service.list_zone_actions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zone_actions.js`


-----




### Dataplex_service.list_zones

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.list_zones.js`


-----




### Dataplex_service.run_task

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.run_task.js`


-----




### Dataplex_service.update_asset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_asset.js`


-----




### Dataplex_service.update_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_environment.js`


-----




### Dataplex_service.update_lake

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_lake.js`


-----




### Dataplex_service.update_task

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_task.js`


-----




### Dataplex_service.update_zone

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/dataplex_service.update_zone.js`


-----




### Metadata_service.create_entity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_entity.js`


-----




### Metadata_service.create_partition

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.create_partition.js`


-----




### Metadata_service.delete_entity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_entity.js`


-----




### Metadata_service.delete_partition

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.delete_partition.js`


-----




### Metadata_service.get_entity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_entity.js`


-----




### Metadata_service.get_partition

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.get_partition.js`


-----




### Metadata_service.list_entities

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_entities.js`


-----




### Metadata_service.list_partitions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.list_partitions.js`


-----




### Metadata_service.update_entity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/generated/v1/metadata_service.update_entity.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dataplex/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-dataplex/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-dataplex/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/dataplex/
