// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** smooth scroll ************
const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".nav-link");
const navToggle = document.querySelector(".navbar-toggler");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    console.log('hola')
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            // position = position - navHeight;
            position = position;
        }
        if (navHeight > 50) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // close
        linksContainer.style.height = 20;
    });
});