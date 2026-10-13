---
name: create-pr
description: >-
  Creates GitHub pull requests in draft mode by default following repository
  conventions. Use when opening, creating, or submitting a pull request, pushing
  a branch for review, or running gh pr create. Don't use for reviewing existing
  pull requests, triaging issues without code changes, or running local tests
  without opening a pull request.
---

# Create Pull Request

This skill guides the creation of GitHub pull requests in
`googleapis/google-cloud-node`. It enforces opening all pull requests in draft
mode by default and formatting pull request titles and descriptions according to
[`CONTRIBUTING.md`](../../../CONTRIBUTING.md).

## Why Draft by Default

Always create pull requests in draft mode (`--draft`) unless the user explicitly
requests a ready-for-review pull request.

Opening a non-draft pull request in `googleapis/google-cloud-node` immediately
triggers GitHub review assignments and notifications to repository maintainers
and other engineers. Marking pull requests as draft by default ensures that pull
requests created by Jetski do not automatically inform other engineers that they
need to review the pull request until the author has verified the changes and
removed the draft status.

## Workflow

1.  Verify local branch and changes.
2.  Format the pull request title and body.
3.  Push the branch to the remote repository.
4.  Create the pull request with `--draft`.
5.  Verify that the pull request is in draft state.

### 1. Verify Local Branch and Changes

Inspect the working tree and branch state before pushing:

```bash
git status
git branch --show-current
git log upstream/main..HEAD --oneline
```

-   Confirm work is on a dedicated feature or fix branch, never `main`.
-   Ensure only intended files are staged or committed and no temporary files or
    untracked build artifacts are included.
-   Include copyright headers in any new source files and run tests and linter
    checks (`pnpm run test`, `pnpm run fix`) for affected packages.

### 2. Format the Pull Request Title and Body

Pull requests are squashed and merged in `googleapis/google-cloud-node`, so the
pull request title and description become the final commit message. Follow the
conventions in [`CONTRIBUTING.md`](../../../CONTRIBUTING.md#commit-messages):

#### Title Format

Format the title as `<type>({package}): {description}` (or `<type>:
{description}` for repository-wide changes):

Type       | Purpose
---------- | ----------------------------------------------------------
`feat`     | A new feature
`fix`      | A bug fix
`docs`     | Documentation-only changes
`test`     | Adding or updating tests
`refactor` | Code change that neither fixes a bug nor adds a feature
`chore`    | Build process, configuration, or auxiliary tooling changes
`ci`       | Continuous integration workflow or script changes

-   **`{package}`**: Name of the affected package (for example, `storage`,
    `pubsub`, `gaxios`, or `tools`).
-   **`{description}`**: Starts with a lowercase verb completing the sentence
    *"This change modifies the codebase to ..."*, has no trailing period, and
    keeps the entire title under 76 characters.

#### Body Format

Structure the pull request body using the following template:

```markdown
## Description

<1 sentence describing what the pull request does>

## Impact

<1 sentence describing what the impact of the PR is and what problem it solves>

## Changes

<provide-bullet-points of what the changes are at a high level (more detailed explanation of description)>

## Testing

<Explain what tests were added, deleted or changed in a bullet point format. Try to limit to 10 bullet points or less>

## Alternatives

<Explain alternatives considered against merging the PR including the option of not merging a PR at all because of the risks it introduces>
```

-   **`## Description`**: Write 1 sentence describing what the pull request
    does.
-   **`## Impact`**: Write 1 sentence describing what the impact of the pull
    request is and what problem it solves.
-   **`## Changes`**: Provide bullet points of what the changes are at a high
    level (a more detailed explanation of the description).
-   **`## Testing`**: Explain what tests were added, deleted, or changed in a
    bullet-point format. Limit this section to 10 bullet points or fewer.
-   **`## Alternatives`**: Explain alternatives considered against merging the
    pull request, including the option of not merging a pull request at all
    because of the risks it introduces.
-   **Issue References**: When referencing associated issues at the end of the
    body, use `Fixes #{issue_number}` when the pull request fully resolves the
    issue, or `For #{issue_number}` when it is a partial step. Do not use
    aliases such as `Closes` or `Resolves`.

### 3. Push the Branch and Create the Draft Pull Request

Push the branch to the remote (`origin` for a fork or `upstream` for a
repository branch), then run `gh pr create` with the `--draft` flag:

```bash
git push -u origin {branch_name}
gh pr create --draft \
  --repo googleapis/google-cloud-node \
  --base main \
  --head {fork_owner}:{branch_name} \
  --title "{pr_title}" \
  --body "{pr_body}"
```

When pushing directly to a branch on `googleapis/google-cloud-node`, pass
`--head {branch_name}` without a `{fork_owner}:` prefix.

Flag      | Default  | Description
--------- | -------- | -----------
`--draft` | Disabled | Required by this skill; marks the pull request as a draft so reviewers are not notified early
`--repo`  | Current  | Target repository (`googleapis/google-cloud-node`)
`--base`  | `main`   | Base branch into which changes will be merged
`--head`  | Current  | Head branch containing the commits (`{branch_name}` or `{owner}:{branch}`)
`--title` | None     | Pull request title following `<type>({package}): {description}`
`--body`  | None     | Pull request description following the required section template

### 4. Verify Draft Status

Confirm that the created pull request has `"isDraft": true`:

```bash
gh pr view {pr_number} --repo googleapis/google-cloud-node --json number,isDraft,url
```

If a pull request was inadvertently created without `--draft`, immediately
convert it back to a draft:

```bash
gh pr ready {pr_number} --repo googleapis/google-cloud-node --undo
```
