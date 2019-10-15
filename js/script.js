var mobile_btn = document.querySelector("#mobile_btn");

function toggleMenu() {
    var mobile_menu = document.querySelector("header nav:nth-child(2)");

    mobile_menu.classList.toggle("show");
}

mobile_btn.addEventListener('click', toggleMenu, false);
