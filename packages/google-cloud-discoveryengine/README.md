[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Discovery Engine API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/discoveryengine.svg)](https://www.npmjs.org/package/@google-cloud/discoveryengine)

Discovery Engine API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Discovery Engine API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/discoveryengine/latest)
* [Discovery Engine API Documentation](https://cloud.google.com/generative-ai-app-builder/docs)

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
1.  [Enable the Discovery Engine API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/discoveryengine
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| stream assist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/assistant_service.stream_assist.js) |
| delete cmek config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.delete_cmek_config.js) |
| get cmek config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.get_cmek_config.js) |
| list cmek configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.list_cmek_configs.js) |
| update cmek config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/cmek_config_service.update_cmek_config.js) |
| complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.complete_query.js) |
| import completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_completion_suggestions.js) |
| import suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.import_suggestion_deny_list_entries.js) |
| purge completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_completion_suggestions.js) |
| purge suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/completion_service.purge_suggestion_deny_list_entries.js) |
| create control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.create_control.js) |
| delete control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.delete_control.js) |
| get control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.get_control.js) |
| list controls | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.list_controls.js) |
| update control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/control_service.update_control.js) |
| answer query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.answer_query.js) |
| converse conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.converse_conversation.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_conversation.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.create_session.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_conversation.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.delete_session.js) |
| get answer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_answer.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_conversation.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.get_session.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_conversations.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.list_sessions.js) |
| stream answer query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.stream_answer_query.js) |
| update conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_conversation.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/conversational_search_service.update_session.js) |
| create data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.create_data_store.js) |
| delete data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.delete_data_store.js) |
| get data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.get_data_store.js) |
| list data stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.list_data_stores.js) |
| update data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/data_store_service.update_data_store.js) |
| batch get documents metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.batch_get_documents_metadata.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.create_document.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.delete_document.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.get_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.list_documents.js) |
| purge documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.purge_documents.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/document_service.update_document.js) |
| create engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.create_engine.js) |
| delete engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.delete_engine.js) |
| get engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.get_engine.js) |
| list engines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.list_engines.js) |
| update engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/engine_service.update_engine.js) |
| check grounding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.check_grounding.js) |
| generate grounded content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.generate_grounded_content.js) |
| stream generate grounded content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/grounded_generation_service.stream_generate_grounded_content.js) |
| create identity mapping store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.create_identity_mapping_store.js) |
| delete identity mapping store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.delete_identity_mapping_store.js) |
| get identity mapping store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.get_identity_mapping_store.js) |
| import identity mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.import_identity_mappings.js) |
| list identity mapping stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mapping_stores.js) |
| list identity mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.list_identity_mappings.js) |
| purge identity mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/identity_mapping_store_service.purge_identity_mappings.js) |
| provision project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/project_service.provision_project.js) |
| rank | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/rank_service.rank.js) |
| recommend | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/recommendation_service.recommend.js) |
| create schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.create_schema.js) |
| delete schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.delete_schema.js) |
| get schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.get_schema.js) |
| list schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.list_schemas.js) |
| update schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/schema_service.update_schema.js) |
| search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search.js) |
| search lite | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_service.search_lite.js) |
| list custom models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.list_custom_models.js) |
| train custom model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/search_tuning_service.train_custom_model.js) |
| update serving config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/serving_config_service.update_serving_config.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/session_service.create_session.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/session_service.delete_session.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/session_service.get_session.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/session_service.list_sessions.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/session_service.update_session.js) |
| batch create target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_create_target_sites.js) |
| batch verify target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.batch_verify_target_sites.js) |
| create sitemap | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_sitemap.js) |
| create target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.create_target_site.js) |
| delete sitemap | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_sitemap.js) |
| delete target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.delete_target_site.js) |
| disable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.disable_advanced_site_search.js) |
| enable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.enable_advanced_site_search.js) |
| fetch domain verification status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_domain_verification_status.js) |
| fetch sitemaps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.fetch_sitemaps.js) |
| get site search engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_site_search_engine.js) |
| get target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.get_target_site.js) |
| list target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.list_target_sites.js) |
| recrawl uris | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.recrawl_uris.js) |
| update target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/site_search_engine_service.update_target_site.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/snippet_metadata_google.cloud.discoveryengine.v1.json) |
| collect user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.collect_user_event.js) |
| import user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.import_user_events.js) |
| purge user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.purge_user_events.js) |
| write user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_event_service.write_user_event.js) |
| batch update user licenses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.batch_update_user_licenses.js) |
| list user licenses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1/user_license_service.list_user_licenses.js) |
| get acl config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.get_acl_config.js) |
| update acl config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/acl_config_service.update_acl_config.js) |
| get chunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.get_chunk.js) |
| list chunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/chunk_service.list_chunks.js) |
| complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.complete_query.js) |
| import completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_completion_suggestions.js) |
| import suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.import_suggestion_deny_list_entries.js) |
| purge completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_completion_suggestions.js) |
| purge suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/completion_service.purge_suggestion_deny_list_entries.js) |
| create control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.create_control.js) |
| delete control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.delete_control.js) |
| get control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.get_control.js) |
| list controls | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.list_controls.js) |
| update control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/control_service.update_control.js) |
| answer query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.answer_query.js) |
| converse conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.converse_conversation.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_conversation.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.create_session.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_conversation.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.delete_session.js) |
| get answer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_answer.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_conversation.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.get_session.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_conversations.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.list_sessions.js) |
| update conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_conversation.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/conversational_search_service.update_session.js) |
| create data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.create_data_store.js) |
| delete data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.delete_data_store.js) |
| get data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_data_store.js) |
| get document processing config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.get_document_processing_config.js) |
| list data stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.list_data_stores.js) |
| update data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_data_store.js) |
| update document processing config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/data_store_service.update_document_processing_config.js) |
| batch get documents metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.batch_get_documents_metadata.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.create_document.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.delete_document.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_document.js) |
| get processed document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.get_processed_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.list_documents.js) |
| purge documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.purge_documents.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/document_service.update_document.js) |
| create engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.create_engine.js) |
| delete engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.delete_engine.js) |
| get engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.get_engine.js) |
| list engines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.list_engines.js) |
| pause engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.pause_engine.js) |
| resume engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.resume_engine.js) |
| tune engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.tune_engine.js) |
| update engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/engine_service.update_engine.js) |
| estimate data size | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/estimate_billing_service.estimate_data_size.js) |
| create evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.create_evaluation.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.get_evaluation.js) |
| list evaluation results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluation_results.js) |
| list evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/evaluation_service.list_evaluations.js) |
| check grounding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/grounded_generation_service.check_grounding.js) |
| get project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.get_project.js) |
| provision project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.provision_project.js) |
| report consent change | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/project_service.report_consent_change.js) |
| rank | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/rank_service.rank.js) |
| recommend | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/recommendation_service.recommend.js) |
| create sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.create_sample_query.js) |
| delete sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.delete_sample_query.js) |
| get sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.get_sample_query.js) |
| import sample queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.import_sample_queries.js) |
| list sample queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.list_sample_queries.js) |
| update sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_service.update_sample_query.js) |
| create sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.create_sample_query_set.js) |
| delete sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.delete_sample_query_set.js) |
| get sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.get_sample_query_set.js) |
| list sample query sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.list_sample_query_sets.js) |
| update sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/sample_query_set_service.update_sample_query_set.js) |
| create schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.create_schema.js) |
| delete schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.delete_schema.js) |
| get schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.get_schema.js) |
| list schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.list_schemas.js) |
| update schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/schema_service.update_schema.js) |
| search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_service.search.js) |
| list custom models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.list_custom_models.js) |
| train custom model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/search_tuning_service.train_custom_model.js) |
| get serving config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.get_serving_config.js) |
| list serving configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.list_serving_configs.js) |
| update serving config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/serving_config_service.update_serving_config.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.create_session.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.delete_session.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.get_session.js) |
| list files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.list_files.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.list_sessions.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/session_service.update_session.js) |
| batch create target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_create_target_sites.js) |
| batch verify target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.batch_verify_target_sites.js) |
| create target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.create_target_site.js) |
| delete target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.delete_target_site.js) |
| disable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.disable_advanced_site_search.js) |
| enable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.enable_advanced_site_search.js) |
| fetch domain verification status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.fetch_domain_verification_status.js) |
| get site search engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_site_search_engine.js) |
| get target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_target_site.js) |
| get uri pattern document data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.get_uri_pattern_document_data.js) |
| list target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.list_target_sites.js) |
| recrawl uris | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.recrawl_uris.js) |
| set uri pattern document data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.set_uri_pattern_document_data.js) |
| update target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/site_search_engine_service.update_target_site.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/snippet_metadata_google.cloud.discoveryengine.v1alpha.json) |
| collect user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.collect_user_event.js) |
| import user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.import_user_events.js) |
| purge user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.purge_user_events.js) |
| write user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1alpha/user_event_service.write_user_event.js) |
| advanced complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.advanced_complete_query.js) |
| complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.complete_query.js) |
| import completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_completion_suggestions.js) |
| import suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.import_suggestion_deny_list_entries.js) |
| purge completion suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_completion_suggestions.js) |
| purge suggestion deny list entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/completion_service.purge_suggestion_deny_list_entries.js) |
| create control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.create_control.js) |
| delete control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.delete_control.js) |
| get control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.get_control.js) |
| list controls | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.list_controls.js) |
| update control | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/control_service.update_control.js) |
| answer query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.answer_query.js) |
| converse conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.converse_conversation.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_conversation.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.create_session.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_conversation.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.delete_session.js) |
| get answer | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_answer.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_conversation.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.get_session.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_conversations.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.list_sessions.js) |
| update conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_conversation.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/conversational_search_service.update_session.js) |
| create data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.create_data_store.js) |
| delete data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.delete_data_store.js) |
| get data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.get_data_store.js) |
| list data stores | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.list_data_stores.js) |
| update data store | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/data_store_service.update_data_store.js) |
| batch get documents metadata | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.batch_get_documents_metadata.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.create_document.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.delete_document.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.get_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.list_documents.js) |
| purge documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.purge_documents.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/document_service.update_document.js) |
| create engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.create_engine.js) |
| delete engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.delete_engine.js) |
| get engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.get_engine.js) |
| list engines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.list_engines.js) |
| pause engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.pause_engine.js) |
| resume engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.resume_engine.js) |
| tune engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.tune_engine.js) |
| update engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/engine_service.update_engine.js) |
| create evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.create_evaluation.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.get_evaluation.js) |
| list evaluation results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluation_results.js) |
| list evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/evaluation_service.list_evaluations.js) |
| check grounding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.check_grounding.js) |
| generate grounded content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.generate_grounded_content.js) |
| stream generate grounded content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/grounded_generation_service.stream_generate_grounded_content.js) |
| provision project | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/project_service.provision_project.js) |
| rank | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/rank_service.rank.js) |
| recommend | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/recommendation_service.recommend.js) |
| create sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.create_sample_query.js) |
| delete sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.delete_sample_query.js) |
| get sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.get_sample_query.js) |
| import sample queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.import_sample_queries.js) |
| list sample queries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.list_sample_queries.js) |
| update sample query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_service.update_sample_query.js) |
| create sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.create_sample_query_set.js) |
| delete sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.delete_sample_query_set.js) |
| get sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.get_sample_query_set.js) |
| list sample query sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.list_sample_query_sets.js) |
| update sample query set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/sample_query_set_service.update_sample_query_set.js) |
| create schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.create_schema.js) |
| delete schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.delete_schema.js) |
| get schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.get_schema.js) |
| list schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.list_schemas.js) |
| update schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/schema_service.update_schema.js) |
| search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search.js) |
| search lite | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_service.search_lite.js) |
| list custom models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.list_custom_models.js) |
| train custom model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/search_tuning_service.train_custom_model.js) |
| get serving config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.get_serving_config.js) |
| list serving configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.list_serving_configs.js) |
| update serving config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/serving_config_service.update_serving_config.js) |
| create session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/session_service.create_session.js) |
| delete session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/session_service.delete_session.js) |
| get session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/session_service.get_session.js) |
| list sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/session_service.list_sessions.js) |
| update session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/session_service.update_session.js) |
| batch create target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_create_target_sites.js) |
| batch verify target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.batch_verify_target_sites.js) |
| create sitemap | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_sitemap.js) |
| create target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.create_target_site.js) |
| delete sitemap | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_sitemap.js) |
| delete target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.delete_target_site.js) |
| disable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.disable_advanced_site_search.js) |
| enable advanced site search | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.enable_advanced_site_search.js) |
| fetch domain verification status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_domain_verification_status.js) |
| fetch sitemaps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.fetch_sitemaps.js) |
| get site search engine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_site_search_engine.js) |
| get target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.get_target_site.js) |
| list target sites | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.list_target_sites.js) |
| recrawl uris | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.recrawl_uris.js) |
| update target site | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/site_search_engine_service.update_target_site.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/snippet_metadata_google.cloud.discoveryengine.v1beta.json) |
| collect user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.collect_user_event.js) |
| import user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.import_user_events.js) |
| purge user events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.purge_user_events.js) |
| write user event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples/generated/v1beta/user_event_service.write_user_event.js) |


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
For example, `npm install @google-cloud/discoveryengine@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=discoveryengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-discoveryengine
