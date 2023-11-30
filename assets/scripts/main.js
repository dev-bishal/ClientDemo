var menuBtn = document.querySelector(".menuButton");
var responsiveMenu = document.querySelector(".mobileNav");
var lightboxContainer = document.querySelector(".lightbox");

menuBtn.addEventListener("click", ()=>{
    responsiveMenu.classList.toggle("active");
});

function triggerLightBox(component){
    lightboxContainer.classList.toggle("hidden");
    lightboxContainer.classList.toggle("flex");

    document.querySelector(".modalContent.form").classList.add("flex");
    document.querySelector(".modalContent.form").classList.remove("hidden");
}