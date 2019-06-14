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
 * The type of Google Cloud Vision API detection to perform, and the maximum
 * number of results to return for that type. Multiple `Feature` objects can
 * be specified in the `features` list.
 *
 * @property {number} type
 *   The feature type.
 *
 *   The number should be among the values of [Type]{@link google.cloud.vision.v1p3beta1.Type}
 *
 * @property {number} maxResults
 *   Maximum number of results of this type. Does not apply to
 *   `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
 *
 * @property {string} model
 *   Model to use for the feature.
 *   Supported values: "builtin/stable" (the default if unset) and
 *   "builtin/latest".
 *
 * @typedef Feature
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Feature definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const Feature = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type of Google Cloud Vision API feature to be extracted.
   *
   * @enum {number}
   * @memberof google.cloud.vision.v1p3beta1
   */
  Type: {

    /**
     * Unspecified feature type.
     */
    TYPE_UNSPECIFIED: 0,

    /**
     * Run face detection.
     */
    FACE_DETECTION: 1,

    /**
     * Run landmark detection.
     */
    LANDMARK_DETECTION: 2,

    /**
     * Run logo detection.
     */
    LOGO_DETECTION: 3,

    /**
     * Run label detection.
     */
    LABEL_DETECTION: 4,

    /**
     * Run text detection / optical character recognition (OCR). Text detection
     * is optimized for areas of text within a larger image; if the image is
     * a document, use `DOCUMENT_TEXT_DETECTION` instead.
     */
    TEXT_DETECTION: 5,

    /**
     * Run dense text document OCR. Takes precedence when both
     * `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` are present.
     */
    DOCUMENT_TEXT_DETECTION: 11,

    /**
     * Run Safe Search to detect potentially unsafe
     * or undesirable content.
     */
    SAFE_SEARCH_DETECTION: 6,

    /**
     * Compute a set of image properties, such as the
     * image's dominant colors.
     */
    IMAGE_PROPERTIES: 7,

    /**
     * Run crop hints.
     */
    CROP_HINTS: 9,

    /**
     * Run web detection.
     */
    WEB_DETECTION: 10,

    /**
     * Run Product Search.
     */
    PRODUCT_SEARCH: 12,

    /**
     * Run localizer for object detection.
     */
    OBJECT_LOCALIZATION: 19
  }
};

/**
 * External image source (Google Cloud Storage or web URL image location).
 *
 * @property {string} gcsImageUri
 *   **Use `image_uri` instead.**
 *
 *   The Google Cloud Storage  URI of the form
 *   `gs://bucket_name/object_name`. Object versioning is not supported. See
 *   [Google Cloud Storage Request
 *   URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.
 *
 * @property {string} imageUri
 *   The URI of the source image. Can be either:
 *
 *   1. A Google Cloud Storage URI of the form
 *      `gs://bucket_name/object_name`. Object versioning is not supported. See
 *      [Google Cloud Storage Request
 *      URIs](https://cloud.google.com/storage/docs/reference-uris) for more
 *      info.
 *
 *   2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from
 *      HTTP/HTTPS URLs, Google cannot guarantee that the request will be
 *      completed. Your request may fail if the specified host denies the
 *      request (e.g. due to request throttling or DOS prevention), or if Google
 *      throttles requests to the site for abuse prevention. You should not
 *      depend on externally-hosted images for production applications.
 *
 *   When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes
 *   precedence.
 *
 * @typedef ImageSource
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ImageSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const ImageSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Client image to perform Google Cloud Vision API tasks over.
 *
 * @property {Buffer} content
 *   Image content, represented as a stream of bytes.
 *   Note: As with all `bytes` fields, protobuffers use a pure binary
 *   representation, whereas JSON representations use base64.
 *
 * @property {Object} source
 *   Google Cloud Storage image location, or publicly-accessible image
 *   URL. If both `content` and `source` are provided for an image, `content`
 *   takes precedence and is used to perform the image annotation request.
 *
 *   This object should have the same structure as [ImageSource]{@link google.cloud.vision.v1p3beta1.ImageSource}
 *
 * @typedef Image
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Image definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const Image = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A face annotation object contains the results of face detection.
 *
 * @property {Object} boundingPoly
 *   The bounding polygon around the face. The coordinates of the bounding box
 *   are in the original image's scale, as returned in `ImageParams`.
 *   The bounding box is computed to "frame" the face in accordance with human
 *   expectations. It is based on the landmarker results.
 *   Note that one or more x and/or y coordinates may not be generated in the
 *   `BoundingPoly` (the polygon will be unbounded) if only a partial face
 *   appears in the image to be annotated.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object} fdBoundingPoly
 *   The `fd_bounding_poly` bounding polygon is tighter than the
 *   `boundingPoly`, and encloses only the skin part of the face. Typically, it
 *   is used to eliminate the face from any image analysis that detects the
 *   "amount of skin" visible in an image. It is not based on the
 *   landmarker results, only on the initial face detection, hence
 *   the <code>fd</code> (face detection) prefix.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object[]} landmarks
 *   Detected face landmarks.
 *
 *   This object should have the same structure as [Landmark]{@link google.cloud.vision.v1p3beta1.Landmark}
 *
 * @property {number} rollAngle
 *   Roll angle, which indicates the amount of clockwise/anti-clockwise rotation
 *   of the face relative to the image vertical about the axis perpendicular to
 *   the face. Range [-180,180].
 *
 * @property {number} panAngle
 *   Yaw angle, which indicates the leftward/rightward angle that the face is
 *   pointing relative to the vertical plane perpendicular to the image. Range
 *   [-180,180].
 *
 * @property {number} tiltAngle
 *   Pitch angle, which indicates the upwards/downwards angle that the face is
 *   pointing relative to the image's horizontal plane. Range [-180,180].
 *
 * @property {number} detectionConfidence
 *   Detection confidence. Range [0, 1].
 *
 * @property {number} landmarkingConfidence
 *   Face landmarking confidence. Range [0, 1].
 *
 * @property {number} joyLikelihood
 *   Joy likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} sorrowLikelihood
 *   Sorrow likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} angerLikelihood
 *   Anger likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} surpriseLikelihood
 *   Surprise likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} underExposedLikelihood
 *   Under-exposed likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} blurredLikelihood
 *   Blurred likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} headwearLikelihood
 *   Headwear likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @typedef FaceAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.FaceAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const FaceAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A face-specific landmark (for example, a face feature).
   *
   * @property {number} type
   *   Face landmark type.
   *
   *   The number should be among the values of [Type]{@link google.cloud.vision.v1p3beta1.Type}
   *
   * @property {Object} position
   *   Face landmark position.
   *
   *   This object should have the same structure as [Position]{@link google.cloud.vision.v1p3beta1.Position}
   *
   * @typedef Landmark
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.FaceAnnotation.Landmark definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
   */
  Landmark: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Face landmark (feature) type.
     * Left and right are defined from the vantage of the viewer of the image
     * without considering mirror projections typical of photos. So, `LEFT_EYE`,
     * typically, is the person's right eye.
     *
     * @enum {number}
     * @memberof google.cloud.vision.v1p3beta1
     */
    Type: {

      /**
       * Unknown face landmark detected. Should not be filled.
       */
      UNKNOWN_LANDMARK: 0,

      /**
       * Left eye.
       */
      LEFT_EYE: 1,

      /**
       * Right eye.
       */
      RIGHT_EYE: 2,

      /**
       * Left of left eyebrow.
       */
      LEFT_OF_LEFT_EYEBROW: 3,

      /**
       * Right of left eyebrow.
       */
      RIGHT_OF_LEFT_EYEBROW: 4,

      /**
       * Left of right eyebrow.
       */
      LEFT_OF_RIGHT_EYEBROW: 5,

      /**
       * Right of right eyebrow.
       */
      RIGHT_OF_RIGHT_EYEBROW: 6,

      /**
       * Midpoint between eyes.
       */
      MIDPOINT_BETWEEN_EYES: 7,

      /**
       * Nose tip.
       */
      NOSE_TIP: 8,

      /**
       * Upper lip.
       */
      UPPER_LIP: 9,

      /**
       * Lower lip.
       */
      LOWER_LIP: 10,

      /**
       * Mouth left.
       */
      MOUTH_LEFT: 11,

      /**
       * Mouth right.
       */
      MOUTH_RIGHT: 12,

      /**
       * Mouth center.
       */
      MOUTH_CENTER: 13,

      /**
       * Nose, bottom right.
       */
      NOSE_BOTTOM_RIGHT: 14,

      /**
       * Nose, bottom left.
       */
      NOSE_BOTTOM_LEFT: 15,

      /**
       * Nose, bottom center.
       */
      NOSE_BOTTOM_CENTER: 16,

      /**
       * Left eye, top boundary.
       */
      LEFT_EYE_TOP_BOUNDARY: 17,

      /**
       * Left eye, right corner.
       */
      LEFT_EYE_RIGHT_CORNER: 18,

      /**
       * Left eye, bottom boundary.
       */
      LEFT_EYE_BOTTOM_BOUNDARY: 19,

      /**
       * Left eye, left corner.
       */
      LEFT_EYE_LEFT_CORNER: 20,

      /**
       * Right eye, top boundary.
       */
      RIGHT_EYE_TOP_BOUNDARY: 21,

      /**
       * Right eye, right corner.
       */
      RIGHT_EYE_RIGHT_CORNER: 22,

      /**
       * Right eye, bottom boundary.
       */
      RIGHT_EYE_BOTTOM_BOUNDARY: 23,

      /**
       * Right eye, left corner.
       */
      RIGHT_EYE_LEFT_CORNER: 24,

      /**
       * Left eyebrow, upper midpoint.
       */
      LEFT_EYEBROW_UPPER_MIDPOINT: 25,

      /**
       * Right eyebrow, upper midpoint.
       */
      RIGHT_EYEBROW_UPPER_MIDPOINT: 26,

      /**
       * Left ear tragion.
       */
      LEFT_EAR_TRAGION: 27,

      /**
       * Right ear tragion.
       */
      RIGHT_EAR_TRAGION: 28,

      /**
       * Left eye pupil.
       */
      LEFT_EYE_PUPIL: 29,

      /**
       * Right eye pupil.
       */
      RIGHT_EYE_PUPIL: 30,

      /**
       * Forehead glabella.
       */
      FOREHEAD_GLABELLA: 31,

      /**
       * Chin gnathion.
       */
      CHIN_GNATHION: 32,

      /**
       * Chin left gonion.
       */
      CHIN_LEFT_GONION: 33,

      /**
       * Chin right gonion.
       */
      CHIN_RIGHT_GONION: 34
    }
  }
};

/**
 * Detected entity location information.
 *
 * @property {Object} latLng
 *   lat/long location coordinates.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @typedef LocationInfo
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.LocationInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const LocationInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `Property` consists of a user-supplied name/value pair.
 *
 * @property {string} name
 *   Name of the property.
 *
 * @property {string} value
 *   Value of the property.
 *
 * @property {number} uint64Value
 *   Value of numeric properties.
 *
 * @typedef Property
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Property definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const Property = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of detected entity features.
 *
 * @property {string} mid
 *   Opaque entity ID. Some IDs may be available in
 *   [Google Knowledge Graph Search
 *   API](https://developers.google.com/knowledge-graph/).
 *
 * @property {string} locale
 *   The language code for the locale in which the entity textual
 *   `description` is expressed.
 *
 * @property {string} description
 *   Entity textual description, expressed in its `locale` language.
 *
 * @property {number} score
 *   Overall score of the result. Range [0, 1].
 *
 * @property {number} confidence
 *   **Deprecated. Use `score` instead.**
 *   The accuracy of the entity detection in an image.
 *   For example, for an image in which the "Eiffel Tower" entity is detected,
 *   this field represents the confidence that there is a tower in the query
 *   image. Range [0, 1].
 *
 * @property {number} topicality
 *   The relevancy of the ICA (Image Content Annotation) label to the
 *   image. For example, the relevancy of "tower" is likely higher to an image
 *   containing the detected "Eiffel Tower" than to an image containing a
 *   detected distant towering building, even though the confidence that
 *   there is a tower in each image may be the same. Range [0, 1].
 *
 * @property {Object} boundingPoly
 *   Image region to which this entity belongs. Not produced
 *   for `LABEL_DETECTION` features.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object[]} locations
 *   The location information for the detected entity. Multiple
 *   `LocationInfo` elements can be present because one location may
 *   indicate the location of the scene in the image, and another location
 *   may indicate the location of the place where the image was taken.
 *   Location information is usually present for landmarks.
 *
 *   This object should have the same structure as [LocationInfo]{@link google.cloud.vision.v1p3beta1.LocationInfo}
 *
 * @property {Object[]} properties
 *   Some entities may have optional user-supplied `Property` (name/value)
 *   fields, such a score or string that qualifies the entity.
 *
 *   This object should have the same structure as [Property]{@link google.cloud.vision.v1p3beta1.Property}
 *
 * @typedef EntityAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.EntityAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const EntityAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of detected objects with bounding boxes.
 *
 * @property {string} mid
 *   Object ID that should align with EntityAnnotation mid.
 *
 * @property {string} languageCode
 *   The BCP-47 language code, such as "en-US" or "sr-Latn". For more
 *   information, see
 *   http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
 *
 * @property {string} name
 *   Object name, expressed in its `language_code` language.
 *
 * @property {number} score
 *   Score of the result. Range [0, 1].
 *
 * @property {Object} boundingPoly
 *   Image region to which this object belongs. This must be populated.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @typedef LocalizedObjectAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.LocalizedObjectAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const LocalizedObjectAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of features pertaining to the image, computed by computer vision
 * methods over safe-search verticals (for example, adult, spoof, medical,
 * violence).
 *
 * @property {number} adult
 *   Represents the adult content likelihood for the image. Adult content may
 *   contain elements such as nudity, pornographic images or cartoons, or
 *   sexual activities.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} spoof
 *   Spoof likelihood. The likelihood that an modification
 *   was made to the image's canonical version to make it appear
 *   funny or offensive.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} medical
 *   Likelihood that this is a medical image.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} violence
 *   Likelihood that this image contains violent content.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @property {number} racy
 *   Likelihood that the request image contains racy content. Racy content may
 *   include (but is not limited to) skimpy or sheer clothing, strategically
 *   covered nudity, lewd or provocative poses, or close-ups of sensitive
 *   body areas.
 *
 *   The number should be among the values of [Likelihood]{@link google.cloud.vision.v1p3beta1.Likelihood}
 *
 * @typedef SafeSearchAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.SafeSearchAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const SafeSearchAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Rectangle determined by min and max `LatLng` pairs.
 *
 * @property {Object} minLatLng
 *   Min lat/long pair.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {Object} maxLatLng
 *   Max lat/long pair.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @typedef LatLongRect
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.LatLongRect definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const LatLongRect = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Color information consists of RGB channels, score, and the fraction of
 * the image that the color occupies in the image.
 *
 * @property {Object} color
 *   RGB components of the color.
 *
 *   This object should have the same structure as [Color]{@link google.type.Color}
 *
 * @property {number} score
 *   Image-specific score for this color. Value in range [0, 1].
 *
 * @property {number} pixelFraction
 *   The fraction of pixels the color occupies in the image.
 *   Value in range [0, 1].
 *
 * @typedef ColorInfo
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ColorInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const ColorInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of dominant colors and their corresponding scores.
 *
 * @property {Object[]} colors
 *   RGB color values with their score and pixel fraction.
 *
 *   This object should have the same structure as [ColorInfo]{@link google.cloud.vision.v1p3beta1.ColorInfo}
 *
 * @typedef DominantColorsAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.DominantColorsAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const DominantColorsAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stores image properties, such as dominant colors.
 *
 * @property {Object} dominantColors
 *   If present, dominant colors completed successfully.
 *
 *   This object should have the same structure as [DominantColorsAnnotation]{@link google.cloud.vision.v1p3beta1.DominantColorsAnnotation}
 *
 * @typedef ImageProperties
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ImageProperties definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const ImageProperties = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Single crop hint that is used to generate a new crop when serving an image.
 *
 * @property {Object} boundingPoly
 *   The bounding polygon for the crop region. The coordinates of the bounding
 *   box are in the original image's scale, as returned in `ImageParams`.
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {number} confidence
 *   Confidence of this being a salient region.  Range [0, 1].
 *
 * @property {number} importanceFraction
 *   Fraction of importance of this salient region with respect to the original
 *   image.
 *
 * @typedef CropHint
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.CropHint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const CropHint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of crop hints that are used to generate new crops when serving images.
 *
 * @property {Object[]} cropHints
 *   Crop hint results.
 *
 *   This object should have the same structure as [CropHint]{@link google.cloud.vision.v1p3beta1.CropHint}
 *
 * @typedef CropHintsAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.CropHintsAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const CropHintsAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters for crop hints annotation request.
 *
 * @property {number[]} aspectRatios
 *   Aspect ratios in floats, representing the ratio of the width to the height
 *   of the image. For example, if the desired aspect ratio is 4/3, the
 *   corresponding float value should be 1.33333.  If not specified, the
 *   best possible crop is returned. The number of provided aspect ratios is
 *   limited to a maximum of 16; any aspect ratios provided after the 16th are
 *   ignored.
 *
 * @typedef CropHintsParams
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.CropHintsParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const CropHintsParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Parameters for web detection request.
 *
 * @property {boolean} includeGeoResults
 *   Whether to include results derived from the geo information in the image.
 *
 * @typedef WebDetectionParams
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.WebDetectionParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const WebDetectionParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Image context and/or feature-specific parameters.
 *
 * @property {Object} latLongRect
 *   Not used.
 *
 *   This object should have the same structure as [LatLongRect]{@link google.cloud.vision.v1p3beta1.LatLongRect}
 *
 * @property {string[]} languageHints
 *   List of languages to use for TEXT_DETECTION. In most cases, an empty value
 *   yields the best results since it enables automatic language detection. For
 *   languages based on the Latin alphabet, setting `language_hints` is not
 *   needed. In rare cases, when the language of the text in the image is known,
 *   setting a hint will help get better results (although it will be a
 *   significant hindrance if the hint is wrong). Text detection returns an
 *   error if one or more of the specified languages is not one of the
 *   [supported languages](https://cloud.google.com/vision/docs/languages).
 *
 * @property {Object} cropHintsParams
 *   Parameters for crop hints annotation request.
 *
 *   This object should have the same structure as [CropHintsParams]{@link google.cloud.vision.v1p3beta1.CropHintsParams}
 *
 * @property {Object} productSearchParams
 *   Parameters for product search.
 *
 *   This object should have the same structure as [ProductSearchParams]{@link google.cloud.vision.v1p3beta1.ProductSearchParams}
 *
 * @property {Object} webDetectionParams
 *   Parameters for web detection.
 *
 *   This object should have the same structure as [WebDetectionParams]{@link google.cloud.vision.v1p3beta1.WebDetectionParams}
 *
 * @typedef ImageContext
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ImageContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const ImageContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for performing Google Cloud Vision API tasks over a user-provided
 * image, with user-requested features.
 *
 * @property {Object} image
 *   The image to be processed.
 *
 *   This object should have the same structure as [Image]{@link google.cloud.vision.v1p3beta1.Image}
 *
 * @property {Object[]} features
 *   Requested features.
 *
 *   This object should have the same structure as [Feature]{@link google.cloud.vision.v1p3beta1.Feature}
 *
 * @property {Object} imageContext
 *   Additional context that may accompany the image.
 *
 *   This object should have the same structure as [ImageContext]{@link google.cloud.vision.v1p3beta1.ImageContext}
 *
 * @typedef AnnotateImageRequest
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AnnotateImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AnnotateImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * If an image was produced from a file (e.g. a PDF), this message gives
 * information about the source of that image.
 *
 * @property {string} uri
 *   The URI of the file used to produce the image.
 *
 * @property {number} pageNumber
 *   If the file was a PDF or TIFF, this field gives the page number within
 *   the file used to produce the image.
 *
 * @typedef ImageAnnotationContext
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.ImageAnnotationContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const ImageAnnotationContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to an image annotation request.
 *
 * @property {Object[]} faceAnnotations
 *   If present, face detection has completed successfully.
 *
 *   This object should have the same structure as [FaceAnnotation]{@link google.cloud.vision.v1p3beta1.FaceAnnotation}
 *
 * @property {Object[]} landmarkAnnotations
 *   If present, landmark detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link google.cloud.vision.v1p3beta1.EntityAnnotation}
 *
 * @property {Object[]} logoAnnotations
 *   If present, logo detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link google.cloud.vision.v1p3beta1.EntityAnnotation}
 *
 * @property {Object[]} labelAnnotations
 *   If present, label detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link google.cloud.vision.v1p3beta1.EntityAnnotation}
 *
 * @property {Object[]} localizedObjectAnnotations
 *   If present, localized object detection has completed successfully.
 *   This will be sorted descending by confidence score.
 *
 *   This object should have the same structure as [LocalizedObjectAnnotation]{@link google.cloud.vision.v1p3beta1.LocalizedObjectAnnotation}
 *
 * @property {Object[]} textAnnotations
 *   If present, text (OCR) detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link google.cloud.vision.v1p3beta1.EntityAnnotation}
 *
 * @property {Object} fullTextAnnotation
 *   If present, text (OCR) detection or document (OCR) text detection has
 *   completed successfully.
 *   This annotation provides the structural hierarchy for the OCR detected
 *   text.
 *
 *   This object should have the same structure as [TextAnnotation]{@link google.cloud.vision.v1p3beta1.TextAnnotation}
 *
 * @property {Object} safeSearchAnnotation
 *   If present, safe-search annotation has completed successfully.
 *
 *   This object should have the same structure as [SafeSearchAnnotation]{@link google.cloud.vision.v1p3beta1.SafeSearchAnnotation}
 *
 * @property {Object} imagePropertiesAnnotation
 *   If present, image properties were extracted successfully.
 *
 *   This object should have the same structure as [ImageProperties]{@link google.cloud.vision.v1p3beta1.ImageProperties}
 *
 * @property {Object} cropHintsAnnotation
 *   If present, crop hints have completed successfully.
 *
 *   This object should have the same structure as [CropHintsAnnotation]{@link google.cloud.vision.v1p3beta1.CropHintsAnnotation}
 *
 * @property {Object} webDetection
 *   If present, web detection has completed successfully.
 *
 *   This object should have the same structure as [WebDetection]{@link google.cloud.vision.v1p3beta1.WebDetection}
 *
 * @property {Object} productSearchResults
 *   If present, product search has completed successfully.
 *
 *   This object should have the same structure as [ProductSearchResults]{@link google.cloud.vision.v1p3beta1.ProductSearchResults}
 *
 * @property {Object} error
 *   If set, represents the error message for the operation.
 *   Note that filled-in image annotations are guaranteed to be
 *   correct, even when `error` is set.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object} context
 *   If present, contextual information is needed to understand where this image
 *   comes from.
 *
 *   This object should have the same structure as [ImageAnnotationContext]{@link google.cloud.vision.v1p3beta1.ImageAnnotationContext}
 *
 * @typedef AnnotateImageResponse
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AnnotateImageResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AnnotateImageResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to a single file annotation request. A file may contain one or more
 * images, which individually have their own responses.
 *
 * @property {Object} inputConfig
 *   Information about the file for which this response is generated.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.vision.v1p3beta1.InputConfig}
 *
 * @property {Object[]} responses
 *   Individual responses to images found within the file.
 *
 *   This object should have the same structure as [AnnotateImageResponse]{@link google.cloud.vision.v1p3beta1.AnnotateImageResponse}
 *
 * @typedef AnnotateFileResponse
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AnnotateFileResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AnnotateFileResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Multiple image annotation requests are batched into a single service call.
 *
 * @property {Object[]} requests
 *   Individual image annotation requests for this batch.
 *
 *   This object should have the same structure as [AnnotateImageRequest]{@link google.cloud.vision.v1p3beta1.AnnotateImageRequest}
 *
 * @typedef BatchAnnotateImagesRequest
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.BatchAnnotateImagesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const BatchAnnotateImagesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to a batch image annotation request.
 *
 * @property {Object[]} responses
 *   Individual responses to image annotation requests within the batch.
 *
 *   This object should have the same structure as [AnnotateImageResponse]{@link google.cloud.vision.v1p3beta1.AnnotateImageResponse}
 *
 * @typedef BatchAnnotateImagesResponse
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.BatchAnnotateImagesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const BatchAnnotateImagesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An offline file annotation request.
 *
 * @property {Object} inputConfig
 *   Required. Information about the input file.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.vision.v1p3beta1.InputConfig}
 *
 * @property {Object[]} features
 *   Required. Requested features.
 *
 *   This object should have the same structure as [Feature]{@link google.cloud.vision.v1p3beta1.Feature}
 *
 * @property {Object} imageContext
 *   Additional context that may accompany the image(s) in the file.
 *
 *   This object should have the same structure as [ImageContext]{@link google.cloud.vision.v1p3beta1.ImageContext}
 *
 * @property {Object} outputConfig
 *   Required. The desired output location and metadata (e.g. format).
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.vision.v1p3beta1.OutputConfig}
 *
 * @typedef AsyncAnnotateFileRequest
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AsyncAnnotateFileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AsyncAnnotateFileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response for a single offline file annotation request.
 *
 * @property {Object} outputConfig
 *   The output location and metadata from AsyncAnnotateFileRequest.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.vision.v1p3beta1.OutputConfig}
 *
 * @typedef AsyncAnnotateFileResponse
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AsyncAnnotateFileResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AsyncAnnotateFileResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Multiple async file annotation requests are batched into a single service
 * call.
 *
 * @property {Object[]} requests
 *   Individual async file annotation requests for this batch.
 *
 *   This object should have the same structure as [AsyncAnnotateFileRequest]{@link google.cloud.vision.v1p3beta1.AsyncAnnotateFileRequest}
 *
 * @typedef AsyncBatchAnnotateFilesRequest
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AsyncBatchAnnotateFilesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to an async batch file annotation request.
 *
 * @property {Object[]} responses
 *   The list of file annotation responses, one for each request in
 *   AsyncBatchAnnotateFilesRequest.
 *
 *   This object should have the same structure as [AsyncAnnotateFileResponse]{@link google.cloud.vision.v1p3beta1.AsyncAnnotateFileResponse}
 *
 * @typedef AsyncBatchAnnotateFilesResponse
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.AsyncBatchAnnotateFilesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const AsyncBatchAnnotateFilesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The desired input location and metadata.
 *
 * @property {Object} gcsSource
 *   The Google Cloud Storage location to read the input from.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.vision.v1p3beta1.GcsSource}
 *
 * @property {string} mimeType
 *   The type of the file. Currently only "application/pdf" and "image/tiff"
 *   are supported. Wildcards are not supported.
 *
 * @typedef InputConfig
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The desired output location and metadata.
 *
 * @property {Object} gcsDestination
 *   The Google Cloud Storage location to write the output(s) to.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.vision.v1p3beta1.GcsDestination}
 *
 * @property {number} batchSize
 *   The max number of response protos to put into each output JSON file on
 *   Google Cloud Storage.
 *   The valid range is [1, 100]. If not specified, the default value is 20.
 *
 *   For example, for one pdf file with 100 pages, 100 response protos will
 *   be generated. If `batch_size` = 20, then 5 json files each
 *   containing 20 response protos will be written under the prefix
 *   `gcs_destination`.`uri`.
 *
 *   Currently, batch_size only applies to GcsDestination, with potential future
 *   support for other output configurations.
 *
 * @typedef OutputConfig
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location where the input will be read from.
 *
 * @property {string} uri
 *   Google Cloud Storage URI for the input file. This must only be a
 *   Google Cloud Storage object. Wildcards are not currently supported.
 *
 * @typedef GcsSource
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location where the output will be written to.
 *
 * @property {string} uri
 *   Google Cloud Storage URI where the results will be stored. Results will
 *   be in JSON format and preceded by its corresponding input URI. This field
 *   can either represent a single file, or a prefix for multiple outputs.
 *   Prefixes must end in a `/`.
 *
 *   Examples:
 *
 *   *    File: gs://bucket-name/filename.json
 *   *    Prefix: gs://bucket-name/prefix/here/
 *   *    File: gs://bucket-name/prefix/here
 *
 *   If multiple outputs, each response is still AnnotateFileResponse, each of
 *   which contains some subset of the full list of AnnotateImageResponse.
 *   Multiple outputs can happen if, for example, the output JSON is too large
 *   and overflows into multiple sharded files.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains metadata for the BatchAnnotateImages operation.
 *
 * @property {number} state
 *   Current state of the batch operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.vision.v1p3beta1.State}
 *
 * @property {Object} createTime
 *   The time when the batch request was received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   The time when the operation result was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef OperationMetadata
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.OperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/image_annotator.proto}
 */
const OperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Batch operation states.
   *
   * @enum {number}
   * @memberof google.cloud.vision.v1p3beta1
   */
  State: {

    /**
     * Invalid.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * Request is received.
     */
    CREATED: 1,

    /**
     * Request is actively being processed.
     */
    RUNNING: 2,

    /**
     * The batch processing is done.
     */
    DONE: 3,

    /**
     * The batch processing was cancelled.
     */
    CANCELLED: 4
  }
};

/**
 * A bucketized representation of likelihood, which is intended to give clients
 * highly stable results across model upgrades.
 *
 * @enum {number}
 * @memberof google.cloud.vision.v1p3beta1
 */
const Likelihood = {

  /**
   * Unknown likelihood.
   */
  UNKNOWN: 0,

  /**
   * It is very unlikely that the image belongs to the specified vertical.
   */
  VERY_UNLIKELY: 1,

  /**
   * It is unlikely that the image belongs to the specified vertical.
   */
  UNLIKELY: 2,

  /**
   * It is possible that the image belongs to the specified vertical.
   */
  POSSIBLE: 3,

  /**
   * It is likely that the image belongs to the specified vertical.
   */
  LIKELY: 4,

  /**
   * It is very likely that the image belongs to the specified vertical.
   */
  VERY_LIKELY: 5
};