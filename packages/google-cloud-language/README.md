[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Natural Language: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-language)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/language.svg)](https://www.npmjs.org/package/@google-cloud/language)




Google Cloud Natural Language API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-language/CHANGELOG.md).

* [Natural Language Node.js Client API Reference][client-docs]
* [Natural Language Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-language](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-language)

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
1.  [Enable the Natural Language API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/language
```


### Using the client library

```javascript
async function quickstart() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-language/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Language_service.analyze_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.analyze_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.analyze_entities.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_entity_sentiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.analyze_entity_sentiment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.analyze_entity_sentiment.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_sentiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.analyze_sentiment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.analyze_sentiment.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_syntax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.analyze_syntax.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.analyze_syntax.js,packages/google-cloud-language/samples/README.md) |
| Language_service.annotate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.annotate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.annotate_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.classify_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.classify_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.classify_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.moderate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1/language_service.moderate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1/language_service.moderate_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_entities.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_entity_sentiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_entity_sentiment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_entity_sentiment.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_sentiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_sentiment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_sentiment.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_syntax | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_syntax.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.analyze_syntax.js,packages/google-cloud-language/samples/README.md) |
| Language_service.annotate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.annotate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.annotate_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.classify_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.classify_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.classify_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.moderate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v1beta2/language_service.moderate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v1beta2/language_service.moderate_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_entities | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v2/language_service.analyze_entities.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v2/language_service.analyze_entities.js,packages/google-cloud-language/samples/README.md) |
| Language_service.analyze_sentiment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v2/language_service.analyze_sentiment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v2/language_service.analyze_sentiment.js,packages/google-cloud-language/samples/README.md) |
| Language_service.annotate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v2/language_service.annotate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v2/language_service.annotate_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.classify_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v2/language_service.classify_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v2/language_service.classify_text.js,packages/google-cloud-language/samples/README.md) |
| Language_service.moderate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/generated/v2/language_service.moderate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/generated/v2/language_service.moderate_text.js,packages/google-cloud-language/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-language/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-language/samples/quickstart.js,packages/google-cloud-language/samples/README.md) |



The [Natural Language Node.js Client API Reference][client-docs] documentation
also contains samples.

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
For example, `npm install @google-cloud/language@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/language/latest
[product-docs]: https://cloud.google.com/natural-language/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=language.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
