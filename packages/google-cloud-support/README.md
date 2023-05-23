[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Support API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-support)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/support.svg)](https://www.npmjs.org/package/@google-cloud/support)




Google Cloud Support API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-support/CHANGELOG.md).

* [Google Cloud Support API Node.js Client API Reference][client-docs]
* [Google Cloud Support API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-support](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-support)

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
1.  [Enable the Google Cloud Support API API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/support
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
 *  Required. The fully qualified name of parent resource to list cases under.
 */
// const parent = 'abc123'
/**
 *  An expression written in filter language. If non-empty, the query returns
 *  the cases that match the filter. Else, the query doesn't filter the cases.
 *  Filter expressions use the following fields with the operators equals (`=`)
 *  and `AND`:
 *  - `state`: The accepted values are `OPEN` or `CLOSED`.
 *  - `priority`: The accepted values are `P0`, `P1`, `P2`, `P3`, or `P4`. You
 *  can specify multiple values for priority using the `OR` operator. For
 *  example, `priority=P1 OR priority=P2`.
 *  - `creator.email`: The email address of the case creator.
 *  Examples:
 *  - `state=CLOSED`
 *  - `state=OPEN AND creator.email="tester@example.com"`
 *  - `state=OPEN AND (priority=P0 OR priority=P1)`
 */
// const filter = 'abc123'
/**
 *  The maximum number of cases fetched with each request. Defaults to 10.
 */
// const pageSize = 1234
/**
 *  A token identifying the page of results to return. If unspecified, the
 *  first page is retrieved.
 */
// const pageToken = 'abc123'

// Imports the Support library
const {CaseServiceClient} = require('@google-cloud/support').v2;

// Instantiates a client
const supportClient = new CaseServiceClient();

async function callListCases() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await supportClient.listCasesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListCases();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-support/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Case_attachment_service.list_attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_attachment_service.list_attachments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_attachment_service.list_attachments.js,packages/google-cloud-support/samples/README.md) |
| Case_service.close_case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.close_case.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.close_case.js,packages/google-cloud-support/samples/README.md) |
| Case_service.create_case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.create_case.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.create_case.js,packages/google-cloud-support/samples/README.md) |
| Case_service.escalate_case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.escalate_case.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.escalate_case.js,packages/google-cloud-support/samples/README.md) |
| Case_service.get_case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.get_case.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.get_case.js,packages/google-cloud-support/samples/README.md) |
| Case_service.list_cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.list_cases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.list_cases.js,packages/google-cloud-support/samples/README.md) |
| Case_service.search_case_classifications | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.search_case_classifications.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.search_case_classifications.js,packages/google-cloud-support/samples/README.md) |
| Case_service.search_cases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.search_cases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.search_cases.js,packages/google-cloud-support/samples/README.md) |
| Case_service.update_case | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/case_service.update_case.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/case_service.update_case.js,packages/google-cloud-support/samples/README.md) |
| Comment_service.create_comment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/comment_service.create_comment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/comment_service.create_comment.js,packages/google-cloud-support/samples/README.md) |
| Comment_service.list_comments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/generated/v2/comment_service.list_comments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/generated/v2/comment_service.list_comments.js,packages/google-cloud-support/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-support/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-support/samples/quickstart.js,packages/google-cloud-support/samples/README.md) |



The [Google Cloud Support API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/support@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/cloudsupport/latest
[product-docs]: https://cloud.google.com/support/docs/reference/support-api
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudsupport.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
