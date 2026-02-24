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

import {describe, it} from 'mocha';
import {expect} from 'chai';
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
          expect(res.data()!['moonLanding'].isEqual(expected)).to.be.true;
          expect(res.get('moonLanding')!.isEqual(expected)).to.be.true;
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
          expect(timestamp.seconds).to.equal(-14182920);
          expect(timestamp.nanoseconds).to.equal(123000123);
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
          expect(new Date(-14182920 * 1000 + 123).getTime()).to.equal(
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
          expect(-14182920 * 1000 + 123).to.equal(timestamp.toMillis());
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
          expect(res.get('moonLanding').isEqual(expected)).to.be.true;
        });
    });
  });

  it('constructed using helper', () => {
    expect(Firestore.Timestamp.now()).to.be.an.instanceOf(Firestore.Timestamp);

    let actual = Firestore.Timestamp.fromDate(new Date(123123));
    let expected = new Firestore.Timestamp(123, 123000000);
    expect(actual.isEqual(expected)).to.be.true;

    actual = Firestore.Timestamp.fromMillis(123123);
    expected = new Firestore.Timestamp(123, 123000000);
    expect(actual.isEqual(expected)).to.be.true;
  });

  it('handles decimal inputs in fromMillis()', () => {
    const actual = Firestore.Timestamp.fromMillis(1000.1);
    const expected = new Firestore.Timestamp(1, 100000);
    expect(actual.isEqual(expected)).to.be.true;
  });

  it('validates seconds', () => {
    expect(() => new Firestore.Timestamp(0.1, 0)).to.throw(
      'Value for argument "seconds" is not a valid integer.',
    );

    expect(() => new Firestore.Timestamp(-62135596801, 0)).to.throw(
      'Value for argument "seconds" must be within [-62135596800, 253402300799] inclusive, but was: -62135596801',
    );

    expect(() => new Firestore.Timestamp(253402300800, 0)).to.throw(
      'Value for argument "seconds" must be within [-62135596800, 253402300799] inclusive, but was: 253402300800',
    );
  });

  it('validates nanoseconds', () => {
    expect(() => new Firestore.Timestamp(0, 0.1)).to.throw(
      'Value for argument "nanoseconds" is not a valid integer.',
    );

    expect(() => new Firestore.Timestamp(0, -1)).to.throw(
      'Value for argument "nanoseconds" must be within [0, 999999999] inclusive, but was: -1',
    );

    expect(() => new Firestore.Timestamp(0, 1000000000)).to.throw(
      'Value for argument "nanoseconds" must be within [0, 999999999] inclusive, but was: 1000000000',
    );
  });

  it('valueOf', () => {
    expect(new Firestore.Timestamp(-62135596677, 456).valueOf()).to.equal(
      '000000000123.000000456',
    );
    expect(new Firestore.Timestamp(-62135596800, 0).valueOf()).to.equal(
      '000000000000.000000000',
    );
    expect(new Firestore.Timestamp(253402300799, 1e9 - 1).valueOf()).to.equal(
      '315537897599.999999999',
    );
  });

  it('arithmetic comparison of a Timestamp object to itself', () => {
    const timestamp = new Firestore.Timestamp(1, 1);
    expect(timestamp < timestamp).to.be.false;
    expect(timestamp <= timestamp).to.be.true;
    expect(timestamp > timestamp).to.be.false;
    expect(timestamp >= timestamp).to.be.true;
  });

  it('arithmetic comparison of equivalent, but distinct, Timestamp objects', () => {
    const t1 = new Firestore.Timestamp(1, 1);
    const t2 = new Firestore.Timestamp(1, 1);
    expect(t1 < t2).to.be.false;
    expect(t1 <= t2).to.be.true;
    expect(t1 > t2).to.be.false;
    expect(t1 >= t2).to.be.true;
  });

  it('arithmetic comparison of Timestamp objects whose nanoseconds differ', () => {
    const t1 = new Firestore.Timestamp(1, 1);
    const t2 = new Firestore.Timestamp(1, 2);
    expect(t1 < t2).to.be.true;
    expect(t1 <= t2).to.be.true;
    expect(t1 > t2).to.be.false;
    expect(t1 >= t2).to.be.false;
  });

  it('arithmetic comparison of Timestamp objects whose seconds differ', () => {
    const t1 = new Firestore.Timestamp(100, 0);
    const t2 = new Firestore.Timestamp(200, 0);
    expect(t1 < t2).to.be.true;
    expect(t1 <= t2).to.be.true;
    expect(t1 > t2).to.be.false;
    expect(t1 >= t2).to.be.false;
  });

  it('arithmetic comparison of the smallest and largest Timestamp objects', () => {
    const t1 = new Firestore.Timestamp(-62135596800, 0);
    const t2 = new Firestore.Timestamp(253402300799, 999999999);
    expect(t1 < t2).to.be.true;
    expect(t1 <= t2).to.be.true;
    expect(t1 > t2).to.be.false;
    expect(t1 >= t2).to.be.false;
  });
});
