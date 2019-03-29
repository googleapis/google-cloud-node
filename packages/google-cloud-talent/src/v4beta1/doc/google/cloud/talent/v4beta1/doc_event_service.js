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
 * The report event request.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the tenant under which the event is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and a default tenant is created if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {Object} clientEvent
 *   Required.
 *
 *   Events issued when end user interacts with customer's application that
 *   uses Cloud Talent Solution.
 *
 *   This object should have the same structure as [ClientEvent]{@link google.cloud.talent.v4beta1.ClientEvent}
 *
 * @typedef CreateClientEventRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateClientEventRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/event_service.proto}
 */
const CreateClientEventRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};