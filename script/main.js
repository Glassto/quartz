var getLocation = document.getElementsByClassName("location-guide");
var nav = document.getElementsByClassName("nav-background");
var presentation = document.getElementsByClassName("presentation");
console.log(presentation[0])

window.onscroll = function() {
  if(window.scrollY > nav[0].offsetTop) {
    nav[0].classList.add("sticky");
    presentation[0].classList.add("sticky");
  } else {
    nav[0].classList.remove("sticky");
    presentation[0].classList.remove("sticky");
  }
}