// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Dataset is the resource to hold your data. You can request multiple labeling
 * tasks for a dataset while each one will generate an AnnotatedDataset.
 *
 * @property {string} name
 *   Output only. Dataset resource name, format is:
 *   projects/{project_id}/datasets/{dataset_id}
 *
 * @property {string} displayName
 *   Required. The display name of the dataset. Maximum of 64 characters.
 *
 * @property {string} description
 *   Optional. User-provided description of the annotation specification set.
 *   The description can be up to 10000 characters long.
 *
 * @property {Object} createTime
 *   Output only. Time the dataset is created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object[]} inputConfigs
 *   Output only. This is populated with the original input configs
 *   where ImportData is called. It is available only after the clients
 *   import data to this dataset.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.datalabeling.v1beta1.InputConfig}
 *
 * @property {string[]} blockingResources
 *   Output only. The names of any related resources that are blocking changes
 *   to the dataset.
 *
 * @property {number} dataItemCount
 *   Output only. The number of data items in the dataset.
 *
 * @typedef Dataset
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Dataset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const Dataset = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration of input data, including data type, location, etc.
 *
 * @property {Object} textMetadata
 *   Required for text import, as language code must be specified.
 *
 *   This object should have the same structure as [TextMetadata]{@link google.cloud.datalabeling.v1beta1.TextMetadata}
 *
 * @property {Object} gcsSource
 *   Source located in Cloud Storage.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.datalabeling.v1beta1.GcsSource}
 *
 * @property {Object} bigquerySource
 *   This object should have the same structure as [BigQuerySource]{@link google.cloud.datalabeling.v1beta1.BigQuerySource}
 *
 * @property {number} dataType
 *   Required. Data type must be specifed when user tries to import data.
 *
 *   The number should be among the values of [DataType]{@link google.cloud.datalabeling.v1beta1.DataType}
 *
 * @property {number} annotationType
 *   Optional. If input contains annotation, user needs to specify the
 *   type and metadata of the annotation when creating it as an annotated
 *   dataset.
 *
 *   The number should be among the values of [AnnotationType]{@link google.cloud.datalabeling.v1beta1.AnnotationType}
 *
 * @property {Object} classificationMetadata
 *   Optional. Metadata about annotations in the input. Each annotation type may
 *   have different metadata.
 *   Metadata for classification problem.
 *
 *   This object should have the same structure as [ClassificationMetadata]{@link google.cloud.datalabeling.v1beta1.ClassificationMetadata}
 *
 * @typedef InputConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata for the text.
 *
 * @property {string} languageCode
 *   The language of this text, as a
 *   [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt).
 *   Default value is en-US.
 *
 * @typedef TextMetadata
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.TextMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const TextMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata for classification annotations.
 *
 * @property {boolean} isMultiLabel
 *   Whether the classification task is multi-label or not.
 *
 * @typedef ClassificationMetadata
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.ClassificationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const ClassificationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Source of the Cloud Storage file to be imported.
 *
 * @property {string} inputUri
 *   Required. The input URI of source file. This must be a Cloud Storage path
 *   (`gs://...`).
 *
 * @property {string} mimeType
 *   Required. The format of the source file. Only "text/csv" is supported.
 *
 * @typedef GcsSource
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The BigQuery location for the input content.
 *
 * @property {string} inputUri
 *   Required. BigQuery URI to a table, up to 2000 characters long.
 *   Accepted forms: BigQuery gs path e.g. bq://projectId.bqDatasetId.bqTableId
 *
 * @typedef BigQuerySource
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.BigQuerySource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const BigQuerySource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The configuration of output data.
 *
 * @property {Object} gcsDestination
 *   Output to a file in Cloud Storage. Should be used for labeling output
 *   other thanimage segmentation.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.datalabeling.v1beta1.GcsDestination}
 *
 * @property {Object} gcsFolderDestination
 *   Output to a folder in Cloud Storage. Should be used for image
 *   segmentation labeling output.
 *
 *   This object should have the same structure as [GcsFolderDestination]{@link google.cloud.datalabeling.v1beta1.GcsFolderDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Export destination of the data.Only gcs path is allowed in
 * output_uri.
 *
 * @property {string} outputUri
 *   Required. The output uri of destination file.
 *
 * @property {string} mimeType
 *   Required. The format of the gcs destination. Only "text/csv" and
 *   "application/json"
 *   are supported.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Export folder destination of the data.
 *
 * @property {string} outputFolderUri
 *   Required. Cloud Storage directory to export data to.
 *
 * @typedef GcsFolderDestination
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.GcsFolderDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const GcsFolderDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * DataItem is a piece of data, without annotation. For example, an image.
 *
 * @property {Object} imagePayload
 *   The image payload, a container of the image bytes/uri.
 *
 *   This object should have the same structure as [ImagePayload]{@link google.cloud.datalabeling.v1beta1.ImagePayload}
 *
 * @property {Object} textPayload
 *   The text payload, a container of text content.
 *
 *   This object should have the same structure as [TextPayload]{@link google.cloud.datalabeling.v1beta1.TextPayload}
 *
 * @property {Object} videoPayload
 *   The video payload, a container of the video uri.
 *
 *   This object should have the same structure as [VideoPayload]{@link google.cloud.datalabeling.v1beta1.VideoPayload}
 *
 * @property {string} name
 *   Output only. Name of the data item, in format of:
 *   projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}
 *
 * @typedef DataItem
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.DataItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const DataItem = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * AnnotatedDataset is a set holding annotations for data in a Dataset. Each
 * labeling task will generate an AnnotatedDataset under the Dataset that the
 * task is requested for.
 *
 * @property {string} name
 *   Output only. AnnotatedDataset resource name in format of:
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}
 *
 * @property {string} displayName
 *   Output only. The display name of the AnnotatedDataset. It is specified in
 *   HumanAnnotationConfig when user starts a labeling task. Maximum of 64
 *   characters.
 *
 * @property {string} description
 *   Output only. The description of the AnnotatedDataset. It is specified in
 *   HumanAnnotationConfig when user starts a labeling task. Maximum of 10000
 *   characters.
 *
 * @property {number} annotationSource
 *   Output only. Source of the annotation.
 *
 *   The number should be among the values of [AnnotationSource]{@link google.cloud.datalabeling.v1beta1.AnnotationSource}
 *
 * @property {number} annotationType
 *   Output only. Type of the annotation. It is specified when starting labeling
 *   task.
 *
 *   The number should be among the values of [AnnotationType]{@link google.cloud.datalabeling.v1beta1.AnnotationType}
 *
 * @property {number} exampleCount
 *   Output only. Number of examples in the annotated dataset.
 *
 * @property {number} completedExampleCount
 *   Output only. Number of examples that have annotation in the annotated
 *   dataset.
 *
 * @property {Object} labelStats
 *   Output only. Per label statistics.
 *
 *   This object should have the same structure as [LabelStats]{@link google.cloud.datalabeling.v1beta1.LabelStats}
 *
 * @property {Object} createTime
 *   Output only. Time the AnnotatedDataset was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} metadata
 *   Output only. Additional information about AnnotatedDataset.
 *
 *   This object should have the same structure as [AnnotatedDatasetMetadata]{@link google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata}
 *
 * @property {string[]} blockingResources
 *   Output only. The names of any related resources that are blocking changes
 *   to the annotated dataset.
 *
 * @typedef AnnotatedDataset
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotatedDataset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const AnnotatedDataset = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Statistics about annotation specs.
 *
 * @property {Object.<string, number>} exampleCount
 *   Map of each annotation spec's example count. Key is the annotation spec
 *   name and value is the number of examples for that annotation spec.
 *   If the annotated dataset does not have annotation spec, the map will return
 *   a pair where the key is empty string and value is the total number of
 *   annotations.
 *
 * @typedef LabelStats
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.LabelStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const LabelStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata on AnnotatedDataset.
 *
 * @property {Object} imageClassificationConfig
 *   Configuration for image classification task.
 *
 *   This object should have the same structure as [ImageClassificationConfig]{@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig}
 *
 * @property {Object} boundingPolyConfig
 *   Configuration for image bounding box and bounding poly task.
 *
 *   This object should have the same structure as [BoundingPolyConfig]{@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig}
 *
 * @property {Object} polylineConfig
 *   Configuration for image polyline task.
 *
 *   This object should have the same structure as [PolylineConfig]{@link google.cloud.datalabeling.v1beta1.PolylineConfig}
 *
 * @property {Object} segmentationConfig
 *   Configuration for image segmentation task.
 *
 *   This object should have the same structure as [SegmentationConfig]{@link google.cloud.datalabeling.v1beta1.SegmentationConfig}
 *
 * @property {Object} videoClassificationConfig
 *   Configuration for video classification task.
 *
 *   This object should have the same structure as [VideoClassificationConfig]{@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig}
 *
 * @property {Object} objectDetectionConfig
 *   Configuration for video object detection task.
 *
 *   This object should have the same structure as [ObjectDetectionConfig]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig}
 *
 * @property {Object} objectTrackingConfig
 *   Configuration for video object tracking task.
 *
 *   This object should have the same structure as [ObjectTrackingConfig]{@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig}
 *
 * @property {Object} eventConfig
 *   Configuration for video event labeling task.
 *
 *   This object should have the same structure as [EventConfig]{@link google.cloud.datalabeling.v1beta1.EventConfig}
 *
 * @property {Object} textClassificationConfig
 *   Configuration for text classification task.
 *
 *   This object should have the same structure as [TextClassificationConfig]{@link google.cloud.datalabeling.v1beta1.TextClassificationConfig}
 *
 * @property {Object} textEntityExtractionConfig
 *   Configuration for text entity extraction task.
 *
 *   This object should have the same structure as [TextEntityExtractionConfig]{@link google.cloud.datalabeling.v1beta1.TextEntityExtractionConfig}
 *
 * @property {Object} humanAnnotationConfig
 *   HumanAnnotationConfig used when requesting the human labeling task for this
 *   AnnotatedDataset.
 *
 *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 *
 * @typedef AnnotatedDatasetMetadata
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotatedDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const AnnotatedDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An Example is a piece of data and its annotation. For example, an image with
 * label "house".
 *
 * @property {Object} imagePayload
 *   The image payload, a container of the image bytes/uri.
 *
 *   This object should have the same structure as [ImagePayload]{@link google.cloud.datalabeling.v1beta1.ImagePayload}
 *
 * @property {Object} textPayload
 *   The text payload, a container of the text content.
 *
 *   This object should have the same structure as [TextPayload]{@link google.cloud.datalabeling.v1beta1.TextPayload}
 *
 * @property {Object} videoPayload
 *   The video payload, a container of the video uri.
 *
 *   This object should have the same structure as [VideoPayload]{@link google.cloud.datalabeling.v1beta1.VideoPayload}
 *
 * @property {string} name
 *   Output only. Name of the example, in format of:
 *   projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
 *   {annotated_dataset_id}/examples/{example_id}
 *
 * @property {Object[]} annotations
 *   Output only. Annotations for the piece of data in Example.
 *   One piece of data can have multiple annotations.
 *
 *   This object should have the same structure as [Annotation]{@link google.cloud.datalabeling.v1beta1.Annotation}
 *
 * @typedef Example
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Example definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/dataset.proto}
 */
const Example = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @enum {number}
 * @memberof google.cloud.datalabeling.v1beta1
 */
const DataType = {
  DATA_TYPE_UNSPECIFIED: 0,
  IMAGE: 1,
  VIDEO: 2,
  TEXT: 4,
  GENERAL_DATA: 6
};