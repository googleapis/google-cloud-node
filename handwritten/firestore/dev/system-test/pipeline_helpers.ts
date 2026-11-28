// Copyright 2026 Google LLC
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

import {DocumentData} from '@google-cloud/firestore';
import {expect} from 'chai';

import {PipelineSnapshot} from '../src/pipelines';

export function expectResults(
  result: PipelineSnapshot,
  ...docs: string[]
): void;
export function expectResults(
  result: PipelineSnapshot,
  ...data: DocumentData[]
): void;
export function expectResults(
  result: PipelineSnapshot,
  ...data: DocumentData[] | string[]
): void {
  expect(result.results.length).to.equal(data.length);
  if (data.length > 0) {
    if (typeof data[0] === 'string') {
      const actualIds = result.results.map(r => r.id);
      expect(actualIds).to.deep.equal(data);
    } else {
      result.results.forEach(r => {
        expect(r.data()).to.deep.equal(data.shift());
      });
    }
  }
}
