#!/usr/bin/env python3
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Helper script for the passci (/passci) skill in googleapis/google-cloud-node.

Enforces the `/passci` workflow for `googleapis/google-cloud-node` while
requiring only 2 `git push` invocations so GitHub Actions unit tests do not
reach their quota:
  1. Produce the code change requested by the developer.
  2. Push #1 of 2: Open a draft PR immediately so the developer can view the
     suggested changes before style, review, and CI follow-up commits are added.
  3. Audit changes locally against `CONTRIBUTING.md` and coding style
     documentation ("Referencing existing contributing guidelines and coding
     style documentation helps agents maintain code base quality.") and mark
     local style commits with `[Style Maintenance]`.
  4. Conduct 2 independent Gemini reviews per round within Jetski (using
     context-isolated subagents) and address comments with local commits
     prefixed with `[Independent review follow-ups]`, repeating up to 5 times or
     until no high-priority issues come up, whatever comes first.
  5. Verify unit tests pass locally with >= 95% confidence (including packages
     skipped by `ci/run_conditional_tests.sh`), mark any CI/test fix commits
     with `[Address CI errors]`, perform Push #2 of 2 to push all follow-up
     commits in a single batch, and run 1 final `"/gemini review"` on the PR to
     confirm no outstanding major issues remain.
"""

from __future__ import annotations

import argparse
from collections.abc import Mapping, Sequence
import dataclasses
import json
import math
import pathlib
import random
import re
import subprocess
from typing import Any

DEFAULT_REPO = "googleapis/google-cloud-node"
DEFAULT_BASE_REF = "upstream/main"
DEFAULT_CONFIDENCE = 0.95
MAX_GEMINI_REVIEW_ROUNDS = 5
INDEPENDENT_REVIEWERS_PER_ROUND = 2
FINAL_PR_GEMINI_REVIEWS = 1
MAX_GIT_PUSHES = 2
GEMINI_REVIEW_TRIGGER_COMMAND = "/gemini review"

STYLE_MAINTENANCE_PREFIX = "[Style Maintenance]"
INDEPENDENT_REVIEW_PREFIX = "[Independent review follow-ups]"
ADDRESS_CI_ERRORS_PREFIX = "[Address CI errors]"

CONTRIBUTING_GUIDELINES_PRINCIPLE = (
    "Referencing existing contributing guidelines and coding style"
    " documentation helps agents maintain code base quality."
)

STYLE_MAINTENANCE_REFERENCES = (
    "CONTRIBUTING.md",
    "core/packages/gax/CONTRIBUTING.md",
    "https://google.github.io/styleguide/tsguide.html",
    "https://google.github.io/styleguide/jsguide.html",
    "https://github.com/google/gts",
    ".eslintrc.json",
    ".prettierrc.cjs",
    "bin/linter.mjs",
)

CONVENTIONAL_COMMIT_RE = re.compile(
    r"^(feat|fix|docs|test|refactor|chore|ci|perf|build|revert)"
    r"(?:\([a-zA-Z0-9._/-]+\))?!?:\s+[a-z0-9].*$"
)
APACHE_HEADER_RE = re.compile(
    r"Copyright\s+20\d{2}(?:-20\d{2})?\s+Google\s+(?:LLC|Inc\.?)[\s\S]{0,400}Apache\s+License,\s+Version\s+2\.0",
    re.IGNORECASE,
)
TODO_COMMENT_RE = re.compile(r"//\s*TODO\b(.*)$")
VALID_ISSUE_TODO_RE = re.compile(
    r"^\(https://github\.com/googleapis/google-cloud-node/issues/\d+\):\s+\S+"
)
FORBIDDEN_ISSUE_ALIAS_RE = re.compile(
    r"\b(?:Closes|Closed|Close|Resolves|Resolved|Resolve)\s+#\d+",
    re.IGNORECASE,
)
HIGH_PRIORITY_REVIEW_RE = re.compile(
    r"(?:!\[(?:high|critical)\]"
    r"|severity\s*[:=]\s*(?:high|critical)"
    r"|priority\s*[:=]\s*(?:high|critical|p0|p1)"
    r"|\b(?:high[- ]priority|critical\s+issue)\b)",
    re.IGNORECASE,
)

BUN_SKIPPED_PACKAGES = frozenset({
    "core/packages/gapic-node-processing",
    "core/packages/tools",
})

WINDOWS_EXEMPT_PREFIXES = (
    "core/",
    "core/packages/",
    "core/dev-packages/",
    ".github/scripts/fixtures/",
    ".github/scripts/tests/",
    "handwritten/cloud-profiler/",
)

SHARED_INFRA_PREFIXES = (
    "bin/",
    "ci/",
    "core/packages/gax/",
    "core/packages/gaxios/",
    "core/packages/gcp-metadata/",
    "core/packages/google-auth-library-nodejs/",
    "core/packages/teeny-request/",
    "core/packages/nodejs-googleapis-common/",
    "core/packages/tools/",
)


@dataclasses.dataclass(frozen=True)
class CiBlindSpot:
  """Represents a package whose unit tests are skipped in part or all of CI."""

  package_dir: str
  skipped_in: tuple[str, ...]
  reason: str


@dataclasses.dataclass(frozen=True)
class ChangeAnalysis:
  """Classification of changed files and affected packages in google-cloud-node."""

  changed_files: tuple[str, ...]
  affected_packages: tuple[str, ...]
  ci_blind_spots: tuple[CiBlindSpot, ...]
  touches_shared_infra: bool
  touches_librarian_yaml: bool
  touches_generator: bool


@dataclasses.dataclass(frozen=True)
class StyleAuditReport:
  """Results of auditing changed files against CONTRIBUTING.md and style rules."""

  principle: str
  references: tuple[str, ...]
  missing_license_headers: tuple[str, ...]
  invalid_todos: tuple[str, ...]
  invalid_commit_titles: tuple[str, ...]
  forbidden_issue_aliases: tuple[str, ...]
  passed: bool


@dataclasses.dataclass(frozen=True)
class GeminiReviewLoopStatus:
  """State of the iterative Jetski independent reviews and final PR `/gemini review`."""

  trigger_command: str
  rounds_completed: int
  max_rounds: int
  high_priority_issues_in_latest_round: int
  total_comments_in_latest_round: int
  should_continue_reviewing: bool
  stop_reason: str
  independent_reviewers_per_round: int = INDEPENDENT_REVIEWERS_PER_ROUND
  final_pr_gemini_reviews: int = FINAL_PR_GEMINI_REVIEWS
  max_git_pushes: int = MAX_GIT_PUSHES


@dataclasses.dataclass(frozen=True)
class UnitTestPlan:
  """Execution plan to verify unit tests with >= 95% confidence."""

  confidence: float
  direct_packages: tuple[str, ...]
  ci_skipped_packages: tuple[str, ...]
  sampled_downstream_packages: tuple[str, ...]
  runs_per_modified_package: int
  commands: tuple[str, ...]


@dataclasses.dataclass(frozen=True)
class CommitValidationResult:
  """Validation result for `/passci` commit history prefixes and ordering."""

  initial_commits: tuple[str, ...]
  style_commits: tuple[str, ...]
  review_commits: tuple[str, ...]
  ci_error_commits: tuple[str, ...]
  order_valid: bool
  has_all_required_prefixes: bool
  messages: tuple[str, ...]


def compute_sample_size_for_confidence(
    confidence: float = DEFAULT_CONFIDENCE,
    reliability_target: float = DEFAULT_CONFIDENCE,
    population_size: int | None = None,
) -> int:
  """Computes sample size n for zero-failure binomial confidence."""
  if not (0.0 < confidence < 1.0):
    raise ValueError(f"confidence must be between 0 and 1, got {confidence}")
  if not (0.0 < reliability_target < 1.0):
    raise ValueError(
        f"reliability_target must be between 0 and 1, got {reliability_target}"
    )

  required_n = math.ceil(
      math.log(1.0 - confidence) / math.log(reliability_target)
  )
  if population_size is not None and population_size >= 0:
    return min(required_n, population_size)
  return required_n


def is_high_priority_review_comment(body: str) -> bool:
  """Returns True if a PR review comment body indicates a high-priority issue."""
  return bool(HIGH_PRIORITY_REVIEW_RE.search(body or ""))


def evaluate_gemini_review_round(
    rounds_completed: int,
    latest_round_comment_bodies: Sequence[str],
    max_rounds: int = MAX_GEMINI_REVIEW_ROUNDS,
) -> GeminiReviewLoopStatus:
  """Evaluates whether another independent Gemini review round is required."""
  high_priority_count = sum(
      1
      for body in latest_round_comment_bodies
      if is_high_priority_review_comment(body)
  )
  total_comments = len(latest_round_comment_bodies)

  if rounds_completed <= 0:
    return GeminiReviewLoopStatus(
        trigger_command=GEMINI_REVIEW_TRIGGER_COMMAND,
        rounds_completed=0,
        max_rounds=max_rounds,
        high_priority_issues_in_latest_round=high_priority_count,
        total_comments_in_latest_round=total_comments,
        should_continue_reviewing=True,
        stop_reason=(
            "No independent Gemini review rounds have been executed yet."
        ),
    )

  if rounds_completed >= max_rounds:
    return GeminiReviewLoopStatus(
        trigger_command=GEMINI_REVIEW_TRIGGER_COMMAND,
        rounds_completed=rounds_completed,
        max_rounds=max_rounds,
        high_priority_issues_in_latest_round=high_priority_count,
        total_comments_in_latest_round=total_comments,
        should_continue_reviewing=False,
        stop_reason=(
            f"Reached maximum of {max_rounds} independent Gemini review rounds;"
            " ready for Push #2 and 1 final `/gemini review` on the PR."
        ),
    )

  if high_priority_count == 0:
    return GeminiReviewLoopStatus(
        trigger_command=GEMINI_REVIEW_TRIGGER_COMMAND,
        rounds_completed=rounds_completed,
        max_rounds=max_rounds,
        high_priority_issues_in_latest_round=0,
        total_comments_in_latest_round=total_comments,
        should_continue_reviewing=False,
        stop_reason=(
            "No high-priority issues came up in the latest review round;"
            " ready for Push #2 and 1 final `/gemini review` on the PR."
        ),
    )

  return GeminiReviewLoopStatus(
      trigger_command=GEMINI_REVIEW_TRIGGER_COMMAND,
      rounds_completed=rounds_completed,
      max_rounds=max_rounds,
      high_priority_issues_in_latest_round=high_priority_count,
      total_comments_in_latest_round=total_comments,
      should_continue_reviewing=True,
      stop_reason=(
          f"{high_priority_count} high-priority issue(s) found in round"
          f" {rounds_completed}; continue local independent review up to"
          f" {max_rounds} rounds."
      ),
  )


def _extract_package_dir(file_path: str) -> str | None:
  """Maps a repo-relative file path to its containing monorepo package directory."""
  norm = file_path.strip().lstrip("./")
  patterns = (
      r"^(packages/[^/]+)/",
      r"^(handwritten/[^/]+)/",
      r"^(core/packages/[^/]+)/",
      r"^(core/dev-packages/[^/]+)/",
      r"^(core/generator/[^/]+)/",
      r"^(containers/[^/]+)/",
  )
  for pattern in patterns:
    match = re.match(pattern, norm)
    if match:
      return match.group(1)
  if norm.startswith(".github/scripts/"):
    return ".github/scripts"
  return None


def identify_ci_blind_spots(
    package_dirs: Sequence[str],
    ignored_packages: Sequence[str] = (),
) -> tuple[CiBlindSpot, ...]:
  """Identifies which packages have unit tests skipped by CI workflows."""
  ignored_set = {p.rstrip("/") for p in ignored_packages}
  blind_spots: list[CiBlindSpot] = []

  for pkg in sorted({p.rstrip("/") for p in package_dirs}):
    skipped_in: list[str] = []
    reasons: list[str] = []

    if pkg in ignored_set:
      skipped_in.extend(
          ["presubmit-node", "presubmit-bun", "presubmit-windows"]
      )
      reasons.append("listed in ignore.json")

    if pkg.startswith("core/packages/") or pkg.startswith(
        "core/dev-packages/"
    ):
      skipped_in.append("presubmit-node (Node 22, 24, 26)")
      reasons.append(
          "ci/run_conditional_tests.sh skips core/packages/* and"
          " core/dev-packages/* when IS_CORE is unset in presubmit.yaml"
      )

    if pkg in BUN_SKIPPED_PACKAGES:
      skipped_in.append("presubmit-bun")
      reasons.append(
          "ci/run_conditional_tests.sh skips internal CLI tool on Bun runtime"
      )

    if pkg.startswith("core/generator/"):
      skipped_in.extend(
          ["presubmit-node", "presubmit-bun", "presubmit-windows"]
      )
      reasons.append(
          "core/generator/* is not in ci/run_conditional_tests.sh subdirs"
      )

    if any(
        pkg == prefix.rstrip("/") or pkg.startswith(prefix)
        for prefix in WINDOWS_EXEMPT_PREFIXES
    ):
      if "presubmit-windows" not in skipped_in:
        skipped_in.append("presubmit-windows")
      reasons.append(
          "listed in windows_exempt_tests in ci/run_conditional_tests.sh"
      )

    if skipped_in:
      blind_spots.append(
          CiBlindSpot(
              package_dir=pkg,
              skipped_in=tuple(dict.fromkeys(skipped_in)),
              reason="; ".join(reasons),
          )
      )

  return tuple(blind_spots)


def classify_changed_files(
    changed_files: Sequence[str],
    ignored_packages: Sequence[str] = (),
) -> ChangeAnalysis:
  """Classifies changed files into affected packages and CI blind spots."""
  cleaned = tuple(
      sorted({f.strip().lstrip("./") for f in changed_files if f.strip()})
  )
  packages: set[str] = set()
  touches_shared_infra = False
  touches_librarian_yaml = False
  touches_generator = False

  for file_path in cleaned:
    pkg_dir = _extract_package_dir(file_path)
    if pkg_dir:
      packages.add(pkg_dir)
    if any(file_path.startswith(prefix) for prefix in SHARED_INFRA_PREFIXES):
      touches_shared_infra = True
    if file_path in (
        "package.json",
        "pnpm-lock.yaml",
        ".eslintrc.json",
        "tsconfig.json",
    ):
      touches_shared_infra = True
    if file_path == "librarian.yaml":
      touches_librarian_yaml = True
    if file_path.startswith("core/generator/"):
      touches_generator = True

  sorted_packages = tuple(sorted(packages))
  blind_spots = identify_ci_blind_spots(sorted_packages, ignored_packages)
  return ChangeAnalysis(
      changed_files=cleaned,
      affected_packages=sorted_packages,
      ci_blind_spots=blind_spots,
      touches_shared_infra=touches_shared_infra,
      touches_librarian_yaml=touches_librarian_yaml,
      touches_generator=touches_generator,
  )


def build_unit_test_plan(
    analysis: ChangeAnalysis,
    all_packages: Sequence[str] = (),
    confidence: float = DEFAULT_CONFIDENCE,
    seed: int = 42,
) -> UnitTestPlan:
  """Builds a unit test verification plan achieving >= 95% confidence."""
  direct = list(analysis.affected_packages)
  ci_skipped = [spot.package_dir for spot in analysis.ci_blind_spots]

  runs_per_modified = max(
      1, math.ceil(math.log(1.0 - confidence) / math.log(0.5))
  )

  sampled_downstream: list[str] = []
  if analysis.touches_shared_infra and all_packages:
    direct_set = set(direct)
    candidates = sorted(
        p.rstrip("/") for p in all_packages if p.rstrip("/") not in direct_set
    )
    sample_n = compute_sample_size_for_confidence(
        confidence=confidence,
        reliability_target=confidence,
        population_size=len(candidates),
    )
    rng = random.Random(seed)
    sampled_downstream = sorted(rng.sample(candidates, sample_n))

  commands: list[str] = [
      "pnpm install --frozen-lockfile --ignore-scripts",
      "pnpm run compile",
      (
          'GIT_DIFF_ARG="upstream/main...HEAD -- :!packages" node'
          " ./bin/linter.mjs --strict"
      ),
  ]
  for pkg in direct:
    commands.append(f"pnpm --dir {pkg} run compile")
    commands.append(f"pnpm --dir {pkg} test")
    if pkg not in BUN_SKIPPED_PACKAGES and not pkg.startswith(
        "core/generator/"
    ):
      commands.append(
          f"JS_RUNTIME=bun MOCHA_PARALLEL=false bun --bun run --cwd {pkg} test"
      )

  for pkg in sampled_downstream:
    commands.append(f"pnpm --dir {pkg} test")

  if analysis.touches_librarian_yaml:
    commands.append("librarian tidy && git diff --exit-code")

  return UnitTestPlan(
      confidence=confidence,
      direct_packages=tuple(direct),
      ci_skipped_packages=tuple(ci_skipped),
      sampled_downstream_packages=tuple(sampled_downstream),
      runs_per_modified_package=runs_per_modified,
      commands=tuple(commands),
  )


def validate_conventional_commit_title(title: str) -> bool:
  """Checks whether a commit/PR title matches CONTRIBUTING.md conventions."""
  cleaned = title.strip()
  if not cleaned or len(cleaned) > 76 or cleaned.endswith("."):
    return False
  return bool(CONVENTIONAL_COMMIT_RE.match(cleaned))


def audit_contributing_style(
    repo_root: pathlib.Path,
    changed_files: Sequence[str],
    commit_titles: Sequence[str] = (),
    commit_bodies: Sequence[str] = (),
) -> StyleAuditReport:
  """Audits changed files and commits against CONTRIBUTING.md guidelines."""
  missing_headers: list[str] = []
  invalid_todos: list[str] = []
  source_exts = (".ts", ".js", ".cjs", ".mjs", ".sh")

  for rel_path in changed_files:
    norm = rel_path.strip().lstrip("./")
    if not norm.endswith(source_exts):
      continue
    if norm.endswith(".d.ts") or "/fixtures/" in norm or "/protos/" in norm:
      continue
    full_path = repo_root / norm
    if not full_path.is_file():
      continue
    try:
      content = full_path.read_text(encoding="utf-8")
    except (OSError, ValueError):
      continue

    if not APACHE_HEADER_RE.search(content[:1200]):
      missing_headers.append(norm)

    for line_num, line in enumerate(content.splitlines(), start=1):
      todo_match = TODO_COMMENT_RE.search(line)
      if todo_match:
        suffix = todo_match.group(1).strip()
        if not VALID_ISSUE_TODO_RE.match(suffix):
          invalid_todos.append(f"{norm}:{line_num}: {line.strip()}")

  invalid_titles: list[str] = []
  for title in commit_titles:
    stripped = title.strip()
    if stripped.startswith((
        STYLE_MAINTENANCE_PREFIX,
        INDEPENDENT_REVIEW_PREFIX,
        ADDRESS_CI_ERRORS_PREFIX,
    )):
      continue
    if not validate_conventional_commit_title(stripped):
      invalid_titles.append(stripped)

  forbidden_aliases: list[str] = []
  for body in commit_bodies:
    for match in FORBIDDEN_ISSUE_ALIAS_RE.finditer(body):
      forbidden_aliases.append(match.group(0))

  passed = not (
      missing_headers or invalid_todos or invalid_titles or forbidden_aliases
  )
  return StyleAuditReport(
      principle=CONTRIBUTING_GUIDELINES_PRINCIPLE,
      references=STYLE_MAINTENANCE_REFERENCES,
      missing_license_headers=tuple(missing_headers),
      invalid_todos=tuple(invalid_todos),
      invalid_commit_titles=tuple(invalid_titles),
      forbidden_issue_aliases=tuple(forbidden_aliases),
      passed=passed,
  )


def validate_passci_commits(
    commit_subjects: Sequence[str],
    require_all_stages: bool = False,
) -> CommitValidationResult:
  """Validates that commits on the branch follow the `/passci` stage order."""
  initial_commits: list[str] = []
  style_commits: list[str] = []
  review_commits: list[str] = []
  ci_error_commits: list[str] = []
  stage_sequence: list[int] = []
  messages: list[str] = []

  for subject in commit_subjects:
    cleaned = subject.strip()
    if not cleaned:
      continue
    if cleaned.startswith(STYLE_MAINTENANCE_PREFIX):
      style_commits.append(cleaned)
      stage_sequence.append(2)
    elif cleaned.startswith(INDEPENDENT_REVIEW_PREFIX):
      review_commits.append(cleaned)
      stage_sequence.append(3)
    elif cleaned.startswith(ADDRESS_CI_ERRORS_PREFIX):
      ci_error_commits.append(cleaned)
      stage_sequence.append(4)
    else:
      initial_commits.append(cleaned)
      stage_sequence.append(1)

  order_valid = stage_sequence == sorted(stage_sequence)
  if not order_valid:
    messages.append(
        "Commit stages are out of order; expected initial change (draft PR) -> "
        f"{STYLE_MAINTENANCE_PREFIX} -> {INDEPENDENT_REVIEW_PREFIX} -> "
        f"{ADDRESS_CI_ERRORS_PREFIX}."
    )

  if not initial_commits:
    messages.append(
        "Missing initial feature/fix commit that opens the draft PR."
    )
  if not style_commits:
    messages.append(f"Missing commit prefixed with {STYLE_MAINTENANCE_PREFIX}.")
  if not review_commits:
    messages.append(
        f"Missing commit prefixed with {INDEPENDENT_REVIEW_PREFIX} addressing"
        " independent Gemini review comments."
    )
  if len(review_commits) > MAX_GEMINI_REVIEW_ROUNDS:
    messages.append(
        f"Found {len(review_commits)} `{INDEPENDENT_REVIEW_PREFIX}` review"
        f" rounds, which exceeds the maximum of {MAX_GEMINI_REVIEW_ROUNDS}"
        " rounds."
    )

  has_all = bool(
      initial_commits
      and style_commits
      and 1 <= len(review_commits) <= MAX_GEMINI_REVIEW_ROUNDS
  )
  if require_all_stages and not ci_error_commits:
    messages.append(
        f"Missing commit prefixed with {ADDRESS_CI_ERRORS_PREFIX}."
    )
    has_all = False

  return CommitValidationResult(
      initial_commits=tuple(initial_commits),
      style_commits=tuple(style_commits),
      review_commits=tuple(review_commits),
      ci_error_commits=tuple(ci_error_commits),
      order_valid=order_valid,
      has_all_required_prefixes=has_all,
      messages=tuple(messages),
  )


def _git_lines(repo_root: pathlib.Path, args: Sequence[str]) -> list[str]:
  """Runs a git command in repo_root and returns non-empty stdout lines."""
  try:
    completed = subprocess.run(
        ["git", *args],
        cwd=str(repo_root),
        check=False,
        capture_output=True,
        text=True,
    )
  except OSError:
    return []
  if completed.returncode != 0:
    return []
  return [
      line.strip() for line in completed.stdout.splitlines() if line.strip()
  ]


def _fetch_pr_gemini_reviews(
    pr_number: int,
    repo: str = DEFAULT_REPO,
) -> GeminiReviewLoopStatus:
  """Queries GitHub via `gh api` for `/gemini review` triggers and bot findings."""
  issue_comments_cmd = [
      "gh",
      "api",
      f"repos/{repo}/issues/{pr_number}/comments",
  ]
  pull_comments_cmd = [
      "gh",
      "api",
      f"repos/{repo}/pulls/{pr_number}/comments",
  ]
  try:
    issue_proc = subprocess.run(
        issue_comments_cmd, check=False, capture_output=True, text=True
    )
    pull_proc = subprocess.run(
        pull_comments_cmd, check=False, capture_output=True, text=True
    )
    issue_json = (
        json.loads(issue_proc.stdout) if issue_proc.returncode == 0 else []
    )
    issue_comments: Sequence[Mapping[str, Any]] = (
        issue_json if isinstance(issue_json, list) else []
    )
    pull_json = (
        json.loads(pull_proc.stdout) if pull_proc.returncode == 0 else []
    )
    pull_comments: Sequence[Mapping[str, Any]] = (
        pull_json if isinstance(pull_json, list) else []
    )
  except (OSError, ValueError):
    return evaluate_gemini_review_round(0, ())

  trigger_timestamps: list[str] = []
  for item in issue_comments:
    if not isinstance(item, Mapping):
      continue
    body = str(item.get("body", "")).strip()
    if GEMINI_REVIEW_TRIGGER_COMMAND in body:
      trigger_timestamps.append(str(item.get("created_at", "")))

  rounds_completed = len(trigger_timestamps)
  last_trigger = trigger_timestamps[-1] if trigger_timestamps else ""

  latest_bodies: list[str] = []
  for comment in pull_comments:
    if not isinstance(comment, Mapping):
      continue
    created_at = str(comment.get("created_at", ""))
    if not last_trigger or created_at >= last_trigger:
      latest_bodies.append(str(comment.get("body", "")))

  return evaluate_gemini_review_round(rounds_completed, latest_bodies)


def discover_monorepo_packages(repo_root: pathlib.Path) -> list[str]:
  """Discovers testable package directories in a google-cloud-node checkout."""
  subdirs = ("packages", "handwritten", "core/packages", "core/dev-packages")
  found: list[str] = []
  for subdir in subdirs:
    base = repo_root / subdir
    if not base.is_dir():
      continue
    for child in sorted(base.iterdir()):
      if child.is_dir() and (child / "package.json").is_file():
        found.append(f"{subdir}/{child.name}")
  return found


def build_summary_dict(
    repo_root: pathlib.Path,
    base_ref: str = DEFAULT_BASE_REF,
    confidence: float = DEFAULT_CONFIDENCE,
    pr_number: int | None = None,
) -> dict[str, Any]:
  """Builds a JSON-serializable verification report for a repository checkout."""
  changed_files = _git_lines(
      repo_root,
      ["diff", "--name-only", "--diff-filter=ACMRT", f"{base_ref}...HEAD"],
  )
  commit_subjects = list(
      reversed(
          _git_lines(repo_root, ["log", f"{base_ref}..HEAD", "--format=%s"])
      )
  )
  commit_bodies = _git_lines(
      repo_root, ["log", f"{base_ref}..HEAD", "--format=%b"]
  )

  ignored_packages: list[str] = []
  ignore_json = repo_root / "ignore.json"
  if ignore_json.is_file():
    try:
      raw_ignore = json.loads(ignore_json.read_text(encoding="utf-8"))
      if isinstance(raw_ignore, dict):
        ignored_val = raw_ignore.get("ignored")
        ignored_packages = (
            [str(x) for x in ignored_val]
            if isinstance(ignored_val, list)
            else []
        )
    except (OSError, ValueError):
      pass

  analysis = classify_changed_files(changed_files, ignored_packages)
  all_packages = discover_monorepo_packages(repo_root)
  test_plan = build_unit_test_plan(
      analysis, all_packages=all_packages, confidence=confidence
  )
  style_report = audit_contributing_style(
      repo_root,
      changed_files,
      commit_titles=commit_subjects[:1],
      commit_bodies=commit_bodies,
  )
  commit_validation = validate_passci_commits(commit_subjects)
  review_status = (
      _fetch_pr_gemini_reviews(pr_number)
      if pr_number is not None
      else evaluate_gemini_review_round(
          len(commit_validation.review_commits), ()
      )
  )

  return {
      "workflow_stages": [
          "1. Produce a code change that does what the user asked",
          (
              "2. Push #1 of 2: Produce a draft PR so the developer can see the"
              " suggested changes"
          ),
          (
              "3. Add local commits prefixed with"
              f" {STYLE_MAINTENANCE_PREFIX}"
              f" ({CONTRIBUTING_GUIDELINES_PRINCIPLE})"
          ),
          (
              f"4. Conduct {INDEPENDENT_REVIEWERS_PER_ROUND} independent Gemini"
              " reviews per round within Jetski and add local commits prefixed"
              f" with {INDEPENDENT_REVIEW_PREFIX} (up to"
              f" {MAX_GEMINI_REVIEW_ROUNDS} times or until no high-priority"
              " issues come up, whatever comes first)"
          ),
          (
              f"5. Verify unit tests pass locally with >= {int(confidence * 100)}%"
              " confidence, add local commits prefixed with"
              f" {ADDRESS_CI_ERRORS_PREFIX} for any CI/test failures, perform"
              f" Push #2 of {MAX_GIT_PUSHES} to push all follow-up commits in a"
              f" single batch, and run {FINAL_PR_GEMINI_REVIEWS} final"
              f" '{GEMINI_REVIEW_TRIGGER_COMMAND}' on the PR to confirm no"
              " outstanding major issues"
          ),
      ],
      "push_budget": {
          "max_pushes": MAX_GIT_PUSHES,
          "push_1": (
              "Initial commit when creating the draft PR (`git push -u origin"
              " <branch>`)"
          ),
          "push_2": (
              "Single batch push after all local"
              f" {STYLE_MAINTENANCE_PREFIX}, {INDEPENDENT_REVIEW_PREFIX}, and"
              f" local {ADDRESS_CI_ERRORS_PREFIX} commits are complete (`git"
              " push`) so GitHub unit tests do not reach their quota"
          ),
          "final_pr_gemini_review": (
              f"Run `{GEMINI_REVIEW_TRIGGER_COMMAND}`"
              f" {FINAL_PR_GEMINI_REVIEWS} time on the PR at the very end to"
              " confirm no outstanding major issues"
          ),
      },
      "analysis": dataclasses.asdict(analysis),
      "style_audit": dataclasses.asdict(style_report),
      "gemini_review_loop": dataclasses.asdict(review_status),
      "unit_test_plan": dataclasses.asdict(test_plan),
      "commit_validation": dataclasses.asdict(commit_validation),
  }


def main(argv: Sequence[str] | None = None) -> int:
  parser = argparse.ArgumentParser(
      description=(
          "Audit and verify google-cloud-node PRs for the passci skill"
          f" ({STYLE_MAINTENANCE_PREFIX}, {INDEPENDENT_REVIEW_PREFIX},"
          f" {ADDRESS_CI_ERRORS_PREFIX})."
      )
  )
  parser.add_argument(
      "--repo-root",
      default=".",
      help="Path to the google-cloud-node repository root.",
  )
  parser.add_argument(
      "--base-ref",
      default=DEFAULT_BASE_REF,
      help="Git base reference to diff against (default: upstream/main).",
  )
  parser.add_argument(
      "--confidence",
      type=float,
      default=DEFAULT_CONFIDENCE,
      help="Target statistical unit test confidence in (0, 1) (default: 0.95).",
  )
  parser.add_argument(
      "--pr",
      type=int,
      default=None,
      help=(
          "Optional GitHub pull request number to inspect"
          f" `{GEMINI_REVIEW_TRIGGER_COMMAND}` status."
      ),
  )
  parser.add_argument(
      "--mode",
      "--action",
      dest="mode",
      choices=(
          "audit",
          "check-reviews",
          "verify-ci",
          "verify-commits",
          "summary",
          "plan",
      ),
      default="audit",
      help=(
          "Execution mode: audit CONTRIBUTING.md style, check reviews, verify"
          " CI test plan, or verify commit prefixes"
          f" ({STYLE_MAINTENANCE_PREFIX}, {INDEPENDENT_REVIEW_PREFIX},"
          f" {ADDRESS_CI_ERRORS_PREFIX})."
      ),
  )
  args = parser.parse_args(argv)

  repo_root = pathlib.Path(args.repo_root).resolve()
  report = build_summary_dict(
      repo_root,
      base_ref=args.base_ref,
      confidence=args.confidence,
      pr_number=args.pr,
  )
  print(json.dumps(report, indent=2))
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
