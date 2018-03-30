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

'use strict';

const AlertPolicyServiceClient = require('./alert_policy_service_client');
const GroupServiceClient = require('./group_service_client');
const MetricServiceClient = require('./metric_service_client');
const NotificationChannelServiceClient = require('./notification_channel_service_client');
const UptimeCheckServiceClient = require('./uptime_check_service_client');

module.exports.AlertPolicyServiceClient = AlertPolicyServiceClient;
module.exports.GroupServiceClient = GroupServiceClient;
module.exports.MetricServiceClient = MetricServiceClient;
module.exports.NotificationChannelServiceClient = NotificationChannelServiceClient;
module.exports.UptimeCheckServiceClient = UptimeCheckServiceClient;
