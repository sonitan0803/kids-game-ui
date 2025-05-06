import { getReleasePlan } from "@changesets/get-release-plan";
import fs from "fs";
import path from "path";

async function generateChangelog() {
    try {
        // Get release plan (get all packages' version changes)
        const plan = await getReleasePlan(".", undefined, { snapshot: false });

        // Prepare changelog text
        let changelog = `# Release Notes for ${new Date().toISOString()}\n\n`;

        plan.forEach(({ name, type, changes }) => {
            changelog += `## ${name} (${type})\n`;
            changes.forEach((change) => {
                changelog += `- ${change.summary}\n`;
            });
            changelog += "\n";
        });

        // Write the changelog to a file
        fs.writeFileSync(
            path.join(__dirname, "../release-notes.txt"),
            changelog
        );
        console.log("Changelog generated successfully!");
    } catch (error) {
        console.error("Error generating changelog:", error);
        process.exit(1);
    }
}

generateChangelog();
