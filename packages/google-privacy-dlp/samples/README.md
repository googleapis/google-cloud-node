<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Data Loss Prevention (DLP) API Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/dlp-cli.svg)]()

The [Data Loss Prevention API](https://cloud.google.com/dlp/docs/) provides programmatic access to a powerful detection engine for personally identifiable information and other privacy-sensitive data in unstructured data streams.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Inspect](#inspect)
  * [Redact](#redact)
  * [Metadata](#metadata)
* [Running the tests](#running-the-tests)

## Setup

1.  Read [Prerequisites][prereq] and [How to run a sample][run] first.
1.  Install dependencies:

    With **npm**:

        npm install

    With **yarn**:

        yarn install

[prereq]: ../README.md#prerequisites
[run]: ../README.md#how-to-run-a-sample

## Samples

### Inspect

View the [documentation][inspect_0_docs] or the [source code][inspect_0_code].

__Usage:__ `node inspect.js --help`

```
Commands:
  string <string>                         Inspect a string using the Data Loss Prevention API.
  file <filepath>                         Inspects a local text, PNG, or JPEG file using the Data Loss Prevention API.
  gcsFilePromise <bucketName> <fileName>  Inspects a text file stored on Google Cloud Storage using the Data Loss
                                          Prevention API and the promise pattern.
  gcsFileEvent <bucketName> <fileName>    Inspects a text file stored on Google Cloud Storage using the Data Loss
                                          Prevention API and the event-handler pattern.
  datastore <kind>                        Inspect a Datastore instance using the Data Loss Prevention API.

Options:
  --help               Show help                                                                               [boolean]
  -m, --minLikelihood
          [string] [choices: "LIKELIHOOD_UNSPECIFIED", "VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
                                                                                     [default: "LIKELIHOOD_UNSPECIFIED"]
  -f, --maxFindings                                                                                [number] [default: 0]
  -q, --includeQuote                                                                           [boolean] [default: true]
  -l, --languageCode                                                                         [string] [default: "en-US"]
  -t, --infoTypes                                                                                  [array] [default: []]

Examples:
  node inspect.js string "My phone number is (123) 456-7890 and my email address is me@somedomain.com"
  node inspect.js file resources/test.txt
  node inspect.js gcsFilePromise my-bucket my-file.txt
  node inspect.js gcsFileEvent my-bucket my-file.txt

For more information, see https://cloud.google.com/dlp/docs. Optional flags are explained at
https://cloud.google.com/dlp/docs/reference/rest/v2beta1/content/inspect#InspectConfig
```

[inspect_0_docs]: https://cloud.google.com/dlp/docs
[inspect_0_code]: inspect.js

### Redact

View the [documentation][redact_1_docs] or the [source code][redact_1_code].

__Usage:__ `node redact.js --help`

```
Commands:
  string <string> <replaceString>  Redact sensitive data from a string using the Data Loss Prevention API.

Options:
  --help               Show help                                                                               [boolean]
  -t, --infoTypes                                                                                     [array] [required]
  -m, --minLikelihood
          [string] [choices: "LIKELIHOOD_UNSPECIFIED", "VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
                                                                                     [default: "LIKELIHOOD_UNSPECIFIED"]

Examples:
  node redact.js string "My name is Gary" "REDACTED" -t US_MALE_NAME

For more information, see https://cloud.google.com/dlp/docs. Optional flags are explained at
https://cloud.google.com/dlp/docs/reference/rest/v2beta1/content/inspect#InspectConfig
```

[redact_1_docs]: https://cloud.google.com/dlp/docs
[redact_1_code]: redact.js

### Metadata

View the [documentation][metadata_2_docs] or the [source code][metadata_2_code].

__Usage:__ `node metadata.js --help`

```
Commands:
  infoTypes <category>  List types of sensitive information within a category.
  categories            List root categories of sensitive information.

Options:
  --help              Show help                                                                                [boolean]
  -l, --languageCode                                                                         [string] [default: "en-US"]

Examples:
  node metadata.js infoTypes GOVERNMENT
  node metadata.js categories

For more information, see https://cloud.google.com/dlp/docs
```

[metadata_2_docs]: https://cloud.google.com/dlp/docs
[metadata_2_code]: metadata.js

## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
