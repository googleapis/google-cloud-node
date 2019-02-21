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
 * Parameters for a product search request.
 *
 * @property {Object} boundingPoly
 *   The bounding polygon around the area of interest in the image.
 *   Optional. If it is not specified, system discretion will be applied.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p4beta1.BoundingPoly}
 *
 * @property {string} productSet
 *   The resource name of a ProductSet to be searched for similar images.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
 *
 * @property {string[]} productCategories
 *   The list of product categories to search in. Currently, we only consider
 *   the first category, and either "homegoods", "apparel", or "toys" should be
 *   specified.
 *
 * @property {string} filter
 *   The filtering expression. This can be used to restrict search results based
 *   on Product labels. We currently support an AND of OR of key-value
 *   expressions, where each expression within an OR must have the same key.
 *
 *   For example, "(color = red OR color = blue) AND brand = Google" is
 *   acceptable, but not "(color = red OR brand = Google)" or "color: red".
 *
 * @typedef ProductSearchParams
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ProductSearchParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search.proto}
 */
const ProductSearchParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results for a product search request.
 *
 * @property {Object} indexTime
 *   Timestamp of the index which provided these results. Changes made after
 *   this time are not reflected in the current results.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object[]} results
 *   List of results, one for each product match.
 *
 *   This object should have the same structure as [Result]{@link google.cloud.vision.v1p4beta1.Result}
 *
 * @property {Object[]} productGroupedResults
 *   List of results grouped by products detected in the query image. Each entry
 *   corresponds to one bounding polygon in the query image, and contains the
 *   matching products specific to that region. There may be duplicate product
 *   matches in the union of all the per-product results.
 *
 *   This object should have the same structure as [GroupedResult]{@link google.cloud.vision.v1p4beta1.GroupedResult}
 *
 * @typedef ProductSearchResults
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ProductSearchResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search.proto}
 */
const ProductSearchResults = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Information about a product.
   *
   * @property {Object} product
   *   The Product.
   *
   *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
   *
   * @property {number} score
   *   A confidence level on the match, ranging from 0 (no confidence) to
   *   1 (full confidence).
   *
   * @property {string} image
   *   The resource name of the image from the product that is the closest match
   *   to the query.
   *
   * @typedef Result
   * @memberof google.cloud.vision.v1p4beta1
   * @see [google.cloud.vision.v1p4beta1.ProductSearchResults.Result definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search.proto}
   */
  Result: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Information about the products similar to a single product in a query
   * image.
   *
   * @property {Object} boundingPoly
   *   The bounding polygon around the product detected in the query image.
   *
   *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p4beta1.BoundingPoly}
   *
   * @property {Object[]} results
   *   List of results, one for each product match.
   *
   *   This object should have the same structure as [Result]{@link google.cloud.vision.v1p4beta1.Result}
   *
   * @typedef GroupedResult
   * @memberof google.cloud.vision.v1p4beta1
   * @see [google.cloud.vision.v1p4beta1.ProductSearchResults.GroupedResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search.proto}
   */
  GroupedResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};