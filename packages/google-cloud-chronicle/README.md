[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Chronicle API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-chronicle)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/chronicle.svg)](https://www.npmjs.org/package/@google-cloud/chronicle)




Chronicle API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-chronicle/CHANGELOG.md).

* [Chronicle API Node.js Client API Reference][client-docs]
* [Chronicle API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-chronicle](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-chronicle)

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
1.  [Enable the Chronicle API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/chronicle
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
 *  Required. The resource name of the reference list to retrieve.
 *  Format:
 *  `projects/{project}/locations/{locations}/instances/{instance}/referenceLists/{reference_list}`
 */
// const name = 'abc123'
/**
 *  How much of the ReferenceList to view. Defaults to
 *  REFERENCE_LIST_VIEW_FULL.
 */
// const view = {}

// Imports the Chronicle library
const {ReferenceListServiceClient} = require('@google-cloud/chronicle').v1;

// Instantiates a client
const chronicleClient = new ReferenceListServiceClient();

async function callGetReferenceList() {
  // Construct request
  const request = {
    name,
  };

  // Run request
  const response = await chronicleClient.getReferenceList(request);
  console.log(response);
}

callGetReferenceList();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-chronicle/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_access_control_service.create_data_access_label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_label.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_label.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.create_data_access_scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_scope.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_scope.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.delete_data_access_label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_label.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_label.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.delete_data_access_scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_scope.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_scope.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.get_data_access_label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_label.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_label.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.get_data_access_scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_scope.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_scope.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.list_data_access_labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_labels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_labels.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.list_data_access_scopes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_scopes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_scopes.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.update_data_access_label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_label.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_label.js,packages/google-cloud-chronicle/samples/README.md) |
| Data_access_control_service.update_data_access_scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_scope.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_scope.js,packages/google-cloud-chronicle/samples/README.md) |
| Entity_service.create_watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.create_watchlist.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/entity_service.create_watchlist.js,packages/google-cloud-chronicle/samples/README.md) |
| Entity_service.delete_watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.delete_watchlist.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/entity_service.delete_watchlist.js,packages/google-cloud-chronicle/samples/README.md) |
| Entity_service.get_watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.get_watchlist.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/entity_service.get_watchlist.js,packages/google-cloud-chronicle/samples/README.md) |
| Entity_service.list_watchlists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.list_watchlists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/entity_service.list_watchlists.js,packages/google-cloud-chronicle/samples/README.md) |
| Entity_service.update_watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.update_watchlist.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/entity_service.update_watchlist.js,packages/google-cloud-chronicle/samples/README.md) |
| Instance_service.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/instance_service.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/instance_service.get_instance.js,packages/google-cloud-chronicle/samples/README.md) |
| Reference_list_service.create_reference_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.create_reference_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.create_reference_list.js,packages/google-cloud-chronicle/samples/README.md) |
| Reference_list_service.get_reference_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.get_reference_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.get_reference_list.js,packages/google-cloud-chronicle/samples/README.md) |
| Reference_list_service.list_reference_lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.list_reference_lists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.list_reference_lists.js,packages/google-cloud-chronicle/samples/README.md) |
| Reference_list_service.update_reference_list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.update_reference_list.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.update_reference_list.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.create_retrohunt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_retrohunt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_retrohunt.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.create_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_rule.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.delete_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.delete_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.delete_rule.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.get_retrohunt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_retrohunt.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_retrohunt.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.get_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.get_rule_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule_deployment.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.list_retrohunts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_retrohunts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_retrohunts.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.list_rule_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_deployments.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.list_rule_revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_revisions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_revisions.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.list_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rules.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.update_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule.js,packages/google-cloud-chronicle/samples/README.md) |
| Rule_service.update_rule_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule_deployment.js,packages/google-cloud-chronicle/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-chronicle/samples/quickstart.js,packages/google-cloud-chronicle/samples/README.md) |



The [Chronicle API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/chronicle@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/chronicle/latest
[product-docs]: https://cloud.google.com/chronicle/docs/secops/secops-overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=chronicle.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
