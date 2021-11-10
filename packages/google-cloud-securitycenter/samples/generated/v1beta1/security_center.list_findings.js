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

function main(parent) {
  // [START securitycenter_v1beta1_generated_SecurityCenter_ListFindings_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the source the findings belong to. Its format is
   *  "organizations/[organization_id]/sources/[source_id]". To list across all
   *  sources provide a source_id of `-`. For example:
   *  organizations/{organization_id}/sources/-
   */
  // const parent = 'abc123'
  /**
   *  Expression that defines the filter to apply across findings.
   *  The expression is a list of one or more restrictions combined via logical
   *  operators `AND` and `OR`.
   *  Parentheses are not supported, and `OR` has higher precedence than `AND`.
   *  Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *  character in front of them to indicate negation. Examples include:
   *   * name
   *   * source_properties.a_property
   *   * security_marks.marks.marka
   *  The supported operators are:
   *  * `=` for all value types.
   *  * `>`, `<`, `>=`, `<=` for integer values.
   *  * `:`, meaning substring matching, for strings.
   *  The supported value types are:
   *  * string literals in quotes.
   *  * integer literals without quotes.
   *  * boolean literals `true` and `false` without quotes.
   *  For example, `source_properties.size = 100` is a valid filter string.
   */
  // const filter = 'abc123'
  /**
   *  Expression that defines what fields and order to use for sorting. The
   *  string value should follow SQL syntax: comma separated list of fields. For
   *  example: "name,resource_properties.a_property". The default sorting order
   *  is ascending. To specify descending order for a field, a suffix " desc"
   *  should be appended to the field name. For example: "name
   *  desc,source_properties.a_property". Redundant space characters in the
   *  syntax are insignificant. "name desc,source_properties.a_property" and "
   *  name     desc  ,   source_properties.a_property  " are equivalent.
   */
  // const orderBy = 'abc123'
  /**
   *  Time used as a reference point when filtering findings. The filter is
   *  limited to findings existing at the supplied time and their values are
   *  those at that specific time. Absence of this field will default to the
   *  API's version of NOW.
   */
  // const readTime = {}
  /**
   *  Optional. A field mask to specify the Finding fields to be listed in the response.
   *  An empty field mask will list all fields.
   */
  // const fieldMask = {}
  /**
   *  The value returned by the last `ListFindingsResponse`; indicates
   *  that this is a continuation of a prior `ListFindings` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234

  // Imports the Securitycenter library
  const {SecurityCenterClient} =
    require('@google-cloud/security-center').v1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callListFindings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await securitycenterClient.listFindingsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListFindings();
  // [END securitycenter_v1beta1_generated_SecurityCenter_ListFindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
