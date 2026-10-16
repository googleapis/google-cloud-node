// Copyright 2023 Google LLC
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

import {expect} from 'vitest';
import {AggregateField} from '../src/aggregate';

describe('aggregate field equality checks', () => {
  it('equates two equal aggregate fields', () => {
    expect(AggregateField.count().isEqual(AggregateField.count())).toBe(true);
    expect(AggregateField.sum('foo').isEqual(AggregateField.sum('foo'))).toBe(
      true,
    );
    expect(
      AggregateField.average('bar').isEqual(AggregateField.average('bar')),
    ).toBe(true);
    expect(
      AggregateField.sum('foo.bar').isEqual(AggregateField.sum('foo.bar')),
    ).toBe(true);
    expect(
      AggregateField.average('bar.baz').isEqual(
        AggregateField.average('bar.baz'),
      ),
    ).toBe(true);
  });

  it('differentiates two different aggregate fields', () => {
    expect(AggregateField.sum('foo').isEqual(AggregateField.sum('bar'))).toBe(
      false,
    );
    expect(
      AggregateField.average('foo').isEqual(AggregateField.average('bar')),
    ).toBe(false);
    expect(
      AggregateField.average('foo').isEqual(AggregateField.sum('foo')),
    ).toBe(false);
    expect(
      AggregateField.sum('foo').isEqual(AggregateField.average('foo')),
    ).toBe(false);
  });
});
