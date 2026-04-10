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

const value1 = 'Stephen';
const value2 = 'Stephen2';
const value3 = 'Stephen3';
const value4 = 'Stephen4';
const value5 = 'Stephen5';
const value6 = 'Stephen6';
const value7 = 'Stephen7';
const value8 = 'Stephen8';
const value9 = 'Stephen9';
const value10 = 'Stephen10';
const value11 = 'Stephen11';
const value12 = 'Stephen12';
const value13 = 'something';
const value14 = 'else';
const value15 = 'whatever';

const entityObject = {
  excludeFromIndexes: [
    'name',
    'entity.name',
    'array[]',
    'array[].name',
    'array[].entity.name',
    'array[].entity.array[].name',
    'array[].array[].entity.name',
    'entityExcluded[].name',
    'primitiveExcluded[]',
    'rules[].requirements[].audiences',
    'nestedArrayVariants[].a[].b',
    'alpha[]',
    'omega',
  ],

  data: {
    name: value1,

    entity: {
      name: value2,
    },

    entityExcluded: [
      value3,
      {
        name: value4,
      },
    ],

    primitiveExcluded: [
      value5,
      {
        name: value6,
      },
    ],

    array: [
      value7,
      {
        name: value8,
      },
      {
        entity: {
          name: value9,
          array: [
            {
              name: value10,
            },
          ],
        },
      },
      {
        array: [
          {
            entity: {
              name: value11,
            },
          },
        ],
      },
    ],

    rules: [
      {
        requirements: [
          {
            audiences: value12,
          },
        ],
      },
      {
        requirements: null,
      },
    ],

    nestedArrayVariants: [
      {
        a: [{b: value13}, {c: value14}],
      },
      {
        a: null,
      },
      {
        a: [value15],
      },
      {
        a: [{b: ['nasty', 'array']}],
      },
    ],

    alpha: ['beta', 'gamma'],

    omega: ['beta', 'gamma'],
  },
};

const expectedEntityProto = {
  key: null,
  properties: {
    name: {
      stringValue: value1,
      excludeFromIndexes: true,
    },
    entity: {
      entityValue: {
        properties: {
          name: {
            stringValue: value2,
            excludeFromIndexes: true,
          },
        },
      },
    },
    entityExcluded: {
      arrayValue: {
        values: [
          {
            stringValue: value3,
          },
          {
            entityValue: {
              properties: {
                name: {
                  stringValue: value4,
                  excludeFromIndexes: true,
                },
              },
            },
          },
        ],
      },
    },
    primitiveExcluded: {
      arrayValue: {
        values: [
          {
            stringValue: value5,
            excludeFromIndexes: true,
          },
          {
            entityValue: {
              properties: {
                name: {
                  stringValue: value6,
                },
              },
            },
            excludeFromIndexes: true,
          },
        ],
      },
    },
    array: {
      arrayValue: {
        values: [
          {
            stringValue: value7,
            excludeFromIndexes: true,
          },
          {
            entityValue: {
              properties: {
                name: {
                  stringValue: value8,
                  excludeFromIndexes: true,
                },
              },
            },
            excludeFromIndexes: true,
          },
          {
            entityValue: {
              properties: {
                entity: {
                  entityValue: {
                    properties: {
                      name: {
                        stringValue: value9,
                        excludeFromIndexes: true,
                      },
                      array: {
                        arrayValue: {
                          values: [
                            {
                              entityValue: {
                                properties: {
                                  name: {
                                    stringValue: value10,
                                    excludeFromIndexes: true,
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              },
            },
            excludeFromIndexes: true,
          },
          {
            entityValue: {
              properties: {
                array: {
                  arrayValue: {
                    values: [
                      {
                        entityValue: {
                          properties: {
                            entity: {
                              entityValue: {
                                properties: {
                                  name: {
                                    stringValue: value11,
                                    excludeFromIndexes: true,
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
            excludeFromIndexes: true,
          },
        ],
      },
    },
    rules: {
      arrayValue: {
        values: [
          {
            entityValue: {
              properties: {
                requirements: {
                  arrayValue: {
                    values: [
                      {
                        entityValue: {
                          properties: {
                            audiences: {
                              stringValue: value12,
                              excludeFromIndexes: true,
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            entityValue: {
              properties: {
                requirements: {
                  nullValue: 0,
                },
              },
            },
          },
        ],
      },
    },
    nestedArrayVariants: {
      arrayValue: {
        values: [
          {
            entityValue: {
              properties: {
                a: {
                  arrayValue: {
                    values: [
                      {
                        entityValue: {
                          properties: {
                            b: {
                              stringValue: value13,
                              excludeFromIndexes: true,
                            },
                          },
                        },
                      },
                      {
                        entityValue: {
                          properties: {
                            c: {
                              stringValue: value14,
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            entityValue: {
              properties: {
                a: {
                  nullValue: 0,
                },
              },
            },
          },
          {
            entityValue: {
              properties: {
                a: {
                  arrayValue: {
                    values: [
                      {
                        stringValue: value15,
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            entityValue: {
              properties: {
                a: {
                  arrayValue: {
                    values: [
                      {
                        entityValue: {
                          properties: {
                            b: {
                              // excludeFromIndexes:
                              // ['nestedArrayVariants[].a[].b'] does not
                              // apply here,
                              // To exclude this array (= all its
                              // elements), we would use
                              // ['nestedArrayVariants[].a[].b[]']
                              arrayValue: {
                                values: [
                                  {
                                    stringValue: 'nasty',
                                  },
                                  {
                                    stringValue: 'array',
                                  },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    },
    alpha: {
      // `excludeFromIndexes: ['alpha[]']` results in exclusion of all
      // array elements
      arrayValue: {
        values: [
          {
            excludeFromIndexes: true,
            stringValue: 'beta',
          },
          {
            excludeFromIndexes: true,
            stringValue: 'gamma',
          },
        ],
      },
    },
    omega: {
      // `excludeFromIndexes: ['omega']` is not applied, because 'omega'
      // is an array.
      arrayValue: {
        values: [
          {
            stringValue: 'beta',
          },
          {
            stringValue: 'gamma',
          },
        ],
      },
    },
  },
};

export {entityObject, expectedEntityProto};
