// scripts/get-changelog.js
const { getReleasePlan } = require("@changesets/get-release-plan");
const fs = require("fs");

(async () => {
    const plan = await getReleasePlan(".", undefined, { snapshot: false });

    if (!plan || plan.releases.length === 0) {
        console.log("No releases found.");
        process.exit(0);
    }

    const body = plan.releases
        .map((release) => {
            return `### ${release.name}@${release.newVersion}\n\n${release.changelog ?? "*No changelog entry.*"}`;
        })
        .join("\n\n");

    fs.writeFileSync("release-notes.txt", body);
})();
