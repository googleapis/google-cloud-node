[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Document AI: Node.js Client](https://github.com/googleapis/nodejs-document-ai)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/documentai.svg)](https://www.npmjs.org/package/@google-cloud/documentai)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-document-ai/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-document-ai)




Document AI client for Node.js


* [Document AI Node.js Client API Reference][client-docs]
* [Document AI Documentation][product-docs]
* [github.com/googleapis/nodejs-document-ai](https://github.com/googleapis/nodejs-document-ai)

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
1.  [Enable the Document AI API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/documentai
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const projectId = 'YOUR_PROJECT_ID';
// const location = 'YOUR_PROJECT_LOCATION';
// const gcsInputUri = 'YOUR_SOURCE_PDF';

const {
  DocumentUnderstandingServiceClient,
} = require('@google-cloud/documentai');
const client = new DocumentUnderstandingServiceClient();

async function quickstart() {
  // Configure the request for processing the PDF
  const parent = `projects/${projectId}/locations/${location}`;
  const request = {
    parent,
    inputConfig: {
      gcsSource: {
        uri: gcsInputUri,
      },
      mimeType: 'application/pdf',
    },
  };

  // Recognizes text entities in the PDF document
  const [result] = await client.processDocument(request);

  // Get all of the document text as one big string
  const {text} = result;

  // Extract shards from the text field
  function extractText(textAnchor) {
    // First shard in document doesn't have startIndex property
    const startIndex = textAnchor.textSegments[0].startIndex || 0;
    const endIndex = textAnchor.textSegments[0].endIndex;

    return text.substring(startIndex, endIndex);
  }

  for (const entity of result.entities) {
    console.log(`\nEntity text: ${extractText(entity.textAnchor)}`);
    console.log(`Entity type: ${entity.type}`);
    console.log(`Entity mention text: ${entity.mentionText}`);
  }
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-document-ai/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Parse Form | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/parseForm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/parseForm.js,samples/README.md) |
| Parse Table | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/parseTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/parseTable.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Document AI Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-document-ai/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-document-ai/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/documentai/latest/index.html
[product-docs]: https://cloud.google.com/document-understanding/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=documentai.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
