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

import {expect, use} from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {AggregateField} from '../src/aggregate';

use(chaiAsPromised);

describe('aggregate field equality checks', () => {
  it('equates two equal aggregate fields', () => {
    expect(AggregateField.count().isEqual(AggregateField.count())).to.be.true;
    expect(AggregateField.sum('foo').isEqual(AggregateField.sum('foo'))).to.be
      .true;
    expect(AggregateField.average('bar').isEqual(AggregateField.average('bar')))
      .to.be.true;
    expect(AggregateField.sum('foo.bar').isEqual(AggregateField.sum('foo.bar')))
      .to.be.true;
    expect(
      AggregateField.average('bar.baz').isEqual(
        AggregateField.average('bar.baz'),
      ),
    ).to.be.true;
  });

  it('differentiates two different aggregate fields', () => {
    expect(AggregateField.sum('foo').isEqual(AggregateField.sum('bar'))).to.be
      .false;
    expect(AggregateField.average('foo').isEqual(AggregateField.average('bar')))
      .to.be.false;
    expect(AggregateField.average('foo').isEqual(AggregateField.sum('foo'))).to
      .be.false;
    expect(AggregateField.sum('foo').isEqual(AggregateField.average('foo'))).to
      .be.false;
  });
});
