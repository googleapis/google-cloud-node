[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [BeyondCorp API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-appconnectors)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/appconnectors.svg)](https://www.npmjs.org/package/@google-cloud/appconnectors)




BeyondCorp API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-appconnectors/CHANGELOG.md).

* [BeyondCorp API Node.js Client API Reference][client-docs]
* [BeyondCorp API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-beyondcorp-appconnectors](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-appconnectors)

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
1.  [Enable the BeyondCorp API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/appconnectors
```


### Using the client library

```javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The resource name of the AppConnector location using the form:
 *  `projects/{project_id}/locations/{location_id}`
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of items to return.
 *  If not specified, a default value of 50 will be used by the service.
 *  Regardless of the page_size value, the response may include a partial list
 *  and a caller should only rely on response's
 *  next_page_token BeyondCorp.ListAppConnectorsResponse.next_page_token  to
 *  determine if there are more instances left to be queried.
 */
// const pageSize = 1234
/**
 *  Optional. The next_page_token value returned from a previous
 *  ListAppConnectorsRequest, if any.
 */
// const pageToken = 'abc123'
/**
 *  Optional. A filter specifying constraints of a list operation.
 */
// const filter = 'abc123'
/**
 *  Optional. Specifies the ordering of results. See
 *  Sorting
 *  order (https://cloud.google.com/apis/design/design_patterns#sorting_order)
 *  for more information.
 */
// const orderBy = 'abc123'

// Imports the Appconnectors library
const {AppConnectorsServiceClient} =
  require('@google-cloud/appconnectors').v1;

// Instantiates a client
const appconnectorsClient = new AppConnectorsServiceClient();

async function callListAppConnectors() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await appconnectorsClient.listAppConnectorsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListAppConnectors();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-beyondcorp-appconnectors/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| App_connectors_service.create_app_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.create_app_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.create_app_connector.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| App_connectors_service.delete_app_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.delete_app_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.delete_app_connector.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| App_connectors_service.get_app_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.get_app_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.get_app_connector.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| App_connectors_service.list_app_connectors | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.list_app_connectors.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.list_app_connectors.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| App_connectors_service.report_status | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.report_status.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.report_status.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| App_connectors_service.update_app_connector | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.update_app_connector.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/generated/v1/app_connectors_service.update_app_connector.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-beyondcorp-appconnectors/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-beyondcorp-appconnectors/samples/quickstart.js,packages/google-cloud-beyondcorp-appconnectors/samples/README.md) |



The [BeyondCorp API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/appconnectors@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/beyondcorp/latest
[product-docs]: https://cloud.google.com/beyondcorp
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=beyondcorp.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
