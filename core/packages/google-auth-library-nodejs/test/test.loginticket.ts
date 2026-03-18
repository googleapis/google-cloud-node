// Copyright 2015 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {LoginTicket} from '../src/auth/loginticket';

describe('loginticket', () => {
  it('should return null userId even if no payload', () => {
    const ticket = new LoginTicket();
    assert.strictEqual(ticket.getUserId(), null);
  });

  it('should return envelope', () => {
    const ticket = new LoginTicket('myenvelope');
    assert.strictEqual(ticket.getEnvelope(), 'myenvelope');
  });

  it('should return attributes from getAttributes', () => {
    const payload = {
      aud: 'aud',
      sub: 'sub',
      iss: 'iss',
      iat: 1514162443,
      exp: 1514166043,
    };
    const ticket = new LoginTicket('myenvelope', payload);
    assert.deepStrictEqual(ticket.getAttributes(), {
      envelope: 'myenvelope',
      payload,
    });
  });
});
