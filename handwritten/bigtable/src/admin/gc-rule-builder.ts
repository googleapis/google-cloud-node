// Copyright 2026 Google LLC
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

import * as util from 'node:util';
import {google} from '../../protos/protos';

export type IGcRule = google.bigtable.admin.v2.IGcRule;
export type IDuration = google.protobuf.IDuration;

// Builds a type that has exactly one key from another type.
type RequireExactlyOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: Required<Pick<T, K>> &
    Partial<Record<Exclude<Keys, K>, never>>;
}[Keys];

// Builds a type from RequireExactlyOne that excludes certain keys.
type BuildExclusiveType<T, ExcludedKeys extends keyof T> = RequireExactlyOne<
  Omit<T, ExcludedKeys>
>;

export type GcUnion = Pick<IGcRule, 'union'>;
export type GcIntersection = Pick<IGcRule, 'intersection'>;
export type GcGrouping = GcUnion | GcIntersection;
export type GcRuleItem = BuildExclusiveType<IGcRule, 'union' | 'intersection'>;

function isUnion(rule: IGcRule): rule is GcUnion {
  return !!rule.union;
}

function isIntersection(rule: IGcRule): rule is GcIntersection {
  return !!rule.intersection;
}

function isGrouping(rule: IGcRule): rule is GcGrouping {
  return isUnion(rule) || isIntersection(rule);
}

function nonGroupKeys(rule: IGcRule): string[] {
  return Object.keys(rule).filter(k => k !== 'union' && k !== 'intersection');
}

function isRuleItem(rule: IGcRule): rule is GcRuleItem {
  const keys = nonGroupKeys(rule);

  // We'll handle === 1 below.
  return keys.length > 0;
}

/**
 * Helper class for building valid garbage collection rules. TypeScript is
 * recommended here for the maximum help, as types will guide user code at
 * compile time; however, some correctness checking happens at runtime to help
 * JavaScript users as well.
 */
export class GcRuleBuilder {
  /**
   * Formats exception strings.
   *
   * @private
   * @param p The IGcRule parameter that's failing
   * @param why A string describing why it's failing
   * @returns A formatted exception message
   */
  static formatErrorParameter(p: IGcRule, why: string): string {
    return `Parameter ${util.format('%o', p)} ${why}`;
  }

  /**
   * Runtime checks for JavaScript code.
   * @private
   */
  static checkGroupingItem(p: GcGrouping | GcRuleItem): void {
    if (isUnion(p) && isIntersection(p)) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(
          p,
          'is both a union and intersection',
        ),
      );
    }
    if (isGrouping(p) && isRuleItem(p)) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(
          p,
          'is both a union and/or intersection, and a rule',
        ),
      );
    }
    if (!isGrouping(p) && !isRuleItem(p)) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(
          p,
          'is not a rule or a union/intersection',
        ),
      );
    }
  }

  /**
   * Runtime checks for JavaScript code.
   * @private
   */
  static checkRuleItem(p: GcRuleItem): void {
    if (isGrouping(p)) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(
          p,
          'is a union or intersection, not a rule',
        ),
      );
    }
    if (!isRuleItem(p)) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(p, 'does not appear to be a rule'),
      );
    }
    if (nonGroupKeys(p).length > 1) {
      throw new Error(
        GcRuleBuilder.formatErrorParameter(
          p,
          'is an invalid multiple-rule; please use a union or intersection',
        ),
      );
    }
  }

  /**
   * Unions are formed from other groupings (union, intersection) and potentially
   * rules (e.g. maxAge). They will match if any of the items are true.
   *
   * @param params Groupings and/or rules to be included
   * @returns [IGcRule] A newly built group
   */
  static union(...params: Array<GcGrouping | GcRuleItem>): GcGrouping {
    params.forEach(GcRuleBuilder.checkGroupingItem);

    return {
      union: {
        rules: params,
      },
    };
  }

  /**
   * Intersections are formed from other groupings (union, intersection) and potentially
   * rules (e.g. maxAge). They will match if all of the items are true.
   *
   * @param params Groupings and/or rules to be included
   * @returns [IGcRule] A newly built group
   */
  static intersection(...params: Array<GcGrouping | GcRuleItem>): GcGrouping {
    params.forEach(GcRuleBuilder.checkGroupingItem);

    return {
      intersection: {
        rules: params,
      },
    };
  }

  /**
   * Rules are leaf nodes and contain constraints such as maxAge and maxNumVersions.
   *
   * @param params [IGcRule] Filled rule
   * @returns [IGcRule] A typed/checked rule
   */
  static rule(rule: GcRuleItem): GcRuleItem {
    GcRuleBuilder.checkRuleItem(rule);
    return rule;
  }
}
