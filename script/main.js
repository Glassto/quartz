const nav = document.querySelector('body > .nav-background');
const presentation = document.querySelector('body > .presentation');

const showFoodList = document.querySelectorAll('.foods')
console.log(showFoodList)
const rotateArrow = document.querySelectorAll('.arrow');
const focusOnIcon = document.querySelectorAll('.category-name-ico');
const focusOnText = document.querySelectorAll('.category-name-text');
const focusOnBox = document.querySelectorAll('.category-name')

function addClass (element1, element2, className) {
  element1.classList.add(className);
  element2.classList.add(className)
}
function removeClass (element1, element2, className) {
  element1.classList.remove(className);
  element2.classList.remove(className);
}
window.onscroll = () => {
  window.scrollY > nav.offsetTop ? addClass (nav, presentation, "sticky") : removeClass (nav, presentation, "sticky");
}

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
  showFoodList[nodeList].classList.toggle("hidden")
}