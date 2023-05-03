[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Generative Language API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-ai/generativelanguage.svg)](https://www.npmjs.org/package/@google-ai/generativelanguage)




Generative Language API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage/CHANGELOG.md).

* [Generative Language API Node.js Client API Reference][client-docs]
* [Generative Language API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-ai-generativelanguage](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage)

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
1.  [Enable the Generative Language API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-ai/generativelanguage
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The name of the model to use.
 *  Format: `name=models/{model}`.
 */
// const model = 'abc123'
/**
 *  Required. The structured textual input given to the model as a prompt.
 *  Given a
 *  prompt, the model will return what it predicts is the next message in the
 *  discussion.
 */
// const prompt = {}
/**
 *  Optional. Controls the randomness of the output.
 *  Values can range over `[0.0,1.0]`,
 *  inclusive. A value closer to `1.0` will produce responses that are more
 *  varied, while a value closer to `0.0` will typically result in
 *  less surprising responses from the model.
 */
// const temperature = 1234
/**
 *  Optional. The number of generated response messages to return.
 *  This value must be between
 *  `[1, 8]`, inclusive. If unset, this will default to `1`.
 */
// const candidateCount = 1234
/**
 *  Optional. The maximum cumulative probability of tokens to consider when
 *  sampling.
 *  The model uses combined Top-k and nucleus sampling.
 *  Nucleus sampling considers the smallest set of tokens whose probability
 *  sum is at least `top_p`.
 */
// const topP = 1234
/**
 *  Optional. The maximum number of tokens to consider when sampling.
 *  The model uses combined Top-k and nucleus sampling.
 *  Top-k sampling considers the set of `top_k` most probable tokens.
 */
// const topK = 1234

// Imports the Generativelanguage library
const {DiscussServiceClient} =
  require('@google-ai/generativelanguage').v1beta2;

// Instantiates a client
const generativelanguageClient = new DiscussServiceClient();

async function callGenerateMessage() {
  // Construct request
  const request = {
    model,
    prompt,
  };

  // Run request
  const response = await generativelanguageClient.generateMessage(request);
  console.log(response);
}

callGenerateMessage();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Discuss_service.count_message_tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.count_message_tokens.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Discuss_service.generate_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/discuss_service.generate_message.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Model_service.get_model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.get_model.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Model_service.list_models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/model_service.list_models.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Text_service.embed_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.embed_text.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Text_service.generate_text | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1beta2/text_service.generate_text.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/quickstart.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/test/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/test/quickstart.js,googleapis/google-cloud-node/packages/google-ai-generativelanguage/samples/README.md) |



The [Generative Language API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-ai/generativelanguage@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).







This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.


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

[client-docs]: https://developers.generativeai.google/guide/palm_api_overview#node.js
[product-docs]: https://developers.generativeai.google/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=generativelanguage.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
