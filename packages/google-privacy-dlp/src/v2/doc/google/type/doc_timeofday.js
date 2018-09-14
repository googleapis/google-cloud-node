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
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may chose to allow leap seconds. Related
 * types are google.type.Date and `google.protobuf.Timestamp`.
 *
 * @property {number} hours
 *   Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
 *   to allow the value "24:00:00" for scenarios like business closing time.
 *
 * @property {number} minutes
 *   Minutes of hour of day. Must be from 0 to 59.
 *
 * @property {number} seconds
 *   Seconds of minutes of the time. Must normally be from 0 to 59. An API may
 *   allow the value 60 if it allows leap-seconds.
 *
 * @property {number} nanos
 *   Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
 *
 * @typedef TimeOfDay
 * @memberof google.type
 * @see [google.type.TimeOfDay definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/type/timeofday.proto}
 */
const TimeOfDay = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};