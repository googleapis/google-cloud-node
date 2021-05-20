[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [AI Platform: Node.js Samples](https://github.com/googleapis/nodejs-ai-platform)

[![Open in Cloud Shell][shell_img]][shell_link]

Google Cloud AI Platform is an integrated suite of machine learning tools
and services for building and using ML models with AutoML or custom code.
It offers both novices and experts the best workbench for the entire
machine learning development lifecycle.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Cancel-batch-prediction-job](#cancel-batch-prediction-job)
  * [Cancel-custom-job](#cancel-custom-job)
  * [Create-batch-prediction-job-text-classification](#create-batch-prediction-job-text-classification)
  * [Create-batch-prediction-job-text-entity-extraction](#create-batch-prediction-job-text-entity-extraction)
  * [Create-batch-prediction-job-text-sentiment-analysis](#create-batch-prediction-job-text-sentiment-analysis)
  * [Create-batch-prediction-job-video-action-recognition](#create-batch-prediction-job-video-action-recognition)
  * [Create-batch-prediction-job-video-classification](#create-batch-prediction-job-video-classification)
  * [Create-batch-prediction-job-video-object-tracking](#create-batch-prediction-job-video-object-tracking)
  * [Create-custom-job](#create-custom-job)
  * [Create-dataset-image](#create-dataset-image)
  * [Create-dataset-tabular-bigquery](#create-dataset-tabular-bigquery)
  * [Create-dataset-tabular-gcs](#create-dataset-tabular-gcs)
  * [Create-dataset-text](#create-dataset-text)
  * [Create-dataset-video](#create-dataset-video)
  * [Create-dataset](#create-dataset)
  * [Create-endpoint](#create-endpoint)
  * [Create-hyperparameter-tuning-job-sample](#create-hyperparameter-tuning-job-sample)
  * [Create-hyperparameter-tuning-job](#create-hyperparameter-tuning-job)
  * [Create-training-pipeline-image-classification](#create-training-pipeline-image-classification)
  * [Create-training-pipeline-image-object-detection](#create-training-pipeline-image-object-detection)
  * [Create-training-pipeline-tabular-classification](#create-training-pipeline-tabular-classification)
  * [Create-training-pipeline-tabular-regression](#create-training-pipeline-tabular-regression)
  * [Create-training-pipeline-text-classification](#create-training-pipeline-text-classification)
  * [Create-training-pipeline-text-entity-extraction](#create-training-pipeline-text-entity-extraction)
  * [Create-training-pipeline-text-sentiment-analysis](#create-training-pipeline-text-sentiment-analysis)
  * [Create-training-pipeline-video-action-recognition](#create-training-pipeline-video-action-recognition)
  * [Create-training-pipeline-video-classification](#create-training-pipeline-video-classification)
  * [Create-training-pipeline-video-object-tracking](#create-training-pipeline-video-object-tracking)
  * [Delete-batch-prediction-job](#delete-batch-prediction-job)
  * [Delete-custom-job](#delete-custom-job)
  * [Delete-dataset](#delete-dataset)
  * [Delete-endpoint](#delete-endpoint)
  * [Delete-export-model](#delete-export-model)
  * [Delete-model](#delete-model)
  * [Deploy-model-custom-trained-model](#deploy-model-custom-trained-model)
  * [Deploy-model](#deploy-model)
  * [Export-model-tabular-classification](#export-model-tabular-classification)
  * [Export-model](#export-model)
  * [Get-batch-prediction-job](#get-batch-prediction-job)
  * [Get-custom-job](#get-custom-job)
  * [Get-hyperparameter-tuning-job](#get-hyperparameter-tuning-job)
  * [Get-model-evaluation-image-classification](#get-model-evaluation-image-classification)
  * [Get-model-evaluation-image-object-detection](#get-model-evaluation-image-object-detection)
  * [Get-model-evaluation-slice](#get-model-evaluation-slice)
  * [Get-model-evaluation-tabular-classification](#get-model-evaluation-tabular-classification)
  * [Get-model-evaluation-tabular-regression](#get-model-evaluation-tabular-regression)
  * [Get-model-evaluation-text-classification](#get-model-evaluation-text-classification)
  * [Get-model-evaluation-text-entity-extraction](#get-model-evaluation-text-entity-extraction)
  * [Get-model-evaluation-text-sentiment-analysis](#get-model-evaluation-text-sentiment-analysis)
  * [Get-model-evaluation-video-action-recognition](#get-model-evaluation-video-action-recognition)
  * [Get-model-evaluation-video-classification](#get-model-evaluation-video-classification)
  * [Get-model-evaluation-video-object-tracking](#get-model-evaluation-video-object-tracking)
  * [Get-model-evaluation](#get-model-evaluation)
  * [Get-model](#get-model)
  * [Get-training-pipeline](#get-training-pipeline)
  * [Import-data-image-classification](#import-data-image-classification)
  * [Import-data-image-object-detection](#import-data-image-object-detection)
  * [Import-data-text-classification-single-label](#import-data-text-classification-single-label)
  * [Import-data-text-entity-extraction](#import-data-text-entity-extraction)
  * [Import-data-text-sentiment-analysis](#import-data-text-sentiment-analysis)
  * [Import-data-video-action-recognition](#import-data-video-action-recognition)
  * [Import-data-video-classification](#import-data-video-classification)
  * [Import-data-video-object-tracking](#import-data-video-object-tracking)
  * [Import-data](#import-data)
  * [List-endpoints](#list-endpoints)
  * [List-model-evaluation-slices](#list-model-evaluation-slices)
  * [Predict-custom-trained-model](#predict-custom-trained-model)
  * [Predict-image-classification](#predict-image-classification)
  * [Predict-image-object-detection](#predict-image-object-detection)
  * [Predict-tabular-classification](#predict-tabular-classification)
  * [Predict-tabular-regression](#predict-tabular-regression)
  * [Predict-text-classification](#predict-text-classification)
  * [Predict-text-entity-extraction](#predict-text-entity-extraction)
  * [Predict-text-sentiment-analysis](#predict-text-sentiment-analysis)
  * [Quickstart](#quickstart)
  * [Undeploy-model](#undeploy-model)
  * [Upload-model](#upload-model)

## Before you begin

Before running the samples, make sure you've followed the steps outlined in
[Using the client library](https://github.com/googleapis/nodejs-ai-platform#using-the-client-library).

`cd samples`

`npm install`

`cd ..`

## Samples



### Cancel-batch-prediction-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/cancel-batch-prediction-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/cancel-batch-prediction-job.js,samples/README.md)

__Usage:__


`node samples/cancel-batch-prediction-job.js`


-----




### Cancel-custom-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/cancel-custom-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/cancel-custom-job.js,samples/README.md)

__Usage:__


`node samples/cancel-custom-job.js`


-----




### Create-batch-prediction-job-text-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-classification.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-text-classification.js`


-----




### Create-batch-prediction-job-text-entity-extraction

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-entity-extraction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-entity-extraction.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-text-entity-extraction.js`


-----




### Create-batch-prediction-job-text-sentiment-analysis

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-text-sentiment-analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-text-sentiment-analysis.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-text-sentiment-analysis.js`


-----




### Create-batch-prediction-job-video-action-recognition

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-action-recognition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-action-recognition.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-video-action-recognition.js`


-----




### Create-batch-prediction-job-video-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-classification.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-video-classification.js`


-----




### Create-batch-prediction-job-video-object-tracking

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-batch-prediction-job-video-object-tracking.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-batch-prediction-job-video-object-tracking.js,samples/README.md)

__Usage:__


`node samples/create-batch-prediction-job-video-object-tracking.js`


-----




### Create-custom-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-custom-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-custom-job.js,samples/README.md)

__Usage:__


`node samples/create-custom-job.js`


-----




### Create-dataset-image

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-image.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-image.js,samples/README.md)

__Usage:__


`node samples/create-dataset-image.js`


-----




### Create-dataset-tabular-bigquery

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-tabular-bigquery.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-tabular-bigquery.js,samples/README.md)

__Usage:__


`node samples/create-dataset-tabular-bigquery.js`


-----




### Create-dataset-tabular-gcs

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-tabular-gcs.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-tabular-gcs.js,samples/README.md)

__Usage:__


`node samples/create-dataset-tabular-gcs.js`


-----




### Create-dataset-text

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-text.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-text.js,samples/README.md)

__Usage:__


`node samples/create-dataset-text.js`


-----




### Create-dataset-video

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset-video.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset-video.js,samples/README.md)

__Usage:__


`node samples/create-dataset-video.js`


-----




### Create-dataset

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-dataset.js,samples/README.md)

__Usage:__


`node samples/create-dataset.js`


-----




### Create-endpoint

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-endpoint.js,samples/README.md)

__Usage:__


`node samples/create-endpoint.js`


-----




### Create-hyperparameter-tuning-job-sample

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-hyperparameter-tuning-job-sample.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-hyperparameter-tuning-job-sample.js,samples/README.md)

__Usage:__


`node samples/create-hyperparameter-tuning-job-sample.js`


-----




### Create-hyperparameter-tuning-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-hyperparameter-tuning-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-hyperparameter-tuning-job.js,samples/README.md)

__Usage:__


`node samples/create-hyperparameter-tuning-job.js`


-----




### Create-training-pipeline-image-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-image-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-image-classification.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-image-classification.js`


-----




### Create-training-pipeline-image-object-detection

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-image-object-detection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-image-object-detection.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-image-object-detection.js`


-----




### Create-training-pipeline-tabular-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-tabular-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-tabular-classification.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-tabular-classification.js`


-----




### Create-training-pipeline-tabular-regression

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-tabular-regression.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-tabular-regression.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-tabular-regression.js`


-----




### Create-training-pipeline-text-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-classification.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-text-classification.js`


-----




### Create-training-pipeline-text-entity-extraction

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-entity-extraction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-entity-extraction.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-text-entity-extraction.js`


-----




### Create-training-pipeline-text-sentiment-analysis

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-text-sentiment-analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-text-sentiment-analysis.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-text-sentiment-analysis.js`


-----




### Create-training-pipeline-video-action-recognition

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-action-recognition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-action-recognition.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-video-action-recognition.js`


-----




### Create-training-pipeline-video-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-classification.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-video-classification.js`


-----




### Create-training-pipeline-video-object-tracking

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/create-training-pipeline-video-object-tracking.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/create-training-pipeline-video-object-tracking.js,samples/README.md)

__Usage:__


`node samples/create-training-pipeline-video-object-tracking.js`


-----




### Delete-batch-prediction-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-batch-prediction-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-batch-prediction-job.js,samples/README.md)

__Usage:__


`node samples/delete-batch-prediction-job.js`


-----




### Delete-custom-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-custom-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-custom-job.js,samples/README.md)

__Usage:__


`node samples/delete-custom-job.js`


-----




### Delete-dataset

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-dataset.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-dataset.js,samples/README.md)

__Usage:__


`node samples/delete-dataset.js`


-----




### Delete-endpoint

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-endpoint.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-endpoint.js,samples/README.md)

__Usage:__


`node samples/delete-endpoint.js`


-----




### Delete-export-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-export-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-export-model.js,samples/README.md)

__Usage:__


`node samples/delete-export-model.js`


-----




### Delete-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/delete-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/delete-model.js,samples/README.md)

__Usage:__


`node samples/delete-model.js`


-----




### Deploy-model-custom-trained-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/deploy-model-custom-trained-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/deploy-model-custom-trained-model.js,samples/README.md)

__Usage:__


`node samples/deploy-model-custom-trained-model.js`


-----




### Deploy-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/deploy-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/deploy-model.js,samples/README.md)

__Usage:__


`node samples/deploy-model.js`


-----




### Export-model-tabular-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/export-model-tabular-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/export-model-tabular-classification.js,samples/README.md)

__Usage:__


`node samples/export-model-tabular-classification.js`


-----




### Export-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/export-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/export-model.js,samples/README.md)

__Usage:__


`node samples/export-model.js`


-----




### Get-batch-prediction-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-batch-prediction-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-batch-prediction-job.js,samples/README.md)

__Usage:__


`node samples/get-batch-prediction-job.js`


-----




### Get-custom-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-custom-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-custom-job.js,samples/README.md)

__Usage:__


`node samples/get-custom-job.js`


-----




### Get-hyperparameter-tuning-job

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-hyperparameter-tuning-job.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-hyperparameter-tuning-job.js,samples/README.md)

__Usage:__


`node samples/get-hyperparameter-tuning-job.js`


-----




### Get-model-evaluation-image-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-image-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-image-classification.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-image-classification.js`


-----




### Get-model-evaluation-image-object-detection

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-image-object-detection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-image-object-detection.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-image-object-detection.js`


-----




### Get-model-evaluation-slice

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-slice.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-slice.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-slice.js`


-----




### Get-model-evaluation-tabular-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-tabular-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-tabular-classification.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-tabular-classification.js`


-----




### Get-model-evaluation-tabular-regression

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-tabular-regression.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-tabular-regression.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-tabular-regression.js`


-----




### Get-model-evaluation-text-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-classification.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-text-classification.js`


-----




### Get-model-evaluation-text-entity-extraction

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-entity-extraction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-entity-extraction.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-text-entity-extraction.js`


-----




### Get-model-evaluation-text-sentiment-analysis

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-text-sentiment-analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-text-sentiment-analysis.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-text-sentiment-analysis.js`


-----




### Get-model-evaluation-video-action-recognition

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-action-recognition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-action-recognition.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-video-action-recognition.js`


-----




### Get-model-evaluation-video-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-classification.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-video-classification.js`


-----




### Get-model-evaluation-video-object-tracking

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation-video-object-tracking.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation-video-object-tracking.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation-video-object-tracking.js`


-----




### Get-model-evaluation

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model-evaluation.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model-evaluation.js,samples/README.md)

__Usage:__


`node samples/get-model-evaluation.js`


-----




### Get-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-model.js,samples/README.md)

__Usage:__


`node samples/get-model.js`


-----




### Get-training-pipeline

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/get-training-pipeline.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/get-training-pipeline.js,samples/README.md)

__Usage:__


`node samples/get-training-pipeline.js`


-----




### Import-data-image-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-image-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-image-classification.js,samples/README.md)

__Usage:__


`node samples/import-data-image-classification.js`


-----




### Import-data-image-object-detection

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-image-object-detection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-image-object-detection.js,samples/README.md)

__Usage:__


`node samples/import-data-image-object-detection.js`


-----




### Import-data-text-classification-single-label

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-classification-single-label.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-classification-single-label.js,samples/README.md)

__Usage:__


`node samples/import-data-text-classification-single-label.js`


-----




### Import-data-text-entity-extraction

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-entity-extraction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-entity-extraction.js,samples/README.md)

__Usage:__


`node samples/import-data-text-entity-extraction.js`


-----




### Import-data-text-sentiment-analysis

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-text-sentiment-analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-text-sentiment-analysis.js,samples/README.md)

__Usage:__


`node samples/import-data-text-sentiment-analysis.js`


-----




### Import-data-video-action-recognition

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-action-recognition.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-action-recognition.js,samples/README.md)

__Usage:__


`node samples/import-data-video-action-recognition.js`


-----




### Import-data-video-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-classification.js,samples/README.md)

__Usage:__


`node samples/import-data-video-classification.js`


-----




### Import-data-video-object-tracking

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data-video-object-tracking.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data-video-object-tracking.js,samples/README.md)

__Usage:__


`node samples/import-data-video-object-tracking.js`


-----




### Import-data

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/import-data.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/import-data.js,samples/README.md)

__Usage:__


`node samples/import-data.js`


-----




### List-endpoints

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/list-endpoints.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/list-endpoints.js,samples/README.md)

__Usage:__


`node samples/list-endpoints.js`


-----




### List-model-evaluation-slices

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/list-model-evaluation-slices.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/list-model-evaluation-slices.js,samples/README.md)

__Usage:__


`node samples/list-model-evaluation-slices.js`


-----




### Predict-custom-trained-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-custom-trained-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-custom-trained-model.js,samples/README.md)

__Usage:__


`node samples/predict-custom-trained-model.js`


-----




### Predict-image-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-image-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-image-classification.js,samples/README.md)

__Usage:__


`node samples/predict-image-classification.js`


-----




### Predict-image-object-detection

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-image-object-detection.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-image-object-detection.js,samples/README.md)

__Usage:__


`node samples/predict-image-object-detection.js`


-----




### Predict-tabular-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-tabular-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-tabular-classification.js,samples/README.md)

__Usage:__


`node samples/predict-tabular-classification.js`


-----




### Predict-tabular-regression

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-tabular-regression.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-tabular-regression.js,samples/README.md)

__Usage:__


`node samples/predict-tabular-regression.js`


-----




### Predict-text-classification

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-classification.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-classification.js,samples/README.md)

__Usage:__


`node samples/predict-text-classification.js`


-----




### Predict-text-entity-extraction

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-entity-extraction.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-entity-extraction.js,samples/README.md)

__Usage:__


`node samples/predict-text-entity-extraction.js`


-----




### Predict-text-sentiment-analysis

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/predict-text-sentiment-analysis.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/predict-text-sentiment-analysis.js,samples/README.md)

__Usage:__


`node samples/predict-text-sentiment-analysis.js`


-----




### Quickstart

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/quickstart.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__


`node samples/quickstart.js`


-----




### Undeploy-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/undeploy-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/undeploy-model.js,samples/README.md)

__Usage:__


`node samples/undeploy-model.js`


-----




### Upload-model

View the [source code](https://github.com/googleapis/nodejs-ai-platform/blob/master/samples/upload-model.js).

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/upload-model.js,samples/README.md)

__Usage:__


`node samples/upload-model.js`






[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-ai-platform&page=editor&open_in_editor=samples/README.md
[product-docs]: https://cloud.google.com/ai-platform-unified/docs
