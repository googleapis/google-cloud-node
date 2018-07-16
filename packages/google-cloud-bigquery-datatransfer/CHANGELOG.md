# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/bigquery-data-transfer?activeTab=versions

## v0.4.0

### Implementation Changes
- Re-generate library using /synth.py (#51)
 - Interal proto changes (additional bindings)
 - DEPRECATION: transfer_type field option has no effect
 - See: https://github.com/googleapis/googleapis/compare/abe00527f...master

#### BREAKING CHANGE
In this version we dropped support for NodeJS 4.x and 9.x. Your code might break if you're using this library on non LTS versions.
- fix: drop support for node.js 4.x and 9.x (#47)

### Dependencies
- chore(deps): update dependency eslint to v5 (#44)
- chore(package): update nyc to version 12.0.2 (#35)
- fix: update all dependencies (#33)

### Internal / Testing Changes
- refactor: drop repo-tool as an exec wrapper (#42)
- fix: update linking for samples (#39)
- Configure Renovate (#37)
- update gax and synth.py (#43)
- chore(build): use `npm ci` instead of `npm install` (#49)
- chore: the ultimate fix for repo-tools EPERM (#31)
- chore: timeout for system test (#30)
- chore: test on node10 (#28)
- chore: one more workaround for repo-tools EPERM (#26)
- chore: workaround for repo-tools EPERM (#25)
- chore: make samples depend on the current version (#24)
- chore: setup nighty build in CircleCI (#23)
