const links = document.querySelectorAll(".style-li-navbar-header");
const nav = document.getElementById("navbar-header");
// console.log(links);

icons.addEventListener("click", () => {
    nav.classList.toggle("Active");
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("Active");
    });
});