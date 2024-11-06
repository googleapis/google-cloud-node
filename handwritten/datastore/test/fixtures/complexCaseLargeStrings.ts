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

// complexCaseEntities are passed into save for the complex case.
const longString = Buffer.alloc(1501, '.').toString();
export const complexCaseEntities = {
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
