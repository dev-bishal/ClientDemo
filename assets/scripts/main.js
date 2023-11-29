var menuBtn = document.querySelector(".menuButton");
var responsiveMenu = document.querySelector(".mobileNav");

menuBtn.addEventListener("click", ()=>{
    responsiveMenu.classList.toggle("active");
});