[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [OS Config API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Os_config_service.cancel_patch_job](#os_config_service.cancel_patch_job)
  * [Os_config_service.create_patch_deployment](#os_config_service.create_patch_deployment)
  * [Os_config_service.delete_patch_deployment](#os_config_service.delete_patch_deployment)
  * [Os_config_service.execute_patch_job](#os_config_service.execute_patch_job)
  * [Os_config_service.get_patch_deployment](#os_config_service.get_patch_deployment)
  * [Os_config_service.get_patch_job](#os_config_service.get_patch_job)
  * [Os_config_service.list_patch_deployments](#os_config_service.list_patch_deployments)
  * [Os_config_service.list_patch_job_instance_details](#os_config_service.list_patch_job_instance_details)
  * [Os_config_service.list_patch_jobs](#os_config_service.list_patch_jobs)
  * [Os_config_service.pause_patch_deployment](#os_config_service.pause_patch_deployment)
  * [Os_config_service.resume_patch_deployment](#os_config_service.resume_patch_deployment)
  * [Os_config_service.update_patch_deployment](#os_config_service.update_patch_deployment)
  * [Os_config_zonal_service.create_o_s_policy_assignment](#os_config_zonal_service.create_o_s_policy_assignment)
  * [Os_config_zonal_service.delete_o_s_policy_assignment](#os_config_zonal_service.delete_o_s_policy_assignment)
  * [Os_config_zonal_service.get_inventory](#os_config_zonal_service.get_inventory)
  * [Os_config_zonal_service.get_o_s_policy_assignment](#os_config_zonal_service.get_o_s_policy_assignment)
  * [Os_config_zonal_service.get_o_s_policy_assignment_report](#os_config_zonal_service.get_o_s_policy_assignment_report)
  * [Os_config_zonal_service.get_vulnerability_report](#os_config_zonal_service.get_vulnerability_report)
  * [Os_config_zonal_service.list_inventories](#os_config_zonal_service.list_inventories)
  * [Os_config_zonal_service.list_o_s_policy_assignment_reports](#os_config_zonal_service.list_o_s_policy_assignment_reports)
  * [Os_config_zonal_service.list_o_s_policy_assignment_revisions](#os_config_zonal_service.list_o_s_policy_assignment_revisions)
  * [Os_config_zonal_service.list_o_s_policy_assignments](#os_config_zonal_service.list_o_s_policy_assignments)
  * [Os_config_zonal_service.list_vulnerability_reports](#os_config_zonal_service.list_vulnerability_reports)
  * [Os_config_zonal_service.update_o_s_policy_assignment](#os_config_zonal_service.update_o_s_policy_assignment)
  * [Os_config_zonal_service.create_o_s_policy_assignment](#os_config_zonal_service.create_o_s_policy_assignment)
  * [Os_config_zonal_service.delete_o_s_policy_assignment](#os_config_zonal_service.delete_o_s_policy_assignment)
  * [Os_config_zonal_service.get_instance_o_s_policies_compliance](#os_config_zonal_service.get_instance_o_s_policies_compliance)
  * [Os_config_zonal_service.get_inventory](#os_config_zonal_service.get_inventory)
  * [Os_config_zonal_service.get_o_s_policy_assignment](#os_config_zonal_service.get_o_s_policy_assignment)
  * [Os_config_zonal_service.get_o_s_policy_assignment_report](#os_config_zonal_service.get_o_s_policy_assignment_report)
  * [Os_config_zonal_service.get_vulnerability_report](#os_config_zonal_service.get_vulnerability_report)
  * [Os_config_zonal_service.list_instance_o_s_policies_compliances](#os_config_zonal_service.list_instance_o_s_policies_compliances)
  * [Os_config_zonal_service.list_inventories](#os_config_zonal_service.list_inventories)
  * [Os_config_zonal_service.list_o_s_policy_assignment_reports](#os_config_zonal_service.list_o_s_policy_assignment_reports)
  * [Os_config_zonal_service.list_o_s_policy_assignment_revisions](#os_config_zonal_service.list_o_s_policy_assignment_revisions)
  * [Os_config_zonal_service.list_o_s_policy_assignments](#os_config_zonal_service.list_o_s_policy_assignments)
  * [Os_config_zonal_service.list_vulnerability_reports](#os_config_zonal_service.list_vulnerability_reports)
  * [Os_config_zonal_service.update_o_s_policy_assignment](#os_config_zonal_service.update_o_s_policy_assignment)
  * [Os_config_service.cancel_patch_job](#os_config_service.cancel_patch_job)
  * [Os_config_service.create_guest_policy](#os_config_service.create_guest_policy)
  * [Os_config_service.create_patch_deployment](#os_config_service.create_patch_deployment)
  * [Os_config_service.delete_guest_policy](#os_config_service.delete_guest_policy)
  * [Os_config_service.delete_patch_deployment](#os_config_service.delete_patch_deployment)
  * [Os_config_service.execute_patch_job](#os_config_service.execute_patch_job)
  * [Os_config_service.get_guest_policy](#os_config_service.get_guest_policy)
  * [Os_config_service.get_patch_deployment](#os_config_service.get_patch_deployment)
  * [Os_config_service.get_patch_job](#os_config_service.get_patch_job)
  * [Os_config_service.list_guest_policies](#os_config_service.list_guest_policies)
  * [Os_config_service.list_patch_deployments](#os_config_service.list_patch_deployments)
  * [Os_config_service.list_patch_job_instance_details](#os_config_service.list_patch_job_instance_details)
  * [Os_config_service.list_patch_jobs](#os_config_service.list_patch_jobs)
  * [Os_config_service.lookup_effective_guest_policy](#os_config_service.lookup_effective_guest_policy)
  * [Os_config_service.pause_patch_deployment](#os_config_service.pause_patch_deployment)
  * [Os_config_service.resume_patch_deployment](#os_config_service.resume_patch_deployment)
  * [Os_config_service.update_guest_policy](#os_config_service.update_guest_policy)
  * [Os_config_service.update_patch_deployment](#os_config_service.update_patch_deployment)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Os_config_service.cancel_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.cancel_patch_job.js`


-----




### Os_config_service.create_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.create_patch_deployment.js`


-----




### Os_config_service.delete_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.delete_patch_deployment.js`


-----




### Os_config_service.execute_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.execute_patch_job.js`


-----




### Os_config_service.get_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_deployment.js`


-----




### Os_config_service.get_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.get_patch_job.js`


-----




### Os_config_service.list_patch_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_deployments.js`


-----




### Os_config_service.list_patch_job_instance_details

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_job_instance_details.js`


-----




### Os_config_service.list_patch_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.list_patch_jobs.js`


-----




### Os_config_service.pause_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.pause_patch_deployment.js`


-----




### Os_config_service.resume_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.resume_patch_deployment.js`


-----




### Os_config_service.update_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_service.update_patch_deployment.js`


-----




### Os_config_zonal_service.create_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.create_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.delete_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.delete_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.get_inventory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_inventory.js`


-----




### Os_config_zonal_service.get_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.get_o_s_policy_assignment_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_o_s_policy_assignment_report.js`


-----




### Os_config_zonal_service.get_vulnerability_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.get_vulnerability_report.js`


-----




### Os_config_zonal_service.list_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_inventories.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignment_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_reports.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignment_revisions.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_o_s_policy_assignments.js`


-----




### Os_config_zonal_service.list_vulnerability_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.list_vulnerability_reports.js`


-----




### Os_config_zonal_service.update_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1/os_config_zonal_service.update_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.create_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.create_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.delete_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.delete_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.get_instance_o_s_policies_compliance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_instance_o_s_policies_compliance.js`


-----




### Os_config_zonal_service.get_inventory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_inventory.js`


-----




### Os_config_zonal_service.get_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment.js`


-----




### Os_config_zonal_service.get_o_s_policy_assignment_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_o_s_policy_assignment_report.js`


-----




### Os_config_zonal_service.get_vulnerability_report

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.get_vulnerability_report.js`


-----




### Os_config_zonal_service.list_instance_o_s_policies_compliances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_instance_o_s_policies_compliances.js`


-----




### Os_config_zonal_service.list_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_inventories.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignment_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_reports.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignment_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignment_revisions.js`


-----




### Os_config_zonal_service.list_o_s_policy_assignments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_o_s_policy_assignments.js`


-----




### Os_config_zonal_service.list_vulnerability_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.list_vulnerability_reports.js`


-----




### Os_config_zonal_service.update_o_s_policy_assignment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1alpha/os_config_zonal_service.update_o_s_policy_assignment.js`


-----




### Os_config_service.cancel_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.cancel_patch_job.js`


-----




### Os_config_service.create_guest_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_guest_policy.js`


-----




### Os_config_service.create_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.create_patch_deployment.js`


-----




### Os_config_service.delete_guest_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_guest_policy.js`


-----




### Os_config_service.delete_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.delete_patch_deployment.js`


-----




### Os_config_service.execute_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.execute_patch_job.js`


-----




### Os_config_service.get_guest_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_guest_policy.js`


-----




### Os_config_service.get_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_deployment.js`


-----




### Os_config_service.get_patch_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.get_patch_job.js`


-----




### Os_config_service.list_guest_policies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_guest_policies.js`


-----




### Os_config_service.list_patch_deployments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_deployments.js`


-----




### Os_config_service.list_patch_job_instance_details

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_job_instance_details.js`


-----




### Os_config_service.list_patch_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.list_patch_jobs.js`


-----




### Os_config_service.lookup_effective_guest_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.lookup_effective_guest_policy.js`


-----




### Os_config_service.pause_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.pause_patch_deployment.js`


-----




### Os_config_service.resume_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.resume_patch_deployment.js`


-----




### Os_config_service.update_guest_policy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_guest_policy.js`


-----




### Os_config_service.update_patch_deployment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/generated/v1beta/os_config_service.update_patch_deployment.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-osconfig/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-osconfig/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-osconfig/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/compute/docs/os-patch-management
