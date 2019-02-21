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
 * A Product contains ReferenceImages.
 *
 * @property {string} name
 *   The resource name of the product.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
 *
 *   This field is ignored when creating a product.
 *
 * @property {string} displayName
 *   The user-provided name for this Product. Must not be empty. Must be at most
 *   4096 characters long.
 *
 * @property {string} description
 *   User-provided metadata to be stored with this product. Must be at most 4096
 *   characters long.
 *
 * @property {string} productCategory
 *   The category for the product identified by the reference image. This should
 *   be either "homegoods", "apparel", or "toys".
 *
 *   This field is immutable.
 *
 * @property {Object[]} productLabels
 *   Key-value pairs that can be attached to a product. At query time,
 *   constraints can be specified based on the product_labels.
 *
 *   Note that integer values can be provided as strings, e.g. "1199". Only
 *   strings with integer values can match a range-based restriction which is
 *   to be supported soon.
 *
 *   Multiple values can be assigned to the same key. One product may have up to
 *   100 product_labels.
 *
 *   This object should have the same structure as [KeyValue]{@link google.cloud.vision.v1p4beta1.KeyValue}
 *
 * @typedef Product
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.Product definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const Product = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A product label represented as a key-value pair.
   *
   * @property {string} key
   *   The key of the label attached to the product. Cannot be empty and cannot
   *   exceed 128 bytes.
   *
   * @property {string} value
   *   The value of the label attached to the product. Cannot be empty and
   *   cannot exceed 128 bytes.
   *
   * @typedef KeyValue
   * @memberof google.cloud.vision.v1p4beta1
   * @see [google.cloud.vision.v1p4beta1.Product.KeyValue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
   */
  KeyValue: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1
 * million reference images. If the limit is exceeded, periodic indexing will
 * fail.
 *
 * @property {string} name
 *   The resource name of the ProductSet.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
 *
 *   This field is ignored when creating a ProductSet.
 *
 * @property {string} displayName
 *   The user-provided name for this ProductSet. Must not be empty. Must be at
 *   most 4096 characters long.
 *
 * @property {Object} indexTime
 *   Output only. The time at which this ProductSet was last indexed. Query
 *   results will reflect all updates before this time. If this ProductSet has
 *   never been indexed, this timestamp is the default value
 *   "1970-01-01T00:00:00Z".
 *
 *   This field is ignored when creating a ProductSet.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} indexError
 *   Output only. If there was an error with indexing the product set, the field
 *   is populated.
 *
 *   This field is ignored when creating a ProductSet.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef ProductSet
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ProductSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ProductSet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `ReferenceImage` represents a product image and its associated metadata,
 * such as bounding boxes.
 *
 * @property {string} name
 *   The resource name of the reference image.
 *
 *   Format is:
 *
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
 *
 *   This field is ignored when creating a reference image.
 *
 * @property {string} uri
 *   The Google Cloud Storage URI of the reference image.
 *
 *   The URI must start with `gs://`.
 *
 *   Required.
 *
 * @property {Object[]} boundingPolys
 *   Bounding polygons around the areas of interest in the reference image.
 *   Optional. If this field is empty, the system will try to detect regions of
 *   interest. At most 10 bounding polygons will be used.
 *
 *   The provided shape is converted into a non-rotated rectangle. Once
 *   converted, the small edge of the rectangle must be greater than or equal
 *   to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5
 *   is not).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p4beta1.BoundingPoly}
 *
 * @typedef ReferenceImage
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ReferenceImage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ReferenceImage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `CreateProduct` method.
 *
 * @property {string} parent
 *   The project in which the Product should be created.
 *
 *   Format is
 *   `projects/PROJECT_ID/locations/LOC_ID`.
 *
 * @property {Object} product
 *   The product to create.
 *
 *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
 *
 * @property {string} productId
 *   A user-supplied resource id for this Product. If set, the server will
 *   attempt to use this value as the resource id. If it is already in use, an
 *   error is returned with code ALREADY_EXISTS. Must be at most 128 characters
 *   long. It cannot contain the character `/`.
 *
 * @typedef CreateProductRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.CreateProductRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const CreateProductRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `ListProducts` method.
 *
 * @property {string} parent
 *   The project OR ProductSet from which Products should be listed.
 *
 *   Format:
 *   `projects/PROJECT_ID/locations/LOC_ID`
 *
 * @property {number} pageSize
 *   The maximum number of items to return. Default 10, maximum 100.
 *
 * @property {string} pageToken
 *   The next_page_token returned from a previous List request, if any.
 *
 * @typedef ListProductsRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for the `ListProducts` method.
 *
 * @property {Object[]} products
 *   List of products.
 *
 *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results in the list.
 *
 * @typedef ListProductsResponse
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `GetProduct` method.
 *
 * @property {string} name
 *   Resource name of the Product to get.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
 *
 * @typedef GetProductRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.GetProductRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const GetProductRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `UpdateProduct` method.
 *
 * @property {Object} product
 *   The Product resource which replaces the one on the server.
 *   product.name is immutable.
 *
 *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
 *
 * @property {Object} updateMask
 *   The FieldMask that specifies which fields
 *   to update.
 *   If update_mask isn't specified, all mutable fields are to be updated.
 *   Valid mask paths include `product_labels`, `display_name`, and
 *   `description`.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateProductRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.UpdateProductRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const UpdateProductRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `DeleteProduct` method.
 *
 * @property {string} name
 *   Resource name of product to delete.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
 *
 * @typedef DeleteProductRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.DeleteProductRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const DeleteProductRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `CreateProductSet` method.
 *
 * @property {string} parent
 *   The project in which the ProductSet should be created.
 *
 *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
 *
 * @property {Object} productSet
 *   The ProductSet to create.
 *
 *   This object should have the same structure as [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}
 *
 * @property {string} productSetId
 *   A user-supplied resource id for this ProductSet. If set, the server will
 *   attempt to use this value as the resource id. If it is already in use, an
 *   error is returned with code ALREADY_EXISTS. Must be at most 128 characters
 *   long. It cannot contain the character `/`.
 *
 * @typedef CreateProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.CreateProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const CreateProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `ListProductSets` method.
 *
 * @property {string} parent
 *   The project from which ProductSets should be listed.
 *
 *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
 *
 * @property {number} pageSize
 *   The maximum number of items to return. Default 10, maximum 100.
 *
 * @property {string} pageToken
 *   The next_page_token returned from a previous List request, if any.
 *
 * @typedef ListProductSetsRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductSetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductSetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for the `ListProductSets` method.
 *
 * @property {Object[]} productSets
 *   List of ProductSets.
 *
 *   This object should have the same structure as [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results in the list.
 *
 * @typedef ListProductSetsResponse
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductSetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductSetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `GetProductSet` method.
 *
 * @property {string} name
 *   Resource name of the ProductSet to get.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOG_ID/productSets/PRODUCT_SET_ID`
 *
 * @typedef GetProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.GetProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const GetProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `UpdateProductSet` method.
 *
 * @property {Object} productSet
 *   The ProductSet resource which replaces the one on the server.
 *
 *   This object should have the same structure as [ProductSet]{@link google.cloud.vision.v1p4beta1.ProductSet}
 *
 * @property {Object} updateMask
 *   The FieldMask that specifies which fields to
 *   update.
 *   If update_mask isn't specified, all mutable fields are to be updated.
 *   Valid mask path is `display_name`.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.UpdateProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const UpdateProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `DeleteProductSet` method.
 *
 * @property {string} name
 *   Resource name of the ProductSet to delete.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
 *
 * @typedef DeleteProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.DeleteProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const DeleteProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `CreateReferenceImage` method.
 *
 * @property {string} parent
 *   Resource name of the product in which to create the reference image.
 *
 *   Format is
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
 *
 * @property {Object} referenceImage
 *   The reference image to create.
 *   If an image ID is specified, it is ignored.
 *
 *   This object should have the same structure as [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}
 *
 * @property {string} referenceImageId
 *   A user-supplied resource id for the ReferenceImage to be added. If set,
 *   the server will attempt to use this value as the resource id. If it is
 *   already in use, an error is returned with code ALREADY_EXISTS. Must be at
 *   most 128 characters long. It cannot contain the character `/`.
 *
 * @typedef CreateReferenceImageRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.CreateReferenceImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const CreateReferenceImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `ListReferenceImages` method.
 *
 * @property {string} parent
 *   Resource name of the product containing the reference images.
 *
 *   Format is
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.
 *
 * @property {number} pageSize
 *   The maximum number of items to return. Default 10, maximum 100.
 *
 * @property {string} pageToken
 *   A token identifying a page of results to be returned. This is the value
 *   of `nextPageToken` returned in a previous reference image list request.
 *
 *   Defaults to the first page if not specified.
 *
 * @typedef ListReferenceImagesRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListReferenceImagesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListReferenceImagesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for the `ListReferenceImages` method.
 *
 * @property {Object[]} referenceImages
 *   The list of reference images.
 *
 *   This object should have the same structure as [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}
 *
 * @property {number} pageSize
 *   The maximum number of items to return. Default 10, maximum 100.
 *
 * @property {string} nextPageToken
 *   The next_page_token returned from a previous List request, if any.
 *
 * @typedef ListReferenceImagesResponse
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListReferenceImagesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListReferenceImagesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `GetReferenceImage` method.
 *
 * @property {string} name
 *   The resource name of the ReferenceImage to get.
 *
 *   Format is:
 *
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`.
 *
 * @typedef GetReferenceImageRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.GetReferenceImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const GetReferenceImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `DeleteReferenceImage` method.
 *
 * @property {string} name
 *   The resource name of the reference image to delete.
 *
 *   Format is:
 *
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`
 *
 * @typedef DeleteReferenceImageRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.DeleteReferenceImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const DeleteReferenceImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `AddProductToProductSet` method.
 *
 * @property {string} name
 *   The resource name for the ProductSet to modify.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
 *
 * @property {string} product
 *   The resource name for the Product to be added to this ProductSet.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
 *
 * @typedef AddProductToProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.AddProductToProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const AddProductToProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `RemoveProductFromProductSet` method.
 *
 * @property {string} name
 *   The resource name for the ProductSet to modify.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
 *
 * @property {string} product
 *   The resource name for the Product to be removed from this ProductSet.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`
 *
 * @typedef RemoveProductFromProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.RemoveProductFromProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const RemoveProductFromProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `ListProductsInProductSet` method.
 *
 * @property {string} name
 *   The ProductSet resource for which to retrieve Products.
 *
 *   Format is:
 *   `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`
 *
 * @property {number} pageSize
 *   The maximum number of items to return. Default 10, maximum 100.
 *
 * @property {string} pageToken
 *   The next_page_token returned from a previous List request, if any.
 *
 * @typedef ListProductsInProductSetRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductsInProductSetRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductsInProductSetRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for the `ListProductsInProductSet` method.
 *
 * @property {Object[]} products
 *   The list of Products.
 *
 *   This object should have the same structure as [Product]{@link google.cloud.vision.v1p4beta1.Product}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results in the list.
 *
 * @typedef ListProductsInProductSetResponse
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ListProductsInProductSetResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ListProductsInProductSetResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location for a csv file which preserves a list of
 * ImportProductSetRequests in each line.
 *
 * @property {string} csvFileUri
 *   The Google Cloud Storage URI of the input csv file.
 *
 *   The URI must start with `gs://`.
 *
 *   The format of the input csv file should be one image per line.
 *   In each line, there are 8 columns.
 *
 *   1.  image-uri
 *   2.  image-id
 *   3.  product-set-id
 *   4.  product-id
 *   5.  product-category
 *   6.  product-display-name
 *   7.  labels
 *   8.  bounding-poly
 *
 *   The `image-uri`, `product-set-id`, `product-id`, and `product-category`
 *   columns are required. All other columns are optional.
 *
 *   If the `ProductSet` or `Product` specified by the `product-set-id` and
 *   `product-id` values does not exist, then the system will create a new
 *   `ProductSet` or `Product` for the image. In this case, the
 *   `product-display-name` column refers to
 *   display_name, the
 *   `product-category` column refers to
 *   product_category, and the
 *   `labels` column refers to product_labels.
 *
 *   The `image-id` column is optional but must be unique if provided. If it is
 *   empty, the system will automatically assign a unique id to the image.
 *
 *   The `product-display-name` column is optional. If it is empty, the system
 *   sets the display_name field for the product to a
 *   space (" "). You can update the `display_name` later by using the API.
 *
 *   If a `Product` with the specified `product-id` already exists, then the
 *   system ignores the `product-display-name`, `product-category`, and `labels`
 *   columns.
 *
 *   The `labels` column (optional) is a line containing a list of
 *   comma-separated key-value pairs, in the following format:
 *
 *       "key_1=value_1,key_2=value_2,...,key_n=value_n"
 *
 *   The `bounding-poly` column (optional) identifies one region of
 *   interest from the image in the same manner as `CreateReferenceImage`. If
 *   you do not specify the `bounding-poly` column, then the system will try to
 *   detect regions of interest automatically.
 *
 *   At most one `bounding-poly` column is allowed per line. If the image
 *   contains multiple regions of interest, add a line to the CSV file that
 *   includes the same product information, and the `bounding-poly` values for
 *   each region of interest.
 *
 *   The `bounding-poly` column must contain an even number of comma-separated
 *   numbers, in the format "p1_x,p1_y,p2_x,p2_y,...,pn_x,pn_y". Use
 *   non-negative integers for absolute bounding polygons, and float values
 *   in [0, 1] for normalized bounding polygons.
 *
 *   The system will resize the image if the image resolution is too
 *   large to process (larger than 20MP).
 *
 * @typedef ImportProductSetsGcsSource
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ImportProductSetsGcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ImportProductSetsGcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The input content for the `ImportProductSets` method.
 *
 * @property {Object} gcsSource
 *   The Google Cloud Storage location for a csv file which preserves a list
 *   of ImportProductSetRequests in each line.
 *
 *   This object should have the same structure as [ImportProductSetsGcsSource]{@link google.cloud.vision.v1p4beta1.ImportProductSetsGcsSource}
 *
 * @typedef ImportProductSetsInputConfig
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ImportProductSetsInputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ImportProductSetsInputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for the `ImportProductSets` method.
 *
 * @property {string} parent
 *   The project in which the ProductSets should be imported.
 *
 *   Format is `projects/PROJECT_ID/locations/LOC_ID`.
 *
 * @property {Object} inputConfig
 *   The input content for the list of requests.
 *
 *   This object should have the same structure as [ImportProductSetsInputConfig]{@link google.cloud.vision.v1p4beta1.ImportProductSetsInputConfig}
 *
 * @typedef ImportProductSetsRequest
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ImportProductSetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ImportProductSetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for the `ImportProductSets` method.
 *
 * This message is returned by the
 * google.longrunning.Operations.GetOperation method in the returned
 * google.longrunning.Operation.response field.
 *
 * @property {Object[]} referenceImages
 *   The list of reference_images that are imported successfully.
 *
 *   This object should have the same structure as [ReferenceImage]{@link google.cloud.vision.v1p4beta1.ReferenceImage}
 *
 * @property {Object[]} statuses
 *   The rpc status for each ImportProductSet request, including both successes
 *   and errors.
 *
 *   The number of statuses here matches the number of lines in the csv file,
 *   and statuses[i] stores the success or failure status of processing the i-th
 *   line of the csv, starting from line 0.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef ImportProductSetsResponse
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.ImportProductSetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const ImportProductSetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata for the batch operations such as the current state.
 *
 * This is included in the `metadata` field of the `Operation` returned by the
 * `GetOperation` call of the `google::longrunning::Operations` service.
 *
 * @property {number} state
 *   The current state of the batch operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.vision.v1p4beta1.State}
 *
 * @property {Object} submitTime
 *   The time when the batch request was submitted to the server.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   The time when the batch request is finished and
 *   google.longrunning.Operation.done is set to true.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef BatchOperationMetadata
 * @memberof google.cloud.vision.v1p4beta1
 * @see [google.cloud.vision.v1p4beta1.BatchOperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p4beta1/product_search_service.proto}
 */
const BatchOperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enumerates the possible states that the batch request can be in.
   *
   * @enum {number}
   * @memberof google.cloud.vision.v1p4beta1
   */
  State: {

    /**
     * Invalid.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * Request is actively being processed.
     */
    PROCESSING: 1,

    /**
     * The request is done and at least one item has been successfully
     * processed.
     */
    SUCCESSFUL: 2,

    /**
     * The request is done and no item has been successfully processed.
     */
    FAILED: 3,

    /**
     * The request is done after the longrunning.Operations.CancelOperation has
     * been called by the user.  Any records that were processed before the
     * cancel command are output as specified in the request.
     */
    CANCELLED: 4
  }
};