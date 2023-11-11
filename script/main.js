var getLocation = document.getElementsByClassName("location-guide");
var nav = document.getElementsByClassName("nav-background");
console.log(getLocation[0].offsetTop)

window.onscroll = function() {
  if(window.scrollY > getLocation[0].offsetTop) {
    nav[0].classList.add("sticky");
  } else {
    nav[0].classList.remove("sticky");
  }
}