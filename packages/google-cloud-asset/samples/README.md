[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Asset Inventory: Node.js Samples](https://github.com/googleapis/nodejs-asset)

[![Open in Cloud Shell][shell_img]][shell_link]



## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Analyze Iam Policy](#analyze-iam-policy)
  * [Analyze Iam Policy Longrunning and write results to Bigquery](#analyze-iam-policy-longrunning-and-write-results-to-bigquery)
  * [Analyze Iam Policy Longrunning and write results to GCS](#analyze-iam-policy-longrunning-and-write-results-to-gcs)
  * [Create Feed](#create-feed)
  * [Delete Feed](#delete-feed)
  * [Export Assets](#export-assets)
  * [Export Assets To BigQuery](#export-assets-to-bigquery)
  * [Get Batch Asset History](#get-batch-asset-history)
  * [Get Feed](#get-feed)
  * [List Assets](#list-assets)
  * [List Feeds](#list-feeds)
  * [Asset History Quickstart](#asset-history-quickstart)
  * [Search All Iam Policies](#search-all-iam-policies)
  * [Search All Resources](#search-all-resources)
  * [Update Feed](#update-feed)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-asset#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Analyze Iam Policy

Analyzes accessible IAM policies that match a request.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/analyzeIamPolicy.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/analyzeIamPolicy.js,samples/README.md)

__Usage:__


`node analyzeIamPolicy`


-----




### Analyze Iam Policy Longrunning and write results to Bigquery

Analyzes accessible IAM policies that match a request.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/analyzeIamPolicyLongrunningBigquery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/analyzeIamPolicyLongrunningBigquery.js,samples/README.md)

__Usage:__


`node analyzeIamPolicyLongrunningBigquery <dataset_id> <table_prefix>`


-----




### Analyze Iam Policy Longrunning and write results to GCS

Analyzes accessible IAM policies that match a request.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/analyzeIamPolicyLongrunningGcs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/analyzeIamPolicyLongrunningGcs.js,samples/README.md)

__Usage:__


`node analyzeIamPolicyLongrunningGcs <gs:my-bucket/my-analysis.json>`


-----




### Create Feed

Create Feed.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/createFeed.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/createFeed.js,samples/README.md)

__Usage:__


`node createFeed <FEED_ID> "storage.googleapis.com/<BUCKET_NAME>", projects/<PROJECT_ID>/topics/<TOPIC_ID>, "RESOURCE"`


-----




### Delete Feed

Delete Feed.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/deleteFeed.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/deleteFeed.js,samples/README.md)

__Usage:__


`node deleteFeed "project/<PROJECT_NUMBER>/feeds/<FEED_ID>"`


-----




### Export Assets

Export asserts to specified dump file path.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/exportAssets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/exportAssets.js,samples/README.md)

__Usage:__


`node exportAssets.js <gs:my-bucket/my-assets.txt> <content_type>`


-----




### Export Assets To BigQuery

Export asserts to specified BigQuery table.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/exportAssetsBigquery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/exportAssetsBigquery.js,samples/README.md)

__Usage:__


`node exportAssetsBigquery.js <projects/project_id/datasets/dataset_id> <table_name>`


-----




### Get Batch Asset History

Batch get history of assets.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/getBatchAssetHistory.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/getBatchAssetHistory.js,samples/README.md)

__Usage:__


`node getBatchAssetHistory "storage.googleapis.com/<BUCKET_NAME>"`


-----




### Get Feed

Get Feed.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/getFeed.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/getFeed.js,samples/README.md)

__Usage:__


`node getFeed "project/<PROJECT_NUMBER>/feeds/<FEED_ID>"`


-----




### List Assets

List assets under the current project.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/listAssets.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/listAssets.js,samples/README.md)

__Usage:__


`node listAssets <ASSET_TYPES> <content_type>`


-----




### List Feeds

List Feeds.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/listFeeds.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/listFeeds.js,samples/README.md)

__Usage:__


`node listFeeds`


-----




### Asset History Quickstart

Batch get history of assets.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node getBatchAssetHistory "storage.googleapis.com/<BUCKET_NAME>"`


-----




### Search All Iam Policies

Search All Iam Policies.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/searchAllIamPolicies.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/searchAllIamPolicies.js,samples/README.md)

__Usage:__


`node searchAllIamPolicies <SCOPE> <QUERY> <PAGE_SIZE> <PAGE_TOKEN>`


-----




### Search All Resources

Search All Resources.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/searchAllResources.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/searchAllResources.js,samples/README.md)

__Usage:__


`node searchAllResources <SCOPE> <QUERY> <ASSET_TYPES> <PAGE_SIZE> <PAGE_TOKEN> <ORDER_BY>`


-----




### Update Feed

Update Feed.

View the [source code](https://github.com/googleapis/nodejs-asset/blob/main/samples/updateFeed.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/updateFeed.js,samples/README.md)

__Usage:__


`node updateFeed "project/<PROJECT_NUMBER>/feeds/<FEED_ID>" projects/<PROJECT_ID>/topics/<TOPIC_ID>`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-asset&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview
