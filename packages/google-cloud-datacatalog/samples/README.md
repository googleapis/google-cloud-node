[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Catalog: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Data_catalog.create_entry](#data_catalog.create_entry)
  * [Data_catalog.create_entry_group](#data_catalog.create_entry_group)
  * [Data_catalog.create_tag](#data_catalog.create_tag)
  * [Data_catalog.create_tag_template](#data_catalog.create_tag_template)
  * [Data_catalog.create_tag_template_field](#data_catalog.create_tag_template_field)
  * [Data_catalog.delete_entry](#data_catalog.delete_entry)
  * [Data_catalog.delete_entry_group](#data_catalog.delete_entry_group)
  * [Data_catalog.delete_tag](#data_catalog.delete_tag)
  * [Data_catalog.delete_tag_template](#data_catalog.delete_tag_template)
  * [Data_catalog.delete_tag_template_field](#data_catalog.delete_tag_template_field)
  * [Data_catalog.get_entry](#data_catalog.get_entry)
  * [Data_catalog.get_entry_group](#data_catalog.get_entry_group)
  * [Data_catalog.get_iam_policy](#data_catalog.get_iam_policy)
  * [Data_catalog.get_tag_template](#data_catalog.get_tag_template)
  * [Data_catalog.import_entries](#data_catalog.import_entries)
  * [Data_catalog.list_entries](#data_catalog.list_entries)
  * [Data_catalog.list_entry_groups](#data_catalog.list_entry_groups)
  * [Data_catalog.list_tags](#data_catalog.list_tags)
  * [Data_catalog.lookup_entry](#data_catalog.lookup_entry)
  * [Data_catalog.modify_entry_contacts](#data_catalog.modify_entry_contacts)
  * [Data_catalog.modify_entry_overview](#data_catalog.modify_entry_overview)
  * [Data_catalog.reconcile_tags](#data_catalog.reconcile_tags)
  * [Data_catalog.rename_tag_template_field](#data_catalog.rename_tag_template_field)
  * [Data_catalog.rename_tag_template_field_enum_value](#data_catalog.rename_tag_template_field_enum_value)
  * [Data_catalog.retrieve_config](#data_catalog.retrieve_config)
  * [Data_catalog.retrieve_effective_config](#data_catalog.retrieve_effective_config)
  * [Data_catalog.search_catalog](#data_catalog.search_catalog)
  * [Data_catalog.set_config](#data_catalog.set_config)
  * [Data_catalog.set_iam_policy](#data_catalog.set_iam_policy)
  * [Data_catalog.star_entry](#data_catalog.star_entry)
  * [Data_catalog.test_iam_permissions](#data_catalog.test_iam_permissions)
  * [Data_catalog.unstar_entry](#data_catalog.unstar_entry)
  * [Data_catalog.update_entry](#data_catalog.update_entry)
  * [Data_catalog.update_entry_group](#data_catalog.update_entry_group)
  * [Data_catalog.update_tag](#data_catalog.update_tag)
  * [Data_catalog.update_tag_template](#data_catalog.update_tag_template)
  * [Data_catalog.update_tag_template_field](#data_catalog.update_tag_template_field)
  * [Policy_tag_manager.create_policy_tag](#policy_tag_manager.create_policy_tag)
  * [Policy_tag_manager.create_taxonomy](#policy_tag_manager.create_taxonomy)
  * [Policy_tag_manager.delete_policy_tag](#policy_tag_manager.delete_policy_tag)
  * [Policy_tag_manager.delete_taxonomy](#policy_tag_manager.delete_taxonomy)
  * [Policy_tag_manager.get_iam_policy](#policy_tag_manager.get_iam_policy)
  * [Policy_tag_manager.get_policy_tag](#policy_tag_manager.get_policy_tag)
  * [Policy_tag_manager.get_taxonomy](#policy_tag_manager.get_taxonomy)
  * [Policy_tag_manager.list_policy_tags](#policy_tag_manager.list_policy_tags)
  * [Policy_tag_manager.list_taxonomies](#policy_tag_manager.list_taxonomies)
  * [Policy_tag_manager.set_iam_policy](#policy_tag_manager.set_iam_policy)
  * [Policy_tag_manager.test_iam_permissions](#policy_tag_manager.test_iam_permissions)
  * [Policy_tag_manager.update_policy_tag](#policy_tag_manager.update_policy_tag)
  * [Policy_tag_manager.update_taxonomy](#policy_tag_manager.update_taxonomy)
  * [Policy_tag_manager_serialization.export_taxonomies](#policy_tag_manager_serialization.export_taxonomies)
  * [Policy_tag_manager_serialization.import_taxonomies](#policy_tag_manager_serialization.import_taxonomies)
  * [Policy_tag_manager_serialization.replace_taxonomy](#policy_tag_manager_serialization.replace_taxonomy)
  * [Data_catalog.create_entry](#data_catalog.create_entry)
  * [Data_catalog.create_entry_group](#data_catalog.create_entry_group)
  * [Data_catalog.create_tag](#data_catalog.create_tag)
  * [Data_catalog.create_tag_template](#data_catalog.create_tag_template)
  * [Data_catalog.create_tag_template_field](#data_catalog.create_tag_template_field)
  * [Data_catalog.delete_entry](#data_catalog.delete_entry)
  * [Data_catalog.delete_entry_group](#data_catalog.delete_entry_group)
  * [Data_catalog.delete_tag](#data_catalog.delete_tag)
  * [Data_catalog.delete_tag_template](#data_catalog.delete_tag_template)
  * [Data_catalog.delete_tag_template_field](#data_catalog.delete_tag_template_field)
  * [Data_catalog.get_entry](#data_catalog.get_entry)
  * [Data_catalog.get_entry_group](#data_catalog.get_entry_group)
  * [Data_catalog.get_iam_policy](#data_catalog.get_iam_policy)
  * [Data_catalog.get_tag_template](#data_catalog.get_tag_template)
  * [Data_catalog.list_entries](#data_catalog.list_entries)
  * [Data_catalog.list_entry_groups](#data_catalog.list_entry_groups)
  * [Data_catalog.list_tags](#data_catalog.list_tags)
  * [Data_catalog.lookup_entry](#data_catalog.lookup_entry)
  * [Data_catalog.rename_tag_template_field](#data_catalog.rename_tag_template_field)
  * [Data_catalog.rename_tag_template_field_enum_value](#data_catalog.rename_tag_template_field_enum_value)
  * [Data_catalog.search_catalog](#data_catalog.search_catalog)
  * [Data_catalog.set_iam_policy](#data_catalog.set_iam_policy)
  * [Data_catalog.test_iam_permissions](#data_catalog.test_iam_permissions)
  * [Data_catalog.update_entry](#data_catalog.update_entry)
  * [Data_catalog.update_entry_group](#data_catalog.update_entry_group)
  * [Data_catalog.update_tag](#data_catalog.update_tag)
  * [Data_catalog.update_tag_template](#data_catalog.update_tag_template)
  * [Data_catalog.update_tag_template_field](#data_catalog.update_tag_template_field)
  * [Policy_tag_manager.create_policy_tag](#policy_tag_manager.create_policy_tag)
  * [Policy_tag_manager.create_taxonomy](#policy_tag_manager.create_taxonomy)
  * [Policy_tag_manager.delete_policy_tag](#policy_tag_manager.delete_policy_tag)
  * [Policy_tag_manager.delete_taxonomy](#policy_tag_manager.delete_taxonomy)
  * [Policy_tag_manager.get_iam_policy](#policy_tag_manager.get_iam_policy)
  * [Policy_tag_manager.get_policy_tag](#policy_tag_manager.get_policy_tag)
  * [Policy_tag_manager.get_taxonomy](#policy_tag_manager.get_taxonomy)
  * [Policy_tag_manager.list_policy_tags](#policy_tag_manager.list_policy_tags)
  * [Policy_tag_manager.list_taxonomies](#policy_tag_manager.list_taxonomies)
  * [Policy_tag_manager.set_iam_policy](#policy_tag_manager.set_iam_policy)
  * [Policy_tag_manager.test_iam_permissions](#policy_tag_manager.test_iam_permissions)
  * [Policy_tag_manager.update_policy_tag](#policy_tag_manager.update_policy_tag)
  * [Policy_tag_manager.update_taxonomy](#policy_tag_manager.update_taxonomy)
  * [Policy_tag_manager_serialization.export_taxonomies](#policy_tag_manager_serialization.export_taxonomies)
  * [Policy_tag_manager_serialization.import_taxonomies](#policy_tag_manager_serialization.import_taxonomies)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Data_catalog.create_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js`


-----




### Data_catalog.create_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js`


-----




### Data_catalog.create_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js`


-----




### Data_catalog.create_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js`


-----




### Data_catalog.create_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js`


-----




### Data_catalog.delete_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js`


-----




### Data_catalog.delete_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js`


-----




### Data_catalog.delete_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js`


-----




### Data_catalog.delete_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js`


-----




### Data_catalog.delete_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js`


-----




### Data_catalog.get_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js`


-----




### Data_catalog.get_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js`


-----




### Data_catalog.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js`


-----




### Data_catalog.get_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js`


-----




### Data_catalog.import_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.import_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.import_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.import_entries.js`


-----




### Data_catalog.list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js`


-----




### Data_catalog.list_entry_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js`


-----




### Data_catalog.list_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js`


-----




### Data_catalog.lookup_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js`


-----




### Data_catalog.modify_entry_contacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js`


-----




### Data_catalog.modify_entry_overview

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js`


-----




### Data_catalog.reconcile_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.reconcile_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.reconcile_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.reconcile_tags.js`


-----




### Data_catalog.rename_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js`


-----




### Data_catalog.rename_tag_template_field_enum_value

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js`


-----




### Data_catalog.retrieve_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_config.js`


-----




### Data_catalog.retrieve_effective_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_effective_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_effective_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.retrieve_effective_config.js`


-----




### Data_catalog.search_catalog

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js`


-----




### Data_catalog.set_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_config.js`


-----




### Data_catalog.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js`


-----




### Data_catalog.star_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js`


-----




### Data_catalog.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js`


-----




### Data_catalog.unstar_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js`


-----




### Data_catalog.update_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js`


-----




### Data_catalog.update_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js`


-----




### Data_catalog.update_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js`


-----




### Data_catalog.update_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js`


-----




### Data_catalog.update_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js`


-----




### Policy_tag_manager.create_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js`


-----




### Policy_tag_manager.create_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js`


-----




### Policy_tag_manager.delete_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js`


-----




### Policy_tag_manager.delete_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js`


-----




### Policy_tag_manager.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js`


-----




### Policy_tag_manager.get_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js`


-----




### Policy_tag_manager.get_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js`


-----




### Policy_tag_manager.list_policy_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js`


-----




### Policy_tag_manager.list_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js`


-----




### Policy_tag_manager.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js`


-----




### Policy_tag_manager.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js`


-----




### Policy_tag_manager.update_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js`


-----




### Policy_tag_manager.update_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js`


-----




### Policy_tag_manager_serialization.export_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js`


-----




### Policy_tag_manager_serialization.import_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js`


-----




### Policy_tag_manager_serialization.replace_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js`


-----




### Data_catalog.create_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js`


-----




### Data_catalog.create_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js`


-----




### Data_catalog.create_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js`


-----




### Data_catalog.create_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js`


-----




### Data_catalog.create_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js`


-----




### Data_catalog.delete_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js`


-----




### Data_catalog.delete_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js`


-----




### Data_catalog.delete_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js`


-----




### Data_catalog.delete_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js`


-----




### Data_catalog.delete_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js`


-----




### Data_catalog.get_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js`


-----




### Data_catalog.get_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js`


-----




### Data_catalog.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js`


-----




### Data_catalog.get_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js`


-----




### Data_catalog.list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js`


-----




### Data_catalog.list_entry_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js`


-----




### Data_catalog.list_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js`


-----




### Data_catalog.lookup_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js`


-----




### Data_catalog.rename_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js`


-----




### Data_catalog.rename_tag_template_field_enum_value

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field_enum_value.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field_enum_value.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field_enum_value.js`


-----




### Data_catalog.search_catalog

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js`


-----




### Data_catalog.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js`


-----




### Data_catalog.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js`


-----




### Data_catalog.update_entry

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js`


-----




### Data_catalog.update_entry_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js`


-----




### Data_catalog.update_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js`


-----




### Data_catalog.update_tag_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js`


-----




### Data_catalog.update_tag_template_field

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js`


-----




### Policy_tag_manager.create_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js`


-----




### Policy_tag_manager.create_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js`


-----




### Policy_tag_manager.delete_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js`


-----




### Policy_tag_manager.delete_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js`


-----




### Policy_tag_manager.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js`


-----




### Policy_tag_manager.get_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js`


-----




### Policy_tag_manager.get_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js`


-----




### Policy_tag_manager.list_policy_tags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js`


-----




### Policy_tag_manager.list_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js`


-----




### Policy_tag_manager.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js`


-----




### Policy_tag_manager.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js`


-----




### Policy_tag_manager.update_policy_tag

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js`


-----




### Policy_tag_manager.update_taxonomy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js`


-----




### Policy_tag_manager_serialization.export_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js`


-----




### Policy_tag_manager_serialization.import_taxonomies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-datacatalog/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/data-catalog/
