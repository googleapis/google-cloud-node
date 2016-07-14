<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Speech API Node.js Samples

[Sign up for the Alpha][speech_signup].

The [Cloud Speech API][speech_docs] enables easy integration of Google speech
recognition technologies into developer applications.

[speech_signup]: https://services.google.com/fb/forms/speech-api-alpha/
[speech_docs]: https://cloud.google.com/speech/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Recognition](#recognition)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Recognition

View the [documentation][recognition_docs] or the [source code][recognition_code].

__Run the sample:__

Usage: `node recognize <path-to-audio-file>`

Example:

    node recognize resources/audio.raw

[recognition_docs]: https://cloud.google.com/speech/
[recognition_code]: recognize.js

### Recognition (Streaming)

View the [documentation][recognition_streaming_docs] or the [source code][recognition_streaming_code].

__Run the sample:__

Usage: `node recognize_streaming <path-to-audio-file>`

Example:

    node recognize_streaming resources/audio.raw

[recognition_streaming_docs]: https://cloud.google.com/speech/
[recognition_streaming_code]: recognize_streaming.js
