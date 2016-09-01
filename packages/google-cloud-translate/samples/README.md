<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Translate API Node.js Samples

With the [Google Translate API][translate_docs], you can dynamically translate
text between thousands of language pairs.

[translate_docs]: https://cloud.google.com/translate/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Translate](#translate)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Translate

View the [documentation][translate_docs] or the [source code][translate_code].

__Usage:__ `node translate --help`

```
Commands:
  detect <input..>              Detect the language of the provided text or texts
  list [target]                 List available translation languages. To return language names in a language other than
                                English, specify a target language.
  translate <toLang> <input..>  Translate the provided text or texts to the target language, optionally specifying the
                                source language.

Options:
  --apiKey, -k  Your Translate API key. Defaults to the value of the TRANSLATE_API_KEY environment variable.    [string]
  --help        Show help                                                                                      [boolean]

Examples:
  node translate detect "Hello world!"                          Detect the language of "Hello world!".
  node translate detect -k your-api-key "Hello world!"          Detect the language of "Hello world!" and "Goodbye",
  "Goodbye"                                                     supplying the API key inline..
  node translate list -k your-api-key                           List available translation languages with names in
                                                                English, supplying the API key inline..
  node translate list es                                        List available translation languages with names in
                                                                Spanish.
  node translate translate ru "Good morning!"                   Translate "Good morning!" to Russian, auto-detecting the
                                                                source language.
  node translate translate ru "Good morning!" -f en -k          Translate "Good morning!" to Russian from English,
  your-api-key                                                  supplying the API key inline.

For more information, see https://cloud.google.com/translate/docs
```

[translate_docs]: https://cloud.google.com/translate/docs
[translate_code]: translate.js
