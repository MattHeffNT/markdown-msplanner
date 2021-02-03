// import the markdown module 
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();

// mutation observer syntax sugar
var arrive = require ('arrive') 

// watch for this element to exist then add markdown
document.arrive(".description-hyperlinks.isDialogStyle", function() {
    // 'this' refers to the newly created element
    
    var note = document.querySelector('.description-hyperlinks.isDialogStyle');


    // could probably add seperate attached style sheet for all the styling we want to do here.
    note.style = "list-style: unset;padding-left: 25px;"

    
    var text = note.innerText;
    var result = md.render(`${text}`);
    note.innerHTML = result;

});


// export async function render () {


// }