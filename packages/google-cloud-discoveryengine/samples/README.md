[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Discovery Engine API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cmek_config_service.delete_cmek_config](#cmek_config_service.delete_cmek_config)
  * [Cmek_config_service.get_cmek_config](#cmek_config_service.get_cmek_config)
  * [Cmek_config_service.list_cmek_configs](#cmek_config_service.list_cmek_configs)
  * [Cmek_config_service.update_cmek_config](#cmek_config_service.update_cmek_config)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_suggestions](#completion_service.import_completion_suggestions)
  * [Completion_service.import_suggestion_deny_list_entries](#completion_service.import_suggestion_deny_list_entries)
  * [Completion_service.purge_completion_suggestions](#completion_service.purge_completion_suggestions)
  * [Completion_service.purge_suggestion_deny_list_entries](#completion_service.purge_suggestion_deny_list_entries)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Conversational_search_service.answer_query](#conversational_search_service.answer_query)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.create_session](#conversational_search_service.create_session)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.delete_session](#conversational_search_service.delete_session)
  * [Conversational_search_service.get_answer](#conversational_search_service.get_answer)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.get_session](#conversational_search_service.get_session)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.list_sessions](#conversational_search_service.list_sessions)
  * [Conversational_search_service.stream_answer_query](#conversational_search_service.stream_answer_query)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Conversational_search_service.update_session](#conversational_search_service.update_session)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Document_service.batch_get_documents_metadata](#document_service.batch_get_documents_metadata)
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
  * [Grounded_generation_service.check_grounding](#grounded_generation_service.check_grounding)
  * [Grounded_generation_service.generate_grounded_content](#grounded_generation_service.generate_grounded_content)
  * [Grounded_generation_service.stream_generate_grounded_content](#grounded_generation_service.stream_generate_grounded_content)
  * [Identity_mapping_store_service.create_identity_mapping_store](#identity_mapping_store_service.create_identity_mapping_store)
  * [Identity_mapping_store_service.delete_identity_mapping_store](#identity_mapping_store_service.delete_identity_mapping_store)
  * [Identity_mapping_store_service.get_identity_mapping_store](#identity_mapping_store_service.get_identity_mapping_store)
  * [Identity_mapping_store_service.import_identity_mappings](#identity_mapping_store_service.import_identity_mappings)
  * [Identity_mapping_store_service.list_identity_mapping_stores](#identity_mapping_store_service.list_identity_mapping_stores)
  * [Identity_mapping_store_service.list_identity_mappings](#identity_mapping_store_service.list_identity_mappings)
  * [Identity_mapping_store_service.purge_identity_mappings](#identity_mapping_store_service.purge_identity_mappings)
  * [Project_service.provision_project](#project_service.provision_project)
  * [Rank_service.rank](#rank_service.rank)
  * [Recommendation_service.recommend](#recommendation_service.recommend)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Search_service.search_lite](#search_service.search_lite)
  * [Search_tuning_service.list_custom_models](#search_tuning_service.list_custom_models)
  * [Search_tuning_service.train_custom_model](#search_tuning_service.train_custom_model)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [Site_search_engine_service.batch_create_target_sites](#site_search_engine_service.batch_create_target_sites)
  * [Site_search_engine_service.batch_verify_target_sites](#site_search_engine_service.batch_verify_target_sites)
  * [Site_search_engine_service.create_sitemap](#site_search_engine_service.create_sitemap)
  * [Site_search_engine_service.create_target_site](#site_search_engine_service.create_target_site)
  * [Site_search_engine_service.delete_sitemap](#site_search_engine_service.delete_sitemap)
  * [Site_search_engine_service.delete_target_site](#site_search_engine_service.delete_target_site)
  * [Site_search_engine_service.disable_advanced_site_search](#site_search_engine_service.disable_advanced_site_search)
  * [Site_search_engine_service.enable_advanced_site_search](#site_search_engine_service.enable_advanced_site_search)
  * [Site_search_engine_service.fetch_domain_verification_status](#site_search_engine_service.fetch_domain_verification_status)
  * [Site_search_engine_service.fetch_sitemaps](#site_search_engine_service.fetch_sitemaps)
  * [Site_search_engine_service.get_site_search_engine](#site_search_engine_service.get_site_search_engine)
  * [Site_search_engine_service.get_target_site](#site_search_engine_service.get_target_site)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [User_license_service.batch_update_user_licenses](#user_license_service.batch_update_user_licenses)
  * [User_license_service.list_user_licenses](#user_license_service.list_user_licenses)
  * [Acl_config_service.get_acl_config](#acl_config_service.get_acl_config)
  * [Acl_config_service.update_acl_config](#acl_config_service.update_acl_config)
  * [Chunk_service.get_chunk](#chunk_service.get_chunk)
  * [Chunk_service.list_chunks](#chunk_service.list_chunks)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_suggestions](#completion_service.import_completion_suggestions)
  * [Completion_service.import_suggestion_deny_list_entries](#completion_service.import_suggestion_deny_list_entries)
  * [Completion_service.purge_completion_suggestions](#completion_service.purge_completion_suggestions)
  * [Completion_service.purge_suggestion_deny_list_entries](#completion_service.purge_suggestion_deny_list_entries)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Conversational_search_service.answer_query](#conversational_search_service.answer_query)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.create_session](#conversational_search_service.create_session)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.delete_session](#conversational_search_service.delete_session)
  * [Conversational_search_service.get_answer](#conversational_search_service.get_answer)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.get_session](#conversational_search_service.get_session)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.list_sessions](#conversational_search_service.list_sessions)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Conversational_search_service.update_session](#conversational_search_service.update_session)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.get_document_processing_config](#data_store_service.get_document_processing_config)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Data_store_service.update_document_processing_config](#data_store_service.update_document_processing_config)
  * [Document_service.batch_get_documents_metadata](#document_service.batch_get_documents_metadata)
  * [Document_service.create_document](#document_service.create_document)
  * [Document_service.delete_document](#document_service.delete_document)
  * [Document_service.get_document](#document_service.get_document)
  * [Document_service.get_processed_document](#document_service.get_processed_document)
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
  * [Estimate_billing_service.estimate_data_size](#estimate_billing_service.estimate_data_size)
  * [Evaluation_service.create_evaluation](#evaluation_service.create_evaluation)
  * [Evaluation_service.get_evaluation](#evaluation_service.get_evaluation)
  * [Evaluation_service.list_evaluation_results](#evaluation_service.list_evaluation_results)
  * [Evaluation_service.list_evaluations](#evaluation_service.list_evaluations)
  * [Grounded_generation_service.check_grounding](#grounded_generation_service.check_grounding)
  * [Project_service.get_project](#project_service.get_project)
  * [Project_service.provision_project](#project_service.provision_project)
  * [Project_service.report_consent_change](#project_service.report_consent_change)
  * [Rank_service.rank](#rank_service.rank)
  * [Recommendation_service.recommend](#recommendation_service.recommend)
  * [Sample_query_service.create_sample_query](#sample_query_service.create_sample_query)
  * [Sample_query_service.delete_sample_query](#sample_query_service.delete_sample_query)
  * [Sample_query_service.get_sample_query](#sample_query_service.get_sample_query)
  * [Sample_query_service.import_sample_queries](#sample_query_service.import_sample_queries)
  * [Sample_query_service.list_sample_queries](#sample_query_service.list_sample_queries)
  * [Sample_query_service.update_sample_query](#sample_query_service.update_sample_query)
  * [Sample_query_set_service.create_sample_query_set](#sample_query_set_service.create_sample_query_set)
  * [Sample_query_set_service.delete_sample_query_set](#sample_query_set_service.delete_sample_query_set)
  * [Sample_query_set_service.get_sample_query_set](#sample_query_set_service.get_sample_query_set)
  * [Sample_query_set_service.list_sample_query_sets](#sample_query_set_service.list_sample_query_sets)
  * [Sample_query_set_service.update_sample_query_set](#sample_query_set_service.update_sample_query_set)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Search_tuning_service.list_custom_models](#search_tuning_service.list_custom_models)
  * [Search_tuning_service.train_custom_model](#search_tuning_service.train_custom_model)
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
  * [Site_search_engine_service.get_uri_pattern_document_data](#site_search_engine_service.get_uri_pattern_document_data)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.set_uri_pattern_document_data](#site_search_engine_service.set_uri_pattern_document_data)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Completion_service.advanced_complete_query](#completion_service.advanced_complete_query)
  * [Completion_service.complete_query](#completion_service.complete_query)
  * [Completion_service.import_completion_suggestions](#completion_service.import_completion_suggestions)
  * [Completion_service.import_suggestion_deny_list_entries](#completion_service.import_suggestion_deny_list_entries)
  * [Completion_service.purge_completion_suggestions](#completion_service.purge_completion_suggestions)
  * [Completion_service.purge_suggestion_deny_list_entries](#completion_service.purge_suggestion_deny_list_entries)
  * [Control_service.create_control](#control_service.create_control)
  * [Control_service.delete_control](#control_service.delete_control)
  * [Control_service.get_control](#control_service.get_control)
  * [Control_service.list_controls](#control_service.list_controls)
  * [Control_service.update_control](#control_service.update_control)
  * [Conversational_search_service.answer_query](#conversational_search_service.answer_query)
  * [Conversational_search_service.converse_conversation](#conversational_search_service.converse_conversation)
  * [Conversational_search_service.create_conversation](#conversational_search_service.create_conversation)
  * [Conversational_search_service.create_session](#conversational_search_service.create_session)
  * [Conversational_search_service.delete_conversation](#conversational_search_service.delete_conversation)
  * [Conversational_search_service.delete_session](#conversational_search_service.delete_session)
  * [Conversational_search_service.get_answer](#conversational_search_service.get_answer)
  * [Conversational_search_service.get_conversation](#conversational_search_service.get_conversation)
  * [Conversational_search_service.get_session](#conversational_search_service.get_session)
  * [Conversational_search_service.list_conversations](#conversational_search_service.list_conversations)
  * [Conversational_search_service.list_sessions](#conversational_search_service.list_sessions)
  * [Conversational_search_service.update_conversation](#conversational_search_service.update_conversation)
  * [Conversational_search_service.update_session](#conversational_search_service.update_session)
  * [Data_store_service.create_data_store](#data_store_service.create_data_store)
  * [Data_store_service.delete_data_store](#data_store_service.delete_data_store)
  * [Data_store_service.get_data_store](#data_store_service.get_data_store)
  * [Data_store_service.list_data_stores](#data_store_service.list_data_stores)
  * [Data_store_service.update_data_store](#data_store_service.update_data_store)
  * [Document_service.batch_get_documents_metadata](#document_service.batch_get_documents_metadata)
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
  * [Evaluation_service.create_evaluation](#evaluation_service.create_evaluation)
  * [Evaluation_service.get_evaluation](#evaluation_service.get_evaluation)
  * [Evaluation_service.list_evaluation_results](#evaluation_service.list_evaluation_results)
  * [Evaluation_service.list_evaluations](#evaluation_service.list_evaluations)
  * [Grounded_generation_service.check_grounding](#grounded_generation_service.check_grounding)
  * [Grounded_generation_service.generate_grounded_content](#grounded_generation_service.generate_grounded_content)
  * [Grounded_generation_service.stream_generate_grounded_content](#grounded_generation_service.stream_generate_grounded_content)
  * [Project_service.provision_project](#project_service.provision_project)
  * [Rank_service.rank](#rank_service.rank)
  * [Recommendation_service.recommend](#recommendation_service.recommend)
  * [Sample_query_service.create_sample_query](#sample_query_service.create_sample_query)
  * [Sample_query_service.delete_sample_query](#sample_query_service.delete_sample_query)
  * [Sample_query_service.get_sample_query](#sample_query_service.get_sample_query)
  * [Sample_query_service.import_sample_queries](#sample_query_service.import_sample_queries)
  * [Sample_query_service.list_sample_queries](#sample_query_service.list_sample_queries)
  * [Sample_query_service.update_sample_query](#sample_query_service.update_sample_query)
  * [Sample_query_set_service.create_sample_query_set](#sample_query_set_service.create_sample_query_set)
  * [Sample_query_set_service.delete_sample_query_set](#sample_query_set_service.delete_sample_query_set)
  * [Sample_query_set_service.get_sample_query_set](#sample_query_set_service.get_sample_query_set)
  * [Sample_query_set_service.list_sample_query_sets](#sample_query_set_service.list_sample_query_sets)
  * [Sample_query_set_service.update_sample_query_set](#sample_query_set_service.update_sample_query_set)
  * [Schema_service.create_schema](#schema_service.create_schema)
  * [Schema_service.delete_schema](#schema_service.delete_schema)
  * [Schema_service.get_schema](#schema_service.get_schema)
  * [Schema_service.list_schemas](#schema_service.list_schemas)
  * [Schema_service.update_schema](#schema_service.update_schema)
  * [Search_service.search](#search_service.search)
  * [Search_service.search_lite](#search_service.search_lite)
  * [Search_tuning_service.list_custom_models](#search_tuning_service.list_custom_models)
  * [Search_tuning_service.train_custom_model](#search_tuning_service.train_custom_model)
  * [Serving_config_service.get_serving_config](#serving_config_service.get_serving_config)
  * [Serving_config_service.list_serving_configs](#serving_config_service.list_serving_configs)
  * [Serving_config_service.update_serving_config](#serving_config_service.update_serving_config)
  * [Site_search_engine_service.batch_create_target_sites](#site_search_engine_service.batch_create_target_sites)
  * [Site_search_engine_service.batch_verify_target_sites](#site_search_engine_service.batch_verify_target_sites)
  * [Site_search_engine_service.create_sitemap](#site_search_engine_service.create_sitemap)
  * [Site_search_engine_service.create_target_site](#site_search_engine_service.create_target_site)
  * [Site_search_engine_service.delete_sitemap](#site_search_engine_service.delete_sitemap)
  * [Site_search_engine_service.delete_target_site](#site_search_engine_service.delete_target_site)
  * [Site_search_engine_service.disable_advanced_site_search](#site_search_engine_service.disable_advanced_site_search)
  * [Site_search_engine_service.enable_advanced_site_search](#site_search_engine_service.enable_advanced_site_search)
  * [Site_search_engine_service.fetch_domain_verification_status](#site_search_engine_service.fetch_domain_verification_status)
  * [Site_search_engine_service.fetch_sitemaps](#site_search_engine_service.fetch_sitemaps)
  * [Site_search_engine_service.get_site_search_engine](#site_search_engine_service.get_site_search_engine)
  * [Site_search_engine_service.get_target_site](#site_search_engine_service.get_target_site)
  * [Site_search_engine_service.list_target_sites](#site_search_engine_service.list_target_sites)
  * [Site_search_engine_service.recrawl_uris](#site_search_engine_service.recrawl_uris)
  * [Site_search_engine_service.update_target_site](#site_search_engine_service.update_target_site)
  * [User_event_service.collect_user_event](#user_event_service.collect_user_event)
  * [User_event_service.import_user_events](#user_event_service.import_user_events)
  * [User_event_service.purge_user_events](#user_event_service.purge_user_events)
  * [User_event_service.write_user_event](#user_event_service.write_user_event)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cmek_config_service.delete_cmek_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.delete_cmek_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.delete_cmek_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.delete_cmek_config.js`


-----




### Cmek_config_service.get_cmek_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.get_cmek_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.get_cmek_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.get_cmek_config.js`


-----




### Cmek_config_service.list_cmek_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.list_cmek_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.list_cmek_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.list_cmek_configs.js`


-----




### Cmek_config_service.update_cmek_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.update_cmek_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.update_cmek_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.update_cmek_config.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js`


-----




### Completion_service.import_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_completion_suggestions.js`


-----




### Completion_service.import_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js`


-----




### Completion_service.purge_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_completion_suggestions.js`


-----




### Completion_service.purge_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/control_service.update_control.js`


-----




### Conversational_search_service.answer_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.answer_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.answer_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.answer_query.js`


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




### Conversational_search_service.create_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_session.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.delete_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_session.js`


-----




### Conversational_search_service.get_answer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_answer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_answer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_answer.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.get_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_session.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.list_sessions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_sessions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_sessions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_sessions.js`


-----




### Conversational_search_service.stream_answer_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.stream_answer_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.stream_answer_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.stream_answer_query.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js`


-----




### Conversational_search_service.update_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_session.js`


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




### Document_service.batch_get_documents_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.batch_get_documents_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/document_service.batch_get_documents_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/document_service.batch_get_documents_metadata.js`


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




### Grounded_generation_service.check_grounding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.check_grounding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.check_grounding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.check_grounding.js`


-----




### Grounded_generation_service.generate_grounded_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.generate_grounded_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.generate_grounded_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.generate_grounded_content.js`


-----




### Grounded_generation_service.stream_generate_grounded_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.stream_generate_grounded_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.stream_generate_grounded_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.stream_generate_grounded_content.js`


-----




### Identity_mapping_store_service.create_identity_mapping_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.create_identity_mapping_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.create_identity_mapping_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.create_identity_mapping_store.js`


-----




### Identity_mapping_store_service.delete_identity_mapping_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.delete_identity_mapping_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.delete_identity_mapping_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.delete_identity_mapping_store.js`


-----




### Identity_mapping_store_service.get_identity_mapping_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.get_identity_mapping_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.get_identity_mapping_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.get_identity_mapping_store.js`


-----




### Identity_mapping_store_service.import_identity_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.import_identity_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.import_identity_mappings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.import_identity_mappings.js`


-----




### Identity_mapping_store_service.list_identity_mapping_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mapping_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mapping_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mapping_stores.js`


-----




### Identity_mapping_store_service.list_identity_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mappings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mappings.js`


-----




### Identity_mapping_store_service.purge_identity_mappings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.purge_identity_mappings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.purge_identity_mappings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.purge_identity_mappings.js`


-----




### Project_service.provision_project

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/project_service.provision_project.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/project_service.provision_project.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/project_service.provision_project.js`


-----




### Rank_service.rank

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/rank_service.rank.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/rank_service.rank.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/rank_service.rank.js`


-----




### Recommendation_service.recommend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/recommendation_service.recommend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/recommendation_service.recommend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/recommendation_service.recommend.js`


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




### Search_service.search_lite

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search_lite.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search_lite.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search_lite.js`


-----




### Search_tuning_service.list_custom_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.list_custom_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.list_custom_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.list_custom_models.js`


-----




### Search_tuning_service.train_custom_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.train_custom_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.train_custom_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.train_custom_model.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/serving_config_service.update_serving_config.js`


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




### Site_search_engine_service.create_sitemap

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_sitemap.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_sitemap.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_sitemap.js`


-----




### Site_search_engine_service.create_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js`


-----




### Site_search_engine_service.delete_sitemap

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_sitemap.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_sitemap.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_sitemap.js`


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




### Site_search_engine_service.fetch_sitemaps

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_sitemaps.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_sitemaps.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_sitemaps.js`


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




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.purge_user_events.js`


-----




### User_event_service.write_user_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js`


-----




### User_license_service.batch_update_user_licenses

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.batch_update_user_licenses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.batch_update_user_licenses.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.batch_update_user_licenses.js`


-----




### User_license_service.list_user_licenses

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.list_user_licenses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.list_user_licenses.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.list_user_licenses.js`


-----




### Acl_config_service.get_acl_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.get_acl_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.get_acl_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.get_acl_config.js`


-----




### Acl_config_service.update_acl_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.update_acl_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.update_acl_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.update_acl_config.js`


-----




### Chunk_service.get_chunk

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.get_chunk.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.get_chunk.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.get_chunk.js`


-----




### Chunk_service.list_chunks

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.list_chunks.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.list_chunks.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.list_chunks.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js`


-----




### Completion_service.import_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_completion_suggestions.js`


-----




### Completion_service.import_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_suggestion_deny_list_entries.js`


-----




### Completion_service.purge_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_completion_suggestions.js`


-----




### Completion_service.purge_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_suggestion_deny_list_entries.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.update_control.js`


-----




### Conversational_search_service.answer_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.answer_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.answer_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.answer_query.js`


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




### Conversational_search_service.create_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_session.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.delete_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_session.js`


-----




### Conversational_search_service.get_answer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_answer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_answer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_answer.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.get_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_session.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.list_sessions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_sessions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_sessions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_sessions.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js`


-----




### Conversational_search_service.update_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_session.js`


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




### Data_store_service.get_document_processing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_document_processing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_document_processing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_document_processing_config.js`


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




### Data_store_service.update_document_processing_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_document_processing_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_document_processing_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_document_processing_config.js`


-----




### Document_service.batch_get_documents_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.batch_get_documents_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.batch_get_documents_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.batch_get_documents_metadata.js`


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




### Document_service.get_processed_document

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_processed_document.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_processed_document.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_processed_document.js`


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




### Estimate_billing_service.estimate_data_size

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/estimate_billing_service.estimate_data_size.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/estimate_billing_service.estimate_data_size.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/estimate_billing_service.estimate_data_size.js`


-----




### Evaluation_service.create_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.create_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.create_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.create_evaluation.js`


-----




### Evaluation_service.get_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.get_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.get_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.get_evaluation.js`


-----




### Evaluation_service.list_evaluation_results

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluation_results.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluation_results.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluation_results.js`


-----




### Evaluation_service.list_evaluations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluations.js`


-----




### Grounded_generation_service.check_grounding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/grounded_generation_service.check_grounding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/grounded_generation_service.check_grounding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/grounded_generation_service.check_grounding.js`


-----




### Project_service.get_project

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.get_project.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.get_project.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.get_project.js`


-----




### Project_service.provision_project

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.provision_project.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.provision_project.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.provision_project.js`


-----




### Project_service.report_consent_change

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.report_consent_change.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.report_consent_change.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.report_consent_change.js`


-----




### Rank_service.rank

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/rank_service.rank.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/rank_service.rank.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/rank_service.rank.js`


-----




### Recommendation_service.recommend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js`


-----




### Sample_query_service.create_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.create_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.create_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.create_sample_query.js`


-----




### Sample_query_service.delete_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.delete_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.delete_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.delete_sample_query.js`


-----




### Sample_query_service.get_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.get_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.get_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.get_sample_query.js`


-----




### Sample_query_service.import_sample_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.import_sample_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.import_sample_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.import_sample_queries.js`


-----




### Sample_query_service.list_sample_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.list_sample_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.list_sample_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.list_sample_queries.js`


-----




### Sample_query_service.update_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.update_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.update_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.update_sample_query.js`


-----




### Sample_query_set_service.create_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.create_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.create_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.create_sample_query_set.js`


-----




### Sample_query_set_service.delete_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.delete_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.delete_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.delete_sample_query_set.js`


-----




### Sample_query_set_service.get_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.get_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.get_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.get_sample_query_set.js`


-----




### Sample_query_set_service.list_sample_query_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.list_sample_query_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.list_sample_query_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.list_sample_query_sets.js`


-----




### Sample_query_set_service.update_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.update_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.update_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.update_sample_query_set.js`


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




### Search_tuning_service.list_custom_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.list_custom_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.list_custom_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.list_custom_models.js`


-----




### Search_tuning_service.train_custom_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js`


-----




### Serving_config_service.get_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.get_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.get_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.get_serving_config.js`


-----




### Serving_config_service.list_serving_configs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.list_serving_configs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.list_serving_configs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.list_serving_configs.js`


-----




### Serving_config_service.update_serving_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.update_serving_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.update_serving_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.update_serving_config.js`


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




### Site_search_engine_service.get_uri_pattern_document_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_uri_pattern_document_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_uri_pattern_document_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_uri_pattern_document_data.js`


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




### Site_search_engine_service.set_uri_pattern_document_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.set_uri_pattern_document_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.set_uri_pattern_document_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.set_uri_pattern_document_data.js`


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




### Completion_service.advanced_complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.advanced_complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.advanced_complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.advanced_complete_query.js`


-----




### Completion_service.complete_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js`


-----




### Completion_service.import_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_completion_suggestions.js`


-----




### Completion_service.import_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js`


-----




### Completion_service.purge_completion_suggestions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_completion_suggestions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_completion_suggestions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_completion_suggestions.js`


-----




### Completion_service.purge_suggestion_deny_list_entries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js`


-----




### Control_service.create_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.create_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.create_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.create_control.js`


-----




### Control_service.delete_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.delete_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.delete_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.delete_control.js`


-----




### Control_service.get_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.get_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.get_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.get_control.js`


-----




### Control_service.list_controls

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.list_controls.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.list_controls.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.list_controls.js`


-----




### Control_service.update_control

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.update_control.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.update_control.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.update_control.js`


-----




### Conversational_search_service.answer_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.answer_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.answer_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.answer_query.js`


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




### Conversational_search_service.create_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_session.js`


-----




### Conversational_search_service.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js`


-----




### Conversational_search_service.delete_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_session.js`


-----




### Conversational_search_service.get_answer

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_answer.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_answer.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_answer.js`


-----




### Conversational_search_service.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js`


-----




### Conversational_search_service.get_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_session.js`


-----




### Conversational_search_service.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js`


-----




### Conversational_search_service.list_sessions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_sessions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_sessions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_sessions.js`


-----




### Conversational_search_service.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js`


-----




### Conversational_search_service.update_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_session.js`


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




### Document_service.batch_get_documents_metadata

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.batch_get_documents_metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.batch_get_documents_metadata.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.batch_get_documents_metadata.js`


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




### Engine_service.pause_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.pause_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.pause_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.pause_engine.js`


-----




### Engine_service.resume_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.resume_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.resume_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.resume_engine.js`


-----




### Engine_service.tune_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.tune_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.tune_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.tune_engine.js`


-----




### Engine_service.update_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js`


-----




### Evaluation_service.create_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.create_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.create_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.create_evaluation.js`


-----




### Evaluation_service.get_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.get_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.get_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.get_evaluation.js`


-----




### Evaluation_service.list_evaluation_results

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluation_results.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluation_results.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluation_results.js`


-----




### Evaluation_service.list_evaluations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluations.js`


-----




### Grounded_generation_service.check_grounding

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.check_grounding.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.check_grounding.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.check_grounding.js`


-----




### Grounded_generation_service.generate_grounded_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.generate_grounded_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.generate_grounded_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.generate_grounded_content.js`


-----




### Grounded_generation_service.stream_generate_grounded_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.stream_generate_grounded_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.stream_generate_grounded_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.stream_generate_grounded_content.js`


-----




### Project_service.provision_project

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/project_service.provision_project.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/project_service.provision_project.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/project_service.provision_project.js`


-----




### Rank_service.rank

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/rank_service.rank.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/rank_service.rank.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/rank_service.rank.js`


-----




### Recommendation_service.recommend

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js`


-----




### Sample_query_service.create_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.create_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.create_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.create_sample_query.js`


-----




### Sample_query_service.delete_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.delete_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.delete_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.delete_sample_query.js`


-----




### Sample_query_service.get_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.get_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.get_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.get_sample_query.js`


-----




### Sample_query_service.import_sample_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.import_sample_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.import_sample_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.import_sample_queries.js`


-----




### Sample_query_service.list_sample_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.list_sample_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.list_sample_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.list_sample_queries.js`


-----




### Sample_query_service.update_sample_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.update_sample_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.update_sample_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.update_sample_query.js`


-----




### Sample_query_set_service.create_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.create_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.create_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.create_sample_query_set.js`


-----




### Sample_query_set_service.delete_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.delete_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.delete_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.delete_sample_query_set.js`


-----




### Sample_query_set_service.get_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.get_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.get_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.get_sample_query_set.js`


-----




### Sample_query_set_service.list_sample_query_sets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.list_sample_query_sets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.list_sample_query_sets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.list_sample_query_sets.js`


-----




### Sample_query_set_service.update_sample_query_set

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.update_sample_query_set.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.update_sample_query_set.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.update_sample_query_set.js`


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




### Search_service.search_lite

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search_lite.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search_lite.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search_lite.js`


-----




### Search_tuning_service.list_custom_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.list_custom_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.list_custom_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.list_custom_models.js`


-----




### Search_tuning_service.train_custom_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.train_custom_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.train_custom_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.train_custom_model.js`


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




### Site_search_engine_service.create_sitemap

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_sitemap.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_sitemap.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_sitemap.js`


-----




### Site_search_engine_service.create_target_site

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js`


-----




### Site_search_engine_service.delete_sitemap

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_sitemap.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_sitemap.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_sitemap.js`


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




### Site_search_engine_service.fetch_sitemaps

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_sitemaps.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_sitemaps.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_sitemaps.js`


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




### User_event_service.purge_user_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.purge_user_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.purge_user_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.purge_user_events.js`


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
