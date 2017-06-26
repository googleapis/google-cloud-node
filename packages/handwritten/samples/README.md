<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Stackdriver Error Reporting Node.js Samples

[![Build](https://storage.googleapis.com/cloud-docs-samples-badges/GoogleCloudPlatform/nodejs-docs-samples/nodejs-docs-samples-logging.svg)]()

[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/docs/) aggregates and displays errors produced in your running cloud services.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Examples](#examples)
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

### Examples

View the [documentation][snippets_0_docs] or the [source code][snippets_0_code].

__Usage:__ `node snippets.js --help`

```
Commands:
  manual  Manually reports errors.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node snippets.js manual  Manually report some errors.

For more information, see https://cloud.google.com/error-reporting/docs
```

[snippets_0_docs]: https://cloud.google.com/error-reporting/docs
[snippets_0_code]: snippets.js

## Running the tests

1.  Set the **GCLOUD_PROJECT** and **GOOGLE_APPLICATION_CREDENTIALS** environment variables.

1.  Run the tests:

    With **npm**:

        npm test

    With **yarn**:

        yarn test
