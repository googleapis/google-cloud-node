[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Profiler API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudprofiler)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/cloudprofiler.svg)](https://www.npmjs.org/package/@google-cloud/cloudprofiler)




Cloud Profiler API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudprofiler/CHANGELOG.md).

* [Cloud Profiler API Node.js Client API Reference][client-docs]
* [Cloud Profiler API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-devtools-cloudprofiler](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudprofiler)

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
1.  [Enable the Cloud Profiler API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/cloudprofiler
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
 *  Parent project to create the profile in.
 */
// const parent = 'abc123'
/**
 *  Deployment details.
 */
// const deployment = {}
/**
 *  One or more profile types that the agent is capable of providing.
 */
// const profileType = [1,2,3,4]

// Imports the Cloudprofiler library
const {ProfilerServiceClient} = require('@google-cloud/cloudprofiler').v2;

// Instantiates a client
const cloudprofilerClient = new ProfilerServiceClient();

async function callCreateProfile() {
  // Construct request
  const request = {
    project,
    deployment: {projectId, target},
    profileType: [profileType],
  };

  // Run request
  const response = await cloudprofilerClient.createProfile(request);
  console.log(response);
}

callCreateProfile();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-devtools-cloudprofiler/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Export_service.list_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudprofiler/samples/generated/v2/export_service.list_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudprofiler/samples/generated/v2/export_service.list_profiles.js,packages/google-devtools-cloudprofiler/samples/README.md) |
| Profiler_service.create_offline_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.create_offline_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.create_offline_profile.js,packages/google-devtools-cloudprofiler/samples/README.md) |
| Profiler_service.create_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.create_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.create_profile.js,packages/google-devtools-cloudprofiler/samples/README.md) |
| Profiler_service.update_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.update_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudprofiler/samples/generated/v2/profiler_service.update_profile.js,packages/google-devtools-cloudprofiler/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudprofiler/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-devtools-cloudprofiler/samples/quickstart.js,packages/google-devtools-cloudprofiler/samples/README.md) |



The [Cloud Profiler API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/cloudprofiler@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/cloudprofiler/latest
[product-docs]: cloud.google.com/profiler/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudprofiler.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
