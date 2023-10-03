const fs = require('fs').promises;
const path = require('path');
const JSZip = require('jszip');

async function main() {
    // Minify and copy the CSS file
    const sourceCSS = './planner.css';
    const destinationCSS = './dist/planner.css';
    await copyFile(sourceCSS, destinationCSS);
    console.log("CSS copied and minified");

    // Copy the manifest file
    const sourceManifest = './manifest.json';
    const destinationManifest = './dist/manifest.json';
    await copyFile(sourceManifest, destinationManifest);
    console.log("Manifest copied");

    // Zip all files in the 'dist' folder
    await zipDirectory('./dist', 'dist.zip');
    console.log("dist.zip ready");
}

async function copyFile(sourcePath, destinationPath) {
    try {
        const destinationDir = path.dirname(destinationPath);
        await fs.mkdir(destinationDir, { recursive: true });
        await fs.copyFile(sourcePath, destinationPath);
    } catch (err) {
        console.error(`Error copying ${sourcePath} to ${destinationPath}: ${err}`);
    }
}

async function zipDirectory(sourceDir, zipFileName) {
    try {
        const zip = new JSZip();
        const files = await fs.readdir(sourceDir);
        for (const file of files) {
            const filePath = path.join(sourceDir, file);
            const fileData = await fs.readFile(filePath);
            zip.file(file, fileData);
        }
        const zipData = await zip.generateAsync({ type: 'nodebuffer' });
        await fs.writeFile(zipFileName, zipData);
    } catch (err) {
        console.error(`Error zipping directory ${sourceDir}: ${err}`);
    }
}

main().catch(console.error);
