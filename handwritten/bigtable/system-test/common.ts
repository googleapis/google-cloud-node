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

import * as uuid from 'uuid';
import {Cluster} from '../src/cluster';
import * as inst from '../src/instance';

export const PREFIX = 'gt-';

export function generateId(resourceType: string) {
  const newUuid = uuid.v1().substr(4, 4);
  return `${PREFIX}${resourceType}-${newUuid}-${Date.now()}`;
}

export class FakeCluster extends Cluster {
  calledWith_: Array<{}>;
  constructor(...args: [inst.Instance, string]) {
    super(args[0], args[1]);
    this.calledWith_ = args;
  }
}
