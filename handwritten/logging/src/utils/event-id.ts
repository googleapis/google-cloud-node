/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
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

import * as crypto from 'crypto';

const chars = '.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

function encode(data: Uint8Array): string {
  // Code for this encode method is copied verbatim from the eventid package.
  let s = '';
  const l = data.length;
  let hang = 0;
  for (let i = 0; i < l; i++) {
    const v = data[i];
    switch (i % 3) {
      case 0:
        s += chars[v >> 2];
        hang = (v & 3) << 4;
        break;
      case 1:
        s += chars[hang | (v >> 4)];
        hang = (v & 0xf) << 2;
        break;
      case 2:
        s += chars[hang | (v >> 6)];
        s += chars[v & 0x3f];
        hang = 0;
        break;
    }
  }
  if (l % 3) s += chars[hang];
  return s;
}

export class EventId {
  private b = new Uint8Array(24);
  constructor() {
    // Unlike the eventid package, we use crypto here to generate the buffer
    // If we use the uuid package it will cause scan errors
    crypto.randomFillSync(this.b, 8, 16);
  }
  new(): string {
    // Code in this new() method is copied verbatim from eventid package.
    for (let i = 7; i >= 0; i--) {
      if (this.b[i] !== 255) {
        this.b[i]++;
        break;
      }
      this.b[i] = 0;
    }
    return encode(this.b);
  }
}
