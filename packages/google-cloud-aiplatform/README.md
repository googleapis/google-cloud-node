[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Vertex AI API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/aiplatform.svg)](https://www.npmjs.org/package/@google-cloud/aiplatform)

Vertex AI API client for Node.js

Google Cloud Vertex AI is an integrated suite of machine learning tools
and services for building and using ML models with AutoML or custom code.
It offers both novices and experts the best workbench for the entire
machine learning development lifecycle.

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Vertex AI API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/aiplatform/latest)
* [Vertex AI API Documentation](https://cloud.google.com/ai-platform/docs)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Vertex AI API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/aiplatform
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| generate synthetic data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/data_foundry_service.generate_synthetic_data.js) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset.js) |
| create dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.create_dataset_version.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset.js) |
| delete dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_dataset_version.js) |
| delete saved query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.delete_saved_query.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.export_data.js) |
| get annotation spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_annotation_spec.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset.js) |
| get dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.get_dataset_version.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.import_data.js) |
| list annotations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_annotations.js) |
| list data items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_data_items.js) |
| list dataset versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_dataset_versions.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_datasets.js) |
| list saved queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.list_saved_queries.js) |
| restore dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.restore_dataset_version.js) |
| search data items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.search_data_items.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset.js) |
| update dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/dataset_service.update_dataset_version.js) |
| create deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.create_deployment_resource_pool.js) |
| delete deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.delete_deployment_resource_pool.js) |
| get deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.get_deployment_resource_pool.js) |
| list deployment resource pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.list_deployment_resource_pools.js) |
| query deployed models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.query_deployed_models.js) |
| update deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/deployment_resource_pool_service.update_deployment_resource_pool.js) |
| create endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.create_endpoint.js) |
| delete endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.delete_endpoint.js) |
| deploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.deploy_model.js) |
| get endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.get_endpoint.js) |
| list endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.list_endpoints.js) |
| mutate deployed model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.mutate_deployed_model.js) |
| undeploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.undeploy_model.js) |
| update endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint.js) |
| update endpoint long running | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/endpoint_service.update_endpoint_long_running.js) |
| evaluate instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/evaluation_service.evaluate_instances.js) |
| create feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_online_store.js) |
| create feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.create_feature_view.js) |
| delete feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_online_store.js) |
| delete feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.delete_feature_view.js) |
| get feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_online_store.js) |
| get feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view.js) |
| get feature view sync | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.get_feature_view_sync.js) |
| list feature online stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_online_stores.js) |
| list feature view syncs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_view_syncs.js) |
| list feature views | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.list_feature_views.js) |
| sync feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.sync_feature_view.js) |
| update feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_online_store.js) |
| update feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_admin_service.update_feature_view.js) |
| feature view direct write | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.feature_view_direct_write.js) |
| fetch feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.fetch_feature_values.js) |
| generate fetch access token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.generate_fetch_access_token.js) |
| search nearest entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_online_store_service.search_nearest_entities.js) |
| batch create features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.batch_create_features.js) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature.js) |
| create feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.create_feature_group.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature.js) |
| delete feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.delete_feature_group.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature.js) |
| get feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.get_feature_group.js) |
| list feature groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_feature_groups.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.list_features.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature.js) |
| update feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/feature_registry_service.update_feature_group.js) |
| read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.read_feature_values.js) |
| streaming read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.streaming_read_feature_values.js) |
| write feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_online_serving_service.write_feature_values.js) |
| batch create features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_create_features.js) |
| batch read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.batch_read_feature_values.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_entity_type.js) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_feature.js) |
| create featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.create_featurestore.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_entity_type.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature.js) |
| delete feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_feature_values.js) |
| delete featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.delete_featurestore.js) |
| export feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.export_feature_values.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_entity_type.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_feature.js) |
| get featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.get_featurestore.js) |
| import feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.import_feature_values.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_entity_types.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_features.js) |
| list featurestores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.list_featurestores.js) |
| search features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.search_features.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_entity_type.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_feature.js) |
| update featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/featurestore_service.update_featurestore.js) |
| create cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.create_cached_content.js) |
| delete cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.delete_cached_content.js) |
| get cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.get_cached_content.js) |
| list cached contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.list_cached_contents.js) |
| update cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_cache_service.update_cached_content.js) |
| cancel tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.cancel_tuning_job.js) |
| create tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.create_tuning_job.js) |
| get tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.get_tuning_job.js) |
| list tuning jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.list_tuning_jobs.js) |
| rebase tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/gen_ai_tuning_service.rebase_tuned_model.js) |
| create index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.create_index_endpoint.js) |
| delete index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.delete_index_endpoint.js) |
| deploy index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.deploy_index.js) |
| get index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.get_index_endpoint.js) |
| list index endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.list_index_endpoints.js) |
| mutate deployed index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.mutate_deployed_index.js) |
| undeploy index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.undeploy_index.js) |
| update index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_endpoint_service.update_index_endpoint.js) |
| create index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.create_index.js) |
| delete index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.delete_index.js) |
| get index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.get_index.js) |
| list indexes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.list_indexes.js) |
| remove datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.remove_datapoints.js) |
| update index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.update_index.js) |
| upsert datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/index_service.upsert_datapoints.js) |
| cancel batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_batch_prediction_job.js) |
| cancel custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_custom_job.js) |
| cancel data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_data_labeling_job.js) |
| cancel hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_hyperparameter_tuning_job.js) |
| cancel nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.cancel_nas_job.js) |
| create batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_batch_prediction_job.js) |
| create custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_custom_job.js) |
| create data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_data_labeling_job.js) |
| create hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_hyperparameter_tuning_job.js) |
| create model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_model_deployment_monitoring_job.js) |
| create nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.create_nas_job.js) |
| delete batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_batch_prediction_job.js) |
| delete custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_custom_job.js) |
| delete data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_data_labeling_job.js) |
| delete hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_hyperparameter_tuning_job.js) |
| delete model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_model_deployment_monitoring_job.js) |
| delete nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.delete_nas_job.js) |
| get batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_batch_prediction_job.js) |
| get custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_custom_job.js) |
| get data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_data_labeling_job.js) |
| get hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_hyperparameter_tuning_job.js) |
| get model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_model_deployment_monitoring_job.js) |
| get nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_job.js) |
| get nas trial detail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.get_nas_trial_detail.js) |
| list batch prediction jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_batch_prediction_jobs.js) |
| list custom jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_custom_jobs.js) |
| list data labeling jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_data_labeling_jobs.js) |
| list hyperparameter tuning jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_hyperparameter_tuning_jobs.js) |
| list model deployment monitoring jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_model_deployment_monitoring_jobs.js) |
| list nas jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_jobs.js) |
| list nas trial details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.list_nas_trial_details.js) |
| pause model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.pause_model_deployment_monitoring_job.js) |
| resume model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.resume_model_deployment_monitoring_job.js) |
| search model deployment monitoring stats anomalies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.search_model_deployment_monitoring_stats_anomalies.js) |
| update model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/job_service.update_model_deployment_monitoring_job.js) |
| compute tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.compute_tokens.js) |
| count tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/llm_utility_service.count_tokens.js) |
| find neighbors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/match_service.find_neighbors.js) |
| read index datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/match_service.read_index_datapoints.js) |
| add context artifacts and executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_artifacts_and_executions.js) |
| add context children | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_context_children.js) |
| add execution events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.add_execution_events.js) |
| create artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_artifact.js) |
| create context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_context.js) |
| create execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_execution.js) |
| create metadata schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_schema.js) |
| create metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.create_metadata_store.js) |
| delete artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_artifact.js) |
| delete context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_context.js) |
| delete execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_execution.js) |
| delete metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.delete_metadata_store.js) |
| get artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_artifact.js) |
| get context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_context.js) |
| get execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_execution.js) |
| get metadata schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_schema.js) |
| get metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.get_metadata_store.js) |
| list artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_artifacts.js) |
| list contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_contexts.js) |
| list executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_executions.js) |
| list metadata schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_schemas.js) |
| list metadata stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.list_metadata_stores.js) |
| purge artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_artifacts.js) |
| purge contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_contexts.js) |
| purge executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.purge_executions.js) |
| query artifact lineage subgraph | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_artifact_lineage_subgraph.js) |
| query context lineage subgraph | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_context_lineage_subgraph.js) |
| query execution inputs and outputs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.query_execution_inputs_and_outputs.js) |
| remove context children | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.remove_context_children.js) |
| update artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_artifact.js) |
| update context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_context.js) |
| update execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/metadata_service.update_execution.js) |
| batch migrate resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/migration_service.batch_migrate_resources.js) |
| search migratable resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/migration_service.search_migratable_resources.js) |
| deploy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_garden_service.deploy.js) |
| get publisher model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_garden_service.get_publisher_model.js) |
| batch import evaluated annotations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_evaluated_annotations.js) |
| batch import model evaluation slices | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.batch_import_model_evaluation_slices.js) |
| copy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.copy_model.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model.js) |
| delete model version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.delete_model_version.js) |
| export model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.export_model.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model.js) |
| get model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation.js) |
| get model evaluation slice | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.get_model_evaluation_slice.js) |
| import model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.import_model_evaluation.js) |
| list model evaluation slices | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluation_slices.js) |
| list model evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_evaluations.js) |
| list model version checkpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_version_checkpoints.js) |
| list model versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_model_versions.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.list_models.js) |
| merge version aliases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.merge_version_aliases.js) |
| update explanation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_explanation_dataset.js) |
| update model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.update_model.js) |
| upload model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/model_service.upload_model.js) |
| assign notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.assign_notebook_runtime.js) |
| create notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_execution_job.js) |
| create notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.create_notebook_runtime_template.js) |
| delete notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_execution_job.js) |
| delete notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime.js) |
| delete notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.delete_notebook_runtime_template.js) |
| get notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_execution_job.js) |
| get notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime.js) |
| get notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.get_notebook_runtime_template.js) |
| list notebook execution jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_execution_jobs.js) |
| list notebook runtime templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtime_templates.js) |
| list notebook runtimes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.list_notebook_runtimes.js) |
| start notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.start_notebook_runtime.js) |
| stop notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.stop_notebook_runtime.js) |
| update notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.update_notebook_runtime_template.js) |
| upgrade notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/notebook_service.upgrade_notebook_runtime.js) |
| create persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.create_persistent_resource.js) |
| delete persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.delete_persistent_resource.js) |
| get persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.get_persistent_resource.js) |
| list persistent resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.list_persistent_resources.js) |
| reboot persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.reboot_persistent_resource.js) |
| update persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/persistent_resource_service.update_persistent_resource.js) |
| batch cancel pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_cancel_pipeline_jobs.js) |
| batch delete pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.batch_delete_pipeline_jobs.js) |
| cancel pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_pipeline_job.js) |
| cancel training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.cancel_training_pipeline.js) |
| create pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_pipeline_job.js) |
| create training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.create_training_pipeline.js) |
| delete pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_pipeline_job.js) |
| delete training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.delete_training_pipeline.js) |
| get pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_pipeline_job.js) |
| get training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.get_training_pipeline.js) |
| list pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_pipeline_jobs.js) |
| list training pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/pipeline_service.list_training_pipelines.js) |
| direct predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_predict.js) |
| direct raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.direct_raw_predict.js) |
| explain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.explain.js) |
| generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.generate_content.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.predict.js) |
| raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.raw_predict.js) |
| server streaming predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.server_streaming_predict.js) |
| stream direct predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_predict.js) |
| stream direct raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_direct_raw_predict.js) |
| stream generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_generate_content.js) |
| stream raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.stream_raw_predict.js) |
| streaming predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_predict.js) |
| streaming raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/prediction_service.streaming_raw_predict.js) |
| query reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.query_reasoning_engine.js) |
| stream query reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_execution_service.stream_query_reasoning_engine.js) |
| create reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.create_reasoning_engine.js) |
| delete reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.delete_reasoning_engine.js) |
| get reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.get_reasoning_engine.js) |
| list reasoning engines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.list_reasoning_engines.js) |
| update reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/reasoning_engine_service.update_reasoning_engine.js) |
| create schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.create_schedule.js) |
| delete schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.delete_schedule.js) |
| get schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.get_schedule.js) |
| list schedules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.list_schedules.js) |
| pause schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.pause_schedule.js) |
| resume schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.resume_schedule.js) |
| update schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/schedule_service.update_schedule.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/snippet_metadata_google.cloud.aiplatform.v1.json) |
| create specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.create_specialist_pool.js) |
| delete specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.delete_specialist_pool.js) |
| get specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.get_specialist_pool.js) |
| list specialist pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.list_specialist_pools.js) |
| update specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/specialist_pool_service.update_specialist_pool.js) |
| batch create tensorboard runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_runs.js) |
| batch create tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_create_tensorboard_time_series.js) |
| batch read tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.batch_read_tensorboard_time_series_data.js) |
| create tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard.js) |
| create tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_experiment.js) |
| create tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_run.js) |
| create tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.create_tensorboard_time_series.js) |
| delete tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard.js) |
| delete tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_experiment.js) |
| delete tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_run.js) |
| delete tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.delete_tensorboard_time_series.js) |
| export tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.export_tensorboard_time_series_data.js) |
| get tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard.js) |
| get tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_experiment.js) |
| get tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_run.js) |
| get tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.get_tensorboard_time_series.js) |
| list tensorboard experiments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_experiments.js) |
| list tensorboard runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_runs.js) |
| list tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboard_time_series.js) |
| list tensorboards | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.list_tensorboards.js) |
| read tensorboard blob data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_blob_data.js) |
| read tensorboard size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_size.js) |
| read tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_time_series_data.js) |
| read tensorboard usage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.read_tensorboard_usage.js) |
| update tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard.js) |
| update tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_experiment.js) |
| update tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_run.js) |
| update tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.update_tensorboard_time_series.js) |
| write tensorboard experiment data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_experiment_data.js) |
| write tensorboard run data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/tensorboard_service.write_tensorboard_run_data.js) |
| create rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.create_rag_corpus.js) |
| delete rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_corpus.js) |
| delete rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.delete_rag_file.js) |
| get rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_corpus.js) |
| get rag engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_engine_config.js) |
| get rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.get_rag_file.js) |
| import rag files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.import_rag_files.js) |
| list rag corpora | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_corpora.js) |
| list rag files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.list_rag_files.js) |
| update rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.update_rag_corpus.js) |
| update rag engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.update_rag_engine_config.js) |
| upload rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_data_service.upload_rag_file.js) |
| augment prompt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.augment_prompt.js) |
| corroborate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.corroborate_content.js) |
| retrieve contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vertex_rag_service.retrieve_contexts.js) |
| add trial measurement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.add_trial_measurement.js) |
| check trial early stopping state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.check_trial_early_stopping_state.js) |
| complete trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.complete_trial.js) |
| create study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_study.js) |
| create trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.create_trial.js) |
| delete study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_study.js) |
| delete trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.delete_trial.js) |
| get study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_study.js) |
| get trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.get_trial.js) |
| list optimal trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_optimal_trials.js) |
| list studies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_studies.js) |
| list trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.list_trials.js) |
| lookup study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.lookup_study.js) |
| stop trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.stop_trial.js) |
| suggest trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1/vizier_service.suggest_trials.js) |
| assemble data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assemble_data.js) |
| assess data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.assess_data.js) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset.js) |
| create dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.create_dataset_version.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset.js) |
| delete dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_dataset_version.js) |
| delete saved query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.delete_saved_query.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.export_data.js) |
| get annotation spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_annotation_spec.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset.js) |
| get dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.get_dataset_version.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.import_data.js) |
| list annotations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_annotations.js) |
| list data items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_data_items.js) |
| list dataset versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_dataset_versions.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_datasets.js) |
| list saved queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.list_saved_queries.js) |
| restore dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.restore_dataset_version.js) |
| search data items | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.search_data_items.js) |
| update dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset.js) |
| update dataset version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/dataset_service.update_dataset_version.js) |
| create deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.create_deployment_resource_pool.js) |
| delete deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.delete_deployment_resource_pool.js) |
| get deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.get_deployment_resource_pool.js) |
| list deployment resource pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.list_deployment_resource_pools.js) |
| query deployed models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.query_deployed_models.js) |
| update deployment resource pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/deployment_resource_pool_service.update_deployment_resource_pool.js) |
| create endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.create_endpoint.js) |
| delete endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.delete_endpoint.js) |
| deploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.deploy_model.js) |
| fetch publisher model config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.fetch_publisher_model_config.js) |
| get endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.get_endpoint.js) |
| list endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.list_endpoints.js) |
| mutate deployed model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.mutate_deployed_model.js) |
| set publisher model config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.set_publisher_model_config.js) |
| undeploy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.undeploy_model.js) |
| update endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint.js) |
| update endpoint long running | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/endpoint_service.update_endpoint_long_running.js) |
| evaluate dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_dataset.js) |
| evaluate instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/evaluation_service.evaluate_instances.js) |
| create example store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.create_example_store.js) |
| delete example store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.delete_example_store.js) |
| fetch examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.fetch_examples.js) |
| get example store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.get_example_store.js) |
| list example stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.list_example_stores.js) |
| remove examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.remove_examples.js) |
| search examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.search_examples.js) |
| update example store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.update_example_store.js) |
| upsert examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/example_store_service.upsert_examples.js) |
| execute extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.execute_extension.js) |
| query extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_execution_service.query_extension.js) |
| delete extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.delete_extension.js) |
| get extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.get_extension.js) |
| import extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.import_extension.js) |
| list extensions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.list_extensions.js) |
| update extension | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/extension_registry_service.update_extension.js) |
| create feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_online_store.js) |
| create feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.create_feature_view.js) |
| delete feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_online_store.js) |
| delete feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.delete_feature_view.js) |
| get feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_online_store.js) |
| get feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view.js) |
| get feature view sync | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.get_feature_view_sync.js) |
| list feature online stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_online_stores.js) |
| list feature view syncs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_view_syncs.js) |
| list feature views | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.list_feature_views.js) |
| sync feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.sync_feature_view.js) |
| update feature online store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_online_store.js) |
| update feature view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_admin_service.update_feature_view.js) |
| feature view direct write | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.feature_view_direct_write.js) |
| fetch feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.fetch_feature_values.js) |
| generate fetch access token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.generate_fetch_access_token.js) |
| search nearest entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.search_nearest_entities.js) |
| streaming fetch feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_online_store_service.streaming_fetch_feature_values.js) |
| batch create features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.batch_create_features.js) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature.js) |
| create feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_group.js) |
| create feature monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor.js) |
| create feature monitor job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.create_feature_monitor_job.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature.js) |
| delete feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_group.js) |
| delete feature monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.delete_feature_monitor.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature.js) |
| get feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_group.js) |
| get feature monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor.js) |
| get feature monitor job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.get_feature_monitor_job.js) |
| list feature groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_groups.js) |
| list feature monitor jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitor_jobs.js) |
| list feature monitors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_feature_monitors.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.list_features.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature.js) |
| update feature group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_group.js) |
| update feature monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/feature_registry_service.update_feature_monitor.js) |
| read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.read_feature_values.js) |
| streaming read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.streaming_read_feature_values.js) |
| write feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_online_serving_service.write_feature_values.js) |
| batch create features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_create_features.js) |
| batch read feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.batch_read_feature_values.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_entity_type.js) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_feature.js) |
| create featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.create_featurestore.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_entity_type.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature.js) |
| delete feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_feature_values.js) |
| delete featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.delete_featurestore.js) |
| export feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.export_feature_values.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_entity_type.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_feature.js) |
| get featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.get_featurestore.js) |
| import feature values | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.import_feature_values.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_entity_types.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_features.js) |
| list featurestores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.list_featurestores.js) |
| search features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.search_features.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_entity_type.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_feature.js) |
| update featurestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/featurestore_service.update_featurestore.js) |
| create cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.create_cached_content.js) |
| delete cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.delete_cached_content.js) |
| get cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.get_cached_content.js) |
| list cached contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.list_cached_contents.js) |
| update cached content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_cache_service.update_cached_content.js) |
| cancel tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.cancel_tuning_job.js) |
| create tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.create_tuning_job.js) |
| get tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.get_tuning_job.js) |
| list tuning jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.list_tuning_jobs.js) |
| rebase tuned model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/gen_ai_tuning_service.rebase_tuned_model.js) |
| create index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.create_index_endpoint.js) |
| delete index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.delete_index_endpoint.js) |
| deploy index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.deploy_index.js) |
| get index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.get_index_endpoint.js) |
| list index endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.list_index_endpoints.js) |
| mutate deployed index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.mutate_deployed_index.js) |
| undeploy index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.undeploy_index.js) |
| update index endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_endpoint_service.update_index_endpoint.js) |
| create index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.create_index.js) |
| delete index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.delete_index.js) |
| get index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.get_index.js) |
| import index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.import_index.js) |
| list indexes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.list_indexes.js) |
| remove datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.remove_datapoints.js) |
| update index | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.update_index.js) |
| upsert datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/index_service.upsert_datapoints.js) |
| cancel batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_batch_prediction_job.js) |
| cancel custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_custom_job.js) |
| cancel data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_data_labeling_job.js) |
| cancel hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_hyperparameter_tuning_job.js) |
| cancel nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.cancel_nas_job.js) |
| create batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_batch_prediction_job.js) |
| create custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_custom_job.js) |
| create data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_data_labeling_job.js) |
| create hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_hyperparameter_tuning_job.js) |
| create model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_model_deployment_monitoring_job.js) |
| create nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.create_nas_job.js) |
| delete batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_batch_prediction_job.js) |
| delete custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_custom_job.js) |
| delete data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_data_labeling_job.js) |
| delete hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_hyperparameter_tuning_job.js) |
| delete model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_model_deployment_monitoring_job.js) |
| delete nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.delete_nas_job.js) |
| get batch prediction job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_batch_prediction_job.js) |
| get custom job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_custom_job.js) |
| get data labeling job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_data_labeling_job.js) |
| get hyperparameter tuning job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_hyperparameter_tuning_job.js) |
| get model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_model_deployment_monitoring_job.js) |
| get nas job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_job.js) |
| get nas trial detail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.get_nas_trial_detail.js) |
| list batch prediction jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_batch_prediction_jobs.js) |
| list custom jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_custom_jobs.js) |
| list data labeling jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_data_labeling_jobs.js) |
| list hyperparameter tuning jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_hyperparameter_tuning_jobs.js) |
| list model deployment monitoring jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_model_deployment_monitoring_jobs.js) |
| list nas jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_jobs.js) |
| list nas trial details | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.list_nas_trial_details.js) |
| pause model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.pause_model_deployment_monitoring_job.js) |
| resume model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.resume_model_deployment_monitoring_job.js) |
| search model deployment monitoring stats anomalies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.search_model_deployment_monitoring_stats_anomalies.js) |
| update model deployment monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/job_service.update_model_deployment_monitoring_job.js) |
| compute tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/llm_utility_service.compute_tokens.js) |
| find neighbors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.find_neighbors.js) |
| read index datapoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/match_service.read_index_datapoints.js) |
| create memory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.create_memory.js) |
| delete memory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.delete_memory.js) |
| generate memories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.generate_memories.js) |
| get memory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.get_memory.js) |
| list memories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.list_memories.js) |
| retrieve memories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.retrieve_memories.js) |
| update memory | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/memory_bank_service.update_memory.js) |
| add context artifacts and executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_artifacts_and_executions.js) |
| add context children | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_context_children.js) |
| add execution events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.add_execution_events.js) |
| create artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_artifact.js) |
| create context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_context.js) |
| create execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_execution.js) |
| create metadata schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_schema.js) |
| create metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.create_metadata_store.js) |
| delete artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_artifact.js) |
| delete context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_context.js) |
| delete execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_execution.js) |
| delete metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.delete_metadata_store.js) |
| get artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_artifact.js) |
| get context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_context.js) |
| get execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_execution.js) |
| get metadata schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_schema.js) |
| get metadata store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.get_metadata_store.js) |
| list artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_artifacts.js) |
| list contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_contexts.js) |
| list executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_executions.js) |
| list metadata schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_schemas.js) |
| list metadata stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.list_metadata_stores.js) |
| purge artifacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_artifacts.js) |
| purge contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_contexts.js) |
| purge executions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.purge_executions.js) |
| query artifact lineage subgraph | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_artifact_lineage_subgraph.js) |
| query context lineage subgraph | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_context_lineage_subgraph.js) |
| query execution inputs and outputs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.query_execution_inputs_and_outputs.js) |
| remove context children | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.remove_context_children.js) |
| update artifact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_artifact.js) |
| update context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_context.js) |
| update execution | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/metadata_service.update_execution.js) |
| batch migrate resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.batch_migrate_resources.js) |
| search migratable resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/migration_service.search_migratable_resources.js) |
| accept publisher model eula | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.accept_publisher_model_eula.js) |
| check publisher model eula acceptance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.check_publisher_model_eula_acceptance.js) |
| deploy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy.js) |
| deploy publisher model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.deploy_publisher_model.js) |
| export publisher model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.export_publisher_model.js) |
| get publisher model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.get_publisher_model.js) |
| list publisher models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_garden_service.list_publisher_models.js) |
| create model monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitor.js) |
| create model monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.create_model_monitoring_job.js) |
| delete model monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitor.js) |
| delete model monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.delete_model_monitoring_job.js) |
| get model monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitor.js) |
| get model monitoring job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.get_model_monitoring_job.js) |
| list model monitoring jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitoring_jobs.js) |
| list model monitors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.list_model_monitors.js) |
| search model monitoring alerts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_alerts.js) |
| search model monitoring stats | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.search_model_monitoring_stats.js) |
| update model monitor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_monitoring_service.update_model_monitor.js) |
| batch import evaluated annotations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_evaluated_annotations.js) |
| batch import model evaluation slices | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.batch_import_model_evaluation_slices.js) |
| copy model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.copy_model.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model.js) |
| delete model version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.delete_model_version.js) |
| export model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.export_model.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model.js) |
| get model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation.js) |
| get model evaluation slice | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.get_model_evaluation_slice.js) |
| import model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.import_model_evaluation.js) |
| list model evaluation slices | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluation_slices.js) |
| list model evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_evaluations.js) |
| list model version checkpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_version_checkpoints.js) |
| list model versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_model_versions.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.list_models.js) |
| merge version aliases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.merge_version_aliases.js) |
| recommend spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.recommend_spec.js) |
| update explanation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_explanation_dataset.js) |
| update model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.update_model.js) |
| upload model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/model_service.upload_model.js) |
| assign notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.assign_notebook_runtime.js) |
| create notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_execution_job.js) |
| create notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.create_notebook_runtime_template.js) |
| delete notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_execution_job.js) |
| delete notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime.js) |
| delete notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.delete_notebook_runtime_template.js) |
| get notebook execution job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_execution_job.js) |
| get notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime.js) |
| get notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.get_notebook_runtime_template.js) |
| list notebook execution jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_execution_jobs.js) |
| list notebook runtime templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtime_templates.js) |
| list notebook runtimes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.list_notebook_runtimes.js) |
| start notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.start_notebook_runtime.js) |
| stop notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.stop_notebook_runtime.js) |
| update notebook runtime template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.update_notebook_runtime_template.js) |
| upgrade notebook runtime | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/notebook_service.upgrade_notebook_runtime.js) |
| create persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.create_persistent_resource.js) |
| delete persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.delete_persistent_resource.js) |
| get persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.get_persistent_resource.js) |
| list persistent resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.list_persistent_resources.js) |
| reboot persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.reboot_persistent_resource.js) |
| update persistent resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/persistent_resource_service.update_persistent_resource.js) |
| batch cancel pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_cancel_pipeline_jobs.js) |
| batch delete pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.batch_delete_pipeline_jobs.js) |
| cancel pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_pipeline_job.js) |
| cancel training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.cancel_training_pipeline.js) |
| create pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_pipeline_job.js) |
| create training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.create_training_pipeline.js) |
| delete pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_pipeline_job.js) |
| delete training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.delete_training_pipeline.js) |
| get pipeline job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_pipeline_job.js) |
| get training pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.get_training_pipeline.js) |
| list pipeline jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_pipeline_jobs.js) |
| list training pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/pipeline_service.list_training_pipelines.js) |
| chat completions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.chat_completions.js) |
| count tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.count_tokens.js) |
| direct predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_predict.js) |
| direct raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.direct_raw_predict.js) |
| explain | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.explain.js) |
| generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.generate_content.js) |
| predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.predict.js) |
| raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.raw_predict.js) |
| server streaming predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.server_streaming_predict.js) |
| stream direct predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_predict.js) |
| stream direct raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_direct_raw_predict.js) |
| stream generate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_generate_content.js) |
| stream raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.stream_raw_predict.js) |
| streaming predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_predict.js) |
| streaming raw predict | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/prediction_service.streaming_raw_predict.js) |
| query reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.query_reasoning_engine.js) |
| stream query reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_execution_service.stream_query_reasoning_engine.js) |
| create reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.create_reasoning_engine.js) |
| delete reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.delete_reasoning_engine.js) |
| get reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.get_reasoning_engine.js) |
| list reasoning engines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.list_reasoning_engines.js) |
| update reasoning engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/reasoning_engine_service.update_reasoning_engine.js) |
| create schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.create_schedule.js) |
| delete schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.delete_schedule.js) |
| get schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.get_schedule.js) |
| list schedules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.list_schedules.js) |
| pause schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.pause_schedule.js) |
| resume schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.resume_schedule.js) |
| update schedule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/schedule_service.update_schedule.js) |
| append event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.append_event.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.create_session.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.delete_session.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.get_session.js) |
| list events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_events.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.list_sessions.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/session_service.update_session.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/snippet_metadata_google.cloud.aiplatform.v1beta1.json) |
| create specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.create_specialist_pool.js) |
| delete specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.delete_specialist_pool.js) |
| get specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.get_specialist_pool.js) |
| list specialist pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.list_specialist_pools.js) |
| update specialist pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/specialist_pool_service.update_specialist_pool.js) |
| batch create tensorboard runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_runs.js) |
| batch create tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_create_tensorboard_time_series.js) |
| batch read tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.batch_read_tensorboard_time_series_data.js) |
| create tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard.js) |
| create tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_experiment.js) |
| create tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_run.js) |
| create tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.create_tensorboard_time_series.js) |
| delete tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard.js) |
| delete tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_experiment.js) |
| delete tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_run.js) |
| delete tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.delete_tensorboard_time_series.js) |
| export tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.export_tensorboard_time_series_data.js) |
| get tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard.js) |
| get tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_experiment.js) |
| get tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_run.js) |
| get tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.get_tensorboard_time_series.js) |
| list tensorboard experiments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_experiments.js) |
| list tensorboard runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_runs.js) |
| list tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboard_time_series.js) |
| list tensorboards | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.list_tensorboards.js) |
| read tensorboard blob data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_blob_data.js) |
| read tensorboard size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_size.js) |
| read tensorboard time series data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_time_series_data.js) |
| read tensorboard usage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.read_tensorboard_usage.js) |
| update tensorboard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard.js) |
| update tensorboard experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_experiment.js) |
| update tensorboard run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_run.js) |
| update tensorboard time series | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.update_tensorboard_time_series.js) |
| write tensorboard experiment data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_experiment_data.js) |
| write tensorboard run data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/tensorboard_service.write_tensorboard_run_data.js) |
| create rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.create_rag_corpus.js) |
| delete rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_corpus.js) |
| delete rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.delete_rag_file.js) |
| get rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_corpus.js) |
| get rag engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_engine_config.js) |
| get rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.get_rag_file.js) |
| import rag files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.import_rag_files.js) |
| list rag corpora | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_corpora.js) |
| list rag files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.list_rag_files.js) |
| update rag corpus | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_corpus.js) |
| update rag engine config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.update_rag_engine_config.js) |
| upload rag file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_data_service.upload_rag_file.js) |
| augment prompt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.augment_prompt.js) |
| corroborate content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.corroborate_content.js) |
| retrieve contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vertex_rag_service.retrieve_contexts.js) |
| add trial measurement | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.add_trial_measurement.js) |
| check trial early stopping state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.check_trial_early_stopping_state.js) |
| complete trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.complete_trial.js) |
| create study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_study.js) |
| create trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.create_trial.js) |
| delete study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_study.js) |
| delete trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.delete_trial.js) |
| get study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_study.js) |
| get trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.get_trial.js) |
| list optimal trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_optimal_trials.js) |
| list studies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_studies.js) |
| list trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.list_trials.js) |
| lookup study | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.lookup_study.js) |
| stop trial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.stop_trial.js) |
| suggest trials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples/generated/v1beta1/vizier_service.suggest_trials.js) |


## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/aiplatform@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=aiplatform.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-aiplatform
