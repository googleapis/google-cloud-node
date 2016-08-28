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
  sentimentFromString <text>             Detect the sentiment of a block of text.
  sentimentFromFile <bucket> <filename>  Detect the sentiment of text in a GCS file.
  entitiesFromString <text>              Detect the entities of a block of text.
  entitiesFromFile <bucket> <filename>   Detect the entities of text in a GCS file.
  syntaxFromString <text>                Detect the syntax of a block of text.
  syntaxFromFile <bucket> <filename>     Detect the syntax of text in a GCS file.

Options:
  --language, -l  The language of the text.                                             [string]
  --type, -t      Type of text              [string] [choices: "text", "html"] [default: "text"]
  --help          Show help                                                            [boolean]

Examples:
  node analyze sentimentFromString "President Obama is speaking at the White House."
  node analyze sentimentFromFile my-bucket file.txt
  node analyze entitiesFromString "<p>President Obama is speaking at the White House.</p>" -t html
  node analyze entitiesFromFile my-bucket file.txt
  node analyze syntaxFromString "President Obama is speaking at the White House."
  node analyze syntaxFromFile my-bucket es_file.txt -l es

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze_docs]: https://cloud.google.com/natural-language/docs
[analyze_code]: analyze.js
