[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Dialogflow API: Node.js Client](https://github.com/googleapis/nodejs-dialogflow)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/dialogflow.svg)](https://www.npmjs.org/package/dialogflow)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-dialogflow/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-dialogflow)

### **_IMPORTANT NOTE_**
**Version 2.0.0 renames `dialogflow` to `@google-cloud/dialogflow` on npm, along with introducing TypeScript types.**

 Dialogflow API client for Node.js

* [Dialogflow API Node.js Client API Reference][client-docs]
* [Dialogflow API Documentation][product-docs]
* [github.com/googleapis/nodejs-dialogflow](https://github.com/googleapis/nodejs-dialogflow)

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
1.  [Enable the Dialogflow API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install dialogflow
```


### Using the client library

```javascript

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(projectId = 'your-project-id') {
  // A unique identifier for the given session
  const sessionId = uuid.v4();

  // Create a new session
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-dialogflow/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Detect Intent (Text) | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Create Knowledge Base | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| Get Knowledge Base | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| list Knowledge Base | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| list Knowledge Base | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| create Document | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| list Documents | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| Get Document | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| delete Document | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| detect Intent with sentiment analysis | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| detect Intent with text-to-speech response | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| detect Intent with Knowledge Base | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.v2beta1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.v2beta1.js,samples/README.md) |
| Detect Intent (Audio) | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Detect Intent (Streaming) | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/detect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/detect.js,samples/README.md) |
| Create Entity | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Delete Entity | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Create Intent | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Delete Intent | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Create Context | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Delete Context | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Create Session Entity Type | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |
| Delete Session Entity Type | [source code](https://github.com/googleapis/nodejs-dialogflow/blob/master/samples/resource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dialogflow&page=editor&open_in_editor=samples/resource.js,samples/README.md) |

The [Dialogflow API Node.js Client API Reference][client-docs] documentation
also contains samples.

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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-dialogflow/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-dialogflow/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/dialogflow/latest
[product-docs]: https://cloud.google.com/dialogflow-enterprise/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
