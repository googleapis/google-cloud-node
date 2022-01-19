// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, groupBy) {
  // [START securitycenter_v1beta1_generated_SecurityCenter_GroupAssets_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the organization to groupBy. Its format is
   *  "organizations/[organization_id]".
   */
  // const parent = 'abc123'
  /**
   *  Expression that defines the filter to apply across assets.
   *  The expression is a list of zero or more restrictions combined via logical
   *  operators `AND` and `OR`.
   *  Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *  Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *  character in front of them to indicate negation. The fields map to those
   *  defined in the Asset resource. Examples include:
   *  * name
   *  * security_center_properties.resource_name
   *  * resource_properties.a_property
   *  * security_marks.marks.marka
   *  The supported operators are:
   *  * `=` for all value types.
   *  * `>`, `<`, `>=`, `<=` for integer values.
   *  * `:`, meaning substring matching, for strings.
   *  The supported value types are:
   *  * string literals in quotes.
   *  * integer literals without quotes.
   *  * boolean literals `true` and `false` without quotes.
   *  For example, `resource_properties.size = 100` is a valid filter string.
   */
  // const filter = 'abc123'
  /**
   *  Required. Expression that defines what assets fields to use for grouping. The string
   *  value should follow SQL syntax: comma separated list of fields. For
   *  example:
   *  "security_center_properties.resource_project,security_center_properties.project".
   *  The following fields are supported when compare_duration is not set:
   *  * security_center_properties.resource_project
   *  * security_center_properties.resource_type
   *  * security_center_properties.resource_parent
   *  The following fields are supported when compare_duration is set:
   *  * security_center_properties.resource_type
   */
  // const groupBy = 'abc123'
  /**
   *  When compare_duration is set, the Asset's "state" property is updated to
   *  indicate whether the asset was added, removed, or remained present during
   *  the compare_duration period of time that precedes the read_time. This is
   *  the time between (read_time - compare_duration) and read_time.
   *  The state value is derived based on the presence of the asset at the two
   *  points in time. Intermediate state changes between the two times don't
   *  affect the result. For example, the results aren't affected if the asset is
   *  removed and re-created again.
   *  Possible "state" values when compare_duration is specified:
   *  * "ADDED": indicates that the asset was not present before
   *               compare_duration, but present at reference_time.
   *  * "REMOVED": indicates that the asset was present at the start of
   *               compare_duration, but not present at reference_time.
   *  * "ACTIVE": indicates that the asset was present at both the
   *               start and the end of the time period defined by
   *               compare_duration and reference_time.
   *  This field is ignored if `state` is not a field in `group_by`.
   */
  // const compareDuration = {}
  /**
   *  Time used as a reference point when filtering assets. The filter is limited
   *  to assets existing at the supplied time and their values are those at that
   *  specific time. Absence of this field will default to the API's version of
   *  NOW.
   */
  // const readTime = {}
  /**
   *  The value returned by the last `GroupAssetsResponse`; indicates
   *  that this is a continuation of a prior `GroupAssets` call, and that the
   *  system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callGroupAssets() {
    // Construct request
    const request = {
      parent,
      groupBy,
    };

    // Run request
    const iterable = await securitycenterClient.groupAssetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callGroupAssets();
  // [END securitycenter_v1beta1_generated_SecurityCenter_GroupAssets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
