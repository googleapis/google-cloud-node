# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/kms?activeTab=versions

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/kms-v4.0.0...kms-v4.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.8.0...kms-v4.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))
* [kms] migrate to Node 14

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* [kms] migrate to Node 14 ([bfddc7d](https://github.com/googleapis/google-cloud-node/commit/bfddc7d657096d8dab16118afecca68821458a70))
* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [3.8.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.7.0...kms-v3.8.0) (2023-07-24)


### Features

* [kms] add interoperable symmetric encryption system ([#4431](https://github.com/googleapis/google-cloud-node/issues/4431)) ([28b5dca](https://github.com/googleapis/google-cloud-node/commit/28b5dca1c319bb74b7e087044cd99eb4d6971783))

## [3.7.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.6.0...kms-v3.7.0) (2023-07-11)


### Features

* [kms] add interoperable symmetric encryption system ([#4389](https://github.com/googleapis/google-cloud-node/issues/4389)) ([685b1ad](https://github.com/googleapis/google-cloud-node/commit/685b1ad505b25a45763ade68d1d0b8917cb262c7))

## [3.6.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.5.1...kms-v3.6.0) (2023-05-20)


### Features

* [kms] added VerifyConnectivity RPC ([#4274](https://github.com/googleapis/google-cloud-node/issues/4274)) ([bf56319](https://github.com/googleapis/google-cloud-node/commit/bf5631932cd0f2f52c23caaba235b04222a1a609))

## [3.5.1](https://github.com/googleapis/google-cloud-node/compare/kms-v3.5.0...kms-v3.5.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [3.5.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.4.0...kms-v3.5.0) (2023-03-13)


### Features

* Add support for Coordinated External Keys ([cb0ae8f](https://github.com/googleapis/google-cloud-node/commit/cb0ae8f35987770884741683cebf7d6d3d1fd093))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.3.1...kms-v3.4.0) (2023-03-02)


### Features

* Add initial files for google.cloud.kms.inventory.v1 ([#4011](https://github.com/googleapis/google-cloud-node/issues/4011)) ([44756d7](https://github.com/googleapis/google-cloud-node/commit/44756d7c15642a065628cd4a598198a56584dbff))

## [3.3.1](https://github.com/googleapis/google-cloud-node/compare/kms-v3.3.0...kms-v3.3.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.2.0...kms-v3.3.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/kms-v3.1.0...kms-v3.2.0) (2022-12-16)


### Features

* Add SHA-2 import methods ([#3678](https://github.com/googleapis/google-cloud-node/issues/3678)) ([2bdc13c](https://github.com/googleapis/google-cloud-node/commit/2bdc13c92d6818a3a7eb51209a4dbff321855bc6))

## [3.1.0](https://github.com/googleapis/nodejs-kms/compare/v3.0.1...v3.1.0) (2022-11-11)


### Features

* **kms:** Enable generation of Locations mixin ([#578](https://github.com/googleapis/nodejs-kms/issues/578)) ([5205ddc](https://github.com/googleapis/nodejs-kms/commit/5205ddc20daa79b1d39b89e2c7ea7063a4f5d93e))


### Bug Fixes

* Allow passing gax instance to client constructor ([#570](https://github.com/googleapis/nodejs-kms/issues/570)) ([1072346](https://github.com/googleapis/nodejs-kms/commit/1072346f45496885a6cba33dbb5e72f500661656))
* Better support for fallback mode ([#565](https://github.com/googleapis/nodejs-kms/issues/565)) ([ebb7caf](https://github.com/googleapis/nodejs-kms/commit/ebb7caf95716814af6e1f3d0b423f68dba289593))
* Change import long to require ([#566](https://github.com/googleapis/nodejs-kms/issues/566)) ([ac44194](https://github.com/googleapis/nodejs-kms/commit/ac4419470711d19d30811e3ff88659e0484ce38d))
* **deps:** Use google-gax v3.5.2 ([#581](https://github.com/googleapis/nodejs-kms/issues/581)) ([54c26f3](https://github.com/googleapis/nodejs-kms/commit/54c26f3f97c1e65ee2cc3f85cfed9c8a4b974432))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-kms/issues/1553)) ([#569](https://github.com/googleapis/nodejs-kms/issues/569)) ([c981d1a](https://github.com/googleapis/nodejs-kms/commit/c981d1a423c86a86b2b0ca47f09cedf26be1f28a))
* Preserve default values in x-goog-request-params header ([#573](https://github.com/googleapis/nodejs-kms/issues/573)) ([2ab539d](https://github.com/googleapis/nodejs-kms/commit/2ab539dd02674f010c10e6933da8d06da0e983b5))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-kms/issues/1546)) ([#568](https://github.com/googleapis/nodejs-kms/issues/568)) ([e704093](https://github.com/googleapis/nodejs-kms/commit/e704093f79aefe6706bae5b62e78525705366fe6))
* use google-gax v3.3.0 ([c981d1a](https://github.com/googleapis/nodejs-kms/commit/c981d1a423c86a86b2b0ca47f09cedf26be1f28a))

## [3.0.1](https://github.com/googleapis/nodejs-kms/compare/v3.0.0...v3.0.1) (2022-06-30)


### Bug Fixes

* **docs:** document fallback rest option ([#561](https://github.com/googleapis/nodejs-kms/issues/561)) ([df8b28f](https://github.com/googleapis/nodejs-kms/commit/df8b28ff9db20a089bbf730038e4051f89f5c4dd))

## [3.0.0](https://github.com/googleapis/nodejs-kms/compare/v2.11.1...v3.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#556)

### Build System

* update library to use Node 12 ([#556](https://github.com/googleapis/nodejs-kms/issues/556)) ([c53f95a](https://github.com/googleapis/nodejs-kms/commit/c53f95abfed91cda76ed480806d38ea77a98aad5))

### [2.11.1](https://github.com/googleapis/nodejs-kms/compare/v2.11.0...v2.11.1) (2022-04-08)


### Bug Fixes

* **docs:** document that fast-crc32c must be installed ([#546](https://github.com/googleapis/nodejs-kms/issues/546)) ([57253bb](https://github.com/googleapis/nodejs-kms/commit/57253bb85e91d8d1273cea9ec170a910247b61ab))

## [2.11.0](https://github.com/googleapis/nodejs-kms/compare/v2.10.0...v2.11.0) (2022-02-03)


### Features

* add a new EkmService API ([#532](https://github.com/googleapis/nodejs-kms/issues/532)) ([f62a19c](https://github.com/googleapis/nodejs-kms/commit/f62a19ca3944a48e981cee17415f5b5456a7054a))

## [2.10.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.9.0...v2.10.0) (2021-10-19)


### Features

* add support for Raw PKCS[#1](https://www.github.com/googleapis/nodejs-kms/issues/1) signing keys ([#509](https://www.github.com/googleapis/nodejs-kms/issues/509)) ([3dfb35d](https://www.github.com/googleapis/nodejs-kms/commit/3dfb35dbe8847d8fbc0635a624e6deff7830d547))

## [2.9.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.8.1...v2.9.0) (2021-10-14)


### Features

* add OAEP+SHA1 to the list of supported algorithms ([#503](https://www.github.com/googleapis/nodejs-kms/issues/503)) ([00cc42e](https://www.github.com/googleapis/nodejs-kms/commit/00cc42ed9a30650fc88d27c8205e08bb305dd0f8))
* add RPC retry information for MacSign, MacVerify, and GenerateRandomBytes Committer: [@bdhess](https://www.github.com/bdhess) ([#506](https://www.github.com/googleapis/nodejs-kms/issues/506)) ([08cd155](https://www.github.com/googleapis/nodejs-kms/commit/08cd15524662ba81a35761df592ea8ce1557e023))

### [2.8.1](https://www.github.com/googleapis/nodejs-kms/compare/v2.8.0...v2.8.1) (2021-09-03)


### Bug Fixes

* **build:** migrate to main branch ([#496](https://www.github.com/googleapis/nodejs-kms/issues/496)) ([b1804fb](https://www.github.com/googleapis/nodejs-kms/commit/b1804fbc2bc85cbc03c50c82f33690682dd91d58))

## [2.8.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.7.0...v2.8.0) (2021-08-30)


### Features

* add support for Key Reimport ([#493](https://www.github.com/googleapis/nodejs-kms/issues/493)) ([9728525](https://www.github.com/googleapis/nodejs-kms/commit/97285257ec5c28821eb9c7c8d4bb50d2729bf95a))

## [2.7.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.6.0...v2.7.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#490](https://www.github.com/googleapis/nodejs-kms/issues/490)) ([3db7ee5](https://www.github.com/googleapis/nodejs-kms/commit/3db7ee57cbf22a27f639df150c4a408107dfcde6))

## [2.6.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.5.0...v2.6.0) (2021-08-17)


### Features

* **kms:** add samples for new rng and hmac kms apis ([#487](https://www.github.com/googleapis/nodejs-kms/issues/487)) ([5278a8e](https://www.github.com/googleapis/nodejs-kms/commit/5278a8e62c14fcc5cc02e4bd7b36e68a4ed48b72))


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#489](https://www.github.com/googleapis/nodejs-kms/issues/489)) ([f5e8569](https://www.github.com/googleapis/nodejs-kms/commit/f5e85696de33d8870951d684b491338fc3c029f3))

## [2.5.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.4.4...v2.5.0) (2021-08-05)


### Features

* add support for HMAC, Variable Key Destruction, and GenerateRandom ([#484](https://www.github.com/googleapis/nodejs-kms/issues/484)) ([c207423](https://www.github.com/googleapis/nodejs-kms/commit/c207423806e36057d74244e1c79294f595e5a740))

### [2.4.4](https://www.github.com/googleapis/nodejs-kms/compare/v2.4.3...v2.4.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#476](https://www.github.com/googleapis/nodejs-kms/issues/476)) ([5332b9f](https://www.github.com/googleapis/nodejs-kms/commit/5332b9f924b3102aeb0c6fb704c8fe451746ce84))

### [2.4.3](https://www.github.com/googleapis/nodejs-kms/compare/v2.4.2...v2.4.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#474](https://www.github.com/googleapis/nodejs-kms/issues/474)) ([1e1a3fc](https://www.github.com/googleapis/nodejs-kms/commit/1e1a3fcb437cdfb86e3fcb06ac34a329898b970a))

### [2.4.2](https://www.github.com/googleapis/nodejs-kms/compare/v2.4.1...v2.4.2) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#471](https://www.github.com/googleapis/nodejs-kms/issues/471)) ([9841f22](https://www.github.com/googleapis/nodejs-kms/commit/9841f227e64da2ee6158b6c43a0339c2b1fa8e3a))

### [2.4.1](https://www.github.com/googleapis/nodejs-kms/compare/v2.4.0...v2.4.1) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#466](https://www.github.com/googleapis/nodejs-kms/issues/466)) ([bba9a58](https://www.github.com/googleapis/nodejs-kms/commit/bba9a58b087c96ff66adbde8702599aac05fc4a1))

## [2.4.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.3.3...v2.4.0) (2021-06-14)


### Features

* add ECDSA secp256k1 to the list of supported algorithms ([#464](https://www.github.com/googleapis/nodejs-kms/issues/464)) ([a27f95d](https://www.github.com/googleapis/nodejs-kms/commit/a27f95dffdea8a803d02da443a38b10ed7720c86))

### [2.3.3](https://www.github.com/googleapis/nodejs-kms/compare/v2.3.2...v2.3.3) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#456](https://www.github.com/googleapis/nodejs-kms/issues/456)) ([6f9ceae](https://www.github.com/googleapis/nodejs-kms/commit/6f9ceae5600620e889fb87f6ab250c951d73c3c3))

### [2.3.2](https://www.github.com/googleapis/nodejs-kms/compare/v2.3.1...v2.3.2) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#447](https://www.github.com/googleapis/nodejs-kms/issues/447)) ([5fcb7ff](https://www.github.com/googleapis/nodejs-kms/commit/5fcb7ff15d68346f786ac6d0652547232d016f3a))
* use require() to load JSON protos ([#450](https://www.github.com/googleapis/nodejs-kms/issues/450)) ([bd67dfb](https://www.github.com/googleapis/nodejs-kms/commit/bd67dfba1a813ef7dd67437c3df76fa4b2aaa1c1))

### [2.3.1](https://www.github.com/googleapis/nodejs-kms/compare/v2.3.0...v2.3.1) (2021-02-12)


### Bug Fixes

* do not retry on 13 INTERNAL ([#418](https://www.github.com/googleapis/nodejs-kms/issues/418)) ([3f6014a](https://www.github.com/googleapis/nodejs-kms/commit/3f6014ac2cbd6988fd400d076ad46920d3039d5c))

## [2.3.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.2.0...v2.3.0) (2021-01-08)


### Features

* **samples:** add integrity verification to Cloud KMS crypto samples ([#409](https://www.github.com/googleapis/nodejs-kms/issues/409)) ([d2897f6](https://www.github.com/googleapis/nodejs-kms/commit/d2897f681ae409b34a50b91ea718fa9e294895c5))

## [2.2.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.1.4...v2.2.0) (2021-01-06)


### Features

* introduces style enum ([7e8c957](https://www.github.com/googleapis/nodejs-kms/commit/7e8c957bd457939fb27e9922b4c92ae1e98c4961))

### [2.1.4](https://www.github.com/googleapis/nodejs-kms/compare/v2.1.3...v2.1.4) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#404](https://www.github.com/googleapis/nodejs-kms/issues/404)) ([96a90e3](https://www.github.com/googleapis/nodejs-kms/commit/96a90e3bea1c8b7e8e2d57cc1eb6204ed326b915))

### [2.1.3](https://www.github.com/googleapis/nodejs-kms/compare/v2.1.2...v2.1.3) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#399](https://www.github.com/googleapis/nodejs-kms/issues/399)) ([288b417](https://www.github.com/googleapis/nodejs-kms/commit/288b4172079145686ca9c129005ba27dec788712))

### [2.1.2](https://www.github.com/googleapis/nodejs-kms/compare/v2.1.1...v2.1.2) (2020-06-12)


### Bug Fixes

* handle fallback option properly ([753a5b5](https://www.github.com/googleapis/nodejs-kms/commit/753a5b546a69131fe2627236871d4aa2cf5b1012))

### [2.1.1](https://www.github.com/googleapis/nodejs-kms/compare/v2.1.0...v2.1.1) (2020-06-08)


### Bug Fixes

* samples-test script ([#338](https://www.github.com/googleapis/nodejs-kms/issues/338)) ([b3b0c70](https://www.github.com/googleapis/nodejs-kms/commit/b3b0c70b082e4cc7de3063428b20a9b43d1844a5))

## [2.1.0](https://www.github.com/googleapis/nodejs-kms/compare/v2.0.0...v2.1.0) (2020-06-04)


### Features

* clean up synth.py by using IAM service option from generator ([#305](https://www.github.com/googleapis/nodejs-kms/issues/305)) ([797ee55](https://www.github.com/googleapis/nodejs-kms/commit/797ee5581a60b66f841951a90bbd2ba3995da58d))
* **samples:** add new samples ([#324](https://www.github.com/googleapis/nodejs-kms/issues/324)) ([eb1c213](https://www.github.com/googleapis/nodejs-kms/commit/eb1c2137195137858b344e6d2ebace3005d87fe2))


### Bug Fixes

* regen protos and tests, fix formatting ([#329](https://www.github.com/googleapis/nodejs-kms/issues/329)) ([e6083a9](https://www.github.com/googleapis/nodejs-kms/commit/e6083a9c3d1e3c97785faee3bdfbe8bcce14d3ee))
* remove eslint, update gax, fix generated protos, run the generator ([#309](https://www.github.com/googleapis/nodejs-kms/issues/309)) ([54fccb6](https://www.github.com/googleapis/nodejs-kms/commit/54fccb61a01d31fc1e5bec3b73a300fd8fed502e))
* synth.py clean up for multiple version ([#330](https://www.github.com/googleapis/nodejs-kms/issues/330)) ([50de8d0](https://www.github.com/googleapis/nodejs-kms/commit/50de8d069c95b12e10daed40f1743d710fac7eff))
* update common protos and fix synth ([#336](https://www.github.com/googleapis/nodejs-kms/issues/336)) ([3ed7e67](https://www.github.com/googleapis/nodejs-kms/commit/3ed7e67e5fbb459b478afb38770fb217ee6f81f4))

## [2.0.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.6.3...v2.0.0) (2020-04-07)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

New feature: methods with pagination now support async iteration.
* move to typescript code generation (#264)

### Features

* add support for Cloud EKM to the Cloud KMS service and resource protos ([#306](https://www.github.com/googleapis/nodejs-kms/issues/306)) ([f6e28c7](https://www.github.com/googleapis/nodejs-kms/commit/f6e28c788600d24e89ced41d834ec091600d1238))
* deferred client initialization ([#286](https://www.github.com/googleapis/nodejs-kms/issues/286)) ([e116119](https://www.github.com/googleapis/nodejs-kms/commit/e11611913e553ac2581c528692174c6e4c0cb627))
* drop node8 support, support for async iterators ([#300](https://www.github.com/googleapis/nodejs-kms/issues/300)) ([c2ca42e](https://www.github.com/googleapis/nodejs-kms/commit/c2ca42e06286910a94981c5bb2e3989b1f1de2a7))
* move to typescript code generation ([#264](https://www.github.com/googleapis/nodejs-kms/issues/264)) ([ad02c1c](https://www.github.com/googleapis/nodejs-kms/commit/ad02c1c9978c9489314130a9fcee81d1d0244a0c))


### Bug Fixes

* export explicit version in protos.js ([#303](https://www.github.com/googleapis/nodejs-kms/issues/303)) ([90e1b52](https://www.github.com/googleapis/nodejs-kms/commit/90e1b52bd25265500c9c150e9f0c765bb250c309))

### [1.6.3](https://www.github.com/googleapis/nodejs-kms/compare/v1.6.2...v1.6.3) (2020-02-10)


### Bug Fixes

* proto messages now accept strings for enums ([b5241d9](https://www.github.com/googleapis/nodejs-kms/commit/b5241d9748864344e68f088d92f59a4fb7032afd))

### [1.6.2](https://www.github.com/googleapis/nodejs-kms/compare/v1.6.1...v1.6.2) (2020-01-09)


### Bug Fixes

* protos: removed extra resource annotations, no code changes ([b3d99be](https://www.github.com/googleapis/nodejs-kms/commit/b3d99bed61a3f28cb8a000b8ea84589979deeffd))

### [1.6.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.6.0...v1.6.1) (2020-01-05)


### Bug Fixes

* updated proto annotations ([#258](https://www.github.com/googleapis/nodejs-kms/issues/258)) ([b05916b](https://www.github.com/googleapis/nodejs-kms/commit/b05916b35b9f280ba8cbfea5044d52137bd9081c))

## [1.6.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.5.3...v1.6.0) (2019-12-31)


### Features

* **samples:** add asymmetric samples ([#241](https://www.github.com/googleapis/nodejs-kms/issues/241)) ([563b941](https://www.github.com/googleapis/nodejs-kms/commit/563b94187df53d5e4a2ab5a07bb7d2d8dad086b5))


### Bug Fixes

* remove superfluous base64-encoding/decoding ([#242](https://www.github.com/googleapis/nodejs-kms/issues/242)) ([aad6cc4](https://www.github.com/googleapis/nodejs-kms/commit/aad6cc451952f42b96d752f31399a2c364f07610))
* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#246](https://www.github.com/googleapis/nodejs-kms/issues/246)) ([d274c2a](https://www.github.com/googleapis/nodejs-kms/commit/d274c2aa336ffa57bc517cabd00cabdead0e518b))

### [1.5.3](https://www.github.com/googleapis/nodejs-kms/compare/v1.5.2...v1.5.3) (2019-11-18)


### Bug Fixes

* **docs:** bump release level to GA ([#235](https://www.github.com/googleapis/nodejs-kms/issues/235)) ([d753095](https://www.github.com/googleapis/nodejs-kms/commit/d753095e4b5d623538e20477b69ed96ca801346a))

### [1.5.2](https://www.github.com/googleapis/nodejs-kms/compare/v1.5.1...v1.5.2) (2019-11-14)


### Bug Fixes

* **docs:** snippets are now replaced in jsdoc comments ([#230](https://www.github.com/googleapis/nodejs-kms/issues/230)) ([ed142f3](https://www.github.com/googleapis/nodejs-kms/commit/ed142f3479c3fe5b98c65e05b6debfded1bad9b1))
* import long into proto ts declaration file ([#231](https://www.github.com/googleapis/nodejs-kms/issues/231)) ([bc21cff](https://www.github.com/googleapis/nodejs-kms/commit/bc21cff485bccd679c248a3f9c1137fa99775f76))

### [1.5.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.5.0...v1.5.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#220](https://www.github.com/googleapis/nodejs-kms/issues/220)) ([f409971](https://www.github.com/googleapis/nodejs-kms/commit/f409971f331438c01316ef8536904d0e72d18243))

## [1.5.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.4.0...v1.5.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([b674eee](https://www.github.com/googleapis/nodejs-kms/commit/b674eee))


### Features

* .d.ts for protos ([#210](https://www.github.com/googleapis/nodejs-kms/issues/210)) ([e7ca801](https://www.github.com/googleapis/nodejs-kms/commit/e7ca801))

## [1.4.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.3.2...v1.4.0) (2019-09-16)


### Features

* load protos from JSON, grpc-fallback support ([628f665](https://www.github.com/googleapis/nodejs-kms/commit/628f665))

### [1.3.2](https://www.github.com/googleapis/nodejs-kms/compare/v1.3.1...v1.3.2) (2019-08-28)


### Bug Fixes

* update retry code settings per API call ([#196](https://www.github.com/googleapis/nodejs-kms/issues/196)) ([3ce2076](https://www.github.com/googleapis/nodejs-kms/commit/3ce2076))
* use process versions object for client header ([#199](https://www.github.com/googleapis/nodejs-kms/issues/199)) ([900eb1b](https://www.github.com/googleapis/nodejs-kms/commit/900eb1b))
* **docs:** stop redirecting reference docs to anchor link ([9edd953](https://www.github.com/googleapis/nodejs-kms/commit/9edd953))

### [1.3.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.3.0...v1.3.1) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([e50e0ef](https://www.github.com/googleapis/nodejs-kms/commit/e50e0ef))

## [1.3.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.2.1...v1.3.0) (2019-07-02)


### Features

* add IAM Policy Options ([#186](https://www.github.com/googleapis/nodejs-kms/issues/186)) ([7474dff](https://www.github.com/googleapis/nodejs-kms/commit/7474dff))

### [1.2.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.2.0...v1.2.1) (2019-06-27)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#183](https://www.github.com/googleapis/nodejs-kms/issues/183)) ([7c40adf](https://www.github.com/googleapis/nodejs-kms/commit/7c40adf))

## [1.2.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.1.1...v1.2.0) (2019-06-24)


### Features

* introduces CreateImportJob, ListImportJob, GetImportJob  ([#180](https://www.github.com/googleapis/nodejs-kms/issues/180)) ([9fb4efb](https://www.github.com/googleapis/nodejs-kms/commit/9fb4efb))

### [1.1.1](https://www.github.com/googleapis/nodejs-kms/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#177](https://www.github.com/googleapis/nodejs-kms/issues/177)) ([50d93e7](https://www.github.com/googleapis/nodejs-kms/commit/50d93e7))

## [1.1.0](https://www.github.com/googleapis/nodejs-kms/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#173](https://www.github.com/googleapis/nodejs-kms/issues/173)) ([0e67019](https://www.github.com/googleapis/nodejs-kms/commit/0e67019))

## [1.0.0](https://www.github.com/googleapis/nodejs-kms/compare/v0.4.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#151)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#149](https://www.github.com/googleapis/nodejs-kms/issues/149)) ([b92c822](https://www.github.com/googleapis/nodejs-kms/commit/b92c822))
* DEADLINE_EXCEEDED is no longer retried ([5f4f9ff](https://www.github.com/googleapis/nodejs-kms/commit/5f4f9ff))
* DEADLINE_EXCEEDED retry code is idempotent ([#159](https://www.github.com/googleapis/nodejs-kms/issues/159)) ([a7e511a](https://www.github.com/googleapis/nodejs-kms/commit/a7e511a))
* indicate that Encrypt, Decrypt, AsymmetricDecrypt, AsymmetricSign are idempotent, such that they're retried ([122b3f8](https://www.github.com/googleapis/nodejs-kms/commit/122b3f8))
* **deps:** update dependency google-gax to v1 ([#158](https://www.github.com/googleapis/nodejs-kms/issues/158)) ([91fe078](https://www.github.com/googleapis/nodejs-kms/commit/91fe078))


### Build System

* upgrade engines field to >=8.10.0 ([#151](https://www.github.com/googleapis/nodejs-kms/issues/151)) ([45b2a9f](https://www.github.com/googleapis/nodejs-kms/commit/45b2a9f))

## v0.4.0

03-13-2019 16:16 PDT

### New Features
- feat: add support for the CAVIUM_V2_COMPRESSED type ([#126](https://github.com/googleapis/nodejs-kms/pull/126))

### Bug Fixes
- fix: throw on invalid credentials
- fix(deps): update dependency google-gax to ^0.25.0 ([#113](https://github.com/googleapis/nodejs-kms/pull/113))

### Documentation
- docs: update links in contrib guide ([#125](https://github.com/googleapis/nodejs-kms/pull/125))
- docs: update contributing path in README ([#119](https://github.com/googleapis/nodejs-kms/pull/119))
- docs: move CONTRIBUTING.md to root ([#118](https://github.com/googleapis/nodejs-kms/pull/118))
- docs: add lint/fix example to contributing guide ([#116](https://github.com/googleapis/nodejs-kms/pull/116))
- docs: fix example comments ([#115](https://github.com/googleapis/nodejs-kms/pull/115))

### Internal / Testing Changes
- refactor: update json import paths ([#134](https://github.com/googleapis/nodejs-kms/pull/134))
- build: Add docuploader credentials to node publish jobs ([#132](https://github.com/googleapis/nodejs-kms/pull/132))
- build: use node10 to run samples-test, system-test etc ([#131](https://github.com/googleapis/nodejs-kms/pull/131))
- build: update release configuration
- chore: sync latest proto docs
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#124](https://github.com/googleapis/nodejs-kms/pull/124))
- chore(deps): update dependency yargs to v13 ([#122](https://github.com/googleapis/nodejs-kms/pull/122))
- build: create docs test npm scripts ([#121](https://github.com/googleapis/nodejs-kms/pull/121))
- build: test using @grpc/grpc-js in CI ([#120](https://github.com/googleapis/nodejs-kms/pull/120))
- refactor: improve generated code style. ([#114](https://github.com/googleapis/nodejs-kms/pull/114))
- chore(deps): update dependency eslint-config-prettier to v4 ([#112](https://github.com/googleapis/nodejs-kms/pull/112))
- test: add a system test to list global keys ([#111](https://github.com/googleapis/nodejs-kms/pull/111))
- build: ignore googleapis.com in doc link check ([#108](https://github.com/googleapis/nodejs-kms/pull/108))
- chore: sync gapic files

## v0.3.0

01-15-2019 10:50 PST

### Implementation Changes
- Add iam_policy proto ([#101](https://github.com/googleapis/nodejs-kms/pull/101))

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#105](https://github.com/googleapis/nodejs-kms/pull/105))
- fix(deps): update dependency google-gax to ^0.22.0 ([#73](https://github.com/googleapis/nodejs-kms/pull/73))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#71](https://github.com/googleapis/nodejs-kms/pull/71))
- chore(deps): update dependency through2 to v3 ([#67](https://github.com/googleapis/nodejs-kms/pull/67))
- chore(deps): update dependency eslint-plugin-node to v8 ([#59](https://github.com/googleapis/nodejs-kms/pull/59))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#44](https://github.com/googleapis/nodejs-kms/pull/44))

### Documentation
- build: check broken links in generated docs ([#102](https://github.com/googleapis/nodejs-kms/pull/102))
- fix(docs): remove unused IAM message types ([#103](https://github.com/googleapis/nodejs-kms/pull/103))
- docs: Changes 'dencrypt' to 'decrypt' ([#97](https://github.com/googleapis/nodejs-kms/pull/97))
- docs: add samples ([#88](https://github.com/googleapis/nodejs-kms/pull/88))
- docs: update readme badges ([#81](https://github.com/googleapis/nodejs-kms/pull/81))

### Internal / Testing Changes
- chore(build): inject yoshi automation key ([#96](https://github.com/googleapis/nodejs-kms/pull/96))
- chore: update nyc and eslint configs ([#95](https://github.com/googleapis/nodejs-kms/pull/95))
- chore: fix publish.sh permission +x ([#93](https://github.com/googleapis/nodejs-kms/pull/93))
- fix(build): fix Kokoro release script ([#92](https://github.com/googleapis/nodejs-kms/pull/92))
- build: add Kokoro configs for autorelease ([#91](https://github.com/googleapis/nodejs-kms/pull/91))
- chore: always nyc report before calling codecov ([#87](https://github.com/googleapis/nodejs-kms/pull/87))
- chore: nyc ignore build/test by default ([#86](https://github.com/googleapis/nodejs-kms/pull/86))
- chore: update the renovate config ([#84](https://github.com/googleapis/nodejs-kms/pull/84))
- chore: update license file ([#83](https://github.com/googleapis/nodejs-kms/pull/83))
- fix(build): fix system key decryption ([#79](https://github.com/googleapis/nodejs-kms/pull/79))
- chore: add a synth.metadata
- chore: update eslintignore config ([#72](https://github.com/googleapis/nodejs-kms/pull/72))
- chore: update lint rules ([#69](https://github.com/googleapis/nodejs-kms/pull/69))
- chore: drop contributors from multiple places ([#70](https://github.com/googleapis/nodejs-kms/pull/70))
- chore: use latest npm on Windows ([#68](https://github.com/googleapis/nodejs-kms/pull/68))
- chore: update CircleCI config ([#66](https://github.com/googleapis/nodejs-kms/pull/66))
- chore: include build in eslintignore ([#63](https://github.com/googleapis/nodejs-kms/pull/63))
- chore: update issue templates ([#58](https://github.com/googleapis/nodejs-kms/pull/58))
- chore: remove old issue template ([#56](https://github.com/googleapis/nodejs-kms/pull/56))
- build: run tests on node11 ([#55](https://github.com/googleapis/nodejs-kms/pull/55))
- chores(build): do not collect sponge.xml from windows builds ([#54](https://github.com/googleapis/nodejs-kms/pull/54))
- chores(build): run codecov on continuous builds ([#53](https://github.com/googleapis/nodejs-kms/pull/53))
- chore: update new issue template ([#52](https://github.com/googleapis/nodejs-kms/pull/52))
- build: fix codecov uploading on Kokoro ([#48](https://github.com/googleapis/nodejs-kms/pull/48))
- Update kokoro config ([#45](https://github.com/googleapis/nodejs-kms/pull/45))
- test: remove appveyor config ([#41](https://github.com/googleapis/nodejs-kms/pull/41))
- Enable prefer-const in the eslint config ([#38](https://github.com/googleapis/nodejs-kms/pull/38))

## v0.2.0

### New Features
- Add new features to the library ([#33](https://github.com/googleapis/nodejs-kms/pull/33))
  - CryptoKeyPurpose: ASSYMETRIC_SIGN, ASSYMETRIC_DECRYPT
  - CryptoKeyVersion
  - KeyOperationAttestation
  - various improved code documentation

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#34](https://github.com/googleapis/nodejs-kms/pull/34))
- chore(deps): update dependency nyc to v13 ([#25](https://github.com/googleapis/nodejs-kms/pull/25))
- fix(deps): update dependency google-gax to ^0.19.0 ([#22](https://github.com/googleapis/nodejs-kms/pull/22))

### Internal / Testing Changes
- Enable no-var in eslint ([#35](https://github.com/googleapis/nodejs-kms/pull/35))
- Update CI config ([#32](https://github.com/googleapis/nodejs-kms/pull/32))
- Retry npm install in CI ([#30](https://github.com/googleapis/nodejs-kms/pull/30))
- Update CI config ([#27](https://github.com/googleapis/nodejs-kms/pull/27))
