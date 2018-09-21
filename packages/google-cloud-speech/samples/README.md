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
  recognize.js sync <filename>                   Detects speech in a local audio file.
  recognize.js sync-gcs <gcsUri>                 Detects speech in an audio file located in a Google Cloud Storage
                                                 bucket.
  recognize.js sync-words <filename>             Detects speech in a local audio file with word time offset.
  recognize.js async <filename>                  Creates a job to detect speech in a local audio file, and waits for the
                                                 job to complete.
  recognize.js async-gcs <gcsUri>                Creates a job to detect speech in an audio file located in a Google
                                                 Cloud Storage bucket, and waits for the job to complete.
  recognize.js async-gcs-words <gcsUri>          Creates a job to detect speech  with word time offset in an audio file
                                                 located in a Google Cloud Storage bucket, and waits for the job to
                                                 complete.
  recognize.js stream <filename>                 Detects speech in a local audio file by streaming it to the Speech API.
  recognize.js listen                            Detects speech in a microphone input stream. This command requires that
                                                 you have SoX installed and available in your $PATH. See
                                                 https://www.npmjs.com/package/node-record-lpcm16#dependencies
  recognize.js sync-model <filename> <model>     Detects speech in a local audio file using provided model.
  recognize.js sync-model-gcs <gcsUri> <model>   Detects speech in an audio file located in a Google Cloud Storage
                                                 bucket using provided model.
  recognize.js sync-auto-punctuation <filename>  Detects speech in a local audio file with auto punctuation.
  recognize.js sync-enhanced-model <filename>    Detects speech in a local audio file using an enhanced model.

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
  node recognize.js sync-model ./resources/Google_Gnome.wav video -e LINEAR16 -r 16000
  node recognize.js sync-model-gcs gs://gcs-test-data/Google_Gnome.wav phone_call -e LINEAR16 -r 16000
  node recognize.js sync-auto-punctuation ./resources/commercial_mono.wav
  node recognize.js sync-enhanced-model ./resources/commercial_mono.wav

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
  recognize.v1p1beta1.js sync-metadata <filename>  Detects speech in a local audio file with metadata.

Options:
  --version              Show version number                                                                   [boolean]
  --encoding, -e                                                                          [string] [default: "LINEAR16"]
  --sampleRateHertz, -r                                                                        [number] [default: 16000]
  --languageCode, -l                                                                         [string] [default: "en-US"]
  --help                 Show help                                                                             [boolean]

Examples:
  node recognize.v1p1beta1.js sync-metadata ./resources/commercial_mono.wav

For more information, see https://cloud.google.com/speech/docs
```

[recognize.v1p1beta1_1_docs]: https://cloud.google.com/speech/docs
[recognize.v1p1beta1_1_code]: recognize.v1p1beta1.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md

### Speech Recognition betaFeatures

View the [source code][betaFeatures_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/betaFeatures.js,samples/README.md)

__Usage:__ `node betaFeatures.js --help`

```
betaFeatures.js <command>

Commands:
  betaFeatures.js Diarization                 Isolate distinct speakers in an audio file
  betaFeatures.js DiarizationGCS              Isolate distinct speakers in an audio file located in a Google Cloud
                                              Storage bucket.
  betaFeatures.js multiChannelTranscribe      Differentiates input by audio channel in local audio file.
  betaFeatures.js multiChannelTranscribeGCS   Differentiates input by audio channe from GCS audio file.
  betaFeatures.js multiLanguageTranscribe     Transcribes multiple languages from local audio file.
  betaFeatures.js multiLanguageTranscribeGCS  Transcribes multiple languages from GCS audio file.
  betaFeatures.js wordLevelConfidence         Detects word level confidence from local audio file.
  betaFeatures.js wordLevelConfidenceGCS      Detects word level confidence from GCS audio file. 

Options:
   --version         Show version number     [boolean]
  --speechFile, -f                           [string]
  --gcsUri, -u                               [string]
  --help            Show help                [boolean]

Examples:
  node betaFeatures.js Diarization -f ./resources/commercial_mono.wav
  node betaFeatures.js DiarizationGCS -u gs://cloud-samples-tests/speech/commercial_mono.wav
  node betaFeatures.js multiChannelTranscribe -f ./resources/commercial_stereo.wav
  node betaFeatures.js multiChannelTranscribeGCS -u gs://cloud-samples-tests/speech/commercial_stereo.wav
  node betaFeatures.js multiLanguageTranscribe -f ./resources/multi.wav
  node betaFeatures.js multiLanguageTranscribeGCS -u gs://nodejs-docs-samples/multi_mono.wav
  node betaFeatures.js wordLevelConfidence -f ./resources/brooklyn.flac
  node betaFeatures.js wordLevelConfidenceGCS -u gs://cloud-samples-tests/speech/brooklyn.flac

For more information, see https://cloud.google.com/speech/docs
```

[betaFeatures_docs]: https://cloud.google.com/speech/docs
[betaFeatures_code]: recognize.v1p1beta1.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md
