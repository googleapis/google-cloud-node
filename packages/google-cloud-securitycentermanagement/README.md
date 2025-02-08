[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Security Center Management API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycentermanagement)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/securitycentermanagement.svg)](https://www.npmjs.org/package/@google-cloud/securitycentermanagement)




Security Center Management API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycentermanagement/CHANGELOG.md).

* [Security Center Management API Node.js Client API Reference][client-docs]
* [Security Center Management API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-securitycentermanagement](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycentermanagement)

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
1.  [Enable the Security Center Management API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/securitycentermanagement
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
 *  Required. Name of parent to list effective custom modules. Its format is
 *  "organizations/{organization}/locations/{location}",
 *  "folders/{folder}/locations/{location}",
 *  or
 *  "projects/{project}/locations/{location}"
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of results to return in a single response.
 *  Default is 10, minimum is 1, maximum is 1000.
 */
// const pageSize = 1234
/**
 *  Optional. The value returned by the last call indicating a continuation
 */
// const pageToken = 'abc123'

// Imports the Securitycentermanagement library
const {SecurityCenterManagementClient} =
  require('@google-cloud/securitycentermanagement').v1;

// Instantiates a client
const securitycentermanagementClient = new SecurityCenterManagementClient();

async function callListEffectiveEventThreatDetectionCustomModules() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable =
    securitycentermanagementClient.listEffectiveEventThreatDetectionCustomModulesAsync(
      request
    );
  for await (const response of iterable) {
    console.log(response);
  }
}

callListEffectiveEventThreatDetectionCustomModules();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-securitycentermanagement/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Security_center_management.create_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.create_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.create_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.create_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.create_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.create_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.delete_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.delete_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.delete_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.delete_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.delete_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.delete_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.get_effective_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_effective_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_effective_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.get_effective_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_effective_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_effective_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.get_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.get_security_center_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_security_center_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_security_center_service.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.get_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.get_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_descendant_event_threat_detection_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_descendant_event_threat_detection_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_descendant_event_threat_detection_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_descendant_security_health_analytics_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_descendant_security_health_analytics_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_descendant_security_health_analytics_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_effective_event_threat_detection_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_effective_event_threat_detection_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_effective_event_threat_detection_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_effective_security_health_analytics_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_effective_security_health_analytics_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_effective_security_health_analytics_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_event_threat_detection_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_event_threat_detection_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_event_threat_detection_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_security_center_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_security_center_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_security_center_services.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.list_security_health_analytics_custom_modules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_security_health_analytics_custom_modules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.list_security_health_analytics_custom_modules.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.simulate_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.simulate_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.simulate_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.update_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.update_security_center_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_security_center_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_security_center_service.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.update_security_health_analytics_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_security_health_analytics_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.update_security_health_analytics_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Security_center_management.validate_event_threat_detection_custom_module | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.validate_event_threat_detection_custom_module.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/generated/v1/security_center_management.validate_event_threat_detection_custom_module.js,packages/google-cloud-securitycentermanagement/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-securitycentermanagement/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-securitycentermanagement/samples/quickstart.js,packages/google-cloud-securitycentermanagement/samples/README.md) |



The [Security Center Management API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/securitycentermanagement@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/securitycentermanagement/latest
[product-docs]: https://cloud.google.com/security-command-center/docs/reference/security-center-management/rest
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=securitycentermanagement.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
