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

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Analyze

View the [documentation][analyze_docs] or the [source code][analyze_code].

__Usage:__ `node analyze.js --help`

```
Commands:
  sentiment-text <text>               Detects sentiment of a string.
  sentiment-file <bucket> <filename>  Detects sentiment in a file in Google Cloud Storage.
  entities-text <text>                Detects entities in a string.
  entities-file <bucket> <filename>   Detects entities in a file in Google Cloud Storage.
  syntax-text <text>                  Detects syntax of a string.
  syntax-file <bucket> <filename>     Detects syntax in a file in Google Cloud Storage.

Options:
  --help  Show help                                                    [boolean]

Examples:
  node analyze.js sentiment-text "President Obama is speaking
  at the White House."
  node analyze.js sentiment-file my-bucket file.txt             Detects sentiment in gs://my-bucket/file.txt
  node analyze.js entities-text "President Obama is speaking
  at the White House."
  node analyze.js entities-file my-bucket file.txt              Detects entities in gs://my-bucket/file.txt
  node analyze.js syntax-text "President Obama is speaking at
  the White House."
  node analyze.js syntax-file my-bucket file.txt                Detects syntax in gs://my-bucket/file.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze_docs]: https://cloud.google.com/natural-language/docs
[analyze_code]: analyze.js
