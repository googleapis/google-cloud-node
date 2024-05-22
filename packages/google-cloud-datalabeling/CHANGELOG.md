# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/datalabeling?activeTab=versions

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v4.1.0...datalabeling-v4.2.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v4.0.1...datalabeling-v4.1.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5187](https://github.com/googleapis/google-cloud-node/issues/5187)) ([1952fbe](https://github.com/googleapis/google-cloud-node/commit/1952fbe432b96115278d42e5c1dbdbc7de39036b))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v4.0.0...datalabeling-v4.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v3.2.2...datalabeling-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4460](https://github.com/googleapis/google-cloud-node/issues/4460)) ([c32965c](https://github.com/googleapis/google-cloud-node/commit/c32965c0c4a5975ba37371ecd819d9cffb080aa5))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.2.2](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v3.2.1...datalabeling-v3.2.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.2.1](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v3.2.0...datalabeling-v3.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3986](https://github.com/googleapis/google-cloud-node/issues/3986)) ([20f493c](https://github.com/googleapis/google-cloud-node/commit/20f493c94f7d6626d932b2610e00cbdd5df55f22))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/datalabeling-v3.1.1...datalabeling-v3.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [3.1.1](https://github.com/googleapis/nodejs-datalabeling/compare/v3.1.0...v3.1.1) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#373](https://github.com/googleapis/nodejs-datalabeling/issues/373)) ([79cdd8f](https://github.com/googleapis/nodejs-datalabeling/commit/79cdd8f9034fbd65f1db9b50a33116929d529736))
* Better support for fallback mode ([#369](https://github.com/googleapis/nodejs-datalabeling/issues/369)) ([bc2cf61](https://github.com/googleapis/nodejs-datalabeling/commit/bc2cf61fefcd03248a8b1eae492729edc677555a))
* Change import long to require ([#370](https://github.com/googleapis/nodejs-datalabeling/issues/370)) ([7e53220](https://github.com/googleapis/nodejs-datalabeling/commit/7e53220e039ef6ec12a96dfbacd539cbc4948288))
* **deps:** Do not depend on protobufjs ([#365](https://github.com/googleapis/nodejs-datalabeling/issues/365)) ([68c3205](https://github.com/googleapis/nodejs-datalabeling/commit/68c320583fcd4157a2a95aa01c431bf2193d0182))
* **deps:** Use google-gax v3.5.2 ([#379](https://github.com/googleapis/nodejs-datalabeling/issues/379)) ([67a6af6](https://github.com/googleapis/nodejs-datalabeling/commit/67a6af631dcb9919eaa58ccbc2d19f359489f277))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-datalabeling/issues/1553)) ([#372](https://github.com/googleapis/nodejs-datalabeling/issues/372)) ([7740922](https://github.com/googleapis/nodejs-datalabeling/commit/77409220eba817c81a7b87fd535e839a75bcb7d3))
* Preserve default values in x-goog-request-params header ([#374](https://github.com/googleapis/nodejs-datalabeling/issues/374)) ([c2df026](https://github.com/googleapis/nodejs-datalabeling/commit/c2df0262f6135946f0bf81ad89748e80079321c3))
* Regenerated protos JS and TS definitions ([#382](https://github.com/googleapis/nodejs-datalabeling/issues/382)) ([91598fc](https://github.com/googleapis/nodejs-datalabeling/commit/91598fce400d2f9a11b3780f81f8d30be101c864))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-datalabeling/issues/1546)) ([#371](https://github.com/googleapis/nodejs-datalabeling/issues/371)) ([d8844f2](https://github.com/googleapis/nodejs-datalabeling/commit/d8844f29ccfd352b98b91f3422d085934e722f76))
* use google-gax v3.3.0 ([7740922](https://github.com/googleapis/nodejs-datalabeling/commit/77409220eba817c81a7b87fd535e839a75bcb7d3))

## [3.1.0](https://github.com/googleapis/nodejs-datalabeling/compare/v3.0.0...v3.1.0) (2022-07-05)


### Features

* support regapic LRO ([aa77671](https://github.com/googleapis/nodejs-datalabeling/commit/aa77671435d69c4270af35f0d6e5f2be71f1b4b2))

## [3.0.0](https://github.com/googleapis/nodejs-datalabeling/compare/v2.3.0...v3.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#356)

### Bug Fixes

* **datalabeling:** add ancillary service bindings to service_yaml ([#331](https://github.com/googleapis/nodejs-datalabeling/issues/331)) ([1df9ca2](https://github.com/googleapis/nodejs-datalabeling/commit/1df9ca2c5f3bf0a5c937d5372d6ba1324536683f))


### Build System

* update library to use Node 12 ([#356](https://github.com/googleapis/nodejs-datalabeling/issues/356)) ([07afd31](https://github.com/googleapis/nodejs-datalabeling/commit/07afd3120b29225442eb9d38c3756de13766ae50))

## [2.3.0](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.7...v2.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#307](https://www.github.com/googleapis/nodejs-datalabeling/issues/307)) ([adbe0cd](https://www.github.com/googleapis/nodejs-datalabeling/commit/adbe0cdef6538df9055a5e5039161e5a680cb336))

### [2.2.7](https://www.github.com/googleapis/nodejs-datalabeling/compare/v2.2.6...v2.2.7) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#304](https://www.github.com/googleapis/nodejs-datalabeling/issues/304)) ([8835988](https://www.github.com/googleapis/nodejs-datalabeling/commit/88359888f303d90d27b0449dd811e42dadebc5d2))
* **deps:** google-gax v2.24.1 ([#306](https://www.github.com/googleapis/nodejs-datalabeling/issues/306)) ([ea18b87](https://www.github.com/googleapis/nodejs-datalabeling/commit/ea18b87feff1da34b57decb44fea83b3b371b162))

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
