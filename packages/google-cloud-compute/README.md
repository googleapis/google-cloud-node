[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Compute Engine: Node.js Client](https://github.com/googleapis/nodejs-compute)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/compute.svg)](https://www.npmjs.org/package/@google-cloud/compute)




> Node.js idiomatic client for [Compute Engine][product-docs].
[Compute Engine](https://cloud.google.com/compute/docs) is a
computing and hosting service that lets you create and run virtual
machines on Google infrastructure. Compute Engine offers scale,
performance, and value that lets you easily launch large compute
clusters on Google's infrastructure. There are no upfront
investments, and you can run thousands of virtual CPUs on a system
that offers quick, consistent performance.

This library is GA from version 3.1.0. It is
backwards-incompatible with prior versions 0.x.y, 1.x.y, 2.x.y,
and 3.0.y.


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-compute/blob/main/CHANGELOG.md).

* [Google Compute Engine Node.js Client API Reference][client-docs]
* [Google Compute Engine Documentation][product-docs]
* [github.com/googleapis/nodejs-compute](https://github.com/googleapis/nodejs-compute)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Compute Engine API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/compute
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-compute/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Instance | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/createInstance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/createInstance.js,samples/README.md) |
| Create Instance From Template | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/createInstanceFromTemplate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/createInstanceFromTemplate.js,samples/README.md) |
| Create Instance From Template With Overrides | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/createInstanceFromTemplateWithOverrides.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/createInstanceFromTemplateWithOverrides.js,samples/README.md) |
| Delete Instance | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/deleteInstance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/deleteInstance.js,samples/README.md) |
| Disable Usage Export | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/disableUsageExport.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/disableUsageExport.js,samples/README.md) |
| Get Usage Export Bucket | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/getUsageExportBucket.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/getUsageExportBucket.js,samples/README.md) |
| List All Instances | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/listAllInstances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/listAllInstances.js,samples/README.md) |
| List Images | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/listImages.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/listImages.js,samples/README.md) |
| List Images By Page | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/listImagesByPage.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/listImagesByPage.js,samples/README.md) |
| List Instances | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/listInstances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/listInstances.js,samples/README.md) |
| Mailjet | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/mailjet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/mailjet.js,samples/README.md) |
| Reset Instance | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/resetInstance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/resetInstance.js,samples/README.md) |
| Sendgrid | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/sendgrid.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/sendgrid.js,samples/README.md) |
| Set Usage Export Bucket | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/setUsageExportBucket.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/setUsageExportBucket.js,samples/README.md) |
| Start Instance | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/startInstance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/startInstance.js,samples/README.md) |
| Start Instance With Enc Key | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/startInstanceWithEncKey.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/startInstanceWithEncKey.js,samples/README.md) |
| Stop Instance | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/stopInstance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/stopInstance.js,samples/README.md) |
| Wait For Operation | [source code](https://github.com/googleapis/nodejs-compute/blob/main/samples/waitForOperation.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-compute&page=editor&open_in_editor=samples/waitForOperation.js,samples/README.md) |



The [Google Compute Engine Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/compute@legacy-8` installs client libraries
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

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-compute/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-compute/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/compute/latest
[product-docs]: https://cloud.google.com/compute
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=compute.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
