// Copyright 2018 Google LLC
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

import * as through2 from 'through2';

import {google} from '../protos/firestore_v1_proto_api';

import * as Firestore from '../src/index';
import {
  ApiOverride,
  createInstance as createInstanceHelper,
  document,
} from '../test/util/helpers';

import api = google.firestore.v1;

function createInstance(opts: {}, document: api.IDocument) {
  const overrides: ApiOverride = {
    batchGetDocuments: () => {
      const stream = through2.obj();
      setImmediate(() => {
        stream.push({found: document, readTime: {seconds: 5, nanos: 6}});
        stream.push(null);
      });

      return stream;
    },
  };

  return createInstanceHelper(overrides, opts);
}

const DOCUMENT_WITH_TIMESTAMP = document('documentId', 'moonLanding', {
  timestampValue: {
    nanos: 123000123,
    seconds: -14182920,
  },
});

const DOCUMENT_WITH_EMPTY_TIMESTAMP = document('documentId', 'moonLanding', {
  timestampValue: {},
});

describe('timestamps', () => {
  it('returned by default', () => {
    return createInstance({}, DOCUMENT_WITH_TIMESTAMP).then(firestore => {
      const expected = new Firestore.Timestamp(-14182920, 123000123);
      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(res => {
          expect(res.data()!['moonLanding'].isEqual(expected)).toBe(true);
          expect(res.get('moonLanding')!.isEqual(expected)).toBe(true);
        });
    });
  });

  it('retain seconds and nanoseconds', () => {
    return createInstance({}, DOCUMENT_WITH_TIMESTAMP).then(firestore => {
      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(res => {
          const timestamp = res.get('moonLanding');
          expect(timestamp.seconds).toBe(-14182920);
          expect(timestamp.nanoseconds).toBe(123000123);
        });
    });
  });

  it('convert to date', () => {
    return createInstance({}, DOCUMENT_WITH_TIMESTAMP).then(firestore => {
      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(res => {
          const timestamp = res.get('moonLanding');
          expect(new Date(-14182920 * 1000 + 123).getTime()).toBe(
            timestamp.toDate().getTime(),
          );
        });
    });
  });

  it('convert to millis', () => {
    return createInstance({}, DOCUMENT_WITH_TIMESTAMP).then(firestore => {
      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(res => {
          const timestamp = res.get('moonLanding');
          expect(-14182920 * 1000 + 123).toBe(timestamp.toMillis());
        });
    });
  });

  it('support missing values', () => {
    return createInstance({}, DOCUMENT_WITH_EMPTY_TIMESTAMP).then(firestore => {
      const expected = new Firestore.Timestamp(0, 0);

      return firestore
        .doc('collectionId/documentId')
        .get()
        .then(res => {
          expect(res.get('moonLanding').isEqual(expected)).toBe(true);
        });
    });
  });

  it('constructed using helper', () => {
    expect(Firestore.Timestamp.now()).toBeInstanceOf(Firestore.Timestamp);

    let actual = Firestore.Timestamp.fromDate(new Date(123123));
    let expected = new Firestore.Timestamp(123, 123000000);
    expect(actual.isEqual(expected)).toBe(true);

    actual = Firestore.Timestamp.fromMillis(123123);
    expected = new Firestore.Timestamp(123, 123000000);
    expect(actual.isEqual(expected)).toBe(true);
  });

  it('handles decimal inputs in fromMillis()', () => {
    const actual = Firestore.Timestamp.fromMillis(1000.1);
    const expected = new Firestore.Timestamp(1, 100000);
    expect(actual.isEqual(expected)).toBe(true);
  });

  it('validates seconds', () => {
    expect(() => new Firestore.Timestamp(0.1, 0)).toThrow(
      'Value for argument "seconds" is not a valid integer.',
    );

    expect(() => new Firestore.Timestamp(-62135596801, 0)).toThrow(
      'Value for argument "seconds" must be within [-62135596800, 253402300799] inclusive, but was: -62135596801',
    );

    expect(() => new Firestore.Timestamp(253402300800, 0)).toThrow(
      'Value for argument "seconds" must be within [-62135596800, 253402300799] inclusive, but was: 253402300800',
    );
  });

  it('validates nanoseconds', () => {
    expect(() => new Firestore.Timestamp(0, 0.1)).toThrow(
      'Value for argument "nanoseconds" is not a valid integer.',
    );

    expect(() => new Firestore.Timestamp(0, -1)).toThrow(
      'Value for argument "nanoseconds" must be within [0, 999999999] inclusive, but was: -1',
    );

    expect(() => new Firestore.Timestamp(0, 1000000000)).toThrow(
      'Value for argument "nanoseconds" must be within [0, 999999999] inclusive, but was: 1000000000',
    );
  });

  it('valueOf', () => {
    expect(new Firestore.Timestamp(-62135596677, 456).valueOf()).toBe(
      '000000000123.000000456',
    );
    expect(new Firestore.Timestamp(-62135596800, 0).valueOf()).toBe(
      '000000000000.000000000',
    );
    expect(new Firestore.Timestamp(253402300799, 1e9 - 1).valueOf()).toBe(
      '315537897599.999999999',
    );
  });

  it('arithmetic comparison of a Timestamp object to itself', () => {
    const timestamp = new Firestore.Timestamp(1, 1);
    expect(timestamp < timestamp).toBe(false);
    expect(timestamp <= timestamp).toBe(true);
    expect(timestamp > timestamp).toBe(false);
    expect(timestamp >= timestamp).toBe(true);
  });

  it('arithmetic comparison of equivalent, but distinct, Timestamp objects', () => {
    const t1 = new Firestore.Timestamp(1, 1);
    const t2 = new Firestore.Timestamp(1, 1);
    expect(t1 < t2).toBe(false);
    expect(t1 <= t2).toBe(true);
    expect(t1 > t2).toBe(false);
    expect(t1 >= t2).toBe(true);
  });

  it('arithmetic comparison of Timestamp objects whose nanoseconds differ', () => {
    const t1 = new Firestore.Timestamp(1, 1);
    const t2 = new Firestore.Timestamp(1, 2);
    expect(t1 < t2).toBe(true);
    expect(t1 <= t2).toBe(true);
    expect(t1 > t2).toBe(false);
    expect(t1 >= t2).toBe(false);
  });

  it('arithmetic comparison of Timestamp objects whose seconds differ', () => {
    const t1 = new Firestore.Timestamp(100, 0);
    const t2 = new Firestore.Timestamp(200, 0);
    expect(t1 < t2).toBe(true);
    expect(t1 <= t2).toBe(true);
    expect(t1 > t2).toBe(false);
    expect(t1 >= t2).toBe(false);
  });

  it('arithmetic comparison of the smallest and largest Timestamp objects', () => {
    const t1 = new Firestore.Timestamp(-62135596800, 0);
    const t2 = new Firestore.Timestamp(253402300799, 999999999);
    expect(t1 < t2).toBe(true);
    expect(t1 <= t2).toBe(true);
    expect(t1 > t2).toBe(false);
    expect(t1 >= t2).toBe(false);
  });

  describe('Temporal Instant conversions', () => {
    let didPolyfill = false;

    beforeAll(() => {
      if (
        typeof (globalThis as Record<string, unknown>).Temporal === 'undefined'
      ) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const {Temporal} = require('@js-temporal/polyfill');
        (globalThis as Record<string, unknown>).Temporal = Temporal;
        didPolyfill = true;
      }
    });

    afterAll(() => {
      if (didPolyfill) {
        (globalThis as Record<string, unknown>).Temporal = undefined;
      }
    });

    it('fromInstant creates Timestamp correctly', () => {
      const instant =
        Temporal.Instant.fromEpochNanoseconds(1488872578916000000n);
      const ts = Firestore.Timestamp.fromInstant(instant);
      expect(ts.seconds).toBe(1488872578);
      expect(ts.nanoseconds).toBe(916000000);

      const instantWithNanos =
        Temporal.Instant.fromEpochNanoseconds(1488872578916123456n);
      const ts2 = Firestore.Timestamp.fromInstant(instantWithNanos);
      expect(ts2.seconds).toBe(1488872578);
      expect(ts2.nanoseconds).toBe(916123456);
    });

    it('fromInstant handles negative epoch nanoseconds', () => {
      // -1.25 seconds: seconds = -2, nanoseconds = 750000000
      const instant = Temporal.Instant.fromEpochNanoseconds(-1250000000n);
      const ts = Firestore.Timestamp.fromInstant(instant);
      expect(ts.seconds).toBe(-2);
      expect(ts.nanoseconds).toBe(750000000);

      // -1 nanosecond: seconds = -1, nanoseconds = 999999999
      const instant2 = Temporal.Instant.fromEpochNanoseconds(-1n);
      const ts2 = Firestore.Timestamp.fromInstant(instant2);
      expect(ts2.seconds).toBe(-1);
      expect(ts2.nanoseconds).toBe(999999999);

      // -1 second exact: seconds = -1, nanoseconds = 0
      const instant3 = Temporal.Instant.fromEpochNanoseconds(-1000000000n);
      const ts3 = Firestore.Timestamp.fromInstant(instant3);
      expect(ts3.seconds).toBe(-1);
      expect(ts3.nanoseconds).toBe(0);
    });

    it('fromInstant throws for invalid input', () => {
      expect(() =>
        Firestore.Timestamp.fromInstant(null as unknown as Temporal.Instant),
      ).toThrow('Invalid Temporal.Instant object provided.');

      expect(() =>
        Firestore.Timestamp.fromInstant(
          undefined as unknown as Temporal.Instant,
        ),
      ).toThrow('Invalid Temporal.Instant object provided.');

      expect(() =>
        Firestore.Timestamp.fromInstant({} as unknown as Temporal.Instant),
      ).toThrow('Invalid Temporal.Instant object provided.');
    });

    it('toInstant returns Temporal.Instant with nanosecond precision', () => {
      const ts = new Firestore.Timestamp(1488872578, 916123456);
      const instant = ts.toInstant();
      expect(instant.epochNanoseconds).toBe(1488872578916123456n);
      expect(instant.epochMilliseconds).toBe(1488872578916);
    });

    it('toInstant handles negative timestamps', () => {
      const ts = new Firestore.Timestamp(-2, 750000000);
      const instant = ts.toInstant();
      expect(instant.epochNanoseconds).toBe(-1250000000n);

      const ts2 = new Firestore.Timestamp(-1, 999999999);
      const instant2 = ts2.toInstant();
      expect(instant2.epochNanoseconds).toBe(-1n);
    });

    it('toInstant throws when Temporal is unavailable', () => {
      const saved = (globalThis as Record<string, unknown>).Temporal;
      delete (globalThis as Record<string, unknown>).Temporal;
      try {
        const ts = new Firestore.Timestamp(100, 200);
        expect(() => ts.toInstant()).toThrow(
          'The Temporal object is not available in the current environment.',
        );
      } finally {
        (globalThis as Record<string, unknown>).Temporal = saved;
      }
    });

    it('roundtrip conversions preserve nanosecond precision', () => {
      const original = new Firestore.Timestamp(123456789, 987654321);
      const instant = original.toInstant();
      const fromInst = Firestore.Timestamp.fromInstant(instant);
      expect(fromInst.isEqual(original)).toBe(true);

      const negativeOriginal = new Firestore.Timestamp(-62135596800, 123456789);
      const negativeInstant = negativeOriginal.toInstant();
      const fromNegativeInst = Firestore.Timestamp.fromInstant(negativeInstant);
      expect(fromNegativeInst.isEqual(negativeOriginal)).toBe(true);
    });
  });
});
