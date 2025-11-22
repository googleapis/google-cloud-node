[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dialogflow API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/dialogflow.svg)](https://www.npmjs.org/package/@google-cloud/dialogflow)

Dialogflow API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Dialogflow API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/dialogflow/latest)


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
1.  [Enable the Dialogflow API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/dialogflow
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.delete_agent.js) |
| export agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.export_agent.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.get_agent.js) |
| get validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.get_validation_result.js) |
| import agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.import_agent.js) |
| restore agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.restore_agent.js) |
| search agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.search_agents.js) |
| set agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.set_agent.js) |
| train agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/agents.train_agent.js) |
| list answer records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/answer_records.list_answer_records.js) |
| update answer record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/answer_records.update_answer_record.js) |
| create context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.create_context.js) |
| delete all contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.delete_all_contexts.js) |
| delete context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.delete_context.js) |
| get context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.get_context.js) |
| list contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.list_contexts.js) |
| update context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/contexts.update_context.js) |
| create conversation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_datasets.create_conversation_dataset.js) |
| delete conversation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_datasets.delete_conversation_dataset.js) |
| get conversation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_datasets.get_conversation_dataset.js) |
| import conversation data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_datasets.import_conversation_data.js) |
| list conversation datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_datasets.list_conversation_datasets.js) |
| create conversation model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.create_conversation_model.js) |
| create conversation model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.create_conversation_model_evaluation.js) |
| delete conversation model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.delete_conversation_model.js) |
| deploy conversation model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.deploy_conversation_model.js) |
| get conversation model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.get_conversation_model.js) |
| get conversation model evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.get_conversation_model_evaluation.js) |
| list conversation model evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.list_conversation_model_evaluations.js) |
| list conversation models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.list_conversation_models.js) |
| undeploy conversation model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_models.undeploy_conversation_model.js) |
| clear suggestion feature config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.clear_suggestion_feature_config.js) |
| create conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.create_conversation_profile.js) |
| delete conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.delete_conversation_profile.js) |
| get conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.get_conversation_profile.js) |
| list conversation profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.list_conversation_profiles.js) |
| set suggestion feature config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.set_suggestion_feature_config.js) |
| update conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversation_profiles.update_conversation_profile.js) |
| complete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.complete_conversation.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.create_conversation.js) |
| generate stateless suggestion | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.generate_stateless_suggestion.js) |
| generate stateless summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.generate_stateless_summary.js) |
| generate suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.generate_suggestions.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.get_conversation.js) |
| ingest context references | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.ingest_context_references.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.list_conversations.js) |
| list messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.list_messages.js) |
| search knowledge | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.search_knowledge.js) |
| suggest conversation summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/conversations.suggest_conversation_summary.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.create_document.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.delete_document.js) |
| export document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.export_document.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.get_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.list_documents.js) |
| reload document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.reload_document.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/documents.update_document.js) |
| get encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/encryption_spec_service.get_encryption_spec.js) |
| initialize encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/encryption_spec_service.initialize_encryption_spec.js) |
| batch create entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.batch_create_entities.js) |
| batch delete entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.batch_delete_entities.js) |
| batch delete entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.batch_delete_entity_types.js) |
| batch update entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.batch_update_entities.js) |
| batch update entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.batch_update_entity_types.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.create_entity_type.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.delete_entity_type.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.get_entity_type.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.list_entity_types.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/entity_types.update_entity_type.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.create_environment.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.delete_environment.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.get_environment.js) |
| get environment history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.get_environment_history.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.list_environments.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/environments.update_environment.js) |
| get fulfillment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/fulfillments.get_fulfillment.js) |
| update fulfillment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/fulfillments.update_fulfillment.js) |
| create generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/generators.create_generator.js) |
| delete generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/generators.delete_generator.js) |
| get generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/generators.get_generator.js) |
| list generators | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/generators.list_generators.js) |
| update generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/generators.update_generator.js) |
| batch delete intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.batch_delete_intents.js) |
| batch update intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.batch_update_intents.js) |
| create intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.create_intent.js) |
| delete intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.delete_intent.js) |
| get intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.get_intent.js) |
| list intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.list_intents.js) |
| update intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/intents.update_intent.js) |
| create knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/knowledge_bases.create_knowledge_base.js) |
| delete knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/knowledge_bases.delete_knowledge_base.js) |
| get knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/knowledge_bases.get_knowledge_base.js) |
| list knowledge bases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/knowledge_bases.list_knowledge_bases.js) |
| update knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/knowledge_bases.update_knowledge_base.js) |
| analyze content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.analyze_content.js) |
| create participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.create_participant.js) |
| get participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.get_participant.js) |
| list participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.list_participants.js) |
| streaming analyze content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.streaming_analyze_content.js) |
| suggest articles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.suggest_articles.js) |
| suggest faq answers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.suggest_faq_answers.js) |
| suggest knowledge assist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.suggest_knowledge_assist.js) |
| suggest smart replies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.suggest_smart_replies.js) |
| update participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/participants.update_participant.js) |
| create session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/session_entity_types.create_session_entity_type.js) |
| delete session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/session_entity_types.delete_session_entity_type.js) |
| get session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/session_entity_types.get_session_entity_type.js) |
| list session entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/session_entity_types.list_session_entity_types.js) |
| update session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/session_entity_types.update_session_entity_type.js) |
| detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/sessions.detect_intent.js) |
| streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/sessions.streaming_detect_intent.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/snippet_metadata_google.cloud.dialogflow.v2.json) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/versions.create_version.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/versions.delete_version.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/versions.get_version.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/versions.list_versions.js) |
| update version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2/versions.update_version.js) |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.delete_agent.js) |
| export agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.export_agent.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.get_agent.js) |
| get validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.get_validation_result.js) |
| import agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.import_agent.js) |
| restore agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.restore_agent.js) |
| search agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.search_agents.js) |
| set agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.set_agent.js) |
| train agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/agents.train_agent.js) |
| get answer record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/answer_records.get_answer_record.js) |
| list answer records | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/answer_records.list_answer_records.js) |
| update answer record | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/answer_records.update_answer_record.js) |
| create context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.create_context.js) |
| delete all contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.delete_all_contexts.js) |
| delete context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.delete_context.js) |
| get context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.get_context.js) |
| list contexts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.list_contexts.js) |
| update context | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/contexts.update_context.js) |
| clear suggestion feature config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.clear_suggestion_feature_config.js) |
| create conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.create_conversation_profile.js) |
| delete conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.delete_conversation_profile.js) |
| get conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.get_conversation_profile.js) |
| list conversation profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.list_conversation_profiles.js) |
| set suggestion feature config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.set_suggestion_feature_config.js) |
| update conversation profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversation_profiles.update_conversation_profile.js) |
| batch create messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.batch_create_messages.js) |
| complete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.complete_conversation.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.create_conversation.js) |
| generate stateless suggestion | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.generate_stateless_suggestion.js) |
| generate stateless summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.generate_stateless_summary.js) |
| generate suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.generate_suggestions.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.get_conversation.js) |
| ingest context references | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.ingest_context_references.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.list_conversations.js) |
| list messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.list_messages.js) |
| search knowledge | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.search_knowledge.js) |
| suggest conversation summary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/conversations.suggest_conversation_summary.js) |
| create document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.create_document.js) |
| delete document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.delete_document.js) |
| get document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.get_document.js) |
| import documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.import_documents.js) |
| list documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.list_documents.js) |
| reload document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.reload_document.js) |
| update document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/documents.update_document.js) |
| get encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/encryption_spec_service.get_encryption_spec.js) |
| initialize encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/encryption_spec_service.initialize_encryption_spec.js) |
| batch create entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.batch_create_entities.js) |
| batch delete entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.batch_delete_entities.js) |
| batch delete entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.batch_delete_entity_types.js) |
| batch update entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.batch_update_entities.js) |
| batch update entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.batch_update_entity_types.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.create_entity_type.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.delete_entity_type.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.get_entity_type.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.list_entity_types.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/entity_types.update_entity_type.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.create_environment.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.delete_environment.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.get_environment.js) |
| get environment history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.get_environment_history.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.list_environments.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/environments.update_environment.js) |
| get fulfillment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/fulfillments.get_fulfillment.js) |
| update fulfillment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/fulfillments.update_fulfillment.js) |
| create generator evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generator_evaluations.create_generator_evaluation.js) |
| delete generator evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generator_evaluations.delete_generator_evaluation.js) |
| get generator evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generator_evaluations.get_generator_evaluation.js) |
| list generator evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generator_evaluations.list_generator_evaluations.js) |
| create generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generators.create_generator.js) |
| delete generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generators.delete_generator.js) |
| get generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generators.get_generator.js) |
| list generators | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generators.list_generators.js) |
| update generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/generators.update_generator.js) |
| batch delete intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.batch_delete_intents.js) |
| batch update intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.batch_update_intents.js) |
| create intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.create_intent.js) |
| delete intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.delete_intent.js) |
| get intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.get_intent.js) |
| list intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.list_intents.js) |
| update intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/intents.update_intent.js) |
| create knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/knowledge_bases.create_knowledge_base.js) |
| delete knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/knowledge_bases.delete_knowledge_base.js) |
| get knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/knowledge_bases.get_knowledge_base.js) |
| list knowledge bases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/knowledge_bases.list_knowledge_bases.js) |
| update knowledge base | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/knowledge_bases.update_knowledge_base.js) |
| analyze content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.analyze_content.js) |
| bidi streaming analyze content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.bidi_streaming_analyze_content.js) |
| compile suggestion | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.compile_suggestion.js) |
| create participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.create_participant.js) |
| get participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.get_participant.js) |
| list participants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.list_participants.js) |
| list suggestions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.list_suggestions.js) |
| streaming analyze content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.streaming_analyze_content.js) |
| suggest articles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.suggest_articles.js) |
| suggest faq answers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.suggest_faq_answers.js) |
| suggest knowledge assist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.suggest_knowledge_assist.js) |
| suggest smart replies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.suggest_smart_replies.js) |
| update participant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/participants.update_participant.js) |
| delete phone number | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/phone_numbers.delete_phone_number.js) |
| list phone numbers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/phone_numbers.list_phone_numbers.js) |
| undelete phone number | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/phone_numbers.undelete_phone_number.js) |
| update phone number | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/phone_numbers.update_phone_number.js) |
| create session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/session_entity_types.create_session_entity_type.js) |
| delete session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/session_entity_types.delete_session_entity_type.js) |
| get session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/session_entity_types.get_session_entity_type.js) |
| list session entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/session_entity_types.list_session_entity_types.js) |
| update session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/session_entity_types.update_session_entity_type.js) |
| detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sessions.detect_intent.js) |
| streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sessions.streaming_detect_intent.js) |
| create sip trunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sip_trunks.create_sip_trunk.js) |
| delete sip trunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sip_trunks.delete_sip_trunk.js) |
| get sip trunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sip_trunks.get_sip_trunk.js) |
| list sip trunks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sip_trunks.list_sip_trunks.js) |
| update sip trunk | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/sip_trunks.update_sip_trunk.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/snippet_metadata_google.cloud.dialogflow.v2beta1.json) |
| create tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/tools.create_tool.js) |
| delete tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/tools.delete_tool.js) |
| get tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/tools.get_tool.js) |
| list tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/tools.list_tools.js) |
| update tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/tools.update_tool.js) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/versions.create_version.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/versions.delete_version.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/versions.get_version.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/versions.list_versions.js) |
| update version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples/generated/v2beta1/versions.update_version.js) |


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
For example, `npm install @google-cloud/dialogflow@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow
