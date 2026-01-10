[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Organization Policy API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/org-policy.svg)](https://www.npmjs.org/package/@google-cloud/org-policy)

Organization Policy API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Organization Policy API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/orgpolicy/latest)


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
1.  [Enable the Organization Policy API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/org-policy
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create custom constraint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.create_custom_constraint.js) |
| create policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.create_policy.js) |
| delete custom constraint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.delete_custom_constraint.js) |
| delete policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.delete_policy.js) |
| get custom constraint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.get_custom_constraint.js) |
| get effective policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.get_effective_policy.js) |
| get policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.get_policy.js) |
| list constraints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.list_constraints.js) |
| list custom constraints | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.list_custom_constraints.js) |
| list policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.list_policies.js) |
| update custom constraint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.update_custom_constraint.js) |
| update policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/org_policy.update_policy.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples/generated/v2/snippet_metadata_google.cloud.orgpolicy.v2.json) |


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
For example, `npm install @google-cloud/org-policy@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=orgpolicy.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-orgpolicy
