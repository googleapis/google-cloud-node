# Changelog

## [2.1.3](https://github.com/googleapis/nodejs-vpc-access/compare/v2.1.2...v2.1.3) (2022-11-11)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#110](https://github.com/googleapis/nodejs-vpc-access/issues/110)) ([020b641](https://github.com/googleapis/nodejs-vpc-access/commit/020b641f10c363a1baf208f307ddedd1bdde4a3c))
* Preserve default values in x-goog-request-params header ([#103](https://github.com/googleapis/nodejs-vpc-access/issues/103)) ([b590af7](https://github.com/googleapis/nodejs-vpc-access/commit/b590af70193ec98814005f8d5fa87ee1882c2941))
* Regenerated protos JS and TS definitions ([#113](https://github.com/googleapis/nodejs-vpc-access/issues/113)) ([61e2336](https://github.com/googleapis/nodejs-vpc-access/commit/61e233629539938ad3b9b285cd15cb8cba8450e5))

## [2.1.2](https://github.com/googleapis/nodejs-vpc-access/compare/v2.1.1...v2.1.2) (2022-09-01)


### Bug Fixes

* Allow passing gax instance to client constructor ([#98](https://github.com/googleapis/nodejs-vpc-access/issues/98)) ([fd0b3ca](https://github.com/googleapis/nodejs-vpc-access/commit/fd0b3cac56dbd4f6c9610f7e88826ccc9fefdcef))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-vpc-access/issues/1553)) ([#100](https://github.com/googleapis/nodejs-vpc-access/issues/100)) ([205d13d](https://github.com/googleapis/nodejs-vpc-access/commit/205d13dc20a616f6f54bd24086f8635ce5c6cf20))

## [2.1.1](https://github.com/googleapis/nodejs-vpc-access/compare/v2.1.0...v2.1.1) (2022-08-23)


### Bug Fixes

* better support for fallback mode ([#95](https://github.com/googleapis/nodejs-vpc-access/issues/95)) ([f888df6](https://github.com/googleapis/nodejs-vpc-access/commit/f888df68b5e77dc60ee6f09ee75f41a669727292))
* change import long to require ([#96](https://github.com/googleapis/nodejs-vpc-access/issues/96)) ([4f29ee0](https://github.com/googleapis/nodejs-vpc-access/commit/4f29ee04c1f3d878dfa28c30d58c5149b150daed))
* remove pip install statements ([#1546](https://github.com/googleapis/nodejs-vpc-access/issues/1546)) ([#99](https://github.com/googleapis/nodejs-vpc-access/issues/99)) ([6cf3872](https://github.com/googleapis/nodejs-vpc-access/commit/6cf3872aa4b17e53a90402a1d56288caece3616f))

## [2.1.0](https://github.com/googleapis/nodejs-vpc-access/compare/v2.0.0...v2.1.0) (2022-06-29)


### Features

* support regapic LRO ([#89](https://github.com/googleapis/nodejs-vpc-access/issues/89)) ([c42528e](https://github.com/googleapis/nodejs-vpc-access/commit/c42528ec15d5421ddd6a554c3b2ee46402299706))

## [2.0.0](https://github.com/googleapis/nodejs-vpc-access/compare/v1.1.2...v2.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#83)

### Build System

* update library to use Node 12 ([#83](https://github.com/googleapis/nodejs-vpc-access/issues/83)) ([4a4427b](https://github.com/googleapis/nodejs-vpc-access/commit/4a4427bc0f2f4d69a589bd951d1cc286666e4cab))

### [1.1.2](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.1.1...v1.1.2) (2021-09-09)


### Bug Fixes

* **build:** migrate to using main branch ([#37](https://www.github.com/googleapis/nodejs-vpc-access/issues/37)) ([57b3021](https://www.github.com/googleapis/nodejs-vpc-access/commit/57b302164d8c04f2547874b84cd0a4db1cccc3a8))

### [1.1.1](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.1.0...v1.1.1) (2021-08-25)


### Bug Fixes

* flag module as GA ([#34](https://www.github.com/googleapis/nodejs-vpc-access/issues/34)) ([1c41e41](https://www.github.com/googleapis/nodejs-vpc-access/commit/1c41e41f209f459be947622235b7062641a78d24))

## [1.1.0](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.5...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#31](https://www.github.com/googleapis/nodejs-vpc-access/issues/31)) ([677e848](https://www.github.com/googleapis/nodejs-vpc-access/commit/677e848bad87394fda9d78e7b893417e6d469504))

### [1.0.5](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.4...v1.0.5) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#29](https://www.github.com/googleapis/nodejs-vpc-access/issues/29)) ([670c82a](https://www.github.com/googleapis/nodejs-vpc-access/commit/670c82af3caf3adef7104dab62842ba46f110c85))

### [1.0.4](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.3...v1.0.4) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#21](https://www.github.com/googleapis/nodejs-vpc-access/issues/21)) ([ac91c39](https://www.github.com/googleapis/nodejs-vpc-access/commit/ac91c39fce0bdb52b0dcc1ab2909e4752f65fe0a))

### [1.0.3](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.2...v1.0.3) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#19](https://www.github.com/googleapis/nodejs-vpc-access/issues/19)) ([f6bcc3e](https://www.github.com/googleapis/nodejs-vpc-access/commit/f6bcc3e12b527cd2fd85bf5f0037dfa08167df64))

### [1.0.2](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.1...v1.0.2) (2021-07-02)


### Bug Fixes

* make request optional in all cases ([#10](https://www.github.com/googleapis/nodejs-vpc-access/issues/10)) ([d358404](https://www.github.com/googleapis/nodejs-vpc-access/commit/d358404f42c0cd9bd2f19600b5c55ce5f88776a4))

### [1.0.1](https://www.github.com/googleapis/nodejs-vpc-access/compare/v1.0.0...v1.0.1) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#13](https://www.github.com/googleapis/nodejs-vpc-access/issues/13)) ([11a3703](https://www.github.com/googleapis/nodejs-vpc-access/commit/11a3703e8a567f86acc71b8e2f30f9bf713f96a1))

## 1.0.0 (2021-06-09)


### Features

* add initial files ([20fe448](https://www.github.com/googleapis/nodejs-vpc-access/commit/20fe4485ae02801c8ffa18fb74fc55a96b113d23))
* initial templates ([02887f8](https://www.github.com/googleapis/nodejs-vpc-access/commit/02887f88677be9894da15a24a4537b748472eea8))
* write initial tests and samples ([#2](https://www.github.com/googleapis/nodejs-vpc-access/issues/2)) ([089d8be](https://www.github.com/googleapis/nodejs-vpc-access/commit/089d8bedec5676a0a1cdd60052b87125494dba6d))
