[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Retail API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Analytics_service.export_analytics_metrics](#analytics_service.export_analytics_metrics)
  * [Catalog_service.add_catalog_attribute](#catalog_service.add_catalog_attribute)
  * [Catalog_service.get_attributes_config](#catalog_service.get_attributes_config)
  * [Catalog_service.get_completion_config](#catalog_service.get_completion_config)
  * [Catalog_service.get_default_branch](#catalog_service.get_default_branch)
  * [Catalog_service.list_catalogs](#catalog_service.list_catalogs)
  * [Catalog_service.remove_catalog_attribute](#catalog_service.remove_catalog_attribute)
  * [Catalog_service.replace_catalog_attribute](#catalog_service.replace_catalog_attribute)
  * [Catalog_service.set_default_branch](#catalog_service.set_default_branch)
  * [Catalog_service.update_attributes_config](#catalog_service.update_attributes_config)
  * [Catalog_service.update_catalog](#catalog_service.update_catalog)
  * [Catalog_service.update_completion_config](#catalog_service.update_completion_config)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_data](#completion_service.import_completion_data)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Generative_question_service.batch_update_generative_question_configs](#generative_question_service.batch_update_generative_question_configs)
  * [Generative_question_service.get_generative_questions_feature_config](#generative_question_service.get_generative_questions_feature_config)
  * [Generative_question_service.list_generative_question_configs](#generative_question_service.list_generative_question_configs)
  * [Generative_question_service.update_generative_question_config](#generative_question_service.update_generative_question_config)
  * [Generative_question_service.update_generative_questions_feature_config](#generative_question_service.update_generative_questions_feature_config)
  * [Model_service.create_model](#model_service.create_model)
  * [Model_service.delete_model](#model_service.delete_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.pause_model](#model_service.pause_model)
  * [Model_service.resume_model](#model_service.resume_model)
  * [Model_service.tune_model](#model_service.tune_model)
  * [Model_service.update_model](#model_service.update_model)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Product_service.add_fulfillment_places](#product_service.add_fulfillment_places)
  * [Product_service.add_local_inventories](#product_service.add_local_inventories)
  * [Product_service.create_product](#product_service.create_product)
  * [Product_service.delete_product](#product_service.delete_product)
  * [Product_service.get_product](#product_service.get_product)
  * [Product_service.import_products](#product_service.import_products)
  * [Product_service.list_products](#product_service.list_products)
  * [Product_service.purge_products](#product_service.purge_products)
  * [Product_service.remove_fulfillment_places](#product_service.remove_fulfillment_places)
  * [Product_service.remove_local_inventories](#product_service.remove_local_inventories)
  * [Product_service.set_inventory](#product_service.set_inventory)
  * [Product_service.update_product](#product_service.update_product)
  * [Search_service.search](#search_service.search)
  * [Serving_config_service.add_control](#serving_config_service.add_control)
  * [Serving_config_service.create_serving_config](#serving_config_service.create_serving_config)
  * [Serving_config_service.delete_serving_config](#serving_config_service.delete_serving_config)
  * [Serving_config_service.get_serving_config](#serving_config_service.get_serving_config)
  * [Serving_config_service.list_serving_configs](#serving_config_service.list_serving_configs)
  * [Serving_config_service.remove_control](#serving_config_service.remove_control)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.rejoin_user_events](#user_event_service.rejoin_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Analytics_service.export_analytics_metrics](#analytics_service.export_analytics_metrics)
  * [Branch_service.get_branch](#branch_service.get_branch)
  * [Branch_service.list_branches](#branch_service.list_branches)
  * [Catalog_service.add_catalog_attribute](#catalog_service.add_catalog_attribute)
  * [Catalog_service.batch_remove_catalog_attributes](#catalog_service.batch_remove_catalog_attributes)
  * [Catalog_service.get_attributes_config](#catalog_service.get_attributes_config)
  * [Catalog_service.get_completion_config](#catalog_service.get_completion_config)
  * [Catalog_service.get_default_branch](#catalog_service.get_default_branch)
  * [Catalog_service.list_catalogs](#catalog_service.list_catalogs)
  * [Catalog_service.remove_catalog_attribute](#catalog_service.remove_catalog_attribute)
  * [Catalog_service.replace_catalog_attribute](#catalog_service.replace_catalog_attribute)
  * [Catalog_service.set_default_branch](#catalog_service.set_default_branch)
  * [Catalog_service.update_attributes_config](#catalog_service.update_attributes_config)
  * [Catalog_service.update_catalog](#catalog_service.update_catalog)
  * [Catalog_service.update_completion_config](#catalog_service.update_completion_config)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_data](#completion_service.import_completion_data)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Conversational_search_service.conversational_search](#conversational_search_service.conversational_search)
  * [Generative_question_service.batch_update_generative_question_configs](#generative_question_service.batch_update_generative_question_configs)
  * [Generative_question_service.get_generative_questions_feature_config](#generative_question_service.get_generative_questions_feature_config)
  * [Generative_question_service.list_generative_question_configs](#generative_question_service.list_generative_question_configs)
  * [Generative_question_service.update_generative_question_config](#generative_question_service.update_generative_question_config)
  * [Generative_question_service.update_generative_questions_feature_config](#generative_question_service.update_generative_questions_feature_config)
  * [Merchant_center_account_link_service.create_merchant_center_account_link](#merchant_center_account_link_service.create_merchant_center_account_link)
  * [Merchant_center_account_link_service.delete_merchant_center_account_link](#merchant_center_account_link_service.delete_merchant_center_account_link)
  * [Merchant_center_account_link_service.list_merchant_center_account_links](#merchant_center_account_link_service.list_merchant_center_account_links)
  * [Model_service.create_model](#model_service.create_model)
  * [Model_service.delete_model](#model_service.delete_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.pause_model](#model_service.pause_model)
  * [Model_service.resume_model](#model_service.resume_model)
  * [Model_service.tune_model](#model_service.tune_model)
  * [Model_service.update_model](#model_service.update_model)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Product_service.add_fulfillment_places](#product_service.add_fulfillment_places)
  * [Product_service.add_local_inventories](#product_service.add_local_inventories)
  * [Product_service.create_product](#product_service.create_product)
  * [Product_service.delete_product](#product_service.delete_product)
  * [Product_service.export_products](#product_service.export_products)
  * [Product_service.get_product](#product_service.get_product)
  * [Product_service.import_products](#product_service.import_products)
  * [Product_service.list_products](#product_service.list_products)
  * [Product_service.purge_products](#product_service.purge_products)
  * [Product_service.remove_fulfillment_places](#product_service.remove_fulfillment_places)
  * [Product_service.remove_local_inventories](#product_service.remove_local_inventories)
  * [Product_service.set_inventory](#product_service.set_inventory)
  * [Product_service.update_product](#product_service.update_product)
  * [Project_service.accept_terms](#project_service.accept_terms)
  * [Project_service.enroll_solution](#project_service.enroll_solution)
  * [Project_service.get_alert_config](#project_service.get_alert_config)
  * [Project_service.get_logging_config](#project_service.get_logging_config)
  * [Project_service.get_project](#project_service.get_project)
  * [Project_service.list_enrolled_solutions](#project_service.list_enrolled_solutions)
  * [Project_service.update_alert_config](#project_service.update_alert_config)
  * [Project_service.update_logging_config](#project_service.update_logging_config)
  * [Search_service.search](#search_service.search)
  * [Serving_config_service.add_control](#serving_config_service.add_control)
  * [Serving_config_service.create_serving_config](#serving_config_service.create_serving_config)
  * [Serving_config_service.delete_serving_config](#serving_config_service.delete_serving_config)
  * [Serving_config_service.get_serving_config](#serving_config_service.get_serving_config)
  * [Serving_config_service.list_serving_configs](#serving_config_service.list_serving_configs)
  * [Serving_config_service.remove_control](#serving_config_service.remove_control)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.export_user_events](#user_event_service.export_user_events)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.rejoin_user_events](#user_event_service.rejoin_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Analytics_service.export_analytics_metrics](#analytics_service.export_analytics_metrics)
  * [Catalog_service.add_catalog_attribute](#catalog_service.add_catalog_attribute)
  * [Catalog_service.batch_remove_catalog_attributes](#catalog_service.batch_remove_catalog_attributes)
  * [Catalog_service.get_attributes_config](#catalog_service.get_attributes_config)
  * [Catalog_service.get_completion_config](#catalog_service.get_completion_config)
  * [Catalog_service.get_default_branch](#catalog_service.get_default_branch)
  * [Catalog_service.list_catalogs](#catalog_service.list_catalogs)
  * [Catalog_service.remove_catalog_attribute](#catalog_service.remove_catalog_attribute)
  * [Catalog_service.replace_catalog_attribute](#catalog_service.replace_catalog_attribute)
  * [Catalog_service.set_default_branch](#catalog_service.set_default_branch)
  * [Catalog_service.update_attributes_config](#catalog_service.update_attributes_config)
  * [Catalog_service.update_catalog](#catalog_service.update_catalog)
  * [Catalog_service.update_completion_config](#catalog_service.update_completion_config)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_data](#completion_service.import_completion_data)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Generative_question_service.batch_update_generative_question_configs](#generative_question_service.batch_update_generative_question_configs)
  * [Generative_question_service.get_generative_questions_feature_config](#generative_question_service.get_generative_questions_feature_config)
  * [Generative_question_service.list_generative_question_configs](#generative_question_service.list_generative_question_configs)
  * [Generative_question_service.update_generative_question_config](#generative_question_service.update_generative_question_config)
  * [Generative_question_service.update_generative_questions_feature_config](#generative_question_service.update_generative_questions_feature_config)
  * [Model_service.create_model](#model_service.create_model)
  * [Model_service.delete_model](#model_service.delete_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.pause_model](#model_service.pause_model)
  * [Model_service.resume_model](#model_service.resume_model)
  * [Model_service.tune_model](#model_service.tune_model)
  * [Model_service.update_model](#model_service.update_model)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Product_service.add_fulfillment_places](#product_service.add_fulfillment_places)
  * [Product_service.add_local_inventories](#product_service.add_local_inventories)
  * [Product_service.create_product](#product_service.create_product)
  * [Product_service.delete_product](#product_service.delete_product)
  * [Product_service.export_products](#product_service.export_products)
  * [Product_service.get_product](#product_service.get_product)
  * [Product_service.import_products](#product_service.import_products)
  * [Product_service.list_products](#product_service.list_products)
  * [Product_service.purge_products](#product_service.purge_products)
  * [Product_service.remove_fulfillment_places](#product_service.remove_fulfillment_places)
  * [Product_service.remove_local_inventories](#product_service.remove_local_inventories)
  * [Product_service.set_inventory](#product_service.set_inventory)
  * [Product_service.update_product](#product_service.update_product)
  * [Project_service.get_alert_config](#project_service.get_alert_config)
  * [Project_service.update_alert_config](#project_service.update_alert_config)
  * [Search_service.search](#search_service.search)
  * [Serving_config_service.add_control](#serving_config_service.add_control)
  * [Serving_config_service.create_serving_config](#serving_config_service.create_serving_config)
  * [Serving_config_service.delete_serving_config](#serving_config_service.delete_serving_config)
  * [Serving_config_service.get_serving_config](#serving_config_service.get_serving_config)
  * [Serving_config_service.list_serving_configs](#serving_config_service.list_serving_configs)
  * [Serving_config_service.remove_control](#serving_config_service.remove_control)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.export_user_events](#user_event_service.export_user_events)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.rejoin_user_events](#user_event_service.rejoin_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Analytics_service.export_analytics_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/analytics_service.export_analytics_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/analytics_service.export_analytics_metrics.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/analytics_service.export_analytics_metrics.js`


-----




### Catalog_service.add_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.add_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.add_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.add_catalog_attribute.js`


-----




### Catalog_service.get_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.get_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.get_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.get_attributes_config.js`


-----




### Catalog_service.get_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.get_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.get_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.get_completion_config.js`


-----




### Catalog_service.get_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.get_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.get_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.get_default_branch.js`


-----




### Catalog_service.list_catalogs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.list_catalogs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.list_catalogs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.list_catalogs.js`


-----




### Catalog_service.remove_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.remove_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.remove_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.remove_catalog_attribute.js`


-----




### Catalog_service.replace_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.replace_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.replace_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.replace_catalog_attribute.js`


-----




### Catalog_service.set_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.set_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.set_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.set_default_branch.js`


-----




### Catalog_service.update_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.update_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.update_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.update_attributes_config.js`


-----




### Catalog_service.update_catalog

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.update_catalog.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.update_catalog.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.update_catalog.js`


-----




### Catalog_service.update_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/catalog_service.update_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/catalog_service.update_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/catalog_service.update_completion_config.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/completion_service.complete_query.js`


-----




### Completion_service.import_completion_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/completion_service.import_completion_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/completion_service.import_completion_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/completion_service.import_completion_data.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/control_service.update_control.js`


-----




### Generative_question_service.batch_update_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/generative_question_service.batch_update_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/generative_question_service.batch_update_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/generative_question_service.batch_update_generative_question_configs.js`


-----




### Generative_question_service.get_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/generative_question_service.get_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/generative_question_service.get_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/generative_question_service.get_generative_questions_feature_config.js`


-----




### Generative_question_service.list_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/generative_question_service.list_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/generative_question_service.list_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/generative_question_service.list_generative_question_configs.js`


-----




### Generative_question_service.update_generative_question_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_question_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_question_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_question_config.js`


-----




### Generative_question_service.update_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/generative_question_service.update_generative_questions_feature_config.js`


-----




### Model_service.create_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.create_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.create_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.create_model.js`


-----




### Model_service.delete_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.delete_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.delete_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.delete_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.get_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.list_models.js`


-----




### Model_service.pause_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.pause_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.pause_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.pause_model.js`


-----




### Model_service.resume_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.resume_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.resume_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.resume_model.js`


-----




### Model_service.tune_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.tune_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.tune_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.tune_model.js`


-----




### Model_service.update_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/model_service.update_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/model_service.update_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/model_service.update_model.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/prediction_service.predict.js`


-----




### Product_service.add_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.add_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.add_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.add_fulfillment_places.js`


-----




### Product_service.add_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.add_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.add_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.add_local_inventories.js`


-----




### Product_service.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.create_product.js`


-----




### Product_service.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.delete_product.js`


-----




### Product_service.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.get_product.js`


-----




### Product_service.import_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.import_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.import_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.import_products.js`


-----




### Product_service.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.list_products.js`


-----




### Product_service.purge_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.purge_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.purge_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.purge_products.js`


-----




### Product_service.remove_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.remove_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.remove_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.remove_fulfillment_places.js`


-----




### Product_service.remove_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.remove_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.remove_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.remove_local_inventories.js`


-----




### Product_service.set_inventory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.set_inventory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.set_inventory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.set_inventory.js`


-----




### Product_service.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/product_service.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/product_service.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/product_service.update_product.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/search_service.search.js`


-----




### Serving_config_service.add_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.add_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.add_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.add_control.js`


-----




### Serving_config_service.create_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.create_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.create_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.create_serving_config.js`


-----




### Serving_config_service.delete_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.delete_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.delete_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.delete_serving_config.js`


-----




### Serving_config_service.get_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.get_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.get_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.get_serving_config.js`


-----




### Serving_config_service.list_serving_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.list_serving_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.list_serving_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.list_serving_configs.js`


-----




### Serving_config_service.remove_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.remove_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.remove_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.remove_control.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/serving_config_service.update_serving_config.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/user_event_service.collect_user_event.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/user_event_service.import_user_events.js`


-----




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/user_event_service.purge_user_events.js`


-----




### User_event_service.rejoin_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/user_event_service.rejoin_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/user_event_service.rejoin_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/user_event_service.rejoin_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2/user_event_service.write_user_event.js`


-----




### Analytics_service.export_analytics_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/analytics_service.export_analytics_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/analytics_service.export_analytics_metrics.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/analytics_service.export_analytics_metrics.js`


-----




### Branch_service.get_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/branch_service.get_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/branch_service.get_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/branch_service.get_branch.js`


-----




### Branch_service.list_branches

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/branch_service.list_branches.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/branch_service.list_branches.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/branch_service.list_branches.js`


-----




### Catalog_service.add_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.add_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.add_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.add_catalog_attribute.js`


-----




### Catalog_service.batch_remove_catalog_attributes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.batch_remove_catalog_attributes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.batch_remove_catalog_attributes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.batch_remove_catalog_attributes.js`


-----




### Catalog_service.get_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_attributes_config.js`


-----




### Catalog_service.get_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_completion_config.js`


-----




### Catalog_service.get_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.get_default_branch.js`


-----




### Catalog_service.list_catalogs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.list_catalogs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.list_catalogs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.list_catalogs.js`


-----




### Catalog_service.remove_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.remove_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.remove_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.remove_catalog_attribute.js`


-----




### Catalog_service.replace_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.replace_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.replace_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.replace_catalog_attribute.js`


-----




### Catalog_service.set_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.set_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.set_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.set_default_branch.js`


-----




### Catalog_service.update_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_attributes_config.js`


-----




### Catalog_service.update_catalog

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_catalog.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_catalog.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_catalog.js`


-----




### Catalog_service.update_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/catalog_service.update_completion_config.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/completion_service.complete_query.js`


-----




### Completion_service.import_completion_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/completion_service.import_completion_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/completion_service.import_completion_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/completion_service.import_completion_data.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/control_service.update_control.js`


-----




### Conversational_search_service.conversational_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/conversational_search_service.conversational_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/conversational_search_service.conversational_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/conversational_search_service.conversational_search.js`


-----




### Generative_question_service.batch_update_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.batch_update_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.batch_update_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.batch_update_generative_question_configs.js`


-----




### Generative_question_service.get_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.get_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.get_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.get_generative_questions_feature_config.js`


-----




### Generative_question_service.list_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.list_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.list_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.list_generative_question_configs.js`


-----




### Generative_question_service.update_generative_question_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_question_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_question_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_question_config.js`


-----




### Generative_question_service.update_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/generative_question_service.update_generative_questions_feature_config.js`


-----




### Merchant_center_account_link_service.create_merchant_center_account_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.create_merchant_center_account_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.create_merchant_center_account_link.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.create_merchant_center_account_link.js`


-----




### Merchant_center_account_link_service.delete_merchant_center_account_link

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.delete_merchant_center_account_link.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.delete_merchant_center_account_link.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.delete_merchant_center_account_link.js`


-----




### Merchant_center_account_link_service.list_merchant_center_account_links

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.list_merchant_center_account_links.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.list_merchant_center_account_links.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/merchant_center_account_link_service.list_merchant_center_account_links.js`


-----




### Model_service.create_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.create_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.create_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.create_model.js`


-----




### Model_service.delete_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.delete_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.delete_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.delete_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.get_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.list_models.js`


-----




### Model_service.pause_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.pause_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.pause_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.pause_model.js`


-----




### Model_service.resume_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.resume_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.resume_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.resume_model.js`


-----




### Model_service.tune_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.tune_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.tune_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.tune_model.js`


-----




### Model_service.update_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/model_service.update_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/model_service.update_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/model_service.update_model.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/prediction_service.predict.js`


-----




### Product_service.add_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_fulfillment_places.js`


-----




### Product_service.add_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.add_local_inventories.js`


-----




### Product_service.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.create_product.js`


-----




### Product_service.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.delete_product.js`


-----




### Product_service.export_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.export_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.export_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.export_products.js`


-----




### Product_service.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.get_product.js`


-----




### Product_service.import_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.import_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.import_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.import_products.js`


-----




### Product_service.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.list_products.js`


-----




### Product_service.purge_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.purge_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.purge_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.purge_products.js`


-----




### Product_service.remove_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_fulfillment_places.js`


-----




### Product_service.remove_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.remove_local_inventories.js`


-----




### Product_service.set_inventory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.set_inventory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.set_inventory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.set_inventory.js`


-----




### Product_service.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/product_service.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/product_service.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/product_service.update_product.js`


-----




### Project_service.accept_terms

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.accept_terms.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.accept_terms.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.accept_terms.js`


-----




### Project_service.enroll_solution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.enroll_solution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.enroll_solution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.enroll_solution.js`


-----




### Project_service.get_alert_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_alert_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_alert_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_alert_config.js`


-----




### Project_service.get_logging_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_logging_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_logging_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_logging_config.js`


-----




### Project_service.get_project

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_project.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_project.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.get_project.js`


-----




### Project_service.list_enrolled_solutions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.list_enrolled_solutions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.list_enrolled_solutions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.list_enrolled_solutions.js`


-----




### Project_service.update_alert_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_alert_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_alert_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_alert_config.js`


-----




### Project_service.update_logging_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_logging_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_logging_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/project_service.update_logging_config.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/search_service.search.js`


-----




### Serving_config_service.add_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.add_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.add_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.add_control.js`


-----




### Serving_config_service.create_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.create_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.create_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.create_serving_config.js`


-----




### Serving_config_service.delete_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.delete_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.delete_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.delete_serving_config.js`


-----




### Serving_config_service.get_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.get_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.get_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.get_serving_config.js`


-----




### Serving_config_service.list_serving_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.list_serving_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.list_serving_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.list_serving_configs.js`


-----




### Serving_config_service.remove_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.remove_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.remove_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.remove_control.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/serving_config_service.update_serving_config.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.collect_user_event.js`


-----




### User_event_service.export_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.export_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.export_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.export_user_events.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.import_user_events.js`


-----




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.purge_user_events.js`


-----




### User_event_service.rejoin_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.rejoin_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.rejoin_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.rejoin_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2alpha/user_event_service.write_user_event.js`


-----




### Analytics_service.export_analytics_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/analytics_service.export_analytics_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/analytics_service.export_analytics_metrics.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/analytics_service.export_analytics_metrics.js`


-----




### Catalog_service.add_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.add_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.add_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.add_catalog_attribute.js`


-----




### Catalog_service.batch_remove_catalog_attributes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.batch_remove_catalog_attributes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.batch_remove_catalog_attributes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.batch_remove_catalog_attributes.js`


-----




### Catalog_service.get_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_attributes_config.js`


-----




### Catalog_service.get_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_completion_config.js`


-----




### Catalog_service.get_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.get_default_branch.js`


-----




### Catalog_service.list_catalogs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.list_catalogs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.list_catalogs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.list_catalogs.js`


-----




### Catalog_service.remove_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.remove_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.remove_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.remove_catalog_attribute.js`


-----




### Catalog_service.replace_catalog_attribute

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.replace_catalog_attribute.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.replace_catalog_attribute.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.replace_catalog_attribute.js`


-----




### Catalog_service.set_default_branch

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.set_default_branch.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.set_default_branch.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.set_default_branch.js`


-----




### Catalog_service.update_attributes_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_attributes_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_attributes_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_attributes_config.js`


-----




### Catalog_service.update_catalog

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_catalog.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_catalog.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_catalog.js`


-----




### Catalog_service.update_completion_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_completion_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_completion_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/catalog_service.update_completion_config.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/completion_service.complete_query.js`


-----




### Completion_service.import_completion_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/completion_service.import_completion_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/completion_service.import_completion_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/completion_service.import_completion_data.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/control_service.update_control.js`


-----




### Generative_question_service.batch_update_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.batch_update_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.batch_update_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.batch_update_generative_question_configs.js`


-----




### Generative_question_service.get_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.get_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.get_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.get_generative_questions_feature_config.js`


-----




### Generative_question_service.list_generative_question_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.list_generative_question_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.list_generative_question_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.list_generative_question_configs.js`


-----




### Generative_question_service.update_generative_question_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_question_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_question_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_question_config.js`


-----




### Generative_question_service.update_generative_questions_feature_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_questions_feature_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_questions_feature_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/generative_question_service.update_generative_questions_feature_config.js`


-----




### Model_service.create_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.create_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.create_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.create_model.js`


-----




### Model_service.delete_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.delete_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.delete_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.delete_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.get_model.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.list_models.js`


-----




### Model_service.pause_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.pause_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.pause_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.pause_model.js`


-----




### Model_service.resume_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.resume_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.resume_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.resume_model.js`


-----




### Model_service.tune_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.tune_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.tune_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.tune_model.js`


-----




### Model_service.update_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/model_service.update_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/model_service.update_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/model_service.update_model.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/prediction_service.predict.js`


-----




### Product_service.add_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.add_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.add_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.add_fulfillment_places.js`


-----




### Product_service.add_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.add_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.add_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.add_local_inventories.js`


-----




### Product_service.create_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.create_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.create_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.create_product.js`


-----




### Product_service.delete_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.delete_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.delete_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.delete_product.js`


-----




### Product_service.export_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.export_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.export_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.export_products.js`


-----




### Product_service.get_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.get_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.get_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.get_product.js`


-----




### Product_service.import_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.import_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.import_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.import_products.js`


-----




### Product_service.list_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.list_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.list_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.list_products.js`


-----




### Product_service.purge_products

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.purge_products.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.purge_products.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.purge_products.js`


-----




### Product_service.remove_fulfillment_places

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_fulfillment_places.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_fulfillment_places.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_fulfillment_places.js`


-----




### Product_service.remove_local_inventories

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_local_inventories.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_local_inventories.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.remove_local_inventories.js`


-----




### Product_service.set_inventory

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.set_inventory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.set_inventory.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.set_inventory.js`


-----




### Product_service.update_product

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/product_service.update_product.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/product_service.update_product.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/product_service.update_product.js`


-----




### Project_service.get_alert_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/project_service.get_alert_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/project_service.get_alert_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/project_service.get_alert_config.js`


-----




### Project_service.update_alert_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/project_service.update_alert_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/project_service.update_alert_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/project_service.update_alert_config.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/search_service.search.js`


-----




### Serving_config_service.add_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.add_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.add_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.add_control.js`


-----




### Serving_config_service.create_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.create_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.create_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.create_serving_config.js`


-----




### Serving_config_service.delete_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.delete_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.delete_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.delete_serving_config.js`


-----




### Serving_config_service.get_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.get_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.get_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.get_serving_config.js`


-----




### Serving_config_service.list_serving_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.list_serving_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.list_serving_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.list_serving_configs.js`


-----




### Serving_config_service.remove_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.remove_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.remove_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.remove_control.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/serving_config_service.update_serving_config.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.collect_user_event.js`


-----




### User_event_service.export_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.export_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.export_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.export_user_events.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.import_user_events.js`


-----




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.purge_user_events.js`


-----




### User_event_service.rejoin_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.rejoin_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.rejoin_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.rejoin_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/generated/v2beta/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/generated/v2beta/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/generated/v2beta/user_event_service.write_user_event.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-retail/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-retail/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-retail/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/recommendations/
