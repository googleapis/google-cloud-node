[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [App Hub API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/apphub.svg)](https://www.npmjs.org/package/@google-cloud/apphub)

App Hub API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [App Hub API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/apphub/latest)
* [App Hub API Documentation](https://cloud.google.com/app-hub/docs/overview)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart
### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the App Hub API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/apphub
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_application.js) |
| create service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service.js) |
| create service project attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_service_project_attachment.js) |
| create workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.create_workload.js) |
| delete application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_application.js) |
| delete service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service.js) |
| delete service project attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_service_project_attachment.js) |
| delete workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.delete_workload.js) |
| detach service project attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.detach_service_project_attachment.js) |
| get application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_application.js) |
| get discovered service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_service.js) |
| get discovered workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_discovered_workload.js) |
| get service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service.js) |
| get service project attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_service_project_attachment.js) |
| get workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.get_workload.js) |
| list applications | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_applications.js) |
| list discovered services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_services.js) |
| list discovered workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_discovered_workloads.js) |
| list service project attachments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_service_project_attachments.js) |
| list services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_services.js) |
| list workloads | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.list_workloads.js) |
| lookup discovered service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_service.js) |
| lookup discovered workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_discovered_workload.js) |
| lookup service project attachment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.lookup_service_project_attachment.js) |
| update application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_application.js) |
| update service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_service.js) |
| update workload | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/app_hub.update_workload.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples/generated/v1/snippet_metadata_google.cloud.apphub.v1.json) |


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
For example, `npm install @google-cloud/apphub@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=apphub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-apphub
