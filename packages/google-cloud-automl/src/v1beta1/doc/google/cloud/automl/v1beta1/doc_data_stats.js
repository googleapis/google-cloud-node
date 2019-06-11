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
 * The data statistics of a series of values that share the same DataType.
 *
 * @property {Object} float64Stats
 *   The statistics for FLOAT64 DataType.
 *
 *   This object should have the same structure as [Float64Stats]{@link google.cloud.automl.v1beta1.Float64Stats}
 *
 * @property {Object} stringStats
 *   The statistics for STRING DataType.
 *
 *   This object should have the same structure as [StringStats]{@link google.cloud.automl.v1beta1.StringStats}
 *
 * @property {Object} timestampStats
 *   The statistics for TIMESTAMP DataType.
 *
 *   This object should have the same structure as [TimestampStats]{@link google.cloud.automl.v1beta1.TimestampStats}
 *
 * @property {Object} arrayStats
 *   The statistics for ARRAY DataType.
 *
 *   This object should have the same structure as [ArrayStats]{@link google.cloud.automl.v1beta1.ArrayStats}
 *
 * @property {Object} structStats
 *   The statistics for STRUCT DataType.
 *
 *   This object should have the same structure as [StructStats]{@link google.cloud.automl.v1beta1.StructStats}
 *
 * @property {Object} categoryStats
 *   The statistics for CATEGORY DataType.
 *
 *   This object should have the same structure as [CategoryStats]{@link google.cloud.automl.v1beta1.CategoryStats}
 *
 * @property {number} distinctValueCount
 *   The number of distinct values.
 *
 * @property {number} nullValueCount
 *   The number of values that are null.
 *
 * @property {number} validValueCount
 *   The number of values that are valid.
 *
 * @typedef DataStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.DataStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const DataStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The data statistics of a series of FLOAT64 values.
 *
 * @property {number} mean
 *   The mean of the series.
 *
 * @property {number} standardDeviation
 *   The standard deviation of the series.
 *
 * @property {number[]} quantiles
 *   Ordered from 0 to k k-quantile values of the data series of n values.
 *   The value at index i is, approximately, the i*n/k-th smallest value in the
 *   series; for i = 0 and i = k these are, respectively, the min and max
 *   values.
 *
 * @property {Object[]} histogramBuckets
 *   Histogram buckets of the data series. Sorted by the min value of the
 *   bucket, ascendingly, and the number of the buckets is dynamically
 *   generated. The buckets are non-overlapping and completely cover whole
 *   FLOAT64 range with min of first bucket being `"-Infinity"`, and max of
 *   the last one being `"Infinity"`.
 *
 *   This object should have the same structure as [HistogramBucket]{@link google.cloud.automl.v1beta1.HistogramBucket}
 *
 * @typedef Float64Stats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Float64Stats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const Float64Stats = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A bucket of a histogram.
   *
   * @property {number} min
   *   The minimum value of the bucket, inclusive.
   *
   * @property {number} max
   *   The maximum value of the bucket, exclusive unless max = `"Infinity"`, in
   *   which case it's inclusive.
   *
   * @property {number} count
   *   The number of data values that are in the bucket, i.e. are between
   *   min and max values.
   *
   * @typedef HistogramBucket
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.Float64Stats.HistogramBucket definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
   */
  HistogramBucket: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The data statistics of a series of STRING values.
 *
 * @property {Object[]} topUnigramStats
 *   The statistics of the top 20 unigrams, ordered by
 *   count.
 *
 *   This object should have the same structure as [UnigramStats]{@link google.cloud.automl.v1beta1.UnigramStats}
 *
 * @typedef StringStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.StringStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const StringStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The statistics of a unigram.
   *
   * @property {string} value
   *   The unigram.
   *
   * @property {number} count
   *   The number of occurrences of this unigram in the series.
   *
   * @typedef UnigramStats
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.StringStats.UnigramStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
   */
  UnigramStats: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The data statistics of a series of TIMESTAMP values.
 *
 * @property {Object.<string, Object>} granularStats
 *   The string key is the pre-defined granularity. Currently supported:
 *   hour_of_day, day_of_week, month_of_year.
 *   Granularities finer that the granularity of timestamp data are not
 *   populated (e.g. if timestamps are at day granularity, then hour_of_day
 *   is not populated).
 *
 * @typedef TimestampStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TimestampStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const TimestampStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Stats split by a defined in context granularity.
   *
   * @property {Object.<number, number>} buckets
   *   A map from granularity key to example count for that key.
   *   E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).
   *
   * @typedef GranularStats
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.TimestampStats.GranularStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
   */
  GranularStats: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The data statistics of a series of ARRAY values.
 *
 * @property {Object} memberStats
 *   Stats of all the values of all arrays, as if they were a single long
 *   series of data. The type depends on the element type of the array.
 *
 *   This object should have the same structure as [DataStats]{@link google.cloud.automl.v1beta1.DataStats}
 *
 * @typedef ArrayStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ArrayStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const ArrayStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The data statistics of a series of STRUCT values.
 *
 * @property {Object.<string, Object>} fieldStats
 *   Map from a field name of the struct to data stats aggregated over series
 *   of all data in that field across all the structs.
 *
 * @typedef StructStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.StructStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const StructStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The data statistics of a series of CATEGORY values.
 *
 * @property {Object[]} topCategoryStats
 *   The statistics of the top 20 CATEGORY values, ordered by
 *
 *   count.
 *
 *   This object should have the same structure as [SingleCategoryStats]{@link google.cloud.automl.v1beta1.SingleCategoryStats}
 *
 * @typedef CategoryStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.CategoryStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const CategoryStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The statistics of a single CATEGORY value.
   *
   * @property {string} value
   *   The CATEGORY value.
   *
   * @property {number} count
   *   The number of occurrences of this value in the series.
   *
   * @typedef SingleCategoryStats
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.CategoryStats.SingleCategoryStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
   */
  SingleCategoryStats: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * A correlation statistics between two series of DataType values. The series
 * may have differing DataType-s, but within a single series the DataType must
 * be the same.
 *
 * @property {number} cramersV
 *   The correlation value using the Cramer's V measure.
 *
 * @typedef CorrelationStats
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.CorrelationStats definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_stats.proto}
 */
const CorrelationStats = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};