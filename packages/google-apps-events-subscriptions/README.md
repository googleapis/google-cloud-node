[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Workspace Events API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-events-subscriptions)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/subscriptions.svg)](https://www.npmjs.org/package/@google-cloud/subscriptions)




Google Workspace Events API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-events-subscriptions/CHANGELOG.md).

* [Google Workspace Events API Node.js Client API Reference][client-docs]
* [Google Workspace Events API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-apps-events-subscriptions](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-events-subscriptions)

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
1.  [Enable the Google Workspace Events API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/subscriptions
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
 *  Optional. The maximum number of subscriptions to return. The service might
 *  return fewer than this value.
 *  If unspecified or set to `0`, up to 50 subscriptions are returned.
 *  The maximum value is 100. If you specify a value more than 100, the system
 *  only returns 100 subscriptions.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous list subscriptions call.
 *  Provide this parameter to retrieve the subsequent page.
 *  When paginating, the filter value should match the call that provided the
 *  page token. Passing a different value might lead to unexpected results.
 */
// const pageToken = 'abc123'
/**
 *  Required. A query filter.
 *  You can filter subscriptions by event type (`event_types`)
 *  and target resource (`target_resource`).
 *  You must specify at least one event type in your query. To filter for
 *  multiple event types, use the `OR` operator.
 *  To filter by both event type and target resource, use the `AND` operator
 *  and specify the full resource name, such as
 *  `//chat.googleapis.com/spaces/{space}`.
 *  For example, the following queries are valid:
 *  ```
 *  event_types:"google.workspace.chat.membership.v1.updated" OR
 *    event_types:"google.workspace.chat.message.v1.created"
 *  event_types:"google.workspace.chat.message.v1.created" AND
 *    target_resource="//chat.googleapis.com/spaces/{space}"
 *  ( event_types:"google.workspace.chat.membership.v1.updated" OR
 *    event_types:"google.workspace.chat.message.v1.created" ) AND
 *    target_resource="//chat.googleapis.com/spaces/{space}"
 *  ```
 *  The server rejects invalid queries with an `INVALID_ARGUMENT`
 *  error.
 */
// const filter = 'abc123'

// Imports the Subscriptions library
const {SubscriptionsServiceClient} =
  require('@google-cloud/subscriptions').v1;

// Instantiates a client
const subscriptionsClient = new SubscriptionsServiceClient();

async function callListSubscriptions() {
  // Construct request
  const request = {
    filter: 'event_types:"google.workspace.chat.membership.v1.updated"',
  };

  try {
    // Run request
    const iterable = subscriptionsClient.listSubscriptionsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}

callListSubscriptions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-apps-events-subscriptions/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Subscriptions_service.create_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.create_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.create_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.delete_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.delete_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.delete_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.get_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.get_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.get_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.list_subscriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.list_subscriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.list_subscriptions.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.reactivate_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.reactivate_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.reactivate_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.update_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.update_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1/subscriptions_service.update_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.create_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.create_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.create_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.delete_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.delete_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.delete_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.get_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.get_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.get_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.list_subscriptions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.list_subscriptions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.list_subscriptions.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.reactivate_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.reactivate_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.reactivate_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Subscriptions_service.update_subscription | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.update_subscription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/generated/v1beta/subscriptions_service.update_subscription.js,packages/google-apps-events-subscriptions/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-apps-events-subscriptions/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-apps-events-subscriptions/samples/quickstart.js,packages/google-apps-events-subscriptions/samples/README.md) |



The [Google Workspace Events API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/subscriptions@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/workspaceevents/latest
[product-docs]: https://developers.google.com/workspace/events
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=workspaceevents.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
