# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/monitoring?activeTab=versions

## v0.7.0

01-15-2019 09:35 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#196](https://github.com/googleapis/nodejs-monitoring/pull/196))
- refactor: remove unused deps

### Documentation
- doc: remove unused gRPC types
- docs: add samples for channel notification ([#185](https://github.com/googleapis/nodejs-monitoring/pull/185))
- docs: update readme badges ([#171](https://github.com/googleapis/nodejs-monitoring/pull/171))
- docs(samples): convert samples to async/await, and use mocha for tests ([#146](https://github.com/googleapis/nodejs-monitoring/pull/146))
- docs: update proto comments ([#159](https://github.com/googleapis/nodejs-monitoring/pull/159))
- docs: fix link in changelog ([#132](https://github.com/googleapis/nodejs-monitoring/pull/132))

### Internal / Testing Changes
- build: check broken links in generated docs ([#194](https://github.com/googleapis/nodejs-monitoring/pull/194))
- refactor: modernize and fix the sample tests ([#193](https://github.com/googleapis/nodejs-monitoring/pull/193))
- chore: fix name of region tag ([#188](https://github.com/googleapis/nodejs-monitoring/pull/188))
- chore: fix region tags ([#187](https://github.com/googleapis/nodejs-monitoring/pull/187))
- chore(build): inject yoshi automation key ([#186](https://github.com/googleapis/nodejs-monitoring/pull/186))
- chore: update nyc and eslint configs ([#184](https://github.com/googleapis/nodejs-monitoring/pull/184))
- chore: fix publish.sh permission +x ([#182](https://github.com/googleapis/nodejs-monitoring/pull/182))
- fix(build): fix Kokoro release script ([#181](https://github.com/googleapis/nodejs-monitoring/pull/181))
- build: add Kokoro configs for autorelease ([#180](https://github.com/googleapis/nodejs-monitoring/pull/180))
- chore: always nyc report before calling codecov ([#177](https://github.com/googleapis/nodejs-monitoring/pull/177))
- chore: nyc ignore build/test by default ([#175](https://github.com/googleapis/nodejs-monitoring/pull/175))
- chore: update license file ([#173](https://github.com/googleapis/nodejs-monitoring/pull/173))
- fix(build): fix system key decryption ([#169](https://github.com/googleapis/nodejs-monitoring/pull/169))
- chore: add a synth.metadata
- test: fix failing tests due to leaks ([#163](https://github.com/googleapis/nodejs-monitoring/pull/163))
- chore: update eslintignore config ([#160](https://github.com/googleapis/nodejs-monitoring/pull/160))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#158](https://github.com/googleapis/nodejs-monitoring/pull/158))
- chore: drop contributors from multiple places ([#156](https://github.com/googleapis/nodejs-monitoring/pull/156))
- chore: use latest npm on Windows ([#154](https://github.com/googleapis/nodejs-monitoring/pull/154))
- chore: update CircleCI config ([#151](https://github.com/googleapis/nodejs-monitoring/pull/151))
- chore: include build in eslintignore ([#148](https://github.com/googleapis/nodejs-monitoring/pull/148))
- chore(deps): update dependency eslint-plugin-node to v8 ([#143](https://github.com/googleapis/nodejs-monitoring/pull/143))
- feat: run the generator
- chore: update new issue templates
- chore(build): fix the synth file and generation
- chore: remove old issue template ([#140](https://github.com/googleapis/nodejs-monitoring/pull/140))
- build: run tests on node11 ([#139](https://github.com/googleapis/nodejs-monitoring/pull/139))
- chores(build): do not collect sponge.xml from windows builds ([#138](https://github.com/googleapis/nodejs-monitoring/pull/138))
- chores(build): run codecov on continuous builds ([#137](https://github.com/googleapis/nodejs-monitoring/pull/137))
- build: fix codecov uploading on Kokoro ([#134](https://github.com/googleapis/nodejs-monitoring/pull/134))
- chore(deps): update dependency sinon to v7 ([#133](https://github.com/googleapis/nodejs-monitoring/pull/133))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#131](https://github.com/googleapis/nodejs-monitoring/pull/131))
- test: remove appveyor config ([#127](https://github.com/googleapis/nodejs-monitoring/pull/127))
- Fix failing sample tests ([#126](https://github.com/googleapis/nodejs-monitoring/pull/126))
- Enable prefer-const in the eslint config ([#124](https://github.com/googleapis/nodejs-monitoring/pull/124))
- Fix the linter ([#123](https://github.com/googleapis/nodejs-monitoring/pull/123))
- Enable no-var in eslint ([#122](https://github.com/googleapis/nodejs-monitoring/pull/122))
- run synth.py to fix system-test ([#117](https://github.com/googleapis/nodejs-monitoring/pull/117))
- Retry npm install in CI ([#115](https://github.com/googleapis/nodejs-monitoring/pull/115))
- Update CircleCI and Kokoro config ([#113](https://github.com/googleapis/nodejs-monitoring/pull/113))
- chore(deps): update dependency nyc to v13 ([#111](https://github.com/googleapis/nodejs-monitoring/pull/111))
- Update the CI config ([#109](https://github.com/googleapis/nodejs-monitoring/pull/109))
- chore: make the CircleCI config consistent
- fix(deps): update dependency @google-cloud/monitoring to ^0.6.0 ([#104](https://github.com/googleapis/nodejs-monitoring/pull/104))
- chore(build): make the CircleCI config consistent
- build: node templates ([#101](https://github.com/googleapis/nodejs-monitoring/pull/101))

## v0.6.0

01-14-2019 14:34 PST

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#196](https://github.com/googleapis/nodejs-monitoring/pull/196))
- refactor: remove unused deps

### Documentation
- docs: remove unused gRPC types
- docs(samples): add samples for channel notification ([#185](https://github.com/googleapis/nodejs-monitoring/pull/185))
- docs: update readme badges ([#171](https://github.com/googleapis/nodejs-monitoring/pull/171))
- docs(samples): convert samples to async/await, and use mocha for tests ([#146](https://github.com/googleapis/nodejs-monitoring/pull/146))
- docs: update proto comments ([#159](https://github.com/googleapis/nodejs-monitoring/pull/159))
- docs: fix link in changelog ([#132](https://github.com/googleapis/nodejs-monitoring/pull/132))

### Internal / Testing Changes
- refactor: modernize and fix the sample tests ([#193](https://github.com/googleapis/nodejs-monitoring/pull/193))
- chore: fix name of region tag ([#188](https://github.com/googleapis/nodejs-monitoring/pull/188))
- chore: fix region tags ([#187](https://github.com/googleapis/nodejs-monitoring/pull/187))
- chore(build): inject yoshi automation key ([#186](https://github.com/googleapis/nodejs-monitoring/pull/186))
- chore: update nyc and eslint configs ([#184](https://github.com/googleapis/nodejs-monitoring/pull/184))
- chore: fix publish.sh permission +x ([#182](https://github.com/googleapis/nodejs-monitoring/pull/182))
- fix(build): fix Kokoro release script ([#181](https://github.com/googleapis/nodejs-monitoring/pull/181))
- build: add Kokoro configs for autorelease ([#180](https://github.com/googleapis/nodejs-monitoring/pull/180))
- chore: always nyc report before calling codecov ([#177](https://github.com/googleapis/nodejs-monitoring/pull/177))
- chore: nyc ignore build/test by default ([#175](https://github.com/googleapis/nodejs-monitoring/pull/175))
- chore: update license file ([#173](https://github.com/googleapis/nodejs-monitoring/pull/173))
- fix(build): fix system key decryption ([#169](https://github.com/googleapis/nodejs-monitoring/pull/169))
- chore: add a synth.metadata
- test: fix failing tests due to leaks ([#163](https://github.com/googleapis/nodejs-monitoring/pull/163))
- chore: update eslintignore config ([#160](https://github.com/googleapis/nodejs-monitoring/pull/160))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#158](https://github.com/googleapis/nodejs-monitoring/pull/158))
- chore: drop contributors from multiple places ([#156](https://github.com/googleapis/nodejs-monitoring/pull/156))
- chore: use latest npm on Windows ([#154](https://github.com/googleapis/nodejs-monitoring/pull/154))
- chore: update CircleCI config ([#151](https://github.com/googleapis/nodejs-monitoring/pull/151))
- chore: include build in eslintignore ([#148](https://github.com/googleapis/nodejs-monitoring/pull/148))
- chore(deps): update dependency eslint-plugin-node to v8 ([#143](https://github.com/googleapis/nodejs-monitoring/pull/143))
- chore: update new issue templates
- chore(build): fix the synth file and generation
- chore: remove old issue template ([#140](https://github.com/googleapis/nodejs-monitoring/pull/140))
- build: run tests on node11 ([#139](https://github.com/googleapis/nodejs-monitoring/pull/139))
- chores(build): do not collect sponge.xml from windows builds ([#138](https://github.com/googleapis/nodejs-monitoring/pull/138))
- chores(build): run codecov on continuous builds ([#137](https://github.com/googleapis/nodejs-monitoring/pull/137))
- build: fix codecov uploading on Kokoro ([#134](https://github.com/googleapis/nodejs-monitoring/pull/134))
- chore(deps): update dependency sinon to v7 ([#133](https://github.com/googleapis/nodejs-monitoring/pull/133))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#131](https://github.com/googleapis/nodejs-monitoring/pull/131))
- test: remove appveyor config ([#127](https://github.com/googleapis/nodejs-monitoring/pull/127))
- Fix failing sample tests ([#126](https://github.com/googleapis/nodejs-monitoring/pull/126))
- Enable prefer-const in the eslint config ([#124](https://github.com/googleapis/nodejs-monitoring/pull/124))
- Fix the linter ([#123](https://github.com/googleapis/nodejs-monitoring/pull/123))
- Enable no-var in eslint ([#122](https://github.com/googleapis/nodejs-monitoring/pull/122))
- run synth.py to fix system-test ([#117](https://github.com/googleapis/nodejs-monitoring/pull/117))
- Retry npm install in CI ([#115](https://github.com/googleapis/nodejs-monitoring/pull/115))
- Update CircleCI and Kokoro config ([#113](https://github.com/googleapis/nodejs-monitoring/pull/113))
- chore(deps): update dependency nyc to v13 ([#111](https://github.com/googleapis/nodejs-monitoring/pull/111))
- Update the CI config ([#109](https://github.com/googleapis/nodejs-monitoring/pull/109))
- chore: make the CircleCI config consistent
- fix(deps): update dependency @google-cloud/monitoring to ^0.6.0 ([#104](https://github.com/googleapis/nodejs-monitoring/pull/104))
- chore(build): make the CircleCI config consistent
- build: node templates ([#101](https://github.com/googleapis/nodejs-monitoring/pull/101))

## v0.6.0

### Implementation Changes
BREAKING CHANGE
- fix: drop support for node.js 4.x and 9.x (#72)

### New Features
Bring in some documentation changes inside protos (see #96)

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v3 (#97)
- fix(deps): update dependency google-gax to ^0.18.0 (#88)
- chore(deps): update dependency eslint-plugin-node to v7 (#80)
- chore(deps): update dependency sinon to v6 (#64)
- fix(deps): update dependency yargs to v12 (#65)
- chore: check in synth script and update gax dependency (#62)
- chore(package): update eslint to version 5.0.0 (#57)
- chore(package): update nyc to version 12.0.2 (#53)

### Documentation
- doc: Fix namespace causing 404s (#99)

### Internal / Testing Changes
- chore: ignore package-lock.json (#93)
- test: add sample for updating an uptime check (#95)
- chore: update renovate config (#90)
- chore: move mocha options to mocha.opts (#85)
- chore: require node 8 for samples (#86)
- test: use strictEqual in tests (#81)
- chore: really delete node4 and node9 (#73)
- Configure Renovate (#56)
- refactor: drop repo-tool as an exec wrapper (#61)
- fix: update linking for samples (#58)
- chore: the ultimate fix for repo-tools EPERM (#50)
- test: fix uptime sample test (#48)
- chore: timeout for system test (#49)
- test: add resource type filter to alerts test (#46)
- Fixes #43. (#44)
- Fix region tags. (#42)
- Add Alerting samples. (#41)
- chore: test on node10 (#40)

