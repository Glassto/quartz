function addClass (element1, className) {
  element1.classList.add(className);
}
function removeClass (element1, className) {
  element1.classList.remove(className);
}
const sidemenu = document.getElementById('js-side-menu');
window.onscroll = () => {
  const nav = document.querySelector('body > .nav-background');
  const presentation = document.querySelector('body > .presentation');

   window.scrollY > nav.offsetTop ? addClass (nav, "sticky") : removeClass (nav,  "sticky");
   window.scrollY > nav.offsetTop ? addClass (presentation, "sticky") : removeClass (presentation,  "sticky");
   window.scrollY > nav.offsetTop ? addClass (sidemenu, "sticky") : removeClass (sidemenu, "sticky")
}
function openSideMenu() {
  sidemenu.classList.toggle("open")
}
onclickScroll = (object) => {
  object === 'menu' ? element = document.getElementById('js-menu-section') : element = document.getElementById('js-review-section');

  let navbarOffset = 50;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.scrollY - navbarOffset;

  window.scrollTo({
    top: offsetPosition,
  });
}


function checkWhichCategory(menuList) {
  rotate(menuList);
  focus(menuList);
}
function rotate(nodeList) {
  const rotateArrow = document.querySelectorAll('.arrow');
  rotateArrow[nodeList].classList.toggle("rotate");
}
function focus(nodeList) {
  const focusOnIcon = document.querySelectorAll('.category-name-ico');
  const focusOnText = document.querySelectorAll('.category-name-text');
  const focusOnBox = document.querySelectorAll('.category-name');
  const showFoodList = document.querySelectorAll('.foods');

  focusOnIcon[nodeList].classList.toggle("focus-icon");
  focusOnText[nodeList].classList.toggle("focus-text");
  focusOnBox[nodeList].classList.toggle("focus-box");
  showFoodList[nodeList].classList.toggle("hidden");
}


const reviewBoxes = document.querySelectorAll('.review-box');
function showBoxes(index) {
  reviewBoxes.forEach(item => {
    item.style.display = 'none';
  })
  reviewBoxes[index].style.display = 'flex';
}
let visibleBox = 0;
function nextBox() {
  if (visibleBox >= 0 && visibleBox < reviewBoxes.length - 1) {
    visibleBox += 1;
    showBoxes(visibleBox);
  } else {
    visibleBox = 0;
    showBoxes(visibleBox);
  }
}
function prevBox() {
  if (visibleBox > 0) {
    visibleBox -= 1;
    showBoxes(visibleBox);
  } else {
    visibleBox = reviewBoxes.length - 1;
    showBoxes(visibleBox)
  }
}
showBoxes(visibleBox);

function openDropdown() {
  const reviewOptions = document.getElementsByClassName('dropdown-content');
  let i;
  for (i=0; i<=reviewOptions.length; i++) {
    reviewOptions[i].classList.toggle('show');
  }
}
