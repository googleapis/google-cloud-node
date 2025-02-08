# Changelog

## [5.4.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v5.3.0...security-private-ca-v5.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [5.3.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v5.2.0...security-private-ca-v5.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5191](https://github.com/googleapis/google-cloud-node/issues/5191)) ([57567db](https://github.com/googleapis/google-cloud-node/commit/57567db36033ca53ae2f54e6517b8cd12145bb82))

## [5.2.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v5.1.0...security-private-ca-v5.2.0) (2024-03-13)


### Features

* [security] Add custom subject key identifier field ([#5125](https://github.com/googleapis/google-cloud-node/issues/5125)) ([c13aebf](https://github.com/googleapis/google-cloud-node/commit/c13aebf76e63387abe20889abf13a42b55a0e717))

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v5.0.1...security-private-ca-v5.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5027](https://github.com/googleapis/google-cloud-node/issues/5027)) ([88763bb](https://github.com/googleapis/google-cloud-node/commit/88763bb1b7ce9ff884b9e3f476230d38985b2ff2))

## [5.0.1](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v5.0.0...security-private-ca-v5.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4588](https://github.com/googleapis/google-cloud-node/issues/4588)) ([e5ad564](https://github.com/googleapis/google-cloud-node/commit/e5ad564f74dc7a36c0e8cd8de173428a99f1deae))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v4.4.0...security-private-ca-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4463](https://github.com/googleapis/google-cloud-node/issues/4463)) ([64109b0](https://github.com/googleapis/google-cloud-node/commit/64109b007521c418cefe09c18a92cc6eaef0932c))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.4.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v4.3.0...security-private-ca-v4.4.0) (2023-04-13)


### Features

* [security] added ignore_dependent_resources to DeleteCaPoolRequest, DeleteCertificateAuthorityRequest, DisableCertificateAuthorityRequest ([#4152](https://github.com/googleapis/google-cloud-node/issues/4152)) ([8feed0b](https://github.com/googleapis/google-cloud-node/commit/8feed0b5a0efd92744d5296fef21f4b7741f3764))


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.3.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v4.2.0...security-private-ca-v4.3.0) (2023-02-15)


### Features

* [security] add X.509 Name Constraints support ([1bbe8cd](https://github.com/googleapis/google-cloud-node/commit/1bbe8cd9edfddefbe517b12c8f3ac3e4437fdaec))


### Bug Fixes

* [security] changing format of the jsdoc links ([#3984](https://github.com/googleapis/google-cloud-node/issues/3984)) ([1bbe8cd](https://github.com/googleapis/google-cloud-node/commit/1bbe8cd9edfddefbe517b12c8f3ac3e4437fdaec))

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/security-private-ca-v4.1.2...security-private-ca-v4.2.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3853](https://github.com/googleapis/google-cloud-node/issues/3853)) ([cc352db](https://github.com/googleapis/google-cloud-node/commit/cc352db97f3bd8925bf1a7631a0ae64ff976fa4e))

## [4.1.2](https://github.com/googleapis/nodejs-security-private-ca/compare/v4.1.1...v4.1.2) (2022-11-11)


### Bug Fixes

* Allow passing gax instance to client constructor ([#200](https://github.com/googleapis/nodejs-security-private-ca/issues/200)) ([49544f7](https://github.com/googleapis/nodejs-security-private-ca/commit/49544f7cb90fc6c069dc5e6ec069fd8461fe1474))
* Better support for fallback mode ([#195](https://github.com/googleapis/nodejs-security-private-ca/issues/195)) ([1ade12a](https://github.com/googleapis/nodejs-security-private-ca/commit/1ade12ad4846ed1b5ecf59252f55ba5c78038c5e))
* Change import long to require ([#196](https://github.com/googleapis/nodejs-security-private-ca/issues/196)) ([09700e4](https://github.com/googleapis/nodejs-security-private-ca/commit/09700e4bc33755d90b01c9723bfb1757f3c85d0e))
* **deps:** Use google-gax v3.5.2 ([#207](https://github.com/googleapis/nodejs-security-private-ca/issues/207)) ([e8e4b6e](https://github.com/googleapis/nodejs-security-private-ca/commit/e8e4b6ef03b90b3d1d11f062fe5b80267cd6f267))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-security-private-ca/issues/1553)) ([#199](https://github.com/googleapis/nodejs-security-private-ca/issues/199)) ([f4a0948](https://github.com/googleapis/nodejs-security-private-ca/commit/f4a0948dcb2710eef28aeb2a38c122cde28e5681))
* Preserve default values in x-goog-request-params header ([#201](https://github.com/googleapis/nodejs-security-private-ca/issues/201)) ([b897e4f](https://github.com/googleapis/nodejs-security-private-ca/commit/b897e4fd4cea66e673fe44029f9336cb6ecac5c3))
* Regenerated protos JS and TS definitions ([#210](https://github.com/googleapis/nodejs-security-private-ca/issues/210)) ([13781d3](https://github.com/googleapis/nodejs-security-private-ca/commit/13781d3d11eaaf2cb04d80f2f48b1c48f28539a9))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-security-private-ca/issues/1546)) ([#198](https://github.com/googleapis/nodejs-security-private-ca/issues/198)) ([38691a1](https://github.com/googleapis/nodejs-security-private-ca/commit/38691a1aa932c6d9c77b7f6ab254feb4ece8c80e))
* use google-gax v3.3.0 ([f4a0948](https://github.com/googleapis/nodejs-security-private-ca/commit/f4a0948dcb2710eef28aeb2a38c122cde28e5681))

## [4.1.1](https://github.com/googleapis/nodejs-security-private-ca/compare/v4.1.0...v4.1.1) (2022-07-04)


### Bug Fixes

* **privateca:** publish v1beta1 LRO HTTP rules ([cc4a64a](https://github.com/googleapis/nodejs-security-private-ca/commit/cc4a64a47ec713f87d66da7d9a4e6dc004af4bca))

## [4.1.0](https://github.com/googleapis/nodejs-security-private-ca/compare/v4.0.0...v4.1.0) (2022-06-30)


### Features

* support regapic LRO ([#187](https://github.com/googleapis/nodejs-security-private-ca/issues/187)) ([2b2f553](https://github.com/googleapis/nodejs-security-private-ca/commit/2b2f553e60256ad6308447b4a8d1062186982f42))

## [4.0.0](https://github.com/googleapis/nodejs-security-private-ca/compare/v3.1.0...v4.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#180)

### Build System

* update library to use Node 12 ([#180](https://github.com/googleapis/nodejs-security-private-ca/issues/180)) ([118d786](https://github.com/googleapis/nodejs-security-private-ca/commit/118d786e8520c83baa5c585b55a3970e922c65e5))

## [3.1.0](https://github.com/googleapis/nodejs-security-private-ca/compare/v3.0.0...v3.1.0) (2022-03-16)


### Features

* Add `skip_grace_period` flag to DeleteCertificateAuthority API ([#164](https://github.com/googleapis/nodejs-security-private-ca/issues/164)) ([7dcc0fc](https://github.com/googleapis/nodejs-security-private-ca/commit/7dcc0fcc59bbaf2e472b36ccef8b3529de5bd976))

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
