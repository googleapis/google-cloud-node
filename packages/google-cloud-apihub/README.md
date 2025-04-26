[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [API hub API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apihub)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/apihub.svg)](https://www.npmjs.org/package/@google-cloud/apihub)




API hub API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apihub/CHANGELOG.md).

* [API hub API Node.js Client API Reference][client-docs]
* [API hub API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-apihub](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apihub)

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
1.  [Enable the API hub API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/apihub
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
 *  Required. The parent, which owns this collection of deployment resources.
 *  Format: `projects/{project}/locations/{location}`
 */
// const parent = 'abc123'
/**
 *  Optional. An expression that filters the list of Deployments.
 *  A filter expression consists of a field name, a comparison
 *  operator, and a value for filtering. The value must be a string. The
 *  comparison operator must be one of: `<`, `>` or
 *  `=`. Filters are not case sensitive.
 *  The following fields in the `Deployments` are eligible for filtering:
 *    * `display_name` - The display name of the Deployment. Allowed
 *    comparison operators: `=`.
 *    * `create_time` - The time at which the Deployment was created. The
 *    value should be in the (RFC3339)https://tools.ietf.org/html/rfc3339
 *    format. Allowed comparison operators: `>` and `<`.
 *    * `resource_uri` - A URI to the deployment resource. Allowed
 *    comparison operators: `=`.
 *    * `api_versions` - The API versions linked to this deployment. Allowed
 *    comparison operators: `:`.
 *    * `deployment_type.enum_values.values.id` - The allowed value id of the
 *    deployment_type attribute associated with the Deployment. Allowed
 *    comparison operators: `:`.
 *    * `deployment_type.enum_values.values.display_name` - The allowed value
 *    display name of the deployment_type attribute associated with the
 *    Deployment. Allowed comparison operators: `:`.
 *    * `slo.string_values.values` -The allowed string value of the slo
 *    attribute associated with the deployment. Allowed comparison
 *    operators: `:`.
 *    * `environment.enum_values.values.id` - The allowed value id of the
 *    environment attribute associated with the deployment. Allowed
 *    comparison operators: `:`.
 *    * `environment.enum_values.values.display_name` - The allowed value
 *    display name of the environment attribute associated with the deployment.
 *    Allowed comparison operators: `:`.
 *  Expressions are combined with either `AND` logic operator or `OR` logical
 *  operator but not both of them together i.e. only one of the `AND` or `OR`
 *  operator can be used throughout the filter string and both the operators
 *  cannot be used together. No other logical operators are supported. At most
 *  three filter fields are allowed in the filter string and if provided
 *  more than that then `INVALID_ARGUMENT` error is returned by the API.
 *  Here are a few examples:
 *    * `environment.enum_values.values.id: staging-id` - The allowed value id
 *    of the environment attribute associated with the Deployment is
 *    _staging-id_.
 *    * `environment.enum_values.values.display_name: \"Staging Deployment\"` -
 *    The allowed value display name of the environment attribute associated
 *    with the Deployment is `Staging Deployment`.
 *    * `environment.enum_values.values.id: production-id AND create_time <
 *    \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` -
 *    The allowed value id of the environment attribute associated with the
 *    Deployment is _production-id_ and Deployment was created before
 *    _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
 *    * `environment.enum_values.values.id: production-id OR
 *    slo.string_values.values: \"99.99%\"`
 *    - The allowed value id of the environment attribute Deployment is
 *    _production-id_ or string value of the slo attribute is _99.99%_.
 */
// const filter = 'abc123'
/**
 *  Optional. The maximum number of deployment resources to return. The service
 *  may return fewer than this value. If unspecified, at most 50 deployments
 *  will be returned. The maximum value is 1000; values above 1000 will be
 *  coerced to 1000.
 */
// const pageSize = 1234
/**
 *  Optional. A page token, received from a previous `ListDeployments` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters (except page_size) provided to
 *  `ListDeployments` must match the call that provided the page token.
 */
// const pageToken = 'abc123'

// Imports the Apihub library
const {ApiHubClient} = require('@google-cloud/apihub').v1;

// Instantiates a client
const apihubClient = new ApiHubClient({fallback: 'rest'});

async function callListDeployments() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = apihubClient.listDeploymentsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListDeployments();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-apihub/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Api_hub.create_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.create_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_attribute.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.create_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_deployment.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.create_external_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_external_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_external_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.create_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_spec.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.create_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.create_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.create_version.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_attribute.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_deployment.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_external_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_external_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_external_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_spec.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.delete_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.delete_version.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_api_operation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_api_operation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_api_operation.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_attribute.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_definition | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_definition.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_definition.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_deployment.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_external_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_external_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_external_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_spec.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_spec_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_spec_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_spec_contents.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.get_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.get_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.get_version.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_api_operations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_api_operations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_api_operations.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_apis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_apis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_apis.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_attributes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_attributes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_attributes.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_deployments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_deployments.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_external_apis | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_external_apis.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_external_apis.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_specs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_specs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_specs.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.list_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.list_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.list_versions.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.search_resources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.search_resources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.search_resources.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_attribute | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_attribute.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_attribute.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_deployment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_deployment.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_external_api | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_external_api.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_external_api.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_spec.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub.update_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub.update_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub.update_version.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_dependencies.create_dependency | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.create_dependency.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.create_dependency.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_dependencies.delete_dependency | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.delete_dependency.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.delete_dependency.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_dependencies.get_dependency | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.get_dependency.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.get_dependency.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_dependencies.list_dependencies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.list_dependencies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.list_dependencies.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_dependencies.update_dependency | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.update_dependency.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_dependencies.update_dependency.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_plugin.disable_plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.disable_plugin.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.disable_plugin.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_plugin.enable_plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.enable_plugin.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.enable_plugin.js,packages/google-cloud-apihub/samples/README.md) |
| Api_hub_plugin.get_plugin | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.get_plugin.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/api_hub_plugin.get_plugin.js,packages/google-cloud-apihub/samples/README.md) |
| Host_project_registration_service.create_host_project_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.create_host_project_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.create_host_project_registration.js,packages/google-cloud-apihub/samples/README.md) |
| Host_project_registration_service.get_host_project_registration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.get_host_project_registration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.get_host_project_registration.js,packages/google-cloud-apihub/samples/README.md) |
| Host_project_registration_service.list_host_project_registrations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.list_host_project_registrations.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/host_project_registration_service.list_host_project_registrations.js,packages/google-cloud-apihub/samples/README.md) |
| Linting_service.get_style_guide | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/linting_service.get_style_guide.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/linting_service.get_style_guide.js,packages/google-cloud-apihub/samples/README.md) |
| Linting_service.get_style_guide_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/linting_service.get_style_guide_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/linting_service.get_style_guide_contents.js,packages/google-cloud-apihub/samples/README.md) |
| Linting_service.lint_spec | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/linting_service.lint_spec.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/linting_service.lint_spec.js,packages/google-cloud-apihub/samples/README.md) |
| Linting_service.update_style_guide | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/linting_service.update_style_guide.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/linting_service.update_style_guide.js,packages/google-cloud-apihub/samples/README.md) |
| Provisioning.create_api_hub_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/provisioning.create_api_hub_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/provisioning.create_api_hub_instance.js,packages/google-cloud-apihub/samples/README.md) |
| Provisioning.get_api_hub_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/provisioning.get_api_hub_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/provisioning.get_api_hub_instance.js,packages/google-cloud-apihub/samples/README.md) |
| Provisioning.lookup_api_hub_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/provisioning.lookup_api_hub_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/provisioning.lookup_api_hub_instance.js,packages/google-cloud-apihub/samples/README.md) |
| Runtime_project_attachment_service.create_runtime_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.create_runtime_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.create_runtime_project_attachment.js,packages/google-cloud-apihub/samples/README.md) |
| Runtime_project_attachment_service.delete_runtime_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.delete_runtime_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.delete_runtime_project_attachment.js,packages/google-cloud-apihub/samples/README.md) |
| Runtime_project_attachment_service.get_runtime_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.get_runtime_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.get_runtime_project_attachment.js,packages/google-cloud-apihub/samples/README.md) |
| Runtime_project_attachment_service.list_runtime_project_attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.list_runtime_project_attachments.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.list_runtime_project_attachments.js,packages/google-cloud-apihub/samples/README.md) |
| Runtime_project_attachment_service.lookup_runtime_project_attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.lookup_runtime_project_attachment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/generated/v1/runtime_project_attachment_service.lookup_runtime_project_attachment.js,packages/google-cloud-apihub/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apihub/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-apihub/samples/quickstart.js,packages/google-cloud-apihub/samples/README.md) |



The [API hub API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/apihub@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/apihub/latest
[product-docs]: https://cloud.google.com/apigee/docs/apihub/what-is-api-hub
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=apihub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
