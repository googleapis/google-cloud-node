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
  * [Recognize](#recognize)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Recognize

View the [documentation][recognize_docs] or the [source code][recognize_code].

__Usage:__ `node recognize --help`

```
Commands:
  sync <filename>    Detects speech in an audio file.
  async <filename>   Creates a job to detect speech in an audio file, and waits for the job to complete.
  stream <filename>  Detects speech in an audio file by streaming it to the Speech API.
  listen             Detects speech in a microphone input stream.

Options:
  --help  Show help                                                                                            [boolean]

Examples:
  node recognize sync ./resources/audio.raw    Detects speech in "./resources/audio.raw".
  node recognize async ./resources/audio.raw   Creates a job to detect speech in "./resources/audio.raw", and waits for
                                               the job to complete.
  node recognize stream ./resources/audio.raw  Detects speech in "./resources/audio.raw" by streaming it to the Speech
                                               API.
  node recognize listen ./resources/audio.raw  Detects speech in a microphone input stream.

For more information, see https://cloud.google.com/speech/docs
```

[recognize_docs]: https://cloud.google.com/speech/docs
[recognize_code]: recognize.js
