const { promises: fs } = require("fs");
const path = require("path");


async function main() {
    const readmeTemplate = (
        await fs.readFile(path.join(process.cwd(), "./README.template.md"))
    ).toString("utf-8");


    const readme = readmeTemplate

    await fs.writeFile("README.md", readme);
}

main();
