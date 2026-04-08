[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Deploy API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/deploy.svg)](https://www.npmjs.org/package/@google-cloud/deploy)

Cloud Deploy API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Deploy API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/deploy/latest)


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
1.  [Enable the Cloud Deploy API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/deploy
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| abandon release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.abandon_release.js) |
| advance rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.advance_rollout.js) |
| approve rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.approve_rollout.js) |
| cancel automation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_automation_run.js) |
| cancel rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_rollout.js) |
| create automation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_automation.js) |
| create custom target type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_custom_target_type.js) |
| create delivery pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_delivery_pipeline.js) |
| create deploy policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_deploy_policy.js) |
| create release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_release.js) |
| create rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_rollout.js) |
| create target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_target.js) |
| delete automation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_automation.js) |
| delete custom target type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_custom_target_type.js) |
| delete delivery pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_delivery_pipeline.js) |
| delete deploy policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_deploy_policy.js) |
| delete target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_target.js) |
| get automation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_automation.js) |
| get automation run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_automation_run.js) |
| get config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_config.js) |
| get custom target type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_custom_target_type.js) |
| get delivery pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_delivery_pipeline.js) |
| get deploy policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_deploy_policy.js) |
| get job run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_job_run.js) |
| get release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_release.js) |
| get rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_rollout.js) |
| get target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_target.js) |
| ignore job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.ignore_job.js) |
| list automation runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_automation_runs.js) |
| list automations | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_automations.js) |
| list custom target types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_custom_target_types.js) |
| list delivery pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_delivery_pipelines.js) |
| list deploy policies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_deploy_policies.js) |
| list job runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_job_runs.js) |
| list releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_releases.js) |
| list rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_rollouts.js) |
| list targets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_targets.js) |
| retry job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.retry_job.js) |
| rollback target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.rollback_target.js) |
| terminate job run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.terminate_job_run.js) |
| update automation | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_automation.js) |
| update custom target type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_custom_target_type.js) |
| update delivery pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_delivery_pipeline.js) |
| update deploy policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_deploy_policy.js) |
| update target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_target.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/snippet_metadata_google.cloud.deploy.v1.json) |


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
For example, `npm install @google-cloud/deploy@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouddeploy.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy
