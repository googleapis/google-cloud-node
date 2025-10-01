[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Contact Center AI Insights API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/contact-center-insights.svg)](https://www.npmjs.org/package/@google-cloud/contact-center-insights)

Contact Center AI Insights API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Contact Center AI Insights API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/contactcenterinsights/latest)


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
1.  [Enable the Contact Center AI Insights API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/contact-center-insights
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| bulk analyze conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_analyze_conversations.js) |
| bulk delete conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_delete_conversations.js) |
| bulk download feedback labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_download_feedback_labels.js) |
| bulk upload feedback labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.bulk_upload_feedback_labels.js) |
| calculate issue model stats | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js) |
| calculate stats | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.calculate_stats.js) |
| create analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis.js) |
| create analysis rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_analysis_rule.js) |
| create conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_conversation.js) |
| create feedback label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_feedback_label.js) |
| create issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_issue_model.js) |
| create phrase matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_phrase_matcher.js) |
| create qa question | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_question.js) |
| create qa scorecard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard.js) |
| create qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_qa_scorecard_revision.js) |
| create view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.create_view.js) |
| delete analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis.js) |
| delete analysis rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_analysis_rule.js) |
| delete conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_conversation.js) |
| delete feedback label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_feedback_label.js) |
| delete issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue.js) |
| delete issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_issue_model.js) |
| delete phrase matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js) |
| delete qa question | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_question.js) |
| delete qa scorecard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard.js) |
| delete qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_qa_scorecard_revision.js) |
| delete view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.delete_view.js) |
| deploy issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_issue_model.js) |
| deploy qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.deploy_qa_scorecard_revision.js) |
| export insights data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_insights_data.js) |
| export issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.export_issue_model.js) |
| get analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis.js) |
| get analysis rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_analysis_rule.js) |
| get conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_conversation.js) |
| get encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_encryption_spec.js) |
| get feedback label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_feedback_label.js) |
| get issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue.js) |
| get issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_issue_model.js) |
| get phrase matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_phrase_matcher.js) |
| get qa question | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_question.js) |
| get qa scorecard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard.js) |
| get qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_qa_scorecard_revision.js) |
| get settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_settings.js) |
| get view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.get_view.js) |
| import issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.import_issue_model.js) |
| ingest conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.ingest_conversations.js) |
| initialize encryption spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.initialize_encryption_spec.js) |
| list all feedback labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_all_feedback_labels.js) |
| list analyses | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analyses.js) |
| list analysis rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_analysis_rules.js) |
| list conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_conversations.js) |
| list feedback labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_feedback_labels.js) |
| list issue models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issue_models.js) |
| list issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_issues.js) |
| list phrase matchers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_phrase_matchers.js) |
| list qa questions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_questions.js) |
| list qa scorecard revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecard_revisions.js) |
| list qa scorecards | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_qa_scorecards.js) |
| list views | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.list_views.js) |
| query metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.query_metrics.js) |
| tune qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.tune_qa_scorecard_revision.js) |
| undeploy issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_issue_model.js) |
| undeploy qa scorecard revision | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.undeploy_qa_scorecard_revision.js) |
| update analysis rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_analysis_rule.js) |
| update conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_conversation.js) |
| update feedback label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_feedback_label.js) |
| update issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue.js) |
| update issue model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_issue_model.js) |
| update phrase matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_phrase_matcher.js) |
| update qa question | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_question.js) |
| update qa scorecard | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_qa_scorecard.js) |
| update settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_settings.js) |
| update view | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.update_view.js) |
| upload conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/contact_center_insights.upload_conversation.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples/generated/v1/snippet_metadata_google.cloud.contactcenterinsights.v1.json) |


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
For example, `npm install @google-cloud/contact-center-insights@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=contactcenterinsights.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contactcenterinsights
