[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AI Platform Notebooks: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Managed_notebook_service.create_runtime](#managed_notebook_service.create_runtime)
  * [Managed_notebook_service.delete_runtime](#managed_notebook_service.delete_runtime)
  * [Managed_notebook_service.diagnose_runtime](#managed_notebook_service.diagnose_runtime)
  * [Managed_notebook_service.get_runtime](#managed_notebook_service.get_runtime)
  * [Managed_notebook_service.list_runtimes](#managed_notebook_service.list_runtimes)
  * [Managed_notebook_service.refresh_runtime_token_internal](#managed_notebook_service.refresh_runtime_token_internal)
  * [Managed_notebook_service.report_runtime_event](#managed_notebook_service.report_runtime_event)
  * [Managed_notebook_service.reset_runtime](#managed_notebook_service.reset_runtime)
  * [Managed_notebook_service.start_runtime](#managed_notebook_service.start_runtime)
  * [Managed_notebook_service.stop_runtime](#managed_notebook_service.stop_runtime)
  * [Managed_notebook_service.switch_runtime](#managed_notebook_service.switch_runtime)
  * [Managed_notebook_service.update_runtime](#managed_notebook_service.update_runtime)
  * [Managed_notebook_service.upgrade_runtime](#managed_notebook_service.upgrade_runtime)
  * [Notebook_service.create_environment](#notebook_service.create_environment)
  * [Notebook_service.create_execution](#notebook_service.create_execution)
  * [Notebook_service.create_instance](#notebook_service.create_instance)
  * [Notebook_service.create_schedule](#notebook_service.create_schedule)
  * [Notebook_service.delete_environment](#notebook_service.delete_environment)
  * [Notebook_service.delete_execution](#notebook_service.delete_execution)
  * [Notebook_service.delete_instance](#notebook_service.delete_instance)
  * [Notebook_service.delete_schedule](#notebook_service.delete_schedule)
  * [Notebook_service.diagnose_instance](#notebook_service.diagnose_instance)
  * [Notebook_service.get_environment](#notebook_service.get_environment)
  * [Notebook_service.get_execution](#notebook_service.get_execution)
  * [Notebook_service.get_instance](#notebook_service.get_instance)
  * [Notebook_service.get_instance_health](#notebook_service.get_instance_health)
  * [Notebook_service.get_schedule](#notebook_service.get_schedule)
  * [Notebook_service.is_instance_upgradeable](#notebook_service.is_instance_upgradeable)
  * [Notebook_service.list_environments](#notebook_service.list_environments)
  * [Notebook_service.list_executions](#notebook_service.list_executions)
  * [Notebook_service.list_instances](#notebook_service.list_instances)
  * [Notebook_service.list_schedules](#notebook_service.list_schedules)
  * [Notebook_service.register_instance](#notebook_service.register_instance)
  * [Notebook_service.report_instance_info](#notebook_service.report_instance_info)
  * [Notebook_service.reset_instance](#notebook_service.reset_instance)
  * [Notebook_service.rollback_instance](#notebook_service.rollback_instance)
  * [Notebook_service.set_instance_accelerator](#notebook_service.set_instance_accelerator)
  * [Notebook_service.set_instance_labels](#notebook_service.set_instance_labels)
  * [Notebook_service.set_instance_machine_type](#notebook_service.set_instance_machine_type)
  * [Notebook_service.start_instance](#notebook_service.start_instance)
  * [Notebook_service.stop_instance](#notebook_service.stop_instance)
  * [Notebook_service.trigger_schedule](#notebook_service.trigger_schedule)
  * [Notebook_service.update_instance_config](#notebook_service.update_instance_config)
  * [Notebook_service.update_instance_metadata_items](#notebook_service.update_instance_metadata_items)
  * [Notebook_service.update_shielded_instance_config](#notebook_service.update_shielded_instance_config)
  * [Notebook_service.upgrade_instance](#notebook_service.upgrade_instance)
  * [Notebook_service.upgrade_instance_internal](#notebook_service.upgrade_instance_internal)
  * [Notebook_service.create_environment](#notebook_service.create_environment)
  * [Notebook_service.create_instance](#notebook_service.create_instance)
  * [Notebook_service.delete_environment](#notebook_service.delete_environment)
  * [Notebook_service.delete_instance](#notebook_service.delete_instance)
  * [Notebook_service.get_environment](#notebook_service.get_environment)
  * [Notebook_service.get_instance](#notebook_service.get_instance)
  * [Notebook_service.is_instance_upgradeable](#notebook_service.is_instance_upgradeable)
  * [Notebook_service.list_environments](#notebook_service.list_environments)
  * [Notebook_service.list_instances](#notebook_service.list_instances)
  * [Notebook_service.register_instance](#notebook_service.register_instance)
  * [Notebook_service.report_instance_info](#notebook_service.report_instance_info)
  * [Notebook_service.reset_instance](#notebook_service.reset_instance)
  * [Notebook_service.set_instance_accelerator](#notebook_service.set_instance_accelerator)
  * [Notebook_service.set_instance_labels](#notebook_service.set_instance_labels)
  * [Notebook_service.set_instance_machine_type](#notebook_service.set_instance_machine_type)
  * [Notebook_service.start_instance](#notebook_service.start_instance)
  * [Notebook_service.stop_instance](#notebook_service.stop_instance)
  * [Notebook_service.upgrade_instance](#notebook_service.upgrade_instance)
  * [Notebook_service.upgrade_instance_internal](#notebook_service.upgrade_instance_internal)
  * [Notebook_service.check_instance_upgradability](#notebook_service.check_instance_upgradability)
  * [Notebook_service.create_instance](#notebook_service.create_instance)
  * [Notebook_service.delete_instance](#notebook_service.delete_instance)
  * [Notebook_service.diagnose_instance](#notebook_service.diagnose_instance)
  * [Notebook_service.get_instance](#notebook_service.get_instance)
  * [Notebook_service.list_instances](#notebook_service.list_instances)
  * [Notebook_service.reset_instance](#notebook_service.reset_instance)
  * [Notebook_service.rollback_instance](#notebook_service.rollback_instance)
  * [Notebook_service.start_instance](#notebook_service.start_instance)
  * [Notebook_service.stop_instance](#notebook_service.stop_instance)
  * [Notebook_service.update_instance](#notebook_service.update_instance)
  * [Notebook_service.upgrade_instance](#notebook_service.upgrade_instance)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Managed_notebook_service.create_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.create_runtime.js`


-----




### Managed_notebook_service.delete_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.delete_runtime.js`


-----




### Managed_notebook_service.diagnose_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.diagnose_runtime.js`


-----




### Managed_notebook_service.get_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.get_runtime.js`


-----




### Managed_notebook_service.list_runtimes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.list_runtimes.js`


-----




### Managed_notebook_service.refresh_runtime_token_internal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.refresh_runtime_token_internal.js`


-----




### Managed_notebook_service.report_runtime_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.report_runtime_event.js`


-----




### Managed_notebook_service.reset_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.reset_runtime.js`


-----




### Managed_notebook_service.start_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.start_runtime.js`


-----




### Managed_notebook_service.stop_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.stop_runtime.js`


-----




### Managed_notebook_service.switch_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.switch_runtime.js`


-----




### Managed_notebook_service.update_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.update_runtime.js`


-----




### Managed_notebook_service.upgrade_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/managed_notebook_service.upgrade_runtime.js`


-----




### Notebook_service.create_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_environment.js`


-----




### Notebook_service.create_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_execution.js`


-----




### Notebook_service.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_instance.js`


-----




### Notebook_service.create_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.create_schedule.js`


-----




### Notebook_service.delete_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_environment.js`


-----




### Notebook_service.delete_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_execution.js`


-----




### Notebook_service.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_instance.js`


-----




### Notebook_service.delete_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.delete_schedule.js`


-----




### Notebook_service.diagnose_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.diagnose_instance.js`


-----




### Notebook_service.get_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_environment.js`


-----




### Notebook_service.get_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_execution.js`


-----




### Notebook_service.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance.js`


-----




### Notebook_service.get_instance_health

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_instance_health.js`


-----




### Notebook_service.get_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.get_schedule.js`


-----




### Notebook_service.is_instance_upgradeable

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.is_instance_upgradeable.js`


-----




### Notebook_service.list_environments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_environments.js`


-----




### Notebook_service.list_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_executions.js`


-----




### Notebook_service.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_instances.js`


-----




### Notebook_service.list_schedules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.list_schedules.js`


-----




### Notebook_service.register_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.register_instance.js`


-----




### Notebook_service.report_instance_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.report_instance_info.js`


-----




### Notebook_service.reset_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.reset_instance.js`


-----




### Notebook_service.rollback_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.rollback_instance.js`


-----




### Notebook_service.set_instance_accelerator

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_accelerator.js`


-----




### Notebook_service.set_instance_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_labels.js`


-----




### Notebook_service.set_instance_machine_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.set_instance_machine_type.js`


-----




### Notebook_service.start_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.start_instance.js`


-----




### Notebook_service.stop_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.stop_instance.js`


-----




### Notebook_service.trigger_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.trigger_schedule.js`


-----




### Notebook_service.update_instance_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_config.js`


-----




### Notebook_service.update_instance_metadata_items

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_instance_metadata_items.js`


-----




### Notebook_service.update_shielded_instance_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.update_shielded_instance_config.js`


-----




### Notebook_service.upgrade_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance.js`


-----




### Notebook_service.upgrade_instance_internal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1/notebook_service.upgrade_instance_internal.js`


-----




### Notebook_service.create_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_environment.js`


-----




### Notebook_service.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.create_instance.js`


-----




### Notebook_service.delete_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_environment.js`


-----




### Notebook_service.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.delete_instance.js`


-----




### Notebook_service.get_environment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_environment.js`


-----




### Notebook_service.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.get_instance.js`


-----




### Notebook_service.is_instance_upgradeable

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.is_instance_upgradeable.js`


-----




### Notebook_service.list_environments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_environments.js`


-----




### Notebook_service.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.list_instances.js`


-----




### Notebook_service.register_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.register_instance.js`


-----




### Notebook_service.report_instance_info

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.report_instance_info.js`


-----




### Notebook_service.reset_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.reset_instance.js`


-----




### Notebook_service.set_instance_accelerator

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_accelerator.js`


-----




### Notebook_service.set_instance_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_labels.js`


-----




### Notebook_service.set_instance_machine_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.set_instance_machine_type.js`


-----




### Notebook_service.start_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.start_instance.js`


-----




### Notebook_service.stop_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.stop_instance.js`


-----




### Notebook_service.upgrade_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance.js`


-----




### Notebook_service.upgrade_instance_internal

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v1beta1/notebook_service.upgrade_instance_internal.js`


-----




### Notebook_service.check_instance_upgradability

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.check_instance_upgradability.js`


-----




### Notebook_service.create_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.create_instance.js`


-----




### Notebook_service.delete_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.delete_instance.js`


-----




### Notebook_service.diagnose_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.diagnose_instance.js`


-----




### Notebook_service.get_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.get_instance.js`


-----




### Notebook_service.list_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.list_instances.js`


-----




### Notebook_service.reset_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.reset_instance.js`


-----




### Notebook_service.rollback_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.rollback_instance.js`


-----




### Notebook_service.start_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.start_instance.js`


-----




### Notebook_service.stop_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.stop_instance.js`


-----




### Notebook_service.update_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.update_instance.js`


-----




### Notebook_service.upgrade_instance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/generated/v2/notebook_service.upgrade_instance.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-notebooks/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-notebooks/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-notebooks/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/ai-platform/notebooks/docs
