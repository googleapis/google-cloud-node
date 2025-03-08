[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Service Directory: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicedirectory)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/service-directory.svg)](https://www.npmjs.org/package/@google-cloud/service-directory)




Servicedirectory client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicedirectory/CHANGELOG.md).

* [Service Directory Node.js Client API Reference][client-docs]

* [github.com/googleapis/google-cloud-node/packages/google-cloud-servicedirectory](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicedirectory)

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
1.  [Enable the Service Directory API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/service-directory
```


### Using the client library

```javascript
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-central1';

// Imports the Google Cloud client library
const {
  RegistrationServiceClient,
} = require('@google-cloud/service-directory');

// Creates a client
const registrationServiceClient = new RegistrationServiceClient();

// Build the location name
const locationName = registrationServiceClient.locationPath(
  projectId,
  locationId
);

async function listNamespaces() {
  const [namespaces] = await registrationServiceClient.listNamespaces({
    parent: locationName,
  });

  console.log('Namespaces: ');
  for (const n of namespaces) {
    console.log(`${n.name}`);
  }
  return namespaces;
}

return listNamespaces();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-servicedirectory/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Lookup_service.resolve_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/lookup_service.resolve_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/lookup_service.resolve_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.create_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.delete_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_iam_policy.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.get_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_endpoints.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_endpoints.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_namespaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_namespaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_namespaces.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.list_services.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.set_iam_policy.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.test_iam_permissions.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1/registration_service.update_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Lookup_service.resolve_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/lookup_service.resolve_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/lookup_service.resolve_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.create_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.create_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.delete_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_iam_policy.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.get_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_endpoints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_endpoints.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_endpoints.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_namespaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_namespaces.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_namespaces.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.list_services.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.set_iam_policy.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.test_iam_permissions.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_endpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_endpoint.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_namespace.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_namespace.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Registration_service.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/generated/v1beta1/registration_service.update_service.js,packages/google-cloud-servicedirectory/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-servicedirectory/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-servicedirectory/samples/quickstart.js,packages/google-cloud-servicedirectory/samples/README.md) |



The [Service Directory Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/service-directory@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/service-directory/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=servicedirectory.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
