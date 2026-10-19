---
name: passci
description: >-
  Opt-in workflow triggered when the developer includes /passci in the prompt.
  Produces the requested code change, immediately opens a draft pull request
  (Push #1 of 2) so the developer can view the suggested changes, creates local
  follow-up commits prefixed with [Style Maintenance], [Independent review
  follow-ups] (from two independent Gemini reviews per round within Jetski, up
  to 5 rounds or until no high-priority issues come up), and [Address CI errors]
  (verifying unit tests pass with 95% confidence even when skipped by CI),
  pushes all subsequent commits together in a single second push (Push #2 of 2)
  so GitHub Actions unit tests do not reach their quota, and runs 1 final
  "/gemini review" on the PR to confirm no major issues remain. Use only when
  the prompt includes /passci.
---

# Opt-In Pass CI & 95% Unit Test Confidence Workflow (`/passci`)

This skill is **opt-in** and activates whenever a developer includes `/passci`
in their prompt when asking Jetski to make a code change and open a pull request
in `googleapis/google-cloud-node`.

## Overview of the `/passci` Workflow & Two-Push Quota Discipline

Every push to a pull request branch in `googleapis/google-cloud-node` triggers a
full matrix of GitHub Actions unit test workflows (`presubmit`, `presubmit-bun`,
`presubmit-windows`, and lint/compile jobs). To prevent GitHub Actions unit
tests from reaching their quota, **only 2 pushes are performed throughout the
entire workflow**:

1.  **Produce a code change that does what the user asked** on a dedicated
    feature/fix branch and commit the initial solution locally.
2.  **Push #1 of 2 — Open a draft PR so that the developer can see the suggested
    changes** immediately after the problem is solved, *before* the additional
    changes for style, extra reviews, and addressing CI errors are done.
3.  **While the developer looks at the draft PR, keep adding commits locally**
    (without pushing after each intermediate commit):
    *   **Add local commits prefixed with `[Style Maintenance]`**: Before doing
        independent review follow-ups, complete a step where we apply the
        principle: *"Referencing existing contributing guidelines and coding
        style documentation helps agents maintain code base quality."* Ensure
        the codebase quality of the changes is maintained and the style
        pertaining to the codebase is maintained by referencing the repository's
        existing contributing guidelines and coding style documentation.
    *   **Add local commits prefixed with `[Independent review follow-ups]`**:
        Instead of running `/gemini review` repeatedly on the PR (which would
        require multiple pushes and CI runs), conduct **two independent Gemini
        code reviews locally within Jetski** per round (using two separate,
        context-isolated subagents via `invoke_subagent` with no knowledge of
        how the changes were authored). Address the review comments that come up
        with local commits prefixed with `[Independent review follow-ups]`. Do
        this **five times or until no high-priority issues come up, whatever
        comes first**.
    *   **Verify unit tests locally with 95% confidence and add local commits
        prefixed with `[Address CI errors]`**: Run unit tests locally with
        $\ge 95\%$ confidence (even if they are skipped in the continuous
        integration pipeline) along with local compile and strict lint checks.
        If any failures occur, add local commits prefixed with
        `[Address CI errors]`.
4.  **Push #2 of 2 — Push all subsequent commits in a single batch**: Once all
    `[Style Maintenance]`, `[Independent review follow-ups]`, and local
    `[Address CI errors]` commits have been made locally, push them all at once
    (`git push`) so GitHub unit tests only run a second time and do not reach
    their quota.
5.  **Final Confirmation `/gemini review` & CI Check on the PR**: After Push #2,
    type `"/gemini review"` **once** in the PR at the very end to confirm there
    are no outstanding major issues, and verify that all GitHub CI checks pass
    (adding an `[Address CI errors]` commit only if an unexpected remote-only CI
    failure occurs).

Stage | Push Budget | Action | Required Commit Prefix
:--- | :--- | :--- | :---
**1. Solve the Task** | Local commit | Produce a code change that does what the user asked | `<type>(<package>): <description>`
**2. Open Draft PR** | **Push #1 of 2** | Push initial commit and open a draft PR (`gh pr create --draft`) so the developer can view the suggested changes right away | *(Draft PR opened from initial commit)*
**3. Style Maintenance** | Local commit (no push yet) | *"Referencing existing contributing guidelines and coding style documentation helps agents maintain code base quality."* Audit against [`CONTRIBUTING.md`](../../../CONTRIBUTING.md), [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html), [`gts`](https://github.com/google/gts), [`.eslintrc.json`](../../../.eslintrc.json), [`.prettierrc.cjs`](../../../.prettierrc.cjs), and [`bin/linter.mjs`](../../../bin/linter.mjs) | `[Style Maintenance]`
**4. Independent Gemini Reviews (in Jetski)** | Local commits (no push yet) | Run **2 independent Gemini reviews within Jetski** (`invoke_subagent`) and address review comments locally; repeat **up to 5 times or until no high-priority issues come up, whatever comes first** | `[Independent review follow-ups]`
**5. 95% Unit Tests, Push #2 & Final PR Confirmation** | **Push #2 of 2** | Verify unit tests pass with 95% confidence locally, commit any fixes with `[Address CI errors]`, push all follow-up commits in **one single push**, and run **1 final `"/gemini review"`** on the PR to confirm no major issues remain | `[Address CI errors]`

--------------------------------------------------------------------------------

## Helper Script (`scripts/passci.py`)

Use the bundled helper script [scripts/passci.py](scripts/passci.py) to audit
contributing guidelines and style rules, inspect local and final `/gemini review`
status, identify CI unit test blind spots, compute the 95% confidence unit test
plan, and verify commit prefix ordering and the 2-push budget:

```bash
# 1. Audit changed files, CI blind spots, and CONTRIBUTING.md style compliance:
python3 .agents/skills/passci/scripts/passci.py \
  --repo-root . \
  --base-ref upstream/main \
  --mode audit

# 2. Check local review rounds and final "/gemini review" confirmation on the PR:
python3 .agents/skills/passci/scripts/passci.py \
  --repo-root . \
  --mode check-reviews \
  --pr <PR_NUMBER>

# 3. Generate the 95% confidence unit test & CI verification plan:
python3 .agents/skills/passci/scripts/passci.py \
  --repo-root . \
  --base-ref upstream/main \
  --mode verify-ci \
  --confidence 0.95

# 4. Validate commit history prefixes ([Style Maintenance], [Independent review follow-ups], [Address CI errors]):
python3 .agents/skills/passci/scripts/passci.py \
  --repo-root . \
  --base-ref upstream/main \
  --mode verify-commits
```

--------------------------------------------------------------------------------

## Detailed Stage-by-Stage Instructions

### Stage 1: Produce a Code Change That Does What the User Asked

1.  **Create a dedicated branch** from `upstream/main` (or `origin/main`), never
    committing directly to `main`:

    ```bash
    git checkout -b <type>/<short-topic> upstream/main
    ```
2.  **Implement the requested code change** and corresponding unit tests as
    required by
    [`CONTRIBUTING.md` — Sending a pull request](../../../CONTRIBUTING.md#sending-a-pull-request).
3.  **Commit the initial implementation** following the
    [`CONTRIBUTING.md` — Commit messages](../../../CONTRIBUTING.md#commit-messages)
    format (`<type>(<package>): <description>`, lowercase verb after colon, no
    trailing period, under 76 characters):

    ```bash
    git add -A
    git commit -m "<type>(<package>): <concise summary of user request>"
    ```

### Stage 2: Open a Draft Pull Request Immediately (**Push #1 of 2**)

Right after solving the user's task in Stage 1 — **before** performing style
maintenance, extra reviews, or CI error fixes — perform **Push #1 of 2** and
open a draft pull request so the developer can inspect the suggested changes
while follow-up commits are prepared locally:

1.  **Push #1 of 2 — Push the initial branch to the remote**:

    ```bash
    git push -u origin <branch_name>
    ```
2.  **Create the draft pull request** following
    `.agents/skills/create-pr/SKILL.md` and
    [`CONTRIBUTING.md`](../../../CONTRIBUTING.md):

    ```bash
    gh pr create --draft \
      --repo googleapis/google-cloud-node \
      --base main \
      --head <fork_owner>:<branch_name> \
      --title "<type>(<package>): <description>" \
      --body "<structured PR body per .agents/skills/create-pr/SKILL.md>"
    ```
3.  **Share the draft PR in Jetski and continue locally**:
    *   Surface the draft PR link (and create a `.url.json` artifact with
        `UserFacing: true`) so the developer can view the initial solution right
        away.
    *   **Do not push again** until Stage 5 (`Push #2 of 2`), so intermediate
        style and review commits do not trigger redundant GitHub Actions runs.

### Stage 3: Style Maintenance & Contributing Guidelines (`[Style Maintenance]`)

> *"Referencing existing contributing guidelines and coding style documentation
> helps agents maintain code base quality."*

Before doing independent review follow-ups, audit the code changes against the
repository's existing contributing guidelines and coding style documentation to
ensure codebase quality and style consistency are maintained:

#### Authoritative Contributing & Coding Style References

Reference and enforce each of the following documents when auditing the branch:

1.  **Repository Contributing Guidelines ([`CONTRIBUTING.md`](../../../CONTRIBUTING.md))**:
    *   [**Sending a pull request**](../../../CONTRIBUTING.md#sending-a-pull-request):
        Every new source file must include the Apache-2.0 Google LLC copyright
        header, and logic changes must include unit tests.
    *   [**Leaving a TODO**](../../../CONTRIBUTING.md#leaving-a-todo): Every
        `TODO` comment must link to a tracked GitHub issue in the exact format:
        `// TODO(https://github.com/googleapis/google-cloud-node/issues/<number>): explain what needs to be done`
    *   [**Commit messages & Issue references**](../../../CONTRIBUTING.md#commit-messages):
        Follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/#summary)
        (`<type>(<package>): <description>`), keep the summary line under ~76
        characters with a lowercase verb after the colon and no trailing period,
        use plain text in commit bodies, and reference issues using `Fixes #123`
        or `For #123` (never `Closes` or `Resolves`).
    *   [**Addressing code review comments**](../../../CONTRIBUTING.md#addressing-code-review-comments):
        Add follow-up commits rather than amending and force-pushing so
        reviewers can inspect incremental changes at each stage.
    *   [**Handling Dependency Updates**](../../../CONTRIBUTING.md#handling-dependency-updates):
        Only modify dependencies for security vulnerabilities, bug fixes, or
        feature support linked to an issue in the repository.
    *   [**Package-level Contributing Guidelines**](../../../core/packages/gax/CONTRIBUTING.md#contributing-a-patch):
        *"Ensure that your code adheres to the existing style in the code to
        which you are contributing."*
2.  **Google TypeScript & JavaScript Coding Style Documentation**:
    *   [**Google TypeScript Style Guide**](https://google.github.io/styleguide/tsguide.html)
        and
        [**Google JavaScript Style Guide**](https://google.github.io/styleguide/jsguide.html):
        Enforce `const`/`let` (never `var`), strict equality (`===`/`!==`),
        explicit types over `any` where practical, `UpperCamelCase` for
        classes/interfaces/types, `lowerCamelCase` for methods/variables, and
        clear JSDoc annotations.
    *   [**Google TypeScript Style (`gts`)**](https://github.com/google/gts):
        The automated style guide, linter, and formatter configured across this
        monorepo.
3.  **Repository Linter & Formatter Configurations**:
    *   [**`.eslintrc.json`**](../../../.eslintrc.json): Extends
        `./node_modules/gts` and enforces `import/no-extraneous-dependencies`,
        `promise/always-return`, `promise/catch-or-return`,
        `promise/no-callback-in-promise`, `promise/no-nesting`,
        `n/no-extraneous-require`, and `@typescript-eslint/no-empty-interface`
        (plus package-specific overrides for `handwritten/firestore` and
        `packages/**/*.ts`).
    *   [**`.prettierrc.cjs`**](../../../.prettierrc.cjs): Inherits
        `gts/.prettierrc.json` formatting rules (single quotes, no bracket
        spacing).
    *   [**`bin/linter.mjs`**](../../../bin/linter.mjs): Runs isolated ESLint
        worker threads and `tsc --noEmit` across every modified package.

#### Running Style Maintenance & Committing Locally with `[Style Maintenance]`

1.  Run the style audit, package auto-fixer, and strict monorepo linter:

    ```bash
    # Audit against CONTRIBUTING.md rules (Apache headers, TODO links, commit conventions):
    python3 .agents/skills/passci/scripts/passci.py \
      --repo-root . --base-ref upstream/main --mode audit

    # Run gts/Prettier/ESLint autofix in each touched package directory:
    pnpm --dir <package_dir> run fix

    # Run the monorepo strict linter and TypeScript compiler check:
    GIT_DIFF_ARG="upstream/main...HEAD -- :!packages" node ./bin/linter.mjs --strict
    ```
2.  Commit any style, formatting, comment, or contributing-guideline updates
    **locally** with a commit message prefixed with `[Style Maintenance]` (do
    **not** push yet — save the push for Stage 5):

    ```bash
    git add -A
    git commit -m "[Style Maintenance] align changes with CONTRIBUTING.md and gts coding style guidelines"
    ```

### Stage 4: Two Independent Gemini Reviews per Round Within Jetski (`[Independent review follow-ups]`)

Instead of running `"/gemini review"` repeatedly on the PR (which would require
pushing after every round and burning GitHub Actions unit test quota), perform
the iterative independent reviews **within Jetski** and save a single
`"/gemini review"` on the PR for the very end (Stage 5):

1.  **Run Two Independent Gemini Reviews in Parallel Within Jetski**:
    *   In each review round, invoke **two separate, context-isolated subagents**
        (`invoke_subagent` with 2 entries using `research-google` or `self`)
        that have **zero prior knowledge** of the conversation history or why the
        changes were written.
    *   Instruct both independent reviewers to inspect only `git diff
        upstream/main...HEAD`, the touched files, and `CONTRIBUTING.md`, and to
        classify each finding by priority (`high` / `critical` vs. `medium` /
        `low`):
        *   **Independent Reviewer 1**: Focus on correctness, edge cases, async
            / Promise / callback handling, error propagation, resource leaks,
            and backwards compatibility.
        *   **Independent Reviewer 2**: Focus on TypeScript type safety, unit
            test coverage and assertions, `CONTRIBUTING.md` compliance, and API
            contract consistency.
2.  **Address Review Comments Locally with `[Independent review follow-ups]` Commits**:
    *   Synthesize the findings from both independent reviewers, fix the issues
        raised, and commit the changes **locally** with a commit message
        starting with `[Independent review follow-ups]` (do **not** push yet):

        ```bash
        git add -A
        git commit -m "[Independent review follow-ups] address independent Gemini review comments (round <r>)"
        ```
3.  **Repeat Up to Five Rounds or Until No High-Priority Issues Come Up**:
    *   Check whether either of the two independent Gemini reviews in round `<r>`
        surfaced any high-priority / major issues (`![high]`, `![critical]`,
        `High`, `Critical`, `P0`, `P1`, bugs, race conditions, or broken types).
    *   Repeat this dual-reviewer pass up to **5 rounds** OR stop as soon as a
        round produces **no high-priority issues**, **whichever comes first**.

### Stage 5: Local 95% Unit Test Verification, Push #2 of 2, and Final `/gemini review` (`[Address CI errors]`)

#### Why Unit Tests Are Skipped in the `google-cloud-node` CI Pipeline

Inspecting [`ci/run_conditional_tests.sh`](../../../ci/run_conditional_tests.sh)
and `.github/workflows/` shows five cases where unit tests do **not** run in the
CI pipeline:

CI Blind Spot | Root Cause in [`ci/run_conditional_tests.sh`](../../../ci/run_conditional_tests.sh) | Required Local Verification
:--- | :--- | :---
**`core/packages/*` & `core/dev-packages/*` on Node.js** | `presubmit.yaml` does not set `IS_CORE=true`; `ci/run_conditional_tests.sh` logs `skipping core package ... in non-core trigger` and skips all Node.js 22/24/26 unit tests. | Run `pnpm --dir <pkg_dir> run compile && pnpm --dir <pkg_dir> test` directly on Node.js.
**`core/packages/tools` & `gapic-node-processing` on Bun** | `ci/run_conditional_tests.sh` explicitly skips these internal CLI tools when `JS_RUNTIME=bun`. | Run `pnpm --dir <pkg_dir> test` on Node.js and verify CLI invocations directly.
**Windows Exemption List** | `windows_exempt_tests` skips `core/`, `core/packages/`, `core/dev-packages/`, `.github/scripts/`, and `handwritten/cloud-profiler/`. | Run unit tests locally and verify cross-platform path handling (`path.sep`, `path.posix`).
**Root Tooling (`bin/*`) & Shared Core Libraries** | `ci/run_conditional_tests.sh` only checks `git diff` on `ci/` or per-package directories; edits to `bin/run-test.cjs`, `bin/proxyquire-bun-shim.cjs`, `bin/linter.mjs`, or `core/packages/*` do not trigger downstream package tests in CI. | Run stratified sample of downstream packages ($n = 59$) for $\ge 95\%$ confidence.
**`ignore.json` Packages** | Any directory listed in `ignore.json` is skipped by `ci/run_conditional_tests.sh`. | Run `pnpm --dir <pkg_dir> test` directly.

#### Step 5.1: Verify Unit Tests Locally at $\ge 95\%$ Confidence & Run Local CI Suite

1.  **Direct Multi-Runtime Unit Test Execution on All Touched Packages**:
    *   For every modified package directory (even when skipped by
        `ci/run_conditional_tests.sh`), compile and run its unit tests under both
        **Node.js** and **Bun**:

        ```bash
        pnpm --dir <pkg_dir> run compile
        pnpm --dir <pkg_dir> test
        JS_RUNTIME=bun MOCHA_PARALLEL=false bun --bun run --cwd <pkg_dir> test
        ```
2.  **Statistical $\ge 95\%$ Unit Test Confidence**:
    *   Re-run modified unit test suites ($n = \lceil \ln(1 - 0.95) / \ln(0.5)
        \rceil = 5$ runs across Node.js and Bun) with zero failures.
    *   When shared infrastructure (`bin/*`, `ci/*`, `core/packages/gax`,
        `google-auth-library-nodejs`, `gaxios`, `gcp-metadata`, `teeny-request`)
        is modified, by the statistical Rule of Three ($n = \lceil \ln(1 - 0.95)
        / \ln(0.95) \rceil = 59$), run unit tests across a stratified sample of
        $n = 59$ downstream packages with **0 failures** to establish with
        **95% confidence** that at least 95% of monorepo packages pass.
3.  **Run Local CI Checks Before Pushing**:
    *   Execute the local CI suite and commit any fixes **locally** with the
        prefix `[Address CI errors]`:

        ```bash
        pnpm install --frozen-lockfile --ignore-scripts
        pnpm run compile
        GIT_DIFF_ARG="upstream/main...HEAD -- :!packages" node ./bin/linter.mjs --strict
        RUN_TESTS_MODE=RUN_UNIT_TESTS BUILD_TYPE=presubmit TEST_TYPE=units \
          SHARD_TOTAL=1 SHARD_INDEX=0 GIT_DIFF_ARG="upstream/main...HEAD" \
          bash ci/run_conditional_tests.sh --strict

        # If any local CI or unit test check needed a fix, commit locally before Push #2:
        git add -A
        git commit -m "[Address CI errors] <description of CI or unit test fix>"
        ```

#### Step 5.2: Push #2 of 2 — Single Batch Push of All Subsequent Commits

Once all `[Style Maintenance]`, `[Independent review follow-ups]`, and local
`[Address CI errors]` commits are recorded on your local branch, perform **Push
#2 of 2** so GitHub Actions only runs a second time for the entire follow-up
series:

```bash
git push
```

#### Step 5.3: Run 1 Final `"/gemini review"` on the PR & Confirm CI Passes

1.  **Trigger 1 Final `"/gemini review"` on the PR**:
    *   Comment `"/gemini review"` **once** at the very end to confirm there are
        no outstanding major issues on the pull request:

        ```bash
        gh pr comment <pr_number> \
          --repo googleapis/google-cloud-node \
          --body "/gemini review"
        ```
2.  **Confirm No Major Issues & All GitHub CI Checks Pass**:
    *   Inspect the final PR review and monitor the GitHub Actions run triggered
        by Push #2:

        ```bash
        python3 .agents/skills/passci/scripts/passci.py \
          --repo-root . --mode check-reviews --pr <pr_number>
        gh pr checks <pr_number> --repo googleapis/google-cloud-node
        ```
    *   *(Only if the final PR review or remote CI run surfaces a remaining
        major issue or remote-only CI failure, add a final `[Independent review
        follow-ups]` or `[Address CI errors]` commit and push to resolve it).*

--------------------------------------------------------------------------------

## Verification Checklist Before Completing `/passci`

-   [ ] **1. Code Change Committed**: Initial commit solves the user's request
    and follows `<type>(<package>): <description>`.
-   [ ] **2. Draft PR Opened Immediately (Push #1 of 2)**: Draft PR (`gh pr
    create --draft`) opened right after solving the problem, *before* style,
    extra review, and CI fix commits.
-   [ ] **3. `[Style Maintenance]` Commit(s) Created Locally**: Audited against
    [`CONTRIBUTING.md`](../../../CONTRIBUTING.md),
    [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html),
    [`gts`](https://github.com/google/gts),
    [`.eslintrc.json`](../../../.eslintrc.json),
    [`.prettierrc.cjs`](../../../.prettierrc.cjs), and
    [`bin/linter.mjs`](../../../bin/linter.mjs) (*"Referencing existing
    contributing guidelines and coding style documentation helps agents maintain
    code base quality."*), with commits prefixed with `[Style Maintenance]`.
-   [ ] **4. `[Independent review follow-ups]` Commit(s) Created Locally**:
    Conducted **2 independent Gemini reviews per round within Jetski**
    (`invoke_subagent`) with no prior context and addressed comments with local
    commits prefixed with `[Independent review follow-ups]`, repeating up to
    **5 times or until no high-priority issues come up, whatever comes first**.
-   [ ] **5. 95% Unit Test Confidence, Single Batch Push (Push #2 of 2) & 1
    Final `/gemini review`**: Unit tests verified locally with $\ge 95\%$
    confidence (even if skipped in CI), any CI fixes committed with `[Address CI
    errors]`, all subsequent commits pushed together in **Push #2 of 2** so
    GitHub unit tests do not reach their quota, and **1 final `"/gemini
    review"`** run on the PR confirming no major issues remain.
