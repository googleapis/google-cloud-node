[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `npm run generate-scaffolding`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Text-To-Speech: Node.js Client](https://github.com/googleapis/nodejs-text-to-speech)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-text-to-speech.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-text-to-speech)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-text-to-speech?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-text-to-speech)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-text-to-speech/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-text-to-speech)

> Node.js idiomatic client for [Text-To-Speech][product-docs].

Cloud Text-to-Speech API


* [Text-To-Speech Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-text-to-speech](https://github.com/googleapis/nodejs-text-to-speech)
* [Text-To-Speech Documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  Select or create a Cloud Platform project.

    [Go to the projects page][projects]

1.  Enable billing for your project.

    [Enable billing][billing]

1.  Enable the Google Cloud Text-To-Speech API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=texttospeech
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/text-to-speech

### Using the client library

```javascript
const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize
const text = 'Hello, world!';

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  // Write the binary audio content to a local file
  fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
    console.log('Audio content written to file: output.mp3');
  });
});
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-text-to-speech/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Synthesize Speech | [source code](https://github.com/googleapis/nodejs-text-to-speech/blob/master/samples/synthesize.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-text-to-speech&page=editor&open_in_editor=samples/synthesize.js,samples/README.md) |
| List supported voices | [source code](https://github.com/googleapis/nodejs-text-to-speech/blob/master/samples/listVoices.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-text-to-speech&page=editor&open_in_editor=samples/listVoices.js,samples/README.md) |

The [Text-To-Speech Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-text-to-speech/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-text-to-speech/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/text-to-speech/latest/
[product-docs]: https://cloud.google.com/texttospeech
[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
