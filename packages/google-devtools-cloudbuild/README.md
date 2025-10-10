[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Build API: Nodejs Client][homepage]

This library is considered to be in **preview**. This means it is still a
work-in-progress and under active development. Any release is subject to
backwards-incompatible changes at any time.

[![npm version](https://img.shields.io/npm/v/@google-cloud/cloudbuild.svg)](https://www.npmjs.org/package/@google-cloud/cloudbuild)

Cloud Build API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Build API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/cloudbuild/latest)


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
1.  [Enable the Cloud Build API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/cloudbuild
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| approve build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.approve_build.js) |
| cancel build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.cancel_build.js) |
| create build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build.js) |
| create build trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_build_trigger.js) |
| create worker pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.create_worker_pool.js) |
| delete build trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_build_trigger.js) |
| delete worker pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.delete_worker_pool.js) |
| get build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build.js) |
| get build trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_build_trigger.js) |
| get worker pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.get_worker_pool.js) |
| list build triggers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_build_triggers.js) |
| list builds | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_builds.js) |
| list worker pools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.list_worker_pools.js) |
| receive trigger webhook | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.receive_trigger_webhook.js) |
| retry build | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.retry_build.js) |
| run build trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.run_build_trigger.js) |
| update build trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_build_trigger.js) |
| update worker pool | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/cloud_build.update_worker_pool.js) |
| devtools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v1/snippet_metadata_google.devtools.cloudbuild.v1.json) |
| batch create repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.batch_create_repositories.js) |
| create connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_connection.js) |
| create repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.create_repository.js) |
| delete connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_connection.js) |
| delete repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.delete_repository.js) |
| fetch git refs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_git_refs.js) |
| fetch linkable repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_linkable_repositories.js) |
| fetch read token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_token.js) |
| fetch read write token | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.fetch_read_write_token.js) |
| get connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_connection.js) |
| get repository | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.get_repository.js) |
| list connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_connections.js) |
| list repositories | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.list_repositories.js) |
| update connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/repository_manager.update_connection.js) |
| devtools | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples/generated/v2/snippet_metadata_google.devtools.cloudbuild.v2.json) |


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
For example, `npm install @google-cloud/cloudbuild@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-devtools-cloudbuild
