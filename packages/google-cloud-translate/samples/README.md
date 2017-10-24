<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Translation API: Node.js Samples

[![Build](https://storage.googleapis.com/.svg)]()

The [Cloud Translation API](https://cloud.google.com/translate/docs), can dynamically translate text between thousands of language pairs. The Cloud Translation API lets websites and programs integrate with the translation service programmatically. The Cloud Translation API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Translate](#translate)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Translate

View the [source code][translate_0_code].

__Usage:__ `node translate.js --help`

```
translate.js <command>

Commands:
  translate.js detect <text..>                                 Detects the language of one or more strings.
  translate.js list [target]                                   Lists available translation languages. To language names
                                                               in a language other than English, specify a target
                                                               language.
  translate.js translate <toLang> <text..>                     Translates one or more strings into the target language.
  translate.js translate-with-model <toLang> <model> <text..>  Translates one or more strings into the target language
                                                               using the specified model.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

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
