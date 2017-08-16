/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

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
 * @external "google.api.Distribution"
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
 *   This object should have the same structure as [google.api.Distribution.Range]{@link external:"google.api.Distribution.Range"}
 *
 * @property {Object} bucketOptions
 *   Defines the histogram bucket boundaries.
 *
 *   This object should have the same structure as [google.api.Distribution.BucketOptions]{@link external:"google.api.Distribution.BucketOptions"}
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
 * @see [google.api.Distribution definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/distribution.proto}
 */