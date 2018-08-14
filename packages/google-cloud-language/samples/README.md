<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Natural Language API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Natural Language API](https://cloud.google.com/natural-language/docs) provides natural language understanding technologies to developers, including sentiment analysis, entity analysis, and syntax analysis. This API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Analyze v1](#analyze-v1)
  * [Analyze v1beta2](#analyze-v1beta2)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Analyze v1

View the [source code][analyze-v1_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1.js,samples/README.md)

__Usage:__ `node analyze.v1.js --help`

```
analyze.v1.js <command>

Commands:
  analyze.v1.js sentiment-text <text>                          Detects sentiment of a string.
  analyze.v1.js sentiment-file <bucketName> <fileName>         Detects sentiment in a file in Google Cloud Storage.
  analyze.v1.js entities-text <text>                           Detects entities in a string.
  analyze.v1.js entities-file <bucketName> <fileName>          Detects entities in a file in Google Cloud Storage.
  analyze.v1.js syntax-text <text>                             Detects syntax of a string.
  analyze.v1.js syntax-file <bucketName> <fileName>            Detects syntax in a file in Google Cloud Storage.
  analyze.v1.js entity-sentiment-text <text>                   Detects sentiment of the entities in a string.
  analyze.v1.js entity-sentiment-file <bucketName> <fileName>  Detects sentiment of the entities in a file in Google
                                                               Cloud Storage.
  analyze.v1.js classify-text <text>                           Classifies text of a string.
  analyze.v1.js classify-file <bucketName> <fileName>          Classifies text in a file in Google Cloud Storage.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.v1.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js sentiment-file my-bucket file.txt          Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1.js entities-text "President Obama is speaking at the White House."
  node analyze.v1.js entities-file my-bucket file.txt           Detects entities in gs://my-bucket/file.txt
  node analyze.v1.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1.js syntax-file my-bucket file.txt             Detects syntax in gs://my-bucket/file.txt
  node analyze.v1.js entity-sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js entity-sentiment-file my-bucket file.txt   Detects sentiment of entities in gs://my-bucket/file.txt
  node analyze.v1.js classify-text "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets."
  node analyze.v1.js classify-file my-bucket android_text.txt   Detects syntax in gs://my-bucket/android_text.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1_0_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1_0_code]: analyze.v1.js

### Analyze v1beta2

View the [source code][analyze-v1beta2_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1beta2.js,samples/README.md)

__Usage:__ `node analyze.v1beta2.js --help`

```
analyze.v1beta2.js <command>

Commands:
  analyze.v1beta2.js sentiment-text <text>                   Detects sentiment of a string.
  analyze.v1beta2.js sentiment-file <bucketName> <fileName>  Detects sentiment in a file in Google Cloud Storage.
  analyze.v1beta2.js entities-text <text>                    Detects entities in a string.
  analyze.v1beta2.js entities-file <bucketName> <fileName>   Detects entities in a file in Google Cloud Storage.
  analyze.v1beta2.js syntax-text <text>                      Detects syntax of a string.
  analyze.v1beta2.js syntax-file <bucketName> <fileName>     Detects syntax in a file in Google Cloud Storage.
  analyze.v1beta2.js classify-text <text>                    Classifies text of a string.
  analyze.v1beta2.js classify-file <bucketName> <fileName>   Classifies text in a file in Google Cloud Storage.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.v1beta2.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js sentiment-file my-bucket file.txt     Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1beta2.js entities-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js entities-file my-bucket file.txt      Detects entities in gs://my-bucket/file.txt
  node analyze.v1beta2.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js syntax-file my-bucket file.txt        Detects syntax in gs://my-bucket/file.txt
  node analyze.v1beta2.js classify-text "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets."
  node analyze.v1beta2.js classify-file my-bucket               Detects syntax in gs://my-bucket/android_text.txt
  android_text.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1beta2_1_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1beta2_1_code]: analyze.v1beta2.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/README.md
