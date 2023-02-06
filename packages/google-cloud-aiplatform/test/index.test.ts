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
const enhancedTypes = require('../src/enhanced-types.json');

describe('AI Platform enhanced types', () => {
  function testNamespaceAgainstArray(
    namespace: Record<string, string>,
    arr: string[]
  ) {
    for (const name of arr) {
      assert.ok(name in namespace);
    }
  }

  describe('v1beta1', () => {
    const definitionTypeNames =
      enhancedTypes.v1beta1.schema.trainingjob.definition;
    const predictInstanceTypeNames =
      enhancedTypes.v1beta1.schema.predict.instance;
    const predictParamsTypeNames = enhancedTypes.v1beta1.schema.predict.params;
    const predictResultTypeNames =
      enhancedTypes.v1beta1.schema.predict.prediction;

    const {definition} =
      aiplatform.protos.google.cloud.aiplatform.v1beta1.schema.trainingjob;
    const {instance, params, prediction} =
      aiplatform.protos.google.cloud.aiplatform.v1beta1.schema.predict;

    it('adds training job definition types', () => {
      testNamespaceAgainstArray(definition, definitionTypeNames);
    });

    it('adds prediction instance types', () => {
      testNamespaceAgainstArray(instance, predictInstanceTypeNames);
    });

    it('adds prediction param types', () => {
      testNamespaceAgainstArray(params, predictParamsTypeNames);
    });

    it('adds prediction result types', () => {
      testNamespaceAgainstArray(prediction, predictResultTypeNames);
    });
  });

  describe('v1', () => {
    const definitionTypeNames = enhancedTypes.v1.schema.trainingjob.definition;
    const predictInstanceTypeNames = enhancedTypes.v1.schema.predict.instance;
    const predictParamsTypeNames = enhancedTypes.v1.schema.predict.params;
    const predictResultTypeNames = enhancedTypes.v1.schema.predict.prediction;

    const {definition} =
      aiplatform.protos.google.cloud.aiplatform.v1.schema.trainingjob;
    const {instance, params, prediction} =
      aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

    it('adds training job definition types', () => {
      testNamespaceAgainstArray(definition, definitionTypeNames);
    });

    it('adds prediction instance types', () => {
      testNamespaceAgainstArray(instance, predictInstanceTypeNames);
    });

    it('adds prediction param types', () => {
      testNamespaceAgainstArray(params, predictParamsTypeNames);
    });

    it('adds prediction result types', () => {
      testNamespaceAgainstArray(prediction, predictResultTypeNames);
    });
  });
});
