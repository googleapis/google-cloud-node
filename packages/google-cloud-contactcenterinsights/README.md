[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Contact Center AI Insights API: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/contact-center-insights.svg)](https://www.npmjs.org/package/@google-cloud/contact-center-insights)




contactcenterinsights client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contactcenterinsights/CHANGELOG.md).

* [Contact Center AI Insights API Node.js Client API Reference][client-docs]
* [Contact Center AI Insights API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-contactcenterinsights](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contactcenterinsights)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Contact Center AI Insights API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/contact-center-insights
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {
  ContactCenterInsightsClient,
} = require('@google-cloud/contact-center-insights');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

const client = new ContactCenterInsightsClient();

//TODO(library generator): write the actual function you will be testing
async function listConversations() {
  const conversations = await client.listConversations({
    parent: `projects/${projectId}/locations/${location}`,
  });
  console.info(conversations);
}
listConversations();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Contact_center_insights.calculate_issue_model_stats | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.calculate_issue_model_stats.js,samples/README.md) |
| Contact_center_insights.calculate_stats | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.calculate_stats.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.calculate_stats.js,samples/README.md) |
| Contact_center_insights.create_analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_analysis.js,samples/README.md) |
| Contact_center_insights.create_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_conversation.js,samples/README.md) |
| Contact_center_insights.create_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_issue_model.js,samples/README.md) |
| Contact_center_insights.create_phrase_matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_phrase_matcher.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_phrase_matcher.js,samples/README.md) |
| Contact_center_insights.create_view | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_view.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.create_view.js,samples/README.md) |
| Contact_center_insights.delete_analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_analysis.js,samples/README.md) |
| Contact_center_insights.delete_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_conversation.js,samples/README.md) |
| Contact_center_insights.delete_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_issue_model.js,samples/README.md) |
| Contact_center_insights.delete_phrase_matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_phrase_matcher.js,samples/README.md) |
| Contact_center_insights.delete_view | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_view.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.delete_view.js,samples/README.md) |
| Contact_center_insights.deploy_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.deploy_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.deploy_issue_model.js,samples/README.md) |
| Contact_center_insights.export_insights_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.export_insights_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.export_insights_data.js,samples/README.md) |
| Contact_center_insights.get_analysis | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_analysis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_analysis.js,samples/README.md) |
| Contact_center_insights.get_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_conversation.js,samples/README.md) |
| Contact_center_insights.get_issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_issue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_issue.js,samples/README.md) |
| Contact_center_insights.get_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_issue_model.js,samples/README.md) |
| Contact_center_insights.get_phrase_matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_phrase_matcher.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_phrase_matcher.js,samples/README.md) |
| Contact_center_insights.get_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_settings.js,samples/README.md) |
| Contact_center_insights.get_view | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_view.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.get_view.js,samples/README.md) |
| Contact_center_insights.list_analyses | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_analyses.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_analyses.js,samples/README.md) |
| Contact_center_insights.list_conversations | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_conversations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_conversations.js,samples/README.md) |
| Contact_center_insights.list_issue_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_issue_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_issue_models.js,samples/README.md) |
| Contact_center_insights.list_issues | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_issues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_issues.js,samples/README.md) |
| Contact_center_insights.list_phrase_matchers | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_phrase_matchers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_phrase_matchers.js,samples/README.md) |
| Contact_center_insights.list_views | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_views.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.list_views.js,samples/README.md) |
| Contact_center_insights.undeploy_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.undeploy_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.undeploy_issue_model.js,samples/README.md) |
| Contact_center_insights.update_conversation | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_conversation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_conversation.js,samples/README.md) |
| Contact_center_insights.update_issue | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_issue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_issue.js,samples/README.md) |
| Contact_center_insights.update_issue_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_issue_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_issue_model.js,samples/README.md) |
| Contact_center_insights.update_phrase_matcher | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_phrase_matcher.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_phrase_matcher.js,samples/README.md) |
| Contact_center_insights.update_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_settings.js,samples/README.md) |
| Contact_center_insights.update_view | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_view.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/generated/v1/contact_center_insights.update_view.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/quickstart.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main//workspace/google-cloud-node/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=/workspace/google-cloud-node/samples/test/quickstart.js,samples/README.md) |



The [Contact Center AI Insights API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/contact-center-insights/latest
[product-docs]: https://cloud.google.com/solutions/contact-center
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=contactcenterinsights.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
