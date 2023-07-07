// Copyright 2022 Google LLC
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

import * as uuid from 'uuid';

// Returns a shortened UUID that can be used to identify a
// specific run of a specific test.
function shortUUID() {
  return uuid.v4().split('-').shift()!;
}

export interface TokenMaker {
  uuid(): string;
  timestamp(): number;
}

export const defaultMaker = {
  uuid: shortUUID,
  timestamp: () => Date.now(),
};

export interface Resource {
  name?: string | null | undefined;
  delete?(): Promise<unknown>;
}

function normalizeId(id: string): string {
  return id.replace(/-/g, '_');
}

/**
 * Manages the names of testing resources during a test run. It's
 * easily to accidentally leak resources, and it's easy to accidentally
 * have conflicts with tests running concurrently, so this class helps
 * you manage them.
 *
 * Used nomenclature:
 *  Test - a single test for a single aspect of code; for example,
 *    "create a topic in pub/sub"
 *  Test Suite - a collection of tests that are generally run together;
 *     for example, "test topic operations in pub/sub"
 *  Test Run - a single run of a test suite (or single test within a suite);
 *     for example, "run the tests for PR #1234, 5th attempt"
 */
export class TestResources {
  testSuiteId: string;
  currentTime: string;
  tokenMaker: TokenMaker;

  /**
   * @param testSuiteId [string] A unique ID for a test suite (e.g.
   *   pubsub-topics).
   */
  constructor(testSuiteId: string, tokenMaker: TokenMaker = defaultMaker) {
    this.testSuiteId = normalizeId(testSuiteId);
    this.currentTime = `${tokenMaker.timestamp()}`;
    this.tokenMaker = tokenMaker;
  }

  /**
   * Returns the resource prefix for the current run of the test suite.
   * Optionally, testId may specify the specific ID of a test in the
   * suite.
   */
  getPrefix(testId?: string): string {
    if (testId) {
      return [this.testSuiteId, this.currentTime, normalizeId(testId)].join(
        '-'
      );
    } else {
      return [this.testSuiteId, this.currentTime].join('-');
    }
  }

  /**
   * Generates a unique resource name for one run of a test within
   * a test suite.
   */
  generateName(testId: string): string {
    return [this.getPrefix(testId), this.tokenMaker.uuid()].join('-');
  }

  /**
   * Generates a unique resource name for one run of a test within
   * a test suite for BigQuery resources.
   */
  generateBigQueryName(testId: string): string {
    return [normalizeId(this.getPrefix(testId)), this.tokenMaker.uuid()].join(
      '_'
    );
  }

  /*!
   * Given a list of resource names (and a test ID), this will return
   * a list of all resources that should be deleted to clean up for
   * the current run of that particular test.
   *
   * Leaving this commented out for now since it's not actively needed.
   */
  /*filterForTest(testId: string, allResources: Resource[]): Resource[] {
    const prefix = this.getPrefix(testId);
    return allResources.filter(n => n.name?.includes(prefix));
  }*/

  /*!
   * Given a list of resource names, this will return a list of all
   * resources that should be deleted to clean up after the current
   * run of a test suite.
   *
   * Leaving this commented out for now since it's not actively needed.
   */
  /*filterForCurrentRun(allResources: Resource[]): Resource[] {
    const prefix = this.getPrefix();
    return allResources.filter(n => n.name?.includes(prefix));
  }*/

  /**
   * Given a list of resource names, this will return a list of all
   * resources that should be deleted to clean up after any run
   * of the current test suite. Note that some of the names may
   * still be in use.
   *
   * Leaving this commented out for now since it's not actively needed.
   */
  /*filterForSuite(allResources: Resource[]): Resource[] {
    return allResources.filter(n => n.name?.includes(this.testSuiteId));
  }*/

  /**
   * Given a list of resource names, this will return a list of all
   * resources that should be deleted to generally clean up after any
   * run of the current test suite. This is much like filterForSuite(),
   * but it also filters by age - items that are less than 2 hours
   * old will not be cleaned.
   */
  filterForCleanup(allResources: Resource[]): Resource[] {
    const currentRunPrefix = this.getPrefix();
    return allResources.filter(n => {
      let name = n.name || undefined;
      if (name === undefined) {
        return false;
      }

      // We'll always get at least one thing.
      name = name.split('/').pop()!;

      if (name.startsWith(currentRunPrefix)) {
        return true;
      }

      if (name.startsWith(this.testSuiteId)) {
        const parts = name.split('-');
        const createdAt = Number(parts[1]);
        const timeDiff = (Date.now() - createdAt) / (1000 * 60 * 60);
        if (timeDiff >= 2) {
          return true;
        }
      }

      return false;
    });
  }
}
