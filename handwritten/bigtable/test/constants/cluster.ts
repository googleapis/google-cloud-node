// Copyright 2022 Google LLC
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

import {CreateClusterOptions} from '../../src';

export const createClusterOptionsList: CreateClusterOptions[] = [
  {nodes: 2},
  {nodes: 2, storage: 'ssd'},
  {nodes: 2, key: 'kms-key-name'},
  {nodes: 2, encryption: {kmsKeyName: 'kms-key-name'}},
  {
    minServeNodes: 2,
    maxServeNodes: 3,
    cpuUtilizationPercent: 50,
  },
].map(option => Object.assign(option, {location: 'us-central2-d'}));
