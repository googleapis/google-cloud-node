[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cluster Director API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/hypercomputecluster.svg)](https://www.npmjs.org/package/@google-cloud/hypercomputecluster)

Cluster Director API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cluster Director API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/hypercomputecluster/latest)


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
1.  [Enable the Cluster Director API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/hypercomputecluster
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/hypercompute_cluster.create_cluster.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/hypercompute_cluster.delete_cluster.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/hypercompute_cluster.get_cluster.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/hypercompute_cluster.list_clusters.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/hypercompute_cluster.update_cluster.js) |
| create machine learning run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.create_machine_learning_run.js) |
| delete machine learning run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.delete_machine_learning_run.js) |
| get machine learning run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.get_machine_learning_run.js) |
| get profile session | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.get_profile_session.js) |
| list machine learning runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.list_machine_learning_runs.js) |
| list profile sessions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.list_profile_sessions.js) |
| update machine learning run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/machine_learning_runs.update_machine_learning_run.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1alpha/snippet_metadata_google.cloud.hypercomputecluster.v1alpha.json) |
| create cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/hypercompute_cluster.create_cluster.js) |
| delete cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/hypercompute_cluster.delete_cluster.js) |
| get cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/hypercompute_cluster.get_cluster.js) |
| list clusters | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/hypercompute_cluster.list_clusters.js) |
| update cluster | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/hypercompute_cluster.update_cluster.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples/generated/v1beta/snippet_metadata_google.cloud.hypercomputecluster.v1beta.json) |


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
For example, `npm install @google-cloud/hypercomputecluster@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=hypercomputecluster.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-hypercomputecluster
