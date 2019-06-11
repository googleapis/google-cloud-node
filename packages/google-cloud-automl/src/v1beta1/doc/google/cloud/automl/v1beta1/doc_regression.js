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
 * Metrics for regression problems.
 *
 * @property {number} rootMeanSquaredError
 *   Output only. Root Mean Squared Error (RMSE).
 *
 * @property {number} meanAbsoluteError
 *   Output only. Mean Absolute Error (MAE).
 *
 * @property {number} meanAbsolutePercentageError
 *   Output only. Mean absolute percentage error. Only set if all ground truth
 *   values are are positive.
 *
 * @property {number} rSquared
 *   Output only. R squared.
 *
 * @property {number} rootMeanSquaredLogError
 *   Output only. Root mean squared log error.
 *
 * @typedef RegressionEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.RegressionEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/regression.proto}
 */
const RegressionEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};