# Changelog

## [3.2.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.1.0...v3.2.0) (2021-12-14)


### Features

* add eslintignore for sameple generated code ([#1302](https://www.github.com/googleapis/nodejs-document-ai/issues/1302)) ([#286](https://www.github.com/googleapis/nodejs-document-ai/issues/286)) ([2baf637](https://www.github.com/googleapis/nodejs-document-ai/commit/2baf63798501748096b8e17500789e067ec66edd))

## [3.1.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.2...v3.1.0) (2021-09-21)


### Features

* turns on self-signed JWT feature flag ([#258](https://www.github.com/googleapis/nodejs-document-ai/issues/258)) ([e39c909](https://www.github.com/googleapis/nodejs-document-ai/commit/e39c909422e03b6ba48ea1163d80bc8a2504d172))


### Bug Fixes

* flag module as GA ([#260](https://www.github.com/googleapis/nodejs-document-ai/issues/260)) ([ecc541c](https://www.github.com/googleapis/nodejs-document-ai/commit/ecc541ce928a0b69a4541d8df941d47b71374938))

### [3.0.2](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.1...v3.0.2) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#253](https://www.github.com/googleapis/nodejs-document-ai/issues/253)) ([ac879c4](https://www.github.com/googleapis/nodejs-document-ai/commit/ac879c425cb75862508527b2cf7cbd34e958684e))
* **deps:** google-gax v2.24.1 ([#257](https://www.github.com/googleapis/nodejs-document-ai/issues/257)) ([4ff6b2d](https://www.github.com/googleapis/nodejs-document-ai/commit/4ff6b2dfa2a5cee97f5dee0690c54f606902a38a))
* Update DocumentUnderstandingService default_host in v1beta2 from a regional endpoint, to non-regional ([#252](https://www.github.com/googleapis/nodejs-document-ai/issues/252)) ([79b8d82](https://www.github.com/googleapis/nodejs-document-ai/commit/79b8d825244748473efcee1d75653aa2b5077055))

### [3.0.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v3.0.0...v3.0.1) (2021-07-21)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#243](https://www.github.com/googleapis/nodejs-document-ai/issues/243)) ([a9e4efd](https://www.github.com/googleapis/nodejs-document-ai/commit/a9e4efd2478def845376a951c40b76e3384a8b29))
* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#245](https://www.github.com/googleapis/nodejs-document-ai/issues/245)) ([06bf319](https://www.github.com/googleapis/nodejs-document-ai/commit/06bf3190cad3c9ce98e13aff718bb11db85dd4e5))

## [3.0.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.10.0...v3.0.0) (2021-07-01)


### ⚠ BREAKING CHANGES

* The default version of the API has changed from `v1beta3` to `v1`.

### Features

* default to v1 of the API ([#220](https://www.github.com/googleapis/nodejs-document-ai/issues/220)) ([5b370d0](https://www.github.com/googleapis/nodejs-document-ai/commit/5b370d06dd0edeefc05d70d99e2ae25890c8546d))
* update document.proto, add the processor management methods. ([#236](https://www.github.com/googleapis/nodejs-document-ai/issues/236)) ([ddc147f](https://www.github.com/googleapis/nodejs-document-ai/commit/ddc147f4ca253e52eb1d419219b5124ba00c93cd))
* update ReviewDocumentRequest to allow set priority and enable validation ([#238](https://www.github.com/googleapis/nodejs-document-ai/issues/238)) ([a39d9d5](https://www.github.com/googleapis/nodejs-document-ai/commit/a39d9d53fc9c25f0ba0f7046704ef9807116120b))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#241](https://www.github.com/googleapis/nodejs-document-ai/issues/241)) ([2576761](https://www.github.com/googleapis/nodejs-document-ai/commit/25767610bc0161ff98c984e6f08a29ff401ff6e4))
* GoogleAdsError missing using generator version after 1.3.0 ([#224](https://www.github.com/googleapis/nodejs-document-ai/issues/224)) ([087b081](https://www.github.com/googleapis/nodejs-document-ai/commit/087b0814467e340e8a1c5e2f860ebe8c083be734))
* make request optional in all cases ([#237](https://www.github.com/googleapis/nodejs-document-ai/issues/237)) ([10e12bb](https://www.github.com/googleapis/nodejs-document-ai/commit/10e12bbcd85818040cf85d9b70fbbaa63bde14e3))
* update default host to documentai.googleapis.com ([#217](https://www.github.com/googleapis/nodejs-document-ai/issues/217)) ([2d30ad0](https://www.github.com/googleapis/nodejs-document-ai/commit/2d30ad0f29e06d3fc83abba7e46f8d53c24762e7))

## [2.10.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.9.0...v2.10.0) (2021-05-12)


### Features

* add confidence field to the PageAnchor.PageRef in document.proto ([#206](https://www.github.com/googleapis/nodejs-document-ai/issues/206)) ([f3154a9](https://www.github.com/googleapis/nodejs-document-ai/commit/f3154a9456c5727b317af34c5a76ca0c7cda9cbb))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#210](https://www.github.com/googleapis/nodejs-document-ai/issues/210)) ([86d31c7](https://www.github.com/googleapis/nodejs-document-ai/commit/86d31c767881ee5524f4285bf828bf674a7d282e))
* use require() to load JSON protos ([#214](https://www.github.com/googleapis/nodejs-document-ai/issues/214)) ([c73202d](https://www.github.com/googleapis/nodejs-document-ai/commit/c73202dba1d62a1b414abe8b1dc39b93c0eb2e7b))

## [2.9.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.8.0...v2.9.0) (2021-04-26)


### Features

* add confidence field to the PageAnchor.PageRef in document.proto ([#204](https://www.github.com/googleapis/nodejs-document-ai/issues/204)) ([580150b](https://www.github.com/googleapis/nodejs-document-ai/commit/580150bdb3b5f7bfac599ee7c122a3ffb9a624c7))

## [2.8.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.7.0...v2.8.0) (2021-04-13)


### Features

* add v1 API surface ([#196](https://www.github.com/googleapis/nodejs-document-ai/issues/196)) ([54b1dc4](https://www.github.com/googleapis/nodejs-document-ai/commit/54b1dc4354c3700d2d729d745edf0de0657d1014))

## [2.7.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.6.0...v2.7.0) (2021-04-12)


### Features

* add EVAL_SKIPPED value to the Provenance.OperationType enum ([#191](https://www.github.com/googleapis/nodejs-document-ai/issues/191)) ([161b3e0](https://www.github.com/googleapis/nodejs-document-ai/commit/161b3e05412e27454f183c77038f3a920a8af8f5))

## [2.6.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.5.0...v2.6.0) (2021-03-15)


### Features

* remove the translation fields in document.proto ([#181](https://www.github.com/googleapis/nodejs-document-ai/issues/181)) ([d76272a](https://www.github.com/googleapis/nodejs-document-ai/commit/d76272a98f527d00a5862299208f8f0ebb054405))

## [2.5.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.4.0...v2.5.0) (2021-02-24)


### Features

* Update documentai/v1beta3 protos: add support for boolean normalized value ([#154](https://www.github.com/googleapis/nodejs-document-ai/issues/154)) ([4ae8c57](https://www.github.com/googleapis/nodejs-document-ai/commit/4ae8c572089cf607810a5e730a4e5807a495bcbc))

## [2.4.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.3.0...v2.4.0) (2021-02-17)


### Features

* Update documentai/v1beta3 protos ([#152](https://www.github.com/googleapis/nodejs-document-ai/issues/152)) ([9e6b660](https://www.github.com/googleapis/nodejs-document-ai/commit/9e6b66000cc12a08c87924ab26ad9a482f03dbeb))

## [2.3.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.2...v2.3.0) (2021-01-09)


### Features

* adds style enumeration ([#143](https://www.github.com/googleapis/nodejs-document-ai/issues/143)) ([0ed64c4](https://www.github.com/googleapis/nodejs-document-ai/commit/0ed64c40cb5908838348cb9c968841941114473c))

### [2.2.2](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.1...v2.2.2) (2020-12-01)


### Bug Fixes

* **browser:** check for fetch on window ([#131](https://www.github.com/googleapis/nodejs-document-ai/issues/131)) ([b7b016e](https://www.github.com/googleapis/nodejs-document-ai/commit/b7b016ed8c45c4da57cbe3eb652cd6b27f3be0f0))

### [2.2.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.2.0...v2.2.1) (2020-11-10)


### Bug Fixes

* do not modify options object ([#125](https://www.github.com/googleapis/nodejs-document-ai/issues/125)) ([acd166f](https://www.github.com/googleapis/nodejs-document-ai/commit/acd166fab67c77101e6d0168d0a74a420fc3df6f))

## [2.2.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.1.1...v2.2.0) (2020-10-17)


### Features

* add v1beta3 version ([#105](https://www.github.com/googleapis/nodejs-document-ai/issues/105)) ([b419994](https://www.github.com/googleapis/nodejs-document-ai/commit/b4199943d8678b9bcaa324e94540652dff40d4e0))
* generation error and set v1beta3 as default ([#112](https://www.github.com/googleapis/nodejs-document-ai/issues/112)) ([83ca094](https://www.github.com/googleapis/nodejs-document-ai/commit/83ca09497a4803e566c58a9a88e5bdac04585743))

### [2.1.1](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.1.0...v2.1.1) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#74](https://www.github.com/googleapis/nodejs-document-ai/issues/74)) ([54782b4](https://www.github.com/googleapis/nodejs-document-ai/commit/54782b440b716967f722dec369556b183d1de878))

## [2.1.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#60](https://www.github.com/googleapis/nodejs-document-ai/issues/60)) ([73ab3b1](https://www.github.com/googleapis/nodejs-document-ai/commit/73ab3b1a98286293b0c639ed0690914de0582987))


### Bug Fixes

* proper fallback option handling ([b4aef10](https://www.github.com/googleapis/nodejs-document-ai/commit/b4aef1014338767666f05de59f04fb60b3600be6))

## [2.0.0](https://www.github.com/googleapis/nodejs-document-ai/compare/v1.0.0...v2.0.0) (2020-05-15)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#54](https://www.github.com/googleapis/nodejs-document-ai/issues/54)) ([d88c23c](https://www.github.com/googleapis/nodejs-document-ai/commit/d88c23cb6722e8b4cac710f87bf1cfee1061a5e3))
* drop node8 support ([#30](https://www.github.com/googleapis/nodejs-document-ai/issues/30)) ([67ff888](https://www.github.com/googleapis/nodejs-document-ai/commit/67ff88835475d12680e2a2af03987160af9d30e5))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#37](https://www.github.com/googleapis/nodejs-document-ai/issues/37)) ([9e6cf01](https://www.github.com/googleapis/nodejs-document-ai/commit/9e6cf011c010bdae157d022fa95edd0ad819862c))
* remove unused dependencies ([#41](https://www.github.com/googleapis/nodejs-document-ai/issues/41)) ([27077e9](https://www.github.com/googleapis/nodejs-document-ai/commit/27077e9348ce2991f0b506384871e42494baa085))
* **deps:** update dependency @google-cloud/storage to v5 ([#56](https://www.github.com/googleapis/nodejs-document-ai/issues/56)) ([934f317](https://www.github.com/googleapis/nodejs-document-ai/commit/934f3170fd5650e766525e7d8b1f580a1eca7fab))
* **samples:** do not pass location ([#39](https://www.github.com/googleapis/nodejs-document-ai/issues/39)) ([2ef2db5](https://www.github.com/googleapis/nodejs-document-ai/commit/2ef2db5f004eb5dcaef27fa85c0d723634661a34))

## 1.0.0 (2020-03-20)


### ⚠ BREAKING CHANGES

* initial generation of beta client (#5)

### Features

* **samples:** adds Document AI parse table, forms samples ([#8](https://www.github.com/googleapis/nodejs-document-ai/issues/8)) ([2fdf913](https://www.github.com/googleapis/nodejs-document-ai/commit/2fdf913a29d5339b65212a3105a59435ebdd11b0))
* adds beta samples ([30a5392](https://www.github.com/googleapis/nodejs-document-ai/commit/30a5392f806399ce233186f3ca3a1bf2bb1be044))
* initial generation of beta client ([#5](https://www.github.com/googleapis/nodejs-document-ai/issues/5)) ([e5a34f1](https://www.github.com/googleapis/nodejs-document-ai/commit/e5a34f1de4ac9993bd51738e7a626a814c2d962a))
* updated library from protos ([#9](https://www.github.com/googleapis/nodejs-document-ai/issues/9)) ([5ef7220](https://www.github.com/googleapis/nodejs-document-ai/commit/5ef722045146cd5dc8f8b7c3383136a9bc253f47))
