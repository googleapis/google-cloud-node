[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AlloyDB API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Alloy_d_b_admin.batch_create_instances](#alloy_d_b_admin.batch_create_instances)
  * [Alloy_d_b_admin.create_backup](#alloy_d_b_admin.create_backup)
  * [Alloy_d_b_admin.create_cluster](#alloy_d_b_admin.create_cluster)
  * [Alloy_d_b_admin.create_instance](#alloy_d_b_admin.create_instance)
  * [Alloy_d_b_admin.create_secondary_cluster](#alloy_d_b_admin.create_secondary_cluster)
  * [Alloy_d_b_admin.create_secondary_instance](#alloy_d_b_admin.create_secondary_instance)
  * [Alloy_d_b_admin.create_user](#alloy_d_b_admin.create_user)
  * [Alloy_d_b_admin.delete_backup](#alloy_d_b_admin.delete_backup)
  * [Alloy_d_b_admin.delete_cluster](#alloy_d_b_admin.delete_cluster)
  * [Alloy_d_b_admin.delete_instance](#alloy_d_b_admin.delete_instance)
  * [Alloy_d_b_admin.delete_user](#alloy_d_b_admin.delete_user)
  * [Alloy_d_b_admin.execute_sql](#alloy_d_b_admin.execute_sql)
  * [Alloy_d_b_admin.failover_instance](#alloy_d_b_admin.failover_instance)
  * [Alloy_d_b_admin.generate_client_certificate](#alloy_d_b_admin.generate_client_certificate)
  * [Alloy_d_b_admin.get_backup](#alloy_d_b_admin.get_backup)
  * [Alloy_d_b_admin.get_cluster](#alloy_d_b_admin.get_cluster)
  * [Alloy_d_b_admin.get_connection_info](#alloy_d_b_admin.get_connection_info)
  * [Alloy_d_b_admin.get_instance](#alloy_d_b_admin.get_instance)
  * [Alloy_d_b_admin.get_user](#alloy_d_b_admin.get_user)
  * [Alloy_d_b_admin.inject_fault](#alloy_d_b_admin.inject_fault)
  * [Alloy_d_b_admin.list_backups](#alloy_d_b_admin.list_backups)
  * [Alloy_d_b_admin.list_clusters](#alloy_d_b_admin.list_clusters)
  * [Alloy_d_b_admin.list_databases](#alloy_d_b_admin.list_databases)
  * [Alloy_d_b_admin.list_instances](#alloy_d_b_admin.list_instances)
  * [Alloy_d_b_admin.list_supported_database_flags](#alloy_d_b_admin.list_supported_database_flags)
  * [Alloy_d_b_admin.list_users](#alloy_d_b_admin.list_users)
  * [Alloy_d_b_admin.promote_cluster](#alloy_d_b_admin.promote_cluster)
  * [Alloy_d_b_admin.restart_instance](#alloy_d_b_admin.restart_instance)
  * [Alloy_d_b_admin.restore_cluster](#alloy_d_b_admin.restore_cluster)
  * [Alloy_d_b_admin.switchover_cluster](#alloy_d_b_admin.switchover_cluster)
  * [Alloy_d_b_admin.update_backup](#alloy_d_b_admin.update_backup)
  * [Alloy_d_b_admin.update_cluster](#alloy_d_b_admin.update_cluster)
  * [Alloy_d_b_admin.update_instance](#alloy_d_b_admin.update_instance)
  * [Alloy_d_b_admin.update_user](#alloy_d_b_admin.update_user)
  * [Alloy_d_b_admin.batch_create_instances](#alloy_d_b_admin.batch_create_instances)
  * [Alloy_d_b_admin.create_backup](#alloy_d_b_admin.create_backup)
  * [Alloy_d_b_admin.create_cluster](#alloy_d_b_admin.create_cluster)
  * [Alloy_d_b_admin.create_instance](#alloy_d_b_admin.create_instance)
  * [Alloy_d_b_admin.create_secondary_cluster](#alloy_d_b_admin.create_secondary_cluster)
  * [Alloy_d_b_admin.create_secondary_instance](#alloy_d_b_admin.create_secondary_instance)
  * [Alloy_d_b_admin.create_user](#alloy_d_b_admin.create_user)
  * [Alloy_d_b_admin.delete_backup](#alloy_d_b_admin.delete_backup)
  * [Alloy_d_b_admin.delete_cluster](#alloy_d_b_admin.delete_cluster)
  * [Alloy_d_b_admin.delete_instance](#alloy_d_b_admin.delete_instance)
  * [Alloy_d_b_admin.delete_user](#alloy_d_b_admin.delete_user)
  * [Alloy_d_b_admin.execute_sql](#alloy_d_b_admin.execute_sql)
  * [Alloy_d_b_admin.failover_instance](#alloy_d_b_admin.failover_instance)
  * [Alloy_d_b_admin.generate_client_certificate](#alloy_d_b_admin.generate_client_certificate)
  * [Alloy_d_b_admin.get_backup](#alloy_d_b_admin.get_backup)
  * [Alloy_d_b_admin.get_cluster](#alloy_d_b_admin.get_cluster)
  * [Alloy_d_b_admin.get_connection_info](#alloy_d_b_admin.get_connection_info)
  * [Alloy_d_b_admin.get_instance](#alloy_d_b_admin.get_instance)
  * [Alloy_d_b_admin.get_user](#alloy_d_b_admin.get_user)
  * [Alloy_d_b_admin.inject_fault](#alloy_d_b_admin.inject_fault)
  * [Alloy_d_b_admin.list_backups](#alloy_d_b_admin.list_backups)
  * [Alloy_d_b_admin.list_clusters](#alloy_d_b_admin.list_clusters)
  * [Alloy_d_b_admin.list_databases](#alloy_d_b_admin.list_databases)
  * [Alloy_d_b_admin.list_instances](#alloy_d_b_admin.list_instances)
  * [Alloy_d_b_admin.list_supported_database_flags](#alloy_d_b_admin.list_supported_database_flags)
  * [Alloy_d_b_admin.list_users](#alloy_d_b_admin.list_users)
  * [Alloy_d_b_admin.promote_cluster](#alloy_d_b_admin.promote_cluster)
  * [Alloy_d_b_admin.restart_instance](#alloy_d_b_admin.restart_instance)
  * [Alloy_d_b_admin.restore_cluster](#alloy_d_b_admin.restore_cluster)
  * [Alloy_d_b_admin.switchover_cluster](#alloy_d_b_admin.switchover_cluster)
  * [Alloy_d_b_admin.update_backup](#alloy_d_b_admin.update_backup)
  * [Alloy_d_b_admin.update_cluster](#alloy_d_b_admin.update_cluster)
  * [Alloy_d_b_admin.update_instance](#alloy_d_b_admin.update_instance)
  * [Alloy_d_b_admin.update_user](#alloy_d_b_admin.update_user)
  * [Alloy_d_b_admin.upgrade_cluster](#alloy_d_b_admin.upgrade_cluster)
  * [Alloy_d_b_admin.batch_create_instances](#alloy_d_b_admin.batch_create_instances)
  * [Alloy_d_b_admin.create_backup](#alloy_d_b_admin.create_backup)
  * [Alloy_d_b_admin.create_cluster](#alloy_d_b_admin.create_cluster)
  * [Alloy_d_b_admin.create_instance](#alloy_d_b_admin.create_instance)
  * [Alloy_d_b_admin.create_secondary_cluster](#alloy_d_b_admin.create_secondary_cluster)
  * [Alloy_d_b_admin.create_secondary_instance](#alloy_d_b_admin.create_secondary_instance)
  * [Alloy_d_b_admin.create_user](#alloy_d_b_admin.create_user)
  * [Alloy_d_b_admin.delete_backup](#alloy_d_b_admin.delete_backup)
  * [Alloy_d_b_admin.delete_cluster](#alloy_d_b_admin.delete_cluster)
  * [Alloy_d_b_admin.delete_instance](#alloy_d_b_admin.delete_instance)
  * [Alloy_d_b_admin.delete_user](#alloy_d_b_admin.delete_user)
  * [Alloy_d_b_admin.execute_sql](#alloy_d_b_admin.execute_sql)
  * [Alloy_d_b_admin.failover_instance](#alloy_d_b_admin.failover_instance)
  * [Alloy_d_b_admin.generate_client_certificate](#alloy_d_b_admin.generate_client_certificate)
  * [Alloy_d_b_admin.get_backup](#alloy_d_b_admin.get_backup)
  * [Alloy_d_b_admin.get_cluster](#alloy_d_b_admin.get_cluster)
  * [Alloy_d_b_admin.get_connection_info](#alloy_d_b_admin.get_connection_info)
  * [Alloy_d_b_admin.get_instance](#alloy_d_b_admin.get_instance)
  * [Alloy_d_b_admin.get_user](#alloy_d_b_admin.get_user)
  * [Alloy_d_b_admin.inject_fault](#alloy_d_b_admin.inject_fault)
  * [Alloy_d_b_admin.list_backups](#alloy_d_b_admin.list_backups)
  * [Alloy_d_b_admin.list_clusters](#alloy_d_b_admin.list_clusters)
  * [Alloy_d_b_admin.list_databases](#alloy_d_b_admin.list_databases)
  * [Alloy_d_b_admin.list_instances](#alloy_d_b_admin.list_instances)
  * [Alloy_d_b_admin.list_supported_database_flags](#alloy_d_b_admin.list_supported_database_flags)
  * [Alloy_d_b_admin.list_users](#alloy_d_b_admin.list_users)
  * [Alloy_d_b_admin.promote_cluster](#alloy_d_b_admin.promote_cluster)
  * [Alloy_d_b_admin.restart_instance](#alloy_d_b_admin.restart_instance)
  * [Alloy_d_b_admin.restore_cluster](#alloy_d_b_admin.restore_cluster)
  * [Alloy_d_b_admin.switchover_cluster](#alloy_d_b_admin.switchover_cluster)
  * [Alloy_d_b_admin.update_backup](#alloy_d_b_admin.update_backup)
  * [Alloy_d_b_admin.update_cluster](#alloy_d_b_admin.update_cluster)
  * [Alloy_d_b_admin.update_instance](#alloy_d_b_admin.update_instance)
  * [Alloy_d_b_admin.update_user](#alloy_d_b_admin.update_user)
  * [Alloy_d_b_admin.upgrade_cluster](#alloy_d_b_admin.upgrade_cluster)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Alloy_d_b_admin.batch_create_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.batch_create_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.batch_create_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.batch_create_instances.js`


-----




### Alloy_d_b_admin.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_backup.js`


-----




### Alloy_d_b_admin.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_cluster.js`


-----




### Alloy_d_b_admin.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_instance.js`


-----




### Alloy_d_b_admin.create_secondary_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_cluster.js`


-----




### Alloy_d_b_admin.create_secondary_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_secondary_instance.js`


-----




### Alloy_d_b_admin.create_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.create_user.js`


-----




### Alloy_d_b_admin.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_backup.js`


-----




### Alloy_d_b_admin.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_cluster.js`


-----




### Alloy_d_b_admin.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_instance.js`


-----




### Alloy_d_b_admin.delete_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.delete_user.js`


-----




### Alloy_d_b_admin.execute_sql

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.execute_sql.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.execute_sql.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.execute_sql.js`


-----




### Alloy_d_b_admin.failover_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.failover_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.failover_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.failover_instance.js`


-----




### Alloy_d_b_admin.generate_client_certificate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.generate_client_certificate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.generate_client_certificate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.generate_client_certificate.js`


-----




### Alloy_d_b_admin.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_backup.js`


-----




### Alloy_d_b_admin.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_cluster.js`


-----




### Alloy_d_b_admin.get_connection_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_connection_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_connection_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_connection_info.js`


-----




### Alloy_d_b_admin.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_instance.js`


-----




### Alloy_d_b_admin.get_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.get_user.js`


-----




### Alloy_d_b_admin.inject_fault

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.inject_fault.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.inject_fault.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.inject_fault.js`


-----




### Alloy_d_b_admin.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_backups.js`


-----




### Alloy_d_b_admin.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_clusters.js`


-----




### Alloy_d_b_admin.list_databases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_databases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_databases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_databases.js`


-----




### Alloy_d_b_admin.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_instances.js`


-----




### Alloy_d_b_admin.list_supported_database_flags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_supported_database_flags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_supported_database_flags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_supported_database_flags.js`


-----




### Alloy_d_b_admin.list_users

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_users.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_users.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.list_users.js`


-----




### Alloy_d_b_admin.promote_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.promote_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.promote_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.promote_cluster.js`


-----




### Alloy_d_b_admin.restart_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restart_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restart_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restart_instance.js`


-----




### Alloy_d_b_admin.restore_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restore_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restore_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.restore_cluster.js`


-----




### Alloy_d_b_admin.switchover_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.switchover_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.switchover_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.switchover_cluster.js`


-----




### Alloy_d_b_admin.update_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_backup.js`


-----




### Alloy_d_b_admin.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_cluster.js`


-----




### Alloy_d_b_admin.update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_instance.js`


-----




### Alloy_d_b_admin.update_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1/alloy_d_b_admin.update_user.js`


-----




### Alloy_d_b_admin.batch_create_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.batch_create_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.batch_create_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.batch_create_instances.js`


-----




### Alloy_d_b_admin.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_backup.js`


-----




### Alloy_d_b_admin.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_cluster.js`


-----




### Alloy_d_b_admin.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_instance.js`


-----




### Alloy_d_b_admin.create_secondary_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_cluster.js`


-----




### Alloy_d_b_admin.create_secondary_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_secondary_instance.js`


-----




### Alloy_d_b_admin.create_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.create_user.js`


-----




### Alloy_d_b_admin.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_backup.js`


-----




### Alloy_d_b_admin.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_cluster.js`


-----




### Alloy_d_b_admin.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_instance.js`


-----




### Alloy_d_b_admin.delete_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.delete_user.js`


-----




### Alloy_d_b_admin.execute_sql

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.execute_sql.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.execute_sql.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.execute_sql.js`


-----




### Alloy_d_b_admin.failover_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.failover_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.failover_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.failover_instance.js`


-----




### Alloy_d_b_admin.generate_client_certificate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.generate_client_certificate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.generate_client_certificate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.generate_client_certificate.js`


-----




### Alloy_d_b_admin.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_backup.js`


-----




### Alloy_d_b_admin.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_cluster.js`


-----




### Alloy_d_b_admin.get_connection_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_connection_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_connection_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_connection_info.js`


-----




### Alloy_d_b_admin.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_instance.js`


-----




### Alloy_d_b_admin.get_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.get_user.js`


-----




### Alloy_d_b_admin.inject_fault

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.inject_fault.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.inject_fault.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.inject_fault.js`


-----




### Alloy_d_b_admin.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_backups.js`


-----




### Alloy_d_b_admin.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_clusters.js`


-----




### Alloy_d_b_admin.list_databases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_databases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_databases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_databases.js`


-----




### Alloy_d_b_admin.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_instances.js`


-----




### Alloy_d_b_admin.list_supported_database_flags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_supported_database_flags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_supported_database_flags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_supported_database_flags.js`


-----




### Alloy_d_b_admin.list_users

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_users.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_users.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.list_users.js`


-----




### Alloy_d_b_admin.promote_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.promote_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.promote_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.promote_cluster.js`


-----




### Alloy_d_b_admin.restart_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restart_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restart_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restart_instance.js`


-----




### Alloy_d_b_admin.restore_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restore_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restore_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.restore_cluster.js`


-----




### Alloy_d_b_admin.switchover_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.switchover_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.switchover_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.switchover_cluster.js`


-----




### Alloy_d_b_admin.update_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_backup.js`


-----




### Alloy_d_b_admin.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_cluster.js`


-----




### Alloy_d_b_admin.update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_instance.js`


-----




### Alloy_d_b_admin.update_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.update_user.js`


-----




### Alloy_d_b_admin.upgrade_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.upgrade_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.upgrade_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1alpha/alloy_d_b_admin.upgrade_cluster.js`


-----




### Alloy_d_b_admin.batch_create_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.batch_create_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.batch_create_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.batch_create_instances.js`


-----




### Alloy_d_b_admin.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_backup.js`


-----




### Alloy_d_b_admin.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_cluster.js`


-----




### Alloy_d_b_admin.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_instance.js`


-----




### Alloy_d_b_admin.create_secondary_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_cluster.js`


-----




### Alloy_d_b_admin.create_secondary_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_secondary_instance.js`


-----




### Alloy_d_b_admin.create_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.create_user.js`


-----




### Alloy_d_b_admin.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_backup.js`


-----




### Alloy_d_b_admin.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_cluster.js`


-----




### Alloy_d_b_admin.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_instance.js`


-----




### Alloy_d_b_admin.delete_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.delete_user.js`


-----




### Alloy_d_b_admin.execute_sql

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.execute_sql.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.execute_sql.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.execute_sql.js`


-----




### Alloy_d_b_admin.failover_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.failover_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.failover_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.failover_instance.js`


-----




### Alloy_d_b_admin.generate_client_certificate

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.generate_client_certificate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.generate_client_certificate.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.generate_client_certificate.js`


-----




### Alloy_d_b_admin.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_backup.js`


-----




### Alloy_d_b_admin.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_cluster.js`


-----




### Alloy_d_b_admin.get_connection_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_connection_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_connection_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_connection_info.js`


-----




### Alloy_d_b_admin.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_instance.js`


-----




### Alloy_d_b_admin.get_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.get_user.js`


-----




### Alloy_d_b_admin.inject_fault

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.inject_fault.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.inject_fault.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.inject_fault.js`


-----




### Alloy_d_b_admin.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_backups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_backups.js`


-----




### Alloy_d_b_admin.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_clusters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_clusters.js`


-----




### Alloy_d_b_admin.list_databases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_databases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_databases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_databases.js`


-----




### Alloy_d_b_admin.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_instances.js`


-----




### Alloy_d_b_admin.list_supported_database_flags

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_supported_database_flags.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_supported_database_flags.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_supported_database_flags.js`


-----




### Alloy_d_b_admin.list_users

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_users.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_users.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.list_users.js`


-----




### Alloy_d_b_admin.promote_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.promote_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.promote_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.promote_cluster.js`


-----




### Alloy_d_b_admin.restart_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restart_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restart_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restart_instance.js`


-----




### Alloy_d_b_admin.restore_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restore_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restore_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.restore_cluster.js`


-----




### Alloy_d_b_admin.switchover_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.switchover_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.switchover_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.switchover_cluster.js`


-----




### Alloy_d_b_admin.update_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_backup.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_backup.js`


-----




### Alloy_d_b_admin.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_cluster.js`


-----




### Alloy_d_b_admin.update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_instance.js`


-----




### Alloy_d_b_admin.update_user

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_user.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_user.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.update_user.js`


-----




### Alloy_d_b_admin.upgrade_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.upgrade_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.upgrade_cluster.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/generated/v1beta/alloy_d_b_admin.upgrade_cluster.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-alloydb/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-alloydb/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-alloydb/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/alloydb/docs
