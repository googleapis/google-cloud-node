# Changelog

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
