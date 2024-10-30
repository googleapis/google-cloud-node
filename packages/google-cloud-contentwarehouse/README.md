[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Document AI Warehouse: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contentwarehouse)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/contentwarehouse.svg)](https://www.npmjs.org/package/@google-cloud/contentwarehouse)




Document AI Warehouse client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contentwarehouse/CHANGELOG.md).

* [Document AI Warehouse Node.js Client API Reference][client-docs]
* [Document AI Warehouse Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-contentwarehouse](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contentwarehouse)

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
1.  [Enable the Document AI Warehouse API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/contentwarehouse
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent, which owns this collection of document.
 *  Format: projects/{project_number}/locations/{location}.
 */
// const parent = 'abc123'
/**
 *  The maximum number of rule sets to return. The service may return
 *  fewer than this value.
 *  If unspecified, at most 50 rule sets will be returned.
 *  The maximum value is 1000; values above 1000 will be coerced to 1000.
 */
// const pageSize = 1234
/**
 *  A page token, received from a previous `ListRuleSets` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other parameters provided to `ListRuleSets`
 *  must match the call that provided the page token.
 */
// const pageToken = 'abc123'

// Imports the Contentwarehouse library
const {RuleSetServiceClient} = require('@google-cloud/contentwarehouse').v1;

// Instantiates a client
const contentwarehouseClient = new RuleSetServiceClient();

async function callListRuleSets() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await contentwarehouseClient.listRuleSetsAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

callListRuleSets();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-contentwarehouse/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Document_link_service.create_document_link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.create_document_link.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.create_document_link.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_link_service.delete_document_link | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.delete_document_link.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.delete_document_link.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_link_service.list_linked_sources | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.list_linked_sources.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.list_linked_sources.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_link_service.list_linked_targets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.list_linked_targets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_link_service.list_linked_targets.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_schema_service.create_document_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.create_document_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.create_document_schema.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_schema_service.delete_document_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.delete_document_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.delete_document_schema.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_schema_service.get_document_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.get_document_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.get_document_schema.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_schema_service.list_document_schemas | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.list_document_schemas.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.list_document_schemas.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_schema_service.update_document_schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.update_document_schema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_schema_service.update_document_schema.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.create_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.create_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.create_document.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.delete_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.delete_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.delete_document.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.fetch_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.fetch_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.fetch_acl.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.get_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.get_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.get_document.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.lock_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.lock_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.lock_document.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.search_documents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.search_documents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.search_documents.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.set_acl | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.set_acl.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.set_acl.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Document_service.update_document | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.update_document.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/document_service.update_document.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Pipeline_service.run_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/pipeline_service.run_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/pipeline_service.run_pipeline.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Rule_set_service.create_rule_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.create_rule_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.create_rule_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Rule_set_service.delete_rule_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.delete_rule_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.delete_rule_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Rule_set_service.get_rule_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.get_rule_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.get_rule_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Rule_set_service.list_rule_sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.list_rule_sets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.list_rule_sets.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Rule_set_service.update_rule_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.update_rule_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/rule_set_service.update_rule_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Synonym_set_service.create_synonym_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.create_synonym_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.create_synonym_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Synonym_set_service.delete_synonym_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.delete_synonym_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.delete_synonym_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Synonym_set_service.get_synonym_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.get_synonym_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.get_synonym_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Synonym_set_service.list_synonym_sets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.list_synonym_sets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.list_synonym_sets.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Synonym_set_service.update_synonym_set | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.update_synonym_set.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/generated/v1/synonym_set_service.update_synonym_set.js,packages/google-cloud-contentwarehouse/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-contentwarehouse/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-contentwarehouse/samples/quickstart.js,packages/google-cloud-contentwarehouse/samples/README.md) |



The [Document AI Warehouse Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/contentwarehouse@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/contentwarehouse/latest
[product-docs]: cloud.google.com/document-warehouse/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=contentwarehouse.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
