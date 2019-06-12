// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Describes an API diff request.
 *
 * @property {number} threatType
 *   Required. The ThreatList to update.
 *
 *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
 *
 * @property {Buffer} versionToken
 *   The current version token of the client for the requested list (the
 *   client version that was received from the last successful diff).
 *
 * @property {Object} constraints
 *   The constraints associated with this request.
 *
 *   This object should have the same structure as [Constraints]{@link google.cloud.webrisk.v1beta1.Constraints}
 *
 * @typedef ComputeThreatListDiffRequest
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const ComputeThreatListDiffRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The constraints for this diff.
   *
   * @property {number} maxDiffEntries
   *   The maximum size in number of entries. The diff will not contain more
   *   entries than this value.  This should be a power of 2 between 2**10 and
   *   2**20.  If zero, no diff size limit is set.
   *
   * @property {number} maxDatabaseEntries
   *   Sets the maximum number of entries that the client is willing to have
   *   in the local database. This should be a power of 2 between 2**10 and
   *   2**20. If zero, no database size limit is set.
   *
   * @property {number[]} supportedCompressions
   *   The compression types supported by the client.
   *
   *   The number should be among the values of [CompressionType]{@link google.cloud.webrisk.v1beta1.CompressionType}
   *
   * @typedef Constraints
   * @memberof google.cloud.webrisk.v1beta1
   * @see [google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
   */
  Constraints: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * @property {number} responseType
 *   The type of response. This may indicate that an action is required by the
 *   client when the response is received.
 *
 *   The number should be among the values of [ResponseType]{@link google.cloud.webrisk.v1beta1.ResponseType}
 *
 * @property {Object} additions
 *   A set of entries to add to a local threat type's list.
 *
 *   This object should have the same structure as [ThreatEntryAdditions]{@link google.cloud.webrisk.v1beta1.ThreatEntryAdditions}
 *
 * @property {Object} removals
 *   A set of entries to remove from a local threat type's list.
 *   This field may be empty.
 *
 *   This object should have the same structure as [ThreatEntryRemovals]{@link google.cloud.webrisk.v1beta1.ThreatEntryRemovals}
 *
 * @property {Buffer} newVersionToken
 *   The new opaque client version token.
 *
 * @property {Object} checksum
 *   The expected SHA256 hash of the client state; that is, of the sorted list
 *   of all hashes present in the database after applying the provided diff.
 *   If the client state doesn't match the expected state, the client must
 *   disregard this diff and retry later.
 *
 *   This object should have the same structure as [Checksum]{@link google.cloud.webrisk.v1beta1.Checksum}
 *
 * @property {Object} recommendedNextDiff
 *   The soonest the client should wait before issuing any diff
 *   request. Querying sooner is unlikely to produce a meaningful diff.
 *   Waiting longer is acceptable considering the use case.
 *   If this field is not set clients may update as soon as they want.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef ComputeThreatListDiffResponse
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const ComputeThreatListDiffResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The expected state of a client's local database.
   *
   * @property {Buffer} sha256
   *   The SHA256 hash of the client state; that is, of the sorted list of all
   *   hashes present in the database.
   *
   * @typedef Checksum
   * @memberof google.cloud.webrisk.v1beta1
   * @see [google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse.Checksum definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
   */
  Checksum: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * The type of response sent to the client.
   *
   * @enum {number}
   * @memberof google.cloud.webrisk.v1beta1
   */
  ResponseType: {

    /**
     * Unknown.
     */
    RESPONSE_TYPE_UNSPECIFIED: 0,

    /**
     * Partial updates are applied to the client's existing local database.
     */
    DIFF: 1,

    /**
     * Full updates resets the client's entire local database. This means
     * that either the client had no state, was seriously out-of-date,
     * or the client is believed to be corrupt.
     */
    RESET: 2
  }
};

/**
 * Request to check URI entries against threatLists.
 *
 * @property {string} uri
 *   The URI to be checked for matches.
 *
 * @property {number[]} threatTypes
 *   Required. The ThreatLists to search in.
 *
 *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
 *
 * @typedef SearchUrisRequest
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.SearchUrisRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const SearchUrisRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object} threat
 *   The threat list matches. This may be empty if the URI is on no list.
 *
 *   This object should have the same structure as [ThreatUri]{@link google.cloud.webrisk.v1beta1.ThreatUri}
 *
 * @typedef SearchUrisResponse
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.SearchUrisResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const SearchUrisResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Contains threat information on a matching uri.
   *
   * @property {number[]} threatTypes
   *   The ThreatList this threat belongs to.
   *
   *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
   *
   * @property {Object} expireTime
   *   The cache lifetime for the returned match. Clients must not cache this
   *   response past this timestamp to avoid false positives.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @typedef ThreatUri
   * @memberof google.cloud.webrisk.v1beta1
   * @see [google.cloud.webrisk.v1beta1.SearchUrisResponse.ThreatUri definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
   */
  ThreatUri: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Request to return full hashes matched by the provided hash prefixes.
 *
 * @property {Buffer} hashPrefix
 *   A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
 *   hash. For JSON requests, this field is base64-encoded.
 *
 * @property {number[]} threatTypes
 *   Required. The ThreatLists to search in.
 *
 *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
 *
 * @typedef SearchHashesRequest
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.SearchHashesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const SearchHashesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object[]} threats
 *   The full hashes that matched the requested prefixes.
 *   The hash will be populated in the key.
 *
 *   This object should have the same structure as [ThreatHash]{@link google.cloud.webrisk.v1beta1.ThreatHash}
 *
 * @property {Object} negativeExpireTime
 *   For requested entities that did not match the threat list, how long to
 *   cache the response until.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef SearchHashesResponse
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.SearchHashesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const SearchHashesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Contains threat information on a matching hash.
   *
   * @property {number[]} threatTypes
   *   The ThreatList this threat belongs to.
   *   This must contain at least one entry.
   *
   *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
   *
   * @property {Buffer} hash
   *   A 32 byte SHA256 hash. This field is in binary format. For JSON
   *   requests, hashes are base64-encoded.
   *
   * @property {Object} expireTime
   *   The cache lifetime for the returned match. Clients must not cache this
   *   response past this timestamp to avoid false positives.
   *
   *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
   *
   * @typedef ThreatHash
   * @memberof google.cloud.webrisk.v1beta1
   * @see [google.cloud.webrisk.v1beta1.SearchHashesResponse.ThreatHash definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
   */
  ThreatHash: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Contains the set of entries to add to a local database.
 * May contain a combination of compressed and raw data in a single response.
 *
 * @property {Object[]} rawHashes
 *   The raw SHA256-formatted entries.
 *   Repeated to allow returning sets of hashes with different prefix sizes.
 *
 *   This object should have the same structure as [RawHashes]{@link google.cloud.webrisk.v1beta1.RawHashes}
 *
 * @property {Object} riceHashes
 *   The encoded 4-byte prefixes of SHA256-formatted entries, using a
 *   Golomb-Rice encoding. The hashes are converted to uint32, sorted in
 *   ascending order, then delta encoded and stored as encoded_data.
 *
 *   This object should have the same structure as [RiceDeltaEncoding]{@link google.cloud.webrisk.v1beta1.RiceDeltaEncoding}
 *
 * @typedef ThreatEntryAdditions
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.ThreatEntryAdditions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const ThreatEntryAdditions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains the set of entries to remove from a local database.
 *
 * @property {Object} rawIndices
 *   The raw removal indices for a local list.
 *
 *   This object should have the same structure as [RawIndices]{@link google.cloud.webrisk.v1beta1.RawIndices}
 *
 * @property {Object} riceIndices
 *   The encoded local, lexicographically-sorted list indices, using a
 *   Golomb-Rice encoding. Used for sending compressed removal indices. The
 *   removal indices (uint32) are sorted in ascending order, then delta encoded
 *   and stored as encoded_data.
 *
 *   This object should have the same structure as [RiceDeltaEncoding]{@link google.cloud.webrisk.v1beta1.RiceDeltaEncoding}
 *
 * @typedef ThreatEntryRemovals
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.ThreatEntryRemovals definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const ThreatEntryRemovals = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A set of raw indices to remove from a local list.
 *
 * @property {number[]} indices
 *   The indices to remove from a lexicographically-sorted local list.
 *
 * @typedef RawIndices
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.RawIndices definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const RawIndices = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The uncompressed threat entries in hash format.
 * Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4
 * bytes, but some hashes are lengthened if they collide with the hash of a
 * popular URI.
 *
 * Used for sending ThreatEntryAdditons to clients that do not support
 * compression, or when sending non-4-byte hashes to clients that do support
 * compression.
 *
 * @property {number} prefixSize
 *   The number of bytes for each prefix encoded below.  This field can be
 *   anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
 *
 * @property {Buffer} rawHashes
 *   The hashes, in binary format, concatenated into one long string. Hashes are
 *   sorted in lexicographic order. For JSON API users, hashes are
 *   base64-encoded.
 *
 * @typedef RawHashes
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.RawHashes definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const RawHashes = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
 * compressed removal indices.
 *
 * @property {number} firstValue
 *   The offset of the first entry in the encoded data, or, if only a single
 *   integer was encoded, that single integer's value. If the field is empty or
 *   missing, assume zero.
 *
 * @property {number} riceParameter
 *   The Golomb-Rice parameter, which is a number between 2 and 28. This field
 *   is missing (that is, zero) if `num_entries` is zero.
 *
 * @property {number} entryCount
 *   The number of entries that are delta encoded in the encoded data. If only a
 *   single integer was encoded, this will be zero and the single value will be
 *   stored in `first_value`.
 *
 * @property {Buffer} encodedData
 *   The encoded deltas that are encoded using the Golomb-Rice coder.
 *
 * @typedef RiceDeltaEncoding
 * @memberof google.cloud.webrisk.v1beta1
 * @see [google.cloud.webrisk.v1beta1.RiceDeltaEncoding definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/webrisk/v1beta1/webrisk.proto}
 */
const RiceDeltaEncoding = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The ways in which threat entry sets can be compressed.
 *
 * @enum {number}
 * @memberof google.cloud.webrisk.v1beta1
 */
const CompressionType = {

  /**
   * Unknown.
   */
  COMPRESSION_TYPE_UNSPECIFIED: 0,

  /**
   * Raw, uncompressed data.
   */
  RAW: 1,

  /**
   * Rice-Golomb encoded data.
   */
  RICE: 2
};

/**
 * The type of threat. This maps dirrectly to the threat list a threat may
 * belong to.
 *
 * @enum {number}
 * @memberof google.cloud.webrisk.v1beta1
 */
const ThreatType = {

  /**
   * Unknown.
   */
  THREAT_TYPE_UNSPECIFIED: 0,

  /**
   * Malware targeting any platform.
   */
  MALWARE: 1,

  /**
   * Social engineering targeting any platform.
   */
  SOCIAL_ENGINEERING: 2,

  /**
   * Unwanted software targeting any platform.
   */
  UNWANTED_SOFTWARE: 3
};