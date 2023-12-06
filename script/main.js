const nav = document.querySelector('body > .nav-background');
const presentation = document.querySelector('body > .presentation');
const showFoodList = document.querySelectorAll('.foods');
const rotateArrow = document.querySelectorAll('.arrow');
const focusOnIcon = document.querySelectorAll('.category-name-ico');
const focusOnText = document.querySelectorAll('.category-name-text');
const focusOnBox = document.querySelectorAll('.category-name');
const reviewBoxes = document.querySelectorAll('.review-box');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');

function addClass (element1, className) {
  element1.classList.add(className);
}
function removeClass (element1, className) {
  element1.classList.remove(className);
}

window.onscroll = () => {
   window.scrollY > nav.offsetTop ? addClass (nav, "sticky") : removeClass (nav,  "sticky");
   window.scrollY > nav.offsetTop ? addClass (presentation, "sticky") : removeClass (presentation,  "sticky");
}



function checkWhichCategory(menuList) {
  rotate(menuList);
  focus(menuList);
}
function rotate(nodeList) {
  rotateArrow[nodeList].classList.toggle("rotate");
}
function focus(nodeList) {
  focusOnIcon[nodeList].classList.toggle("focus-icon");
  focusOnText[nodeList].classList.toggle("focus-text");
  focusOnBox[nodeList].classList.toggle("focus-box");
  showFoodList[nodeList].classList.toggle("hidden");
}


let visibleBox = 0;
function showBoxes(index) {
  reviewBoxes.forEach(item => {
    item.style.display = 'none';
  })
  reviewBoxes[index].style.display = 'flex';
}
function nextBox() {
  if (visibleBox >= 0 && visibleBox < reviewBoxes.length - 1) {
    visibleBox += 1;
    showBoxes(visibleBox);
    prevButton.style.display = "block"
  } else {
    visibleBox = 0;
    showBoxes(visibleBox);
  }
}
function prevBox() {
  if (visibleBox > 0) {
    visibleBox -= 1;
    showBoxes(visibleBox);
    nextButton.style.display = "flex"
  } else {
    visibleBox = reviewBoxes.length - 1;
    showBoxes(visibleBox)
  }
}

showBoxes(visibleBox);