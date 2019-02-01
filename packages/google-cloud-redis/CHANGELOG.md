# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-redis?activeTab=versions

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

