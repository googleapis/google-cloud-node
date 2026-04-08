[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "The comments you see below are used to generate those parts of the template in later states."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Talent Solution API: Nodejs Client][homepage]

This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority

[![npm version](https://img.shields.io/npm/v/@google-cloud/talent.svg)](https://www.npmjs.org/package/@google-cloud/talent)

Cloud Talent Solution API client for Node.js

[//]: # "partials.introduction"

A comprehensive list of changes in each version may be found in
[the CHANGELOG][homepage_changelog].

* [Cloud Talent Solution API Nodejs Client API Reference](https://cloud.google.com/nodejs/docs/reference/talent/latest)


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
1.  [Enable the Cloud Talent Solution API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.
### Installing the client library

```bash
npm install @google-cloud/talent
```

[//]: # "partials.body"

## Samples

Samples are in the [`samples/`][homepage_samples] directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       |
| --------------------------- | --------------------------------- |
| create company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.create_company.js) |
| delete company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.delete_company.js) |
| get company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.get_company.js) |
| list companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.list_companies.js) |
| update company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.update_company.js) |
| complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/completion.complete_query.js) |
| create client event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/event_service.create_client_event.js) |
| batch create jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_create_jobs.js) |
| batch delete jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_delete_jobs.js) |
| batch update jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_update_jobs.js) |
| create job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.create_job.js) |
| delete job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.delete_job.js) |
| get job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.get_job.js) |
| list jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.list_jobs.js) |
| search jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs.js) |
| search jobs for alert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs_for_alert.js) |
| update job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.update_job.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/snippet_metadata_google.cloud.talent.v4.json) |
| create tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.create_tenant.js) |
| delete tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.delete_tenant.js) |
| get tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.get_tenant.js) |
| list tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.list_tenants.js) |
| update tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.update_tenant.js) |
| create company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.create_company.js) |
| delete company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.delete_company.js) |
| get company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.get_company.js) |
| list companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.list_companies.js) |
| update company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.update_company.js) |
| complete query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/completion.complete_query.js) |
| create client event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/event_service.create_client_event.js) |
| batch create jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_create_jobs.js) |
| batch delete jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_delete_jobs.js) |
| batch update jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_update_jobs.js) |
| create job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.create_job.js) |
| delete job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.delete_job.js) |
| get job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.get_job.js) |
| list jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.list_jobs.js) |
| search jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs.js) |
| search jobs for alert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs_for_alert.js) |
| update job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.update_job.js) |
| cloud | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/snippet_metadata_google.cloud.talent.v4beta1.json) |
| create tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.create_tenant.js) |
| delete tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.delete_tenant.js) |
| get tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.get_tenant.js) |
| list tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.list_tenants.js) |
| update tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.update_tenant.js) |


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
For example, `npm install @google-cloud/talent@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).

More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/CONTRIBUTING.md).

Please note that this `README.md`
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template.

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/LICENSE)

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=jobs.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
[homepage_samples]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples
[homepage_changelog]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/CHANGELOG.md
[homepage]: https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent
