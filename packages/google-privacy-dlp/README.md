[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Loss Prevention: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-privacy-dlp)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/dlp.svg)](https://www.npmjs.org/package/@google-cloud/dlp)




DLP API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-privacy-dlp/CHANGELOG.md).

* [Cloud Data Loss Prevention Node.js Client API Reference][client-docs]
* [Cloud Data Loss Prevention Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-privacy-dlp](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-privacy-dlp)

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
1.  [Enable the Cloud Data Loss Prevention API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/dlp
```


### Using the client library

```javascript

// Instantiates a client
const dlp = new DLP.DlpServiceClient();

// The string to inspect
const string = 'Robert Frost';

// The project ID to run the API call under
// const projectId = 'my-project';

async function quickStart() {
  // The minimum likelihood required before returning a match
  const minLikelihood = 'LIKELIHOOD_UNSPECIFIED';

  // The maximum number of findings to report (0 = server maximum)
  const maxFindings = 0;

  // The infoTypes of information to match
  const infoTypes = [{name: 'PERSON_NAME'}, {name: 'US_STATE'}];

  // Whether to include the matching string
  const includeQuote = true;

  // Construct item to inspect
  const item = {value: string};

  // Construct request
  const request = {
    parent: `projects/${projectId}/locations/global`,
    inspectConfig: {
      infoTypes: infoTypes,
      minLikelihood: minLikelihood,
      limits: {
        maxFindingsPerRequest: maxFindings,
      },
      includeQuote: includeQuote,
    },
    item: item,
  };

  // Run request
  const [response] = await dlp.inspectContent(request);
  const findings = response.result.findings;
  if (findings.length > 0) {
    console.log('Findings:');
    findings.forEach(finding => {
      if (includeQuote) {
        console.log(`\tQuote: ${finding.quote}`);
      }
      console.log(`\tInfo type: ${finding.infoType.name}`);
      console.log(`\tLikelihood: ${finding.likelihood}`);
    });
  } else {
    console.log('No findings.');
  }
}
quickStart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-privacy-dlp/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Dlp_service.activate_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.activate_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.activate_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.cancel_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.cancel_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.cancel_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_connection.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_deidentify_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_deidentify_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_deidentify_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_discovery_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_discovery_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_discovery_config.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_inspect_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_inspect_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_inspect_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.create_stored_info_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_stored_info_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.create_stored_info_type.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.deidentify_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.deidentify_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.deidentify_content.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_connection.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_deidentify_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_deidentify_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_deidentify_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_discovery_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_discovery_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_discovery_config.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_file_store_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_file_store_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_file_store_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_inspect_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_inspect_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_inspect_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_stored_info_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_stored_info_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_stored_info_type.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.delete_table_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_table_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.delete_table_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.finish_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.finish_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.finish_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_column_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_column_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_column_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_connection.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_deidentify_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_deidentify_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_deidentify_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_discovery_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_discovery_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_discovery_config.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_file_store_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_file_store_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_file_store_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_inspect_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_inspect_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_inspect_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_project_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_project_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_project_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_stored_info_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_stored_info_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_stored_info_type.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.get_table_data_profile | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_table_data_profile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.get_table_data_profile.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.hybrid_inspect_dlp_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_dlp_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_dlp_job.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.hybrid_inspect_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.hybrid_inspect_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.inspect_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.inspect_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.inspect_content.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_column_data_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_column_data_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_column_data_profiles.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_connections.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_deidentify_templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_deidentify_templates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_deidentify_templates.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_discovery_configs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_discovery_configs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_discovery_configs.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_dlp_jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_dlp_jobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_dlp_jobs.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_file_store_data_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_file_store_data_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_file_store_data_profiles.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_info_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_info_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_info_types.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_inspect_templates | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_inspect_templates.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_inspect_templates.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_job_triggers | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_job_triggers.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_job_triggers.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_project_data_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_project_data_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_project_data_profiles.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_stored_info_types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_stored_info_types.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_stored_info_types.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.list_table_data_profiles | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_table_data_profiles.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.list_table_data_profiles.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.redact_image | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.redact_image.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.redact_image.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.reidentify_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.reidentify_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.reidentify_content.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.search_connections | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.search_connections.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.search_connections.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_connection.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_deidentify_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_deidentify_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_deidentify_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_discovery_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_discovery_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_discovery_config.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_inspect_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_inspect_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_inspect_template.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_job_trigger | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_job_trigger.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_job_trigger.js,packages/google-privacy-dlp/samples/README.md) |
| Dlp_service.update_stored_info_type | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_stored_info_type.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/generated/v2/dlp_service.update_stored_info_type.js,packages/google-privacy-dlp/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-privacy-dlp/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-privacy-dlp/samples/quickstart.js,packages/google-privacy-dlp/samples/README.md) |



The [Cloud Data Loss Prevention Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/dlp@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/dlp/latest
[product-docs]: https://cloud.google.com/dlp/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=dlp.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
