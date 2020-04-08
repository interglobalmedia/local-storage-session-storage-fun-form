// background color related variables
let bgColorInput = document.querySelector("#bgcolor");
// background related variable
let htmlElem = document.querySelector("html");
// font color related variables
let fontColorInput = document.querySelector("#fontcolor");
let pElem = document.querySelector("p");
// font style related variables
let fontStyleSelect = document.querySelector("#font");
let fontStyleElem = document.querySelector(".font-style");
// image related variables
let imageSrcSelect = document.querySelector("#image");
let imageElem = document.querySelector("img");
// textarea related variables
let textAreaElem = document.querySelector("textarea");
let textAreaInput = document.querySelector("#textArea");
let noteBtn = document.querySelector("#note-btn");
let getNoteBtn = document.querySelector("#get-note-btn");

noteBtn.addEventListener("click", () => {
  localStorage.setItem("note", document.querySelector("#textArea").value);
});

getNoteBtn.addEventListener("click", () => {
  localStorage.getItem("note", document.querySelector("#textArea").value);
  document.querySelector("#textArea").value = localStorage.getItem("note");
});

if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("fontfamily", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
  localStorage.setItem("fontcolor", document.querySelector("#fontcolor").value);
  localStorage.setItem("note", document.querySelector("#textArea").value);
  setStyles();
}

function setStyles() {
  let currentBgColor = localStorage.getItem("bgcolor");
  let currentFont = localStorage.getItem("fontfamily");
  let currentImage = localStorage.getItem("image");
  let currentFontColor = localStorage.getItem("fontcolor");

  document.getElementById("bgcolor").value = currentBgColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;
  document.getElementById("fontcolor").value = currentFontColor;
  document.querySelector(".font-color").value = currentFontColor;

  htmlElem.style.backgroundColor = currentBgColor;
  pElem.style.fontFamily = currentFont;
  fontStyleElem.style.color = currentFontColor;
  imageElem.setAttribute("src", currentImage);
}

// listen for change in background color input field
bgColorInput.addEventListener("change", populateStorage);
// listen for change in font color input field
fontColorInput.addEventListener("change", populateStorage);
// listen cor change in selection of font style
fontStyleSelect.addEventListener("change", populateStorage);
// listen for change in image selection
imageSrcSelect.addEventListener("change", populateStorage);
// listen for changes in the textarea element
textAreaInput.addEventListener("change", populateStorage);
