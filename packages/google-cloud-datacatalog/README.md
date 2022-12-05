[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Catalog: Node.js Client](https://github.com/googleapis/google-cloud-node)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datacatalog.svg)](https://www.npmjs.org/package/@google-cloud/datacatalog)




Google Cloud Data Catalog API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datacatalog/CHANGELOG.md).

* [Data Catalog Node.js Client API Reference][client-docs]
* [Data Catalog Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-datacatalog](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-datacatalog)

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
1.  [Enable the Data Catalog API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/datacatalog
```


### Using the client library

```javascript
// Import the Google Cloud client library and create a client.
const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;
const datacatalog = new DataCatalogClient();

async function quickstart() {
  // Common fields.
  let request;
  let responses;

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my_project'; // Google Cloud Platform project
  // const datasetId = 'demo_dataset';
  // const tableId = 'trips';

  // Currently, Data Catalog stores metadata in the
  // us-central1 region.
  const location = 'us-central1';

  // Create Fields.
  const fieldSource = {
    displayName: 'Source of data asset',
    type: {
      primitiveType: 'STRING',
    },
  };

  const fieldNumRows = {
    displayName: 'Number of rows in data asset',
    type: {
      primitiveType: 'DOUBLE',
    },
  };

  const fieldHasPII = {
    displayName: 'Has PII',
    type: {
      primitiveType: 'BOOL',
    },
  };

  const fieldPIIType = {
    displayName: 'PII type',
    type: {
      enumType: {
        allowedValues: [
          {
            displayName: 'EMAIL',
          },
          {
            displayName: 'SOCIAL SECURITY NUMBER',
          },
          {
            displayName: 'NONE',
          },
        ],
      },
    },
  };

  // Create Tag Template.
  const tagTemplateId = 'demo_tag_template';

  const tagTemplate = {
    displayName: 'Demo Tag Template',
    fields: {
      source: fieldSource,
      num_rows: fieldNumRows,
      has_pii: fieldHasPII,
      pii_type: fieldPIIType,
    },
  };

  const tagTemplatePath = datacatalog.tagTemplatePath(
    projectId,
    location,
    tagTemplateId
  );

  // Delete any pre-existing Template with the same name.
  try {
    request = {
      name: tagTemplatePath,
      force: true,
    };
    await datacatalog.deleteTagTemplate(request);
    console.log(`Deleted template: ${tagTemplatePath}`);
  } catch (error) {
    console.log(`Cannot delete template: ${tagTemplatePath}`);
  }

  // Create the Tag Template request.
  const locationPath = datacatalog.locationPath(projectId, location);

  request = {
    parent: locationPath,
    tagTemplateId: tagTemplateId,
    tagTemplate: tagTemplate,
  };

  // Execute the request.
  responses = await datacatalog.createTagTemplate(request);
  const createdTagTemplate = responses[0];
  console.log(`Created template: ${createdTagTemplate.name}`);

  // Lookup Data Catalog's Entry referring to the table.
  responses = await datacatalog.lookupEntry({
    linkedResource:
      '//bigquery.googleapis.com/projects/' +
      `${projectId}/datasets/${datasetId}/tables/${tableId}`,
  });
  const entry = responses[0];
  console.log(`Entry name: ${entry.name}`);
  console.log(`Entry type: ${entry.type}`);
  console.log(`Linked resource: ${entry.linkedResource}`);

  // Attach a Tag to the table.
  const tag = {
    name: entry.name,
    template: createdTagTemplate.name,
    fields: {
      source: {
        stringValue: 'copied from tlc_yellow_trips_2017',
      },
      num_rows: {
        doubleValue: 113496874,
      },
      has_pii: {
        boolValue: false,
      },
      pii_type: {
        enumValue: {
          displayName: 'NONE',
        },
      },
    },
  };

  request = {
    parent: entry.name,
    tag: tag,
  };

  // Create the Tag.
  await datacatalog.createTag(request);
  console.log(`Tag created for entry: ${entry.name}`);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Data_catalog.create_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry.js,samples/README.md) |
| Data_catalog.create_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_entry_group.js,samples/README.md) |
| Data_catalog.create_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag.js,samples/README.md) |
| Data_catalog.create_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template.js,samples/README.md) |
| Data_catalog.create_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.create_tag_template_field.js,samples/README.md) |
| Data_catalog.delete_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry.js,samples/README.md) |
| Data_catalog.delete_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_entry_group.js,samples/README.md) |
| Data_catalog.delete_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag.js,samples/README.md) |
| Data_catalog.delete_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template.js,samples/README.md) |
| Data_catalog.delete_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.delete_tag_template_field.js,samples/README.md) |
| Data_catalog.get_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry.js,samples/README.md) |
| Data_catalog.get_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_entry_group.js,samples/README.md) |
| Data_catalog.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_iam_policy.js,samples/README.md) |
| Data_catalog.get_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.get_tag_template.js,samples/README.md) |
| Data_catalog.list_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entries.js,samples/README.md) |
| Data_catalog.list_entry_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_entry_groups.js,samples/README.md) |
| Data_catalog.list_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.list_tags.js,samples/README.md) |
| Data_catalog.lookup_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.lookup_entry.js,samples/README.md) |
| Data_catalog.modify_entry_contacts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_contacts.js,samples/README.md) |
| Data_catalog.modify_entry_overview | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.modify_entry_overview.js,samples/README.md) |
| Data_catalog.rename_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field.js,samples/README.md) |
| Data_catalog.rename_tag_template_field_enum_value | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.rename_tag_template_field_enum_value.js,samples/README.md) |
| Data_catalog.search_catalog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.search_catalog.js,samples/README.md) |
| Data_catalog.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.set_iam_policy.js,samples/README.md) |
| Data_catalog.star_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.star_entry.js,samples/README.md) |
| Data_catalog.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.test_iam_permissions.js,samples/README.md) |
| Data_catalog.unstar_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.unstar_entry.js,samples/README.md) |
| Data_catalog.update_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry.js,samples/README.md) |
| Data_catalog.update_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_entry_group.js,samples/README.md) |
| Data_catalog.update_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag.js,samples/README.md) |
| Data_catalog.update_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template.js,samples/README.md) |
| Data_catalog.update_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/data_catalog.update_tag_template_field.js,samples/README.md) |
| Policy_tag_manager.create_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_policy_tag.js,samples/README.md) |
| Policy_tag_manager.create_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.create_taxonomy.js,samples/README.md) |
| Policy_tag_manager.delete_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_policy_tag.js,samples/README.md) |
| Policy_tag_manager.delete_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.delete_taxonomy.js,samples/README.md) |
| Policy_tag_manager.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_iam_policy.js,samples/README.md) |
| Policy_tag_manager.get_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_policy_tag.js,samples/README.md) |
| Policy_tag_manager.get_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.get_taxonomy.js,samples/README.md) |
| Policy_tag_manager.list_policy_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_policy_tags.js,samples/README.md) |
| Policy_tag_manager.list_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.list_taxonomies.js,samples/README.md) |
| Policy_tag_manager.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.set_iam_policy.js,samples/README.md) |
| Policy_tag_manager.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.test_iam_permissions.js,samples/README.md) |
| Policy_tag_manager.update_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_policy_tag.js,samples/README.md) |
| Policy_tag_manager.update_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager.update_taxonomy.js,samples/README.md) |
| Policy_tag_manager_serialization.export_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.export_taxonomies.js,samples/README.md) |
| Policy_tag_manager_serialization.import_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.import_taxonomies.js,samples/README.md) |
| Policy_tag_manager_serialization.replace_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1/policy_tag_manager_serialization.replace_taxonomy.js,samples/README.md) |
| Data_catalog.create_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry.js,samples/README.md) |
| Data_catalog.create_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_entry_group.js,samples/README.md) |
| Data_catalog.create_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag.js,samples/README.md) |
| Data_catalog.create_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template.js,samples/README.md) |
| Data_catalog.create_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.create_tag_template_field.js,samples/README.md) |
| Data_catalog.delete_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry.js,samples/README.md) |
| Data_catalog.delete_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_entry_group.js,samples/README.md) |
| Data_catalog.delete_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag.js,samples/README.md) |
| Data_catalog.delete_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template.js,samples/README.md) |
| Data_catalog.delete_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.delete_tag_template_field.js,samples/README.md) |
| Data_catalog.get_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry.js,samples/README.md) |
| Data_catalog.get_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_entry_group.js,samples/README.md) |
| Data_catalog.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_iam_policy.js,samples/README.md) |
| Data_catalog.get_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.get_tag_template.js,samples/README.md) |
| Data_catalog.list_entries | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entries.js,samples/README.md) |
| Data_catalog.list_entry_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_entry_groups.js,samples/README.md) |
| Data_catalog.list_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.list_tags.js,samples/README.md) |
| Data_catalog.lookup_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.lookup_entry.js,samples/README.md) |
| Data_catalog.rename_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.rename_tag_template_field.js,samples/README.md) |
| Data_catalog.search_catalog | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.search_catalog.js,samples/README.md) |
| Data_catalog.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.set_iam_policy.js,samples/README.md) |
| Data_catalog.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.test_iam_permissions.js,samples/README.md) |
| Data_catalog.update_entry | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry.js,samples/README.md) |
| Data_catalog.update_entry_group | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_entry_group.js,samples/README.md) |
| Data_catalog.update_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag.js,samples/README.md) |
| Data_catalog.update_tag_template | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template.js,samples/README.md) |
| Data_catalog.update_tag_template_field | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/data_catalog.update_tag_template_field.js,samples/README.md) |
| Policy_tag_manager.create_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_policy_tag.js,samples/README.md) |
| Policy_tag_manager.create_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.create_taxonomy.js,samples/README.md) |
| Policy_tag_manager.delete_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_policy_tag.js,samples/README.md) |
| Policy_tag_manager.delete_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.delete_taxonomy.js,samples/README.md) |
| Policy_tag_manager.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_iam_policy.js,samples/README.md) |
| Policy_tag_manager.get_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_policy_tag.js,samples/README.md) |
| Policy_tag_manager.get_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.get_taxonomy.js,samples/README.md) |
| Policy_tag_manager.list_policy_tags | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_policy_tags.js,samples/README.md) |
| Policy_tag_manager.list_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.list_taxonomies.js,samples/README.md) |
| Policy_tag_manager.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.set_iam_policy.js,samples/README.md) |
| Policy_tag_manager.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.test_iam_permissions.js,samples/README.md) |
| Policy_tag_manager.update_policy_tag | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_policy_tag.js,samples/README.md) |
| Policy_tag_manager.update_taxonomy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager.update_taxonomy.js,samples/README.md) |
| Policy_tag_manager_serialization.export_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js,samples/README.md) |
| Policy_tag_manager_serialization.import_taxonomies | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/quickstart.js,samples/README.md) |
| Quickstart.test | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-datacatalog/samples/test/quickstart.test.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-datacatalog/samples/test/quickstart.test.js,samples/README.md) |



The [Data Catalog Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
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
For example, `npm install @google-cloud/datacatalog@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datacatalog/latest
[product-docs]: https://cloud.google.com/data-catalog/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datacatalog.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
