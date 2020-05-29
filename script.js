"use strict"; // <- always enable this when using Vanilla JavaScript

// 1. Get the nodes so that we can modify them later
// The "editor" and "preview" strings inside getElementById
// should match the ids in the HTML
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// 2. I used the "input" event so that anytime text is
// added, it will run the updatePreview function
editor.addEventListener("input", updatePreview);

// 3. We create the updatePreview function so that it
// can be used in the event listener
function updatePreview(e) {
  // We are using innerHTML here instead of innerText or textContent
  // since we want the user to be able to type HTML in the editor.

  // e is short for "event" since that is what is automatically
  // passed to any function in an eventListener
  // the "value" from e.target.value is whatever is inside the editor
  // aka the textarea with the id of editor
  preview.innerHTML = e.target.value;
}
