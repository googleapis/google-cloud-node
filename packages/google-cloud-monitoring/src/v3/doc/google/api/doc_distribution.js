// Copyright 2018 Google LLC
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
 * Distribution contains summary statistics for a population of values and,
 * optionally, a histogram representing the distribution of those values across
 * a specified set of histogram buckets.
 *
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 *
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket.  The boundaries of the buckets are given either
 * explicitly or by specifying parameters for a method of computing them
 * (buckets of fixed width or buckets of exponentially increasing width).
 *
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 *
 * @property {number} count
 *   The number of values in the population. Must be non-negative.
 *
 * @property {number} mean
 *   The arithmetic mean of the values in the population. If `count` is zero
 *   then this field must be zero.
 *
 * @property {number} sumOfSquaredDeviation
 *   The sum of squared deviations from the mean of the values in the
 *   population.  For values x_i this is:
 *
 *       Sum[i=1..n](https://cloud.google.com(x_i - mean)^2)
 *
 *   Knuth, "The Art of Computer Programming", Vol. 2, page 323, 3rd edition
 *   describes Welford's method for accumulating this sum in one pass.
 *
 *   If `count` is zero then this field must be zero.
 *
 * @property {Object} range
 *   If specified, contains the range of the population values. The field
 *   must not be present if the `count` is zero.
 *
 *   This object should have the same structure as [Range]{@link google.api.Range}
 *
 * @property {Object} bucketOptions
 *   Defines the histogram bucket boundaries.
 *
 *   This object should have the same structure as [BucketOptions]{@link google.api.BucketOptions}
 *
 * @property {number[]} bucketCounts
 *   If `bucket_options` is given, then the sum of the values in `bucket_counts`
 *   must equal the value in `count`.  If `bucket_options` is not given, no
 *   `bucket_counts` fields may be given.
 *
 *   Bucket counts are given in order under the numbering scheme described
 *   above (the underflow bucket has number 0; the finite buckets, if any,
 *   have numbers 1 through N-2; the overflow bucket has number N-1).
 *
 *   The size of `bucket_counts` must be no greater than N as defined in
 *   `bucket_options`.
 *
 *   Any suffix of trailing zero bucket_count fields may be omitted.
 *
 * @typedef Distribution
 * @memberof google.api
 * @see [google.api.Distribution definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
 */
var Distribution = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The range of the population values.
   *
   * @property {number} min
   *   The minimum of the population values.
   *
   * @property {number} max
   *   The maximum of the population values.
   *
   * @typedef Range
   * @memberof google.api
   * @see [google.api.Distribution.Range definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
   */
  Range: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A Distribution may optionally contain a histogram of the values in the
   * population.  The histogram is given in `bucket_counts` as counts of values
   * that fall into one of a sequence of non-overlapping buckets.  The sequence
   * of buckets is described by `bucket_options`.
   *
   * A bucket specifies an inclusive lower bound and exclusive upper bound for
   * the values that are counted for that bucket.  The upper bound of a bucket
   * is strictly greater than the lower bound.
   *
   * The sequence of N buckets for a Distribution consists of an underflow
   * bucket (number 0), zero or more finite buckets (number 1 through N - 2) and
   * an overflow bucket (number N - 1).  The buckets are contiguous:  the lower
   * bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1.
   * The buckets span the whole range of finite values: lower bound of the
   * underflow bucket is -infinity and the upper bound of the overflow bucket is
   * +infinity.  The finite buckets are so-called because both bounds are
   * finite.
   *
   * `BucketOptions` describes bucket boundaries in one of three ways.  Two
   * describe the boundaries by giving parameters for a formula to generate
   * boundaries and one gives the bucket boundaries explicitly.
   *
   * If `bucket_boundaries` is not given, then no `bucket_counts` may be given.
   *
   * @property {Object} linearBuckets
   *   The linear bucket.
   *
   *   This object should have the same structure as [Linear]{@link google.api.Linear}
   *
   * @property {Object} exponentialBuckets
   *   The exponential buckets.
   *
   *   This object should have the same structure as [Exponential]{@link google.api.Exponential}
   *
   * @property {Object} explicitBuckets
   *   The explicit buckets.
   *
   *   This object should have the same structure as [Explicit]{@link google.api.Explicit}
   *
   * @typedef BucketOptions
   * @memberof google.api
   * @see [google.api.Distribution.BucketOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
   */
  BucketOptions: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Specify a sequence of buckets that all have the same width (except
     * overflow and underflow).  Each bucket represents a constant absolute
     * uncertainty on the specific value in the bucket.
     *
     * Defines `num_finite_buckets + 2` (= N) buckets with these boundaries for
     * bucket `i`:
     *
     *    Upper bound (0 <= i < N-1):     offset + (width * i).
     *    Lower bound (1 <= i < N):       offset + (width * (i - 1)).
     *
     * @property {number} numFiniteBuckets
     *   Must be greater than 0.
     *
     * @property {number} width
     *   Must be greater than 0.
     *
     * @property {number} offset
     *   Lower bound of the first bucket.
     *
     * @typedef Linear
     * @memberof google.api
     * @see [google.api.Distribution.BucketOptions.Linear definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
     */
    Linear: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Specify a sequence of buckets that have a width that is proportional to
     * the value of the lower bound.  Each bucket represents a constant relative
     * uncertainty on a specific value in the bucket.
     *
     * Defines `num_finite_buckets + 2` (= N) buckets with these boundaries for
     * bucket i:
     *
     *    Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
     *    Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
     *
     * @property {number} numFiniteBuckets
     *   Must be greater than 0.
     *
     * @property {number} growthFactor
     *   Must be greater than 1.
     *
     * @property {number} scale
     *   Must be greater than 0.
     *
     * @typedef Exponential
     * @memberof google.api
     * @see [google.api.Distribution.BucketOptions.Exponential definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
     */
    Exponential: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * A set of buckets with arbitrary widths.
     *
     * Defines `size(bounds) + 1` (= N) buckets with these boundaries for
     * bucket i:
     *
     *    Upper bound (0 <= i < N-1):     bounds[i]
     *    Lower bound (1 <= i < N);       bounds[i - 1]
     *
     * There must be at least one element in `bounds`.  If `bounds` has only one
     * element, there are no finite buckets, and that single element is the
     * common boundary of the overflow and underflow buckets.
     *
     * @property {number[]} bounds
     *   The values must be monotonically increasing.
     *
     * @typedef Explicit
     * @memberof google.api
     * @see [google.api.Distribution.BucketOptions.Explicit definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
     */
    Explicit: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  }
};