import './planner.css';

// import the markdown module 
var md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify:true

});

// mutation observer syntax sugar
var arrive = require ('arrive'); 

// watch for this element to exist then add markdown
document.arrive(".description-hyperlinks.isDialogStyle", function() {

    let note = document.querySelector('.description-hyperlinks.isDialogStyle');

    let text = note.innerText;
    let result = md.render(`${text}`);
    note.innerHTML = result;

});