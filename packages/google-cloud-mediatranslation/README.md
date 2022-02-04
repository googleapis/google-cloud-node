[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Media Translation: Node.js Client](https://github.com/googleapis/nodejs-media-translation)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/media-translation.svg)](https://www.npmjs.org/package/@google-cloud/media-translation)




Mediatranslation client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-media-translation/blob/main/CHANGELOG.md).

* [Cloud Media Translation Node.js Client API Reference][client-docs]
* [Cloud Media Translation Documentation][product-docs]
* [github.com/googleapis/nodejs-media-translation](https://github.com/googleapis/nodejs-media-translation)

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

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Media Translation API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/media-translation
```


### Using the client library

```javascript
const fs = require('fs');

// Imports the CLoud Media Translation client library
const {
  SpeechTranslationServiceClient,
} = require('@google-cloud/media-translation');

// Creates a client
const client = new SpeechTranslationServiceClient();

async function quickstart() {
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const filename = 'Local path to audio file, e.g. /path/to/audio.raw';
  // const encoding = 'Encoding of the audio file, e.g. LINEAR16';
  // const sourceLanguage = 'BCP-47 source language code, e.g. en-US';
  // const targetLanguage = 'BCP-47 target language code, e.g. es-ES';

  const config = {
    audioConfig: {
      audioEncoding: encoding,
      sourceLanguageCode: sourceLanguage,
      targetLanguageCode: targetLanguage,
    },
  };

  // First request needs to have only a streaming config, no data.
  const initialRequest = {
    streamingConfig: config,
    audioContent: null,
  };

  const readStream = fs.createReadStream(filename, {
    highWaterMark: 4096,
    encoding: 'base64',
  });

  const chunks = [];
  readStream
    .on('data', chunk => {
      const request = {
        streamingConfig: config,
        audioContent: chunk.toString(),
      };
      chunks.push(request);
    })
    .on('close', () => {
      // Config-only request should be first in stream of requests
      stream.write(initialRequest);
      for (let i = 0; i < chunks.length; i++) {
        stream.write(chunks[i]);
      }
      stream.end();
    });

  const stream = client.streamingTranslateSpeech().on('data', response => {
    const {result} = response;
    if (result.textTranslationResult.isFinal) {
      console.log(
        `\nFinal translation: ${result.textTranslationResult.translation}`
      );
      console.log(`Final recognition result: ${result.recognitionResult}`);
    } else {
      console.log(
        `\nPartial translation: ${result.textTranslationResult.translation}`
      );
      console.log(`Partial recognition result: ${result.recognitionResult}`);
    }
  });


```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-media-translation/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-media-translation/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-media-translation&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Translate_from_file | [source code](https://github.com/googleapis/nodejs-media-translation/blob/main/samples/translate_from_file.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-media-translation&page=editor&open_in_editor=samples/translate_from_file.js,samples/README.md) |
| Translate_from_mic | [source code](https://github.com/googleapis/nodejs-media-translation/blob/main/samples/translate_from_mic.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-media-translation&page=editor&open_in_editor=samples/translate_from_mic.js,samples/README.md) |



The [Cloud Media Translation Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/media-translation@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-media-translation/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-media-translation/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/media-translation/latest
[product-docs]: https://cloud.google.com/translate/media/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=mediatranslation.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
