

let checkbox = document.querySelector("#menu-state");
let modal = document.querySelector(".modal");
let header = document.querySelector("header");
let body = document.querySelector("body");

checkbox.addEventListener("change", ({target}) => {
    let menuOpen = target.checked;
    modal.style.visibility = menuOpen ? "visible" : "hidden";
    modal.style.opacity = + target.checked;
    header.style.position = menuOpen? "fixed" : "absolute";
    body.scroll = menuOpen;
    body.style.overflowY = menuOpen? "hidden" : "scroll";
});