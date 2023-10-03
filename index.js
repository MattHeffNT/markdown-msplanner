import './planner.css';

// import the markdown module 
const md = require('markdown-it')({
  // html: true,
  breaks: true,
  linkify: true
});

//planner markdown extension Icons made by https://www.flaticon.com/authors/prosymbols"Prosymbols from "https://www.flaticon.com/


// mutation observer syntax sugar
const arrive = require('arrive');

// watch for this element to exist then add markdown
document.arrive(".editor-container.css-430", function() {

  // The note container where comments 
  let note = document.querySelector('.notes-editor');
  let text = note.innerText;
  let result = md.render(`${text}`);
  note.innerHTML = result;
});
