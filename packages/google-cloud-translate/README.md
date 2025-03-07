[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Translation: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-translate)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/translate.svg)](https://www.npmjs.org/package/@google-cloud/translate)




Cloud Translation API Client Library for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-translate/CHANGELOG.md).

* [Cloud Translation Node.js Client API Reference][client-docs]
* [Cloud Translation Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-translate](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-translate)

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
1.  [Enable the Cloud Translation API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/translate
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({projectId});

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

quickStart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-translate/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Translation_service.adaptive_mt_translate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.adaptive_mt_translate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.adaptive_mt_translate.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.batch_translate_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_document.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.batch_translate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.batch_translate_text.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_adaptive_mt_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_adaptive_mt_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.create_adaptive_mt_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.create_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_glossary_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.create_glossary_entry.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.create_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.create_model.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_adaptive_mt_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_adaptive_mt_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_adaptive_mt_file.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_glossary_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_glossary_entry.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.delete_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.delete_model.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.detect_language | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.detect_language.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.detect_language.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.export_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.export_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.export_data.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_adaptive_mt_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_adaptive_mt_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_adaptive_mt_file.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_dataset.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_glossary_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_glossary_entry.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_model.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_supported_languages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.get_supported_languages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.get_supported_languages.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.import_adaptive_mt_file | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.import_adaptive_mt_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.import_adaptive_mt_file.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.import_data | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.import_data.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.import_data.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_adaptive_mt_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_datasets.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_adaptive_mt_files | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_files.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_files.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_adaptive_mt_sentences | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_sentences.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_adaptive_mt_sentences.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_datasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_datasets.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_examples | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_examples.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_examples.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_glossaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossaries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossaries.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_glossary_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossary_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_glossary_entries.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.list_models.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.romanize_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.romanize_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.romanize_text.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.translate_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.translate_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.translate_document.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.translate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.translate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.translate_text.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.update_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.update_glossary_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3/translation_service.update_glossary_entry.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.batch_translate_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_document.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.batch_translate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.batch_translate_text.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.create_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.create_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.create_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.delete_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.delete_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.delete_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.detect_language | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.detect_language.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.detect_language.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_glossary | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_glossary.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_glossary.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.get_supported_languages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_supported_languages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.get_supported_languages.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.list_glossaries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.list_glossaries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.list_glossaries.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.translate_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_document.js,packages/google-cloud-translate/samples/README.md) |
| Translation_service.translate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/generated/v3beta1/translation_service.translate_text.js,packages/google-cloud-translate/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-translate/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-translate/samples/quickstart.js,packages/google-cloud-translate/samples/README.md) |



The [Cloud Translation Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/translate@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/translate/latest
[product-docs]: https://cloud.google.com/translate/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=translate.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
