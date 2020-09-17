# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/profiler?activeTab=versions

### [4.0.3](https://www.github.com/googleapis/cloud-profiler-nodejs/compare/v4.0.2...v4.0.3) (2020-09-12)


### Bug Fixes

* move gitattributes files to node templates ([#679](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/679)) ([521e418](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/521e4180f825299907ad374412d81d65bb674596))
* **deps:** update dependency parse-duration to 0.4.4 ([#668](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/668)) ([2757231](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/2757231e07492bc38bf25fe3add1274b36d2bdca))

### [4.0.2](https://www.github.com/googleapis/cloud-profiler-nodejs/compare/v4.0.1...v4.0.2) (2020-07-14)


### Bug Fixes

* **deps:** update dependency protobufjs to ~6.10.0 ([#665](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/665)) ([dc4ed5c](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/dc4ed5c57e675b0a87e193b0ba012d5d22b85951))

### [4.0.1](https://www.github.com/googleapis/cloud-profiler-nodejs/compare/v4.0.0...v4.0.1) (2020-07-09)


### Bug Fixes

* **deps:** update dependency pretty-ms to v7 ([#642](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/642)) ([f69c7a7](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/f69c7a73b17c150c2b523412e430b5d1ac03e12a))
* **deps:** update dependency protobufjs to ~6.9.0 ([#634](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/634)) ([a90149c](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/a90149c4f91630d75bb41fab145713637736d21c))
* malformed tsconfig causing broken tests [#640](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/640) ([#647](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/647)) ([09c19c8](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/09c19c88a0ca137b7970c386730b145b66b77ec3))
* **deps:** update dependency teeny-request to v7 ([#652](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/652)) ([b46eb4f](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/b46eb4f2552871f405579100e4e916dbde5c60d8))
* typeo in nodejs .gitattribute ([#661](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/661)) ([92f46ac](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/92f46ac22a510c7bab05549b83779dd4f60096b7))

## [4.0.0](https://www.github.com/googleapis/cloud-profiler-nodejs/compare/v3.0.1...v4.0.0) (2020-04-17)


### ⚠ BREAKING CHANGES

* require node.js 10.x and up (#623)
* `start({...}) ` now throws an error when the profiling agent cannot be set up because required fields are not set in the config and cannot be determined based on metadata or environment variables.  

### Features

* add support for Node 12 ([#580](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/580)) ([e7cb85e](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/e7cb85efafb72f3f50acb48cafcc99e00cdd4616))
* package is now GA ([#627](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/627)) ([1327ece](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/1327ece67da31c2fc5ab1e20f6481cfa8d207e63))
* require the project ID to be set before starting the profiling agent ([#516](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/516)) ([5b46b66](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/5b46b66db3354bff611e2b34d51d40fc4e4befa5))


### Bug Fixes

* **deps:** TypeScript 3.7.0 causes breaking change in typings ([#564](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/564)) ([3ac08e5](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/3ac08e52a8f9dbb87aaa70324c2f5bc69f805b7c))
* apache license URL ([#468](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/468)) ([#618](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/618)) ([1ae39be](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/1ae39bef02389451ecf5b120770c6b6c914e96b8))
* **deps:** update dependency @google-cloud/common to v3 ([#613](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/613)) ([356dfa6](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/356dfa6d461be219d9937c3ca1430b6b0891bee1))
* **deps:** update dependency @types/semver to v7 ([#587](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/587)) ([1400fda](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/1400fda2018331ceb41df9434f307b8046fdde89))
* **deps:** update dependency gcp-metadata to v4 ([#609](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/609)) ([66875dd](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/66875dd259adcab7e18068bee1d76afa7dc641e9))
* **deps:** update dependency pprof to v1.3.0 ([#595](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/595)) ([7ba1423](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/7ba14239d5096811c30148fa1f405765cc13f0d2))
* **deps:** update dependency pprof to v2 ([#619](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/619)) ([37c7655](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/37c7655b227676af7a400e379d7b172f41f2592e))
* **deps:** update dependency pretty-ms to v6 ([#596](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/596)) ([bed6c20](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/bed6c2007bd7224b827c3f8dcf8369c4d9b8ba8c))
* **deps:** update dependency semver to v7 ([#567](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/567)) ([b6f80f6](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/b6f80f6819e6fc42b767ecc17594a933e4ff8316))
* **docs:** snippets are now replaced in jsdoc comments ([#560](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/560)) ([07164f3](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/07164f372913255a0b84754668ea2216cc2a6944))


### Build System

* require node.js 10.x and up ([#623](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/623)) ([90d20bb](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/90d20bb566ed54237074af85dedb249653a06657))

### [3.0.1](https://www.github.com/googleapis/cloud-profiler-nodejs/compare/v3.0.0...v3.0.1) (2019-10-30)


### Bug Fixes

* remove @google-cloud/common retries for CreateProfile and UpdateProfile requests ([#555](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/555)) ([09ef74d](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/09ef74d9a9a84d4c3a04edd9f93013cf8c56425b))
* **deps:** update dependency pprof to v1.2.0 ([#557](https://www.github.com/googleapis/cloud-profiler-nodejs/issues/557)) ([664bf0e](https://www.github.com/googleapis/cloud-profiler-nodejs/commit/664bf0e948cfb898702a2c4198e8d30f0699862c))

## v3.0.0

09-17-2019 10:42 PDT

### New Features
- feat(breaking!): support API endpoint override ([#509](https://github.com/googleapis/cloud-profiler-nodejs/pull/509))
- chore: message to log agent version should be consistent with other agents ([#531](https://github.com/googleapis/cloud-profiler-nodejs/pull/531))
- chore: log the agent's version on start-up ([#530](https://github.com/googleapis/cloud-profiler-nodejs/pull/530))
- chore: log the agent's version on start-up ([#530](https://github.com/googleapis/cloud-profiler-nodejs/pull/530))

### Dependencies
- fix(deps): update dependency gcp-metadata to v3 ([#541](https://github.com/googleapis/cloud-profiler-nodejs/pull/541))
- chore(deps): pin pprof module ([#539](https://github.com/googleapis/cloud-profiler-nodejs/pull/539))
- chore(deps): update dependency nock to v11 ([#538](https://github.com/googleapis/cloud-profiler-nodejs/pull/538))
- chore(deps): update dependency source-map to ^0.7.0 ([#537](https://github.com/googleapis/cloud-profiler-nodejs/pull/537))
- Revert "chore(deps): update dependency nock to v11 ([#534](https://github.com/googleapis/cloud-profiler-nodejs/pull/534))" ([#535](https://github.com/googleapis/cloud-profiler-nodejs/pull/535))
- chore(deps): update dependency nock to v11 ([#534](https://github.com/googleapis/cloud-profiler-nodejs/pull/534))
- chore(deps): update dependency typescript to ~3.6.0 ([#532](https://github.com/googleapis/cloud-profiler-nodejs/pull/532))
- fix(dep): update to be compatible with @google-cloud/common 2.1.X ([#529](https://github.com/googleapis/cloud-profiler-nodejs/pull/529))
- fix(deps): use the latest extend ([#523](https://github.com/googleapis/cloud-profiler-nodejs/pull/523))

### Documentation
- docs: use the jsdoc-fresh theme ([#519](https://github.com/googleapis/cloud-profiler-nodejs/pull/519))
- docs: note support for Node 12 in documentation ([#540](https://github.com/googleapis/cloud-profiler-nodejs/pull/540))


### Internal / Testing Changes
- build: add Node 12 remove Node 11 ([#520](https://github.com/googleapis/cloud-profiler-nodejs/pull/520))
- update .nycrc ignore rules ([#536](https://github.com/googleapis/cloud-profiler-nodejs/pull/536))
- chore: confirm zone is set in e2e test ([#518](https://github.com/googleapis/cloud-profiler-nodejs/pull/518))
- build: use config file for linkinator ([#517](https://github.com/googleapis/cloud-profiler-nodejs/pull/517))

## v2.0.2

06-26-2019 08:59 PDT

### Dependencies
- chore(deps): update dependency typescript to ~3.5.0 ([#498](https://github.com/googleapis/cloud-profiler-nodejs/pull/498))
- chore(deps): update dependency js-green-licenses to v1 ([#503](https://github.com/googleapis/cloud-profiler-nodejs/pull/503))
- chore(deps): update sinon and @types/sinon ([#504](https://github.com/googleapis/cloud-profiler-nodejs/pull/504))
- fix(deps): update dependency pprof to v1 ([#487](https://github.com/googleapis/cloud-profiler-nodejs/pull/487))

### Documentation
- fix(docs): make anchors work in jsdoc ([#513](https://github.com/googleapis/cloud-profiler-nodejs/pull/513))
- docs: add repo-metadata for docs ([#511](https://github.com/googleapis/cloud-profiler-nodejs/pull/511))

### Internal / Testing Changes
- build: switch to GitHub magic proxy ([#510](https://github.com/googleapis/cloud-profiler-nodejs/pull/510))
- build: set correct src path for template ([#508](https://github.com/googleapis/cloud-profiler-nodejs/pull/508))
- build: use standard kokoro configuration ([#502](https://github.com/googleapis/cloud-profiler-nodejs/pull/502))
- chore: run gts fix ([#506](https://github.com/googleapis/cloud-profiler-nodejs/pull/506))
- build: share some code for E2E tests ([#505](https://github.com/googleapis/cloud-profiler-nodejs/pull/505))
- build: don't run test scripts in verbose mode ([#501](https://github.com/googleapis/cloud-profiler-nodejs/pull/501))
- build: ignore proto files in test coverage ([#497](https://github.com/googleapis/cloud-profiler-nodejs/pull/497))

## v2.0.1

05-23-2019 13:08 PDT

### Implementation Changes
- fix: agent should correctly set zone in GCP ([#489](https://github.com/googleapis/cloud-profiler-nodejs/pull/489))

### Dependencies
- fix(deps): remove unused dependencies ([#494](https://github.com/googleapis/cloud-profiler-nodejs/pull/494))
- refactor: drop dependency on pify ([#493](https://github.com/googleapis/cloud-profiler-nodejs/pull/493))

### Documentation
- doc: remove reference to Node 6 from documentation ([#485](https://github.com/googleapis/cloud-profiler-nodejs/pull/485))

### Internal / Testing Changes
- chore: retry npm install in system test when the command hangs  ([#491](https://github.com/googleapis/cloud-profiler-nodejs/pull/491))
- chore: remove unused third_party directory ([#486](https://github.com/googleapis/cloud-profiler-nodejs/pull/486))

## v2.0.0

05-14-2019 13:21 PDT

### Implementation Changes
- build: remove support for node 6 ([#472](https://github.com/googleapis/cloud-profiler-nodejs/pull/472))

### Dependencies
- fix(deps): update dependency gcp-metadata to v2 ([#481](https://github.com/googleapis/cloud-profiler-nodejs/pull/481))
- fix(deps): update dependency @google-cloud/common to v1 ([#482](https://github.com/googleapis/cloud-profiler-nodejs/pull/482))
- fix(deps): update dependency pretty-ms to v5 ([#464](https://github.com/googleapis/cloud-profiler-nodejs/pull/464))
- chore(deps): update dependency gts to v1 ([#474](https://github.com/googleapis/cloud-profiler-nodejs/pull/474))
- fix(deps): update dependency gaxios to v2 ([#469](https://github.com/googleapis/cloud-profiler-nodejs/pull/469))
- chore(deps): update dependency @types/nock to v10 ([#470](https://github.com/googleapis/cloud-profiler-nodejs/pull/470))
- chore(dep): update mocha to 6.1 ([#461](https://github.com/googleapis/cloud-profiler-nodejs/pull/461))

### Documentation
- Specify default logging level ([#483](https://github.com/googleapis/cloud-profiler-nodejs/pull/483))

### Internal / Testing Changes
- build: allow Node 10 to push to codecov ([#480](https://github.com/googleapis/cloud-profiler-nodejs/pull/480))
- build: patch Windows container, fixing Node 10 ([#479](https://github.com/googleapis/cloud-profiler-nodejs/pull/479))
- Revert "build!: upgrade engines field to >=8.10.0 ([#476](https://github.com/googleapis/cloud-profiler-nodejs/pull/476))" ([#477](https://github.com/googleapis/cloud-profiler-nodejs/pull/477))
- build!: upgrade engines field to >=8.10.0 ([#476](https://github.com/googleapis/cloud-profiler-nodejs/pull/476))
- chore: update to .nycrc with --all enabled ([#473](https://github.com/googleapis/cloud-profiler-nodejs/pull/473))
- fix: update dependencies for npm audit ([#468](https://github.com/googleapis/cloud-profiler-nodejs/pull/468))
- fix:  add es2015 as target for tsconfig.json ([#466](https://github.com/googleapis/cloud-profiler-nodejs/pull/466))
- chore: remove old kokoro configs ([#458](https://github.com/googleapis/cloud-profiler-nodejs/pull/458))

## v1.1.2

04-04-2019 13:05 PDT

No changes since last release.

Confirming that we can use [releasetool](https://github.com/googleapis/releasetool) to release the agent going forward.
