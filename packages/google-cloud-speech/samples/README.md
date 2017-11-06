<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Speech API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Speech API](https://cloud.google.com/speech/docs) enables easy integration of Google speech recognition technologies into developer applications. Send audio and receive a text transcription from the Cloud Speech API service.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Speech Recognition](#speech-recognition)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Speech Recognition

View the [source code][recognize_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/recognize.js,samples/README.md)

__Usage:__ `node recognize.js --help`

```
recognize.js <command>

Commands:
  recognize.js sync <filename>           Detects speech in a local audio file.
  recognize.js sync-gcs <gcsUri>         Detects speech in an audio file located in a Google Cloud Storage bucket.
  recognize.js sync-words <filename>     Detects speech in a local audio file with word time offset.
  recognize.js async <filename>          Creates a job to detect speech in a local audio file, and waits for the job to
                                         complete.
  recognize.js async-gcs <gcsUri>        Creates a job to detect speech in an audio file located in a Google Cloud
                                         Storage bucket, and waits for the job to complete.
  recognize.js async-gcs-words <gcsUri>  Creates a job to detect speech  with word time offset in an audio file located
                                         in a Google Cloud Storage bucket, and waits for the job to complete.
  recognize.js stream <filename>         Detects speech in a local audio file by streaming it to the Speech API.
  recognize.js listen                    Detects speech in a microphone input stream. This command requires that you
                                         have SoX installed and available in your $PATH. See
                                         https://www.npmjs.com/package/node-record-lpcm16#dependencies

Options:
  --version              Show version number                                                                   [boolean]
  --encoding, -e                                                                          [string] [default: "LINEAR16"]
  --sampleRateHertz, -r                                                                        [number] [default: 16000]
  --languageCode, -l                                                                         [string] [default: "en-US"]
  --help                 Show help                                                                             [boolean]

Examples:
  node recognize.js sync ./resources/audio.raw -e LINEAR16 -r 16000
  node recognize.js async-gcs gs://gcs-test-data/vr.flac -e FLAC -r 16000
  node recognize.js stream ./resources/audio.raw  -e LINEAR16 -r 16000
  node recognize.js listen

For more information, see https://cloud.google.com/speech/docs
```

[recognize_0_docs]: https://cloud.google.com/speech/docs
[recognize_0_code]: recognize.js

[shell_img]: http://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md
