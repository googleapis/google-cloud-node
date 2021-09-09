# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-redis?activeTab=versions

### [2.3.1](https://www.github.com/googleapis/nodejs-redis/compare/v2.3.0...v2.3.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#514](https://www.github.com/googleapis/nodejs-redis/issues/514)) ([9882c5d](https://www.github.com/googleapis/nodejs-redis/commit/9882c5d3f6684cd4b2b049b61a7a38dbc995f90e))

## [2.3.0](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.6...v2.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#510](https://www.github.com/googleapis/nodejs-redis/issues/510)) ([df8af50](https://www.github.com/googleapis/nodejs-redis/commit/df8af509805c4a5d977448d1d6a034c5cbbc79f7))

### [2.2.6](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.5...v2.2.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#508](https://www.github.com/googleapis/nodejs-redis/issues/508)) ([2c88da1](https://www.github.com/googleapis/nodejs-redis/commit/2c88da16c589834d3ffc0b97e9eedb9b7693125b))

### [2.2.5](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.4...v2.2.5) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#500](https://www.github.com/googleapis/nodejs-redis/issues/500)) ([e19ae5a](https://www.github.com/googleapis/nodejs-redis/commit/e19ae5a3371fba34b0a59f769609e64582e00da4))

### [2.2.4](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.3...v2.2.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#496](https://www.github.com/googleapis/nodejs-redis/issues/496)) ([479b07a](https://www.github.com/googleapis/nodejs-redis/commit/479b07aa9bbbbc154a54999706b0699e90e1fe9c))
* **deps:** google-gax v2.17.1 ([#499](https://www.github.com/googleapis/nodejs-redis/issues/499)) ([61d5d83](https://www.github.com/googleapis/nodejs-redis/commit/61d5d8348ba0403147af65975386325273f974eb))

### [2.2.3](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.2...v2.2.3) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#490](https://www.github.com/googleapis/nodejs-redis/issues/490)) ([c69e88a](https://www.github.com/googleapis/nodejs-redis/commit/c69e88a51d11c9e0eb66f2e8c0fcd26d1e0ae89a))

### [2.2.2](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.1...v2.2.2) (2021-05-29)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#481](https://www.github.com/googleapis/nodejs-redis/issues/481)) ([165e87d](https://www.github.com/googleapis/nodejs-redis/commit/165e87d5f5ed15bac43f3e74dc6af910dd511ab6))

### [2.2.1](https://www.github.com/googleapis/nodejs-redis/compare/v2.2.0...v2.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#472](https://www.github.com/googleapis/nodejs-redis/issues/472)) ([799a3bf](https://www.github.com/googleapis/nodejs-redis/commit/799a3bfce47352f686110faadf7a8ce5289509a4))
* use require() to load JSON protos ([#475](https://www.github.com/googleapis/nodejs-redis/issues/475)) ([8bb086f](https://www.github.com/googleapis/nodejs-redis/commit/8bb086f423dbcc9ab05e389f71b4ed7451f2e605))

## [2.2.0](https://www.github.com/googleapis/nodejs-redis/compare/v2.1.2...v2.2.0) (2021-01-09)


### Features

* introduces style enumeration ([#456](https://www.github.com/googleapis/nodejs-redis/issues/456)) ([e437847](https://www.github.com/googleapis/nodejs-redis/commit/e43784757f0682a1eefb58b8920a229e757dc017))

### [2.1.2](https://www.github.com/googleapis/nodejs-redis/compare/v2.1.1...v2.1.2) (2020-11-25)


### Bug Fixes

* **browser:** check for fetch on window ([e37bbaf](https://www.github.com/googleapis/nodejs-redis/commit/e37bbaf378de803390ad86dfe038c55b28cdd5ed))
* do not modify options object, use defaultScopes ([#447](https://www.github.com/googleapis/nodejs-redis/issues/447)) ([7813bb1](https://www.github.com/googleapis/nodejs-redis/commit/7813bb10e01b18de8fb390f2d0fcdb22a728002b))

### [2.1.1](https://www.github.com/googleapis/nodejs-redis/compare/v2.1.0...v2.1.1) (2020-07-06)


### Bug Fixes

* update node issue template ([#403](https://www.github.com/googleapis/nodejs-redis/issues/403)) ([23a3f78](https://www.github.com/googleapis/nodejs-redis/commit/23a3f7843dd2700746621c8341b579ef8481bd79))

## [2.1.0](https://www.github.com/googleapis/nodejs-redis/compare/v2.0.0...v2.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#399](https://www.github.com/googleapis/nodejs-redis/issues/399)) ([55a1e13](https://www.github.com/googleapis/nodejs-redis/commit/55a1e1375a27aa016fcdbe8b7b32ada072f4927a))


### Bug Fixes

* handle fallback option properly ([#402](https://www.github.com/googleapis/nodejs-redis/issues/402)) ([65eded7](https://www.github.com/googleapis/nodejs-redis/commit/65eded7aea3b857a84ace8c6394e66b345440a27))

## [2.0.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.6.0...v2.0.0) (2020-05-08)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* check status of long running operation by its name ([#390](https://www.github.com/googleapis/nodejs-redis/issues/390)) ([00ab9db](https://www.github.com/googleapis/nodejs-redis/commit/00ab9db418b076a9ab557f0008747ee5ecbc5636))
* deferred client initialization ([#285](https://www.github.com/googleapis/nodejs-redis/issues/285)) ([78a25a0](https://www.github.com/googleapis/nodejs-redis/commit/78a25a089b76f7205b637805d423ced0b9c9aa6d))
* drop node8 support, support for async iterators ([#298](https://www.github.com/googleapis/nodejs-redis/issues/298)) ([ed069a4](https://www.github.com/googleapis/nodejs-redis/commit/ed069a4e666a8bfc93f1a4782840d348566541db))
* export protos in src/index.ts ([47a7020](https://www.github.com/googleapis/nodejs-redis/commit/47a70200b1d5d9bf584c70e275c0adc2c3739802))


### Bug Fixes

* remove eslint, update gax, fix generated protos, run the generator ([#376](https://www.github.com/googleapis/nodejs-redis/issues/376)) ([c408da0](https://www.github.com/googleapis/nodejs-redis/commit/c408da00aa8229675038abab6d00e440b2f1fb7e))
* synth.py clean up for multiple version ([#392](https://www.github.com/googleapis/nodejs-redis/issues/392)) ([1d0e304](https://www.github.com/googleapis/nodejs-redis/commit/1d0e304c9800c8ae5af75d9c6284d57a163fe25d))

## [1.6.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.5.1...v1.6.0) (2020-02-10)


### Features

* upgradeInstance added in v1beta1; pass x-goog-request-params header for streaming calls ([6c617fe](https://www.github.com/googleapis/nodejs-redis/commit/6c617fe2bf5c8807be010c664adb45024db94b72))

### [1.5.1](https://www.github.com/googleapis/nodejs-redis/compare/v1.5.0...v1.5.1) (2020-02-04)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([9a4af3e](https://www.github.com/googleapis/nodejs-redis/commit/9a4af3e30b531c6af0bb2f2dae1c92fb19b3b2ba))

## [1.5.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.4.2...v1.5.0) (2020-01-27)


### Features

* bump release level to ga ([#259](https://www.github.com/googleapis/nodejs-redis/issues/259)) ([cb15654](https://www.github.com/googleapis/nodejs-redis/commit/cb156541c019bfc4aff0b15e9b4fcf20cdb1987c))

### [1.4.2](https://www.github.com/googleapis/nodejs-redis/compare/v1.4.1...v1.4.2) (2020-01-05)


### Bug Fixes

* better client close(), update .nycrc, require mocha explicitly ([f7367eb](https://www.github.com/googleapis/nodejs-redis/commit/f7367eb9ce5db152c0b68e65aa81a1baab842d2b))
* increase timeout from 20s to 60s ([#247](https://www.github.com/googleapis/nodejs-redis/issues/247)) ([bc939d9](https://www.github.com/googleapis/nodejs-redis/commit/bc939d9da53d9a13da0f382797ce11c8c77b4371))

### [1.4.1](https://www.github.com/googleapis/nodejs-redis/compare/v1.4.0...v1.4.1) (2019-12-11)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([362c159](https://www.github.com/googleapis/nodejs-redis/commit/362c159f9b713818442640414b07a67b3c5b80a0))
* make operationsClient and service stub public ([60b8213](https://www.github.com/googleapis/nodejs-redis/commit/60b821381d8a916bad4d4c6b2aea2b52ace859b8))

## [1.4.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.3.2...v1.4.0) (2019-11-22)

In this release this library has been converted to TypeScript. This change is supposed to be compatible
with the previous versions, but if you find that your code is broken by this change, please file an
issue!

### Features

* add plural/singular resource descriptor ([d6c7f4d](https://www.github.com/googleapis/nodejs-redis/commit/d6c7f4debb839be0245f55b6fe4c81a847228eb9))
* convert to TypeScript ([#236](https://www.github.com/googleapis/nodejs-redis/issues/236)) ([6bcdf55](https://www.github.com/googleapis/nodejs-redis/commit/6bcdf55da38093009dba8f4dfc8a5a3eaacb5f3d))

### [1.3.2](https://www.github.com/googleapis/nodejs-redis/compare/v1.3.1...v1.3.2) (2019-11-15)


### Bug Fixes

* import long into proto ts declaration file ([#227](https://www.github.com/googleapis/nodejs-redis/issues/227)) ([976c740](https://www.github.com/googleapis/nodejs-redis/commit/976c740bcd43019f01f6b0c1c6c0df64b6c7a090))
* **docs:** bump release level to beta ([86d6486](https://www.github.com/googleapis/nodejs-redis/commit/86d6486b8f598105748f01157a22eb24f1b87fca))
* **docs:** snippets are now replaced in jsdoc comments ([#226](https://www.github.com/googleapis/nodejs-redis/issues/226)) ([57cd10e](https://www.github.com/googleapis/nodejs-redis/commit/57cd10e8de25650bb077ef1c5b320d0309e0569e))

### [1.3.1](https://www.github.com/googleapis/nodejs-redis/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#218](https://www.github.com/googleapis/nodejs-redis/issues/218)) ([6573f6b](https://www.github.com/googleapis/nodejs-redis/commit/6573f6b8ceed5bebfb595074cbc5af653bd0060e))

## [1.3.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* re-order create and update instance methods ([#217](https://www.github.com/googleapis/nodejs-redis/issues/217)) ([87bc51e](https://www.github.com/googleapis/nodejs-redis/commit/87bc51e))
* use compatible version of google-gax ([1ce0eab](https://www.github.com/googleapis/nodejs-redis/commit/1ce0eab))


### Features

* .d.ts for protos ([#208](https://www.github.com/googleapis/nodejs-redis/issues/208)) ([7305237](https://www.github.com/googleapis/nodejs-redis/commit/7305237))
* support new field options ([#210](https://www.github.com/googleapis/nodejs-redis/issues/210)) ([b81babd](https://www.github.com/googleapis/nodejs-redis/commit/b81babd))

## [1.2.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.1.4...v1.2.0) (2019-09-16)


### Bug Fixes

* use process versions object for client header ([#198](https://www.github.com/googleapis/nodejs-redis/issues/198)) ([67a2649](https://www.github.com/googleapis/nodejs-redis/commit/67a2649))


### Features

* load protos from JSON, grpc-fallback support ([a93010d](https://www.github.com/googleapis/nodejs-redis/commit/a93010d))

### [1.1.4](https://www.github.com/googleapis/nodejs-redis/compare/v1.1.3...v1.1.4) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([5d3616b](https://www.github.com/googleapis/nodejs-redis/commit/5d3616b))

### [1.1.3](https://www.github.com/googleapis/nodejs-redis/compare/v1.1.2...v1.1.3) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#188](https://www.github.com/googleapis/nodejs-redis/issues/188)) ([839e275](https://www.github.com/googleapis/nodejs-redis/commit/839e275))

### [1.1.2](https://www.github.com/googleapis/nodejs-redis/compare/v1.1.1...v1.1.2) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#184](https://www.github.com/googleapis/nodejs-redis/issues/184)) ([0ccd9d8](https://www.github.com/googleapis/nodejs-redis/commit/0ccd9d8))

### [1.1.1](https://www.github.com/googleapis/nodejs-redis/compare/v1.1.0...v1.1.1) (2019-06-11)


### Bug Fixes

* correct require in sample code and move to googleapis.dev ([#182](https://www.github.com/googleapis/nodejs-redis/issues/182)) ([ec139c2](https://www.github.com/googleapis/nodejs-redis/commit/ec139c2))

## [1.1.0](https://www.github.com/googleapis/nodejs-redis/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* add .repo-metadata.json, quickstart, and generate README ([#177](https://www.github.com/googleapis/nodejs-redis/issues/177)) ([e7e7224](https://www.github.com/googleapis/nodejs-redis/commit/e7e7224))
* support apiEndpoint override in client constructor ([261bcb3](https://www.github.com/googleapis/nodejs-redis/commit/261bcb3))
* support apiEndpoint override in client constructor ([#180](https://www.github.com/googleapis/nodejs-redis/issues/180)) ([c2b30a0](https://www.github.com/googleapis/nodejs-redis/commit/c2b30a0))

## [1.0.0](https://www.github.com/googleapis/nodejs-redis/compare/v0.4.0...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#154)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#153](https://www.github.com/googleapis/nodejs-redis/issues/153)) ([587ae91](https://www.github.com/googleapis/nodejs-redis/commit/587ae91))
* DEADLINE_EXCEEDED error is no longer retried ([2ff07c7](https://www.github.com/googleapis/nodejs-redis/commit/2ff07c7))
* DEADLINE_EXCEEDED retry code is idempotent ([#164](https://www.github.com/googleapis/nodejs-redis/issues/164)) ([0658433](https://www.github.com/googleapis/nodejs-redis/commit/0658433))
* **deps:** update dependency google-gax to v1 ([#163](https://www.github.com/googleapis/nodejs-redis/issues/163)) ([0bf6004](https://www.github.com/googleapis/nodejs-redis/commit/0bf6004))


### Build System

* upgrade engines field to >=8.10.0 ([#154](https://www.github.com/googleapis/nodejs-redis/issues/154)) ([179c1fd](https://www.github.com/googleapis/nodejs-redis/commit/179c1fd))

## v0.4.0

04-05-2019 08:45 PDT

### New Features
- feat: add support for instance failover ([#147](https://github.com/googleapis/nodejs-redis/pull/147))

### Bug Fixes
- fix: include 'x-goog-request-params' header in requests ([#146](https://github.com/googleapis/nodejs-redis/pull/146))

## v0.3.0

03-22-2019 10:30 PDT

**This release has breaking changes**.  The latest version of the service removed `importInstance` and `exportInstance` methods from the library. This was made to accommodate breaking changes in the underlying API.  Learn more at [#143](https://github.com/googleapis/nodejs-redis/pull/143).

### Implementation Changes
- refactor: update to the latest version of the protos (breaking change) ([#143](https://github.com/googleapis/nodejs-redis/pull/143))
- feat: add import and export instance methods ([#132](https://github.com/googleapis/nodejs-redis/pull/132))

### Bug Fixes
- fix: throw on invalid credentials ([#128](https://github.com/googleapis/nodejs-redis/pull/128))

### Documentation
- docs: update examples
- docs: update links in contrib guide ([#130](https://github.com/googleapis/nodejs-redis/pull/130))
- docs: update contributing path in README ([#125](https://github.com/googleapis/nodejs-redis/pull/125))
- docs: move CONTRIBUTING.md to root ([#124](https://github.com/googleapis/nodejs-redis/pull/124))
- docs: add lint/fix example to contributing guide ([#122](https://github.com/googleapis/nodejs-redis/pull/122))
- docs: fix example comments ([#121](https://github.com/googleapis/nodejs-redis/pull/121))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#141](https://github.com/googleapis/nodejs-redis/pull/141))
- build: use per-repo npm publish token ([#140](https://github.com/googleapis/nodejs-redis/pull/140))
- build: Add docuploader credentials to node publish jobs ([#136](https://github.com/googleapis/nodejs-redis/pull/136))
- build: use node10 to run samples-test, system-test etc ([#135](https://github.com/googleapis/nodejs-redis/pull/135))
- build: update release configuration
- chore: update proto code style
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#129](https://github.com/googleapis/nodejs-redis/pull/129))
- build: create docs test npm scripts ([#127](https://github.com/googleapis/nodejs-redis/pull/127))
- build: test using @grpc/grpc-js in CI ([#126](https://github.com/googleapis/nodejs-redis/pull/126))
- refactor: improve generated code style. ([#120](https://github.com/googleapis/nodejs-redis/pull/120))

## v0.2.1

01-31-2019 23:00 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#118](https://github.com/googleapis/nodejs-redis/pull/118))
- fix(deps): update dependency google-gax to ^0.24.0 ([#116](https://github.com/googleapis/nodejs-redis/pull/116))
- fix(deps): update dependency google-gax to ^0.23.0 ([#112](https://github.com/googleapis/nodejs-redis/pull/112))
- fix(deps): update dependency google-gax to ^0.22.0 ([#86](https://github.com/googleapis/nodejs-redis/pull/86))
- fix(deps): update dependency google-gax to ^0.20.0 ([#49](https://github.com/googleapis/nodejs-redis/pull/49))

### Documentation
- fix(docs): remove unused long running operation message types
- docs: update readme badges ([#95](https://github.com/googleapis/nodejs-redis/pull/95))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#117](https://github.com/googleapis/nodejs-redis/pull/117))
- build: ignore googleapis.com in doc link check ([#115](https://github.com/googleapis/nodejs-redis/pull/115))
- chore: sync gapic files
- build: check broken links in generated docs ([#110](https://github.com/googleapis/nodejs-redis/pull/110))
- chore(build): inject yoshi automation key ([#108](https://github.com/googleapis/nodejs-redis/pull/108))
- chore: update nyc and eslint configs ([#107](https://github.com/googleapis/nodejs-redis/pull/107))
- chore: fix publish.sh permission +x ([#105](https://github.com/googleapis/nodejs-redis/pull/105))
- fix(build): fix Kokoro release script ([#104](https://github.com/googleapis/nodejs-redis/pull/104))
- build: add Kokoro configs for autorelease ([#103](https://github.com/googleapis/nodejs-redis/pull/103))
- chore: always nyc report before calling codecov ([#100](https://github.com/googleapis/nodejs-redis/pull/100))
- chore: nyc ignore build/test by default ([#99](https://github.com/googleapis/nodejs-redis/pull/99))
- chore: update license file ([#97](https://github.com/googleapis/nodejs-redis/pull/97))
- fix(build): fix system key decryption ([#93](https://github.com/googleapis/nodejs-redis/pull/93))
- chore: add a synth.metadata
- chore: update eslintignore config ([#85](https://github.com/googleapis/nodejs-redis/pull/85))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#84](https://github.com/googleapis/nodejs-redis/pull/84))
- chore: drop contributors from multiple places ([#83](https://github.com/googleapis/nodejs-redis/pull/83))
- refactor: trim a few deps ([#82](https://github.com/googleapis/nodejs-redis/pull/82))
- chore: use latest npm on Windows ([#81](https://github.com/googleapis/nodejs-redis/pull/81))
- chore(deps): update dependency through2 to v3 ([#80](https://github.com/googleapis/nodejs-redis/pull/80))
- chore: update CircleCI config ([#79](https://github.com/googleapis/nodejs-redis/pull/79))
- chore: include build in eslintignore ([#76](https://github.com/googleapis/nodejs-redis/pull/76))
- chore(deps): update dependency eslint-plugin-node to v8 ([#72](https://github.com/googleapis/nodejs-redis/pull/72))
- chore: update issue templates ([#71](https://github.com/googleapis/nodejs-redis/pull/71))
- chore: remove old issue template ([#69](https://github.com/googleapis/nodejs-redis/pull/69))
- build: run tests on node11 ([#68](https://github.com/googleapis/nodejs-redis/pull/68))
- chores(build): do not collect sponge.xml from windows builds ([#67](https://github.com/googleapis/nodejs-redis/pull/67))
- chores(build): run codecov on continuous builds ([#66](https://github.com/googleapis/nodejs-redis/pull/66))
- chore: update new issue template ([#65](https://github.com/googleapis/nodejs-redis/pull/65))
- build: fix codecov uploading on Kokoro ([#62](https://github.com/googleapis/nodejs-redis/pull/62))
- Update kokoro config ([#60](https://github.com/googleapis/nodejs-redis/pull/60))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#59](https://github.com/googleapis/nodejs-redis/pull/59))
- Hide system/samples-test environment variables
- Update the kokoro config ([#56](https://github.com/googleapis/nodejs-redis/pull/56))
- test: remove appveyor config ([#55](https://github.com/googleapis/nodejs-redis/pull/55))
- Update the CI config ([#54](https://github.com/googleapis/nodejs-redis/pull/54))
- Enable prefer-const in the eslint config ([#53](https://github.com/googleapis/nodejs-redis/pull/53))
- Enable no-var in eslint ([#51](https://github.com/googleapis/nodejs-redis/pull/51))
- Switch to let/const ([#50](https://github.com/googleapis/nodejs-redis/pull/50))
- test: throw on deprecation ([#29](https://github.com/googleapis/nodejs-redis/pull/29))

## v0.2.0

### New Features
- feat: add v1 of the Redis API (#47)

### Dependencies
- Update all dependencies (#45)
- chore(deps): update dependency nyc to v13 (#39)
- fix(deps): update dependency google-gax to ^0.19.0 (#38)
- chore(deps): update dependency eslint-config-prettier to v3 (#37)
- fix(deps): update dependency google-gax to ^0.18.0 (#28)
- chore(deps): update dependency eslint-plugin-node to v7 (#22)
- chore(deps): update dependency nyc to v12 (#13)
- chore(deps): update dependency eslint to v5 (#12)

### Documentation
- Update comments to provide better descriptions (#40)
- fix: update linking for samples (#8)
- Add link to docs now that they are published

### Internal / Testing Changes
- Retry npm install in CI (#42)
- Add templating to synth and update CI config (#43)
- Update CI config (#46)
- chore: do not use npm ci (#36)
- chore: ignore package-lock.json (#33)
- chore: update renovate config (#30)
- chore: move mocha options to mocha.opts (#26)
- test: use strictEqual in tests (#23)
- chore: cleanup CircleCI config (#17)
- Configure Renovate (#7)
- update gax and add synth.py (#11)
- refactor: drop repo-tool as an exec wrapper (#10)
- chore: the ultimate fix for repo-tools EPERM (#3)
- chore: timeout for system test (#2)
