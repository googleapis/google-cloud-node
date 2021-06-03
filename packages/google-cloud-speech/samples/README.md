[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Speech: Node.js Samples](https://github.com/googleapis/nodejs-speech)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Microphone stream](#microphone-stream)
  * [Beta Features](#beta-features)
  * [Export-to-storage.v1p1beta1](#export-to-storage.v1p1beta1)
  * [Infinite Streaming](#infinite-streaming)
  * [Model Adaptation](#model-adaptation)
  * [Multi Region](#multi-region)
  * [Profanity Filter](#profanity-filter)
  * [Quickstart](#quickstart)
  * [Recognize](#recognize)
  * [Recognize speech with metadata](#recognize-speech-with-metadata)
  * [Transcribe Context Classes](#transcribe-context-classes)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-speech#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Microphone stream

Streams audio input from microphone, translates to text.

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/MicrophoneStream.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/MicrophoneStream.js,samples/README.md)

__Usage:__


`node MicrophoneStream.js <encoding> <sampleRateHertz> <languageCode>`


-----




### Beta Features

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/betaFeatures.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/betaFeatures.js,samples/README.md)

__Usage:__


`node samples/betaFeatures.js`


-----




### Export-to-storage.v1p1beta1

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/export-to-storage.v1p1beta1.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/export-to-storage.v1p1beta1.js,samples/README.md)

__Usage:__


`node samples/export-to-storage.v1p1beta1.js`


-----




### Infinite Streaming

Performs infinite streaming using the streamingRecognize operation with the Cloud Speech API.

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/infiniteStreaming.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/infiniteStreaming.js,samples/README.md)

__Usage:__


`node infiniteStreaming.js <encoding> <sampleRateHertz> <languageCode> <streamingLimit>`


-----




### Model Adaptation

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/modelAdaptation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/modelAdaptation.js,samples/README.md)

__Usage:__


`node samples/modelAdaptation.js`


-----




### Multi Region

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/multiRegion.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/multiRegion.js,samples/README.md)

__Usage:__


`node samples/multiRegion.js`


-----




### Profanity Filter

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/profanityFilter.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/profanityFilter.js,samples/README.md)

__Usage:__


`node samples/profanityFilter.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Recognize

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/recognize.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/recognize.js,samples/README.md)

__Usage:__


`node samples/recognize.js`


-----




### Recognize speech with metadata

Analyzes an audio stream, and detects speech along with metadata.

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/recognize.v1p1beta1.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/recognize.v1p1beta1.js,samples/README.md)

__Usage:__


`node recognize.v1p1beta1.js ./resources/commercial_mono.wav <encoding> <sampleRateHertz> <languageCode>`


-----




### Transcribe Context Classes

Provides "hints" to the speech recognizer to favor specific words and phrases in the results.

View the [source code](https://github.com/googleapis/nodejs-speech/blob/master/samples/transcribeContextClasses.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/transcribeContextClasses.js,samples/README.md)

__Usage:__


`node samples/transcribeContextClasses.js <storageUri>`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-speech&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/speech-to-text/docs/
