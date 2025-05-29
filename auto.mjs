import c from "node:child_process";

// CONFIG BEGIN
const SELF_ID = "d-goog";
const ACTION_DELAY_MS = 5000;
// Approved Logins and in perferred merge order
const PR_AUTHORS = [
  "renovate-bot",
  "yoshi-code-bot",
  "app/gcf-owl-bot",
  // "app/owlbot-bootstrapper", // optional - sometimes require manual work anyway - TODO: consider skipping any tests not yet ready (maybe option)?
  "app/release-please",
];
// CONFIG END

async function gatherPRs() {
  const res = c.execFileSync(
    "gh",
    [
      "pr",
      "list",
      "--json=number,title,author,state,mergeable,mergeStateStatus,reviews,updatedAt,url",
    ],
    {
      encoding: "utf-8",
    }
  );

  function filterPRs(pr = {}) {
    if (!PR_AUTHORS.includes(pr.author.login)) {
      console.log("- skipping pr (author):", pr);
      return false;
    }

    if (pr.labels?.length) {
      for (const label of pr.labels) {
        if (label.name === "do not merge") {
          console.log("- skipping pr (do not merge):", pr);
          return false;
        }
      }
    }

    if (pr.state !== "OPEN") {
      console.log("- skipping pr (state):", pr);
      return false;
    }

    if (pr.mergeable !== "MERGEABLE") {
      console.log("- skipping pr (not mergeable):", pr);
      return false;
    }

    return true;
  }

  function sortPRs(a = {}, b = {}) {
    // sort PRs in preferred order by author
    PR_AUTHORS.indexOf(a.author.login) - PR_AUTHORS.indexOf(b.author.login);
  }

  return JSON.parse(res).filter(filterPRs).sort(sortPRs);
}

async function approvePRs(prs = []) {
  for (const pr of prs) {
    if (pr.reviews?.map((review) => review.author.login).includes(SELF_ID)) {
      continue;
    }

    const res = c.execFileSync(
      "gh",
      ["pr", "review", "--approve", `${pr.number}`],
      {
        encoding: "utf-8",
      }
    );

    console.log("- Approved PR", { pr, res });

    // wait, to avoid rate-limit
    await new Promise((res) => setTimeout(res, ACTION_DELAY_MS));
  }
}

async function mergePRs(prs = []) {
  // TODO: approve test run (if necessary), await tests, merge from main, and merge PRs
}

async function main() {
  // gather, filter, and sort PRs
  console.log("Gathering PRs...");
  const prs = await gatherPRs();
  console.log("Finished gathering prs");
  console.dir({ prs }, { depth: 10 });

  // approve PRs
  console.log("Approving PRs...");
  await approvePRs(prs);
  console.log("Finished approving prs");

  // merge PRs
  console.log("Merging PRs...");
  await mergePRs(prs);
  console.log("Finished approving prs");

  console.log("Done.");
}

await main();
