<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Cloud Translation API: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Cloud Translation API](https://cloud.google.com/translate/docs), can dynamically translate text between thousands of language pairs. The Cloud Translation API lets websites and programs integrate with the translation service programmatically. The Cloud Translation API is part of the larger Cloud Machine Learning API family.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Translate](#translate)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Translate

View the [source code][translate_0_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/translate.js,samples/README.md)

__Usage:__ `node translate.js --help`

```
translate.js <command>

Commands:
  translate.js detect <text..>                                 Detects the language of one or more strings.
  translate.js list [target]                                   Lists available translation languages. To language names
                                                               in a language other than English, specify a target
                                                               language.
  translate.js translate <toLang> <text..>                     Translates one or more strings into the target language.
  translate.js translate-with-model <toLang> <model> <text..>  Translates one or more strings into the target language
                                                               using the specified model.

Options:
  --version  Show version number                                                                               [boolean]
  --help     Show help                                                                                         [boolean]

Examples:
  node translate.js detect "Hello world!"                       Detects the language of a string.
  node translate.js detect "Hello world!" "Goodbye"             Detects the languages of multiple strings.
  node translate.js list                                        Lists available translation languages with names in
                                                                English.
  node translate.js list es                                     Lists available translation languages with names in
                                                                Spanish.
  node translate.js translate ru "Good morning!"                Translates a string into Russian.
  node translate.js translate ru "Good morning!" "Good night!"  Translates multiple strings into Russian.
  node translate.js translate-with-model ru nmt "Good           Translates multiple strings into Russian using the
  morning!" "Good night!"                                       Premium model.

For more information, see https://cloud.google.com/translate/docs
```

[translate_0_docs]: https://cloud.google.com/translate/docs
[translate_0_code]: translate.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/README.md

### automlTranslationDataset

View the [source code][automlTranslationDataset_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/automl/automlTranslationDataset.js,samples/README.md)

__Usage:__ `node automlTranslationDataset.js --help`

```
automlTranslationDataset.js <command>

Commands:
  automlTranslationDataset.js create-dataset  creates a new Dataset
  automlTranslationDataset.js list-datasets   list all Datasets
  automlTranslationDataset.js get-dataset     Get a Dataset
  automlTranslationDataset.js delete-dataset  Delete a dataset
  automlTranslationDataset.js import-data     Import labeled items into dataset

Options:
  --version            Show version number                                                                     [boolean]
  --computeRegion, -c  region name e.g. "us-central1"                                  [string] [default: "us-central1"]
  --datasetName, -n    Name of the Dataset                                             [string] [default: "testDataSet"]
  --datasetId, -i      Id of the dataset                                                                        [string]
  --filter, -f        Name of the Dataset to search for              [string] [default: "translationDatasetMetadata:*"]
  --multilabel, -m     Type of the classification problem, False - MULTICLASS, True - MULTILABEL.
                                                                                               [string] [default: false]
  --outputUri, -o      URI (or local path) to export dataset                                                    [string]
  --path, -p           URI or local path to input .csv, or array of .csv paths
                                                            [string] [default: "gs://nodejs-docs-samples-vcm/en-ja.csv"]
  --projectId, -z      The GCLOUD_PROJECT string, e.g. "my-gcloud-project"     [number] [default: "nodejs-docs-samples"]
  --source, -s         The source language to be translated from                                                [string]
  --target, -t         The target language to be translated to                                                  [string]
  --help               Show help                                                                               [boolean]

Examples:
  node automlTranslationDataset.js create-dataset -n "newDataSet" -s "en" -t "ja"
  node automlTranslationDataset.js list-datasets -f "translationDatasetMetadata:*"
  node automlTranslationDataset.js get-dataset -i "DATASETID"
  node automlTranslationDataset.js delete-dataset -i "DATASETID"
  node automlTranslationDataset.js import-data -i "dataSetId" -p "gs://myproject/mytraindata.csv"

For more information, see https://cloud.google.com/translate/docs
```

[automlTranslationDataset_docs]: https://cloud.google.com/translate/docs
[automlTranslationDataset_code]: automl/automlTranslationDataset.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/README.md

### automlTranslationModel

View the [source code][automlTranslationModel_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/automl/automlTranslationModel.js,samples/README.md)

__Usage:__ `node translate.js --help`

```
automlTranslationModel.js <command>

Commands:
  automlTranslationModel.js create-model           creates a new Model
  automlTranslationModel.js get-operation-status    Gets status of current operation
  automlTranslationModel.js list-models            list all Models
  automlTranslationModel.js get-model              Get a Model
  automlTranslationModel.js list-model-evaluations  List model evaluations
  automlTranslationModel.js get-model-evaluation    Get model evaluation
  automlTranslationModel.js delete-model           Delete a Model

Options:
  --version                Show version number                                                                 [boolean]
  --computeRegion, -c      region name e.g. "us-central1"                              [string] [default: "us-central1"]
  --datasetId, -i          Id of the dataset                                                                    [string]
  --filter, -f            Name of the Dataset to search for                                      [string] [default: ""]
  --modelName, -m          Name of the model                                                   [string] [default: false]
  --modelId, -a            Id of the model                                                        [string] [default: ""]
  --modelEvaluationId, -e  Id of the model evaluation                                             [string] [default: ""]
  --operationFullId, -o    Full name of an operation                                              [string] [default: ""]
  --projectId, -z          The GCLOUD_PROJECT string, e.g. "my-gcloud-project" [number] [default: "nodejs-docs-samples"]
  --help                   Show help                                                                           [boolean]

Examples:
  node automlTranslationModel.js create-model -i "DatasetID" -m "myModelName"
  node automlTranslationModel.js get-operation-status -i "datasetId" -o "OperationFullID"
  node automlTranslationModel.js list-models -f "translationModelMetadata:*"
  node automlTranslationModel.js get-model -a "ModelID"
  node automlTranslationModel.js list-model-evaluations -a "ModelID"
  node automlTranslationModel.js get-model-evaluation -a "ModelId" -e "ModelEvaluationID"
  node automlTranslationModel.js delete-model -a "ModelID"

For more information, see https://cloud.google.com/translate/docs
```

[automlTranslationModel_docs]: https://cloud.google.com/translate/docs
[automlTranslationModel_code]: automl/automlTranslationModel.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/README.md

### automlTranslationPredict

View the [source code][automlTranslationPredict_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/automl/automlTranslationPredict.js,samples/README.md)

__Usage:__ `node translate.js --help`

```
automlTranslationPredict.js <command>

Commands:
  automlTranslationPredict.js predict  classify the content

Options:
  --version                       Show version number                                                          [boolean]
  --computeRegion, -c             region name e.g. "us-central1"                       [string] [default: "us-central1"]
  --filePath, -f                  local text file path of the content to be classified
                                                                         [string] [default: "./resources/testInput.txt"]
  --modelId, -i                   Id of the model which will be used for text classification                    [string]
  --projectId, -z                 The GCLOUD_PROJECT string, e.g. "my-gcloud-project" [number] [default: "203278707824"]
  --translationAllowFallback, -t  Use true if AutoML will fallback to use a Google translation model fortranslation
                                  requests if the specified AutoML translation model cannotserve the request. Use false
                                  to not use Google translation model.                       [string] [default: "False"]
  --help                          Show help                                                                    [boolean]

Examples:
  node automlTranslationPredict.js predict -i "modelId" -f "./resources/testInput.txt" -t "False"

For more information, see https://cloud.google.com/translate/docs
```

[automlTranslationPredict_docs]: https://cloud.google.com/translate/docs
[automlTranslationPredict_code]: automl/automlTranslationPredict.js

[shell_img]: //gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-translate&page=editor&open_in_editor=samples/README.md

