# Changelog

## [2.2.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v2.1.0...v2.2.0) (2022-11-10)


### Features

* Add Secure Boot support to TPU v2alpha1 API ([#98](https://github.com/googleapis/nodejs-cloud-tpu/issues/98)) ([e4fc278](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4fc27883278b8161bb7ad598dd83021e2467d99))


### Bug Fixes

* Allow passing gax instance to client constructor ([#96](https://github.com/googleapis/nodejs-cloud-tpu/issues/96)) ([d636ecf](https://github.com/googleapis/nodejs-cloud-tpu/commit/d636ecf4798258a71f289bd6a6add2cf45e6a2cb))
* Better support for fallback mode ([#91](https://github.com/googleapis/nodejs-cloud-tpu/issues/91)) ([a291abd](https://github.com/googleapis/nodejs-cloud-tpu/commit/a291abd4a0418eb375f9c4a27f19735afee4acca))
* Change import long to require ([#92](https://github.com/googleapis/nodejs-cloud-tpu/issues/92)) ([5de09bb](https://github.com/googleapis/nodejs-cloud-tpu/commit/5de09bb8786a790ff5a6d643f8493b6f6ea3c4ec))
* **deps:** Use google-gax v3.5.2 ([#104](https://github.com/googleapis/nodejs-cloud-tpu/issues/104)) ([86b8617](https://github.com/googleapis/nodejs-cloud-tpu/commit/86b86173fe7f8dd33e5cb6abb683f32d148670c6))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-cloud-tpu/issues/1553)) ([#95](https://github.com/googleapis/nodejs-cloud-tpu/issues/95)) ([e4289c1](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4289c164ea2123947328ceddfb09cf083e50a19))
* Preserve default values in x-goog-request-params header ([#97](https://github.com/googleapis/nodejs-cloud-tpu/issues/97)) ([42310b7](https://github.com/googleapis/nodejs-cloud-tpu/commit/42310b7a99b51320e9924f8ecd1d75513b28b598))
* Regenerated protos JS and TS definitions ([#107](https://github.com/googleapis/nodejs-cloud-tpu/issues/107)) ([7e3cba5](https://github.com/googleapis/nodejs-cloud-tpu/commit/7e3cba5fd489373a7c460369d37f04c32e3cd9c3))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-cloud-tpu/issues/1546)) ([#94](https://github.com/googleapis/nodejs-cloud-tpu/issues/94)) ([7a26fe6](https://github.com/googleapis/nodejs-cloud-tpu/commit/7a26fe63b51c661bdd22bfafecc3d4291247dddf))
* use google-gax v3.3.0 ([e4289c1](https://github.com/googleapis/nodejs-cloud-tpu/commit/e4289c164ea2123947328ceddfb09cf083e50a19))

## [2.1.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v2.0.0...v2.1.0) (2022-07-12)


### Features

* support regapic LRO ([#87](https://github.com/googleapis/nodejs-cloud-tpu/issues/87)) ([31164e2](https://github.com/googleapis/nodejs-cloud-tpu/commit/31164e2e804f18f5178177ce99d5741cb7211712))

## [2.0.0](https://github.com/googleapis/nodejs-cloud-tpu/compare/v1.2.0...v2.0.0) (2022-05-19)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#82)

### Build System

* update library to use Node 12 ([#82](https://github.com/googleapis/nodejs-cloud-tpu/issues/82)) ([634cad2](https://github.com/googleapis/nodejs-cloud-tpu/commit/634cad22ed0d3e91e02144a292da68c8cd31c0e2))

## [1.2.0](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.1.1...v1.2.0) (2021-10-19)


### Features

* TPU v2alpha1 public protos ([#43](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/43)) ([0b3aba7](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/0b3aba7b67adeb3df55c735eb513ffdcefe65e3d))

### [1.1.1](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.1.0...v1.1.1) (2021-08-25)


### Bug Fixes

* flag module as GA ([#32](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/32)) ([80ee7de](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/80ee7deaa87856edab4e65f8a21caaf9b8d49ba7))

## [1.1.0](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.5...v1.1.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#29](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/29)) ([4db100d](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/4db100d7f17f367ebda9614e9b4709236f52fe9e))

### [1.0.5](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.4...v1.0.5) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#27](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/27)) ([68a71a9](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/68a71a9919b37cd7043cd1c3e607eedee15240c0))

### [1.0.4](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.3...v1.0.4) (2021-08-11)


### Bug Fixes

* **build:** migrate to using main branch ([#25](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/25)) ([67db41d](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/67db41d374fe489f8cef6b6875692446a2178de8))

### [1.0.3](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.2...v1.0.3) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#17](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/17)) ([3fdf1bf](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/3fdf1bfa1ca06ca496cc2d600dc855f51ac48344))

### [1.0.2](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.1...v1.0.2) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#15](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/15)) ([296ef02](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/296ef02c62858bd75a141a65e38814ebaa7b377f))

### [1.0.1](https://www.github.com/googleapis/nodejs-cloud-tpu/compare/v1.0.0...v1.0.1) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#13](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/13)) ([a162ec4](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/a162ec451cab0ccd68353d3863c60ce7073ead1a))
* make request optional in all cases ([#9](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/9)) ([b8bde22](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/b8bde2285a9c855f14c9bd5552ea3141aa820a97))

## 1.0.0 (2021-06-09)


### Features

* add initial files ([6eb8aaf](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/6eb8aaf3e3879b05b6dff76b8ea67c9409aa679a))
* initial launch ([57096bc](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/57096bced4d57b0e543f947e95cd489dfacb8706))
* initial samples and tests ([#2](https://www.github.com/googleapis/nodejs-cloud-tpu/issues/2)) ([918c455](https://www.github.com/googleapis/nodejs-cloud-tpu/commit/918c45528f002b5337a73b5cbc84f6895f2f5137))
