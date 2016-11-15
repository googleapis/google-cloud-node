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

__Usage:__ `node analyze --help`

```
Commands:
  sentimentOfText <text>               Detect the sentiment of a block of text.
  sentimentInFile <bucket> <filename>  Detect the sentiment of text in a GCS file.
  entitiesOfText <text>                Detect the entities of a block of text.
  entitiesInFile <bucket> <filename>   Detect the entities of text in a GCS file.
  syntaxOfText <text>                  Detect the syntax of a block of text.
  syntaxInFile <bucket> <filename>     Detect the syntax of text in a GCS file.

Options:
  --help  Show help                                                    [boolean]

Examples:
  node analyze sentimentOfText "President Obama is speaking at
  the White House."
  node analyze sentimentInFile my-bucket file.txt
  node analyze entitiesOfText "President Obama is speaking at
  the White House."
  node analyze entitiesInFile my-bucket file.txt
  node analyze syntaxOfText "President Obama is speaking at
  the White House."
  node analyze syntaxInFile my-bucket file.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze_docs]: https://cloud.google.com/natural-language/docs
[analyze_code]: analyze.js
