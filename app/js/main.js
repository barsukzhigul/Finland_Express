const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".header__menu-hamburger")
const xIcon = document.querySelector(".xIcon")
const menuIcon = document.querySelector(".ham")

hamburger.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

const menuLinks = document.querySelectorAll(".hamburgerLink")

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)