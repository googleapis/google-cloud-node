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

'use strict';

const ApplicationServiceClient = require('./application_service_client');
const CompanyServiceClient = require('./company_service_client');
const CompletionClient = require('./completion_client');
const EventServiceClient = require('./event_service_client');
const JobServiceClient = require('./job_service_client');
const ProfileServiceClient = require('./profile_service_client');
const TenantServiceClient = require('./tenant_service_client');

module.exports.ApplicationServiceClient = ApplicationServiceClient;
module.exports.CompanyServiceClient = CompanyServiceClient;
module.exports.CompletionClient = CompletionClient;
module.exports.EventServiceClient = EventServiceClient;
module.exports.JobServiceClient = JobServiceClient;
module.exports.ProfileServiceClient = ProfileServiceClient;
module.exports.TenantServiceClient = TenantServiceClient;
