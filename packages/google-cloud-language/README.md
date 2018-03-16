<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Natural Language API: Node.js Client](https://github.com/googleapis/nodejs-language)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style&#x3D;flat)](https://cloud.google.com/terms/launch-stages)
[![CircleCI](https://img.shields.io/circleci/project/github/googleapis/nodejs-language.svg?style=flat)](https://circleci.com/gh/googleapis/nodejs-language)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/github/googleapis/nodejs-language?branch=master&svg=true)](https://ci.appveyor.com/project/googleapis/nodejs-language)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-language/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-language)

> Node.js idiomatic client for [Natural Language API][product-docs].

[Cloud Natural Language API](https://cloud.google.com/natural-language/docs) provides natural language understanding technologies to developers, including sentiment analysis, entity analysis, and syntax analysis. This API is part of the larger Cloud Machine Learning API family.


* [Natural Language API Node.js Client API Reference][client-docs]
* [github.com/googleapis/nodejs-language](https://github.com/googleapis/nodejs-language)
* [Natural Language API Documentation][product-docs]

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

1.  Enable the Google Cloud Natural Language API API.

    [Enable the API][enable_api]

1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=language.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

### Installing the client library

    npm install --save @google-cloud/language

### Using the client library

```javascript
// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'Hello, world!';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({document: document})
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
```

## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-language/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Analyze v1 | [source code](https://github.com/googleapis/nodejs-language/blob/master/samples/analyze.v1.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1.js,samples/README.md) |
| Analyze v1beta2 | [source code](https://github.com/googleapis/nodejs-language/blob/master/samples/analyze.v1beta2.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1beta2.js,samples/README.md) |

The [Natural Language API Node.js Client API Reference][client-docs] documentation
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-language/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-language/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/language/latest/
[product-docs]: https://cloud.google.com/natural-language/docs
[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
