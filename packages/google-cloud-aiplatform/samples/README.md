[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Vertex AI: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Dataset_service.create_dataset](#dataset_service.create_dataset)
  * [Dataset_service.create_dataset_version](#dataset_service.create_dataset_version)
  * [Dataset_service.delete_dataset](#dataset_service.delete_dataset)
  * [Dataset_service.delete_dataset_version](#dataset_service.delete_dataset_version)
  * [Dataset_service.delete_saved_query](#dataset_service.delete_saved_query)
  * [Dataset_service.export_data](#dataset_service.export_data)
  * [Dataset_service.get_annotation_spec](#dataset_service.get_annotation_spec)
  * [Dataset_service.get_dataset](#dataset_service.get_dataset)
  * [Dataset_service.get_dataset_version](#dataset_service.get_dataset_version)
  * [Dataset_service.import_data](#dataset_service.import_data)
  * [Dataset_service.list_annotations](#dataset_service.list_annotations)
  * [Dataset_service.list_data_items](#dataset_service.list_data_items)
  * [Dataset_service.list_dataset_versions](#dataset_service.list_dataset_versions)
  * [Dataset_service.list_datasets](#dataset_service.list_datasets)
  * [Dataset_service.list_saved_queries](#dataset_service.list_saved_queries)
  * [Dataset_service.restore_dataset_version](#dataset_service.restore_dataset_version)
  * [Dataset_service.search_data_items](#dataset_service.search_data_items)
  * [Dataset_service.update_dataset](#dataset_service.update_dataset)
  * [Dataset_service.update_dataset_version](#dataset_service.update_dataset_version)
  * [Deployment_resource_pool_service.create_deployment_resource_pool](#deployment_resource_pool_service.create_deployment_resource_pool)
  * [Deployment_resource_pool_service.delete_deployment_resource_pool](#deployment_resource_pool_service.delete_deployment_resource_pool)
  * [Deployment_resource_pool_service.get_deployment_resource_pool](#deployment_resource_pool_service.get_deployment_resource_pool)
  * [Deployment_resource_pool_service.list_deployment_resource_pools](#deployment_resource_pool_service.list_deployment_resource_pools)
  * [Deployment_resource_pool_service.query_deployed_models](#deployment_resource_pool_service.query_deployed_models)
  * [Deployment_resource_pool_service.update_deployment_resource_pool](#deployment_resource_pool_service.update_deployment_resource_pool)
  * [Endpoint_service.create_endpoint](#endpoint_service.create_endpoint)
  * [Endpoint_service.delete_endpoint](#endpoint_service.delete_endpoint)
  * [Endpoint_service.deploy_model](#endpoint_service.deploy_model)
  * [Endpoint_service.get_endpoint](#endpoint_service.get_endpoint)
  * [Endpoint_service.list_endpoints](#endpoint_service.list_endpoints)
  * [Endpoint_service.mutate_deployed_model](#endpoint_service.mutate_deployed_model)
  * [Endpoint_service.undeploy_model](#endpoint_service.undeploy_model)
  * [Endpoint_service.update_endpoint](#endpoint_service.update_endpoint)
  * [Endpoint_service.update_endpoint_long_running](#endpoint_service.update_endpoint_long_running)
  * [Evaluation_service.evaluate_instances](#evaluation_service.evaluate_instances)
  * [Feature_online_store_admin_service.create_feature_online_store](#feature_online_store_admin_service.create_feature_online_store)
  * [Feature_online_store_admin_service.create_feature_view](#feature_online_store_admin_service.create_feature_view)
  * [Feature_online_store_admin_service.delete_feature_online_store](#feature_online_store_admin_service.delete_feature_online_store)
  * [Feature_online_store_admin_service.delete_feature_view](#feature_online_store_admin_service.delete_feature_view)
  * [Feature_online_store_admin_service.get_feature_online_store](#feature_online_store_admin_service.get_feature_online_store)
  * [Feature_online_store_admin_service.get_feature_view](#feature_online_store_admin_service.get_feature_view)
  * [Feature_online_store_admin_service.get_feature_view_sync](#feature_online_store_admin_service.get_feature_view_sync)
  * [Feature_online_store_admin_service.list_feature_online_stores](#feature_online_store_admin_service.list_feature_online_stores)
  * [Feature_online_store_admin_service.list_feature_view_syncs](#feature_online_store_admin_service.list_feature_view_syncs)
  * [Feature_online_store_admin_service.list_feature_views](#feature_online_store_admin_service.list_feature_views)
  * [Feature_online_store_admin_service.sync_feature_view](#feature_online_store_admin_service.sync_feature_view)
  * [Feature_online_store_admin_service.update_feature_online_store](#feature_online_store_admin_service.update_feature_online_store)
  * [Feature_online_store_admin_service.update_feature_view](#feature_online_store_admin_service.update_feature_view)
  * [Feature_online_store_service.fetch_feature_values](#feature_online_store_service.fetch_feature_values)
  * [Feature_online_store_service.search_nearest_entities](#feature_online_store_service.search_nearest_entities)
  * [Feature_registry_service.batch_create_features](#feature_registry_service.batch_create_features)
  * [Feature_registry_service.create_feature](#feature_registry_service.create_feature)
  * [Feature_registry_service.create_feature_group](#feature_registry_service.create_feature_group)
  * [Feature_registry_service.delete_feature](#feature_registry_service.delete_feature)
  * [Feature_registry_service.delete_feature_group](#feature_registry_service.delete_feature_group)
  * [Feature_registry_service.get_feature](#feature_registry_service.get_feature)
  * [Feature_registry_service.get_feature_group](#feature_registry_service.get_feature_group)
  * [Feature_registry_service.list_feature_groups](#feature_registry_service.list_feature_groups)
  * [Feature_registry_service.list_features](#feature_registry_service.list_features)
  * [Feature_registry_service.update_feature](#feature_registry_service.update_feature)
  * [Feature_registry_service.update_feature_group](#feature_registry_service.update_feature_group)
  * [Featurestore_online_serving_service.read_feature_values](#featurestore_online_serving_service.read_feature_values)
  * [Featurestore_online_serving_service.streaming_read_feature_values](#featurestore_online_serving_service.streaming_read_feature_values)
  * [Featurestore_online_serving_service.write_feature_values](#featurestore_online_serving_service.write_feature_values)
  * [Featurestore_service.batch_create_features](#featurestore_service.batch_create_features)
  * [Featurestore_service.batch_read_feature_values](#featurestore_service.batch_read_feature_values)
  * [Featurestore_service.create_entity_type](#featurestore_service.create_entity_type)
  * [Featurestore_service.create_feature](#featurestore_service.create_feature)
  * [Featurestore_service.create_featurestore](#featurestore_service.create_featurestore)
  * [Featurestore_service.delete_entity_type](#featurestore_service.delete_entity_type)
  * [Featurestore_service.delete_feature](#featurestore_service.delete_feature)
  * [Featurestore_service.delete_feature_values](#featurestore_service.delete_feature_values)
  * [Featurestore_service.delete_featurestore](#featurestore_service.delete_featurestore)
  * [Featurestore_service.export_feature_values](#featurestore_service.export_feature_values)
  * [Featurestore_service.get_entity_type](#featurestore_service.get_entity_type)
  * [Featurestore_service.get_feature](#featurestore_service.get_feature)
  * [Featurestore_service.get_featurestore](#featurestore_service.get_featurestore)
  * [Featurestore_service.import_feature_values](#featurestore_service.import_feature_values)
  * [Featurestore_service.list_entity_types](#featurestore_service.list_entity_types)
  * [Featurestore_service.list_features](#featurestore_service.list_features)
  * [Featurestore_service.list_featurestores](#featurestore_service.list_featurestores)
  * [Featurestore_service.search_features](#featurestore_service.search_features)
  * [Featurestore_service.update_entity_type](#featurestore_service.update_entity_type)
  * [Featurestore_service.update_feature](#featurestore_service.update_feature)
  * [Featurestore_service.update_featurestore](#featurestore_service.update_featurestore)
  * [Gen_ai_cache_service.create_cached_content](#gen_ai_cache_service.create_cached_content)
  * [Gen_ai_cache_service.delete_cached_content](#gen_ai_cache_service.delete_cached_content)
  * [Gen_ai_cache_service.get_cached_content](#gen_ai_cache_service.get_cached_content)
  * [Gen_ai_cache_service.list_cached_contents](#gen_ai_cache_service.list_cached_contents)
  * [Gen_ai_cache_service.update_cached_content](#gen_ai_cache_service.update_cached_content)
  * [Gen_ai_tuning_service.cancel_tuning_job](#gen_ai_tuning_service.cancel_tuning_job)
  * [Gen_ai_tuning_service.create_tuning_job](#gen_ai_tuning_service.create_tuning_job)
  * [Gen_ai_tuning_service.get_tuning_job](#gen_ai_tuning_service.get_tuning_job)
  * [Gen_ai_tuning_service.list_tuning_jobs](#gen_ai_tuning_service.list_tuning_jobs)
  * [Gen_ai_tuning_service.rebase_tuned_model](#gen_ai_tuning_service.rebase_tuned_model)
  * [Index_endpoint_service.create_index_endpoint](#index_endpoint_service.create_index_endpoint)
  * [Index_endpoint_service.delete_index_endpoint](#index_endpoint_service.delete_index_endpoint)
  * [Index_endpoint_service.deploy_index](#index_endpoint_service.deploy_index)
  * [Index_endpoint_service.get_index_endpoint](#index_endpoint_service.get_index_endpoint)
  * [Index_endpoint_service.list_index_endpoints](#index_endpoint_service.list_index_endpoints)
  * [Index_endpoint_service.mutate_deployed_index](#index_endpoint_service.mutate_deployed_index)
  * [Index_endpoint_service.undeploy_index](#index_endpoint_service.undeploy_index)
  * [Index_endpoint_service.update_index_endpoint](#index_endpoint_service.update_index_endpoint)
  * [Index_service.create_index](#index_service.create_index)
  * [Index_service.delete_index](#index_service.delete_index)
  * [Index_service.get_index](#index_service.get_index)
  * [Index_service.list_indexes](#index_service.list_indexes)
  * [Index_service.remove_datapoints](#index_service.remove_datapoints)
  * [Index_service.update_index](#index_service.update_index)
  * [Index_service.upsert_datapoints](#index_service.upsert_datapoints)
  * [Job_service.cancel_batch_prediction_job](#job_service.cancel_batch_prediction_job)
  * [Job_service.cancel_custom_job](#job_service.cancel_custom_job)
  * [Job_service.cancel_data_labeling_job](#job_service.cancel_data_labeling_job)
  * [Job_service.cancel_hyperparameter_tuning_job](#job_service.cancel_hyperparameter_tuning_job)
  * [Job_service.cancel_nas_job](#job_service.cancel_nas_job)
  * [Job_service.create_batch_prediction_job](#job_service.create_batch_prediction_job)
  * [Job_service.create_custom_job](#job_service.create_custom_job)
  * [Job_service.create_data_labeling_job](#job_service.create_data_labeling_job)
  * [Job_service.create_hyperparameter_tuning_job](#job_service.create_hyperparameter_tuning_job)
  * [Job_service.create_model_deployment_monitoring_job](#job_service.create_model_deployment_monitoring_job)
  * [Job_service.create_nas_job](#job_service.create_nas_job)
  * [Job_service.delete_batch_prediction_job](#job_service.delete_batch_prediction_job)
  * [Job_service.delete_custom_job](#job_service.delete_custom_job)
  * [Job_service.delete_data_labeling_job](#job_service.delete_data_labeling_job)
  * [Job_service.delete_hyperparameter_tuning_job](#job_service.delete_hyperparameter_tuning_job)
  * [Job_service.delete_model_deployment_monitoring_job](#job_service.delete_model_deployment_monitoring_job)
  * [Job_service.delete_nas_job](#job_service.delete_nas_job)
  * [Job_service.get_batch_prediction_job](#job_service.get_batch_prediction_job)
  * [Job_service.get_custom_job](#job_service.get_custom_job)
  * [Job_service.get_data_labeling_job](#job_service.get_data_labeling_job)
  * [Job_service.get_hyperparameter_tuning_job](#job_service.get_hyperparameter_tuning_job)
  * [Job_service.get_model_deployment_monitoring_job](#job_service.get_model_deployment_monitoring_job)
  * [Job_service.get_nas_job](#job_service.get_nas_job)
  * [Job_service.get_nas_trial_detail](#job_service.get_nas_trial_detail)
  * [Job_service.list_batch_prediction_jobs](#job_service.list_batch_prediction_jobs)
  * [Job_service.list_custom_jobs](#job_service.list_custom_jobs)
  * [Job_service.list_data_labeling_jobs](#job_service.list_data_labeling_jobs)
  * [Job_service.list_hyperparameter_tuning_jobs](#job_service.list_hyperparameter_tuning_jobs)
  * [Job_service.list_model_deployment_monitoring_jobs](#job_service.list_model_deployment_monitoring_jobs)
  * [Job_service.list_nas_jobs](#job_service.list_nas_jobs)
  * [Job_service.list_nas_trial_details](#job_service.list_nas_trial_details)
  * [Job_service.pause_model_deployment_monitoring_job](#job_service.pause_model_deployment_monitoring_job)
  * [Job_service.resume_model_deployment_monitoring_job](#job_service.resume_model_deployment_monitoring_job)
  * [Job_service.search_model_deployment_monitoring_stats_anomalies](#job_service.search_model_deployment_monitoring_stats_anomalies)
  * [Job_service.update_model_deployment_monitoring_job](#job_service.update_model_deployment_monitoring_job)
  * [Llm_utility_service.compute_tokens](#llm_utility_service.compute_tokens)
  * [Llm_utility_service.count_tokens](#llm_utility_service.count_tokens)
  * [Match_service.find_neighbors](#match_service.find_neighbors)
  * [Match_service.read_index_datapoints](#match_service.read_index_datapoints)
  * [Metadata_service.add_context_artifacts_and_executions](#metadata_service.add_context_artifacts_and_executions)
  * [Metadata_service.add_context_children](#metadata_service.add_context_children)
  * [Metadata_service.add_execution_events](#metadata_service.add_execution_events)
  * [Metadata_service.create_artifact](#metadata_service.create_artifact)
  * [Metadata_service.create_context](#metadata_service.create_context)
  * [Metadata_service.create_execution](#metadata_service.create_execution)
  * [Metadata_service.create_metadata_schema](#metadata_service.create_metadata_schema)
  * [Metadata_service.create_metadata_store](#metadata_service.create_metadata_store)
  * [Metadata_service.delete_artifact](#metadata_service.delete_artifact)
  * [Metadata_service.delete_context](#metadata_service.delete_context)
  * [Metadata_service.delete_execution](#metadata_service.delete_execution)
  * [Metadata_service.delete_metadata_store](#metadata_service.delete_metadata_store)
  * [Metadata_service.get_artifact](#metadata_service.get_artifact)
  * [Metadata_service.get_context](#metadata_service.get_context)
  * [Metadata_service.get_execution](#metadata_service.get_execution)
  * [Metadata_service.get_metadata_schema](#metadata_service.get_metadata_schema)
  * [Metadata_service.get_metadata_store](#metadata_service.get_metadata_store)
  * [Metadata_service.list_artifacts](#metadata_service.list_artifacts)
  * [Metadata_service.list_contexts](#metadata_service.list_contexts)
  * [Metadata_service.list_executions](#metadata_service.list_executions)
  * [Metadata_service.list_metadata_schemas](#metadata_service.list_metadata_schemas)
  * [Metadata_service.list_metadata_stores](#metadata_service.list_metadata_stores)
  * [Metadata_service.purge_artifacts](#metadata_service.purge_artifacts)
  * [Metadata_service.purge_contexts](#metadata_service.purge_contexts)
  * [Metadata_service.purge_executions](#metadata_service.purge_executions)
  * [Metadata_service.query_artifact_lineage_subgraph](#metadata_service.query_artifact_lineage_subgraph)
  * [Metadata_service.query_context_lineage_subgraph](#metadata_service.query_context_lineage_subgraph)
  * [Metadata_service.query_execution_inputs_and_outputs](#metadata_service.query_execution_inputs_and_outputs)
  * [Metadata_service.remove_context_children](#metadata_service.remove_context_children)
  * [Metadata_service.update_artifact](#metadata_service.update_artifact)
  * [Metadata_service.update_context](#metadata_service.update_context)
  * [Metadata_service.update_execution](#metadata_service.update_execution)
  * [Migration_service.batch_migrate_resources](#migration_service.batch_migrate_resources)
  * [Migration_service.search_migratable_resources](#migration_service.search_migratable_resources)
  * [Model_garden_service.get_publisher_model](#model_garden_service.get_publisher_model)
  * [Model_service.batch_import_evaluated_annotations](#model_service.batch_import_evaluated_annotations)
  * [Model_service.batch_import_model_evaluation_slices](#model_service.batch_import_model_evaluation_slices)
  * [Model_service.copy_model](#model_service.copy_model)
  * [Model_service.delete_model](#model_service.delete_model)
  * [Model_service.delete_model_version](#model_service.delete_model_version)
  * [Model_service.export_model](#model_service.export_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.get_model_evaluation](#model_service.get_model_evaluation)
  * [Model_service.get_model_evaluation_slice](#model_service.get_model_evaluation_slice)
  * [Model_service.import_model_evaluation](#model_service.import_model_evaluation)
  * [Model_service.list_model_evaluation_slices](#model_service.list_model_evaluation_slices)
  * [Model_service.list_model_evaluations](#model_service.list_model_evaluations)
  * [Model_service.list_model_version_checkpoints](#model_service.list_model_version_checkpoints)
  * [Model_service.list_model_versions](#model_service.list_model_versions)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.merge_version_aliases](#model_service.merge_version_aliases)
  * [Model_service.update_explanation_dataset](#model_service.update_explanation_dataset)
  * [Model_service.update_model](#model_service.update_model)
  * [Model_service.upload_model](#model_service.upload_model)
  * [Notebook_service.assign_notebook_runtime](#notebook_service.assign_notebook_runtime)
  * [Notebook_service.create_notebook_execution_job](#notebook_service.create_notebook_execution_job)
  * [Notebook_service.create_notebook_runtime_template](#notebook_service.create_notebook_runtime_template)
  * [Notebook_service.delete_notebook_execution_job](#notebook_service.delete_notebook_execution_job)
  * [Notebook_service.delete_notebook_runtime](#notebook_service.delete_notebook_runtime)
  * [Notebook_service.delete_notebook_runtime_template](#notebook_service.delete_notebook_runtime_template)
  * [Notebook_service.get_notebook_execution_job](#notebook_service.get_notebook_execution_job)
  * [Notebook_service.get_notebook_runtime](#notebook_service.get_notebook_runtime)
  * [Notebook_service.get_notebook_runtime_template](#notebook_service.get_notebook_runtime_template)
  * [Notebook_service.list_notebook_execution_jobs](#notebook_service.list_notebook_execution_jobs)
  * [Notebook_service.list_notebook_runtime_templates](#notebook_service.list_notebook_runtime_templates)
  * [Notebook_service.list_notebook_runtimes](#notebook_service.list_notebook_runtimes)
  * [Notebook_service.start_notebook_runtime](#notebook_service.start_notebook_runtime)
  * [Notebook_service.stop_notebook_runtime](#notebook_service.stop_notebook_runtime)
  * [Notebook_service.update_notebook_runtime_template](#notebook_service.update_notebook_runtime_template)
  * [Notebook_service.upgrade_notebook_runtime](#notebook_service.upgrade_notebook_runtime)
  * [Persistent_resource_service.create_persistent_resource](#persistent_resource_service.create_persistent_resource)
  * [Persistent_resource_service.delete_persistent_resource](#persistent_resource_service.delete_persistent_resource)
  * [Persistent_resource_service.get_persistent_resource](#persistent_resource_service.get_persistent_resource)
  * [Persistent_resource_service.list_persistent_resources](#persistent_resource_service.list_persistent_resources)
  * [Persistent_resource_service.reboot_persistent_resource](#persistent_resource_service.reboot_persistent_resource)
  * [Persistent_resource_service.update_persistent_resource](#persistent_resource_service.update_persistent_resource)
  * [Pipeline_service.batch_cancel_pipeline_jobs](#pipeline_service.batch_cancel_pipeline_jobs)
  * [Pipeline_service.batch_delete_pipeline_jobs](#pipeline_service.batch_delete_pipeline_jobs)
  * [Pipeline_service.cancel_pipeline_job](#pipeline_service.cancel_pipeline_job)
  * [Pipeline_service.cancel_training_pipeline](#pipeline_service.cancel_training_pipeline)
  * [Pipeline_service.create_pipeline_job](#pipeline_service.create_pipeline_job)
  * [Pipeline_service.create_training_pipeline](#pipeline_service.create_training_pipeline)
  * [Pipeline_service.delete_pipeline_job](#pipeline_service.delete_pipeline_job)
  * [Pipeline_service.delete_training_pipeline](#pipeline_service.delete_training_pipeline)
  * [Pipeline_service.get_pipeline_job](#pipeline_service.get_pipeline_job)
  * [Pipeline_service.get_training_pipeline](#pipeline_service.get_training_pipeline)
  * [Pipeline_service.list_pipeline_jobs](#pipeline_service.list_pipeline_jobs)
  * [Pipeline_service.list_training_pipelines](#pipeline_service.list_training_pipelines)
  * [Prediction_service.direct_predict](#prediction_service.direct_predict)
  * [Prediction_service.direct_raw_predict](#prediction_service.direct_raw_predict)
  * [Prediction_service.explain](#prediction_service.explain)
  * [Prediction_service.generate_content](#prediction_service.generate_content)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Prediction_service.raw_predict](#prediction_service.raw_predict)
  * [Prediction_service.server_streaming_predict](#prediction_service.server_streaming_predict)
  * [Prediction_service.stream_direct_predict](#prediction_service.stream_direct_predict)
  * [Prediction_service.stream_direct_raw_predict](#prediction_service.stream_direct_raw_predict)
  * [Prediction_service.stream_generate_content](#prediction_service.stream_generate_content)
  * [Prediction_service.stream_raw_predict](#prediction_service.stream_raw_predict)
  * [Prediction_service.streaming_predict](#prediction_service.streaming_predict)
  * [Prediction_service.streaming_raw_predict](#prediction_service.streaming_raw_predict)
  * [Reasoning_engine_execution_service.query_reasoning_engine](#reasoning_engine_execution_service.query_reasoning_engine)
  * [Reasoning_engine_execution_service.stream_query_reasoning_engine](#reasoning_engine_execution_service.stream_query_reasoning_engine)
  * [Reasoning_engine_service.create_reasoning_engine](#reasoning_engine_service.create_reasoning_engine)
  * [Reasoning_engine_service.delete_reasoning_engine](#reasoning_engine_service.delete_reasoning_engine)
  * [Reasoning_engine_service.get_reasoning_engine](#reasoning_engine_service.get_reasoning_engine)
  * [Reasoning_engine_service.list_reasoning_engines](#reasoning_engine_service.list_reasoning_engines)
  * [Reasoning_engine_service.update_reasoning_engine](#reasoning_engine_service.update_reasoning_engine)
  * [Schedule_service.create_schedule](#schedule_service.create_schedule)
  * [Schedule_service.delete_schedule](#schedule_service.delete_schedule)
  * [Schedule_service.get_schedule](#schedule_service.get_schedule)
  * [Schedule_service.list_schedules](#schedule_service.list_schedules)
  * [Schedule_service.pause_schedule](#schedule_service.pause_schedule)
  * [Schedule_service.resume_schedule](#schedule_service.resume_schedule)
  * [Schedule_service.update_schedule](#schedule_service.update_schedule)
  * [Specialist_pool_service.create_specialist_pool](#specialist_pool_service.create_specialist_pool)
  * [Specialist_pool_service.delete_specialist_pool](#specialist_pool_service.delete_specialist_pool)
  * [Specialist_pool_service.get_specialist_pool](#specialist_pool_service.get_specialist_pool)
  * [Specialist_pool_service.list_specialist_pools](#specialist_pool_service.list_specialist_pools)
  * [Specialist_pool_service.update_specialist_pool](#specialist_pool_service.update_specialist_pool)
  * [Tensorboard_service.batch_create_tensorboard_runs](#tensorboard_service.batch_create_tensorboard_runs)
  * [Tensorboard_service.batch_create_tensorboard_time_series](#tensorboard_service.batch_create_tensorboard_time_series)
  * [Tensorboard_service.batch_read_tensorboard_time_series_data](#tensorboard_service.batch_read_tensorboard_time_series_data)
  * [Tensorboard_service.create_tensorboard](#tensorboard_service.create_tensorboard)
  * [Tensorboard_service.create_tensorboard_experiment](#tensorboard_service.create_tensorboard_experiment)
  * [Tensorboard_service.create_tensorboard_run](#tensorboard_service.create_tensorboard_run)
  * [Tensorboard_service.create_tensorboard_time_series](#tensorboard_service.create_tensorboard_time_series)
  * [Tensorboard_service.delete_tensorboard](#tensorboard_service.delete_tensorboard)
  * [Tensorboard_service.delete_tensorboard_experiment](#tensorboard_service.delete_tensorboard_experiment)
  * [Tensorboard_service.delete_tensorboard_run](#tensorboard_service.delete_tensorboard_run)
  * [Tensorboard_service.delete_tensorboard_time_series](#tensorboard_service.delete_tensorboard_time_series)
  * [Tensorboard_service.export_tensorboard_time_series_data](#tensorboard_service.export_tensorboard_time_series_data)
  * [Tensorboard_service.get_tensorboard](#tensorboard_service.get_tensorboard)
  * [Tensorboard_service.get_tensorboard_experiment](#tensorboard_service.get_tensorboard_experiment)
  * [Tensorboard_service.get_tensorboard_run](#tensorboard_service.get_tensorboard_run)
  * [Tensorboard_service.get_tensorboard_time_series](#tensorboard_service.get_tensorboard_time_series)
  * [Tensorboard_service.list_tensorboard_experiments](#tensorboard_service.list_tensorboard_experiments)
  * [Tensorboard_service.list_tensorboard_runs](#tensorboard_service.list_tensorboard_runs)
  * [Tensorboard_service.list_tensorboard_time_series](#tensorboard_service.list_tensorboard_time_series)
  * [Tensorboard_service.list_tensorboards](#tensorboard_service.list_tensorboards)
  * [Tensorboard_service.read_tensorboard_blob_data](#tensorboard_service.read_tensorboard_blob_data)
  * [Tensorboard_service.read_tensorboard_size](#tensorboard_service.read_tensorboard_size)
  * [Tensorboard_service.read_tensorboard_time_series_data](#tensorboard_service.read_tensorboard_time_series_data)
  * [Tensorboard_service.read_tensorboard_usage](#tensorboard_service.read_tensorboard_usage)
  * [Tensorboard_service.update_tensorboard](#tensorboard_service.update_tensorboard)
  * [Tensorboard_service.update_tensorboard_experiment](#tensorboard_service.update_tensorboard_experiment)
  * [Tensorboard_service.update_tensorboard_run](#tensorboard_service.update_tensorboard_run)
  * [Tensorboard_service.update_tensorboard_time_series](#tensorboard_service.update_tensorboard_time_series)
  * [Tensorboard_service.write_tensorboard_experiment_data](#tensorboard_service.write_tensorboard_experiment_data)
  * [Tensorboard_service.write_tensorboard_run_data](#tensorboard_service.write_tensorboard_run_data)
  * [Vertex_rag_data_service.create_rag_corpus](#vertex_rag_data_service.create_rag_corpus)
  * [Vertex_rag_data_service.delete_rag_corpus](#vertex_rag_data_service.delete_rag_corpus)
  * [Vertex_rag_data_service.delete_rag_file](#vertex_rag_data_service.delete_rag_file)
  * [Vertex_rag_data_service.get_rag_corpus](#vertex_rag_data_service.get_rag_corpus)
  * [Vertex_rag_data_service.get_rag_file](#vertex_rag_data_service.get_rag_file)
  * [Vertex_rag_data_service.import_rag_files](#vertex_rag_data_service.import_rag_files)
  * [Vertex_rag_data_service.list_rag_corpora](#vertex_rag_data_service.list_rag_corpora)
  * [Vertex_rag_data_service.list_rag_files](#vertex_rag_data_service.list_rag_files)
  * [Vertex_rag_data_service.update_rag_corpus](#vertex_rag_data_service.update_rag_corpus)
  * [Vertex_rag_data_service.upload_rag_file](#vertex_rag_data_service.upload_rag_file)
  * [Vertex_rag_service.augment_prompt](#vertex_rag_service.augment_prompt)
  * [Vertex_rag_service.corroborate_content](#vertex_rag_service.corroborate_content)
  * [Vertex_rag_service.retrieve_contexts](#vertex_rag_service.retrieve_contexts)
  * [Vizier_service.add_trial_measurement](#vizier_service.add_trial_measurement)
  * [Vizier_service.check_trial_early_stopping_state](#vizier_service.check_trial_early_stopping_state)
  * [Vizier_service.complete_trial](#vizier_service.complete_trial)
  * [Vizier_service.create_study](#vizier_service.create_study)
  * [Vizier_service.create_trial](#vizier_service.create_trial)
  * [Vizier_service.delete_study](#vizier_service.delete_study)
  * [Vizier_service.delete_trial](#vizier_service.delete_trial)
  * [Vizier_service.get_study](#vizier_service.get_study)
  * [Vizier_service.get_trial](#vizier_service.get_trial)
  * [Vizier_service.list_optimal_trials](#vizier_service.list_optimal_trials)
  * [Vizier_service.list_studies](#vizier_service.list_studies)
  * [Vizier_service.list_trials](#vizier_service.list_trials)
  * [Vizier_service.lookup_study](#vizier_service.lookup_study)
  * [Vizier_service.stop_trial](#vizier_service.stop_trial)
  * [Vizier_service.suggest_trials](#vizier_service.suggest_trials)
  * [Dataset_service.assemble_data](#dataset_service.assemble_data)
  * [Dataset_service.assess_data](#dataset_service.assess_data)
  * [Dataset_service.create_dataset](#dataset_service.create_dataset)
  * [Dataset_service.create_dataset_version](#dataset_service.create_dataset_version)
  * [Dataset_service.delete_dataset](#dataset_service.delete_dataset)
  * [Dataset_service.delete_dataset_version](#dataset_service.delete_dataset_version)
  * [Dataset_service.delete_saved_query](#dataset_service.delete_saved_query)
  * [Dataset_service.export_data](#dataset_service.export_data)
  * [Dataset_service.get_annotation_spec](#dataset_service.get_annotation_spec)
  * [Dataset_service.get_dataset](#dataset_service.get_dataset)
  * [Dataset_service.get_dataset_version](#dataset_service.get_dataset_version)
  * [Dataset_service.import_data](#dataset_service.import_data)
  * [Dataset_service.list_annotations](#dataset_service.list_annotations)
  * [Dataset_service.list_data_items](#dataset_service.list_data_items)
  * [Dataset_service.list_dataset_versions](#dataset_service.list_dataset_versions)
  * [Dataset_service.list_datasets](#dataset_service.list_datasets)
  * [Dataset_service.list_saved_queries](#dataset_service.list_saved_queries)
  * [Dataset_service.restore_dataset_version](#dataset_service.restore_dataset_version)
  * [Dataset_service.search_data_items](#dataset_service.search_data_items)
  * [Dataset_service.update_dataset](#dataset_service.update_dataset)
  * [Dataset_service.update_dataset_version](#dataset_service.update_dataset_version)
  * [Deployment_resource_pool_service.create_deployment_resource_pool](#deployment_resource_pool_service.create_deployment_resource_pool)
  * [Deployment_resource_pool_service.delete_deployment_resource_pool](#deployment_resource_pool_service.delete_deployment_resource_pool)
  * [Deployment_resource_pool_service.get_deployment_resource_pool](#deployment_resource_pool_service.get_deployment_resource_pool)
  * [Deployment_resource_pool_service.list_deployment_resource_pools](#deployment_resource_pool_service.list_deployment_resource_pools)
  * [Deployment_resource_pool_service.query_deployed_models](#deployment_resource_pool_service.query_deployed_models)
  * [Deployment_resource_pool_service.update_deployment_resource_pool](#deployment_resource_pool_service.update_deployment_resource_pool)
  * [Endpoint_service.create_endpoint](#endpoint_service.create_endpoint)
  * [Endpoint_service.delete_endpoint](#endpoint_service.delete_endpoint)
  * [Endpoint_service.deploy_model](#endpoint_service.deploy_model)
  * [Endpoint_service.fetch_publisher_model_config](#endpoint_service.fetch_publisher_model_config)
  * [Endpoint_service.get_endpoint](#endpoint_service.get_endpoint)
  * [Endpoint_service.list_endpoints](#endpoint_service.list_endpoints)
  * [Endpoint_service.mutate_deployed_model](#endpoint_service.mutate_deployed_model)
  * [Endpoint_service.set_publisher_model_config](#endpoint_service.set_publisher_model_config)
  * [Endpoint_service.undeploy_model](#endpoint_service.undeploy_model)
  * [Endpoint_service.update_endpoint](#endpoint_service.update_endpoint)
  * [Endpoint_service.update_endpoint_long_running](#endpoint_service.update_endpoint_long_running)
  * [Evaluation_service.evaluate_dataset](#evaluation_service.evaluate_dataset)
  * [Evaluation_service.evaluate_instances](#evaluation_service.evaluate_instances)
  * [Example_store_service.create_example_store](#example_store_service.create_example_store)
  * [Example_store_service.delete_example_store](#example_store_service.delete_example_store)
  * [Example_store_service.fetch_examples](#example_store_service.fetch_examples)
  * [Example_store_service.get_example_store](#example_store_service.get_example_store)
  * [Example_store_service.list_example_stores](#example_store_service.list_example_stores)
  * [Example_store_service.remove_examples](#example_store_service.remove_examples)
  * [Example_store_service.search_examples](#example_store_service.search_examples)
  * [Example_store_service.update_example_store](#example_store_service.update_example_store)
  * [Example_store_service.upsert_examples](#example_store_service.upsert_examples)
  * [Extension_execution_service.execute_extension](#extension_execution_service.execute_extension)
  * [Extension_execution_service.query_extension](#extension_execution_service.query_extension)
  * [Extension_registry_service.delete_extension](#extension_registry_service.delete_extension)
  * [Extension_registry_service.get_extension](#extension_registry_service.get_extension)
  * [Extension_registry_service.import_extension](#extension_registry_service.import_extension)
  * [Extension_registry_service.list_extensions](#extension_registry_service.list_extensions)
  * [Extension_registry_service.update_extension](#extension_registry_service.update_extension)
  * [Feature_online_store_admin_service.create_feature_online_store](#feature_online_store_admin_service.create_feature_online_store)
  * [Feature_online_store_admin_service.create_feature_view](#feature_online_store_admin_service.create_feature_view)
  * [Feature_online_store_admin_service.delete_feature_online_store](#feature_online_store_admin_service.delete_feature_online_store)
  * [Feature_online_store_admin_service.delete_feature_view](#feature_online_store_admin_service.delete_feature_view)
  * [Feature_online_store_admin_service.get_feature_online_store](#feature_online_store_admin_service.get_feature_online_store)
  * [Feature_online_store_admin_service.get_feature_view](#feature_online_store_admin_service.get_feature_view)
  * [Feature_online_store_admin_service.get_feature_view_sync](#feature_online_store_admin_service.get_feature_view_sync)
  * [Feature_online_store_admin_service.list_feature_online_stores](#feature_online_store_admin_service.list_feature_online_stores)
  * [Feature_online_store_admin_service.list_feature_view_syncs](#feature_online_store_admin_service.list_feature_view_syncs)
  * [Feature_online_store_admin_service.list_feature_views](#feature_online_store_admin_service.list_feature_views)
  * [Feature_online_store_admin_service.sync_feature_view](#feature_online_store_admin_service.sync_feature_view)
  * [Feature_online_store_admin_service.update_feature_online_store](#feature_online_store_admin_service.update_feature_online_store)
  * [Feature_online_store_admin_service.update_feature_view](#feature_online_store_admin_service.update_feature_view)
  * [Feature_online_store_service.feature_view_direct_write](#feature_online_store_service.feature_view_direct_write)
  * [Feature_online_store_service.fetch_feature_values](#feature_online_store_service.fetch_feature_values)
  * [Feature_online_store_service.search_nearest_entities](#feature_online_store_service.search_nearest_entities)
  * [Feature_online_store_service.streaming_fetch_feature_values](#feature_online_store_service.streaming_fetch_feature_values)
  * [Feature_registry_service.batch_create_features](#feature_registry_service.batch_create_features)
  * [Feature_registry_service.create_feature](#feature_registry_service.create_feature)
  * [Feature_registry_service.create_feature_group](#feature_registry_service.create_feature_group)
  * [Feature_registry_service.create_feature_monitor](#feature_registry_service.create_feature_monitor)
  * [Feature_registry_service.create_feature_monitor_job](#feature_registry_service.create_feature_monitor_job)
  * [Feature_registry_service.delete_feature](#feature_registry_service.delete_feature)
  * [Feature_registry_service.delete_feature_group](#feature_registry_service.delete_feature_group)
  * [Feature_registry_service.delete_feature_monitor](#feature_registry_service.delete_feature_monitor)
  * [Feature_registry_service.get_feature](#feature_registry_service.get_feature)
  * [Feature_registry_service.get_feature_group](#feature_registry_service.get_feature_group)
  * [Feature_registry_service.get_feature_monitor](#feature_registry_service.get_feature_monitor)
  * [Feature_registry_service.get_feature_monitor_job](#feature_registry_service.get_feature_monitor_job)
  * [Feature_registry_service.list_feature_groups](#feature_registry_service.list_feature_groups)
  * [Feature_registry_service.list_feature_monitor_jobs](#feature_registry_service.list_feature_monitor_jobs)
  * [Feature_registry_service.list_feature_monitors](#feature_registry_service.list_feature_monitors)
  * [Feature_registry_service.list_features](#feature_registry_service.list_features)
  * [Feature_registry_service.update_feature](#feature_registry_service.update_feature)
  * [Feature_registry_service.update_feature_group](#feature_registry_service.update_feature_group)
  * [Feature_registry_service.update_feature_monitor](#feature_registry_service.update_feature_monitor)
  * [Featurestore_online_serving_service.read_feature_values](#featurestore_online_serving_service.read_feature_values)
  * [Featurestore_online_serving_service.streaming_read_feature_values](#featurestore_online_serving_service.streaming_read_feature_values)
  * [Featurestore_online_serving_service.write_feature_values](#featurestore_online_serving_service.write_feature_values)
  * [Featurestore_service.batch_create_features](#featurestore_service.batch_create_features)
  * [Featurestore_service.batch_read_feature_values](#featurestore_service.batch_read_feature_values)
  * [Featurestore_service.create_entity_type](#featurestore_service.create_entity_type)
  * [Featurestore_service.create_feature](#featurestore_service.create_feature)
  * [Featurestore_service.create_featurestore](#featurestore_service.create_featurestore)
  * [Featurestore_service.delete_entity_type](#featurestore_service.delete_entity_type)
  * [Featurestore_service.delete_feature](#featurestore_service.delete_feature)
  * [Featurestore_service.delete_feature_values](#featurestore_service.delete_feature_values)
  * [Featurestore_service.delete_featurestore](#featurestore_service.delete_featurestore)
  * [Featurestore_service.export_feature_values](#featurestore_service.export_feature_values)
  * [Featurestore_service.get_entity_type](#featurestore_service.get_entity_type)
  * [Featurestore_service.get_feature](#featurestore_service.get_feature)
  * [Featurestore_service.get_featurestore](#featurestore_service.get_featurestore)
  * [Featurestore_service.import_feature_values](#featurestore_service.import_feature_values)
  * [Featurestore_service.list_entity_types](#featurestore_service.list_entity_types)
  * [Featurestore_service.list_features](#featurestore_service.list_features)
  * [Featurestore_service.list_featurestores](#featurestore_service.list_featurestores)
  * [Featurestore_service.search_features](#featurestore_service.search_features)
  * [Featurestore_service.update_entity_type](#featurestore_service.update_entity_type)
  * [Featurestore_service.update_feature](#featurestore_service.update_feature)
  * [Featurestore_service.update_featurestore](#featurestore_service.update_featurestore)
  * [Gen_ai_cache_service.create_cached_content](#gen_ai_cache_service.create_cached_content)
  * [Gen_ai_cache_service.delete_cached_content](#gen_ai_cache_service.delete_cached_content)
  * [Gen_ai_cache_service.get_cached_content](#gen_ai_cache_service.get_cached_content)
  * [Gen_ai_cache_service.list_cached_contents](#gen_ai_cache_service.list_cached_contents)
  * [Gen_ai_cache_service.update_cached_content](#gen_ai_cache_service.update_cached_content)
  * [Gen_ai_tuning_service.cancel_tuning_job](#gen_ai_tuning_service.cancel_tuning_job)
  * [Gen_ai_tuning_service.create_tuning_job](#gen_ai_tuning_service.create_tuning_job)
  * [Gen_ai_tuning_service.get_tuning_job](#gen_ai_tuning_service.get_tuning_job)
  * [Gen_ai_tuning_service.list_tuning_jobs](#gen_ai_tuning_service.list_tuning_jobs)
  * [Gen_ai_tuning_service.rebase_tuned_model](#gen_ai_tuning_service.rebase_tuned_model)
  * [Index_endpoint_service.create_index_endpoint](#index_endpoint_service.create_index_endpoint)
  * [Index_endpoint_service.delete_index_endpoint](#index_endpoint_service.delete_index_endpoint)
  * [Index_endpoint_service.deploy_index](#index_endpoint_service.deploy_index)
  * [Index_endpoint_service.get_index_endpoint](#index_endpoint_service.get_index_endpoint)
  * [Index_endpoint_service.list_index_endpoints](#index_endpoint_service.list_index_endpoints)
  * [Index_endpoint_service.mutate_deployed_index](#index_endpoint_service.mutate_deployed_index)
  * [Index_endpoint_service.undeploy_index](#index_endpoint_service.undeploy_index)
  * [Index_endpoint_service.update_index_endpoint](#index_endpoint_service.update_index_endpoint)
  * [Index_service.create_index](#index_service.create_index)
  * [Index_service.delete_index](#index_service.delete_index)
  * [Index_service.get_index](#index_service.get_index)
  * [Index_service.import_index](#index_service.import_index)
  * [Index_service.list_indexes](#index_service.list_indexes)
  * [Index_service.remove_datapoints](#index_service.remove_datapoints)
  * [Index_service.update_index](#index_service.update_index)
  * [Index_service.upsert_datapoints](#index_service.upsert_datapoints)
  * [Job_service.cancel_batch_prediction_job](#job_service.cancel_batch_prediction_job)
  * [Job_service.cancel_custom_job](#job_service.cancel_custom_job)
  * [Job_service.cancel_data_labeling_job](#job_service.cancel_data_labeling_job)
  * [Job_service.cancel_hyperparameter_tuning_job](#job_service.cancel_hyperparameter_tuning_job)
  * [Job_service.cancel_nas_job](#job_service.cancel_nas_job)
  * [Job_service.create_batch_prediction_job](#job_service.create_batch_prediction_job)
  * [Job_service.create_custom_job](#job_service.create_custom_job)
  * [Job_service.create_data_labeling_job](#job_service.create_data_labeling_job)
  * [Job_service.create_hyperparameter_tuning_job](#job_service.create_hyperparameter_tuning_job)
  * [Job_service.create_model_deployment_monitoring_job](#job_service.create_model_deployment_monitoring_job)
  * [Job_service.create_nas_job](#job_service.create_nas_job)
  * [Job_service.delete_batch_prediction_job](#job_service.delete_batch_prediction_job)
  * [Job_service.delete_custom_job](#job_service.delete_custom_job)
  * [Job_service.delete_data_labeling_job](#job_service.delete_data_labeling_job)
  * [Job_service.delete_hyperparameter_tuning_job](#job_service.delete_hyperparameter_tuning_job)
  * [Job_service.delete_model_deployment_monitoring_job](#job_service.delete_model_deployment_monitoring_job)
  * [Job_service.delete_nas_job](#job_service.delete_nas_job)
  * [Job_service.get_batch_prediction_job](#job_service.get_batch_prediction_job)
  * [Job_service.get_custom_job](#job_service.get_custom_job)
  * [Job_service.get_data_labeling_job](#job_service.get_data_labeling_job)
  * [Job_service.get_hyperparameter_tuning_job](#job_service.get_hyperparameter_tuning_job)
  * [Job_service.get_model_deployment_monitoring_job](#job_service.get_model_deployment_monitoring_job)
  * [Job_service.get_nas_job](#job_service.get_nas_job)
  * [Job_service.get_nas_trial_detail](#job_service.get_nas_trial_detail)
  * [Job_service.list_batch_prediction_jobs](#job_service.list_batch_prediction_jobs)
  * [Job_service.list_custom_jobs](#job_service.list_custom_jobs)
  * [Job_service.list_data_labeling_jobs](#job_service.list_data_labeling_jobs)
  * [Job_service.list_hyperparameter_tuning_jobs](#job_service.list_hyperparameter_tuning_jobs)
  * [Job_service.list_model_deployment_monitoring_jobs](#job_service.list_model_deployment_monitoring_jobs)
  * [Job_service.list_nas_jobs](#job_service.list_nas_jobs)
  * [Job_service.list_nas_trial_details](#job_service.list_nas_trial_details)
  * [Job_service.pause_model_deployment_monitoring_job](#job_service.pause_model_deployment_monitoring_job)
  * [Job_service.resume_model_deployment_monitoring_job](#job_service.resume_model_deployment_monitoring_job)
  * [Job_service.search_model_deployment_monitoring_stats_anomalies](#job_service.search_model_deployment_monitoring_stats_anomalies)
  * [Job_service.update_model_deployment_monitoring_job](#job_service.update_model_deployment_monitoring_job)
  * [Llm_utility_service.compute_tokens](#llm_utility_service.compute_tokens)
  * [Llm_utility_service.count_tokens](#llm_utility_service.count_tokens)
  * [Match_service.find_neighbors](#match_service.find_neighbors)
  * [Match_service.read_index_datapoints](#match_service.read_index_datapoints)
  * [Metadata_service.add_context_artifacts_and_executions](#metadata_service.add_context_artifacts_and_executions)
  * [Metadata_service.add_context_children](#metadata_service.add_context_children)
  * [Metadata_service.add_execution_events](#metadata_service.add_execution_events)
  * [Metadata_service.create_artifact](#metadata_service.create_artifact)
  * [Metadata_service.create_context](#metadata_service.create_context)
  * [Metadata_service.create_execution](#metadata_service.create_execution)
  * [Metadata_service.create_metadata_schema](#metadata_service.create_metadata_schema)
  * [Metadata_service.create_metadata_store](#metadata_service.create_metadata_store)
  * [Metadata_service.delete_artifact](#metadata_service.delete_artifact)
  * [Metadata_service.delete_context](#metadata_service.delete_context)
  * [Metadata_service.delete_execution](#metadata_service.delete_execution)
  * [Metadata_service.delete_metadata_store](#metadata_service.delete_metadata_store)
  * [Metadata_service.get_artifact](#metadata_service.get_artifact)
  * [Metadata_service.get_context](#metadata_service.get_context)
  * [Metadata_service.get_execution](#metadata_service.get_execution)
  * [Metadata_service.get_metadata_schema](#metadata_service.get_metadata_schema)
  * [Metadata_service.get_metadata_store](#metadata_service.get_metadata_store)
  * [Metadata_service.list_artifacts](#metadata_service.list_artifacts)
  * [Metadata_service.list_contexts](#metadata_service.list_contexts)
  * [Metadata_service.list_executions](#metadata_service.list_executions)
  * [Metadata_service.list_metadata_schemas](#metadata_service.list_metadata_schemas)
  * [Metadata_service.list_metadata_stores](#metadata_service.list_metadata_stores)
  * [Metadata_service.purge_artifacts](#metadata_service.purge_artifacts)
  * [Metadata_service.purge_contexts](#metadata_service.purge_contexts)
  * [Metadata_service.purge_executions](#metadata_service.purge_executions)
  * [Metadata_service.query_artifact_lineage_subgraph](#metadata_service.query_artifact_lineage_subgraph)
  * [Metadata_service.query_context_lineage_subgraph](#metadata_service.query_context_lineage_subgraph)
  * [Metadata_service.query_execution_inputs_and_outputs](#metadata_service.query_execution_inputs_and_outputs)
  * [Metadata_service.remove_context_children](#metadata_service.remove_context_children)
  * [Metadata_service.update_artifact](#metadata_service.update_artifact)
  * [Metadata_service.update_context](#metadata_service.update_context)
  * [Metadata_service.update_execution](#metadata_service.update_execution)
  * [Migration_service.batch_migrate_resources](#migration_service.batch_migrate_resources)
  * [Migration_service.search_migratable_resources](#migration_service.search_migratable_resources)
  * [Model_garden_service.accept_publisher_model_eula](#model_garden_service.accept_publisher_model_eula)
  * [Model_garden_service.check_publisher_model_eula_acceptance](#model_garden_service.check_publisher_model_eula_acceptance)
  * [Model_garden_service.deploy](#model_garden_service.deploy)
  * [Model_garden_service.deploy_publisher_model](#model_garden_service.deploy_publisher_model)
  * [Model_garden_service.export_publisher_model](#model_garden_service.export_publisher_model)
  * [Model_garden_service.get_publisher_model](#model_garden_service.get_publisher_model)
  * [Model_garden_service.list_publisher_models](#model_garden_service.list_publisher_models)
  * [Model_monitoring_service.create_model_monitor](#model_monitoring_service.create_model_monitor)
  * [Model_monitoring_service.create_model_monitoring_job](#model_monitoring_service.create_model_monitoring_job)
  * [Model_monitoring_service.delete_model_monitor](#model_monitoring_service.delete_model_monitor)
  * [Model_monitoring_service.delete_model_monitoring_job](#model_monitoring_service.delete_model_monitoring_job)
  * [Model_monitoring_service.get_model_monitor](#model_monitoring_service.get_model_monitor)
  * [Model_monitoring_service.get_model_monitoring_job](#model_monitoring_service.get_model_monitoring_job)
  * [Model_monitoring_service.list_model_monitoring_jobs](#model_monitoring_service.list_model_monitoring_jobs)
  * [Model_monitoring_service.list_model_monitors](#model_monitoring_service.list_model_monitors)
  * [Model_monitoring_service.search_model_monitoring_alerts](#model_monitoring_service.search_model_monitoring_alerts)
  * [Model_monitoring_service.search_model_monitoring_stats](#model_monitoring_service.search_model_monitoring_stats)
  * [Model_monitoring_service.update_model_monitor](#model_monitoring_service.update_model_monitor)
  * [Model_service.batch_import_evaluated_annotations](#model_service.batch_import_evaluated_annotations)
  * [Model_service.batch_import_model_evaluation_slices](#model_service.batch_import_model_evaluation_slices)
  * [Model_service.copy_model](#model_service.copy_model)
  * [Model_service.delete_model](#model_service.delete_model)
  * [Model_service.delete_model_version](#model_service.delete_model_version)
  * [Model_service.export_model](#model_service.export_model)
  * [Model_service.get_model](#model_service.get_model)
  * [Model_service.get_model_evaluation](#model_service.get_model_evaluation)
  * [Model_service.get_model_evaluation_slice](#model_service.get_model_evaluation_slice)
  * [Model_service.import_model_evaluation](#model_service.import_model_evaluation)
  * [Model_service.list_model_evaluation_slices](#model_service.list_model_evaluation_slices)
  * [Model_service.list_model_evaluations](#model_service.list_model_evaluations)
  * [Model_service.list_model_version_checkpoints](#model_service.list_model_version_checkpoints)
  * [Model_service.list_model_versions](#model_service.list_model_versions)
  * [Model_service.list_models](#model_service.list_models)
  * [Model_service.merge_version_aliases](#model_service.merge_version_aliases)
  * [Model_service.update_explanation_dataset](#model_service.update_explanation_dataset)
  * [Model_service.update_model](#model_service.update_model)
  * [Model_service.upload_model](#model_service.upload_model)
  * [Notebook_service.assign_notebook_runtime](#notebook_service.assign_notebook_runtime)
  * [Notebook_service.create_notebook_execution_job](#notebook_service.create_notebook_execution_job)
  * [Notebook_service.create_notebook_runtime_template](#notebook_service.create_notebook_runtime_template)
  * [Notebook_service.delete_notebook_execution_job](#notebook_service.delete_notebook_execution_job)
  * [Notebook_service.delete_notebook_runtime](#notebook_service.delete_notebook_runtime)
  * [Notebook_service.delete_notebook_runtime_template](#notebook_service.delete_notebook_runtime_template)
  * [Notebook_service.get_notebook_execution_job](#notebook_service.get_notebook_execution_job)
  * [Notebook_service.get_notebook_runtime](#notebook_service.get_notebook_runtime)
  * [Notebook_service.get_notebook_runtime_template](#notebook_service.get_notebook_runtime_template)
  * [Notebook_service.list_notebook_execution_jobs](#notebook_service.list_notebook_execution_jobs)
  * [Notebook_service.list_notebook_runtime_templates](#notebook_service.list_notebook_runtime_templates)
  * [Notebook_service.list_notebook_runtimes](#notebook_service.list_notebook_runtimes)
  * [Notebook_service.start_notebook_runtime](#notebook_service.start_notebook_runtime)
  * [Notebook_service.stop_notebook_runtime](#notebook_service.stop_notebook_runtime)
  * [Notebook_service.update_notebook_runtime_template](#notebook_service.update_notebook_runtime_template)
  * [Notebook_service.upgrade_notebook_runtime](#notebook_service.upgrade_notebook_runtime)
  * [Persistent_resource_service.create_persistent_resource](#persistent_resource_service.create_persistent_resource)
  * [Persistent_resource_service.delete_persistent_resource](#persistent_resource_service.delete_persistent_resource)
  * [Persistent_resource_service.get_persistent_resource](#persistent_resource_service.get_persistent_resource)
  * [Persistent_resource_service.list_persistent_resources](#persistent_resource_service.list_persistent_resources)
  * [Persistent_resource_service.reboot_persistent_resource](#persistent_resource_service.reboot_persistent_resource)
  * [Persistent_resource_service.update_persistent_resource](#persistent_resource_service.update_persistent_resource)
  * [Pipeline_service.batch_cancel_pipeline_jobs](#pipeline_service.batch_cancel_pipeline_jobs)
  * [Pipeline_service.batch_delete_pipeline_jobs](#pipeline_service.batch_delete_pipeline_jobs)
  * [Pipeline_service.cancel_pipeline_job](#pipeline_service.cancel_pipeline_job)
  * [Pipeline_service.cancel_training_pipeline](#pipeline_service.cancel_training_pipeline)
  * [Pipeline_service.create_pipeline_job](#pipeline_service.create_pipeline_job)
  * [Pipeline_service.create_training_pipeline](#pipeline_service.create_training_pipeline)
  * [Pipeline_service.delete_pipeline_job](#pipeline_service.delete_pipeline_job)
  * [Pipeline_service.delete_training_pipeline](#pipeline_service.delete_training_pipeline)
  * [Pipeline_service.get_pipeline_job](#pipeline_service.get_pipeline_job)
  * [Pipeline_service.get_training_pipeline](#pipeline_service.get_training_pipeline)
  * [Pipeline_service.list_pipeline_jobs](#pipeline_service.list_pipeline_jobs)
  * [Pipeline_service.list_training_pipelines](#pipeline_service.list_training_pipelines)
  * [Prediction_service.chat_completions](#prediction_service.chat_completions)
  * [Prediction_service.count_tokens](#prediction_service.count_tokens)
  * [Prediction_service.direct_predict](#prediction_service.direct_predict)
  * [Prediction_service.direct_raw_predict](#prediction_service.direct_raw_predict)
  * [Prediction_service.explain](#prediction_service.explain)
  * [Prediction_service.generate_content](#prediction_service.generate_content)
  * [Prediction_service.predict](#prediction_service.predict)
  * [Prediction_service.raw_predict](#prediction_service.raw_predict)
  * [Prediction_service.server_streaming_predict](#prediction_service.server_streaming_predict)
  * [Prediction_service.stream_direct_predict](#prediction_service.stream_direct_predict)
  * [Prediction_service.stream_direct_raw_predict](#prediction_service.stream_direct_raw_predict)
  * [Prediction_service.stream_generate_content](#prediction_service.stream_generate_content)
  * [Prediction_service.stream_raw_predict](#prediction_service.stream_raw_predict)
  * [Prediction_service.streaming_predict](#prediction_service.streaming_predict)
  * [Prediction_service.streaming_raw_predict](#prediction_service.streaming_raw_predict)
  * [Reasoning_engine_execution_service.query_reasoning_engine](#reasoning_engine_execution_service.query_reasoning_engine)
  * [Reasoning_engine_execution_service.stream_query_reasoning_engine](#reasoning_engine_execution_service.stream_query_reasoning_engine)
  * [Reasoning_engine_service.create_reasoning_engine](#reasoning_engine_service.create_reasoning_engine)
  * [Reasoning_engine_service.delete_reasoning_engine](#reasoning_engine_service.delete_reasoning_engine)
  * [Reasoning_engine_service.get_reasoning_engine](#reasoning_engine_service.get_reasoning_engine)
  * [Reasoning_engine_service.list_reasoning_engines](#reasoning_engine_service.list_reasoning_engines)
  * [Reasoning_engine_service.update_reasoning_engine](#reasoning_engine_service.update_reasoning_engine)
  * [Schedule_service.create_schedule](#schedule_service.create_schedule)
  * [Schedule_service.delete_schedule](#schedule_service.delete_schedule)
  * [Schedule_service.get_schedule](#schedule_service.get_schedule)
  * [Schedule_service.list_schedules](#schedule_service.list_schedules)
  * [Schedule_service.pause_schedule](#schedule_service.pause_schedule)
  * [Schedule_service.resume_schedule](#schedule_service.resume_schedule)
  * [Schedule_service.update_schedule](#schedule_service.update_schedule)
  * [Session_service.append_event](#session_service.append_event)
  * [Session_service.create_session](#session_service.create_session)
  * [Session_service.delete_session](#session_service.delete_session)
  * [Session_service.get_session](#session_service.get_session)
  * [Session_service.list_events](#session_service.list_events)
  * [Session_service.list_sessions](#session_service.list_sessions)
  * [Session_service.update_session](#session_service.update_session)
  * [Specialist_pool_service.create_specialist_pool](#specialist_pool_service.create_specialist_pool)
  * [Specialist_pool_service.delete_specialist_pool](#specialist_pool_service.delete_specialist_pool)
  * [Specialist_pool_service.get_specialist_pool](#specialist_pool_service.get_specialist_pool)
  * [Specialist_pool_service.list_specialist_pools](#specialist_pool_service.list_specialist_pools)
  * [Specialist_pool_service.update_specialist_pool](#specialist_pool_service.update_specialist_pool)
  * [Tensorboard_service.batch_create_tensorboard_runs](#tensorboard_service.batch_create_tensorboard_runs)
  * [Tensorboard_service.batch_create_tensorboard_time_series](#tensorboard_service.batch_create_tensorboard_time_series)
  * [Tensorboard_service.batch_read_tensorboard_time_series_data](#tensorboard_service.batch_read_tensorboard_time_series_data)
  * [Tensorboard_service.create_tensorboard](#tensorboard_service.create_tensorboard)
  * [Tensorboard_service.create_tensorboard_experiment](#tensorboard_service.create_tensorboard_experiment)
  * [Tensorboard_service.create_tensorboard_run](#tensorboard_service.create_tensorboard_run)
  * [Tensorboard_service.create_tensorboard_time_series](#tensorboard_service.create_tensorboard_time_series)
  * [Tensorboard_service.delete_tensorboard](#tensorboard_service.delete_tensorboard)
  * [Tensorboard_service.delete_tensorboard_experiment](#tensorboard_service.delete_tensorboard_experiment)
  * [Tensorboard_service.delete_tensorboard_run](#tensorboard_service.delete_tensorboard_run)
  * [Tensorboard_service.delete_tensorboard_time_series](#tensorboard_service.delete_tensorboard_time_series)
  * [Tensorboard_service.export_tensorboard_time_series_data](#tensorboard_service.export_tensorboard_time_series_data)
  * [Tensorboard_service.get_tensorboard](#tensorboard_service.get_tensorboard)
  * [Tensorboard_service.get_tensorboard_experiment](#tensorboard_service.get_tensorboard_experiment)
  * [Tensorboard_service.get_tensorboard_run](#tensorboard_service.get_tensorboard_run)
  * [Tensorboard_service.get_tensorboard_time_series](#tensorboard_service.get_tensorboard_time_series)
  * [Tensorboard_service.list_tensorboard_experiments](#tensorboard_service.list_tensorboard_experiments)
  * [Tensorboard_service.list_tensorboard_runs](#tensorboard_service.list_tensorboard_runs)
  * [Tensorboard_service.list_tensorboard_time_series](#tensorboard_service.list_tensorboard_time_series)
  * [Tensorboard_service.list_tensorboards](#tensorboard_service.list_tensorboards)
  * [Tensorboard_service.read_tensorboard_blob_data](#tensorboard_service.read_tensorboard_blob_data)
  * [Tensorboard_service.read_tensorboard_size](#tensorboard_service.read_tensorboard_size)
  * [Tensorboard_service.read_tensorboard_time_series_data](#tensorboard_service.read_tensorboard_time_series_data)
  * [Tensorboard_service.read_tensorboard_usage](#tensorboard_service.read_tensorboard_usage)
  * [Tensorboard_service.update_tensorboard](#tensorboard_service.update_tensorboard)
  * [Tensorboard_service.update_tensorboard_experiment](#tensorboard_service.update_tensorboard_experiment)
  * [Tensorboard_service.update_tensorboard_run](#tensorboard_service.update_tensorboard_run)
  * [Tensorboard_service.update_tensorboard_time_series](#tensorboard_service.update_tensorboard_time_series)
  * [Tensorboard_service.write_tensorboard_experiment_data](#tensorboard_service.write_tensorboard_experiment_data)
  * [Tensorboard_service.write_tensorboard_run_data](#tensorboard_service.write_tensorboard_run_data)
  * [Vertex_rag_data_service.create_rag_corpus](#vertex_rag_data_service.create_rag_corpus)
  * [Vertex_rag_data_service.delete_rag_corpus](#vertex_rag_data_service.delete_rag_corpus)
  * [Vertex_rag_data_service.delete_rag_file](#vertex_rag_data_service.delete_rag_file)
  * [Vertex_rag_data_service.get_rag_corpus](#vertex_rag_data_service.get_rag_corpus)
  * [Vertex_rag_data_service.get_rag_engine_config](#vertex_rag_data_service.get_rag_engine_config)
  * [Vertex_rag_data_service.get_rag_file](#vertex_rag_data_service.get_rag_file)
  * [Vertex_rag_data_service.import_rag_files](#vertex_rag_data_service.import_rag_files)
  * [Vertex_rag_data_service.list_rag_corpora](#vertex_rag_data_service.list_rag_corpora)
  * [Vertex_rag_data_service.list_rag_files](#vertex_rag_data_service.list_rag_files)
  * [Vertex_rag_data_service.update_rag_corpus](#vertex_rag_data_service.update_rag_corpus)
  * [Vertex_rag_data_service.update_rag_engine_config](#vertex_rag_data_service.update_rag_engine_config)
  * [Vertex_rag_data_service.upload_rag_file](#vertex_rag_data_service.upload_rag_file)
  * [Vertex_rag_service.augment_prompt](#vertex_rag_service.augment_prompt)
  * [Vertex_rag_service.corroborate_content](#vertex_rag_service.corroborate_content)
  * [Vertex_rag_service.retrieve_contexts](#vertex_rag_service.retrieve_contexts)
  * [Vizier_service.add_trial_measurement](#vizier_service.add_trial_measurement)
  * [Vizier_service.check_trial_early_stopping_state](#vizier_service.check_trial_early_stopping_state)
  * [Vizier_service.complete_trial](#vizier_service.complete_trial)
  * [Vizier_service.create_study](#vizier_service.create_study)
  * [Vizier_service.create_trial](#vizier_service.create_trial)
  * [Vizier_service.delete_study](#vizier_service.delete_study)
  * [Vizier_service.delete_trial](#vizier_service.delete_trial)
  * [Vizier_service.get_study](#vizier_service.get_study)
  * [Vizier_service.get_trial](#vizier_service.get_trial)
  * [Vizier_service.list_optimal_trials](#vizier_service.list_optimal_trials)
  * [Vizier_service.list_studies](#vizier_service.list_studies)
  * [Vizier_service.list_trials](#vizier_service.list_trials)
  * [Vizier_service.lookup_study](#vizier_service.lookup_study)
  * [Vizier_service.stop_trial](#vizier_service.stop_trial)
  * [Vizier_service.suggest_trials](#vizier_service.suggest_trials)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Dataset_service.create_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset.js`


-----




### Dataset_service.create_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset_version.js`


-----




### Dataset_service.delete_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset.js`


-----




### Dataset_service.delete_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset_version.js`


-----




### Dataset_service.delete_saved_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_saved_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_saved_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_saved_query.js`


-----




### Dataset_service.export_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.export_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.export_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.export_data.js`


-----




### Dataset_service.get_annotation_spec

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_annotation_spec.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_annotation_spec.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_annotation_spec.js`


-----




### Dataset_service.get_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset.js`


-----




### Dataset_service.get_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset_version.js`


-----




### Dataset_service.import_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.import_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.import_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.import_data.js`


-----




### Dataset_service.list_annotations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_annotations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_annotations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_annotations.js`


-----




### Dataset_service.list_data_items

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_data_items.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_data_items.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_data_items.js`


-----




### Dataset_service.list_dataset_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_dataset_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_dataset_versions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_dataset_versions.js`


-----




### Dataset_service.list_datasets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_datasets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_datasets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_datasets.js`


-----




### Dataset_service.list_saved_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_saved_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_saved_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_saved_queries.js`


-----




### Dataset_service.restore_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.restore_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.restore_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.restore_dataset_version.js`


-----




### Dataset_service.search_data_items

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.search_data_items.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.search_data_items.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.search_data_items.js`


-----




### Dataset_service.update_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset.js`


-----




### Dataset_service.update_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset_version.js`


-----




### Deployment_resource_pool_service.create_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.create_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.create_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.create_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.delete_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.delete_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.delete_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.delete_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.get_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.get_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.get_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.get_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.list_deployment_resource_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.list_deployment_resource_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.list_deployment_resource_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.list_deployment_resource_pools.js`


-----




### Deployment_resource_pool_service.query_deployed_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.query_deployed_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.query_deployed_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.query_deployed_models.js`


-----




### Deployment_resource_pool_service.update_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.update_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.update_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.update_deployment_resource_pool.js`


-----




### Endpoint_service.create_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.create_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.create_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.create_endpoint.js`


-----




### Endpoint_service.delete_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.delete_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.delete_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.delete_endpoint.js`


-----




### Endpoint_service.deploy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.deploy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.deploy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.deploy_model.js`


-----




### Endpoint_service.get_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.get_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.get_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.get_endpoint.js`


-----




### Endpoint_service.list_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.list_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.list_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.list_endpoints.js`


-----




### Endpoint_service.mutate_deployed_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.mutate_deployed_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.mutate_deployed_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.mutate_deployed_model.js`


-----




### Endpoint_service.undeploy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.undeploy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.undeploy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.undeploy_model.js`


-----




### Endpoint_service.update_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint.js`


-----




### Endpoint_service.update_endpoint_long_running

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint_long_running.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint_long_running.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint_long_running.js`


-----




### Evaluation_service.evaluate_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/evaluation_service.evaluate_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/evaluation_service.evaluate_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/evaluation_service.evaluate_instances.js`


-----




### Feature_online_store_admin_service.create_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_online_store.js`


-----




### Feature_online_store_admin_service.create_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_view.js`


-----




### Feature_online_store_admin_service.delete_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_online_store.js`


-----




### Feature_online_store_admin_service.delete_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_view.js`


-----




### Feature_online_store_admin_service.get_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_online_store.js`


-----




### Feature_online_store_admin_service.get_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view.js`


-----




### Feature_online_store_admin_service.get_feature_view_sync

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view_sync.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view_sync.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view_sync.js`


-----




### Feature_online_store_admin_service.list_feature_online_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_online_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_online_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_online_stores.js`


-----




### Feature_online_store_admin_service.list_feature_view_syncs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_view_syncs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_view_syncs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_view_syncs.js`


-----




### Feature_online_store_admin_service.list_feature_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_views.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_views.js`


-----




### Feature_online_store_admin_service.sync_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.sync_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.sync_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.sync_feature_view.js`


-----




### Feature_online_store_admin_service.update_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_online_store.js`


-----




### Feature_online_store_admin_service.update_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_view.js`


-----




### Feature_online_store_service.fetch_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.fetch_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.fetch_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.fetch_feature_values.js`


-----




### Feature_online_store_service.search_nearest_entities

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.search_nearest_entities.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.search_nearest_entities.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.search_nearest_entities.js`


-----




### Feature_registry_service.batch_create_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.batch_create_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.batch_create_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.batch_create_features.js`


-----




### Feature_registry_service.create_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature.js`


-----




### Feature_registry_service.create_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature_group.js`


-----




### Feature_registry_service.delete_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature.js`


-----




### Feature_registry_service.delete_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature_group.js`


-----




### Feature_registry_service.get_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature.js`


-----




### Feature_registry_service.get_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature_group.js`


-----




### Feature_registry_service.list_feature_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_feature_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_feature_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_feature_groups.js`


-----




### Feature_registry_service.list_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_features.js`


-----




### Feature_registry_service.update_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature.js`


-----




### Feature_registry_service.update_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature_group.js`


-----




### Featurestore_online_serving_service.read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.read_feature_values.js`


-----




### Featurestore_online_serving_service.streaming_read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.streaming_read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.streaming_read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.streaming_read_feature_values.js`


-----




### Featurestore_online_serving_service.write_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.write_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.write_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.write_feature_values.js`


-----




### Featurestore_service.batch_create_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_create_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_create_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_create_features.js`


-----




### Featurestore_service.batch_read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_read_feature_values.js`


-----




### Featurestore_service.create_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_entity_type.js`


-----




### Featurestore_service.create_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_feature.js`


-----




### Featurestore_service.create_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_featurestore.js`


-----




### Featurestore_service.delete_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_entity_type.js`


-----




### Featurestore_service.delete_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature.js`


-----




### Featurestore_service.delete_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature_values.js`


-----




### Featurestore_service.delete_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_featurestore.js`


-----




### Featurestore_service.export_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.export_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.export_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.export_feature_values.js`


-----




### Featurestore_service.get_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_entity_type.js`


-----




### Featurestore_service.get_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_feature.js`


-----




### Featurestore_service.get_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_featurestore.js`


-----




### Featurestore_service.import_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.import_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.import_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.import_feature_values.js`


-----




### Featurestore_service.list_entity_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_entity_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_entity_types.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_entity_types.js`


-----




### Featurestore_service.list_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_features.js`


-----




### Featurestore_service.list_featurestores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_featurestores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_featurestores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_featurestores.js`


-----




### Featurestore_service.search_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.search_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.search_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.search_features.js`


-----




### Featurestore_service.update_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_entity_type.js`


-----




### Featurestore_service.update_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_feature.js`


-----




### Featurestore_service.update_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_featurestore.js`


-----




### Gen_ai_cache_service.create_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.create_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.create_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.create_cached_content.js`


-----




### Gen_ai_cache_service.delete_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.delete_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.delete_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.delete_cached_content.js`


-----




### Gen_ai_cache_service.get_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.get_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.get_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.get_cached_content.js`


-----




### Gen_ai_cache_service.list_cached_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.list_cached_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.list_cached_contents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.list_cached_contents.js`


-----




### Gen_ai_cache_service.update_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.update_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.update_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.update_cached_content.js`


-----




### Gen_ai_tuning_service.cancel_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.cancel_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.cancel_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.cancel_tuning_job.js`


-----




### Gen_ai_tuning_service.create_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.create_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.create_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.create_tuning_job.js`


-----




### Gen_ai_tuning_service.get_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.get_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.get_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.get_tuning_job.js`


-----




### Gen_ai_tuning_service.list_tuning_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.list_tuning_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.list_tuning_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.list_tuning_jobs.js`


-----




### Gen_ai_tuning_service.rebase_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.rebase_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.rebase_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.rebase_tuned_model.js`


-----




### Index_endpoint_service.create_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.create_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.create_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.create_index_endpoint.js`


-----




### Index_endpoint_service.delete_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.delete_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.delete_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.delete_index_endpoint.js`


-----




### Index_endpoint_service.deploy_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.deploy_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.deploy_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.deploy_index.js`


-----




### Index_endpoint_service.get_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.get_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.get_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.get_index_endpoint.js`


-----




### Index_endpoint_service.list_index_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.list_index_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.list_index_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.list_index_endpoints.js`


-----




### Index_endpoint_service.mutate_deployed_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.mutate_deployed_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.mutate_deployed_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.mutate_deployed_index.js`


-----




### Index_endpoint_service.undeploy_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.undeploy_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.undeploy_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.undeploy_index.js`


-----




### Index_endpoint_service.update_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.update_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.update_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.update_index_endpoint.js`


-----




### Index_service.create_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.create_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.create_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.create_index.js`


-----




### Index_service.delete_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.delete_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.delete_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.delete_index.js`


-----




### Index_service.get_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.get_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.get_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.get_index.js`


-----




### Index_service.list_indexes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.list_indexes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.list_indexes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.list_indexes.js`


-----




### Index_service.remove_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.remove_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.remove_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.remove_datapoints.js`


-----




### Index_service.update_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.update_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.update_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.update_index.js`


-----




### Index_service.upsert_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.upsert_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/index_service.upsert_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/index_service.upsert_datapoints.js`


-----




### Job_service.cancel_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_batch_prediction_job.js`


-----




### Job_service.cancel_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_custom_job.js`


-----




### Job_service.cancel_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_data_labeling_job.js`


-----




### Job_service.cancel_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_hyperparameter_tuning_job.js`


-----




### Job_service.cancel_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_nas_job.js`


-----




### Job_service.create_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_batch_prediction_job.js`


-----




### Job_service.create_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_custom_job.js`


-----




### Job_service.create_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_data_labeling_job.js`


-----




### Job_service.create_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_hyperparameter_tuning_job.js`


-----




### Job_service.create_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_model_deployment_monitoring_job.js`


-----




### Job_service.create_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_nas_job.js`


-----




### Job_service.delete_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_batch_prediction_job.js`


-----




### Job_service.delete_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_custom_job.js`


-----




### Job_service.delete_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_data_labeling_job.js`


-----




### Job_service.delete_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_hyperparameter_tuning_job.js`


-----




### Job_service.delete_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_model_deployment_monitoring_job.js`


-----




### Job_service.delete_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_nas_job.js`


-----




### Job_service.get_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_batch_prediction_job.js`


-----




### Job_service.get_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_custom_job.js`


-----




### Job_service.get_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_data_labeling_job.js`


-----




### Job_service.get_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_hyperparameter_tuning_job.js`


-----




### Job_service.get_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_model_deployment_monitoring_job.js`


-----




### Job_service.get_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_job.js`


-----




### Job_service.get_nas_trial_detail

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_trial_detail.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_trial_detail.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_trial_detail.js`


-----




### Job_service.list_batch_prediction_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_batch_prediction_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_batch_prediction_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_batch_prediction_jobs.js`


-----




### Job_service.list_custom_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_custom_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_custom_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_custom_jobs.js`


-----




### Job_service.list_data_labeling_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_data_labeling_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_data_labeling_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_data_labeling_jobs.js`


-----




### Job_service.list_hyperparameter_tuning_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_hyperparameter_tuning_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_hyperparameter_tuning_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_hyperparameter_tuning_jobs.js`


-----




### Job_service.list_model_deployment_monitoring_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_model_deployment_monitoring_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_model_deployment_monitoring_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_model_deployment_monitoring_jobs.js`


-----




### Job_service.list_nas_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_jobs.js`


-----




### Job_service.list_nas_trial_details

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_trial_details.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_trial_details.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_trial_details.js`


-----




### Job_service.pause_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.pause_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.pause_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.pause_model_deployment_monitoring_job.js`


-----




### Job_service.resume_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.resume_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.resume_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.resume_model_deployment_monitoring_job.js`


-----




### Job_service.search_model_deployment_monitoring_stats_anomalies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.search_model_deployment_monitoring_stats_anomalies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.search_model_deployment_monitoring_stats_anomalies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.search_model_deployment_monitoring_stats_anomalies.js`


-----




### Job_service.update_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.update_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/job_service.update_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/job_service.update_model_deployment_monitoring_job.js`


-----




### Llm_utility_service.compute_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.compute_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.compute_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.compute_tokens.js`


-----




### Llm_utility_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.count_tokens.js`


-----




### Match_service.find_neighbors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/match_service.find_neighbors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/match_service.find_neighbors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/match_service.find_neighbors.js`


-----




### Match_service.read_index_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/match_service.read_index_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/match_service.read_index_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/match_service.read_index_datapoints.js`


-----




### Metadata_service.add_context_artifacts_and_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_artifacts_and_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_artifacts_and_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_artifacts_and_executions.js`


-----




### Metadata_service.add_context_children

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_children.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_children.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_children.js`


-----




### Metadata_service.add_execution_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_execution_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_execution_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_execution_events.js`


-----




### Metadata_service.create_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_artifact.js`


-----




### Metadata_service.create_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_context.js`


-----




### Metadata_service.create_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_execution.js`


-----




### Metadata_service.create_metadata_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_schema.js`


-----




### Metadata_service.create_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_store.js`


-----




### Metadata_service.delete_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_artifact.js`


-----




### Metadata_service.delete_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_context.js`


-----




### Metadata_service.delete_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_execution.js`


-----




### Metadata_service.delete_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_metadata_store.js`


-----




### Metadata_service.get_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_artifact.js`


-----




### Metadata_service.get_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_context.js`


-----




### Metadata_service.get_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_execution.js`


-----




### Metadata_service.get_metadata_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_schema.js`


-----




### Metadata_service.get_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_store.js`


-----




### Metadata_service.list_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_artifacts.js`


-----




### Metadata_service.list_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_contexts.js`


-----




### Metadata_service.list_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_executions.js`


-----




### Metadata_service.list_metadata_schemas

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_schemas.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_schemas.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_schemas.js`


-----




### Metadata_service.list_metadata_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_stores.js`


-----




### Metadata_service.purge_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_artifacts.js`


-----




### Metadata_service.purge_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_contexts.js`


-----




### Metadata_service.purge_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_executions.js`


-----




### Metadata_service.query_artifact_lineage_subgraph

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_artifact_lineage_subgraph.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_artifact_lineage_subgraph.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_artifact_lineage_subgraph.js`


-----




### Metadata_service.query_context_lineage_subgraph

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_context_lineage_subgraph.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_context_lineage_subgraph.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_context_lineage_subgraph.js`


-----




### Metadata_service.query_execution_inputs_and_outputs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_execution_inputs_and_outputs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_execution_inputs_and_outputs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_execution_inputs_and_outputs.js`


-----




### Metadata_service.remove_context_children

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.remove_context_children.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.remove_context_children.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.remove_context_children.js`


-----




### Metadata_service.update_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_artifact.js`


-----




### Metadata_service.update_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_context.js`


-----




### Metadata_service.update_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_execution.js`


-----




### Migration_service.batch_migrate_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/migration_service.batch_migrate_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/migration_service.batch_migrate_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/migration_service.batch_migrate_resources.js`


-----




### Migration_service.search_migratable_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/migration_service.search_migratable_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/migration_service.search_migratable_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/migration_service.search_migratable_resources.js`


-----




### Model_garden_service.get_publisher_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_garden_service.get_publisher_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_garden_service.get_publisher_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_garden_service.get_publisher_model.js`


-----




### Model_service.batch_import_evaluated_annotations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_evaluated_annotations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_evaluated_annotations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_evaluated_annotations.js`


-----




### Model_service.batch_import_model_evaluation_slices

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_model_evaluation_slices.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_model_evaluation_slices.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_model_evaluation_slices.js`


-----




### Model_service.copy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.copy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.copy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.copy_model.js`


-----




### Model_service.delete_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model.js`


-----




### Model_service.delete_model_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model_version.js`


-----




### Model_service.export_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.export_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.export_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.export_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model.js`


-----




### Model_service.get_model_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation.js`


-----




### Model_service.get_model_evaluation_slice

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation_slice.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation_slice.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation_slice.js`


-----




### Model_service.import_model_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.import_model_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.import_model_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.import_model_evaluation.js`


-----




### Model_service.list_model_evaluation_slices

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluation_slices.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluation_slices.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluation_slices.js`


-----




### Model_service.list_model_evaluations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluations.js`


-----




### Model_service.list_model_version_checkpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_version_checkpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_version_checkpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_version_checkpoints.js`


-----




### Model_service.list_model_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_versions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_versions.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_models.js`


-----




### Model_service.merge_version_aliases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.merge_version_aliases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.merge_version_aliases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.merge_version_aliases.js`


-----




### Model_service.update_explanation_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_explanation_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_explanation_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_explanation_dataset.js`


-----




### Model_service.update_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_model.js`


-----




### Model_service.upload_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.upload_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/model_service.upload_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/model_service.upload_model.js`


-----




### Notebook_service.assign_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.assign_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.assign_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.assign_notebook_runtime.js`


-----




### Notebook_service.create_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_execution_job.js`


-----




### Notebook_service.create_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_runtime_template.js`


-----




### Notebook_service.delete_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_execution_job.js`


-----




### Notebook_service.delete_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime.js`


-----




### Notebook_service.delete_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime_template.js`


-----




### Notebook_service.get_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_execution_job.js`


-----




### Notebook_service.get_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime.js`


-----




### Notebook_service.get_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime_template.js`


-----




### Notebook_service.list_notebook_execution_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_execution_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_execution_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_execution_jobs.js`


-----




### Notebook_service.list_notebook_runtime_templates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtime_templates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtime_templates.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtime_templates.js`


-----




### Notebook_service.list_notebook_runtimes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtimes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtimes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtimes.js`


-----




### Notebook_service.start_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.start_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.start_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.start_notebook_runtime.js`


-----




### Notebook_service.stop_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.stop_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.stop_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.stop_notebook_runtime.js`


-----




### Notebook_service.update_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.update_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.update_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.update_notebook_runtime_template.js`


-----




### Notebook_service.upgrade_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.upgrade_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.upgrade_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.upgrade_notebook_runtime.js`


-----




### Persistent_resource_service.create_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.create_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.create_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.create_persistent_resource.js`


-----




### Persistent_resource_service.delete_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.delete_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.delete_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.delete_persistent_resource.js`


-----




### Persistent_resource_service.get_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.get_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.get_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.get_persistent_resource.js`


-----




### Persistent_resource_service.list_persistent_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.list_persistent_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.list_persistent_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.list_persistent_resources.js`


-----




### Persistent_resource_service.reboot_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.reboot_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.reboot_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.reboot_persistent_resource.js`


-----




### Persistent_resource_service.update_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.update_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.update_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.update_persistent_resource.js`


-----




### Pipeline_service.batch_cancel_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_cancel_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_cancel_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_cancel_pipeline_jobs.js`


-----




### Pipeline_service.batch_delete_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_delete_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_delete_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_delete_pipeline_jobs.js`


-----




### Pipeline_service.cancel_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_pipeline_job.js`


-----




### Pipeline_service.cancel_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_training_pipeline.js`


-----




### Pipeline_service.create_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_pipeline_job.js`


-----




### Pipeline_service.create_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_training_pipeline.js`


-----




### Pipeline_service.delete_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_pipeline_job.js`


-----




### Pipeline_service.delete_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_training_pipeline.js`


-----




### Pipeline_service.get_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_pipeline_job.js`


-----




### Pipeline_service.get_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_training_pipeline.js`


-----




### Pipeline_service.list_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_pipeline_jobs.js`


-----




### Pipeline_service.list_training_pipelines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_training_pipelines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_training_pipelines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_training_pipelines.js`


-----




### Prediction_service.direct_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_predict.js`


-----




### Prediction_service.direct_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_raw_predict.js`


-----




### Prediction_service.explain

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.explain.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.explain.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.explain.js`


-----




### Prediction_service.generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.generate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.generate_content.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.predict.js`


-----




### Prediction_service.raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.raw_predict.js`


-----




### Prediction_service.server_streaming_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.server_streaming_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.server_streaming_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.server_streaming_predict.js`


-----




### Prediction_service.stream_direct_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_predict.js`


-----




### Prediction_service.stream_direct_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_raw_predict.js`


-----




### Prediction_service.stream_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_generate_content.js`


-----




### Prediction_service.stream_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_raw_predict.js`


-----




### Prediction_service.streaming_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_predict.js`


-----




### Prediction_service.streaming_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_raw_predict.js`


-----




### Reasoning_engine_execution_service.query_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.query_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.query_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.query_reasoning_engine.js`


-----




### Reasoning_engine_execution_service.stream_query_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.stream_query_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.stream_query_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.stream_query_reasoning_engine.js`


-----




### Reasoning_engine_service.create_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.create_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.create_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.create_reasoning_engine.js`


-----




### Reasoning_engine_service.delete_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.delete_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.delete_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.delete_reasoning_engine.js`


-----




### Reasoning_engine_service.get_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.get_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.get_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.get_reasoning_engine.js`


-----




### Reasoning_engine_service.list_reasoning_engines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.list_reasoning_engines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.list_reasoning_engines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.list_reasoning_engines.js`


-----




### Reasoning_engine_service.update_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.update_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.update_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.update_reasoning_engine.js`


-----




### Schedule_service.create_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.create_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.create_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.create_schedule.js`


-----




### Schedule_service.delete_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.delete_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.delete_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.delete_schedule.js`


-----




### Schedule_service.get_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.get_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.get_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.get_schedule.js`


-----




### Schedule_service.list_schedules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.list_schedules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.list_schedules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.list_schedules.js`


-----




### Schedule_service.pause_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.pause_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.pause_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.pause_schedule.js`


-----




### Schedule_service.resume_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.resume_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.resume_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.resume_schedule.js`


-----




### Schedule_service.update_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.update_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.update_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.update_schedule.js`


-----




### Specialist_pool_service.create_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.create_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.create_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.create_specialist_pool.js`


-----




### Specialist_pool_service.delete_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.delete_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.delete_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.delete_specialist_pool.js`


-----




### Specialist_pool_service.get_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.get_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.get_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.get_specialist_pool.js`


-----




### Specialist_pool_service.list_specialist_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.list_specialist_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.list_specialist_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.list_specialist_pools.js`


-----




### Specialist_pool_service.update_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.update_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.update_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.update_specialist_pool.js`


-----




### Tensorboard_service.batch_create_tensorboard_runs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_runs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_runs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_runs.js`


-----




### Tensorboard_service.batch_create_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_time_series.js`


-----




### Tensorboard_service.batch_read_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_read_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_read_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_read_tensorboard_time_series_data.js`


-----




### Tensorboard_service.create_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard.js`


-----




### Tensorboard_service.create_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_experiment.js`


-----




### Tensorboard_service.create_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_run.js`


-----




### Tensorboard_service.create_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_time_series.js`


-----




### Tensorboard_service.delete_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard.js`


-----




### Tensorboard_service.delete_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_experiment.js`


-----




### Tensorboard_service.delete_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_run.js`


-----




### Tensorboard_service.delete_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_time_series.js`


-----




### Tensorboard_service.export_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.export_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.export_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.export_tensorboard_time_series_data.js`


-----




### Tensorboard_service.get_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard.js`


-----




### Tensorboard_service.get_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_experiment.js`


-----




### Tensorboard_service.get_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_run.js`


-----




### Tensorboard_service.get_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_time_series.js`


-----




### Tensorboard_service.list_tensorboard_experiments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_experiments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_experiments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_experiments.js`


-----




### Tensorboard_service.list_tensorboard_runs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_runs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_runs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_runs.js`


-----




### Tensorboard_service.list_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_time_series.js`


-----




### Tensorboard_service.list_tensorboards

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboards.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboards.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboards.js`


-----




### Tensorboard_service.read_tensorboard_blob_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_blob_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_blob_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_blob_data.js`


-----




### Tensorboard_service.read_tensorboard_size

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_size.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_size.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_size.js`


-----




### Tensorboard_service.read_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_time_series_data.js`


-----




### Tensorboard_service.read_tensorboard_usage

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_usage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_usage.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_usage.js`


-----




### Tensorboard_service.update_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard.js`


-----




### Tensorboard_service.update_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_experiment.js`


-----




### Tensorboard_service.update_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_run.js`


-----




### Tensorboard_service.update_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_time_series.js`


-----




### Tensorboard_service.write_tensorboard_experiment_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_experiment_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_experiment_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_experiment_data.js`


-----




### Tensorboard_service.write_tensorboard_run_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_run_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_run_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_run_data.js`


-----




### Vertex_rag_data_service.create_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.create_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.create_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.create_rag_corpus.js`


-----




### Vertex_rag_data_service.delete_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_corpus.js`


-----




### Vertex_rag_data_service.delete_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_file.js`


-----




### Vertex_rag_data_service.get_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_corpus.js`


-----




### Vertex_rag_data_service.get_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_file.js`


-----




### Vertex_rag_data_service.import_rag_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.import_rag_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.import_rag_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.import_rag_files.js`


-----




### Vertex_rag_data_service.list_rag_corpora

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_corpora.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_corpora.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_corpora.js`


-----




### Vertex_rag_data_service.list_rag_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_files.js`


-----




### Vertex_rag_data_service.update_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.update_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.update_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.update_rag_corpus.js`


-----




### Vertex_rag_data_service.upload_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.upload_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.upload_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.upload_rag_file.js`


-----




### Vertex_rag_service.augment_prompt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.augment_prompt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.augment_prompt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.augment_prompt.js`


-----




### Vertex_rag_service.corroborate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.corroborate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.corroborate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.corroborate_content.js`


-----




### Vertex_rag_service.retrieve_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.retrieve_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.retrieve_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.retrieve_contexts.js`


-----




### Vizier_service.add_trial_measurement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.add_trial_measurement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.add_trial_measurement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.add_trial_measurement.js`


-----




### Vizier_service.check_trial_early_stopping_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.check_trial_early_stopping_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.check_trial_early_stopping_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.check_trial_early_stopping_state.js`


-----




### Vizier_service.complete_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.complete_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.complete_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.complete_trial.js`


-----




### Vizier_service.create_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_study.js`


-----




### Vizier_service.create_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_trial.js`


-----




### Vizier_service.delete_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_study.js`


-----




### Vizier_service.delete_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_trial.js`


-----




### Vizier_service.get_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_study.js`


-----




### Vizier_service.get_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_trial.js`


-----




### Vizier_service.list_optimal_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_optimal_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_optimal_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_optimal_trials.js`


-----




### Vizier_service.list_studies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_studies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_studies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_studies.js`


-----




### Vizier_service.list_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_trials.js`


-----




### Vizier_service.lookup_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.lookup_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.lookup_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.lookup_study.js`


-----




### Vizier_service.stop_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.stop_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.stop_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.stop_trial.js`


-----




### Vizier_service.suggest_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.suggest_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.suggest_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.suggest_trials.js`


-----




### Dataset_service.assemble_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assemble_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assemble_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assemble_data.js`


-----




### Dataset_service.assess_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assess_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assess_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assess_data.js`


-----




### Dataset_service.create_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset.js`


-----




### Dataset_service.create_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset_version.js`


-----




### Dataset_service.delete_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset.js`


-----




### Dataset_service.delete_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset_version.js`


-----




### Dataset_service.delete_saved_query

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_saved_query.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_saved_query.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_saved_query.js`


-----




### Dataset_service.export_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.export_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.export_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.export_data.js`


-----




### Dataset_service.get_annotation_spec

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_annotation_spec.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_annotation_spec.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_annotation_spec.js`


-----




### Dataset_service.get_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset.js`


-----




### Dataset_service.get_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset_version.js`


-----




### Dataset_service.import_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.import_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.import_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.import_data.js`


-----




### Dataset_service.list_annotations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_annotations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_annotations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_annotations.js`


-----




### Dataset_service.list_data_items

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_data_items.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_data_items.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_data_items.js`


-----




### Dataset_service.list_dataset_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_dataset_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_dataset_versions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_dataset_versions.js`


-----




### Dataset_service.list_datasets

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_datasets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_datasets.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_datasets.js`


-----




### Dataset_service.list_saved_queries

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_saved_queries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_saved_queries.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_saved_queries.js`


-----




### Dataset_service.restore_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.restore_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.restore_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.restore_dataset_version.js`


-----




### Dataset_service.search_data_items

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.search_data_items.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.search_data_items.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.search_data_items.js`


-----




### Dataset_service.update_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset.js`


-----




### Dataset_service.update_dataset_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset_version.js`


-----




### Deployment_resource_pool_service.create_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.create_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.create_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.create_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.delete_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.delete_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.delete_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.delete_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.get_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.get_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.get_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.get_deployment_resource_pool.js`


-----




### Deployment_resource_pool_service.list_deployment_resource_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.list_deployment_resource_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.list_deployment_resource_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.list_deployment_resource_pools.js`


-----




### Deployment_resource_pool_service.query_deployed_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.query_deployed_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.query_deployed_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.query_deployed_models.js`


-----




### Deployment_resource_pool_service.update_deployment_resource_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.update_deployment_resource_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.update_deployment_resource_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.update_deployment_resource_pool.js`


-----




### Endpoint_service.create_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.create_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.create_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.create_endpoint.js`


-----




### Endpoint_service.delete_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.delete_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.delete_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.delete_endpoint.js`


-----




### Endpoint_service.deploy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.deploy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.deploy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.deploy_model.js`


-----




### Endpoint_service.fetch_publisher_model_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.fetch_publisher_model_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.fetch_publisher_model_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.fetch_publisher_model_config.js`


-----




### Endpoint_service.get_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.get_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.get_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.get_endpoint.js`


-----




### Endpoint_service.list_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.list_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.list_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.list_endpoints.js`


-----




### Endpoint_service.mutate_deployed_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.mutate_deployed_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.mutate_deployed_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.mutate_deployed_model.js`


-----




### Endpoint_service.set_publisher_model_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.set_publisher_model_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.set_publisher_model_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.set_publisher_model_config.js`


-----




### Endpoint_service.undeploy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.undeploy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.undeploy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.undeploy_model.js`


-----




### Endpoint_service.update_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint.js`


-----




### Endpoint_service.update_endpoint_long_running

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint_long_running.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint_long_running.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint_long_running.js`


-----




### Evaluation_service.evaluate_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_dataset.js`


-----




### Evaluation_service.evaluate_instances

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_instances.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_instances.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_instances.js`


-----




### Example_store_service.create_example_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.create_example_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.create_example_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.create_example_store.js`


-----




### Example_store_service.delete_example_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.delete_example_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.delete_example_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.delete_example_store.js`


-----




### Example_store_service.fetch_examples

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.fetch_examples.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.fetch_examples.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.fetch_examples.js`


-----




### Example_store_service.get_example_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.get_example_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.get_example_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.get_example_store.js`


-----




### Example_store_service.list_example_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.list_example_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.list_example_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.list_example_stores.js`


-----




### Example_store_service.remove_examples

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.remove_examples.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.remove_examples.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.remove_examples.js`


-----




### Example_store_service.search_examples

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.search_examples.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.search_examples.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.search_examples.js`


-----




### Example_store_service.update_example_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.update_example_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.update_example_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.update_example_store.js`


-----




### Example_store_service.upsert_examples

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.upsert_examples.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.upsert_examples.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.upsert_examples.js`


-----




### Extension_execution_service.execute_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.execute_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.execute_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.execute_extension.js`


-----




### Extension_execution_service.query_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.query_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.query_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.query_extension.js`


-----




### Extension_registry_service.delete_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.delete_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.delete_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.delete_extension.js`


-----




### Extension_registry_service.get_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.get_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.get_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.get_extension.js`


-----




### Extension_registry_service.import_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.import_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.import_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.import_extension.js`


-----




### Extension_registry_service.list_extensions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.list_extensions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.list_extensions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.list_extensions.js`


-----




### Extension_registry_service.update_extension

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.update_extension.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.update_extension.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.update_extension.js`


-----




### Feature_online_store_admin_service.create_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_online_store.js`


-----




### Feature_online_store_admin_service.create_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_view.js`


-----




### Feature_online_store_admin_service.delete_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_online_store.js`


-----




### Feature_online_store_admin_service.delete_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_view.js`


-----




### Feature_online_store_admin_service.get_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_online_store.js`


-----




### Feature_online_store_admin_service.get_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view.js`


-----




### Feature_online_store_admin_service.get_feature_view_sync

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view_sync.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view_sync.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view_sync.js`


-----




### Feature_online_store_admin_service.list_feature_online_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_online_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_online_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_online_stores.js`


-----




### Feature_online_store_admin_service.list_feature_view_syncs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_view_syncs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_view_syncs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_view_syncs.js`


-----




### Feature_online_store_admin_service.list_feature_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_views.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_views.js`


-----




### Feature_online_store_admin_service.sync_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.sync_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.sync_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.sync_feature_view.js`


-----




### Feature_online_store_admin_service.update_feature_online_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_online_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_online_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_online_store.js`


-----




### Feature_online_store_admin_service.update_feature_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_view.js`


-----




### Feature_online_store_service.feature_view_direct_write

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.feature_view_direct_write.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.feature_view_direct_write.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.feature_view_direct_write.js`


-----




### Feature_online_store_service.fetch_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.fetch_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.fetch_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.fetch_feature_values.js`


-----




### Feature_online_store_service.search_nearest_entities

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.search_nearest_entities.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.search_nearest_entities.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.search_nearest_entities.js`


-----




### Feature_online_store_service.streaming_fetch_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.streaming_fetch_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.streaming_fetch_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.streaming_fetch_feature_values.js`


-----




### Feature_registry_service.batch_create_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.batch_create_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.batch_create_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.batch_create_features.js`


-----




### Feature_registry_service.create_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature.js`


-----




### Feature_registry_service.create_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_group.js`


-----




### Feature_registry_service.create_feature_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor.js`


-----




### Feature_registry_service.create_feature_monitor_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor_job.js`


-----




### Feature_registry_service.delete_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature.js`


-----




### Feature_registry_service.delete_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_group.js`


-----




### Feature_registry_service.delete_feature_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_monitor.js`


-----




### Feature_registry_service.get_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature.js`


-----




### Feature_registry_service.get_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_group.js`


-----




### Feature_registry_service.get_feature_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor.js`


-----




### Feature_registry_service.get_feature_monitor_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor_job.js`


-----




### Feature_registry_service.list_feature_groups

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_groups.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_groups.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_groups.js`


-----




### Feature_registry_service.list_feature_monitor_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitor_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitor_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitor_jobs.js`


-----




### Feature_registry_service.list_feature_monitors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitors.js`


-----




### Feature_registry_service.list_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_features.js`


-----




### Feature_registry_service.update_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature.js`


-----




### Feature_registry_service.update_feature_group

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_group.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_group.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_group.js`


-----




### Feature_registry_service.update_feature_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_monitor.js`


-----




### Featurestore_online_serving_service.read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.read_feature_values.js`


-----




### Featurestore_online_serving_service.streaming_read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.streaming_read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.streaming_read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.streaming_read_feature_values.js`


-----




### Featurestore_online_serving_service.write_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.write_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.write_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.write_feature_values.js`


-----




### Featurestore_service.batch_create_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_create_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_create_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_create_features.js`


-----




### Featurestore_service.batch_read_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_read_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_read_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_read_feature_values.js`


-----




### Featurestore_service.create_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_entity_type.js`


-----




### Featurestore_service.create_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_feature.js`


-----




### Featurestore_service.create_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_featurestore.js`


-----




### Featurestore_service.delete_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_entity_type.js`


-----




### Featurestore_service.delete_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature.js`


-----




### Featurestore_service.delete_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature_values.js`


-----




### Featurestore_service.delete_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_featurestore.js`


-----




### Featurestore_service.export_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.export_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.export_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.export_feature_values.js`


-----




### Featurestore_service.get_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_entity_type.js`


-----




### Featurestore_service.get_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_feature.js`


-----




### Featurestore_service.get_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_featurestore.js`


-----




### Featurestore_service.import_feature_values

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.import_feature_values.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.import_feature_values.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.import_feature_values.js`


-----




### Featurestore_service.list_entity_types

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_entity_types.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_entity_types.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_entity_types.js`


-----




### Featurestore_service.list_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_features.js`


-----




### Featurestore_service.list_featurestores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_featurestores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_featurestores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_featurestores.js`


-----




### Featurestore_service.search_features

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.search_features.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.search_features.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.search_features.js`


-----




### Featurestore_service.update_entity_type

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_entity_type.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_entity_type.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_entity_type.js`


-----




### Featurestore_service.update_feature

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_feature.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_feature.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_feature.js`


-----




### Featurestore_service.update_featurestore

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_featurestore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_featurestore.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_featurestore.js`


-----




### Gen_ai_cache_service.create_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.create_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.create_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.create_cached_content.js`


-----




### Gen_ai_cache_service.delete_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.delete_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.delete_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.delete_cached_content.js`


-----




### Gen_ai_cache_service.get_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.get_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.get_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.get_cached_content.js`


-----




### Gen_ai_cache_service.list_cached_contents

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.list_cached_contents.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.list_cached_contents.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.list_cached_contents.js`


-----




### Gen_ai_cache_service.update_cached_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.update_cached_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.update_cached_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.update_cached_content.js`


-----




### Gen_ai_tuning_service.cancel_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.cancel_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.cancel_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.cancel_tuning_job.js`


-----




### Gen_ai_tuning_service.create_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.create_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.create_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.create_tuning_job.js`


-----




### Gen_ai_tuning_service.get_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.get_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.get_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.get_tuning_job.js`


-----




### Gen_ai_tuning_service.list_tuning_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.list_tuning_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.list_tuning_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.list_tuning_jobs.js`


-----




### Gen_ai_tuning_service.rebase_tuned_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.rebase_tuned_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.rebase_tuned_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.rebase_tuned_model.js`


-----




### Index_endpoint_service.create_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.create_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.create_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.create_index_endpoint.js`


-----




### Index_endpoint_service.delete_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.delete_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.delete_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.delete_index_endpoint.js`


-----




### Index_endpoint_service.deploy_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.deploy_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.deploy_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.deploy_index.js`


-----




### Index_endpoint_service.get_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.get_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.get_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.get_index_endpoint.js`


-----




### Index_endpoint_service.list_index_endpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.list_index_endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.list_index_endpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.list_index_endpoints.js`


-----




### Index_endpoint_service.mutate_deployed_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.mutate_deployed_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.mutate_deployed_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.mutate_deployed_index.js`


-----




### Index_endpoint_service.undeploy_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.undeploy_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.undeploy_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.undeploy_index.js`


-----




### Index_endpoint_service.update_index_endpoint

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.update_index_endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.update_index_endpoint.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.update_index_endpoint.js`


-----




### Index_service.create_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.create_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.create_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.create_index.js`


-----




### Index_service.delete_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.delete_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.delete_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.delete_index.js`


-----




### Index_service.get_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.get_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.get_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.get_index.js`


-----




### Index_service.import_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.import_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.import_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.import_index.js`


-----




### Index_service.list_indexes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.list_indexes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.list_indexes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.list_indexes.js`


-----




### Index_service.remove_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.remove_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.remove_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.remove_datapoints.js`


-----




### Index_service.update_index

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.update_index.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.update_index.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.update_index.js`


-----




### Index_service.upsert_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.upsert_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.upsert_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.upsert_datapoints.js`


-----




### Job_service.cancel_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_batch_prediction_job.js`


-----




### Job_service.cancel_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_custom_job.js`


-----




### Job_service.cancel_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_data_labeling_job.js`


-----




### Job_service.cancel_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_hyperparameter_tuning_job.js`


-----




### Job_service.cancel_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_nas_job.js`


-----




### Job_service.create_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_batch_prediction_job.js`


-----




### Job_service.create_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_custom_job.js`


-----




### Job_service.create_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_data_labeling_job.js`


-----




### Job_service.create_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_hyperparameter_tuning_job.js`


-----




### Job_service.create_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_model_deployment_monitoring_job.js`


-----




### Job_service.create_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_nas_job.js`


-----




### Job_service.delete_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_batch_prediction_job.js`


-----




### Job_service.delete_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_custom_job.js`


-----




### Job_service.delete_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_data_labeling_job.js`


-----




### Job_service.delete_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_hyperparameter_tuning_job.js`


-----




### Job_service.delete_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_model_deployment_monitoring_job.js`


-----




### Job_service.delete_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_nas_job.js`


-----




### Job_service.get_batch_prediction_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_batch_prediction_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_batch_prediction_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_batch_prediction_job.js`


-----




### Job_service.get_custom_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_custom_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_custom_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_custom_job.js`


-----




### Job_service.get_data_labeling_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_data_labeling_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_data_labeling_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_data_labeling_job.js`


-----




### Job_service.get_hyperparameter_tuning_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_hyperparameter_tuning_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_hyperparameter_tuning_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_hyperparameter_tuning_job.js`


-----




### Job_service.get_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_model_deployment_monitoring_job.js`


-----




### Job_service.get_nas_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_job.js`


-----




### Job_service.get_nas_trial_detail

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_trial_detail.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_trial_detail.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_trial_detail.js`


-----




### Job_service.list_batch_prediction_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_batch_prediction_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_batch_prediction_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_batch_prediction_jobs.js`


-----




### Job_service.list_custom_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_custom_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_custom_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_custom_jobs.js`


-----




### Job_service.list_data_labeling_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_data_labeling_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_data_labeling_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_data_labeling_jobs.js`


-----




### Job_service.list_hyperparameter_tuning_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_hyperparameter_tuning_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_hyperparameter_tuning_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_hyperparameter_tuning_jobs.js`


-----




### Job_service.list_model_deployment_monitoring_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_model_deployment_monitoring_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_model_deployment_monitoring_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_model_deployment_monitoring_jobs.js`


-----




### Job_service.list_nas_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_jobs.js`


-----




### Job_service.list_nas_trial_details

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_trial_details.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_trial_details.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_trial_details.js`


-----




### Job_service.pause_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.pause_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.pause_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.pause_model_deployment_monitoring_job.js`


-----




### Job_service.resume_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.resume_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.resume_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.resume_model_deployment_monitoring_job.js`


-----




### Job_service.search_model_deployment_monitoring_stats_anomalies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.search_model_deployment_monitoring_stats_anomalies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.search_model_deployment_monitoring_stats_anomalies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.search_model_deployment_monitoring_stats_anomalies.js`


-----




### Job_service.update_model_deployment_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.update_model_deployment_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.update_model_deployment_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.update_model_deployment_monitoring_job.js`


-----




### Llm_utility_service.compute_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.compute_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.compute_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.compute_tokens.js`


-----




### Llm_utility_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.count_tokens.js`


-----




### Match_service.find_neighbors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.find_neighbors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.find_neighbors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.find_neighbors.js`


-----




### Match_service.read_index_datapoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.read_index_datapoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.read_index_datapoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.read_index_datapoints.js`


-----




### Metadata_service.add_context_artifacts_and_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_artifacts_and_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_artifacts_and_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_artifacts_and_executions.js`


-----




### Metadata_service.add_context_children

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_children.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_children.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_children.js`


-----




### Metadata_service.add_execution_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_execution_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_execution_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_execution_events.js`


-----




### Metadata_service.create_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_artifact.js`


-----




### Metadata_service.create_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_context.js`


-----




### Metadata_service.create_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_execution.js`


-----




### Metadata_service.create_metadata_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_schema.js`


-----




### Metadata_service.create_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_store.js`


-----




### Metadata_service.delete_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_artifact.js`


-----




### Metadata_service.delete_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_context.js`


-----




### Metadata_service.delete_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_execution.js`


-----




### Metadata_service.delete_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_metadata_store.js`


-----




### Metadata_service.get_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_artifact.js`


-----




### Metadata_service.get_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_context.js`


-----




### Metadata_service.get_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_execution.js`


-----




### Metadata_service.get_metadata_schema

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_schema.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_schema.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_schema.js`


-----




### Metadata_service.get_metadata_store

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_store.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_store.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_store.js`


-----




### Metadata_service.list_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_artifacts.js`


-----




### Metadata_service.list_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_contexts.js`


-----




### Metadata_service.list_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_executions.js`


-----




### Metadata_service.list_metadata_schemas

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_schemas.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_schemas.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_schemas.js`


-----




### Metadata_service.list_metadata_stores

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_stores.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_stores.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_stores.js`


-----




### Metadata_service.purge_artifacts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_artifacts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_artifacts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_artifacts.js`


-----




### Metadata_service.purge_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_contexts.js`


-----




### Metadata_service.purge_executions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_executions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_executions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_executions.js`


-----




### Metadata_service.query_artifact_lineage_subgraph

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_artifact_lineage_subgraph.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_artifact_lineage_subgraph.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_artifact_lineage_subgraph.js`


-----




### Metadata_service.query_context_lineage_subgraph

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_context_lineage_subgraph.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_context_lineage_subgraph.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_context_lineage_subgraph.js`


-----




### Metadata_service.query_execution_inputs_and_outputs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_execution_inputs_and_outputs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_execution_inputs_and_outputs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_execution_inputs_and_outputs.js`


-----




### Metadata_service.remove_context_children

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.remove_context_children.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.remove_context_children.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.remove_context_children.js`


-----




### Metadata_service.update_artifact

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_artifact.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_artifact.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_artifact.js`


-----




### Metadata_service.update_context

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_context.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_context.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_context.js`


-----




### Metadata_service.update_execution

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_execution.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_execution.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_execution.js`


-----




### Migration_service.batch_migrate_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.batch_migrate_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.batch_migrate_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.batch_migrate_resources.js`


-----




### Migration_service.search_migratable_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.search_migratable_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.search_migratable_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.search_migratable_resources.js`


-----




### Model_garden_service.accept_publisher_model_eula

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.accept_publisher_model_eula.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.accept_publisher_model_eula.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.accept_publisher_model_eula.js`


-----




### Model_garden_service.check_publisher_model_eula_acceptance

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.check_publisher_model_eula_acceptance.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.check_publisher_model_eula_acceptance.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.check_publisher_model_eula_acceptance.js`


-----




### Model_garden_service.deploy

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy.js`


-----




### Model_garden_service.deploy_publisher_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy_publisher_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy_publisher_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy_publisher_model.js`


-----




### Model_garden_service.export_publisher_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.export_publisher_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.export_publisher_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.export_publisher_model.js`


-----




### Model_garden_service.get_publisher_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.get_publisher_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.get_publisher_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.get_publisher_model.js`


-----




### Model_garden_service.list_publisher_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.list_publisher_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.list_publisher_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.list_publisher_models.js`


-----




### Model_monitoring_service.create_model_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitor.js`


-----




### Model_monitoring_service.create_model_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitoring_job.js`


-----




### Model_monitoring_service.delete_model_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitor.js`


-----




### Model_monitoring_service.delete_model_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitoring_job.js`


-----




### Model_monitoring_service.get_model_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitor.js`


-----




### Model_monitoring_service.get_model_monitoring_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitoring_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitoring_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitoring_job.js`


-----




### Model_monitoring_service.list_model_monitoring_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitoring_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitoring_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitoring_jobs.js`


-----




### Model_monitoring_service.list_model_monitors

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitors.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitors.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitors.js`


-----




### Model_monitoring_service.search_model_monitoring_alerts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_alerts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_alerts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_alerts.js`


-----




### Model_monitoring_service.search_model_monitoring_stats

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_stats.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_stats.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_stats.js`


-----




### Model_monitoring_service.update_model_monitor

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.update_model_monitor.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.update_model_monitor.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.update_model_monitor.js`


-----




### Model_service.batch_import_evaluated_annotations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_evaluated_annotations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_evaluated_annotations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_evaluated_annotations.js`


-----




### Model_service.batch_import_model_evaluation_slices

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_model_evaluation_slices.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_model_evaluation_slices.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_model_evaluation_slices.js`


-----




### Model_service.copy_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.copy_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.copy_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.copy_model.js`


-----




### Model_service.delete_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model.js`


-----




### Model_service.delete_model_version

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model_version.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model_version.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model_version.js`


-----




### Model_service.export_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.export_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.export_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.export_model.js`


-----




### Model_service.get_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model.js`


-----




### Model_service.get_model_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation.js`


-----




### Model_service.get_model_evaluation_slice

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation_slice.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation_slice.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation_slice.js`


-----




### Model_service.import_model_evaluation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.import_model_evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.import_model_evaluation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.import_model_evaluation.js`


-----




### Model_service.list_model_evaluation_slices

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluation_slices.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluation_slices.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluation_slices.js`


-----




### Model_service.list_model_evaluations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluations.js`


-----




### Model_service.list_model_version_checkpoints

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_version_checkpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_version_checkpoints.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_version_checkpoints.js`


-----




### Model_service.list_model_versions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_versions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_versions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_versions.js`


-----




### Model_service.list_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_models.js`


-----




### Model_service.merge_version_aliases

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.merge_version_aliases.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.merge_version_aliases.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.merge_version_aliases.js`


-----




### Model_service.update_explanation_dataset

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_explanation_dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_explanation_dataset.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_explanation_dataset.js`


-----




### Model_service.update_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_model.js`


-----




### Model_service.upload_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.upload_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.upload_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.upload_model.js`


-----




### Notebook_service.assign_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.assign_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.assign_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.assign_notebook_runtime.js`


-----




### Notebook_service.create_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_execution_job.js`


-----




### Notebook_service.create_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_runtime_template.js`


-----




### Notebook_service.delete_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_execution_job.js`


-----




### Notebook_service.delete_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime.js`


-----




### Notebook_service.delete_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime_template.js`


-----




### Notebook_service.get_notebook_execution_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_execution_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_execution_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_execution_job.js`


-----




### Notebook_service.get_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime.js`


-----




### Notebook_service.get_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime_template.js`


-----




### Notebook_service.list_notebook_execution_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_execution_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_execution_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_execution_jobs.js`


-----




### Notebook_service.list_notebook_runtime_templates

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtime_templates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtime_templates.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtime_templates.js`


-----




### Notebook_service.list_notebook_runtimes

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtimes.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtimes.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtimes.js`


-----




### Notebook_service.start_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.start_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.start_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.start_notebook_runtime.js`


-----




### Notebook_service.stop_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.stop_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.stop_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.stop_notebook_runtime.js`


-----




### Notebook_service.update_notebook_runtime_template

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.update_notebook_runtime_template.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.update_notebook_runtime_template.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.update_notebook_runtime_template.js`


-----




### Notebook_service.upgrade_notebook_runtime

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.upgrade_notebook_runtime.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.upgrade_notebook_runtime.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.upgrade_notebook_runtime.js`


-----




### Persistent_resource_service.create_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.create_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.create_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.create_persistent_resource.js`


-----




### Persistent_resource_service.delete_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.delete_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.delete_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.delete_persistent_resource.js`


-----




### Persistent_resource_service.get_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.get_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.get_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.get_persistent_resource.js`


-----




### Persistent_resource_service.list_persistent_resources

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.list_persistent_resources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.list_persistent_resources.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.list_persistent_resources.js`


-----




### Persistent_resource_service.reboot_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.reboot_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.reboot_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.reboot_persistent_resource.js`


-----




### Persistent_resource_service.update_persistent_resource

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.update_persistent_resource.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.update_persistent_resource.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.update_persistent_resource.js`


-----




### Pipeline_service.batch_cancel_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_cancel_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_cancel_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_cancel_pipeline_jobs.js`


-----




### Pipeline_service.batch_delete_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_delete_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_delete_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_delete_pipeline_jobs.js`


-----




### Pipeline_service.cancel_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_pipeline_job.js`


-----




### Pipeline_service.cancel_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_training_pipeline.js`


-----




### Pipeline_service.create_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_pipeline_job.js`


-----




### Pipeline_service.create_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_training_pipeline.js`


-----




### Pipeline_service.delete_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_pipeline_job.js`


-----




### Pipeline_service.delete_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_training_pipeline.js`


-----




### Pipeline_service.get_pipeline_job

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_pipeline_job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_pipeline_job.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_pipeline_job.js`


-----




### Pipeline_service.get_training_pipeline

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_training_pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_training_pipeline.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_training_pipeline.js`


-----




### Pipeline_service.list_pipeline_jobs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_pipeline_jobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_pipeline_jobs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_pipeline_jobs.js`


-----




### Pipeline_service.list_training_pipelines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_training_pipelines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_training_pipelines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_training_pipelines.js`


-----




### Prediction_service.chat_completions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.chat_completions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.chat_completions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.chat_completions.js`


-----




### Prediction_service.count_tokens

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.count_tokens.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.count_tokens.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.count_tokens.js`


-----




### Prediction_service.direct_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_predict.js`


-----




### Prediction_service.direct_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_raw_predict.js`


-----




### Prediction_service.explain

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.explain.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.explain.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.explain.js`


-----




### Prediction_service.generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.generate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.generate_content.js`


-----




### Prediction_service.predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.predict.js`


-----




### Prediction_service.raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.raw_predict.js`


-----




### Prediction_service.server_streaming_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.server_streaming_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.server_streaming_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.server_streaming_predict.js`


-----




### Prediction_service.stream_direct_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_predict.js`


-----




### Prediction_service.stream_direct_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_raw_predict.js`


-----




### Prediction_service.stream_generate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_generate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_generate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_generate_content.js`


-----




### Prediction_service.stream_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_raw_predict.js`


-----




### Prediction_service.streaming_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_predict.js`


-----




### Prediction_service.streaming_raw_predict

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_raw_predict.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_raw_predict.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_raw_predict.js`


-----




### Reasoning_engine_execution_service.query_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.query_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.query_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.query_reasoning_engine.js`


-----




### Reasoning_engine_execution_service.stream_query_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.stream_query_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.stream_query_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.stream_query_reasoning_engine.js`


-----




### Reasoning_engine_service.create_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.create_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.create_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.create_reasoning_engine.js`


-----




### Reasoning_engine_service.delete_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.delete_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.delete_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.delete_reasoning_engine.js`


-----




### Reasoning_engine_service.get_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.get_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.get_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.get_reasoning_engine.js`


-----




### Reasoning_engine_service.list_reasoning_engines

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.list_reasoning_engines.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.list_reasoning_engines.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.list_reasoning_engines.js`


-----




### Reasoning_engine_service.update_reasoning_engine

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.update_reasoning_engine.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.update_reasoning_engine.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.update_reasoning_engine.js`


-----




### Schedule_service.create_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.create_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.create_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.create_schedule.js`


-----




### Schedule_service.delete_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.delete_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.delete_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.delete_schedule.js`


-----




### Schedule_service.get_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.get_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.get_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.get_schedule.js`


-----




### Schedule_service.list_schedules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.list_schedules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.list_schedules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.list_schedules.js`


-----




### Schedule_service.pause_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.pause_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.pause_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.pause_schedule.js`


-----




### Schedule_service.resume_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.resume_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.resume_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.resume_schedule.js`


-----




### Schedule_service.update_schedule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.update_schedule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.update_schedule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.update_schedule.js`


-----




### Session_service.append_event

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.append_event.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.append_event.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.append_event.js`


-----




### Session_service.create_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.create_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.create_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.create_session.js`


-----




### Session_service.delete_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.delete_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.delete_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.delete_session.js`


-----




### Session_service.get_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.get_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.get_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.get_session.js`


-----




### Session_service.list_events

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_events.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_events.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_events.js`


-----




### Session_service.list_sessions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_sessions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_sessions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_sessions.js`


-----




### Session_service.update_session

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.update_session.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.update_session.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.update_session.js`


-----




### Specialist_pool_service.create_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.create_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.create_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.create_specialist_pool.js`


-----




### Specialist_pool_service.delete_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.delete_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.delete_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.delete_specialist_pool.js`


-----




### Specialist_pool_service.get_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.get_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.get_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.get_specialist_pool.js`


-----




### Specialist_pool_service.list_specialist_pools

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.list_specialist_pools.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.list_specialist_pools.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.list_specialist_pools.js`


-----




### Specialist_pool_service.update_specialist_pool

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.update_specialist_pool.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.update_specialist_pool.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.update_specialist_pool.js`


-----




### Tensorboard_service.batch_create_tensorboard_runs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_runs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_runs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_runs.js`


-----




### Tensorboard_service.batch_create_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_time_series.js`


-----




### Tensorboard_service.batch_read_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_read_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_read_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_read_tensorboard_time_series_data.js`


-----




### Tensorboard_service.create_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard.js`


-----




### Tensorboard_service.create_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_experiment.js`


-----




### Tensorboard_service.create_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_run.js`


-----




### Tensorboard_service.create_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_time_series.js`


-----




### Tensorboard_service.delete_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard.js`


-----




### Tensorboard_service.delete_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_experiment.js`


-----




### Tensorboard_service.delete_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_run.js`


-----




### Tensorboard_service.delete_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_time_series.js`


-----




### Tensorboard_service.export_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.export_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.export_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.export_tensorboard_time_series_data.js`


-----




### Tensorboard_service.get_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard.js`


-----




### Tensorboard_service.get_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_experiment.js`


-----




### Tensorboard_service.get_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_run.js`


-----




### Tensorboard_service.get_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_time_series.js`


-----




### Tensorboard_service.list_tensorboard_experiments

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_experiments.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_experiments.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_experiments.js`


-----




### Tensorboard_service.list_tensorboard_runs

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_runs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_runs.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_runs.js`


-----




### Tensorboard_service.list_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_time_series.js`


-----




### Tensorboard_service.list_tensorboards

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboards.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboards.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboards.js`


-----




### Tensorboard_service.read_tensorboard_blob_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_blob_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_blob_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_blob_data.js`


-----




### Tensorboard_service.read_tensorboard_size

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_size.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_size.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_size.js`


-----




### Tensorboard_service.read_tensorboard_time_series_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_time_series_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_time_series_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_time_series_data.js`


-----




### Tensorboard_service.read_tensorboard_usage

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_usage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_usage.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_usage.js`


-----




### Tensorboard_service.update_tensorboard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard.js`


-----




### Tensorboard_service.update_tensorboard_experiment

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_experiment.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_experiment.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_experiment.js`


-----




### Tensorboard_service.update_tensorboard_run

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_run.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_run.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_run.js`


-----




### Tensorboard_service.update_tensorboard_time_series

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_time_series.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_time_series.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_time_series.js`


-----




### Tensorboard_service.write_tensorboard_experiment_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_experiment_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_experiment_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_experiment_data.js`


-----




### Tensorboard_service.write_tensorboard_run_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_run_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_run_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_run_data.js`


-----




### Vertex_rag_data_service.create_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.create_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.create_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.create_rag_corpus.js`


-----




### Vertex_rag_data_service.delete_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_corpus.js`


-----




### Vertex_rag_data_service.delete_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_file.js`


-----




### Vertex_rag_data_service.get_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_corpus.js`


-----




### Vertex_rag_data_service.get_rag_engine_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_engine_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_engine_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_engine_config.js`


-----




### Vertex_rag_data_service.get_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_file.js`


-----




### Vertex_rag_data_service.import_rag_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.import_rag_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.import_rag_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.import_rag_files.js`


-----




### Vertex_rag_data_service.list_rag_corpora

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_corpora.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_corpora.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_corpora.js`


-----




### Vertex_rag_data_service.list_rag_files

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_files.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_files.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_files.js`


-----




### Vertex_rag_data_service.update_rag_corpus

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_corpus.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_corpus.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_corpus.js`


-----




### Vertex_rag_data_service.update_rag_engine_config

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_engine_config.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_engine_config.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_engine_config.js`


-----




### Vertex_rag_data_service.upload_rag_file

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.upload_rag_file.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.upload_rag_file.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.upload_rag_file.js`


-----




### Vertex_rag_service.augment_prompt

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.augment_prompt.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.augment_prompt.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.augment_prompt.js`


-----




### Vertex_rag_service.corroborate_content

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.corroborate_content.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.corroborate_content.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.corroborate_content.js`


-----




### Vertex_rag_service.retrieve_contexts

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.retrieve_contexts.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.retrieve_contexts.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.retrieve_contexts.js`


-----




### Vizier_service.add_trial_measurement

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.add_trial_measurement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.add_trial_measurement.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.add_trial_measurement.js`


-----




### Vizier_service.check_trial_early_stopping_state

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.check_trial_early_stopping_state.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.check_trial_early_stopping_state.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.check_trial_early_stopping_state.js`


-----




### Vizier_service.complete_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.complete_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.complete_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.complete_trial.js`


-----




### Vizier_service.create_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_study.js`


-----




### Vizier_service.create_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_trial.js`


-----




### Vizier_service.delete_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_study.js`


-----




### Vizier_service.delete_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_trial.js`


-----




### Vizier_service.get_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_study.js`


-----




### Vizier_service.get_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_trial.js`


-----




### Vizier_service.list_optimal_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_optimal_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_optimal_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_optimal_trials.js`


-----




### Vizier_service.list_studies

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_studies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_studies.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_studies.js`


-----




### Vizier_service.list_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_trials.js`


-----




### Vizier_service.lookup_study

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.lookup_study.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.lookup_study.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.lookup_study.js`


-----




### Vizier_service.stop_trial

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.stop_trial.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.stop_trial.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.stop_trial.js`


-----




### Vizier_service.suggest_trials

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.suggest_trials.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.suggest_trials.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.suggest_trials.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-aiplatform/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-aiplatform/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/vertex-ai/docs
