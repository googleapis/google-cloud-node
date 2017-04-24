<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Natural Language API Node.js Samples

[Cloud Natural Language API][language_docs] provides natural language
understanding technologies to developers, including sentiment analysis, entity
recognition, and syntax analysis. This API is part of the larger Cloud Machine
Learning API.

[language_docs]: https://cloud.google.com/natural-language/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Analyze](#analyze)
  * [Slackbot](#slackbot)
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

### Analyze

View the [documentation][analyze_docs] or the [source code][analyze_code].

__Usage:__ `node analyze.js --help`

```
Commands:
  sentiment-text <text>                   Detects sentiment of a string.
  sentiment-file <bucketName> <fileName>  Detects sentiment in a file in Google Cloud Storage.
  entities-text <text>                    Detects entities in a string.
  entities-file <bucketName> <fileName>   Detects entities in a file in Google Cloud Storage.
  syntax-text <text>                      Detects syntax of a string.
  syntax-file <bucketName> <fileName>     Detects syntax in a file in Google Cloud Storage.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node analyze.js sentiment-text "President Obama is speaking at the White House."
  node analyze.js sentiment-file my-bucket file.txt             Detects sentiment in gs://my-bucket/file.txt
  node analyze.js entities-text "President Obama is speaking at the White House."
  node analyze.js entities-file my-bucket file.txt              Detects entities in gs://my-bucket/file.txt
  node analyze.js syntax-text "President Obama is speaking at the White House."
  node analyze.js syntax-file my-bucket file.txt                Detects syntax in gs://my-bucket/file.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze_docs]: https://cloud.google.com/natural-language/docs
[analyze_code]: analyze.js

### Slackbot

The example in the [slackbot](./slackbot) subdirectory shows a Slack bot built using the
[Botkit](https://github.com/howdyai/botkit) library.
It runs on a Google Container Engine (Kubernetes) cluster, and uses one of the Google Cloud Platform's ML
APIs, the Natural Language (NL) API, to interact in a Slack channel.
See its [README](./slackbot/README.md) for more information.

## Running the tests

1.  Set the `GCLOUD_PROJECT` and `GOOGLE_APPLICATION_CREDENTIALS` environment
    variables.

1.  Run the tests:

    With `npm`:

        npm test

    With `yarn`:

        yarn test
