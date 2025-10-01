[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Identity and Access Management (IAM) API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/iam.svg)](https://www.npmjs.org/package/iam)

Identity and Access Management (IAM) API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Identity and Access Management (IAM) API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/iam/latest)


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
1.  [Enable the Identity and Access Management (IAM) API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install iam
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| iam | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/snippet_metadata_google.iam.v1beta.json) |
| create workload identity pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.create_workload_identity_pool.js) |
| create workload identity pool provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.create_workload_identity_pool_provider.js) |
| delete workload identity pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.delete_workload_identity_pool.js) |
| delete workload identity pool provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.delete_workload_identity_pool_provider.js) |
| get workload identity pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.get_workload_identity_pool.js) |
| get workload identity pool provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.get_workload_identity_pool_provider.js) |
| list workload identity pool providers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.list_workload_identity_pool_providers.js) |
| list workload identity pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.list_workload_identity_pools.js) |
| undelete workload identity pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.undelete_workload_identity_pool.js) |
| undelete workload identity pool provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.undelete_workload_identity_pool_provider.js) |
| update workload identity pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.update_workload_identity_pool.js) |
| update workload identity pool provider | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v1beta/workload_identity_pools.update_workload_identity_pool_provider.js) |
| create policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.create_policy.js) |
| delete policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.delete_policy.js) |
| get policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.get_policy.js) |
| list policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.list_policies.js) |
| update policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/policies.update_policy.js) |
| iam | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2/snippet_metadata_google.iam.v2.json) |
| create policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/policies.create_policy.js) |
| delete policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/policies.delete_policy.js) |
| get policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/policies.get_policy.js) |
| list policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/policies.list_policies.js) |
| update policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/policies.update_policy.js) |
| iam | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v2beta/snippet_metadata_google.iam.v2beta.json) |
| create policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.create_policy_binding.js) |
| delete policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.delete_policy_binding.js) |
| get policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.get_policy_binding.js) |
| list policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.list_policy_bindings.js) |
| search target policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.search_target_policy_bindings.js) |
| update policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/policy_bindings.update_policy_binding.js) |
| create principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.create_principal_access_boundary_policy.js) |
| delete principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.delete_principal_access_boundary_policy.js) |
| get principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.get_principal_access_boundary_policy.js) |
| list principal access boundary policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.list_principal_access_boundary_policies.js) |
| search principal access boundary policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.search_principal_access_boundary_policy_bindings.js) |
| update principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/principal_access_boundary_policies.update_principal_access_boundary_policy.js) |
| iam | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3/snippet_metadata_google.iam.v3.json) |
| create policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.create_policy_binding.js) |
| delete policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.delete_policy_binding.js) |
| get policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.get_policy_binding.js) |
| list policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.list_policy_bindings.js) |
| search target policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.search_target_policy_bindings.js) |
| update policy binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/policy_bindings.update_policy_binding.js) |
| create principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.create_principal_access_boundary_policy.js) |
| delete principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.delete_principal_access_boundary_policy.js) |
| get principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.get_principal_access_boundary_policy.js) |
| list principal access boundary policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.list_principal_access_boundary_policies.js) |
| search principal access boundary policy bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.search_principal_access_boundary_policy_bindings.js) |
| update principal access boundary policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/principal_access_boundary_policies.update_principal_access_boundary_policy.js) |
| iam | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples/generated/v3beta/snippet_metadata_google.iam.v3beta.json) |


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
For example, `npm install iam@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=iam.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-iam
