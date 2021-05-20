[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Document AI: Node.js Client](https://github.com/googleapis/nodejs-document-ai)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/documentai.svg)](https://www.npmjs.org/package/@google-cloud/documentai)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-document-ai/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-document-ai)




Document AI client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-document-ai/blob/master/CHANGELOG.md).

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
// const location = 'YOUR_PROJECT_LOCATION'; // Format is 'us' or 'eu'
// const processorId = 'YOUR_PROCESSOR_ID'; // Create processor in Cloud Console
// const filePath = '/path/to/local/pdf';

const {DocumentProcessorServiceClient} =
  require('@google-cloud/documentai').v1;

// Instantiates a client
// apiEndpoint regions available: eu-documentai.googleapis.com, us-documentai.googleapis.com (Required if using eu based processor)
// const client = new DocumentProcessorServiceClient({apiEndpoint: 'eu-documentai.googleapis.com'});
const client = new DocumentProcessorServiceClient();

async function quickstart() {
  // The full resource name of the processor, e.g.:
  // projects/project-id/locations/location/processor/processor-id
  // You must create new processors in the Cloud Console first
  const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

  // Read the file into memory.
  const fs = require('fs').promises;
  const imageFile = await fs.readFile(filePath);

  // Convert the image data to a Buffer and base64 encode it.
  const encodedImage = Buffer.from(imageFile).toString('base64');

  const request = {
    name,
    rawDocument: {
      content: encodedImage,
      mimeType: 'application/pdf',
    },
  };

  // Recognizes text entities in the PDF document
  const [result] = await client.processDocument(request);
  const {document} = result;

  // Get all of the document text as one big string
  const {text} = document;

  // Extract shards from the text field
  const getText = textAnchor => {
    if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
      return '';
    }

    // First shard in document doesn't have startIndex property
    const startIndex = textAnchor.textSegments[0].startIndex || 0;
    const endIndex = textAnchor.textSegments[0].endIndex;

    return text.substring(startIndex, endIndex);
  };

  // Read the text recognition output from the processor
  console.log('The document contains the following paragraphs:');
  const [page1] = document.pages;
  const {paragraphs} = page1;

  for (const paragraph of paragraphs) {
    const paragraphText = getText(paragraph.layout.textAnchor);
    console.log(`Paragraph text:\n${paragraphText}`);
  }
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-document-ai/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Batch-parse-form.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/batch-parse-form.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/batch-parse-form.v1beta2.js,samples/README.md) |
| Batch-parse-table.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/batch-parse-table.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/batch-parse-table.v1beta2.js,samples/README.md) |
| Batch-process-document | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/batch-process-document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/batch-process-document.js,samples/README.md) |
| Parse-form.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/parse-form.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/parse-form.v1beta2.js,samples/README.md) |
| Parse-table.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/parse-table.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/parse-table.v1beta2.js,samples/README.md) |
| Parse-with-model.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/parse-with-model.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/parse-with-model.v1beta2.js,samples/README.md) |
| Process-document | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/process-document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/process-document.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Set-endpoint.v1beta2 | [source code](https://github.com/googleapis/nodejs-document-ai/blob/master/samples/set-endpoint.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-document-ai&page=editor&open_in_editor=samples/set-endpoint.v1beta2.js,samples/README.md) |



The [Document AI Node.js Client API Reference][client-docs] documentation
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
