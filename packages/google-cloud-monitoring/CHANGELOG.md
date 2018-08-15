# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-monitoring?activeTab=versions

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

