// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe} from 'mocha';
import {Entities} from '../../src/entity';
import * as assert from 'assert';
import {extendExcludeFromIndexes} from '../../src/utils/entity/extendExcludeFromIndexes';

const async = require('async');

describe('extendExcludeFromIndexes', () => {
  const longString = Buffer.alloc(1501, '.').toString();
  // complexCaseEntities are passed into save for the complex case.
  const complexCaseEntities = {
    longString,
    notMetadata: true,
    longStringArray: [longString],
    metadata: {
      longString,
      otherProperty: 'value',
      obj: {
        longStringArray: [
          {
            longString,
            nestedLongStringArray: [
              {
                longString,
                nestedProperty: true,
              },
              {
                longString,
              },
            ],
          },
        ],
      },
      longStringArray: [
        {
          longString,
          nestedLongStringArray: [
            {
              longString,
              nestedProperty: true,
            },
            {
              longString,
            },
          ],
        },
      ],
    },
  };
  async.each(
    [
      {
        name: 'For a simple case involving a name/value pair',
        entities: {
          name: 'firstElementName',
          value: longString,
        },
        skipped: false,
        expectedOutput: ['value'],
      },
      {
        name: 'For a simple case involving a name/value pair in an array',
        entities: [
          {
            name: 'firstElementName',
            value: longString,
          },
        ],
        skipped: false,
        expectedOutput: ['firstElementName'],
      },
      {
        name: 'For a complex case involving lots of entities',
        entities: complexCaseEntities,
        skipped: false,
        expectedOutput: [
          'longString',
          'longStringArray[]',
          'metadata.longString',
          'metadata.obj.longStringArray[].longString',
          'metadata.obj.longStringArray[].nestedLongStringArray[].longString',
          'metadata.longStringArray[].longString',
          'metadata.longStringArray[].nestedLongStringArray[].longString',
        ],
      },
      {
        name: 'For a complex case involving a name/value pair',
        entities: {
          name: 'firstElementName',
          value: complexCaseEntities,
        },
        skipped: false,
        expectedOutput: [
          'value.longString',
          'value.longStringArray[]',
          'value.metadata.longString',
          'value.metadata.obj.longStringArray[].longString',
          'value.metadata.obj.longStringArray[].nestedLongStringArray[].longString',
          'value.metadata.longStringArray[].longString',
          'value.metadata.longStringArray[].nestedLongStringArray[].longString',
        ],
      },
      {
        name: 'For a complex case involving and array and name/value',
        entities: [
          {
            name: 'firstElementName',
            value: complexCaseEntities,
          },
        ],
        skipped: false,
        expectedOutput: [
          'firstElementName.longString',
          'firstElementName.longStringArray[]',
          'firstElementName.metadata.longString',
          'firstElementName.metadata.obj.longStringArray[].longString',
          'firstElementName.metadata.obj.longStringArray[].nestedLongStringArray[].longString',
          'firstElementName.metadata.longStringArray[].longString',
          'firstElementName.metadata.longStringArray[].nestedLongStringArray[].longString',
        ],
      },
      {
        name: 'For some nested properties that happen to be called value and name',
        entities: {
          metadata: [
            {
              name: longString,
              value: 'some-value',
            },
          ],
        },
        skipped: false,
        expectedOutput: ['metadata[].name'],
      },
    ],
    (test: {
      name: string;
      entities: Entities;
      expectedOutput: string[];
      skipped: boolean;
    }) => {
      it(test.name, function () {
        if (test.skipped) {
          this.skip();
        }
        const entityObject = {
          data: test.entities,
          excludeLargeProperties: true,
          excludeFromIndexes: [],
        };
        extendExcludeFromIndexes(entityObject);
        assert.deepStrictEqual(
          entityObject.excludeFromIndexes,
          test.expectedOutput,
        );
      });
    },
  );
});
