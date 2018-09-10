[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Speech API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Speech API](https://cloud.google.com/speech/docs) enables easy integration of Google speech recognition technologies into developer applications. Send audio and receive a text transcription from the Cloud Speech API service.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Speech Recognition](#speech-recognition)
  * [Speech Recognition v1p1beta1](#speech-recognition-v1p1beta1)

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

### Speech Recognition v1p1beta1

View the [source code][recognize.v1p1beta1_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/recognize.v1p1beta1.js,samples/README.md)

__Usage:__ `node recognize.v1p1beta1.js --help`

```
recognize.v1p1beta1.js <command>

Commands:
  recognize.v1p1beta1.js sync-model <filename> <model>    Detects speech in a local audio file using provided model.
  recognize.v1p1beta1.js sync-model-gcs <gcsUri> <model>  Detects speech in an audio file located in a Google Cloud
                                                          Storage bucket using provided model.

Options:
  --version              Show version number                                                                   [boolean]
  --encoding, -e                                                                          [string] [default: "LINEAR16"]
  --sampleRateHertz, -r                                                                        [number] [default: 16000]
  --languageCode, -l                                                                         [string] [default: "en-US"]
  --help                 Show help                                                                             [boolean]

Examples:
  node recognize.v1p1beta1.js sync-model ./resources/Google_Gnome.wav video -e LINEAR16 -r 16000
  node recognize.v1p1beta1.js sync-model-gcs gs://gcs-test-data/Google_Gnome.wav phone_call -e FLAC -r 16000

For more information, see https://cloud.google.com/speech/docs
```

[recognize.v1p1beta1_1_docs]: https://cloud.google.com/speech/docs
[recognize.v1p1beta1_1_code]: recognize.v1p1beta1.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md

### betaFeatures v1p1beta1

View the [source code][betaFeatures_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/betaFeatures.js,samples/README.md)

__Usage:__ `node betaFeatures.js --help`

```
betaFeatures.js <command>

Commands:
  betaFeatures.js sync-model <filename> <model>    Detects speech in a local audio file using provided model.
  betaFeatures.js sync-model-gcs <gcsUri> <model>  Detects speech in an audio file located in a Google Cloud
                                                          Storage bucket using provided model.

Options:
  --version              Show version number                                                                   [boolean]
  --encoding, -e                                                                          [string] [default: "LINEAR16"]
  --sampleRateHertz, -r                                                                        [number] [default: 16000]
  --languageCode, -l                                                                         [string] [default: "en-US"]
  --help                 Show help                                                                             [boolean]

Examples:
  node betaFeatures.js sync-model ./resources/Google_Gnome.wav video -e LINEAR16 -r 16000
  node betaFeatures.js sync-model-gcs gs://gcs-test-data/Google_Gnome.wav phone_call -e FLAC -r 16000

For more information, see https://cloud.google.com/speech/docs
```

[betaFeatures_docs]: https://cloud.google.com/speech/docs
[betaFeatures_code]: betaFeatures.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md
