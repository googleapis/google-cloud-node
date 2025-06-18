[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Service Health API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicehealth)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/servicehealth.svg)](https://www.npmjs.org/package/@google-cloud/servicehealth)




Service Health API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicehealth/CHANGELOG.md).

* [Service Health API Node.js Client API Reference][client-docs]
* [Service Health API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-servicehealth](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicehealth)

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
1.  [Enable the Service Health API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/servicehealth
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
 *  Required. Parent value using the form
 *  `projects/{project_id}/locations/{location}/events`.
 *  `project_id` - ID of the project for which to list service health
 *  events.
 *  `location` - The location to get the service health events from.
 *  To retrieve service health events of category = INCIDENT, use `location` =
 *  `global`.
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of events that should be returned.  Acceptable
 *  values are 1 to 100, inclusive. (The default value is 10.) If more results
 *  are available, the service returns a next_page_token that you can use to
 *  get the next page of results in subsequent list requests. The service may
 *  return fewer events than the requested page_size.
 */
// const pageSize = 1234
/**
 *  Optional. A token identifying a page of results the server should return.
 *  Provide Page token returned by a previous `ListEvents` call to retrieve the
 *  next page of results. When paginating, all other parameters provided to
 *  `ListEvents` must match the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Optional. A filter expression that filters resources listed in the
 *  response. The expression takes the following forms: <br>
 *  *   field=value for `category` and `state`<br>
 *  *   field &lt;, >, &lt;=, or >= value for `update_time` <br>
 *  Examples: `category=INCIDENT`, `update_time>=2000-01-01T11:30:00-04:00`
 *  <br>
 *  Multiple filter queries are separated by spaces. Example:
 *  `category=INCIDENT state=ACTIVE`.
 *  By default, each expression is an AND expression. However, you can include
 *  AND and OR expressions explicitly.
 *  Filter is supported for the following fields: `category`, `state`,
 *  `update_time`
 */
// const filter = 'abc123'
/**
 *  Optional. Event fields to include in response.
 */
// const view = {}

// Imports the Servicehealth library
const {ServiceHealthClient} = require('@google-cloud/servicehealth').v1;

// Instantiates a client
const servicehealthClient = new ServiceHealthClient();

async function callListEvents() {
  // Construct request
  const request = {
    parent,
    pageSize,
  };

  // Run request
  const response = await servicehealthClient.listEvents(request, {
    autopaginate: false,
  });
  console.log(response);
}

callListEvents();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicehealth/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Service_health.get_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_event.js,packages/google-cloud-servicehealth/samples/README.md) |
| Service_health.get_organization_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_organization_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_organization_event.js,packages/google-cloud-servicehealth/samples/README.md) |
| Service_health.get_organization_impact | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_organization_impact.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.get_organization_impact.js,packages/google-cloud-servicehealth/samples/README.md) |
| Service_health.list_events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_events.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_events.js,packages/google-cloud-servicehealth/samples/README.md) |
| Service_health.list_organization_events | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_organization_events.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_organization_events.js,packages/google-cloud-servicehealth/samples/README.md) |
| Service_health.list_organization_impacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_organization_impacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/generated/v1/service_health.list_organization_impacts.js,packages/google-cloud-servicehealth/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicehealth/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicehealth/samples/quickstart.js,packages/google-cloud-servicehealth/samples/README.md) |



The [Service Health API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/servicehealth@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/servicehealth/latest
[product-docs]: https://cloud.google.com/service-health/docs/overview
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=servicehealth.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
