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
  milliseconds?: number;

  /**
   * tc39 has renamed this to milliseconds.
   *
   * @deprecated
   */
  millis?: number;
}

/**
 * Simplified list of values to pass to Duration.totalOf(). This
 * list is taken from the tc39 Temporal.Duration proposal, but
 * larger and smaller units have been left off. The latest tc39 spec
 * allows for both singular and plural forms.
 */
export type TotalOfUnit =
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond'
  | 'hours'
  | 'minutes'
  | 'seconds'
  | 'milliseconds';

interface TypeCheck {
  total(): number;
}

/**
 * Is it a Duration or a DurationLike?
 *
 * @private
 */
export function isDurationObject(value: unknown): value is Duration {
  return typeof value === 'object' && !!(value as TypeCheck).total;
}

/**
 * Duration class with an interface similar to the tc39 Temporal
 * proposal. Since it's not fully finalized, and polyfills have
 * inconsistent compatibility, for now this shim class will be
 * used to set durations in Pub/Sub.
 *
 * This class will remain here for at least the next major version,
 * eventually to be replaced by the tc39 Temporal.Duration built-in.
 *
 * https://tc39.es/proposal-temporal/docs/duration.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration
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
   *
   * No longer part of the tc39 spec, superseded by total().
   *
   * @deprecated
   */
  totalOf(totalOf: TotalOfUnit): number {
    return this.total(totalOf);
  }

  /**
   * Calculates the total number of units of type 'totalOf' that would
   * fit inside this duration. The tc39 `options` parameter is not supported.
   */
  total(totalOf: TotalOfUnit): number {
    switch (totalOf) {
      case 'hour':
      case 'hours':
        return this.millis / Duration.hourInMillis;
      case 'minute':
      case 'minutes':
        return this.millis / Duration.minuteInMillis;
      case 'second':
      case 'seconds':
        return this.millis / Duration.secondInMillis;
      case 'millisecond':
      case 'milliseconds':
        return this.millis;
      default:
        throw new Error(`Invalid unit in call to total(): ${totalOf}`);
    }
  }

  /**
   * Equivalent to `total('hour')`.
   */
  get hours(): number {
    return this.total('hour');
  }

  /**
   * Equivalent to `total('minute')`.
   */
  get minutes(): number {
    return this.total('minute');
  }

  /**
   * Equivalent to `total('second')`.
   */
  get seconds(): number {
    return this.total('second');
  }

  /**
   * Equivalent to `total('millisecond')`.
   */
  get milliseconds(): number {
    return this.total('millisecond');
  }

  /**
   * Adds another Duration to this one and returns a new Duration.
   *
   * @param other A Duration or Duration-like object, like from() takes.
   * @returns A new Duration.
   */
  add(other: DurationLike | Duration): Duration {
    const otherDuration = Duration.from(other);
    return Duration.from({
      millis: this.milliseconds + otherDuration.milliseconds,
    });
  }

  /**
   * Subtracts another Duration from this one and returns a new Duration.
   *
   * @param other A Duration or Duration-like object, like from() takes.
   * @returns A new Duration.
   */
  subtract(other: DurationLike | Duration): Duration {
    const otherDuration = Duration.from(other);
    return Duration.from({
      millis: this.milliseconds - otherDuration.milliseconds,
    });
  }

  /**
   * Creates a Duration from a DurationLike, which is an object
   * containing zero or more of the following: hours, seconds,
   * minutes, millis.
   */
  static from(durationLike: DurationLike | Duration): Duration {
    if (isDurationObject(durationLike)) {
      const d = durationLike as Duration;
      return new Duration(d.milliseconds);
    }

    let millis = durationLike.milliseconds ?? durationLike.millis ?? 0;
    millis += (durationLike.seconds ?? 0) * Duration.secondInMillis;
    millis += (durationLike.minutes ?? 0) * Duration.minuteInMillis;
    millis += (durationLike.hours ?? 0) * Duration.hourInMillis;

    return new Duration(millis);
  }

  /**
   * Compare two Duration objects. Returns -1 if the first is less than the
   * second, zero if they are equal, 1 if the first is greater than the second.
   *
   * Unlike tc39, this version does not accept options for relativeTo.
   */
  static compare(first: Duration, second: Duration) {
    const diffMs = first.total('millisecond') - second.total('millisecond');
    if (diffMs < 0) {
      return -1;
    }
    if (diffMs > 0) {
      return 1;
    }
    return 0;
  }
}

// Simple accessors that can be used independent of the class. These are
// functions and not methods because we don't want to add to what's in
// the tc39 spec.
export const atLeast = (d: Duration, min: Duration) =>
  Duration.compare(d, min) < 0 ? min : d;
export const atMost = (d: Duration, max: Duration) =>
  Duration.compare(d, max) > 0 ? max : d;
