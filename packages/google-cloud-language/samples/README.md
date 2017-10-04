<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Natural Language API Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-language.svg)]()

[Cloud Natural Language API](https://cloud.google.com/natural-language/docs) provides natural language understanding technologies to developers, including sentiment analysis, entity analysis, and syntax analysis. This API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Analyze v1](#analyze-v1)
  * [Analyze v1beta2](#analyze-v1beta2)
  * [Slack Bot](#slack-bot)
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

### Analyze v1

View the [documentation][analyze-v1_0_docs] or the [source code][analyze-v1_0_code].

__Usage:__ `node analyze.v1.js --help`

```
Commands:
  sentiment-text <text>                          Detects sentiment of a string.
  sentiment-file <bucketName> <fileName>         Detects sentiment in a file in Google Cloud Storage.
  entities-text <text>                           Detects entities in a string.
  entities-file <bucketName> <fileName>          Detects entities in a file in Google Cloud Storage.
  syntax-text <text>                             Detects syntax of a string.
  syntax-file <bucketName> <fileName>            Detects syntax in a file in Google Cloud Storage.
  entity-sentiment-text <text>                   Detects sentiment of the entities in a string.
  entity-sentiment-file <bucketName> <fileName>  Detects sentiment of the entities in a file in Google Cloud Storage.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.v1.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js sentiment-file my-bucket file.txt          Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1.js entities-text "President Obama is speaking at the White House."
  node analyze.v1.js entities-file my-bucket file.txt           Detects entities in gs://my-bucket/file.txt
  node analyze.v1.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1.js syntax-file my-bucket file.txt             Detects syntax in gs://my-bucket/file.txt
  node analyze.v1.js entity-sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js entity-sentiment-file my-bucket file.txt   Detects sentiment of entities in gs://my-bucket/file.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1_0_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1_0_code]: analyze.v1.js

### Analyze v1beta2

View the [documentation][analyze-v1beta2_1_docs] or the [source code][analyze-v1beta2_1_code].

__Usage:__ `node analyze.v1beta2.js --help`

```
Commands:
  sentiment-text <text>                   Detects sentiment of a string.
  sentiment-file <bucketName> <fileName>  Detects sentiment in a file in Google Cloud Storage.
  entities-text <text>                    Detects entities in a string.
  entities-file <bucketName> <fileName>   Detects entities in a file in Google Cloud Storage.
  syntax-text <text>                      Detects syntax of a string.
  syntax-file <bucketName> <fileName>     Detects syntax in a file in Google Cloud Storage.
  classify-text <text>                    Classifies text of a string.
  classify-file <bucketName> <fileName>   Classifies text in a file in Google Cloud Storage.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.v1beta2.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js sentiment-file my-bucket file.txt     Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1beta2.js entities-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js entities-file my-bucket file.txt      Detects entities in gs://my-bucket/file.txt
  node analyze.v1beta2.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js syntax-file my-bucket file.txt        Detects syntax in gs://my-bucket/file.txt
  node analyze.v1beta2.js classify-text "Currently the API requires 20 tokens in order \
      to return non-empty results. Let's use a longer piece of text for the sample in order to win."
  node analyze.v1beta2.js classify-file my-bucket               Detects syntax in gs://my-bucket/android_text.txt
  android_text.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1beta2_1_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1beta2_1_code]: analyze.v1beta2.js

### Slack Bot


View the [README](slackbot/README.md).



## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
