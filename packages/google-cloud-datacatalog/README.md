[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Data Catalog: Node.js Client](https://github.com/googleapis/nodejs-datacatalog)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/datacatalog.svg)](https://www.npmjs.org/package/@google-cloud/datacatalog)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-datacatalog/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-datacatalog)




Google Cloud Data Catalog API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-datacatalog/blob/master/CHANGELOG.md).

* [Data Catalog Node.js Client API Reference][client-docs]
* [Data Catalog Documentation][product-docs]
* [github.com/googleapis/nodejs-datacatalog](https://github.com/googleapis/nodejs-datacatalog)

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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-datacatalog/tree/master/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Create Custom Entry | [source code](https://github.com/googleapis/nodejs-datacatalog/blob/master/samples/createCustomEntry.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datacatalog&page=editor&open_in_editor=samples/createCustomEntry.js,samples/README.md) |
| Create Fileset | [source code](https://github.com/googleapis/nodejs-datacatalog/blob/master/samples/createFileset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datacatalog&page=editor&open_in_editor=samples/createFileset.js,samples/README.md) |
| Grant Tag Template User Role | [source code](https://github.com/googleapis/nodejs-datacatalog/blob/master/samples/grantTagTemplateUserRole.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datacatalog&page=editor&open_in_editor=samples/grantTagTemplateUserRole.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-datacatalog/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datacatalog&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Search Assets | [source code](https://github.com/googleapis/nodejs-datacatalog/blob/master/samples/searchAssets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-datacatalog&page=editor&open_in_editor=samples/searchAssets.js,samples/README.md) |



The [Data Catalog Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-datacatalog/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-datacatalog/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/datacatalog/latest
[product-docs]: https://cloud.google.com/data-catalog/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=datacatalog.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
