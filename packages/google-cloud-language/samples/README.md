<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Natural Language API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

[Cloud Natural Language API](https://cloud.google.com/natural-language/docs) provides natural language understanding technologies to developers, including sentiment analysis, entity analysis, and syntax analysis. This API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Analyze v1](#analyze-v1)
  * [Analyze v1beta2](#analyze-v1beta2)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Analyze v1

View the [source code][analyze-v1_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1.js,samples/README.md)

__Usage:__ `node analyze.v1.js --help`

```
analyze.v1.js <command>

Commands:
  analyze.v1.js sentiment-text <text>                          Detects sentiment of a string.
  analyze.v1.js sentiment-file <bucketName> <fileName>         Detects sentiment in a file in Google Cloud Storage.
  analyze.v1.js entities-text <text>                           Detects entities in a string.
  analyze.v1.js entities-file <bucketName> <fileName>          Detects entities in a file in Google Cloud Storage.
  analyze.v1.js syntax-text <text>                             Detects syntax of a string.
  analyze.v1.js syntax-file <bucketName> <fileName>            Detects syntax in a file in Google Cloud Storage.
  analyze.v1.js entity-sentiment-text <text>                   Detects sentiment of the entities in a string.
  analyze.v1.js entity-sentiment-file <bucketName> <fileName>  Detects sentiment of the entities in a file in Google
                                                               Cloud Storage.
  analyze.v1.js classify-text <text>                           Classifies text of a string.
  analyze.v1.js classify-file <bucketName> <fileName>          Classifies text in a file in Google Cloud Storage.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.v1.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js sentiment-file my-bucket file.txt          Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1.js entities-text "President Obama is speaking at the White House."
  node analyze.v1.js entities-file my-bucket file.txt           Detects entities in gs://my-bucket/file.txt
  node analyze.v1.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1.js syntax-file my-bucket file.txt             Detects syntax in gs://my-bucket/file.txt
  node analyze.v1.js entity-sentiment-text "President Obama is speaking at the White House."
  node analyze.v1.js entity-sentiment-file my-bucket file.txt   Detects sentiment of entities in gs://my-bucket/file.txt
  node analyze.v1.js classify-text "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets."
  node analyze.v1.js classify-file my-bucket android_text.txt   Detects syntax in gs://my-bucket/android_text.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1_0_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1_0_code]: analyze.v1.js

### Analyze v1beta2

View the [source code][analyze-v1beta2_1_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/analyze.v1beta2.js,samples/README.md)

__Usage:__ `node analyze.v1beta2.js --help`

```
analyze.v1beta2.js <command>

Commands:
  analyze.v1beta2.js sentiment-text <text>                   Detects sentiment of a string.
  analyze.v1beta2.js sentiment-file <bucketName> <fileName>  Detects sentiment in a file in Google Cloud Storage.
  analyze.v1beta2.js entities-text <text>                    Detects entities in a string.
  analyze.v1beta2.js entities-file <bucketName> <fileName>   Detects entities in a file in Google Cloud Storage.
  analyze.v1beta2.js syntax-text <text>                      Detects syntax of a string.
  analyze.v1beta2.js syntax-file <bucketName> <fileName>     Detects syntax in a file in Google Cloud Storage.
  analyze.v1beta2.js classify-text <text>                    Classifies text of a string.
  analyze.v1beta2.js classify-file <bucketName> <fileName>   Classifies text in a file in Google Cloud Storage.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node analyze.v1beta2.js sentiment-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js sentiment-file my-bucket file.txt     Detects sentiment in gs://my-bucket/file.txt
  node analyze.v1beta2.js entities-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js entities-file my-bucket file.txt      Detects entities in gs://my-bucket/file.txt
  node analyze.v1beta2.js syntax-text "President Obama is speaking at the White House."
  node analyze.v1beta2.js syntax-file my-bucket file.txt        Detects syntax in gs://my-bucket/file.txt
  node analyze.v1beta2.js classify-text "Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets."
  node analyze.v1beta2.js classify-file my-bucket               Detects syntax in gs://my-bucket/android_text.txt
  android_text.txt

For more information, see https://cloud.google.com/natural-language/docs
```

[analyze-v1beta2_1_docs]: https://cloud.google.com/natural-language/docs/
[analyze-v1beta2_1_code]: analyze.v1beta2.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/README.md

### automlNaturalLanguageDataset

View the [source code][automlNaturalLanguageDataset_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/automl/automlNaturalLanguageDataset.js,samples/README.md)

__Usage:__ `node automlNaturalLanguageDataset.js --help`

```
automlNaturalLanguageDataset.js <command>

Commands:
  automlNaturalLanguageDataset.js create-dataset  creates a new Dataset
  automlNaturalLanguageDataset.js list-datasets   list all Datasets
  automlNaturalLanguageDataset.js get-dataset     Get a Dataset
  automlNaturalLanguageDataset.js delete-dataset  Delete a dataset
  automlNaturalLanguageDataset.js import-data     Import labeled items into dataset
  automlNaturalLanguageDataset.js export-data     Export a dataset to a Google Cloud Storage Bucket

Options:
  --version            Show version number                                                                     [boolean]
  --computeRegion, -c  region name e.g. "us-central1"                                  [string] [default: "us-central1"]
  --datasetName, -n    Name of the Dataset                                             [string] [default: "testDataSet"]
  --datasetId, -i      Id of the dataset                                                                        [string]
  --filter, -f        Name of the Dataset to search for    [string] [default: "text_classification_dataset_metadata:*"]
  --multilabel, -m     Type of the classification problem, False - MULTICLASS, True - MULTILABEL.
                                                                                               [string] [default: false]
  --outputUri, -o      URI (or local path) to export dataset                                                    [string]
  --path, -p           URI or local path to input .csv, or array of .csv paths
                                              [string] [default: "gs://nodejs-docs-samples-vcm/flowerTraindataMini.csv"]
  --projectId, -z      The GCLOUD_PROJECT string, e.g. "my-gcloud-project"            [number] [default: "203278707824"]
  --help               Show help                                                                               [boolean]

Examples:
  node automlNaturalLanguageDataset.js create-dataset -n "newDataSet"
  node automlNaturalLanguageDataset.js list-datasets -f "imageClassificationDatasetMetadata:*"
  node automlNaturalLanguageDataset.js get-dataset -i "DATASETID"
  node automlNaturalLanguageDataset.js delete-dataset -i "DATASETID"
  node automlNaturalLanguageDataset.js import-data -i "dataSetId" -p "gs://myproject/mytraindata.csv"
  node automlNaturalLanguageDataset.js export-data -i "dataSetId" -o "gs://myproject/outputdestination.csv"

For more information, see https://cloud.google.com/natural-language/docs
```

[automlNaturalLanguageDataset_docs]: https://cloud.google.com/natural-language/docs/
[automlNaturalLanguageDataset_code]: automl/automlNaturalLanguageDataset.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/README.md

### automlNaturalLanguageModel

View the [source code][automlNaturalLanguageModel_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/automl/automlNaturalLanguageModel.js,samples/README.md)

__Usage:__ `node automlNaturalLanguageModel.js --help`

```
analyze.v1beta2.js <command>

Commands:
  automlNaturalLanguageModel.js create-model           creates a new Model
  automlNaturalLanguageModel.js get-operation-status    Gets status of current operation
  automlNaturalLanguageModel.js list-models            list all Models
  automlNaturalLanguageModel.js get-model              Get a Model
  automlNaturalLanguageModel.js list-model-evaluations  List model evaluations
  automlNaturalLanguageModel.js get-model-evaluation    Get model evaluation
  automlNaturalLanguageModel.js display-evaluation     Display evaluation
  automlNaturalLanguageModel.js delete-model           Delete a Model

Options:
  --version                Show version number                                                                 [boolean]
  --computeRegion, -c      region name e.g. "us-central1"                              [string] [default: "us-central1"]
  --datasetId, -i          Id of the dataset                                                                    [string]
  --filter, -f            Name of the Dataset to search for                                      [string] [default: ""]
  --modelName, -m          Name of the model                                                   [string] [default: false]
  --modelId, -a            Id of the model                                                        [string] [default: ""]
  --modelEvaluationId, -e  Id of the model evaluation                                             [string] [default: ""]
  --operationFullId, -o    Full name of an operation                                              [string] [default: ""]
  --projectId, -z          The GCLOUD_PROJECT string, e.g. "my-gcloud-project"        [number] [default: "203278707824"]
  --trainBudget, -t        Budget for training the model                                          [string] [default: ""]
  --help                   Show help                                                                           [boolean]

Examples:
  node automlNaturalLanguageModel.js create-model -i "DatasetID" -m "myModelName" -t "2"
  node automlNaturalLanguageModel.js get-operation-status -i "datasetId" -o "OperationFullID"
  node automlNaturalLanguageModel.js list-models -f "textClassificationModelMetadata:*"
  node automlNaturalLanguageModel.js get-model -a "ModelID"
  node automlNaturalLanguageModel.js list-model-evaluations -a "ModelID"
  node automlNaturalLanguageModel.js get-model-evaluation -a "ModelId" -e "ModelEvaluationID"
  node automlNaturalLanguageModel.js display-evaluation -a "ModelId"
  node automlNaturalLanguageModel.js delete-model -a "ModelID"

For more information, see https://cloud.google.com/natural-language/docs
```

[automlNaturalLanguageModel_docs]: https://cloud.google.com/natural-language/docs/
[automlNaturalLanguageModel_code]: automl/automlNaturalLanguageModel.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/README.md

### automlNaturalLanguagePredict

View the [source code][automlNaturalLanguagePredict_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/automl/automlNaturalLanguagePredict.js,samples/README.md)

__Usage:__ `node automlNaturalLanguagePredict.js --help`

```
automlNaturalLanguagePredict.js <command>

Commands:
  automlNaturalLanguagePredict.js predict  classify the content

Options:
  --version             Show version number                                                                    [boolean]
  --computeRegion, -c   region name e.g. "us-central1"                                 [string] [default: "us-central1"]
  --filePath, -f        local text file path of the content to be classified  [string] [default: "./resources/test.txt"]
  --modelId, -i         Id of the model which will be used for text classification                              [string]
  --projectId, -z       The GCLOUD_PROJECT string, e.g. "my-gcloud-project"           [number] [default: "203278707824"]
  --scoreThreshold, -s  A value from 0.0 to 1.0.  When the model makes predictions for an image it willonly produce
                        results that have at least this confidence score threshold.  Default is .5
                                                                                               [string] [default: "0.5"]
  --help                Show help                                                                              [boolean]

Examples:
  node automlNaturalLanguagePredict.js predict -i "modelId" -f "./resources/test.txt" -s "0.5"

For more information, see https://cloud.google.com/natural-language/docs
```

[automlNaturalLanguagePredict_docs]: https://cloud.google.com/natural-language/docs/
[automlNaturalLanguagePredict_code]: automl/automlNaturalLanguagePredict.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-language&page=editor&open_in_editor=samples/README.md


