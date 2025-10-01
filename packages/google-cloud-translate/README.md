[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Translation API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/translate.svg)](https://www.npmjs.org/package/@google-cloud/translate)

Cloud Translation API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Translation API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/translation/latest)


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
1.  [Enable the Cloud Translation API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/translate
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/snippet_metadata_google.cloud.translation.v3.json) |
| adaptive mt translate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.adaptive_mt_translate.js) |
| batch translate document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_document.js) |
| batch translate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_text.js) |
| create adaptive mt dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_adaptive_mt_dataset.js) |
| create dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_dataset.js) |
| create glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary.js) |
| create glossary entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary_entry.js) |
| create model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_model.js) |
| delete adaptive mt dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_dataset.js) |
| delete adaptive mt file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_file.js) |
| delete dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_dataset.js) |
| delete glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary.js) |
| delete glossary entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary_entry.js) |
| delete model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_model.js) |
| detect language | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.detect_language.js) |
| export data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.export_data.js) |
| get adaptive mt dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_dataset.js) |
| get adaptive mt file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_file.js) |
| get dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_dataset.js) |
| get glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary.js) |
| get glossary entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary_entry.js) |
| get model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_model.js) |
| get supported languages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_supported_languages.js) |
| import adaptive mt file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.import_adaptive_mt_file.js) |
| import data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.import_data.js) |
| list adaptive mt datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_datasets.js) |
| list adaptive mt files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_files.js) |
| list adaptive mt sentences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_sentences.js) |
| list datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_datasets.js) |
| list examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_examples.js) |
| list glossaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossaries.js) |
| list glossary entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossary_entries.js) |
| list models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_models.js) |
| romanize text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.romanize_text.js) |
| translate document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.translate_document.js) |
| translate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.translate_text.js) |
| update glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary.js) |
| update glossary entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary_entry.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/snippet_metadata_google.cloud.translation.v3beta1.json) |
| batch translate document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_document.js) |
| batch translate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_text.js) |
| create glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.create_glossary.js) |
| delete glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.delete_glossary.js) |
| detect language | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.detect_language.js) |
| get glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_glossary.js) |
| get supported languages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_supported_languages.js) |
| list glossaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.list_glossaries.js) |
| translate document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_document.js) |
| translate text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_text.js) |


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
For example, `npm install @google-cloud/translate@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translation/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translation/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=translate.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translation/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translation/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translation
