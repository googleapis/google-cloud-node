/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {expect} from 'chai';
import * as sinon from 'sinon';

import {Pipelines} from '../../src';
import {createInstance, stream} from '../util/helpers';

const FIRST_CALL = 0;
const EXECUTE_PIPELINE_REQUEST = 0;

const {
  arrayAgg,
  arrayAggDistinct,
  ascending,
  average,
  constant,
  count,
  countAll,
  countDistinct,
  countIf,
  descending,
  field,
  first,
  last,
  maximum,
  minimum,
  rank,
  sum,
  toLower,
} = Pipelines;

describe('addWindowFields() serialization', () => {
  describe('stage shape', () => {
    it('uses the add_window_fields stage name and 2 args', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({partition: ['product']}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].name).to.equal('add_window_fields');
      expect(stages[1].args).to.have.lengthOf(2);
    });

    it('does not send any stage options', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({partition: ['product']}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].options).to.deep.equal({});
    });
  });

  describe('window_spec', () => {
    it('serializes an empty window spec as an empty map', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({mapValue: {fields: {}}});
    });

    it('serializes a partition of field name strings', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({partition: ['product', 'region']}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            partition: {
              arrayValue: {
                values: [
                  {fieldReferenceValue: 'product'},
                  {fieldReferenceValue: 'region'},
                ],
              },
            },
          },
        },
      });
    });

    it('serializes a partition of expressions', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: [field('product'), toLower('region')]},
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            partition: {
              arrayValue: {
                values: [
                  {fieldReferenceValue: 'product'},
                  {
                    functionValue: {
                      name: 'to_lower',
                      args: [{fieldReferenceValue: 'region'}],
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('serializes a nested field path partition', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({partition: ['metadata.region']}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            partition: {
              arrayValue: {values: [{fieldReferenceValue: 'metadata.region'}]},
            },
          },
        },
      });
    });

    it('serializes a single (non array) sort ordering', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({sort: ascending('date')}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('serializes multiple sort orderings with mixed directions', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {sort: [ascending('date'), descending('salesPrice')]},
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'descending'},
                        expression: {fieldReferenceValue: 'salesPrice'},
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('serializes partition and sort together', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product'], sort: ascending('date')},
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            partition: {
              arrayValue: {values: [{fieldReferenceValue: 'product'}]},
            },
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('omits an empty partition array', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: [], sort: ascending('date')},
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('omits an empty sort array', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({partition: ['product'], sort: []}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            partition: {
              arrayValue: {values: [{fieldReferenceValue: 'product'}]},
            },
          },
        },
      });
    });

    it('omits the frame when using default framing', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({sort: ascending('date')}, countAll().as('c'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      const spec = stages[1].args![0];

      expect(spec.mapValue!.fields).to.not.have.property('documents');
      expect(spec.mapValue!.fields).to.not.have.property('range');
    });
  });

  describe('stage level documents framing', () => {
    it('serializes numeric offsets as integers', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            documents: {preceding: 2, following: 1},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            documents: {
              mapValue: {
                fields: {
                  preceding: {integerValue: 2},
                  following: {integerValue: 1},
                },
              },
            },
          },
        },
      });
    });

    it('serializes zero offsets', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            documents: {preceding: 0, following: 0},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            documents: {
              mapValue: {
                fields: {
                  preceding: {integerValue: 0},
                  following: {integerValue: 0},
                },
              },
            },
          },
        },
      });
    });

    it('serializes negative offsets (look ahead windows)', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            documents: {preceding: -1, following: 2},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            documents: {
              mapValue: {
                fields: {
                  preceding: {integerValue: -1},
                  following: {integerValue: 2},
                },
              },
            },
          },
        },
      });
    });

    it("serializes the 'unbounded' and 'current' sentinels", async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            documents: {preceding: 'unbounded', following: 'current'},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            documents: {
              mapValue: {
                fields: {
                  preceding: {stringValue: 'unbounded'},
                  following: {stringValue: 'current'},
                },
              },
            },
          },
        },
      });
    });

    it('serializes an unbounded to unbounded frame', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {documents: {preceding: 'unbounded', following: 'unbounded'}},
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            documents: {
              mapValue: {
                fields: {
                  preceding: {stringValue: 'unbounded'},
                  following: {stringValue: 'unbounded'},
                },
              },
            },
          },
        },
      });
    });

    it('serializes constant expression bounds', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            documents: {preceding: constant(3), following: constant(0)},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            documents: {
              mapValue: {
                fields: {
                  preceding: {integerValue: 3},
                  following: {integerValue: 0},
                },
              },
            },
          },
        },
      });
    });
  });

  describe('stage level range framing', () => {
    it('serializes numeric range offsets', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('salesPrice'),
            range: {preceding: 10, following: 10},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'salesPrice'},
                      },
                    },
                  },
                ],
              },
            },
            range: {
              mapValue: {
                fields: {
                  preceding: {integerValue: 10},
                  following: {integerValue: 10},
                },
              },
            },
          },
        },
      });
    });

    it('serializes fractional range offsets as doubles', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('salesPrice'),
            range: {preceding: 2.5, following: 0},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'salesPrice'},
                      },
                    },
                  },
                ],
              },
            },
            range: {
              mapValue: {
                fields: {
                  preceding: {doubleValue: 2.5},
                  following: {integerValue: 0},
                },
              },
            },
          },
        },
      });
    });

    it("serializes a range frame with a 'day' time unit", async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('date'),
            range: {preceding: 30, following: 'current', unit: 'day'},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![0]).to.deep.equal({
        mapValue: {
          fields: {
            sort: {
              arrayValue: {
                values: [
                  {
                    mapValue: {
                      fields: {
                        direction: {stringValue: 'ascending'},
                        expression: {fieldReferenceValue: 'date'},
                      },
                    },
                  },
                ],
              },
            },
            range: {
              mapValue: {
                fields: {
                  preceding: {integerValue: 30},
                  following: {stringValue: 'current'},
                  unit: {stringValue: 'day'},
                },
              },
            },
          },
        },
      });
    });

    for (const unit of [
      'microsecond',
      'millisecond',
      'second',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'quarter',
      'year',
    ] as const) {
      it(`serializes the '${unit}' time unit`, async () => {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        await firestore
          .pipeline()
          .collection('sales')
          .addWindowFields(
            {
              sort: ascending('date'),
              range: {preceding: 1, following: 'current', unit},
            },
            countAll().as('c'),
          )
          .execute();
        const stages =
          spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
            'pipeline'
          ]['stages'];
        const spec = stages[1].args![0];

        expect(spec.mapValue!.fields!.range).to.deep.equal({
          mapValue: {
            fields: {
              preceding: {integerValue: 1},
              following: {stringValue: 'current'},
              unit: {stringValue: unit},
            },
          },
        });
      });
    }

    it("omits 'unit' when it is not specified", async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            sort: ascending('salesPrice'),
            range: {preceding: 'unbounded', following: 'current'},
          },
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      const spec = stages[1].args![0];

      expect(spec.mapValue!.fields!.range).to.deep.equal({
        mapValue: {
          fields: {
            preceding: {stringValue: 'unbounded'},
            following: {stringValue: 'current'},
          },
        },
      });
    });
  });

  describe('fields', () => {
    it('maps each alias to its aggregate function', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product']},
          sum('salesPrice').as('total'),
          countAll().as('c'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            total: {
              functionValue: {
                name: 'sum',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            c: {functionValue: {name: 'count', args: []}},
          },
        },
      });
    });

    it('supports nested output field paths', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product']},
          sum('salesPrice').as('stats.total'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            'stats.total': {
              functionValue: {
                name: 'sum',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
          },
        },
      });
    });

    it('serializes all supported aggregate function names', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product']},
          countAll().as('countAll'),
          count('salesPrice').as('count'),
          countIf(field('salesPrice').greaterThan(10)).as('countIf'),
          countDistinct('salesPrice').as('countDistinct'),
          sum('salesPrice').as('sum'),
          average('salesPrice').as('average'),
          minimum('salesPrice').as('minimum'),
          maximum('salesPrice').as('maximum'),
          first('salesPrice').as('first'),
          last('salesPrice').as('last'),
          arrayAgg('salesPrice').as('arrayAgg'),
          arrayAggDistinct('salesPrice').as('arrayAggDistinct'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            countAll: {functionValue: {name: 'count', args: []}},
            count: {
              functionValue: {
                name: 'count',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            countIf: {
              functionValue: {
                name: 'count_if',
                args: [
                  {
                    functionValue: {
                      name: 'greater_than',
                      args: [
                        {fieldReferenceValue: 'salesPrice'},
                        {integerValue: 10},
                      ],
                    },
                  },
                ],
              },
            },
            countDistinct: {
              functionValue: {
                name: 'count_distinct',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            sum: {
              functionValue: {
                name: 'sum',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            average: {
              functionValue: {
                name: 'average',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            minimum: {
              functionValue: {
                name: 'minimum',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            maximum: {
              functionValue: {
                name: 'maximum',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            first: {
              functionValue: {
                name: 'first',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            last: {
              functionValue: {
                name: 'last',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            arrayAgg: {
              functionValue: {
                name: 'array_agg',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
            arrayAggDistinct: {
              functionValue: {
                name: 'array_agg_distinct',
                args: [{fieldReferenceValue: 'salesPrice'}],
              },
            },
          },
        },
      });
    });

    it('serializes aggregates over computed expressions', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product']},
          sum(field('salesPrice').multiply(2)).as('doubled'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            doubled: {
              functionValue: {
                name: 'sum',
                args: [
                  {
                    functionValue: {
                      name: 'multiply',
                      args: [
                        {fieldReferenceValue: 'salesPrice'},
                        {integerValue: 2},
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      });
    });

    it('serializes the rank window function', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({sort: descending('salesPrice')}, rank().as('rank'))
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {fields: {rank: {functionValue: {name: 'rank', args: []}}}},
      });
    });

    it('rejects duplicate aliases', async () => {
      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields(
              {partition: ['product']},
              sum('salesPrice').as('total'),
              average('salesPrice').as('total'),
            )
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(/Duplicate alias or field 'total'/);
      }
    });
  });

  describe('accumulator level framing (over)', () => {
    it("wraps an aggregate in over() with a 'documents' frame", async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {sort: ascending('date')},
          average('salesPrice')
            .over({documents: {preceding: 1, following: 1}})
            .as('movingAverage'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            movingAverage: {
              functionValue: {
                name: 'over',
                args: [
                  {
                    functionValue: {
                      name: 'average',
                      args: [{fieldReferenceValue: 'salesPrice'}],
                    },
                  },
                  {
                    mapValue: {
                      fields: {
                        documents: {
                          mapValue: {
                            fields: {
                              preceding: {integerValue: 1},
                              following: {integerValue: 1},
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
      });
    });

    it("wraps an aggregate in over() with a 'range' frame and time unit", async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {sort: ascending('date')},
          sum('salesPrice')
            .over({
              range: {preceding: 10, following: 0, unit: 'day'},
            })
            .as('tenDayTotal'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            tenDayTotal: {
              functionValue: {
                name: 'over',
                args: [
                  {
                    functionValue: {
                      name: 'sum',
                      args: [{fieldReferenceValue: 'salesPrice'}],
                    },
                  },
                  {
                    mapValue: {
                      fields: {
                        range: {
                          mapValue: {
                            fields: {
                              preceding: {integerValue: 10},
                              following: {integerValue: 0},
                              unit: {stringValue: 'day'},
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
      });
    });

    it('supports different frames for different accumulators', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {partition: ['product'], sort: ascending('date')},
          sum('salesPrice')
            .over({
              documents: {preceding: 'unbounded', following: 'current'},
            })
            .as('runningTotal'),
          average('salesPrice')
            .over({documents: {preceding: 1, following: 1}})
            .as('movingAverage'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            runningTotal: {
              functionValue: {
                name: 'over',
                args: [
                  {
                    functionValue: {
                      name: 'sum',
                      args: [{fieldReferenceValue: 'salesPrice'}],
                    },
                  },
                  {
                    mapValue: {
                      fields: {
                        documents: {
                          mapValue: {
                            fields: {
                              preceding: {stringValue: 'unbounded'},
                              following: {stringValue: 'current'},
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            movingAverage: {
              functionValue: {
                name: 'over',
                args: [
                  {
                    functionValue: {
                      name: 'average',
                      args: [{fieldReferenceValue: 'salesPrice'}],
                    },
                  },
                  {
                    mapValue: {
                      fields: {
                        documents: {
                          mapValue: {
                            fields: {
                              preceding: {integerValue: 1},
                              following: {integerValue: 1},
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
      });
    });

    it('supports over() on a ranking window function', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {sort: ascending('date')},
          rank()
            .over({
              documents: {preceding: 'unbounded', following: 'current'},
            })
            .as('r'),
        )
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];
      expect(stages[1].args![1]).to.deep.equal({
        mapValue: {
          fields: {
            r: {
              functionValue: {
                name: 'over',
                args: [
                  {functionValue: {name: 'rank', args: []}},
                  {
                    mapValue: {
                      fields: {
                        documents: {
                          mapValue: {
                            fields: {
                              preceding: {stringValue: 'unbounded'},
                              following: {stringValue: 'current'},
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
      });
    });
  });

  describe('options overload', () => {
    it('produces the same proto as the varargs overload', async () => {
      const spy1 = sinon.fake.returns(stream());
      const firestore1 = await createInstance({executePipeline: spy1});
      await firestore1
        .pipeline()
        .collection('sales')
        .addWindowFields(
          {
            partition: ['product'],
            sort: ascending('date'),
            documents: {preceding: 1, following: 1},
          },
          average('salesPrice').as('movingAverage'),
          countAll().as('windowCount'),
        )
        .execute();
      const varargs =
        spy1.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'][1];

      const spy2 = sinon.fake.returns(stream());
      const firestore2 = await createInstance({executePipeline: spy2});
      await firestore2
        .pipeline()
        .collection('sales')
        .addWindowFields({
          window: {
            partition: ['product'],
            sort: ascending('date'),
            documents: {preceding: 1, following: 1},
          },
          fields: [
            average('salesPrice').as('movingAverage'),
            countAll().as('windowCount'),
          ],
        })
        .execute();
      const options =
        spy2.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'][1];

      expect(options).to.deep.equal(varargs);
    });

    it('does not leak window/fields into the stage options', async () => {
      const spy = sinon.fake.returns(stream());
      const firestore = await createInstance({executePipeline: spy});
      await firestore
        .pipeline()
        .collection('sales')
        .addWindowFields({
          window: {partition: ['product']},
          fields: [countAll().as('c')],
        })
        .execute();
      const stages =
        spy.args[FIRST_CALL][EXECUTE_PIPELINE_REQUEST]['structuredPipeline'][
          'pipeline'
        ]['stages'];

      expect(stages[1].options).to.deep.equal({});
    });
  });

  describe('user data validation', () => {
    const invalidExpr = constant(undefined as unknown as number);
    const expectedError = /Cannot use "undefined" as a Firestore value/;

    it('validates expressions in partition', async () => {
      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields({partition: [invalidExpr]}, countAll().as('c'))
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }
    });

    it('validates expressions in sort', async () => {
      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields({sort: ascending(invalidExpr)}, countAll().as('c'))
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }
    });

    it('validates expressions in documents and range frame bounds and unit', async () => {
      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields(
              {
                sort: ascending('date'),
                documents: {preceding: invalidExpr, following: 'current'},
              },
              countAll().as('c'),
            )
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }

      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields(
              {
                sort: ascending('date'),
                range: {
                  preceding: 1,
                  following: 'current',
                  unit: invalidExpr,
                },
              },
              countAll().as('c'),
            )
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }
    });

    it('validates expressions in fields and over() frames', async () => {
      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields({}, sum(invalidExpr).as('total'))
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }

      {
        const spy = sinon.fake.returns(stream());
        const firestore = await createInstance({executePipeline: spy});
        let err: Error | undefined;
        try {
          await firestore
            .pipeline()
            .collection('sales')
            .addWindowFields(
              {sort: ascending('date')},
              countAll()
                .over({
                  documents: {preceding: 'unbounded', following: invalidExpr},
                })
                .as('c'),
            )
            .execute();
        } catch (e) {
          err = e as Error;
        }
        expect(err, 'expected error to be thrown').to.not.be.undefined;
        expect(err?.message).to.match(expectedError);
      }
    });
  });
});
