[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Gemini Enterprise for Customer Experience API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/ces.svg)](https://www.npmjs.org/package/@google-cloud/ces)

Gemini Enterprise for Customer Experience API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Gemini Enterprise for Customer Experience API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/ces/latest)
* [Gemini Enterprise for Customer Experience API Documentation](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps)

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
1.  [Enable the Gemini Enterprise for Customer Experience API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/ces
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| batch delete conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.batch_delete_conversations.js) |
| create agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_agent.js) |
| create app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_app.js) |
| create app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_app_version.js) |
| create deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_deployment.js) |
| create example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_example.js) |
| create guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_guardrail.js) |
| create tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_tool.js) |
| create toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.create_toolset.js) |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_agent.js) |
| delete app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_app.js) |
| delete app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_app_version.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_conversation.js) |
| delete deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_deployment.js) |
| delete example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_example.js) |
| delete guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_guardrail.js) |
| delete tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_tool.js) |
| delete toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.delete_toolset.js) |
| export app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.export_app.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_agent.js) |
| get app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_app.js) |
| get app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_app_version.js) |
| get changelog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_changelog.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_conversation.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_deployment.js) |
| get example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_example.js) |
| get guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_guardrail.js) |
| get tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_tool.js) |
| get toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.get_toolset.js) |
| import app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.import_app.js) |
| list agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_agents.js) |
| list app versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_app_versions.js) |
| list apps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_apps.js) |
| list changelogs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_changelogs.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_conversations.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_deployments.js) |
| list examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_examples.js) |
| list guardrails | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_guardrails.js) |
| list tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_tools.js) |
| list toolsets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.list_toolsets.js) |
| restore app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.restore_app_version.js) |
| update agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_agent.js) |
| update app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_app.js) |
| update deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_deployment.js) |
| update example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_example.js) |
| update guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_guardrail.js) |
| update tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_tool.js) |
| update toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/agent_service.update_toolset.js) |
| bidi run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/session_service.bidi_run_session.js) |
| run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/session_service.run_session.js) |
| stream run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/session_service.stream_run_session.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/snippet_metadata_google.cloud.ces.v1.json) |
| execute tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/tool_service.execute_tool.js) |
| retrieve tool schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/tool_service.retrieve_tool_schema.js) |
| retrieve tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/tool_service.retrieve_tools.js) |
| generate chat token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1/widget_service.generate_chat_token.js) |
| batch delete conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.batch_delete_conversations.js) |
| create agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_agent.js) |
| create app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_app.js) |
| create app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_app_version.js) |
| create deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_deployment.js) |
| create example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_example.js) |
| create guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_guardrail.js) |
| create tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_tool.js) |
| create toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.create_toolset.js) |
| delete agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_agent.js) |
| delete app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_app.js) |
| delete app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_app_version.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_conversation.js) |
| delete deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_deployment.js) |
| delete example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_example.js) |
| delete guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_guardrail.js) |
| delete tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_tool.js) |
| delete toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.delete_toolset.js) |
| export app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.export_app.js) |
| generate app resource | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.generate_app_resource.js) |
| get agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_agent.js) |
| get app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_app.js) |
| get app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_app_version.js) |
| get changelog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_changelog.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_conversation.js) |
| get deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_deployment.js) |
| get example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_example.js) |
| get guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_guardrail.js) |
| get security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_security_settings.js) |
| get tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_tool.js) |
| get toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.get_toolset.js) |
| import app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.import_app.js) |
| list agents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_agents.js) |
| list app versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_app_versions.js) |
| list apps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_apps.js) |
| list changelogs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_changelogs.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_conversations.js) |
| list deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_deployments.js) |
| list examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_examples.js) |
| list guardrails | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_guardrails.js) |
| list tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_tools.js) |
| list toolsets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.list_toolsets.js) |
| restore app version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.restore_app_version.js) |
| update agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_agent.js) |
| update app | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_app.js) |
| update deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_deployment.js) |
| update example | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_example.js) |
| update guardrail | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_guardrail.js) |
| update security settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_security_settings.js) |
| update tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_tool.js) |
| update toolset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/agent_service.update_toolset.js) |
| create evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.create_evaluation.js) |
| create evaluation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.create_evaluation_dataset.js) |
| create evaluation expectation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.create_evaluation_expectation.js) |
| create scheduled evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.create_scheduled_evaluation_run.js) |
| delete evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_evaluation.js) |
| delete evaluation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_evaluation_dataset.js) |
| delete evaluation expectation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_evaluation_expectation.js) |
| delete evaluation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_evaluation_result.js) |
| delete evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_evaluation_run.js) |
| delete scheduled evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.delete_scheduled_evaluation_run.js) |
| generate evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.generate_evaluation.js) |
| get evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_evaluation.js) |
| get evaluation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_evaluation_dataset.js) |
| get evaluation expectation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_evaluation_expectation.js) |
| get evaluation result | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_evaluation_result.js) |
| get evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_evaluation_run.js) |
| get scheduled evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.get_scheduled_evaluation_run.js) |
| import evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.import_evaluations.js) |
| list evaluation datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_evaluation_datasets.js) |
| list evaluation expectations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_evaluation_expectations.js) |
| list evaluation results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_evaluation_results.js) |
| list evaluation runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_evaluation_runs.js) |
| list evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_evaluations.js) |
| list scheduled evaluation runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.list_scheduled_evaluation_runs.js) |
| run evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.run_evaluation.js) |
| test persona voice | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.test_persona_voice.js) |
| update evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.update_evaluation.js) |
| update evaluation dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.update_evaluation_dataset.js) |
| update evaluation expectation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.update_evaluation_expectation.js) |
| update scheduled evaluation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.update_scheduled_evaluation_run.js) |
| upload evaluation audio | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/evaluation_service.upload_evaluation_audio.js) |
| bidi run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/session_service.bidi_run_session.js) |
| run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/session_service.run_session.js) |
| stream run session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/session_service.stream_run_session.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/snippet_metadata_google.cloud.ces.v1beta.json) |
| execute tool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/tool_service.execute_tool.js) |
| retrieve tool schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/tool_service.retrieve_tool_schema.js) |
| retrieve tools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/tool_service.retrieve_tools.js) |
| generate chat token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples/generated/v1beta/widget_service.generate_chat_token.js) |


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
For example, `npm install @google-cloud/ces@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=ces.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-ces
