# Changelog

## [4.2.0](https://github.com/googleapis/google-cloud-node/compare/iap-v4.1.0...iap-v4.2.0) (2025-06-03)


### Features

* Add protobufjs 2023 edition support ([b3bd921](https://github.com/googleapis/google-cloud-node/commit/b3bd921a30b15a632d8e8495b91723d314c23c71))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/iap-v4.0.1...iap-v4.1.0) (2025-05-09)


### Features

* [iap] Identity-aware Proxy (IAP) released a feature `Use IAP with Workforce Identity Federation`(https://cloud.google.com/iap/docs/use-workforce-identity-federation) at Feb 7, 2025. Two settings field are newly introduced in the feature release: ... ([#6251](https://github.com/googleapis/google-cloud-node/issues/6251)) ([9e3878c](https://github.com/googleapis/google-cloud-node/commit/9e3878c2d7343821f441b7954365c90076962aa3))
* Multiple ai-platform updates ([0b8b1a7](https://github.com/googleapis/google-cloud-node/commit/0b8b1a75f33bdf94000321d239834b9b10757862))

## [4.0.1](https://github.com/googleapis/google-cloud-node/compare/iap-v4.0.0...iap-v4.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [4.0.0](https://github.com/googleapis/google-cloud-node/compare/iap-v3.4.0...iap-v4.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([afcb5c0](https://github.com/googleapis/google-cloud-node/commit/afcb5c07e82bc8349b9677766cd880f69a97f77f))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [3.4.0](https://github.com/googleapis/google-cloud-node/compare/iap-v3.3.0...iap-v3.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5353](https://github.com/googleapis/google-cloud-node/issues/5353)) ([1a2388d](https://github.com/googleapis/google-cloud-node/commit/1a2388d7096176b4155a0c4f01e15ffb8c4d5096))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.3.0](https://github.com/googleapis/google-cloud-node/compare/iap-v3.2.0...iap-v3.3.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/iap-v3.1.0...iap-v3.2.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/iap-v3.0.1...iap-v3.1.0) (2023-09-19)


### Features

* [iap] Adding programmatic_clients attribute to UpdateIapSettings API request ([#4668](https://github.com/googleapis/google-cloud-node/issues/4668)) ([53d2755](https://github.com/googleapis/google-cloud-node/commit/53d275509ced91ba753e7e66ac9c86ef264d82b6))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/iap-v3.0.0...iap-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/iap-v2.3.1...iap-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.3.1](https://github.com/googleapis/google-cloud-node/compare/iap-v2.3.0...iap-v2.3.1) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.3.0](https://github.com/googleapis/google-cloud-node/compare/iap-v2.2.1...iap-v2.3.0) (2023-03-28)


### Features

* [iap] add an enum ENROLLED_SECOND_FACTORS under IapSettings ([#4081](https://github.com/googleapis/google-cloud-node/issues/4081)) ([b246145](https://github.com/googleapis/google-cloud-node/commit/b246145a5c4bb18b0fa605460077c314134f6b37))

## [2.2.1](https://github.com/googleapis/google-cloud-node/compare/iap-v2.2.0...iap-v2.2.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [2.2.0](https://github.com/googleapis/google-cloud-node/compare/iap-v2.1.0...iap-v2.2.0) (2023-01-28)


### Features

* Added Snooze API support ([#3832](https://github.com/googleapis/google-cloud-node/issues/3832)) ([f715797](https://github.com/googleapis/google-cloud-node/commit/f715797a46cdd2bf4dffc1a82378986941fd6d79))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/iap-v2.0.3...iap-v2.1.0) (2022-12-21)


### Features

* Add AllowedDomainSettings to the UpdateIapSettingsRequest ([#3806](https://github.com/googleapis/google-cloud-node/issues/3806)) ([070d9fa](https://github.com/googleapis/google-cloud-node/commit/070d9fac00eaac49b720bc28e16e36f788d1149d))

## [2.0.3](https://github.com/googleapis/nodejs-iap/compare/v2.0.2...v2.0.3) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#86](https://github.com/googleapis/nodejs-iap/issues/86)) ([25edbb2](https://github.com/googleapis/nodejs-iap/commit/25edbb2d3a145365115f2f5ce185ba2fb33b9dc5))
* Preserve default values in x-goog-request-params header ([#79](https://github.com/googleapis/nodejs-iap/issues/79)) ([f6f411d](https://github.com/googleapis/nodejs-iap/commit/f6f411d90318256d13736eeb42c3ada08b9fe79a))
* Regenerated protos JS and TS definitions ([#89](https://github.com/googleapis/nodejs-iap/issues/89)) ([6572907](https://github.com/googleapis/nodejs-iap/commit/6572907ee249cb4081cd3312cb430839ca68a1de))

## [2.0.2](https://github.com/googleapis/nodejs-iap/compare/v2.0.1...v2.0.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#78](https://github.com/googleapis/nodejs-iap/issues/78)) ([819ed55](https://github.com/googleapis/nodejs-iap/commit/819ed550836f5fac12a7488227e04610cfab72f7))
* Better support for fallback mode ([#73](https://github.com/googleapis/nodejs-iap/issues/73)) ([8433c4d](https://github.com/googleapis/nodejs-iap/commit/8433c4d3c21da8ee88b49feaadb286a299b72cb5))
* Change import long to require ([#74](https://github.com/googleapis/nodejs-iap/issues/74)) ([4775b84](https://github.com/googleapis/nodejs-iap/commit/4775b8416d62feb49d448eebf1d186f6e49f4ef9))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-iap/issues/1553)) ([#77](https://github.com/googleapis/nodejs-iap/issues/77)) ([863d928](https://github.com/googleapis/nodejs-iap/commit/863d92823a1efc459b1b851984687acc21da3ffc))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-iap/issues/1546)) ([#76](https://github.com/googleapis/nodejs-iap/issues/76)) ([27e283a](https://github.com/googleapis/nodejs-iap/commit/27e283a01ac720112b307dc149492012ebccce1f))

## [2.0.1](https://github.com/googleapis/nodejs-iap/compare/v2.0.0...v2.0.1) (2022-07-12)


### Bug Fixes

* **docs:** document fallback rest option ([#69](https://github.com/googleapis/nodejs-iap/issues/69)) ([154d791](https://github.com/googleapis/nodejs-iap/commit/154d791460661c13822104cb8464ff726a2a905b))

## [2.0.0](https://github.com/googleapis/nodejs-iap/compare/v1.2.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#65)

### Features

* add the TunnelDestGroup-related methods and types ([#63](https://github.com/googleapis/nodejs-iap/issues/63)) ([54419ef](https://github.com/googleapis/nodejs-iap/commit/54419efb8876f0705bfde529f160da2a58ec2c71))


### Build System

* update library to use Node 12 ([#65](https://github.com/googleapis/nodejs-iap/issues/65)) ([e54b690](https://github.com/googleapis/nodejs-iap/commit/e54b690de51e2287ef416e58d2169b36247cd4dc))

## [1.2.0](https://github.com/googleapis/nodejs-iap/compare/v1.1.1...v1.2.0) (2022-04-08)


### Features

* AuditConfig for IAM v1 ([#48](https://github.com/googleapis/nodejs-iap/issues/48)) ([47af8d4](https://github.com/googleapis/nodejs-iap/commit/47af8d42fa116d8da4defd9a23312a4fe9c035c8))

### [1.1.1](https://www.github.com/googleapis/nodejs-iap/compare/v1.1.0...v1.1.1) (2021-09-03)


### Bug Fixes

* **build:** migrate to main branch ([#12](https://www.github.com/googleapis/nodejs-iap/issues/12)) ([2826ce0](https://www.github.com/googleapis/nodejs-iap/commit/2826ce0cb7ed7573d02665410f91dd40c3ad08c2))

## [1.1.0](https://www.github.com/googleapis/nodejs-iap/compare/v1.0.1...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#9](https://www.github.com/googleapis/nodejs-iap/issues/9)) ([433b4dc](https://www.github.com/googleapis/nodejs-iap/commit/433b4dcf15296a5760d2aa667ef94485e8993380))

### [1.0.1](https://www.github.com/googleapis/nodejs-iap/compare/v1.0.0...v1.0.1) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#7](https://www.github.com/googleapis/nodejs-iap/issues/7)) ([69e6fa3](https://www.github.com/googleapis/nodejs-iap/commit/69e6fa3a726cdc5dc9205b470813b67c5712857c))

## 1.0.0 (2021-07-30)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-iap/issues/1)) ([f1b5db4](https://www.github.com/googleapis/nodejs-iap/commit/f1b5db47a30588fdce6bb2a262152a07075ecfef))
* initial stub of library ([a6a74d0](https://www.github.com/googleapis/nodejs-iap/commit/a6a74d07688051b87741c857824879ea3bfb1f01))
