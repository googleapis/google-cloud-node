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

'use strict';

const AgentsClient = require('./agents_client');
const ContextsClient = require('./contexts_client');
const EntityTypesClient = require('./entity_types_client');
const IntentsClient = require('./intents_client');
const SessionEntityTypesClient = require('./session_entity_types_client');
const SessionsClient = require('./sessions_client');

module.exports.AgentsClient = AgentsClient;
module.exports.ContextsClient = ContextsClient;
module.exports.EntityTypesClient = EntityTypesClient;
module.exports.IntentsClient = IntentsClient;
module.exports.SessionEntityTypesClient = SessionEntityTypesClient;
module.exports.SessionsClient = SessionsClient;
