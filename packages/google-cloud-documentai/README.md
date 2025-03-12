[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Document AI: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-documentai)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/documentai.svg)](https://www.npmjs.org/package/@google-cloud/documentai)




Document AI client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-documentai/CHANGELOG.md).

* [Document AI Node.js Client API Reference][client-docs]
* [Document AI Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-documentai](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-documentai)

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

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-documentai/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Document_processor_service.batch_process_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.batch_process_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.batch_process_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.create_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.create_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.create_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.delete_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.delete_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.delete_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.deploy_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.deploy_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.deploy_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.disable_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.disable_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.disable_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.enable_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.enable_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.enable_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.evaluate_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.evaluate_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.evaluate_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.fetch_processor_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.fetch_processor_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.fetch_processor_types.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_evaluation.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_type.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.get_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_evaluations.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processor_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_types.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processor_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processor_versions.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.list_processors.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.process_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.process_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.process_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.review_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.review_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.review_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.set_default_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.set_default_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.set_default_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.train_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.train_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.train_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.undeploy_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1/document_processor_service.undeploy_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1/document_processor_service.undeploy_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_understanding_service.batch_process_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta1/document_understanding_service.batch_process_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta1/document_understanding_service.batch_process_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_understanding_service.batch_process_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta2/document_understanding_service.batch_process_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta2/document_understanding_service.batch_process_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_understanding_service.process_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta2/document_understanding_service.process_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta2/document_understanding_service.process_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.batch_process_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.batch_process_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.batch_process_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.create_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.create_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.create_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.delete_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.delete_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.delete_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.deploy_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.deploy_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.deploy_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.disable_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.disable_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.disable_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.enable_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.enable_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.enable_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.evaluate_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.evaluate_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.evaluate_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.fetch_processor_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.fetch_processor_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.fetch_processor_types.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_evaluation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_evaluation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_evaluation.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_type.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.get_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.get_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.import_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.import_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.import_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_evaluations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_evaluations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_evaluations.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processor_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_types.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processor_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processor_versions.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.list_processors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.list_processors.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.process_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.process_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.process_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.review_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.review_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.review_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.set_default_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.set_default_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.set_default_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.train_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.train_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.train_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_processor_service.undeploy_processor_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.undeploy_processor_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_processor_service.undeploy_processor_version.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.batch_delete_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.batch_delete_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.batch_delete_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.get_dataset_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_dataset_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_dataset_schema.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.get_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.get_document.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.import_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.import_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.import_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.list_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.list_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.list_documents.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.update_dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset.js,packages/google-cloud-documentai/samples/README.md) |
| Document_service.update_dataset_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/generated/v1beta3/document_service.update_dataset_schema.js,packages/google-cloud-documentai/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-documentai/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-documentai/samples/quickstart.js,packages/google-cloud-documentai/samples/README.md) |



The [Document AI Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
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
For example, `npm install @google-cloud/documentai@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/documentai/latest
[product-docs]: https://cloud.google.com/document-ai/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=documentai.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
