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
 * Represents an amount of money with its currency type.
 *
 * @property {string} currencyCode
 *   The 3-letter currency code defined in ISO 4217.
 *
 * @property {number} units
 *   The whole units of the amount.
 *   For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
 *
 * @property {number} nanos
 *   Number of nano (10^-9) units of the amount.
 *   The value must be between -999,999,999 and +999,999,999 inclusive.
 *   If `units` is positive, `nanos` must be positive or zero.
 *   If `units` is zero, `nanos` can be positive, zero, or negative.
 *   If `units` is negative, `nanos` must be negative or zero.
 *   For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
 *
 * @typedef Money
 * @memberof google.type
 * @see [google.type.Money definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/type/money.proto}
 */
const Money = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};