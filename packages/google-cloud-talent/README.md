[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Talent Solution: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-talent)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/talent.svg)](https://www.npmjs.org/package/@google-cloud/talent)




Cloud Talent Solution API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-talent/CHANGELOG.md).

* [Google Cloud Talent Solution Node.js Client API Reference][client-docs]
* [Google Cloud Talent Solution Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-talent](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-talent)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Talent Solution API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/talent
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-talent/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Company_service.create_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.create_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/company_service.create_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.delete_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.delete_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/company_service.delete_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.get_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.get_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/company_service.get_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.list_companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.list_companies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/company_service.list_companies.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.update_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/company_service.update_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/company_service.update_company.js,packages/google-cloud-talent/samples/README.md) |
| Completion.complete_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/completion.complete_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/completion.complete_query.js,packages/google-cloud-talent/samples/README.md) |
| Event_service.create_client_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/event_service.create_client_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/event_service.create_client_event.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_create_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_create_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.batch_create_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_delete_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_delete_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.batch_delete_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_update_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.batch_update_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.batch_update_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.create_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.create_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.create_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.delete_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.delete_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.delete_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.get_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.list_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.search_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.search_jobs_for_alert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs_for_alert.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.search_jobs_for_alert.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.update_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/job_service.update_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/job_service.update_job.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.create_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.create_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/tenant_service.create_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.delete_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.delete_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/tenant_service.delete_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.get_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.get_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/tenant_service.get_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.list_tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.list_tenants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/tenant_service.list_tenants.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.update_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4/tenant_service.update_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4/tenant_service.update_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.create_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.create_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/company_service.create_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.delete_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.delete_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/company_service.delete_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.get_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.get_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/company_service.get_company.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.list_companies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.list_companies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/company_service.list_companies.js,packages/google-cloud-talent/samples/README.md) |
| Company_service.update_company | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/company_service.update_company.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/company_service.update_company.js,packages/google-cloud-talent/samples/README.md) |
| Completion.complete_query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/completion.complete_query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/completion.complete_query.js,packages/google-cloud-talent/samples/README.md) |
| Event_service.create_client_event | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/event_service.create_client_event.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/event_service.create_client_event.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_create_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_create_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_create_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_delete_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_delete_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_delete_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.batch_update_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_update_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.batch_update_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.create_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.create_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.create_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.delete_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.delete_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.delete_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.get_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.get_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.get_job.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.list_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.list_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.list_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.search_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.search_jobs_for_alert | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs_for_alert.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.search_jobs_for_alert.js,packages/google-cloud-talent/samples/README.md) |
| Job_service.update_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/job_service.update_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/job_service.update_job.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.create_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.create_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.create_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.delete_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.delete_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.delete_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.get_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.get_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.get_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.list_tenants | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.list_tenants.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.list_tenants.js,packages/google-cloud-talent/samples/README.md) |
| Tenant_service.update_tenant | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.update_tenant.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/generated/v4beta1/tenant_service.update_tenant.js,packages/google-cloud-talent/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-talent/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-talent/samples/quickstart.js,packages/google-cloud-talent/samples/README.md) |



The [Google Cloud Talent Solution Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/talent@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/talent/latest
[product-docs]: https://cloud.google.com/solutions/talent-solution/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=jobs.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
