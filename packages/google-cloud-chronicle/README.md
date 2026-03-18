[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Chronicle API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/chronicle.svg)](https://www.npmjs.org/package/@google-cloud/chronicle)

Chronicle API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Chronicle API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/chronicle/latest)
* [Chronicle API Documentation](https://cloud.google.com/chronicle/docs/secops/secops-overview)

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
1.  [Enable the Chronicle API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/chronicle
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create data access label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_label.js) |
| create data access scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.create_data_access_scope.js) |
| delete data access label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_label.js) |
| delete data access scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.delete_data_access_scope.js) |
| get data access label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_label.js) |
| get data access scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.get_data_access_scope.js) |
| list data access labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_labels.js) |
| list data access scopes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.list_data_access_scopes.js) |
| update data access label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_label.js) |
| update data access scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/data_access_control_service.update_data_access_scope.js) |
| create watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.create_watchlist.js) |
| delete watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.delete_watchlist.js) |
| get watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.get_watchlist.js) |
| list watchlists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.list_watchlists.js) |
| update watchlist | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/entity_service.update_watchlist.js) |
| get instance | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/instance_service.get_instance.js) |
| create reference list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.create_reference_list.js) |
| get reference list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.get_reference_list.js) |
| list reference lists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.list_reference_lists.js) |
| update reference list | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/reference_list_service.update_reference_list.js) |
| create retrohunt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_retrohunt.js) |
| create rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.create_rule.js) |
| delete rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.delete_rule.js) |
| get retrohunt | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_retrohunt.js) |
| get rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule.js) |
| get rule deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.get_rule_deployment.js) |
| list retrohunts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_retrohunts.js) |
| list rule deployments | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_deployments.js) |
| list rule revisions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rule_revisions.js) |
| list rules | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.list_rules.js) |
| update rule | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule.js) |
| update rule deployment | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/rule_service.update_rule_deployment.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples/generated/v1/snippet_metadata_google.cloud.chronicle.v1.json) |


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
For example, `npm install @google-cloud/chronicle@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=chronicle.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-chronicle
