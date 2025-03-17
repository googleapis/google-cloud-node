# Changelog

## [3.2.0](https://github.com/googleapis/google-cloud-node/compare/data-qna-v3.1.0...data-qna-v3.2.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [3.1.0](https://github.com/googleapis/google-cloud-node/compare/data-qna-v3.0.1...data-qna-v3.1.0) (2024-04-16)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5188](https://github.com/googleapis/google-cloud-node/issues/5188)) ([c5ccdf9](https://github.com/googleapis/google-cloud-node/commit/c5ccdf93641e7bb6d0e5c636168fad0feafab6e3))

## [3.0.1](https://github.com/googleapis/google-cloud-node/compare/data-qna-v3.0.0...data-qna-v3.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4585](https://github.com/googleapis/google-cloud-node/issues/4585)) ([b6cea45](https://github.com/googleapis/google-cloud-node/commit/b6cea45d03faaa7bd6e5daa36ebd0063a1e1f251))

## [3.0.0](https://github.com/googleapis/google-cloud-node/compare/data-qna-v2.1.2...data-qna-v3.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4461](https://github.com/googleapis/google-cloud-node/issues/4461)) ([61bcc0a](https://github.com/googleapis/google-cloud-node/commit/61bcc0a89c70cf1037299eecd72aef9c98c2e666))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [2.1.2](https://github.com/googleapis/google-cloud-node/compare/data-qna-v2.1.1...data-qna-v2.1.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [2.1.1](https://github.com/googleapis/google-cloud-node/compare/data-qna-v2.1.0...data-qna-v2.1.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3987](https://github.com/googleapis/google-cloud-node/issues/3987)) ([07043a6](https://github.com/googleapis/google-cloud-node/commit/07043a629545ad418f33f90f9f96147a136e1728))

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/data-qna-v2.0.2...data-qna-v2.1.0) (2023-01-28)


### Features

* Added SuggestConversationSummary RPC ([#3852](https://github.com/googleapis/google-cloud-node/issues/3852)) ([d83d70a](https://github.com/googleapis/google-cloud-node/commit/d83d70a25f78812a44c4476b2149fbdef0a2baa1))

## [2.0.2](https://github.com/googleapis/nodejs-data-qna/compare/v2.0.1...v2.0.2) (2022-11-10)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#133](https://github.com/googleapis/nodejs-data-qna/issues/133)) ([22faab9](https://github.com/googleapis/nodejs-data-qna/commit/22faab9ab9bcaee1c4bd71f7fce4ba8a1a824aa7))
* Preserve default values in x-goog-request-params header ([#127](https://github.com/googleapis/nodejs-data-qna/issues/127)) ([0bd099f](https://github.com/googleapis/nodejs-data-qna/commit/0bd099f012c187b567465812db08533cc624b755))
* Regenerated protos JS and TS definitions ([#136](https://github.com/googleapis/nodejs-data-qna/issues/136)) ([7f5f180](https://github.com/googleapis/nodejs-data-qna/commit/7f5f180f250a347dddb9fc95baaa2b5337e16fcf))

## [2.0.1](https://github.com/googleapis/nodejs-data-qna/compare/v2.0.0...v2.0.1) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#126](https://github.com/googleapis/nodejs-data-qna/issues/126)) ([8d03113](https://github.com/googleapis/nodejs-data-qna/commit/8d03113db0ef47a09691bbaede4f6234da55200b))
* Better support for fallback mode ([#122](https://github.com/googleapis/nodejs-data-qna/issues/122)) ([12947ca](https://github.com/googleapis/nodejs-data-qna/commit/12947cab0f97b89d0afc3bb7b84fb124322d9c60))
* Change import long to require ([#123](https://github.com/googleapis/nodejs-data-qna/issues/123)) ([9b0f93d](https://github.com/googleapis/nodejs-data-qna/commit/9b0f93dee65eda577fa0e7a1d159019dfeba7121))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-data-qna/issues/1553)) ([#125](https://github.com/googleapis/nodejs-data-qna/issues/125)) ([a408179](https://github.com/googleapis/nodejs-data-qna/commit/a408179604ce35e32d3d2233388777abdbba3d3b))
* **docs:** Document fallback rest option ([#118](https://github.com/googleapis/nodejs-data-qna/issues/118)) ([34380af](https://github.com/googleapis/nodejs-data-qna/commit/34380af413735866ab87d19a10e8edd9517a75de))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-data-qna/issues/1546)) ([#124](https://github.com/googleapis/nodejs-data-qna/issues/124)) ([54ca160](https://github.com/googleapis/nodejs-data-qna/commit/54ca16066ca21f6d3d990469044873beba4390e2))

## [2.0.0](https://github.com/googleapis/nodejs-data-qna/compare/v1.1.0...v2.0.0) (2022-06-10)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#112)

### Build System

* update library to use Node 12 ([#112](https://github.com/googleapis/nodejs-data-qna/issues/112)) ([7ff17f3](https://github.com/googleapis/nodejs-data-qna/commit/7ff17f3aaad5ad986b2b1432664424b14be3cfae))

## [1.1.0](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.8...v1.1.0) (2021-09-13)


### Features

* turns on self-signed JWT feature flag ([#66](https://www.github.com/googleapis/nodejs-data-qna/issues/66)) ([aa0c29d](https://www.github.com/googleapis/nodejs-data-qna/commit/aa0c29d27dc464fa437ca9f412b162e13ed4531f))

### [1.0.8](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.7...v1.0.8) (2021-08-17)


### Bug Fixes

* **build:** migrate to using main branch ([#63](https://www.github.com/googleapis/nodejs-data-qna/issues/63)) ([1020177](https://www.github.com/googleapis/nodejs-data-qna/commit/1020177e792a4deed38279fc6b9c74601262342f))
* **deps:** google-gax v2.24.1 ([#65](https://www.github.com/googleapis/nodejs-data-qna/issues/65)) ([f298787](https://www.github.com/googleapis/nodejs-data-qna/commit/f2987878347e3d3a1f56b70bb5794aada913f246))

### [1.0.7](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.6...v1.0.7) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#55](https://www.github.com/googleapis/nodejs-data-qna/issues/55)) ([1fd0307](https://www.github.com/googleapis/nodejs-data-qna/commit/1fd0307ddd711128e4e4b31f2b8836095f1588db))

### [1.0.6](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.5...v1.0.6) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#53](https://www.github.com/googleapis/nodejs-data-qna/issues/53)) ([977a8c3](https://www.github.com/googleapis/nodejs-data-qna/commit/977a8c3daf153a2e090a7e29780f498b4ec2ff20))

### [1.0.5](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.4...v1.0.5) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#50](https://www.github.com/googleapis/nodejs-data-qna/issues/50)) ([458d196](https://www.github.com/googleapis/nodejs-data-qna/commit/458d1966ee8cb9cdbe13357a5cb4f0f7549100df))

### [1.0.4](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.3...v1.0.4) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#43](https://www.github.com/googleapis/nodejs-data-qna/issues/43)) ([0e4009b](https://www.github.com/googleapis/nodejs-data-qna/commit/0e4009b1fc0d63eed93071df2b9db891977be047))

### [1.0.3](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.2...v1.0.3) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#36](https://www.github.com/googleapis/nodejs-data-qna/issues/36)) ([40c69dc](https://www.github.com/googleapis/nodejs-data-qna/commit/40c69dc32d2db3b871459dcec2e2b883fa866097))

### [1.0.2](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.1...v1.0.2) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#28](https://www.github.com/googleapis/nodejs-data-qna/issues/28)) ([df1e1cf](https://www.github.com/googleapis/nodejs-data-qna/commit/df1e1cfbe00985ec6d10418ebdef313b4601985a))
* use require() to load JSON protos ([#31](https://www.github.com/googleapis/nodejs-data-qna/issues/31)) ([1ab9737](https://www.github.com/googleapis/nodejs-data-qna/commit/1ab9737dc7901bfd397e8ea13682bc1a7e6d78cb))

### [1.0.1](https://www.github.com/googleapis/nodejs-data-qna/compare/v1.0.0...v1.0.1) (2021-01-22)


### Bug Fixes

* fix docs links ([#6](https://www.github.com/googleapis/nodejs-data-qna/issues/6)) ([48558f2](https://www.github.com/googleapis/nodejs-data-qna/commit/48558f2c18da5b404fc97aec6fd57ae17e0fb7c2))

## 1.0.0 (2020-12-17)


### ⚠ BREAKING CHANGES

* add samples to library (#1)
* initial library stub

### Features

* add samples to library ([#1](https://www.github.com/googleapis/nodejs-data-qna/issues/1)) ([35ad521](https://www.github.com/googleapis/nodejs-data-qna/commit/35ad521b43b896152c3652b3b265b66d6c66b9cd))
* initial library stub ([03b5a88](https://www.github.com/googleapis/nodejs-data-qna/commit/03b5a88d51e77dfb2c19d44d22e18db3135db9fb))
