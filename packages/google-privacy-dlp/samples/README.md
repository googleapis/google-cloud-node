[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Loss Prevention: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Dlp_service.activate_job_trigger](#dlp_service.activate_job_trigger)
  * [Dlp_service.cancel_dlp_job](#dlp_service.cancel_dlp_job)
  * [Dlp_service.create_connection](#dlp_service.create_connection)
  * [Dlp_service.create_deidentify_template](#dlp_service.create_deidentify_template)
  * [Dlp_service.create_discovery_config](#dlp_service.create_discovery_config)
  * [Dlp_service.create_dlp_job](#dlp_service.create_dlp_job)
  * [Dlp_service.create_inspect_template](#dlp_service.create_inspect_template)
  * [Dlp_service.create_job_trigger](#dlp_service.create_job_trigger)
  * [Dlp_service.create_stored_info_type](#dlp_service.create_stored_info_type)
  * [Dlp_service.deidentify_content](#dlp_service.deidentify_content)
  * [Dlp_service.delete_connection](#dlp_service.delete_connection)
  * [Dlp_service.delete_deidentify_template](#dlp_service.delete_deidentify_template)
  * [Dlp_service.delete_discovery_config](#dlp_service.delete_discovery_config)
  * [Dlp_service.delete_dlp_job](#dlp_service.delete_dlp_job)
  * [Dlp_service.delete_file_store_data_profile](#dlp_service.delete_file_store_data_profile)
  * [Dlp_service.delete_inspect_template](#dlp_service.delete_inspect_template)
  * [Dlp_service.delete_job_trigger](#dlp_service.delete_job_trigger)
  * [Dlp_service.delete_stored_info_type](#dlp_service.delete_stored_info_type)
  * [Dlp_service.delete_table_data_profile](#dlp_service.delete_table_data_profile)
  * [Dlp_service.finish_dlp_job](#dlp_service.finish_dlp_job)
  * [Dlp_service.get_column_data_profile](#dlp_service.get_column_data_profile)
  * [Dlp_service.get_connection](#dlp_service.get_connection)
  * [Dlp_service.get_deidentify_template](#dlp_service.get_deidentify_template)
  * [Dlp_service.get_discovery_config](#dlp_service.get_discovery_config)
  * [Dlp_service.get_dlp_job](#dlp_service.get_dlp_job)
  * [Dlp_service.get_file_store_data_profile](#dlp_service.get_file_store_data_profile)
  * [Dlp_service.get_inspect_template](#dlp_service.get_inspect_template)
  * [Dlp_service.get_job_trigger](#dlp_service.get_job_trigger)
  * [Dlp_service.get_project_data_profile](#dlp_service.get_project_data_profile)
  * [Dlp_service.get_stored_info_type](#dlp_service.get_stored_info_type)
  * [Dlp_service.get_table_data_profile](#dlp_service.get_table_data_profile)
  * [Dlp_service.hybrid_inspect_dlp_job](#dlp_service.hybrid_inspect_dlp_job)
  * [Dlp_service.hybrid_inspect_job_trigger](#dlp_service.hybrid_inspect_job_trigger)
  * [Dlp_service.inspect_content](#dlp_service.inspect_content)
  * [Dlp_service.list_column_data_profiles](#dlp_service.list_column_data_profiles)
  * [Dlp_service.list_connections](#dlp_service.list_connections)
  * [Dlp_service.list_deidentify_templates](#dlp_service.list_deidentify_templates)
  * [Dlp_service.list_discovery_configs](#dlp_service.list_discovery_configs)
  * [Dlp_service.list_dlp_jobs](#dlp_service.list_dlp_jobs)
  * [Dlp_service.list_file_store_data_profiles](#dlp_service.list_file_store_data_profiles)
  * [Dlp_service.list_info_types](#dlp_service.list_info_types)
  * [Dlp_service.list_inspect_templates](#dlp_service.list_inspect_templates)
  * [Dlp_service.list_job_triggers](#dlp_service.list_job_triggers)
  * [Dlp_service.list_project_data_profiles](#dlp_service.list_project_data_profiles)
  * [Dlp_service.list_stored_info_types](#dlp_service.list_stored_info_types)
  * [Dlp_service.list_table_data_profiles](#dlp_service.list_table_data_profiles)
  * [Dlp_service.redact_image](#dlp_service.redact_image)
  * [Dlp_service.reidentify_content](#dlp_service.reidentify_content)
  * [Dlp_service.search_connections](#dlp_service.search_connections)
  * [Dlp_service.update_connection](#dlp_service.update_connection)
  * [Dlp_service.update_deidentify_template](#dlp_service.update_deidentify_template)
  * [Dlp_service.update_discovery_config](#dlp_service.update_discovery_config)
  * [Dlp_service.update_inspect_template](#dlp_service.update_inspect_template)
  * [Dlp_service.update_job_trigger](#dlp_service.update_job_trigger)
  * [Dlp_service.update_stored_info_type](#dlp_service.update_stored_info_type)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Dlp_service.activate_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.activate_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.activate_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.activate_job_trigger.js`


-----




### Dlp_service.cancel_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.cancel_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.cancel_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.cancel_dlp_job.js`


-----




### Dlp_service.create_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_connection.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_connection.js`


-----




### Dlp_service.create_deidentify_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_deidentify_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_deidentify_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_deidentify_template.js`


-----




### Dlp_service.create_discovery_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_discovery_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_discovery_config.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_discovery_config.js`


-----




### Dlp_service.create_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_dlp_job.js`


-----




### Dlp_service.create_inspect_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_inspect_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_inspect_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_inspect_template.js`


-----




### Dlp_service.create_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_job_trigger.js`


-----




### Dlp_service.create_stored_info_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_stored_info_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_stored_info_type.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_stored_info_type.js`


-----




### Dlp_service.deidentify_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.deidentify_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.deidentify_content.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.deidentify_content.js`


-----




### Dlp_service.delete_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_connection.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_connection.js`


-----




### Dlp_service.delete_deidentify_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_deidentify_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_deidentify_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_deidentify_template.js`


-----




### Dlp_service.delete_discovery_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_discovery_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_discovery_config.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_discovery_config.js`


-----




### Dlp_service.delete_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_dlp_job.js`


-----




### Dlp_service.delete_file_store_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_file_store_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_file_store_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_file_store_data_profile.js`


-----




### Dlp_service.delete_inspect_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_inspect_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_inspect_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_inspect_template.js`


-----




### Dlp_service.delete_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_job_trigger.js`


-----




### Dlp_service.delete_stored_info_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_stored_info_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_stored_info_type.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_stored_info_type.js`


-----




### Dlp_service.delete_table_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_table_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_table_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_table_data_profile.js`


-----




### Dlp_service.finish_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.finish_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.finish_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.finish_dlp_job.js`


-----




### Dlp_service.get_column_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_column_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_column_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_column_data_profile.js`


-----




### Dlp_service.get_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_connection.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_connection.js`


-----




### Dlp_service.get_deidentify_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_deidentify_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_deidentify_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_deidentify_template.js`


-----




### Dlp_service.get_discovery_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_discovery_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_discovery_config.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_discovery_config.js`


-----




### Dlp_service.get_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_dlp_job.js`


-----




### Dlp_service.get_file_store_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_file_store_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_file_store_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_file_store_data_profile.js`


-----




### Dlp_service.get_inspect_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_inspect_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_inspect_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_inspect_template.js`


-----




### Dlp_service.get_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_job_trigger.js`


-----




### Dlp_service.get_project_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_project_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_project_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_project_data_profile.js`


-----




### Dlp_service.get_stored_info_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_stored_info_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_stored_info_type.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_stored_info_type.js`


-----




### Dlp_service.get_table_data_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_table_data_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_table_data_profile.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_table_data_profile.js`


-----




### Dlp_service.hybrid_inspect_dlp_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_dlp_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_dlp_job.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_dlp_job.js`


-----




### Dlp_service.hybrid_inspect_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_job_trigger.js`


-----




### Dlp_service.inspect_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.inspect_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.inspect_content.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.inspect_content.js`


-----




### Dlp_service.list_column_data_profiles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_column_data_profiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_column_data_profiles.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_column_data_profiles.js`


-----




### Dlp_service.list_connections

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_connections.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_connections.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_connections.js`


-----




### Dlp_service.list_deidentify_templates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_deidentify_templates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_deidentify_templates.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_deidentify_templates.js`


-----




### Dlp_service.list_discovery_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_discovery_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_discovery_configs.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_discovery_configs.js`


-----




### Dlp_service.list_dlp_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_dlp_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_dlp_jobs.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_dlp_jobs.js`


-----




### Dlp_service.list_file_store_data_profiles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_file_store_data_profiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_file_store_data_profiles.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_file_store_data_profiles.js`


-----




### Dlp_service.list_info_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_info_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_info_types.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_info_types.js`


-----




### Dlp_service.list_inspect_templates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_inspect_templates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_inspect_templates.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_inspect_templates.js`


-----




### Dlp_service.list_job_triggers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_job_triggers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_job_triggers.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_job_triggers.js`


-----




### Dlp_service.list_project_data_profiles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_project_data_profiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_project_data_profiles.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_project_data_profiles.js`


-----




### Dlp_service.list_stored_info_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_stored_info_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_stored_info_types.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_stored_info_types.js`


-----




### Dlp_service.list_table_data_profiles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_table_data_profiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_table_data_profiles.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_table_data_profiles.js`


-----




### Dlp_service.redact_image

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.redact_image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.redact_image.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.redact_image.js`


-----




### Dlp_service.reidentify_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.reidentify_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.reidentify_content.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.reidentify_content.js`


-----




### Dlp_service.search_connections

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.search_connections.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.search_connections.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.search_connections.js`


-----




### Dlp_service.update_connection

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_connection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_connection.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_connection.js`


-----




### Dlp_service.update_deidentify_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_deidentify_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_deidentify_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_deidentify_template.js`


-----




### Dlp_service.update_discovery_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_discovery_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_discovery_config.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_discovery_config.js`


-----




### Dlp_service.update_inspect_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_inspect_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_inspect_template.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_inspect_template.js`


-----




### Dlp_service.update_job_trigger

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_job_trigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_job_trigger.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_job_trigger.js`


-----




### Dlp_service.update_stored_info_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_stored_info_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_stored_info_type.js,samples/README.md)

__Usage:__


`node packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_stored_info_type.js`


-----




### Quickstart

Inspects and assesses a string.

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js my-project`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/dlp/docs/
