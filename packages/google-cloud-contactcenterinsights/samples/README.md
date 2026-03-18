[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Contact Center AI Insights API: Node.js Samples](https://github.com/googleapis/google-cloud-node)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Contact_center_insights.bulk_analyze_conversations](#contact_center_insights.bulk_analyze_conversations)
  * [Contact_center_insights.bulk_delete_conversations](#contact_center_insights.bulk_delete_conversations)
  * [Contact_center_insights.bulk_download_feedback_labels](#contact_center_insights.bulk_download_feedback_labels)
  * [Contact_center_insights.bulk_upload_feedback_labels](#contact_center_insights.bulk_upload_feedback_labels)
  * [Contact_center_insights.calculate_issue_model_stats](#contact_center_insights.calculate_issue_model_stats)
  * [Contact_center_insights.calculate_stats](#contact_center_insights.calculate_stats)
  * [Contact_center_insights.create_analysis](#contact_center_insights.create_analysis)
  * [Contact_center_insights.create_analysis_rule](#contact_center_insights.create_analysis_rule)
  * [Contact_center_insights.create_conversation](#contact_center_insights.create_conversation)
  * [Contact_center_insights.create_feedback_label](#contact_center_insights.create_feedback_label)
  * [Contact_center_insights.create_issue_model](#contact_center_insights.create_issue_model)
  * [Contact_center_insights.create_phrase_matcher](#contact_center_insights.create_phrase_matcher)
  * [Contact_center_insights.create_qa_question](#contact_center_insights.create_qa_question)
  * [Contact_center_insights.create_qa_scorecard](#contact_center_insights.create_qa_scorecard)
  * [Contact_center_insights.create_qa_scorecard_revision](#contact_center_insights.create_qa_scorecard_revision)
  * [Contact_center_insights.create_view](#contact_center_insights.create_view)
  * [Contact_center_insights.delete_analysis](#contact_center_insights.delete_analysis)
  * [Contact_center_insights.delete_analysis_rule](#contact_center_insights.delete_analysis_rule)
  * [Contact_center_insights.delete_conversation](#contact_center_insights.delete_conversation)
  * [Contact_center_insights.delete_feedback_label](#contact_center_insights.delete_feedback_label)
  * [Contact_center_insights.delete_issue](#contact_center_insights.delete_issue)
  * [Contact_center_insights.delete_issue_model](#contact_center_insights.delete_issue_model)
  * [Contact_center_insights.delete_phrase_matcher](#contact_center_insights.delete_phrase_matcher)
  * [Contact_center_insights.delete_qa_question](#contact_center_insights.delete_qa_question)
  * [Contact_center_insights.delete_qa_scorecard](#contact_center_insights.delete_qa_scorecard)
  * [Contact_center_insights.delete_qa_scorecard_revision](#contact_center_insights.delete_qa_scorecard_revision)
  * [Contact_center_insights.delete_view](#contact_center_insights.delete_view)
  * [Contact_center_insights.deploy_issue_model](#contact_center_insights.deploy_issue_model)
  * [Contact_center_insights.deploy_qa_scorecard_revision](#contact_center_insights.deploy_qa_scorecard_revision)
  * [Contact_center_insights.export_insights_data](#contact_center_insights.export_insights_data)
  * [Contact_center_insights.export_issue_model](#contact_center_insights.export_issue_model)
  * [Contact_center_insights.get_analysis](#contact_center_insights.get_analysis)
  * [Contact_center_insights.get_analysis_rule](#contact_center_insights.get_analysis_rule)
  * [Contact_center_insights.get_conversation](#contact_center_insights.get_conversation)
  * [Contact_center_insights.get_encryption_spec](#contact_center_insights.get_encryption_spec)
  * [Contact_center_insights.get_feedback_label](#contact_center_insights.get_feedback_label)
  * [Contact_center_insights.get_issue](#contact_center_insights.get_issue)
  * [Contact_center_insights.get_issue_model](#contact_center_insights.get_issue_model)
  * [Contact_center_insights.get_phrase_matcher](#contact_center_insights.get_phrase_matcher)
  * [Contact_center_insights.get_qa_question](#contact_center_insights.get_qa_question)
  * [Contact_center_insights.get_qa_scorecard](#contact_center_insights.get_qa_scorecard)
  * [Contact_center_insights.get_qa_scorecard_revision](#contact_center_insights.get_qa_scorecard_revision)
  * [Contact_center_insights.get_settings](#contact_center_insights.get_settings)
  * [Contact_center_insights.get_view](#contact_center_insights.get_view)
  * [Contact_center_insights.import_issue_model](#contact_center_insights.import_issue_model)
  * [Contact_center_insights.ingest_conversations](#contact_center_insights.ingest_conversations)
  * [Contact_center_insights.initialize_encryption_spec](#contact_center_insights.initialize_encryption_spec)
  * [Contact_center_insights.list_all_feedback_labels](#contact_center_insights.list_all_feedback_labels)
  * [Contact_center_insights.list_analyses](#contact_center_insights.list_analyses)
  * [Contact_center_insights.list_analysis_rules](#contact_center_insights.list_analysis_rules)
  * [Contact_center_insights.list_conversations](#contact_center_insights.list_conversations)
  * [Contact_center_insights.list_feedback_labels](#contact_center_insights.list_feedback_labels)
  * [Contact_center_insights.list_issue_models](#contact_center_insights.list_issue_models)
  * [Contact_center_insights.list_issues](#contact_center_insights.list_issues)
  * [Contact_center_insights.list_phrase_matchers](#contact_center_insights.list_phrase_matchers)
  * [Contact_center_insights.list_qa_questions](#contact_center_insights.list_qa_questions)
  * [Contact_center_insights.list_qa_scorecard_revisions](#contact_center_insights.list_qa_scorecard_revisions)
  * [Contact_center_insights.list_qa_scorecards](#contact_center_insights.list_qa_scorecards)
  * [Contact_center_insights.list_views](#contact_center_insights.list_views)
  * [Contact_center_insights.query_metrics](#contact_center_insights.query_metrics)
  * [Contact_center_insights.tune_qa_scorecard_revision](#contact_center_insights.tune_qa_scorecard_revision)
  * [Contact_center_insights.undeploy_issue_model](#contact_center_insights.undeploy_issue_model)
  * [Contact_center_insights.undeploy_qa_scorecard_revision](#contact_center_insights.undeploy_qa_scorecard_revision)
  * [Contact_center_insights.update_analysis_rule](#contact_center_insights.update_analysis_rule)
  * [Contact_center_insights.update_conversation](#contact_center_insights.update_conversation)
  * [Contact_center_insights.update_feedback_label](#contact_center_insights.update_feedback_label)
  * [Contact_center_insights.update_issue](#contact_center_insights.update_issue)
  * [Contact_center_insights.update_issue_model](#contact_center_insights.update_issue_model)
  * [Contact_center_insights.update_phrase_matcher](#contact_center_insights.update_phrase_matcher)
  * [Contact_center_insights.update_qa_question](#contact_center_insights.update_qa_question)
  * [Contact_center_insights.update_qa_scorecard](#contact_center_insights.update_qa_scorecard)
  * [Contact_center_insights.update_settings](#contact_center_insights.update_settings)
  * [Contact_center_insights.update_view](#contact_center_insights.update_view)
  * [Contact_center_insights.upload_conversation](#contact_center_insights.upload_conversation)
  * [Quickstart](#quickstart)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/google-cloud-node#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Contact_center_insights.bulk_analyze_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_analyze_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_analyze_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_analyze_conversations.js`


-----




### Contact_center_insights.bulk_delete_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_delete_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_delete_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_delete_conversations.js`


-----




### Contact_center_insights.bulk_download_feedback_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_download_feedback_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_download_feedback_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_download_feedback_labels.js`


-----




### Contact_center_insights.bulk_upload_feedback_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_upload_feedback_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_upload_feedback_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_upload_feedback_labels.js`


-----




### Contact_center_insights.calculate_issue_model_stats

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js`


-----




### Contact_center_insights.calculate_stats

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_stats.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_stats.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_stats.js`


-----




### Contact_center_insights.create_analysis

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis.js`


-----




### Contact_center_insights.create_analysis_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis_rule.js`


-----




### Contact_center_insights.create_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_conversation.js`


-----




### Contact_center_insights.create_feedback_label

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_feedback_label.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_feedback_label.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_feedback_label.js`


-----




### Contact_center_insights.create_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_issue_model.js`


-----




### Contact_center_insights.create_phrase_matcher

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_phrase_matcher.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_phrase_matcher.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_phrase_matcher.js`


-----




### Contact_center_insights.create_qa_question

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_question.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_question.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_question.js`


-----




### Contact_center_insights.create_qa_scorecard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard.js`


-----




### Contact_center_insights.create_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard_revision.js`


-----




### Contact_center_insights.create_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_view.js`


-----




### Contact_center_insights.delete_analysis

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis.js`


-----




### Contact_center_insights.delete_analysis_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis_rule.js`


-----




### Contact_center_insights.delete_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_conversation.js`


-----




### Contact_center_insights.delete_feedback_label

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_feedback_label.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_feedback_label.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_feedback_label.js`


-----




### Contact_center_insights.delete_issue

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue.js`


-----




### Contact_center_insights.delete_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue_model.js`


-----




### Contact_center_insights.delete_phrase_matcher

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js`


-----




### Contact_center_insights.delete_qa_question

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_question.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_question.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_question.js`


-----




### Contact_center_insights.delete_qa_scorecard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard.js`


-----




### Contact_center_insights.delete_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard_revision.js`


-----




### Contact_center_insights.delete_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_view.js`


-----




### Contact_center_insights.deploy_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_issue_model.js`


-----




### Contact_center_insights.deploy_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_qa_scorecard_revision.js`


-----




### Contact_center_insights.export_insights_data

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_insights_data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_insights_data.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_insights_data.js`


-----




### Contact_center_insights.export_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_issue_model.js`


-----




### Contact_center_insights.get_analysis

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis.js`


-----




### Contact_center_insights.get_analysis_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis_rule.js`


-----




### Contact_center_insights.get_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_conversation.js`


-----




### Contact_center_insights.get_encryption_spec

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_encryption_spec.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_encryption_spec.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_encryption_spec.js`


-----




### Contact_center_insights.get_feedback_label

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_feedback_label.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_feedback_label.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_feedback_label.js`


-----




### Contact_center_insights.get_issue

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue.js`


-----




### Contact_center_insights.get_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue_model.js`


-----




### Contact_center_insights.get_phrase_matcher

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_phrase_matcher.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_phrase_matcher.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_phrase_matcher.js`


-----




### Contact_center_insights.get_qa_question

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_question.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_question.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_question.js`


-----




### Contact_center_insights.get_qa_scorecard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard.js`


-----




### Contact_center_insights.get_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard_revision.js`


-----




### Contact_center_insights.get_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_settings.js`


-----




### Contact_center_insights.get_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_view.js`


-----




### Contact_center_insights.import_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.import_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.import_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.import_issue_model.js`


-----




### Contact_center_insights.ingest_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.ingest_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.ingest_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.ingest_conversations.js`


-----




### Contact_center_insights.initialize_encryption_spec

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.initialize_encryption_spec.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.initialize_encryption_spec.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.initialize_encryption_spec.js`


-----




### Contact_center_insights.list_all_feedback_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_all_feedback_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_all_feedback_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_all_feedback_labels.js`


-----




### Contact_center_insights.list_analyses

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analyses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analyses.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analyses.js`


-----




### Contact_center_insights.list_analysis_rules

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analysis_rules.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analysis_rules.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analysis_rules.js`


-----




### Contact_center_insights.list_conversations

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_conversations.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_conversations.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_conversations.js`


-----




### Contact_center_insights.list_feedback_labels

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_feedback_labels.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_feedback_labels.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_feedback_labels.js`


-----




### Contact_center_insights.list_issue_models

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issue_models.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issue_models.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issue_models.js`


-----




### Contact_center_insights.list_issues

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issues.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issues.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issues.js`


-----




### Contact_center_insights.list_phrase_matchers

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_phrase_matchers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_phrase_matchers.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_phrase_matchers.js`


-----




### Contact_center_insights.list_qa_questions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_questions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_questions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_questions.js`


-----




### Contact_center_insights.list_qa_scorecard_revisions

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecard_revisions.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecard_revisions.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecard_revisions.js`


-----




### Contact_center_insights.list_qa_scorecards

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecards.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecards.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecards.js`


-----




### Contact_center_insights.list_views

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_views.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_views.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_views.js`


-----




### Contact_center_insights.query_metrics

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.query_metrics.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.query_metrics.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.query_metrics.js`


-----




### Contact_center_insights.tune_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.tune_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.tune_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.tune_qa_scorecard_revision.js`


-----




### Contact_center_insights.undeploy_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_issue_model.js`


-----




### Contact_center_insights.undeploy_qa_scorecard_revision

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_qa_scorecard_revision.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_qa_scorecard_revision.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_qa_scorecard_revision.js`


-----




### Contact_center_insights.update_analysis_rule

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_analysis_rule.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_analysis_rule.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_analysis_rule.js`


-----




### Contact_center_insights.update_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_conversation.js`


-----




### Contact_center_insights.update_feedback_label

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_feedback_label.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_feedback_label.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_feedback_label.js`


-----




### Contact_center_insights.update_issue

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue.js`


-----




### Contact_center_insights.update_issue_model

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue_model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue_model.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue_model.js`


-----




### Contact_center_insights.update_phrase_matcher

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_phrase_matcher.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_phrase_matcher.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_phrase_matcher.js`


-----




### Contact_center_insights.update_qa_question

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_question.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_question.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_question.js`


-----




### Contact_center_insights.update_qa_scorecard

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_scorecard.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_scorecard.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_scorecard.js`


-----




### Contact_center_insights.update_settings

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_settings.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_settings.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_settings.js`


-----




### Contact_center_insights.update_view

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_view.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_view.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_view.js`


-----




### Contact_center_insights.upload_conversation

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.upload_conversation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.upload_conversation.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.upload_conversation.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contactcenterinsights/samples/quickstart.js,samples/README.md)

__Usage:__


`node packages/google-cloud-contactcenterinsights/samples/quickstart.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/solutions/contact-center
