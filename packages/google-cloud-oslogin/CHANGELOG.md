# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/os-login?activeTab=versions

## [5.1.0](https://github.com/googleapis/google-cloud-node/compare/os-login-v5.0.0...os-login-v5.1.0) (2023-09-06)


### Features

* [oslogin] launch signSshPublicKey in beta ([#4552](https://github.com/googleapis/google-cloud-node/issues/4552)) ([48f07c1](https://github.com/googleapis/google-cloud-node/commit/48f07c18aa1cc93b67e4bc46078f21d908f7becc))


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4587](https://github.com/googleapis/google-cloud-node/issues/4587)) ([e3b1e7e](https://github.com/googleapis/google-cloud-node/commit/e3b1e7e46d666abb4df28c3cd69e97c08b88445a))

## [5.0.0](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.1.2...os-login-v5.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [4.1.2](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.1.1...os-login-v4.1.2) (2023-04-13)


### Bug Fixes

* **deps:** Bump `google-gax` to ^3.5.8 ([#4117](https://github.com/googleapis/google-cloud-node/issues/4117)) ([0b67d88](https://github.com/googleapis/google-cloud-node/commit/0b67d883963643ce1b4f6d2ccd3e8d37adf6e029))
* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## [4.1.1](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.1.0...os-login-v4.1.1) (2023-02-15)


### Bug Fixes

* [Many APIs] changing format of the jsdoc links ([#3988](https://github.com/googleapis/google-cloud-node/issues/3988)) ([f2134ed](https://github.com/googleapis/google-cloud-node/commit/f2134ed5f166a3bb7dd0bed556700f0b0fd9756a))

## [4.1.0](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.0.4...os-login-v4.1.0) (2022-12-16)


### Features

* Added CreateSshPublicKey RPC ([0489224](https://github.com/googleapis/google-cloud-node/commit/0489224d93a63c73d1a80c102f118786e6aabd07))
* Added CreateSshPublicKey RPC  ([#3635](https://github.com/googleapis/google-cloud-node/issues/3635)) ([0489224](https://github.com/googleapis/google-cloud-node/commit/0489224d93a63c73d1a80c102f118786e6aabd07))

## [4.0.4](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.0.3...os-login-v4.0.4) (2022-11-10)


### Bug Fixes

* Regenerated proto JS and TS definitions (generator update) ([#3472](https://github.com/googleapis/google-cloud-node/issues/3472)) ([5e2230d](https://github.com/googleapis/google-cloud-node/commit/5e2230dfc4302bb2ac9628ff4200eb46509e103d))

## [4.0.3](https://github.com/googleapis/google-cloud-node/compare/os-login-v4.0.2...os-login-v4.0.3) (2022-11-03)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#3478](https://github.com/googleapis/google-cloud-node/issues/3478)) ([09305e0](https://github.com/googleapis/google-cloud-node/commit/09305e06548b89dc17bb3d3167e2d1e69588caa4))

## [4.0.2](https://github.com/googleapis/nodejs-os-login/compare/v4.0.1...v4.0.2) (2022-09-16)


### Bug Fixes

* Allow passing gax instance to client constructor ([#548](https://github.com/googleapis/nodejs-os-login/issues/548)) ([ae426fe](https://github.com/googleapis/nodejs-os-login/commit/ae426fe0178d310d06ed488d4506ab8c916a3f62))
* Better support for fallback mode ([#543](https://github.com/googleapis/nodejs-os-login/issues/543)) ([d149110](https://github.com/googleapis/nodejs-os-login/commit/d149110ac085100b47f680ab10c2505885f88f2d))
* Change import long to require ([#544](https://github.com/googleapis/nodejs-os-login/issues/544)) ([5bf317b](https://github.com/googleapis/nodejs-os-login/commit/5bf317b8f2488f6860e941b14ccd38469e61059b))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-os-login/issues/1553)) ([#547](https://github.com/googleapis/nodejs-os-login/issues/547)) ([a71f7b4](https://github.com/googleapis/nodejs-os-login/commit/a71f7b48575b5ad66334c4338d7c5c0acf658cdd))
* Preserve default values in x-goog-request-params header ([#551](https://github.com/googleapis/nodejs-os-login/issues/551)) ([1f50d1d](https://github.com/googleapis/nodejs-os-login/commit/1f50d1d0a868547d0069991826bfe429443d0f24))
* Remove pip install statements ([#1546](https://github.com/googleapis/nodejs-os-login/issues/1546)) ([#546](https://github.com/googleapis/nodejs-os-login/issues/546)) ([9a273e0](https://github.com/googleapis/nodejs-os-login/commit/9a273e07c65036f5a017b28bf25e29bb217862f4))
* use google-gax v3.3.0 ([a71f7b4](https://github.com/googleapis/nodejs-os-login/commit/a71f7b48575b5ad66334c4338d7c5c0acf658cdd))

## [4.0.1](https://github.com/googleapis/nodejs-os-login/compare/v4.0.0...v4.0.1) (2022-06-30)


### Bug Fixes

* **docs:** describe fallback rest option ([#534](https://github.com/googleapis/nodejs-os-login/issues/534)) ([52d5d5c](https://github.com/googleapis/nodejs-os-login/commit/52d5d5cc99d50a9a469a54ca1c75943c082b26dc))

## [4.0.0](https://github.com/googleapis/nodejs-os-login/compare/v3.3.1...v4.0.0) (2022-05-20)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#527)

### Build System

* update library to use Node 12 ([#527](https://github.com/googleapis/nodejs-os-login/issues/527)) ([32db700](https://github.com/googleapis/nodejs-os-login/commit/32db70055f46499e97607123ec84fd72ff2c749f))

### [3.3.1](https://www.github.com/googleapis/nodejs-os-login/compare/v3.3.0...v3.3.1) (2021-09-09)


### Bug Fixes

* **build:** switch primary branch to main ([#480](https://www.github.com/googleapis/nodejs-os-login/issues/480)) ([0b7bec3](https://www.github.com/googleapis/nodejs-os-login/commit/0b7bec3162c80b1be59f309d8d05a2a5ff938917))

## [3.3.0](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.6...v3.3.0) (2021-08-23)


### Features

* turns on self-signed JWT feature flag ([#476](https://www.github.com/googleapis/nodejs-os-login/issues/476)) ([4654c87](https://www.github.com/googleapis/nodejs-os-login/commit/4654c8762819176cf81703beffce92f79424ec86))

### [3.2.6](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.5...v3.2.6) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#474](https://www.github.com/googleapis/nodejs-os-login/issues/474)) ([b84fa0a](https://www.github.com/googleapis/nodejs-os-login/commit/b84fa0a5ed3d6b4888e083e8fbda68a47d4d691a))

### [3.2.5](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.4...v3.2.5) (2021-07-16)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#466](https://www.github.com/googleapis/nodejs-os-login/issues/466)) ([a500bc5](https://www.github.com/googleapis/nodejs-os-login/commit/a500bc585737edf483e6645b7e64dc36c9ca743b))

### [3.2.4](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.3...v3.2.4) (2021-07-12)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#464](https://www.github.com/googleapis/nodejs-os-login/issues/464)) ([67847c3](https://www.github.com/googleapis/nodejs-os-login/commit/67847c3d7f8328c797daf93a8880025b3fdbc763))

### [3.2.3](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.2...v3.2.3) (2021-06-29)


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#462](https://www.github.com/googleapis/nodejs-os-login/issues/462)) ([cd8da67](https://www.github.com/googleapis/nodejs-os-login/commit/cd8da670380e2550c19da03bb29cfb639ff3bcc4))
* make request optional in all cases ([#458](https://www.github.com/googleapis/nodejs-os-login/issues/458)) ([f1e43fa](https://www.github.com/googleapis/nodejs-os-login/commit/f1e43fa48e715199ab53ca552dc276adaf2c8f0d))

### [3.2.2](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.1...v3.2.2) (2021-05-25)


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#449](https://www.github.com/googleapis/nodejs-os-login/issues/449)) ([40518aa](https://www.github.com/googleapis/nodejs-os-login/commit/40518aaf15307d6b89579c5d40c3739d7c499279))

### [3.2.1](https://www.github.com/googleapis/nodejs-os-login/compare/v3.2.0...v3.2.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#439](https://www.github.com/googleapis/nodejs-os-login/issues/439)) ([c85faf2](https://www.github.com/googleapis/nodejs-os-login/commit/c85faf2a1529cc4557e37938903b2e73dfb8d40c))
* use require() to load JSON protos ([#442](https://www.github.com/googleapis/nodejs-os-login/issues/442)) ([41d5b27](https://www.github.com/googleapis/nodejs-os-login/commit/41d5b274bb3b3e07af0d6bd511f6b76f7f96a927))

## [3.2.0](https://www.github.com/googleapis/nodejs-os-login/compare/v3.1.3...v3.2.0) (2021-01-09)


### Features

* adds style enumeration ([#408](https://www.github.com/googleapis/nodejs-os-login/issues/408)) ([b413e00](https://www.github.com/googleapis/nodejs-os-login/commit/b413e004b0d3c686a25ee2068c761f6aeb65d6e4))

### [3.1.3](https://www.github.com/googleapis/nodejs-os-login/compare/v3.1.2...v3.1.3) (2020-11-25)


### Bug Fixes

* check for fetch on window ([#401](https://www.github.com/googleapis/nodejs-os-login/issues/401)) ([e2547a9](https://www.github.com/googleapis/nodejs-os-login/commit/e2547a90031a46a4ad044318c26c160d8fb04ff6))

### [3.1.2](https://www.github.com/googleapis/nodejs-os-login/compare/v3.1.1...v3.1.2) (2020-11-07)


### Bug Fixes

* do not modify options object, use defaultScopes ([#397](https://www.github.com/googleapis/nodejs-os-login/issues/397)) ([340a7c9](https://www.github.com/googleapis/nodejs-os-login/commit/340a7c9503e6c1dbb4d0edfb3d69fdff58357daa))

### [3.1.1](https://www.github.com/googleapis/nodejs-os-login/compare/v3.1.0...v3.1.1) (2020-07-24)


### Bug Fixes

* move gitattributes files to node templates ([#367](https://www.github.com/googleapis/nodejs-os-login/issues/367)) ([bc08404](https://www.github.com/googleapis/nodejs-os-login/commit/bc084043f09b0d47586d9d7ef98369cddfc9fff7))

## [3.1.0](https://www.github.com/googleapis/nodejs-os-login/compare/v3.0.1...v3.1.0) (2020-06-29)


### Features

* move ts target to es2018 from es2016 ([#348](https://www.github.com/googleapis/nodejs-os-login/issues/348)) ([3f4dce8](https://www.github.com/googleapis/nodejs-os-login/commit/3f4dce8ec3f1c601885858eb90dcec73e3d31fa5))


### Bug Fixes

* proper fallback option handling ([45d50b2](https://www.github.com/googleapis/nodejs-os-login/commit/45d50b2c13268fbe907f01945f75f2f4c7e301c4))
* update node issue template ([#353](https://www.github.com/googleapis/nodejs-os-login/issues/353)) ([ca3ca7d](https://www.github.com/googleapis/nodejs-os-login/commit/ca3ca7d647ce15583a925970fa2ffb07e2c601ca))

### [3.0.1](https://www.github.com/googleapis/nodejs-os-login/compare/v3.0.0...v3.0.1) (2020-06-04)


### Bug Fixes

* regen protos and tests, formatting ([#342](https://www.github.com/googleapis/nodejs-os-login/issues/342)) ([579f1e4](https://www.github.com/googleapis/nodejs-os-login/commit/579f1e48ef2a3f0fd1460b07592d5dc499cf8043))
* synth.py clean up for multiple version ([#343](https://www.github.com/googleapis/nodejs-os-login/issues/343)) ([d270479](https://www.github.com/googleapis/nodejs-os-login/commit/d270479f7ee2b9d4874a1282c13c049015b15510))
* use unique proto root ([#332](https://www.github.com/googleapis/nodejs-os-login/issues/332)) ([cb42aa4](https://www.github.com/googleapis/nodejs-os-login/commit/cb42aa413c55c374ccac9ae42c6dd666a2aab3ca))

## [3.0.0](https://www.github.com/googleapis/nodejs-os-login/compare/v2.0.1...v3.0.0) (2020-04-13)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.
* This adds the v1 variant of the API, and makes it the default export. For any non-versioned imports of the service class, please make sure to test updates.

### Features

* bump release level to GA ([#292](https://www.github.com/googleapis/nodejs-os-login/issues/292)) ([321aaa4](https://www.github.com/googleapis/nodejs-os-login/commit/321aaa4247894ac204077d71b92c7d36bf77dcac))
* deferred client initialization ([#304](https://www.github.com/googleapis/nodejs-os-login/issues/304)) ([1b87592](https://www.github.com/googleapis/nodejs-os-login/commit/1b8759220088e5d330479e6a7623fd67a325a389))
* drop node8 support ([#318](https://www.github.com/googleapis/nodejs-os-login/issues/318)) ([1a96118](https://www.github.com/googleapis/nodejs-os-login/commit/1a961188fe2043a6471d9765643f12153604ee6a))
* export protos in src/index.ts ([53eda47](https://www.github.com/googleapis/nodejs-os-login/commit/53eda478c5e7b41cea528172a76c4acff62b265b))
* use the v1 variant of the API ([#287](https://www.github.com/googleapis/nodejs-os-login/issues/287)) ([ee86b49](https://www.github.com/googleapis/nodejs-os-login/commit/ee86b4956e81528c5ef4ef055c8dc9dbaf0644be))


### Bug Fixes

* export explicit version from protos.js ([#322](https://www.github.com/googleapis/nodejs-os-login/issues/322)) ([aa2131b](https://www.github.com/googleapis/nodejs-os-login/commit/aa2131b5f7d398468294cca65f427a2e15182c3f))
* proto messages now accept strings for enums ([9606ac8](https://www.github.com/googleapis/nodejs-os-login/commit/9606ac8744e14e7f30740b8c5df1c1548e1e14af))
* remove eslint, update gax, fix generated protos, run the generator ([#327](https://www.github.com/googleapis/nodejs-os-login/issues/327)) ([185446a](https://www.github.com/googleapis/nodejs-os-login/commit/185446a42d9f3851f67aff90dae4e15061c0313d))

### [2.0.1](https://www.github.com/googleapis/nodejs-os-login/compare/v2.0.0...v2.0.1) (2020-01-29)


### Bug Fixes

* update generated proto.json and proto.d.ts ([7a1b082](https://www.github.com/googleapis/nodejs-os-login/commit/7a1b082b0f50df5ccf3e5da8f43319eebc4b842b))

## [2.0.0](https://www.github.com/googleapis/nodejs-os-login/compare/v1.3.2...v2.0.0) (2020-01-25)


### ⚠ BREAKING CHANGES

* move to typescript code generation (#260)

### Features

* move to typescript code generation ([#260](https://www.github.com/googleapis/nodejs-os-login/issues/260)) ([37a5836](https://www.github.com/googleapis/nodejs-os-login/commit/37a5836f30346dfc39d1a07dec2080f5644d499f))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([1231063](https://www.github.com/googleapis/nodejs-os-login/commit/1231063de822c3fbed554aea3e426fa0eacea743))

### [1.3.2](https://www.github.com/googleapis/nodejs-os-login/compare/v1.3.1...v1.3.2) (2019-11-15)


### Bug Fixes

* **docs:** bump release level to beta ([da02304](https://www.github.com/googleapis/nodejs-os-login/commit/da0230474ad978c5dd837db9c92c875318ffba3a))
* **docs:** snippets are now replaced in jsdoc comments ([#248](https://www.github.com/googleapis/nodejs-os-login/issues/248)) ([f77a00e](https://www.github.com/googleapis/nodejs-os-login/commit/f77a00ecf9f761db1249a15fc41f8297ad94200e))

### [1.3.1](https://www.github.com/googleapis/nodejs-os-login/compare/v1.3.0...v1.3.1) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#242](https://www.github.com/googleapis/nodejs-os-login/issues/242)) ([9fdab76](https://www.github.com/googleapis/nodejs-os-login/commit/9fdab764c004c047ce5c58d6014b8c55637acba7))

## [1.3.0](https://www.github.com/googleapis/nodejs-os-login/compare/v1.2.0...v1.3.0) (2019-10-09)


### Bug Fixes

* use compatible version of google-gax ([ffd6424](https://www.github.com/googleapis/nodejs-os-login/commit/ffd6424))


### Features

* .d.ts for protos ([#231](https://www.github.com/googleapis/nodejs-os-login/issues/231)) ([233dbbe](https://www.github.com/googleapis/nodejs-os-login/commit/233dbbe))
* add name and operating system type fields ([#241](https://www.github.com/googleapis/nodejs-os-login/issues/241)) ([b40e175](https://www.github.com/googleapis/nodejs-os-login/commit/b40e175))

## [1.2.0](https://www.github.com/googleapis/nodejs-os-login/compare/v1.1.4...v1.2.0) (2019-09-09)


### Features

* load protos from JSON, grpc-fallback support ([da55493](https://www.github.com/googleapis/nodejs-os-login/commit/da55493))

### [1.1.4](https://www.github.com/googleapis/nodejs-os-login/compare/v1.1.3...v1.1.4) (2019-08-26)


### Bug Fixes

* include the correct version of node in a header ([#220](https://www.github.com/googleapis/nodejs-os-login/issues/220)) ([0c2ada9](https://www.github.com/googleapis/nodejs-os-login/commit/0c2ada9))

### [1.1.3](https://www.github.com/googleapis/nodejs-os-login/compare/v1.1.2...v1.1.3) (2019-08-05)


### Bug Fixes

* allow calls with no request, add JSON proto ([f8f02ba](https://www.github.com/googleapis/nodejs-os-login/commit/f8f02ba))

### [1.1.2](https://www.github.com/googleapis/nodejs-os-login/compare/v1.1.1...v1.1.2) (2019-06-26)


### Bug Fixes

* **docs:** link to reference docs section on googleapis.dev ([#210](https://www.github.com/googleapis/nodejs-os-login/issues/210)) ([3827374](https://www.github.com/googleapis/nodejs-os-login/commit/3827374))

### [1.1.1](https://www.github.com/googleapis/nodejs-os-login/compare/v1.1.0...v1.1.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#207](https://www.github.com/googleapis/nodejs-os-login/issues/207)) ([f6a50ea](https://www.github.com/googleapis/nodejs-os-login/commit/f6a50ea))

## [1.1.0](https://www.github.com/googleapis/nodejs-os-login/compare/v1.0.0...v1.1.0) (2019-06-05)


### Features

* support apiEndpoint override in client constructor ([#204](https://www.github.com/googleapis/nodejs-os-login/issues/204)) ([bcc4d3d](https://www.github.com/googleapis/nodejs-os-login/commit/bcc4d3d))
* support apiEndpoint override in client constructor ([#206](https://www.github.com/googleapis/nodejs-os-login/issues/206)) ([3aeacf6](https://www.github.com/googleapis/nodejs-os-login/commit/3aeacf6))

## [1.0.0](https://www.github.com/googleapis/nodejs-os-login/compare/v0.3.3...v1.0.0) (2019-05-20)


### ⚠ BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#184)

### Bug Fixes

* **deps:** update dependency google-gax to ^0.26.0 ([#182](https://www.github.com/googleapis/nodejs-os-login/issues/182)) ([c97e514](https://www.github.com/googleapis/nodejs-os-login/commit/c97e514))
* **deps:** update dependency google-gax to v1 ([#191](https://www.github.com/googleapis/nodejs-os-login/issues/191)) ([5268691](https://www.github.com/googleapis/nodejs-os-login/commit/5268691))


### Build System

* upgrade engines field to >=8.10.0 ([#184](https://www.github.com/googleapis/nodejs-os-login/issues/184)) ([8b0866a](https://www.github.com/googleapis/nodejs-os-login/commit/8b0866a))

### [0.3.3](https://www.github.com/googleapis/nodejs-os-login/compare/v0.3.2...v0.3.3) (2019-04-30)


### Bug Fixes

* include 'x-goog-request-params' header in requests ([#167](https://www.github.com/googleapis/nodejs-os-login/issues/167)) ([074051d](https://www.github.com/googleapis/nodejs-os-login/commit/074051d))

## v0.3.2

03-18-2019 13:47 PDT

### Implementation Changes
- refactor: update json import paths ([#156](https://github.com/googleapis/nodejs-os-login/pull/156))
- fix: throw on invalid credentials

### Dependencies
- chore(deps): update dependency mocha to v6

### Documentation
- docs: update comments on protos ([#151](https://github.com/googleapis/nodejs-os-login/pull/151))
- build: use linkinator for docs test ([#148](https://github.com/googleapis/nodejs-os-login/pull/148))
- docs: update links in contrib guide ([#149](https://github.com/googleapis/nodejs-os-login/pull/149))
- build: create docs test npm scripts ([#146](https://github.com/googleapis/nodejs-os-login/pull/146))
- docs: update contributing path in README ([#144](https://github.com/googleapis/nodejs-os-login/pull/144))
- chore: move CONTRIBUTING.md to root ([#143](https://github.com/googleapis/nodejs-os-login/pull/143))
- docs: add lint/fix example to contributing guide ([#141](https://github.com/googleapis/nodejs-os-login/pull/141))

### Internal / Testing Changes
- chore: use per-repo npm publish ([#158](https://github.com/googleapis/nodejs-os-login/pull/158))
- build: use per-repo publish token ([#157](https://github.com/googleapis/nodejs-os-login/pull/157))
- build: Add docuploader credentials to node publish jobs ([#154](https://github.com/googleapis/nodejs-os-login/pull/154))
- build: use node10 to run samples-test, system-test etc ([#153](https://github.com/googleapis/nodejs-os-login/pull/153))
- build: update release configuration
- build: test using @grpc/grpc-js in CI ([#145](https://github.com/googleapis/nodejs-os-login/pull/145))

## v0.3.1

01-31-2019 23:16 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.25.0 ([#139](https://github.com/googleapis/nodejs-os-login/pull/139))
- fix(deps): update dependency google-gax to ^0.24.0 ([#137](https://github.com/googleapis/nodejs-os-login/pull/137))
- fix(deps): update dependency google-gax to ^0.23.0 ([#133](https://github.com/googleapis/nodejs-os-login/pull/133))
- fix(deps): update dependency google-gax to ^0.22.0 ([#109](https://github.com/googleapis/nodejs-os-login/pull/109))

### Documentation
- docs: update readme badges ([#118](https://github.com/googleapis/nodejs-os-login/pull/118))
- refactor(samples): replace promise with await async ([#114](https://github.com/googleapis/nodejs-os-login/pull/114))

### Internal / Testing Changes
- chore(deps): update dependency eslint-config-prettier to v4 ([#138](https://github.com/googleapis/nodejs-os-login/pull/138))
- build: ignore googleapis.com in doc link check ([#136](https://github.com/googleapis/nodejs-os-login/pull/136))
- chore: sync gapic files
- build: check broken links in generated docs ([#132](https://github.com/googleapis/nodejs-os-login/pull/132))
- chore(build): inject yoshi automation key ([#131](https://github.com/googleapis/nodejs-os-login/pull/131))
- chore: update nyc and eslint configs ([#130](https://github.com/googleapis/nodejs-os-login/pull/130))
- chore: fix publish.sh permission +x ([#128](https://github.com/googleapis/nodejs-os-login/pull/128))
- fix(build): fix Kokoro release script ([#127](https://github.com/googleapis/nodejs-os-login/pull/127))
- build: add Kokoro configs for autorelease ([#126](https://github.com/googleapis/nodejs-os-login/pull/126))
- chore: always nyc report before calling codecov ([#123](https://github.com/googleapis/nodejs-os-login/pull/123))
- chore: nyc ignore build/test by default ([#122](https://github.com/googleapis/nodejs-os-login/pull/122))
- chore: update license file ([#120](https://github.com/googleapis/nodejs-os-login/pull/120))
- fix(build): fix system key decryption ([#116](https://github.com/googleapis/nodejs-os-login/pull/116))
- chore: add a synth.metadata
- chore: update eslintignore config ([#108](https://github.com/googleapis/nodejs-os-login/pull/108))
- chore(deps): dependency @google-cloud/nodejs-repo-tools to v3 ([#107](https://github.com/googleapis/nodejs-os-login/pull/107))
- refactor: drop a few deps ([#105](https://github.com/googleapis/nodejs-os-login/pull/105))
- chore: drop contributors from multiple places ([#106](https://github.com/googleapis/nodejs-os-login/pull/106))
- chore: use latest npm on Windows ([#104](https://github.com/googleapis/nodejs-os-login/pull/104))
- chore(deps): update dependency through2 to v3 ([#103](https://github.com/googleapis/nodejs-os-login/pull/103))
- chore: update CircleCI config ([#102](https://github.com/googleapis/nodejs-os-login/pull/102))
- chore: include build in eslintignore ([#99](https://github.com/googleapis/nodejs-os-login/pull/99))
- chore(deps): update dependency eslint-plugin-node to v8 ([#95](https://github.com/googleapis/nodejs-os-login/pull/95))
- chore: update issue templates ([#94](https://github.com/googleapis/nodejs-os-login/pull/94))
- chore: remove old issue template ([#92](https://github.com/googleapis/nodejs-os-login/pull/92))
- build: run tests on node11 ([#91](https://github.com/googleapis/nodejs-os-login/pull/91))
- chores(build): do not collect sponge.xml from windows builds ([#90](https://github.com/googleapis/nodejs-os-login/pull/90))
- chores(build): run codecov on continuous builds ([#89](https://github.com/googleapis/nodejs-os-login/pull/89))
- chore: update new issue template ([#88](https://github.com/googleapis/nodejs-os-login/pull/88))
- build: fix codecov uploading on Kokoro ([#85](https://github.com/googleapis/nodejs-os-login/pull/85))
- Update kokoro config ([#83](https://github.com/googleapis/nodejs-os-login/pull/83))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#82](https://github.com/googleapis/nodejs-os-login/pull/82))
- Update kokoro config ([#79](https://github.com/googleapis/nodejs-os-login/pull/79))

## v0.3.0

### Breaking changes
- fix: drop support for node.js 4.x and 9.x ([#43](https://github.com/googleapis/nodejs-os-login/pull/43))

### Dependencies
- fix(deps): update dependency google-gax to ^0.20.0 ([#71](https://github.com/googleapis/nodejs-os-login/pull/71))
- fix(deps): update dependency google-gax to ^0.19.0 ([#65](https://github.com/googleapis/nodejs-os-login/pull/65))
- fix(deps): update dependency google-gax to ^0.18.0 ([#55](https://github.com/googleapis/nodejs-os-login/pull/55))

### Documentation
- Update comments in the code ([#68](https://github.com/googleapis/nodejs-os-login/pull/68))

### Internal / Testing Changes
- test: remove appveyor config ([#78](https://github.com/googleapis/nodejs-os-login/pull/78))
- build: bring in Kokoro cfgs via synth.py ([#77](https://github.com/googleapis/nodejs-os-login/pull/77))
- Fix the linter ([#75](https://github.com/googleapis/nodejs-os-login/pull/75))
- Enable prefer-const in the eslint config ([#74](https://github.com/googleapis/nodejs-os-login/pull/74))
- Enable no-var in eslint ([#73](https://github.com/googleapis/nodejs-os-login/pull/73))
- Switch to let/const ([#72](https://github.com/googleapis/nodejs-os-login/pull/72))
- Retry npm install in CI ([#70](https://github.com/googleapis/nodejs-os-login/pull/70))
- chore(deps): update dependency nyc to v13 ([#66](https://github.com/googleapis/nodejs-os-login/pull/66))
- chore(deps): update dependency eslint-config-prettier to v3 ([#64](https://github.com/googleapis/nodejs-os-login/pull/64))
- chore: do not use npm ci ([#63](https://github.com/googleapis/nodejs-os-login/pull/63))
- chore: ignore package-lock.json ([#60](https://github.com/googleapis/nodejs-os-login/pull/60))
- chore(deps): lock file maintenance ([#59](https://github.com/googleapis/nodejs-os-login/pull/59))
- chore(deps): lock file maintenance ([#58](https://github.com/googleapis/nodejs-os-login/pull/58))
- remove that whitespace ([#56](https://github.com/googleapis/nodejs-os-login/pull/56))
- chore: update renovate config ([#57](https://github.com/googleapis/nodejs-os-login/pull/57))
- chore(deps): lock file maintenance ([#54](https://github.com/googleapis/nodejs-os-login/pull/54))
- chore: move mocha options to mocha.opts ([#52](https://github.com/googleapis/nodejs-os-login/pull/52))
- chore: require node 8 for samples ([#53](https://github.com/googleapis/nodejs-os-login/pull/53))
- chore(deps): lock file maintenance ([#51](https://github.com/googleapis/nodejs-os-login/pull/51))
- chore(deps): update dependency eslint-plugin-node to v7 ([#48](https://github.com/googleapis/nodejs-os-login/pull/48))
- test: use strictEqual in tests ([#49](https://github.com/googleapis/nodejs-os-login/pull/49))
- chore(deps): lock file maintenance ([#47](https://github.com/googleapis/nodejs-os-login/pull/47))
- chore(deps): lock file maintenance ([#45](https://github.com/googleapis/nodejs-os-login/pull/45))
- chore(deps): lock file maintenance ([#44](https://github.com/googleapis/nodejs-os-login/pull/44))
- chore(deps): lock file maintenance ([#42](https://github.com/googleapis/nodejs-os-login/pull/42))
- chore(deps): lock file maintenance ([#41](https://github.com/googleapis/nodejs-os-login/pull/41))
- chore(deps): lock file maintenance ([#40](https://github.com/googleapis/nodejs-os-login/pull/40))
- Add license header to synth.py ([#39](https://github.com/googleapis/nodejs-os-login/pull/39))
- Add synth.py and update google-gax ([#36](https://github.com/googleapis/nodejs-os-login/pull/36))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v2.3.0 ([#37](https://github.com/googleapis/nodejs-os-login/pull/37))
- Configure Renovate ([#30](https://github.com/googleapis/nodejs-os-login/pull/30))
- chore(package): update eslint to version 5.0.0 ([#31](https://github.com/googleapis/nodejs-os-login/pull/31))
- refactor: drop repo-tool as an exec wrapper ([#35](https://github.com/googleapis/nodejs-os-login/pull/35))
- fix: update linking for samples ([#32](https://github.com/googleapis/nodejs-os-login/pull/32))
- chore: update sample lockfiles ([#34](https://github.com/googleapis/nodejs-os-login/pull/34))
- chore(package): update nyc to version 12.0.2
- chore: lock files maintenance ([#26](https://github.com/googleapis/nodejs-os-login/pull/26))
- chore: the ultimate fix for repo-tools EPERM ([#25](https://github.com/googleapis/nodejs-os-login/pull/25))
- chore: timeout for system test ([#24](https://github.com/googleapis/nodejs-os-login/pull/24))
- chore: lock files maintenance ([#23](https://github.com/googleapis/nodejs-os-login/pull/23))
- chore: test on node10 ([#22](https://github.com/googleapis/nodejs-os-login/pull/22))
- chore: lock files maintenance ([#20](https://github.com/googleapis/nodejs-os-login/pull/20))
- chore: workaround for repo-tools EPERM ([#19](https://github.com/googleapis/nodejs-os-login/pull/19))
