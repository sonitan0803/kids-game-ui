import getReleasePlan from "@changesets/get-release-plan";
import fs from "fs";
import path from "path";

async function generateChangelog() {
    try {
        // 現在の作業ディレクトリを確認
        console.log("Current working directory:", process.cwd());

        // Get release plan (get all packages' version changes)
        const plan = await getReleasePlan(".", { snapshot: false });

        // デバッグ: planの内容をログに出力
        console.log("Release plan:", plan.releases);

        // releases を使用
        const releases = plan.releases;

        if (!releases || !Array.isArray(releases)) {
            console.error("Error: 'releases' is not an array or is undefined");
            process.exit(1);
        }

        // Prepare changelog text
        let changelog = `# Release Notes for ${new Date().toISOString()}\n\n`;

        releases.forEach(
            ({ name, type, changesets, oldVersion, newVersion }) => {
                changelog += `## ${name} (${type})\n`;
                changelog += `- Version change: ${oldVersion} → ${newVersion}\n`;
                changesets.forEach((change) => {
                    changelog += `- ${change.summary}\n`;
                });
                changelog += "\n";
            }
        );

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
