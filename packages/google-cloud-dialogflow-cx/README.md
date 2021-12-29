[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dialogflow CX API: Node.js Client](https://github.com/googleapis/nodejs-dialogflow-cx)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dialogflow-cx.svg)](https://www.npmjs.org/package/@google-cloud/dialogflow-cx)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dialogflow-cx/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dialogflow-cx)




Cx client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/CHANGELOG.md).

* [Dialogflow CX API Node.js Client API Reference][client-docs]
* [Dialogflow CX API Documentation][product-docs]
* [github.com/googleapis/nodejs-dialogflow-cx](https://github.com/googleapis/nodejs-dialogflow-cx)

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
1.  [Enable the Dialogflow CX API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dialogflow-cx
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'my-project';
// const location = 'global';
// const agentId = 'my-agent';
// const audioFileName = '/path/to/audio.raw';
// const encoding = 'AUDIO_ENCODING_LINEAR_16';
// const sampleRateHertz = 16000;
// const languageCode = 'en'

// Imports the Google Cloud Some API library
const {SessionsClient} = require('@google-cloud/dialogflow-cx');
/**
 * Example for regional endpoint:
 *   const location = 'us-central1'
 *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
 */
const client = new SessionsClient();

const fs = require('fs');
const util = require('util');
// Assumes uuid module has been installed from npm,
// npm i uuid:
const {v4} = require('uuid');

async function detectIntentAudio() {
  const sessionId = v4();
  const sessionPath = client.projectLocationAgentSessionPath(
    projectId,
    location,
    agentId,
    sessionId
  );

  // Read the content of the audio file and send it as part of the request.
  const readFile = util.promisify(fs.readFile);
  const inputAudio = await readFile(audioFileName);

  const request = {
    session: sessionPath,
    queryInput: {
      audio: {
        config: {
          audioEncoding: encoding,
          sampleRateHertz: sampleRateHertz,
        },
        audio: inputAudio,
      },
      languageCode,
    },
  };
  const [response] = await client.detectIntent(request);
  console.log(`User Query: ${response.queryResult.transcript}`);
  for (const message of response.queryResult.responseMessages) {
    if (message.text) {
      console.log(`Agent Response: ${message.text.text}`);
    }
  }
  if (response.queryResult.match.intent) {
    console.log(
      `Matched Intent: ${response.queryResult.match.intent.displayName}`
    );
  }
  console.log(
    `Current Page: ${response.queryResult.currentPage.displayName}`
  );
}

detectIntentAudio();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dialogflow-cx/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create-agent | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/create-agent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/create-agent.js,samples/README.md) |
| Create-page | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/create-page.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/create-page.js,samples/README.md) |
| Delete-page | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/delete-page.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/delete-page.js,samples/README.md) |
| Detect-intent-audio | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/detect-intent-audio.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/detect-intent-audio.js,samples/README.md) |
| Detect-intent-streaming | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/detect-intent-streaming.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/detect-intent-streaming.js,samples/README.md) |
| Detect-intent-text | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/detect-intent-text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/detect-intent-text.js,samples/README.md) |
| List-intents | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/list-intents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/list-intents.js,samples/README.md) |
| List-page | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/list-page.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/list-page.js,samples/README.md) |
| List-testcase-results | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/list-testcase-results.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/list-testcase-results.js,samples/README.md) |
| List Training Phrases | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/listTrainingPhrases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/listTrainingPhrases.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Update-intent | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/update-intent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/update-intent.js,samples/README.md) |
| Webhooks | [source code](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/samples/webhooks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow-cx&page=editor&open_in_editor=samples/webhooks.js,samples/README.md) |



The [Dialogflow CX API Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.







More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dialogflow-cx/blob/main/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dialogflow-cx/latest
[product-docs]: https://cloud.google.com/dialogflow-enterprise/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
