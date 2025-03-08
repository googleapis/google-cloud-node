[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Chat API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-apps/chat.svg)](https://www.npmjs.org/package/@google-apps/chat)




Google Chat API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat/CHANGELOG.md).

* [Google Chat API Node.js Client API Reference][client-docs]
* [Google Chat API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-chat](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat)

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
1.  [Enable the Google Chat API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-apps/chat
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
 *  Optional. The maximum number of spaces to return. The service might return
 *  fewer than this value.
 *  If unspecified, at most 100 spaces are returned.
 *  The maximum value is 1,000. If you use a value more than 1,000, it's
 *  automatically changed to 1,000.
 *  Negative values return an `INVALID_ARGUMENT` error.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous list spaces call.
 *  Provide this parameter to retrieve the subsequent page.
 *  When paginating, the filter value should match the call that provided the
 *  page token. Passing a different value may lead to unexpected results.
 */
// const pageToken = 'abc123'
/**
 *  Optional. A query filter.
 *  You can filter spaces by the space type
 *  (`space_type` (https://developers.google.com/chat/api/reference/rest/v1/spaces#spacetype)).
 *  To filter by space type, you must specify valid enum value, such as
 *  `SPACE` or `GROUP_CHAT` (the `space_type` can't be
 *  `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR`
 *  operator.
 *  For example, the following queries are valid:
 *  ```
 *  space_type = "SPACE"
 *  spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE"
 *  ```
 *  Invalid queries are rejected by the server with an `INVALID_ARGUMENT`
 *  error.
 */
// const filter = 'abc123'

// Imports the Chat library
const {ChatServiceClient} = require('@google-apps/chat').v1;

// Instantiates a client
const chatClient = new ChatServiceClient();

async function callListSpaces() {
  // Construct request
  const request = {};

  // Run request
  const iterable = chatClient.listSpacesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListSpaces();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-chat/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Chat_service.complete_import_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.complete_import_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.complete_import_space.js,packages/google-chat/samples/README.md) |
| Chat_service.create_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.create_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.create_membership.js,packages/google-chat/samples/README.md) |
| Chat_service.create_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.create_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.create_message.js,packages/google-chat/samples/README.md) |
| Chat_service.create_reaction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.create_reaction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.create_reaction.js,packages/google-chat/samples/README.md) |
| Chat_service.create_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.create_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.create_space.js,packages/google-chat/samples/README.md) |
| Chat_service.delete_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.delete_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.delete_membership.js,packages/google-chat/samples/README.md) |
| Chat_service.delete_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.delete_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.delete_message.js,packages/google-chat/samples/README.md) |
| Chat_service.delete_reaction | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.delete_reaction.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.delete_reaction.js,packages/google-chat/samples/README.md) |
| Chat_service.delete_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.delete_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.delete_space.js,packages/google-chat/samples/README.md) |
| Chat_service.find_direct_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.find_direct_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.find_direct_message.js,packages/google-chat/samples/README.md) |
| Chat_service.get_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_attachment.js,packages/google-chat/samples/README.md) |
| Chat_service.get_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_membership.js,packages/google-chat/samples/README.md) |
| Chat_service.get_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_message.js,packages/google-chat/samples/README.md) |
| Chat_service.get_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_space.js,packages/google-chat/samples/README.md) |
| Chat_service.get_space_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_space_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_space_event.js,packages/google-chat/samples/README.md) |
| Chat_service.get_space_read_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_space_read_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_space_read_state.js,packages/google-chat/samples/README.md) |
| Chat_service.get_thread_read_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.get_thread_read_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.get_thread_read_state.js,packages/google-chat/samples/README.md) |
| Chat_service.list_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.list_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.list_memberships.js,packages/google-chat/samples/README.md) |
| Chat_service.list_messages | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.list_messages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.list_messages.js,packages/google-chat/samples/README.md) |
| Chat_service.list_reactions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.list_reactions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.list_reactions.js,packages/google-chat/samples/README.md) |
| Chat_service.list_space_events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.list_space_events.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.list_space_events.js,packages/google-chat/samples/README.md) |
| Chat_service.list_spaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.list_spaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.list_spaces.js,packages/google-chat/samples/README.md) |
| Chat_service.search_spaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.search_spaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.search_spaces.js,packages/google-chat/samples/README.md) |
| Chat_service.set_up_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.set_up_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.set_up_space.js,packages/google-chat/samples/README.md) |
| Chat_service.update_membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.update_membership.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.update_membership.js,packages/google-chat/samples/README.md) |
| Chat_service.update_message | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.update_message.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.update_message.js,packages/google-chat/samples/README.md) |
| Chat_service.update_space | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.update_space.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.update_space.js,packages/google-chat/samples/README.md) |
| Chat_service.update_space_read_state | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.update_space_read_state.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.update_space_read_state.js,packages/google-chat/samples/README.md) |
| Chat_service.upload_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/generated/v1/chat_service.upload_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/generated/v1/chat_service.upload_attachment.js,packages/google-chat/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-chat/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-chat/samples/quickstart.js,packages/google-chat/samples/README.md) |



The [Google Chat API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-apps/chat@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/chat/latest
[product-docs]: https://developers.google.com/chat/concepts
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
