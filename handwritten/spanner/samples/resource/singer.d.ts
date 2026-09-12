// Copyright 2024 Google LLC
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

import * as $protobuf from 'protobufjs';
import Long = require('long');
/** Namespace examples. */
export namespace examples {
  /** Namespace spanner. */
  namespace spanner {
    /** Namespace music. */
    namespace music {
      /** Properties of a SingerInfo. */
      interface ISingerInfo {
        /** SingerInfo singerId */
        singerId?: number | Long | null;

        /** SingerInfo birthDate */
        birthDate?: string | null;

        /** SingerInfo nationality */
        nationality?: string | null;

        /** SingerInfo genre */
        genre?: examples.spanner.music.Genre | null;
      }

      /** Represents a SingerInfo. */
      class SingerInfo implements ISingerInfo {
        /**
         * Constructs a new SingerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: examples.spanner.music.ISingerInfo);

        /** SingerInfo singerId. */
        public singerId?: number | Long | null;

        /** SingerInfo birthDate. */
        public birthDate?: string | null;

        /** SingerInfo nationality. */
        public nationality?: string | null;

        /** SingerInfo genre. */
        public genre?: examples.spanner.music.Genre | null;

        /** SingerInfo _singerId. */
        public _singerId?: 'singerId';

        /** SingerInfo _birthDate. */
        public _birthDate?: 'birthDate';

        /** SingerInfo _nationality. */
        public _nationality?: 'nationality';

        /** SingerInfo _genre. */
        public _genre?: 'genre';

        /**
         * Creates a new SingerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingerInfo instance
         */
        public static create(
          properties?: examples.spanner.music.ISingerInfo,
        ): examples.spanner.music.SingerInfo;

        /**
         * Encodes the specified SingerInfo message. Does not implicitly {@link examples.spanner.music.SingerInfo.verify|verify} messages.
         * @param message SingerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: examples.spanner.music.ISingerInfo,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Encodes the specified SingerInfo message, length delimited. Does not implicitly {@link examples.spanner.music.SingerInfo.verify|verify} messages.
         * @param message SingerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: examples.spanner.music.ISingerInfo,
          writer?: $protobuf.Writer,
        ): $protobuf.Writer;

        /**
         * Decodes a SingerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): examples.spanner.music.SingerInfo;

        /**
         * Decodes a SingerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): examples.spanner.music.SingerInfo;

        /**
         * Verifies a SingerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: {[k: string]: any}): string | null;

        /**
         * Creates a SingerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingerInfo
         */
        public static fromObject(object: {
          [k: string]: any;
        }): examples.spanner.music.SingerInfo;

        /**
         * Creates a plain object from a SingerInfo message. Also converts values to other types if specified.
         * @param message SingerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: examples.spanner.music.SingerInfo,
          options?: $protobuf.IConversionOptions,
        ): {[k: string]: any};

        /**
         * Converts this SingerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): {[k: string]: any};

        /**
         * Gets the default type url for SingerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
      }

      /** Genre enum. */
      enum Genre {
        POP = 0,
        JAZZ = 1,
        FOLK = 2,
        ROCK = 3,
      }
    }
  }
}
