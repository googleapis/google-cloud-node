<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Data Loss Prevention API Node.js Samples

The [Data Loss Prevention][dlp_docs] (DLP) API provides programmatic access to a powerful detection engine for personally identifiable information and other privacy-sensitive data in unstructured data streams.

This code provides a demonstration of the DLP API's functionality via REST in Node.js. It is intended for developers who want to be early adopters of the API.

[gRPC](https://grpc.io)-based samples/client libraries for [several languages](https://cloud.google.com/docs/) are under active development, and will be released shortly.

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Getting started with the Data Loss Prevention API](#getting-started-with-data-loss-prevention-api)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Getting started with the Data Loss Prevention API

View the [DLP documentation][dlp_docs] or the [samples][dlp_samples].

__Run the samples:__

```sh
node inspect.js --help
```

```
Commands:
  Commands:
  string <string>                  Inspect a string using the Data Loss Prevention API.
  file <filepath>                  Inspects a local text, PNG, or JPEG file using the Data Loss Prevention API.
  gcsFile <bucketName> <fileName>  Inspects a text file stored on Google Cloud Storage using the Data Loss Prevention
                                   API.
  datastore <kind>                 Inspect a Datastore instance using the Data Loss Prevention API.

Options:
  --help               Show help                                                                               [boolean]
  -m, --minLikelihood
          [string] [choices: "LIKELIHOOD_UNSPECIFIED", "VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
                                                                                     [default: "LIKELIHOOD_UNSPECIFIED"]
  -f, --maxFindings                                                                                         [default: 0]
  -q, --includeQuote                                                                           [boolean] [default: true]
  -a, --authToken                                                                                     [string] [default:
  "ab97.XXX..."]
  -t, --infoTypes                                                                                  [array] [default: []]

Examples:
  node inspect.js string "My phone number is (123) 456-7890
  and my email address is me@somedomain.com"
  node inspect.js file resources/test.txt
  node inspect.js gcsFile my-bucket my-file.txt

For more information, see https://cloud.google.com/dlp/docs. Optional flags are explained at
https://cloud.google.com/dlp/docs/reference/rest/v2beta1/content/inspect#InspectConfig
```

```sh
node metadata.js --help
```

```
Commands:
  infoTypes <category>  List types of sensitive information within a category.
  categories            List root categories of sensitive information.

Options:
  --help           Show help                                                                                   [boolean]
  -a, --authToken                                                                                     [string] [default:
  "ab97.XXX..."]
                                                                                                           oz0146E86Lk"]

Examples:
  node metadata.js infoTypes GOVERNMENT
  node metadata.js categories

For more information, see https://cloud.google.com/dlp/docs
```

```sh
node redact.js --help
```

```
Commands:
  string <string> <replaceString>  Redact sensitive data from a string using the Data Loss Prevention API.

Options:
  --help               Show help                                                                               [boolean]
  -t, --infoTypes                                                                                     [array] [required]
  -m, --minLikelihood
          [string] [choices: "LIKELIHOOD_UNSPECIFIED", "VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
                                                                                     [default: "LIKELIHOOD_UNSPECIFIED"]
  -a, --authToken                                                                                     [string] [default:
  "ab97.XXX..."]
                                                                                                           htPfG_eIy04"]

Examples:
  node redact.js string "My name is Gary" "REDACTED" -t
  US_MALE_NAME

For more information, see https://cloud.google.com/dlp/docs. Optional flags are explained at
https://cloud.google.com/dlp/docs/reference/rest/v2beta1/content/inspect#InspectConfig
```

For more information, see [the docs][dlp_docs].

[dlp_samples]: ../dlp
[dlp_docs]: https://cloud.google.com/dlp/docs/