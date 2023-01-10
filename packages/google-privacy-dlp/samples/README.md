[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Data Loss Prevention: Node.js Samples](https://github.com/googleapis/nodejs-dlp)

[![Open in Cloud Shell][shell_img]][shell_link]

The [Data Loss Prevention API](https://cloud.google.com/dlp/docs/) provides programmatic access to a
powerful detection engine for personally identifiable information and other privacy-sensitive
data in unstructured data streams.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Categorical Risk Analysis](#categorical-risk-analysis)
  * [Inspect Templates](#inspect-templates)
  * [Job Triggers](#job-triggers)
  * [Deidentify with Date Shift](#deidentify-with-date-shift)
  * [Deidentify with FPE](#deidentify-with-fpe)
  * [Deidentify with Mask](#deidentify-with-mask)
  * [Deidentify with Replacement](#deidentify-with-replacement)
  * [Delete Inspect Templates](#delete-inspect-templates)
  * [Delete Job](#delete-job)
  * [Delete Trigger](#delete-trigger)
  * [Inspect Bigquery](#inspect-bigquery)
  * [Inspect Datastore](#inspect-datastore)
  * [Inspect File](#inspect-file)
  * [Inspect GCS File](#inspect-gcs-file)
  * [Inspects strings](#inspects-strings)
  * [kAnonymity Analysis](#kanonymity-analysis)
  * [kMap Estimation Analysis](#kmap-estimation-analysis)
  * [l Diversity Analysis](#l-diversity-analysis)
  * [List Inspect Templates](#list-inspect-templates)
  * [List jobs](#list-jobs)
  * [List Triggers](#list-triggers)
  * [Metadata](#metadata)
  * [Numerical Risk Analysis](#numerical-risk-analysis)
  * [Quickstart](#quickstart)
  * [Redact Image](#redact-image)
  * [Redact Text](#redact-text)
  * [Reidentify with FPE](#reidentify-with-fpe)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-dlp#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Categorical Risk Analysis

Computes risk metrics of a column of data in a Google BigQuery table.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/categoricalRiskAnalysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/categoricalRiskAnalysis.js,samples/README.md)

__Usage:__


`node categoricalRiskAnalysis.js my-project nhtsa_traffic_fatalities accident_2015 state_name my-topic my-subscription bigquery-public-data`


-----




### Inspect Templates

Create a new DLP inspection configuration template.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/createInspectTemplate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/createInspectTemplate.js,samples/README.md)

__Usage:__


`node createInspectTemplate.js my-project VERY_LIKELY PERSON_NAME 5 false my-template-id`


-----




### Job Triggers

Create a Data Loss Prevention API job trigger.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/createTrigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/createTrigger.js,samples/README.md)

__Usage:__


`node createTrigger.js my-project triggerId displayName description bucketName autoPopulateTimespan scanPeriod infoTypes minLikelihood maxFindings`


-----




### Deidentify with Date Shift

Deidentify dates in a CSV file by pseudorandomly shifting them.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithDateShift.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithDateShift.js,samples/README.md)

__Usage:__


`node deidentifyWithDateShift.js my-project dates.csv dates-shifted.csv 30 30 birth_date register_date [<YOUR_ENCRYPTED_AES_256_KEY> projects/my-project/locations/global/keyrings/my-keyring]`


-----




### Deidentify with FPE

Deidentify sensitive data in a string using Format Preserving Encryption (FPE).

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithFpe.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithFpe.js,samples/README.md)

__Usage:__


`node deidentifyWithFpe.js my-project "My SSN is 372819127" <YOUR_ENCRYPTED_AES_256_KEY> projects/my-project/locations/global/keyrings/my-keyring SSN_TOKEN`


-----




### Deidentify with Mask

Deidentify sensitive data in a string by masking it with a character.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithMask.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithMask.js,samples/README.md)

__Usage:__


`node deidentifyWithMask.js my-project string maskingCharacter numberToMask`


-----




### Deidentify with Replacement

Deidentify sensitive data in a string by replacing it with a given replacement string.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deidentifyWithReplacement.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deidentifyWithReplacement.js,samples/README.md)

__Usage:__


`node deidentifyWithMask.js my-project string replacement`


-----




### Delete Inspect Templates

Delete the DLP inspection configuration template with the specified name.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteInspectTemplate.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteInspectTemplate.js,samples/README.md)

__Usage:__


`node deleteInspectTemplates.js my-project projects/my-project/inspectTemplates/`


-----




### Delete Job

Delete results of a Data Loss Prevention API job.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteJob.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteJob.js,samples/README.md)

__Usage:__


`node deleteJob.js my-project projects/YOUR_GCLOUD_PROJECT/dlpJobs/X-`


-----




### Delete Trigger

Delete results of a Data Loss Prevention API job.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/deleteTrigger.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/deleteTrigger.js,samples/README.md)

__Usage:__


`node deleteTrigger.js my-rpoject projects/my-project/jobTriggers/my-trigger`


-----




### Inspect Bigquery

Inspects a BigQuery table using the Data Loss Prevention API using Pub/Sub for job notifications.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectBigQuery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectBigQuery.js,samples/README.md)

__Usage:__


`node inspectBigQuery.js my-project dataProjectId datasetId tableId topicId subscriptionId minLikelihood maxFindings infoTypes customInfoTypes`


-----




### Inspect Datastore

Inspect a Datastore instance using the Data Loss Prevention API using Pub/Sub for job notifications.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectDatastore.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectDatastore.js,samples/README.md)

__Usage:__


`node inspectDatastore.js my-project dataProjectId namespaceId kind topicId subscriptionId minLikelihood maxFindings infoTypes customInfoTypes`


-----




### Inspect File

Inspects a local text, PNG, or JPEG file using the Data Loss Prevention API.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectFile.js,samples/README.md)

__Usage:__


`node inspectFile.js my-project filepath minLikelihood maxFindings infoTypes customInfoTypes includeQuote`


-----




### Inspect GCS File

Inspects a text file stored on Google Cloud Storage with the Data Loss Prevention API, using Pub/Sub for job notifications.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectGCSFile.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectGCSFile.js,samples/README.md)

__Usage:__


`node inspectGCSFile.js my-project filepath minLikelihood maxFindings infoTypes customInfoTypes includeQuote`


-----




### Inspects strings

Inspect a string using the Data Loss Prevention API.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/inspectString.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/inspectString.js,samples/README.md)

__Usage:__


`node inspectString.js my-project string minLikelihood maxFindings infoTypes customInfoTypes includeQuote`


-----




### kAnonymity Analysis

Computes the k-anonymity of a column set in a Google BigQuery table

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/kAnonymityAnalysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/kAnonymityAnalysis.js,samples/README.md)

__Usage:__


`node kAnonymityAnalysis.js my-project tableProjectId datasetId tableId topicId subscriptionId quasiIds`


-----




### kMap Estimation Analysis

Computes the k-map risk estimation of a column set in a Google BigQuery table.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/kMapEstimationAnalysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/kMapEstimationAnalysis.js,samples/README.md)

__Usage:__


`node kMapEstimationAnalysis.js my-project tableProjectId datasetId tableId topicId subscriptionId regionCode quasiIds`


-----




### l Diversity Analysis

Computes the l-diversity of a column set in a Google BigQuery table.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/lDiversityAnalysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/lDiversityAnalysis.js,samples/README.md)

__Usage:__


`node lDiversityAnalysis.js my-project tableProjectId datasetId tableId topicId subscriptionId sensitiveAttribute quasiIds`


-----




### List Inspect Templates

List DLP inspection configuration templates.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listInspectTemplates.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listInspectTemplates.js,samples/README.md)

__Usage:__


`node listInspectTemplates.js my-project`


-----




### List jobs

List Data Loss Prevention API jobs corresponding to a given filter.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listJobs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listJobs.js,samples/README.md)

__Usage:__


`node listJobs.js my-project filter jobType`


-----




### List Triggers

List Data Loss Prevention API job triggers.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/listTriggers.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/listTriggers.js,samples/README.md)

__Usage:__


`node listTriggers.js my-project`


-----




### Metadata

List the types of sensitive information the DLP API supports

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/metadata.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/metadata.js,samples/README.md)

__Usage:__


`node metadata.js my-project langaugeCode filter`


-----




### Numerical Risk Analysis

Computes risk metrics of a column of numbers in a Google BigQuery table.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/numericalRiskAnalysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/numericalRiskAnalysis.js,samples/README.md)

__Usage:__


`node numericalRiskAnalysis.js my-project tableProjectId datasetId tableId columnName topicId subscriptionId`


-----




### Quickstart

Inspects and assesses a string.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node quickstart.js my-project`


-----




### Redact Image

Redact sensitive data from an image using the Data Loss Prevention API.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/redactImage.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/redactImage.js,samples/README.md)

__Usage:__


`node redactImage.js my-project filepath minLikelihood infoTypes outputPath`


-----




### Redact Text

Redact sensitive data from text using the Data Loss Prevention API.

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/redactText.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/redactText.js,samples/README.md)

__Usage:__


`node redactText.js my-project string minLikelihood infoTypes`


-----




### Reidentify with FPE

Reidentify sensitive data in a string using Format Preserving Encryption (FPE).

View the [source code](https://github.com/googleapis/nodejs-dlp/blob/main/samples/reidentifyWithFpe.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/reidentifyWithFpe.js,samples/README.md)

__Usage:__


`node reidentifyWithFpe.js my-project string alphabet surrogateType keyName wrappedKey`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-dlp&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/dlp/docs/
