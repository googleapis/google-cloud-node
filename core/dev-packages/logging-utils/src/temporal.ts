// Copyright 2022-2024 Google LLC
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

/*
 * We'd like to use the tc39 Temporal standard, but it isn't out of
 * proposal, still, and won't be present in all versions of Node until
 * much later. Since even some of the polyfills aren't compatible with
 * all of our supported versions of Node, this is a very simplified
 * version of the pieces we need. When we're ready to turn on the tap
 * for the built-in, we'll just export that here instead of this.
 */

/**
 * Simplified interface analogous to the tc39 Temporal.Duration
 * parameter to from(). This doesn't support the full gamut (years, days).
 */
export interface DurationLike {
  hours?: number;
  minutes?: number;
  seconds?: number;
  millis?: number;
}

/**
 * Simplified list of values to pass to Duration.totalOf(). This
 * list is taken from the tc39 Temporal.Duration proposal, but
 * larger and smaller units have been left off.
 */
export type TotalOfUnit = 'hour' | 'minute' | 'second' | 'millisecond';

/**
 * Duration class with an interface similar to the tc39 Temporal
 * proposal. Since it's not fully finalized, and polyfills have
 * inconsistent compatibility, for now this shim class will be
 * used to set durations in Pub/Sub.
 *
 * This class will remain here for at least the next major version,
 * eventually to be replaced by the tc39 Temporal built-in.
 *
 * https://tc39.es/proposal-temporal/docs/duration.html
 */
export class Duration {
  private millis: number;

  private static secondInMillis = 1000;
  private static minuteInMillis = Duration.secondInMillis * 60;
  private static hourInMillis = Duration.minuteInMillis * 60;

  private constructor(millis: number) {
    this.millis = millis;
  }

  /**
   * Calculates the total number of units of type 'totalOf' that would
   * fit inside this duration.
   */
  totalOf(totalOf: TotalOfUnit): number {
    switch (totalOf) {
      case 'hour':
        return this.millis / Duration.hourInMillis;
      case 'minute':
        return this.millis / Duration.minuteInMillis;
      case 'second':
        return this.millis / Duration.secondInMillis;
      case 'millisecond':
        return this.millis;
      default:
        throw new Error(`Invalid unit in call to totalOf(): ${totalOf}`);
    }
  }

  /**
   * Creates a Duration from a DurationLike, which is an object
   * containing zero or more of the following: hours, seconds,
   * minutes, millis.
   */
  static from(durationLike: DurationLike): Duration {
    let millis = durationLike.millis ?? 0;
    millis += (durationLike.seconds ?? 0) * Duration.secondInMillis;
    millis += (durationLike.minutes ?? 0) * Duration.minuteInMillis;
    millis += (durationLike.hours ?? 0) * Duration.hourInMillis;

    return new Duration(millis);
  }
}
