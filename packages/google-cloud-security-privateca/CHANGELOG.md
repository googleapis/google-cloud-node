# Changelog

## [3.0.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.5.0...v3.0.0) (2021-11-26)


### ⚠ BREAKING CHANGES

* v1 removes methods 'restoreCertificateAuthority', 'scheduleDeleteCertificateAuthority', 'getReusableConfig', 'listReusableConfigs'
* resource paths have changed for some methods, e.g., certificateAuthorities becomes caPools
* default to v1 of the API (#88)

### Features

* default to v1 of the API ([#88](https://www.github.com/googleapis/nodejs-security-private-ca/issues/88)) ([a52d838](https://www.github.com/googleapis/nodejs-security-private-ca/commit/a52d8381e371f73ef21b22a8faa389235c58c5a8))


### Code Refactoring

* resource paths have changed for some methods, e.g., certificateAuthorities becomes caPools ([a52d838](https://www.github.com/googleapis/nodejs-security-private-ca/commit/a52d8381e371f73ef21b22a8faa389235c58c5a8))
* v1 removes methods 'restoreCertificateAuthority', 'scheduleDeleteCertificateAuthority', 'getReusableConfig', 'listReusableConfigs' ([a52d838](https://www.github.com/googleapis/nodejs-security-private-ca/commit/a52d8381e371f73ef21b22a8faa389235c58c5a8))

## [2.5.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.4.1...v2.5.0) (2021-10-06)


### Features

* **privateca:** add IAMPolicy & Locations mix-in support ([ca2312e](https://www.github.com/googleapis/nodejs-security-private-ca/commit/ca2312e60999e6068f92405922f1df1737d8a1ed))

### [2.4.1](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.4.0...v2.4.1) (2021-09-10)


### Bug Fixes

* **build:** set default branch to main ([#122](https://www.github.com/googleapis/nodejs-security-private-ca/issues/122)) ([dbd2a17](https://www.github.com/googleapis/nodejs-security-private-ca/commit/dbd2a1722f5624cbe4d7533e4a537c645cc87659))

## [2.4.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.7...v2.4.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#118](https://www.github.com/googleapis/nodejs-security-private-ca/issues/118)) ([8cafa73](https://www.github.com/googleapis/nodejs-security-private-ca/commit/8cafa73b6529a0e90b64977a0d4fe042eb214348))

### [2.3.7](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.6...v2.3.7) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#116](https://www.github.com/googleapis/nodejs-security-private-ca/issues/116)) ([f5cb1ea](https://www.github.com/googleapis/nodejs-security-private-ca/commit/f5cb1ea2345996b23f50f747dc0f96302d974235))

### [2.3.6](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.5...v2.3.6) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#108](https://www.github.com/googleapis/nodejs-security-private-ca/issues/108)) ([526d6f3](https://www.github.com/googleapis/nodejs-security-private-ca/commit/526d6f33c6354236adb416a5ff256d53319f8d88))

### [2.3.5](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.4...v2.3.5) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#105](https://www.github.com/googleapis/nodejs-security-private-ca/issues/105)) ([860efe6](https://www.github.com/googleapis/nodejs-security-private-ca/commit/860efe6bc751b42e652e4b6ec22364fd30e6b2cd))

### [2.3.4](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.3...v2.3.4) (2021-06-30)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#102](https://www.github.com/googleapis/nodejs-security-private-ca/issues/102)) ([16e36ee](https://www.github.com/googleapis/nodejs-security-private-ca/commit/16e36ee26015aac15526fb8a1f5f6b0bc4e368b0))

### [2.3.3](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.2...v2.3.3) (2021-06-25)


### Bug Fixes

* make request optional in all cases ([#98](https://www.github.com/googleapis/nodejs-security-private-ca/issues/98)) ([2bf045d](https://www.github.com/googleapis/nodejs-security-private-ca/commit/2bf045d956df8699a95aa8644c188462657d849d))

### [2.3.2](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.1...v2.3.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#90](https://www.github.com/googleapis/nodejs-security-private-ca/issues/90)) ([0a5e25f](https://www.github.com/googleapis/nodejs-security-private-ca/commit/0a5e25f5d351f2bd471512a16f08c2ddc06f2721))

### [2.3.1](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.3.0...v2.3.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#80](https://www.github.com/googleapis/nodejs-security-private-ca/issues/80)) ([e0b4aa6](https://www.github.com/googleapis/nodejs-security-private-ca/commit/e0b4aa64be0e8433f10cb29ad9f0167a7b292609))
* use require() to load JSON protos ([#84](https://www.github.com/googleapis/nodejs-security-private-ca/issues/84)) ([3ec9321](https://www.github.com/googleapis/nodejs-security-private-ca/commit/3ec9321734af9de467a082cf34db6c4cf8039d7b))

## [2.3.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.2.0...v2.3.0) (2021-04-21)


### Features

* Refactored Elliptic Key curves to provide additional options, the NamedCurve enum is replaced by the EcKeyType message. ([#70](https://www.github.com/googleapis/nodejs-security-private-ca/issues/70)) ([567a792](https://www.github.com/googleapis/nodejs-security-private-ca/commit/567a7925e7510b0a1782e894cf7f718d211643ab))

## [2.2.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.1.0...v2.2.0) (2021-04-14)


### Features

* Publish Certificate Authority Service V1 API ([#62](https://www.github.com/googleapis/nodejs-security-private-ca/issues/62)) ([5a7d9ca](https://www.github.com/googleapis/nodejs-security-private-ca/commit/5a7d9ca566c7241ced4f836d054386e3e1843e8f))

## [2.1.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.0.1...v2.1.0) (2021-01-09)


### Features

* adds style enumeration ([#43](https://www.github.com/googleapis/nodejs-security-private-ca/issues/43)) ([1bdcac1](https://www.github.com/googleapis/nodejs-security-private-ca/commit/1bdcac1a327eab72bd6ed2afe477807df3e1f1c5))

### [2.0.1](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v2.0.0...v2.0.1) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([#36](https://www.github.com/googleapis/nodejs-security-private-ca/issues/36)) ([673c8d5](https://www.github.com/googleapis/nodejs-security-private-ca/commit/673c8d518f538a78bd6cf4dcb3878c22d52d8038))

## [2.0.0](https://www.github.com/googleapis/nodejs-security-private-ca/compare/v1.0.0...v2.0.0) (2020-11-11)


### ⚠ BREAKING CHANGES

* Updates to Certificate Authority Service for Beta release (#21)

### Features

* Updates to Certificate Authority Service for Beta release ([#21](https://www.github.com/googleapis/nodejs-security-private-ca/issues/21)) ([8e3fb52](https://www.github.com/googleapis/nodejs-security-private-ca/commit/8e3fb52688fc93bbbe4f627d06121384cca84785))


### Bug Fixes

* do not modify options object, use defaultScopes ([#28](https://www.github.com/googleapis/nodejs-security-private-ca/issues/28)) ([5e9de83](https://www.github.com/googleapis/nodejs-security-private-ca/commit/5e9de8377ad9d56037d86ac40e9765d6f3b60681))

## 1.0.0 (2020-09-24)


### ⚠ BREAKING CHANGES

* stub out initial generation of library (#3)

### Features

* initial stub of library ([2f6b4cb](https://www.github.com/googleapis/nodejs-security-private-ca/commit/2f6b4cbc35176aa50bd95a31fc2179b4809b52ee))
* run synthtool ([daa55ed](https://www.github.com/googleapis/nodejs-security-private-ca/commit/daa55eda7900769d3623ed87cec6dd351bcdb1e3))
* stub out initial generation of library ([#3](https://www.github.com/googleapis/nodejs-security-private-ca/issues/3)) ([e3e90bb](https://www.github.com/googleapis/nodejs-security-private-ca/commit/e3e90bb60b1b46a948e47b99c5836d7e44f740b7))
