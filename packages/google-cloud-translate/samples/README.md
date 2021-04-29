[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Translation: Node.js Samples](https://github.com/googleapis/nodejs-translate)

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Translation API](https://cloud.google.com/translate/docs/),
can dynamically translate text between thousands
of language pairs. The Cloud Translation API lets websites and programs
integrate with the translation service programmatically. The Cloud Translation
API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Hybrid Glossaries](#hybrid-glossaries)
  * [Quickstart](#quickstart)
  * [Translate](#translate)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-translate#using-the-client-library).

### Translate V3 Beta Samples

#### Install Dependencies

From the [root directory](https://github.com/googleapis/nodejs-translate) of the client library install the dependencies:

```
npm install
```

Change to the samples directory, link the google-cloud/translate library from the parent, and install its dependencies:

```
cd samples/
npm link ../
npm install
```

#### Run the Tests

To run the tests for the entire sample, run

```
npm test
```

To run the tests for only the translate v3 samples, run

```
npm run test-v3
```

To run the tests for a single translate v3 sample, run this command, substituting FILE_NAME with the name of a valid test file.

```
./node_modules/.bin/mocha test/v3beta1/FILE_NAME
```

For example, to test the `translate_list_language_names_beta` sample, the command would be

```
./node_modules/.bin/mocha test/v3beta1/translate_list_language_names_beta.test.js
```

To run a sample directly, call the file with the `node` command and any required CLI arguments:

```
node v3beta1/FILE_NAME <CLI argument 0> <CLI argument 1>
```

For example, to run the `translate_list_codes_beta` sample, you would run the following command, substituting your project ID in place of "your_project_id"

```
node v3beta1/translate_list_codes_beta.js "your_project_id"
```

`cd samples`

`npm install`

`cd ..`

## Samples



### Hybrid Glossaries

View the [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/hybridGlossaries.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/hybridGlossaries.js,samples/README.md)

__Usage:__


`node samples/hybridGlossaries.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Translate

View the [source code](https://github.com/googleapis/nodejs-translate/blob/master/samples/translate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/translate.js,samples/README.md)

__Usage:__


`node samples/translate.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/translate/docs/
