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
 * Parameters for a product search request.
 *
 * @property {string} catalogName
 *   The resource name of the catalog to search.
 *
 *   Format is: `productSearch/catalogs/CATALOG_NAME`.
 *
 * @property {number} category
 *   The category to search in.
 *   Optional. It is inferred by the system if it is not specified.
 *   [Deprecated] Use `product_category`.
 *
 *   The number should be among the values of [ProductSearchCategory]{@link google.cloud.vision.v1p3beta1.ProductSearchCategory}
 *
 * @property {string} productCategory
 *   The product category to search in.
 *   Optional. It is inferred by the system if it is not specified.
 *   Supported values are `bag`, `shoe`, `sunglasses`, `dress`, `outerwear`,
 *   `skirt`, `top`, `shorts`, and `pants`.
 *
 * @property {Object} normalizedBoundingPoly
 *   The bounding polygon around the area of interest in the image.
 *   Optional. If it is not specified, system discretion will be applied.
 *   [Deprecated] Use `bounding_poly`.
 *
 *   This object should have the same structure as [NormalizedBoundingPoly]{@link google.cloud.vision.v1p3beta1.NormalizedBoundingPoly}
 *
 * @property {Object} boundingPoly
 *   The bounding polygon around the area of interest in the image.
 *   Optional. If it is not specified, system discretion will be applied.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {number} view
 *   Specifies the verbosity of the  product search results.
 *   Optional. Defaults to `BASIC`.
 *
 *   The number should be among the values of [ProductSearchResultsView]{@link google.cloud.vision.v1p3beta1.ProductSearchResultsView}
 *
 * @property {string} productSet
 *   The resource name of a ProductSet to be searched for similar images.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
 *
 * @property {string[]} productCategories
 *   The list of product categories to search in. Currently, we only consider
 *   the first category, and either "homegoods" or "apparel" should be
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
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ProductSearchParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/product_search.proto}
 */
const ProductSearchParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Results for a product search request.
 *
 * @property {number} category
 *   Product category.
 *   [Deprecated] Use `product_category`.
 *
 *   The number should be among the values of [ProductSearchCategory]{@link google.cloud.vision.v1p3beta1.ProductSearchCategory}
 *
 * @property {string} productCategory
 *   Product category.
 *   Supported values are `bag` and `shoe`.
 *   [Deprecated] `product_category` is provided in each Product.
 *
 * @property {Object} indexTime
 *   Timestamp of the index which provided these results. Changes made after
 *   this time are not reflected in the current results.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object[]} products
 *   List of detected products.
 *
 *   This object should have the same structure as [ProductInfo]{@link google.cloud.vision.v1p3beta1.ProductInfo}
 *
 * @property {Object[]} results
 *   List of results, one for each product match.
 *
 *   This object should have the same structure as [Result]{@link google.cloud.vision.v1p3beta1.Result}
 *
 * @typedef ProductSearchResults
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ProductSearchResults definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/product_search.proto}
 */
const ProductSearchResults = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Information about a product.
   *
   * @property {string} productId
   *   Product ID.
   *
   * @property {string} imageUri
   *   The URI of the image which matched the query image.
   *
   *   This field is returned only if `view` is set to `FULL` in
   *   the request.
   *
   * @property {number} score
   *   A confidence level on the match, ranging from 0 (no confidence) to
   *   1 (full confidence).
   *
   *   This field is returned only if `view` is set to `FULL` in
   *   the request.
   *
   * @typedef ProductInfo
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.ProductSearchResults.ProductInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/product_search.proto}
   */
  ProductInfo: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Information about a product.
   *
   * @property {Object} product
   *   The Product.
   *
   *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p3beta1.Product}
   *
   * @property {number} score
   *   A confidence level on the match, ranging from 0 (no confidence) to
   *   1 (full confidence).
   *
   *   This field is returned only if `view` is set to `FULL` in
   *   the request.
   *
   * @property {string} image
   *   The resource name of the image from the product that is the closest match
   *   to the query.
   *
   * @typedef Result
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.ProductSearchResults.Result definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/product_search.proto}
   */
  Result: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Supported product search categories.
 *
 * @enum {number}
 * @memberof google.cloud.vision.v1p3beta1
 */
const ProductSearchCategory = {

  /**
   * Default value used when a category is not specified.
   */
  PRODUCT_SEARCH_CATEGORY_UNSPECIFIED: 0,

  /**
   * Shoes category.
   */
  SHOES: 1,

  /**
   * Bags category.
   */
  BAGS: 2
};

/**
 * Specifies the fields to include in product search results.
 *
 * @enum {number}
 * @memberof google.cloud.vision.v1p3beta1
 */
const ProductSearchResultsView = {

  /**
   * Product search results contain only `product_category` and `product_id`.
   * Default value.
   */
  BASIC: 0,

  /**
   * Product search results contain `product_category`, `product_id`,
   * `image_uri`, and `score`.
   */
  FULL: 1
};