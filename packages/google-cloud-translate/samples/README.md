<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Translate API Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-translate.svg)]()

With the [Google Translate API](https://cloud.google.com/translate/docs), you can dynamically translate text between thousands of language pairs.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Translate](#translate)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With `npm`:

        npm install

    With `yarn`:

        yarn install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Translate


View the [documentation][translate_0_docs] or the [source code][translate_0_code].

__Usage:__ `node translate.js --help`

```
Commands:
  detect <text..>                                 Detects the language of one or more strings.
  list [target]                                   Lists available translation languages. To language names in a language
                                                  other than English, specify a target language.
  translate <toLang> <text..>                     Translates one or more strings into the target language.
  translate-with-model <toLang> <model> <text..>  Translates one or more strings into the target language using the
                                                  specified model.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node translate.js detect "Hello world!"                       Detects the language of a string.
  node translate.js detect "Hello world!" "Goodbye"             Detects the languages of multiple strings.
  node translate.js list                                        Lists available translation languages with names in
                                                                English.
  node translate.js list es                                     Lists available translation languages with names in
                                                                Spanish.
  node translate.js translate ru "Good morning!"                Translates a string into Russian.
  node translate.js translate ru "Good morning!" "Good night!"  Translates multiple strings into Russian.
  node translate.js translate-with-model ru nmt "Good           Translates multiple strings into Russian using the
  morning!" "Good night!"                                       Premium model.

For more information, see https://cloud.google.com/translate/docs
```

[translate_0_docs]: https://cloud.google.com/translate/docs
[translate_0_code]: translate.js

## Running the tests

1.  Set the `GCLOUD_PROJECT` and `GOOGLE_APPLICATION_CREDENTIALS` environment
    variables.

1.  Run the tests:

    With `npm`:

        npm test

    With `yarn`:

        yarn test
