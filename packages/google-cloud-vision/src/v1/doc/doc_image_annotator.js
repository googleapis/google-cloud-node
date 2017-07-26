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
 * Users describe the type of Google Cloud Vision API tasks to perform over
 * images by using *Feature*s. Each Feature indicates a type of image
 * detection task to perform. Features encode the Cloud Vision API
 * vertical to operate on and the number of top-scoring results to return.
 *
 * @property {number} type
 *   The feature type.
 *
 *   The number should be among the values of [Type]{@link Type}
 *
 * @property {number} maxResults
 *   Maximum number of results of this type.
 *
 * @class
 * @see [google.cloud.vision.v1.Feature definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var Feature = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type of image feature.
   *
   * @enum {number}
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
     * Run OCR.
     */
    TEXT_DETECTION: 5,

    /**
     * Run dense text document OCR. Takes precedence when both
     * DOCUMENT_TEXT_DETECTION and TEXT_DETECTION are present.
     */
    DOCUMENT_TEXT_DETECTION: 11,

    /**
     * Run computer vision models to compute image safe-search properties.
     */
    SAFE_SEARCH_DETECTION: 6,

    /**
     * Compute a set of image properties, such as the image's dominant colors.
     */
    IMAGE_PROPERTIES: 7,

    /**
     * Run crop hints.
     */
    CROP_HINTS: 9,

    /**
     * Run web detection.
     */
    WEB_DETECTION: 10
  }
};

/**
 * External image source (Google Cloud Storage image location).
 *
 * @property {string} gcsImageUri
 *   NOTE: For new code `image_uri` below is preferred.
 *   Google Cloud Storage image URI, which must be in the following form:
 *   `gs://bucket_name/object_name` (for details, see
 *   [Google Cloud Storage Request
 *   URIs](https://cloud.google.com/storage/docs/reference-uris)).
 *   NOTE: Cloud Storage object versioning is not supported.
 *
 * @property {string} imageUri
 *   Image URI which supports:
 *   1) Google Cloud Storage image URI, which must be in the following form:
 *   `gs://bucket_name/object_name` (for details, see
 *   [Google Cloud Storage Request
 *   URIs](https://cloud.google.com/storage/docs/reference-uris)).
 *   NOTE: Cloud Storage object versioning is not supported.
 *   2) Publicly accessible image HTTP/HTTPS URL.
 *   This is preferred over the legacy `gcs_image_uri` above. When both
 *   `gcs_image_uri` and `image_uri` are specified, `image_uri` takes
 *   precedence.
 *
 * @class
 * @see [google.cloud.vision.v1.ImageSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var ImageSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Client image to perform Google Cloud Vision API tasks over.
 *
 * @property {string} content
 *   Image content, represented as a stream of bytes.
 *   Note: as with all `bytes` fields, protobuffers use a pure binary
 *   representation, whereas JSON representations use base64.
 *
 * @property {Object} source
 *   Google Cloud Storage image location. If both `content` and `source`
 *   are provided for an image, `content` takes precedence and is
 *   used to perform the image annotation request.
 *
 *   This object should have the same structure as [ImageSource]{@link ImageSource}
 *
 * @class
 * @see [google.cloud.vision.v1.Image definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var Image = {
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
 *   This object should have the same structure as [BoundingPoly]{@link BoundingPoly}
 *
 * @property {Object} fdBoundingPoly
 *   The `fd_bounding_poly` bounding polygon is tighter than the
 *   `boundingPoly`, and encloses only the skin part of the face. Typically, it
 *   is used to eliminate the face from any image analysis that detects the
 *   "amount of skin" visible in an image. It is not based on the
 *   landmarker results, only on the initial face detection, hence
 *   the <code>fd</code> (face detection) prefix.
 *
 *   This object should have the same structure as [BoundingPoly]{@link BoundingPoly}
 *
 * @property {Object[]} landmarks
 *   Detected face landmarks.
 *
 *   This object should have the same structure as [Landmark]{@link Landmark}
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
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} sorrowLikelihood
 *   Sorrow likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} angerLikelihood
 *   Anger likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} surpriseLikelihood
 *   Surprise likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} underExposedLikelihood
 *   Under-exposed likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} blurredLikelihood
 *   Blurred likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} headwearLikelihood
 *   Headwear likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @class
 * @see [google.cloud.vision.v1.FaceAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var FaceAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A face-specific landmark (for example, a face feature).
   * Landmark positions may fall outside the bounds of the image
   * if the face is near one or more edges of the image.
   * Therefore it is NOT guaranteed that `0 <= x < width` or
   * `0 <= y < height`.
   *
   * @property {number} type
   *   Face landmark type.
   *
   *   The number should be among the values of [Type]{@link Type}
   *
   * @property {Object} position
   *   Face landmark position.
   *
   *   This object should have the same structure as [Position]{@link Position}
   *
   * @class
   * @see [google.cloud.vision.v1.FaceAnnotation.Landmark definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
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
 *   This object should have the same structure as [google.type.LatLng]{@link external:"google.type.LatLng"}
 *
 * @class
 * @see [google.cloud.vision.v1.LocationInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var LocationInfo = {
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
 * @class
 * @see [google.cloud.vision.v1.Property definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var Property = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of detected entity features.
 *
 * @property {string} mid
 *   Opaque entity ID. Some IDs may be available in
 *   [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).
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
 *   Image region to which this entity belongs. Currently not produced
 *   for `LABEL_DETECTION` features. For `TEXT_DETECTION` (OCR), `boundingPoly`s
 *   are produced for the entire text detected in an image region, followed by
 *   `boundingPoly`s for each word within the detected text.
 *
 *   This object should have the same structure as [BoundingPoly]{@link BoundingPoly}
 *
 * @property {Object[]} locations
 *   The location information for the detected entity. Multiple
 *   `LocationInfo` elements can be present because one location may
 *   indicate the location of the scene in the image, and another location
 *   may indicate the location of the place where the image was taken.
 *   Location information is usually present for landmarks.
 *
 *   This object should have the same structure as [LocationInfo]{@link LocationInfo}
 *
 * @property {Object[]} properties
 *   Some entities may have optional user-supplied `Property` (name/value)
 *   fields, such a score or string that qualifies the entity.
 *
 *   This object should have the same structure as [Property]{@link Property}
 *
 * @class
 * @see [google.cloud.vision.v1.EntityAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var EntityAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of features pertaining to the image, computed by computer vision
 * methods over safe-search verticals (for example, adult, spoof, medical,
 * violence).
 *
 * @property {number} adult
 *   Represents the adult content likelihood for the image.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} spoof
 *   Spoof likelihood. The likelihood that an modification
 *   was made to the image's canonical version to make it appear
 *   funny or offensive.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} medical
 *   Likelihood that this is a medical image.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @property {number} violence
 *   Violence likelihood.
 *
 *   The number should be among the values of [Likelihood]{@link Likelihood}
 *
 * @class
 * @see [google.cloud.vision.v1.SafeSearchAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var SafeSearchAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Rectangle determined by min and max `LatLng` pairs.
 *
 * @property {Object} minLatLng
 *   Min lat/long pair.
 *
 *   This object should have the same structure as [google.type.LatLng]{@link external:"google.type.LatLng"}
 *
 * @property {Object} maxLatLng
 *   Max lat/long pair.
 *
 *   This object should have the same structure as [google.type.LatLng]{@link external:"google.type.LatLng"}
 *
 * @class
 * @see [google.cloud.vision.v1.LatLongRect definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var LatLongRect = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Color information consists of RGB channels, score, and the fraction of
 * the image that the color occupies in the image.
 *
 * @property {Object} color
 *   RGB components of the color.
 *
 *   This object should have the same structure as [google.type.Color]{@link external:"google.type.Color"}
 *
 * @property {number} score
 *   Image-specific score for this color. Value in range [0, 1].
 *
 * @property {number} pixelFraction
 *   The fraction of pixels the color occupies in the image.
 *   Value in range [0, 1].
 *
 * @class
 * @see [google.cloud.vision.v1.ColorInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var ColorInfo = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of dominant colors and their corresponding scores.
 *
 * @property {Object[]} colors
 *   RGB color values with their score and pixel fraction.
 *
 *   This object should have the same structure as [ColorInfo]{@link ColorInfo}
 *
 * @class
 * @see [google.cloud.vision.v1.DominantColorsAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var DominantColorsAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stores image properties, such as dominant colors.
 *
 * @property {Object} dominantColors
 *   If present, dominant colors completed successfully.
 *
 *   This object should have the same structure as [DominantColorsAnnotation]{@link DominantColorsAnnotation}
 *
 * @class
 * @see [google.cloud.vision.v1.ImageProperties definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var ImageProperties = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Single crop hint that is used to generate a new crop when serving an image.
 *
 * @property {Object} boundingPoly
 *   The bounding polygon for the crop region. The coordinates of the bounding
 *   box are in the original image's scale, as returned in `ImageParams`.
 *
 *   This object should have the same structure as [BoundingPoly]{@link BoundingPoly}
 *
 * @property {number} confidence
 *   Confidence of this being a salient region.  Range [0, 1].
 *
 * @property {number} importanceFraction
 *   Fraction of importance of this salient region with respect to the original
 *   image.
 *
 * @class
 * @see [google.cloud.vision.v1.CropHint definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var CropHint = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Set of crop hints that are used to generate new crops when serving images.
 *
 * @property {Object[]} cropHints
 *   This object should have the same structure as [CropHint]{@link CropHint}
 *
 * @class
 * @see [google.cloud.vision.v1.CropHintsAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var CropHintsAnnotation = {
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
 * @class
 * @see [google.cloud.vision.v1.CropHintsParams definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var CropHintsParams = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Image context and/or feature-specific parameters.
 *
 * @property {Object} latLongRect
 *   lat/long rectangle that specifies the location of the image.
 *
 *   This object should have the same structure as [LatLongRect]{@link LatLongRect}
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
 *   This object should have the same structure as [CropHintsParams]{@link CropHintsParams}
 *
 * @class
 * @see [google.cloud.vision.v1.ImageContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var ImageContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for performing Google Cloud Vision API tasks over a user-provided
 * image, with user-requested features.
 *
 * @property {Object} image
 *   The image to be processed.
 *
 *   This object should have the same structure as [Image]{@link Image}
 *
 * @property {Object[]} features
 *   Requested features.
 *
 *   This object should have the same structure as [Feature]{@link Feature}
 *
 * @property {Object} imageContext
 *   Additional context that may accompany the image.
 *
 *   This object should have the same structure as [ImageContext]{@link ImageContext}
 *
 * @class
 * @see [google.cloud.vision.v1.AnnotateImageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var AnnotateImageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to an image annotation request.
 *
 * @property {Object[]} faceAnnotations
 *   If present, face detection has completed successfully.
 *
 *   This object should have the same structure as [FaceAnnotation]{@link FaceAnnotation}
 *
 * @property {Object[]} landmarkAnnotations
 *   If present, landmark detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link EntityAnnotation}
 *
 * @property {Object[]} logoAnnotations
 *   If present, logo detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link EntityAnnotation}
 *
 * @property {Object[]} labelAnnotations
 *   If present, label detection has completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link EntityAnnotation}
 *
 * @property {Object[]} textAnnotations
 *   If present, text (OCR) detection or document (OCR) text detection has
 *   completed successfully.
 *
 *   This object should have the same structure as [EntityAnnotation]{@link EntityAnnotation}
 *
 * @property {Object} fullTextAnnotation
 *   If present, text (OCR) detection or document (OCR) text detection has
 *   completed successfully.
 *   This annotation provides the structural hierarchy for the OCR detected
 *   text.
 *
 *   This object should have the same structure as [TextAnnotation]{@link TextAnnotation}
 *
 * @property {Object} safeSearchAnnotation
 *   If present, safe-search annotation has completed successfully.
 *
 *   This object should have the same structure as [SafeSearchAnnotation]{@link SafeSearchAnnotation}
 *
 * @property {Object} imagePropertiesAnnotation
 *   If present, image properties were extracted successfully.
 *
 *   This object should have the same structure as [ImageProperties]{@link ImageProperties}
 *
 * @property {Object} cropHintsAnnotation
 *   If present, crop hints have completed successfully.
 *
 *   This object should have the same structure as [CropHintsAnnotation]{@link CropHintsAnnotation}
 *
 * @property {Object} webDetection
 *   If present, web detection has completed successfully.
 *
 *   This object should have the same structure as [WebDetection]{@link WebDetection}
 *
 * @property {Object} error
 *   If set, represents the error message for the operation.
 *   Note that filled-in image annotations are guaranteed to be
 *   correct, even when `error` is set.
 *
 *   This object should have the same structure as [google.rpc.Status]{@link external:"google.rpc.Status"}
 *
 * @class
 * @see [google.cloud.vision.v1.AnnotateImageResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var AnnotateImageResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Multiple image annotation requests are batched into a single service call.
 *
 * @property {Object[]} requests
 *   Individual image annotation requests for this batch.
 *
 *   This object should have the same structure as [AnnotateImageRequest]{@link AnnotateImageRequest}
 *
 * @class
 * @see [google.cloud.vision.v1.BatchAnnotateImagesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var BatchAnnotateImagesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to a batch image annotation request.
 *
 * @property {Object[]} responses
 *   Individual responses to image annotation requests within the batch.
 *
 *   This object should have the same structure as [AnnotateImageResponse]{@link AnnotateImageResponse}
 *
 * @class
 * @see [google.cloud.vision.v1.BatchAnnotateImagesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/image_annotator.proto}
 */
var BatchAnnotateImagesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A bucketized representation of likelihood, which is intended to give clients
 * highly stable results across model upgrades.
 *
 * @enum {number}
 */
var Likelihood = {

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