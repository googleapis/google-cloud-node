[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [GKE Hub: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/gke-hub.svg)](https://www.npmjs.org/package/@google-cloud/gke-hub)

GKE Hub client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [GKE Hub Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/gkehub/latest)


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
1.  [Enable the GKE Hub API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/gke-hub
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_feature.js) |
| create fleet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_fleet.js) |
| create membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_membership.js) |
| create membership binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_membership_binding.js) |
| create membership r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_membership_r_b_a_c_role_binding.js) |
| create scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_scope.js) |
| create scope namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_scope_namespace.js) |
| create scope r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.create_scope_r_b_a_c_role_binding.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_feature.js) |
| delete fleet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_fleet.js) |
| delete membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_membership.js) |
| delete membership binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_membership_binding.js) |
| delete membership r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_membership_r_b_a_c_role_binding.js) |
| delete scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_scope.js) |
| delete scope namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_scope_namespace.js) |
| delete scope r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.delete_scope_r_b_a_c_role_binding.js) |
| generate connect manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.generate_connect_manifest.js) |
| generate membership r b a c role binding y a m l | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.generate_membership_r_b_a_c_role_binding_y_a_m_l.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_feature.js) |
| get fleet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_fleet.js) |
| get membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_membership.js) |
| get membership binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_membership_binding.js) |
| get membership r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_membership_r_b_a_c_role_binding.js) |
| get scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_scope.js) |
| get scope namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_scope_namespace.js) |
| get scope r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.get_scope_r_b_a_c_role_binding.js) |
| list bound memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_bound_memberships.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_features.js) |
| list fleets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_fleets.js) |
| list membership bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_membership_bindings.js) |
| list membership r b a c role bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_membership_r_b_a_c_role_bindings.js) |
| list memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_memberships.js) |
| list permitted scopes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_permitted_scopes.js) |
| list scope namespaces | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_scope_namespaces.js) |
| list scope r b a c role bindings | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_scope_r_b_a_c_role_bindings.js) |
| list scopes | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.list_scopes.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_feature.js) |
| update fleet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_fleet.js) |
| update membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_membership.js) |
| update membership binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_membership_binding.js) |
| update membership r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_membership_r_b_a_c_role_binding.js) |
| update scope | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_scope.js) |
| update scope namespace | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_scope_namespace.js) |
| update scope r b a c role binding | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/gke_hub.update_scope_r_b_a_c_role_binding.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1/snippet_metadata_google.cloud.gkehub.v1.json) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.create_feature.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.delete_feature.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.get_feature.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.list_features.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/gke_hub.update_feature.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1alpha/snippet_metadata_google.cloud.gkehub.v1alpha.json) |
| create feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.create_feature.js) |
| delete feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.delete_feature.js) |
| get feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.get_feature.js) |
| list features | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.list_features.js) |
| update feature | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/gke_hub.update_feature.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta/snippet_metadata_google.cloud.gkehub.v1beta.json) |
| create membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.create_membership.js) |
| delete membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.delete_membership.js) |
| generate connect manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_connect_manifest.js) |
| generate exclusivity manifest | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.generate_exclusivity_manifest.js) |
| get membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.get_membership.js) |
| list memberships | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.list_memberships.js) |
| update membership | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.update_membership.js) |
| validate exclusivity | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/gke_hub_membership_service.validate_exclusivity.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples/generated/v1beta1/snippet_metadata_google.cloud.gkehub.v1beta1.json) |


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
For example, `npm install @google-cloud/gke-hub@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=gkehub.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-gkehub
