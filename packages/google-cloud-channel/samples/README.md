[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Channel API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cloud_channel_reports_service.fetch_report_results](#cloud_channel_reports_service.fetch_report_results)
  * [Cloud_channel_reports_service.list_reports](#cloud_channel_reports_service.list_reports)
  * [Cloud_channel_reports_service.run_report_job](#cloud_channel_reports_service.run_report_job)
  * [Cloud_channel_service.activate_entitlement](#cloud_channel_service.activate_entitlement)
  * [Cloud_channel_service.cancel_entitlement](#cloud_channel_service.cancel_entitlement)
  * [Cloud_channel_service.change_offer](#cloud_channel_service.change_offer)
  * [Cloud_channel_service.change_parameters](#cloud_channel_service.change_parameters)
  * [Cloud_channel_service.change_renewal_settings](#cloud_channel_service.change_renewal_settings)
  * [Cloud_channel_service.check_cloud_identity_accounts_exist](#cloud_channel_service.check_cloud_identity_accounts_exist)
  * [Cloud_channel_service.create_channel_partner_link](#cloud_channel_service.create_channel_partner_link)
  * [Cloud_channel_service.create_channel_partner_repricing_config](#cloud_channel_service.create_channel_partner_repricing_config)
  * [Cloud_channel_service.create_customer](#cloud_channel_service.create_customer)
  * [Cloud_channel_service.create_customer_repricing_config](#cloud_channel_service.create_customer_repricing_config)
  * [Cloud_channel_service.create_entitlement](#cloud_channel_service.create_entitlement)
  * [Cloud_channel_service.delete_channel_partner_repricing_config](#cloud_channel_service.delete_channel_partner_repricing_config)
  * [Cloud_channel_service.delete_customer](#cloud_channel_service.delete_customer)
  * [Cloud_channel_service.delete_customer_repricing_config](#cloud_channel_service.delete_customer_repricing_config)
  * [Cloud_channel_service.get_channel_partner_link](#cloud_channel_service.get_channel_partner_link)
  * [Cloud_channel_service.get_channel_partner_repricing_config](#cloud_channel_service.get_channel_partner_repricing_config)
  * [Cloud_channel_service.get_customer](#cloud_channel_service.get_customer)
  * [Cloud_channel_service.get_customer_repricing_config](#cloud_channel_service.get_customer_repricing_config)
  * [Cloud_channel_service.get_entitlement](#cloud_channel_service.get_entitlement)
  * [Cloud_channel_service.import_customer](#cloud_channel_service.import_customer)
  * [Cloud_channel_service.list_channel_partner_links](#cloud_channel_service.list_channel_partner_links)
  * [Cloud_channel_service.list_channel_partner_repricing_configs](#cloud_channel_service.list_channel_partner_repricing_configs)
  * [Cloud_channel_service.list_customer_repricing_configs](#cloud_channel_service.list_customer_repricing_configs)
  * [Cloud_channel_service.list_customers](#cloud_channel_service.list_customers)
  * [Cloud_channel_service.list_entitlement_changes](#cloud_channel_service.list_entitlement_changes)
  * [Cloud_channel_service.list_entitlements](#cloud_channel_service.list_entitlements)
  * [Cloud_channel_service.list_offers](#cloud_channel_service.list_offers)
  * [Cloud_channel_service.list_products](#cloud_channel_service.list_products)
  * [Cloud_channel_service.list_purchasable_offers](#cloud_channel_service.list_purchasable_offers)
  * [Cloud_channel_service.list_purchasable_skus](#cloud_channel_service.list_purchasable_skus)
  * [Cloud_channel_service.list_sku_group_billable_skus](#cloud_channel_service.list_sku_group_billable_skus)
  * [Cloud_channel_service.list_sku_groups](#cloud_channel_service.list_sku_groups)
  * [Cloud_channel_service.list_skus](#cloud_channel_service.list_skus)
  * [Cloud_channel_service.list_subscribers](#cloud_channel_service.list_subscribers)
  * [Cloud_channel_service.list_transferable_offers](#cloud_channel_service.list_transferable_offers)
  * [Cloud_channel_service.list_transferable_skus](#cloud_channel_service.list_transferable_skus)
  * [Cloud_channel_service.lookup_offer](#cloud_channel_service.lookup_offer)
  * [Cloud_channel_service.provision_cloud_identity](#cloud_channel_service.provision_cloud_identity)
  * [Cloud_channel_service.query_eligible_billing_accounts](#cloud_channel_service.query_eligible_billing_accounts)
  * [Cloud_channel_service.register_subscriber](#cloud_channel_service.register_subscriber)
  * [Cloud_channel_service.start_paid_service](#cloud_channel_service.start_paid_service)
  * [Cloud_channel_service.suspend_entitlement](#cloud_channel_service.suspend_entitlement)
  * [Cloud_channel_service.transfer_entitlements](#cloud_channel_service.transfer_entitlements)
  * [Cloud_channel_service.transfer_entitlements_to_google](#cloud_channel_service.transfer_entitlements_to_google)
  * [Cloud_channel_service.unregister_subscriber](#cloud_channel_service.unregister_subscriber)
  * [Cloud_channel_service.update_channel_partner_link](#cloud_channel_service.update_channel_partner_link)
  * [Cloud_channel_service.update_channel_partner_repricing_config](#cloud_channel_service.update_channel_partner_repricing_config)
  * [Cloud_channel_service.update_customer](#cloud_channel_service.update_customer)
  * [Cloud_channel_service.update_customer_repricing_config](#cloud_channel_service.update_customer_repricing_config)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cloud_channel_reports_service.fetch_report_results

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.fetch_report_results.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.fetch_report_results.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.fetch_report_results.js`


-----




### Cloud_channel_reports_service.list_reports

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.list_reports.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.list_reports.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.list_reports.js`


-----




### Cloud_channel_reports_service.run_report_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.run_report_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.run_report_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_reports_service.run_report_job.js`


-----




### Cloud_channel_service.activate_entitlement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.activate_entitlement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.activate_entitlement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.activate_entitlement.js`


-----




### Cloud_channel_service.cancel_entitlement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.cancel_entitlement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.cancel_entitlement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.cancel_entitlement.js`


-----




### Cloud_channel_service.change_offer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_offer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_offer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_offer.js`


-----




### Cloud_channel_service.change_parameters

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_parameters.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_parameters.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_parameters.js`


-----




### Cloud_channel_service.change_renewal_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_renewal_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_renewal_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.change_renewal_settings.js`


-----




### Cloud_channel_service.check_cloud_identity_accounts_exist

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.check_cloud_identity_accounts_exist.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.check_cloud_identity_accounts_exist.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.check_cloud_identity_accounts_exist.js`


-----




### Cloud_channel_service.create_channel_partner_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_link.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_link.js`


-----




### Cloud_channel_service.create_channel_partner_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_channel_partner_repricing_config.js`


-----




### Cloud_channel_service.create_customer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer.js`


-----




### Cloud_channel_service.create_customer_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_customer_repricing_config.js`


-----




### Cloud_channel_service.create_entitlement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_entitlement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_entitlement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.create_entitlement.js`


-----




### Cloud_channel_service.delete_channel_partner_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_channel_partner_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_channel_partner_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_channel_partner_repricing_config.js`


-----




### Cloud_channel_service.delete_customer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer.js`


-----




### Cloud_channel_service.delete_customer_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.delete_customer_repricing_config.js`


-----




### Cloud_channel_service.get_channel_partner_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_link.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_link.js`


-----




### Cloud_channel_service.get_channel_partner_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_channel_partner_repricing_config.js`


-----




### Cloud_channel_service.get_customer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer.js`


-----




### Cloud_channel_service.get_customer_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_customer_repricing_config.js`


-----




### Cloud_channel_service.get_entitlement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_entitlement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_entitlement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.get_entitlement.js`


-----




### Cloud_channel_service.import_customer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.import_customer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.import_customer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.import_customer.js`


-----




### Cloud_channel_service.list_channel_partner_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_links.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_links.js`


-----




### Cloud_channel_service.list_channel_partner_repricing_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_repricing_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_repricing_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_channel_partner_repricing_configs.js`


-----




### Cloud_channel_service.list_customer_repricing_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customer_repricing_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customer_repricing_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customer_repricing_configs.js`


-----




### Cloud_channel_service.list_customers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_customers.js`


-----




### Cloud_channel_service.list_entitlement_changes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlement_changes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlement_changes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlement_changes.js`


-----




### Cloud_channel_service.list_entitlements

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlements.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlements.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_entitlements.js`


-----




### Cloud_channel_service.list_offers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_offers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_offers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_offers.js`


-----




### Cloud_channel_service.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_products.js`


-----




### Cloud_channel_service.list_purchasable_offers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_offers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_offers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_offers.js`


-----




### Cloud_channel_service.list_purchasable_skus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_skus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_skus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_purchasable_skus.js`


-----




### Cloud_channel_service.list_sku_group_billable_skus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_group_billable_skus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_group_billable_skus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_group_billable_skus.js`


-----




### Cloud_channel_service.list_sku_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_sku_groups.js`


-----




### Cloud_channel_service.list_skus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_skus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_skus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_skus.js`


-----




### Cloud_channel_service.list_subscribers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_subscribers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_subscribers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_subscribers.js`


-----




### Cloud_channel_service.list_transferable_offers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_offers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_offers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_offers.js`


-----




### Cloud_channel_service.list_transferable_skus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_skus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_skus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.list_transferable_skus.js`


-----




### Cloud_channel_service.lookup_offer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.lookup_offer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.lookup_offer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.lookup_offer.js`


-----




### Cloud_channel_service.provision_cloud_identity

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.provision_cloud_identity.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.provision_cloud_identity.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.provision_cloud_identity.js`


-----




### Cloud_channel_service.query_eligible_billing_accounts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.query_eligible_billing_accounts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.query_eligible_billing_accounts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.query_eligible_billing_accounts.js`


-----




### Cloud_channel_service.register_subscriber

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.register_subscriber.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.register_subscriber.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.register_subscriber.js`


-----




### Cloud_channel_service.start_paid_service

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.start_paid_service.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.start_paid_service.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.start_paid_service.js`


-----




### Cloud_channel_service.suspend_entitlement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.suspend_entitlement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.suspend_entitlement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.suspend_entitlement.js`


-----




### Cloud_channel_service.transfer_entitlements

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements.js`


-----




### Cloud_channel_service.transfer_entitlements_to_google

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements_to_google.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements_to_google.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.transfer_entitlements_to_google.js`


-----




### Cloud_channel_service.unregister_subscriber

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.unregister_subscriber.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.unregister_subscriber.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.unregister_subscriber.js`


-----




### Cloud_channel_service.update_channel_partner_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_link.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_link.js`


-----




### Cloud_channel_service.update_channel_partner_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_channel_partner_repricing_config.js`


-----




### Cloud_channel_service.update_customer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer.js`


-----




### Cloud_channel_service.update_customer_repricing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer_repricing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer_repricing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/generated/v1/cloud_channel_service.update_customer_repricing_config.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-channel/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-channel/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-channel/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/channel/
