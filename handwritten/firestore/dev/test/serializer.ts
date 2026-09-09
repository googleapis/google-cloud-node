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

import {it} from 'mocha';
import {expect} from 'chai';
import * as sinon from 'sinon';
import {
  validateUserInput,
  Serializer,
  isTemporalInstant,
} from '../src/serializer';
import {DocumentReference, Firestore} from '../src';
import {SinonStubbedInstance} from 'sinon';

describe('validateUserInput', () => {
  it('validates the depth of nested objects and arrays - 20', () => {
    // This nested object is 20 levels deep
    const nestedObject = {
      // depth 0
      links: [
        // depth 1
        {
          // depth 2
          child: {
            // depth 3
            links: [
              // depth 4
              {
                // depth 5
                child: {
                  // depth 6
                  links: [
                    // depth 7
                    {
                      // depth 8
                      child: {
                        // depth 9
                        links: [
                          // depth 10
                          {
                            // depth 11
                            child: {
                              // depth 12
                              links: [
                                // depth 13
                                {
                                  // depth 14
                                  child: {
                                    // depth 15
                                    links: [
                                      // depth 16
                                      {
                                        // depth 17
                                        child: {
                                          // depth 18
                                          uiData: {
                                            // depth 19
                                            choicesFactors: {
                                              // depth 20
                                              rarely: 1,
                                            },
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    };

    validateUserInput('nestedObject', nestedObject, 'Firestore Object', {
      allowDeletes: 'none',
      allowTransforms: false,
      allowUndefined: false,
    });
  });

  it('validates the depth of nested objects and arrays - 21', () => {
    // This nested object is 21 levels deep
    const nestedObject = {
      // depth 0
      links: [
        // depth 1
        {
          // depth 2
          child: {
            // depth 3
            links: [
              // depth 4
              {
                // depth 5
                child: {
                  // depth 6
                  links: [
                    // depth 7
                    {
                      // depth 8
                      child: {
                        // depth 9
                        links: [
                          // depth 10
                          {
                            // depth 11
                            child: {
                              // depth 12
                              links: [
                                // depth 13
                                {
                                  // depth 14
                                  child: {
                                    // depth 15
                                    links: [
                                      // depth 16
                                      {
                                        // depth 17
                                        child: {
                                          // depth 18
                                          uiData: {
                                            // depth 19
                                            choicesFactors: {
                                              // depth 20
                                              rarely: {
                                                // depth 21
                                                cat: true,
                                              },
                                            },
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    };

    expect(() =>
      validateUserInput('nestedObject', nestedObject, 'Firestore Object', {
        allowDeletes: 'none',
        allowTransforms: false,
        allowUndefined: false,
      }),
    ).to.throw(/Input object is deeper than 20 levels/i);
  });

  it('validates the depth of nested objects - 20', () => {
    // This nested object is 20 levels deep
    const nestedObject = {
      a: {
        b: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: {
                          k: {
                            l: {m: {n: {o: {p: {q: {r: {s: {t: {u: 1}}}}}}}}},
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    validateUserInput('nestedObject', nestedObject, 'Firestore Object', {
      allowDeletes: 'none',
      allowTransforms: false,
      allowUndefined: false,
    });
  });

  it('validates the depth of nested objects and arrays - 21', () => {
    // This nested object is 21 levels deep
    const nestedObject = {
      a: {
        b: {
          c: {
            d: {
              e: {
                f: {
                  g: {
                    h: {
                      i: {
                        j: {
                          k: {
                            l: {
                              m: {n: {o: {p: {q: {r: {s: {t: {u: {v: 1}}}}}}}}},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(() =>
      validateUserInput('nestedObject', nestedObject, 'Firestore Object', {
        allowDeletes: 'none',
        allowTransforms: false,
        allowUndefined: false,
      }),
    ).to.throw(/Input object is deeper than 20 levels/i);
  });

  it('accepts Temporal.Instant', () => {
    const Temporal =
      (globalThis as Record<string, unknown>).Temporal ||
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('@js-temporal/polyfill').Temporal;
    const instant = Temporal.Instant.fromEpochNanoseconds(1488872578916123456n);
    validateUserInput('instant', instant, 'Firestore Value', {
      allowDeletes: 'none',
      allowTransforms: false,
      allowUndefined: false,
    });
    validateUserInput(
      'nested',
      {createdAt: instant, list: [instant]},
      'Firestore Value',
      {
        allowDeletes: 'none',
        allowTransforms: false,
        allowUndefined: false,
      },
    );
  });
});

describe('serializer', () => {
  const PROJECT_ID = 'test-project';
  const DATABASE_ROOT = `projects/${PROJECT_ID}/databases/(default)`;

  let serializer: Serializer | undefined;
  let firestoreStub: SinonStubbedInstance<Firestore> | undefined;

  const mockResult = {};

  beforeEach(() => {
    firestoreStub = sinon.stub({
      doc: (_: string) => {
        return mockResult;
      },
      _settings: {},
    } as Firestore);
    firestoreStub.doc.returns(mockResult as DocumentReference);

    serializer = new Serializer(firestoreStub);
  });

  describe('encodeValue', () => {
    it('encodes Temporal.Instant with nanosecond precision', () => {
      const Temporal =
        (globalThis as Record<string, unknown>).Temporal ||
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@js-temporal/polyfill').Temporal;
      const instant =
        Temporal.Instant.fromEpochNanoseconds(1488872578916123456n);
      const encoded = serializer!.encodeValue(instant);
      expect(encoded).to.deep.equal({
        timestampValue: {
          seconds: '1488872578',
          nanos: 916123456,
        },
      });
    });

    it('encodes negative Temporal.Instant', () => {
      const Temporal =
        (globalThis as Record<string, unknown>).Temporal ||
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@js-temporal/polyfill').Temporal;
      // -1.25 seconds with 123 nanoseconds: -1249999877n
      // seconds: -2, nanos: 750000123
      const instant = Temporal.Instant.fromEpochNanoseconds(-1249999877n);
      const encoded = serializer!.encodeValue(instant);
      expect(encoded).to.deep.equal({
        timestampValue: {
          seconds: '-2',
          nanos: 750000123,
        },
      });
    });
  });

  describe('isTemporalInstant', () => {
    it('identifies Temporal.Instant objects', () => {
      const Temporal =
        (globalThis as Record<string, unknown>).Temporal ||
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@js-temporal/polyfill').Temporal;
      const instant = Temporal.Instant.fromEpochNanoseconds(1000n);
      expect(isTemporalInstant(instant)).to.be.true;

      // duck typed object
      const duckInstant = {
        [Symbol.toStringTag]: 'Temporal.Instant',
        epochNanoseconds: 1000n,
      };
      expect(isTemporalInstant(duckInstant)).to.be.true;

      expect(isTemporalInstant(null)).to.be.false;
      expect(isTemporalInstant(undefined)).to.be.false;
      expect(isTemporalInstant({})).to.be.false;
      expect(isTemporalInstant(new Date())).to.be.false;
      expect(isTemporalInstant('string')).to.be.false;
      expect(isTemporalInstant(123)).to.be.false;
    });
  });

  describe('decodeValue', () => {
    it('decodes reference to document', () => {
      const result = serializer!.decodeValue({
        referenceValue: `${DATABASE_ROOT}/documents/foo/bar`,
      }) as DocumentReference;

      expect(result).to.equal(mockResult);
      expect(firestoreStub!.doc.calledOnceWith('foo/bar')).to.be.true;
    });

    it('throws when given a reference to collection', () => {
      expect(() => {
        serializer!.decodeValue({
          referenceValue: `${DATABASE_ROOT}/documents/foo`,
        }) as DocumentReference;
      }).to.throw(
        'The SDK does not currently support decoding referenceValues for collections or partitions.',
      );
    });

    it('throws when given a reference to db root', () => {
      expect(() => {
        serializer!.decodeValue({
          referenceValue: `${DATABASE_ROOT}/documents`,
        }) as DocumentReference;
      }).to.throw(
        'The SDK does not currently support decoding referenceValues for collections or partitions.',
      );
    });
  });
});
