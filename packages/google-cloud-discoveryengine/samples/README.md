[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Discovery Engine API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_suggestion_deny_list_entries](#completion_service.import_suggestion_deny_list_entries)
  * [Completion_service.purge_suggestion_deny_list_entries](#completion_service.purge_suggestion_deny_list_entries)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Document_service.create_document](#document_service.create_document)
  * [Document_service.delete_document](#document_service.delete_document)
  * [Document_service.get_document](#document_service.get_document)
  * [Document_service.import_documents](#document_service.import_documents)
  * [Document_service.list_documents](#document_service.list_documents)
  * [Document_service.purge_documents](#document_service.purge_documents)
  * [Document_service.update_document](#document_service.update_document)
  * [Engine_service.create_engine](#engine_service.create_engine)
  * [Engine_service.delete_engine](#engine_service.delete_engine)
  * [Engine_service.get_engine](#engine_service.get_engine)
  * [Engine_service.list_engines](#engine_service.list_engines)
  * [Engine_service.update_engine](#engine_service.update_engine)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Site_search_engine_service.batch_create_target_sites](#site_search_engine_service.batch_create_target_sites)
  * [Site_search_engine_service.batch_verify_target_sites](#site_search_engine_service.batch_verify_target_sites)
  * [Site_search_engine_service.create_target_site](#site_search_engine_service.create_target_site)
  * [Site_search_engine_service.delete_target_site](#site_search_engine_service.delete_target_site)
  * [Site_search_engine_service.disable_advanced_site_search](#site_search_engine_service.disable_advanced_site_search)
  * [Site_search_engine_service.enable_advanced_site_search](#site_search_engine_service.enable_advanced_site_search)
  * [Site_search_engine_service.fetch_domain_verification_status](#site_search_engine_service.fetch_domain_verification_status)
  * [Site_search_engine_service.get_site_search_engine](#site_search_engine_service.get_site_search_engine)
  * [Site_search_engine_service.get_target_site](#site_search_engine_service.get_target_site)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Document_service.create_document](#document_service.create_document)
  * [Document_service.delete_document](#document_service.delete_document)
  * [Document_service.get_document](#document_service.get_document)
  * [Document_service.import_documents](#document_service.import_documents)
  * [Document_service.list_documents](#document_service.list_documents)
  * [Document_service.purge_documents](#document_service.purge_documents)
  * [Document_service.update_document](#document_service.update_document)
  * [Engine_service.create_engine](#engine_service.create_engine)
  * [Engine_service.delete_engine](#engine_service.delete_engine)
  * [Engine_service.get_engine](#engine_service.get_engine)
  * [Engine_service.list_engines](#engine_service.list_engines)
  * [Engine_service.pause_engine](#engine_service.pause_engine)
  * [Engine_service.resume_engine](#engine_service.resume_engine)
  * [Engine_service.tune_engine](#engine_service.tune_engine)
  * [Engine_service.update_engine](#engine_service.update_engine)
  * [Recommendation_service.recommend](#recommendation_service.recommend)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Search_tuning_service.train_custom_model](#search_tuning_service.train_custom_model)
  * [Site_search_engine_service.batch_create_target_sites](#site_search_engine_service.batch_create_target_sites)
  * [Site_search_engine_service.batch_verify_target_sites](#site_search_engine_service.batch_verify_target_sites)
  * [Site_search_engine_service.create_target_site](#site_search_engine_service.create_target_site)
  * [Site_search_engine_service.delete_target_site](#site_search_engine_service.delete_target_site)
  * [Site_search_engine_service.disable_advanced_site_search](#site_search_engine_service.disable_advanced_site_search)
  * [Site_search_engine_service.enable_advanced_site_search](#site_search_engine_service.enable_advanced_site_search)
  * [Site_search_engine_service.fetch_domain_verification_status](#site_search_engine_service.fetch_domain_verification_status)
  * [Site_search_engine_service.get_site_search_engine](#site_search_engine_service.get_site_search_engine)
  * [Site_search_engine_service.get_target_site](#site_search_engine_service.get_target_site)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_suggestion_deny_list_entries](#completion_service.import_suggestion_deny_list_entries)
  * [Completion_service.purge_suggestion_deny_list_entries](#completion_service.purge_suggestion_deny_list_entries)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Document_service.create_document](#document_service.create_document)
  * [Document_service.delete_document](#document_service.delete_document)
  * [Document_service.get_document](#document_service.get_document)
  * [Document_service.import_documents](#document_service.import_documents)
  * [Document_service.list_documents](#document_service.list_documents)
  * [Document_service.purge_documents](#document_service.purge_documents)
  * [Document_service.update_document](#document_service.update_document)
  * [Engine_service.create_engine](#engine_service.create_engine)
  * [Engine_service.delete_engine](#engine_service.delete_engine)
  * [Engine_service.get_engine](#engine_service.get_engine)
  * [Engine_service.list_engines](#engine_service.list_engines)
  * [Engine_service.update_engine](#engine_service.update_engine)
  * [Recommendation_service.recommend](#recommendation_service.recommend)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Serving_config_service.get_serving_config](#serving_config_service.get_serving_config)
  * [Serving_config_service.list_serving_configs](#serving_config_service.list_serving_configs)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [Site_search_engine_service.batch_create_target_sites](#site_search_engine_service.batch_create_target_sites)
  * [Site_search_engine_service.batch_verify_target_sites](#site_search_engine_service.batch_verify_target_sites)
  * [Site_search_engine_service.create_target_site](#site_search_engine_service.create_target_site)
  * [Site_search_engine_service.delete_target_site](#site_search_engine_service.delete_target_site)
  * [Site_search_engine_service.disable_advanced_site_search](#site_search_engine_service.disable_advanced_site_search)
  * [Site_search_engine_service.enable_advanced_site_search](#site_search_engine_service.enable_advanced_site_search)
  * [Site_search_engine_service.fetch_domain_verification_status](#site_search_engine_service.fetch_domain_verification_status)
  * [Site_search_engine_service.get_site_search_engine](#site_search_engine_service.get_site_search_engine)
  * [Site_search_engine_service.get_target_site](#site_search_engine_service.get_target_site)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js`


-----




### Completion_service.import_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js`


-----




### Completion_service.purge_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js`


-----




### Conversational_search_service.converse_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js`


-----




### Conversational_search_service.create_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js`


-----




### Data_store_service.create_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.create_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.create_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.create_data_store.js`


-----




### Data_store_service.delete_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.delete_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.delete_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.delete_data_store.js`


-----




### Data_store_service.get_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.get_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.get_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.get_data_store.js`


-----




### Data_store_service.list_data_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.list_data_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.list_data_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.list_data_stores.js`


-----




### Data_store_service.update_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.update_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.update_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.update_data_store.js`


-----




### Document_service.create_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js`


-----




### Document_service.delete_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js`


-----




### Document_service.get_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js`


-----




### Document_service.import_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js`


-----




### Document_service.list_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js`


-----




### Document_service.purge_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js`


-----




### Document_service.update_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js`


-----




### Engine_service.create_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.create_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.create_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.create_engine.js`


-----




### Engine_service.delete_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.delete_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.delete_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.delete_engine.js`


-----




### Engine_service.get_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.get_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.get_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.get_engine.js`


-----




### Engine_service.list_engines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.list_engines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.list_engines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.list_engines.js`


-----




### Engine_service.update_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.update_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.update_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.update_engine.js`


-----




### Schema_service.create_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js`


-----




### Schema_service.delete_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js`


-----




### Schema_service.get_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js`


-----




### Schema_service.list_schemas

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js`


-----




### Schema_service.update_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js`


-----




### Site_search_engine_service.batch_create_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_create_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_create_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_create_target_sites.js`


-----




### Site_search_engine_service.batch_verify_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_verify_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_verify_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_verify_target_sites.js`


-----




### Site_search_engine_service.create_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js`


-----




### Site_search_engine_service.delete_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_target_site.js`


-----




### Site_search_engine_service.disable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.disable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.disable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.disable_advanced_site_search.js`


-----




### Site_search_engine_service.enable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.enable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.enable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.enable_advanced_site_search.js`


-----




### Site_search_engine_service.fetch_domain_verification_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_domain_verification_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_domain_verification_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_domain_verification_status.js`


-----




### Site_search_engine_service.get_site_search_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_site_search_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_site_search_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_site_search_engine.js`


-----




### Site_search_engine_service.get_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_target_site.js`


-----




### Site_search_engine_service.list_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.list_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.list_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.list_target_sites.js`


-----




### Site_search_engine_service.recrawl_uris

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.recrawl_uris.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.recrawl_uris.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.recrawl_uris.js`


-----




### Site_search_engine_service.update_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.update_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.update_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.update_target_site.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js`


-----




### Conversational_search_service.converse_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.converse_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.converse_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.converse_conversation.js`


-----




### Conversational_search_service.create_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_conversation.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js`


-----




### Data_store_service.create_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.create_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.create_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.create_data_store.js`


-----




### Data_store_service.delete_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.delete_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.delete_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.delete_data_store.js`


-----




### Data_store_service.get_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_data_store.js`


-----




### Data_store_service.list_data_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.list_data_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.list_data_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.list_data_stores.js`


-----




### Data_store_service.update_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_data_store.js`


-----




### Document_service.create_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.create_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.create_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.create_document.js`


-----




### Document_service.delete_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.delete_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.delete_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.delete_document.js`


-----




### Document_service.get_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_document.js`


-----




### Document_service.import_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.import_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.import_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.import_documents.js`


-----




### Document_service.list_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.list_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.list_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.list_documents.js`


-----




### Document_service.purge_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.purge_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.purge_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.purge_documents.js`


-----




### Document_service.update_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.update_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.update_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.update_document.js`


-----




### Engine_service.create_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.create_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.create_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.create_engine.js`


-----




### Engine_service.delete_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.delete_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.delete_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.delete_engine.js`


-----




### Engine_service.get_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.get_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.get_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.get_engine.js`


-----




### Engine_service.list_engines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.list_engines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.list_engines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.list_engines.js`


-----




### Engine_service.pause_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.pause_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.pause_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.pause_engine.js`


-----




### Engine_service.resume_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.resume_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.resume_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.resume_engine.js`


-----




### Engine_service.tune_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.tune_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.tune_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.tune_engine.js`


-----




### Engine_service.update_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.update_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.update_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.update_engine.js`


-----




### Recommendation_service.recommend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js`


-----




### Schema_service.create_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.create_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.create_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.create_schema.js`


-----




### Schema_service.delete_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.delete_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.delete_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.delete_schema.js`


-----




### Schema_service.get_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.get_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.get_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.get_schema.js`


-----




### Schema_service.list_schemas

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.list_schemas.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.list_schemas.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.list_schemas.js`


-----




### Schema_service.update_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.update_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.update_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.update_schema.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_service.search.js`


-----




### Search_tuning_service.train_custom_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js`


-----




### Site_search_engine_service.batch_create_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_create_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_create_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_create_target_sites.js`


-----




### Site_search_engine_service.batch_verify_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_verify_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_verify_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_verify_target_sites.js`


-----




### Site_search_engine_service.create_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.create_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.create_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.create_target_site.js`


-----




### Site_search_engine_service.delete_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.delete_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.delete_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.delete_target_site.js`


-----




### Site_search_engine_service.disable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.disable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.disable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.disable_advanced_site_search.js`


-----




### Site_search_engine_service.enable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.enable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.enable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.enable_advanced_site_search.js`


-----




### Site_search_engine_service.fetch_domain_verification_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.fetch_domain_verification_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.fetch_domain_verification_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.fetch_domain_verification_status.js`


-----




### Site_search_engine_service.get_site_search_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_site_search_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_site_search_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_site_search_engine.js`


-----




### Site_search_engine_service.get_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_target_site.js`


-----




### Site_search_engine_service.list_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.list_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.list_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.list_target_sites.js`


-----




### Site_search_engine_service.recrawl_uris

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.recrawl_uris.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.recrawl_uris.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.recrawl_uris.js`


-----




### Site_search_engine_service.update_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.update_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.update_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.update_target_site.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.collect_user_event.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.import_user_events.js`


-----




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.purge_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.write_user_event.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js`


-----




### Completion_service.import_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js`


-----




### Completion_service.purge_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js`


-----




### Conversational_search_service.converse_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js`


-----




### Conversational_search_service.create_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js`


-----




### Data_store_service.create_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.create_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.create_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.create_data_store.js`


-----




### Data_store_service.delete_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.delete_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.delete_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.delete_data_store.js`


-----




### Data_store_service.get_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.get_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.get_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.get_data_store.js`


-----




### Data_store_service.list_data_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.list_data_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.list_data_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.list_data_stores.js`


-----




### Data_store_service.update_data_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.update_data_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.update_data_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.update_data_store.js`


-----




### Document_service.create_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js`


-----




### Document_service.delete_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js`


-----




### Document_service.get_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js`


-----




### Document_service.import_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js`


-----




### Document_service.list_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js`


-----




### Document_service.purge_documents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js`


-----




### Document_service.update_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js`


-----




### Engine_service.create_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.create_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.create_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.create_engine.js`


-----




### Engine_service.delete_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.delete_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.delete_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.delete_engine.js`


-----




### Engine_service.get_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.get_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.get_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.get_engine.js`


-----




### Engine_service.list_engines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.list_engines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.list_engines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.list_engines.js`


-----




### Engine_service.update_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js`


-----




### Recommendation_service.recommend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js`


-----




### Schema_service.create_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js`


-----




### Schema_service.delete_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js`


-----




### Schema_service.get_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js`


-----




### Schema_service.list_schemas

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js`


-----




### Schema_service.update_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js`


-----




### Search_service.search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js`


-----




### Serving_config_service.get_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.get_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.get_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.get_serving_config.js`


-----




### Serving_config_service.list_serving_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.list_serving_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.list_serving_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.list_serving_configs.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.update_serving_config.js`


-----




### Site_search_engine_service.batch_create_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_create_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_create_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_create_target_sites.js`


-----




### Site_search_engine_service.batch_verify_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_verify_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_verify_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_verify_target_sites.js`


-----




### Site_search_engine_service.create_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js`


-----




### Site_search_engine_service.delete_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_target_site.js`


-----




### Site_search_engine_service.disable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.disable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.disable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.disable_advanced_site_search.js`


-----




### Site_search_engine_service.enable_advanced_site_search

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.enable_advanced_site_search.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.enable_advanced_site_search.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.enable_advanced_site_search.js`


-----




### Site_search_engine_service.fetch_domain_verification_status

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_domain_verification_status.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_domain_verification_status.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_domain_verification_status.js`


-----




### Site_search_engine_service.get_site_search_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_site_search_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_site_search_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_site_search_engine.js`


-----




### Site_search_engine_service.get_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_target_site.js`


-----




### Site_search_engine_service.list_target_sites

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.list_target_sites.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.list_target_sites.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.list_target_sites.js`


-----




### Site_search_engine_service.recrawl_uris

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.recrawl_uris.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.recrawl_uris.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.recrawl_uris.js`


-----




### Site_search_engine_service.update_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.update_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.update_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.update_target_site.js`


-----




### User_event_service.collect_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js`


-----




### User_event_service.import_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: cloud.google.com/discovery-engine/
