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
 * Request message for AutoMl.CreateDataset.
 *
 * @property {string} parent
 *   The resource name of the project to create the dataset for.
 *
 * @property {Object} dataset
 *   The dataset to create.
 *
 *   This object should have the same structure as [Dataset]{@link google.cloud.automl.v1beta1.Dataset}
 *
 * @typedef CreateDatasetRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.CreateDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const CreateDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetDataset.
 *
 * @property {string} name
 *   The resource name of the dataset to retrieve.
 *
 * @typedef GetDatasetRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ListDatasets.
 *
 * @property {string} parent
 *   The resource name of the project from which to list datasets.
 *
 * @property {string} filter
 *   An expression for filtering the results of the request.
 *
 *     * `dataset_metadata` - for existence of the case (e.g.
 *               image_classification_dataset_metadata:*). Some examples of using the filter are:
 *
 *     * `translation_dataset_metadata:*` --> The dataset has
 *                                            translation_dataset_metadata.
 *
 * @property {number} pageSize
 *   Requested page size. Server may return fewer results than requested.
 *   If unspecified, server will pick a default size.
 *
 * @property {string} pageToken
 *   A token identifying a page of results for the server to return
 *   Typically obtained via
 *   ListDatasetsResponse.next_page_token of the previous
 *   AutoMl.ListDatasets call.
 *
 * @typedef ListDatasetsRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListDatasetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListDatasetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for AutoMl.ListDatasets.
 *
 * @property {Object[]} datasets
 *   The datasets read.
 *
 *   This object should have the same structure as [Dataset]{@link google.cloud.automl.v1beta1.Dataset}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *   Pass to ListDatasetsRequest.page_token to obtain that page.
 *
 * @typedef ListDatasetsResponse
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListDatasetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListDatasetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.UpdateDataset
 *
 * @property {Object} dataset
 *   The dataset which replaces the resource on the server.
 *
 *   This object should have the same structure as [Dataset]{@link google.cloud.automl.v1beta1.Dataset}
 *
 * @property {Object} updateMask
 *   The update mask applies to the resource. For the `FieldMask` definition,
 *   see
 *
 *   https:
 *   //developers.google.com/protocol-buffers
 *   // /docs/reference/google.protobuf#fieldmask
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateDatasetRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.UpdateDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const UpdateDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.DeleteDataset.
 *
 * @property {string} name
 *   The resource name of the dataset to delete.
 *
 * @typedef DeleteDatasetRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.DeleteDatasetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const DeleteDatasetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ImportData.
 *
 * @property {string} name
 *   Required. Dataset name. Dataset must already exist. All imported
 *   annotations and examples will be added.
 *
 * @property {Object} inputConfig
 *   Required. The desired input location and its domain specific semantics,
 *   if any.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.automl.v1beta1.InputConfig}
 *
 * @typedef ImportDataRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImportDataRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ImportDataRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ExportData.
 *
 * @property {string} name
 *   Required. The resource name of the dataset.
 *
 * @property {Object} outputConfig
 *   Required. The desired output location.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.automl.v1beta1.OutputConfig}
 *
 * @typedef ExportDataRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ExportDataRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ExportDataRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetAnnotationSpec.
 *
 * @property {string} name
 *   The resource name of the annotation spec to retrieve.
 *
 * @typedef GetAnnotationSpecRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetAnnotationSpecRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetAnnotationSpecRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetTableSpec.
 *
 * @property {string} name
 *   The resource name of the table spec to retrieve.
 *
 * @property {Object} fieldMask
 *   Mask specifying which fields to read.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef GetTableSpecRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetTableSpecRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetTableSpecRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ListTableSpecs.
 *
 * @property {string} parent
 *   The resource name of the dataset to list table specs from.
 *
 * @property {Object} fieldMask
 *   Mask specifying which fields to read.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {string} filter
 *   Filter expression, see go/filtering.
 *
 * @property {number} pageSize
 *   Requested page size. The server can return fewer results than requested.
 *   If unspecified, the server will pick a default size.
 *
 * @property {string} pageToken
 *   A token identifying a page of results for the server to return.
 *   Typically obtained from the
 *   ListTableSpecsResponse.next_page_token field of the previous
 *   AutoMl.ListTableSpecs call.
 *
 * @typedef ListTableSpecsRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListTableSpecsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListTableSpecsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for AutoMl.ListTableSpecs.
 *
 * @property {Object[]} tableSpecs
 *   The table specs read.
 *
 *   This object should have the same structure as [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *   Pass to ListTableSpecsRequest.page_token to obtain that page.
 *
 * @typedef ListTableSpecsResponse
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListTableSpecsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListTableSpecsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.UpdateTableSpec
 *
 * @property {Object} tableSpec
 *   The table spec which replaces the resource on the server.
 *
 *   This object should have the same structure as [TableSpec]{@link google.cloud.automl.v1beta1.TableSpec}
 *
 * @property {Object} updateMask
 *   The update mask applies to the resource. For the `FieldMask` definition,
 *   see
 *
 *   https:
 *   //developers.google.com/protocol-buffers
 *   // /docs/reference/google.protobuf#fieldmask
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTableSpecRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.UpdateTableSpecRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const UpdateTableSpecRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetColumnSpec.
 *
 * @property {string} name
 *   The resource name of the column spec to retrieve.
 *
 * @property {Object} fieldMask
 *   Mask specifying which fields to read.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef GetColumnSpecRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetColumnSpecRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetColumnSpecRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ListColumnSpecs.
 *
 * @property {string} parent
 *   The resource name of the table spec to list column specs from.
 *
 * @property {Object} fieldMask
 *   Mask specifying which fields to read.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {string} filter
 *   Filter expression, see go/filtering.
 *
 * @property {number} pageSize
 *   Requested page size. The server can return fewer results than requested.
 *   If unspecified, the server will pick a default size.
 *
 * @property {string} pageToken
 *   A token identifying a page of results for the server to return.
 *   Typically obtained from the
 *   ListColumnSpecsResponse.next_page_token field of the previous
 *   AutoMl.ListColumnSpecs call.
 *
 * @typedef ListColumnSpecsRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListColumnSpecsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListColumnSpecsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for AutoMl.ListColumnSpecs.
 *
 * @property {Object[]} columnSpecs
 *   The column specs read.
 *
 *   This object should have the same structure as [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *   Pass to ListColumnSpecsRequest.page_token to obtain that page.
 *
 * @typedef ListColumnSpecsResponse
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListColumnSpecsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListColumnSpecsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.UpdateColumnSpec
 *
 * @property {Object} columnSpec
 *   The column spec which replaces the resource on the server.
 *
 *   This object should have the same structure as [ColumnSpec]{@link google.cloud.automl.v1beta1.ColumnSpec}
 *
 * @property {Object} updateMask
 *   The update mask applies to the resource. For the `FieldMask` definition,
 *   see
 *
 *   https:
 *   //developers.google.com/protocol-buffers
 *   // /docs/reference/google.protobuf#fieldmask
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateColumnSpecRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.UpdateColumnSpecRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const UpdateColumnSpecRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.CreateModel.
 *
 * @property {string} parent
 *   Resource name of the parent project where the model is being created.
 *
 * @property {Object} model
 *   The model to create.
 *
 *   This object should have the same structure as [Model]{@link google.cloud.automl.v1beta1.Model}
 *
 * @typedef CreateModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.CreateModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const CreateModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetModel.
 *
 * @property {string} name
 *   Resource name of the model.
 *
 * @typedef GetModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ListModels.
 *
 * @property {string} parent
 *   Resource name of the project, from which to list the models.
 *
 * @property {string} filter
 *   An expression for filtering the results of the request.
 *
 *     * `model_metadata` - for existence of the case (e.g.
 *               video_classification_model_metadata:*).
 *     * `dataset_id` - for = or !=. Some examples of using the filter are:
 *
 *     * `image_classification_model_metadata:*` --> The model has
 *                                          image_classification_model_metadata.
 *     * `dataset_id=5` --> The model was created from a dataset with ID 5.
 *
 * @property {number} pageSize
 *   Requested page size.
 *
 * @property {string} pageToken
 *   A token identifying a page of results for the server to return
 *   Typically obtained via
 *   ListModelsResponse.next_page_token of the previous
 *   AutoMl.ListModels call.
 *
 * @typedef ListModelsRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListModelsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListModelsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for AutoMl.ListModels.
 *
 * @property {Object[]} model
 *   List of models in the requested page.
 *
 *   This object should have the same structure as [Model]{@link google.cloud.automl.v1beta1.Model}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *   Pass to ListModelsRequest.page_token to obtain that page.
 *
 * @typedef ListModelsResponse
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListModelsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListModelsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.DeleteModel.
 *
 * @property {string} name
 *   Resource name of the model being deleted.
 *
 * @typedef DeleteModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.DeleteModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const DeleteModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.DeployModel.
 *
 * @property {Object} imageObjectDetectionModelDeploymentMetadata
 *   Model deployment metadata specific to Image Object Detection.
 *
 *   This object should have the same structure as [ImageObjectDetectionModelDeploymentMetadata]{@link google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata}
 *
 * @property {string} name
 *   Resource name of the model to deploy.
 *
 * @typedef DeployModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.DeployModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const DeployModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.UndeployModel.
 *
 * @property {string} name
 *   Resource name of the model to undeploy.
 *
 * @typedef UndeployModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.UndeployModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const UndeployModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ExportModel.
 * Models need to be enabled for exporting, otherwise an error code will be
 * returned.
 *
 * @property {string} name
 *   Required. The resource name of the model to export.
 *
 * @property {Object} outputConfig
 *   Required. The desired output location and configuration.
 *
 *   This object should have the same structure as [ModelExportOutputConfig]{@link google.cloud.automl.v1beta1.ModelExportOutputConfig}
 *
 * @typedef ExportModelRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ExportModelRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ExportModelRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ExportEvaluatedExamples.
 *
 * @property {string} name
 *   Required. The resource name of the model whose evaluated examples are to
 *   be exported.
 *
 * @property {Object} outputConfig
 *   Required. The desired output location and configuration.
 *
 *   This object should have the same structure as [ExportEvaluatedExamplesOutputConfig]{@link google.cloud.automl.v1beta1.ExportEvaluatedExamplesOutputConfig}
 *
 * @typedef ExportEvaluatedExamplesRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ExportEvaluatedExamplesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ExportEvaluatedExamplesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.GetModelEvaluation.
 *
 * @property {string} name
 *   Resource name for the model evaluation.
 *
 * @typedef GetModelEvaluationRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GetModelEvaluationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const GetModelEvaluationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for AutoMl.ListModelEvaluations.
 *
 * @property {string} parent
 *   Resource name of the model to list the model evaluations for.
 *   If modelId is set as "-", this will list model evaluations from across all
 *   models of the parent location.
 *
 * @property {string} filter
 *   An expression for filtering the results of the request.
 *
 *     * `annotation_spec_id` - for =, !=  or existence. See example below for
 *                            the last.
 *
 *   Some examples of using the filter are:
 *
 *     * `annotation_spec_id!=4` --> The model evaluation was done for
 *                               annotation spec with ID different than 4.
 *     * `NOT annotation_spec_id:*` --> The model evaluation was done for
 *                                  aggregate of all annotation specs.
 *
 * @property {number} pageSize
 *   Requested page size.
 *
 * @property {string} pageToken
 *   A token identifying a page of results for the server to return.
 *   Typically obtained via
 *   ListModelEvaluationsResponse.next_page_token of the previous
 *   AutoMl.ListModelEvaluations call.
 *
 * @typedef ListModelEvaluationsRequest
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListModelEvaluationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListModelEvaluationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for AutoMl.ListModelEvaluations.
 *
 * @property {Object[]} modelEvaluation
 *   List of model evaluations in the requested page.
 *
 *   This object should have the same structure as [ModelEvaluation]{@link google.cloud.automl.v1beta1.ModelEvaluation}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *   Pass to the ListModelEvaluationsRequest.page_token field of a new
 *   AutoMl.ListModelEvaluations request to obtain that page.
 *
 * @typedef ListModelEvaluationsResponse
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ListModelEvaluationsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/service.proto}
 */
const ListModelEvaluationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};