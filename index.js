import './planner.css';

// import the markdown module 
var md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify:true

});

console.log ("hello world")
// mutation observer syntax sugar
var arrive = require ('arrive'); 

// watch for this element to exist then add markdown
document.arrive(".description-hyperlinks.isDialogStyle", function() {

    // 'this' refers to the newly created element
    
    let note = document.querySelector('.description-hyperlinks.isDialogStyle');

    // could probably add seperate attached style sheet for all the styling we want to do here.
    // note.style = "list-style: unset;padding-left: 25px;"

    let text = note.innerText;
    let result = md.render(`${text}`);
    note.innerHTML = result;

});