[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dialogflow API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/dialogflow-cx.svg)](https://www.npmjs.org/package/@google-cloud/dialogflow-cx)

Dialogflow API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Dialogflow API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/cx/latest)


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
npm install @google-cloud/dialogflow-cx
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.create_agent.js) |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.delete_agent.js) |
| export agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.export_agent.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.get_agent.js) |
| get agent validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.get_agent_validation_result.js) |
| get generative settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.get_generative_settings.js) |
| list agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.list_agents.js) |
| restore agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.restore_agent.js) |
| update agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.update_agent.js) |
| update generative settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.update_generative_settings.js) |
| validate agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/agents.validate_agent.js) |
| get changelog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/changelogs.get_changelog.js) |
| list changelogs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/changelogs.list_changelogs.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/deployments.get_deployment.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/deployments.list_deployments.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.create_entity_type.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.delete_entity_type.js) |
| export entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.export_entity_types.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.get_entity_type.js) |
| import entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.import_entity_types.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.list_entity_types.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/entity_types.update_entity_type.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.create_environment.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.delete_environment.js) |
| deploy flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.deploy_flow.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.get_environment.js) |
| list continuous test results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.list_continuous_test_results.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.list_environments.js) |
| lookup environment history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.lookup_environment_history.js) |
| run continuous test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.run_continuous_test.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/environments.update_environment.js) |
| create experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.create_experiment.js) |
| delete experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.delete_experiment.js) |
| get experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.get_experiment.js) |
| list experiments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.list_experiments.js) |
| start experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.start_experiment.js) |
| stop experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.stop_experiment.js) |
| update experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/experiments.update_experiment.js) |
| create flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.create_flow.js) |
| delete flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.delete_flow.js) |
| export flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.export_flow.js) |
| get flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.get_flow.js) |
| get flow validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.get_flow_validation_result.js) |
| import flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.import_flow.js) |
| list flows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.list_flows.js) |
| train flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.train_flow.js) |
| update flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.update_flow.js) |
| validate flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/flows.validate_flow.js) |
| create generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/generators.create_generator.js) |
| delete generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/generators.delete_generator.js) |
| get generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/generators.get_generator.js) |
| list generators | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/generators.list_generators.js) |
| update generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/generators.update_generator.js) |
| create intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.create_intent.js) |
| delete intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.delete_intent.js) |
| export intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.export_intents.js) |
| get intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.get_intent.js) |
| import intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.import_intents.js) |
| list intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.list_intents.js) |
| update intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/intents.update_intent.js) |
| create page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/pages.create_page.js) |
| delete page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/pages.delete_page.js) |
| get page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/pages.get_page.js) |
| list pages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/pages.list_pages.js) |
| update page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/pages.update_page.js) |
| create security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/security_settings_service.create_security_settings.js) |
| delete security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/security_settings_service.delete_security_settings.js) |
| get security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/security_settings_service.get_security_settings.js) |
| list security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/security_settings_service.list_security_settings.js) |
| update security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/security_settings_service.update_security_settings.js) |
| create session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/session_entity_types.create_session_entity_type.js) |
| delete session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/session_entity_types.delete_session_entity_type.js) |
| get session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/session_entity_types.get_session_entity_type.js) |
| list session entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/session_entity_types.list_session_entity_types.js) |
| update session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/session_entity_types.update_session_entity_type.js) |
| detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.detect_intent.js) |
| fulfill intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.fulfill_intent.js) |
| match intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.match_intent.js) |
| server streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.server_streaming_detect_intent.js) |
| streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.streaming_detect_intent.js) |
| submit answer feedback | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/sessions.submit_answer_feedback.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/snippet_metadata_google.cloud.dialogflow.cx.v3.json) |
| batch delete test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.batch_delete_test_cases.js) |
| batch run test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.batch_run_test_cases.js) |
| calculate coverage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.calculate_coverage.js) |
| create test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.create_test_case.js) |
| export test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.export_test_cases.js) |
| get test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.get_test_case.js) |
| get test case result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.get_test_case_result.js) |
| import test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.import_test_cases.js) |
| list test case results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.list_test_case_results.js) |
| list test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.list_test_cases.js) |
| run test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.run_test_case.js) |
| update test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/test_cases.update_test_case.js) |
| create transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/transition_route_groups.create_transition_route_group.js) |
| delete transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/transition_route_groups.delete_transition_route_group.js) |
| get transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/transition_route_groups.get_transition_route_group.js) |
| list transition route groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/transition_route_groups.list_transition_route_groups.js) |
| update transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/transition_route_groups.update_transition_route_group.js) |
| compare versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.compare_versions.js) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.create_version.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.delete_version.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.get_version.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.list_versions.js) |
| load version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.load_version.js) |
| update version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/versions.update_version.js) |
| create webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/webhooks.create_webhook.js) |
| delete webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/webhooks.delete_webhook.js) |
| get webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/webhooks.get_webhook.js) |
| list webhooks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/webhooks.list_webhooks.js) |
| update webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3/webhooks.update_webhook.js) |
| create agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.create_agent.js) |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.delete_agent.js) |
| export agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.export_agent.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.get_agent.js) |
| get agent validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.get_agent_validation_result.js) |
| get generative settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.get_generative_settings.js) |
| list agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.list_agents.js) |
| restore agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.restore_agent.js) |
| update agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.update_agent.js) |
| update generative settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.update_generative_settings.js) |
| validate agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/agents.validate_agent.js) |
| get changelog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/changelogs.get_changelog.js) |
| list changelogs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/changelogs.list_changelogs.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/conversation_history.delete_conversation.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/conversation_history.get_conversation.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/conversation_history.list_conversations.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/deployments.get_deployment.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/deployments.list_deployments.js) |
| create entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.create_entity_type.js) |
| delete entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.delete_entity_type.js) |
| export entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.export_entity_types.js) |
| get entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.get_entity_type.js) |
| import entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.import_entity_types.js) |
| list entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.list_entity_types.js) |
| update entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/entity_types.update_entity_type.js) |
| create environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.create_environment.js) |
| delete environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.delete_environment.js) |
| deploy flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.deploy_flow.js) |
| get environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.get_environment.js) |
| list continuous test results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.list_continuous_test_results.js) |
| list environments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.list_environments.js) |
| lookup environment history | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.lookup_environment_history.js) |
| run continuous test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.run_continuous_test.js) |
| update environment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/environments.update_environment.js) |
| create example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/examples.create_example.js) |
| delete example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/examples.delete_example.js) |
| get example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/examples.get_example.js) |
| list examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/examples.list_examples.js) |
| update example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/examples.update_example.js) |
| create experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.create_experiment.js) |
| delete experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.delete_experiment.js) |
| get experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.get_experiment.js) |
| list experiments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.list_experiments.js) |
| start experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.start_experiment.js) |
| stop experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.stop_experiment.js) |
| update experiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/experiments.update_experiment.js) |
| create flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.create_flow.js) |
| delete flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.delete_flow.js) |
| export flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.export_flow.js) |
| get flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.get_flow.js) |
| get flow validation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.get_flow_validation_result.js) |
| import flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.import_flow.js) |
| list flows | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.list_flows.js) |
| train flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.train_flow.js) |
| update flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.update_flow.js) |
| validate flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/flows.validate_flow.js) |
| create generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/generators.create_generator.js) |
| delete generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/generators.delete_generator.js) |
| get generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/generators.get_generator.js) |
| list generators | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/generators.list_generators.js) |
| update generator | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/generators.update_generator.js) |
| create intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.create_intent.js) |
| delete intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.delete_intent.js) |
| export intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.export_intents.js) |
| get intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.get_intent.js) |
| import intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.import_intents.js) |
| list intents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.list_intents.js) |
| update intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/intents.update_intent.js) |
| create page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/pages.create_page.js) |
| delete page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/pages.delete_page.js) |
| get page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/pages.get_page.js) |
| list pages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/pages.list_pages.js) |
| update page | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/pages.update_page.js) |
| create playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.create_playbook.js) |
| create playbook version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.create_playbook_version.js) |
| delete playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.delete_playbook.js) |
| delete playbook version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.delete_playbook_version.js) |
| export playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.export_playbook.js) |
| get playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.get_playbook.js) |
| get playbook version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.get_playbook_version.js) |
| import playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.import_playbook.js) |
| list playbook versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.list_playbook_versions.js) |
| list playbooks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.list_playbooks.js) |
| restore playbook version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.restore_playbook_version.js) |
| update playbook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/playbooks.update_playbook.js) |
| create security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/security_settings_service.create_security_settings.js) |
| delete security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/security_settings_service.delete_security_settings.js) |
| get security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/security_settings_service.get_security_settings.js) |
| list security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/security_settings_service.list_security_settings.js) |
| update security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/security_settings_service.update_security_settings.js) |
| create session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/session_entity_types.create_session_entity_type.js) |
| delete session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/session_entity_types.delete_session_entity_type.js) |
| get session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/session_entity_types.get_session_entity_type.js) |
| list session entity types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/session_entity_types.list_session_entity_types.js) |
| update session entity type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/session_entity_types.update_session_entity_type.js) |
| detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.detect_intent.js) |
| fulfill intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.fulfill_intent.js) |
| match intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.match_intent.js) |
| server streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.server_streaming_detect_intent.js) |
| streaming detect intent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.streaming_detect_intent.js) |
| submit answer feedback | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/sessions.submit_answer_feedback.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/snippet_metadata_google.cloud.dialogflow.cx.v3beta1.json) |
| batch delete test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.batch_delete_test_cases.js) |
| batch run test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.batch_run_test_cases.js) |
| calculate coverage | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.calculate_coverage.js) |
| create test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.create_test_case.js) |
| export test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.export_test_cases.js) |
| get test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.get_test_case.js) |
| get test case result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.get_test_case_result.js) |
| import test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.import_test_cases.js) |
| list test case results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.list_test_case_results.js) |
| list test cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.list_test_cases.js) |
| run test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.run_test_case.js) |
| update test case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/test_cases.update_test_case.js) |
| create tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.create_tool.js) |
| create tool version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.create_tool_version.js) |
| delete tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.delete_tool.js) |
| delete tool version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.delete_tool_version.js) |
| export tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.export_tools.js) |
| get tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.get_tool.js) |
| get tool version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.get_tool_version.js) |
| list tool versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.list_tool_versions.js) |
| list tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.list_tools.js) |
| restore tool version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.restore_tool_version.js) |
| update tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/tools.update_tool.js) |
| create transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/transition_route_groups.create_transition_route_group.js) |
| delete transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/transition_route_groups.delete_transition_route_group.js) |
| get transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/transition_route_groups.get_transition_route_group.js) |
| list transition route groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/transition_route_groups.list_transition_route_groups.js) |
| update transition route group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/transition_route_groups.update_transition_route_group.js) |
| compare versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.compare_versions.js) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.create_version.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.delete_version.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.get_version.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.list_versions.js) |
| load version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.load_version.js) |
| update version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/versions.update_version.js) |
| create webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/webhooks.create_webhook.js) |
| delete webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/webhooks.delete_webhook.js) |
| get webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/webhooks.get_webhook.js) |
| list webhooks | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/webhooks.list_webhooks.js) |
| update webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples/generated/v3beta1/webhooks.update_webhook.js) |


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
For example, `npm install @google-cloud/dialogflow-cx@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-dialogflow-cx
