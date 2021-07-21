# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datalabeling?activeTab=versions

### [2.2.6](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.5...v2.2.6) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#296](https://www.github.com/googleapis/nodejs-datalabeling/issues/296)) ([b67af5c](https://www.github.com/googleapis/nodejs-datalabeling/commit/b67af5c6eea1142d6b1f08f7dd9213a7078a4d59))

### [2.2.5](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.4...v2.2.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#294](https://www.github.com/googleapis/nodejs-datalabeling/issues/294)) ([f2fc8c0](https://www.github.com/googleapis/nodejs-datalabeling/commit/f2fc8c06a8440311ddf9525c2c16c43c31ce1e7d))

### [2.2.4](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.3...v2.2.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#291](https://www.github.com/googleapis/nodejs-datalabeling/issues/291)) ([ba455a8](https://www.github.com/googleapis/nodejs-datalabeling/commit/ba455a8d574f9bb87c9f7531ba56e199ad0dc8be))

### [2.2.3](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.2...v2.2.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#287](https://www.github.com/googleapis/nodejs-datalabeling/issues/287)) ([2565d60](https://www.github.com/googleapis/nodejs-datalabeling/commit/2565d60b3e98946c216fe040c2e7eb42cee6019f))

### [2.2.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.1...v2.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#279](https://www.github.com/googleapis/nodejs-datalabeling/issues/279)) ([a78809f](https://www.github.com/googleapis/nodejs-datalabeling/commit/a78809f7a83fd774dad8599315938e1cdb6e438a))

### [2.2.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.0...v2.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#270](https://www.github.com/googleapis/nodejs-datalabeling/issues/270)) ([9f1d2fa](https://www.github.com/googleapis/nodejs-datalabeling/commit/9f1d2faacdbb3e9503b450b6c8da4d70bcd4d66f))
* use require() to load JSON protos ([#273](https://www.github.com/googleapis/nodejs-datalabeling/issues/273)) ([4ba477e](https://www.github.com/googleapis/nodejs-datalabeling/commit/4ba477e2f408db02ed08cc4acfc02914273c5b92))

## [2.2.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.1.2...v2.2.0) (2021-01-09)


### Features

* introduces style enumeration ([#242](https://www.github.com/googleapis/nodejs-datalabeling/issues/242)) ([34bd1ec](https://www.github.com/googleapis/nodejs-datalabeling/commit/34bd1ec34d76976cbb96ee75892a62500dbd3cef))

### [2.1.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.1.1...v2.1.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#236](https://www.github.com/googleapis/nodejs-datalabeling/issues/236)) ([a861cd0](https://www.github.com/googleapis/nodejs-datalabeling/commit/a861cd0671cb04baf0f2b40f376fcb974e4c7159))
* do not modify options object, use defaultScopes ([#231](https://www.github.com/googleapis/nodejs-datalabeling/issues/231)) ([6bcb17b](https://www.github.com/googleapis/nodejs-datalabeling/commit/6bcb17b6cc40cbc2448e8722e8918324ae2261e4))

### [2.1.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.1.0...v2.1.1) (2020-07-10)


### Bug Fixes

* typeo in nodejs .gitattribute ([#198](https://www.github.com/googleapis/nodejs-datalabeling/issues/198)) ([494d94c](https://www.github.com/googleapis/nodejs-datalabeling/commit/494d94c6baafe7626feb4eb611e09eb25f7936f2))

## [2.1.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.0.0...v2.1.0) (2020-06-28)


### Features

* move ts target to es2018 from es2016 ([#187](https://www.github.com/googleapis/nodejs-datalabeling/issues/187)) ([c221d20](https://www.github.com/googleapis/nodejs-datalabeling/commit/c221d20ca6db52d9c42940bd37efba8e04130fe2))


### Bug Fixes

* proper fallback option handling ([180d2e2](https://www.github.com/googleapis/nodejs-datalabeling/commit/180d2e2a9f5385e4befd1ebaa78fdac3237d6a71))

## [2.0.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.6.0...v2.0.0) (2020-06-04)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#180](https://www.github.com/googleapis/nodejs-datalabeling/issues/180)) ([914f99c](https://www.github.com/googleapis/nodejs-datalabeling/commit/914f99c2bbd4870ffbd7e4085dcd1e2d1284d77a))
* drop node8 support, support for async iterators ([#161](https://www.github.com/googleapis/nodejs-datalabeling/issues/161)) ([8f6cfa8](https://www.github.com/googleapis/nodejs-datalabeling/commit/8f6cfa8bef7ac591d3432d5a6480305524bf96c9))


### Bug Fixes

* export explicit version from protos.js ([#166](https://www.github.com/googleapis/nodejs-datalabeling/issues/166)) ([7096188](https://www.github.com/googleapis/nodejs-datalabeling/commit/709618898603d50c8c92b01e8bb26a866ed47e3e))
* remove eslint, update gax, fix generated protos, run the generator ([#170](https://www.github.com/googleapis/nodejs-datalabeling/issues/170)) ([35d38b2](https://www.github.com/googleapis/nodejs-datalabeling/commit/35d38b2cde5d19b4c00c88a4a3907e81997f6e35))
* remove unused files from package ([#173](https://www.github.com/googleapis/nodejs-datalabeling/issues/173)) ([7d43739](https://www.github.com/googleapis/nodejs-datalabeling/commit/7d437395f993774eaab20bff1d58cda025e20a54))
* synth.py clean up for multiple version ([#182](https://www.github.com/googleapis/nodejs-datalabeling/issues/182)) ([67f56a1](https://www.github.com/googleapis/nodejs-datalabeling/commit/67f56a18588c3e12615b6ad630b906d745ae6093))

## [1.6.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.5.0...v1.6.0) (2020-03-06)


### Features

* deferred client initialization ([#146](https://www.github.com/googleapis/nodejs-datalabeling/issues/146)) ([cbd8224](https://www.github.com/googleapis/nodejs-datalabeling/commit/cbd82248f93360815e17dbf50098ad3a3ec6360a))

## [1.5.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.2...v1.5.0) (2020-02-29)


### Features

* export protos in src/index.ts ([42812db](https://www.github.com/googleapis/nodejs-datalabeling/commit/42812db5f9c56b744c32314aaf4e7c48c13a62b1))

### [1.4.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.1...v1.4.2) (2020-02-10)


### Bug Fixes

* pass x-goog-request-params header for streaming calls ([e4e78e6](https://www.github.com/googleapis/nodejs-datalabeling/commit/e4e78e69090103a81bea41d6a48040e1803bd924))

### [1.4.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.4.0...v1.4.1) (2020-01-31)


### Bug Fixes

* resource names helper functions; enum, bytes, and Long types now accept strings ([#117](https://www.github.com/googleapis/nodejs-datalabeling/issues/117)) ([e9793d6](https://www.github.com/googleapis/nodejs-datalabeling/commit/e9793d67bc76e781e8f52f700cf20915bac4c3b4))
* update proto files ([3e53076](https://www.github.com/googleapis/nodejs-datalabeling/commit/3e530762affd4896b65921fe7a13717cb0fdcb0d))
* updated proto files ([cc8f27d](https://www.github.com/googleapis/nodejs-datalabeling/commit/cc8f27d05c58a4cba2f5544fad07752f49ca56da))

## [1.4.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.4...v1.4.0) (2020-01-17)


### Features

* move to typescript code generation ([#109](https://www.github.com/googleapis/nodejs-datalabeling/issues/109)) ([381b1eb](https://www.github.com/googleapis/nodejs-datalabeling/commit/381b1eb70eef00ffd4292fbffbddf36d4e13bdec))

### [1.3.4](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.3...v1.3.4) (2019-12-05)


### Bug Fixes

* import long type into proto ts declaration file ([#93](https://www.github.com/googleapis/nodejs-datalabeling/issues/93)) ([7b16da1](https://www.github.com/googleapis/nodejs-datalabeling/commit/7b16da1bc47cc0b235c7a6293ff393d9db2b7538))
* **deps:** pin TypeScript below 3.7.0 ([6b91e93](https://www.github.com/googleapis/nodejs-datalabeling/commit/6b91e93e9c56697c07001323a84733f17992c3c5))

### [1.3.3](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.2...v1.3.3) (2019-11-15)


### Bug Fixes

* **docs:** bump release level to beta ([#89](https://www.github.com/googleapis/nodejs-datalabeling/issues/89)) ([b3467e6](https://www.github.com/googleapis/nodejs-datalabeling/commit/b3467e656733702012348d2819c7ca6829bdc492))

### [1.3.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.1...v1.3.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#85](https://www.github.com/googleapis/nodejs-datalabeling/issues/85)) ([d1ebe18](https://www.github.com/googleapis/nodejs-datalabeling/commit/d1ebe186ae05e0d47d7cc78b095996dad1d4d506))

### [1.3.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#80](https://www.github.com/googleapis/nodejs-datalabeling/issues/80)) ([32a1f60](https://www.github.com/googleapis/nodejs-datalabeling/commit/32a1f608198e0992c206c135784692810155eee6))

## [1.3.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([716b9f6](https://www.github.com/googleapis/nodejs-datalabeling/commit/716b9f6))


### Features

* .d.ts for protos ([#72](https://www.github.com/googleapis/nodejs-datalabeling/issues/72)) ([f6b4d28](https://www.github.com/googleapis/nodejs-datalabeling/commit/f6b4d28))

## [1.2.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.3...v1.2.0) (2019-09-16)


### Bug Fixes

* set proper version # for x-goog-api-client ([aeb0de9](https://www.github.com/googleapis/nodejs-datalabeling/commit/aeb0de9))


### Features

* load protos from JSON, grpc-fallback support ([3bc5d92](https://www.github.com/googleapis/nodejs-datalabeling/commit/3bc5d92))

### [1.1.3](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.2...v1.1.3) (2019-08-02)


### Bug Fixes

* allow calls with no request, add JSON proto ([ed3743f](https://www.github.com/googleapis/nodejs-datalabeling/commit/ed3743f))

### [1.1.2](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#51](https://www.github.com/googleapis/nodejs-datalabeling/issues/51)) ([8976320](https://www.github.com/googleapis/nodejs-datalabeling/commit/8976320))

### [1.1.1](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#46](https://www.github.com/googleapis/nodejs-datalabeling/issues/46)) ([d670a96](https://www.github.com/googleapis/nodejs-datalabeling/commit/d670a96))

## [1.1.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v1.0.0...v1.1.0) (2019-06-06)


### Features

* support apiEndpoint override in client constructor ([#41](https://www.github.com/googleapis/nodejs-datalabeling/issues/41)) ([7989746](https://www.github.com/googleapis/nodejs-datalabeling/commit/7989746))
* support apiEndpoint override in client constructor ([#43](https://www.github.com/googleapis/nodejs-datalabeling/issues/43)) ([0bfe818](https://www.github.com/googleapis/nodejs-datalabeling/commit/0bfe818))

## [1.0.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v0.1.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#18)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#16](https://www.github.com/googleapis/nodejs-datalabeling/issues/16)) ([2783120](https://www.github.com/googleapis/nodejs-datalabeling/commit/2783120))
* DEADLINE_EXCEEDED is no longer retried ([5cedb2d](https://www.github.com/googleapis/nodejs-datalabeling/commit/5cedb2d))
* DEADLINE_EXCEEDED retry code is idempotent ([#27](https://www.github.com/googleapis/nodejs-datalabeling/issues/27)) ([00a9c2e](https://www.github.com/googleapis/nodejs-datalabeling/commit/00a9c2e))
* **deps:** update dependency google-gax to v1 ([#26](https://www.github.com/googleapis/nodejs-datalabeling/issues/26)) ([482dab5](https://www.github.com/googleapis/nodejs-datalabeling/commit/482dab5))


### Build System

* upgrade engines field to >=8.10.0 ([#18](https://www.github.com/googleapis/nodejs-datalabeling/issues/18)) ([5affe85](https://www.github.com/googleapis/nodejs-datalabeling/commit/5affe85))

## v0.1.0

04-05-2019 14:33 PDT

This is the initial release of the Node.js Data Labeling API client library.
