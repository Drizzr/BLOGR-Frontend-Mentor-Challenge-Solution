const navbar = document.getElementById("navbar");
const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body")
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");


window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.style.backgroundImage = "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))";
    } else {
        navbar.style.backgroundImage = "none";
    }
};

btnHamburger.addEventListener("click", function() {
    if(header.classList.contains("open")) {
        body.style.overflowY = "scroll";
        header.classList.remove("open");
        fadeElems.forEach(function(item) {
            item.classList.remove("fade-in");
            item.classList.add("fade-out");
        });
    } else {
        body.style.overflowY = "hidden";
        header.classList.add("open");
        fadeElems.forEach(function(item) {
            item.classList.remove("fade-out");
            item.classList.add("fade-in");
        });
    }
});
