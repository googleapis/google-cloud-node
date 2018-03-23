[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Text-To-Speech: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

Cloud Text-to-Speech API

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Synthesize Speech](#synthesize-speech)
  * [List supported voices](#list-supported-voices)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Synthesize Speech

View the [source code][synthesize_speech_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-text-to-speech&page=editor&open_in_editor=samples/synthesize.js,samples/README.md)

__Usage:__ `node synthesize.js --help`

```
synthesize.js <command>

Commands:
  synthesize.js text <text>           Synthesizes audio file from text
  synthesize.js ssml <ssml>           Synthesizes audio file from SSML
  synthesize.js text-file <textFile>  Synthesizes audio file from text in a file
  synthesize.js ssml-file <ssmlFile>  Synthesizes audio file from SSML in a file

Options:
  --version         Show version number                                                                        [boolean]
  --outputFile, -o                                                                      [string] [default: "output.mp3"]
  --help            Show help                                                                                  [boolean]

Examples:
  node synthesize.js text "hello" -o hello.mp3
  node synthesize.js ssml "<?xml..." -o hello.mp3
  node synthesize.js text-file filename.txt -o output.mp3
  node synthesize.js ssml-file filename.ssml -o output.mp3

For more information, see https://cloud.google.com/text-to-speech/docs
```

[synthesize_speech_0_docs]: https://cloud.google.com/text-to-speech/docs
[synthesize_speech_0_code]: synthesize.js

### List supported voices

View the [source code][list_voices_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-text-to-speech&page=editor&open_in_editor=samples/listVoices.js,samples/README.md)

__Usage:__ `node listVoices.js --help`

```
listVoices.js <command>

Commands:
  listVoices.js list-voices  List supported voices.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node listVoices.js list-voices

For more information, see https://cloud.google.com/text-to-speech/docs
```

[list_voices_1_docs]: https://cloud.google.com/text-to-speech/docs
[list_voices_1_code]: listVoices.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-text-to-speech&page=editor&open_in_editor=samples/README.md
