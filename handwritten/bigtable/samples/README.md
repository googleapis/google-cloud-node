[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Bigtable: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Bigtable_instance_admin.create_app_profile](#bigtable_instance_admin.create_app_profile)
  * [Bigtable_instance_admin.create_cluster](#bigtable_instance_admin.create_cluster)
  * [Bigtable_instance_admin.create_instance](#bigtable_instance_admin.create_instance)
  * [Bigtable_instance_admin.create_logical_view](#bigtable_instance_admin.create_logical_view)
  * [Bigtable_instance_admin.create_materialized_view](#bigtable_instance_admin.create_materialized_view)
  * [Bigtable_instance_admin.delete_app_profile](#bigtable_instance_admin.delete_app_profile)
  * [Bigtable_instance_admin.delete_cluster](#bigtable_instance_admin.delete_cluster)
  * [Bigtable_instance_admin.delete_instance](#bigtable_instance_admin.delete_instance)
  * [Bigtable_instance_admin.delete_logical_view](#bigtable_instance_admin.delete_logical_view)
  * [Bigtable_instance_admin.delete_materialized_view](#bigtable_instance_admin.delete_materialized_view)
  * [Bigtable_instance_admin.get_app_profile](#bigtable_instance_admin.get_app_profile)
  * [Bigtable_instance_admin.get_cluster](#bigtable_instance_admin.get_cluster)
  * [Bigtable_instance_admin.get_iam_policy](#bigtable_instance_admin.get_iam_policy)
  * [Bigtable_instance_admin.get_instance](#bigtable_instance_admin.get_instance)
  * [Bigtable_instance_admin.get_logical_view](#bigtable_instance_admin.get_logical_view)
  * [Bigtable_instance_admin.get_materialized_view](#bigtable_instance_admin.get_materialized_view)
  * [Bigtable_instance_admin.list_app_profiles](#bigtable_instance_admin.list_app_profiles)
  * [Bigtable_instance_admin.list_clusters](#bigtable_instance_admin.list_clusters)
  * [Bigtable_instance_admin.list_hot_tablets](#bigtable_instance_admin.list_hot_tablets)
  * [Bigtable_instance_admin.list_instances](#bigtable_instance_admin.list_instances)
  * [Bigtable_instance_admin.list_logical_views](#bigtable_instance_admin.list_logical_views)
  * [Bigtable_instance_admin.list_materialized_views](#bigtable_instance_admin.list_materialized_views)
  * [Bigtable_instance_admin.partial_update_cluster](#bigtable_instance_admin.partial_update_cluster)
  * [Bigtable_instance_admin.partial_update_instance](#bigtable_instance_admin.partial_update_instance)
  * [Bigtable_instance_admin.set_iam_policy](#bigtable_instance_admin.set_iam_policy)
  * [Bigtable_instance_admin.test_iam_permissions](#bigtable_instance_admin.test_iam_permissions)
  * [Bigtable_instance_admin.update_app_profile](#bigtable_instance_admin.update_app_profile)
  * [Bigtable_instance_admin.update_cluster](#bigtable_instance_admin.update_cluster)
  * [Bigtable_instance_admin.update_instance](#bigtable_instance_admin.update_instance)
  * [Bigtable_instance_admin.update_logical_view](#bigtable_instance_admin.update_logical_view)
  * [Bigtable_instance_admin.update_materialized_view](#bigtable_instance_admin.update_materialized_view)
  * [Bigtable_table_admin.check_consistency](#bigtable_table_admin.check_consistency)
  * [Bigtable_table_admin.copy_backup](#bigtable_table_admin.copy_backup)
  * [Bigtable_table_admin.create_authorized_view](#bigtable_table_admin.create_authorized_view)
  * [Bigtable_table_admin.create_backup](#bigtable_table_admin.create_backup)
  * [Bigtable_table_admin.create_schema_bundle](#bigtable_table_admin.create_schema_bundle)
  * [Bigtable_table_admin.create_table](#bigtable_table_admin.create_table)
  * [Bigtable_table_admin.create_table_from_snapshot](#bigtable_table_admin.create_table_from_snapshot)
  * [Bigtable_table_admin.delete_authorized_view](#bigtable_table_admin.delete_authorized_view)
  * [Bigtable_table_admin.delete_backup](#bigtable_table_admin.delete_backup)
  * [Bigtable_table_admin.delete_schema_bundle](#bigtable_table_admin.delete_schema_bundle)
  * [Bigtable_table_admin.delete_snapshot](#bigtable_table_admin.delete_snapshot)
  * [Bigtable_table_admin.delete_table](#bigtable_table_admin.delete_table)
  * [Bigtable_table_admin.drop_row_range](#bigtable_table_admin.drop_row_range)
  * [Bigtable_table_admin.generate_consistency_token](#bigtable_table_admin.generate_consistency_token)
  * [Bigtable_table_admin.get_authorized_view](#bigtable_table_admin.get_authorized_view)
  * [Bigtable_table_admin.get_backup](#bigtable_table_admin.get_backup)
  * [Bigtable_table_admin.get_iam_policy](#bigtable_table_admin.get_iam_policy)
  * [Bigtable_table_admin.get_schema_bundle](#bigtable_table_admin.get_schema_bundle)
  * [Bigtable_table_admin.get_snapshot](#bigtable_table_admin.get_snapshot)
  * [Bigtable_table_admin.get_table](#bigtable_table_admin.get_table)
  * [Bigtable_table_admin.list_authorized_views](#bigtable_table_admin.list_authorized_views)
  * [Bigtable_table_admin.list_backups](#bigtable_table_admin.list_backups)
  * [Bigtable_table_admin.list_schema_bundles](#bigtable_table_admin.list_schema_bundles)
  * [Bigtable_table_admin.list_snapshots](#bigtable_table_admin.list_snapshots)
  * [Bigtable_table_admin.list_tables](#bigtable_table_admin.list_tables)
  * [Bigtable_table_admin.modify_column_families](#bigtable_table_admin.modify_column_families)
  * [Bigtable_table_admin.restore_table](#bigtable_table_admin.restore_table)
  * [Bigtable_table_admin.set_iam_policy](#bigtable_table_admin.set_iam_policy)
  * [Bigtable_table_admin.snapshot_table](#bigtable_table_admin.snapshot_table)
  * [Bigtable_table_admin.test_iam_permissions](#bigtable_table_admin.test_iam_permissions)
  * [Bigtable_table_admin.undelete_table](#bigtable_table_admin.undelete_table)
  * [Bigtable_table_admin.update_authorized_view](#bigtable_table_admin.update_authorized_view)
  * [Bigtable_table_admin.update_backup](#bigtable_table_admin.update_backup)
  * [Bigtable_table_admin.update_schema_bundle](#bigtable_table_admin.update_schema_bundle)
  * [Bigtable_table_admin.update_table](#bigtable_table_admin.update_table)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Bigtable_instance_admin.create_app_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_app_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_app_profile.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_app_profile.js`


-----




### Bigtable_instance_admin.create_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_cluster.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_cluster.js`


-----




### Bigtable_instance_admin.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_instance.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_instance.js`


-----




### Bigtable_instance_admin.create_logical_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_logical_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_logical_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_logical_view.js`


-----




### Bigtable_instance_admin.create_materialized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_materialized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_materialized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.create_materialized_view.js`


-----




### Bigtable_instance_admin.delete_app_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_app_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_app_profile.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_app_profile.js`


-----




### Bigtable_instance_admin.delete_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_cluster.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_cluster.js`


-----




### Bigtable_instance_admin.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_instance.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_instance.js`


-----




### Bigtable_instance_admin.delete_logical_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_logical_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_logical_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_logical_view.js`


-----




### Bigtable_instance_admin.delete_materialized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_materialized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_materialized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.delete_materialized_view.js`


-----




### Bigtable_instance_admin.get_app_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_app_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_app_profile.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_app_profile.js`


-----




### Bigtable_instance_admin.get_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_cluster.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_cluster.js`


-----




### Bigtable_instance_admin.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_iam_policy.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_iam_policy.js`


-----




### Bigtable_instance_admin.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_instance.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_instance.js`


-----




### Bigtable_instance_admin.get_logical_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_logical_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_logical_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_logical_view.js`


-----




### Bigtable_instance_admin.get_materialized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_materialized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_materialized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.get_materialized_view.js`


-----




### Bigtable_instance_admin.list_app_profiles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_app_profiles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_app_profiles.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_app_profiles.js`


-----




### Bigtable_instance_admin.list_clusters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_clusters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_clusters.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_clusters.js`


-----




### Bigtable_instance_admin.list_hot_tablets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_hot_tablets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_hot_tablets.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_hot_tablets.js`


-----




### Bigtable_instance_admin.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_instances.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_instances.js`


-----




### Bigtable_instance_admin.list_logical_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_logical_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_logical_views.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_logical_views.js`


-----




### Bigtable_instance_admin.list_materialized_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_materialized_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_materialized_views.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.list_materialized_views.js`


-----




### Bigtable_instance_admin.partial_update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_cluster.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_cluster.js`


-----




### Bigtable_instance_admin.partial_update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_instance.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.partial_update_instance.js`


-----




### Bigtable_instance_admin.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.set_iam_policy.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.set_iam_policy.js`


-----




### Bigtable_instance_admin.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.test_iam_permissions.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.test_iam_permissions.js`


-----




### Bigtable_instance_admin.update_app_profile

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_app_profile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_app_profile.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_app_profile.js`


-----




### Bigtable_instance_admin.update_cluster

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_cluster.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_cluster.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_cluster.js`


-----




### Bigtable_instance_admin.update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_instance.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_instance.js`


-----




### Bigtable_instance_admin.update_logical_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_logical_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_logical_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_logical_view.js`


-----




### Bigtable_instance_admin.update_materialized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_materialized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_materialized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_instance_admin.update_materialized_view.js`


-----




### Bigtable_table_admin.check_consistency

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.check_consistency.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.check_consistency.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.check_consistency.js`


-----




### Bigtable_table_admin.copy_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.copy_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.copy_backup.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.copy_backup.js`


-----




### Bigtable_table_admin.create_authorized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_authorized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_authorized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_authorized_view.js`


-----




### Bigtable_table_admin.create_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_backup.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_backup.js`


-----




### Bigtable_table_admin.create_schema_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_schema_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_schema_bundle.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_schema_bundle.js`


-----




### Bigtable_table_admin.create_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table.js`


-----




### Bigtable_table_admin.create_table_from_snapshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table_from_snapshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table_from_snapshot.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.create_table_from_snapshot.js`


-----




### Bigtable_table_admin.delete_authorized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_authorized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_authorized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_authorized_view.js`


-----




### Bigtable_table_admin.delete_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_backup.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_backup.js`


-----




### Bigtable_table_admin.delete_schema_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_schema_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_schema_bundle.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_schema_bundle.js`


-----




### Bigtable_table_admin.delete_snapshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_snapshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_snapshot.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_snapshot.js`


-----




### Bigtable_table_admin.delete_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.delete_table.js`


-----




### Bigtable_table_admin.drop_row_range

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.drop_row_range.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.drop_row_range.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.drop_row_range.js`


-----




### Bigtable_table_admin.generate_consistency_token

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.generate_consistency_token.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.generate_consistency_token.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.generate_consistency_token.js`


-----




### Bigtable_table_admin.get_authorized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_authorized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_authorized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_authorized_view.js`


-----




### Bigtable_table_admin.get_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_backup.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_backup.js`


-----




### Bigtable_table_admin.get_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_iam_policy.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_iam_policy.js`


-----




### Bigtable_table_admin.get_schema_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_schema_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_schema_bundle.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_schema_bundle.js`


-----




### Bigtable_table_admin.get_snapshot

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_snapshot.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_snapshot.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_snapshot.js`


-----




### Bigtable_table_admin.get_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.get_table.js`


-----




### Bigtable_table_admin.list_authorized_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_authorized_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_authorized_views.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_authorized_views.js`


-----




### Bigtable_table_admin.list_backups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_backups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_backups.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_backups.js`


-----




### Bigtable_table_admin.list_schema_bundles

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_schema_bundles.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_schema_bundles.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_schema_bundles.js`


-----




### Bigtable_table_admin.list_snapshots

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_snapshots.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_snapshots.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_snapshots.js`


-----




### Bigtable_table_admin.list_tables

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_tables.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_tables.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.list_tables.js`


-----




### Bigtable_table_admin.modify_column_families

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.modify_column_families.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.modify_column_families.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.modify_column_families.js`


-----




### Bigtable_table_admin.restore_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.restore_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.restore_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.restore_table.js`


-----




### Bigtable_table_admin.set_iam_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.set_iam_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.set_iam_policy.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.set_iam_policy.js`


-----




### Bigtable_table_admin.snapshot_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.snapshot_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.snapshot_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.snapshot_table.js`


-----




### Bigtable_table_admin.test_iam_permissions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.test_iam_permissions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.test_iam_permissions.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.test_iam_permissions.js`


-----




### Bigtable_table_admin.undelete_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.undelete_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.undelete_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.undelete_table.js`


-----




### Bigtable_table_admin.update_authorized_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_authorized_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_authorized_view.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_authorized_view.js`


-----




### Bigtable_table_admin.update_backup

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_backup.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_backup.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_backup.js`


-----




### Bigtable_table_admin.update_schema_bundle

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_schema_bundle.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_schema_bundle.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_schema_bundle.js`


-----




### Bigtable_table_admin.update_table

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_table.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_table.js,samples/README.md)

__Usage:__


`node handwritten/bigtable/samples/generated/admin/v2/bigtable_table_admin.update_table.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/bigtable
