[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud reCAPTCHA Enterprise: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recaptchaenterprise)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/recaptcha-enterprise.svg)](https://www.npmjs.org/package/@google-cloud/recaptcha-enterprise)




reCAPTCHA Enterprise API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recaptchaenterprise/CHANGELOG.md).

* [Google Cloud reCAPTCHA Enterprise Node.js Client API Reference][client-docs]
* [Google Cloud reCAPTCHA Enterprise Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-recaptchaenterprise](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recaptchaenterprise)

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
1.  [Enable the Google Cloud reCAPTCHA Enterprise API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/recaptcha-enterprise
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
 *  Required. The name of the project that contains the keys that will be
 *  listed, in the format "projects/{project}".
 */
// const parent = 'abc123'
/**
 *  Optional. The maximum number of keys to return. Default is 10. Max limit is
 *  1000.
 */
// const pageSize = 1234
/**
 *  Optional. The next_page_token value returned from a previous.
 *  ListKeysRequest, if any.
 */
// const pageToken = 'abc123'

// Imports the Recaptchaenterprise library
const {RecaptchaEnterpriseServiceClient} =
  // eslint-disable-next-line node/no-missing-require
  require('@google-cloud/recaptcha-enterprise').v1;

// Instantiates a client
const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

async function callListKeys() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await recaptchaenterpriseClient.listKeysAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListKeys();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-recaptchaenterprise/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Recaptcha_enterprise_service.add_ip_override | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.add_ip_override.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.add_ip_override.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.annotate_assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.annotate_assessment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.annotate_assessment.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.create_assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_assessment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_assessment.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.create_firewall_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_firewall_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_firewall_policy.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.create_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.create_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.delete_firewall_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_firewall_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_firewall_policy.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.delete_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.delete_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.get_firewall_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_firewall_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_firewall_policy.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.get_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.get_metrics | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_metrics.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.get_metrics.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.list_firewall_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_firewall_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_firewall_policies.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.list_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_keys.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.list_related_account_group_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_group_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_group_memberships.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.list_related_account_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.list_related_account_groups.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.migrate_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.migrate_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.migrate_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.reorder_firewall_policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.reorder_firewall_policies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.reorder_firewall_policies.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.retrieve_legacy_secret_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.retrieve_legacy_secret_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.retrieve_legacy_secret_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.search_related_account_group_memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.search_related_account_group_memberships.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.search_related_account_group_memberships.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.update_firewall_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_firewall_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_firewall_policy.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service.update_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1/recaptcha_enterprise_service.update_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.annotate_assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.annotate_assessment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.annotate_assessment.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.create_assessment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.create_assessment.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.create_assessment.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.create_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.create_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.create_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.delete_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.delete_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.delete_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.get_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.get_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.get_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.list_keys | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.list_keys.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.list_keys.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Recaptcha_enterprise_service_v1_beta1.update_key | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.update_key.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/generated/v1beta1/recaptcha_enterprise_service_v1_beta1.update_key.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-recaptchaenterprise/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-recaptchaenterprise/samples/quickstart.js,packages/google-cloud-recaptchaenterprise/samples/README.md) |



The [Google Cloud reCAPTCHA Enterprise Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/recaptcha-enterprise@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/recaptcha-enterprise/latest
[product-docs]: https://cloud.google.com/recaptcha-enterprise/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=recaptchaenterprise.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
