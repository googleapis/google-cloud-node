# Changelog

## [0.8.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.7.0...vectorsearch-v0.8.0) (2026-06-25)


### Features

* Update sources and regenerate ([#8714](https://github.com/googleapis/google-cloud-node/issues/8714)) ([65e2f6d](https://github.com/googleapis/google-cloud-node/commit/65e2f6d327834f4e8e1e39b7b7cbaa1fc29e6cfa))

## [0.7.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.6.1...vectorsearch-v0.7.0) (2026-05-12)


### Features

* [vectorsearch] add preview support for precision reranking via Ranking API. Includes free usage up to a specific quota for vector-search-2 users during the preview period ([#8176](https://github.com/googleapis/google-cloud-node/issues/8176)) ([b781083](https://github.com/googleapis/google-cloud-node/commit/b78108349141a2b7967543419308689b9df0300d))

## [0.6.1](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.6.0...vectorsearch-v0.6.1) (2026-05-01)


### Bug Fixes

* Change the copyright year for files in the packages folder ([#8109](https://github.com/googleapis/google-cloud-node/issues/8109)) ([c1a03fe](https://github.com/googleapis/google-cloud-node/commit/c1a03fe604662091be283055c7d34052c64d6334))
* Do not publish the protos to npm ([#8079](https://github.com/googleapis/google-cloud-node/issues/8079)) ([816216b](https://github.com/googleapis/google-cloud-node/commit/816216bbf51afb25935cd930a0d97ed6efd6b91e))
* Revert "fix: Do not publish the protos to npm" ([#8096](https://github.com/googleapis/google-cloud-node/issues/8096)) ([ac0fbb6](https://github.com/googleapis/google-cloud-node/commit/ac0fbb682409bb117fd54d344df10970a240772f))

## [0.6.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.5.0...vectorsearch-v0.6.0) (2026-04-14)


### Features

* [vectorsearch] Added CMEK support ([#8033](https://github.com/googleapis/google-cloud-node/issues/8033)) ([460e654](https://github.com/googleapis/google-cloud-node/commit/460e654682993b5d0e9b20ef12e92f40d106ecf9))

## [0.5.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.4.0...vectorsearch-v0.5.0) (2026-03-19)


### Features

* [vectorsearch] Mark Vector Search v1 API as GA ([#7610](https://github.com/googleapis/google-cloud-node/issues/7610)) ([451de89](https://github.com/googleapis/google-cloud-node/commit/451de89cdd525b8aac424fc30ead047246ec521b))

## [0.4.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.3.0...vectorsearch-v0.4.0) (2026-03-18)


### ⚠ BREAKING CHANGES

* [vectorsearch] Removed field DenseScannParams from SearchHint ([#7312](https://github.com/googleapis/google-cloud-node/issues/7312))
* Removed obsolete message `VertexRanker`
* [vectorsearch] Removed obsolete field `vertex` from message `.google.cloud.vectorsearch.v1.Ranker`
* Removed obsolete message `VertexRanker`
* [vectorsearch] Removed obsolete field `vertex` from message `.google.cloud.vectorsearch.v1.Ranker`

### Features

* Added index and search configuration management ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))


### Bug Fixes

* [vectorsearch] Removed field DenseScannParams from SearchHint ([#7312](https://github.com/googleapis/google-cloud-node/issues/7312)) ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))
* [vectorsearch] Removed obsolete field `vertex` from message `.google.cloud.vectorsearch.v1.Ranker` ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))
* [vectorsearch] Removed obsolete field `vertex` from message `.google.cloud.vectorsearch.v1.Ranker` ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))
* Removed obsolete message `VertexRanker` ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))
* Removed obsolete message `VertexRanker` ([ba6ce50](https://github.com/googleapis/google-cloud-node/commit/ba6ce501fab130287af546a2c9da1368cb9d3b5c))

## [0.3.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.2.0...vectorsearch-v0.3.0) (2026-03-02)


### ⚠ BREAKING CHANGES

* [vectorsearch] introduce new v1 vectorsearch surface and make it default version ([#7273](https://github.com/googleapis/google-cloud-node/issues/7273))

### Features

* [vectorsearch] introduce new v1 vectorsearch surface and make it default version ([#7273](https://github.com/googleapis/google-cloud-node/issues/7273)) ([0faaf8c](https://github.com/googleapis/google-cloud-node/commit/0faaf8cf11c10c807fad495758c33e601589cf4c))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/vectorsearch-v0.1.0...vectorsearch-v0.2.0) (2026-02-03)


### Features

* [vectorsearch] add SearchHint to SemanticSearch requests ([#7075](https://github.com/googleapis/google-cloud-node/issues/7075)) ([486644d](https://github.com/googleapis/google-cloud-node/commit/486644d1926db8bf8ab38dd7860383b6e0a48fbd))

## 0.1.0 (2025-12-03)


### Features

* Add initial files for google.cloud.vectorsearch.v1beta ([#6906](https://github.com/googleapis/google-cloud-node/issues/6906)) ([cad552e](https://github.com/googleapis/google-cloud-node/commit/cad552ea0441d9f636bbbb7d0298326a14baad8e))


### Bug Fixes

* [gkeconnect-gateway] remove unused GatewayServiceClient ([#6775](https://github.com/googleapis/google-cloud-node/issues/6775)) ([41c2ff2](https://github.com/googleapis/google-cloud-node/commit/41c2ff2851b5fdadabf4f9bd3500167c34b32ff7))
