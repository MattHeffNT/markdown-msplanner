// fs is file system
const fs = require('fs')
fs.copyFile('./planner.css', './dist/planner.css', (err) => {
    if (err) throw err;
    console.log("files copied");
})