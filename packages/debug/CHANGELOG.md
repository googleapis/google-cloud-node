# Node.js Agent for Google Cloud Debug ChangeLog

## 2016-11-29, Version 0.9.1 (Experimental), @matthewloring

### Notable changes

**UI:**
  * [[`d370e20e1e`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d370e20e1e)] - Prioritize capturing expressions (#162) (Dominic Kramer) 
  * [[`b89e31cb5f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/b89e31cb5f)] - Evaluated expressions respect capture.maxProperties (#174) (Dominic Kramer) 
  * [[`36d9a7b980`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/36d9a7b980)] - improve UX for truncated objects properties (#175) (Ali Ijaz Sheikh) 

### Commits

* [[`afc6edd7c7`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/afc6edd7c7)] - Add badges + update dependencies (Matt Loring) 
* [[`d666c99fb1`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d666c99fb1)] - Now status messages include config values (#177) (Dominic Kramer) 
* [[`36d9a7b980`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/36d9a7b980)] - improve UX for truncated objects properties (#175) (Ali Ijaz Sheikh) 
* [[`9b6961d8d0`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/9b6961d8d0)] - Begin testing against v7 on travis (#176) (Matthew Loring) [#176](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/176)
* [[`b89e31cb5f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/b89e31cb5f)] - Evaluated expressions respect capture.maxProperties (#174) (Dominic Kramer) 
* [[`2a131c228f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2a131c228f)] - Correct the status shown if maxDataSize is reached (#173) (Dominic Kramer) 
* [[`d370e20e1e`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d370e20e1e)] - Prioritize capturing expressions (#162) (Dominic Kramer) 
* [[`398d04a2eb`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/398d04a2eb)] - Update the gen-repo-info-file command (#172) (Ali Ijaz Sheikh)

## 2016-11-03, Version 0.9.0 (Experimental), @dominickramer

### Notable changes

**sourcemap support:**
  * [[`f8bb4dc16d`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/f8bb4dc16d)] - Add improved support for transpiled code (#159) (Dominic Kramer)

**configuration:**
  * [[`a131faf7a8`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a131faf7a8)] - Add the start() Method and the Ability to Specify the Service Name/Version in the Debug Config (#167) (Dominic Kramer)
  * [[`5b35412827`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/5b35412827)] - Added keyFilename/credentials to config object (#169) (Kelvin Jin) [#169](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/169)

### Commits

* [[`5b35412827`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/5b35412827)] - Added keyFilename/credentials to config object (#169) (Kelvin Jin) [#169](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/169)
* [[`71665343c2`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/71665343c2)] - Add a configuration section to the README (#170) (Dominic Kramer)
* [[`cd1f579c9f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/cd1f579c9f)] - ***Revert*** "Promote to Beta in README.md (#161)" (#168)" (Dominic Kramer)
* [[`a131faf7a8`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a131faf7a8)] - Add the start() Method and the Ability to Specify the Service Name/Version in the Debug Config (#167) (Dominic Kramer)
* [[`f8bb4dc16d`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/f8bb4dc16d)] - Add improved support for transpiled code (#159) (Dominic Kramer)
* [[`fd05077c2a`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/fd05077c2a)] - Fixes spelling error (Strackdriver => Stackdriver) (#165) (Jason) [#165](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/165)
* [[`8b5550b75b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/8b5550b75b)] - Promote to Beta in README.md (#161) (Ali Ijaz Sheikh)
* [[`66e57868c4`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/66e57868c4)] - Avoid doubly expiring breakpoints (#157) (Matthew Loring) [#157](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/157)
* [[`7cfffa6d81`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/7cfffa6d81)] - Reduce flakiness caused by short timeout (#158) (Matthew Loring) [#158](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/158)
* [[`9f0e2fdd92`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/9f0e2fdd92)] - Add debuggee name to the re-register log message (#154) (Dominic Kramer) [#154](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/154)

## 2016-10-03, Version 0.8.5 (Experimental), @matthewloring

### Commits

* [[`ca08055108`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/ca08055108)] - Update diagnostics common (#155) (Matthew Loring) [#155](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/155)

## 2016-09-07, Version 0.8.4 (Experimental), @matthewloring

### Notable changes

**bug fixes**:
  * [[`edcfb043a9`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/edcfb043a9)] - Add ScopeMirror traversal to state.js (#142) (Cristian Cavalli) 

### Commits

* [[`198fb1ec9a`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/198fb1ec9a)] - Make E2E tests ScopeMirror aware (#149) (Cristian Cavalli) 
* [[`edcfb043a9`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/edcfb043a9)] - Add ScopeMirror traversal to state.js (#142) (Cristian Cavalli) 
* [[`ab7273dc84`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/ab7273dc84)] - Update acorn/mocha dependencies (#144) (Matthew Loring) [#144](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/pull/144)
* [[`2ec5d1cd08`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2ec5d1cd08)] - Fix typo in readme (#145) (Matthew Loring) 
* [[`df9276b63a`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/df9276b63a)] - remove preview from gcloud app (#141) (Justin Beckwith) 

## 2016-06-14, Version 0.8.3 (Experimental), @matthewloring

### Notable changes

**configuration**:
  * [[`4aab7bfc1a`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/4aab7bfc1a)] - Configurable throttling for log points (Matt Loring) 

**watch expressions**:
  * [[`251e8aaaf7`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/251e8aaaf7)] - Allow ES6 conditions and watches (Ali Ijaz Sheikh) 

### Commits

* [[`0b98240eb2`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/0b98240eb2)] - Documentation updates (Ali Ijaz Sheikh) 
* [[`4d2dfffa79`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/4d2dfffa79)] - Get e2e tests on travis (Matt Loring) 
* [[`1e083488f6`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/1e083488f6)] - Resume logging after log quota is hit (Matt Loring) 
* [[`a26278e702`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a26278e702)] - Prevent calls to deleted breakpoint listeners (Matt Loring) 
* [[`251e8aaaf7`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/251e8aaaf7)] - Allow ES6 conditions and watches (Ali Ijaz Sheikh) 
* [[`49f5d9579c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/49f5d9579c)] - Add LOGPOINT prefix to log point messages (Matt Loring) 
* [[`4aab7bfc1a`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/4aab7bfc1a)] - Configurable throttling for log points (Matt Loring) 
* [[`fedd5f4ec9`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/fedd5f4ec9)] - Special case array length reporting (Matt Loring) 
* [[`8c0d15fa03`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/8c0d15fa03)] - Clarify module loading order in readme (Matt Loring) 
* [[`fbb419503b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/fbb419503b)] - Merge pull request #131 from bradabrams/patch-1 (Justin Beckwith) 
* [[`d2a6ac1a53`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d2a6ac1a53)] - Update README.md (Brad Abrams) 
* [[`da40e94f03`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/da40e94f03)] - support log statements with no expressions (Matt Loring) 
* [[`fbd31fe627`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/fbd31fe627)] - Rename Managed VMs to Flexible Environment (#129) (Steren) 
* [[`58fe3f3d45`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/58fe3f3d45)] - Fixes crash if gcloud project isn't identified (Matt Loring) 
* [[`594aa68c34`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/594aa68c34)] - Change language to use snapshot instead of breakpoint (Matt Loring) 
* [[`b1027d2273`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/b1027d2273)] - Add registration retries (Matt Loring) 
* [[`222209b450`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/222209b450)] - Report file and line number on invalid bp position (Matt Loring)

## 2016-05-13, Version 0.8.2 (Experimental), @matthewloring

### Notable changes

**log points**:
  * [[`61846c5062`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/61846c5062)] - Add support for log points (Matt Loring) 

**configuration**:
  * [[`c7e157226b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/c7e157226b)] - Add config and more descriptive names on GCE/GKE (Matt Loring) 

### Commits

* [[`240a74858e`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/240a74858e)] - Correct log formatting for non-primitives (Matt Loring) 
* [[`58006f0a00`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/58006f0a00)] - Fix breakpoint format on large variables (Matt Loring) 
* [[`61846c5062`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/61846c5062)] - Add support for log points (Matt Loring) 
* [[`5a39240e7c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/5a39240e7c)] - Improve summarization of breakpoint capture (Matt Loring) 
* [[`a67692df5c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a67692df5c)] - exit 1 on test failure (Matt Loring) 
* [[`c7e157226b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/c7e157226b)] - Add config and more descriptive names on GCE/GKE (Matt Loring) 
* [[`3fcf3e86bb`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/3fcf3e86bb)] - Remove e2e tests from travis (Matt Loring) 
* [[`a48084b8c8`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a48084b8c8)] - Test debugger with cluster (Matt Loring) 
* [[`430a8742a0`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/430a8742a0)] - Update tests to use v2 debugger api (Matt Loring) 
* [[`21ef3b20a4`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/21ef3b20a4)] - Allow for unlimited data capture size (Matt Loring) 
* [[`1f07e000ff`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/1f07e000ff)] - Start windows CI runs (Matt Loring)

## 2016-04-26, Version 0.8.1 (Experimental), @matthewloring

### Commits

* [[`5573e84fc5`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/5573e84fc5)] - Report unique ids when not on GCP (Matt Loring) 
* [[`442e1bdcc0`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/442e1bdcc0)] - Add support for Node.js v6 (Matt Loring)

## 2016-04-25, Version 0.8.0 (Experimental), @matthewloring

### Notable changes

**configuration**:
  * [[`af8aa79b65`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/af8aa79b65)] - Rename source-contexts -> source-context (Matt Loring) 

### Commits

* [[`26a5bd6a7f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/26a5bd6a7f)] - Update list breakpoint longpoll mechanism (Matt Loring) 
* [[`6cc78e67d5`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/6cc78e67d5)] - Add projectid label/omit default module (Matt Loring) 
* [[`3a44bfd199`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/3a44bfd199)] - Update agent version format (Matt Loring) 
* [[`1db03bbc12`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/1db03bbc12)] - Warn on debug logpoints (Matt Loring) 
* [[`af8aa79b65`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/af8aa79b65)] - Rename source-contexts -> source-context (Matt Loring) 
* [[`338f9ab34c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/338f9ab34c)] - Fix typo in resolveMirrorProperty_ (Ali Ijaz Sheikh) 
* [[`57d88a5936`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/57d88a5936)] - test to ensure memeber names are valid (Ali Ijaz Sheikh) 
* [[`291ef02d74`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/291ef02d74)] - coerce mirror property names to strings (Ali Ijaz Sheikh) 
* [[`7967cc949c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/7967cc949c)] - validate breakpoint schema in tests (Ali Ijaz Sheikh) 
* [[`0dbf25c876`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/0dbf25c876)] - defer breakpoint callback (Ali Ijaz Sheikh) 
* [[`27692c1b11`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/27692c1b11)] - Pin diagnostics common version (Matt Loring)

## 2016-04-18, Version 0.7.0 (Experimental), @matthewloring

### Notable changes

**configuration**:
  * [[`2bc75d8f18`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2bc75d8f18)] - GCLOUD_PROJECT instead of GCLOUD_PROJECT_NUM (Matt Loring) 
  * [[`08fb68ce50`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/08fb68ce50)] - Enable maxFrames config option (Matt Loring) 
  * [[`14ac9e4abc`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/14ac9e4abc)] - Enable maxExpandFrames config option (Matt Loring) 

**performance**:
  * [[`d9f86a5f27`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d9f86a5f27)] - Speed up variable resolution ~10x on node 1.6+ (Matt Loring) 

### Commits

* [[`2bc75d8f18`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2bc75d8f18)] - GCLOUD_PROJECT instead of GCLOUD_PROJECT_NUM (Matt Loring) 
* [[`fd1f643c49`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/fd1f643c49)] - Update README images (Matt Loring) 
* [[`1169689eaa`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/1169689eaa)] - Update dependencies (Matt Loring) 
* [[`7f2010a156`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/7f2010a156)] - Remove outstanding todo (Matt Loring) 
* [[`06f5beafcc`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/06f5beafcc)] - Formatting and comments for state.js (Matt Loring) 
* [[`08fb68ce50`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/08fb68ce50)] - Enable maxFrames config option (Matt Loring) 
* [[`14ac9e4abc`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/14ac9e4abc)] - Enable maxExpandFrames config option (Matt Loring) 
* [[`82bb2b89f1`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/82bb2b89f1)] - Store breakpoint id instead of breakpoint where possible (Matt Loring) 
* [[`4828beee6c`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/4828beee6c)] - Enable maxStringLength config option (Matt Loring) 
* [[`c0f3350d7f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/c0f3350d7f)] - Display error for native properties/getters (Matt Loring) 
* [[`215d748d14`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/215d748d14)] - Only compute hash if no other uid available (Matt Loring) 
* [[`d667fa646b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d667fa646b)] - Remove TODO to use v8 as parser (Matt Loring) 
* [[`3550675eff`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/3550675eff)] - Only mark breakpoints done when api call succeeds (Matt Loring) 
* [[`0d9a312cb5`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/0d9a312cb5)] - Add performance test to monitor capture time (Matt Loring) 
* [[`d9f86a5f27`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d9f86a5f27)] - Speed up variable resolution ~10x on node 1.6+ (Matt Loring) 
* [[`2ba5bbd488`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2ba5bbd488)] - Removed event emitter from v8 debug api (Matt Loring) 
* [[`8eadace06b`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/8eadace06b)] - Add testing for map subtract (Matt Loring) 
* [[`2ececd6e8f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2ececd6e8f)] - Give proper type to execState (Matt Loring) 
* [[`3fcc8fae0e`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/3fcc8fae0e)] - Warn if malformed source-contexts is found (Matt Loring) 
* [[`a782875532`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a782875532)] - Cleanup todos (Matt Loring) 
* [[`a95b308b78`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/a95b308b78)] - Test for source context (Matt Loring) 
* [[`4de169b128`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/4de169b128)] - Clean up coffeescript error messages (Matt Loring) 
* [[`2d45b8ce97`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/2d45b8ce97)] - Regression test for #50 on GH (Matt Loring) 
* [[`df8b6f6bf0`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/df8b6f6bf0)] - Regression test for #56 on GH (Matt Loring) 
* [[`60ea5a00e0`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/60ea5a00e0)] - Expand testing for invalid watch expressions (Matt Loring) 
* [[`42277e65dc`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/42277e65dc)] - Unify warnings for using v5.2 and <v0.12 (Matt Loring) 
* [[`54c8a97c73`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/54c8a97c73)] - Don't repeat frame arguments in frame locals (Matt Loring) 
* [[`1c36ba5b66`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/1c36ba5b66)] - Error message when agent is run with node 5.2 (Matt Loring) 
* [[`d946f8715f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/d946f8715f)] - Update dev dependencies (Matt Loring) 
* [[`df69fdad2f`](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs/commit/df69fdad2f)] - Improve debug test coverage (Matt Loring)
