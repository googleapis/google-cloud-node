[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [App Engine Admin API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-appengine)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/appengine-admin.svg)](https://www.npmjs.org/package/@google-cloud/appengine-admin)




Appengine client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-appengine/CHANGELOG.md).

* [App Engine Admin API Node.js Client API Reference][client-docs]
* [App Engine Admin API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-appengine](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-appengine)

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
1.  [Enable the App Engine Admin API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/appengine-admin
```


### Using the client library

```javascript
// Imports the Google Cloud client library

const {ServicesClient} = require('@google-cloud/appengine-admin');

// TODO(developer): replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new ServicesClient();

async function listVersions() {
  const [versions] = await client.listServices({
    parent: `apps/${projectId}`,
  });
  console.info(versions);
}
listVersions();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-appengine/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Applications.create_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.create_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/applications.create_application.js,packages/google-appengine/samples/README.md) |
| Applications.get_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.get_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/applications.get_application.js,packages/google-appengine/samples/README.md) |
| Applications.repair_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.repair_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/applications.repair_application.js,packages/google-appengine/samples/README.md) |
| Applications.update_application | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/applications.update_application.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/applications.update_application.js,packages/google-appengine/samples/README.md) |
| Authorized_certificates.create_authorized_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.create_authorized_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_certificates.create_authorized_certificate.js,packages/google-appengine/samples/README.md) |
| Authorized_certificates.delete_authorized_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.delete_authorized_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_certificates.delete_authorized_certificate.js,packages/google-appengine/samples/README.md) |
| Authorized_certificates.get_authorized_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.get_authorized_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_certificates.get_authorized_certificate.js,packages/google-appengine/samples/README.md) |
| Authorized_certificates.list_authorized_certificates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.list_authorized_certificates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_certificates.list_authorized_certificates.js,packages/google-appengine/samples/README.md) |
| Authorized_certificates.update_authorized_certificate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_certificates.update_authorized_certificate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_certificates.update_authorized_certificate.js,packages/google-appengine/samples/README.md) |
| Authorized_domains.list_authorized_domains | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/authorized_domains.list_authorized_domains.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/authorized_domains.list_authorized_domains.js,packages/google-appengine/samples/README.md) |
| Domain_mappings.create_domain_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.create_domain_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/domain_mappings.create_domain_mapping.js,packages/google-appengine/samples/README.md) |
| Domain_mappings.delete_domain_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.delete_domain_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/domain_mappings.delete_domain_mapping.js,packages/google-appengine/samples/README.md) |
| Domain_mappings.get_domain_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.get_domain_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/domain_mappings.get_domain_mapping.js,packages/google-appengine/samples/README.md) |
| Domain_mappings.list_domain_mappings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.list_domain_mappings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/domain_mappings.list_domain_mappings.js,packages/google-appengine/samples/README.md) |
| Domain_mappings.update_domain_mapping | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/domain_mappings.update_domain_mapping.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/domain_mappings.update_domain_mapping.js,packages/google-appengine/samples/README.md) |
| Firewall.batch_update_ingress_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.batch_update_ingress_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.batch_update_ingress_rules.js,packages/google-appengine/samples/README.md) |
| Firewall.create_ingress_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.create_ingress_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.create_ingress_rule.js,packages/google-appengine/samples/README.md) |
| Firewall.delete_ingress_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.delete_ingress_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.delete_ingress_rule.js,packages/google-appengine/samples/README.md) |
| Firewall.get_ingress_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.get_ingress_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.get_ingress_rule.js,packages/google-appengine/samples/README.md) |
| Firewall.list_ingress_rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.list_ingress_rules.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.list_ingress_rules.js,packages/google-appengine/samples/README.md) |
| Firewall.update_ingress_rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/firewall.update_ingress_rule.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/firewall.update_ingress_rule.js,packages/google-appengine/samples/README.md) |
| Instances.debug_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.debug_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/instances.debug_instance.js,packages/google-appengine/samples/README.md) |
| Instances.delete_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.delete_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/instances.delete_instance.js,packages/google-appengine/samples/README.md) |
| Instances.get_instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.get_instance.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/instances.get_instance.js,packages/google-appengine/samples/README.md) |
| Instances.list_instances | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/instances.list_instances.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/instances.list_instances.js,packages/google-appengine/samples/README.md) |
| Services.delete_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.delete_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/services.delete_service.js,packages/google-appengine/samples/README.md) |
| Services.get_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.get_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/services.get_service.js,packages/google-appengine/samples/README.md) |
| Services.list_services | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.list_services.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/services.list_services.js,packages/google-appengine/samples/README.md) |
| Services.update_service | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/services.update_service.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/services.update_service.js,packages/google-appengine/samples/README.md) |
| Versions.create_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.create_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/versions.create_version.js,packages/google-appengine/samples/README.md) |
| Versions.delete_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.delete_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/versions.delete_version.js,packages/google-appengine/samples/README.md) |
| Versions.get_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.get_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/versions.get_version.js,packages/google-appengine/samples/README.md) |
| Versions.list_versions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.list_versions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/versions.list_versions.js,packages/google-appengine/samples/README.md) |
| Versions.update_version | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/generated/v1/versions.update_version.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/generated/v1/versions.update_version.js,packages/google-appengine/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-appengine/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-appengine/samples/quickstart.js,packages/google-appengine/samples/README.md) |



The [App Engine Admin API Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/appengine-admin@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/appengine-admin/latest
[product-docs]: https://cloud.google.com/appengine/docs/admin-api/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=appengine.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
