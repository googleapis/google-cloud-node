[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud reCAPTCHA Enterprise: Node.js Client](https://github.com/googleapis/nodejs-recaptcha-enterprise)

[![release level](https://img.shields.io/badge/release%20level-alpha-orange.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/recaptcha-enterprise.svg)](https://www.npmjs.org/package/@google-cloud/recaptcha-enterprise)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-recaptcha-enterprise/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-recaptcha-enterprise)




reCAPTCHA Enterprise API client for Node.js


* [Google Cloud reCAPTCHA Enterprise Node.js Client API Reference][client-docs]
* [Google Cloud reCAPTCHA Enterprise Documentation][product-docs]
* [github.com/googleapis/nodejs-recaptcha-enterprise](https://github.com/googleapis/nodejs-recaptcha-enterprise)

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
1.  [Enable the Google Cloud reCAPTCHA Enterprise API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/recaptcha-enterprise
```


### Using the client library

```javascript
/**
 * Instantiate the reCAPTCHA Enterprise client and make request.
 * @param {string} projectNumber The project number to use when making requests.
 */
async function main(projectNumber) {
  // Create the reCAPTCHA client library.
  const {
    RecaptchaEnterpriseServiceV1Beta1Client,
  } = require('@google-cloud/recaptcha-enterprise');
  const client = new RecaptchaEnterpriseServiceV1Beta1Client();

  // format the path to the project (it should be prefaced with projects/).
  const formattedParent = client.projectPath(projectNumber);
  // assessment should contain event with RESPONSE_TOKEN and RECAPTCHA_SITE_KEY:
  // "{'event': {'token': 'RESPONSE_TOKEN', 'siteKey': 'RECAPTCHA_SITE_KEY'}}"
  const assessment = {};

  const request = {
    parent: formattedParent,
    assessment: assessment,
  };

  await client.createAssessment(request);
}

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-recaptcha-enterprise/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-recaptcha-enterprise/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-recaptcha-enterprise&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud reCAPTCHA Enterprise Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).




This library is considered to be in **alpha**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.



More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-recaptcha-enterprise/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-recaptcha-enterprise/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/recaptcha-enterprise/latest#reference
[product-docs]: https://cloud.google.com/recaptcha-enterprise/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=recaptchaenterprise.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

<a name="reference"></a>
