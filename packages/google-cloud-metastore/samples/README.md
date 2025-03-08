[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dataproc Metastore: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Dataproc_metastore.alter_metadata_resource_location](#dataproc_metastore.alter_metadata_resource_location)
  * [Dataproc_metastore.create_backup](#dataproc_metastore.create_backup)
  * [Dataproc_metastore.create_metadata_import](#dataproc_metastore.create_metadata_import)
  * [Dataproc_metastore.create_service](#dataproc_metastore.create_service)
  * [Dataproc_metastore.delete_backup](#dataproc_metastore.delete_backup)
  * [Dataproc_metastore.delete_service](#dataproc_metastore.delete_service)
  * [Dataproc_metastore.export_metadata](#dataproc_metastore.export_metadata)
  * [Dataproc_metastore.get_backup](#dataproc_metastore.get_backup)
  * [Dataproc_metastore.get_metadata_import](#dataproc_metastore.get_metadata_import)
  * [Dataproc_metastore.get_service](#dataproc_metastore.get_service)
  * [Dataproc_metastore.list_backups](#dataproc_metastore.list_backups)
  * [Dataproc_metastore.list_metadata_imports](#dataproc_metastore.list_metadata_imports)
  * [Dataproc_metastore.list_services](#dataproc_metastore.list_services)
  * [Dataproc_metastore.move_table_to_database](#dataproc_metastore.move_table_to_database)
  * [Dataproc_metastore.query_metadata](#dataproc_metastore.query_metadata)
  * [Dataproc_metastore.restore_service](#dataproc_metastore.restore_service)
  * [Dataproc_metastore.update_metadata_import](#dataproc_metastore.update_metadata_import)
  * [Dataproc_metastore.update_service](#dataproc_metastore.update_service)
  * [Dataproc_metastore_federation.create_federation](#dataproc_metastore_federation.create_federation)
  * [Dataproc_metastore_federation.delete_federation](#dataproc_metastore_federation.delete_federation)
  * [Dataproc_metastore_federation.get_federation](#dataproc_metastore_federation.get_federation)
  * [Dataproc_metastore_federation.list_federations](#dataproc_metastore_federation.list_federations)
  * [Dataproc_metastore_federation.update_federation](#dataproc_metastore_federation.update_federation)
  * [Dataproc_metastore.alter_metadata_resource_location](#dataproc_metastore.alter_metadata_resource_location)
  * [Dataproc_metastore.create_backup](#dataproc_metastore.create_backup)
  * [Dataproc_metastore.create_metadata_import](#dataproc_metastore.create_metadata_import)
  * [Dataproc_metastore.create_service](#dataproc_metastore.create_service)
  * [Dataproc_metastore.delete_backup](#dataproc_metastore.delete_backup)
  * [Dataproc_metastore.delete_service](#dataproc_metastore.delete_service)
  * [Dataproc_metastore.export_metadata](#dataproc_metastore.export_metadata)
  * [Dataproc_metastore.get_backup](#dataproc_metastore.get_backup)
  * [Dataproc_metastore.get_metadata_import](#dataproc_metastore.get_metadata_import)
  * [Dataproc_metastore.get_service](#dataproc_metastore.get_service)
  * [Dataproc_metastore.list_backups](#dataproc_metastore.list_backups)
  * [Dataproc_metastore.list_metadata_imports](#dataproc_metastore.list_metadata_imports)
  * [Dataproc_metastore.list_services](#dataproc_metastore.list_services)
  * [Dataproc_metastore.move_table_to_database](#dataproc_metastore.move_table_to_database)
  * [Dataproc_metastore.query_metadata](#dataproc_metastore.query_metadata)
  * [Dataproc_metastore.remove_iam_policy](#dataproc_metastore.remove_iam_policy)
  * [Dataproc_metastore.restore_service](#dataproc_metastore.restore_service)
  * [Dataproc_metastore.update_metadata_import](#dataproc_metastore.update_metadata_import)
  * [Dataproc_metastore.update_service](#dataproc_metastore.update_service)
  * [Dataproc_metastore_federation.create_federation](#dataproc_metastore_federation.create_federation)
  * [Dataproc_metastore_federation.delete_federation](#dataproc_metastore_federation.delete_federation)
  * [Dataproc_metastore_federation.get_federation](#dataproc_metastore_federation.get_federation)
  * [Dataproc_metastore_federation.list_federations](#dataproc_metastore_federation.list_federations)
  * [Dataproc_metastore_federation.update_federation](#dataproc_metastore_federation.update_federation)
  * [Dataproc_metastore.alter_metadata_resource_location](#dataproc_metastore.alter_metadata_resource_location)
  * [Dataproc_metastore.create_backup](#dataproc_metastore.create_backup)
  * [Dataproc_metastore.create_metadata_import](#dataproc_metastore.create_metadata_import)
  * [Dataproc_metastore.create_service](#dataproc_metastore.create_service)
  * [Dataproc_metastore.delete_backup](#dataproc_metastore.delete_backup)
  * [Dataproc_metastore.delete_service](#dataproc_metastore.delete_service)
  * [Dataproc_metastore.export_metadata](#dataproc_metastore.export_metadata)
  * [Dataproc_metastore.get_backup](#dataproc_metastore.get_backup)
  * [Dataproc_metastore.get_metadata_import](#dataproc_metastore.get_metadata_import)
  * [Dataproc_metastore.get_service](#dataproc_metastore.get_service)
  * [Dataproc_metastore.list_backups](#dataproc_metastore.list_backups)
  * [Dataproc_metastore.list_metadata_imports](#dataproc_metastore.list_metadata_imports)
  * [Dataproc_metastore.list_services](#dataproc_metastore.list_services)
  * [Dataproc_metastore.move_table_to_database](#dataproc_metastore.move_table_to_database)
  * [Dataproc_metastore.query_metadata](#dataproc_metastore.query_metadata)
  * [Dataproc_metastore.remove_iam_policy](#dataproc_metastore.remove_iam_policy)
  * [Dataproc_metastore.restore_service](#dataproc_metastore.restore_service)
  * [Dataproc_metastore.update_metadata_import](#dataproc_metastore.update_metadata_import)
  * [Dataproc_metastore.update_service](#dataproc_metastore.update_service)
  * [Dataproc_metastore_federation.create_federation](#dataproc_metastore_federation.create_federation)
  * [Dataproc_metastore_federation.delete_federation](#dataproc_metastore_federation.delete_federation)
  * [Dataproc_metastore_federation.get_federation](#dataproc_metastore_federation.get_federation)
  * [Dataproc_metastore_federation.list_federations](#dataproc_metastore_federation.list_federations)
  * [Dataproc_metastore_federation.update_federation](#dataproc_metastore_federation.update_federation)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Dataproc_metastore.alter_metadata_resource_location

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.alter_metadata_resource_location.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.alter_metadata_resource_location.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.alter_metadata_resource_location.js`


-----




### Dataproc_metastore.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_backup.js`


-----




### Dataproc_metastore.create_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_metadata_import.js`


-----




### Dataproc_metastore.create_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.create_service.js`


-----




### Dataproc_metastore.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_backup.js`


-----




### Dataproc_metastore.delete_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.delete_service.js`


-----




### Dataproc_metastore.export_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.export_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.export_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.export_metadata.js`


-----




### Dataproc_metastore.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_backup.js`


-----




### Dataproc_metastore.get_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_metadata_import.js`


-----




### Dataproc_metastore.get_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.get_service.js`


-----




### Dataproc_metastore.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_backups.js`


-----




### Dataproc_metastore.list_metadata_imports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_metadata_imports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_metadata_imports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_metadata_imports.js`


-----




### Dataproc_metastore.list_services

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_services.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_services.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.list_services.js`


-----




### Dataproc_metastore.move_table_to_database

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.move_table_to_database.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.move_table_to_database.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.move_table_to_database.js`


-----




### Dataproc_metastore.query_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.query_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.query_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.query_metadata.js`


-----




### Dataproc_metastore.restore_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.restore_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.restore_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.restore_service.js`


-----




### Dataproc_metastore.update_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_metadata_import.js`


-----




### Dataproc_metastore.update_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore.update_service.js`


-----




### Dataproc_metastore_federation.create_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.create_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.create_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.create_federation.js`


-----




### Dataproc_metastore_federation.delete_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.delete_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.delete_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.delete_federation.js`


-----




### Dataproc_metastore_federation.get_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.get_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.get_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.get_federation.js`


-----




### Dataproc_metastore_federation.list_federations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.list_federations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.list_federations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.list_federations.js`


-----




### Dataproc_metastore_federation.update_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.update_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.update_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1/dataproc_metastore_federation.update_federation.js`


-----




### Dataproc_metastore.alter_metadata_resource_location

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.alter_metadata_resource_location.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.alter_metadata_resource_location.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.alter_metadata_resource_location.js`


-----




### Dataproc_metastore.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_backup.js`


-----




### Dataproc_metastore.create_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_metadata_import.js`


-----




### Dataproc_metastore.create_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.create_service.js`


-----




### Dataproc_metastore.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_backup.js`


-----




### Dataproc_metastore.delete_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.delete_service.js`


-----




### Dataproc_metastore.export_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.export_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.export_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.export_metadata.js`


-----




### Dataproc_metastore.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_backup.js`


-----




### Dataproc_metastore.get_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_metadata_import.js`


-----




### Dataproc_metastore.get_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.get_service.js`


-----




### Dataproc_metastore.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_backups.js`


-----




### Dataproc_metastore.list_metadata_imports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_metadata_imports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_metadata_imports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_metadata_imports.js`


-----




### Dataproc_metastore.list_services

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_services.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_services.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.list_services.js`


-----




### Dataproc_metastore.move_table_to_database

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.move_table_to_database.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.move_table_to_database.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.move_table_to_database.js`


-----




### Dataproc_metastore.query_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.query_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.query_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.query_metadata.js`


-----




### Dataproc_metastore.remove_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.remove_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.remove_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.remove_iam_policy.js`


-----




### Dataproc_metastore.restore_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.restore_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.restore_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.restore_service.js`


-----




### Dataproc_metastore.update_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_metadata_import.js`


-----




### Dataproc_metastore.update_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore.update_service.js`


-----




### Dataproc_metastore_federation.create_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.create_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.create_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.create_federation.js`


-----




### Dataproc_metastore_federation.delete_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.delete_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.delete_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.delete_federation.js`


-----




### Dataproc_metastore_federation.get_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.get_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.get_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.get_federation.js`


-----




### Dataproc_metastore_federation.list_federations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.list_federations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.list_federations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.list_federations.js`


-----




### Dataproc_metastore_federation.update_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.update_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.update_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1alpha/dataproc_metastore_federation.update_federation.js`


-----




### Dataproc_metastore.alter_metadata_resource_location

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.alter_metadata_resource_location.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.alter_metadata_resource_location.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.alter_metadata_resource_location.js`


-----




### Dataproc_metastore.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_backup.js`


-----




### Dataproc_metastore.create_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_metadata_import.js`


-----




### Dataproc_metastore.create_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.create_service.js`


-----




### Dataproc_metastore.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_backup.js`


-----




### Dataproc_metastore.delete_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.delete_service.js`


-----




### Dataproc_metastore.export_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.export_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.export_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.export_metadata.js`


-----




### Dataproc_metastore.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_backup.js`


-----




### Dataproc_metastore.get_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_metadata_import.js`


-----




### Dataproc_metastore.get_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.get_service.js`


-----




### Dataproc_metastore.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_backups.js`


-----




### Dataproc_metastore.list_metadata_imports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_metadata_imports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_metadata_imports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_metadata_imports.js`


-----




### Dataproc_metastore.list_services

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_services.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_services.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.list_services.js`


-----




### Dataproc_metastore.move_table_to_database

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.move_table_to_database.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.move_table_to_database.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.move_table_to_database.js`


-----




### Dataproc_metastore.query_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.query_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.query_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.query_metadata.js`


-----




### Dataproc_metastore.remove_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.remove_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.remove_iam_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.remove_iam_policy.js`


-----




### Dataproc_metastore.restore_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.restore_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.restore_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.restore_service.js`


-----




### Dataproc_metastore.update_metadata_import

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_metadata_import.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_metadata_import.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_metadata_import.js`


-----




### Dataproc_metastore.update_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore.update_service.js`


-----




### Dataproc_metastore_federation.create_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.create_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.create_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.create_federation.js`


-----




### Dataproc_metastore_federation.delete_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.delete_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.delete_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.delete_federation.js`


-----




### Dataproc_metastore_federation.get_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.get_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.get_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.get_federation.js`


-----




### Dataproc_metastore_federation.list_federations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.list_federations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.list_federations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.list_federations.js`


-----




### Dataproc_metastore_federation.update_federation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.update_federation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.update_federation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/generated/v1beta/dataproc_metastore_federation.update_federation.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-metastore/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-metastore/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-metastore/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/dataproc-metastore/
