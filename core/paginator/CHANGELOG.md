# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-paginator?activeTab=versions

## v0.2.0

03-08-2019 12:15 PST

### New Features
- feat: handle promise based functions ([#91](https://github.com/googleapis/nodejs-paginator/pull/91))
- refactor(ts): create generic for object streams ([#101](https://github.com/googleapis/nodejs-paginator/pull/101))

### Dependencies
- chore(deps): update dependency through2 to v3 ([#53](https://github.com/googleapis/nodejs-paginator/pull/53))
- chore(deps): update dependency @types/is to v0.0.21 ([#55](https://github.com/googleapis/nodejs-paginator/pull/55))
- chore(deps): update dependency gts to ^0.9.0 ([#57](https://github.com/googleapis/nodejs-paginator/pull/57))
- fix: Pin @types/sinon to last compatible version ([#61](https://github.com/googleapis/nodejs-paginator/pull/61))
- refactor: trim a few dependencies ([#60](https://github.com/googleapis/nodejs-paginator/pull/60))
- chore(deps): update dependency @types/sinon to v5.0.7 ([#62](https://github.com/googleapis/nodejs-paginator/pull/62))
- chore(deps): update dependency @types/sinon to v7 ([#81](https://github.com/googleapis/nodejs-paginator/pull/81))
- chore(deps): update dependency mocha to v6

### Documentation
- docs: add lint/fix example to contributing guide ([#85](https://github.com/googleapis/nodejs-paginator/pull/85))
- chore: move CONTRIBUTING.md to root ([#87](https://github.com/googleapis/nodejs-paginator/pull/87))
- docs: update links in contrib guide ([#94](https://github.com/googleapis/nodejs-paginator/pull/94))
- docs: update contributing path in README ([#88](https://github.com/googleapis/nodejs-paginator/pull/88))

### Internal / Testing Changes
- chore: include build in eslintignore ([#49](https://github.com/googleapis/nodejs-paginator/pull/49))
- chore: update CircleCI config ([#52](https://github.com/googleapis/nodejs-paginator/pull/52))
- chore: use latest npm on Windows ([#54](https://github.com/googleapis/nodejs-paginator/pull/54))
- chore: update eslintignore config ([#56](https://github.com/googleapis/nodejs-paginator/pull/56))
- chore: add synth.metadata
- fix(build): fix system key decryption ([#64](https://github.com/googleapis/nodejs-paginator/pull/64))
- chore: update license file ([#68](https://github.com/googleapis/nodejs-paginator/pull/68))
- chore(build): update prettier config ([#69](https://github.com/googleapis/nodejs-paginator/pull/69))
- chore: nyc ignore build/test by default ([#71](https://github.com/googleapis/nodejs-paginator/pull/71))
- chore: always nyc report before calling codecov ([#72](https://github.com/googleapis/nodejs-paginator/pull/72))
- build: add Kokoro configs for autorelease ([#75](https://github.com/googleapis/nodejs-paginator/pull/75))
- fix(build): fix Kokoro release script ([#76](https://github.com/googleapis/nodejs-paginator/pull/76))
- chore: fix publish.sh permission +x ([#77](https://github.com/googleapis/nodejs-paginator/pull/77))
- chore: update nyc and eslint configs ([#79](https://github.com/googleapis/nodejs-paginator/pull/79))
- chore(build): inject yoshi automation key ([#80](https://github.com/googleapis/nodejs-paginator/pull/80))
- build: check broken links in generated docs ([#82](https://github.com/googleapis/nodejs-paginator/pull/82))
- build: ignore googleapis.com in doc link check ([#84](https://github.com/googleapis/nodejs-paginator/pull/84))
- build: test using @grpc/grpc-js in CI ([#89](https://github.com/googleapis/nodejs-paginator/pull/89))
- build: create docs test npm scripts ([#90](https://github.com/googleapis/nodejs-paginator/pull/90))
- build: use linkinator for docs test ([#93](https://github.com/googleapis/nodejs-paginator/pull/93))
- build: update release configuration
- build: fix types for sinon ([#98](https://github.com/googleapis/nodejs-paginator/pull/98))
- build: use node10 to run samples-test, system-test etc ([#97](https://github.com/googleapis/nodejs-paginator/pull/97))
- build: Add docuploader credentials to node publish jobs ([#99](https://github.com/googleapis/nodejs-paginator/pull/99))

## v0.1.2

### Bug fixes
- fix: call limiter.makeRequest() instead of original method ([#43](https://github.com/googleapis/nodejs-paginator/pull/43))

### Internal / Testing Changes
- chore: update issue templates ([#42](https://github.com/googleapis/nodejs-paginator/pull/42))
- chore: remove old issue template ([#40](https://github.com/googleapis/nodejs-paginator/pull/40))
- build: run tests on node11 ([#39](https://github.com/googleapis/nodejs-paginator/pull/39))
- chores(build): run codecov on continuous builds ([#36](https://github.com/googleapis/nodejs-paginator/pull/36))
- chores(build): do not collect sponge.xml from windows builds ([#37](https://github.com/googleapis/nodejs-paginator/pull/37))
- chore: update new issue template ([#35](https://github.com/googleapis/nodejs-paginator/pull/35))
- chore(deps): update dependency sinon to v7 ([#31](https://github.com/googleapis/nodejs-paginator/pull/31))
- build: fix codecov uploading on Kokoro ([#32](https://github.com/googleapis/nodejs-paginator/pull/32))
- Update kokoro config ([#29](https://github.com/googleapis/nodejs-paginator/pull/29))
- Update CI config ([#27](https://github.com/googleapis/nodejs-paginator/pull/27))
- Don't publish sourcemaps ([#25](https://github.com/googleapis/nodejs-paginator/pull/25))
- build: prevent system/sample-test from leaking credentials
- Update kokoro config ([#23](https://github.com/googleapis/nodejs-paginator/pull/23))
- test: remove appveyor config ([#22](https://github.com/googleapis/nodejs-paginator/pull/22))
- Update CI config ([#21](https://github.com/googleapis/nodejs-paginator/pull/21))
- Enable prefer-const in the eslint config ([#20](https://github.com/googleapis/nodejs-paginator/pull/20))
- Enable no-var in eslint ([#19](https://github.com/googleapis/nodejs-paginator/pull/19))
- Update CI config ([#18](https://github.com/googleapis/nodejs-paginator/pull/18))

## v0.1.1

### Internal / Testing Changes
- Add synth script and update CI config (#14)
- chore(deps): update dependency nyc to v13 (#12)
- chore: ignore package-lock.json (#11)
- chore(deps): lock file maintenance (#10)
- chore: update renovate config (#9)
- remove that whitespace (#8)
- chore(deps): lock file maintenance (#7)
- chore(deps): update dependency typescript to v3 (#6)
- chore: assert.deelEqual => assert.deepStrictEqual (#5)
- chore: move mocha options to mocha.opts (#4)

