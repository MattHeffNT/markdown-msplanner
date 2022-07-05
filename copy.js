const minify = require('@node-minify/core');
const yui = require('@node-minify/yui');
const JSZip = require('jszip')
const fs = require('fs')
const zip = new JSZip();

// Using Google Closure Compiler
minify({
    compressor: yui,
    input: './planner.css',
    output: './planner.css',
    type: 'css',
    callback: function (err, min) {
        if (err) console.log(err);
    }
});

// copy css file to the dist folder 
fs.copyFile('./planner.css', './dist/planner.css', (err) => {
    if (err) throw err;
    console.log("files copied");
})

// zip all the files in dist folder then create zip file
const path = './dist'
async function ls() {
    const dir = await fs.promises.opendir(path)
    for await (const dirent of dir) {
        zip.file(dirent.name, `${dirent.name}`)
    }
    zip
        .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('dist.zip'))
        .on('finish', function () {
            // JSZip generates a readable stream with a "end" event,
            // but is piped here in a writable stream which emits a "finish" event.
            console.log("...dist.zip ready");
        });

}

ls('.').catch(console.error)