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

function init() {
  // Adding some default text to give the user a better
  // idea of what they can do
  const defaultText = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>

<p>This let's you see how the page would update <span style="color: blue">if you give the user control of the page.</span></p>

You can even make lists:

<ul>
  <li>This is the first item</li>
  <li>This is the second item</li>
</ul>
`;

  // Update both the value and innerHTML so that they
  // are matching and everything stays in sync
  editor.value = defaultText;
  preview.innerHTML = defaultText;
}

window.onload = init;
