[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [App Engine Admin API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/appengine-admin.svg)](https://www.npmjs.org/package/@google-cloud/appengine-admin)

App Engine Admin API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [App Engine Admin API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/appengine/latest)


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
1.  [Enable the App Engine Admin API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/appengine-admin
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.create_application.js) |
| get application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.get_application.js) |
| repair application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.repair_application.js) |
| update application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.update_application.js) |
| create authorized certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.create_authorized_certificate.js) |
| delete authorized certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.delete_authorized_certificate.js) |
| get authorized certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.get_authorized_certificate.js) |
| list authorized certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.list_authorized_certificates.js) |
| update authorized certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.update_authorized_certificate.js) |
| list authorized domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_domains.list_authorized_domains.js) |
| create domain mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.create_domain_mapping.js) |
| delete domain mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.delete_domain_mapping.js) |
| get domain mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.get_domain_mapping.js) |
| list domain mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.list_domain_mappings.js) |
| update domain mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.update_domain_mapping.js) |
| batch update ingress rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.batch_update_ingress_rules.js) |
| create ingress rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.create_ingress_rule.js) |
| delete ingress rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.delete_ingress_rule.js) |
| get ingress rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.get_ingress_rule.js) |
| list ingress rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.list_ingress_rules.js) |
| update ingress rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.update_ingress_rule.js) |
| debug instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.debug_instance.js) |
| delete instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.delete_instance.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.get_instance.js) |
| list instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.list_instances.js) |
| delete service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.delete_service.js) |
| get service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.get_service.js) |
| list services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.list_services.js) |
| update service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.update_service.js) |
| appengine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/snippet_metadata_google.appengine.v1.json) |
| create version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.create_version.js) |
| delete version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.delete_version.js) |
| get version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.get_version.js) |
| list versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.list_versions.js) |
| update version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.update_version.js) |


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
For example, `npm install @google-cloud/appengine-admin@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=appengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine
