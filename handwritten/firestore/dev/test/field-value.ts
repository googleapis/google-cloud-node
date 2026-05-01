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

import {FieldValue} from '../src';
import {
  ApiOverride,
  arrayTransform,
  createInstance,
  document,
  incrementTransform,
  InvalidApiUsage,
  minimumTransform,
  maximumTransform,
  requestEquals,
  response,
  serverTimestamp,
  set,
  writeResult,
} from './util/helpers';

function genericFieldValueTests(methodName: string, sentinel: FieldValue) {
  it("can't be used inside arrays", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('coll/doc');
      const expectedErr = new RegExp(
        `${methodName}\\(\\) cannot be used inside of an array`,
      );
      expect(() => docRef.set({a: [sentinel]})).to.throw(expectedErr);
      expect(() => docRef.set({a: {b: [sentinel]}})).to.throw(expectedErr);
      expect(() =>
        docRef.set({
          a: [{b: sentinel}],
        }),
      ).to.throw(expectedErr);
      expect(() => docRef.set({a: {b: {c: [sentinel]}}})).to.throw(expectedErr);
    });
  });

  it("can't be used inside arrayUnion()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayUnion(sentinel)})).to.throw(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used inside arrayRemove()", () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() =>
        docRef.set({foo: FieldValue.arrayRemove(sentinel)}),
      ).to.throw(
        `Element at index 0 is not a valid array element. ${methodName}() cannot be used inside of an array.`,
      );
    });
  });

  it("can't be used with queries", () => {
    return createInstance().then(firestore => {
      const collRef = firestore.collection('coll');
      expect(() => collRef.where('a', '==', sentinel)).to.throw(
        `Value for argument "value" is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
      expect(() => collRef.orderBy('a').startAt(sentinel)).to.throw(
        `Element at index 0 is not a valid query constraint. ${methodName}() can only be used in set(), create() or update().`,
      );
    });
  });
}

describe('FieldValue.arrayUnion()', () => {
  it('requires one argument', () => {
    expect(() => FieldValue.arrayUnion()).to.throw(
      'Function "FieldValue.arrayUnion()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayUnionFoo1 = FieldValue.arrayUnion('foo');
    const arrayUnionFoo2 = FieldValue.arrayUnion('foo');
    const arrayUnionBar = FieldValue.arrayUnion('bar');
    expect(arrayUnionFoo1.isEqual(arrayUnionFoo2)).to.be.true;
    expect(arrayUnionFoo1.isEqual(arrayUnionBar)).to.be.false;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            arrayTransform('field', 'appendMissingElements', 'foo', 'bar'),
            arrayTransform('map.field', 'appendMissingElements', 'foo', 'bar'),
          ],
        });

        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.arrayUnion('foo', 'bar'),
        map: {field: FieldValue.arrayUnion('foo', 'bar')},
      });
    });
  });

  it('must not contain directly nested arrays', () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayUnion([])})).to.throw(
        'Element at index 0 is not a valid array element. Nested arrays are ' +
          'not supported.',
      );
    });
  });

  genericFieldValueTests('FieldValue.arrayUnion', FieldValue.arrayUnion('foo'));
});

describe('FieldValue.increment()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).increment()).to.throw(
      'Function "FieldValue.increment()" requires at least 1 argument.',
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.increment('foo' as InvalidApiUsage),
        });
      }).to.throw(
        'Value for argument "FieldValue.increment()" is not a valid number',
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.increment(13.37);
    const arrayUnionB = FieldValue.increment(13.37);
    const arrayUnionC = FieldValue.increment(42);
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            incrementTransform('field', 42),
            incrementTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.increment(42),
        map: {field: FieldValue.increment(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.increment', FieldValue.increment(42));
});

describe('FieldValue.minimum()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).minimum()).to.throw(
      'Function "FieldValue.minimum()" requires at least 1 argument.'
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.minimum('foo' as InvalidApiUsage),
        });
      }).to.throw(
        'Value for argument "FieldValue.minimum()" is not a valid number'
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.minimum(13.37);
    const arrayUnionB = FieldValue.minimum(13.37);
    const arrayUnionC = FieldValue.minimum(42);
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            minimumTransform('field', 42),
            minimumTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.minimum(42),
        map: {field: FieldValue.minimum(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.minimum', FieldValue.minimum(42));
});

describe('FieldValue.maximum()', () => {
  it('requires one argument', () => {
    expect(() => (FieldValue as InvalidApiUsage).maximum()).to.throw(
      'Function "FieldValue.maximum()" requires at least 1 argument.'
    );
  });

  it('validates that operand is number', () => {
    return createInstance().then(firestore => {
      expect(() => {
        return firestore.doc('collectionId/documentId').set({
          foo: FieldValue.maximum('foo' as InvalidApiUsage),
        });
      }).to.throw(
        'Value for argument "FieldValue.maximum()" is not a valid number'
      );
    });
  });

  it('supports isEqual()', () => {
    const arrayUnionA = FieldValue.maximum(13.37);
    const arrayUnionB = FieldValue.maximum(13.37);
    const arrayUnionC = FieldValue.maximum(42);
    expect(arrayUnionA.isEqual(arrayUnionB)).to.be.true;
    expect(arrayUnionC.isEqual(arrayUnionB)).to.be.false;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            maximumTransform('field', 42),
            maximumTransform('map.field', 13.37),
          ],
        });
        requestEquals(request, expectedRequest);
        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.maximum(42),
        map: {field: FieldValue.maximum(13.37)},
      });
    });
  });

  genericFieldValueTests('FieldValue.maximum', FieldValue.maximum(42));
});

describe('FieldValue.arrayRemove()', () => {
  it('requires one argument', () => {
    expect(() => FieldValue.arrayRemove()).to.throw(
      'Function "FieldValue.arrayRemove()" requires at least 1 argument.',
    );
  });

  it('supports isEqual()', () => {
    const arrayRemoveFoo1 = FieldValue.arrayUnion('foo');
    const arrayRemoveFoo2 = FieldValue.arrayUnion('foo');
    const arrayRemoveBar = FieldValue.arrayUnion('bar');
    expect(arrayRemoveFoo1.isEqual(arrayRemoveFoo2)).to.be.true;
    expect(arrayRemoveFoo1.isEqual(arrayRemoveBar)).to.be.false;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [
            arrayTransform('field', 'removeAllFromArray', 'foo', 'bar'),
            arrayTransform('map.field', 'removeAllFromArray', 'foo', 'bar'),
          ],
        });
        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.arrayRemove('foo', 'bar'),
        map: {field: FieldValue.arrayRemove('foo', 'bar')},
      });
    });
  });

  it('must not contain directly nested arrays', () => {
    return createInstance().then(firestore => {
      const docRef = firestore.doc('collectionId/documentId');
      expect(() => docRef.set({foo: FieldValue.arrayRemove([])})).to.throw(
        'Element at index 0 is not a valid array element. Nested arrays are ' +
          'not supported.',
      );
    });
  });

  genericFieldValueTests(
    'FieldValue.arrayRemove',
    FieldValue.arrayRemove('foo'),
  );
});

describe('FieldValue.serverTimestamp()', () => {
  it('supports isEqual()', () => {
    const firstTimestamp = FieldValue.serverTimestamp();
    const secondTimestamp = FieldValue.serverTimestamp();
    expect(firstTimestamp.isEqual(secondTimestamp)).to.be.true;
  });

  it('can be used with set()', () => {
    const overrides: ApiOverride = {
      commit: request => {
        const expectedRequest = set({
          document: document('documentId', 'foo', 'bar'),
          transforms: [serverTimestamp('field'), serverTimestamp('map.field')],
        });
        requestEquals(request, expectedRequest);

        return response(writeResult(1));
      },
    };

    return createInstance(overrides).then(firestore => {
      return firestore.doc('collectionId/documentId').set({
        foo: 'bar',
        field: FieldValue.serverTimestamp(),
        map: {field: FieldValue.serverTimestamp()},
      });
    });
  });

  genericFieldValueTests(
    'FieldValue.serverTimestamp',
    FieldValue.serverTimestamp(),
  );
});
