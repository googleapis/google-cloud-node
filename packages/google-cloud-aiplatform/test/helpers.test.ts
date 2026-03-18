/*!
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {describe, it} from 'mocha';
import * as assert from 'assert';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const aiplatform = require('../src');

describe('AI Platform helper methods', () => {
  const dataTypeObject = {
    myBool: true,
    myInt: 4,
    myString: 'hello',
    myNull: null,
    myList: ['one', 'two'],
    myObj: {
      nested: 'obj',
    },
  };
  const protobufTypeObject = {
    kind: 'structValue',
    structValue: {
      fields: {
        myBool: {
          kind: 'boolValue',
          boolValue: true,
        },
        myInt: {
          kind: 'numberValue',
          numberValue: 4,
        },
        myString: {
          kind: 'stringValue',
          stringValue: 'hello',
        },
        myNull: {
          kind: 'nullValue',
          nullValue: 0,
        },
        myList: {
          kind: 'listValue',
          listValue: {
            values: [
              {
                kind: 'stringValue',
                stringValue: 'one',
              },
              {
                kind: 'stringValue',
                stringValue: 'two',
              },
            ],
          },
        },
        myObj: {
          kind: 'structValue',
          structValue: {
            fields: {
              nested: {
                kind: 'stringValue',
                stringValue: 'obj',
              },
            },
          },
        },
      },
    },
  };

  describe('toValue', () => {
    it('exposes toValue() method', () => {
      const {helpers} = aiplatform;
      assert.ok(helpers.toValue);
    });

    it('converts protobuf data types', () => {
      const {helpers} = aiplatform;

      const actualToValueOuput = helpers.toValue(dataTypeObject);
      const actualInnerStruct = actualToValueOuput.structValue;
      assert.ok(actualInnerStruct);

      const actualInnerFields = actualInnerStruct.fields;
      assert.ok(actualInnerFields);

      const actualBoolType = actualInnerFields.myBool;
      assert.ok(actualBoolType);
      assert.ok('boolValue' in actualBoolType);
      assert.strictEqual(actualBoolType.boolValue, dataTypeObject.myBool);

      const actualNumberType = actualInnerFields.myInt;
      assert.ok(actualNumberType);
      assert.ok('numberValue' in actualNumberType);
      assert.strictEqual(actualNumberType.numberValue, dataTypeObject.myInt);

      const actualStringType = actualInnerFields.myString;
      assert.ok(actualStringType);
      assert.ok('stringValue' in actualStringType);
      assert.strictEqual(actualStringType.stringValue, dataTypeObject.myString);

      const actualNullType = actualInnerFields.myNull;
      assert.ok(actualNullType);
      assert.ok('nullValue' in actualNullType);

      const actualListType = actualInnerFields.myList;
      assert.ok(actualListType);
      assert.ok('listValue' in actualListType);
      assert.ok('values' in actualListType.listValue);
      assert.strictEqual(
        actualListType.listValue.values.length,
        dataTypeObject.myList.length
      );

      const actualStructType = actualInnerFields.myObj;
      assert.ok(actualStructType);
      assert.ok('structValue' in actualStructType);
      assert.ok('fields' in actualStructType.structValue);
      assert.ok('nested' in actualStructType.structValue.fields);
    });

    it('creates an empty protobuf structure when passed an empty object', () => {
      const {helpers} = aiplatform;
      const actualEmptyProtobufStruct = helpers.toValue({});

      assert.ok(actualEmptyProtobufStruct);
      assert.ok('structValue' in actualEmptyProtobufStruct);
      assert.ok('fields' in actualEmptyProtobufStruct.structValue);
    });

    it('returns undefined if not passed an argument', () => {
      const {helpers} = aiplatform;
      const actualUndefinedResult = helpers.toValue();
      assert.strictEqual(actualUndefinedResult, undefined);
    });
  });

  describe('fromValue', () => {
    it('exposes fromValue() method', () => {
      const {helpers} = aiplatform;
      assert.ok(helpers.fromValue);
    });

    it('converts protobuf object formatting to plain JavaScript objects', () => {
      const {helpers} = aiplatform;
      const actualConvertedObject = helpers.fromValue(protobufTypeObject);

      assert.ok('myBool' in actualConvertedObject);
      assert.ok('myInt' in actualConvertedObject);
      assert.ok('myString' in actualConvertedObject);
      assert.ok('myList' in actualConvertedObject);
      assert.strictEqual(actualConvertedObject.myList.length, 2);
      assert.ok('myObj' in actualConvertedObject);
      assert.ok('nested' in actualConvertedObject.myObj);
    });

    it('throws an error if not provided a protobuf-formatted object', () => {
      const {helpers} = aiplatform;
      const malformedProtobufObject = {something: 'malformed'};

      assert.throws(() => {
        helpers.fromValue(malformedProtobufObject);
      });
    });

    it('returns undefined if not passed an argument', () => {
      const {helpers} = aiplatform;
      const actualUndefinedResult = helpers.fromValue();
      assert.strictEqual(actualUndefinedResult, undefined);
    });
  });

  describe('dynamically assigned methods', () => {
    const {definition} =
      aiplatform.protos.google.cloud.aiplatform.v1beta1.schema.trainingjob;
    const {instance} =
      aiplatform.protos.google.cloud.aiplatform.v1beta1.schema.predict;

    describe('toValue', () => {
      const imageClassificationTrainingInputs = {
        multiLabel: true,
        modelType: definition.AutoMlImageClassificationInputs.ModelType.CLOUD,
        budgetMilliNodeHours: 8000,
        disableEarlyStopping: false,
      };

      const textClassificationPredictionInstance = {
        content: 'this is some fake text',
      };

      it('exposes toValue() on instances of enhanced types', () => {
        const actualTrainingTaskInputs =
          new definition.AutoMlImageClassificationInputs();
        assert.ok(actualTrainingTaskInputs.toValue);
      });

      it('converts an enhanced type to a protobuf-formatted object', () => {
        const trainingTaskInputs =
          new definition.AutoMlImageClassificationInputs(
            imageClassificationTrainingInputs
          );
        const predictionInstance =
          new instance.TextClassificationPredictionInstance(
            textClassificationPredictionInstance
          );

        const actualTrainingTaskInputValue = trainingTaskInputs.toValue();
        const actualPredictionInstanceValue = predictionInstance.toValue();
        const actualTrainingTaskFields =
          actualTrainingTaskInputValue.structValue.fields;

        assert.ok('multiLabel' in actualTrainingTaskFields);
        assert.ok('budgetMilliNodeHours' in actualTrainingTaskFields);
        assert.ok('modelType' in actualTrainingTaskFields);
        assert.ok('disableEarlyStopping' in actualTrainingTaskFields);

        assert.strictEqual(actualTrainingTaskFields.multiLabel.boolValue, true);
        assert.strictEqual(
          actualTrainingTaskFields.budgetMilliNodeHours.numberValue,
          8000
        );
        assert.strictEqual(
          actualTrainingTaskFields.disableEarlyStopping.boolValue,
          false
        );
        assert.strictEqual(
          actualTrainingTaskFields.modelType.numberValue,
          definition.AutoMlImageClassificationInputs.ModelType.CLOUD
        );

        const actualTextInstance =
          actualPredictionInstanceValue.structValue.fields.content.stringValue;
        assert.notStrictEqual(
          actualTextInstance.indexOf(
            textClassificationPredictionInstance.content
          ),
          -1
        );
      });
    });

    describe('fromValue', () => {
      const imageClassificationTrainingInputs = {
        kind: 'structValue',
        structValue: {
          fields: {
            multiLabel: {
              kind: 'boolValue',
              boolValue: true,
            },
            modelType: {
              kind: 'numberValue',
              numberValue: 1,
            },
            budgetMilliNodeHours: {
              kind: 'numberValue',
              numberValue: 8000,
            },
            disableEarlyStopping: {
              kind: 'boolValue',
              boolValue: false,
            },
          },
        },
      };
      const testText = 'this is some fake text';
      const textClassificationPredictionInstance = {
        kind: 'structValue',
        structValue: {
          fields: {
            content: {
              kind: 'stringValue',
              stringValue: testText,
            },
          },
        },
      };

      it('exposes fromValue() as a static method on enhanced types', () => {
        assert.notStrictEqual(
          definition.AutoMlImageClassificationInputs.fromValue,
          undefined
        );
      });

      it('converts protobuf-formatted objects into instanced of enhanced types', () => {
        const actualTrainingTaskInputs =
          definition.AutoMlImageClassificationInputs.fromValue(
            imageClassificationTrainingInputs
          );
        const actualPredictionInstance =
          instance.TextClassificationPredictionInstance.fromValue(
            textClassificationPredictionInstance
          );

        assert.strictEqual(actualTrainingTaskInputs.budgetMilliNodeHours, 8000);
        assert.strictEqual(
          actualTrainingTaskInputs.modelType,
          definition.AutoMlImageClassificationInputs.ModelType.CLOUD
        );
        assert.strictEqual(
          actualTrainingTaskInputs.disableEarlyStopping,
          false
        );
        assert.strictEqual(actualTrainingTaskInputs.multiLabel, true);
        assert.notStrictEqual(
          actualPredictionInstance.content.indexOf(testText),
          -1
        );
      });
    });
  });
});
