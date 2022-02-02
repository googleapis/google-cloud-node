/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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
import * as testFile from '../test-data/retryStrategyTestData.json';
import {executeScenario, RetryTestCase} from '../conformanceCommon';
import * as assert from 'assert';

const SCENARIO_NUMBER_TO_TEST = 4;
const retryTestCase: RetryTestCase | undefined =
  testFile.retryStrategyTests.find(test => test.id === SCENARIO_NUMBER_TO_TEST);

describe(`Scenario ${SCENARIO_NUMBER_TO_TEST}`, () => {
  assert(retryTestCase);
  executeScenario(retryTestCase);
});
