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


const arrow = document.querySelectorAll('.arrow0, .arrow1, arrow2');
console.log(arrow)
function checkWhichArrow(typeOfCategory) {
  if (typeOfCategory === "Breakfast") {
    rotate(0);
  } else if (typeOfCategory === "Burger") {
    rotate(1);
  } else if (typeOfCategory === "Main Course") {
    rotate(2)
  }
}
function rotate(nodeList) {
  arrow[nodeList].classList.toggle("rotate");
}

