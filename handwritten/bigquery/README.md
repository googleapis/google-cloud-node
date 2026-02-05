[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google BigQuery: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/bigquery)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/bigquery.svg)](https://www.npmjs.com/package/@google-cloud/bigquery)




Google BigQuery Client Library for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/bigquery/CHANGELOG.md).

* [Google BigQuery Node.js Client API Reference][client-docs]
* [Google BigQuery Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/handwritten/bigquery](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/bigquery)

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
1.  [Enable the Google BigQuery API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/bigquery
```


### Using the client library

```javascript
// Imports the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');

async function createDataset() {
  // Creates a client
  const bigqueryClient = new BigQuery();

  // Create the dataset
  const [dataset] = await bigqueryClient.createDataset(datasetName);
  console.log(`Dataset ${dataset.id} created.`);
}
createDataset();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/handwritten/bigquery/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Add Column Load Append | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/addColumnLoadAppend.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/addColumnLoadAppend.js,handwritten/bigquery/samples/README.md) |
| Add Column Query Append | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/addColumnQueryAppend.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/addColumnQueryAppend.js,handwritten/bigquery/samples/README.md) |
| Add Empty Column | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/addEmptyColumn.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/addEmptyColumn.js,handwritten/bigquery/samples/README.md) |
| Auth User Flow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/auth-user-sample/authUserFlow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/auth-user-sample/authUserFlow.js,handwritten/bigquery/samples/README.md) |
| Auth View Tutorial | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/authViewTutorial.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/authViewTutorial.js,handwritten/bigquery/samples/README.md) |
| Browse Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/browseTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/browseTable.js,handwritten/bigquery/samples/README.md) |
| Cancel Job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/cancelJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/cancelJob.js,handwritten/bigquery/samples/README.md) |
| Client JSON Credentials | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/clientJSONCredentials.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/clientJSONCredentials.js,handwritten/bigquery/samples/README.md) |
| Copy Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/copyTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/copyTable.js,handwritten/bigquery/samples/README.md) |
| Copy Table Multiple Source | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/copyTableMultipleSource.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/copyTableMultipleSource.js,handwritten/bigquery/samples/README.md) |
| Create Dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createDataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createDataset.js,handwritten/bigquery/samples/README.md) |
| Create Job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createJob.js,handwritten/bigquery/samples/README.md) |
| Create Model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createModel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createModel.js,handwritten/bigquery/samples/README.md) |
| Create Routine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createRoutine.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createRoutine.js,handwritten/bigquery/samples/README.md) |
| Create Routine DDL | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createRoutineDDL.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createRoutineDDL.js,handwritten/bigquery/samples/README.md) |
| Create Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createTable.js,handwritten/bigquery/samples/README.md) |
| Create Table Clustered | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createTableClustered.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createTableClustered.js,handwritten/bigquery/samples/README.md) |
| Create Table Column ACL | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createTableColumnACL.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createTableColumnACL.js,handwritten/bigquery/samples/README.md) |
| Create Table Partitioned | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createTablePartitioned.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createTablePartitioned.js,handwritten/bigquery/samples/README.md) |
| Create Table Range Partitioned | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createTableRangePartitioned.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createTableRangePartitioned.js,handwritten/bigquery/samples/README.md) |
| Create View | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/createView.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/createView.js,handwritten/bigquery/samples/README.md) |
| Ddl Create View | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/ddlCreateView.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/ddlCreateView.js,handwritten/bigquery/samples/README.md) |
| Delete Dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteDataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteDataset.js,handwritten/bigquery/samples/README.md) |
| Delete Label Dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteLabelDataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteLabelDataset.js,handwritten/bigquery/samples/README.md) |
| Delete Label Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteLabelTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteLabelTable.js,handwritten/bigquery/samples/README.md) |
| Delete Model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteModel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteModel.js,handwritten/bigquery/samples/README.md) |
| Delete Routine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteRoutine.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteRoutine.js,handwritten/bigquery/samples/README.md) |
| Delete Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/deleteTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/deleteTable.js,handwritten/bigquery/samples/README.md) |
| Extract Table Compressed | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/extractTableCompressed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/extractTableCompressed.js,handwritten/bigquery/samples/README.md) |
| Extract Table JSON | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/extractTableJSON.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/extractTableJSON.js,handwritten/bigquery/samples/README.md) |
| Extract Table To GCS | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/extractTableToGCS.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/extractTableToGCS.js,handwritten/bigquery/samples/README.md) |
| Get Dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getDataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getDataset.js,handwritten/bigquery/samples/README.md) |
| Get Dataset Labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getDatasetLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getDatasetLabels.js,handwritten/bigquery/samples/README.md) |
| Get Job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getJob.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getJob.js,handwritten/bigquery/samples/README.md) |
| BigQuery Get Model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getModel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getModel.js,handwritten/bigquery/samples/README.md) |
| Get Routine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getRoutine.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getRoutine.js,handwritten/bigquery/samples/README.md) |
| BigQuery Get Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getTable.js,handwritten/bigquery/samples/README.md) |
| Get Table Labels | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getTableLabels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getTableLabels.js,handwritten/bigquery/samples/README.md) |
| Get View | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/getView.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/getView.js,handwritten/bigquery/samples/README.md) |
| Insert Rows As Stream | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/insertRowsAsStream.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/insertRowsAsStream.js,handwritten/bigquery/samples/README.md) |
| Inserting Data Types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/insertingDataTypes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/insertingDataTypes.js,handwritten/bigquery/samples/README.md) |
| BigQuery Label Dataset | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/labelDataset.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/labelDataset.js,handwritten/bigquery/samples/README.md) |
| Label Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/labelTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/labelTable.js,handwritten/bigquery/samples/README.md) |
| List Datasets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listDatasets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listDatasets.js,handwritten/bigquery/samples/README.md) |
| List Datasets By Label | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listDatasetsByLabel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listDatasetsByLabel.js,handwritten/bigquery/samples/README.md) |
| List Jobs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listJobs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listJobs.js,handwritten/bigquery/samples/README.md) |
| BigQuery List Models | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listModels.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listModels.js,handwritten/bigquery/samples/README.md) |
| BigQuery List Models Streaming | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listModelsStreaming.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listModelsStreaming.js,handwritten/bigquery/samples/README.md) |
| List Routines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listRoutines.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listRoutines.js,handwritten/bigquery/samples/README.md) |
| List Tables | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/listTables.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/listTables.js,handwritten/bigquery/samples/README.md) |
| Load CSV From GCS | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadCSVFromGCS.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadCSVFromGCS.js,handwritten/bigquery/samples/README.md) |
| Load CSV From GCS Autodetect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadCSVFromGCSAutodetect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadCSVFromGCSAutodetect.js,handwritten/bigquery/samples/README.md) |
| Load CSV From GCS Truncate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadCSVFromGCSTruncate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadCSVFromGCSTruncate.js,handwritten/bigquery/samples/README.md) |
| Load JSON From GCS | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadJSONFromGCS.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadJSONFromGCS.js,handwritten/bigquery/samples/README.md) |
| Load JSON From GCS Autodetect | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadJSONFromGCSAutodetect.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadJSONFromGCSAutodetect.js,handwritten/bigquery/samples/README.md) |
| Load JSON From GCS Truncate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadJSONFromGCSTruncate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadJSONFromGCSTruncate.js,handwritten/bigquery/samples/README.md) |
| Load Local File | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadLocalFile.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadLocalFile.js,handwritten/bigquery/samples/README.md) |
| Load Orc From GCS Truncate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadOrcFromGCSTruncate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadOrcFromGCSTruncate.js,handwritten/bigquery/samples/README.md) |
| Load Parquet From GCS Truncate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadParquetFromGCSTruncate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadParquetFromGCSTruncate.js,handwritten/bigquery/samples/README.md) |
| Load Table Clustered | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableClustered.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableClustered.js,handwritten/bigquery/samples/README.md) |
| Load Table GCS Avro | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableGCSAvro.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableGCSAvro.js,handwritten/bigquery/samples/README.md) |
| Load Table GCS Avro Truncate | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableGCSAvroTruncate.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableGCSAvroTruncate.js,handwritten/bigquery/samples/README.md) |
| Load Table GCSORC | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableGCSORC.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableGCSORC.js,handwritten/bigquery/samples/README.md) |
| Load Table GCS Parquet | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableGCSParquet.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableGCSParquet.js,handwritten/bigquery/samples/README.md) |
| Load Table Partitioned | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTablePartitioned.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTablePartitioned.js,handwritten/bigquery/samples/README.md) |
| Load Table URI Firestore | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/loadTableURIFirestore.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/loadTableURIFirestore.js,handwritten/bigquery/samples/README.md) |
| Nested Repeated Schema | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/nestedRepeatedSchema.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/nestedRepeatedSchema.js,handwritten/bigquery/samples/README.md) |
| Query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/query.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/query.js,handwritten/bigquery/samples/README.md) |
| Query Batch | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryBatch.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryBatch.js,handwritten/bigquery/samples/README.md) |
| Query Clustered Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryClusteredTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryClusteredTable.js,handwritten/bigquery/samples/README.md) |
| Query Destination Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryDestinationTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryDestinationTable.js,handwritten/bigquery/samples/README.md) |
| Query Disable Cache | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryDisableCache.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryDisableCache.js,handwritten/bigquery/samples/README.md) |
| Query Dry Run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryDryRun.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryDryRun.js,handwritten/bigquery/samples/README.md) |
| Query External GCS Perm | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryExternalGCSPerm.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryExternalGCSPerm.js,handwritten/bigquery/samples/README.md) |
| Query External GCS Temp | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryExternalGCSTemp.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryExternalGCSTemp.js,handwritten/bigquery/samples/README.md) |
| Query Job Optional | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryJobOptional.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryJobOptional.js,handwritten/bigquery/samples/README.md) |
| Query Legacy | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryLegacy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryLegacy.js,handwritten/bigquery/samples/README.md) |
| Query Legacy Large Results | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryLegacyLargeResults.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryLegacyLargeResults.js,handwritten/bigquery/samples/README.md) |
| Query Pagination | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryPagination.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryPagination.js,handwritten/bigquery/samples/README.md) |
| Query Params Arrays | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsArrays.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsArrays.js,handwritten/bigquery/samples/README.md) |
| Query Params Named | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsNamed.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsNamed.js,handwritten/bigquery/samples/README.md) |
| Query Params Named Types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsNamedTypes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsNamedTypes.js,handwritten/bigquery/samples/README.md) |
| Query Params Positional | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsPositional.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsPositional.js,handwritten/bigquery/samples/README.md) |
| Query Params Positional Types | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsPositionalTypes.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsPositionalTypes.js,handwritten/bigquery/samples/README.md) |
| Query Params Structs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsStructs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsStructs.js,handwritten/bigquery/samples/README.md) |
| Query Params Timestamps | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryParamsTimestamps.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryParamsTimestamps.js,handwritten/bigquery/samples/README.md) |
| Query Stack Overflow | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/queryStackOverflow.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/queryStackOverflow.js,handwritten/bigquery/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/quickstart.js,handwritten/bigquery/samples/README.md) |
| Relax Column | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/relaxColumn.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/relaxColumn.js,handwritten/bigquery/samples/README.md) |
| Relax Column Load Append | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/relaxColumnLoadAppend.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/relaxColumnLoadAppend.js,handwritten/bigquery/samples/README.md) |
| Relax Column Query Append | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/relaxColumnQueryAppend.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/relaxColumnQueryAppend.js,handwritten/bigquery/samples/README.md) |
| Remove Table Clustering | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/removeTableClustering.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/removeTableClustering.js,handwritten/bigquery/samples/README.md) |
| Set Client Endpoint | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/setClientEndpoint.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/setClientEndpoint.js,handwritten/bigquery/samples/README.md) |
| Set User Agent | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/setUserAgent.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/setUserAgent.js,handwritten/bigquery/samples/README.md) |
| Table Exists | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/tableExists.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/tableExists.js,handwritten/bigquery/samples/README.md) |
| Undelete Table | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/undeleteTable.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/undeleteTable.js,handwritten/bigquery/samples/README.md) |
| Update Dataset Access | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateDatasetAccess.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateDatasetAccess.js,handwritten/bigquery/samples/README.md) |
| Update Dataset Description | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateDatasetDescription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateDatasetDescription.js,handwritten/bigquery/samples/README.md) |
| Update Dataset Expiration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateDatasetExpiration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateDatasetExpiration.js,handwritten/bigquery/samples/README.md) |
| BigQuery Update Model | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateModel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateModel.js,handwritten/bigquery/samples/README.md) |
| Update Routine | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateRoutine.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateRoutine.js,handwritten/bigquery/samples/README.md) |
| Update Table Column ACL | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateTableColumnACL.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateTableColumnACL.js,handwritten/bigquery/samples/README.md) |
| Update Table Description | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateTableDescription.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateTableDescription.js,handwritten/bigquery/samples/README.md) |
| Update Table Expiration | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateTableExpiration.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateTableExpiration.js,handwritten/bigquery/samples/README.md) |
| Update View Query | [source code](https://github.com/googleapis/google-cloud-node/blob/main/handwritten/bigquery/samples/updateViewQuery.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=handwritten/bigquery/samples/updateViewQuery.js,handwritten/bigquery/samples/README.md) |



The [Google BigQuery Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/bigquery@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/bigquery/latest
[product-docs]: https://cloud.google.com/bigquery
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=bigquery.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
