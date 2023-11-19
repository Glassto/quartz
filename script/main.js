const nav = document.getElementsByClassName("nav-background");
const presentation = document.getElementsByClassName("presentation");

window.onscroll = function() {
  if(window.scrollY > nav[0].offsetTop) {
    nav[0].classList.add("sticky");
    presentation[0].classList.add("sticky");
  } else {
    nav[0].classList.remove("sticky");
    presentation[0].classList.remove("sticky");
  }
}


const rotateArrow = document.querySelectorAll('.arrow');
const focusOnIcon = document.querySelectorAll('.category-name-ico');
const focusOnText = document.querySelectorAll('.category-name-text');
const focusOnBox = document.querySelectorAll('.category-name')
const category = {
  "Breakfast": 0,
  "Burger": 1,
  "Main Course": 2,
  "Paste": 3,
  "Salate": 4,
  "Garnituri": 5,
  "Sosuri": 6
};


function checkWhichCategory(typeOfCategory) {
  const categoryIndex = category[typeOfCategory];
  if (categoryIndex !== undefined);
  rotate(categoryIndex);
  focus(categoryIndex);
}
function rotate(nodeList) {
  rotateArrow[nodeList].classList.toggle("rotate");
}
function focus(nodeList) {
  focusOnIcon[nodeList].classList.toggle("focus-icon");
  focusOnText[nodeList].classList.toggle("focus-text");
  focusOnBox[nodeList].classList.toggle("focus-box");
}