// Copyright 2020 Google LLC
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
 * An object representing a latitude/longitude pair. This is expressed as a pair
 * of doubles representing degrees latitude and degrees longitude. Unless
 * specified otherwise, this must conform to the
 * <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
 * standard</a>. Values must be within normalized ranges.
 *
 * @property {number} latitude
 *   The latitude in degrees. It must be in the range [-90.0, +90.0].
 *
 * @property {number} longitude
 *   The longitude in degrees. It must be in the range [-180.0, +180.0].
 *
 * @typedef LatLng
 * @memberof google.type
 * @see [google.type.LatLng definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/type/latlng.proto}
 */
const LatLng = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};